import { getHeroById } from "./08-imports-exports";

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (!hero) {
        reject("Not found hero with id " + id);
      }
      resolve(hero);
    }, 1000);
  });
};
