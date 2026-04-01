//=============================================================================
// Olivia Engine - Animated Pictures - for RPG Maker MV version 1.6.1
// Olivia_AnimatedPictures.js
//=============================================================================
 /*:
 * @plugindesc <AnimatedPictures> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that gives functionality to Show Picture events
 * to display animated pictures. Animated pictures are shown in a sprite sheet
 * format. There are looping controls and speed controls that can be used with
 * these animated pictures.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Loop by Default: Animated pictures will loop back to beginning by default
 * once it reaches the last frame.
 *
 * Wait Frames Default: Default number of frames to wait before moving to next
 * picture cell. The lower the number, the faster it goes (1 is the fastest).
 * The higher the number, the slower it goes.
 *
 *
 *
 * ------------
 * Instructions
 * ------------
 * 
 * Save your animated picture into your game project's img/pictures folder.
 * The filename must be named with the following format:
 *
 * filename[HxV]
 *
 * Replace H in the filename with the number of horizontal cells it has.
 * Replace V in the filename with the number of vertical cells it has.
 * The number of total cells it has available is equal the multiplicative
 * product of the horizontal and vertical cells.
 *
 * For example:
 *
 * "Parrot[3x2]" will have 3 horizontal cells and 2 vertical cells. This means
 * there are a total of 6 cells that will be used for this animated picture.
 *
 * Animations will be played from left to right, then up to down so please
 * arrange them as such. For example, 4x5 will play like this:
 *
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 * 17 18 19 20
 *
 * Keep this in mind as you format your animated pictures.
 *
 *
 *
 * ---------------
 * Plugin Commands
 * ---------------
 *
 * If you want to change the settings of specific pictures like loop or speed,
 * please use these plugin commands to change them:
 *
 * AnimatedPicture id NoLoop
 * - Replace id with the ID of the selected picture. The selected picture will
 * not loop after this plugin command takes effect.
 *
 * AnimatedPicture id Loop
 * - Replace id with the ID of the selected picture. The selected picture will
 * loop after this plugin command takes effect.
 *
 * AnimatedPicture id Speed x
 * - Replace id with the ID of the selected picture. Replace x with the number
 * of frames to wait in between animated cells. The higher the number, the
 * faster the picture will animate. The lower the number, the slower the picture
 * will animate. The lowest the speed can go is 1.
 *
 * AnimatedPicture id Reset
 * - Replace id with the ID of the selected picture. This will reset the loop
 * and speed settings for that picture to whatever the value is in the plugin
 * parameters set for default.
 *
 *
 *
 * --------------
 * Good Practices
 * --------------
 *
 * 1. Use animated pictures sparingly if possible. RPG Maker MV's cache has a
 * limited size to it, which means the more animated pictures you use, the
 * faster it will fill up. And the faster it fills up, the more it needs to be
 * emptied to allow other assets in your game to load at all.
 *
 * 2. If you do use animated pictures, trim down as much empty space as possible
 * and keep picture cells to a minimum size to reduce bloating the cache.
 *
 * 3. If it is practical, make your sprite sheet cells work towards a power of
 * 2 (ie: sizes of 32x32, 64x64, 128x128, 256x256, etc). Bitmaps render best
 * when it works in this cell range. This is not necessary, but it is a thing
 * to keep in mind.
 *
 * 4. Limit the amount of colors used in the animated picture to reduce the
 * filesize of the image and reduce the strain on the cache. Use more flat
 * colors instead of gradients. These work better for the engine.
 *
 * 5. When you are done using the animated picture, use the Erase Picture
 * command to clear the picture from use. This will stop the animation frame
 * calculating and reduce strain on your game.
 *
 *
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * ------------
 * Terms of Use
 * ------------
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'Fallen Angel Olivia' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins without credit.
 *
 * -------
 * Credits
 * -------
 *
 * If you are using this plugin, credit the following people:
 * 
 * - Fallen Angel Olivia
 *
 * @param 
 * @param 
 * @param ATTENTION!!!
 * @default READ THE HELP FILE
 * @param 
 * @param 
 *
 * @param Loop by Default
 * @type boolean
 * @on YES
 * @off NO
 * @desc Animated pictures will loop back to beginning by default once it reaches the last frame.
 * @default true
 *
 * @param Wait Frames Default
 * @type number
 * @min 1
 * @desc Default number of frames to wait before moving to next picture cell
 * @default 4
 *
 */
//=============================================================================

var _0x1178=['<AnimatedPictures>','_animatedPictureLoop','addLoadListener','bind','loadBitmap','defaultLoop','___Sprite_Picture_update___','___Sprite_Picture_loadBitmap___','Loop\x20by\x20Default','update','isAnimatedPictureLooping','prototype','AnimatedPictures','setupAnimatedPictureData','call','getAnimatedPictureWaitFrames','Olivia_AnimatedPictures','bitmap','_isAnimatedPicture','shift','max','setAnimatedPictureWaitFrames','updateAnimatedPictureFrame','initializeAnimatedPicture','updateAnimatedPictureCount','_pictureId','match','_animationVertCells','description','___Game_Screen_initialize___','realPictureId','maxPictures','resetFrame','_animationHorzCells','initializeAnimatedPictureSettings','_animatedPictureWait','___Sprite_Picture_initialize___','_pictureName','_animationIndex','Wait\x20Frames\x20Default','\x20is\x20not\x20a\x20valid\x20Picture\x20ID\x20number.','_animationCount','setAnimatedPictureLooping','___Game_Interpreter_pluginCommand___','initialize','pluginCommand','contains','isAnimationLooping','parameters','visible','floor','filter','width','_animationMaxCells','height','setFrame','animationWaitFrames'];(function(_0x19a0af,_0x11786c){var _0x530c5c=function(_0x229265){while(--_0x229265){_0x19a0af['push'](_0x19a0af['shift']());}};_0x530c5c(++_0x11786c);}(_0x1178,0xcf));var _0x530c=function(_0x19a0af,_0x11786c){_0x19a0af=_0x19a0af-0x0;var _0x530c5c=_0x1178[_0x19a0af];return _0x530c5c;};var Imported=Imported||{};Imported[_0x530c('0x25')]=!![];var Olivia=Olivia||{};var parameters=$plugins[_0x530c('0xf')](function(_0xd81664){return _0xd81664[_0x530c('0x31')][_0x530c('0xa')](_0x530c('0x15'));})[0x0][_0x530c('0xc')];Olivia[_0x530c('0x21')]={'defaultLoop':eval(parameters[_0x530c('0x1d')]),'defaultWaitFrames':Math[_0x530c('0x29')](0x1,Number(parameters[_0x530c('0x3')]))};Olivia[_0x530c('0x21')][_0x530c('0x32')]=Game_Screen[_0x530c('0x20')][_0x530c('0x8')];Game_Screen['prototype'][_0x530c('0x8')]=function(){Olivia[_0x530c('0x21')]['___Game_Screen_initialize___'][_0x530c('0x23')](this);this[_0x530c('0x37')]();};Game_Screen[_0x530c('0x20')][_0x530c('0x37')]=function(){this[_0x530c('0x16')]=[];this[_0x530c('0x38')]=[];};Game_Screen['prototype'][_0x530c('0x1f')]=function(_0x3d1053){if(this['_animatedPictureLoop']===undefined){this[_0x530c('0x37')]();}var _0x496bba=this[_0x530c('0x33')](_0x3d1053);if(this[_0x530c('0x16')][_0x496bba]===undefined){this[_0x530c('0x16')][_0x496bba]=Olivia[_0x530c('0x21')][_0x530c('0x1a')];}return this[_0x530c('0x16')][_0x496bba];};Game_Screen[_0x530c('0x20')][_0x530c('0x6')]=function(_0x6b5c01,_0x3ecaac){if(this['_animatedPictureLoop']===undefined){this[_0x530c('0x37')]();}var _0x249de7=this[_0x530c('0x33')](_0x6b5c01);this[_0x530c('0x16')][_0x249de7]=_0x3ecaac;};Game_Screen[_0x530c('0x20')][_0x530c('0x24')]=function(_0x1f4629){if(this[_0x530c('0x38')]===undefined){this['initializeAnimatedPictureSettings']();}var _0x59a891=this[_0x530c('0x33')](_0x1f4629);if(this[_0x530c('0x38')][_0x59a891]===undefined){this['_animatedPictureWait'][_0x59a891]=Olivia[_0x530c('0x21')]['defaultWaitFrames'];}return this[_0x530c('0x38')][_0x59a891];};Game_Screen[_0x530c('0x20')]['setAnimatedPictureWaitFrames']=function(_0x58e026,_0x19a143){if(this[_0x530c('0x38')]===undefined){this[_0x530c('0x37')]();}var _0x136ba5=this[_0x530c('0x33')](_0x58e026);this[_0x530c('0x38')][_0x136ba5]=_0x19a143;};Olivia[_0x530c('0x21')][_0x530c('0x7')]=Game_Interpreter[_0x530c('0x20')][_0x530c('0x9')];Game_Interpreter[_0x530c('0x20')][_0x530c('0x9')]=function(_0xc8b993,_0x32ac1e){Olivia[_0x530c('0x21')]['___Game_Interpreter_pluginCommand___'][_0x530c('0x23')](this,_0xc8b993,_0x32ac1e);if(_0xc8b993[_0x530c('0x2f')](/AnimatedPicture/i)){var _0x16c5f5=_0x32ac1e['shift']();if(_0x16c5f5>0x0&&_0x16c5f5<=$gameScreen[_0x530c('0x34')]()){var _0x3e2ab3=_0x32ac1e[_0x530c('0x28')]();if(_0x3e2ab3[_0x530c('0x2f')](/NoLoop/i)){$gameScreen[_0x530c('0x6')](_0x16c5f5,![]);}else if(_0x3e2ab3[_0x530c('0x2f')](/Loop/i)){$gameScreen[_0x530c('0x6')](_0x16c5f5,!![]);}else if(_0x3e2ab3[_0x530c('0x2f')](/Speed/i)){var _0xc2e3e5=Math[_0x530c('0x29')](0x1,parseInt(_0x32ac1e['shift']()));$gameScreen[_0x530c('0x2a')](_0x16c5f5,_0xc2e3e5);}else if(_0x3e2ab3['match'](/Reset/i)){$gameScreen[_0x530c('0x6')](_0x16c5f5,undefined);$gameScreen[_0x530c('0x2a')](_0x16c5f5,undefined);}}else{alert(_0x16c5f5+_0x530c('0x4'));}}};Olivia['AnimatedPictures'][_0x530c('0x0')]=Sprite_Picture[_0x530c('0x20')][_0x530c('0x8')];Sprite_Picture[_0x530c('0x20')]['initialize']=function(_0x1839ba){this[_0x530c('0x2c')]();Olivia['AnimatedPictures'][_0x530c('0x0')][_0x530c('0x23')](this,_0x1839ba);};Sprite_Picture[_0x530c('0x20')]['initializeAnimatedPicture']=function(){this[_0x530c('0x27')]=![];this[_0x530c('0x36')]=0x1;this[_0x530c('0x30')]=0x1;this[_0x530c('0x11')]=0x1;this[_0x530c('0x5')]=0x0;this[_0x530c('0x2')]=0x0;};Olivia[_0x530c('0x21')]['___Sprite_Picture_loadBitmap___']=Sprite_Picture['prototype'][_0x530c('0x19')];Sprite_Picture[_0x530c('0x20')][_0x530c('0x19')]=function(){this[_0x530c('0x22')]();Olivia['AnimatedPictures'][_0x530c('0x1c')][_0x530c('0x23')](this);if(this[_0x530c('0x27')]){this[_0x530c('0x26')][_0x530c('0x17')](this[_0x530c('0x2b')][_0x530c('0x18')](this));}else{this['bitmap'][_0x530c('0x17')](this[_0x530c('0x35')][_0x530c('0x18')](this));}};Sprite_Picture[_0x530c('0x20')][_0x530c('0x35')]=function(){this[_0x530c('0x13')](0x0,0x0,this[_0x530c('0x26')][_0x530c('0x10')],this[_0x530c('0x26')][_0x530c('0x12')]);};Sprite_Picture[_0x530c('0x20')][_0x530c('0x22')]=function(){if(this[_0x530c('0x1')][_0x530c('0x2f')](/\[(\d+)x(\d+)\]/i)){this[_0x530c('0x27')]=!![];this[_0x530c('0x36')]=Math[_0x530c('0x29')](0x1,parseInt(RegExp['$1']));this[_0x530c('0x30')]=Math[_0x530c('0x29')](0x1,parseInt(RegExp['$2']));this[_0x530c('0x11')]=this[_0x530c('0x36')]*this[_0x530c('0x30')];}else{this[_0x530c('0x27')]=![];this[_0x530c('0x36')]=0x1;this[_0x530c('0x30')]=0x1;this[_0x530c('0x11')]=0x1;}this['_animationCount']=0x0;this[_0x530c('0x2')]=0x0;};Olivia[_0x530c('0x21')]['___Sprite_Picture_update___']=Sprite_Picture[_0x530c('0x20')][_0x530c('0x1e')];Sprite_Picture[_0x530c('0x20')][_0x530c('0x1e')]=function(){Olivia['AnimatedPictures'][_0x530c('0x1b')]['call'](this);if(this[_0x530c('0xd')]&&this[_0x530c('0x27')]){this['updateAnimatedPictureCount']();}};Sprite_Picture['prototype'][_0x530c('0x2d')]=function(){this[_0x530c('0x5')]+=0x1;if(this[_0x530c('0x5')]>=this['animationWaitFrames']()){this[_0x530c('0x5')]=0x0;this[_0x530c('0x2')]+=0x1;if(this[_0x530c('0x2')]>=this[_0x530c('0x11')]){if(this[_0x530c('0xb')]()){this[_0x530c('0x2')]=0x0;}else{this[_0x530c('0x2')]=this[_0x530c('0x11')]-0x1;}}this[_0x530c('0x2b')]();}};Sprite_Picture[_0x530c('0x20')][_0x530c('0x2b')]=function(){var _0x335e99=this[_0x530c('0x26')][_0x530c('0x10')]/this[_0x530c('0x36')];var _0x7ee6b2=this[_0x530c('0x26')][_0x530c('0x12')]/this['_animationVertCells'];var _0x423875=this[_0x530c('0x2')]%this[_0x530c('0x36')]*_0x335e99;var _0x121409=Math[_0x530c('0xe')](this['_animationIndex']/this[_0x530c('0x36')])*_0x7ee6b2;this[_0x530c('0x13')](_0x423875,_0x121409,_0x335e99,_0x7ee6b2);};Sprite_Picture[_0x530c('0x20')][_0x530c('0xb')]=function(){return $gameScreen[_0x530c('0x1f')](this[_0x530c('0x2e')]);};Sprite_Picture[_0x530c('0x20')][_0x530c('0x14')]=function(){return $gameScreen[_0x530c('0x24')](this[_0x530c('0x2e')]);};