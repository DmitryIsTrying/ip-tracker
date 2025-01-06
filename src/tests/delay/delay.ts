export const delay = (callback: Function, ms: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(callback());
    }, ms);
  });
};
