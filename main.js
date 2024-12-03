const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let p1 = [];
let p2 = [];

let player = "1";
let result = "pending";
const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const checkWinner = (p) => {
  return winConditions.some((c) => c.every((_c) => p.includes(_c)))
    ? "win"
    : "pending";
};

const gameLoop = () => {
  console.log("");
  console.log("-------------");
  console.log("Player 1 positions: ", p1);
  console.log("Player 2 positions: ", p2);
  console.log("-------------");
  console.log("");

  rl.question(`Player ${player}, choose your position (1-9): `, (a) => {
    const position = Number(a);

    if (
      isNaN(position) ||
      position < 1 ||
      position > 9 ||
      p1.includes(position) ||
      p2.includes(position)
    ) {
      console.log("Invalid position. Please choose another position.");
      gameLoop();
      return;
    }

    if (player == "1") {
      p1.push(position);
      result = checkWinner(p1);
      player = "2";
    } else {
      p2.push(position);
      result = checkWinner(p2);
      player = "1";
    }

    if (result === "pending" && p1.length + p2.length === 9) {
      result = "draw";
    }

    if (result == "pending") {
      gameLoop();
    } else {
      console.log(
        result === "win"
          ? `Player ${player === "1" ? "2" : "1"} wins!`
          : "It's a draw!"
      );
    }
  });
};

gameLoop();
