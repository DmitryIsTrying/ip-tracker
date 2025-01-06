import { locationApi } from "@app/api/locationApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

type Status = "IDLE" | "PENDING" | "FAILED" | "SUCCEEDED";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
  YELLOW = "yellow",
}

type Location = {
  coords: {
    lat: number;
    lng: number;
  };
  place: {
    ip: string;
    region: string;
    timezone: string;
    isp: string;
  };
};

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT,
    status: "IDLE" as Status,
    location: {} as Location,
    isInit: false,
    error: null as null | string,
  },
  reducers: (create) => ({
    setTheme: create.reducer<{ theme: Theme }>((state, action) => {
      state.theme = action.payload.theme;
    }),
    setStatus: create.reducer<{ status: Status }>((state, action) => {
      state.status = action.payload.status;
    }),
    setError: create.reducer<{ error: null | string }>((state, action) => {
      state.error = action.payload.error;
    }),
  }),
  selectors: {
    selectTheme: (state) => state.theme,
    selectStatus: (state) => state.status,
    selectCoords: (state) => state.location.coords,
    selectLocation: (state) => state.location.place,
    selectInit: (state) => state.isInit,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentLocation.pending, (state) => {
        state.status = "PENDING";
      })
      .addCase(fetchCurrentLocation.fulfilled, (state, action) => {
        state.status = "SUCCEEDED";
        const {
          payload: { location, ip, isp },
        } = action;
        state.location.coords = {
          lat: location.lat,
          lng: location.lng,
        };
        state.location.place = {
          ip: ip,
          region: location.region,
          timezone: location.timezone,
          isp: isp,
        };
        state.isInit = true;
      })
      .addCase(fetchCurrentLocation.rejected, (state, action) => {
        state.status = "FAILED";

        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export const fetchCurrentLocation = createAsyncThunk(
  "app/fetchCurrentLocation",
  async (_, { rejectWithValue }) => {
    try {
      const response = await locationApi.getInfo();
      return response.data; // Данные, которые будут переданы в редюсер
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return rejectWithValue(error.response?.data.messages);
        } else {
          return rejectWithValue(error.message);
        }
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export const fetchLocationWithCoords = createAsyncThunk(
  "app/fetchCurrentLocation",
  async ({ ipAddress }: { ipAddress: string }, { rejectWithValue }) => {
    try {
      const response = await locationApi.getLocation(ipAddress);
      return response.data; // Данные, которые будут переданы в редюсер
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return rejectWithValue(error.response?.data.messages);
        } else {
          return rejectWithValue(error.message);
        }
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export const appReducer = appSlice.reducer;
export const getInitStateAppSlice = appSlice.getInitialState();
export const { setTheme, setStatus, setError } = appSlice.actions;
export const { selectTheme, selectStatus, selectCoords, selectLocation, selectInit, selectError } =
  appSlice.selectors;
