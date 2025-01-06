import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import axios from "axios";
import { vi, expect } from "vitest";

vi.mock("axios");

describe("test Users", () => {
  let response: any;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
    // Настраиваем мок для axios.get
    vi.mocked(axios.get).mockResolvedValue(response);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  test("renders users", async () => {
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
});
