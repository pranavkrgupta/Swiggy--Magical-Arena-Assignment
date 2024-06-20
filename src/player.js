// Define Player class with attributes for health, strength and attack.
// create methods for attacking, defending, and handling the game logic.

class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  // develop dice rolling mechanism using random number generation
  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // calculate attack damage
  calculateAttackDamage() {
    return this.attack * this.rollDice();
  }

  // calculate defense capability
  calculateDefendStrength() {
    return this.strength * this.rollDice();
  }

  // update player health accordingly
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  isAlive() {
    return this.health > 0;
  }
}

module.exports = Player;
