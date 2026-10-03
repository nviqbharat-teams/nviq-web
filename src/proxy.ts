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

  return NextResponse.next();
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
