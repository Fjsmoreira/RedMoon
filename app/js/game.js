import * as Phaser from "../js/phaser.js";
import { preload } from "../js/preload.js";
import { create } from "../js/create.js";
import { update } from "../js/update.js"; 

export var RedMoon = RedMoon || {};
RedMoon.animations = {};

RedMoon.game = new Phaser.Game(480, 640, Phaser.AUTO, null, {
    preload: preload, create: create, update: update
}); 

RedMoon.hero = {};
RedMoon.arrow = {};





