import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

type InputProp = {
    form: any;
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    description?: string;
}

export default function FormInput({ form, name, label, placeholder = "", type = "text", description = "" }: InputProp) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}