import { FC } from 'react'
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

interface EditPromptProps {

}

const EditPrompt: FC<EditPromptProps> = ({ }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='default'>
                    Edit Prompt</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Prompt</DialogTitle>
                    <DialogDescription>
                        Make changes to the AI prompt
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Prompt
                        </Label>
                        <Input
                            id="prompt"
                            defaultValue={chatbotPrompt}
                            className="text-black row-span-10 col-span-4"
                        />
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