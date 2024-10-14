import { getActiveUser, getUser } from "../../src/test-bases/05-functions";

describe("Tests in functions", () => {
  test("getUser should return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "Izuku",
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test("getActiveUser should return an object", () => {
    const name = "Victor";
    const testUser = {
      uid: "ABC567",
      username: name,
    };

    const user = getActiveUser(name);

    expect(testUser).toStrictEqual(user);
  });
});
