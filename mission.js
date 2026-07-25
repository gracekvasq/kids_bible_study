function showMap(){

screen.innerHTML=`

<h1>Your Adventure Map</h1>

<br>

<div style="display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;">

<div class="card">

<h2>📖 Mission 1</h2>

<p>

The Belt of Truth

</p>

<br>

<button onclick="mission1()">

Play

</button>

</div>

<div class="card">

🔒 Locked

</div>

<div class="card">

🔒 Locked

</div>

<div class="card">

🔒 Locked

</div>

</div>

`;

}

function mission1(){

screen.innerHTML=`

<h1>The Belt of Truth</h1>

<br>

<p style="font-size:22px;line-height:1.8;">

Jesus said,

"I am the way,

the truth,

and the life."

Today you must discover why truth is important.

</p>

<br><br>

<h2>

Who said those words?

</h2>

<br>

<button onclick="correctAnswer()">

Jesus

</button>

<br><br>

<button onclick="wrongAnswer()">

Moses

</button>

<br><br>

<button onclick="wrongAnswer()">

David

</button>

`;

}

function correctAnswer(){

player.gems+=10;

player.armor.push("Belt of Truth");

updateStats();

alert("Excellent!");

showMap();

}

function wrongAnswer(){

player.hearts--;

updateStats();

alert("Try Again!");

}
