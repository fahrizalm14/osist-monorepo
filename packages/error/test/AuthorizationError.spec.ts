import { describe, expect, it } from "vitest";

import { AuthorizationError, ClientError } from "../src";

describe("Authorization Error", () => {
  it("should instance of ClientError", () => {
    try {
      throw new AuthorizationError("Unauthorized message test");
    } catch (error: any) {
      expect(error instanceof ClientError).toBeTruthy();
    }
  });
  it("Should error name is \"Bad Request\"", () => {
    try {
      throw new AuthorizationError("Unauthorized message test");
    } catch (error: any) {
      expect(error.name).toStrictEqual("Unauthorized");
    }
  });
  it("Should error status code is 403", () => {
    try {
      throw new AuthorizationError("Unauthorized message test");
    } catch (error: any) {
      expect(error.statusCode).toStrictEqual(403);
    }
  });
});
