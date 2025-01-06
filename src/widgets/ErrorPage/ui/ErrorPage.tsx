import { useTheme } from "@app/providers";
import { classNames } from "@shared/lib";
import cls from "./ErrorPage.module.scss";
import { Button } from "@shared/ui";
import { ButtonTheme } from "@shared/ui/Button/Button";

export const ErrorPage = () => {
  const { theme } = useTheme();

  const onRefreshPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [theme, "app"])}>
      <h1>Something went wrong</h1>
      <Button onClick={onRefreshPage} theme={ButtonTheme.CLEAR}>
        Refresh the page
      </Button>
    </div>
  );
};
