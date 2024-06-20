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

interface EditPromptProps extends HTMLAttributes<HTMLDivElement> {

}

const EditPrompt: FC<EditPromptProps> = ({ className, ...props }) => {
    async function create(formData: FormData) {
        "use server";
        const sql = neon("postgres://default:wk1ojG5JcHzR@ep-dry-pond-a4vj7rkg-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require");
        await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
        const comment = formData.get("comment");
        await sql("INSERT INTO comments (comment) VALUES ($1)", [comment]);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='default'>
                    View Prompt</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Prompt</DialogTitle>
                    <DialogDescription>
                        Make changes to the AI prompt
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {/* <div className="grid grid-cols-4 grid-rows-50 items-center gap-4"> */}
                    {/* <Label htmlFor="name" className="text-left">
                            Prompt
                        </Label> */}
                    {/* <Textarea
                            className="text-black row-span-10 col-span-10"
                            value={chatbotPrompt} /> */}
                    {/* </div> */}
                </div>
                <DialogFooter>
                    <form action={create}>
                        <input type="text" placeholder="write a comment" name="comment" className='text-black' />
                        <button type="submit">Submit</button>
                    </form>
                    {/* <Button variant='outline'>
                        Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditPrompt