const Player = require("../src/player");

describe("Player", () => {
  test("should create a player with given attributes", () => {
    const player = new Player("A", 50, 5, 10);
    expect(player.name).toBe("A");
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
  });

  test("should roll a dice between 1 and 6", () => {
    const player = new Player("A", 50, 5, 10);
    const roll = player.rollDice();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });

  test("should calculate attack damage", () => {
    const player = new Player("A", 50, 5, 10);
    const damage = player.calculateAttackDamage();
    expect(damage).toBeGreaterThanOrEqual(10);
    expect(damage).toBeLessThanOrEqual(60); // 10 * 1 and 10 * 6
  });

  test("should calculate defend strength", () => {
    const player = new Player("A", 50, 5, 10);
    const strength = player.calculateDefendStrength();
    expect(strength).toBeGreaterThanOrEqual(5);
    expect(strength).toBeLessThanOrEqual(30); // 5 * 1 and 5 * 6
  });

  test("should receive damage and reduce health", () => {
    const player = new Player("A", 50, 5, 10);
    player.receiveDamage(20);
    expect(player.health).toBe(30);
  });

  test("should not have negative health", () => {
    const player = new Player("A", 50, 5, 10);
    player.receiveDamage(60);
    expect(player.health).toBe(0);
  });
});
