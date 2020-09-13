var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redBox1Sprite,redBoxleftSprite,redBoxRightSprite;
var redBox1,redBoxleft,redBoxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	/*redBox1Sprite=createSprite(400,650,200,20);
	redBox1Sprite.shapeColor="red";

    redBoxleftSprite=createSprite(290,610,20,100);
    redBoxleftSprite.shapeColor="red";

    redBoxRightSprite=createSprite(510,610,20,100);
    redBoxRightSprite.shapeColor="red";*/

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	redBox1=Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
	World.add(world, redBox1);
	  
	redBoxleft=Bodies.rectangle(290, 610, 20, 100, {isStatic:true} );
	World.add(world, redBoxleft);
  
	redBoxRight=Bodies.rectangle(510, 610, 20, 100, {isStatic:true} );
	World.add(world, redBoxRight);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 

  redBox1Sprite.x= redBox1.position.x;
  redBox1Sprite.y= redBox1.position.y;
  redBoxleftSprite.x= redBoxleft.position.x;
  redBoxleftSprite.y= redBoxleft.position.y;
  redBoxRightSprite.x= redBoxRight.position.x;
  redBoxRightSprite.y= redBoxRight.position.y;

  drawSprites();

  if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false); 
  }

}



