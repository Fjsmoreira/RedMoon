import {RedMoon} from "../js/game.js";
import * as Phaser from "../js/phaser.js";

export function LightsOff(){
    if(RedMoon.coverBmd)return;
    var rectangle = new Phaser.Rectangle(100, 200, 600, 200);
    RedMoon.coverBmd =  RedMoon.game.add.bitmapData(RedMoon.game.width, RedMoon.game.height);
    RedMoon.coverBmd.rect(0, 0, RedMoon.game.width, RedMoon.game.height, 'rgba(139,0,0,0.95)');    
    RedMoon.coverBmd.addToWorld();
}         

export function LightsOn(){
    
    if(!RedMoon.coverBmd)return;
    RedMoon.coverBmd.clear();
    RedMoon.coverBmd = null;
}
