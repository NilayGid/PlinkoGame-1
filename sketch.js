const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinko1;
var ground;
var particle1;
var particles = []; 
var plinkos = []; 
var divisions =[];
var divisionHeight = 300;


function setup() {
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300, 790, 800, 20);
  
  for (var k = 0; k<=width; k= k+99){
    divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight ));
  }
  for (var j =40; j<=width-20; j=j+65)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j =15; j<=width-10; j=j+65)
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j =40; j<=width-20; j=j+65)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j =15; j<=width-10; j=j+65)
  {
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0); 
  Engine.update(engine); 
  
  
  ground.display();
 for (var j =0; j<particles.length; j++){
   particles[j].display();
 }
 for (var k =0; k<divisions.length; k++){
  divisions[k].display();

}
for( var i = 0; i<plinkos.length; i++){
  plinkos[i].display();
}
}
function mouseClicked(){
  if(mouseY<75){
  particles.push(new Particle(mouseX, mouseY))
  }
}