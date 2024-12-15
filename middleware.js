import { NextResponse } from 'next/server'

export function middleware(req) {
	const user = req.cookies.get('user') // Use cookies for auth

	// Redirect to login if user data is not found
	if (!user) {
		return NextResponse.redirect(new URL('/login', req.url))
	}

	// Allow request to proceed
	return NextResponse.next()
}

// Apply middleware to specific routes
export const config = {
	matcher: ['/instructor/:path*', '/student/:path*'], // Middleware applies to all dashboard routes
}
