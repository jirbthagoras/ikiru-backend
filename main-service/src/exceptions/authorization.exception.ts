class AuthorizationException extends Error {
  constructor(public message: string) {
    super(message);
  }
}

// Fuck yeah, call me crazy. I defined all these unnecessary custom error types! IN A DIFFERENT. FUCKING. FILE! HAHAHAHHAHA
