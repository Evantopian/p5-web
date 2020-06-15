var fade;
var fadeAmount = 1

function setup() {
  createCanvas(600, 650);
  noStroke();
  fade = mouseX;
}

function draw() {
  let divX = mouseX / 2.5;
  background(0, 0, 0, divX);


  /* moon fade in progress
  fill(255, 255, 255, divX);
  ellipse(300, 325, 125, 100);
  */

  fill(255, 255, 255, divX);
  triangle(180, 315, 300, 135, 420, 315);


  fill(0, 0, 0, divX);
  triangle(185, 312, 300, 140, 415, 312);

  strokeWeight(3);
  stroke(255, 255, 255, divX);
  line(0, 285, 247, 215);

  //Add black line to diagonal cut the lines made.


  //cordinates();

  /////////////
  // Rainbow //
  /////////////

  strokeWeight(7);
  stroke(255, 0, 0, divX); //red
  line(341, 195, 600, 270);

  stroke(255, 120, 0, divX); //orange
  line(345, 203, 600, 276);

  stroke(255, 247, 0, divX); //yellow
  line(350, 211, 600, 283);

  stroke(0, 196, 255, divX); //blue
  line(356, 219, 600, 290);

  stroke(3, 195, 61, divX); //green
  line(361, 227, 600, 297);

  stroke(171, 0, 255, divX); //purple
  line(366, 235, 600, 303);


  noStroke();

  fill(135, 135, 135, mouseX / 4);
  triangle(246, 215, 336, 188, 364, 232);

  //diagonal cut off
  strokeWeight(3);
  stroke(255, 255, 255, divX);
  line(300, 140, 415, 310);
  noStroke();

  cordinates();


  //Auto fade
  /*
  if (fade<0){ 
    fadeAmount=1;
  }
  if (fade>255){
    fadeAmount=-10; 
  }
  fade += fadeAmount; 
  */
}


function cordinates() {
  let x = mouseX;
  let y = mouseY;
  //Finding cordinates.
  fill(0, 255, 43);
  circle(x, y, 5);
  print(x, y);
}
