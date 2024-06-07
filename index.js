const Player = require("./src/player");
const Game = require("./src/game");

const player1 = new Player("A", 50, 5, 10);
const player2 = new Player("B", 100, 10, 5);

const game = new Game(player1, player2);
game.play();
