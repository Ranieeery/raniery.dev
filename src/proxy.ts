import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (!pathname.match(/^\/(en|pt-BR)(\/|$)/)) {
    const storedLanguage = request.cookies.get("NEXT_LOCALE")?.value;

    let locale;
    if (storedLanguage) {
      locale = storedLanguage;
    } else {
      const acceptLanguage = request.headers.get("accept-language") || "";
      const preferredLanguage = acceptLanguage
        .split(",")[0]
        .slice(0, 2)
        .toLowerCase();
      locale = preferredLanguage === "pt" ? "pt-BR" : "en";
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    const response = NextResponse.redirect(url);

    if (!storedLanguage) {
      response.cookies.set("NEXT_LOCALE", locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons|images|pdf).*)",
  ],
};
