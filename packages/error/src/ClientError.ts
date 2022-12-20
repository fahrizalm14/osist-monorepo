export default class ClientError extends Error {
  statusCode: number;
  name = "Client error";
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
