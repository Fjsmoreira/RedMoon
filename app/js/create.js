import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";

export function create() {
    RedMoon.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    setupBitmapData();
    setupHero();
    setupInput();
    setupAnimations();

    RedMoon.game.physics.enable(RedMoon.hero,Phaser.Physics.ARCADE);
    RedMoon.hero.body.collideWorldBounds = true;
}

function setupBitmapData(){
    RedMoon.bmd = RedMoon.game.make.bitmapData(RedMoon.game.width, RedMoon.game.height);
    RedMoon.bmdDest = RedMoon.game.make.bitmapData(RedMoon.game.width, RedMoon.game.height);
    console.log(RedMoon);
    RedMoon.bmd.dirty = true;
    RedMoon.bmdDest.dirty = true;
    RedMoon.bmdDest.addToWorld();
    // turnLightsOn();
}

function setupHero(){
    RedMoon.hero = RedMoon.game.add.sprite(RedMoon.game.world.width*0.5, RedMoon.game.world.height-5, 'hero');
    RedMoon.hero.anchor.set(0.5,1);
    RedMoon.hero.inputEnabled = true;
}  


function setupInput(){
    RedMoon.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.SPACEBAR
        ]);
}

function setupAnimations(){
    RedMoon.animations.frontWalk = RedMoon.hero.animations.add('frontWalk',[3,4,5], 10, true);
    RedMoon.animations.leftWalk = RedMoon.hero.animations.add('leftWalk',[0,1,2], 10, true);
    RedMoon.animations.backWalk = RedMoon.hero.animations.add('backwardsWalk',[6,7,8], 10, true);
    RedMoon.animations.rightWalk = RedMoon.hero.animations.add('rightWalk',[0,1,2], 10, true);
}
