"use client"
import Chat from "@/components/Chat";
import { EditPrompt } from "@/components/EditPrompt";


export default function Home() {
  return (
    <main>
      <div className='py-24 sm:py-32 lg:pb-40'>
        <div //top colourful stuff
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl'>
              Your AI Chatbot
            </h1>
            <p className='mt-6 text-base text-zinc-400'>
              Powered by OpenAI and running the latest GPT-4o model. Edit the prompt and view input data below.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <EditPrompt />
              <a
                href='./input-data'
                target="_blank"
                className='text-sm font-semibold leading-6 text-white'>
                Input Data <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div //bottom colourful stuff
          className='fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </main>

  );
}