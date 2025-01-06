import {
  appReducer,
  getInitStateAppSlice,
  selectCoords,
  selectError,
  selectInit,
  selectLocation,
  selectStatus,
  selectTheme,
  Theme,
} from "./appSlice";
import { createReduxStore, RootState } from "./store";

describe("app slice test", () => {
  describe("reducers from app slice test", () => {
    let initialState: typeof getInitStateAppSlice;
    beforeEach(() => {
      initialState = getInitStateAppSlice;
    });

    test("setTheme should update the theme", () => {
      const action = { type: "app/setTheme", payload: { theme: Theme.YELLOW } };

      const newState = appReducer(initialState, action);

      expect(newState.theme).toBe(Theme.YELLOW);
      expect(newState.theme).not.toBe(Theme.LIGHT);
    });

    test("setStatus should update the status", () => {
      const action = { type: "app/setStatus", payload: { status: "SUCCEEDED" } };

      const newState = appReducer(initialState, action);

      expect(newState.status).toBe("SUCCEEDED");
      expect(newState.status).not.toBe("IDLE");
    });

    test("setError should update the error", () => {
      const action = { type: "app/setError", payload: { error: "something went wrong" } };

      const newState = appReducer(initialState, action);

      expect(newState.error).toBe("something went wrong");
      expect(newState.error).not.toBe(null);
    });
  });
  describe("selectors from app slice test", () => {
    let store: ReturnType<typeof createReduxStore>;
    let state: RootState;
    beforeEach(() => {
      store = createReduxStore({
        app: {
          theme: Theme.DARK,
          status: "FAILED",
          location: {
            coords: { lat: 1, lng: 2 },
            place: { ip: "1.1.1.1", isp: "TEST ISP", region: "New York", timezone: "+05:00" },
          },
          isInit: true,
          error: "error is defined",
        },
      });
      state = store.getState();
    });
    test("theme should be selected", () => {
      const select = selectTheme(state);
      expect(select).toBe(state.app.theme);
    });

    test("Status should be selected", () => {
      const select = selectStatus(state);
      expect(select).toBe(state.app.status);
    });

    test("Coords should be selected", () => {
      const select = selectCoords(state);
      expect(select).toBe(state.app.location.coords);
    });

    test("Location should be selected", () => {
      const select = selectLocation(state);
      expect(select).toBe(state.app.location.place);
    });

    test("Initialized status should be selected", () => {
      const select = selectInit(state);
      expect(select).toBe(state.app.isInit);
    });

    test("Error should be selected", () => {
      const select = selectError(state);
      expect(select).toBe(state.app.error);
    });
  });
});
