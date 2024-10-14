import { returnArray } from "../../src/test-bases/07-destructuring-arrays";

describe("Test in destructuring arrays", () => {
  test("should return an string and number", () => {
    const [letters, numbers] = returnArray();

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
  });
});
