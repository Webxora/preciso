import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { z } from 'zod';
import { FormDateTimePicker } from "./FormDateTimePicker";
import FormInput from "./FormInput";
import { Button } from "./ui/button";
import FormTextarea from "./FormTextarea";

const formSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(1),
    email: z.string({ required_error: "Enter a valid email" }).email(),
    dateTime: z.date({
        required_error: "A booking schedule is required",
    }),
    message: z.string().optional(),
});

export default function BookingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6 pb-6">
                <FormInput form={form} name="name" label="Name" placeholder="Enter your name" />
                <FormInput form={form} name="email" label="Email" placeholder="Enter your email address" type="email" />
                <FormDateTimePicker form={form} name="dateTime" label="Date and Time" description="Please select your preferred date and time." />
                <FormTextarea form={form} name="message" label="Message (Optional)" />
                <div className="flex justify-end gap-2 pt-2">
                    <Button type="submit">Book Meeting</Button>
                </div>
            </form>
        </Form>
    )
}