import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

type AuthUser = {
  id: string;
};

export const authPlugin = new Elysia()
  .use(cookie())
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!,
    }),
  )
  .derive({ as: "global" }, async ({ jwt, cookie }) => {
    const raw = cookie.auth_token?.value;

    if (!raw) return { user: null as AuthUser | null };

    if (typeof raw !== "string") return { user: null as AuthUser | null };

    const payload = await jwt.verify(raw);

    return { user: payload as AuthUser };
  });

export const requireAuth = new Elysia()
  .use(authPlugin)
  .onBeforeHandle(({ user }) => {
    if (!user) {
      throw new AuthorizationException("Unauthorized");
    }
  });
