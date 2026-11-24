import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto");

  if (host === "naviqbharat.com" || (host === "www.naviqbharat.com" && proto === "http")) {
    const url = request.nextUrl.clone();
    url.host = "www.naviqbharat.com";
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  // Let app/not-found.tsx know which URL was missed, so it can send the visitor
  // to the parent page instead of a dead end.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
