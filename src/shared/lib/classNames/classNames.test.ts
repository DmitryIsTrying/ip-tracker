import { classNames } from "./classNames";

describe("test classNames function", () => {
  let reduceSpy: ReturnType<typeof vi.spyOn>;

  // Создаем шпион перед всеми тестами
  beforeAll(() => {
    reduceSpy = vi.spyOn(Array.prototype, "reduce");
  });

  // Восстанавливаем моки после всех тестов
  afterEach(() => {
    vi.clearAllMocks();
  });
  afterAll(() => {
    reduceSpy.mockRestore();
  });

  test("checking the main class", () => {
    expect(classNames("test")).toBe("test");
    expect(classNames("check")).not.toBe("test");
  });

  test("checking the main class with obj mods", () => {
    expect(classNames("test", { orange: true, red: false, purple: true })).toBe(
      "test orange purple"
    );
    expect(classNames("test", { orange: false, red: false, purple: false })).toBe("test");
  });

  test("checking: main class + obj mods + extra classes", () => {
    expect(classNames("test", { orange: true, red: false, purple: true }, ["milk", "burger"])).toBe(
      "test milk burger orange purple"
    );
    expect(
      classNames("test", { orange: false, red: false, purple: false }, ["milk", "burger"])
    ).toBe("test milk burger");
  });

  test("mocking reduce", () => {
    classNames("test");
    expect(reduceSpy).toBeCalledTimes(1);
  });

  test("mocking reduce - second call", () => {
    expect(reduceSpy).not.toBeCalled();
  });
});
