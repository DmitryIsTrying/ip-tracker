import cls from "./Toastify.module.scss";
import { classNames } from "@shared/lib";
import { Button, ProgressBar } from "@shared/ui";
import { ButtonTheme } from "@shared/ui/Button/Button";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export enum ToastifyStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

type ToastifyProps = {
  className?: string;
  closeFn: Function;
  theme?: ToastifyStatus;
  message: string;
};

const modalContainer = document.querySelector("body");

export const Toastify = ({
  className,
  theme = ToastifyStatus.WARNING,
  message,
  closeFn,
}: ToastifyProps) => {
  useEffect(() => {
    const timeoutId = setTimeout(closeFn, 4500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!modalContainer) {
    return null;
  }

  return createPortal(
    <div id="modal" className={classNames(cls.Toastify, {}, [className, cls[theme + "Toastify"]])}>
      <ProgressBar className={cls[theme]} />
      <span>{message.length > 31 ? `${message.slice(0, 31)}...` : message}</span>
      <Button
        aria-label="close toastify"
        onClick={() => closeFn()}
        className={cls.btn}
        theme={ButtonTheme.CLEAR}
      >
        X
      </Button>
    </div>,
    modalContainer
  );
};
