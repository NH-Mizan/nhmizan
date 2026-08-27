import crypto from "crypto";

const COOKIE_NAME = "nhmizan_admin_session";

function getSecret() {
  return process.env.ADMIN_SECRET || "change-me-in-env";
}

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "admin12345",
  };
}

function signValue(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken(username) {
  const payload = `${username}:${Date.now()}`;
  const signature = signValue(payload);
  return `${payload}:${signature}`;
}

export function verifySessionToken(token) {
  if (!token) {
    return false;
  }

  const parts = token.split(":");
  if (parts.length !== 3) {
    return false;
  }

  const [username, issuedAt, signature] = parts;
  const payload = `${username}:${issuedAt}`;
  const expected = signValue(payload);
  if (signature.length !== expected.length) {
    return false;
  }
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export function getSessionCookieConfig() {
  return {
    name: COOKIE_NAME,
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    },
  };
}
