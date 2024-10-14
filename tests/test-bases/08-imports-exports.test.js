import {
  getHeroById,
  getHeroesByOwner,
} from "../../src/test-bases/08-imports-exports";
import heroes from "../../src/data/heroes";

describe("Tests in imports and exports", () => {
  test("getHeroById should return an hero by id", () => {
    const id = 1;

    const hero = getHeroById(id);

    expect(hero).toStrictEqual({ id, name: "Batman", owner: "DC" });
  });

  test("getHeroById should return undefined if hero does not exist", () => {
    const id = 10;

    const hero = getHeroById(id);

    expect(hero).toBe(undefined);
  });

  test("getHeroesByOwner should return an array with DC heroes", () => {
    const owner = "DC";

    const dcHeroes = getHeroesByOwner(owner);

    expect(dcHeroes.length).toBe(3);
    expect(dcHeroes).toStrictEqual(heroes.filter((hero) => hero.owner === owner));
  });

  test("getHeroesByOwner should return an array with Marvel heroes", () => {
    const owner = "Marvel";

    const marvelHeroes = getHeroesByOwner(owner);

    expect(marvelHeroes.length).toBe(2);
    expect(marvelHeroes).toStrictEqual(heroes.filter((hero) => hero.owner === owner));
  });
});
