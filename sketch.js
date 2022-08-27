var box_1;
var box_2;
function setup() {
  createCanvas(400,400);

  box_1 = createSprite(200, 200, 20, 20)
  box_1.shapeColor = "red"
  box_2 = createSprite(250, 100, 20, 20)
  box_2.shapeColor = "blue"
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    box_1.x = box_1.x+2;
    box_2.x = box_2.x+2;
  }
  if(keyDown(LEFT_ARROW)){
    box_1.x = box_1.x-2;
    box_2.x = box_2.x-2;
  }
  if(keyDown(UP_ARROW)){
    box_1.y = box_1.y-2;
    box_2.y = box_2.y-2;
  }
  if(keyDown(DOWN_ARROW)){
    box_1.y = box_1.y+2;
    box_2.y = box_2.y+2;
  }

drawSprites()
}




