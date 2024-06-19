"use client"

import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MessagesProvider } from '@/context/messages'
interface providersProps {
    children: ReactNode
}

const providers: FC<providersProps> = ({ children }) => {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>
        <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
}

export default providers