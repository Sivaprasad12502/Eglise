import axiosClient from "./axiosClient";


export const loginApi = async (data) => {
  const res = await axiosClient.post("accounts/login/", data);
  return res.data;
};
export const refreshTokenApi = async () => {
  const refresh = localStorage.getItem("refresh");
  const res = await axiosClient.post("accounts/token/refresh/", { refresh });
  return res.data;
};
