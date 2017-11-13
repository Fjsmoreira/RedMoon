import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";
import * as World from './world';


var toFollow = [];
var speed = 100
var isFollowing = false;
var backgroundColor = "#eee";
var itMoved = false;


function turnLightsOn(){
    // RedMoon.bmdDest.fill(99, 99, 99, 10);
}

export function update() {      

    if(itMoved){
        World.LightsOff();
    }
    else if (isFollowing){
        World.LightsOn();
    }
    
    input();
    
    // RedMoon.bmdDest.copy(RedMoon.bmd, 0, 0);

}

var ismoving = false;
function input(){
  
    RedMoon.game.physics.arcade.collide(RedMoon.hero, RedMoon.blockedLayer);
    

    RedMoon.hero.body.velocity.x = 0;
    RedMoon.hero.body.velocity.y = 0;

    if(isFollowing && toFollow.length > 0){
        var followPath = toFollow.shift();
        RedMoon.hero.x = followPath.x;
        RedMoon.hero.y = followPath.y;
    }
    else{
        isFollowing = false;
    }
    
    if (RedMoon.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        itMoved = false;
        isFollowing = true;
    }

    if (RedMoon.controls.up.isDown){
        itMoved = true;
        RedMoon.hero.animations.play("frontWalk");
        RedMoon.hero.body.velocity.y = (-speed);
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
    }
    else if(RedMoon.controls.down.isDown){
        itMoved = true;
        RedMoon.hero.animations.play("backWalk");
        RedMoon.hero.body.velocity.y = speed;
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
    }
    else if(RedMoon.controls.left.isDown){
        itMoved = true;
        RedMoon.hero.animations.play("leftWalk");
        RedMoon.hero.body.velocity.x = (-speed);
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
    }
    else if(RedMoon.controls.right.isDown){
        itMoved = true;
        RedMoon.hero.animations.play("rightWalk");
        RedMoon.hero.body.velocity.x = speed;
        toFollow.push({x:RedMoon.hero.x,y:RedMoon.hero.y});
    }
    else{
        RedMoon.hero.animations.stop();
    }
        
}