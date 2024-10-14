import { getImage } from "../../src/test-bases/11-async-await";

describe("Tests in async await", () => {
  test("getImage should return an url image", async () => {
    const url = await getImage();

    expect(typeof url).toBe("string");
  });
});
