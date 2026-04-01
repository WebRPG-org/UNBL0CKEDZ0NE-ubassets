//=============================================================================
// VisuStella MZ - QTE & Trigger System
// VisuMZ_2_QTE_TriggerSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_QTE_TriggerSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.QTE_TriggerSys = VisuMZ.QTE_TriggerSys || {};
VisuMZ.QTE_TriggerSys.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.03] [QTE_TriggerSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/QTE_and_Trigger_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes, we need a way to trigger Switch or Variable changes. This can be
 * in an organic fashion or through Quick Time Events (QTE's). QTE's allow for
 * immediate changes to Switches or Variables through player inputs. Or if you
 * have ever wanted a Common Event to run when a specific Switch or Variable
 * changes its current value to something else, you can use this plugin's
 * trigger system for Switches, Variables, Items, Weapons, and Armors to call
 * and trigger Common Events whenever their values change. These don't have to
 * be recurring as they can also function as one-time "promises", too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Quick Time Events (QTE) can be played to adjust values of variables and/or
 *   switches based off different types of QTE's like Button Mashing, Direction
 *   Struggle, Timed Hits, and more.
 * * 10+ different QTE Plugin Commands for you to pick and choose from to give
 *   players more engaging gameplay.
 * * Trigger Common Events by simply changing certain Switches to ON/OFF
 *   positions or Variables to different values.
 * * Items, weapons, and armors can also register Common Events to trigger when
 *   the party gains or loses a copy of that item, weapon, or armor.
 * * If these triggers occur on a scene that isn't battle or the map, then the
 *   Common Events are queued up for until the player moves to the battle or
 *   map scenes to trigger them.
 * * If the triggering Common Event only has script calls, then the effect will
 *   run right then and there.
 * * Create Promises, one-time Common Event triggers upon a switch, variable,
 *   item, weapon, or armor having its value changed.
 * * Getting a Game Over can also result in a trigger that will bypass the Game
 *   Over scene, too.
 * * Game Over Common Events will prevent the game from ending completely and
 *   return back to map scene.
 * * The Common Event that is run upon a Game Over can be altered and changed.
 * * Have different Common Events depending on the map or troop encountered.
 * * The Game Over Common Event can be persistent or function as a one time
 *   deal depending on how you, as the game dev, choose to follow up with it.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_EventsMoveCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * === Quick Time Events ===
 * 
 * Also known as QTE's, these events function as player involved input trigger
 * systems which affect Variable or Switch values depending on the QTE type
 * (such as Variables for Button Mashing). Because these are player-input
 * reliant triggers, it's usually best for the event to be halted while the QTE
 * plays out (although you can disable this). Naturally, as such, the event
 * will not continue until the QTE is finished playing in the event commands.
 * 
 * QTE's are activated through Plugin Commands and can have the messages and
 * such displayed with each QTE displayed differently each time. Adjust this in
 * the Plugin Parameters for each QTE to fit the situation.
 * 
 * Only one QTE type can be played at a single time. Two or more QTE's cannot
 * be played at the same time. This is to prevent clutter and cause input
 * clashes.
 * 
 * If a QTE Plugin Command has a Switch and/or Variable assigned (or multiple),
 * those Switches and Variables will be reset to OFF and 0 respectively. Based
 * on the QTE type, data can be recorded to both the Switches and Variables.
 * Some Switches can indicate the successful player input of a QTE while other
 * Variables can indicate how much time was remaining upon finishing the QTE or
 * the score for the QTE.
 * 
 * Furthermore, for play testing purposes, during a QTE input sequence, you can
 * just hold down the "debug" button (usually Control) to automatically input
 * the needed input sequences. This ONLY works during Play Testing!
 * 
 * ---
 *
 * === Switch and Variable Triggers ===
 * 
 * Switches and Variables can have their names included with the name tags:
 * <Toggle Trigger Common Event: x> or <Change Trigger Common Event: x> to
 * automatically activate a Common Event at the next available moment. The
 * activated Common Event will only run once per trigger as opposed to
 * continuously like an Autorun or Parallel Common Event.
 * 
 * These apply to Self Switches (only the custom ones added through the <Self>
 * name tag VisuMZ_1_ItemsEquipsCore) and Self Variables (likewise), too. The
 * same also applies to Map Switches and Variables (with <Map>) and any Global
 * Switches and Variables (with <Global>).
 * 
 * However, Self Switches/Variables that have triggered any Common Events will
 * not utilize any "This Event" event command functions. They will behave as if
 * they are triggered on a non-event environment.
 * 
 * Possible uses for this mechanic can be things like making a picture change
 * into something else whenever a Variable's number value is altered, or have a
 * picture become visible or invisible depending on a Switch's ON/OFF value.
 * 
 * Be wary of creating infinite loops by "turning off" Switches or "resetting"
 * any Variables. That will cause them to trigger, too. If you have to turn off
 * or reset switches/variables, consider using Promise Plugin Commands instead
 * of the auto-repeat tags.
 *
 * ---
 *
 * === JS Switch and Variable Triggers ===
 * 
 * Triggers that function off of JS Switches and Variables will behave slightly
 * different. As these have dynamic values that may be constantly changing, in
 * order to prevent lag and endless loops, there is a delay system put in place
 * to ensure the triggers occur properly.
 * 
 * This delay is set up in the Plugin Parameters. A delay of 60 means that
 * every 60 frames in-game, a check will be performed to see if a trigger
 * should occur or not.
 *
 * ---
 *
 * === Repeat Triggers ===
 * 
 * A triggered Common Event can only be repeated once per availability. This
 * means that if you have toggled a Switch ON/OFF three times in a single frame
 * then the triggered Common Event will only process one time. The same applies
 * to variables, items, weapons, and armors.
 * 
 * This also means that if the Common Event is triggered multiple times outside
 * of the battle and map scenes, then it will only run once when available to
 * run the Common Event.
 *
 * ---
 * 
 * === Triggers for JavaScript Only Common Events ===
 * 
 * If a triggered Common Event only has JavaScript in it through the "Script"
 * event command, then instead of waiting until reaching the battle or map
 * scene, the triggered Common Event will run the JS code immediately. Comments
 * will be ignored and allowed as a part of JavaScript Only Common Events.
 * 
 * If multiple "Script" event commands are found in the triggered Common Event,
 * they will run independent of each other and as local functions. This means
 * that the any custom JS variables declared in one of the Script call events
 * may not necessarily transfer over to the others if not originally meant to.
 * 
 * ---
 * 
 * === Promise Triggers ===
 * 
 * Anything that is assigned through a name tag or notetag will result in an
 * auto-repeat trigger and will always trigger without fail. However, if you
 * want something to trigger only once (or until you assign it again), use a
 * Promise Trigger.
 * 
 * These are assigned through Plugin Commands and they will only trigger once.
 * After that, the condition that caused them to trigger will not trigger again
 * until another Promise is made to them.
 * 
 * ---
 *
 * === Game Over Scene ===
 * 
 * The Game Over scene is skipped over if there's a designated Game Over Common
 * Event determined. If there isn't any Game Over Common Events, then the Game
 * Over scene will occur normally.
 * 
 * If there are multiple Game Over Common Events, determined through the
 * default Plugin Parameters, Map Notetags, or Troop Name Tags, then a priority
 * system is used:
 * 
 *   1. Battle Processing "Can Lose"
 *   2. Troop Name Tag Game Over Common Event
 *   3. Map Notetag Game Over Common Event
 *   4. Plugin Parameters/Command Game Over Common Event
 * 
 * If a "Battle Processing" event command has a "Can Lose" option, then there
 * will be no Game Over Common Event to be run and instead, whatever is found
 * in the "Can Lose" segment will run instead. The event will not be
 * interrupted and continue forward. Ignore the rest.
 * 
 * Otherwise, if there is a Game Over Common Event determined by the enemy
 * troop's name with the Name Tag <Game Over Common Event: x>, then priority
 * will go to that Common Event. Any event running will end prematurely in
 * favor of this Game Over Common Event. Ignore the rest.
 * 
 * If there is a Game Over Common Event determined by the current map's notes
 * with the notetag <Game Over Common Event: x>, then priority will go to that
 * Common Event. Any event running will end prematurely in favor of this Game
 * Over Common Event. Ignore the rest.
 * 
 * And finally, if there are any Game Over Common Events determined through
 * Plugin Commands or Plugin Parameters, then follow through with those. Keep
 * in mind that if it is based off a Plugin Parameter, and if the parameter
 * "Clear Common Event After?" is enabled, it will be only a one time deal.
 * 
 * If there are no Game Over Common Events designated, then finally, the player
 * will reach the Game Over scene.
 *
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Those using VisuStella MZ's Battle Core can launch QTE Plugin Commands from
 * this plugin during the middle of Action Sequences as long as there is not
 * a conflicting effect during it.
 * 
 * Conflict effects include Active Chain Skills, Input Combo Skills, or 
 * Evolution Matrix Skills. QTE events will not run at all while these skill
 * mechanics are active.
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
 * === Trigger-Related Notetags ===
 * 
 * ---
 *
 * <Toggle Trigger Common Event: x>
 * <Toggle Trigger Common Events: x, x, x>
 *
 * - Used for: Switch Names
 * - Whenever this Switch is turned ON or OFF, trigger the Common Event(s) 'x'.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Common Event(s) you
 *   wish to trigger.
 *   - Insert multiple 'x' values to trigger multiple at a time.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 *
 * <Change Trigger Common Event: x>
 * <Change Trigger Common Events: x, x, x>
 *
 * - Used for: Variable Names
 * - Whenever this Variable changes its value, trigger the Common Event(s) 'x'.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Common Event(s) you
 *   wish to trigger.
 *   - Insert multiple 'x' values to trigger multiple at a time.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 * 
 * <Change Trigger Common Event: x>
 * <Change Trigger Common Events: x, x, x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Whenever this item, weapon, or armor gains or loses an item (any amount),
 *   then trigger the Common Event(s) 'x'.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Common Event(s) you
 *   wish to trigger.
 *   - Insert multiple 'x' values to trigger multiple at a time.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 * 
 * ---
 *
 * <Trigger on Switch: x>
 * <Trigger on Switches: x, x, x>
 *
 * - Used for: Common Event Names
 * - Whenever Switch(es) 'x' changes ON/OFF, trigger this Common Event.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Switch(es) you wish
 *   to trigger upon them changing ON/OFF.
 *   - Insert multiple 'x' values to register multiple Switch IDs at once.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 *
 * <Trigger on Variable: x>
 * <Trigger on Variables: x, x, x>
 *
 * - Used for: Common Event Names
 * - Whenever Variable(s) 'x' changes its value, trigger this Common Event.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the variable(s) you wish
 *   to trigger upon them changing values.
 *   - Insert multiple 'x' values to register multiple Switch IDs at once.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 * 
 * === Game Over-Related Notetags ===
 * 
 * ---
 *
 * <Game Over Common Event: x>
 *
 * - Used for: Map Notetags
 * - If the player gets a game over through a battle on this map, then Common
 *   Event 'x' will run in place of a regular Game Over.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to run as a Game Over Common Event.
 *
 * ---
 *
 * <Game Over Common Event: x>
 *
 * - Used for: Troop Name Tags
 * - If the player gets a game over through a battle fighting this troop, then
 *   Common Event 'x' will run in place of a regular Game Over.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to run as a Game Over Common Event.
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
 * === Game Over Plugin Commands ===
 * 
 * ---
 *
 * Game Over: Setup Common Event
 * - Sets up a Common Event that will run upon receiving the next Game Over.
 *
 *   Common Event ID:
 *   - Setup the Common Event to run when the next Game Over occurs.
 *
 * ---
 *
 * Game Over: Clear Common Event
 * - Clears any Common Events designated to run for the next Game Over.
 *
 * ---
 * 
 * === Promise Plugin Commands ===
 * 
 * ---
 * 
 * Promise: Switch State Trigger
 * - Creates a one-time trigger for specified Switch to run the specified
 *   Common Events when Switch state changes.
 * 
 *   Switch ID:
 *   - What is the ID of the Switch to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Variable Value Trigger
 * - Creates a one-time trigger for specified Variable to run the specified
 *   Common Events when Variable value changes.
 * 
 *   Variable ID:
 *   - What is the ID of the Variable to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Item Quantity Trigger
 * - Creates a one-time trigger for specified Item to run the specified Common
 *   Events when Item quantity changes.
 * 
 *   Item ID:
 *   - What is the ID of the Item to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Weapon Quantity Trigger
 * - Creates a one-time trigger for specified Weapon to run the specified
 *   Common Events when Weapon quantity changes.
 * 
 *   Weapon ID:
 *   - What is the ID of the Weapon to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Armor Quantity Trigger
 * - Creates a one-time trigger for specified Armor to run the specified Common
 *   Events when armor quantity changes.
 * 
 *   Armor ID:
 *   - What is the ID of the Armor to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * === QTE Plugin Commands ===
 * 
 * ---
 * 
 * QTE: Clear Current QTE
 * - Clears the currently existing QTE.
 * 
 * ---
 * 
 * QTE: Button Mash (OK)
 * - Starts a Button Mash QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Trigger Variable ID:
 *   - Select which Variable ID to keep track of how many times the OK button
 *     has been pressed.
 *   - Use 0 to not track.
 * 
 *   Trigger Common Event:
 *   - Select a Common Event to play each time OK is pressed.
 *   - Use 0 to not play a Common Event.
 * 
 *   Trigger Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Button Sequence (Normal)
 * - Starts a Button Sequence QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Input Sequence:
 *   - What button sequence is needed to be pressed?
 * 
 *   Shuffle Sequence?:
 *   - Randomize the button sequence order?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the sequence buttons have
 *     been inputted.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Correct Common Event:
 *   - Select a Common Event to play each time a correct button input is
 *     pressed.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Button Sequence (Random)
 * - Starts a randomized Button Sequence QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Allowed Buttons:
 *   - What buttons can appear in the randomized sequence?
 * 
 *   Sequence Length?:
 *   - How many buttons will be made for the sequence?
 *   - You may use code.
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the sequence buttons have
 *     been inputted.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Correct Common Event:
 *   - Select a Common Event to play each time a correct button input is
 *     pressed.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Direction Struggle (✥)
 * - Starts a Direction Struggle QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Struggle Requirement:
 *   - How many times must the player struggle in different directions to
 *     succeed this QTE?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the struggle goal has been
 *     met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Struggle Common Event:
 *   - Select a Common Event to play each struggle.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Fill Gauge (OK)
 * - Starts a Fill Gauge QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Fill Requirement:
 *   - How many times must the player press OK to fill the gauge for this QTE
 *     Session??
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the fill goal has been met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Fill Common Event:
 *   - Select a Common Event to play each fill.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Hold & Release (OK)
 * - Starts a Hold & Release QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Max Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 * 
 *   Not Overload Switch ID:
 *   - Select which Switch ID to turn ON if the OK button was released before
 *     overloading.
 *   - Use 0 to not track.
 * 
 *   Held Timed Variable ID:
 *   - Select which Variable ID to keep track of how long the the OK button has
 *     been held.
 *   - Use 0 to not track.
 * 
 *   Hold Common Event:
 *   - Select a Common Event to play when the button is held.
 *   - Use 0 to not play a Common Event.
 * 
 *   Release Sound:
 *   - Adjust the sound effect played when released.
 * 
 *   Release Common Event:
 *   - Select a Common Event to play when the button is released.
 *   - Use 0 to not play a Common Event.
 * 
 *   Overload Sound:
 *   - Adjust the sound effect played when overloaded.
 * 
 *   Overload Common Event:
 *   - Select a Common Event to play when the QTE is overloaded.
 *   - Use 0 to not play a Common Event.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Marcher (Page Up/Page Down)
 * - Starts a Marcher QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Marcher Requirement:
 *   - How many times must the player march between different buttons to
 *     succeed this QTE?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the marcher goal has been
 *     met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Page Up Common Event:
 *   - Select a Common Event to play when pressing Page Up.
 *   - Use 0 to not play a Common Event.
 * 
 *   Page Down Common Event:
 *   - Select a Common Event to play when pressing Page Down.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Swapper (OK/Cancel)
 * - Starts a Switcher QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Swap Requirement:
 *   - How many times must the player swap between different buttons to succeed
 *     this QTE?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the swapper goal has been
 *     met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   OK Common Event:
 *   - Select a Common Event to play when pressing OK.
 *   - Use 0 to not play a Common Event.
 * 
 *   Cancel Common Event:
 *   - Select a Common Event to play when pressing Cancel.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Timed Hit (OK)
 * - Starts a Timed Hit QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Timed Hit Picture:
 *   - The picture used for the Timed Hit indicator.
 *   - Leave empty to not display.
 * 
 *   Coordinate X:
 *   - X coordinate used for the Timed Hit picture.
 *   - You may use JavaScript code.
 * 
 *   Coordinate Y:
 *   - Y coordinate used for the Timed Hit picture.
 *   - You may use JavaScript code.
 * 
 *   Press in X Frames:
 *   - Press the OK button by these frames (60 frames = 1 sec) with some
 *     leeway.
 *   - You may use code. 
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if the player lands the Timed Hit.
 * 
 *   Timing Variable ID:
 *   - Select which Variable ID to record how close the player is to the
 *     Timed Hit timing.
 * 
 *   Success Common Event:
 *   - Select a Common Event to play if the player lands.
 *   - Use 0 to not play a Common Event.
 * 
 *   Success Sound:
 *   - Adjust the sound effect played when landing on a hit zone.
 * 
 *   Miss Common Event:
 *   - Select a Common Event to play if the player misses.
 *   - Use 0 to not play a Common Event.
 * 
 *   Miss Sound:
 *   - Adjust the sound effect played when NOT landing a hit zone.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Timed Sequence (Buttons)
 * - Starts a Timed Sequence QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Sequence:
 *   - Set up Button Sequence where the player to press at certain timings.
 * 
 *     Button:
 *     - What button is needed to be pressed?
 * 
 *       Press in X Frames:
 *       - Press the button by these frames (60 frames = 1 sec) with some
 *         leeway.
 *       - You may use code. 
 * 
 *     Mechanic Settings:
 * 
 *       Success Switch ID:
 *       - Select which Switch ID to turn ON if the button is successfully hit.
 *      - Use 0 to not change a switch.
 * 
 *       Hit Common Event:
 *       - Select a Common Event to play when this button is hit.
 *       - Use 0 to not play a Common Event.
 * 
 *       Button Press Sound:
 *       - Adjust the sound effect played when a button is pressed.
 * 
 *   Landing Icon:
 *   - The icon used for the landing icon.
 * 
 *   Direction:
 *   - Which way do you want the buttons to move towards?
 * 
 *   Hit Times Variable ID:
 *   - Select which Variable ID to record how correct button inputs the player
 *     has landed.
 * 
 *   Miss Common Event:
 *   - Select a Common Event to play if the player misses.
 *   - Use 0 to not play a Common Event.
 * 
 *   Miss Sound:
 *   - Adjust the sound effect played when the player misses.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Timing Bar (OK)
 * - Starts a Timing Bar QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Hit Zones:
 *   - Set up Hit Zones where the player will gain points for landing on.
 * 
 *     Hit Area:
 * 
 *       Start:
 *       - This is the starting location of the hit area.
 *       - Use numbers between 0 and 100.
 *       - You may use code.
 * 
 *       End:
 *       - This is the ending location of the hit area.
 *       - Use numbers between 0 and 100.
 *       - You may use code.
 * 
 *       Label:
 *       - Text displayed for this hit area (centered).
 *       - Text codes are supported.
 *       - Leave empty to not use.
 * 
 *     Mechanic Settings:
 * 
 *       Variable Points:
 *       - If the cursor lands in this zone, then assign this many points to
 *       - the results variable. You may use code.
 * 
 *       Hit Common Event:
 *       - Select a Common Event to play when this zone is hit.
 *       - Use 0 to not play a Common Event.
 * 
 *     Color Settings:
 * 
 *       Area Color 1:
 *       Area Color 2:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *   Cursor Icon:
 *   - The icon used for the player icon.
 * 
 *   Cursor Speed:
 *   - The speed at which the cursor moves.
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the player lands the cursor
 *     on a Hit Zone.
 * 
 *   Points Variable ID:
 *   - Select which Variable ID to record how many points is earned from the
 *     Hit Zone the player landed on.
 * 
 *   Hit Sound:
 *   - Adjust the sound effect played when landing on a hit zone.
 * 
 *   Miss Sound:
 *   - Adjust the sound effect played when NOT landing a hit zone.
 * 
 *   Miss Common Event:
 *   - Select a Common Event to play when NOT landing a hit zone.
 *   - Use 0 to not play a Common Event.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * There aren't too many Plugin Parameters for this plugin.
 *
 * ---
 *
 * General Settings
 * 
 *   JS Watch Update Delay:
 *   - Used for <JS> Switches and Variables.
 *   - How many frames delay to wait for triggers?
 *   - 60 frames = 1 second.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Over Settings
 * ============================================================================
 *
 * These settings let you adjust Game Over-related trigger aspects.
 *
 * ---
 * 
 * Game Over Settings
 * 
 *   Default Common Event:
 *   - Do you want there to be a Default Common Event?
 *   - It can be changed later with a Plugin Command.
 *   - 0 to not use.
 * 
 *   Heal on Common Event?:
 *   - Do you want to heal 1 HP for all dead members after running the
 *     Game Over Common Event?
 * 
 *   Clear After?:
 *   - Do you wish to clear the Game Over Common Event after it launches
 *     or not?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: QTE Settings
 * ============================================================================
 *
 * These settings let you adjust QTE-related trigger aspects.
 *
 * ---
 * 
 * Settings
 * 
 *   Early Finish Duration:
 *   - How many frames should the game wait if the player finishes a QTE early?
 * 
 *   Show QTE Timer?:
 *   - Do you wish to show a QTE Timer over each QTE window?
 * 
 *     Timer Gauge Style:
 *     - Select the gauge style to use for QTE Timer.
 *     - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *     Gauge Color 1:
 *     Gauge Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the position and dimensions for this window
 *       containing the gauge.
 * 
 *   Show QTE Progress?:
 *   - Show a progress gauge for certain types of QTE's?
 * 
 *     Progress Gauge Style:
 *     - Select the gauge style to use for QTE Timer.
 *     - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *     Gauge Color 1:
 *     Gauge Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the position and dimensions for this window
 *       containing the gauge.
 * 
 *   Input Buffer Leeway:
 *   - How many input buffer frames of leeway should be granted to
 *     Button Sequence QTE?
 * 
 *   Timed Hit Leeway:
 *   - How many frames of leeway should be granted to Timed Hit QTE?
 * 
 *     Overlay Opacity:
 *     - Timed Hit overlay sprite opacity.
 * 
 *     Max Scaling:
 *     - What's the max scaling for Timed Hit QTE indicators?
 * 
 *   Timed Sequence Leeway:
 *   - How many frames of leeway should be granted to Timed Sequence QTE?
 * 
 *     Sequence Position:
 *     - What is the position for the Timed Sequence Landing Icon?
 *     - Use a number between 0 and 100.
 * 
 *   QTE Timing Bar Width:
 *   - This is the width of the Timing Bar in pixels.
 * 
 *     Cursor Offset X:
 *     - Offsets the cursor x position.
 *     - Negative: left. Positive: right.
 * 
 *     Cursor Offset Y:
 *     - Offsets the cursor y position.
 *     - Negative: up. Positive: down.
 * 
 *     Label Font Size:
 *     - What is the font size used to display timing bar labels?
 * 
 *     Label Offset X:
 *     - Offsets the label x position.
 *     - Negative: left. Positive: right.
 * 
 *     Label Offset Y:
 *     - Offsets the label y position.
 *     - Negative: up. Positive: down.
 * 
 *     Timing Bar Color 1:
 *     Timing Bar Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed and QTE text window for
 * this plugin.
 *
 * ---
 * 
 * General Settings
 * 
 *   Text Alignment:
 *   - What is the text alignment?
 *   - Requires VisuMZ_1_MessageCore!
 *   - Otherwise, defaults to left alignment.
 * 
 * --
 * 
 * Message Settings:
 * 
 *   Button Mash Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Button Sequence Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 * 
 *   Direction Struggle:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Fill Gauge Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Hold & Release Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Marcher Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Swapper Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Timed Hit Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Timed Sequence Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 * 
 *   Timing Bar Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 * ---
 * 
 * Message Window:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the position and dimensions for this window.
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
 * Version 1.03: June 12, 2025
 * * Bug Fixes!
 * ** Fixed a bug where some QTE's did not work properly in battle. Fix made
 *    by Arisu.
 * 
 * Version 1.02: March 20, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QTE Settings > Input Buffer Leeway
 * **** How many input buffer frames of leeway should be granted to
 *      Button Sequence QTE?
 * 
 * Version 1.01: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug where any input can be used for Timed Sequence QTE. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Comman added by Arisu:
 * *** QTE: Clear Current QTE
 * **** Clears the currently existing QTE.
 * * Feature Updated!
 * ** Plugin Command: QTE: Hold & Release (OK)
 * *** Added Hold Common Event
 * *** Added Release Common Event
 * *** Added Overload Common Event
 * **** These common events will play upon different aspects of the QTE.
 * 
 * Version 1.00 Official Release Date: January 22, 2024
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
 * @command GameOverCommonEventSetup
 * @text Game Over: Setup Common Event
 * @desc Sets up a Common Event that will run upon receiving the next Game Over.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Setup the Common Event to run when the next Game Over occurs.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameOverCommonEventClear
 * @text Game Over: Clear Common Event
 * @desc Clears any Common Events designated to run for the next Game Over.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Promise
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseSwitch
 * @text Promise: Switch State Trigger
 * @desc Creates a one-time trigger for specified Switch to run the
 * specified Common Events when Switch state changes.
 *
 * @arg dataID:num
 * @text Switch ID
 * @type switch
 * @desc What is the ID of the Switch to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseVariable
 * @text Promise: Variable Value Trigger
 * @desc Creates a one-time trigger for specified Variable to run the
 * specified Common Events when Variable value changes.
 *
 * @arg dataID:num
 * @text Variable ID
 * @type variable
 * @desc What is the ID of the Variable to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseItem
 * @text Promise: Item Quantity Trigger
 * @desc Creates a one-time trigger for specified Item to run the
 * specified Common Events when Item quantity changes.
 *
 * @arg dataID:num
 * @text Item ID
 * @type item
 * @desc What is the ID of the Item to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseWeapon
 * @text Promise: Weapon Quantity Trigger
 * @desc Creates a one-time trigger for specified Weapon to run the
 * specified Common Events when Weapon quantity changes.
 *
 * @arg dataID:num
 * @text Weapon ID
 * @type weapon
 * @desc What is the ID of the Weapon to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseArmor
 * @text Promise: Armor Quantity Trigger
 * @desc Creates a one-time trigger for specified Armor to run the
 * specified Common Events when armor quantity changes.
 *
 * @arg dataID:num
 * @text Armor ID
 * @type armor
 * @desc What is the ID of the Armor to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Q
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_Clear
 * @text QTE: Clear Current QTE
 * @desc Clears the currently existing QTE.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_ButtonMash
 * @text QTE: Button Mash (OK)
 * @desc Starts a Button Mash QTE session.
 * Only one QTE can occur at a time.
 * 
 * @arg VariableID:num
 * @text Trigger Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to keep track of how many times
 * the OK button has been pressed. Use 0 to not track.
 * @default 1
 *
 * @arg CommonEventID:num
 * @text Trigger Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each time OK is pressed.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Trigger Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_ButtonSequenceNormal
 * @text QTE: Button Sequence (Normal)
 * @desc Starts a Button Sequence QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg InputSequence:arraystr
 * @text Input Sequence
 * @type select[]
 * @option 
 * @option down
 * @option left
 * @option right
 * @option up
 * @option 
 * @option ok
 * @option cancel
 * @option pageup
 * @option pagedown
 * @option shift
 * @option 
 * @desc What button sequence is needed to be pressed?
 * @default ["down","left","right","up","ok","cancel"]
 *
 * @arg Shuffle:eval
 * @text Shuffle Sequence?
 * @parent InputSequence:arraystr
 * @type boolean
 * @on Shuffle
 * @off Don't Shuffle
 * @desc Randomize the button sequence order?
 * @default false
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the
 * sequence buttons have been inputted.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Correct Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each time a correct button
 * input is pressed. Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_ButtonSequenceRandom
 * @text QTE: Button Sequence (Random)
 * @desc Starts a randomized Button Sequence QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg Buttons:arraystr
 * @text Allowed Buttons
 * @type select[]
 * @option 
 * @option down
 * @option left
 * @option right
 * @option up
 * @option 
 * @option ok
 * @option cancel
 * @option pageup
 * @option pagedown
 * @option shift
 * @option 
 * @desc What buttons can appear in the randomized sequence?
 * @default ["down","left","right","up","ok","cancel"]
 *
 * @arg SequenceLength:eval
 * @text Sequence Length?
 * @parent Buttons:arraystr
 * @desc How many buttons will be made for the sequence?
 * You may use code.
 * @default 6
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the
 * sequence buttons have been inputted.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Correct Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each time a correct button
 * input is pressed. Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_DirectionStruggle
 * @text QTE: Direction Struggle (✥)
 * @desc Starts a Direction Struggle QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg StruggleRequirement:eval
 * @text Struggle Requirement
 * @desc How many times must the player struggle in different
 * directions to succeed this QTE?
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the struggle
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Struggle Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each struggle.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Evasion1","volume:num":"90","pitch:num":"120","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_FillGauge
 * @text QTE: Fill Gauge (OK)
 * @desc Starts a Fill Gauge QTE session.
 * Only one QTE can occur at a time.
 *
 * @arg FillRequirement:eval
 * @text Fill Requirement
 * @desc How many times must the player press OK to fill the
 * gauge for this QTE Session??
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the fill
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Fill Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each fill.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_HoldRelease
 * @text QTE: Hold & Release (OK)
 * @desc Starts a Hold & Release QTE session.
 * Only one QTE can occur at a time.
 *
 * @arg MaxDuration:eval
 * @text Max Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code.
 * @default 180
 *
 * @arg SwitchID:num
 * @text Not Overload Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if the OK button was
 * released before overloading. Use 0 to not track.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Held Timed Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to keep track of how long the
 * the OK button has been held. Use 0 to not track.
 * @default 1
 *
 * @arg HoldCommonEventID:num
 * @text Hold Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when the button is held.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg ReleaseSound:struct
 * @text Release Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when released.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg ReleaseCommonEventID:num
 * @text Release Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when the button is released.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg OverloadSound:struct
 * @text Overload Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when overloaded.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg OverloadCommonEventID:num
 * @text Overload Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when the QTE is overloaded.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 180
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_Marcher
 * @text QTE: Marcher (Page Up/Page Down)
 * @desc Starts a Marcher QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg ToggleRequirement:eval
 * @text Marcher Requirement
 * @desc How many times must the player march between different
 * buttons to succeed this QTE?
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the marcher
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID_PageUp:num
 * @text Page Up Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing Page Up.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg CommonEventID_PageDown:num
 * @text Page Down Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing Page Down.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_Swapper
 * @text QTE: Swapper (OK/Cancel)
 * @desc Starts a Switcher QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg ToggleRequirement:eval
 * @text Swap Requirement
 * @desc How many times must the player swap between different
 * buttons to succeed this QTE? No touch support.
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the swapper
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID_Ok:num
 * @text OK Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing OK.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg CommonEventID_Cancel:num
 * @text Cancel Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing Cancel.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_TimedHit
 * @text QTE: Timed Hit (OK)
 * @desc Starts a Timed Hit QTE session.
 * Only one QTE can occur at a time.
 * 
 * @arg TimedHitPicture:str
 * @text Timed Hit Picture
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc The picture used for the Timed Hit indicator.
 * Leave empty to not display.
 * @default >>>ATTENTION<<<
 *
 * @arg pointX:eval
 * @text Coordinate X
 * @parent TimedHitPicture:num
 * @desc X coordinate used for the Timed Hit picture.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Coordinate Y
 * @parent TimedHitPicture:num
 * @desc Y coordinate used for the Timed Hit picture.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 * 
 * @arg Duration:eval
 * @text Press in X Frames
 * @desc Press the OK button by these frames (60 frames = 1 sec)
 * with some leeway. You may use code. 
 * @default 120
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if the player lands
 * the Timed Hit.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Timing Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how close the player is
 * to the Timed Hit timing.
 * @default 0
 *
 * @arg HitCommonEventID:num
 * @text Success Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play if the player lands.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg HitSound:struct
 * @text Success Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when landing on a hit zone.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg MissCommonEventID:num
 * @text Miss Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play if the player misses.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg MissSound:struct
 * @text Miss Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when NOT landing a hit zone.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 0
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_TimedSequence
 * @text QTE: Timed Sequence (Buttons)
 * @desc Starts a Timed Sequence QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg Sequence:arraystruct
 * @text Sequence
 * @type struct<Timing>[]
 * @desc Set up Button Sequence where the player to press at certain timings.
 * @default ["{\"Button:str\":\"left\",\"Timing:eval\":\"120\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"right\",\"Timing:eval\":\"180\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"up\",\"Timing:eval\":\"240\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"down\",\"Timing:eval\":\"300\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"ok\",\"Timing:eval\":\"420\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"cancel\",\"Timing:eval\":\"480\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}"]
 * 
 * @arg LandingIcon:num
 * @text Landing Icon
 * @desc The icon used for the landing icon.
 * @default 16
 *
 * @arg Direction:str
 * @text Direction
 * @type select
 * @option left
 * @option right
 * @desc Which way do you want the buttons to move towards?
 * @default left
 * 
 * @arg VariableID:num
 * @text Hit Times Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how correct button
 * inputs the player has landed.
 * @default 1
 *
 * @arg MissCommonEventID:num
 * @text Miss Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play if the player misses.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg MissSound:struct
 * @text Miss Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when the player misses.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_TimingBar
 * @text QTE: Timing Bar (OK)
 * @desc Starts a Timing Bar QTE session.
 * Only one QTE can occur at a time.
 *
 * @arg Zones:arraystruct
 * @text Hit Zones
 * @type struct<HitZone>[]
 * @desc Set up Hit Zones where the player will gain points for landing on.
 * @default ["{\"HitArea\":\"\",\"Start:eval\":\"40\",\"End:eval\":\"60\",\"Label:str\":\"+5\",\"Mechanics\":\"\",\"Points:eval\":\"5\",\"CommonEventID:num\":\"0\",\"Color\":\"\",\"AreaColor1:str\":\"29\",\"AreaColor2:str\":\"28\"}","{\"HitArea\":\"\",\"Start:eval\":\"15\",\"End:eval\":\"20\",\"Label:str\":\"+10\",\"Mechanics\":\"\",\"Points:eval\":\"10\",\"CommonEventID:num\":\"0\",\"Color\":\"\",\"AreaColor1:str\":\"29\",\"AreaColor2:str\":\"28\"}","{\"HitArea\":\"\",\"Start:eval\":\"80\",\"End:eval\":\"85\",\"Label:str\":\"+10\",\"Mechanics\":\"\",\"Points:eval\":\"10\",\"CommonEventID:num\":\"0\",\"Color\":\"\",\"AreaColor1:str\":\"29\",\"AreaColor2:str\":\"28\"}"]
 * 
 * @arg CursorIcon:num
 * @text Cursor Icon
 * @desc The icon used for the player icon.
 * @default 84
 * 
 * @arg CursorSpeed:num
 * @text Cursor Speed
 * @type number
 * @min 1
 * @desc The speed at which the cursor moves.
 * @default 4
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the player lands
 * the cursor on a Hit Zone.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Points Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how many points is earned
 * from the Hit Zone the player landed on.
 * @default 1
 *
 * @arg HitSound:struct
 * @text Hit Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when landing on a hit zone.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg MissSound:struct
 * @text Miss Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when NOT landing a hit zone.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg MissCommonEventID:num
 * @text Miss Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when NOT landing a hit zone.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 0
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
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
 * @param QTE_TriggerSys
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param WatchDelay:num
 * @text JS Watch Update Delay
 * @parent Triggers
 * @type number
 * @min 1
 * @desc Used for <JS> Switches and Variables.
 * How many frames delay to wait for triggers?
 * @default 60
 *
 * @param GameOver:struct
 * @text Game Over Settings
 * @type struct<GameOver>
 * @desc These settings let you adjust Game Over-related trigger aspects.
 * @default {"DefaultGameOverEvent:num":"0","HealOnEvent:eval":"true","ClearOnEvent:eval":"false"}
 *
 * @param QTE:struct
 * @text QTE Settings
 * @type struct<QTE>
 * @desc These settings let you adjust QTE-related trigger aspects.
 * @default {"EarlyFinishDuration:num":"40","ShowQteTimer:eval":"true","qteTimerGaugeStyleType:str":"Dipper","QteTimerColor1:str":"26","QteTimerColor2:str":"27","QteTimerWindowRectJS:func":"\"// Declare Dimensions\\nlet width = Math.ceil(Graphics.width / 2);\\nlet height = Scene_Base.prototype.calcWindowHeight(1);\\nlet x = Math.floor((Graphics.width - width) / 2);\\nlet y = Graphics.height - Math.floor(height * 0.6);\\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, width, height);\"","ShowQteProgress:eval":"true","qteProgressGaugeStyleType:str":"Arrow","QteProgressColor1:str":"17","QteProgressColor2:str":"24","QteProgressWindowRectJS:func":"\"// Declare Dimensions\\nlet width = Math.ceil(Graphics.width / 3);\\nlet height = Scene_Base.prototype.calcWindowHeight(1);\\nlet x = Math.floor((Graphics.width - width) / 2);\\nlet y = Graphics.height - Scene_Base.prototype.calcWindowHeight(3, false);\\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, width, height);\"","TimedHitSuccessFrames:num":"12","TimedHitOpacity:num":"128","TimedHitMaxSize:num":"4.0","TimedSeqSuccessFrames:num":"8","TimedSequenceLandPosition:num":"30","QteTimingBarWidth:num":"600","TimingBarCursorOffsetX:num":"+0","TimingBarCursorOffsetY:num":"+6","TimingBarFontSize:num":"20","TimingBarLabelOffsetX:num":"+0","TimingBarLabelOffsetY:num":"+4","TimingBarColor1:str":"6","TimingBarColor2:str":"14"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed and QTE text window for this plugin.
 * @default {"MsgTextAlign:str":"center","Message":"","ButtonMashTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0]\\nas many times as you can!\"","ButtonSeqTextMsg:json":"\"Press the above \\\\C[27]Button Sequence\\\\c[0] before time runs out!\"","DirectionStruggleTextMsg:json":"\"Cycle through \\\\C[27]<Left Button>\\\\c[0] \\\\C[27]<Right Button>\\\\c[0] \\\\C[27]<Up Button>\\\\c[0] \\\\C[27]<Down Button>\\\\c[0] buttons\\nrepeatedly to fill the above gauge!\"","FillGaugeTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0]\\nrepeatedly to fill the above gauge!\"","HoldReleaseTextMsg:json":"\"Hold \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Press Screen\\\\C[0] until the\\nabove gauge is nearly full, then \\\\C[27]release\\\\c[0]!\"","MarcherTextMsg:json":"\"Alternate between \\\\C[27]<Page Up Button>\\\\c[0] and \\\\C[27]<Page Down Button>\\\\c[0] buttons\\nrepeatedly to fill the above gauge!\"","SwapperTextMsg:json":"\"Alternate between \\\\C[27]<OK Button>\\\\c[0] and \\\\C[27]<Cancel Button>\\\\c[0] buttons\\nrepeatedly to fill the above gauge!\"","TimedHitTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0]\\nat the right time!\"","TimedSeqTextMsg:json":"\"Press the \\\\C[27]Button Sequence\\\\C[0] at the right time!\"","TimingBarTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0] to stop the cursor!\"","MessageWindow":"","MsgWindowBgType:num":"1","MsgWindowRectJS:func":"\"// Declare Lines\\nlet lines = 2;\\n\\n// Declare Dimensions\\nlet width = Graphics.width;\\nlet height = Scene_Base.prototype.calcWindowHeight(lines);\\nlet x = 0;\\nlet y = Graphics.height - height;\\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Game Over Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameOver:
 * 
 * @param DefaultGameOverEvent:num
 * @text Default Common Event
 * @parent GameOver
 * @type common_event
 * @desc Do you want there to be a Default Common Event?
 * It can be changed later. 0 to not use.
 * @default 0
 *
 * @param HealOnEvent:eval
 * @text Heal on Common Event?
 * @parent GameOver
 * @type boolean
 * @on Heal
 * @off Don't Heal
 * @desc Do you want to heal 1 HP for all dead members after
 * running the Game Over Common Event?
 * @default true
 *
 * @param ClearOnEvent:eval
 * @text Clear After?
 * @parent GameOver
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Do you wish to clear the Game Over Common Event after
 * it launches or not?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * QTE Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QTE:
 *
 * @param EarlyFinishDuration:num
 * @text Early Finish Duration
 * @type number
 * @min 1
 * @desc How many frames should the game wait if the player finishes a QTE early?
 * @default 40
 *
 * @param ShowQteTimer:eval
 * @text Show QTE Timer?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Do you wish to show a QTE Timer over each QTE window?
 * @default true
 * 
 * @param qteTimerGaugeStyleType:str
 * @text Timer Gauge Style
 * @parent ShowQteTimer:eval
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for QTE Timer.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Dipper
 *
 * @param QteTimerColor1:str
 * @text Gauge Color 1
 * @parent ShowQteTimer:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param QteTimerColor2:str
 * @text Gauge Color 2
 * @parent ShowQteTimer:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param QteTimerWindowRectJS:func
 * @text JS: X, Y, W, H
 * @parent ShowQteTimer:eval
 * @type note
 * @desc Code used to determine the position and dimensions for this window containing the gauge.
 * @default "// Declare Dimensions\nlet width = Math.ceil(Graphics.width / 2);\nlet height = Scene_Base.prototype.calcWindowHeight(1);\nlet x = Math.floor((Graphics.width - width) / 2);\nlet y = Graphics.height - Math.floor(height * 0.6);\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ShowQteProgress:eval
 * @text Show QTE Progress?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show a progress gauge for certain types of QTE's?
 * @default true
 * 
 * @param qteProgressGaugeStyleType:str
 * @text Progress Gauge Style
 * @parent ShowQteProgress:eval
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for QTE Timer.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Growth
 *
 * @param QteProgressColor1:str
 * @text Gauge Color 1
 * @parent ShowQteProgress:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param QteProgressColor2:str
 * @text Gauge Color 2
 * @parent ShowQteProgress:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param QteProgressWindowRectJS:func
 * @text JS: X, Y, W, H
 * @parent ShowQteProgress:eval
 * @type note
 * @desc Code used to determine the position and dimensions for this window containing the gauge.
 * @default "// Declare Dimensions\nlet width = Math.ceil(Graphics.width / 3);\nlet height = Scene_Base.prototype.calcWindowHeight(1);\nlet x = Math.floor((Graphics.width - width) / 2);\nlet y = Graphics.height - Scene_Base.prototype.calcWindowHeight(3, false);\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonSeqInputBuffer:num
 * @text Input Buffer Leeway
 * @type number
 * @desc How many input buffer frames of leeway should be granted to Button Sequence QTE?
 * @default 15
 *
 * @param TimedHitSuccessFrames:num
 * @text Timed Hit Leeway
 * @type number
 * @min 1
 * @desc How many frames of leeway should be granted to Timed Hit QTE?
 * @default 12
 *
 * @param TimedHitOpacity:num
 * @text Overlay Opacity
 * @parent TimedHitSuccessFrames:num
 * @type number
 * @min 0
 * @max 255
 * @desc Timed Hit overlay sprite opacity.
 * @default 128
 *
 * @param TimedHitMaxSize:num
 * @text Max Scaling
 * @parent TimedHitSuccessFrames:num
 * @desc What's the max scaling for Timed Hit QTE indicators?
 * @default 4.0
 *
 * @param TimedSeqSuccessFrames:num
 * @text Timed Sequence Leeway
 * @type number
 * @min 1
 * @desc How many frames of leeway should be granted to Timed Sequence QTE?
 * @default 8
 *
 * @param TimedSequenceLandPosition:num
 * @text Sequence Position
 * @parent TimedSeqSuccessFrames:num
 * @type number
 * @min 0
 * @max 100
 * @desc What is the position for the Timed Sequence Landing Icon?
 * Use a number between 0 and 100.
 * @default 30
 *
 * @param QteTimingBarWidth:num
 * @text QTE Timing Bar Width
 * @type number
 * @min 1
 * @desc This is the width of the Timing Bar in pixels.
 * @default 600
 *
 * @param TimingBarCursorOffsetX:num
 * @text Cursor Offset X
 * @parent QteTimingBarWidth:num
 * @desc Offsets the cursor x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param TimingBarCursorOffsetY:num
 * @text Cursor Offset Y
 * @parent QteTimingBarWidth:num
 * @desc Offsets the cursor y position.
 * Negative: up. Positive: down.
 * @default +6
 *
 * @param TimingBarFontSize:num
 * @text Label Font Size
 * @parent QteTimingBarWidth:num
 * @number
 * @min 1
 * @desc What is the font size used to display timing bar labels?
 * @default 20
 *
 * @param TimingBarLabelOffsetX:num
 * @text Label Offset X
 * @parent QteTimingBarWidth:num
 * @desc Offsets the label x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param TimingBarLabelOffsetY:num
 * @text Label Offset Y
 * @parent QteTimingBarWidth:num
 * @desc Offsets the label y position.
 * Negative: up. Positive: down.
 * @default +4
 *
 * @param TimingBarColor1:str
 * @text Timing Bar Color 1
 * @parent QteTimingBarWidth:num
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param TimingBarColor2:str
 * @text Timing Bar Color 2
 * @parent QteTimingBarWidth:num
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param MsgTextAlign:str
 * @text Text Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc What is the text alignment? Requires VisuMZ_1_MessageCore!
 * Otherwise, defaults to left alignment.
 * @default center
 * 
 * @param Message
 * @text Message Settings
 * 
 * @param ButtonMashTextMsg:json
 * @text Button Mash Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0]\nas many times as you can!"
 * 
 * @param ButtonSeqTextMsg:json
 * @text Button Sequence Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported.
 * @default "Press the above \\C[27]Button Sequence\\c[0] before time runs out!"
 * 
 * @param DirectionStruggleTextMsg:json
 * @text Direction Struggle
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Cycle through \\C[27]<Left Button>\\c[0] \\C[27]<Right Button>\\c[0] \\C[27]<Up Button>\\c[0] \\C[27]<Down Button>\\c[0] buttons\nrepeatedly to fill the above gauge!"
 * 
 * @param FillGaugeTextMsg:json
 * @text Fill Gauge Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0]\nrepeatedly to fill the above gauge!"
 * 
 * @param HoldReleaseTextMsg:json
 * @text Hold & Release Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Hold \\C[27]<OK Button>\\C[0] or \\C[27]Press Screen\\C[0] until the\nabove gauge is nearly full, then \\C[27]release\\c[0]!"
 * 
 * @param MarcherTextMsg:json
 * @text Marcher Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Alternate between \\C[27]<Page Up Button>\\c[0] and \\C[27]<Page Down Button>\\c[0] buttons\nrepeatedly to fill the above gauge!"
 * 
 * @param SwapperTextMsg:json
 * @text Swapper Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Alternate between \\C[27]<OK Button>\\c[0] and \\C[27]<Cancel Button>\\c[0] buttons\nrepeatedly to fill the above gauge!"
 * 
 * @param TimedHitTextMsg:json
 * @text Timed Hit Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0]\nat the right time!"
 * 
 * @param TimedSeqTextMsg:json
 * @text Timed Sequence Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported.
 * @default "Press the \\C[27]Button Sequence\\C[0] at the right time!"
 * 
 * @param TimingBarTextMsg:json
 * @text Timing Bar Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0] to stop the cursor!"
 * 
 * @param MessageWindow
 * @text Message Window
 *
 * @param MsgWindowBgType:num
 * @text Background Type
 * @parent MessageWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 1
 *
 * @param MsgWindowRectJS:func
 * @text JS: X, Y, W, H
 * @parent MessageWindow
 * @type note
 * @desc Code used to determine the position and dimensions for this window.
 * @default "// Declare Lines\nlet lines = 2;\n\n// Declare Dimensions\nlet width = Graphics.width;\nlet height = Scene_Base.prototype.calcWindowHeight(lines);\nlet x = 0;\nlet y = Graphics.height - height;\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill2
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Hit Zones Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~HitZone:
 *
 * @param HitArea
 * @text Hit Area
 *
 * @param Start:eval
 * @text Start
 * @parent HitArea
 * @desc This is the starting location of the hit area.
 * Use numbers between 0 and 100. You may use code.
 * @default 40
 *
 * @param End:eval
 * @text End
 * @parent HitArea
 * @desc This is the ending location of the hit area.
 * Use numbers between 0 and 100. You may use code.
 * @default 60
 *
 * @param Label:str
 * @text Label
 * @parent HitArea
 * @desc Text displayed for this hit area (centered).
 * Text codes are supported. Leave empty to not use.
 * @default +5
 *
 * @param Mechanics
 * @text Mechanic Settings
 *
 * @param Points:eval
 * @text Variable Points
 * @parent Mechanics
 * @desc If the cursor lands in this zone, then assign this
 * many points to the results variable. You may use code.
 * @default 5
 *
 * @param CommonEventID:num
 * @text Hit Common Event
 * @parent Mechanics
 * @type common_event
 * @desc Select a Common Event to play when this zone is hit.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @param Color
 * @text Color Settings
 *
 * @param AreaColor1:str
 * @text Area Color 1
 * @parent Color
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param AreaColor2:str
 * @text Area Color 2
 * @parent Color
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 */
/* ----------------------------------------------------------------------------
 * Timing Sequence Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Timing:
 *
 * @param Button:str
 * @text Button
 * @type select
 * @option 
 * @option down
 * @option left
 * @option right
 * @option up
 * @option 
 * @option ok
 * @option cancel
 * @option pageup
 * @option pagedown
 * @option shift
 * @option 
 * @desc What button is needed to be pressed?
 * @default ok
 * 
 * @param Timing:eval
 * @text Press in X Frames
 * @parent Button:str
 * @desc Press the button by these frames (60 frames = 1 sec)
 * with some leeway. You may use code. 
 * @default 60
 *
 * @param Mechanics
 * @text Mechanic Settings
 * 
 * @param SwitchID:num
 * @text Success Switch ID
 * @parent Mechanics
 * @type switch
 * @desc Select which Switch ID to turn ON if the button is
 * successfully hit. Use 0 to not change a switch.
 * @default 0
 *
 * @param CommonEventID:num
 * @text Hit Common Event
 * @parent Mechanics
 * @type common_event
 * @desc Select a Common Event to play when this button is hit.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @param Sound:struct
 * @text Button Press Sound
 * @parent Mechanics
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 */
//=============================================================================

const _0xe4bd4=_0x39e8;(function(_0x34fade,_0x1af627){const _0x519a46=_0x39e8,_0x9998cd=_0x34fade();while(!![]){try{const _0x18d94e=-parseInt(_0x519a46(0x165))/0x1*(-parseInt(_0x519a46(0x27e))/0x2)+-parseInt(_0x519a46(0x148))/0x3*(parseInt(_0x519a46(0x1c2))/0x4)+-parseInt(_0x519a46(0x335))/0x5+parseInt(_0x519a46(0x293))/0x6*(-parseInt(_0x519a46(0x16d))/0x7)+parseInt(_0x519a46(0x1f8))/0x8+-parseInt(_0x519a46(0x1bf))/0x9*(parseInt(_0x519a46(0x266))/0xa)+parseInt(_0x519a46(0x31c))/0xb;if(_0x18d94e===_0x1af627)break;else _0x9998cd['push'](_0x9998cd['shift']());}catch(_0x447f26){_0x9998cd['push'](_0x9998cd['shift']());}}}(_0x4b0b,0x73b7d));var label=_0xe4bd4(0x175),tier=tier||0x0,dependencies=[_0xe4bd4(0x24c),_0xe4bd4(0x2b6)],pluginData=$plugins[_0xe4bd4(0x252)](function(_0x223d2a){const _0x3fff0a=_0xe4bd4;return _0x223d2a[_0x3fff0a(0x1d2)]&&_0x223d2a['description'][_0x3fff0a(0x298)]('['+label+']');})[0x0];VisuMZ[label][_0xe4bd4(0x2e3)]=VisuMZ[label][_0xe4bd4(0x2e3)]||{},VisuMZ[_0xe4bd4(0x172)]=function(_0x9e7536,_0x3572d7){const _0x13a7f9=_0xe4bd4;for(const _0x5c5dd4 in _0x3572d7){if(_0x5c5dd4[_0x13a7f9(0x277)](/(.*):(.*)/i)){const _0x28319f=String(RegExp['$1']),_0x228d98=String(RegExp['$2'])[_0x13a7f9(0x164)]()[_0x13a7f9(0x30f)]();let _0x13920e,_0x1a14e2,_0x34bceb;switch(_0x228d98){case _0x13a7f9(0x29d):_0x13920e=_0x3572d7[_0x5c5dd4]!==''?Number(_0x3572d7[_0x5c5dd4]):0x0;break;case _0x13a7f9(0x20d):_0x1a14e2=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):[],_0x13920e=_0x1a14e2[_0x13a7f9(0x14a)](_0x42ae14=>Number(_0x42ae14));break;case _0x13a7f9(0x273):_0x13920e=_0x3572d7[_0x5c5dd4]!==''?eval(_0x3572d7[_0x5c5dd4]):null;break;case'ARRAYEVAL':_0x1a14e2=_0x3572d7[_0x5c5dd4]!==''?JSON['parse'](_0x3572d7[_0x5c5dd4]):[],_0x13920e=_0x1a14e2[_0x13a7f9(0x14a)](_0x431a79=>eval(_0x431a79));break;case'JSON':_0x13920e=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):'';break;case _0x13a7f9(0x2fb):_0x1a14e2=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):[],_0x13920e=_0x1a14e2[_0x13a7f9(0x14a)](_0x261133=>JSON[_0x13a7f9(0x261)](_0x261133));break;case _0x13a7f9(0x2dd):_0x13920e=_0x3572d7[_0x5c5dd4]!==''?new Function(JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4])):new Function(_0x13a7f9(0x25c));break;case _0x13a7f9(0x17f):_0x1a14e2=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):[],_0x13920e=_0x1a14e2[_0x13a7f9(0x14a)](_0x3a0aad=>new Function(JSON['parse'](_0x3a0aad)));break;case _0x13a7f9(0x238):_0x13920e=_0x3572d7[_0x5c5dd4]!==''?String(_0x3572d7[_0x5c5dd4]):'';break;case _0x13a7f9(0x314):_0x1a14e2=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):[],_0x13920e=_0x1a14e2['map'](_0x5a7633=>String(_0x5a7633));break;case'STRUCT':_0x34bceb=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):{},_0x13920e=VisuMZ[_0x13a7f9(0x172)]({},_0x34bceb);break;case _0x13a7f9(0x2e6):_0x1a14e2=_0x3572d7[_0x5c5dd4]!==''?JSON[_0x13a7f9(0x261)](_0x3572d7[_0x5c5dd4]):[],_0x13920e=_0x1a14e2[_0x13a7f9(0x14a)](_0x10dea8=>VisuMZ[_0x13a7f9(0x172)]({},JSON[_0x13a7f9(0x261)](_0x10dea8)));break;default:continue;}_0x9e7536[_0x28319f]=_0x13920e;}}return _0x9e7536;},(_0x9574d8=>{const _0x338935=_0xe4bd4,_0x26f32a=_0x9574d8[_0x338935(0x1c0)];for(const _0x2d5c9e of dependencies){if(!Imported[_0x2d5c9e]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x26f32a,_0x2d5c9e)),SceneManager[_0x338935(0x26d)]();break;}}const _0x5afe23=_0x9574d8[_0x338935(0x1f9)];if(_0x5afe23['match'](/\[Version[ ](.*?)\]/i)){const _0x287b07=Number(RegExp['$1']);_0x287b07!==VisuMZ[label][_0x338935(0x177)]&&(alert(_0x338935(0x2d4)[_0x338935(0x234)](_0x26f32a,_0x287b07)),SceneManager[_0x338935(0x26d)]());}if(_0x5afe23[_0x338935(0x277)](/\[Tier[ ](\d+)\]/i)){const _0x225080=Number(RegExp['$1']);_0x225080<tier?(alert(_0x338935(0x1ed)[_0x338935(0x234)](_0x26f32a,_0x225080,tier)),SceneManager[_0x338935(0x26d)]()):tier=Math[_0x338935(0x24e)](_0x225080,tier);}VisuMZ[_0x338935(0x172)](VisuMZ[label][_0x338935(0x2e3)],_0x9574d8[_0x338935(0x16b)]);})(pluginData);if(VisuMZ[_0xe4bd4(0x30c)][_0xe4bd4(0x177)]<1.79){let text='';text+='VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20',text+=_0xe4bd4(0x258),alert(text),SceneManager['exit']();}if(VisuMZ['EventsMoveCore']['version']<1.5){let text='';text+=_0xe4bd4(0x328),text+=_0xe4bd4(0x258),alert(text),SceneManager[_0xe4bd4(0x26d)]();}PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x2bb),_0x409776=>{const _0x5d0748=_0xe4bd4;VisuMZ[_0x5d0748(0x172)](_0x409776,_0x409776);const _0x124ab7=_0x409776['CommonEventID']||0x0;$gameSystem[_0x5d0748(0x1b1)](_0x124ab7);}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],'GameOverCommonEventClear',_0xb01afe=>{const _0x244956=_0xe4bd4;VisuMZ[_0x244956(0x172)](_0xb01afe,_0xb01afe),$gameSystem[_0x244956(0x1b1)](0x0);}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x2db),_0x5571db=>{const _0xd03a3e=_0xe4bd4;VisuMZ[_0xd03a3e(0x172)](_0x5571db,_0x5571db);const _0x2317ca=_0x5571db[_0xd03a3e(0x282)]||0x0;if(_0x2317ca<=0x0)return;const _0x202373=_0x5571db['CommonEventIDs']||[],_0x8d4844=_0xd03a3e(0x311);$gameSystem[_0xd03a3e(0x2f3)](_0x8d4844,_0x2317ca,_0x202373);}),PluginManager[_0xe4bd4(0x1f1)](pluginData['name'],_0xe4bd4(0x155),_0x1aad86=>{const _0x1392c8=_0xe4bd4;VisuMZ[_0x1392c8(0x172)](_0x1aad86,_0x1aad86);const _0x590a41=_0x1aad86[_0x1392c8(0x282)]||0x0;if(_0x590a41<=0x0)return;const _0x27f412=_0x1aad86['CommonEventIDs']||[],_0x24e748=_0x1392c8(0x1da);$gameSystem[_0x1392c8(0x2f3)](_0x24e748,_0x590a41,_0x27f412);}),PluginManager['registerCommand'](pluginData['name'],_0xe4bd4(0x215),_0x4112ba=>{const _0x49b5e9=_0xe4bd4;VisuMZ['ConvertParams'](_0x4112ba,_0x4112ba);const _0x3c456c=_0x4112ba[_0x49b5e9(0x282)]||0x0;if(_0x3c456c<=0x0)return;const _0xd64f95=_0x4112ba[_0x49b5e9(0x1ea)]||[],_0x949071=_0x49b5e9(0x196);$gameSystem[_0x49b5e9(0x2f3)](_0x949071,_0x3c456c,_0xd64f95);}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x1c3),_0x5d3cd5=>{const _0x1c2f53=_0xe4bd4;VisuMZ[_0x1c2f53(0x172)](_0x5d3cd5,_0x5d3cd5);const _0x5ced6b=_0x5d3cd5['dataID']||0x0;if(_0x5ced6b<=0x0)return;const _0x2ce1cb=_0x5d3cd5[_0x1c2f53(0x1ea)]||[],_0x4cd96c=_0x1c2f53(0x2bf);$gameSystem[_0x1c2f53(0x2f3)](_0x4cd96c,_0x5ced6b,_0x2ce1cb);}),PluginManager['registerCommand'](pluginData[_0xe4bd4(0x1c0)],'PromiseArmor',_0x28930e=>{const _0x2dbe55=_0xe4bd4;VisuMZ['ConvertParams'](_0x28930e,_0x28930e);const _0x5d8e71=_0x28930e[_0x2dbe55(0x282)]||0x0;if(_0x5d8e71<=0x0)return;const _0x33ac99=_0x28930e['CommonEventIDs']||[],_0x554dae=_0x2dbe55(0x1d6);$gameSystem['addQTE_TriggerSysPromiseToSet'](_0x554dae,_0x5d8e71,_0x33ac99);}),PluginManager['registerCommand'](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x1b5),_0x4c7ba8=>{const _0x3e8644=_0xe4bd4;SceneManager[_0x3e8644(0x2c2)]['removeQteWindow'](),SceneManager[_0x3e8644(0x272)]();}),PluginManager[_0xe4bd4(0x1f1)](pluginData['name'],_0xe4bd4(0x223),_0xbf1edd=>{const _0x4f9898=_0xe4bd4;if(SceneManager[_0x4f9898(0x20e)]())return;VisuMZ[_0x4f9898(0x172)](_0xbf1edd,_0xbf1edd);const _0x3fa093={'type':_0x4f9898(0x337),'varID':_0xbf1edd['VariableID']||0x0,'commonEventID':_0xbf1edd[_0x4f9898(0x184)]||0x0,'sound':_0xbf1edd[_0x4f9898(0x189)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0xbf1edd['InputStartDelay']||0x0,'duration':(_0xbf1edd['Duration']||0x1)['clamp'](0x1,0xf423f)},_0x36ec06=_0xbf1edd[_0x4f9898(0x1bd)];SceneManager['setupQTE'](_0x3fa093);if(_0x36ec06){const _0x31e12f=$gameTemp[_0x4f9898(0x1cd)]();if(_0x31e12f)_0x31e12f[_0x4f9898(0x1e7)](_0x4f9898(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData['name'],_0xe4bd4(0x2c4),_0x794d64=>{const _0x38cb57=_0xe4bd4;if(SceneManager['checkPlayingQTE']())return;VisuMZ[_0x38cb57(0x172)](_0x794d64,_0x794d64);const _0xd52bb8={'type':_0x38cb57(0x1e5),'sequence':(_0x794d64['InputSequence']||[])['clone'](),'shuffle':_0x794d64[_0x38cb57(0x2fd)]||![],'progress':0x0,'switchID':_0x794d64[_0x38cb57(0x209)]||0x0,'varID':_0x794d64[_0x38cb57(0x28a)]||0x0,'commonEventID':_0x794d64[_0x38cb57(0x184)]||0x0,'sound':_0x794d64[_0x38cb57(0x189)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x794d64['InputStartDelay']||0x0,'duration':_0x794d64[_0x38cb57(0x253)]||0x1},_0x246105=_0x794d64[_0x38cb57(0x1bd)];_0xd52bb8[_0x38cb57(0x23d)]&&(_0xd52bb8['sequence']=VisuMZ[_0x38cb57(0x175)]['ShuffleArray'](_0xd52bb8[_0x38cb57(0x1e8)]));SceneManager[_0x38cb57(0x326)](_0xd52bb8);if(_0x246105){const _0x25efe9=$gameTemp[_0x38cb57(0x1cd)]();if(_0x25efe9)_0x25efe9[_0x38cb57(0x1e7)](_0x38cb57(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x320),_0x425590=>{const _0x1c5a97=_0xe4bd4;if(SceneManager[_0x1c5a97(0x20e)]())return;VisuMZ['ConvertParams'](_0x425590,_0x425590);const _0x25fa38={'type':'buttonSequence','buttons':(_0x425590[_0x1c5a97(0x1d5)]||[])[_0x1c5a97(0x186)]('')[_0x1c5a97(0x2e0)](),'sequence':[],'length':_0x425590[_0x1c5a97(0x241)]||0x1,'progress':0x0,'switchID':_0x425590['SwitchID']||0x0,'varID':_0x425590[_0x1c5a97(0x28a)]||0x0,'commonEventID':_0x425590[_0x1c5a97(0x184)]||0x0,'sound':_0x425590['Sound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x425590['InputStartDelay']||0x0,'duration':_0x425590[_0x1c5a97(0x253)]||0x1},_0xe9a3a8=_0x425590[_0x1c5a97(0x1bd)];let _0x271468=_0x25fa38[_0x1c5a97(0x299)];while(_0x271468--){const _0x209fb7=_0x25fa38['buttons'][Math[_0x1c5a97(0x30e)](_0x25fa38[_0x1c5a97(0x16c)][_0x1c5a97(0x299)])];_0x25fa38[_0x1c5a97(0x1e8)][_0x1c5a97(0x26f)](_0x209fb7||'ok');}SceneManager['setupQTE'](_0x25fa38);if(_0xe9a3a8){const _0x276976=$gameTemp[_0x1c5a97(0x1cd)]();if(_0x276976)_0x276976[_0x1c5a97(0x1e7)](_0x1c5a97(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],'QTE_DirectionStruggle',_0x24d677=>{const _0x4eb1b7=_0xe4bd4;if(SceneManager['checkPlayingQTE']())return;VisuMZ[_0x4eb1b7(0x172)](_0x24d677,_0x24d677);const _0xf50da5={'type':_0x4eb1b7(0x1f5),'goal':_0x24d677[_0x4eb1b7(0x1ae)]||0x1,'progress':0x0,'switchID':_0x24d677[_0x4eb1b7(0x209)]||0x0,'varID':_0x24d677[_0x4eb1b7(0x28a)]||0x0,'commonEventID':_0x24d677['CommonEventID']||0x0,'sound':_0x24d677[_0x4eb1b7(0x189)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x24d677[_0x4eb1b7(0x2a4)]||0x0,'duration':_0x24d677[_0x4eb1b7(0x253)]||0x1},_0x175a77=_0x24d677[_0x4eb1b7(0x1bd)];SceneManager[_0x4eb1b7(0x326)](_0xf50da5);if(_0x175a77){const _0x413e61=$gameTemp[_0x4eb1b7(0x1cd)]();if(_0x413e61)_0x413e61[_0x4eb1b7(0x1e7)](_0x4eb1b7(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x149),_0x10a5d5=>{const _0x4f6d05=_0xe4bd4;if(SceneManager[_0x4f6d05(0x20e)]())return;VisuMZ[_0x4f6d05(0x172)](_0x10a5d5,_0x10a5d5);const _0x32e991={'type':_0x4f6d05(0x1be),'goal':_0x10a5d5['FillRequirement']||0x1,'progress':0x0,'switchID':_0x10a5d5[_0x4f6d05(0x209)]||0x0,'varID':_0x10a5d5[_0x4f6d05(0x28a)]||0x0,'commonEventID':_0x10a5d5[_0x4f6d05(0x184)]||0x0,'sound':_0x10a5d5['Sound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x10a5d5[_0x4f6d05(0x2a4)]||0x0,'duration':_0x10a5d5[_0x4f6d05(0x253)]||0x1},_0x3a8c0b=_0x10a5d5[_0x4f6d05(0x1bd)];SceneManager['setupQTE'](_0x32e991);if(_0x3a8c0b){const _0x1af914=$gameTemp[_0x4f6d05(0x1cd)]();if(_0x1af914)_0x1af914['setWaitMode'](_0x4f6d05(0x33f));}}),PluginManager['registerCommand'](pluginData['name'],'QTE_HoldRelease',_0x588f82=>{const _0x212c79=_0xe4bd4;if(SceneManager[_0x212c79(0x20e)]())return;VisuMZ[_0x212c79(0x172)](_0x588f82,_0x588f82);const _0x3133d1={'type':_0x212c79(0x2f5),'goal':(_0x588f82[_0x212c79(0x229)]||0x1)[_0x212c79(0x1ba)](0x1,0xf423f),'progress':0x0,'switchID':_0x588f82[_0x212c79(0x209)]||0x0,'varID':_0x588f82[_0x212c79(0x28a)]||0x0,'releaseSound':_0x588f82[_0x212c79(0x265)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'overloadSound':_0x588f82[_0x212c79(0x2d7)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x588f82[_0x212c79(0x2a4)]||0x0,'duration':0x1f40,'HoldCommonEventID':_0x588f82[_0x212c79(0x255)]||0x0,'ReleaseCommonEventID':_0x588f82[_0x212c79(0x1dc)]||0x0,'OverloadCommonEventID':_0x588f82['OverloadCommonEventID']||0x0},_0x5aee69=_0x588f82['WaitForQTE'];SceneManager[_0x212c79(0x326)](_0x3133d1);if(_0x5aee69){const _0x42b467=$gameTemp[_0x212c79(0x1cd)]();if(_0x42b467)_0x42b467[_0x212c79(0x1e7)](_0x212c79(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],'QTE_Marcher',_0x3dee90=>{const _0x51bb41=_0xe4bd4;if(SceneManager[_0x51bb41(0x20e)]())return;VisuMZ['ConvertParams'](_0x3dee90,_0x3dee90);const _0x11c2b9={'type':_0x51bb41(0x160),'goal':_0x3dee90[_0x51bb41(0x2ef)]||0x1,'progress':0x0,'switchID':_0x3dee90['SwitchID']||0x0,'varID':_0x3dee90[_0x51bb41(0x28a)]||0x0,'pageUpCommonEventID':_0x3dee90['CommonEventID_PageUp']||0x0,'pageDownCommonEventID':_0x3dee90[_0x51bb41(0x21b)]||0x0,'sound':_0x3dee90[_0x51bb41(0x189)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x3dee90[_0x51bb41(0x2a4)]||0x0,'duration':_0x3dee90[_0x51bb41(0x253)]||0x1},_0x58f5de=_0x3dee90[_0x51bb41(0x1bd)];SceneManager[_0x51bb41(0x326)](_0x11c2b9);if(_0x58f5de){const _0x31b82a=$gameTemp[_0x51bb41(0x1cd)]();if(_0x31b82a)_0x31b82a[_0x51bb41(0x1e7)]('QTE');}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x23f),_0xce6f11=>{const _0x18f382=_0xe4bd4;if(SceneManager[_0x18f382(0x20e)]())return;VisuMZ[_0x18f382(0x172)](_0xce6f11,_0xce6f11);const _0x54dd33={'type':_0x18f382(0x1a9),'goal':_0xce6f11[_0x18f382(0x2ef)]||0x1,'progress':0x0,'switchID':_0xce6f11[_0x18f382(0x209)]||0x0,'varID':_0xce6f11[_0x18f382(0x28a)]||0x0,'okCommonEventID':_0xce6f11['CommonEventID_Ok']||0x0,'cancelCommonEventID':_0xce6f11[_0x18f382(0x2d3)]||0x0,'sound':_0xce6f11['Sound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0xce6f11['InputStartDelay']||0x0,'duration':_0xce6f11[_0x18f382(0x253)]||0x1},_0x29af59=_0xce6f11[_0x18f382(0x1bd)];SceneManager[_0x18f382(0x326)](_0x54dd33);if(_0x29af59){const _0xb7d80c=$gameTemp[_0x18f382(0x1cd)]();if(_0xb7d80c)_0xb7d80c[_0x18f382(0x1e7)](_0x18f382(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x1ff),_0x52a5af=>{const _0x52a1f8=_0xe4bd4;if(SceneManager[_0x52a1f8(0x20e)]())return;VisuMZ[_0x52a1f8(0x172)](_0x52a5af,_0x52a5af);const _0x3f7882={'type':_0x52a1f8(0x1e4),'picture':_0x52a5af[_0x52a1f8(0x256)]||'','pointX':_0x52a5af[_0x52a1f8(0x15b)]||0x0,'pointY':_0x52a5af[_0x52a1f8(0x321)]||0x0,'switchID':_0x52a5af[_0x52a1f8(0x209)]||0x0,'varID':_0x52a5af[_0x52a1f8(0x28a)]||0x0,'hitCommonEventID':_0x52a5af[_0x52a1f8(0x222)]||0x0,'hitSound':_0x52a5af[_0x52a1f8(0x2b3)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'missCommonEventID':_0x52a5af[_0x52a1f8(0x319)]||0x0,'missSound':_0x52a5af[_0x52a1f8(0x1c8)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x52a5af[_0x52a1f8(0x2a4)]||0x0,'duration':_0x52a5af[_0x52a1f8(0x253)]||0x1},_0x51a27b=_0x52a5af[_0x52a1f8(0x1bd)];_0x3f7882[_0x52a1f8(0x1b9)][_0x52a1f8(0x164)]()[_0x52a1f8(0x30f)]()===_0x52a1f8(0x289)&&(_0x3f7882[_0x52a1f8(0x1b9)]='');SceneManager[_0x52a1f8(0x326)](_0x3f7882);if(_0x51a27b){const _0x52fbdf=$gameTemp[_0x52a1f8(0x1cd)]();if(_0x52fbdf)_0x52fbdf['setWaitMode'](_0x52a1f8(0x33f));}}),PluginManager[_0xe4bd4(0x1f1)](pluginData[_0xe4bd4(0x1c0)],_0xe4bd4(0x187),_0x1ad67e=>{const _0x3a6a27=_0xe4bd4;if(SceneManager['checkPlayingQTE']())return;VisuMZ[_0x3a6a27(0x172)](_0x1ad67e,_0x1ad67e);const _0x44f203={'type':'timedSequence','sequence':_0x1ad67e[_0x3a6a27(0x1c5)]||[],'progress':0x0,'icon':_0x1ad67e[_0x3a6a27(0x1dd)]||0x0,'direction':_0x1ad67e[_0x3a6a27(0x2f2)]||'left','varID':_0x1ad67e[_0x3a6a27(0x28a)]||0x0,'missCommonEventID':_0x1ad67e[_0x3a6a27(0x319)]||0x0,'missSound':_0x1ad67e[_0x3a6a27(0x1c8)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x1ad67e['InputStartDelay']||0x0,'duration':_0x1ad67e[_0x3a6a27(0x253)]||0x1},_0x4587c8=_0x1ad67e['WaitForQTE'];_0x44f203[_0x3a6a27(0x1e8)]=_0x44f203[_0x3a6a27(0x1e8)][_0x3a6a27(0x252)](_0x24833f=>_0x24833f[_0x3a6a27(0x31e)]!==''),_0x44f203[_0x3a6a27(0x1e8)]=_0x44f203[_0x3a6a27(0x1e8)][_0x3a6a27(0x1d3)]((_0x2160ee,_0x4beee4)=>{const _0x3edb7b=_0x3a6a27;if(_0x2160ee[_0x3edb7b(0x1b3)]!==_0x4beee4[_0x3edb7b(0x1b3)])return _0x2160ee[_0x3edb7b(0x1b3)]-_0x4beee4[_0x3edb7b(0x1b3)];return 0x0;}),_0x44f203[_0x3a6a27(0x302)]=_0x44f203['sequence'][_0x3a6a27(0x2e0)](),_0x44f203[_0x3a6a27(0x31a)]=_0x44f203[_0x3a6a27(0x1e8)][_0x44f203[_0x3a6a27(0x1e8)]['length']-0x1][_0x3a6a27(0x1b3)],_0x44f203[_0x3a6a27(0x31a)]+=VisuMZ['QTE_TriggerSys'][_0x3a6a27(0x2e3)][_0x3a6a27(0x33f)][_0x3a6a27(0x1a3)],SceneManager['setupQTE'](_0x44f203);if(_0x4587c8){const _0x594a83=$gameTemp['getLastPluginCommandInterpreter']();if(_0x594a83)_0x594a83[_0x3a6a27(0x1e7)](_0x3a6a27(0x33f));}}),PluginManager['registerCommand'](pluginData['name'],_0xe4bd4(0x2a1),_0x32abbc=>{const _0x46c5d9=_0xe4bd4;if(SceneManager[_0x46c5d9(0x20e)]())return;VisuMZ['ConvertParams'](_0x32abbc,_0x32abbc);const _0x64a4de={'type':_0x46c5d9(0x17d),'zones':_0x32abbc[_0x46c5d9(0x185)]||[],'cursorIcon':_0x32abbc[_0x46c5d9(0x227)]||0x0,'cursorSpeed':_0x32abbc['CursorSpeed']||0x1,'switchID':_0x32abbc['SwitchID']||0x0,'varID':_0x32abbc['VariableID']||0x0,'hitSound':_0x32abbc[_0x46c5d9(0x2b3)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'missSound':_0x32abbc[_0x46c5d9(0x1c8)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'missCommonEventID':_0x32abbc['MissCommonEventID']||0x0,'inputStartDelay':_0x32abbc['InputStartDelay']||0x0,'duration':_0x32abbc['Duration']||0x1},_0x27791b=_0x32abbc[_0x46c5d9(0x1bd)];SceneManager['setupQTE'](_0x64a4de);if(_0x27791b){const _0x2b45eb=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2b45eb)_0x2b45eb[_0x46c5d9(0x1e7)]('QTE');}}),VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x2ed)]={'OnChange':/<(?:|TOGGLE |CHANGE )TRIGGER COMMON EVENT(?:|S):[ ](.*?)>/gi,'OnSwitch':/<TRIGGER ON SW(?:|ITCH)(?:|ES):[ ](.*?)>/gi,'OnVariable':/<TRIGGER ON VAR(?:|IABLE)(?:|S):[ ](.*?)>/gi,'gameOverCommonEvent':/<GAME OVER COMMON EVENT:[ ](\d+)>/i},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x2a9)]=Scene_Boot['prototype'][_0xe4bd4(0x1fe)],Scene_Boot[_0xe4bd4(0x343)]['onDatabaseLoaded']=function(){const _0x534fcd=_0xe4bd4;VisuMZ[_0x534fcd(0x175)][_0x534fcd(0x2a9)][_0x534fcd(0x17a)](this),VisuMZ[_0x534fcd(0x175)][_0x534fcd(0x268)](),VisuMZ['QTE_TriggerSys'][_0x534fcd(0x22b)]();},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x22b)]=function(){const _0x2c7f75=_0xe4bd4;if(Imported[_0x2c7f75(0x1fb)]&&VisuMZ[_0x2c7f75(0x18d)][_0x2c7f75(0x177)]<1.15){let _0x5cdae0='';_0x5cdae0+=_0x2c7f75(0x276),_0x5cdae0+=_0x2c7f75(0x258),alert(_0x5cdae0),SceneManager[_0x2c7f75(0x26d)]();}},VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x2d6)]={},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x230)]={},0x3,VisuMZ[_0xe4bd4(0x175)]['_normalCommonEvents']=[],VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x181)]=[],VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x17b)]={},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x151)]={},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x1d7)]={},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x268)]=function(){const _0x36f692=_0xe4bd4;this[_0x36f692(0x27d)](),this[_0x36f692(0x33e)](),this[_0x36f692(0x2dc)]();},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x27d)]=function(){const _0x20862d=_0xe4bd4,_0x4356b0=$dataSystem[_0x20862d(0x311)],_0x314c67=_0x4356b0['length'],_0x4c05cc=VisuMZ[_0x20862d(0x175)][_0x20862d(0x2ed)];for(let _0x36bb41=0x1;_0x36bb41<_0x314c67;_0x36bb41++){const _0x376f9b=_0x4356b0[_0x36bb41]||'';if(_0x376f9b[_0x20862d(0x277)](_0x4c05cc[_0x20862d(0x33c)])){const _0x50a397=String(RegExp['$1'])['split'](',')[_0x20862d(0x14a)](_0x26ba46=>Number(_0x26ba46));this[_0x20862d(0x2d6)][_0x36bb41]=this['_triggerSwitches'][_0x36bb41]||[];for(const _0x12c312 of _0x50a397){this['_triggerSwitches'][_0x36bb41]['push'](_0x12c312);}DataManager['isTriggerWatchedSwitch'](_0x36bb41)&&(VisuMZ[_0x20862d(0x175)][_0x20862d(0x151)][_0x36bb41]=![]),$dataSystem['switches'][_0x36bb41]=_0x376f9b[_0x20862d(0x18b)](_0x4c05cc['OnChange'],'');}}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x33e)]=function(){const _0x1dcdf9=_0xe4bd4,_0x20989e=$dataSystem[_0x1dcdf9(0x1da)],_0x462ad5=_0x20989e[_0x1dcdf9(0x299)],_0x4de48d=VisuMZ[_0x1dcdf9(0x175)][_0x1dcdf9(0x2ed)];for(let _0x5a5cfa=0x1;_0x5a5cfa<_0x462ad5;_0x5a5cfa++){const _0x158a33=_0x20989e[_0x5a5cfa]||'';if(_0x158a33[_0x1dcdf9(0x277)](_0x4de48d[_0x1dcdf9(0x33c)])){const _0x30b7e5=String(RegExp['$1'])[_0x1dcdf9(0x286)](',')[_0x1dcdf9(0x14a)](_0x24e333=>Number(_0x24e333));this[_0x1dcdf9(0x230)][_0x5a5cfa]=this['_triggerVariables'][_0x5a5cfa]||[];for(const _0x1d6a20 of _0x30b7e5){this[_0x1dcdf9(0x230)][_0x5a5cfa][_0x1dcdf9(0x26f)](_0x1d6a20);}DataManager[_0x1dcdf9(0x1fc)](_0x5a5cfa)&&(VisuMZ['QTE_TriggerSys']['_watchedJsVariables'][_0x5a5cfa]=0x0),$dataSystem[_0x1dcdf9(0x1da)][_0x5a5cfa]=_0x158a33['replace'](_0x4de48d['OnChange'],'');}}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x2dc)]=function(){const _0x4443e3=_0xe4bd4;for(const _0xeb6f9 of $dataCommonEvents){if(!_0xeb6f9)continue;this['parseCommonEventNotetags'](_0xeb6f9),delete _0xeb6f9[_0x4443e3(0x1b0)];}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x2c9)]=function(_0x339c81){const _0x5f322a=_0xe4bd4,_0x2b7b47=VisuMZ[_0x5f322a(0x175)][_0x5f322a(0x2ed)];let _0x3397ba=_0x339c81[_0x5f322a(0x1c0)]||'';const _0x52ee26=_0x339c81['id']||0x0;if(_0x3397ba['match'](_0x2b7b47[_0x5f322a(0x1bb)])){const _0x34a9b2=String(RegExp['$1'])[_0x5f322a(0x286)](',')[_0x5f322a(0x14a)](_0x55c66c=>Number(_0x55c66c));for(const _0x3e0c7a of _0x34a9b2){this[_0x5f322a(0x2d6)][_0x3e0c7a]=this[_0x5f322a(0x2d6)][_0x3e0c7a]||[];if(this[_0x5f322a(0x2d6)][_0x3e0c7a][_0x5f322a(0x298)](_0x52ee26))continue;this['_triggerSwitches'][_0x3e0c7a]['push'](_0x52ee26),DataManager[_0x5f322a(0x2d0)](_0x3e0c7a)&&(VisuMZ[_0x5f322a(0x175)][_0x5f322a(0x151)][_0x3e0c7a]=![]);}_0x3397ba=_0x3397ba['replace'](_0x2b7b47[_0x5f322a(0x1bb)],'');}if(_0x3397ba[_0x5f322a(0x277)](_0x2b7b47[_0x5f322a(0x259)])){const _0x286e90=String(RegExp['$1'])[_0x5f322a(0x286)](',')[_0x5f322a(0x14a)](_0x42cfe4=>Number(_0x42cfe4));for(const _0x4eb637 of _0x286e90){this['_triggerVariables'][_0x4eb637]=this['_triggerVariables'][_0x4eb637]||[];if(this[_0x5f322a(0x230)][_0x4eb637][_0x5f322a(0x298)](_0x52ee26))continue;this[_0x5f322a(0x230)][_0x4eb637]['push'](_0x52ee26),DataManager[_0x5f322a(0x1fc)](_0x4eb637)&&(VisuMZ['QTE_TriggerSys'][_0x5f322a(0x1d7)][_0x4eb637]=0x0);}_0x3397ba=_0x3397ba[_0x5f322a(0x18b)](_0x2b7b47['OnVariable'],'');}_0x339c81[_0x5f322a(0x1c0)]=_0x3397ba['trim']();},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x24d)]=function(_0x10ca97){const _0x2bae09=_0xe4bd4;if(!_0x10ca97)return;if(this[_0x2bae09(0x1c1)][_0x2bae09(0x298)](_0x10ca97['id']))return;if(this[_0x2bae09(0x181)]['includes'](_0x10ca97['id']))return;const _0x34bde8=_0x10ca97[_0x2bae09(0x153)];let _0x3c4387=![];for(const _0x422f05 of _0x34bde8){if([0x0,0x6c,0x198]['includes'](_0x422f05[_0x2bae09(0x1a4)]))continue;if([0x163,0x28f]['includes'](_0x422f05[_0x2bae09(0x1a4)])){_0x3c4387=!![];continue;}_0x3c4387=![];break;}_0x3c4387?(this[_0x2bae09(0x181)]['push'](_0x10ca97['id']),this[_0x2bae09(0x336)](_0x10ca97)):this[_0x2bae09(0x1c1)][_0x2bae09(0x26f)](_0x10ca97['id']);},VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x336)]=function(_0x331fb4){const _0x1dd66f=_0xe4bd4;this[_0x1dd66f(0x17b)]=this[_0x1dd66f(0x17b)]||{},this[_0x1dd66f(0x17b)][_0x331fb4['id']]=this['_jsFuncs'][_0x331fb4['id']]||[];let _0x396b05='';const _0xbc68a5=_0x331fb4[_0x1dd66f(0x153)];for(const _0xbe6bbb of _0xbc68a5){if(_0xbe6bbb['code']===0x163){if(_0x396b05!==''){const _0x146508=new Function(_0x396b05);this[_0x1dd66f(0x17b)][_0x331fb4['id']][_0x1dd66f(0x26f)](_0x146508),_0x396b05='';}_0x396b05+=_0xbe6bbb[_0x1dd66f(0x16b)][0x0]+'\x0a';}else{if(_0xbe6bbb[_0x1dd66f(0x1a4)]===0x28f)_0x396b05+=_0xbe6bbb[_0x1dd66f(0x16b)][0x0]+'\x0a';else{if(_0xbe6bbb[_0x1dd66f(0x1a4)]===0x0&&_0x396b05!==''){const _0x3f1197=new Function(_0x396b05);this[_0x1dd66f(0x17b)][_0x331fb4['id']][_0x1dd66f(0x26f)](_0x3f1197),_0x396b05='';}}}}},VisuMZ[_0xe4bd4(0x175)]['processCommonEvent']=function(_0x1407bd){const _0x4a7489=_0xe4bd4;this['defineCommonEventType']($dataCommonEvents[_0x1407bd]);if(this['_normalCommonEvents'][_0x4a7489(0x298)](_0x1407bd))$gameSystem[_0x4a7489(0x203)](_0x1407bd);else this[_0x4a7489(0x181)]['includes'](_0x1407bd)&&this[_0x4a7489(0x239)](_0x1407bd);},VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x239)]=function(_0x2088e3){const _0x373b02=_0xe4bd4;this[_0x373b02(0x17b)]=this['_jsFuncs']||{},this[_0x373b02(0x17b)][_0x2088e3]=this[_0x373b02(0x17b)][_0x2088e3]||[];const _0x509b90=this[_0x373b02(0x17b)][_0x2088e3];for(const _0xd9c4dc of _0x509b90){try{_0xd9c4dc();}catch(_0x22ec8e){console[_0x373b02(0x1e3)](_0x22ec8e);}}},VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x1b7)]=function(_0x2f4e85){const _0x4b206d=_0xe4bd4;if(!this[_0x4b206d(0x2d6)][_0x2f4e85])return;const _0x1214fd=this[_0x4b206d(0x2d6)][_0x2f4e85];for(const _0x3de3f7 of _0x1214fd){this['processCommonEvent'](_0x3de3f7);}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x260)]=function(_0x268af1){const _0x49f494=_0xe4bd4;if(!this[_0x49f494(0x230)][_0x268af1])return;const _0x1f1bd7=this[_0x49f494(0x230)][_0x268af1];for(const _0x3affcf of _0x1f1bd7){this[_0x49f494(0x170)](_0x3affcf);}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x182)]=function(_0x1875b6){const _0x2375be=_0xe4bd4,_0x3b7451=DataManager[_0x2375be(0x2cf)](_0x1875b6);for(const _0x5b097f of _0x3b7451){this[_0x2375be(0x170)](_0x5b097f);}},DataManager[_0xe4bd4(0x2d0)]=function(_0x509505){const _0x45262b=_0xe4bd4;return DataManager[_0x45262b(0x318)](_0x509505);},DataManager['isTriggerWatchedVariable']=function(_0x143e3e){const _0x170f5f=_0xe4bd4;return DataManager[_0x170f5f(0x1d0)](_0x143e3e);},DataManager['hasOnChangeCommonEventTrigger']=function(_0x2c9add){const _0x235bd1=_0xe4bd4;if(!_0x2c9add)return![];return this[_0x235bd1(0x2cf)](_0x2c9add)[_0x235bd1(0x299)]>0x0;},DataManager['getOnChangeCommonEventTriggers']=function(_0x58663c){const _0x290b5f=_0xe4bd4;if(!_0x58663c)return[];this[_0x290b5f(0x190)]=this['_cache_onChangeCommonEventTrigger']||{};const _0x2e57d6=VisuMZ[_0x290b5f(0x175)][_0x290b5f(0x29e)](_0x58663c,_0x290b5f(0x14e));if(this['_cache_onChangeCommonEventTrigger'][_0x2e57d6]!==undefined)return this[_0x290b5f(0x190)][_0x2e57d6];this[_0x290b5f(0x190)][_0x2e57d6]=[];const _0x44c73f=VisuMZ[_0x290b5f(0x175)][_0x290b5f(0x2ed)],_0x43d862=_0x58663c[_0x290b5f(0x20c)]||'';if(_0x43d862[_0x290b5f(0x277)](_0x44c73f['OnChange'])){const _0x50068e=String(RegExp['$1'])[_0x290b5f(0x286)](',')[_0x290b5f(0x14a)](_0x3abb17=>Number(_0x3abb17));for(const _0x5442de of _0x50068e){this['_cache_onChangeCommonEventTrigger'][_0x2e57d6]['push'](_0x5442de);}}return this['_cache_onChangeCommonEventTrigger'][_0x2e57d6];},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x29e)]=function(_0x1e7fdb,_0x5a81a5){const _0x323089=_0xe4bd4;if(VisuMZ[_0x323089(0x29e)])return VisuMZ[_0x323089(0x29e)](_0x1e7fdb,_0x5a81a5);let _0x6db346='';if($dataActors[_0x323089(0x298)](_0x1e7fdb))_0x6db346=_0x323089(0x2f6)[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);if($dataClasses[_0x323089(0x298)](_0x1e7fdb))_0x6db346=_0x323089(0x250)['format'](_0x1e7fdb['id'],_0x5a81a5);if($dataSkills[_0x323089(0x298)](_0x1e7fdb))_0x6db346=_0x323089(0x23e)[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);if($dataItems[_0x323089(0x298)](_0x1e7fdb))_0x6db346=_0x323089(0x2bd)[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);if($dataWeapons[_0x323089(0x298)](_0x1e7fdb))_0x6db346=_0x323089(0x231)[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);if($dataArmors['includes'](_0x1e7fdb))_0x6db346=_0x323089(0x2af)[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);if($dataEnemies[_0x323089(0x298)](_0x1e7fdb))_0x6db346='Enemy-%1-%2'[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);if($dataStates[_0x323089(0x298)](_0x1e7fdb))_0x6db346=_0x323089(0x295)[_0x323089(0x234)](_0x1e7fdb['id'],_0x5a81a5);return _0x6db346;},VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x243)]=SceneManager[_0xe4bd4(0x1c6)],SceneManager['updateFrameCount']=function(){const _0xb9d868=_0xe4bd4;VisuMZ[_0xb9d868(0x175)][_0xb9d868(0x243)][_0xb9d868(0x17a)](this);const _0x4644c1=VisuMZ['QTE_TriggerSys'][_0xb9d868(0x2e3)][_0xb9d868(0x262)]||0x3c;if(Graphics[_0xb9d868(0x1af)]%_0x4644c1===0x0){VisuMZ[_0xb9d868(0x175)][_0xb9d868(0x2b8)]();if($gameSystem)$gameSystem[_0xb9d868(0x2b8)]();}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x2b8)]=function(){const _0x2f98b3=_0xe4bd4;{for(const _0x2c3a96 in this[_0x2f98b3(0x151)]){const _0xfff533=Number(_0x2c3a96);$gameSwitches[_0x2f98b3(0x2ee)](_0xfff533)!==this['_watchedJsSwitches'][_0x2c3a96]&&(this[_0x2f98b3(0x151)][_0x2c3a96]=$gameSwitches[_0x2f98b3(0x2ee)](_0xfff533),VisuMZ[_0x2f98b3(0x175)][_0x2f98b3(0x1b7)](_0xfff533));}}{for(const _0x2ed8ee in this[_0x2f98b3(0x1d7)]){const _0x54703c=Number(_0x2ed8ee);$gameVariables['value'](_0x54703c)!==this['_watchedJsVariables'][_0x2ed8ee]&&(this[_0x2f98b3(0x1d7)][_0x2ed8ee]=$gameVariables[_0x2f98b3(0x2ee)](_0x54703c),VisuMZ[_0x2f98b3(0x175)][_0x2f98b3(0x260)](_0x54703c));}}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x14d)]=SceneManager['initialize'],SceneManager['initialize']=function(){const _0x3a6642=_0xe4bd4;VisuMZ[_0x3a6642(0x175)][_0x3a6642(0x14d)][_0x3a6642(0x17a)](this),this[_0x3a6642(0x272)]();},SceneManager['clear_QTE_Settings']=function(){const _0x3a6c0a=_0xe4bd4;this[_0x3a6c0a(0x1ad)]='',this[_0x3a6c0a(0x247)]=0x0,this['_qteDuration']=0x0,this['_qteWholeDuration']=0x0,this[_0x3a6c0a(0x211)]=0x0,this[_0x3a6c0a(0x1d1)]=0x0,this[_0x3a6c0a(0x2f8)]={},this[_0x3a6c0a(0x315)]=0x0,this['_afterQteSessionDelay']=0x3c;},SceneManager[_0xe4bd4(0x1fa)]=function(){const _0x262324=_0xe4bd4;return this[_0x262324(0x1ad)]!=='';},SceneManager[_0xe4bd4(0x20e)]=function(){const _0x8d7387=_0xe4bd4;if(this['isPlayingQTE']()){if($gameTemp[_0x8d7387(0x19f)]()){const _0x3ef39b=_0x8d7387(0x1fd);console['log'](_0x3ef39b);}return!![];}if(SceneManager['isRollingDice']){if(SceneManager['isRollingDice']()){if($gameTemp[_0x8d7387(0x19f)]()){const _0x380ff8=_0x8d7387(0x19c);console[_0x8d7387(0x1e3)](_0x380ff8);}return!![];}}if(this[_0x8d7387(0x32a)]()){const _0x6f5966=this[_0x8d7387(0x2c2)][_0x8d7387(0x188)];if(Imported['VisuMZ_3_ActiveChainSkills']){if(this[_0x8d7387(0x2c2)][_0x8d7387(0x212)]()){const _0x3e2b6a='Cannot\x20run\x20QTE\x20during\x20Active\x20Chain\x20Skills.';return console[_0x8d7387(0x1e3)](_0x3e2b6a),!![];}}if(Imported[_0x8d7387(0x163)]){if(_0x6f5966[_0x8d7387(0x26b)]){const _0x16a424='Cannot\x20run\x20QTE\x20during\x20Input\x20Combo\x20Skills.';return console[_0x8d7387(0x1e3)](_0x16a424),!![];}}if(Imported[_0x8d7387(0x176)]){if(_0x6f5966[_0x8d7387(0x178)]){const _0x540088=_0x8d7387(0x344);return console[_0x8d7387(0x1e3)](_0x540088),!![];}}}return![];},SceneManager[_0xe4bd4(0x308)]=function(){const _0x5cb2d5=_0xe4bd4;return this[_0x5cb2d5(0x1ad)];},SceneManager['setupQTE']=function(_0x1848a8){const _0x44ad64=_0xe4bd4;this[_0x44ad64(0x1ad)]=_0x1848a8[_0x44ad64(0x1a1)]||'';if(this[_0x44ad64(0x1ad)]==='')return;Input[_0x44ad64(0x251)](),TouchInput[_0x44ad64(0x251)](),this[_0x44ad64(0x247)]=_0x1848a8[_0x44ad64(0x278)]||0x0,this[_0x44ad64(0x174)]=_0x1848a8[_0x44ad64(0x31a)],this[_0x44ad64(0x249)]=_0x1848a8[_0x44ad64(0x31a)],this[_0x44ad64(0x2f8)]=JSON[_0x44ad64(0x261)](JSON[_0x44ad64(0x27b)](_0x1848a8)),_0x1848a8[_0x44ad64(0x1a1)]===_0x44ad64(0x1e4)&&_0x1848a8[_0x44ad64(0x1b9)]&&this[_0x44ad64(0x2c2)][_0x44ad64(0x1a0)](),this['_scene']&&this[_0x44ad64(0x2c2)]['setupMessageForQTE'](this[_0x44ad64(0x1ad)]),_0x1848a8[_0x44ad64(0x2bc)]&&_0x1848a8['switchID']>0x0&&$gameSwitches['setValue'](_0x1848a8[_0x44ad64(0x2bc)],![]),_0x1848a8['varID']&&_0x1848a8[_0x44ad64(0x342)]>0x0&&$gameVariables[_0x44ad64(0x2b4)](_0x1848a8[_0x44ad64(0x342)],0x0);},SceneManager[_0xe4bd4(0x194)]=function(){const _0x4bc58d=_0xe4bd4;if(this[_0x4bc58d(0x247)]>0x0){this[_0x4bc58d(0x247)]--;return;}if(this[_0x4bc58d(0x315)]>0x0){this[_0x4bc58d(0x315)]--;this[_0x4bc58d(0x315)]<=0x0&&this[_0x4bc58d(0x272)]();return;}this[_0x4bc58d(0x174)]<0xf4240&&this[_0x4bc58d(0x174)]--,this[_0x4bc58d(0x174)]<=0x0&&(this[_0x4bc58d(0x308)]()==='timedHit'?this[_0x4bc58d(0x2ab)]():this[_0x4bc58d(0x272)]());},SceneManager['finishEarlyQTE']=function(){const _0x1468c2=_0xe4bd4,_0x349b42=VisuMZ[_0x1468c2(0x175)]['Settings'][_0x1468c2(0x33f)];this[_0x1468c2(0x315)]=_0x349b42[_0x1468c2(0x195)]??0x28;},SceneManager['isEarlyFinishQTE']=function(){const _0x37e7ff=_0xe4bd4;return this[_0x37e7ff(0x315)]>0x0;},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x310)]=SceneManager[_0xe4bd4(0x317)],SceneManager['updateInputData']=function(){const _0x3face2=_0xe4bd4;VisuMZ[_0x3face2(0x175)][_0x3face2(0x310)][_0x3face2(0x17a)](this),this[_0x3face2(0x1fa)]()&&this['_scene'][_0x3face2(0x2b2)]()&&this[_0x3face2(0x2c5)](),this[_0x3face2(0x29f)]>0x0&&this[_0x3face2(0x29f)]--;},SceneManager[_0xe4bd4(0x2c5)]=function(){const _0x5cb11a=_0xe4bd4;if(this['_qteEarlyFinishDuration']>0x0)return;const _0x1fd340=this[_0x5cb11a(0x308)]();switch(_0x1fd340){case _0x5cb11a(0x337):if(this[_0x5cb11a(0x247)]>0x0)return;this['updateButtonMashQTE']();break;case _0x5cb11a(0x1e5):this[_0x5cb11a(0x246)]();break;case _0x5cb11a(0x1f5):if(this[_0x5cb11a(0x247)]>0x0)return;this[_0x5cb11a(0x294)]();break;case _0x5cb11a(0x1be):if(this[_0x5cb11a(0x247)]>0x0)return;this[_0x5cb11a(0x158)]();break;case _0x5cb11a(0x2f5):if(this['_qteInputDelay']>0x0){(VisuMZ['QTE_TriggerSys'][_0x5cb11a(0x333)]()||Input[_0x5cb11a(0x31b)]('ok')||TouchInput['isTriggered']())&&(this['_qteInputDelay']=0x0);return;}this[_0x5cb11a(0x23c)]();break;case _0x5cb11a(0x160):if(this[_0x5cb11a(0x247)]>0x0)return;this['updateMarcherQTE']();break;case _0x5cb11a(0x1a9):if(this[_0x5cb11a(0x247)]>0x0)return;this[_0x5cb11a(0x322)]();break;case'timedHit':if(this[_0x5cb11a(0x247)]>0x0)return;this[_0x5cb11a(0x161)]();break;case _0x5cb11a(0x22c):if(this['_qteInputDelay']>0x0)return;this[_0x5cb11a(0x27a)]();break;case _0x5cb11a(0x17d):if(this[_0x5cb11a(0x247)]>0x0)return;this[_0x5cb11a(0x23b)]();break;}},VisuMZ[_0xe4bd4(0x175)]['PlaytestInput']=function(_0x9d8fba){const _0x34a5ac=_0xe4bd4;if(_0x9d8fba){if(Input[_0x34a5ac(0x2ec)](_0x34a5ac(0x150))&&Input['isPressed'](_0x34a5ac(0x21a)))return!![];return $gameTemp[_0x34a5ac(0x19f)]()&&Input[_0x34a5ac(0x2ec)](_0x34a5ac(0x21a));}else{if(Input[_0x34a5ac(0x2ec)]('shift')&&Input['isRepeated'](_0x34a5ac(0x21a)))return!![];return $gameTemp[_0x34a5ac(0x19f)]()&&Input[_0x34a5ac(0x27c)]('control');}},Input[_0xe4bd4(0x2c6)]=function(){const _0x20501e=_0xe4bd4;return this[_0x20501e(0x159)]!==null&&this[_0x20501e(0x1f4)]===0x0;},SceneManager[_0xe4bd4(0x275)]=function(){const _0x54ab63=_0xe4bd4;if(VisuMZ['QTE_TriggerSys'][_0x54ab63(0x333)]()||Input[_0x54ab63(0x31b)]('ok')||TouchInput[_0x54ab63(0x31b)]()){const _0x1ae088=this[_0x54ab63(0x2f8)],_0x14853f=_0x1ae088[_0x54ab63(0x342)]||0x0;if(_0x14853f>0x0){const _0x2533f0=$gameVariables[_0x54ab63(0x2ee)](_0x14853f);$gameVariables[_0x54ab63(0x2b4)](_0x14853f,_0x2533f0+0x1);}const _0x1eeea1=_0x1ae088[_0x54ab63(0x199)]||0x0;if(_0x1eeea1>0x0){const _0x11acfd=$gameTemp['getLastPluginCommandInterpreter']();$onceParallel(_0x1eeea1,_0x11acfd?_0x11acfd[_0x54ab63(0x236)]:0x0);}const _0x130428=_0x1ae088['sound'];_0x130428&&_0x130428[_0x54ab63(0x1c0)]&&AudioManager[_0x54ab63(0x21c)](_0x130428);}},SceneManager[_0xe4bd4(0x246)]=function(){const _0x29aa63=_0xe4bd4,_0x289477=this[_0x29aa63(0x2f8)],_0x2686f9=this['_qteSettings']['sequence'],_0x49a41a=this[_0x29aa63(0x2f8)][_0x29aa63(0x303)]||0x0,_0x42ee11=_0x2686f9[_0x49a41a];if(this[_0x29aa63(0x211)]>0x0)this[_0x29aa63(0x211)]--;if(VisuMZ[_0x29aa63(0x175)][_0x29aa63(0x333)]()||Input[_0x29aa63(0x31b)](_0x42ee11)){if(Input[_0x29aa63(0x31b)](_0x42ee11))Input[_0x29aa63(0x251)]();this[_0x29aa63(0x211)]=VisuMZ[_0x29aa63(0x175)]['Settings'][_0x29aa63(0x33f)][_0x29aa63(0x32b)]??0xf,this[_0x29aa63(0x247)]=0x0;const _0x36b9d6=_0x289477['commonEventID']||0x0;if(_0x36b9d6>0x0){const _0x30b5b4=$gameTemp[_0x29aa63(0x1cd)]();$onceParallel(_0x36b9d6,_0x30b5b4?_0x30b5b4['_eventId']:0x0);}const _0x24e906=_0x289477[_0x29aa63(0x205)];_0x24e906&&_0x24e906[_0x29aa63(0x1c0)]&&AudioManager['playSe'](_0x24e906);_0x289477[_0x29aa63(0x303)]++;if(_0x289477[_0x29aa63(0x303)]>=_0x2686f9[_0x29aa63(0x299)]){Input[_0x29aa63(0x251)](),TouchInput[_0x29aa63(0x251)]();const _0x309ad8=_0x289477[_0x29aa63(0x2bc)]||0x0;_0x309ad8>0x0&&$gameSwitches[_0x29aa63(0x2b4)](_0x309ad8,!![]);const _0x3b80cc=_0x289477[_0x29aa63(0x342)]||0x0;_0x3b80cc>0x0&&$gameVariables[_0x29aa63(0x2b4)](_0x3b80cc,this[_0x29aa63(0x174)]),this['finishEarlyQTE']();}}else _0x49a41a>0x0&&this['_qteInputBuffer']<=0x0&&Input[_0x29aa63(0x2c6)]()&&(SoundManager['playBuzzer'](),_0x289477[_0x29aa63(0x303)]=0x0);},SceneManager[_0xe4bd4(0x294)]=function(){const _0x1600f7=_0xe4bd4;if(VisuMZ[_0x1600f7(0x175)][_0x1600f7(0x333)]()||Input['dir4']>0x0){if(Input['dir4']>0x0){if(this['_qteLastInput']===Input['dir4'])return;this[_0x1600f7(0x1d1)]=Input[_0x1600f7(0x2e2)];}const _0x34a764=this['_qteSettings'],_0xd68405=_0x34a764[_0x1600f7(0x199)]||0x0;if(_0xd68405>0x0){const _0x5b873b=$gameTemp[_0x1600f7(0x1cd)]();$onceParallel(_0xd68405,_0x5b873b?_0x5b873b['_eventId']:0x0);}const _0x21d865=_0x34a764['sound'];_0x21d865&&_0x21d865[_0x1600f7(0x1c0)]&&AudioManager[_0x1600f7(0x21c)](_0x21d865);_0x34a764[_0x1600f7(0x303)]++;if(_0x34a764[_0x1600f7(0x303)]>=_0x34a764[_0x1600f7(0x157)]){Input[_0x1600f7(0x251)](),TouchInput[_0x1600f7(0x251)]();const _0x48a244=_0x34a764['switchID']||0x0;_0x48a244>0x0&&$gameSwitches[_0x1600f7(0x2b4)](_0x48a244,!![]);const _0x1aade6=_0x34a764[_0x1600f7(0x342)]||0x0;_0x1aade6>0x0&&$gameVariables['setValue'](_0x1aade6,this[_0x1600f7(0x174)]),this[_0x1600f7(0x2ab)]();}}},SceneManager[_0xe4bd4(0x158)]=function(){const _0x44de55=_0xe4bd4;if(VisuMZ['QTE_TriggerSys'][_0x44de55(0x333)]()||Input[_0x44de55(0x31b)]('ok')||TouchInput[_0x44de55(0x31b)]()){const _0x2f3e88=this['_qteSettings'],_0x1c7f1d=_0x2f3e88[_0x44de55(0x199)]||0x0;if(_0x1c7f1d>0x0){const _0x542318=$gameTemp[_0x44de55(0x1cd)]();$onceParallel(_0x1c7f1d,_0x542318?_0x542318[_0x44de55(0x236)]:0x0);}const _0x533e62=_0x2f3e88[_0x44de55(0x205)];_0x533e62&&_0x533e62[_0x44de55(0x1c0)]&&AudioManager['playSe'](_0x533e62);_0x2f3e88['progress']++;if(_0x2f3e88[_0x44de55(0x303)]>=_0x2f3e88[_0x44de55(0x157)]){Input[_0x44de55(0x251)](),TouchInput[_0x44de55(0x251)]();const _0xe33cfe=_0x2f3e88[_0x44de55(0x2bc)]||0x0;_0xe33cfe>0x0&&$gameSwitches[_0x44de55(0x2b4)](_0xe33cfe,!![]);const _0x196796=_0x2f3e88[_0x44de55(0x342)]||0x0;_0x196796>0x0&&$gameVariables[_0x44de55(0x2b4)](_0x196796,this[_0x44de55(0x174)]),this[_0x44de55(0x2ab)]();}}},SceneManager['updateHoldReleaseQTE']=function(){const _0x27a788=_0xe4bd4,_0x37b95e=this[_0x27a788(0x2f8)];this['_qteDuration']=0x1f40;if(VisuMZ['QTE_TriggerSys']['PlaytestInput'](!![])||Input[_0x27a788(0x2ec)]('ok')||TouchInput[_0x27a788(0x2ec)]()){if(this['_qteSettings'][_0x27a788(0x255)]&&!this['_qteSettings'][_0x27a788(0x2f7)]){this[_0x27a788(0x2f8)]['HoldCommonEventRun']=!![];const _0x207ad8=this['_qteSettings'][_0x27a788(0x255)],_0x34cdc7=$gameTemp[_0x27a788(0x1cd)]();$onceParallel(_0x207ad8,_0x34cdc7?_0x34cdc7['_eventId']:0x0);}VisuMZ[_0x27a788(0x175)][_0x27a788(0x333)](!![])?_0x37b95e[_0x27a788(0x303)]+=Math[_0x27a788(0x304)](_0x37b95e[_0x27a788(0x157)]/0x14):_0x37b95e[_0x27a788(0x303)]++;if(_0x37b95e[_0x27a788(0x303)]>=_0x37b95e[_0x27a788(0x157)]){if(VisuMZ[_0x27a788(0x175)]['PlaytestInput'](!![]))Input[_0x27a788(0x251)](),TouchInput[_0x27a788(0x251)]();else{Input[_0x27a788(0x251)](),TouchInput['clear']();const _0x420dc7=_0x37b95e[_0x27a788(0x202)];_0x420dc7&&_0x420dc7['name']&&AudioManager[_0x27a788(0x21c)](_0x420dc7);const _0x456490=_0x37b95e[_0x27a788(0x2bc)]||0x0;_0x456490>0x0&&$gameSwitches[_0x27a788(0x2b4)](_0x456490,![]);const _0x110258=_0x37b95e[_0x27a788(0x342)]||0x0;_0x110258>0x0&&$gameVariables[_0x27a788(0x2b4)](_0x110258,0x0);if(this[_0x27a788(0x2f8)][_0x27a788(0x2f1)]){const _0x5081c6=this['_qteSettings'][_0x27a788(0x2f1)],_0x32b5d6=$gameTemp[_0x27a788(0x1cd)]();$onceParallel(_0x5081c6,_0x32b5d6?_0x32b5d6[_0x27a788(0x236)]:0x0);}this[_0x27a788(0x2ab)]();}}}else{if(!VisuMZ[_0x27a788(0x175)][_0x27a788(0x333)](!![])&&!Input[_0x27a788(0x2ec)]('ok')&&!TouchInput[_0x27a788(0x2ec)]()){Input[_0x27a788(0x251)](),TouchInput[_0x27a788(0x251)]();const _0x4a653d=_0x37b95e['progress']>0x0?_0x37b95e[_0x27a788(0x2f4)]:_0x37b95e[_0x27a788(0x202)];_0x4a653d&&_0x4a653d[_0x27a788(0x1c0)]&&AudioManager[_0x27a788(0x21c)](_0x4a653d);const _0x171468=_0x37b95e[_0x27a788(0x2bc)]||0x0;_0x171468>0x0&&$gameSwitches[_0x27a788(0x2b4)](_0x171468,_0x37b95e[_0x27a788(0x303)]>0x0);const _0x1f93b4=_0x37b95e['varID']||0x0;_0x1f93b4>0x0&&(_0x37b95e['progress']=Math[_0x27a788(0x2c3)](_0x37b95e[_0x27a788(0x303)],_0x37b95e[_0x27a788(0x157)]),$gameVariables['setValue'](_0x1f93b4,_0x37b95e['progress']));if(_0x37b95e[_0x27a788(0x303)]>0x0){if(this[_0x27a788(0x2f8)][_0x27a788(0x1dc)]){const _0x255ea9=this[_0x27a788(0x2f8)]['ReleaseCommonEventID'],_0x2011f0=$gameTemp[_0x27a788(0x1cd)]();$onceParallel(_0x255ea9,_0x2011f0?_0x2011f0['_eventId']:0x0);}}else{if(this['_qteSettings'][_0x27a788(0x2f1)]){const _0x29809d=this[_0x27a788(0x2f8)][_0x27a788(0x2f1)],_0x2dc10a=$gameTemp[_0x27a788(0x1cd)]();$onceParallel(_0x29809d,_0x2dc10a?_0x2dc10a[_0x27a788(0x236)]:0x0);}}this[_0x27a788(0x2ab)]();}}},SceneManager[_0xe4bd4(0x309)]=function(){const _0x4e31c7=_0xe4bd4;if(VisuMZ[_0x4e31c7(0x175)][_0x4e31c7(0x333)]()||Input[_0x4e31c7(0x31b)](_0x4e31c7(0x228))||Input[_0x4e31c7(0x31b)]('pagedown')){const _0x774277=this[_0x4e31c7(0x2f8)];if(Input[_0x4e31c7(0x31b)](_0x4e31c7(0x228))){if(this[_0x4e31c7(0x1d1)]===_0x4e31c7(0x228))return;this[_0x4e31c7(0x1d1)]=_0x4e31c7(0x228);}if(Input['isTriggered'](_0x4e31c7(0x287))){if(this[_0x4e31c7(0x1d1)]===_0x4e31c7(0x287))return;this[_0x4e31c7(0x1d1)]=_0x4e31c7(0x287);}VisuMZ[_0x4e31c7(0x175)]['PlaytestInput']()&&(this[_0x4e31c7(0x1d1)]=this[_0x4e31c7(0x1d1)]===_0x4e31c7(0x228)?'pagedown':_0x4e31c7(0x228));const _0x4b1dfc=this[_0x4e31c7(0x1d1)]===_0x4e31c7(0x228)?_0x774277[_0x4e31c7(0x213)]||0x0:_0x774277['pageDownCommonEventID']||0x0;if(_0x4b1dfc>0x0){const _0x22f3c6=$gameTemp[_0x4e31c7(0x1cd)]();$onceParallel(_0x4b1dfc,_0x22f3c6?_0x22f3c6[_0x4e31c7(0x236)]:0x0);}const _0x1a0173=_0x774277['sound'];_0x1a0173&&_0x1a0173[_0x4e31c7(0x1c0)]&&AudioManager['playSe'](_0x1a0173);_0x774277[_0x4e31c7(0x303)]++;if(_0x774277[_0x4e31c7(0x303)]>=_0x774277['goal']){Input[_0x4e31c7(0x251)](),TouchInput[_0x4e31c7(0x251)]();const _0x307b9d=_0x774277[_0x4e31c7(0x2bc)]||0x0;_0x307b9d>0x0&&$gameSwitches[_0x4e31c7(0x2b4)](_0x307b9d,!![]);const _0x4fa14d=_0x774277[_0x4e31c7(0x342)]||0x0;_0x4fa14d>0x0&&$gameVariables[_0x4e31c7(0x2b4)](_0x4fa14d,this[_0x4e31c7(0x174)]),this[_0x4e31c7(0x2ab)]();}}},SceneManager[_0xe4bd4(0x322)]=function(){const _0x3868f0=_0xe4bd4;if(VisuMZ['QTE_TriggerSys'][_0x3868f0(0x333)]()||Input['isTriggered']('ok')||Input[_0x3868f0(0x31b)](_0x3868f0(0x1a7))){const _0x20afbe=this['_qteSettings'];if(Input[_0x3868f0(0x31b)]('ok')){if(this[_0x3868f0(0x1d1)]==='ok')return;this[_0x3868f0(0x1d1)]='ok';}if(Input[_0x3868f0(0x31b)](_0x3868f0(0x1a7))){if(this[_0x3868f0(0x1d1)]===_0x3868f0(0x1a7))return;this['_qteLastInput']=_0x3868f0(0x1a7);}VisuMZ[_0x3868f0(0x175)][_0x3868f0(0x333)]()&&(this[_0x3868f0(0x1d1)]=this[_0x3868f0(0x1d1)]==='ok'?'cancel':'ok');const _0xb312a2=this[_0x3868f0(0x1d1)]==='ok'?_0x20afbe[_0x3868f0(0x162)]||0x0:_0x20afbe[_0x3868f0(0x331)]||0x0;if(_0xb312a2>0x0){const _0x372648=$gameTemp[_0x3868f0(0x1cd)]();$onceParallel(_0xb312a2,_0x372648?_0x372648[_0x3868f0(0x236)]:0x0);}const _0x29acb6=_0x20afbe[_0x3868f0(0x205)];_0x29acb6&&_0x29acb6[_0x3868f0(0x1c0)]&&AudioManager['playSe'](_0x29acb6);_0x20afbe[_0x3868f0(0x303)]++;if(_0x20afbe['progress']>=_0x20afbe[_0x3868f0(0x157)]){Input[_0x3868f0(0x251)](),TouchInput[_0x3868f0(0x251)]();const _0x5e087a=_0x20afbe[_0x3868f0(0x2bc)]||0x0;_0x5e087a>0x0&&$gameSwitches['setValue'](_0x5e087a,!![]);const _0x58b8d7=_0x20afbe[_0x3868f0(0x342)]||0x0;_0x58b8d7>0x0&&$gameVariables[_0x3868f0(0x2b4)](_0x58b8d7,this[_0x3868f0(0x174)]),this[_0x3868f0(0x2ab)]();}}},SceneManager[_0xe4bd4(0x161)]=function(){const _0x119cee=_0xe4bd4;if(VisuMZ['QTE_TriggerSys'][_0x119cee(0x333)](!![])||Input[_0x119cee(0x31b)]('ok')||TouchInput[_0x119cee(0x31b)]()){const _0x53d84c=this[_0x119cee(0x2f8)],_0x16d139=VisuMZ[_0x119cee(0x175)][_0x119cee(0x2e3)][_0x119cee(0x33f)],_0x2da0d3=this[_0x119cee(0x174)];if(VisuMZ[_0x119cee(0x175)][_0x119cee(0x333)](!![])&&_0x2da0d3>0x1)return;Input['clear'](),TouchInput[_0x119cee(0x251)]();const _0x53fb14=_0x16d139[_0x119cee(0x1a3)]??0x10,_0xa0fe39=_0x53fb14+0x1>=_0x2da0d3,_0x4af02f=_0x53d84c['switchID']||0x0;_0x4af02f>0x0&&$gameSwitches[_0x119cee(0x2b4)](_0x4af02f,_0xa0fe39);const _0x2ab32d=_0x53d84c[_0x119cee(0x342)]||0x0;_0x2ab32d>0x0&&$gameVariables[_0x119cee(0x2b4)](_0x2ab32d,_0x2da0d3-0x1);if(_0xa0fe39){const _0x57f36d=_0x53d84c[_0x119cee(0x2a6)];_0x57f36d&&_0x57f36d['name']&&AudioManager['playSe'](_0x57f36d);const _0x1a18eb=_0x53d84c[_0x119cee(0x24a)]||0x0;if(_0x1a18eb>0x0){const _0x4e18bc=$gameTemp[_0x119cee(0x1cd)]();$onceParallel(_0x1a18eb,_0x4e18bc?_0x4e18bc[_0x119cee(0x236)]:0x0);}}else{const _0x3aa168=_0x53d84c[_0x119cee(0x22e)];_0x3aa168&&_0x3aa168[_0x119cee(0x1c0)]&&AudioManager[_0x119cee(0x21c)](_0x3aa168);const _0x9aa81c=_0x53d84c[_0x119cee(0x324)]||0x0;if(_0x9aa81c>0x0){const _0x4e7115=$gameTemp[_0x119cee(0x1cd)]();$onceParallel(_0x9aa81c,_0x4e7115?_0x4e7115['_eventId']:0x0);}}this[_0x119cee(0x2ab)]();}},SceneManager[_0xe4bd4(0x27a)]=function(){const _0x57521f=_0xe4bd4;if(VisuMZ[_0x57521f(0x175)]['PlaytestInput'](!![])||Input['isAnyTriggered']()){const _0xe26e90=this['_qteSettings'],_0x15a235=VisuMZ[_0x57521f(0x175)][_0x57521f(0x2e3)][_0x57521f(0x33f)],_0x520a3e=this[_0x57521f(0x249)]-this[_0x57521f(0x174)],_0xa1e7cd=_0xe26e90[_0x57521f(0x302)][0x0];if(!_0xa1e7cd)return;const _0x4240af=_0xa1e7cd['Timing'],_0x4dc1f6=Math[_0x57521f(0x180)](_0x4240af-_0x520a3e),_0x584715=_0x15a235[_0x57521f(0x22a)]??0x8;if(_0x4dc1f6>_0x584715*0x2)return;let _0x34aa8c=Input[_0x57521f(0x159)];if(_0x34aa8c===_0x57521f(0x33d))_0x34aa8c=_0x57521f(0x1a7);if(VisuMZ[_0x57521f(0x175)][_0x57521f(0x333)](!![])){if(_0x4dc1f6!==0x1)return;}else Input[_0x57521f(0x251)](),TouchInput[_0x57521f(0x251)]();const _0x45cae3=_0x4dc1f6<=_0x584715&&_0x34aa8c===_0xa1e7cd['Button'];if(_0x45cae3){const _0x3bc8f4=_0xa1e7cd['Sound'];_0x3bc8f4&&_0x3bc8f4[_0x57521f(0x1c0)]&&AudioManager['playSe'](_0x3bc8f4);const _0x38eba1=_0xa1e7cd[_0x57521f(0x209)]||0x0;_0x38eba1>0x0&&$gameSwitches[_0x57521f(0x2b4)](_0x38eba1,!![]);const _0x294176=_0xe26e90['varID']||0x0;if(_0x294176>0x0){const _0x5c81e4=$gameVariables['value'](_0x294176);$gameVariables[_0x57521f(0x2b4)](_0x294176,_0x5c81e4+0x1);}const _0x326400=_0xa1e7cd[_0x57521f(0x184)]||0x0;if(_0x326400>0x0){const _0x47ab69=$gameTemp[_0x57521f(0x1cd)]();$onceParallel(_0x326400,_0x47ab69?_0x47ab69[_0x57521f(0x236)]:0x0);}}else{const _0x2beeda=_0xe26e90['missSound'];_0x2beeda&&_0x2beeda[_0x57521f(0x1c0)]&&AudioManager[_0x57521f(0x21c)](_0x2beeda);const _0x29dd47=_0xe26e90['missCommonEventID']||0x0;if(_0x29dd47>0x0){const _0xc6818=$gameTemp['getLastPluginCommandInterpreter']();$onceParallel(_0x29dd47,_0xc6818?_0xc6818['_eventId']:0x0);}}_0xe26e90[_0x57521f(0x302)][_0x57521f(0x186)](_0xa1e7cd),_0xe26e90[_0x57521f(0x302)]['length']<=0x0&&(Input[_0x57521f(0x251)](),TouchInput[_0x57521f(0x251)](),this[_0x57521f(0x2ab)]());}},SceneManager[_0xe4bd4(0x23b)]=function(){const _0x4b78d0=_0xe4bd4,_0x28eae1=this['_qteSettings'];if(VisuMZ['QTE_TriggerSys'][_0x4b78d0(0x333)]()||Input[_0x4b78d0(0x31b)]('ok')||TouchInput[_0x4b78d0(0x31b)]()){const _0x144758=this[_0x4b78d0(0x2c2)][_0x4b78d0(0x200)];_0x144758[_0x4b78d0(0x1b4)]();const _0x50f47a=_0x144758[_0x4b78d0(0x1e2)](),_0x2b8819=_0x28eae1[_0x4b78d0(0x323)],_0x4ba728=VisuMZ[_0x4b78d0(0x175)][_0x4b78d0(0x333)]()?_0x2b8819['clone']():_0x2b8819['filter'](_0x44f0e1=>_0x50f47a>=_0x44f0e1[_0x4b78d0(0x22d)]&&_0x50f47a<=_0x44f0e1[_0x4b78d0(0x1b6)]);Input[_0x4b78d0(0x251)](),TouchInput['clear']();if(_0x4ba728['length']>0x0){const _0x2bf0d1=_0x4ba728[_0x4b78d0(0x283)]((_0x4e8cb0,_0x4e478e)=>_0x4e478e[_0x4b78d0(0x224)]>_0x4e8cb0[_0x4b78d0(0x224)]?_0x4e478e:_0x4e8cb0),_0x588e5b=_0x28eae1[_0x4b78d0(0x2a6)];_0x588e5b&&_0x588e5b[_0x4b78d0(0x1c0)]&&AudioManager[_0x4b78d0(0x21c)](_0x588e5b);const _0x1d9ef9=_0x28eae1[_0x4b78d0(0x2bc)]||0x0;_0x1d9ef9>0x0&&$gameSwitches[_0x4b78d0(0x2b4)](_0x1d9ef9,!![]);const _0x40e57f=_0x28eae1[_0x4b78d0(0x342)]||0x0;_0x40e57f>0x0&&$gameVariables[_0x4b78d0(0x2b4)](_0x40e57f,_0x2bf0d1['Points']);const _0x296a90=_0x2bf0d1[_0x4b78d0(0x184)]||0x0;if(_0x296a90>0x0){const _0x572c26=$gameTemp['getLastPluginCommandInterpreter']();$onceParallel(_0x296a90,_0x572c26?_0x572c26[_0x4b78d0(0x236)]:0x0);}}else{const _0x560adc=_0x28eae1[_0x4b78d0(0x22e)];_0x560adc&&_0x560adc[_0x4b78d0(0x1c0)]&&AudioManager[_0x4b78d0(0x21c)](_0x560adc);const _0x4cfe42=_0x28eae1[_0x4b78d0(0x2bc)]||0x0;_0x4cfe42>0x0&&$gameSwitches[_0x4b78d0(0x2b4)](_0x4cfe42,![]);const _0x448761=_0x28eae1[_0x4b78d0(0x342)]||0x0;_0x448761>0x0&&$gameVariables['setValue'](_0x448761,0x0);const _0x5cb7bd=_0x28eae1['missCommonEventID']||0x0;if(_0x5cb7bd>0x0){const _0x331ad8=$gameTemp[_0x4b78d0(0x1cd)]();$onceParallel(_0x5cb7bd,_0x331ad8?_0x331ad8[_0x4b78d0(0x236)]:0x0);}}this[_0x4b78d0(0x2ab)]();}},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x327)]=Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x240)],Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(){const _0x39bde4=_0xe4bd4;VisuMZ[_0x39bde4(0x175)]['Game_System_initialize'][_0x39bde4(0x17a)](this),this['init_QTE_TriggerSys'](),this['initGameOverEventSettings']();},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x2a7)]=function(){const _0x1dbc52=_0xe4bd4;this[_0x1dbc52(0x2a8)](),this['init_QTE_TriggerSysPromise']();},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x2a8)]=function(){const _0x57292f=_0xe4bd4;this[_0x57292f(0x26c)]=[];},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x203)]=function(_0x5ebd54){const _0x5e3ba8=_0xe4bd4;this[_0x5e3ba8(0x26c)]===undefined&&this[_0x5e3ba8(0x2a8)]();if(this[_0x5e3ba8(0x26c)][_0x5e3ba8(0x298)](_0x5ebd54))return;this['_onceParallelQueue'][_0x5e3ba8(0x26f)](_0x5ebd54);},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x340)]=function(){const _0x45a2ad=_0xe4bd4;return this[_0x45a2ad(0x26c)]===undefined&&this[_0x45a2ad(0x2a8)](),this[_0x45a2ad(0x26c)][_0x45a2ad(0x299)]>0x0;},Game_System['prototype'][_0xe4bd4(0x25e)]=function(){const _0x5c4c55=_0xe4bd4;this[_0x5c4c55(0x26c)]===undefined&&this[_0x5c4c55(0x2a8)]();while(this['_onceParallelQueue']['length']){const _0x175583=this['_onceParallelQueue'][_0x5c4c55(0x150)]();$onceParallel(_0x175583);}},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x166)]=function(){const _0x182ee5=_0xe4bd4;this[_0x182ee5(0x20f)]={'switches':{},'variables':{},'items':{},'weapons':{},'armors':{}},this[_0x182ee5(0x208)]={'switches':{},'variables':{}};},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x225)]=function(){if(this['_triggerPromises']===undefined)this['init_QTE_TriggerSysPromise']();return this['_triggerPromises'];},Game_System[_0xe4bd4(0x343)]['getWatchedTriggerPromises']=function(){const _0x5b022e=_0xe4bd4;if(this[_0x5b022e(0x208)]===undefined)this[_0x5b022e(0x166)]();return this[_0x5b022e(0x208)];},Game_System[_0xe4bd4(0x343)]['addQTE_TriggerSysPromiseToSet']=function(_0x40f7f2,_0xe3e47f,_0x55846a){const _0x619585=_0xe4bd4,_0x432331=this[_0x619585(0x225)]()[_0x40f7f2];if(!_0x432331)return;_0x432331[_0xe3e47f]=_0x432331[_0xe3e47f]||[];for(const _0xb8bba7 of _0x55846a){if(_0x432331[_0xe3e47f][_0x619585(0x298)](_0xb8bba7))continue;_0x432331[_0xe3e47f][_0x619585(0x26f)](_0xb8bba7);}_0x40f7f2==='switches'&&DataManager[_0x619585(0x2d0)](_0xe3e47f)&&(this[_0x619585(0x208)]['switches'][_0xe3e47f]=$gameSwitches[_0x619585(0x2ee)](_0xe3e47f)),_0x40f7f2===_0x619585(0x1da)&&DataManager[_0x619585(0x1fc)](_0xe3e47f)&&(this[_0x619585(0x208)]['variables'][_0xe3e47f]=$gameVariables[_0x619585(0x2ee)](_0xe3e47f));},Game_System[_0xe4bd4(0x343)]['checkWatchedTriggers']=function(){const _0x13784a=_0xe4bd4,_0x311989=this[_0x13784a(0x171)]();{const _0x4cfc3c=[];for(const _0x1a2195 in _0x311989[_0x13784a(0x311)]){const _0x59ea33=Number(_0x1a2195);$gameSwitches[_0x13784a(0x2ee)](_0x59ea33)!==_0x311989[_0x13784a(0x311)][_0x1a2195]&&(_0x311989[_0x13784a(0x311)][_0x1a2195]=$gameSwitches[_0x13784a(0x2ee)](_0x59ea33),this[_0x13784a(0x2c7)](_0x13784a(0x311),_0x59ea33),_0x4cfc3c['push'](_0x59ea33));}while(_0x4cfc3c[_0x13784a(0x299)]>0x0){const _0x2abc45=_0x4cfc3c['shift']();$gameSystem['clearWatchedTrigger']('switches',_0x2abc45);}}{const _0x5d286f=[];for(const _0x4c9bc1 in _0x311989['variables']){const _0x1f334c=Number(_0x4c9bc1);0x4d,$gameVariables[_0x13784a(0x2ee)](_0x1f334c)!==_0x311989[_0x13784a(0x1da)][_0x4c9bc1]&&(_0x311989['variables'][_0x4c9bc1]=$gameVariables['value'](_0x1f334c),this[_0x13784a(0x2c7)]('variables',_0x1f334c),_0x5d286f[_0x13784a(0x26f)](_0x1f334c));}while(_0x5d286f[_0x13784a(0x299)]>0x0){const _0x101dd3=_0x5d286f[_0x13784a(0x150)]();$gameSystem[_0x13784a(0x18c)](_0x13784a(0x1da),_0x101dd3);}}},Game_System[_0xe4bd4(0x343)]['hasOnTriggerPromise']=function(_0x28e3b3,_0x2e7602){const _0x4cdbb5=_0xe4bd4,_0x438e00=this[_0x4cdbb5(0x225)]()[_0x28e3b3];if(!_0x438e00)return![];return _0x438e00[_0x2e7602]=_0x438e00[_0x2e7602]||[],_0x438e00[_0x2e7602]['length']>0x0;},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x296)]=function(_0xd47d2d){const _0x2e39d5=_0xe4bd4;if(DataManager[_0x2e39d5(0x2fe)](_0xd47d2d))return this[_0x2e39d5(0x219)](_0x2e39d5(0x196),_0xd47d2d['id']);else{if(DataManager[_0x2e39d5(0x1f2)](_0xd47d2d))return this[_0x2e39d5(0x219)](_0x2e39d5(0x2bf),_0xd47d2d['id']);else{if(DataManager[_0x2e39d5(0x16a)](_0xd47d2d))return this[_0x2e39d5(0x219)](_0x2e39d5(0x1d6),_0xd47d2d['id']);}}return![];},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x2c7)]=function(_0x1e2046,_0x4d0e4d){const _0x37e712=_0xe4bd4,_0x3bcf4=this[_0x37e712(0x225)]()[_0x1e2046];if(!_0x3bcf4)return![];const _0x304e88=_0x3bcf4[_0x4d0e4d]||[];for(const _0x225c55 of _0x304e88){VisuMZ[_0x37e712(0x175)]['processCommonEvent'](_0x225c55);}delete _0x3bcf4[_0x4d0e4d];},Game_System[_0xe4bd4(0x343)]['fulfillOnTriggerPromisesItem']=function(_0x39e934){const _0x13ad08=_0xe4bd4;if(DataManager[_0x13ad08(0x2fe)](_0x39e934))this[_0x13ad08(0x2c7)](_0x13ad08(0x196),_0x39e934['id']);else{if(DataManager[_0x13ad08(0x1f2)](_0x39e934))this['fulfillOnTriggerPromises']('weapons',_0x39e934['id']);else DataManager[_0x13ad08(0x16a)](_0x39e934)&&this[_0x13ad08(0x2c7)](_0x13ad08(0x1d6),_0x39e934['id']);}},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x18c)]=function(_0x5ea5b3,_0x42f926){const _0x35d614=this['getWatchedTriggerPromises']()[_0x5ea5b3];if(!_0x35d614)return;delete _0x35d614[_0x42f926];},Game_System['prototype'][_0xe4bd4(0x192)]=function(){const _0x435c0d=_0xe4bd4;this[_0x435c0d(0x2ea)]=VisuMZ[_0x435c0d(0x175)]['Settings'][_0x435c0d(0x312)]['DefaultGameOverEvent']||0x0;},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x2df)]=function(){const _0x1e33cc=_0xe4bd4;if(this[_0x1e33cc(0x2ea)]===undefined)this[_0x1e33cc(0x192)]();return this[_0x1e33cc(0x2ea)];},Game_System[_0xe4bd4(0x343)][_0xe4bd4(0x1b1)]=function(_0x22e9ec){const _0x238a43=_0xe4bd4;if(this[_0x238a43(0x2ea)]===undefined)this[_0x238a43(0x192)]();this[_0x238a43(0x2ea)]=_0x22e9ec;},VisuMZ['QTE_TriggerSys'][_0xe4bd4(0x1ab)]=Game_Switches[_0xe4bd4(0x343)][_0xe4bd4(0x2b4)],Game_Switches[_0xe4bd4(0x343)][_0xe4bd4(0x2b4)]=function(_0x4b7096,_0x5af21d){const _0x462500=_0xe4bd4,_0x11b348=this[_0x462500(0x2ee)](_0x4b7096);VisuMZ[_0x462500(0x175)][_0x462500(0x1ab)][_0x462500(0x17a)](this,_0x4b7096,_0x5af21d),_0x11b348!==this[_0x462500(0x2ee)](_0x4b7096)&&(VisuMZ['QTE_TriggerSys'][_0x462500(0x1b7)](_0x4b7096),$gameSystem['hasOnTriggerPromise'](_0x462500(0x311),_0x4b7096)&&$gameSystem[_0x462500(0x2c7)]('switches',_0x4b7096));},VisuMZ[_0xe4bd4(0x175)]['Game_Variables_setValue']=Game_Variables[_0xe4bd4(0x343)][_0xe4bd4(0x2b4)],Game_Variables[_0xe4bd4(0x343)][_0xe4bd4(0x2b4)]=function(_0x58c46e,_0x5564e0){const _0x5bcf5e=_0xe4bd4,_0x248fd5=this[_0x5bcf5e(0x2ee)](_0x58c46e);VisuMZ[_0x5bcf5e(0x175)]['Game_Variables_setValue'][_0x5bcf5e(0x17a)](this,_0x58c46e,_0x5564e0),_0x248fd5!==this[_0x5bcf5e(0x2ee)](_0x58c46e)&&(VisuMZ['QTE_TriggerSys'][_0x5bcf5e(0x260)](_0x58c46e),$gameSystem[_0x5bcf5e(0x219)](_0x5bcf5e(0x1da),_0x58c46e)&&$gameSystem['fulfillOnTriggerPromises'](_0x5bcf5e(0x1da),_0x58c46e));},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x28f)]=Game_Party[_0xe4bd4(0x343)][_0xe4bd4(0x330)],Game_Party[_0xe4bd4(0x343)][_0xe4bd4(0x330)]=function(_0x31ac10,_0x2bdda3,_0x5463e4){const _0x21827b=_0xe4bd4,_0x26d805=_0x31ac10?this['numItems'](_0x31ac10):0x0;VisuMZ['QTE_TriggerSys'][_0x21827b(0x28f)]['call'](this,_0x31ac10,_0x2bdda3,_0x5463e4),_0x31ac10&&_0x26d805!==this[_0x21827b(0x2b9)](_0x31ac10)&&(DataManager['hasOnChangeCommonEventTrigger'](_0x31ac10)&&VisuMZ['QTE_TriggerSys'][_0x21827b(0x182)](_0x31ac10),$gameSystem[_0x21827b(0x296)](_0x31ac10)&&$gameSystem[_0x21827b(0x167)](_0x31ac10));},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x306)]=Game_Map['prototype'][_0xe4bd4(0x2ff)],Game_Map[_0xe4bd4(0x343)][_0xe4bd4(0x2ff)]=function(_0xdcc983){const _0xd247a9=_0xe4bd4;VisuMZ['QTE_TriggerSys']['Game_Map_setup'][_0xd247a9(0x17a)](this,_0xdcc983),this[_0xd247a9(0x14b)]();},Game_Map['prototype']['setupGameOverCommonEvent']=function(){const _0x100f6c=_0xe4bd4;this[_0x100f6c(0x214)]=0x0;const _0x186d0a=VisuMZ[_0x100f6c(0x175)][_0x100f6c(0x2ed)],_0x5d436b=$dataMap?$dataMap[_0x100f6c(0x20c)]||'':'';_0x5d436b['match'](_0x186d0a[_0x100f6c(0x218)])&&(this[_0x100f6c(0x214)]=Number(RegExp['$1']));},Game_Map['prototype']['getGameOverCommonEventID']=function(){const _0x288dc0=_0xe4bd4;if(this['_mapGameOverCommonEventID']===undefined)this[_0x288dc0(0x14b)]();return this[_0x288dc0(0x214)];},Game_Player[_0xe4bd4(0x343)][_0xe4bd4(0x2df)]=function(){const _0x47445f=_0xe4bd4;if(BattleManager[_0x47445f(0x18e)]())return 0x0;if($gameTroop&&$gameTroop[_0x47445f(0x2df)]())return $gameTroop[_0x47445f(0x2df)]();if($gameMap&&$gameMap[_0x47445f(0x2df)]())return $gameMap[_0x47445f(0x2df)]();if($gameSystem&&$gameSystem[_0x47445f(0x2df)]())return $gameSystem[_0x47445f(0x2df)]();return 0x0;},Game_Party[_0xe4bd4(0x343)][_0xe4bd4(0x206)]=function(){const _0x244b68=_0xe4bd4;if(!VisuMZ[_0x244b68(0x175)][_0x244b68(0x2e3)][_0x244b68(0x312)][_0x244b68(0x2a2)])return;for(const _0x13acd9 of this[_0x244b68(0x329)]()){_0x13acd9[_0x244b68(0x270)](0x1);}},Game_Troop['prototype'][_0xe4bd4(0x2df)]=function(){const _0x3e8bab=_0xe4bd4,_0xac4afd=VisuMZ['QTE_TriggerSys'][_0x3e8bab(0x2ed)],_0x375a32=this[_0x3e8bab(0x2d2)]()?this[_0x3e8bab(0x2d2)]()[_0x3e8bab(0x1c0)]||'':'';if(_0x375a32['match'](_0xac4afd[_0x3e8bab(0x218)]))return Number(RegExp['$1']);return 0x0;},VisuMZ[_0xe4bd4(0x175)]['Game_Interpreter_setupReservedCommonEvent']=Game_Interpreter[_0xe4bd4(0x343)][_0xe4bd4(0x285)],Game_Interpreter[_0xe4bd4(0x343)][_0xe4bd4(0x285)]=function(){const _0x16b9d3=_0xe4bd4;return $gameSystem['isOnceParallelReserved']()&&$gameSystem[_0x16b9d3(0x25e)](),VisuMZ[_0x16b9d3(0x175)]['Game_Interpreter_setupReservedCommonEvent'][_0x16b9d3(0x17a)](this);},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x341)]=Game_Interpreter[_0xe4bd4(0x343)][_0xe4bd4(0x15a)],Game_Interpreter[_0xe4bd4(0x343)][_0xe4bd4(0x15a)]=function(){const _0x3e7182=_0xe4bd4;if(this[_0x3e7182(0x237)][_0x3e7182(0x277)](/QTE/i)){if(SceneManager[_0x3e7182(0x1fa)]())return!![];else this['_waitMode']='';}return VisuMZ[_0x3e7182(0x175)]['Game_Interpreter_updateWaitMode'][_0x3e7182(0x17a)](this);},Scene_Base['prototype'][_0xe4bd4(0x152)]=function(_0x272da9){const _0x521089=_0xe4bd4,_0x4f8e38=VisuMZ[_0x521089(0x175)][_0x521089(0x2e3)][_0x521089(0x1ca)],_0x4dcc44={};_0x4dcc44['align']=_0x4f8e38['MsgTextAlign']||_0x521089(0x29a),_0x4dcc44['rectJS']=_0x4f8e38[_0x521089(0x32c)],_0x4dcc44[_0x521089(0x14f)]=_0x4f8e38[_0x521089(0x22f)]||0x0;switch(_0x272da9){case _0x521089(0x337):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38['ButtonMashTextMsg']||'';break;case _0x521089(0x1e5):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38[_0x521089(0x1e9)]||'';break;case _0x521089(0x1f5):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38[_0x521089(0x2be)]||'';break;case _0x521089(0x1be):_0x4dcc44['text']=_0x4f8e38[_0x521089(0x2d1)]||'';break;case _0x521089(0x2f5):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38['HoldReleaseTextMsg']||'';break;case _0x521089(0x160):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38[_0x521089(0x216)]||'';break;case'swapper':_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38[_0x521089(0x281)]||'';break;case _0x521089(0x1e4):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38[_0x521089(0x1d8)]||'';break;case _0x521089(0x22c):_0x4dcc44['text']=_0x4f8e38[_0x521089(0x15d)]||'';break;case _0x521089(0x17d):_0x4dcc44[_0x521089(0x2ba)]=_0x4f8e38['TimingBarTextMsg']||'';break;default:return;}this['createMessageWindowForQTE'](_0x272da9,_0x4dcc44),this[_0x521089(0x1cc)](_0x272da9),this[_0x521089(0x1eb)](_0x272da9),this[_0x521089(0x32e)]();},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x307)]=function(_0x443ab4,_0x1cda8e){const _0x335ae7=_0xe4bd4;this[_0x335ae7(0x2f8)]=_0x1cda8e;const _0x4f1589=_0x1cda8e[_0x335ae7(0x279)][_0x335ae7(0x17a)](this);let _0x62c92e=null;switch(_0x443ab4){case _0x335ae7(0x337):case'directionStruggle':case _0x335ae7(0x1be):case _0x335ae7(0x2f5):case _0x335ae7(0x160):case _0x335ae7(0x1a9):case _0x335ae7(0x1e4):if(_0x1cda8e['text']==='')return;_0x62c92e=new Window_Help(_0x4f1589);break;case _0x335ae7(0x1e5):_0x62c92e=new Window_QTE_ButtonSequence(_0x4f1589);break;case'timedSequence':_0x62c92e=new Window_QTE_TimedSequence(_0x4f1589);break;case _0x335ae7(0x17d):_0x62c92e=new Window_QTE_TimingBar(_0x4f1589);break;default:return;}_0x62c92e[_0x335ae7(0x201)](_0x1cda8e[_0x335ae7(0x14f)]),this[_0x335ae7(0x1a5)](_0x62c92e),this[_0x335ae7(0x200)]=_0x62c92e;},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x32e)]=function(){const _0x30495f=_0xe4bd4,_0x1d4fbc=this[_0x30495f(0x2f8)];let _0x39a6c1=_0x1d4fbc[_0x30495f(0x2ba)];_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<UP BUTTON>/gi,TextManager[_0x30495f(0x14c)]('up')),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<DOWN BUTTON>/gi,TextManager[_0x30495f(0x14c)](_0x30495f(0x2ca))),_0x39a6c1=_0x39a6c1['replace'](/<LEFT BUTTON>/gi,TextManager[_0x30495f(0x14c)](_0x30495f(0x264))),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<RIGHT BUTTON>/gi,TextManager[_0x30495f(0x14c)](_0x30495f(0x1b8))),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<OK BUTTON>/gi,TextManager['getInputButtonString']('ok')),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<CANCEL BUTTON>/gi,TextManager[_0x30495f(0x14c)](_0x30495f(0x1a7))),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<SHIFT BUTTON>/gi,TextManager[_0x30495f(0x14c)]('shift')),_0x39a6c1=_0x39a6c1['replace'](/<MENU BUTTON>/gi,TextManager['getInputButtonString']('menu')),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<PAGE UP BUTTON>/gi,TextManager[_0x30495f(0x14c)](_0x30495f(0x228))),_0x39a6c1=_0x39a6c1[_0x30495f(0x18b)](/<PAGE DOWN BUTTON>/gi,TextManager[_0x30495f(0x14c)]('pagedown')),this[_0x30495f(0x284)]=Input[_0x30495f(0x2cc)]();Imported['VisuMZ_1_MessageCore']&&(_0x39a6c1=_0x30495f(0x300)[_0x30495f(0x234)](_0x1d4fbc[_0x30495f(0x156)],_0x39a6c1));const _0x20796=this[_0x30495f(0x200)];if(_0x20796)_0x20796[_0x30495f(0x2cb)](_0x39a6c1);},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x1cc)]=function(_0x3eb6ba){const _0x448235=_0xe4bd4,_0x29ccf9=VisuMZ[_0x448235(0x175)][_0x448235(0x2e3)][_0x448235(0x33f)];if(!_0x29ccf9['ShowQteTimer'])return;if([_0x448235(0x2f5),'timedHit',_0x448235(0x22c)]['includes'](_0x3eb6ba))return;if(SceneManager['_qteWholeDuration']>=0xf4240)return;const _0x3c43db=_0x29ccf9[_0x448235(0x2f9)][_0x448235(0x17a)](this),_0x1c5e62=new Window_QTE_Timer(_0x3c43db);this[_0x448235(0x1a5)](_0x1c5e62),this[_0x448235(0x1f6)]=_0x1c5e62;},Scene_Base[_0xe4bd4(0x343)]['createGaugeProgressWindowForQTE']=function(_0x47c67c){const _0x4c0893=_0xe4bd4,_0x5b8543=VisuMZ['QTE_TriggerSys'][_0x4c0893(0x2e3)][_0x4c0893(0x33f)];if(!_0x5b8543['ShowQteProgress']&&![_0x4c0893(0x2f5)][_0x4c0893(0x298)](_0x47c67c))return;if(!SceneManager[_0x4c0893(0x2f8)][_0x4c0893(0x157)])return;const _0x5c9a75=_0x5b8543[_0x4c0893(0x1c7)][_0x4c0893(0x17a)](this),_0x3038e9=new Window_QTE_Progress(_0x5c9a75);this[_0x4c0893(0x1a5)](_0x3038e9),this[_0x4c0893(0x27f)]=_0x3038e9;},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x1a0)]=function(){const _0x1bc9d7=_0xe4bd4,_0x2c6cc0=new Sprite_QTE_TimedHit();this[_0x1bc9d7(0x1a5)](_0x2c6cc0),this[_0x1bc9d7(0x2e1)]=_0x2c6cc0;},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x17e)]=Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x1e6)],Scene_Base[_0xe4bd4(0x343)]['update']=function(){const _0x257132=_0xe4bd4;this[_0x257132(0x17c)](),VisuMZ[_0x257132(0x175)]['Scene_Base_update'][_0x257132(0x17a)](this),this['updateQteDuration'](),this[_0x257132(0x30a)]();},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x17c)]=function(){const _0x4552e8=_0xe4bd4;if(!this[_0x4552e8(0x200)])return;this['_lastQteInputType']!==Input[_0x4552e8(0x2cc)]()&&this['updateQteWindowText'](),!SceneManager[_0x4552e8(0x1fa)]()&&this['removeQteWindow']();},Scene_Base[_0xe4bd4(0x343)]['removeQteWindow']=function(){const _0x2718e7=_0xe4bd4;if(!this[_0x2718e7(0x200)])return;this[_0x2718e7(0x2eb)](this[_0x2718e7(0x200)]),this[_0x2718e7(0x200)]=undefined;},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x28c)]=function(){const _0x11e71e=_0xe4bd4;if(!SceneManager['isPlayingQTE']())return;SceneManager[_0x11e71e(0x194)]();},Scene_Base[_0xe4bd4(0x343)][_0xe4bd4(0x30a)]=function(){const _0x596e2e=_0xe4bd4;if(SceneManager[_0x596e2e(0x1fa)]())return;this[_0x596e2e(0x1f6)]&&(this[_0x596e2e(0x2eb)](this[_0x596e2e(0x1f6)]),this[_0x596e2e(0x1f6)]=undefined),this[_0x596e2e(0x27f)]&&(this[_0x596e2e(0x2eb)](this[_0x596e2e(0x27f)]),this[_0x596e2e(0x27f)]=undefined),this[_0x596e2e(0x2e1)]&&(this['_qteTimedHitSprite'][_0x596e2e(0x191)](),this[_0x596e2e(0x2e1)]=undefined);},VisuMZ['QTE_TriggerSys']['Scene_Map_start']=Scene_Map[_0xe4bd4(0x343)]['start'],Scene_Map[_0xe4bd4(0x343)][_0xe4bd4(0x15c)]=function(){const _0x5e7dc3=_0xe4bd4;VisuMZ[_0x5e7dc3(0x175)][_0x5e7dc3(0x339)][_0x5e7dc3(0x17a)](this);if($gameTroop)$gameTroop[_0x5e7dc3(0x251)]();},VisuMZ[_0xe4bd4(0x175)]['Scene_Map_needsFadeIn']=Scene_Map[_0xe4bd4(0x343)]['needsFadeIn'],Scene_Map[_0xe4bd4(0x343)][_0xe4bd4(0x1e0)]=function(){const _0x4b0028=_0xe4bd4;return VisuMZ['QTE_TriggerSys'][_0x4b0028(0x28e)][_0x4b0028(0x17a)](this)||SceneManager[_0x4b0028(0x1b2)](Scene_Gameover);},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x226)]=Scene_Gameover[_0xe4bd4(0x343)]['create'],Scene_Gameover[_0xe4bd4(0x343)]['create']=function(){const _0x1fb944=_0xe4bd4;if(this[_0x1fb944(0x248)]())return;VisuMZ[_0x1fb944(0x175)][_0x1fb944(0x226)][_0x1fb944(0x17a)](this);},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x1de)]=Scene_Gameover[_0xe4bd4(0x343)][_0xe4bd4(0x15c)],Scene_Gameover[_0xe4bd4(0x343)][_0xe4bd4(0x15c)]=function(){const _0x35b41=_0xe4bd4;this[_0x35b41(0x248)]()?this[_0x35b41(0x29c)]():VisuMZ[_0x35b41(0x175)][_0x35b41(0x1de)][_0x35b41(0x17a)](this);},Scene_Gameover[_0xe4bd4(0x343)][_0xe4bd4(0x248)]=function(){const _0x3dc1b0=_0xe4bd4;return $gamePlayer&&$gamePlayer[_0x3dc1b0(0x2df)]()>0x0;},Scene_Gameover[_0xe4bd4(0x343)]['processGameOverEvent']=function(){const _0x2abcd5=_0xe4bd4;Scene_Base['prototype'][_0x2abcd5(0x15c)][_0x2abcd5(0x17a)](this);$gameParty&&$gameParty[_0x2abcd5(0x206)]();$gameMap&&$gameMap[_0x2abcd5(0x26a)][_0x2abcd5(0x251)]();SceneManager[_0x2abcd5(0x21e)](Scene_Map);const _0x42485f=$gamePlayer[_0x2abcd5(0x2df)]();$gameTemp[_0x2abcd5(0x254)](_0x42485f),$gameTroop&&$gameTroop[_0x2abcd5(0x251)](),VisuMZ[_0x2abcd5(0x175)][_0x2abcd5(0x2e3)][_0x2abcd5(0x312)][_0x2abcd5(0x1d4)]&&$gameSystem[_0x2abcd5(0x1b1)](0x0);};function _0x39e8(_0x5a252b,_0x5b0636){const _0x4b0bd1=_0x4b0b();return _0x39e8=function(_0x39e8aa,_0x2618fd){_0x39e8aa=_0x39e8aa-0x148;let _0x4c43ea=_0x4b0bd1[_0x39e8aa];return _0x4c43ea;},_0x39e8(_0x5a252b,_0x5b0636);}function Sprite_QTE_TimedHit(){const _0x157b7f=_0xe4bd4;this[_0x157b7f(0x240)](...arguments);}Sprite_QTE_TimedHit[_0xe4bd4(0x343)]=Object[_0xe4bd4(0x220)](Sprite[_0xe4bd4(0x343)]),Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x2ac)]=Sprite_QTE_TimedHit,Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(){const _0x350aed=_0xe4bd4;Sprite['prototype']['initialize'][_0x350aed(0x17a)](this),this['initMembers'](),this[_0x350aed(0x2fc)](),this[_0x350aed(0x1f0)]();},Sprite_QTE_TimedHit['prototype'][_0xe4bd4(0x1df)]=function(){const _0x2b134e=_0xe4bd4;this[_0x2b134e(0x19e)]['x']=0.5,this[_0x2b134e(0x19e)]['y']=0.5;const _0x15a58e=SceneManager['_qteSettings'];this['x']=_0x15a58e['pointX'],this['y']=_0x15a58e[_0x2b134e(0x321)],this[_0x2b134e(0x267)]=_0x15a58e['duration']||0x1,this['_wholeDuration']=_0x15a58e[_0x2b134e(0x242)]||0x1;},Sprite_QTE_TimedHit['prototype']['createBitmap']=function(){const _0x1dbcfa=_0xe4bd4,_0x309cc8=SceneManager['_qteSettings'];this[_0x1dbcfa(0x207)]=ImageManager[_0x1dbcfa(0x2f0)](_0x309cc8['picture']);},Sprite_QTE_TimedHit['prototype'][_0xe4bd4(0x1f0)]=function(){const _0x5521f8=_0xe4bd4,_0x1d82bd=VisuMZ[_0x5521f8(0x175)]['Settings'][_0x5521f8(0x33f)],_0x36d3bc=new Sprite(),_0x48a055=SceneManager['_qteSettings']['picture'];_0x36d3bc['bitmap']=ImageManager['loadPicture'](_0x48a055),_0x36d3bc[_0x5521f8(0x2e7)]=_0x1d82bd[_0x5521f8(0x168)]??0x80,_0x36d3bc[_0x5521f8(0x19e)]['x']=0.5,_0x36d3bc[_0x5521f8(0x19e)]['y']=0.5,_0x36d3bc[_0x5521f8(0x2ae)]['x']=_0x1d82bd[_0x5521f8(0x19a)]??0x4,_0x36d3bc[_0x5521f8(0x2ae)]['y']=_0x1d82bd[_0x5521f8(0x19a)]??0x4,this['addChild'](_0x36d3bc),this['_overlaySprite']=_0x36d3bc;},Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x1e6)]=function(){const _0x5d661d=_0xe4bd4;Sprite['prototype'][_0x5d661d(0x1e6)][_0x5d661d(0x17a)](this);if(this[_0x5d661d(0x1a2)]())this[_0x5d661d(0x32d)](),this[_0x5d661d(0x1ac)]();else(SceneManager[_0x5d661d(0x338)]()||this[_0x5d661d(0x1e1)])&&this[_0x5d661d(0x2b0)]();},Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x1a2)]=function(){const _0x4fa223=_0xe4bd4;if(!this['parent'])return![];if(SceneManager[_0x4fa223(0x247)]>0x0)return![];if(this[_0x4fa223(0x2b5)])return![];return!![];},Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x32d)]=function(){const _0x4f75d1=_0xe4bd4;if(this['_duration']<=0x0)return;const _0x5e49bb=this['_overlaySprite'],_0x2a2e3b=this['_duration'];_0x5e49bb[_0x4f75d1(0x2ae)]['x']=(_0x5e49bb[_0x4f75d1(0x2ae)]['x']*(_0x2a2e3b-0x1)+0x1)/_0x2a2e3b,_0x5e49bb[_0x4f75d1(0x2ae)]['y']=(_0x5e49bb[_0x4f75d1(0x2ae)]['y']*(_0x2a2e3b-0x1)+0x1)/_0x2a2e3b,this['_duration']--,this['_duration']<=0x0&&(_0x5e49bb['opacity']=0x0,_0x5e49bb[_0x4f75d1(0x2ae)]['x']=0x1,_0x5e49bb[_0x4f75d1(0x2ae)]['y']=0x1);},Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x1ac)]=function(){const _0x42ea00=_0xe4bd4;if(!SceneManager['isEarlyFinishQTE']())return;this[_0x42ea00(0x2b5)]=!![];},Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x2b0)]=function(){const _0x581d5e=_0xe4bd4,_0x2cb704=VisuMZ[_0x581d5e(0x175)][_0x581d5e(0x2e3)][_0x581d5e(0x33f)],_0x31d05f=Math[_0x581d5e(0x154)](_0x2cb704[_0x581d5e(0x195)]/0x2),_0xf6cbc2=Math[_0x581d5e(0x154)](0xff/_0x31d05f);this[_0x581d5e(0x2e7)]-=_0xf6cbc2,this[_0x581d5e(0x2e7)]<=0x0&&this[_0x581d5e(0x15f)]&&this[_0x581d5e(0x15f)][_0x581d5e(0x2eb)](this);},Sprite_QTE_TimedHit[_0xe4bd4(0x343)][_0xe4bd4(0x191)]=function(){const _0x2aa3ab=_0xe4bd4;this[_0x2aa3ab(0x2b5)]=!![],this[_0x2aa3ab(0x1e1)]=!![];};function Sprite_QTE_TimedSequence(){const _0x1abcdb=_0xe4bd4;this[_0x1abcdb(0x240)](...arguments);}Sprite_QTE_TimedSequence[_0xe4bd4(0x343)]=Object[_0xe4bd4(0x220)](Sprite['prototype']),Sprite_QTE_TimedSequence[_0xe4bd4(0x343)]['constructor']=Sprite_QTE_TimedSequence,Sprite_QTE_TimedSequence['prototype'][_0xe4bd4(0x240)]=function(_0x2182ed){const _0x1686c4=_0xe4bd4;Sprite[_0x1686c4(0x343)][_0x1686c4(0x240)][_0x1686c4(0x17a)](this),this[_0x1686c4(0x1ce)]=_0x2182ed,this['initMembers'](),this[_0x1686c4(0x325)](),this[_0x1686c4(0x2e9)]();},Sprite_QTE_TimedSequence['prototype']['initMembers']=function(){const _0x5e04b1=_0xe4bd4;this[_0x5e04b1(0x19e)]['x']=0.5,this['anchor']['y']=0.5,this['_position']=this['_data']['Timing']||0x1,this[_0x5e04b1(0x197)]=SceneManager[_0x5e04b1(0x2f8)][_0x5e04b1(0x2c0)]||'left',this['x']=this[_0x5e04b1(0x1ce)][_0x5e04b1(0x28d)]+(this[_0x5e04b1(0x197)]==='left'?this['_position']:-this[_0x5e04b1(0x233)]),this['y']=this[_0x5e04b1(0x1ce)]['_baseY'],this[_0x5e04b1(0x284)]=Input[_0x5e04b1(0x2cc)](),this['_leeway']=$gameParty[_0x5e04b1(0x2e4)]()?0x0:-0x2;},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x325)]=function(){const _0x196502=_0xe4bd4,_0x505e85=new Rectangle(0x0,0x0,0x12c,Window_Base['prototype'][_0x196502(0x23a)]());_0x505e85[_0x196502(0x16e)]+=$gameSystem[_0x196502(0x1a6)]()*0x2,_0x505e85[_0x196502(0x28b)]+=$gameSystem[_0x196502(0x1a6)]()*0x2,this[_0x196502(0x1c4)]=new Window_Base(_0x505e85);},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x2e9)]=function(){const _0x41833f=_0xe4bd4;this[_0x41833f(0x284)]=Input[_0x41833f(0x2cc)]();const _0x14710c=this['_data'][_0x41833f(0x31e)]||'ok',_0x54b669=TextManager[_0x41833f(0x14c)](_0x14710c),_0x43cdaf=this['_dummyWindow'][_0x41833f(0x15e)](_0x54b669)[_0x41833f(0x16e)],_0x35bbe6=Math[_0x41833f(0x304)]((this['_dummyWindow'][_0x41833f(0x1cf)]-_0x43cdaf)/0x2);this[_0x41833f(0x1c4)][_0x41833f(0x173)][_0x41833f(0x251)](),this['_dummyWindow'][_0x41833f(0x1db)](_0x54b669,_0x35bbe6,0x0),this['bitmap']=this[_0x41833f(0x1c4)]['contents'];},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x2e5)]=function(){const _0x2de05f=_0xe4bd4;return this[_0x2de05f(0x284)]!==Input['getLastUsedGamepadType']();},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x1e6)]=function(){const _0x36e692=_0xe4bd4;Sprite[_0x36e692(0x343)]['update']['call'](this);if(this['needsRefresh']())this['refreshBitmap']();if(this[_0x36e692(0x1a2)]())this['updatePosition']();else(SceneManager[_0x36e692(0x338)]()||this['_finishing'])&&this[_0x36e692(0x2b0)]();},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x1a2)]=function(){const _0x1f637b=_0xe4bd4;if(!this['parent'])return![];if(SceneManager[_0x1f637b(0x247)]>0x0)return![];if(this[_0x1f637b(0x2b5)])return![];return!![];},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x2d8)]=function(){const _0x418cd5=_0xe4bd4,_0x47d2d3=this[_0x418cd5(0x25f)];if(this[_0x418cd5(0x233)]<=_0x47d2d3)return;const _0x360d40=Math[_0x418cd5(0x24e)](0x0,this['_position']);this['x']=this[_0x418cd5(0x1ce)][_0x418cd5(0x28d)]+(this[_0x418cd5(0x197)]==='left'?_0x360d40:-_0x360d40),this[_0x418cd5(0x233)]--,this[_0x418cd5(0x233)]<=this[_0x418cd5(0x25f)]&&this[_0x418cd5(0x191)]();},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)]['updateEarlyFinish']=function(){const _0x4afb3b=_0xe4bd4,_0x45cef4=VisuMZ[_0x4afb3b(0x175)][_0x4afb3b(0x2e3)]['QTE'],_0x2580d0=Math[_0x4afb3b(0x154)](_0x45cef4[_0x4afb3b(0x195)]/0x2),_0x8e6646=Math['ceil'](0xff/_0x2580d0);this[_0x4afb3b(0x2e7)]-=_0x8e6646,this[_0x4afb3b(0x2e7)]<=0x0&&this[_0x4afb3b(0x15f)]&&this[_0x4afb3b(0x15f)][_0x4afb3b(0x2eb)](this);},Sprite_QTE_TimedSequence[_0xe4bd4(0x343)]['startFinishing']=function(){const _0x69037e=_0xe4bd4;this[_0x69037e(0x2b5)]=!![],this['_finishing']=!![];const _0x2db1e7=SceneManager[_0x69037e(0x2f8)],_0x397dc8=_0x2db1e7['remainingSequence'],_0x19cf72=_0x397dc8['find'](_0x984055=>_0x984055[_0x69037e(0x1b3)]===this['_data'][_0x69037e(0x1b3)]&&_0x984055[_0x69037e(0x31e)]===this[_0x69037e(0x1ce)][_0x69037e(0x31e)]);if(_0x19cf72){_0x397dc8[_0x69037e(0x186)](_0x19cf72);const _0x33a9a7=_0x2db1e7['missSound'];_0x33a9a7&&_0x33a9a7['name']&&AudioManager[_0x69037e(0x21c)](_0x33a9a7);const _0x376cd5=_0x2db1e7[_0x69037e(0x324)]||0x0;if(_0x376cd5>0x0){const _0x3f1be9=$gameTemp[_0x69037e(0x1cd)]();$onceParallel(_0x376cd5,_0x3f1be9?_0x3f1be9[_0x69037e(0x236)]:0x0);}}};function Sprite_QTE_TimingBarCursor(){const _0x5907cb=_0xe4bd4;this[_0x5907cb(0x240)](...arguments);}Sprite_QTE_TimingBarCursor['prototype']=Object[_0xe4bd4(0x220)](Sprite['prototype']),Sprite_QTE_TimingBarCursor['prototype'][_0xe4bd4(0x2ac)]=Sprite_QTE_TimingBarCursor,Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(){const _0x15e791=_0xe4bd4;Sprite[_0x15e791(0x343)][_0x15e791(0x240)][_0x15e791(0x17a)](this),this['initMembers'](),this[_0x15e791(0x2fc)](),this['opacity']=0x0;},Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)]['initMembers']=function(){const _0x12dd1e=_0xe4bd4;this[_0x12dd1e(0x19e)]['x']=0.5,this[_0x12dd1e(0x19e)]['y']=0x1,this[_0x12dd1e(0x2de)]=SceneManager[_0x12dd1e(0x2f8)][_0x12dd1e(0x232)]||0x1,this[_0x12dd1e(0x233)]=0x0,this[_0x12dd1e(0x197)]=0x1;},Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)][_0xe4bd4(0x2fc)]=function(){const _0x4a1263=_0xe4bd4;this[_0x4a1263(0x207)]=ImageManager[_0x4a1263(0x292)](_0x4a1263(0x19b)),this['_iconIndex']=SceneManager['_qteSettings'][_0x4a1263(0x30d)]||0x0,this[_0x4a1263(0x210)]();},Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)][_0xe4bd4(0x210)]=function(){const _0x3956e4=_0xe4bd4,_0x291b7b=ImageManager[_0x3956e4(0x2aa)],_0x3e19a4=ImageManager['iconHeight'],_0x19a612=this[_0x3956e4(0x2e8)]%0x10*_0x291b7b,_0x16f795=Math[_0x3956e4(0x304)](this[_0x3956e4(0x2e8)]/0x10)*_0x3e19a4;this['setFrame'](_0x19a612,_0x16f795,_0x291b7b,_0x3e19a4);},Sprite_QTE_TimingBarCursor['prototype'][_0xe4bd4(0x1e6)]=function(){const _0x2e5dc5=_0xe4bd4;Sprite[_0x2e5dc5(0x343)][_0x2e5dc5(0x1e6)][_0x2e5dc5(0x17a)](this);if(!this[_0x2e5dc5(0x1a2)]())return;this[_0x2e5dc5(0x2e7)]=0xff,this[_0x2e5dc5(0x32f)](),this['updatePosition']();},Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)][_0xe4bd4(0x1a2)]=function(){const _0x5a66de=_0xe4bd4;if(!this[_0x5a66de(0x15f)])return![];if(SceneManager[_0x5a66de(0x247)]>0x0)return![];if(this[_0x5a66de(0x25a)])return![];return!![];},Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)][_0xe4bd4(0x32f)]=function(){const _0x22e143=_0xe4bd4,_0xe7670e=VisuMZ['QTE_TriggerSys'][_0x22e143(0x2e3)][_0x22e143(0x33f)],_0x150861=_0xe7670e[_0x22e143(0x288)]||0x64;this['_position']+=this[_0x22e143(0x2de)]*this['_direction'];if(this[_0x22e143(0x233)]<0x0)this['_position']=0x0,this[_0x22e143(0x197)]=0x1;else this['_position']>_0x150861&&(this[_0x22e143(0x233)]=_0x150861,this[_0x22e143(0x197)]=-0x1);},Sprite_QTE_TimingBarCursor['prototype']['updatePosition']=function(){const _0x4be914=_0xe4bd4,_0x4165df=VisuMZ['QTE_TriggerSys']['Settings']['QTE'],_0xea2a94=_0x4165df['QteTimingBarWidth']||0x64,_0xb25d5b=0xc,_0xce0352=Math[_0x4be914(0x304)]((this[_0x4be914(0x15f)][_0x4be914(0x1cf)]-_0xea2a94)/0x2)+this['parent'][_0x4be914(0x297)],_0x41d157=this['parent'][_0x4be914(0x23a)]()-_0xb25d5b-0x2+this[_0x4be914(0x15f)][_0x4be914(0x297)],_0x3eb8ae=_0x4165df[_0x4be914(0x1aa)]||0x0,_0x14a274=_0x4165df['TimingBarCursorOffsetY']||0x0;this['x']=_0xce0352+this['_position']+_0x3eb8ae,this['y']=_0x41d157+_0x14a274;},Sprite_QTE_TimingBarCursor['prototype'][_0xe4bd4(0x1b4)]=function(){const _0x34e774=_0xe4bd4;this[_0x34e774(0x25a)]=!![];},Sprite_QTE_TimingBarCursor[_0xe4bd4(0x343)][_0xe4bd4(0x1e2)]=function(){const _0x3b8f61=_0xe4bd4,_0x103b3d=VisuMZ[_0x3b8f61(0x175)][_0x3b8f61(0x2e3)][_0x3b8f61(0x33f)],_0x1ea937=_0x103b3d[_0x3b8f61(0x288)]||0x64,_0x58b370=Math[_0x3b8f61(0x18a)](this['_position']/_0x1ea937*0x64);return _0x58b370;};function Window_QTE_GaugeBase(){const _0x16fdb4=_0xe4bd4;this[_0x16fdb4(0x240)](...arguments);}Window_QTE_GaugeBase['prototype']=Object[_0xe4bd4(0x220)](Window_Base[_0xe4bd4(0x343)]),Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x2ac)]=Window_QTE_GaugeBase,Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(_0x32d7be){const _0x20a62f=_0xe4bd4;this[_0x20a62f(0x271)](),Window_Base[_0x20a62f(0x343)][_0x20a62f(0x240)]['call'](this,_0x32d7be),this[_0x20a62f(0x201)](0x2),this[_0x20a62f(0x316)]();},Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x271)]=function(){},Window_QTE_GaugeBase['prototype']['update']=function(){const _0x13b0b9=_0xe4bd4;Window_Base[_0x13b0b9(0x343)][_0x13b0b9(0x1e6)][_0x13b0b9(0x17a)](this),this['needsRefresh']()&&(this['cacheData'](),this[_0x13b0b9(0x316)]()),this['updateEarlyFinish']();},Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x2e5)]=function(){return![];},Window_QTE_GaugeBase[_0xe4bd4(0x343)]['gaugeColor1']=function(){const _0x1cef28=_0xe4bd4;return ColorManager[_0x1cef28(0x20a)]();},Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x198)]=function(){const _0x3b5ec1=_0xe4bd4;return ColorManager[_0x3b5ec1(0x1f7)]();},Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x2c1)]=function(){const _0x58cf5b=_0xe4bd4;return _0x58cf5b(0x235);},Window_QTE_GaugeBase['prototype']['gaugeCurrentValue']=function(){return 0x0;},Window_QTE_GaugeBase[_0xe4bd4(0x343)]['gaugeMaxValue']=function(){return 0x1;},Window_QTE_GaugeBase[_0xe4bd4(0x343)]['refresh']=function(){const _0x5241c4=_0xe4bd4;this[_0x5241c4(0x173)][_0x5241c4(0x251)]();const _0x63bffe=this['gaugeColor1'](),_0x4320ed=this['gaugeColor2'](),_0x24f466=this[_0x5241c4(0x2c1)](),_0x459356=this[_0x5241c4(0x1cf)],_0x2414db=0x0,_0x504bc9=0x0,_0x4759f5=this[_0x5241c4(0x2b1)](),_0x523a26=this[_0x5241c4(0x332)](),_0x3036fa=(_0x4759f5/_0x523a26)['clamp'](0x0,0x1);if(_0x523a26===0x0)return;if(Imported[_0x5241c4(0x2fa)]){const _0x474d94=(VisuMZ[_0x5241c4(0x33b)][_0x5241c4(0x193)](_0x24f466)??0xc)[_0x5241c4(0x1ba)](0x1,0x20),_0x1739fd=_0x504bc9+this['lineHeight']()-_0x474d94-0x2,_0x5e607f=ColorManager[_0x5241c4(0x244)]();VisuMZ[_0x5241c4(0x33b)][_0x5241c4(0x245)]=this['gaugeMaxValue'](),this['contents'][_0x5241c4(0x1d9)](_0x24f466,_0x2414db,_0x1739fd,_0x459356,_0x474d94,_0x3036fa,_0x5e607f,_0x63bffe,_0x4320ed);}else this[_0x5241c4(0x1cb)](_0x2414db,_0x504bc9,_0x459356,_0x3036fa,_0x63bffe,_0x4320ed);},Window_QTE_GaugeBase[_0xe4bd4(0x343)][_0xe4bd4(0x2b0)]=function(){const _0x2461b5=_0xe4bd4;if(!SceneManager[_0x2461b5(0x338)]())return;const _0x2591bc=VisuMZ[_0x2461b5(0x175)][_0x2461b5(0x2e3)][_0x2461b5(0x33f)],_0x21d6ee=Math[_0x2461b5(0x154)](_0x2591bc[_0x2461b5(0x195)]/0x2);if(SceneManager[_0x2461b5(0x315)]>_0x21d6ee)return;const _0x48de66=Math[_0x2461b5(0x154)](0xff/_0x21d6ee);this[_0x2461b5(0x274)]-=_0x48de66;};function Window_QTE_Timer(){const _0x53feeb=_0xe4bd4;this[_0x53feeb(0x240)](...arguments);}Window_QTE_Timer[_0xe4bd4(0x343)]=Object[_0xe4bd4(0x220)](Window_QTE_GaugeBase[_0xe4bd4(0x343)]),Window_QTE_Timer[_0xe4bd4(0x343)][_0xe4bd4(0x2ac)]=Window_QTE_Timer,Window_QTE_Timer[_0xe4bd4(0x343)]['initialize']=function(_0x40ce9c){const _0x174781=_0xe4bd4;Window_QTE_GaugeBase['prototype'][_0x174781(0x240)]['call'](this,_0x40ce9c);},Window_QTE_Timer['prototype'][_0xe4bd4(0x271)]=function(){const _0x29f361=_0xe4bd4;this[_0x29f361(0x26e)]=SceneManager[_0x29f361(0x174)],this[_0x29f361(0x1c9)]=SceneManager[_0x29f361(0x249)];},Window_QTE_Timer['prototype'][_0xe4bd4(0x2e5)]=function(){const _0x380924=_0xe4bd4;if(this[_0x380924(0x26e)]!==SceneManager['_qteDuration'])return!![];if(this[_0x380924(0x1c9)]!==SceneManager[_0x380924(0x249)])return!![];return![];},Window_QTE_Timer['prototype']['gaugeColor1']=function(){const _0x128611=_0xe4bd4,_0x253b1e=VisuMZ[_0x128611(0x175)][_0x128611(0x2e3)][_0x128611(0x33f)];return ColorManager[_0x128611(0x1bc)](_0x253b1e[_0x128611(0x291)]);},Window_QTE_Timer[_0xe4bd4(0x343)][_0xe4bd4(0x198)]=function(){const _0x7157aa=_0xe4bd4,_0x35f07f=VisuMZ[_0x7157aa(0x175)][_0x7157aa(0x2e3)]['QTE'];return ColorManager[_0x7157aa(0x1bc)](_0x35f07f[_0x7157aa(0x2d5)]);},Window_QTE_Timer['prototype'][_0xe4bd4(0x2c1)]=function(){const _0x323b24=_0xe4bd4,_0xc81fa8=VisuMZ[_0x323b24(0x175)][_0x323b24(0x2e3)][_0x323b24(0x33f)];return _0xc81fa8['qteTimerGaugeStyleType'];},Window_QTE_Timer[_0xe4bd4(0x343)]['gaugeCurrentValue']=function(){const _0x427acd=_0xe4bd4;return this[_0x427acd(0x26e)]||0x0;},Window_QTE_Timer['prototype'][_0xe4bd4(0x332)]=function(){const _0x534e20=_0xe4bd4;return this[_0x534e20(0x1c9)]||0x0;};function Window_QTE_Progress(){const _0x437c67=_0xe4bd4;this[_0x437c67(0x240)](...arguments);}Window_QTE_Progress[_0xe4bd4(0x343)]=Object['create'](Window_QTE_GaugeBase['prototype']),Window_QTE_Progress[_0xe4bd4(0x343)][_0xe4bd4(0x2ac)]=Window_QTE_Progress,Window_QTE_Progress[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(_0x44942b){const _0x473c8d=_0xe4bd4;Window_QTE_GaugeBase[_0x473c8d(0x343)]['initialize'][_0x473c8d(0x17a)](this,_0x44942b);},Window_QTE_Progress[_0xe4bd4(0x343)]['cacheData']=function(){const _0x4e37fa=_0xe4bd4;this['_lastProgress']=SceneManager[_0x4e37fa(0x2f8)][_0x4e37fa(0x303)],this['_lastGoal']=SceneManager[_0x4e37fa(0x2f8)][_0x4e37fa(0x157)];},Window_QTE_Progress['prototype']['needsRefresh']=function(){const _0xf090ca=_0xe4bd4;if(this['_lastProgress']!==SceneManager['_qteSettings'][_0xf090ca(0x303)])return!![];if(this['_lastGoal']!==SceneManager[_0xf090ca(0x2f8)][_0xf090ca(0x157)])return!![];return![];},Window_QTE_Progress[_0xe4bd4(0x343)]['gaugeColor1']=function(){const _0x374d30=_0xe4bd4,_0x4b0b9d=VisuMZ[_0x374d30(0x175)][_0x374d30(0x2e3)][_0x374d30(0x33f)];return ColorManager['getColor'](_0x4b0b9d[_0x374d30(0x1ec)]);},Window_QTE_Progress[_0xe4bd4(0x343)][_0xe4bd4(0x198)]=function(){const _0x59b6d3=_0xe4bd4,_0xd20fea=VisuMZ['QTE_TriggerSys']['Settings'][_0x59b6d3(0x33f)];return ColorManager[_0x59b6d3(0x1bc)](_0xd20fea[_0x59b6d3(0x2b7)]);},Window_QTE_Progress[_0xe4bd4(0x343)][_0xe4bd4(0x2c1)]=function(){const _0x8e30a=_0xe4bd4,_0x45f4fe=VisuMZ[_0x8e30a(0x175)][_0x8e30a(0x2e3)][_0x8e30a(0x33f)];return _0x45f4fe[_0x8e30a(0x33a)];},Window_QTE_Progress[_0xe4bd4(0x343)]['gaugeCurrentValue']=function(){const _0x1c9b82=_0xe4bd4;return this[_0x1c9b82(0x1ee)]||0x0;},Window_QTE_Progress[_0xe4bd4(0x343)][_0xe4bd4(0x332)]=function(){const _0x560700=_0xe4bd4;return this[_0x560700(0x290)]||0x0;};function Window_QTE_HelpBase(){const _0x59029d=_0xe4bd4;this[_0x59029d(0x240)](...arguments);}Window_QTE_HelpBase[_0xe4bd4(0x343)]=Object['create'](Window_Help[_0xe4bd4(0x343)]),Window_QTE_HelpBase['prototype'][_0xe4bd4(0x2ac)]=Window_QTE_HelpBase,Window_QTE_HelpBase[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(_0x5cf3bd){const _0x55eb93=_0xe4bd4;this[_0x55eb93(0x271)](),Window_Help[_0x55eb93(0x343)][_0x55eb93(0x240)][_0x55eb93(0x17a)](this,_0x5cf3bd);},Window_QTE_HelpBase[_0xe4bd4(0x343)][_0xe4bd4(0x271)]=function(){const _0x3d4635=_0xe4bd4;this[_0x3d4635(0x1ee)]=this[_0x3d4635(0x19d)](),this[_0x3d4635(0x284)]=Input[_0x3d4635(0x2cc)]();},Window_QTE_HelpBase['prototype'][_0xe4bd4(0x1e6)]=function(){const _0x49f07c=_0xe4bd4;Window_Help[_0x49f07c(0x343)][_0x49f07c(0x1e6)][_0x49f07c(0x17a)](this),this[_0x49f07c(0x2e5)]()&&(this[_0x49f07c(0x271)](),this[_0x49f07c(0x316)]());},Window_QTE_HelpBase[_0xe4bd4(0x343)][_0xe4bd4(0x2e5)]=function(){const _0x551a47=_0xe4bd4;return this[_0x551a47(0x284)]!==Input[_0x551a47(0x2cc)]();},Window_QTE_HelpBase['prototype']['refresh']=function(){const _0x44d852=_0xe4bd4;this['contents'][_0x44d852(0x251)](),this[_0x44d852(0x25b)](),this[_0x44d852(0x16f)](),this['changePaintOpacity'](!![]);const _0xbd0b56=this[_0x44d852(0x2da)]();this[_0x44d852(0x1db)](this[_0x44d852(0x334)],_0xbd0b56['x'],_0xbd0b56['y']+this[_0x44d852(0x23a)](),_0xbd0b56['width']);},Window_QTE_HelpBase[_0xe4bd4(0x343)]['buttonProgress']=function(){const _0x37566a=_0xe4bd4;return SceneManager[_0x37566a(0x2f8)][_0x37566a(0x303)]||0x0;},Window_QTE_HelpBase[_0xe4bd4(0x343)][_0xe4bd4(0x25b)]=function(){};function Window_QTE_ButtonSequence(){this['initialize'](...arguments);}Window_QTE_ButtonSequence[_0xe4bd4(0x343)]=Object['create'](Window_QTE_HelpBase[_0xe4bd4(0x343)]),Window_QTE_ButtonSequence['prototype']['constructor']=Window_QTE_ButtonSequence,Window_QTE_ButtonSequence['prototype'][_0xe4bd4(0x240)]=function(_0x1a9588){const _0x4f0147=_0xe4bd4;Window_QTE_HelpBase[_0x4f0147(0x343)]['initialize']['call'](this,_0x1a9588);},Window_QTE_ButtonSequence[_0xe4bd4(0x343)][_0xe4bd4(0x271)]=function(){const _0x4ef465=_0xe4bd4;Window_QTE_HelpBase['prototype'][_0x4ef465(0x271)]['call'](this),this[_0x4ef465(0x1ee)]=this['buttonProgress']();},Window_QTE_ButtonSequence[_0xe4bd4(0x343)][_0xe4bd4(0x2e5)]=function(){const _0x261bf0=_0xe4bd4;if(this[_0x261bf0(0x1ee)]!==this[_0x261bf0(0x19d)]())return!![];return Window_QTE_HelpBase[_0x261bf0(0x343)]['needsRefresh'][_0x261bf0(0x17a)](this);},Window_QTE_ButtonSequence[_0xe4bd4(0x343)][_0xe4bd4(0x25b)]=function(){const _0x3a73fb=_0xe4bd4,_0x560ed4=SceneManager[_0x3a73fb(0x2f8)][_0x3a73fb(0x1e8)][_0x3a73fb(0x2e0)](),_0x4ee33c=_0x560ed4[_0x3a73fb(0x186)]('')[_0x3a73fb(0x14a)](_0x21c529=>TextManager[_0x3a73fb(0x14c)](_0x21c529)),_0x39123f=_0x4ee33c[_0x3a73fb(0x24f)]('\x20'),_0x5f3d71=this[_0x3a73fb(0x15e)](_0x39123f)[_0x3a73fb(0x16e)],_0x2730bc=SceneManager[_0x3a73fb(0x2f8)][_0x3a73fb(0x303)];let _0x55e883=Math['floor']((this[_0x3a73fb(0x1cf)]-_0x5f3d71)/0x2);this[_0x3a73fb(0x16f)]();const _0x22a8c4=_0x4ee33c[_0x3a73fb(0x299)];for(let _0x8acca2=0x0;_0x8acca2<_0x22a8c4;_0x8acca2++){const _0x14f310=_0x4ee33c[_0x8acca2];this['changePaintOpacity'](_0x8acca2>=_0x2730bc),this[_0x3a73fb(0x1db)](_0x14f310,_0x55e883,0x0),_0x55e883+=this['textSizeEx'](_0x14f310+'\x20')['width'];}};function Window_QTE_TimedSequence(){const _0x135c8c=_0xe4bd4;this[_0x135c8c(0x240)](...arguments);}Window_QTE_TimedSequence[_0xe4bd4(0x343)]=Object[_0xe4bd4(0x220)](Window_QTE_HelpBase[_0xe4bd4(0x343)]),Window_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x2ac)]=Window_QTE_TimedSequence,Window_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(_0xbd7a10){const _0x328eba=_0xe4bd4;Window_QTE_HelpBase[_0x328eba(0x343)]['initialize']['call'](this,_0xbd7a10),this['createLandingIconSprite'](),this[_0x328eba(0x257)]();},Window_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x204)]=function(){const _0x204d72=_0xe4bd4,_0x298910=VisuMZ[_0x204d72(0x175)][_0x204d72(0x2e3)][_0x204d72(0x33f)],_0x91ed64=_0x298910['TimedSequenceLandPosition']||0x0,_0x360ed6=SceneManager[_0x204d72(0x2f8)],_0x4165d4=_0x360ed6[_0x204d72(0x169)]||0x0,_0x3b290e=_0x360ed6[_0x204d72(0x2c0)]||_0x204d72(0x264),_0x539319=new Sprite();_0x539319[_0x204d72(0x207)]=ImageManager[_0x204d72(0x292)](_0x204d72(0x19b)),_0x539319[_0x204d72(0x19e)]['x']=0.5,_0x539319[_0x204d72(0x19e)]['y']=0.5;{const _0x2e6c80=ImageManager[_0x204d72(0x2aa)],_0x4e7b33=ImageManager[_0x204d72(0x183)],_0x1fddd9=_0x4165d4%0x10*_0x2e6c80,_0x311761=Math[_0x204d72(0x304)](_0x4165d4/0x10)*_0x4e7b33;_0x539319[_0x204d72(0x2a3)](_0x1fddd9,_0x311761,_0x2e6c80,_0x4e7b33);}const _0x4fce9f=(_0x3b290e===_0x204d72(0x264)?_0x91ed64:0x64-_0x91ed64)*0.01;this['_landingPositionX']=this[_0x204d72(0x297)]+Math['round'](this[_0x204d72(0x1cf)]*_0x4fce9f),this['_landingPositionY']=this[_0x204d72(0x297)]+Math[_0x204d72(0x18a)](this['lineHeight']()/0x2),_0x539319['x']=this[_0x204d72(0x1f3)],_0x539319['y']=this[_0x204d72(0x29b)],this[_0x204d72(0x1a5)](_0x539319),this[_0x204d72(0x31f)]=_0x539319;},Window_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x257)]=function(){const _0x1893c1=_0xe4bd4,_0x5e6baa=SceneManager[_0x1893c1(0x2f8)],_0x331f60=_0x5e6baa['sequence'][_0x1893c1(0x2e0)]()[_0x1893c1(0x2ce)]();this[_0x1893c1(0x280)]=[];for(const _0x32066f of _0x331f60){_0x32066f[_0x1893c1(0x28d)]=this[_0x1893c1(0x1f3)],_0x32066f[_0x1893c1(0x24b)]=this[_0x1893c1(0x29b)];const _0x222a00=new Sprite_QTE_TimedSequence(_0x32066f);this['addChild'](_0x222a00),this[_0x1893c1(0x280)][_0x1893c1(0x20b)](_0x222a00);}},Window_QTE_TimedSequence[_0xe4bd4(0x343)][_0xe4bd4(0x217)]=function(){const _0x3394dd=_0xe4bd4;Window_QTE_HelpBase[_0x3394dd(0x343)][_0x3394dd(0x217)][_0x3394dd(0x17a)](this);if(!this[_0x3394dd(0x280)])return;while(this[_0x3394dd(0x280)][_0x3394dd(0x299)]>0x0){const _0x39e800=this['_sequenceSprites'][_0x3394dd(0x2a0)]();if(!_0x39e800)continue;if(!_0x39e800[_0x3394dd(0x207)])continue;_0x39e800['bitmap'][_0x3394dd(0x313)]();}};function Window_QTE_TimingBar(){const _0x210983=_0xe4bd4;this[_0x210983(0x240)](...arguments);}Window_QTE_TimingBar[_0xe4bd4(0x343)]=Object[_0xe4bd4(0x220)](Window_QTE_HelpBase[_0xe4bd4(0x343)]),Window_QTE_TimingBar['prototype'][_0xe4bd4(0x2ac)]=Window_QTE_TimingBar,Window_QTE_TimingBar[_0xe4bd4(0x343)][_0xe4bd4(0x240)]=function(_0x5e4a6d){const _0x1365f4=_0xe4bd4;Window_QTE_HelpBase[_0x1365f4(0x343)][_0x1365f4(0x240)][_0x1365f4(0x17a)](this,_0x5e4a6d),this[_0x1365f4(0x2a5)]();},Window_QTE_TimingBar['prototype']['createTimingBarSprite']=function(){const _0x1792d7=_0xe4bd4;this[_0x1792d7(0x179)]=new Sprite_QTE_TimingBarCursor(),this[_0x1792d7(0x1a5)](this[_0x1792d7(0x179)]);},Window_QTE_TimingBar[_0xe4bd4(0x343)][_0xe4bd4(0x25b)]=function(){const _0x238aec=_0xe4bd4;this[_0x238aec(0x31d)](),this['drawHitZones']();},Window_QTE_TimingBar[_0xe4bd4(0x343)][_0xe4bd4(0x31d)]=function(){const _0x16a7fa=_0xe4bd4,_0xc91654=VisuMZ[_0x16a7fa(0x175)][_0x16a7fa(0x2e3)]['QTE'],_0x13ca24=_0xc91654[_0x16a7fa(0x288)]||0x64,_0x5bd8f2=0xc,_0x4429a4=Math['floor']((this[_0x16a7fa(0x1cf)]-_0x13ca24)/0x2),_0x3c1911=this['lineHeight']()-_0x5bd8f2-0x2,_0x44d987=ColorManager[_0x16a7fa(0x1bc)](_0xc91654[_0x16a7fa(0x305)]),_0x19e8c2=ColorManager['getColor'](_0xc91654[_0x16a7fa(0x21d)]);this[_0x16a7fa(0x173)][_0x16a7fa(0x1a8)](_0x4429a4-0x1,_0x3c1911-0x1,_0x13ca24+0x2,_0x5bd8f2+0x2,ColorManager[_0x16a7fa(0x244)]()),this[_0x16a7fa(0x173)]['gradientFillRect'](_0x4429a4,_0x3c1911,_0x13ca24,_0x5bd8f2,_0x44d987,_0x19e8c2,!![]);},Window_QTE_TimingBar[_0xe4bd4(0x343)][_0xe4bd4(0x2ad)]=function(){const _0x566a60=_0xe4bd4,_0x27b5ff=VisuMZ[_0x566a60(0x175)]['Settings'][_0x566a60(0x33f)],_0x21e36b=_0x27b5ff['QteTimingBarWidth']||0x64,_0x3f1e80=0xc,_0x46a5de=Math[_0x566a60(0x304)]((this[_0x566a60(0x1cf)]-_0x21e36b)/0x2),_0x15dba2=this[_0x566a60(0x23a)]()-_0x3f1e80-0x2,_0x27a6e3=SceneManager[_0x566a60(0x2f8)],_0x34247b=_0x27a6e3[_0x566a60(0x323)];for(const _0x81cd8b of _0x34247b){const _0x440910=Math[_0x566a60(0x2c3)](_0x81cd8b[_0x566a60(0x22d)],_0x81cd8b['End'])[_0x566a60(0x1ba)](0x0,0x64),_0x1fa08a=Math[_0x566a60(0x24e)](_0x81cd8b[_0x566a60(0x22d)],_0x81cd8b[_0x566a60(0x1b6)])['clamp'](0x0,0x64),_0x48b293=Math[_0x566a60(0x154)](_0x440910*0.01*_0x21e36b),_0xa909f=Math[_0x566a60(0x304)](_0x1fa08a*0.01*_0x21e36b),_0x36d7fb=_0x48b293+_0x46a5de,_0x1ca6d1=_0xa909f-_0x48b293,_0x4ebedc=ColorManager[_0x566a60(0x1bc)](_0x81cd8b[_0x566a60(0x301)]),_0x339474=ColorManager[_0x566a60(0x1bc)](_0x81cd8b[_0x566a60(0x263)]);this[_0x566a60(0x173)]['gradientFillRect'](_0x36d7fb,_0x15dba2,_0x1ca6d1,_0x3f1e80,_0x4ebedc,_0x339474,!![]);const _0x5b2f5e=_0x81cd8b[_0x566a60(0x2d9)]||'';if(_0x5b2f5e[_0x566a60(0x299)]>0x0){this[_0x566a60(0x2cd)]=!![];const _0x18e460=this[_0x566a60(0x15e)](_0x5b2f5e)[_0x566a60(0x16e)],_0x42589f=_0x36d7fb+Math[_0x566a60(0x18a)](_0x1ca6d1/0x2),_0x302897=_0x42589f-Math[_0x566a60(0x154)](_0x18e460/0x2)+(_0x27b5ff[_0x566a60(0x18f)]||0x0),_0x2115c7=_0x27b5ff[_0x566a60(0x2c8)]||0x0;this[_0x566a60(0x1db)](_0x5b2f5e,_0x302897,_0x2115c7),this[_0x566a60(0x2cd)]=![];}}},Window_QTE_TimingBar['prototype']['resetFontSettings']=function(){const _0x335cf0=_0xe4bd4;Window_QTE_HelpBase[_0x335cf0(0x343)]['resetFontSettings'][_0x335cf0(0x17a)](this),this[_0x335cf0(0x2cd)]&&(this[_0x335cf0(0x173)][_0x335cf0(0x21f)]=$gameSystem['numberFontFace'](),this['contents'][_0x335cf0(0x269)]=VisuMZ['QTE_TriggerSys'][_0x335cf0(0x2e3)][_0x335cf0(0x33f)][_0x335cf0(0x221)]||$gameSystem[_0x335cf0(0x25d)]());},Window_QTE_TimingBar[_0xe4bd4(0x343)][_0xe4bd4(0x1b4)]=function(){const _0x2ef2de=_0xe4bd4;this[_0x2ef2de(0x179)][_0x2ef2de(0x1b4)]();},Window_QTE_TimingBar[_0xe4bd4(0x343)][_0xe4bd4(0x1e2)]=function(){const _0x2914f7=_0xe4bd4;return this[_0x2914f7(0x179)]['getCursorPosition']();},VisuMZ[_0xe4bd4(0x175)][_0xe4bd4(0x1ef)]=function(_0x3fe394){const _0x5dc7a6=_0xe4bd4;var _0x11383c,_0x18b927,_0xab42a4;for(_0xab42a4=_0x3fe394['length']-0x1;_0xab42a4>0x0;_0xab42a4--){_0x11383c=Math[_0x5dc7a6(0x304)](Math[_0x5dc7a6(0x30b)]()*(_0xab42a4+0x1)),_0x18b927=_0x3fe394[_0xab42a4],_0x3fe394[_0xab42a4]=_0x3fe394[_0x11383c],_0x3fe394[_0x11383c]=_0x18b927;}return _0x3fe394;};function _0x4b0b(){const _0x1f4e5d=['IconSet','Cannot\x20start\x20QTE\x20during\x20a\x20dice\x20roll.','buttonProgress','anchor','isPlaytest','createTimedHitSpriteQTE','type','canUpdate','TimedHitSuccessFrames','code','addChild','windowPadding','cancel','fillRect','swapper','TimingBarCursorOffsetX','Game_Switches_setValue','checkEarlyFinishQTE','_qteType','StruggleRequirement','frameCount','triggerProcessed','setGameOverCommonEventID','isPreviousScene','Timing','stopCursor','QTE_Clear','End','processSwitchTrigger','right','picture','clamp','OnSwitch','getColor','WaitForQTE','fillGauge','8230419mkYPYz','name','_normalCommonEvents','8VWCWTB','PromiseWeapon','_dummyWindow','Sequence','updateFrameCount','QteProgressWindowRectJS','MissSound','_lastWholeDuration','Vocab','drawGauge','createGaugeTimerWindowForQTE','getLastPluginCommandInterpreter','_data','innerWidth','isAdvancedVariable','_qteLastInput','status','sort','ClearOnEvent','Buttons','armors','_watchedJsVariables','TimedHitTextMsg','drawVisualStyleGauge','variables','drawTextEx','ReleaseCommonEventID','LandingIcon','Scene_Gameover_start','initMembers','needsFadeIn','_finishing','getCursorPosition','log','timedHit','buttonSequence','update','setWaitMode','sequence','ButtonSeqTextMsg','CommonEventIDs','createGaugeProgressWindowForQTE','QteProgressColor1','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_lastProgress','ShuffleArray','createOverlaySprite','registerCommand','isWeapon','_landingPositionX','_pressedTime','directionStruggle','_qteTimerWindow','systemColor','999408BaRpUY','description','isPlayingQTE','VisuMZ_2_ExtMessageFunc','isTriggerWatchedVariable','Only\x20one\x20QTE\x20can\x20be\x20running\x20at\x20a\x20time.','onDatabaseLoaded','QTE_TimedHit','_qteWindow','setBackgroundType','overloadSound','reserveOnceParallel','createLandingIconSprite','sound','gameOverCommonEventHeal','bitmap','_watchedPromises','SwitchID','normalColor','unshift','note','ARRAYNUM','checkPlayingQTE','_triggerPromises','updateFrame','_qteInputBuffer','isActiveChainSkillsUiVisible','pageUpCommonEventID','_mapGameOverCommonEventID','PromiseItem','MarcherTextMsg','destroyContents','gameOverCommonEvent','hasOnTriggerPromise','control','CommonEventID_PageDown','playSe','TimingBarColor2','goto','fontFace','create','TimingBarFontSize','HitCommonEventID','QTE_ButtonMash','Points','getQTE_TriggerSysPromises','Scene_Gameover_create','CursorIcon','pageup','MaxDuration','TimedSeqSuccessFrames','CheckCompatibility','timedSequence','Start','missSound','MsgWindowBgType','_triggerVariables','Weapon-%1-%2','cursorSpeed','_position','format','normal','_eventId','_waitMode','STR','processJavaScriptFuncs','lineHeight','updateTimingBarQTE','updateHoldReleaseQTE','shuffle','Skill-%1-%2','QTE_Swapper','initialize','SequenceLength','wholeDuration','SceneManager_updateFrameCount','gaugeBackColor','_maxValueSegment','updateButtonSequenceQTE','_qteInputDelay','hasGameOverEvent','_qteWholeDuration','hitCommonEventID','_baseY','VisuMZ_0_CoreEngine','defineCommonEventType','max','join','Class-%1-%2','clear','filter','Duration','reserveCommonEvent','HoldCommonEventID','TimedHitPicture','createSequenceSprites','in\x20order\x20for\x20VisuMZ_2_QTE_TriggerSys\x20to\x20work.','OnVariable','_stopCursor','refreshDrawSpecialData','return\x200','mainFontSize','processAllOnceParallels','_leeway','processVariableTrigger','parse','WatchDelay','AreaColor2','left','ReleaseSound','10nKOKKc','_duration','registerData','fontSize','_interpreter','_inputComboSkillMode','_onceParallelQueue','exit','_lastDuration','push','setHp','cacheData','clear_QTE_Settings','EVAL','contentsOpacity','updateButtonMashQTE','VisuMZ_2_ExtMessageFunc\x20needs\x20to\x20be\x20updated\x20','match','inputStartDelay','rectJS','updateTimedSequenceQTE','stringify','isRepeated','registerSwitches','744302jBcyyg','_qteProgressWindow','_sequenceSprites','SwapperTextMsg','dataID','reduce','_lastQteInputType','setupReservedCommonEvent','split','pagedown','QteTimingBarWidth','>>>ATTENTION<<<','VariableID','height','updateQteDuration','_baseX','Scene_Map_needsFadeIn','Game_Party_gainItem','_lastGoal','QteTimerColor1','loadSystem','836202fefWfi','updateDirectionStruggleQTE','State-%1-%2','hasOnTriggerPromiseItem','padding','includes','length','center','_landingPositionY','processGameOverEvent','NUM','createKeyJS','_afterQteSessionDelay','pop','QTE_TimingBar','HealOnEvent','setFrame','InputStartDelay','createTimingBarSprite','hitSound','init_QTE_TriggerSys','init_QTE_TriggerSysReservations','Scene_Boot_onDatabaseLoaded','iconWidth','finishEarlyQTE','constructor','drawHitZones','scale','Armor-%1-%2','updateEarlyFinish','gaugeCurrentValue','isActive','HitSound','setValue','_stopOverlay','VisuMZ_1_EventsMoveCore','QteProgressColor2','checkWatchedTriggers','numItems','text','GameOverCommonEventSetup','switchID','Item-%1-%2','DirectionStruggleTextMsg','weapons','direction','gaugeStyle','_scene','min','QTE_ButtonSequenceNormal','updateQTEInputs','isAnyTriggered','fulfillOnTriggerPromises','TimingBarLabelOffsetY','parseCommonEventNotetags','down','setText','getLastUsedGamepadType','_labelMode','reverse','getOnChangeCommonEventTriggers','isTriggerWatchedSwitch','FillGaugeTextMsg','troop','CommonEventID_Cancel','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','QteTimerColor2','_triggerSwitches','OverloadSound','updatePosition','Label','baseTextRect','PromiseSwitch','registerCommonEvents','FUNC','_speed','getGameOverCommonEventID','clone','_qteTimedHitSprite','dir4','Settings','inBattle','needsRefresh','ARRAYSTRUCT','opacity','_iconIndex','refreshBitmap','_gameOverCommonEventID','removeChild','isPressed','RegExp','value','ToggleRequirement','loadPicture','OverloadCommonEventID','Direction','addQTE_TriggerSysPromiseToSet','releaseSound','holdRelease','Actor-%1-%2','HoldCommonEventRun','_qteSettings','QteTimerWindowRectJS','VisuMZ_3_VisualGaugeStyles','ARRAYJSON','createBitmap','Shuffle','isItem','setup','<%1>%2','AreaColor1','remainingSequence','progress','floor','TimingBarColor1','Game_Map_setup','createMessageWindowForQTE','getTypeQTE','updateMarcherQTE','updateQteGaugeWindows','random','CoreEngine','cursorIcon','randomInt','trim','SceneManager_updateInputData','switches','GameOver','destroy','ARRAYSTR','_qteEarlyFinishDuration','refresh','updateInputData','isAdvancedSwitch','MissCommonEventID','duration','isTriggered','22187396QusjeJ','drawBaseGauge','Button','_landingSprite','QTE_ButtonSequenceRandom','pointY','updateSwapperQTE','zones','missCommonEventID','createDummyWindow','setupQTE','Game_System_initialize','VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20','deadMembers','isSceneBattle','ButtonSeqInputBuffer','MsgWindowRectJS','updateOverlayScale','updateQteWindowText','movePosition','gainItem','cancelCommonEventID','gaugeMaxValue','PlaytestInput','_text','3068175vjscFo','createJsFunctionsForCommonEvent','buttonMash','isEarlyFinishQTE','Scene_Map_start','qteProgressGaugeStyleType','VisualGaugeStyles','OnChange','escape','registerVariables','QTE','isOnceParallelReserved','Game_Interpreter_updateWaitMode','varID','prototype','Cannot\x20run\x20QTE\x20during\x20Evolution\x20Matrix\x20Skills.','699084VWjRFp','QTE_FillGauge','map','setupGameOverCommonEvent','getInputButtonString','SceneManager_initialize','onChangeTrigger','bgType','shift','_watchedJsSwitches','setupMessageForQTE','list','ceil','PromiseVariable','align','goal','updateFillGaugeQTE','_latestButton','updateWaitMode','pointX','start','TimedSeqTextMsg','textSizeEx','parent','marcher','updateTimedHitQTE','okCommonEventID','VisuMZ_3_InputComboSkills','toUpperCase','2gbKSzK','init_QTE_TriggerSysPromise','fulfillOnTriggerPromisesItem','TimedHitOpacity','icon','isArmor','parameters','buttons','21HZPPOt','width','resetFontSettings','processCommonEvent','getWatchedTriggerPromises','ConvertParams','contents','_qteDuration','QTE_TriggerSys','VisuMZ_3_EvoMatrixSkills','version','_evoMatrixSkillMode','_qteCursorSprite','call','_jsFuncs','updateQteWindow','timingBar','Scene_Base_update','ARRAYFUNC','abs','_jsCommonEvents','processItemTrigger','iconHeight','CommonEventID','Zones','remove','QTE_TimedSequence','_logWindow','Sound','round','replace','clearWatchedTrigger','ExtMessageFunc','isBattleTest','TimingBarLabelOffsetX','_cache_onChangeCommonEventTrigger','startFinishing','initGameOverEventSettings','GetGaugeHeight','updateQTEDuration','EarlyFinishDuration','items','_direction','gaugeColor2','commonEventID','TimedHitMaxSize'];_0x4b0b=function(){return _0x1f4e5d;};return _0x4b0b();}