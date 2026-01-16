export enum AuthErrKind {
  INVALID_TOKEN,
  TOKEN_DOES_NOT_EXISTS,
}

export class AuthorizationException extends Error {
  constructor(public kind: AuthErrKind) {
    const message = AuthorizationException.getMessage(kind);

    super(message);
  }

  private static getMessage(kind: AuthErrKind): string {
    switch (kind) {
      case AuthErrKind.INVALID_TOKEN:
        return "The provided token is expired or malformed";
      case AuthErrKind.TOKEN_DOES_NOT_EXISTS:
        return "Client does not provide any token to validate";
      default:
        return "Unknown authorization exception occured";
    }
  }
}

// Fuck yeah, call me crazy. I defined all these unnecessary custom error types!
// IN A DIFFERENT. FUCKING. FILE! HAHAHAHHAH
