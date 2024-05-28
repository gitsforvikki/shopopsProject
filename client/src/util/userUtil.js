export const isAuthentiated = () => {
  return localStorage.getItem("token") ? true : false;
};

export const getToken = () => {
  return localStorage.getItem("token");
};
