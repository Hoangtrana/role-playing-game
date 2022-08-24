import characterData from "./data.js";
import { Character } from "./Character.js";

/*
CHALLENGE
1. Make the attack button trigger a dice roll for both
wizard and orc (which method on the constructor does that??)
2. Make sure the new dice score shows in the app
**hint.md for help!!**
*/

function attack() {
  console.log("click");
  // wizard.getDiceHtml();
  //orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || orc.dead) {
    endGame();
  }
}

document.getElementById("attack-button").addEventListener("click", attack);

const wizard = new Character(characterData.hero);
console.log(characterData.monster);
const orc = new Character(characterData.monster);

// Game render
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

render();

// End game
function endGame() {
  const endEmoji =
    wizard.health === 0 && orc.health === 0
      ? "☠️"
      : wizard.health > 0
      ? "🔮"
      : "☠️";
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Orc is Victorious";
  let endGameEl = "";
  endGameEl = `<div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
  </div>`;

  document.body.innerHTML = endGameEl;
  console.log(endMessage);
}
