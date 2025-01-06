import { classNames } from "@shared/lib";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import cls from "./Map.module.scss";
import { useAppSelector } from "@app/model/store";
import { selectCoords } from "@app/model/appSlice";
import { location } from "@shared/assets";

export const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const coords = useAppSelector(selectCoords);

  useEffect(() => {
    // Инициализация карты
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([coords.lat, coords.lng], 13); // Укажите координаты и уровень масштабирования

      // Добавление слоя с картой (например, OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© Frontend Mentor",
      }).addTo(mapRef.current);

      // Создаем контейнер для JSX
      const popupContent = document.createElement("div");

      // Рендерим JSX в контейнер
      createRoot(popupContent).render(<div className={cls.popup}>Your location</div>);

      // Создаем пользовательский иконку
      const customIcon = new L.Icon({
        iconUrl: location, // Путь к SVG
        iconSize: [30, 30], // Размер иконки
        iconAnchor: [20, 40], // Якорь иконки (точка, которая будет указывать на координаты)
        popupAnchor: [-5, -40], // Смещение для попапа
      });

      // Добавляем маркер с пользовательским иконкой
      L.marker([coords.lat, coords.lng], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup("Your location")
        .openPopup();
    }

    // Очистка при размонтировании компонента
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coords]);

  return <div ref={mapContainerRef} className={classNames(cls.Map)} />;
};
