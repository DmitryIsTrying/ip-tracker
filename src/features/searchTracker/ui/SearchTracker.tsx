import { arrow } from "@shared/assets";
import { Input, InputTheme, Button, Icon } from "@shared/ui";
import { ButtonTheme } from "@shared/ui/Button/Button";
import cls from "./SearchTracker.module.scss";
import { classNames } from "@shared/lib";
import { useState } from "react";
import { useAppDispatch } from "@app/model/store";
import { fetchLocationWithCoords } from "@app/model/appSlice";

type SearchTrackerProps = {
  className?: string;
};

const ipRegex =
  /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;

export const SearchTracker = ({ className }: SearchTrackerProps) => {
  const [text, setText] = useState("");
  const [error, setError] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  const handleSearchLocation = () => {
    dispatch(fetchLocationWithCoords({ ipAddress: text }));
    setText("");
  };

  return (
    <div className={classNames(cls.SearchTracker, {}, [className])}>
      <Input
        error={error}
        setError={setError}
        setText={setText}
        text={text}
        errorSetting={{ message: "It's not an iP address", validate: ipRegex }}
        className={cls.searchField}
        placeholder="0.0.0.0"
        theme={InputTheme.CLEAR}
      />
      <Button
        disabled={!text || !!error}
        onClick={handleSearchLocation}
        className={cls.searchBtn}
        theme={ButtonTheme.FULLBLACK}
      >
        <Icon path={arrow} alt="icon arrow" />
      </Button>
    </div>
  );
};
