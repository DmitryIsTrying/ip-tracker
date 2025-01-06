import axios from "axios";

const mapArrToStrings = (arr: number[]): string[] => {
  return arr.map((num) => String(num));
};

type ResponseUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const getData = async () => {
  try {
    const response = await axios.get<ResponseUser[]>("https://jsonplaceholder.typicode.com/users");
    const userIds = response.data.map((user) => user.id);
    return mapArrToStrings(userIds);
  } catch (err) {}
};
