let bg;

let bee;

let beeA = new Array();

let n = 5;

function preload() {

bg = loadImage("03-rose.png");

bee = loadImage("Bee.png");

}

function setup() {

let x, y, x0, y0, s;

createCanvas(400, 846);

imageMode(CENTER);

for (let i = 0; i < n; i++) {

x = random(50, width-50);

y = random(50, height-50);

x0 = x;

y0 = y;

s = random(20, 35);

beeA.push({ x:x, y:y, x0:x0, y0:y0, s:s })

}

}

function draw() {

image(bg, width/2, height/2, width, height);

for (let i = 0; i < beeA.length; i++) {

if (frameCount % 300 == 0) {

beeA[i].x0 = random(50, width-50);

beeA[i].y0 = random(50, height-50);

}

beeA[i].x = beeA[i].x + (beeA[i].x0-beeA[i].x)*0.05 + random(-3, 3);

beeA[i].y = beeA[i].y + (beeA[i].y0-beeA[i].y)*0.05 + random(-3, 3);

image(bee, beeA[i].x, beeA[i].y, beeA[i].s, beeA[i].s);

}

}

function mousePressed() {

let x, y, x0, y0, s;

x = mouseX;

y = mouseY;

x0 = x;

y0 = y;

s = random(10, 25);

beeA.push({ x:x, y:y, x0:x0, y0:y0, s:s })

}