import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const authPlugin = new Elysia()
  .use(cookie())
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!,
    }),
  )
  .derive(async ({ jwt, cookie }) => {
    const raw = cookie.auth_token?.value;

    if (!raw) return { user: null };

    if (typeof raw !== "string") return { user: null };

    const payload = await jwt.verify(raw);
    return { user: payload ?? null };
  });
