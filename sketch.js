

function setup() {
  createCanvas(400, 400);
  background(0, 0, 0);

}

function draw() {

}
function keyTyped() {
  if ((key === 'a') || (key === 'A')){
    letraA(255);
  }
  if ((key === 'o') || (key === 'O')){
    letraO();
  }

}

function letraA(x){
  fill(x, 65, 3);
  rect(0, 0, 400, 400);
  fill(x, 250, 250);
  noStroke();
  triangle(200, 50, 100, 350, 300, 350);
}

function letraO(){
  noStroke();
  fill(186, 194, 217);
  rect(0, 0, 400, 400);
  fill(234, 214, 3);
  ellipseMode(CENTER);
  ellipse(200, 200, 350, 350);
  fill(16, 31, 126);
  triangle(200, 25, 25, 200, 375, 200);
  arc(200, 200, 350, 350, 0, PI, PIE);
  fill(234, 214, 3);
  triangle(200, 375, 25, 200, 375, 200);
  triangle(200, 25, 195, 200, 205, 200);
  fill(16, 31, 126);
  triangle(200, 375, 195, 200, 205, 200);
}

