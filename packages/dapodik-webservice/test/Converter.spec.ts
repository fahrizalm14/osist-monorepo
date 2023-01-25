import { describe, expect, it } from "vitest";
import { DapodikApi } from "../src";
import { Converter } from "../src/util/Converter";

describe("first", () => {
  it("Rombel grouping", async () => {
    expect(true).toBeTruthy();
    const dapodik = new DapodikApi("2000000", "token");
    const _d = await dapodik.getRombel();
    // eslint-disable-next-line no-console
    let count = 0;
    _d.rows.forEach((rombel) => {
      rombel.pembelajaran.forEach(function () {
        count += 1;
      });
    });
    const countRombel = Converter.classRoomAndLearn(_d?.rows).learns.length;
    expect(countRombel < count).toBeTruthy();
  });
});
