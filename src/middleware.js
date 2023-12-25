import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  //   console.log("request.url???>", request.url);

  let loggedin = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  if (loggedin && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (loggedin && pathname === "/register") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!loggedin && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
