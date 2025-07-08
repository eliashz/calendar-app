'use client'

import { eventFormSchema } from "@/schema/events"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form"
import z from "zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Switch } from "@radix-ui/react-switch"

export default function EventForm({ 
    event, 
}: {
    event?: {
        id: string
        name: string
        description?: string
        durationInMinutes: number
        isActive: boolean
    }
}) {
     const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: event ? { ...event } :
        { isActive: true, durationInMinutes: 30, description: '', name: ''}
     })
    
    return (
        <Form { ...form }>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-6 flex-col"
            >
                {form.formState.errors.root && (
                <div className="text-destructive text-sm">
                    {form.formState.errors.root.message}
                </div>
                )}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                            <Input { ...field}/>
                        </FormControl>
                        <FormDescription>
                            The name users will see when booking
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="durationInMinutes"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Duration Name</FormLabel>
                        <FormControl>
                            <Input type="number" { ...field}/>
                        </FormControl>
                        <FormDescription>In minutes</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea className="resize-none h-32" {...field}/>
                        </FormControl>
                        <FormDescription>Optional description of the event</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="isActive"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center gap-2">   
                                <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                                </FormControl>
                                <FormLabel>Active</FormLabel>
                            </div>
                            <FormDescription>
                                Inactive events will not be visible for users to book
                            </FormDescription>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}