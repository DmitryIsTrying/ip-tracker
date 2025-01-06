import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "@app/providers";
import { classNames } from "@shared/lib";
import { Button, ButtonTheme } from "@shared/ui";

export const ThemeSwitcher = () => {
  const { nextTheme } = useTheme();

  return (
    <Button onClick={nextTheme} className={classNames(cls.ThemeSwitcher)} theme={ButtonTheme.CLEAR}>
      Switch Theme
    </Button>
  );
};
