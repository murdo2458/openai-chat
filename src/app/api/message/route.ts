
import { chatbotPrompt } from '@/app/helpers/constants/chatbot-prompt'
import { inputData } from '@/app/helpers/constants/input-data';
import {
    ChatGPTMessage,
    OpenAIStream,
    OpenAIStreamPayload,
} from '@/lib/openai-stream'
import { MessageArraySchema } from '@/lib/Validators/message'
import { sql } from '@vercel/postgres';


export async function POST(req: Request) {


    const { messages } = await req.json()

    const parsedMessages = MessageArraySchema.parse(messages)

    const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
        return {
            role: message.isUserMessage ? 'user' : 'system',
            content: message.text,
        }
    })

    const prompt = 'you are a helpful chatbot';
    // await sql`SELECT prompt FROM prompts WHERE id = 'latest';`; //this is dumb af, overwriting row with id='latest' so it works but just always the last person to put anything in the box
    console.log(prompt);

    outboundMessages.unshift({
        role: 'system',
        content: 'use this data to assist in answering questions: ' + inputData + JSON.stringify(prompt), //returning prompt as string based on DB query above, not quite right as it still includes all the other json shite
    })

    const payload: OpenAIStreamPayload = {
        model: 'gpt-4o',
        messages: outboundMessages,
        temperature: 0.4,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 150,
        stream: true,
        n: 1,
    }

    const stream = await OpenAIStream(payload)

    return new Response(stream)
}