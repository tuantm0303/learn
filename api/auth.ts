import instance from "./instance";

export const signup = (user: any) => {
  return instance.post("/users", user);
};

export const list = (url: any) => {
  return instance.get(url);
};
