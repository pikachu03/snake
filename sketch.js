var s;
var scl = 20 ;
var food;
var cnv;
var moveLeft, moveRight, moveUp, moveDown;

function setup() {
	cnv = createCanvas(600, 600);
	centerCanvas();
	s = new Snake();
	frameRate(15);

	pickLocation();
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);

	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);
	noStroke();

	if (s.eat(food)) {
		pickLocation();
	}

	s.death();
	s.update();
	s.show();

	fill(200);
	textFont('arial', 20);
	text("Score: " + (s.total + 1), 20, 20)

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);

} 

// function mousePressed() {
// 	s.total++;
// } 


function keyPressed() {
	if (keyCode === UP_ARROW && !moveDown) {
		s.dir(0, -1);
		moveUp = true;
		moveLeft = false;
		moveRight = false;
		moveDown = false;
	} else if (keyCode === DOWN_ARROW && !moveUp) {
		s.dir(0, 1);
		moveUp = false;
		moveLeft = false;
		moveRight = false;
		moveDown = true;
	} else if (keyCode === LEFT_ARROW && !moveRight) {
		s.dir(-1, 0);
		moveUp = false;
		moveLeft = true;
		moveRight = false;
		moveDown = false;
	} else if (keyCode === RIGHT_ARROW && !moveLeft) {
		s.dir(1, 0);
		moveUp = false;
		moveLeft = false;
		moveRight = true;
		moveDown = false;
	}

}

function windowResized() {
	centerCanvas();
}

function centerCanvas() {
	var x = (window.innerWidth - width)/2;
	var y = (window.innerHeight - height)/2;
	cnv.position(x, y);
}
