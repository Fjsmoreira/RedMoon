import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";

var toFollow = [];
var speed = 100
var isFollowing = false;
var backgroundColor = "#eee";
var itMoved = false;


function turnLightsOff(){
    RedMoon.bmdDest.fill(1, 1, 1, 10);
}

function turnLightsOn(){
    RedMoon.bmdDest.fill(99, 99, 99, 10);
}

export function update() {      

    if(itMoved){
        turnLightsOff();
    }
    else{
        turnLightsOn();
    }
    
    input();
    
    RedMoon.bmdDest.copy(RedMoon.bmd, 0, 0);

}

function input(){
  
    RedMoon.hero.body.velocity.x = 0;
    RedMoon.hero.body.velocity.y = 0;

    if(isFollowing && toFollow.length > 0){
        RedMoon.hero.x = toFollow.shift().x;
        RedMoon.hero.y = toFollow.shift().y;
    }
    
    if (RedMoon.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        itMoved = false;
        isFollowing = true;
    }

    if (RedMoon.game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        itMoved = true;
        RedMoon.animations.frontWalk.play();
        RedMoon.hero.body.velocity.y = (-speed);
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
        RedMoon.bmd.circle(RedMoon.hero.x, RedMoon.hero.y, 1, backgroundColor);
        
    }
    else{
        RedMoon.animations.frontWalk.stop();  
    }
    if(RedMoon.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        itMoved = true;
        RedMoon.animations.backWalk.play();
        RedMoon.hero.body.velocity.y = speed;
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
        RedMoon.bmd.circle(RedMoon.hero.x, RedMoon.hero.y, 1, backgroundColor);
    }
    else{
        RedMoon.animations.backWalk.stop();  
    }
    if(RedMoon.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){

        itMoved = true;
        RedMoon.animations.leftWalk.play();
        RedMoon.hero.body.velocity.x = (-speed);
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
        RedMoon.bmd.circle(RedMoon.hero.x, RedMoon.hero.y, 1, backgroundColor);
    }
    else{
        RedMoon.animations.leftWalk.stop();      
    }
    if(RedMoon.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){

        itMoved = true;
        RedMoon.animations.rightWalk.play();
        RedMoon.hero.body.velocity.x = speed;
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
        RedMoon.bmd.circle(RedMoon.hero.x, RedMoon.hero.y, 1, backgroundColor);
    }
    else{
        RedMoon.animations.rightWalk.stop();  
    }
}