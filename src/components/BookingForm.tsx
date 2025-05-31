import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { z } from 'zod';
import FormInput from "./FormInput";
import { Button } from "./ui/button";
import FormTextarea from "./FormTextarea";
import { toast } from "sonner";
import { format, setHours, setMinutes } from "date-fns";
import { useState } from "react";
import { FormCalendar } from "./FormCalendar";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { createBooking } from "@/api/v1/bookings";
import { Clock, Loader2 } from "lucide-react";
import { useBookings } from "@/context/bookings-context";

type MyModalProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(1),
    email: z.string({ required_error: "Enter a valid email" }).email(),
    schedule: z.date({ required_error: "A booking schedule is required", }),
    message: z.string().optional(),
});

const timeOptions = Array.from({ length: 10 }, (_, i) => {
    const hour24 = i + 9; // 9 to 17
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    const ampm = hour24 < 12 ? "AM" : "PM";
    return {
        label: `${hour12}:00 ${ampm}`,
        value: hour24,
    };
});

export default function BookingForm({ setIsOpen }: MyModalProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // schedule: new Date(),
        }
    });

    const [hasSelectedDate, setHasSelectedDate] = useState<boolean>(false);
    const { bookings, isLoading, error, refetch } = useBookings();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong.</p>;

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            data.message = data.message ? data.message : '';
            const { message } = await createBooking(data);
            toast.success(message)
            setIsOpen(false);
            refetch();
        } catch (err) {
            // toast.error(err?.response?.data.message);
            console.error(err);
        }
    }

    const handleTimeSelect = (hour: number) => {
        const selectedDate = form?.watch("schedule");
        if (!selectedDate) return;
        const updatedDate = setMinutes(setHours(selectedDate, hour), 0);
        form.setValue("schedule", updatedDate);
    };

    const handleActiveBooking = (hour: number): boolean => {
        const selectedDate = form?.watch("schedule");
        if (!selectedDate) return false;
        const updatedDate = setMinutes(setHours(selectedDate, hour), 0);
        const isTaken = bookings?.some(
            (item) => new Date(item.schedule).getTime() === updatedDate.getTime()
        );

        return isTaken ?? false;
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="sm:col-span-2">
                    <Label>Schedule</Label>
                    <div className="grid sm:grid-cols-2">
                        <FormCalendar form={form} name="schedule" setHasSelectedDate={setHasSelectedDate} />
                        <div className="space-y-3">
                            <div className="flex justify-center">
                                <Label>
                                    {form.watch("schedule")
                                        ? format(form.watch("schedule"), "PPP")
                                        : "Please select a date"
                                    }
                                </Label>
                            </div>
                            <Button
                                className="w-full text-center rounded-[5px]"
                                disabled={form.watch("schedule") ? false : true}
                                onClick={() => setHasSelectedDate(!hasSelectedDate)}
                                type="button"
                            >
                                <Clock />
                                Pick a time
                            </Button>
                            {hasSelectedDate && (
                                <div className="grid w-full grid-cols-2 gap-2 mt-3">
                                    {timeOptions.map((t) => (
                                        <Button
                                            key={t.value}
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className={cn(
                                                "justify-center rounded-[5px]",
                                                form?.watch("schedule")?.getHours() === t.value &&
                                                "bg-primary text-white"
                                            )}
                                            onClick={() => handleTimeSelect(t.value)}
                                            disabled={handleActiveBooking(t.value)}
                                        >
                                            {t.label}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <FormInput form={form} name="name" label="Name" placeholder="Enter your name" />
                <FormInput form={form} name="email" label="Email" placeholder="you@example.com" type="email" />
                <div className="sm:col-span-2">
                    <FormTextarea form={form} name="message" label="Message (Optional)" placeholder="Add any notes" />
                </div>
                <div className="sm:col-span-2 flex justify-end">
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Please wait
                            </>
                        ) : " Book Meeting"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}