import { classNames } from "@shared/lib";
import { useTheme } from "./providers";
import { SearchTracker } from "@features/searchTracker";
import { Map } from "@features/map";
import { DesktopBg, MobileBg } from "@shared/assets";
import { LocationInfo } from "@widgets/LocationInfo";
import { ThemeSwitcher } from "@widgets/ThemeSwitcher";
import { InitLoader } from "@widgets/InitLoader";
import { ProgressBar } from "@shared/ui";
import { useAppDispatch, useAppSelector } from "./model/store";
import {
  fetchCurrentLocation,
  selectError,
  selectInit,
  selectStatus,
  setError,
} from "./model/appSlice";
import { useEffect } from "react";
import { useViewport } from "@shared/hooks";
import { Toastify } from "@widgets/Toastify";
import { ToastifyStatus } from "@widgets/Toastify/ui/Toastify";

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const isInit = useAppSelector(selectInit);
  const error = useAppSelector(selectError);
  const { width: windowWidth } = useViewport();
  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, []);
  const closeToastify = () => {
    dispatch(setError({ error: null }));
  };
  if (!isInit) {
    return (
      <>
        <InitLoader />
        {error && (
          <Toastify
            closeFn={closeToastify}
            message={error}
            theme={ToastifyStatus.ERROR}
            className="toastify"
          />
        )}
      </>
    );
  }

  return (
    <div data-testid="main-content" className={classNames("app", {}, [theme])}>
      {status === "PENDING" && <ProgressBar className="progressTop" />}
      {error && (
        <Toastify
          closeFn={closeToastify}
          message={error}
          theme={ToastifyStatus.ERROR}
          className="toastify"
        />
      )}
      <ThemeSwitcher />
      <img
        className={classNames("bgImage", {}, [])}
        src={windowWidth > 700 ? DesktopBg : MobileBg}
        alt="background"
      />
      <div className={classNames("content", {}, [])}>
        <h1 className={classNames("title", {}, [])}>IP Address Tracker</h1>
        <SearchTracker />
        <LocationInfo />
      </div>
      <Map />
    </div>
  );
}

export default App;
