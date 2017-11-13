import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";

export function preload() {

    setupGameScreen();
    loadGraphics();
}

function  setupGameScreen(){
    RedMoon.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    RedMoon.game.scale.pageAlignHorizontally = true;
    RedMoon.game.scale.pageAlignVertically = true;
}

function loadGraphics(){
    RedMoon.game.load.tilemap('level1', 'graphics/tiledmap/FirstLevelMap.json', null, Phaser.Tilemap.TILED_JSON);
    RedMoon.game.load.image('gameTiles', 'graphics/tiledmap/mountain_landscape.png');
    RedMoon.game.load.spritesheet('hero', 'graphics/hero.png', 48,48,-1,0,0);
    RedMoon.game.load.image('arrow', 'graphics/obstacles/arrow.png', 44,5,-1,0,0);
    RedMoon.game.load.image('chest', 'graphics/chest.png', 44,5,-1,0,0);
    
}