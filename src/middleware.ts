import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  PT_PROFILE_COOKIE,
  PT_PROFILE_QUERY,
} from "@/data/pt-profile-constants";

export function middleware(request: NextRequest) {
  const pt = request.nextUrl.searchParams.get(PT_PROFILE_QUERY);
  if (!pt) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.searchParams.delete(PT_PROFILE_QUERY);
  const res = NextResponse.redirect(url);
  res.cookies.set(PT_PROFILE_COOKIE, pt, {
    path: "/",
    maxAge: 60 * 60 * 24 * 400,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
