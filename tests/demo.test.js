describe("tests in <DemoComponent />", () => {
  test("should not fail", () => {
    const message1 = "Hello World";

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
