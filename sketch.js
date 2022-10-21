let bg;
let y = 0;
function setup() {
  bg = loadImage('background.jpg');
  createCanvas(600,400);
  
  button = createButton('click me');
  button.position(50, 100);
  button.mousePressed(game1);
  
  button = createButton('click me2');
  button.position(50, 169);
  button.mousePressed(game2);
  
  button = createButton('click me3');
  button.position(50, 250);
  button.mousePressed(game3);
}

function game1{
}
function game2{
}
function game3{
}

function draw() {
    background(bg);
    
 
}
