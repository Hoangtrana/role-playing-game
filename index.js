import characterData from "./data.js";
import { Character } from "./Charater.js";

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
