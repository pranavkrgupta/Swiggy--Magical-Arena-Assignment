class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  calculateAttackDamage() {
    return this.attack * this.rollDice();
  }

  calculateDefendStrength() {
    return this.strength * this.rollDice();
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  isAlive() {
    return this.health > 0;
  }
}

module.exports = Player;
