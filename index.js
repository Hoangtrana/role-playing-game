const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: [6],
  diceCount: 1,
};

function Character(data) {
  this.elementId = data.elementId;
  this.name = data.name;
  this.avatar = data.avatar;
  this.health = data.health;
  this.diceRoll = data.diceRoll;
  this.diceCount = data.diceCount;
  this.getCharactorHtml = function () {
    document.getElementById(
      this.elementId
    ).innerHTML = `<div class="character-card">
            <h4 class="name"> ${this.name} </h4>
            <img class="avatar" src="${this.avatar}" />
            <div class="health">health: <b> ${this.health} </b></div>
            <div class="dice-container">
            ${getDiceHtml(this.diceCount)}
            </div>
        </div>`;
  };
}

const wizard = new Character(hero);
const orc = new Character(monster);
wizard.getCharactorHtml();
orc.getCharactorHtml();

//GetRandom
/*
Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 
2  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.
3  For testing purposes, call the function with a diceCount of 
   3 and log out the result. 
** check out hint.md for extra help! **
*/

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6 + 1);
  });
}

console.log(getDiceRollArray(3));

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join("");
}
