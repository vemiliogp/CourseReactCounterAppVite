import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests in <FirstApp />", () => {
  const title = "Hello, I'm Satoru";
  const subTitle = "I'm a subtitle";

  test("should match to snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show message 'Hello, I'm Satoru'", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug()
  });

  test("should show title in h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
    // screen.debug()
  });

  test("should show subtitle", () => {
    render(<FirstApp title={title} subTitle={subTitle} />); 

    expect(screen.getByText(subTitle)).toBeTruthy();
  })
});
