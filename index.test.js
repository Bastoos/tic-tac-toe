const checkWinner = require("./index");

test("Player wins with a horizontal line", () => {
  const playerPositions = [1, 2, 3];
  expect(checkWinner(playerPositions)).toBe("win");
});

test("Player wins with a vertical line", () => {
  const playerPositions = [1, 4, 7];
  expect(checkWinner(playerPositions)).toBe("win");
});

test("Player wins with a diagonal line", () => {
  const playerPositions = [1, 5, 9];
  expect(checkWinner(playerPositions)).toBe("win");
});

test("Game is still pending without any winning positions", () => {
  const playerPositions = [1, 2];
  expect(checkWinner(playerPositions)).toBe("pending");
});

test("No positions selected yet", () => {
  expect(checkWinner([])).toBe("pending");
});

test("Random positions that do not lead to a win", () => {
  const playerPositions = [1, 2, 4];
  expect(checkWinner(playerPositions)).toBe("pending");
});
