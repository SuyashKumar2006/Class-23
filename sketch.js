const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box=new BOX(20,30,40,40)
    nGround=new GROUND();
}

function draw(){
    background(0);
    Engine.update(engine);

    box.display();
    nGround.display2();
}