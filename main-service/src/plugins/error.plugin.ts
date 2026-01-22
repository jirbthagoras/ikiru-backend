import Elysia from "elysia";
import { AuthorizationException } from "../exceptions/authorization.exception";

export const errorPlugin = new Elysia()
  .error({
    AuthErr: AuthorizationException,
  })
  .onError(({ error, set, code }) => {
    let status = 500;
    const message = error instanceof Error ? error.message : "Unknown error";

    if (code === "AuthErr") status = 401;

    set.status = status;
    return {
      success: false,
      code,
      message,
    };
  });
