import { getGreeting } from "../../src/test-bases/02-template-string";

describe("Tests in template string", () => {
  test("getGreeting should return 'Hello Victor'", () => {
    const name = "Victor";

    const message = getGreeting(name);

    expect(message).toBe(`Hello ${name}`);
  });
});
