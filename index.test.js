const checkWinner = require("./index");

test("The player one should win!", () => {
  expect(checkWinner([1, 2, 3])).toBe("win");
});
