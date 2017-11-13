import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";

export function create() {
    RedMoon.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // setupBitmapData();
    setupMap();
    setupHero();
    setupAnimations();

    RedMoon.game.physics.enable(RedMoon.hero,Phaser.Physics.ARCADE);
    RedMoon.hero.body.collideWorldBounds = true;
    RedMoon.controls =  RedMoon.game.input.keyboard.createCursorKeys();
}

function setupMap(){
    RedMoon.map = RedMoon.game.add.tilemap('level1');
 
    RedMoon.map.addTilesetImage('mountain_landscape', 'gameTiles');
    RedMoon.backgroundlayer = RedMoon.map.createLayer('BackgroundLayer');
    RedMoon.blockedLayer = RedMoon.map.createLayer('BlocksLayer');
    RedMoon.midLayer = RedMoon.map.createLayer('MidLayer');
    RedMoon.map.setCollisionBetween(1, 1000, true, 'BlocksLayer'); 
    RedMoon.backgroundlayer.resizeWorld();
   
}

function setupHero(){
    RedMoon.hero = RedMoon.game.add.sprite(RedMoon.game.world.width*0.5, RedMoon.game.world.height-5, 'hero');
    RedMoon.hero.anchor.set(0.5,1);
    RedMoon.hero.inputEnabled = true;
}  

function setupArrow(){

}

function setupAnimations(){
    RedMoon.hero.animations.add('frontWalk',[2,6,10,14], 10, true);
    RedMoon.hero.animations.add('leftWalk',[1,5,9,13], 10, true);
    RedMoon.hero.animations.add('backWalk',[0,4,8,12], 10, true);
    RedMoon.hero.animations.add('rightWalk',[3,7,11,15], 10, true);
}
