import ClientError from "./ClientError";

export class BadRequestError extends ClientError {
  constructor(message: string) {
    super(message, 400);
    this.name = "Bad Request";
  }
}
