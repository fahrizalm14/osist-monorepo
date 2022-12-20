import { describe, expect, it } from "vitest";

import { ClientError, NotFoundError } from "../src";

describe("Not Found Error", () => {
  it("should instance of ClientError", () => {
    try {
      throw new NotFoundError("Not found message test");
    } catch (error: any) {
      expect(error instanceof ClientError).toBeTruthy();
    }
  });
  it("Should error name is \"Bad Request\"", () => {
    try {
      throw new NotFoundError("Not found message test");
    } catch (error: any) {
      expect(error.name).toStrictEqual("Not found");
    }
  });
  it("Should error status code is 404", () => {
    try {
      throw new NotFoundError("Not found message test");
    } catch (error: any) {
      expect(error.statusCode).toStrictEqual(404);
    }
  });
});
