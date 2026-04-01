//=============================================================================
// VisuStella MZ - Event Signals
// VisuMZ_3_EventSignals.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_EventSignals = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventSignals = VisuMZ.EventSignals || {};
VisuMZ.EventSignals.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [EventSignals]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Event_Signals_VisuStella_MZ
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Event Signals is a new way for events to trigger actions, either to or from
 * one another. This will cause events to respond in certain ways based on the
 * type of signals they receive provided that they have a response set up for
 * those specific signals.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Emit signals from specific locations (ie the player's location) using a
 *   Plugin Command. 
 * * Any nearby events or events within the designated range can respond to
 *   them if they have the associated notetags.
 * * Responding events will stop whatever it is that they're doing and perform
 *   the signal page's event commands as a parallel.
 * * Optionally play an animation at the emitting tile location.
 * * Once the signal page's event commands are finished, events will resume
 *   regular behavior.
 * * This signal response setup allows for a more organic way for events to
 *   respond to various scenarios in-game.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_1_EventsMoveCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * How Do Event Signals Work?
 * ============================================================================
 *
 * This section explains how Event Signals Work.
 *
 * ---
 *
 * === Signal Emitters ===
 * 
 * Signal emitters are where it all begins. A signal is nothing more than a
 * piece of "text" that is sent to nearby events or events within the
 * designated range.
 * 
 * To emit a signal, use either a Plugin Command or a Script Call. The Plugin
 * Commands and Script Calls will determine the range and center of where the
 * signal will be emitted from.
 *
 * ---
 *
 * === Signal Responses ===
 * 
 * Only events can respond to signals. In order to respond to a signal, they
 * need to have a signal response comment tag applied to one of their pages.
 * 
 *   <Responds to Signal: text>
 * 
 * If this comment tag exists on a page, this page can NEVER be the active page
 * on its own unless an emitted signal causes it to trigger. When it does
 * trigger, the signal response page will take over as the active page, perform
 * its event command actions as a parallel from start to finish, and then the
 * event will resume its normal event behavior.
 * 
 * This means that the event will need a valid event page OTHER than the signal
 * response page. Otherwise, the event will be invisible until the signal 
 * response conditions are met, appear temporarily, and the return back to
 * being invisible.
 * 
 * Keep in mind that even if an event is the one launching the Plugin Command
 * to emit a signal, it can respond to its own signal, too. However, you can
 * bypass this by utilizing the Event variant of the plugin command and setting
 * the designated event as its own exception.
 * 
 * ---
 * 
 * === Different Signal Responses ===
 * 
 * If you want an event to be able to respond to different signals, make them
 * separate pages for the event. For example:
 * 
 *   <Responds to Signal: Bomb>
 * 
 *   <Responds to Signal: Fire>
 * 
 * These should be on different pages. Therefore, if the event receives a
 * nearby "Bomb" signal, then the "Bomb" page will become the active event page
 * until it is done. If a "Fire" signal is sent, then the "Fire" page will be
 * active and performing and not the "Bomb" page.
 *
 * ---
 *
 * === Signal Immunity ===
 * 
 * Sometimes, you don't want an event to respond to specific signals all the
 * time. This can be achieved through this comment tag:
 * 
 *   <Immune to Signal: text>
 * 
 * This immunity will only last while the current event page is the active page
 * and not a random page.
 * 
 * Also, if an event is already responding to a signal, then it cannot respond
 * to any other signals until the event signal response page is finished. From
 * there, it will only respond to signals it receives after finishing.
 *
 * ---
 * 
 * === Response Switch ===
 * 
 * If you are emitting a signal through a Plugin Command, you can set up a
 * "Response Switch ID" to turn ON/OFF a Switch if there are any events that
 * have responded to the signals.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Signal-Related Notetags ===
 * 
 * ---
 *
 * <Responds to Signal: text>
 * <Responds to Signals: text, text, text>
 *
 * - Used for: Event Comment Tags
 * - Must be used in an event's page comments and NOT its note box.
 * - Causes this specific event page to be a response to receiving 'text'
 *   signal(s) as long as its other page conditions are met.
 * - This page becomes the active page and the event commands will be ran as
 *   a parallel from start to finish.
 * - Once the events finished, the event returns to its normal behavior.
 * - Replace 'text' with the signal being emitted.
 *   - Insert multiple 'text' entries for this page to respond to multiple
 *     signals being emitted.
 *
 * ---
 *
 * <Immune to Signal: text>
 * <Immune to Signals: text, text, text>
 *
 * - Used for: Event Comment Tags
 * - Must be used in an event's page comments and NOT its note box.
 * - While this page is the active event page, it will not respond to 'text'
 *   signal even if the other signal respond conditions are met.
 * - Replace 'text' with the signal that this active event page will ignore.
 *   - Insert multiple 'text' entires for this active event page to ignore as
 *     signal emissions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Emit Signal Plugin Commands ===
 * 
 * ---
 *
 * Emit Signal: From Coordinate
 * - Emit Signal(s) from target coordinate as the central location.
 * - Must be used on the map scene!
 * 
 *   Coordinate X:
 *   - The x coordinate for the signal emmission center.
 *   - You may use JavaScript code.
 * 
 *   Coordinate Y:
 *   - The y coordinate for the signal emmission center.
 *   - You may use JavaScript code.
 * 
 *   Signal(s):
 *   - What signal do you wish to emit to the surroundings?
 * 
 *   Range Type:
 *   - What is the range type to emit the signal to?
 *     - Square: A square-shaped range with the event at the center.
 *     - Circle: A circle-shaped range with the event at the center.
 *     - Delta: A diamond-shaped range with the event at the center.
 *     - Row: Spans horizontally across the map. 'x' expands up and down.
 *     - Column: Spans vertically across the map. 'x' expands left and right.
 *     - Exact: Ignores range distance. Picks only coordinates.
 * 
 *     Range Distance:
 *     - What is the range distance to emit the signal to?
 * 
 *   Response Switch ID:
 *   - Turns ON this Switch if an event responds to the signal.
 *   - Use 0 to ignore.
 * 
 *   Animation ID:
 *   - Play this animation at target tile location.
 *   - Leave at 0 to not play an animation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *     Mirror Animation?:
 *     - Mirror the animation?
 * 
 *     Mute Animation?:
 *     - Mute the animation?
 * 
 * ---
 * 
 * Emit Signal: From Event
 * - Emit Signal(s) from target event as the central location.
 * - Must be used on the map scene!
 * 
 *   Event ID:
 *   - The ID of the target event.  Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Signal(s):
 *   - What signal do you wish to emit to the surroundings?
 * 
 *   Range Type:
 *   - What is the range type to emit the signal to?
 *     - Square: A square-shaped range with the event at the center.
 *     - Circle: A circle-shaped range with the event at the center.
 *     - Delta: A diamond-shaped range with the event at the center.
 *     - Row: Spans horizontally across the map. 'x' expands up and down.
 *     - Column: Spans vertically across the map. 'x' expands left and right.
 *     - Exact: Ignores range distance. Picks only coordinates.
 * 
 *     Range Distance:
 *     - What is the range distance to emit the signal to?
 * 
 *   Response Switch ID:
 *   - Turns ON this Switch if an event responds to the signal.
 *   - Use 0 to ignore.
 * 
 *   Animation ID:
 *   - Play this animation at target tile location.
 *   - Leave at 0 to not play an animation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *     Mirror Animation?:
 *     - Mirror the animation?
 * 
 *     Mute Animation?:
 *     - Mute the animation?
 * 
 * ---
 * 
 * Emit Signal: From Player
 * - Emit Signal(s) from player as the central location.
 * - Must be used on the map scene!
 * 
 *   Signal(s):
 *   - What signal do you wish to emit to the surroundings?
 * 
 *   Range Type:
 *   - What is the range type to emit the signal to?
 *     - Square: A square-shaped range with the event at the center.
 *     - Circle: A circle-shaped range with the event at the center.
 *     - Delta: A diamond-shaped range with the event at the center.
 *     - Row: Spans horizontally across the map. 'x' expands up and down.
 *     - Column: Spans vertically across the map. 'x' expands left and right.
 *     - Exact: Ignores range distance. Picks only coordinates.
 * 
 *     Range Distance:
 *     - What is the range distance to emit the signal to?
 * 
 *   Response Switch ID:
 *   - Turns ON this Switch if an event responds to the signal.
 *   - Use 0 to ignore.
 * 
 *   Animation ID:
 *   - Play this animation at target tile location.
 *   - Leave at 0 to not play an animation.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *     Mirror Animation?:
 *     - Mirror the animation?
 * 
 *     Mute Animation?:
 *     - Mute the animation?
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Type-Related Script Calls ===
 * 
 * ---
 *
 * $emitSignalAtSquare(signal, centerX, centerY, range, exceptions)
 * $emitSignalAtCircle(signal, centerX, centerY, range, exceptions)
 * $emitSignalAtDelta(signal, centerX, centerY, range, exceptions)
 * $emitSignalAtRow(signal, centerX, centerY, range, exceptions)
 * $emitSignalAtColumn(signal, centerX, centerY, range, exceptions)
 * 
 * - Emits a 'signal' in a certain shape of a square with the center coordinate
 *   'centerX' and 'centerY' with a 'range' distance.
 * - Replace 'signal' with a string indicating the signal.
 * - Replace 'centerX' with a number representing the X map coordinate.
 * - Replace 'centerY' with a number representing the Y map coordinate.
 * - Replace 'range' to determine the range of the area to emit the signal.
 * - OPTIONAL ARG. Replace 'exceptions' with an array including the ID's of the
 *   events to not send signals to. 0 does NOT work here for "this event"
 *   unlike the Plugin Command. Be sure to include the target ID manually.
 * 
 *   Example: 
 * 
 *   $emitSignalAtSquare('panic', 5, 8, 3)
 *   $emitSignalAtCircle('aggro', $gamePlayer.x, $gamePlayer.y, 5, [2])
 *   $emitSignalAtDelta('toggle', $gameMap.event(1).x, $gameMap.event(1).y, 1)
 *   $emitSignalAtRow('beam', 5, 4, 2, [$gameVariables.value(8)])
 *   $emitSignalAtColumn('charm', 8, 6, 4, [1, 2, 3])
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug with clashing common events that would cause a crash after
 *    leaving the main menu. Fix made by Arisu.
 * * Documentation Update!
 * ** Added in VisuMZ_0_CoreEngine requirement for animation ID's.
 * ** Sorry, we forgot to add that in.
 * 
 * Version 1.00 Official Release Date: January 24, 2024
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EmitSignalFromCoordiniate
 * @text Emit Signal: From Coordinate
 * @desc Emit Signal(s) from target coordinate as the central location.
 * Must be used on the map scene!
 *
 * @arg CoordinateX:eval
 * @text Coordinate X
 * @desc The x coordinate for the signal emmission center.
 * You may use JavaScript code.
 * @default $gamePlayer.x
 *
 * @arg CoordinateY:eval
 * @text Coordinate Y
 * @desc The y coordinate for the signal emmission center.
 * You may use JavaScript code.
 * @default $gamePlayer.y
 *
 * @arg Signals:arraystr
 * @text Signal(s)
 * @type string[]
 * @desc What signal do you wish to emit to the surroundings?
 * @default ["signal"]
 *
 * @arg Exceptions:arraynum
 * @text Event Exceptions
 * @parent Signals:arraystr
 * @type number[]
 * @desc Insert the ID's of the events you want to NOT be able
 * to receive this signal. Use 0 for this event.
 * @default []
 *
 * @arg Type:str
 * @text Range Type
 * @type select
 * @option square
 * @option circle
 * @option delta
 * @option row
 * @option column
 * @option exact
 * @desc What is the range type to emit the signal to?
 * @default circle
 *
 * @arg RangeDist:eval
 * @text Range Distance
 * @parent Type:str
 * @desc What is the range distance to emit the signal to?
 * @default 5
 *
 * @arg ResponseSwitch:num
 * @text Response Switch ID
 * @type switch
 * @desc Turns ON this Switch if an event responds to the signal.
 * Use 0 to ignore.
 * @default 0
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Play this animation at target tile location. Leave at 0 to not play an animation. Requires VisuMZ_0_CoreEngine!
 * @default 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent AnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent AnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EmitSignalFromEvent
 * @text Emit Signal: From Event
 * @desc Emit Signal(s) from target event as the central location.
 * Must be used on the map scene!
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Signals:arraystr
 * @text Signal(s)
 * @type string[]
 * @desc What signal do you wish to emit to the surroundings?
 * @default ["signal"]
 *
 * @arg Exceptions:arraynum
 * @text Event Exceptions
 * @parent Signals:arraystr
 * @type number[]
 * @desc Insert the ID's of the events you want to NOT be able
 * to receive this signal. Use 0 for this event.
 * @default []
 *
 * @arg Type:str
 * @text Range Type
 * @type select
 * @option square
 * @option circle
 * @option delta
 * @option row
 * @option column
 * @option exact
 * @desc What is the range type to emit the signal to?
 * @default circle
 *
 * @arg RangeDist:eval
 * @text Range Distance
 * @parent Type:str
 * @desc What is the range distance to emit the signal to?
 * @default 5
 *
 * @arg ResponseSwitch:num
 * @text Response Switch ID
 * @type switch
 * @desc Turns ON this Switch if an event responds to the signal.
 * Use 0 to ignore.
 * @default 0
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Play this animation at target tile location. Leave at 0 to not play an animation. Requires VisuMZ_0_CoreEngine!
 * @default 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent AnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent AnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EmitSignalFromPlayer
 * @text Emit Signal: From Player
 * @desc Emit Signal(s) from player as the central location.
 * Must be used on the map scene!
 *
 * @arg Signals:arraystr
 * @text Signal(s)
 * @type string[]
 * @desc What signal do you wish to emit to the surroundings?
 * @default ["signal"]
 *
 * @arg Exceptions:arraynum
 * @text Event Exceptions
 * @parent Signals:arraystr
 * @type number[]
 * @desc Insert the ID's of the events you want to NOT be able
 * to receive this signal. Use 0 for this event.
 * @default []
 *
 * @arg Type:str
 * @text Range Type
 * @type select
 * @option square
 * @option circle
 * @option delta
 * @option row
 * @option column
 * @option exact
 * @desc What is the range type to emit the signal to?
 * @default circle
 *
 * @arg RangeDist:eval
 * @text Range Distance
 * @parent Type:str
 * @desc What is the range distance to emit the signal to?
 * @default 5
 *
 * @arg ResponseSwitch:num
 * @text Response Switch ID
 * @type switch
 * @desc Turns ON this Switch if an event responds to the signal.
 * Use 0 to ignore.
 * @default 0
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Play this animation at target tile location. Leave at 0 to not play an animation. Requires VisuMZ_0_CoreEngine!
 * @default 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent AnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent AnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

const _0x1a197d=_0x5706;function _0x3054(){const _0x2b889e=['_erased','ImmuneToSignal','2jtuaGb','JpFJW','code','rrwuY','isSceneMap','gAZam','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','morphInto','YeGuW','screenX','hasSignalResponseCommentTag','Signals','dVixS','STRUCT','toUpperCase','Game_Event_setupSpawn','Game_Event_setupPageSettings','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','floor','5642328RDzTlm','processSignalResponse','rebAC','yMGQq','Game_Event_morphIntoEventSignals','clearPageSettings','Type','ARRAYFUNC','status','VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20','isLoopHorizontal','checkEventSignalsStringTags','Mute','nkkUA','EventSignals','registerCommand','Exceptions','ConvertLoopMapCoordinates','performSignalResponse','tDBwh','updateSignalParallel','9957798LSVpOY','getSignalTypeCoordinatesFromXy','getLastPluginCommandInterpreter','split','TgvQr','trigger','version','eventId','setup','ARRAYEVAL','column','ARRAYJSON','EmitSignalFromCoordiniate','ARRAYSTRUCT','update','Game_Event_meetsConditions','refresh','initEventSignalsEffects','760992DJEMRg','Game_Event_clearPageSettings','prototype','_signalResponses','getCircleCoordinatesFromXy','VBDzn','RjjHa','format','CoordinateY','setValue','meetsConditions','requestEventSignalAnimation','max','Mirror','adjustY','setupEventSignalsCommentTags','Game_Event_findProperPageIndex','abs','adjustX','QKvEK','push','_eventId','sqrt','event','call','RegExp','trim','isRunning','Game_Event_list','127564yDTftb','length','setupEventSignalsEffects','getSquareCoordinatesFromXy','pow','RespondsToSignal','111vwNiHh','constructor','RangeDist','EtOka','TYCSO','name','jeVhq','list','nmJXc','parameters','_signalParallelOnce','FUNC','parse','EventsMoveCore','tileWidth','ARRAYNUM','page','1161730AQpunQ','_scene','emitSignalTypeAtXy','Game_Event_updateParallel','wdUcj','3385214wNvFET','getRowCoordinatesFromXy','tileHeight','IJAZt','JXkcY','map','getEventsAtSignalCoordinates','setupSpawn','RHqPZ','NUM','exit','VisuMZ_0_CoreEngine','square','filter','MHhhe','checkSignalResponses','width','in\x20order\x20for\x20VisuMZ_3_EventSignals\x20to\x20work.','YePfH','AnimationID','ResponseSwitch','eventsXy','ARRAYSTR','includes','clearSignalResponses','aiEaV','height','ConvertParams','Game_Event_morphInto','CoordinateX','findSignalResponsePageIndex','EVAL','_immuneToSignals','TeGIY','radius','getColumnCoordinatesFromXy','delta','requestPointAnimation','pages','concat','updateParallel','VncZO','Settings','indexOf','setupCopyEvent','8713140rMqrVe','row','zhPEa','toLowerCase','morphIntoEventSignals','qOpjJ','bUNBY','screenY','isInstanceOfSceneMap','round','DDsPP','Game_Event_setupCopyEvent','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','match','8VmmYyu','IRcrp','vNtdH','isLoopVertical','_signalPageIndex','_interpreter','_signalPages','QPvIr','cXhVn','findProperPageIndex','description','circle'];_0x3054=function(){return _0x2b889e;};return _0x3054();}(function(_0x4030b3,_0x27bf49){const _0x5e2d53=_0x5706,_0xbcda3d=_0x4030b3();while(!![]){try{const _0xe6f0e9=parseInt(_0x5e2d53(0x24b))/0x1*(-parseInt(_0x5e2d53(0x211))/0x2)+-parseInt(_0x5e2d53(0x26e))/0x3*(-parseInt(_0x5e2d53(0x268))/0x4)+parseInt(_0x5e2d53(0x27f))/0x5+parseInt(_0x5e2d53(0x224))/0x6+-parseInt(_0x5e2d53(0x284))/0x7*(parseInt(_0x5e2d53(0x203))/0x8)+-parseInt(_0x5e2d53(0x239))/0x9+parseInt(_0x5e2d53(0x1f5))/0xa;if(_0xe6f0e9===_0x27bf49)break;else _0xbcda3d['push'](_0xbcda3d['shift']());}catch(_0x46bc34){_0xbcda3d['push'](_0xbcda3d['shift']());}}}(_0x3054,0xd5227));var label=_0x1a197d(0x232),tier=tier||0x0,dependencies=['VisuMZ_1_EventsMoveCore'],pluginData=$plugins[_0x1a197d(0x1d5)](function(_0x2e5e00){const _0x57b52a=_0x1a197d;return _0x2e5e00[_0x57b52a(0x22c)]&&_0x2e5e00[_0x57b52a(0x20d)][_0x57b52a(0x1df)]('['+label+']');})[0x0];VisuMZ[label][_0x1a197d(0x1f2)]=VisuMZ[label][_0x1a197d(0x1f2)]||{},VisuMZ[_0x1a197d(0x1e3)]=function(_0x3f2fbb,_0x3e6f99){const _0x78a1eb=_0x1a197d;for(const _0xa1e589 in _0x3e6f99){if(_0xa1e589[_0x78a1eb(0x202)](/(.*):(.*)/i)){const _0x57e8be=String(RegExp['$1']),_0x5059fe=String(RegExp['$2'])[_0x78a1eb(0x21f)]()['trim']();let _0x1cc9d5,_0x40bb12,_0x10cb29;switch(_0x5059fe){case _0x78a1eb(0x1d1):_0x1cc9d5=_0x3e6f99[_0xa1e589]!==''?Number(_0x3e6f99[_0xa1e589]):0x0;break;case _0x78a1eb(0x27d):_0x40bb12=_0x3e6f99[_0xa1e589]!==''?JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589]):[],_0x1cc9d5=_0x40bb12[_0x78a1eb(0x289)](_0x12db0d=>Number(_0x12db0d));break;case _0x78a1eb(0x1e7):_0x1cc9d5=_0x3e6f99[_0xa1e589]!==''?eval(_0x3e6f99[_0xa1e589]):null;break;case _0x78a1eb(0x242):_0x40bb12=_0x3e6f99[_0xa1e589]!==''?JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589]):[],_0x1cc9d5=_0x40bb12['map'](_0x3c124d=>eval(_0x3c124d));break;case'JSON':_0x1cc9d5=_0x3e6f99[_0xa1e589]!==''?JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589]):'';break;case _0x78a1eb(0x244):_0x40bb12=_0x3e6f99[_0xa1e589]!==''?JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589]):[],_0x1cc9d5=_0x40bb12[_0x78a1eb(0x289)](_0x562c2e=>JSON[_0x78a1eb(0x27a)](_0x562c2e));break;case _0x78a1eb(0x279):_0x1cc9d5=_0x3e6f99[_0xa1e589]!==''?new Function(JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589])):new Function('return\x200');break;case _0x78a1eb(0x22b):_0x40bb12=_0x3e6f99[_0xa1e589]!==''?JSON['parse'](_0x3e6f99[_0xa1e589]):[],_0x1cc9d5=_0x40bb12['map'](_0xb1127e=>new Function(JSON[_0x78a1eb(0x27a)](_0xb1127e)));break;case'STR':_0x1cc9d5=_0x3e6f99[_0xa1e589]!==''?String(_0x3e6f99[_0xa1e589]):'';break;case _0x78a1eb(0x1de):_0x40bb12=_0x3e6f99[_0xa1e589]!==''?JSON['parse'](_0x3e6f99[_0xa1e589]):[],_0x1cc9d5=_0x40bb12[_0x78a1eb(0x289)](_0x52ba2=>String(_0x52ba2));break;case _0x78a1eb(0x21e):_0x10cb29=_0x3e6f99[_0xa1e589]!==''?JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589]):{},_0x1cc9d5=VisuMZ['ConvertParams']({},_0x10cb29);break;case _0x78a1eb(0x246):_0x40bb12=_0x3e6f99[_0xa1e589]!==''?JSON[_0x78a1eb(0x27a)](_0x3e6f99[_0xa1e589]):[],_0x1cc9d5=_0x40bb12['map'](_0x257933=>VisuMZ[_0x78a1eb(0x1e3)]({},JSON['parse'](_0x257933)));break;default:continue;}_0x3f2fbb[_0x57e8be]=_0x1cc9d5;}}return _0x3f2fbb;},(_0x30c7ac=>{const _0x58f02f=_0x1a197d,_0x52f55e=_0x30c7ac[_0x58f02f(0x273)];for(const _0x33aebc of dependencies){if('JYBBd'==='lPPLM'){if(this['_signalResponses']===_0x56476b)this['checkSignalResponses']();const _0x541a68=this[_0x58f02f(0x262)]()[_0x58f02f(0x1ee)][_0x58f02f(0x1f3)](_0x487704);return this['_signalPages'][_0x58f02f(0x1df)](_0x541a68);}else{if(!Imported[_0x33aebc]){alert(_0x58f02f(0x201)[_0x58f02f(0x252)](_0x52f55e,_0x33aebc)),SceneManager[_0x58f02f(0x1d2)]();break;}}}const _0xeff80f=_0x30c7ac[_0x58f02f(0x20d)];if(_0xeff80f['match'](/\[Version[ ](.*?)\]/i)){const _0x545e8d=Number(RegExp['$1']);if(_0x545e8d!==VisuMZ[label][_0x58f02f(0x23f)]){if(_0x58f02f(0x205)!=='vNtdH'){if(this[_0x58f02f(0x1e8)]===_0x35ae2c)this['setupEventSignalsEffects']();return this[_0x58f02f(0x1e8)][_0x58f02f(0x1df)](_0x1d729f);}else alert(_0x58f02f(0x217)[_0x58f02f(0x252)](_0x52f55e,_0x545e8d)),SceneManager[_0x58f02f(0x1d2)]();}}if(_0xeff80f['match'](/\[Tier[ ](\d+)\]/i)){if(_0x58f02f(0x1f1)===_0x58f02f(0x1e9)){const _0x2020e6=_0x18c3d2['isLoopHorizontal'](),_0x44cc27=_0x10050d[_0x58f02f(0x206)](),_0x114c0a=_0x52a309[_0x58f02f(0x1d8)](),_0x40ae1d=_0x5dd013[_0x58f02f(0x1e2)]();for(const _0x1af6ed of _0x446f19){if(_0x2020e6)_0x1af6ed['x']=_0x1af6ed['x']%_0x114c0a;if(_0x44cc27)_0x1af6ed['y']=_0x1af6ed['y']%_0x40ae1d;}return _0x589146;}else{const _0x3964ee=Number(RegExp['$1']);_0x3964ee<tier?(alert(_0x58f02f(0x222)[_0x58f02f(0x252)](_0x52f55e,_0x3964ee,tier)),SceneManager[_0x58f02f(0x1d2)]()):tier=Math[_0x58f02f(0x257)](_0x3964ee,tier);}}VisuMZ[_0x58f02f(0x1e3)](VisuMZ[label][_0x58f02f(0x1f2)],_0x30c7ac[_0x58f02f(0x277)]);})(pluginData);if(VisuMZ[_0x1a197d(0x27b)][_0x1a197d(0x23f)]<1.5){let text='';text+=_0x1a197d(0x22d),text+=_0x1a197d(0x1d9),alert(text),SceneManager[_0x1a197d(0x1d2)]();}function _0x5706(_0x3a5212,_0x42c742){const _0x305415=_0x3054();return _0x5706=function(_0x5706ec,_0x530ed7){_0x5706ec=_0x5706ec-0x1d0;let _0x474cba=_0x305415[_0x5706ec];return _0x474cba;},_0x5706(_0x3a5212,_0x42c742);}PluginManager[_0x1a197d(0x233)](pluginData[_0x1a197d(0x273)],_0x1a197d(0x245),_0x5d0c12=>{const _0x2bbff4=_0x1a197d;if(!SceneManager[_0x2bbff4(0x1fd)]())return;VisuMZ['ConvertParams'](_0x5d0c12,_0x5d0c12);const _0x123cda=_0x5d0c12[_0x2bbff4(0x1e5)]||0x0,_0x4eb377=_0x5d0c12[_0x2bbff4(0x253)]||0x0,_0x20d021=_0x5d0c12[_0x2bbff4(0x21c)]||[],_0x1a99fe=_0x5d0c12[_0x2bbff4(0x22a)]||'',_0x4ba55e=_0x5d0c12[_0x2bbff4(0x270)]||0x0,_0xe00f91=_0x5d0c12[_0x2bbff4(0x1dc)]||0x0,_0x332854=_0x5d0c12[_0x2bbff4(0x1db)]||0x0,_0x5377ac=$gameTemp['getLastPluginCommandInterpreter']();let _0x3b7c60=(_0x5d0c12[_0x2bbff4(0x234)]||[])[_0x2bbff4(0x289)](_0x209699=>Number(_0x209699));if(_0x5377ac){const _0x4759df=_0x5377ac[_0x2bbff4(0x240)]()||0x0;_0x3b7c60=_0x3b7c60[_0x2bbff4(0x289)](_0x3502c9=>_0x3502c9===0x0?_0x4759df:_0x3502c9);}const _0x17e9e3=$gameMap[_0x2bbff4(0x281)](_0x20d021,_0x1a99fe,_0x123cda,_0x4eb377,_0x4ba55e,_0x3b7c60);_0xe00f91>0x0&&$gameSwitches[_0x2bbff4(0x254)](_0xe00f91,_0x17e9e3);if(_0x332854>0x0){if('wDxDV'==='gQtsW'){if(!_0x47ebd8[_0x2bbff4(0x1fd)]())return;_0x9584e0[_0x2bbff4(0x1e3)](_0xfa4898,_0x251a15);const _0x445722=_0xc7255e[_0x2bbff4(0x21c)]||[],_0x569bf3=_0x49cc85[_0x2bbff4(0x22a)]||'',_0xb23dcd=_0xe83e82['RangeDist']||0x0,_0x1b94b3=_0x207720[_0x2bbff4(0x1dc)]||0x0,_0x399563=_0x26589c[_0x2bbff4(0x1db)]||0x0,_0x515035=_0x54c757[_0x2bbff4(0x23b)]();let _0xa5a2e4=(_0x243d65['Exceptions']||[])[_0x2bbff4(0x289)](_0x4763be=>_0x1baaad(_0x4763be));if(_0x515035){const _0x3d9e64=_0x515035[_0x2bbff4(0x240)]()||0x0;_0xa5a2e4=_0xa5a2e4['map'](_0x4ccefc=>_0x4ccefc===0x0?_0x3d9e64:_0x4ccefc);}const _0x4511dd=_0x4227a4['x'],_0x140c35=_0x1051ae['y'],_0x409802=_0x327e98[_0x2bbff4(0x281)](_0x445722,_0x569bf3,_0x4511dd,_0x140c35,_0xb23dcd,_0xa5a2e4);_0x1b94b3>0x0&&_0x1d964c['setValue'](_0x1b94b3,_0x409802),_0x399563>0x0&&_0x502f54[_0x2bbff4(0x256)](_0x1c499b,_0x4511dd,_0x140c35,_0x399563,_0x107d44[_0x2bbff4(0x258)],_0x218418['Mute']);}else $gameTemp['requestEventSignalAnimation'](null,_0x123cda,_0x4eb377,_0x332854,_0x5d0c12[_0x2bbff4(0x258)],_0x5d0c12['Mute']);}}),PluginManager[_0x1a197d(0x233)](pluginData['name'],'EmitSignalFromEvent',_0x2f51cd=>{const _0x5e5270=_0x1a197d;if(!SceneManager[_0x5e5270(0x1fd)]())return;VisuMZ[_0x5e5270(0x1e3)](_0x2f51cd,_0x2f51cd);const _0x65f5fa=$gameTemp[_0x5e5270(0x23b)](),_0x2e7ff6=_0x2f51cd['EventId']||_0x65f5fa[_0x5e5270(0x240)](),_0x119228=_0x2f51cd[_0x5e5270(0x21c)]||[],_0x541f6d=_0x2f51cd[_0x5e5270(0x22a)]||'',_0x20324b=_0x2f51cd[_0x5e5270(0x270)]||0x0,_0x4b15a4=_0x2f51cd[_0x5e5270(0x1dc)]||0x0,_0x5739ad=_0x2f51cd[_0x5e5270(0x1db)]||0x0;let _0xce2ab1=(_0x2f51cd[_0x5e5270(0x234)]||[])[_0x5e5270(0x289)](_0x384be2=>Number(_0x384be2));if(_0x65f5fa){const _0x1e5a34=_0x65f5fa[_0x5e5270(0x240)]()||0x0;_0xce2ab1=_0xce2ab1['map'](_0x3a0d08=>_0x3a0d08===0x0?_0x1e5a34:_0x3a0d08);}const _0x442d4c=$gameMap[_0x5e5270(0x262)](_0x2e7ff6),_0x4a5307=_0x442d4c['x'],_0x396209=_0x442d4c['y'],_0x20dfab=$gameMap[_0x5e5270(0x281)](_0x119228,_0x541f6d,_0x4a5307,_0x396209,_0x20324b,_0xce2ab1);if(_0x4b15a4>0x0){if(_0x5e5270(0x1fa)===_0x5e5270(0x1fa))$gameSwitches[_0x5e5270(0x254)](_0x4b15a4,_0x20dfab);else{let _0x1ba326=[];for(let _0x37cbe7=-_0x1d4055;_0x37cbe7<=_0x1be2a7;_0x37cbe7++){for(let _0x29829f=-_0x34b825;_0x29829f<=_0x8e291b;_0x29829f++){_0x1ba326[_0x5e5270(0x25f)]({'x':_0x4e0572+_0x37cbe7,'y':_0x5e253b+_0x29829f});}}return _0x1ba326;}}_0x5739ad>0x0&&$gameTemp[_0x5e5270(0x256)](_0x442d4c,_0x4a5307,_0x396209,_0x5739ad,_0x2f51cd[_0x5e5270(0x258)],_0x2f51cd[_0x5e5270(0x230)]);}),PluginManager[_0x1a197d(0x233)](pluginData['name'],'EmitSignalFromPlayer',_0x96961f=>{const _0x12ef70=_0x1a197d;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ['ConvertParams'](_0x96961f,_0x96961f);const _0x12fc9c=_0x96961f[_0x12ef70(0x21c)]||[],_0x4e8433=_0x96961f[_0x12ef70(0x22a)]||'',_0x5e143d=_0x96961f[_0x12ef70(0x270)]||0x0,_0x32513e=_0x96961f[_0x12ef70(0x1dc)]||0x0,_0x3ee9a0=_0x96961f[_0x12ef70(0x1db)]||0x0,_0x208608=$gameTemp[_0x12ef70(0x23b)]();let _0x718aad=(_0x96961f[_0x12ef70(0x234)]||[])['map'](_0x51067b=>Number(_0x51067b));if(_0x208608){const _0x2af71e=_0x208608[_0x12ef70(0x240)]()||0x0;_0x718aad=_0x718aad[_0x12ef70(0x289)](_0x2dd560=>_0x2dd560===0x0?_0x2af71e:_0x2dd560);}const _0x436a9c=$gamePlayer['x'],_0x10545b=$gamePlayer['y'],_0xa53a6e=$gameMap[_0x12ef70(0x281)](_0x12fc9c,_0x4e8433,_0x436a9c,_0x10545b,_0x5e143d,_0x718aad);_0x32513e>0x0&&$gameSwitches[_0x12ef70(0x254)](_0x32513e,_0xa53a6e);if(_0x3ee9a0>0x0){if(_0x12ef70(0x216)===_0x12ef70(0x216))$gameTemp[_0x12ef70(0x256)]($gamePlayer,_0x436a9c,_0x10545b,_0x3ee9a0,_0x96961f[_0x12ef70(0x258)],_0x96961f[_0x12ef70(0x230)]);else{const _0x324463=_0x58ad59[_0x12ef70(0x286)]();_0x2ae5a9=_0x3ad50e['floor'](_0xd17a3b[_0x12ef70(0x259)](_0xf68042)*_0x324463+_0x324463);}}}),VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x264)]={'ImmuneToSignal':/<IMMUNE TO SIGNAL(?:|S):[ ](.*?)>/i,'RespondsToSignal':/<RESPONDS TO SIGNAL(?:|S):[ ](.*?)>/i},SceneManager[_0x1a197d(0x215)]=function(){const _0x29f657=_0x1a197d;return this[_0x29f657(0x280)]&&this[_0x29f657(0x280)][_0x29f657(0x26f)]===Scene_Map;},SceneManager[_0x1a197d(0x1fd)]=function(){const _0x4b6142=_0x1a197d;return this[_0x4b6142(0x280)]&&this[_0x4b6142(0x280)]instanceof Scene_Map;},Game_Temp[_0x1a197d(0x24d)][_0x1a197d(0x256)]=function(_0x1100a5,_0x3d6ba6,_0x497bf5,_0x608a83,_0x4f6412,_0x1e17da){const _0x37cfe8=_0x1a197d;if(!Imported[_0x37cfe8(0x1d3)])return;let _0x31d787=0x0;if(_0x1100a5)_0x37cfe8(0x231)===_0x37cfe8(0x25e)?this[_0x37cfe8(0x1e8)]['push'](_0x149b1f['toLowerCase']()[_0x37cfe8(0x265)]()):_0x31d787=_0x1100a5[_0x37cfe8(0x21a)]();else{if(_0x37cfe8(0x23d)!==_0x37cfe8(0x271)){const _0x44e9f8=$gameMap[_0x37cfe8(0x27c)]();_0x31d787=Math[_0x37cfe8(0x223)]($gameMap[_0x37cfe8(0x25d)](_0x3d6ba6)*_0x44e9f8+_0x44e9f8/0x2);}else _0x38ed67[_0x37cfe8(0x25f)]({'x':_0x1ba70b,'y':_0x585cb0+_0x44de8d});}let _0x5f2e74=0x0;if(_0x1100a5)_0x37cfe8(0x226)===_0x37cfe8(0x20b)?(this['clearSignalResponses'](),_0x1a8c1f[_0x37cfe8(0x232)][_0x37cfe8(0x220)][_0x37cfe8(0x263)](this,_0x52f2d1)):_0x5f2e74=_0x1100a5[_0x37cfe8(0x1fc)]();else{if(_0x37cfe8(0x274)===_0x37cfe8(0x1d0))_0x5cb971['requestEventSignalAnimation'](null,_0x3c8ade,_0x226548,_0x17421d,_0x3f1591[_0x37cfe8(0x258)],_0x1a6f65[_0x37cfe8(0x230)]);else{const _0x2206ca=$gameMap['tileHeight']();_0x5f2e74=Math[_0x37cfe8(0x223)]($gameMap[_0x37cfe8(0x259)](_0x497bf5)*_0x2206ca+_0x2206ca);}}_0x5f2e74-=Math[_0x37cfe8(0x1fe)]($gameMap[_0x37cfe8(0x286)]()/0x2),this[_0x37cfe8(0x1ed)](_0x31d787,_0x5f2e74,_0x608a83,_0x4f6412,_0x1e17da);},Game_Map['prototype'][_0x1a197d(0x281)]=function(_0x12fc24,_0x21dabc,_0x3316a7,_0x462441,_0x528a01,_0x2c5787){const _0x7a7c5f=_0x1a197d;_0x2c5787=_0x2c5787||[];const _0x55de07=this[_0x7a7c5f(0x23a)](_0x21dabc,_0x3316a7,_0x462441,_0x528a01),_0x6ccdb=this[_0x7a7c5f(0x28a)](_0x55de07);let _0x3dec3a=![];for(const _0x4e4b92 of _0x6ccdb){if(_0x7a7c5f(0x272)===_0x7a7c5f(0x21d)){const _0x4e52c4=_0x358350(_0xe7b62a['$1'])['split'](',')[_0x7a7c5f(0x289)](_0x19c5b1=>_0x19c5b1['toLowerCase']()[_0x7a7c5f(0x265)]());for(const _0x58ea0b of _0x4e52c4){this[_0x7a7c5f(0x1e8)][_0x7a7c5f(0x25f)](_0x58ea0b[_0x7a7c5f(0x1f8)]()[_0x7a7c5f(0x265)]());}}else{if(_0x2c5787['includes'](_0x4e4b92['eventId']())){if(_0x7a7c5f(0x227)==='YhRLz')for(let _0x127e28=-_0x1817d7;_0x127e28<=_0x20fd4f;_0x127e28++){_0x4ceaa0['push']({'x':_0x51fe17+_0x201176,'y':_0xbfc41c+_0x127e28});}else continue;}_0x4e4b92[_0x7a7c5f(0x236)](_0x12fc24)&&('wdUcj'!==_0x7a7c5f(0x283)?(this[_0x7a7c5f(0x207)]=_0xa5a7f5,this['refresh']()):_0x3dec3a=!![]);}}return _0x3dec3a;},Game_Map[_0x1a197d(0x24d)][_0x1a197d(0x23a)]=function(_0x359492,_0x4c6474,_0x5f9094,_0x339ebb){const _0x66fc52=_0x1a197d;let _0x374c43=[];switch(_0x359492){case _0x66fc52(0x1d4):_0x374c43=_0x374c43['concat'](this[_0x66fc52(0x26b)](_0x4c6474,_0x5f9094,_0x339ebb));break;case _0x66fc52(0x20e):_0x374c43=_0x374c43[_0x66fc52(0x1ef)](this[_0x66fc52(0x24f)](_0x4c6474,_0x5f9094,_0x339ebb));break;case _0x66fc52(0x1ea):case _0x66fc52(0x1ec):_0x374c43=_0x374c43[_0x66fc52(0x1ef)](this['getDeltaCoordinatesFromXy'](_0x4c6474,_0x5f9094,_0x339ebb));break;case'row':_0x374c43=_0x374c43['concat'](this[_0x66fc52(0x285)](_0x4c6474,_0x5f9094,_0x339ebb));break;case _0x66fc52(0x243):_0x374c43=_0x374c43['concat'](this[_0x66fc52(0x1eb)](_0x4c6474,_0x5f9094,_0x339ebb));break;default:_0x374c43['push']({'x':_0x4c6474,'y':_0x5f9094});break;}return _0x374c43=VisuMZ['EventSignals'][_0x66fc52(0x235)](_0x374c43),_0x374c43;},Game_Map['prototype'][_0x1a197d(0x26b)]=function(_0x21644a,_0x33f008,_0x3c50a3){const _0x1c234f=_0x1a197d;let _0x353e75=[];for(let _0x3a51=-_0x3c50a3;_0x3a51<=_0x3c50a3;_0x3a51++){for(let _0x190d57=-_0x3c50a3;_0x190d57<=_0x3c50a3;_0x190d57++){_0x1c234f(0x251)!==_0x1c234f(0x250)?_0x353e75[_0x1c234f(0x25f)]({'x':_0x21644a+_0x3a51,'y':_0x33f008+_0x190d57}):_0x32919a=_0x4d413f[_0x1c234f(0x1ef)](this[_0x1c234f(0x1dd)](_0x2a3e7a['x'],_0x34e97e['y']));}}return _0x353e75;},Game_Map[_0x1a197d(0x24d)][_0x1a197d(0x24f)]=function(_0x20ab1c,_0x1b6a0d,_0x5ebc13){const _0x386b26=_0x1a197d;let _0x68d4af=[];for(let _0x37b69c=-_0x5ebc13;_0x37b69c<=_0x5ebc13;_0x37b69c++){for(let _0x1c370c=-_0x5ebc13;_0x1c370c<=_0x5ebc13;_0x1c370c++){const _0x229ce7=Math[_0x386b26(0x26c)](_0x20ab1c-(_0x20ab1c+_0x37b69c),0x2),_0x5f3ab3=Math[_0x386b26(0x26c)](_0x1b6a0d-(_0x1b6a0d+_0x1c370c),0x2),_0x50e344=Math[_0x386b26(0x1fe)](Math[_0x386b26(0x261)](_0x229ce7+_0x5f3ab3));if(_0x50e344>_0x5ebc13)continue;_0x68d4af[_0x386b26(0x25f)]({'x':_0x20ab1c+_0x37b69c,'y':_0x1b6a0d+_0x1c370c});}}return _0x68d4af;},Game_Map['prototype']['getDeltaCoordinatesFromXy']=function(_0x110a16,_0x1fd699,_0x1e021c){const _0x1924bb=_0x1a197d;let _0x1d3360=[];for(let _0x702de8=-_0x1e021c;_0x702de8<=_0x1e021c;_0x702de8++){if(_0x1924bb(0x1e1)===_0x1924bb(0x1f7))_0x1d952a=_0x2488e2['max'](_0x5f57d5,_0x435614);else for(let _0x5b4251=-_0x1e021c;_0x5b4251<=_0x1e021c;_0x5b4251++){if(_0x1924bb(0x1ff)===_0x1924bb(0x1ff)){if(Math[_0x1924bb(0x25c)](_0x702de8)+Math[_0x1924bb(0x25c)](_0x5b4251)>_0x1e021c)continue;_0x1d3360[_0x1924bb(0x25f)]({'x':_0x110a16+_0x702de8,'y':_0x1fd699+_0x5b4251});}else{const _0x3c0a85=_0x32b3c9[_0x1924bb(0x240)]()||0x0;_0x57201c=_0x183925[_0x1924bb(0x289)](_0x15f214=>_0x15f214===0x0?_0x3c0a85:_0x15f214);}}}return _0x1d3360;},Game_Map['prototype']['getRowCoordinatesFromXy']=function(_0x397fe4,_0x11e879,_0x5457a9){const _0x52f60c=_0x1a197d;let _0x53379d=[];const _0x4663fa=$gameMap['width']();for(let _0x474615=0x0;_0x474615<_0x4663fa;_0x474615++){if('AinfN'!=='GOLmZ')for(let _0x24e204=-_0x5457a9;_0x24e204<=_0x5457a9;_0x24e204++){_0x52f60c(0x219)==='WRNHu'?_0x1e6d6f[_0x52f60c(0x25f)]({'x':_0x51d154+_0x1daa5e,'y':_0x8b0d75}):_0x53379d[_0x52f60c(0x25f)]({'x':_0x474615,'y':_0x11e879+_0x24e204});}else{const _0x5170ad=[_0x35dee4||''],_0x17b3ce=_0x52f60c(0x20e);return _0xab3421=_0x11615a||0x0,_0x14a9ef=_0x50f805||0x0,_0x156fcb=_0x1b93bb||0x0,_0x59a2b5=_0x27e2e6||[],_0x1b8666[_0x52f60c(0x281)](_0x5170ad,_0x17b3ce,_0x361a7f,_0x2c3b16,_0x58d1bb,_0x2527f6);}}return _0x53379d;},Game_Map[_0x1a197d(0x24d)][_0x1a197d(0x1eb)]=function(_0x5c996e,_0xaef9bb,_0x208c4f){const _0x8345f4=_0x1a197d;let _0x6df409=[];const _0x4112bb=$gameMap['height']();for(let _0x23736e=-_0x208c4f;_0x23736e<=_0x208c4f;_0x23736e++){for(let _0x1c5a51=0x0;_0x1c5a51<_0x4112bb;_0x1c5a51++){_0x6df409[_0x8345f4(0x25f)]({'x':_0x5c996e+_0x23736e,'y':_0x1c5a51});}}return _0x6df409;},VisuMZ[_0x1a197d(0x232)]['ConvertLoopMapCoordinates']=function(_0x19b6d0){const _0x4b56f9=_0x1a197d,_0x375f96=$gameMap[_0x4b56f9(0x22e)](),_0x3194ff=$gameMap['isLoopVertical'](),_0x5843df=$gameMap['width'](),_0x505d85=$gameMap[_0x4b56f9(0x1e2)]();for(const _0x552d71 of _0x19b6d0){if('yfgTu'==='RpmXp'){const _0xa9b869=this[_0x4b56f9(0x24e)][_0x424fcd],_0x4bdfc1=this[_0x4b56f9(0x262)]()['pages'][_0xa9b869];if(_0x4bdfc1&&_0xecc035['EventSignals'][_0x4b56f9(0x248)][_0x4b56f9(0x263)](this,_0x4bdfc1))return _0xa9b869;}else{if(_0x375f96)_0x552d71['x']=_0x552d71['x']%_0x5843df;if(_0x3194ff)_0x552d71['y']=_0x552d71['y']%_0x505d85;}}return _0x19b6d0;},Game_Map[_0x1a197d(0x24d)]['getEventsAtSignalCoordinates']=function(_0x46eb14){const _0x3615f4=_0x1a197d;let _0x130ae3=[];for(const _0x5cde49 of _0x46eb14){_0x130ae3=_0x130ae3[_0x3615f4(0x1ef)](this[_0x3615f4(0x1dd)](_0x5cde49['x'],_0x5cde49['y']));}return _0x130ae3=_0x130ae3['filter']((_0x4d1052,_0x4b938d,_0x8903fd)=>_0x8903fd['indexOf'](_0x4d1052)===_0x4b938d),_0x130ae3=_0x130ae3[_0x3615f4(0x1d5)](_0x1d14e1=>!_0x1d14e1[_0x3615f4(0x20f)]),_0x130ae3;},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x24c)]=Game_Event['prototype'][_0x1a197d(0x229)],Game_Event[_0x1a197d(0x24d)]['clearPageSettings']=function(){const _0xf1ba4=_0x1a197d;VisuMZ[_0xf1ba4(0x232)][_0xf1ba4(0x24c)][_0xf1ba4(0x263)](this),this[_0xf1ba4(0x24a)]();},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x221)]=Game_Event[_0x1a197d(0x24d)]['setupPageSettings'],Game_Event[_0x1a197d(0x24d)]['setupPageSettings']=function(){const _0x4b0185=_0x1a197d;VisuMZ[_0x4b0185(0x232)][_0x4b0185(0x221)][_0x4b0185(0x263)](this),this['setupEventSignalsEffects']();},Game_Event[_0x1a197d(0x24d)]['setupEventSignalsEffects']=function(){const _0x1c2d9f=_0x1a197d;if(!this[_0x1c2d9f(0x262)]())return;this[_0x1c2d9f(0x24a)](),this[_0x1c2d9f(0x25a)]();},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x25a)]=function(){const _0x51b48c=_0x1a197d;if(!this['page']())return;const _0x4252e8=this[_0x51b48c(0x275)]();let _0x4ee7d4='';for(const _0x476b7b of _0x4252e8){if(_0x51b48c(0x212)===_0x51b48c(0x212)){if([0x6c,0x198][_0x51b48c(0x1df)](_0x476b7b['code'])){if(_0x51b48c(0x1d6)!==_0x51b48c(0x1d6))_0x1f0597[_0x51b48c(0x25f)]({'x':_0x1c094c+_0x5d2ef6,'y':_0x1a4ab3+_0xbb0a50});else{if(_0x4ee7d4!=='')_0x4ee7d4+='\x0a';_0x4ee7d4+=_0x476b7b['parameters'][0x0];}}}else _0x4e5b79[_0x51b48c(0x254)](_0x36fafc,_0x2b0e5a);}this['checkEventSignalsStringTags'](_0x4ee7d4);},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x24a)]=function(){this['_immuneToSignals']=[];},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x22f)]=function(_0x570770){const _0x2e6606=_0x1a197d,_0x474a74=VisuMZ[_0x2e6606(0x232)][_0x2e6606(0x264)];if(_0x570770[_0x2e6606(0x202)](_0x474a74[_0x2e6606(0x210)])){const _0x1bd3da=String(RegExp['$1'])[_0x2e6606(0x23c)](',')[_0x2e6606(0x289)](_0x538747=>_0x538747['toLowerCase']()[_0x2e6606(0x265)]());for(const _0x4dc527 of _0x1bd3da){if(_0x2e6606(0x237)!=='tDBwh'){const _0x1afcfd=[_0x34782a||''],_0x2c0a0f=_0x2e6606(0x1f6);return _0x35d822=_0xe3275c||0x0,_0x5a4398=_0x5d3469||0x0,_0x489eed=_0x31e6d8||0x0,_0x596ce6=_0x18b00a||[],_0x374543[_0x2e6606(0x281)](_0x1afcfd,_0x2c0a0f,_0x92f88c,_0x27036b,_0x35bc53,_0x41b2ba);}else this['_immuneToSignals'][_0x2e6606(0x25f)](_0x4dc527[_0x2e6606(0x1f8)]()[_0x2e6606(0x265)]());}}},Game_Event['prototype']['clearSignalResponses']=function(){const _0x503bc2=_0x1a197d;this['_signalResponses']=undefined,this['_signalPages']=undefined,this['_signalParallelOnce']=undefined,this[_0x503bc2(0x207)]=undefined;},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x1d7)]=function(){const _0x217991=_0x1a197d;this['_signalResponses']={},this[_0x217991(0x209)]=[];const _0x346c6f=this[_0x217991(0x262)]()[_0x217991(0x1ee)],_0x11283a=_0x346c6f[_0x217991(0x269)],_0x4e2043=VisuMZ[_0x217991(0x232)][_0x217991(0x264)];for(let _0x5cbd1e=0x0;_0x5cbd1e<_0x11283a;_0x5cbd1e++){if(_0x217991(0x287)!=='IJAZt'){if(!this[_0x217991(0x262)]())return;this[_0x217991(0x24a)](),this[_0x217991(0x25a)]();}else{const _0x335a5f=_0x346c6f[_0x5cbd1e];if(!_0x335a5f)continue;const _0x4c9f6a=_0x335a5f[_0x217991(0x275)];for(const _0x371131 of _0x4c9f6a){if(![0x6c,0x198][_0x217991(0x1df)](_0x371131[_0x217991(0x213)]))continue;const _0x48b9d8=_0x371131[_0x217991(0x277)][0x0]||'';if(!_0x48b9d8[_0x217991(0x202)](_0x4e2043[_0x217991(0x26d)]))continue;if(!this[_0x217991(0x209)][_0x217991(0x1df)](_0x5cbd1e))this[_0x217991(0x209)][_0x217991(0x25f)](_0x5cbd1e);_0x335a5f[_0x217991(0x23e)]=0x4;const _0x3bf495=String(RegExp['$1'])[_0x217991(0x23c)](',')[_0x217991(0x289)](_0x2fccb7=>_0x2fccb7['toLowerCase']()[_0x217991(0x265)]());for(const _0xd7a51f of _0x3bf495){if(_0x217991(0x288)==='JXkcY'){if(this[_0x217991(0x24e)][_0xd7a51f]!==undefined)continue;this['_signalResponses'][_0xd7a51f]=_0x5cbd1e;}else _0x49cdf2(_0x217991(0x222)[_0x217991(0x252)](_0x4d336b,_0x4627b0,_0x58aef1)),_0x2cd913[_0x217991(0x1d2)]();}}}}},Game_Event['prototype']['isSignalImmune']=function(_0x562213){const _0x3a255d=_0x1a197d;if(this['_immuneToSignals']===undefined)this[_0x3a255d(0x26a)]();return this[_0x3a255d(0x1e8)][_0x3a255d(0x1df)](_0x562213);},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x248)]=Game_Event[_0x1a197d(0x24d)]['meetsConditions'],Game_Event['prototype'][_0x1a197d(0x255)]=function(_0x5555fa){const _0x5886a9=_0x1a197d;if(!_0x5555fa)return![];if(this[_0x5886a9(0x21b)](_0x5555fa))return![];return VisuMZ[_0x5886a9(0x232)][_0x5886a9(0x248)][_0x5886a9(0x263)](this,_0x5555fa);},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x21b)]=function(_0x29301d){const _0x300467=_0x1a197d;if(this[_0x300467(0x24e)]===undefined)this[_0x300467(0x1d7)]();const _0x493f3e=this[_0x300467(0x262)]()[_0x300467(0x1ee)][_0x300467(0x1f3)](_0x29301d);return this[_0x300467(0x209)][_0x300467(0x1df)](_0x493f3e);},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x236)]=function(_0x226b5b){const _0x10d61e=_0x1a197d;if(this[_0x10d61e(0x207)]!==undefined)return![];if(this[_0x10d61e(0x24e)]===undefined)this['checkSignalResponses']();const _0x222bfa=this[_0x10d61e(0x1e6)](_0x226b5b);if(_0x222bfa<0x0)return![];return this[_0x10d61e(0x225)](_0x222bfa),!![];},Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x1e6)]=function(_0x5a2a19){const _0x476ba9=_0x1a197d;for(const _0x213cf6 of _0x5a2a19){if(_0x476ba9(0x214)==='rrwuY'){const _0x326f1b=_0x213cf6['toLowerCase']()['trim']();if(this['isSignalImmune'](_0x326f1b))continue;if(this[_0x476ba9(0x24e)][_0x326f1b]!==undefined){const _0x41195c=this['_signalResponses'][_0x326f1b],_0x45ca54=this[_0x476ba9(0x262)]()[_0x476ba9(0x1ee)][_0x41195c];if(_0x45ca54&&VisuMZ[_0x476ba9(0x232)]['Game_Event_meetsConditions']['call'](this,_0x45ca54))return'bUNBY'===_0x476ba9(0x1fb)?_0x41195c:this[_0x476ba9(0x280)]&&this[_0x476ba9(0x280)][_0x476ba9(0x26f)]===_0x48b4af;}}else{if(this[_0x476ba9(0x278)]){this[_0x476ba9(0x278)]=_0x103d6a,this[_0x476ba9(0x207)]=_0x23149d,this['refresh']();return;}else this[_0x476ba9(0x278)]=!![],this[_0x476ba9(0x208)]['setup'](this[_0x476ba9(0x275)](),this['_eventId']);}}return-0x1;},Game_Event[_0x1a197d(0x24d)]['processSignalResponse']=function(_0x249ef0){const _0x4d8138=_0x1a197d;this[_0x4d8138(0x207)]=_0x249ef0,this[_0x4d8138(0x249)]();},VisuMZ[_0x1a197d(0x232)]['Game_Event_findProperPageIndex']=Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x20c)],Game_Event['prototype'][_0x1a197d(0x20c)]=function(){const _0x1096ef=_0x1a197d;if(this['_signalPageIndex']!==undefined)return this[_0x1096ef(0x207)];return VisuMZ[_0x1096ef(0x232)][_0x1096ef(0x25b)][_0x1096ef(0x263)](this);},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x282)]=Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x1f0)],Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x1f0)]=function(){const _0x4c282d=_0x1a197d;if(this[_0x4c282d(0x207)]!==undefined){if(_0x4c282d(0x204)!==_0x4c282d(0x20a))this[_0x4c282d(0x238)]();else{const _0xef93a4=[_0x1b10b1||''];_0x1d21a8=_0x8ac4f5||0x0,_0x48715b=_0xf720b7||0x0;const _0x1c74e0=_0x4c282d(0x1d4);return _0x155710=_0x1a35db||0x0,_0x1abd01=_0x2b5deb||[],_0x182541['emitSignalTypeAtXy'](_0xef93a4,_0x1c74e0,_0x36cff1,_0x3ef71a,_0x5bf466,_0x150b19);}}else VisuMZ[_0x4c282d(0x232)][_0x4c282d(0x282)][_0x4c282d(0x263)](this);},Game_Event[_0x1a197d(0x24d)]['updateSignalParallel']=function(){const _0x525d65=_0x1a197d;if(!this[_0x525d65(0x208)]){if('nmJXc'!==_0x525d65(0x276))return _0x48d7f9;else{this['_interpreter']=new Game_Interpreter();return;}}if(!this[_0x525d65(0x208)][_0x525d65(0x266)]()){if(this[_0x525d65(0x278)]){this[_0x525d65(0x278)]=undefined,this[_0x525d65(0x207)]=undefined,this[_0x525d65(0x249)]();return;}else{if(_0x525d65(0x1da)==='YePfH')this['_signalParallelOnce']=!![],this[_0x525d65(0x208)][_0x525d65(0x241)](this[_0x525d65(0x275)](),this[_0x525d65(0x260)]);else{const _0x50b8d2=_0x1bd2ee[_0x525d65(0x232)]['RegExp'];if(_0x46521e[_0x525d65(0x202)](_0x50b8d2[_0x525d65(0x210)])){const _0x3df56c=_0x1894dc(_0x457387['$1'])[_0x525d65(0x23c)](',')['map'](_0x3dd83c=>_0x3dd83c[_0x525d65(0x1f8)]()[_0x525d65(0x265)]());for(const _0x26ca8f of _0x3df56c){this[_0x525d65(0x1e8)][_0x525d65(0x25f)](_0x26ca8f[_0x525d65(0x1f8)]()[_0x525d65(0x265)]());}}}}}this[_0x525d65(0x208)][_0x525d65(0x247)]();},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x267)]=Game_Event[_0x1a197d(0x24d)]['list'],Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x275)]=function(){const _0x1a5e14=_0x1a197d;if(!this[_0x1a5e14(0x27e)]())return[];return VisuMZ[_0x1a5e14(0x232)]['Game_Event_list']['call'](this);},VisuMZ['EventSignals'][_0x1a197d(0x200)]=Game_Event[_0x1a197d(0x24d)]['setupCopyEvent'],Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x1f4)]=function(){const _0x246272=_0x1a197d;this[_0x246272(0x1e0)](),VisuMZ[_0x246272(0x232)][_0x246272(0x200)]['call'](this);},VisuMZ['EventSignals'][_0x1a197d(0x1e4)]=Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x218)],Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x218)]=function(_0x3aaeb5,_0x2cacf4,_0x12d862){const _0xdcfb29=_0x1a197d;this[_0xdcfb29(0x1e0)](),VisuMZ[_0xdcfb29(0x232)][_0xdcfb29(0x1e4)][_0xdcfb29(0x263)](this,_0x3aaeb5,_0x2cacf4,_0x12d862);},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x228)]=Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x1f9)],Game_Event['prototype']['morphIntoEventSignals']=function(_0x1c4635,_0x3c6b3a){const _0x464a89=_0x1a197d;this[_0x464a89(0x1e0)](),VisuMZ['EventSignals']['Game_Event_morphIntoEventSignals']['call'](this,_0x1c4635,_0x3c6b3a);},VisuMZ[_0x1a197d(0x232)][_0x1a197d(0x220)]=Game_Event['prototype'][_0x1a197d(0x28b)],Game_Event[_0x1a197d(0x24d)][_0x1a197d(0x28b)]=function(_0x92337b){const _0x57bb2c=_0x1a197d;this[_0x57bb2c(0x1e0)](),VisuMZ[_0x57bb2c(0x232)]['Game_Event_setupSpawn'][_0x57bb2c(0x263)](this,_0x92337b);};var $emitSignalAtSquare=function(_0x2ad7ba,_0x3036e4,_0x344d2a,_0x41bbbf,_0xb4dca9){const _0x589e25=_0x1a197d,_0x50f929=[_0x2ad7ba||''];_0x3036e4=_0x3036e4||0x0,_0x344d2a=_0x344d2a||0x0;const _0x2555bf=_0x589e25(0x1d4);return _0x41bbbf=_0x41bbbf||0x0,_0xb4dca9=_0xb4dca9||[],$gameMap[_0x589e25(0x281)](_0x50f929,_0x2555bf,_0x3036e4,_0x344d2a,_0x41bbbf,_0xb4dca9);},$emitSignalAtCircle=function(_0x560a17,_0x414a1f,_0x2d661c,_0x144f1f,_0x551709){const _0x7df510=_0x1a197d,_0x15516d=[_0x560a17||''],_0xd6cef7=_0x7df510(0x20e);return _0x414a1f=_0x414a1f||0x0,_0x2d661c=_0x2d661c||0x0,_0x144f1f=_0x144f1f||0x0,_0x551709=_0x551709||[],$gameMap[_0x7df510(0x281)](_0x15516d,_0xd6cef7,_0x414a1f,_0x2d661c,_0x144f1f,_0x551709);},$emitSignalAtDelta=function(_0x3ba47c,_0x45845a,_0x3c00ba,_0x4b4004,_0x4371e2){const _0x5a1cdf=_0x1a197d,_0x55a4cf=[_0x3ba47c||''],_0x4a7ce5=_0x5a1cdf(0x1ec);return _0x45845a=_0x45845a||0x0,_0x3c00ba=_0x3c00ba||0x0,_0x4b4004=_0x4b4004||0x0,_0x4371e2=_0x4371e2||[],$gameMap[_0x5a1cdf(0x281)](_0x55a4cf,_0x4a7ce5,_0x45845a,_0x3c00ba,_0x4b4004,_0x4371e2);},$emitSignalAtRow=function(_0x322a1f,_0x443e96,_0x4e242b,_0x3564ba,_0x385849){const _0x47cdf3=_0x1a197d,_0x438d75=[_0x322a1f||''],_0x35468a=_0x47cdf3(0x1f6);return _0x443e96=_0x443e96||0x0,_0x4e242b=_0x4e242b||0x0,_0x3564ba=_0x3564ba||0x0,_0x385849=_0x385849||[],$gameMap[_0x47cdf3(0x281)](_0x438d75,_0x35468a,_0x443e96,_0x4e242b,_0x3564ba,_0x385849);},$emitSignalAtColumn=function(_0x1e103b,_0x2e31fc,_0x2b087e,_0x3f031e,_0x6d9358){const _0x4cc525=_0x1a197d,_0x48641d=[_0x1e103b||''],_0x478023=_0x4cc525(0x243);return _0x2e31fc=_0x2e31fc||0x0,_0x2b087e=_0x2b087e||0x0,_0x3f031e=_0x3f031e||0x0,_0x6d9358=_0x6d9358||[],$gameMap['emitSignalTypeAtXy'](_0x48641d,_0x478023,_0x2e31fc,_0x2b087e,_0x3f031e,_0x6d9358);};