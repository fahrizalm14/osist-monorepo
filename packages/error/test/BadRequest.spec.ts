import { describe, expect, it } from "vitest";

import { BadRequestError, ClientError } from "../src";

describe("Bad Request Error", () => {
  it("should instance of ClientError", () => {
    try {
      throw new BadRequestError("Bad request message test");
    } catch (error: any) {
      expect(error instanceof ClientError).toBeTruthy();
    }
  });
  it("Should error name is \"Bad Request\"", () => {
    try {
      throw new BadRequestError("Bad request message test");
    } catch (error: any) {
      expect(error.name).toStrictEqual("Bad Request");
    }
  });
  it("Should error status code is 400", () => {
    try {
      throw new BadRequestError("Bad request message test");
    } catch (error: any) {
      expect(error.statusCode).toStrictEqual(400);
    }
  });
});
