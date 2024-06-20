import Providers from '@/components/Providers'
import Chat from '../components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import EditPrompt from '@/components/EditPrompt'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatbot Project',
  description: 'Powered by chat gippity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html >
  )
}