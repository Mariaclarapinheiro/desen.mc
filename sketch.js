function setup() {
  createCanvas(400, 400);
  background("purple");

}

function draw() {
  if(mouseIsPressed){
  stroke("yellow");
  fill("black");
  rect(mouseX,mouseY,8,8)
  }
}
