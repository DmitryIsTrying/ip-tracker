import { classNames } from "@shared/lib";
import cls from "./LocationInfo.module.scss";
import { useAppSelector } from "@app/model/store";
import { selectLocation } from "@app/model/appSlice";

export const LocationInfo = () => {
  const location = useAppSelector(selectLocation);

  return (
    <div data-testid="location-info" className={classNames(cls.LocationInfo)}>
      <span className={classNames(cls.blockInfo)}>
        <h2 className={classNames(cls.titleInfo)}>IP ADDRESS</h2>
        <p>{location.ip}</p>
      </span>
      <span className={classNames(cls.blockInfo)}>
        <h2 className={classNames(cls.titleInfo)}>LOCATION</h2>
        <p>{location.region}</p>
      </span>
      <span className={classNames(cls.blockInfo)}>
        <h2 className={classNames(cls.titleInfo)}>TIMEZONE</h2>
        <p>{`UTC ${location.timezone}`}</p>
      </span>
      <span className={classNames(cls.blockInfo)}>
        <h2 className={classNames(cls.titleInfo)}>ISP</h2>
        <p>{location.isp}</p>
      </span>
    </div>
  );
};
