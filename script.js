const player = {

gems:0,

hearts:3,

armor:[],

badges:[],

mission:1

};

const screen = document.getElementById("screen");

function updateStats(){

document.getElementById("gems").innerHTML=player.gems;

document.getElementById("hearts").innerHTML=player.hearts;

document.getElementById("armorCount").innerHTML=player.armor.length;

}

function home(){

screen.innerHTML=`

<div style="text-align:center;margin-top:80px;">

<h1>Welcome Hero!</h1>

<br>

<p style="font-size:22px;line-height:1.7;">

The Kingdom of Light needs you.

Travel through the Bible, complete missions, solve puzzles,

and collect every piece of the Armor of God.

</p>

<br><br>

<button onclick="showMap()">

Start Adventure

</button>

</div>

`;

}

home();

updateStats();
