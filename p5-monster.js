module.exports = class Monster {
  constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife ? true : false;
  }

  // Update monster life value
  updateLife = (lifeChangeAmount) => {
    this.currentLife = this.currentLife - lifeChangeAmount < 0 ? 0 : this.currentLife - lifeChangeAmount;
    this.isAlive = this.currentLife >= this.minimumLife ? true : false;
  };

  // Main game playing method, will exit when all monsters have died
  randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    const lifeDrain = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
    this.updateLife(lifeDrain);
    console.log(`${this.monsterName} random power drain of ${lifeDrain}`);
  };
};
