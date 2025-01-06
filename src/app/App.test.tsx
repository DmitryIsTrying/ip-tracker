import { Dispatch } from "@reduxjs/toolkit";
import "@testing-library/jest-dom/vitest";
import { expect, vi } from "vitest";
import App from "./App";
import { Theme } from "./model/appSlice";
import { renderWithRedux } from "./testing";
import { waitFor } from "@testing-library/react";

vi.mock("./model/appSlice", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./model/appSlice")>();
  return {
    ...actual,
    fetchCurrentLocation: vi.fn(() => {
      return async (dispatch: Dispatch) => {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Имитируем задержку
        dispatch({
          type: "app/fetchCurrentLocation/fulfilled",
          payload: {
            ip: "1.1.1.1",
            location: {
              country: "EU",
              region: "New York",
              city: "Texas",
              lat: 1,
              lng: 1,
              postalCode: "",
              timezone: "+00:00",
              geonameId: 123,
            },
            as: {
              asn: 123,
              name: "BOB",
              route: "1.1.1.1",
              domain: "",
              type: "",
            },
            isp: "",
          },
        });
      };
    }),
  };
});

describe("App component test", () => {
  test("show loader if initialized", async () => {
    const { findByTestId, queryByTestId } = renderWithRedux(<App />, {
      app: {
        theme: Theme.DARK,
        status: "FAILED",
        location: {
          coords: { lat: 1, lng: 2 },
          place: { ip: "1.1.1.1", isp: "TEST ISP", region: "New York", timezone: "+05:00" },
        },
        isInit: false,
        error: "error is defined",
      },
    });

    // Проверяем, что loader отображается
    const loader = await findByTestId("init-loader"); // Ждем появления loader
    expect(loader).toBeInTheDocument();
    expect(queryByTestId("main-content")).not.toBeInTheDocument();

    // Ждем, пока loader исчезнет
    await waitFor(() => expect(queryByTestId("init-loader")).not.toBeInTheDocument());

    // Проверяем, что основной контент отображается
    expect(queryByTestId("main-content")).toBeInTheDocument();
  });
});
