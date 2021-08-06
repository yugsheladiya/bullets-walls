var bullet,wall,thickness;
var speed,weight;
var deformation;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("cyan");  
  drawSprites();

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
  var deformation=0.5 * width * speed* speed/22500;
    if(deformation>180){
     bullet.shapeColor=color(255,0,0);
     wall.shapeColor=color("yellow");
    }

   if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    wall.shapeColor=color("green");
   }

    if(deformation<100){
     bullet.shapeColor=color(0,255,0);
      wall.shapeColor=color("red");
    }

    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

      if(damage>10)
      {
        wall.shapeColor=color(225,0,0);
      }

      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
    }
    
  }
  
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}