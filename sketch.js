const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var backgroundImg
var wall1,wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18
var royaLprince,princess1
var goblin
var key1,key2,key3,key4
var yellowKey,purpleKey,pinkKey,greyKey
 PLAY = 1
 END =  0
 gameState = PLAY;

function preload(){
backgroundImg = loadImage("Images/dungeon1.png")

key1 = loadImage("Images/keyYellow.png")
key2 = loadImage("Images/keyPink.png")
key3 = loadImage("Images/keyPurple.png")
key4 = loadImage("Images/keyGrey.png")

royaLprince = loadImage("Images/prince.png")


}





function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
    world = engine.world;

    prince = createSprite(50,25,100,100)
    prince.addImage("prince",royaLprince)
    prince.scale=0.3;

wall1= new Wall(970,15,1600,50)
wall2= new Wall(15,450,50,900)
wall3= new Wall(650,730,1400,50)
wall4= new Wall(1500,450,50,900)
wall5= new Wall(150,20,50,300)
wall6= new Wall(375,190,500,50)
wall7= new Wall(375,315,50,300)
wall8= new Wall(600,315,50,300)
wall9= new Wall(1000,150,50,300)
wall10= new Wall(790,150,50,300)
wall11= new Wall(125,350,250,50)
wall12= new Wall(215,665,50,300)
wall13= new Wall(485,665,50,300)
wall15= new Wall(830,500,50,250)
wall16= new Wall(940,600,250,50)
wall17= new Wall(1070,500,50,250)
wall18= new Wall(1270,500,50,600)
wall19= new Wall(790,600,250,50)

princess1= new Princess(120,675,70,70,"Images/princess1.png")
princess2= new Princess(1400,105,70,70,"Images/princess2.png")
princess3= new Princess(200,90,70,70,"Images/princess3.png")
princess4= new Princess(940,525,70,70,"Images/princess4.png")


/*/key1= new Key(50,255,50,50)
key2= new Key(50,255,50,50)
key3= new Key(50,255,50,50)
key4= new Key(50,255,50,50)/*/
 
yellowKey = createSprite(500,255,50,50)
yellowKey.addImage("yellow",key1)
yellowKey.scale=0.3;
pinkKey = createSprite(880,155,50,50)
pinkKey.addImage("pink",key2)
pinkKey.scale=0.3;
purpleKey = createSprite(340,655,50,50)
purpleKey.addImage("purple",key3)
purpleKey.scale=0.3;
greyKey = createSprite(600,115,50,50)
greyKey.addImage("grey",key4)
greyKey.scale=0.3;
 
}

function draw() {
  background(backgroundImg); 

  if(gameState === PLAY){

    if(prince.isTouching(key1)){
      key1.destroy()
  }
}

if(keyDown(RIGHT_ARROW)) {
  prince.x =  prince.x+5;
}
if(keyDown(LEFT_ARROW)) {
  prince.x =  prince.x-5;
}
if(keyDown(UP_ARROW)) {
  prince.y =  prince.y-5;
}
if(keyDown(DOWN_ARROW)) {
  prince.y =  prince.y+5;
}

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  //wall20.display();
  //wall21.display();

  //prince.display();

  princess1.display();
  princess2.display();
  princess3.display();
  princess4.display();

  /*/key1.display();
  key1.display();
  key1.display();
  key1.display();/*/
  drawSprites();
}

