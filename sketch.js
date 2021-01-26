var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 tallRect = createSprite(650, 50, 50, 50);
 tallRect.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect, tallRect)) {
movingRect.shapeColor = "red"
tallRect.shapeColor = "red"
}
else{
  movingRect.shapeColor = "green"
  tallRect.shapeColor = "green"
}
 
  drawSprites();

}


