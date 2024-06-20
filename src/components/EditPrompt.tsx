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

interface EditPromptProps extends HTMLAttributes<HTMLDivElement> {

}

const EditPrompt: FC<EditPromptProps> = ({ }) => {
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
                    <div className="grid grid-cols-4 grid-rows-50 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Prompt
                        </Label>
                        <Textarea
                            className="text-black row-span-10 col-span-10"
                            value={chatbotPrompt} />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='outline'>
                        Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditPrompt