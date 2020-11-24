
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2, box3;


function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

  ground = new Ground(800,650,2000,10);
  box1 = new Box(650,635,140,15);
  box2 = new Box(580,590,15,80);
  box3 = new Box(720,590,15,80);

  var ball_option ={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:0.3
  }
  
}


function draw() {
 
  Engine.run(engine);
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();

 fill("pink");
  ellipse(170,630,30,30);
 
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){


  Matter.Body.applyForce({x:85,y:85})

}
}



