import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";

export function create() {
    RedMoon.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // setupBitmapData();
    setupMap();
    setupHero();
    setupInput();
    setupAnimations();

    RedMoon.game.physics.enable(RedMoon.hero,Phaser.Physics.ARCADE);
    RedMoon.hero.body.collideWorldBounds = true;
}

function setupMap(){
    RedMoon.map = RedMoon.game.add.tilemap('level1');
    
    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    RedMoon.map.addTilesetImage('tilesetHouse', 'gameTiles');

    //create layer
    RedMoon.backgroundlayer = RedMoon.map.createLayer('BackgroundLayer');
    RedMoon.blockedLayer = RedMoon.map.createLayer('BlocksLayer');

    //collision on blockedLayer
    RedMoon.map.setCollisionBetween(1, 100000, true, 'BlocksLayer');

    //resizes the game world to match the layer dimensions
    RedMoon.backgroundlayer.resizeWorld();
}

function setupBitmapData(){
    RedMoon.bmd = RedMoon.game.make.bitmapData(RedMoon.game.width, RedMoon.game.height);
    RedMoon.bmdDest = RedMoon.game.make.bitmapData(RedMoon.game.width, RedMoon.game.height);
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
    RedMoon.hero.animations.add('frontWalk',[0,1,2,3,4,5,6,7,8], 10, true);
    RedMoon.hero.animations.add('leftWalk',[9,10,11,12,13,14,15,16,17], 10, true);
    RedMoon.hero.animations.add('backWalk',[18,19,20,21,22,23,24,25,26], 10, true);
    RedMoon.hero.animations.add('rightWalk',[27,28,29,30,31,32,33,34,35,36], 10, true);
}
