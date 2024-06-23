"use client"

import { FC, HTMLAttributes, useState, FormEvent } from 'react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { nanoid } from 'nanoid'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


interface EditPromptProps {
}

export const EditPrompt: FC<EditPromptProps> = ({ }) => {


    const FormSchema = z.object({
        prompt: z
            .string()
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    },
    )

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const prompt = new FormData(event.currentTarget)
            const id = 'latest' //should be nanoid() to generate unique but I need that returned 
            const response = await fetch('/api/addprompt', {
                method: 'POST',
                body: (JSON.stringify({ id: id, prompt: prompt.get('prompt') })),
            })

            if (!response.ok) {
                throw new Error('Request failed')
            }
        }

        catch (error) {
            setError('error')
        }
        finally {
            setIsLoading(false)

        }
    }



    return (
        <Dialog>

            <DialogTrigger>
                <Button variant='default'>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Prompt</DialogTitle>
                    <DialogDescription className='py-3 text-zinc-400'>
                        Passed with every user message to give context on how to answer questions and digest input data.
                    </DialogDescription>

                    <Form {...form}>
                        <form onSubmit={onSubmit} className="w-full space-y-6">
                            <FormField
                                control={form.control}
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter a prompt..."
                                                className="resize-auto text-black w-full"
                                                {...field}
                                                value={field.value}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {error && <div style={{ color: 'red' }}>{error}</div>}
                            <Button type="submit">
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </form>
                    </Form>


                    {/* <div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <form onSubmit={onSubmit}>
                            <input type="text" name="prompt" className='text-black' placeholder="enter a prompt" />
                        </form>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                    </div> */}

                </DialogHeader>
            </DialogContent>
        </Dialog >
    );


}

export default EditPrompt