var backgroundImage;
var rocketImage;
var standImage;
var smokeeImage;
var longSmokeImage;

function preload(){
	backgroundImage = loadImage("image/background.png")
	rocketImage = loadImage("image/rocket.png")
	standImage = loadImage("image/stand.png")
	smokeeImage = loadImage("image/smokee.png")
	longSmokeImage = loadImage("image/long smoke.png")
}

function setup() {
	createCanvas(800, 600);
}

function draw() {



	image(backgroundImage, 0, 0);
	image(standImage, 330, 450);

	//find rockets possition
	var rocketY = 280;
	if (mouseIsPressed) {
		rocketY = mouseY;
		if(rocketY > 280){
			rocketY = 280;
		}
	}
	//draw smoke
	if (mouseIsPressed){
	image(smokeeImage, 345, 440);
  image(longSmokeImage, 430, 150);
}

	noStroke();
	fill(145, 255, 255);
	rectMode(CORNERS);
	if(rocketY > 100){
	rect(300, 100, 600, rocketY+120);

	}

 	image(rocketImage, 410, rocketY);



}
