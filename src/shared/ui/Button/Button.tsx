import { classNames } from "@shared/lib";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  FULLBLACK = "black",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
};

export const Button = ({ className, children, theme, ...props }: ButtonProps) => {
  return (
    <button
      data-testid={`btn-test-${theme}`}
      className={classNames(cls.Button, {}, [className, theme && cls[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
