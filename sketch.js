
var arrow,arrowimg;
var archer,archerimg,archerup,archerupimg,archerleft,archerleftimg
var water,waterimg
var gameOver,gameOverimg
var ground,groundimg
var apple,appleimg
var watermelon,watermelonimg
var target,targetimg
var bomb,bombimg
var totalscore=0


function preload(){
	arrowimg = loadImage("arrowpic.png");
	archerimg = loadAnimation("archer2.0.png","archer2.0b.png");
    archerleftimg=loadAnimation("archer3.0.png","archer3.0b.png")
    archerupimg=loadImage("archer4.0.png")
	waterimg = loadImage("water.png");
    groundimg = loadImage("Ground.png")
    appleimg = loadImage("apple.png")
    watermelonimg = loadImage("watermelon.png")
    targetimg = loadImage("target1.png")
    bombimg=loadImage("bomb.png")
    
  }
function setup() {
    createCanvas(700,700);

	
	water=createSprite(200,width/16);
	water.addImage(waterimg);
	water.velocityX = 4;

    ground=createSprite(350,370)
    ground.addImage(groundimg)
    ground.scale=0.3

    archer=createSprite(350,470)
    archer.addAnimation(archerimg)
    archer.addImage(archerupimg)
    archer.addAnimation(archerleftimg)
    archer.changeAnimation(archerimg)
    archer.scale=0.3

    
    targetgrp=new Group()
    applegrp=new Group()
    watermelongrp=new Group()
    bombgrp=new Group()
  

}

if (targetgrp.isTouching(arrow)) {
    targetgrp.destroyEach();
    arrow.destroy();
    totalscore=totalscore + 100;
  }
  else if (applegrp.isTouching(arrow)) {
    applegrp.destroyEach();
    arrow.destroy();
    totalscore=totalscore + 30;
    
  }else if(watermelongrp.isTouching(arrow)) {
    watermelongrp.destroyEach();
    arrow.destroy();
    totalscore= totalscore + 50;
    
  }else{
    if(bombgrp.isTouching(arrow)) {
    

      
      targetgrp.destroyEach();
      applegrp.destroyEach();
      watermelongrp.destroyEach();
      bombgrp.destroyEach();
      
      targetgrp.setVelocityYEach(0);
      applegrp.setVelocityYEach(0);
      watermelongrp.setVelocityYEach(0);
      bombgrp.setVelocityYEach(0);
   
  }
}

function draw() {
 


    drawSprites();
    
     

    if (keyDown(39)){
        archer.x=archer.x+5
        archer.changeAnimation(archerimg)
       

    }

    if (keyDown(37)){
        archer.x=archer.x-5
        archer.changeAnimation(archerleftimg)
        
       
    }
      
     
    
   

   if (keyDown(32)){
       arrow=createSprite(archer.x,archer.y)
       arrow.addImage(arrowimg)
       arrow.scale=0.15
       arrow.velocityY=-4
       archer.changeImage(archerupimg)
       
    
        }
    
   if(water.x > width ){
    water.x = width/2;
  }
    
  
    
 

    createtarget();
    createapples();
    createwatermelon();
    createbomb();

   

    textSize(20);
    fill(255);
    text("Score: "+ totalscore,310,600);
 
}


function createtarget(){
    if (World.frameCount % 170 == 0){
        var target=createSprite(-10,Math.round(random(0,200)))
        target.addImage(targetimg)
        target.scale=0.1
        target.velocityX=4
        target.lifetime=200
        targetgrp.add(target)
    }


}

function createapples(){
    if(World.frameCount % 70 == 0){
        var apple=createSprite(-10,Math.round(random(0,400)))
        apple.addImage(appleimg)
        apple.scale=0.03
        apple.velocityX=4
        apple.lifetime=200
        applegrp.add(apple)
    }
}

function createwatermelon(){
    if(World.frameCount % 100 == 0){
        var watermelon=createSprite(-10,Math.round(random(0,300)))
        watermelon.addImage(watermelonimg)
        watermelon.scale=0.05
        watermelon.velocityX=4
        watermelon.lifetime=200
        watermelongrp.add(watermelon)
    }
}

function createbomb(){
    if(World.frameCount % 200 == 0){
        var bomb=createSprite(-10,Math.round(random(0,350)))
        bomb.addImage(bombimg)
        bomb.scale=0.03
        bomb.velocityX=4
        bomb.lifetime=200
        bombgrp.add(bomb)
    }
}



  

