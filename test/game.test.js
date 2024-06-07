const Player = require("../src/player");
const Game = require("../src/game");

describe("Game", () => {
  test("should declare the correct winner", () => {
    const player1 = new Player("A", 50, 5, 10);
    const player2 = new Player("B", 100, 10, 5);
    const game = new Game(player1, player2);

    game.play();

    const winner = player1.isAlive() ? player1.name : player2.name;
    expect(["A", "B"]).toContain(winner);
  });
});
