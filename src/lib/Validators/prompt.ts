import { z } from 'zod'

export const prompt = z.object({
    id: z.string(),
    prompt: z.string(),
})

export type Prompt = z.infer<typeof prompt>