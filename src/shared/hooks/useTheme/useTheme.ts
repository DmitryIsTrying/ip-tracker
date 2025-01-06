import { LOCAL_STORAGE_THEME_KEY, selectTheme, setTheme, Theme } from "@app/model/appSlice";
import { useAppDispatch, useAppSelector } from "@app/model/store";
import { exhaustiveCheck } from "@shared/lib";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const nextTheme = () => {
    //typeGuard, если setTheme or theme not defined
    if (!setTheme || !theme) return;
    switch (theme) {
      case Theme.DARK: {
        dispatch(setTheme({ theme: Theme.LIGHT }));
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT);
        break;
      }
      case Theme.LIGHT: {
        dispatch(setTheme({ theme: Theme.YELLOW }));
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.YELLOW);
        break;
      }
      case Theme.YELLOW: {
        dispatch(setTheme({ theme: Theme.DARK }));
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.DARK);
        break;
      }
      default:
        exhaustiveCheck(theme);
    }
  };
  return { theme, nextTheme } as { theme: Theme; nextTheme: () => void };
};
