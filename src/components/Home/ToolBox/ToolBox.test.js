const testFuncs = require("./testFuncs");

describe("Unit Test", () => {
  describe("Panel controller function", () => {
    it("Should return a number.");
    return testFuncs.testPanelController(1);
  });
  afterEach(() => {
    axios.post.restore();
  });
});
