function saveGame(){

localStorage.setItem(

"BibleAdventure",

JSON.stringify(player)

);

}

function loadGame(){

let save=localStorage.getItem("BibleAdventure");

if(save){

Object.assign(player,JSON.parse(save));

}

}
