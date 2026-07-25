const screen = document.getElementById("screen");

function updateStats(){

document.getElementById("gems").textContent =
GAME.player.gems;

document.getElementById("hearts").textContent =
GAME.player.hearts;

document.getElementById("armor").textContent =
GAME.player.armor.length;

}

function home(){

screen.innerHTML=`

<div class="center">

<h1 class="bigTitle">

Welcome, Young Hero!

</h1>

<p class="subtitle">

Darkness has stolen every piece of the Armor of God.

Only someone brave enough to learn God's Word can bring light back to the kingdom.

Complete Bible missions, solve puzzles, discover hidden treasures, and become God's Champion!

</p>

<button class="primary" onclick="map()">

Start Adventure

</button>

</div>

`;

}

function map(){

screen.innerHTML=`

<h1 class="bigTitle">

Adventure Map

</h1>

<div style="display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
margin-top:60px;">

${missionCard()}

<div style="opacity:.4">

🔒 Locked

</div>

<div style="opacity:.4">

🔒 Locked

</div>

</div>

`;

}

function missionCard(){

return `

<div style="background:#eef6ff;
padding:30px;
border-radius:25px;
text-align:center;">

<h2>

📖 Belt of Truth

</h2>

<br>

<p>

John 14:6

</p>

<br>

<button class="primary"

onclick="mission1()">

Play

</button>

</div>

`;

}

function mission1(){

screen.innerHTML=`

<h1 class="bigTitle">

Mission 1

</h1>

<p class="subtitle">

Jesus said,

"I am the way,

the truth,

and the life."

Who said these words?

</p>

<div class="center">

<button class="primary"

onclick="correct()">

Jesus

</button>

<br><br>

<button class="primary"

onclick="wrong()">

David

</button>

<br><br>

<button class="primary"

onclick="wrong()">

Moses

</button>

</div>

`;

}

function correct(){

GAME.player.gems+=10;

GAME.player.armor.push("Truth");

updateStats();

alert("Excellent!");

map();

}

function wrong(){

GAME.player.hearts--;

updateStats();

alert("Try again!");

}

updateStats();

home();
