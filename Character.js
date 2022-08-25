import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

/*
Challenge
1. Add a new property called currentDiceScore to each character's 
 data and initialise it to an empty array.
2. Rewrite the getDiceHtml method so it updates currentDiceScore 
 with the values returned by getDiceRollArray.
*/

function Character(data) {
  Object.assign(this, data);
  this.maxHealth = this.health;
  this.getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth);
    return `<div class="health-bar-outer">
    <div class="health-bar-inner + ${percent <= 25 ? "danger" : ""}"
        style="width: ${percent}%">
    </div>
</div>`;
  };
  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join(" ");
  };

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, num) => total + num
    );
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount, diceArray } = this;
    let diceHtml = this.getDiceHtml(diceCount);
    const healthBar = this.getHealthBarHtml();
    return `
          <div class="character-card">
           
              <h4 class="name"> ${name} </h4>
              <div></div>
              <img class="avatar" src="${avatar}" />
             
              
            <div class="health">health: <b> ${health} </b>
            ${healthBar}
            </div>
           
              <div class="dice-container">
                  ${diceArray}
              </div>
          </div>`;
  };
}
export { Character };
