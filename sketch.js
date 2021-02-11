var database, name;
var GameState, PlayerCount, player, form, game;
var Playersave; 
var redcar,bluecar,greencar,silvercar;
var allCars;
function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  GameState=0;
  game=new GameStates()
 game.StateSeeker()
 game.begin()
 Playersave=[]
 allCars=[]
 
 
}

function draw() {
  background("blue");  
  if(PlayerCount===4){
    GameState=1;
    game.update(1)
  }
  if(GameState===1){
    game.play()
  }
  //console.log(Playersave)
}
