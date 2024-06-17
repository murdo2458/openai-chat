"use client"

import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
interface providersProps {
    children: ReactNode
}

const providers: FC<providersProps> = ({ children }) => {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default providers