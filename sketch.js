var tom,tomImage2,tomImage;
var jerry,jerryImage;
var garden;
function preload() {
    //load the images here
    garden=loadImage("garden.png");
    tomImage=loadImage("tomOne.png");
    tomImage2=loadImage("tomTwo.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry.createSprite(500,400,30,30);
jerry.addImage(jerryImage);
jerry.scale=0.7;
tom.createSprite(300,200,30,30);
tom.addImage(tomImage);
tom.scale=0.8;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

Text(mouseX+','+mouseY,10,45)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code her
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5;
 tom.addAnimation("catrunning",tomImage2);
 tom.changeAnimation("tomRunning");
  }

}
