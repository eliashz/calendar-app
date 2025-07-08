'use client'

import { eventFormSchema } from "@/schema/events"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

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
}