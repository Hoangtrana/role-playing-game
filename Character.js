import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

/*
Challenge
1. Add a new property called currentDiceScore to each character's 
 data and initialise it to an empty array.
2. Rewrite the getDiceHtml method so it updates currentDiceScore 
 with the values returned by getDiceRollArray.
*/
const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;
function Character(data) {
  Object.assign(this, data);
  this.maxHealth = this.health;
  this.getDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join(" ");
  };
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, currentScore) => total + currentScore
    );
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
    console.log(getPercentage(this.health, this.maxHealth));
  };

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount, diceArray } = this;
    let diceHtml = this.getDiceHtml(diceCount);

    return `
          <div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
              <div class="dice-container">
                  ${diceArray}
              </div>
          </div>`;
  };
}
export { Character };
