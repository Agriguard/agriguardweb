import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value;

  // Handle unauthenticated users
  if (!accessToken) {
    if (
      request.nextUrl.pathname === '/auth/login' ||
      request.nextUrl.pathname === '/auth/signup'
    ) {
      return NextResponse.next();
    }

    // Allow access to /market-intelligence for unauthenticated users
    if (request.nextUrl.pathname.startsWith('/market-intelligence')) {
      return NextResponse.next();
    }

    // Redirect other paths to the login page
    // return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Handle authenticated users
  if (accessToken) {
    if (
      request.nextUrl.pathname === '/auth/login' ||
      request.nextUrl.pathname === '/auth/signup'
    ) {
      // Redirect to /market-intelligence if trying to access login/signup
      return NextResponse.redirect(
        new URL('/market-intelligence', request.url)
      );
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/market-intelligence/:path*', '/auth/:path*'],
};
