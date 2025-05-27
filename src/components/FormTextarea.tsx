import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";

type TextareaProp = {
    form: any;
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
}

export default function FormTextarea({ form, name, label, placeholder = "", description = "" }: TextareaProp) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder={placeholder}
                            className="resize-none"
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}