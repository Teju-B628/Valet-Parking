canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

CarX = 0;
CarY = 450;
CarWidth = 100;
CarHeight = 90;

function add() {
 background_img = new Image();
 background_img.onLoad = uploadBackground;
 background_img.src = background_image;
 car_img = new Image();
 car_img.onLoad = uploadGreencar;
 car_img.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadGreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_img, CarX, CarY, CarWidth, CarHeight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(CarY >= 0){
		CarY = CarY - 10;
		uploadBackground();
		uploadGreencar();
	}
}

function down()
{
if(CarY <= 450){
	CarY = CarY + 10
	uploadBackground();
	uploadGreencar();
}
}

function left()
{
	if(CarX >= 0){
CarX = CarX - 10;
uploadBackground();
uploadGreencar();
	}
	
}

function right()
{
	if(CarX <= 850){
		CarX = CarX + 10;
		uploadBackground();
		uploadGreencar();
	}
}
