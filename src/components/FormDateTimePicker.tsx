"use client";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, setHours, setMinutes } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

type DateTimeProp = {
    form: any;
    name: string;
    label: string;
    description?: string;
};

const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const ampm = i < 12 ? "AM" : "PM";
    return {
        label: `${hour}:00 ${ampm}`,
        value: i,
    };
});

export function FormDateTimePicker({
    form,
    name,
    label,
    description = "",
}: DateTimeProp) {

    // const handleBooked = () => {

    // }

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                const selectedDate = field.value ? new Date(field.value) : null;

                const handleTimeSelect = (hour: number) => {
                    if (!selectedDate) return;
                    const updatedDate = setMinutes(setHours(selectedDate, hour), 0);
                    field.onChange(updatedDate);
                };

                return (
                    <FormItem className="flex flex-col">
                        <FormLabel>{label}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            'w-full justify-start text-left font-normal border',
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {field.value ? (
                                            format(field.value, "PPP p")
                                        ) : (
                                            <span>Pick a date and time</span>
                                        )}
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="flex gap-4 w-auto p-4" align="start">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate ?? undefined}
                                    onSelect={field.onChange}
                                    disabled={(d) => {
                                        const now = new Date();
                                        const todayStart = new Date(
                                            now.getFullYear(),
                                            now.getMonth(),
                                            now.getDate()
                                        );
                                        return d < todayStart;
                                    }}
                                    initialFocus
                                />
                                <div className="flex flex-col gap-1 max-h-[280px] overflow-y-auto pr-2">
                                    {timeOptions.map((t) => (
                                        <Button
                                            key={t.value}
                                            variant="ghost"
                                            size="sm"
                                            className={cn(
                                                "justify-start",
                                                selectedDate?.getHours() === t.value &&
                                                "bg-primary text-white"
                                            )}
                                            onClick={() => handleTimeSelect(t.value)}
                                        // disabled={true}
                                        >
                                            {t.label}
                                        </Button>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                        <FormDescription>{description}</FormDescription>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}
