import { FC, HTMLAttributes } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { chatbotPrompt } from '@/app/helpers/constants/chatbot-prompt'
import { Textarea } from "@/components/ui/textarea"
import { neon } from '@neondatabase/serverless';
import postgres from 'postgres';



export default async function Page() {
    async function create(formData: FormData) {
        "use server";
        const sql = neon("postgres://default:wk1ojG5JcHzR@ep-dry-pond-a4vj7rkg-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require");
        await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
        const comment = formData.get("comment");
        await sql("INSERT INTO comments (comment) VALUES ($1)", [comment]);
    }
    return (
        <form action={create}>
            <input type="text" placeholder="write a comment" name="comment" />
            <button type="submit">Submit</button>
        </form>
    );
}
