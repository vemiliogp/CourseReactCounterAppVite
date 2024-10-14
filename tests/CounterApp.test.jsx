const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/CounterApp");

describe("Tests in <CounterApp />", () => {
  const initialValue = 100;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  test("should show 100 as value initial", () => {
    render(<CounterApp value={initialValue} />);

    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initialValue.toString()
    );
  });

  test("should increment with button +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("should decrement with button -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("should reset with button reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", {  name: "btn-reset" }));
    
    expect(screen.getByText(initialValue).innerHTML).toBe(initialValue.toString());
  });
});
