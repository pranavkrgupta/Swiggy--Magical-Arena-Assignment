const Player = require("./player");

// create Game class to manage the arean and combat.
// Implement methods to handle the turn-based combat.
// determine the starting player based on health.
// Define rules for attacking ad defending
// Hnadle the end game condition when a player's health reached zero.

class Game {
  constructor(player1, player2) {
    // Assign the first player object to the player1 property of this Game instance
    this.player1 = player1;
    this.player2 = player2;
  }
  // Method to handle a single round of combat
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

    // Log the attack details and update the health of the defender
    console.log(
      `${attacker.name} attacks ${defender.name} for ${
        damageDealt > 0 ? damageDealt : 0
      } damage.`
    );
    console.log(`${defender.name}'s health is now ${defender.health}.`);
  }

  // Method to play the entire game until one player loses
  play() {
    // Continue playing rounds as long as both players are alive
    while (this.player1.isAlive() && this.player2.isAlive()) {
      this.playRound();
    }
    this.declareWinner();
  }

  // Method to declare the winner of the game
  declareWinner() {
    if (!this.player1.isAlive()) {
      console.log(`${this.player2.name} wins!`);
    } else {
      console.log(`${this.player1.name} wins!`);
    }
  }
}

module.exports = Game;
