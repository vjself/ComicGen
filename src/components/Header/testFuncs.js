const axios = require("axios");

module.exports = {
  testLogin: (username, password) => {
    axios.post("/api/login", { username, password });
  },

  testRegister: (
    email,
    username,
    password,
    f_name,
    l_name,
    social,
    mom_m,
    age,
    gender
  ) => {
    axios.post("/api/register", {
      email,
      username,
      password,
      f_name,
      l_name,
      social,
      mom_m,
      age,
      gender
    });
  }
};
