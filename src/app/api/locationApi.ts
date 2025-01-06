import axios from "axios";
import { ResponseLocation } from "./locationApi.types";

export const instance = axios.create({
  baseURL: "https://geo.ipify.org/api/v2/country,city",
  params: {
    apiKey: "at_S5PNZhEBqHn2YWHy9bfoER9mymoeK",
  },
});

export const locationApi = {
  getInfo() {
    return instance.get<ResponseLocation>("");
  },
  getLocation(ipAddress: string) {
    return instance.get<ResponseLocation>("", {
      params: {
        ipAddress,
      },
    });
  },
};
