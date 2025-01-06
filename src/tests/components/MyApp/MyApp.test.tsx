import { fireEvent, render, screen } from "@testing-library/react";
import { MyApp } from "./MyApp";
import userEvent from "@testing-library/user-event";

describe("test myApp", () => {
  test("renders myapp", () => {
    render(<MyApp />);
    const testElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(testElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    screen.debug();
  });

  test("query: element is NOT defined", () => {
    render(<MyApp />);
    const testElement = screen.queryByText(/hello2/i);
    expect(testElement).toBeNull();
  });

  test("findBy: ", async () => {
    render(<MyApp />);
    const testElement = await screen.findByText(/data/i);
    expect(testElement).toBeInTheDocument();
    expect(testElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });

  test("click event", () => {
    render(<MyApp />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("change event", async () => {
    render(<MyApp />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.getByTestId("value-elem")).toContainHTML("");
    // // Искуственное событие
    // fireEvent.input(input, {
    //   target: { value: "test123" },
    // });

    // expect(screen.getByTestId("value-elem")).toContainHTML("test123");
    // Расширенные браузерные события АСИНХРОННОЕ
    await userEvent.type(input, "123");
    expect(screen.getByTestId("value-elem")).toContainHTML("123");
  });
});
// "u" for update snapshot

//queryBy... доказать отсуствие (если не найдёт ошибки не будет)
//getBy... если не найдёт будет ошибка
//findBy... возврвщает промис (асинхронный рендер). Ждёт по умолчанию 1000мс и резолв или реджект есть ли элемент
