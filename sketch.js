const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground,div
var div_ar = [];
var plinko_ar = [];
var ball_ar = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(240,790,480,20);

  for(var d = 0; d <= 480; d = d+80 ){
    div_ar.push(new Ground(d,650,10,300));
  }
  for(var p = 40; p <= 480; p = p+50 ){
    plinko_ar.push(new plinko(p,75,10));
  }
  for(var p = 15; p <= 480; p = p+50 ){
    plinko_ar.push(new plinko(p,125,10));
  }
  for(var p = 40; p <= 480; p = p+50 ){
    plinko_ar.push(new plinko(p,175,10));
  }
  for(var p = 15; p <= 480; p = p+50 ){
    plinko_ar.push(new plinko(p,225,10));
  }
}

function draw() {
  background("black");    
  Engine.update(engine);

  if(frameCount%40 === 0){
    ball_ar.push(new ball(random(width/4 - 20,width/4 + 20),10,10));
  }
 
  for(var u = 0;u<div_ar.length ; u++){
    div_ar[u].display();
  }
  for(var l = 0;l<plinko_ar.length ; l++){
    plinko_ar[l].display();
  }
  for(var j = 0;j<ball_ar.length ; j++){
    ball_ar[j].display();
  }  
  ground.display();
  drawSprites();

}