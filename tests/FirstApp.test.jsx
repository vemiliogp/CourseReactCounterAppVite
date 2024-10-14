import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests in <FirstApp />", () => {
  test("should match the snapshot", () => {
    const title = "Hello, I'm Satoru";

    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show a title in h1", () => {
    const title = "Hello, I'm Satoru";

    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("should show subtitle", () => {
    const title = "Hello, I'm Satoru";
    const subTitle = "I'm a subtitle";

    const { getByText } = render(<FirstApp title={title} subTitle={subTitle} />);

    expect(getByText(subTitle)).toBeTruthy();
  })
});
