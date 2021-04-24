var knife, kimage;
var alien1,aimage1,alien2,aimage2;
var fruit1,f1,fruit2,f2,fruit3,f3,fruit4,f4;
var select_fruit;
var score;
var Play,End,Gamestate;
var fg1,fg2,fg3,fg4,ag;
var  fruit_position;


function preload(){
  kimage=loadImage("sword.png");
  anime=loadImage("alien1.png","alien2.png");
  f1=loadImage("fruit1.png");
  f2=loadImage("fruit2.png");
  f3=loadImage("fruit3.png");
  f4=loadImage("fruit4.png");
  over=loadImage("gameover.png");
  knifecut_sound=loadSound("SWORD WHOOSH.wav");
  gameover_sound=loadSound("gameover.mp3");
}

function setup(){
  createCanvas(800,500);
  
  knife=createSprite(200,200,10,10)
  knife.addImage(kimage);
  knife.scale=0.7;
  
  //creating groups
  fg1=createGroup();
  fg2=createGroup();
  fg3=createGroup();
  fg4=createGroup();
  ag=createGroup();
 
  
  //variable for score
  score=0;
 
  //Gamestates
  Play=1;
  End=2;
  Gamestate=1;
}

function draw(){
  background("white");
  
  //sound effects
 
  
  
  //Gamestate Play
  if(Gamestate===Play){
      //knife controls
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  
  //spawning enemies
  if(frameCount%50==0){
    aliena();
  }
  

//spawning fruits
select_fruit=Math.round(random(1,4));
  
if(frameCount%25==0){
  if(select_fruit==1){
    fruita1();
  }
  else if(select_fruit==2){
    fruita2();
  }
  else if(select_fruit==3){
    fruita3();
  }
  else if(select_fruit==4){
    fruita4();
  }
}

    
  
  }
  
//scoring system
  
 if(knife.isTouching(fg1)){
   score=score+1;
   fg1.destroyEach();
   knifecut_sound.play();
 }
  if(knife.isTouching(fg2)){
   score=score+1;
   fg2.destroyEach();
    knifecut_sound.play();
 }
  if(knife.isTouching(fg3)){
   score=score+1;
   fg3.destroyEach();
    knifecut_sound.play();
 }
  if(knife.isTouching(fg4)){
   score=score+1;
   fg4.destroyEach();
    knifecut_sound.play();
 }
//printing score
  textSize(20);
  fill("red");
  text("SCORE "+ score,350,200);
 
//Gamestate End
if(knife.isTouching(ag)){
  Gamestate=End;
  gameover_sound.play();
}
 
if(Gamestate===End){
  
  Play=300;
  knife.x=400;
  knife.y=250;
  knife.addImage(over);
  fg1.setVelocityYEach(0);
  fg2.setVelocityYEach(0);
  fg3.setVelocityYEach(0);
  fg4.setVelocityYEach(0);
  ag.setVelocityYEach(0);
  fg1.setVelocityXEach(0);
  fg2.setVelocityXEach(0);
  fg3.setVelocityXEach(0);
  fg4.setVelocityXEach(0);
  ag.setVelocityXEach(0);
  fg1.setLifetimeEach(-1);
  fg2.setLifetimeEach(-1);
  fg3.setLifetimeEach(-1);
  fg4.setLifetimeEach(-1);
  ag.setLifetimeEach(-1);
}
  //variable
    fruit_position=Math.round(random(1,3))
    enemy_position=Math.round(random(1,3))
  //console and draw sprites 
   console.log(fruit_position);
   drawSprites();
}

//function draw ends here
//codes for alien

function aliena(){
alien1 =createSprite(Math.round(random(10,790)),800);
alien1.addImage(anime);
alien1.lifetime=300;
ag.add(alien1);
  if(enemy_position==1){
    alien1.x=-5;
    alien1.y=Math.round(random(15,490));
    alien1.velocityX=7+(score/10);
  
    }
if(enemy_position==2){
  alien1.x=805;
  alien1.y=Math.round(random(15,490));
  alien1.velocityX=-(7+(score/10))

    }
if(enemy_position==3){
  alien1.x=Math.round(random(15,790));
   alien1.y=510
  alien1.velocityY=-(7+(score/10));

    }
  
}


function fruita1(){
  fruit1=createSprite(0,0);
  fruit1.addImage(f1);
  fruit1.scale=0.2;
  fruit1.lifetime=300;
 fg1.add(fruit1);
    //fruits position 
if(fruit_position==1){
    fruit1.x=-5;
    fruit1.y=Math.round(random(15,490));
    fruit1.velocityX=7+(score/10);
    }
if(fruit_position==2){
  fruit1.x=805;
  fruit1.y=Math.round(random(15,490));
  fruit1.velocityX=-(7+(score/10));
    }
if(fruit_position==3){
   fruit1.x=Math.round(random(15,790));
   fruit1.y=510
   fruit1.velocityY=-(7+(score/10));
    }
    
}
function fruita2(){
  fruit2=createSprite(0,0);
  fruit2.addImage(f2);
  fruit2.scale=0.2;
  fruit2.lifetime=300;
  fg2.add(fruit2);
    //fruits position 
if(fruit_position==1){
    fruit2.x=-5;
    fruit2.y=Math.round(random(15,490));
    fruit2.velocityX=7+(score/10);
    }
if(fruit_position==2){
  fruit2.x=805;
  fruit2.y=Math.round(random(15,490));
  fruit2.velocityX=-(7+(score/10));
    }
if(fruit_position==3){
   fruit2.x=Math.round(random(15,790));
   fruit2.y=510
   fruit2.velocityY=-(7+(score/10));
    }
}

function fruita3(){
  fruit3=createSprite(0,0);
  fruit3.addImage(f3);
  fruit3.scale=0.2;
  fruit3.lifetime=300;
  fg3.add(fruit3);
//fruits position 
if(fruit_position==1){
    fruit3.x=-5;
    fruit3.y=Math.round(random(15,490));
    fruit3.velocityX=7+(score/10);
    }
if(fruit_position==2){
  fruit3.x=805;
  fruit3.y=Math.round(random(15,490));
  fruit3.velocityX=-(7+(score/10));
    }
if(fruit_position==3){
   fruit3.x=Math.round(random(15,790));
   fruit3.y=510
   fruit3.velocityY=-(7+(score/10));
    }
}

function fruita4(){
  fruit4=createSprite(0,0);
  fruit4.addImage(f4);
  fruit4.scale=0.2;
  fruit4.lifetime=300;
  fg4.add(fruit4);
//fruits position 
if(fruit_position==1){
    fruit4.x=-5;
    fruit4.y=Math.round(random(15,490));
    fruit4.velocityX=7+(score/10);
    }
if(fruit_position==2){
  fruit4.x=805;
  fruit4.y=Math.round(random(15,490));
  fruit4.velocityX=-(7+(score/10));
    }
if(fruit_position==3){
   fruit4.x=Math.round(random(15,790));
   fruit4.y=510
   fruit4.velocityY=-(7+(score/10));
    }
}