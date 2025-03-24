import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define protected routes
const protectedRoutes = ['/dashboard', '/subscribed', '/bill'];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
console.log("token " , token)
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    // If user is not authenticated and tries to access a protected route, redirect to login
    console.log("not authen")
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next(); // Allow request to continue
}

// Apply middleware to all routes
export const config = {
    matcher: ['/dashboard/:path*', '/subscribed/:path*', '/bill/:path*'], // Match subpages too
};
