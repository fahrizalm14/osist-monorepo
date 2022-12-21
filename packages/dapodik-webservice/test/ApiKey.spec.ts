import { describe, expect, it } from "vitest";
import { DapodikApi } from "../src";

describe("ApiKey Test", () => {
  const dapodik = new DapodikApi("2000000", "wrongToken");
  const response = {
    status: false,
    http_code: 403,
    status_code: "Forbidden",
    message: "Aplikasi tidak terdaftar pada Web Service Dapodik",
  };
  it("should correctly getSekolah response", async () => {
    const sekolahRes = await dapodik.getSekolah();
    expect(sekolahRes).toMatchObject(response);
  });
  it("should correctly getRombel response", async () => {
    const sekolahRes = await dapodik.getRombel();
    expect(sekolahRes).toMatchObject(response);
  });
  it("should correctly getGtk response", async () => {
    const sekolahRes = await dapodik.getGtk();
    expect(sekolahRes).toMatchObject(response);
  });
  it("should correctly getPengguna response", async () => {
    const sekolahRes = await dapodik.getPengguna();
    expect(sekolahRes).toMatchObject(response);
  });
  it("should correctly getPesertaDidik response", async () => {
    const sekolahRes = await dapodik.getPesertaDidik();
    expect(sekolahRes).toMatchObject(response);
  });
});
