import { describe, expect, it } from "vitest";

import { ClientError } from "../src";

describe("Client Error", () => {
  it("should correct name and instance of 'Error'", () => {
    try {
      throw new ClientError("Client message test", 400);
    } catch (error: any) {
      expect(error instanceof Error).toBeTruthy();
      expect(error.name).toStrictEqual("Client error");
    }
  });
});
