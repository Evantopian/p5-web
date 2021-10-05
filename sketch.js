var fade;
var fadeOffSet = 1;



function setup() {
  createCanvas(550, 700);
  fade = 0;
}

function draw() {
  background(0);
  
  
  fill(240, 255, 0, fade);
  ellipse(275, 200, 100,100);
  
  
  strokeWeight(5);
  
  stroke(240, 255, 0, fade);
  line(275, 250, 275, 450);
  
  
  //Yeah, you can hear me? 
  //Prob a stick figure movin his arms or somethin with face most likely. Sure
  
  //arms
  line(275, 300, 200, 275);
  line(275, 300, 350, 275);
  
  //legs
  line(275, 450, 225, 525);
  line(275, 450, 350, 525);
  
  //face
  fill(0);
  noStroke();
  
  //mouth movement
  let mouthMovement = 0;
  
  if (mouthMovement <= 55 && mouseY <= 460){
    for (let i = 0; i < mouseY; i++){
      mouthMovement += 0.127;
    }
  }
  else{
    mouthMovement = 55;
  }
    
  circle(250, 195, 15);
  circle(300, 195, 15);
  ellipse(275, 220, 30, mouthMovement);
  
  /*
  //hair
  stroke(255, 255, 255, fade);
  line(275, 150, 275, 135);
  line(275, 150, 250, 140);
  line(275, 150, 300, 140);
  */
  
  
  //rice field hat
  fill(152, 117, 0, fade);
  triangle(200, 150, 275, 120, 350, 150);
  
  if (fade<0){ 
    fadeOffSet=1;
  }
  
  if (fade>255){
    fadeOffSet=-10; 
  }
  
  fade += fadeOffSet; 
  cords();
  
  
}


function cords(){
  let x = mouseX;
  let y = mouseY;
  
  fill(255);
  circle(x, y, 5);
  
  print(x, y);
}
