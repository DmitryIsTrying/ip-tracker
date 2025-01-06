import { useState, useEffect } from "react";
import cls from "./ProgressBar.module.scss";
import { classNames } from "@shared/lib";

type ProgressBarProps = {
  className?: string;
};

export const ProgressBar = ({ className }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0; // Сбрасываем прогресс, если он достиг 100%
        }
        return prevProgress + 10; // Увеличиваем прогресс
      });
    }, 400); // Интервал обновления

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <div className={classNames(cls.progressContainer, {}, [className])}>
      <div className={cls.progressBar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
