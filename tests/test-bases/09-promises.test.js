import { getHeroByIdAsync } from "../../src/test-bases/09-promises";

describe("Tests in promises", () => {
  test("getHeroByIdAsync should return an hero", (done) => {
    const id = 1;

    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toStrictEqual({ id, name: "Batman", owner: "DC" });
      done();
    });
  });

  test("getHeroByIdAsync should get an error if hero does not exist", (done) => {
    const id = 10;

    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe(`Not found hero with id ${id}`);
      done();
    });
  });
});
