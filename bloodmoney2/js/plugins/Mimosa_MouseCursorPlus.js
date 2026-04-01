/*:============================================================================

  @target MZ

  @author Chaucer

  @plugindesc | Mimosa Mouse Cursor : Version - 1.6.1 | This plugin allows you to change the cursor of your mouse while in the game window!.

  @url http://rosedale-studios.com

  @orderAfter ButtonPicture

  @help

============================================================================
  Introduction :
============================================================================

  ()()
  (^.^)
  c(")(")

  This plugin allows you to set a custom mouse cursor for your game, as well
  as provides the ability to change the mouse cursor any time during the game.

============================================================================
  Requirements :
============================================================================

  ---------------------------------------
  None.
  ---------------------------------------

============================================================================
  Instructions :
============================================================================

  This plugin requires little in terms of getting setup, First you'll need
  to setup plugin parameters in the plugin manager, the only required
  parameters, are "Enabled By Default", and "Default Cursor Image"

============================================================================
  Plugin Commands :
============================================================================

   command : enable_cursor
  ---------------------------------------
   description : Activates Custom Cursor Images .

   command : disable_cursor
  ---------------------------------------
   description : Deactivates Custom Cursor Images .

   command : set_default_cursor CURSOR_NAME
  ---------------------------------------
   description : Change the default custom cursor image to the cursor with
   the name specified( the cursor must be defined in the "presets" parameter
   list ).

   command : set_battle_cursor CURSOR_NAME
  ---------------------------------------
   description : Change the battle custom cursor image to the cursor with
   the name specified( the cursor must be defined in the "presets" parameter
   list ).

   command : set_menu_cursor CURSOR_NAME
  ---------------------------------------
   description : Change the menu custom cursor image to the cursor with
   the name specified( the cursor must be defined in the "presets" parameter
   list ).

   command : set_picture_cursor PICTURE_ID CURSOR_NAME
  ---------------------------------------
   description : When the players mouse hovers over the picture with the ID of
   "PICTURE_ID" ( replace PICTURE_ID with the id of a picture ), their cursor
   will change to "CURSOR_NAME"( replace cursor name with the name of the
   cursor in "presets" parameter, that you want to use ).

   command : reset_picture_cursor PICTURE_ID
  ---------------------------------------
   description : Remove any custom cursor data associated with the picture
   with the id of "PICTURE_ID"( replace picture id with an id of a picture ).

   command : set_button_picture PICTURE_ID COMMON_EVENT_ID
  ---------------------------------------
   description : make a new button from the picture with the id of
   "PICTURE_ID"( replace PICTURE_ID with the id of the picture you want to
   turn into a button ), when the picture is clicked, the common event with
   the id of "COMMON_EVENT_ID" will be executed( replace "COMMON_EVENT_ID" )
   with the id of the common event that you want to execute when picture is
   clicked )!

  ---------------------------------------
   NOTICE: This command is exclusive to rpg maker mv!!! Please use
   "Button Picture" plugin for rpg maker mz!


============================================================================
  EVENT NOTE :
============================================================================

     note : setcursor: CURSOR_NAME
    ---------------------------------------
     description : place this note in an event, and when you hover over said
     event in game, your cursor will change to "CURSOR_NAME"( replace
     CURSOR_NAME with the name of a preset cursor ).

============================================================================
  Terms Of Use :
============================================================================



  This Plugin may be used commercially, or non commercially. This plugin may
  be extended upon. This plugin may NOT be shared, or passed to others
  who have not purchased this product. This plugin may only be distributed
  via a completed project.

============================================================================
  Version History :
============================================================================

  ● Version : 1.0.0
  ● Date : 11/29/2020
    ★ Release.

● Version : 1.0.1
● Date : 12/02/2020
  ✩ Fix - Unable to use capital letters for cursor names.
  ✩ Fix - Blank space with event comments is now working.

● Version : 1.1.0
● Date : 12/08/2020
  ★ Add - Compatibility patch for Mog Weather( MV ).
  ✩ Fix - Cursor now starts at screen center instead of top left.
  ✩ Fix - Minor adjustments to reduce file size.

● Version : 1.1.1
● Date : 12/29/2020
  ✩ Fix - Cursor over picture -> event, event cursor doesn't show.
  ✩ Fix - Mouse stays visible with MousePointerExtend.js plugin.
  ✩ Fix - MadeWithMv cursor movement lag( possibly ).
  ✩ Fix - PictureDrag.js conflict error( possibly ).
  ✩ Fix - Cursor improper position in full screen.
  ✩ Fix - Missing Image Files on exported games.
  ✩ Fix - Cursor not visible on scene change.

  ● Version : 1.1.2
  ● Date : 12/29/2020
    ✩ Fix - Rpg maker MV crash on click.

● Version : 1.2.0
● Date : 12/30/2020
  ★ Add - onMouseOut listener/snap to edge option in plugin manager.
  ✩ Fix - Cursor won't change when player is on top of event w/custom cursor.


● Version : 1.3.0
● Date : 02/02/2020
  ★ Add - Compatibility with TDDP_BindPicturesToMap.

● Version : 1.3.1
● Date : 02/02/2020
  ✩ Fix - mouse flicker when moving mouse over events next to eachother.

● Version : 1.4.0
● Date : 06/13/2021
  ★ Add - events hover cursors now calculated by event size, not tile size!
  ★ Add - Pixel Precision for events!
  ✩ Fix - sometimes mouse does not appear on game start in linux.
  ✩ Fix - Compatability with MBS map zoom.

● Version : 1.4.1
● Date : 06/17/2021
  ✩ Fix - error with show picture after 1.4.0 update.

● Version : 1.4.2
● Date : 06/17/2021
  ✩ Fix - blank events not able to use custom cursor.
  ✩ Fix - removed a debug log statement.

● Version : 1.4.3
● Date : 08/27/2021
  ✩ Fix - sometimes plugin tries to read pixels of non-existant sprites.

● Version : 1.4.4
● Date : 08/27/2021
  ✩ Fix - Error if sprite scale is set to 0.

● Version : 1.4.5
● Date : 06/20/2022
  ✩ Fix - performance issue in rendering the cursor.

● Version : 1.4.6
● Date : 09/23/2022
  ✩ Fix - zoom not working with custom event cursors.
  ✩ Fix - pixel precision for events.

● Version : 1.5.0
● Date : 09/23/2022
  ✩ Fix - issue with pictures buttons not showing correctly.
  ★ Add - Mouse should now displayed over ALL screen elements!

* ● Version : 1.5.1
* ● Date : 05/08/2023
*   ✩ Fix - issue with mouse renderer resolution initilization.

* ● Version : 1.5.2
* ● Date : 22/08/2023
*   ✩ Fix - context menu appearing on right click

* ● Version : 1.6.0
* ● Date : 03/08/2024
*   ★ Add - click support for large character sprites.

* ● Version : 1.6.1
* ● Date : 20/09/2024
*   ✩ Fix - issue with anchor being set incorrectly.

============================================================================
  Contact Me :
============================================================================

*  If you have questions, about this plugin, or commissioning me, or have
*  a bug to report, please feel free to contact me by any of the below
*  methods.

*  website : https://www.rosedale-studios.com
*  rmw : https://forums.rpgmakerweb.com/index.php?members/chaucer.44456
*  youtube : https://www.youtube.com/channel/UCYA4VU5izmbQvnjMINssshQ/videos
*  email : chaucer(at)rosedale-studios(dot)com
*  discord : chaucer#7538
*  skypeId : chaucer1991

============================================================================
  Special Thanks :
============================================================================

  Bug Reports :

   ★ Tamina
   ★ seaotter

============================================================================
@

//=============================================================================
// PLUGIN COMMANDS :
//=============================================================================

  @command enable_cursor
  @text Enable Cursor
  @desc Enable the custom cursor.

  @command disable_cursor
  @text Disable Cursor
  @desc Disable the custom cursor.

  @command set_default_cursor
  @text Set Default Cursor
  @desc Set the default cursor to the cursor specified.

  @arg cursor_name
  @text Cursor Name
  @desc The name of the cursor in "Cursor Presets" in the plugin manager.
  @default default
  @type combo
  @option default
  @value default

  @command set_battle_cursor
  @text Set Battle Cursor
  @desc Set the battle cursor to the cursor specified.

  @arg cursor_name
  @text Cursor Name
  @desc The name of the cursor in "Cursor Presets" in the plugin manager.
  @default default
  @type combo
  @option default
  @value default

  @command set_menu_cursor
  @text Set Menu Cursor
  @desc Set the menu cursor to the cursor specified.

  @arg cursor_name
  @text Cursor Name
  @desc The name of the cursor in "Cursor Presets" in the plugin manager.
  @default default
  @type combo
  @option default
  @value default

  @command set_picture_cursor
  @text Set Picture Cursor Image
  @desc Assign a cursor image to a specific picture based on its ID.

  @arg picture_id
  @text Picture ID
  @desc The ID of the picture that will have a custom cursor when hovered over.
  @default 1
  @type number
  @min 1
  @max 100

  @arg cursor_name
  @text Cursor Name
  @desc The Name of the cursor that will be used when hovering over this picture.
  @default
  @type text

  @command reset_picture_cursor
  @text Set Picture Cursor Image
  @desc Remove any custom cursor associated with a specific picture.

  @arg picture_id
  @text Picture ID
  @desc The ID of the picture that will have it's custom cursor removed.
  @default 1
  @type number
  @min 1
  @max 100

//=============================================================================
// PLUGIN PARAMETERS :
//=============================================================================

  @param enabled
  @text Enabled by Default
  @desc Should this plugin be turned on at the start of the game?.
  @default true
  @type boolean

  @param defaultCursor
  @text Default Cursor
  @desc The cursor image that will be enabled by default.
  @default {"name":"default","cursorImage":"","cursorAnchor":"{\"x\":0,\"y\":0}","cursorFrames":"1","cursorSpeed":"40","clickImage":"","clickFrames":"1","clickSpeed":"40"}
  @type struct<Default>
  @parent enabled

  @param battleCursor
  @text Battle Cursor
  @desc The cursor image that will be enabled by default.
  @default {"name":"default","cursorImage":"","cursorAnchor":"{\"x\":0,\"y\":0}","cursorFrames":"1","cursorSpeed":"40","clickImage":"","clickFrames":"1","clickSpeed":"40"}
  @type struct<Default>
  @parent enabled

  @param menuCursor
  @text Menu Cursor
  @desc The cursor image that will be enabled by default.
  @default {"name":"default","cursorImage":"","cursorAnchor":"{\"x\":0,\"y\":0}","cursorFrames":"1","cursorSpeed":"40","clickImage":"","clickFrames":"1","clickSpeed":"40"}
  @type struct<Default>
  @parent enabled

  @param presets
  @text Cursor Presets
  @desc List additional predefined cursors here which can be toggled between via plugin command.
  @default []
  @type struct<Presets>[]


  @param pixelPrecision
  @text Pixel Precise Pictures
  @desc Add pixel precision for cursor change/button click?( requires ButtonPicture.js ).
  @default true
  @type boolean

  @param detectMouseOut
  @text Snap To Edge
  @desc If enabled, the plugin will detect when the mouse moves out of screen and will snap the cursor to the nearest edge.
  @default false
  @type boolean

*/
/*~struct~Default:

 @param name
 @text Cursor Name
 @desc Used in plugin commands to reference this specific cursor.
 @default default
 @type select
 @option default


 @param cursorImage
 @text Cursor Image
 @desc The image that will replace your cursor.
 @default
 @type file
 @dir img/system/
 @require 1
 @parent name

 @param cursorAnchor
 @text Cursor Focal Point
 @desc The part of the image that will be used for registering clicks.
 @default {"x":0,"y":0}
 @type select
 @option Top-Left
 @value {"x":0,"y":0}
 @option Top-Right
 @value {"x":1,"y":0}
 @option Bottom-Left
 @value {"x":0,"y":1}
 @option Bottom-Right
 @value {"x":1,"y":1}
 @option Center
 @value {"x":0.5,"y":0.5}
 @parent cursorImage

 @param cursorFrames
 @text Default Animation Frames
 @desc How many frames of animation does this cursor image have.
 @default 1
 @type number
 @max 100
 @min 1
 @parent cursorImage

 @param cursorSpeed
 @text Cursor Animation Speed
 @desc How fast will the cursor animate.
 @default 40
 @type number
 @max 50
 @min 1
 @parent cursorImage

 @param clickImage
 @text Click Cursor Image
 @desc On left click, the cursor will be changed to this image.
 @default
 @type file
 @dir img/system/
 @require 1
 @parent name

 @param clickFrames
 @text Click Animation Frames
 @desc How many frames of animation does the click cursor image have.
 @default 1
 @type number
 @max 100
 @min 1
 @parent clickImage

 @param clickSpeed
 @text Click Animation Speed
 @desc How fast will the click cursor animate.
 @default 40
 @type number
 @max 50
 @min 1
 @parent clickImage

*/

 /*~struct~Presets:

  @param name
  @text Cursor Name
  @desc Used in plugin commands to reference this specific cursor.
  @default
  @type text


  @param cursorImage
  @text Cursor Image
  @desc The image that will replace your cursor.
  @default
  @type file
  @dir img/system/
  @require 1
  @parent name

  @param cursorAnchor
  @text Cursor Focal Point
  @desc The part of the image that will be used for registering clicks.
  @default {"x":0,"y":0}
  @type select
  @option Top-Left
  @value {"x":0,"y":0}
  @option Top-Right
  @value {"x":1,"y":0}
  @option Bottom-Left
  @value {"x":0,"y":1}
  @option Bottom-Right
  @value {"x":1,"y":1}
  @option Center
  @value {"x":0.5,"y":0.5}
  @parent cursorImage

  @param cursorFrames
  @text Default Animation Frames
  @desc How many frames of animation does this cursor image have.
  @default 1
  @type number
  @max 100
  @min 1
  @parent cursorImage

  @param cursorSpeed
  @text Cursor Animation Speed
  @desc How fast will the cursor animate.
  @default 40
  @type number
  @max 50
  @min 1
  @parent cursorImage

  @param clickImage
  @text Click Cursor Image
  @desc On left click, the cursor will be changed to this image.
  @default
  @type file
  @dir img/system/
  @require 1
  @parent name

  @param clickFrames
  @text Click Animation Frames
  @desc How many frames of animation does the click cursor image have.
  @default 1
  @type number
  @max 100
  @min 1
  @parent clickImage

  @param clickSpeed
  @text Click Animation Speed
  @desc How fast will the click cursor animate.
  @default 40
  @type number
  @max 50
  @min 1
  @parent clickImage

*/

//=============================================================================
var Imported = Imported || {};
Imported['Mimosa Mouse Cursor'.toUpperCase()] = true;
//=============================================================================
var Chaucer = Chaucer || {};
Chaucer.mmCursor = {};
//=============================================================================

( function ( $ ) { // CONFIG:

  $ = $ || {};
//============================================================================
  //Create plugin information.
//============================================================================

  $._identifier =  /(Mimosa Mouse Cursor) : Version - (\d+\.\d+\.\d+)/;
  $._nameError = 'Mimosa Mouse Cursor was unable to load! Please revert any changes back to normal!';


  for ( var i = 0, l = $plugins.length; i < l; i++ ) {

    if ( !$plugins[i].description.match( $._identifier ) ) continue;

    $._author = 'Chaucer';
    $._name = RegExp.$1;
    $._version = RegExp.$2;
    $._pluginName = $plugins[i].name;
    $._params = Parse( $plugins[i].parameters );
    $._commands = {};
    $._alias = {};

  };

  if ( !$._name ) throw new Error( $._nameError );

//============================================================================


//=============================================================================
// Custom :
//=============================================================================

//--------------------------------------------------------------------------
  function Parse( data )
  { // parse data.
//--------------------------------------------------------------------------
    try { data = JSON.parse( data ); }
    catch ( error ) { data = data; }
    finally {

      if ( typeof data === 'object' ) {
        let keys = Object.keys( data );

        for (var i = 0, l = keys.length; i < l; i++ ) {
          data[keys[i]] = Parse( data[keys[i]] );
        }

      }

    }

    return data;

  };

//-----------------------------------------------------------------------------
  $.alias = function ( className, method, fn, isStatic )
  { // use this method to quickly alias a method of a particular class.
//-----------------------------------------------------------------------------

    let key = `${className.name}.${( isStatic ? '' : 'prototype.' ) + method}`;

    if ( $._alias[key] ) throw new Error( `${key} already aliased!` );
    eval( `
      $._alias[key] = ${key};
      ${key} = ${fn.toString().replace( /alias/g, `$._alias["${key}"].call` )};
    `)

  };

//-----------------------------------------------------------------------------
  $.expand = function ( className, method, fn, isStatic )
  { // use this method to quickly add a method of a particular class.
//-----------------------------------------------------------------------------

    if ( !isStatic )
      className.prototype[method] = fn;

    else
      className[method] = fn;

  };

//-----------------------------------------------------------------------------
  $.compareVersion = function ( current, target )
  { // compare the current version with the target version.
//-----------------------------------------------------------------------------

    const v1 = current.split( '.' );
    const v2 = target.split( '.' );
    for ( let i = 0, l = v1.length; i < l; i++ ) {
      if ( v1[i] < v2[i] ) return -1; // version is lower!
      if ( v1[i] > v2[i] ) return 1; // version is higher!
    }
    return 0; // same version!

  };

//-----------------------------------------------------------------------------
  $.registerPluginCommand = function ( command, fn )
  { // compare the current version with the target version.
//-----------------------------------------------------------------------------

    if ( Utils.RPGMAKER_NAME === 'MV' )
      $._registerMVPluginCommand( command, fn );

    else if ( Utils.RPGMAKER_NAME === 'MZ' )
      $._registerMZPluginCommand( $._pluginName, command, fn );

  };

//-----------------------------------------------------------------------------
  $._registerMVPluginCommand = function ( command, fn )
  { // compare the current version with the target version.
//-----------------------------------------------------------------------------

    $._commands[command] = fn;

  };

//-----------------------------------------------------------------------------
  $._registerMZPluginCommand = function ( pluginName, command, fn )
  { // compare the current version with the target version.
//-----------------------------------------------------------------------------

    PluginManager.registerCommand( pluginName, command, fn );

  };

  // CSS STYLE :
  $._mouseLocked = false;
  $.style = document.createElement('style');
  $.style.type = 'text/css';
  $.style.innerHTML = '* { cursor: none; }';
  $.styleParent = document.getElementsByTagName( 'body' )[0];

  // MMC VARIABLES :
  $._ticker = new ( PIXI.Ticker ? PIXI.Ticker : PIXI.ticker.Ticker )();
  $.eventId = 0;
  $.pictureId = 0;
  $.cursorPosition = new Point( -128, -128 ),
  $.menuCursor = { cursorAnchor: new Point( 0, 0 ) };
  $.battleCursor = { cursorAnchor: new Point( 0, 0 ) };
  $.defaultCursor = { cursorAnchor: new Point( 0, 0 ) };

//=============================================================================
  $.enableCursor = function ()
  { // enable mouse cursor.
//=============================================================================

    if ( $.enabled  ) return;
    if ( Utils.isMobileDevice() ) return false;
    $.styleParent.appendChild( $.style );
    $.enabled = true;
  }

//=============================================================================
  $.disableCursor = function ()
  { // disable the mouse cursor.
//=============================================================================

    if ( !$.enabled  ) return;
    $.styleParent.removeChild( $.style );
    $.enabled = false;

  }

//=============================================================================
  $.setClickImage = function ( cursor, filename )
  { // set the cursor to the filename provided.
//=============================================================================

    cursor.clickBitmap = ImageManager.loadSystem( filename || '' );

  }

//=============================================================================
  $.setCursorImage = function ( cursor, filename )
  { // set the cursor to the filename provided.
//=============================================================================

    cursor.cursorBitmap = ImageManager.loadSystem( filename || '' );

  }

//=============================================================================
  $.setClickFrames = function ( cursor, frames )
  { // set the amount of frames available for the click sprite.
//=============================================================================

    cursor.clickFrames = frames;

  }

//=============================================================================
  $.setCursorFrames = function ( cursor, frames )
  { // set the amount of frames available for the click sprite.
//=============================================================================

    cursor.cursorFrames = frames;

  }

//=============================================================================
  $.setCursorSpeed = function ( cursor, speed )
  { // set the cursor animation speed.
//=============================================================================

    cursor.cursorSpeed = speed;

  }

//=============================================================================
  $.setClickSpeed = function ( cursor, speed )
  { // set the click cursor animation speed.
//=============================================================================

    cursor.clickSpeed = speed;

  }

//=============================================================================
  $.setCursorAnchor = function ( cursor, x, y )
  { // set the anchor value of the cursor image.
//=============================================================================

    if ( typeof x === "object" ) { x = x.x; y = x.y; }
    cursor.cursorAnchor.set( x, y );

  }

//=============================================================================
  $.setCursorPosition = function ( x, y )
  { // set the cursors position.
//=============================================================================

    if ( !$._mouseLocked ) $.cursorPosition.set( x, y );

  }

//=============================================================================
  $.setDefaultCursor = function ( cursorName )
  { // set the default cursor.
//=============================================================================

    $.setCursorData( $.defaultCursor, cursorName );

  }

//=============================================================================
  $.setBattleCursor = function ( cursorName )
  { // set the default cursor.
//=============================================================================

    cursorName = cursorName === 'default' ? 'battle' : cursorName;
    $.setCursorData( $.battleCursor, cursorName );

  }

//=============================================================================
  $.setMenuCursor = function ( cursorName )
  { // set the default cursor.
//=============================================================================

    cursorName = cursorName === 'default' ? 'menu' : cursorName;
    $.setCursorData( $.menuCursor, cursorName );

  }

//=============================================================================
  $.setCursorData = function ( cursor, name )
  { // reset cursor to default values.
//=============================================================================

     const data = $.cursorDataByName( name );

     if ( !data ) return;

     $.setCursorFrames( cursor, data.cursorFrames );
     $.setClickFrames( cursor, data.clickFrames );
     $.setClickImage( cursor, data.clickImage );
     $.setCursorImage( cursor, data.cursorImage );
     $.setCursorAnchor( cursor, data.cursorAnchor );
     $.setCursorSpeed( cursor, data.cursorSpeed );
     $.setClickSpeed( cursor, data.clickSpeed );

  }

//=============================================================================
  $.cursorDataByName = function ( name )
  { // reset cursor to default values.
//=============================================================================

    if ( name === 'default' ) return $._params.defaultCursor;
    if ( name === 'battle' ) return $._params.battleCursor;
    if ( name === 'menu' ) return $._params.menuCursor;

    for ( let i = 0, l = $._params.presets.length; i < l; i++ ) {

      if ( $._params.presets[i].name.trim() === name )
        return $._params.presets[i];

    }

    return null;

  }

//=============================================================================
  $.zoom = function ( needsZoom )
  { // return the width of the event provided.
//=============================================================================

    const scene = SceneManager._scene;
    const spriteset = scene._spriteset;

    if ( !needsZoom ) return new Point( 1, 1 );
    return spriteset ? spriteset.scale : new Point( 1, 1 );

  }

//=============================================================================
  $.getEventWidth = function ( sprite )
  { // return the width of the event provided.
//=============================================================================

    if ( sprite._character && !sprite._character.characterName() ) {
      return $gameMap.tileWidth();
    }

    return sprite.width * sprite.scale.x * $.zoom( !!sprite._character ).x;

  }

//=============================================================================
  $.getEventHeight = function ( sprite )
  { // return the height of the event provided.
//=============================================================================

    if ( sprite._character && !sprite._character.characterName() ) {
      return $gameMap.tileHeight();
    }

    return sprite.height * sprite.scale.y * $.zoom( !!sprite._character ).y;

  }

//=============================================================================
  $.isCursorOverSprite = function ( sprite, pixelPrecise, isEvent )
  { // return characters that are under our mouse!.
//=============================================================================

      let { x, y, width, height, anchor, scale, opacity, visible } = sprite;

      const character = isEvent ? sprite._character : null;
      width = isEvent ? this.getEventWidth( sprite ) : width;
      height = isEvent ? this.getEventHeight( sprite ) : height;

      if ( character ) {
        if ( isNaN( character._eventId ) ) return false;
        if ( character.isTransparent() ) return false;
        if ( character.opacity() == 0 ) return false;
      }

      const zoom = $.zoom( !!character );
      const zx = $gameScreen.zoomX() * ( zoom.x - 1 );
      const zy = $gameScreen.zoomY() * ( zoom.y - 1 );
      const baseW = width * scale.x;
      const baseH = height * scale.y;
      const baseX = x * zoom.x - baseW * anchor.x - zx;
      const baseY = y * zoom.y - baseH * anchor.y - zy;

      const position = $.cursorPosition;

      collidedX = position.x >= baseX && position.x <= baseX + width;
      collidedY = position.y >= baseY && position.y <= baseY + height;

      if ( !!sprite.bitmap && pixelPrecise && collidedX && collidedY )
        return $.isPixelValid( sprite, position.x - baseX, position.y - baseY );

      else
        return collidedX && collidedY;

    }

//=============================================================================
  $.isPixelValid = function ( sprite, dx, dy )
  { // return characters that are under our mouse!.
//=============================================================================

    if ( sprite._character && !sprite._character.characterName() ) {
      return true;
    }

    const zoom = $.zoom( !!sprite._character );
    const { bitmap } = sprite;

    if ( !bitmap.isReady() ) return false;
    if ( sprite.scale.x == 0 || sprite.scale.y == 0 ) return false;
    if ( zoom.x == 0 || zoom.y == 0 ) return false;

    dx = Math.floor( dx / sprite.scale.x / zoom.x ) + sprite._frame.x;
    dy = Math.floor( dy / sprite.scale.y / zoom.y ) + sprite._frame.y;

    const imageData = bitmap.context.getImageData( dx, dy, 1, 1 );

    return imageData.data[3] >= 0.9;
  }

//-----------------------------------------------------------------------------
  $._ticker.add( function ( _delta )
  { // update the mouse cursor.
//-----------------------------------------------------------------------------

    const scene = SceneManager ? SceneManager._scene : null;
    if ( scene && $._mouseCursor ) $._mouseCursor.update();

  } ).start();

  $._ticker._tick();

//=============================================================================
// MV SPECIFIC CODE :
//=============================================================================

  if ( Utils.RPGMAKER_NAME === 'MV' ) {

//-----------------------------------------------------------------------------
    $.alias( Game_Interpreter, 'pluginCommand', function( command, args ) {
//-----------------------------------------------------------------------------

      alias( this, command, args );
      command = command.toLowerCase();
      if ( $._commands[command] ) $._commands[command]( args );

    } );

  };

//=============================================================================
// Graphics :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Graphics, '_createCanvas', function()
  { // Aliased _createCanvas of class Graphics.
//-----------------------------------------------------------------------------

    alias( this );
    this._createMouseCanvas();

  }, true );

//-----------------------------------------------------------------------------
  $.expand( Graphics, '_createMouseCanvas', function()
  { // create a canvas solely for the mouse.
//-----------------------------------------------------------------------------

    this._mouseCanvas = document.createElement("canvas");
    this._mouseCanvas.oncontextmenu = () => false;
    this._mouseCanvas.id = "mouseCanvas";
    this._updateCanvas();

    setTimeout(function () {
      document.body.appendChild( this._mouseCanvas );
    }.bind( this ), 100 );

  }, true );

//-----------------------------------------------------------------------------
  $.alias( Graphics, '_updateCanvas', function()
  { // Aliased _updateCanvas of class Graphics.
//-----------------------------------------------------------------------------

    alias( this );
    this._updateMouseCanvas();

  }, true );

//-----------------------------------------------------------------------------
  $.expand( Graphics, '_updateMouseCanvas', function()
  { // update the canvas for the mouse.
//-----------------------------------------------------------------------------

    if ( this._mouseCanvas ) {

      this._mouseCanvas.width = this._width;
      this._mouseCanvas.height = this._height;
      this._mouseCanvas.style.zIndex = 100;

      this._centerElement(this._mouseCanvas);

    }

  }, true );

//-----------------------------------------------------------------------------
  $.alias( Graphics, '_createPixiApp', function()
  { // Aliased _createPixiApp of class Graphics.
//-----------------------------------------------------------------------------

    alias( this );
    this._createPixiMouseApp();

  }, true );

//-----------------------------------------------------------------------------
  $.expand( Graphics, '_createPixiMouseApp', function()
  { // create an app specifically for the mouse.
//-----------------------------------------------------------------------------

    this._mouseApp = new PIXI.Application({
      view: this._mouseCanvas,
      height: this._height,
      width: this._width,
      transparent: true,
      autoStart: true
    });

    this._mouseApp.stage.addChild( $._mouseCursor );

    $._renderer = this._mouseApp.renderer;


  }, true );

//-----------------------------------------------------------------------------
  $.alias( Graphics, '_createRenderer', function()
  { // Aliased _createRenderer  of class Graphics.
//-----------------------------------------------------------------------------

    alias( this );
    this._createPixiMouseApp();

  }, true );

//-----------------------------------------------------------------------------
  $.alias( Graphics, 'resize', function( width, height )
  { // Aliased resize of class Graphics.
//-----------------------------------------------------------------------------

    alias( this, width, height );
    if ( this._mouseApp ) this._mouseApp.renderer.resize( width, height );

  }, true );

//=============================================================================
// SceneManager :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( SceneManager, 'updateMousePointer', function()
  { // Aliased updateMousePointer of class SceneManager.
//-----------------------------------------------------------------------------

    alias( this );
    const MPECursor = document.getElementById('MousePointer').style;
    const { visible, bitmap } =  $._mouseCursor;
    const hidden = visible && bitmap && bitmap.url;
    if ( MPECursor.cursor != 'none' )
      MPECursor.cursor = hidden ? 'none' : MPECursor.cursor;

  }, true );

//=============================================================================
// Scene_Base :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Scene_Base, 'pictureDragging', function()
  { // Aliased pictureDragging of class Scene_Base.
//-----------------------------------------------------------------------------

    if ( !this._spriteset ) return [];
    return alias( this );

  } );

//-----------------------------------------------------------------------------
  $.alias( Scene_Base, 'forceReleasePicture', function()
  { // Aliased pictureDragging of class Scene_Base.
//-----------------------------------------------------------------------------

    if ( !this._spriteset ) return [];
    return alias( this );

  } );

//=============================================================================
// Scene_Boot :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Scene_Boot, 'start', function()
  { // Aliased onDatabaseLoaded of class Scene_Boot.
//-----------------------------------------------------------------------------

    alias( this );
    $.setDefaultCursor( 'default' );
    $.setBattleCursor( 'default' );
    $.setMenuCursor( 'default' );

  } );

//-----------------------------------------------------------------------------
  $.alias( Scene_Boot, 'resizeScreen', function()
  { // Aliased method of class Graphics.
//-----------------------------------------------------------------------------

    alias( this );
    $.cursorPosition.set( Graphics.boxWidth / 2, Graphics.boxHeight / 2 );

  } );

//=============================================================================
// TouchInput :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( TouchInput, '_onMouseMove', function( event )
  { // Aliased _setupEventHandlers of class TouchInput.
//-----------------------------------------------------------------------------

    alias( this, event );
    var x = Graphics.pageToCanvasX( event.pageX );
    var y = Graphics.pageToCanvasY( event.pageY );
    $.setCursorPosition( x, y );

  }, true );

//-----------------------------------------------------------------------------
  $.alias( TouchInput, '_onMouseDown', function( event )
  { // Aliased _onTouchStart of class TouchInput.
//-----------------------------------------------------------------------------

    alias( this, event );

    var x = Graphics.pageToCanvasX( event.pageX );
    var y = Graphics.pageToCanvasY( event.pageY );

    $.setCursorPosition( x, y );

  }, true );

if ( $._params.detectMouseOut ) {

//-----------------------------------------------------------------------------
  $.expand( TouchInput, '_onMouseOut', function( event )
  { // adds onmouseout method for touch input.
//-----------------------------------------------------------------------------

  var x = Graphics.pageToCanvasX( event.pageX ).clamp( 0, Graphics.width );
  var y = Graphics.pageToCanvasY( event.pageY ).clamp( 0, Graphics.height );

  $.setCursorPosition( x, y );

  }, true );

  document.addEventListener( 'mouseout', TouchInput._onMouseOut.bind( this ) );

}

//=============================================================================
// Scene_Map :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Scene_Map, 'onMapTouch', function()
  { // Aliased onMapTouch of class Scene_Map.
//-----------------------------------------------------------------------------

    const event = this.findClickedEventSprite();
    if ( event ) {
      if ( Imported['COLLISION ALTERING PLUGIN'] ) {
        $gameTemp._mmcClickedEvent = event._eventId;
      }
      $gameTemp.setDestination( event.x, event.y );

    } else {
      alias();

    }

  }, false );

//-----------------------------------------------------------------------------
  $.expand( Scene_Map, 'findClickedEventSprite', function()
  { // find an event whom sprite has been clicked with the mouse.
//-----------------------------------------------------------------------------

    const spriteset = this._spriteset;
    const { x:tx, y:ty } = TouchInput;
    const precision = $._params.pixelPrecision;

    if ( spriteset ) {
      const sprites = spriteset._characterSprites.filter( spr => {
        return ( spr._character._eventId || 0 ) > 0
      } );
      let hits = [];


      for ( let i = 0, l = sprites.length; i < l; i++ ) {
        if ( $.isCursorOverSprite( sprites[i], precision, true ) ) {
          hits.push( sprites[i] );
        }
      };

      const sprite = hits.sort( ( a, b ) => a.y + a.z - b.y - b.z )[0]

      return sprite ? sprite._character : null;

    }

  }, false );

//=============================================================================
// Scene_MenuBase
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Scene_MenuBase, 'initialize', function()
  { // Aliased initialize of class Scene_MenuBase.
//-----------------------------------------------------------------------------

    alias( this );
    this._isMenu = true;

  } );

//=============================================================================
// Scene_Map :
//=============================================================================

if ( Utils.RPGMAKER_NAME == 'MV' ) {

//-----------------------------------------------------------------------------
  $.alias( Scene_Map, 'isMapTouchOk', function()
  { // return if any picture has been pressed.
//-----------------------------------------------------------------------------

    return alias( this ) && !this._spriteset.isAnyPicturePressed();

  } );

}

//=============================================================================
// Spriteset_Base :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Spriteset_Base, 'update', function()
  { // Aliased update of class Spriteset_Base.
//-----------------------------------------------------------------------------

    $.pictureId = 0;
    $.eventId = 0;
    alias( this );

  } );

//-----------------------------------------------------------------------------
  $.alias( Spriteset_Base, 'mzkp_isAnyPicturePressed', function()
  { // Aliased mzkp_isAnyPicturePressed of class Spriteset_Base.
//-----------------------------------------------------------------------------

    if ( $._params.pixelPrecision ) {

      const cursor = Chaucer.mmCursor._mouseCursor;
      return this._pictureContainer.children.some( sprite => {
        if ( !cursor.isPictureButton( sprite._pictureId ) ) return false;
        const { x, y } = $.cursorPosition
        return sprite.isPressed() && $.isPixelValid( sprite, x, y );
      } );

    } else {
      return alias( this );

    }

  } );

if ( Utils.RPGMAKER_NAME == 'MV' ) {

//-----------------------------------------------------------------------------
  $.expand( Spriteset_Base, 'getPictureArray', function()
  { // return an array, of all pictures.
//-----------------------------------------------------------------------------

    if ( !!Imported.TDDP_BindPicturesToMap ) {

      let pictures = [];
      const indices = Object.keys( this._pictureStorage ).map( Number );

      for (var index of indices ) {
        pictures[index -1] = this._pictureStorage[index];
      }

      return pictures;

    }

    return this._pictureContainer.children;

  } );

  //-----------------------------------------------------------------------------
    $.expand( Spriteset_Base, 'isAnyPicturePressed', function()
    { // return if any picture has been pressed.
  //-----------------------------------------------------------------------------


      if ( !TouchInput.isPressed() ) return false;

      const pictures = this.getPictureArray();
      const cursor = Chaucer.mmCursor._mouseCursor;

      return pictures.some( picture =>  {
        if ( !cursor.isPictureButton( picture._pictureId ) ) return false;
        return picture.isPressed && picture.isPressed()
      } );

    } );

}

//=============================================================================
// Sprite_Character :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Sprite_Character, 'update', function()
  { // Aliased update of class Sprite_Character.
//-----------------------------------------------------------------------------

    alias( this );
    this.updateCursorHover();

  } );

//-----------------------------------------------------------------------------
  $.expand( Sprite_Character, 'updateCursorHover', function()
  { // update mouse hover over character.
//-----------------------------------------------------------------------------

    if ( !$.isCursorOverSprite( this, $._params.pixelPrecision, true ) ) return;
    const character = this._character;

    if ( ( character._eventId || 0 ) > 0 ) {
      $.eventId = character._eventId || 0;
    }

  } );

//=============================================================================
// Sprite_Picture :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Sprite_Picture, 'update', function()
  { // Aliased update of class Sprite_Picture.
//-----------------------------------------------------------------------------

    alias( this );
    this.updateCursorHover();

  } );

//-----------------------------------------------------------------------------
  $.expand( Sprite_Picture, 'updateCursorHover', function()
  { // update if the mouse is over this picture.
//-----------------------------------------------------------------------------

    if ( !$.isCursorOverSprite( this, $._params.pixelPrecision ) ) return;
    $.pictureId = this._pictureId || 0;


  } );

//-----------------------------------------------------------------------------
  $.alias( Sprite_Picture, 'onClick', function()
  { // Aliased mzkp_isAny of class Spriteset_Base.
//-----------------------------------------------------------------------------
    if ( Utils.RPGMAKER_NAME == 'MV' ) {
      $gameTemp.reserveCommonEvent( this.picture().commonEventId );

    } else if ( Utils.RPGMAKER_NAME == 'MZ' ) {

      const pixelPrecise = $._params.pixelPrecision;
      const { x, y } = $.cursorPosition;
      if ( pixelPrecise && !$.isPixelValid( this, x, y )  ) return;
      alias( this );

    }

  } );

if ( Utils.RPGMAKER_NAME == 'MV' ) {

//-----------------------------------------------------------------------------
  $.expand( Sprite_Picture, 'isPressed', function()
  { // return if this sprite was pressed only for mv.
//-----------------------------------------------------------------------------

    const result = $.isCursorOverSprite( this, $._params.pixelPrecision );
    if ( TouchInput.isTriggered() && result ) this.onClick();
    return result;

  } );

}
//=============================================================================
// Game_Event :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'initMembers', function()
  { // Aliased initMembers of class Game_Event.
//-----------------------------------------------------------------------------

    alias( this );
    this._cursorName = '';

  } );

//-----------------------------------------------------------------------------
  $.alias( Game_Event, 'setupPage', function()
  { // Aliased setupPage of class Game_Event.
//-----------------------------------------------------------------------------

    alias( this );
    this.refreshCursorName();

  } );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'refreshCursorName', function()
  { // refresh the cursors name.
//-----------------------------------------------------------------------------

    this._cursorName = '';

    const page = this.page();
    if ( !page ) return null;

    for ( var i = 0, l = page.list.length; i < l; i++ ) {

      const {code, parameters } = page.list[i];
      if ( code !== 108 && code !== 408 ) continue;

      const arg = parameters[0].toLowerCase();
      if ( arg.match( /\s*setcursor\s*:\s*(.*)/ ) ) {

        this._cursorName = parameters[0].split( ':' )[1].trim();
        break;

      }

    }

  } );

//-----------------------------------------------------------------------------
  $.expand( Game_Event, 'cursorName', function()
  { // return the cursor name.
//-----------------------------------------------------------------------------

    return this._cursorName;

  } );

//=============================================================================
// Game_Picture :
//=============================================================================

//-----------------------------------------------------------------------------
  $.alias( Game_Picture, 'initialize', function()
  { // Aliased initialize of class Game_Picture.
//-----------------------------------------------------------------------------

    alias( this );
    this.initCursorName();

  } );

//-----------------------------------------------------------------------------
  $.expand( Game_Picture, 'initCursorName', function()
  { // intialize the cursor name.
//-----------------------------------------------------------------------------

    this._cursorName = '';

  } );

//-----------------------------------------------------------------------------
  $.expand( Game_Picture, 'setCursor', function( cursorName )
  { // set the cursor name.
//-----------------------------------------------------------------------------

    this._cursorName = cursorName;

  } );

//-----------------------------------------------------------------------------
  $.expand( Game_Picture, 'cursorName', function()
  { // return the name of the cursor.
//-----------------------------------------------------------------------------

    return this._cursorName;

  } );

//=============================================================================
// Plugin Commands :
//=============================================================================

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'enable_cursor', function()
  { // register command for enableCursor.
//-----------------------------------------------------------------------------

    $.enableCursor();

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'disable_cursor', function()
  { // register command for disable_cursor.
//-----------------------------------------------------------------------------

    $.disableCursor();

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'set_default_cursor', function( args )
  { // register command for set_default_cursor.
//-----------------------------------------------------------------------------

    if ( Utils.RPGMAKER_NAME === 'MV' )
      $.setDefaultCursor( args[0] );

    else if ( Utils.RPGMAKER_NAME === 'MZ' )
      $.setDefaultCursor( args.cursor_name );

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'set_battle_cursor', function( args )
  { // register command for set_battle_cursor.
//-----------------------------------------------------------------------------

    if ( Utils.RPGMAKER_NAME === 'MV' )
      $.setBattleCursor( args[0] );

    else if ( Utils.RPGMAKER_NAME === 'MZ' )
      $.setBattleCursor( args.cursor_name );

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'set_menu_cursor', function( args )
  { // register command for set_menu_cursor.
//-----------------------------------------------------------------------------

    if ( Utils.RPGMAKER_NAME === 'MV' )
      $.setMenuCursor( args[0] );

    else if ( Utils.RPGMAKER_NAME === 'MZ' )
      $.setMenuCursor( args.cursor_name );

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'set_picture_cursor', function( args )
  { // register command for set_cursor.
//-----------------------------------------------------------------------------

    if ( Utils.RPGMAKER_NAME === 'MV' )
      $gameScreen.picture( Number( args[0] ) ).setCursor( args[1] );

    else if ( Utils.RPGMAKER_NAME === 'MZ' )
      $gameScreen.picture( Number( args.picture_id ) ).setCursor(
        args.cursor_name
      );

  } );

//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'reset_picture_cursor', function( args )
  { // register command for set_cursor.
//-----------------------------------------------------------------------------

    if ( Utils.RPGMAKER_NAME === 'MV' )
      $gameScreen.picture( Number( args[0] ) ).setCursor( 'default' );

    else if ( Utils.RPGMAKER_NAME === 'MZ' )
      $gameScreen.picture( Number( args.picture_id ) ).setCursor( 'default' );

  } );

if (Utils.RPGMAKER_NAME == 'MV' ) {


//-----------------------------------------------------------------------------
  $.registerPluginCommand( 'set_button_picture', function( args )
  { // register command for set_button_picture.
//-----------------------------------------------------------------------------

    const picture = $gameScreen.picture( Number( args[0] ) );
    if ( picture ) picture.commonEventId = Number( args[1] );

  } );


}

  if ( !$._params.enabled ) return;
  $.enableCursor();

//=============================================================================
} )( Chaucer.mmCursor );
//=============================================================================

//=============================================================================
// Sprite_MouseCursor :
//=============================================================================

//=============================================================================
class Sprite_MouseCursor extends Sprite
{ // Sprite_MouseCursor

//=============================================================================
  constructor()
  { // Called on object creation.
//=============================================================================

    super();
    this._pattern = 0;
    this._animationCount = 0;
    this.pictureId = 0;
    this.eventId = 0;

  }

//=============================================================================
  getCursorData()
  { // return cursor data based on event, picture.
//=============================================================================

    const $ = Chaucer.mmCursor;
    const sceneName = SceneManager._scene.constructor.name;

    if ( sceneName === 'Scene_Battle' ) {
      if ( !!$.battleCursor.cursorBitmap._url ) return $.battleCursor;

    } else if ( SceneManager._scene._isMenu ) {
      if ( !!$.menuCursor.cursorBitmap._url ) return $.menuCursor;

    }

    return this._hoverCursor || $.defaultCursor;

  }

//=============================================================================
  refreshBitmap()
  { // refresh the bitmap for the cursor.
//=============================================================================

    const bitmap = this.getBitmap( TouchInput.isPressed() );

    bitmap.addLoadListener( function() {
      this._pattern = 0;
      this.bitmap = bitmap;
      this.width = bitmap.width;
      this.height = bitmap.height;
      this.updateFrame();

    }.bind( this ) );

  }

//=============================================================================
  getBitmap( clicked = false )
  { // return the bitmap based on click or not.
//=============================================================================

    const { clickBitmap, cursorBitmap } = this.getCursorData();

    return ( clicked && !!clickBitmap._url ) ? clickBitmap : cursorBitmap;

  }

//=============================================================================
  update()
  { // update our sprite mouse cursor.
//=============================================================================

    super.update();
    this.updateEventCursor();
    this.updatePictureCursor();
    this.updateMouse();

  }

//=============================================================================
  isPictureButton( id )
  { // return if the current picture is a button.
//=============================================================================

    if ( !$gameScreen ) return false;
    const picture = $gameScreen.picture( Number( id ) ) || null;
    return picture ? !!picture.commonEventId : false;

  }

//=============================================================================
  updateEventCursor()
  { // update hover cursor data for events.
//=============================================================================

    const $ = Chaucer.mmCursor;

    if ( this.eventId == $.eventId ) return;
    this.eventId = $.eventId;
    this.refreshCursorData();

  }

//=============================================================================
  updatePictureCursor()
  { // update hover cursor data for pictures.
//=============================================================================

    const $ = Chaucer.mmCursor;

    if ( $.pictureId == this.pictureId ) return;
    this.pictureId = $.pictureId;
    this.refreshCursorData();

  }

//=============================================================================
  refreshCursorData()
  { // refresh cursor data.
//=============================================================================

    let data;
    const $ = Chaucer.mmCursor;
    const event = $gameMap.event( this.eventId ) || null;
    const picture = $gameScreen.picture( this.pictureId ) || null;

    data = data || $.cursorDataByName( event ? event.cursorName() : null );
    data = data || $.cursorDataByName( picture ? picture.cursorName() : null );

    this.setHoverCursor( data );

  }

//=============================================================================
  setHoverCursor( data )
  { // set the hover cursor image from data provided.
//=============================================================================

    if ( !data ) return this._hoverCursor = null;

    this._hoverCursor = {
      cursorAnchor: new Point( data.cursorAnchor.x, data.cursorAnchor.y ),
      cursorBitmap: ImageManager.loadSystem( data.cursorImage ),
      clickBitmap: ImageManager.loadSystem( data.clickImage ),
      cursorFrames: data.cursorFrames,
      cursorSpeed: data.cursorSpeed,
      clickFrames: data.clickFrames,
      clickSpeed: data.clickSpeed,
    };

  }

//=============================================================================
  updateMouse()
  { // update mouse related variables.
//=============================================================================

    this.updateVisibility();

    if ( this.visible ) {

      this.updateBitmap();
      this.updateAnimation();
      this.updateAnchor();
      this.updatePosition();

    }


  }

//=============================================================================
  updateVisibility()
  { // update our visibility based on if mouse cursor is enabled.
//=============================================================================

    this.visible = Chaucer.mmCursor.enabled;

  }

//=============================================================================
  updateBitmap()
  { // update our bitmap.
//=============================================================================

      const bitmap = this.getBitmap( TouchInput.isPressed() );
      if ( bitmap && bitmap !== this.bitmap ) this.refreshBitmap();

  }

//=============================================================================
  animationSpeed()
  { // return the animation speed.
//=============================================================================

    const clicked = TouchInput.isPressed();
    const { clickBitmap, cursorSpeed, clickSpeed } = this.getCursorData();
    return ( clicked && !!clickBitmap._url ) ? clickSpeed : cursorSpeed;

  }

//=============================================================================
  animationWait()
  { // return the amount of wait between each frame for mouse animation.
//=============================================================================

    return 51 - this.animationSpeed();

  }

//=============================================================================
  updateAnimation()
  { // update our frame.
//=============================================================================

    if ( this._animationCount++ >= this.animationWait() ) {

      this._animationCount = 0;
      this.updatePattern();

    }

  }

//=============================================================================
  maxFrames( clicked )
  { // return the frames for the current cursor.
//=============================================================================

    const { clickFrames, cursorFrames, clickBitmap } = this.getCursorData();
    return ( clicked && !!clickBitmap._url ) ? clickFrames : cursorFrames;

  }

//=============================================================================
  updatePattern()
  { // update our characters pattern.
//=============================================================================

    const frames = this.maxFrames( TouchInput.isPressed() );
    this._pattern = ( this._pattern + 1 ) % frames;
    this.updateFrame();

  }

//=============================================================================
  updateFrame()
  { // update the frame of our sprite.
//=============================================================================

    if ( !this.bitmap ) return;
    const width = this.bitmap.width / this.maxFrames( TouchInput.isPressed() );
    const height = this.bitmap.height;
    const x = this._pattern * width;
    const y = 0;

    this.setFrame( x, y, width, height );

  }

//=============================================================================
  updateAnchor()
  { // update our anchor.
//=============================================================================

    let { cursorAnchor } = this.getCursorData();
    if ( cursorAnchor !== this.anchor ) this.refreshAnchor();

  }

//=============================================================================
  refreshAnchor()
  { // refresh the anchor of our cursor.
//=============================================================================

    const { cursorAnchor } = this.getCursorData();
    this.anchor = cursorAnchor;

  }

//=============================================================================
  updatePosition()
  { // update our position.
//=============================================================================

    if ( Utils.RPGMAKER_NAME === 'MV' )
      this.position.copy( Chaucer.mmCursor.cursorPosition );

    else if ( Utils.RPGMAKER_NAME == 'MZ' )
      this.position.copyFrom( Chaucer.mmCursor.cursorPosition );

  }

}

Chaucer.mmCursor._mouseCursor = new Sprite_MouseCursor();
