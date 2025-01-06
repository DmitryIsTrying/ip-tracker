type OptionalClasses = Record<string, boolean>;

//функция для удобного вычисления итогово classname
export const classNames = (
  mainClass: string,
  optionalClasses: OptionalClasses = {},
  requiredClasses?: Array<string | undefined>
): string => {
  // берём только true дополнительные классы
  const mods = Object.entries(optionalClasses).reduce((acc: string[], [cls, bool]) => {
    if (bool) acc.push(cls);
    return acc;
  }, []);

  // возвращаем строку с готовым classname
  return [mainClass, ...(requiredClasses || []), ...mods].join(" ");
};
