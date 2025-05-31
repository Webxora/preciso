"use client";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";

type DateTimeProp = {
    form: any;
    name: string;
    label?: string;
    setHasSelectedDate: React.Dispatch<React.SetStateAction<boolean>>;
};

export function FormCalendar({
    form,
    name,
    label,
    setHasSelectedDate,
}: DateTimeProp) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                const selectedDate = field.value ? new Date(field.value) : null;
                return (
                    <FormItem className="flex flex-col">
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Calendar
                                mode="single"
                                selected={selectedDate ?? undefined}
                                onSelect={(d) => {
                                    if (!d) setHasSelectedDate(false);
                                    field.onChange(d);
                                }}
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
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}
