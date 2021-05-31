var jerry, jerryAnimation;
var tom , tomAnimation;
var cat, catAnimation;
var garden , gardenImage;


function preload() {

 jerryAnimation = loadAnimation("images/mouse2.png","images/mouse3.png");
 tomAnimation = loadAnimation("images/cat2.png","images/cat3.png");
 catAnimation = loadAnimation("images/cat1.png");
 mouseAnimation = loadAnimation("images/mouse1.png");
 gardenpng = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
  garden = createSprite(500,400,10,80);
  garden.scale = 1.2;
  garden.addImage(gardenImage)
   
  tom = createSprite(800,600,8,6);
  tom.addAnimation("tomAnimation",tomAnimation);
  tom.scale =0.2;
  tom.velocityX = -3;


  jerry = createSprite(100,600,3,2);
  jerry.addAnimation("jerryAnimation",jerryAnimation);
  jerry.scale = 0.1;


}

function draw() {

    background(0,0,0);

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("images/tomFour.png",catAnimation);
        tom.changeAnimation("images/tomFour.png");
        tom.velocityX =0;
        jerry.addAnimation("images/jerryFour.png",mouseAnimation);
        jerry.changeAnimation("images/jerryFour.png");
      
        }
    drawSprites();
}

function keypressed() {

if (keycode === LEFT_ARROW) {

    jerry.addAnimation ("jerryAnimation",jerryAnimation);
    jerry.changeAnimation("jerryAnmimation");
    jerry.frameDelay = 25;
    
}



}
