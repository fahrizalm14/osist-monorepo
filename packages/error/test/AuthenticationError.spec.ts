import { describe, expect, it } from "vitest";

import { AuthenticationError, ClientError } from "../src";

describe("Authentication Error", () => {
  it("should instance of ClientError", () => {
    try {
      throw new AuthenticationError("Unauthenticated message test");
    } catch (error: any) {
      expect(error instanceof ClientError).toBeTruthy();
    }
  });
  it("Should error name is \"Bad Request\"", () => {
    try {
      throw new AuthenticationError("Unauthenticated message test");
    } catch (error: any) {
      expect(error.name).toStrictEqual("Unauthenticated");
    }
  });
  it("Should error status code is 401", () => {
    try {
      throw new AuthenticationError("Unauthenticated message test");
    } catch (error: any) {
      expect(error.statusCode).toStrictEqual(401);
    }
  });
});
