var wall,thickness;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight= random(30,52);


  bullet= createSprite(50, 200, 100, 50);
  bullet.shapeColor = "purple";

  wall = createSprite(1200,200,thickness,1600/2);


}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed;

  if(wall.x - bullet.x < bullet.width/2+wall.width/2){   
     bullet.velocityX = 0;
     var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
     fill("white");
     if(damage<10){
       wall.shapeColor = "green";
       text("speed = " + speed,100,100);
       text("weight = " + weight,100,300);
       text("damage = " + damage,100,200);
     }
     if(damage>10){ 
        wall.shapeColor = "red";
        text("speed = " + speed,100,100);
        text("weight = " + weight,100,300);
        text("damage = " + damage,100,200);
     }
     
    }
     
     
  
  drawSprites();
}