import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security Headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self)'
  )

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com *.googletagmanager.com *.facebook.net *.clarity.ms *.linkedin.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com unpkg.com;
      font-src 'self' fonts.gstatic.com;
      img-src 'self' data: blob: *.google-analytics.com *.googletagmanager.com *.facebook.com *.doubleclick.net https://fonts.googleapis.com https://*.tile.openstreetmap.org https://images.unsplash.com;
      connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.facebook.com *.clarity.ms https://fonts.googleapis.com;
      frame-src 'self' *.google.com *.facebook.com;
    `.replace(/\s+/g, ' ').trim()
  )

  // Force HTTPS redirect (production)
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') !== 'https'
  ) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301
    )
  }

  // Redirect non-www to www
  const hostname = request.headers.get('host')
  if (hostname && !hostname.startsWith('www.') && hostname.includes('ironairhc.com')) {
    return NextResponse.redirect(
      `https://www.${hostname}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    )
  }

  // Trailing slash redirect (remove trailing slashes)
  if (request.nextUrl.pathname !== '/' && request.nextUrl.pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.slice(0, -1), request.url),
      301
    )
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

