const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Body= Matter.Body
var thunder1, thunder2, thunder3, thunder4, boy

function preload(){
    thunder1=loadImage("thunderbolt/1.png")
    thunder2=loadImage("thunderbolt/2.png")
    thunder3=loadImage("thunderbolt/3.png")
    thunder4=loadImage("thunderbolt/4.png")
    boy=loadImage("Walking Frame/walking_1.png")
    
}

function setup(){
   createCanvas(400,700)
    engine=Engine.create()
    world=engine.world
    umbrella=new Umbrella(200,500)
    rain=new Rain(random(0,400),random(0,200))
}

function draw(){
    background("black")
    spawnThunder()
    Engine.update(engine)
    rain.display()
    umbrella.display()
    drawSprites()
}
function spawnThunder(){
    if(frameCount%5==0){
        var sprite= createSprite(100,50);
        var randomNumber=Math.round(random(1,4));
        switch(randomNumber){
            case 1: sprite.addImage("thunder1", thunder1)
            break 
            case 2: sprite.addImage("thunder2", thunder2)
            break
            case 3: sprite.addImage("thunder3", thunder3)
            break
            case 4: sprite.addImage("thunder4", thunder4)
            break
            default: break
        }
        sprite.lifetime=6
        sprite.x=random(0,width)
        sprite.scale=0.5
    }
}   

