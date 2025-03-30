const config = {
  apiPath: "https://minipos-api-e19o.onrender.com",
  headers: () => {
    return {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
  },
};
export default config;
