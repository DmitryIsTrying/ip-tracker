import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice";
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReduxStore = (initialState: Partial<RootState> = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

// Создаём тип хранилища
export type StoreType = ReturnType<typeof createReduxStore>;

// Извлекаем тип dispatch из хранилища
export type AppDispatch = StoreType["dispatch"];

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
