import { NextResponse } from "next/server";

import {
  createSessionToken,
  getAdminCredentials,
  getSessionCookieConfig,
} from "@/lib/admin-auth";

export async function POST(request) {
  const payload = await request.json();
  const { username, password } = payload;
  const creds = getAdminCredentials();

  if (username !== creds.username || password !== creds.password) {
    return NextResponse.json(
      { message: "Invalid username or password." },
      { status: 401 }
    );
  }

  const { name, options } = getSessionCookieConfig();
  const response = NextResponse.json({ success: true });
  response.cookies.set(name, createSessionToken(username), options);
  return response;
}
