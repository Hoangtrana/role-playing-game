const hero = document.getElementById("hero");
const monster = document.getElementById("monster");

let heroDiv = `<div class="character-card">
<h4 class="name">Wizard</h4>
<img class="avatar" src="images/wizard.png" />
<p class="health">health: <b> 60 </b></p>

<div class="dice-container"><div class="dice">6</div></div>
</div>`;
hero.innerHTML = heroDiv;

let monsterDiv = `<div class="character-card">
 <h4 class="name">Orc</h4>
 <img class="avatar" src="images/orc.png" />
 <p class="health">health: <b> 10 </b></p>
 <div class="dice-container"><div class="dice">4</div></div>
</div>`;

monster.innerHTML = monsterDiv;
