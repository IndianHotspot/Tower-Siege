const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var platform1, platform2;
var ground;
var slingshot;
var polygon, polygonImg;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, 
box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;

function preload(){

polygonImg=loadImage("sprites/polygon.png")


}

 function setup() {
 createCanvas(1200,800);
 engine = Engine.create();
 world = engine.world;
 stroke(255)

  ground = new Ground(600,height,1200,20);
  
  polygon = Bodies.circle(200,200,30)
  
  World.add(world, polygon)

  platform1 = new Platform(400,550,300,15);

  platform2 = new Platform(800,300,300,15);
  
  box1 = new Box(400,320,100,70);
  box2 = new Box(500,320,100,70);
  box3 = new Box(600,320,100,70);
  box4 = new Box(700,320,100,70);
  box5 = new Box(800,320,100,70);
  

  box6 = new Box(820,320,100,70);

  box7 = new Box(840,320,100,70);

  box8 = new Box(860,320,100,70);

  box9 = new Box(880,320,100,70);

  box10 = new Box(900,320,100,70);

  box11 = new Box(920,320,100,70);

  box12 = new Box(940,320,100,70);

  box13 = new Box(960,320,100,70);

  box14 = new Box(980,320,100,70);

  box15 = new Box(1000,320,100,70);

  box16 = new Box(1020,320,100,70);

  box17 = new Box(1040,320,100,70);

  box18 = new Box(1060,320,100,70);

  box19 = new Box(1080,320,100,70);

  box20 = new Box(1100,320,100,70);

  box21 = new Box(1120,320,100,70);

  box22 = new Box(1140,320,100,70);

  box23 = new Box(1160,320,100,70);

  box24 = new Box(1180,320,100,70);

  box25 = new Box(1200,320,100,70);



  
 
}

function draw() {
  
  background(0);  

  

  platform1.display();

  platform2.display();
  
  ground.display();
  
  box1.display();
  
  box2.display();
  
  box3.display();

  box4.display();

  box5.display();

  box6.display();

  box5.display();

  box6.display();

  box7.display();

  box8.display();

  box9.display();

  box10.display();

  box11.display();

  box12.display();

  box13.display();

  box14.display();

  box15.display();

  box16.display();

  box17.display();

  box18.display();

  box19.display();

  box20.display();

  box21.display();

  box22.display();

  box23.display();

  box24.display();

  box25.display();
  

 imageMode(CENTER)
 image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)
  
  
} 