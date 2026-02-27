import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const lang = request.cookies.get('preferred-language')?.value;
  const validLang = lang === 'ar' ? 'ar' : 'en';

  // Attach the resolved language as a request header so the root layout
  // (a Server Component) can read it via next/headers and render the correct
  // lang / dir on the <html> element on the very first server response —
  // eliminating the RTL flash for returning Arabic-language users.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-language', validLang);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('x-language', validLang);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - API routes
     * - Next.js internals (_next/static, _next/image)
     * - Static public assets (images, fonts, manifest, robots)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets|manifest.json|robots.txt).*)',
  ],
};
