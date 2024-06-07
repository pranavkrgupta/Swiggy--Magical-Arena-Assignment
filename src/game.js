const Player = require("./player");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  playRound() {
    let attacker, defender;

    if (this.player1.health < this.player2.health) {
      attacker = this.player1;
      defender = this.player2;
    } else {
      attacker = this.player2;
      defender = this.player1;
    }

    const attackDamage = attacker.calculateAttackDamage();
    const defendStrength = defender.calculateDefendStrength();
    const damageDealt = attackDamage - defendStrength;

    if (damageDealt > 0) {
      defender.receiveDamage(damageDealt);
    }

    console.log(
      `${attacker.name} attacks ${defender.name} for ${
        damageDealt > 0 ? damageDealt : 0
      } damage.`
    );
    console.log(`${defender.name}'s health is now ${defender.health}.`);
  }

  play() {
    while (this.player1.isAlive() && this.player2.isAlive()) {
      this.playRound();
    }
    this.declareWinner();
  }

  declareWinner() {
    if (!this.player1.isAlive()) {
      console.log(`${this.player2.name} wins!`);
    } else {
      console.log(`${this.player1.name} wins!`);
    }
  }
}

module.exports = Game;
