import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { rateLimiter } from '@/lib/rate-limiter'


export async function middleware(req: NextRequest) {
    const ip = req.ip ?? 'localhost'

    try {
        const { success } = await rateLimiter.limit(ip)

        if (!success) return new NextResponse('Slow down there bud, this API aint free.')
        return NextResponse.next()
    } catch (error) {
        return new NextResponse(
            'Ooops! Something went wrong.'
        )
    }
}

export const config = {
    matcher: '/api/message/:path*',
}
