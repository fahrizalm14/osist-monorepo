import { describe, expect, it } from "vitest";
import { DapodikApi } from "../src";

describe("Response Test", () => {
  it("should return'Parameter NPSN harap di isi' response", async () => {
    const dapodik = new DapodikApi("", "token");
    const response = {
      status: false,
      http_code: 403,
      status_code: "Forbidden",
      message: "Parameter NPSN harap di isi",
    };
    expect(await dapodik.getSekolah()).toMatchObject(response);
    expect(await dapodik.getGtk()).toMatchObject(response);
    expect(await dapodik.getPengguna()).toMatchObject(response);
    expect(await dapodik.getRombel()).toMatchObject(response);
    expect(await dapodik.getSekolah()).toMatchObject(response);
  });
  it("should return'Sekolah tidak ditemukan' response", async () => {
    const dapodik = new DapodikApi("wrongNpsn", "token");
    const response = {
      status: false,
      http_code: 403,
      status_code: "Forbidden",
      message: "Sekolah tidak ditemukan",
    };
    expect(await dapodik.getSekolah()).toMatchObject(response);
    expect(await dapodik.getGtk()).toMatchObject(response);
    expect(await dapodik.getPengguna()).toMatchObject(response);
    expect(await dapodik.getRombel()).toMatchObject(response);
    expect(await dapodik.getSekolah()).toMatchObject(response);
  });
});
