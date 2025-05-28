"use client";

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { DateTimePicker } from "./ui/DateTimePicker";

type DateTimeProp = {
    form: any;
    name: string;
    label: string;
    description?: string;
}

export function FormDateTimePicker({ form, name, label, description = "" }: DateTimeProp) {
    
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <DateTimePicker hourCycle={12} {...field} granularity="minute" />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}