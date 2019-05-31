const sinon = require("sinon");
const axios = require("axios");
const testFuncs = require("./testFuncs");

describe("Unit Test", () => {
  describe("Login function", () => {
    it("Should send the username and the password", () => {
      sinon.stub(axios, "post").withArgs(
        sinon.match({
          username: expect.any(String),
          password: expect.any(String)
        })
      );
      return testFuncs.testLogin("Vincent", 12345);
    });
    afterEach(() => {
      axios.post.restore();
    });
  });
  describe("Register function", () => {
    it("Should send all user information within register form.", () => {
      sinon.stub(axios, "post").withArgs(
        sinon.match({
          email: expect.any(String),
          username: expect.any(String),
          password: expect.any(String),
          f_name: expect.any(String),
          l_name: expect.any(String),
          social: expect.any(Number),
          mom_m: expect.any(String),
          age: expect.any(Number),
          gender: expect.any(String),
          prof_pic: expect.any(String)
        })
      );
      return testFuncs.testRegister(
        "vjself@hotmail.com",
        "vjself",
        "vjself",
        "Vincent",
        "Self",
        1231241,
        "Jeffries",
        27,
        "M",
        "alsdf;alk"
      );
    });
    afterEach(() => {
      axios.post.restore();
    });
  });
});
