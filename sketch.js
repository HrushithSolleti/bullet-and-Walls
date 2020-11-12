var car, wall;
var speed,weight;
var bullet,speed,weight,thickness;




function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;

}
 


function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}




function draw() {
  background("white");  
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight *speed*speed/(thickness*thickness*thickness);
  
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
  
    }
  }
  drawSprites();
}













