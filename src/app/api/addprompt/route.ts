import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const { id, prompt } = await request.json();

    try {
        if (!id || !prompt) throw new Error('Prompt and ID required');
        await sql`INSERT INTO prompts (id, prompt) VALUES (${id}, ${prompt});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }


    return new Response(prompt + ' is added to database', { status: 200 });
}