
function preload(){
seaImg = loadImage("sea.png");
ShipImg1= loadAnimation("ship-1.png");
shipImg2 = loadAnimation("shpip-2.png");
shipImg3 = loadAnimation("ship-3.png");
shipImg4 = loadAnimation("ship-4.png");
spriteName.addImage(SeaImg);
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 drawSprites();
}