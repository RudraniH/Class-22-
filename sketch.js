var popCat,popImg
var bg,bgImg;
var food,food1Img,food2Img,food3Img;
var foodgroup;
function preload(){
popImg=loadAnimation("pop.gif")
food1Img=loadImage("food1.png")
food2Img=loadImage("food2.png")
food3Img=loadImage("food3.png")
bgImg=loadImage("bg.png")
}

function setup() {
 createCanvas(600,500);
 bg=createSprite(400,170,900,500)
 bg.addImage(bgImg)
 bg.scale=0.9
 bg.velocityX=-3;
 
 popCat=createSprite(200,200,20,20)
 popCat.addAnimation("a cat",popImg)
 popCat.scale=0.3

 foodgroup=new Group();
}

function draw() {
    background("black")
if(bg.x<250){
    bg.x=bg.width/3
}
if(keyDown("space")){
    popCat.velocityY=-5
}
popCat.velocityY+=0.5

catFood();

if(popCat.isTouching(foodgroup)){
    foodgroup.destroyEach()
}

    drawSprites();
 
}

function catFood(){
    if(frameCount%100===0){
        food=createSprite(600,Math.round(random(20,300)),20,20)
        food.velocityX=-5
        var rand=Math.round(random(1,3))
        if(rand===1){
            food.addImage(food1Img)
        }
        else if(rand===2){
            food.addImage(food2Img)
        }
        else{
            food.addImage(food3Img)    
        }

      food.scale=0.5;
      foodgroup.setLifetimeEach(500);
      foodgroup.add(food)
    }
}