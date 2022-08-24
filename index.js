import characterData from "./data.js";
import { Character } from "./Charater.js";

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
}

document.getElementById("attack-button").addEventListener("click", attack);

const wizard = new Character(characterData.monster);
console.log(characterData.monster);
const orc = new Character(characterData.hero);

/* MINI CHALLENGE */
// 1 Create one render() function that calls both wizard and orc
//  so we can control when they render.

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

render();

// 2 call the function.
