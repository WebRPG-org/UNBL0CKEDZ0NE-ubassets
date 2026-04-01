//=============================================================================
// Maui Game Studio Plugins - Remove Outlines
// MAUI_RemoveOutlines.js
//=============================================================================

//=============================================================================
 /*:
 * @target MV, MZ
 * @plugindesc v1.1
 * @author Joseph Abraham
 *
 *
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This super simple plugin will remove outlines from your RPG Maker MV game.
 * Mny prefer the look to the vanilla font look. Try it and see if you like it.
 *
 * You are welcome to use this code for free or commercial games if you credit
 * me and let me know I appreciate it. If you want to use the code in a plugin,
 * I'm okay with that, just let me know.
 *
 * Feel free to report bugs and I'll get to it when I can.
 *
 * @plugindesc This plugin removes outlines for RPG Maker MV and RPG Maker MZ.
 * Contact me via email: josephdevelops@gmail.com
 */


//BATTLE HUD STUFF

(function() {

Window_BattleActor.prototype.lineHeight = function() {
    return 45;
};

Window_BattleActor.prototype.drawAllItems = function() {
    return 'void';
};

//WINDOW BASE FONT OUTLINES

'use strict';

var _Window_Base_ResetFontSettings = Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    _Window_Base_ResetFontSettings.call( this );
    this.contents.outlineWidth = 0;

};

})();
