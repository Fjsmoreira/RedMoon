import * as Phaser from "../js/phaser.js";
import {RedMoon} from "../js/game.js";

export function preload() {

    setupGameScreen();
    loadSpritesheets();
}

function  setupGameScreen(){
    RedMoon.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    RedMoon.game.scale.pageAlignHorizontally = true;
    RedMoon.game.scale.pageAlignVertically = true;
    RedMoon.game.stage.backgroundColor = "#eee";
}

function loadSpritesheets(){
    RedMoon.game.load.spritesheet('hero', 'graphics/hero.png', 62,62,-1,0,0);
}