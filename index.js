import characterData from "./data.js";
import { Character } from "./Character.js";

/*
CHALLENGE
1. Make the attack button trigger a dice roll for both
wizard and orc (which method on the constructor does that??)
2. Make sure the new dice score shows in the app
**hint.md for help!!**
*/
let monstersArray = ["loki", "orc", "goblin"];

function getNewMonster() {
  let nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}
let damageAbility = true;
function attack() {
  // wizard.getDiceHtml();
  //orc.getDiceHtml();
  if (damageAbility) {
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      damageAbility = false;
      if (monstersArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          damageAbility = true;
        }, 1500);
      } else {
        setTimeout(() => {
          endGame();
        }, 1500);
      }
    }
  }
}

document.getElementById("attack-button").addEventListener("click", attack);

const wizard = new Character(characterData.hero);
const loki = new Character(characterData.monster);
let monster = getNewMonster();

// Game render
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

render();

// End game
function endGame() {
  damageAbility = false;
  const endEmoji =
    wizard.health === 0 && loki.health === 0
      ? "🌗"
      : wizard.health > 0
      ? "🔮🌔"
      : "☠️ 🌘";
  const endMessage =
    wizard.health === 0 && loki.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Monster is Victorious";
  let endGameEl = "";
  endGameEl = `<div class="end-game">
      <h1>Game Over</h1>
      <h2>${endMessage}</h2>
      <h3 class="end-emoji">${endEmoji}</h3>
  </div>`;

  document.body.innerHTML = endGameEl;
  console.log(endMessage);
}
