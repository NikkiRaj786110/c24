const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,370,70,70);
    box2 = new Box(840,370,70,70);
    ground = new Ground(600,height,1200,20);
    pig1= new Pig(720,370);
    log1= new Log(720,310,300,PI/2);
    box3= new Box(600,280,70,70);
    box4= new Box(840,280,70,70);
    log2= new Log(720,250,300,PI/2);
    box5= new Box(720,230,70,70);
    log3 =new Log(650,210,150,PI/4);
    log4= new Log(800,210,150,-PI/4)


    
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display(); 



}