


function preload(){
}


function setup(){
  var canvas = createCanvas(400,window.innerHeight);

  player = new Player();
}


function draw(){
  background('#292929');
  road();

console.log(player.y);
  //player.move();
  player.display();
}

/*
function keyPressed(){
  if(keyIsDown(32)){
    player.y += 200;
  }
}
*/

function road(){

  for(var i=0; i <= window.innerHeight; i += 60){
    fill(255);
    rect(width/2, i, 5,30);
  }
  for(var i=0; i <= window.innerHeight; i += 60){
    fill(255);
    rect(width/2 + 100, i, 5,30);
  }
  for(var i=0; i <= window.innerHeight; i += 60){
    fill(255);
    rect(width/2 - 100, i, 5,30);
  }

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    player.x += 100;
  }
  if(keyCode === LEFT_ARROW){
    player.x -= 100;
  }
  if(keyCode === UP_ARROW){
    player.y -= 50;
  }
  if(keyCode === DOWN_ARROW){
    player.y += 50;
  }


  if(player.x > width - 50){
    player.x = 320;
  }
  if(player.x < 50){
    player.x = 20;
  }
  if(player.y <= 50){
    player.y =50;
  }
  if(player.y >= 500){
    player.y =500;
  }
}