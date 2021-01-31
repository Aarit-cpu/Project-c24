const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    box2 = new Box(920,320,70,70);
    
    ground = new Ground(600,390,1200,20)
    pig1 = new pig(810,350)
    
    log1 = new log(810,260,300,PI/2)
    
    bird1 = new bird(200,200)

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box2.display();
    
    ground.display();
    pig1.display();
    
    log1.display();
    
    bird1.display();

}