import { delay } from "./delay";

describe("delay", () => {
  test("Корректное значение", async () => {
    const sum = await delay(() => 5 + 3, 2000);
    expect(sum).toBe(8);
  });
});
