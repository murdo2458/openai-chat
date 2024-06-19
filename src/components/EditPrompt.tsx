import { FC } from 'react'
import { Copy } from "lucide-react"
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
                <Button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
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
                    <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditPrompt