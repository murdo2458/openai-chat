"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { FC } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

const Chat: FC = () => {
    return <Accordion type="single"
        collapsible
        className="relative bg-qhite z-40 shadown">
        <AccordionItem value="item-1">
            <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow:hidden">
                <div className="w-full h-full flex flex-col"></div>
                <AccordionTrigger className="px-6 border-b border-zinc-300">
                    <ChatHeader />
                </AccordionTrigger>
                <AccordionContent>
                    <div className='flex flex-col h-80'>
                        messages
                        <ChatInput className='px-4' />
                    </div>
                </AccordionContent>
            </div>
        </AccordionItem>

    </Accordion>
}


export default Chat