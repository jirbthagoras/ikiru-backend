import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import {
  AuthErrKind,
  AuthorizationException,
} from "../exceptions/authorization.exception";

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

    if (!raw)
      throw new AuthorizationException(AuthErrKind.TOKEN_DOES_NOT_EXISTS);

    if (typeof raw !== "string")
      throw new AuthorizationException(AuthErrKind.INVALID_TOKEN);

    const payload = await jwt.verify(raw);

    if (!payload) {
      throw new AuthorizationException(AuthErrKind.INVALID_TOKEN);
    }

    return { user: payload as AuthUser };
  });
