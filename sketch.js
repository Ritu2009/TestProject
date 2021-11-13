var box;

function setup() { //creating part will be done in setup func
  createCanvas(600, 800);

  box= createSprite(200,200,50,70);

}

function draw() {
  background(220);

  drawSprites();
}