import http from "./httpServices";
import config from "./config.json";

export const registerAxios = (user) => {
  return http.post(`${config.register}`, JSON.stringify(user));
};

export const loginAxios = (user) => {
  return http.post(`${config.fakeApi}`, JSON.stringify(user));
};
