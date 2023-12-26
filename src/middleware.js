import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  //   console.log("request.url???>", request.url);

  let loggedin = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  // Redirect logged-in users from the /login and /register routes to the home page
  if (loggedin && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect non-logged-in users from routes other than /login and /register to the /login page
  if (!loggedin && pathname !== "/login" && pathname !== "/register") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
