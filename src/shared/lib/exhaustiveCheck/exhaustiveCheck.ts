export const exhaustiveCheck = (value: never): never => {
  throw new Error(`Упс, этого не должно было произойти с ${value}`);
};
