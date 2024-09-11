var canvas; 
let boxes = []

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  angleMode(DEGREES);
  
}

function draw() {
  background(0, 0, 0);
  orbitControl();
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].display();
    boxes[i].move();
    boxes[i].bounce();
    //boxes[i].turn();
    orbitControl();
    
     // Create an options object.
  let options = {
    disableTouchActions: true,
    freeRotation: true
  };

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  // Enable orbiting with the mouse.
  // Prevent accidental touch actions on touchscreen devices
  // and enable free rotation.
  orbitControl(1, 1, 1, options);
  }
}

function mousePressed() {
  //let boxes = new Boxes(mouseX, mouseY);
  boxes.push(new Boxes(mouseX, mouseY, 0));
}

class Boxes {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xspeed = 1;
    this.yspeed = 1;
    this.zspeed = 1;
    //this.size = 10;
  }
  
  display() {
    noFill();
    strokeWeight(2);
    stroke(255);
    box(this.x, this.y, this.z);
  }
  
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.z += this.zspeed;
  }

  
  bounce() {
    if(this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }
    
    if(this.y > height || this.y < 0) {
      this.yspeed *= -1;
      }
    
    if(this.z > height || this.z < 0) {
      this.zspeed *= -1;
      }
    
  }
  
  // turn() {
  //   rotate(45);
  // }
}