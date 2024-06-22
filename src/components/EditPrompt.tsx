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
import { sql } from '@vercel/postgres';


interface EditPromptProps {
}

export const EditPrompt: FC<EditPromptProps> = ({ }) => {

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
            <DialogTrigger className='px-4 py-2 bg-white hover:bg-indigo-600 text-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Prompt</DialogTitle>
                    <div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <form onSubmit={onSubmit}>
                            <input type="text" name="prompt" className='text-black' placeholder="enter a prompt" />
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog >
    );


}

export default EditPrompt