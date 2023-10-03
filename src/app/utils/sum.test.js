import { sum } from "./sum";

describe("sum", () => {
  test("should return a + b", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
