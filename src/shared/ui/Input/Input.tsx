import { classNames } from "@shared/lib";
import { ChangeEvent, FocusEvent, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";

export enum InputTheme {
  CLEAR = "clear",
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  theme?: InputTheme;
  text: string;
  setText: (value: string) => void;
  error: string | null;
  setError: (value: string | null) => void;
  errorSetting: {
    validate: RegExp;
    message: string;
  };
};

export const Input = ({
  className,
  theme,
  errorSetting,
  text,
  setText,
  error,
  setError,
  ...props
}: InputProps) => {
  const handleClearError = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setText(e.currentTarget.value);
  };

  const handleValidate = (e: FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value;
    if (!errorSetting.validate.test(value) && text !== "") {
      setError(errorSetting.message);
    }
  };
  return (
    <>
      {error && <span className={cls.errorMessage}>{error}</span>}
      <input
        data-testid="input-test"
        value={text}
        onChange={handleClearError}
        onBlur={handleValidate}
        {...props}
        className={classNames(cls.Input, {}, [className, theme && cls[theme]])}
      />
    </>
  );
};
