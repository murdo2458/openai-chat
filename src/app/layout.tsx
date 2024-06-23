import Providers from '@/components/Providers'
import Chat from '../components/Chat'
import './globals.css'

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
        <body>
          <Chat />
          {children}
        </body>
      </Providers>
    </html >
  )
}