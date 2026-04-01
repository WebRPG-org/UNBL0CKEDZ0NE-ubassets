//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.87;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.87] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
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
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 * - This does NOT set the max cap to be lower than the default cap.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <Taller By x: id>
 * 
 * - Used for: Tileset Notetags
 * - Changes any page B, C, D, E tile marked by terrain tag 'id' to be taller
 *   by 'x' tiles.
 *   - Replace 'x' with a number representing the tiles to be taller by.
 *   - Replace 'id' with a number representing the Terrain Tag you will use to
 *     mark this tile with in the Database editor.
 * - When placing these tiles on the map, all you have to do is just place the
 *   bottom tile.
 *   - ie.: For a tree that's one tile taller, just place the tile at the
 *     bottom where you see the trunk.
 *   - Then, in-game, the tree will appear taller by one tile as marked.
 * - Depending on the priority settings, the tile will appear on different
 *   layers.
 *   - O will place the tile on the below player layer.
 *   - X will place the tile on the same level as the player.
 *   - ★ will place the tile on the above player layer.
 *   - O/X layer tiles have a special property where tall sprites standing in
 *     front of it will no longer clip the top of the sprite, while sprites
 *     standing behind it will be covered by it.
 *   - The X layer sprite will only have a hitbox of 1x1 at the base.
 * - This does not work with events using tiles as graphics. Instead, if you
 *   want to do similar, use the Event & Movement Core's <Tile Expand> notetags
 *   for better control.
 * 
 * ---
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGS Volume
 * - Changes the current BGS volume without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Volume:
 *   - Change the current BGS's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGS Pitch
 * - Changes the current BGS pitch without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Pitch:
 *   - Change the current BGS's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGS Pan
 * - Changes the current BGS pan without changing any of the current BGS's
 *   other properties and without restarting the BGS.
 * 
 *   Pan:
 *   - Change the current BGS's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 * 
 *   CTRL + n: Quick Load:
 *   - CTRL + a number from 1 to 9 will yield a quick load of that safe file.
 *   - Does not count auto saves.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - If multiple targets are recorded, then the first of the recorded
 *       targets will be set for this variable.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *     - This means you need to go to your own project's rmmz_core.js and
 *       modify Input.keyMapper to have buttons with "cancel" and "menu"
 *       instead of only "escape".
 *     - If there are none found, an error message will appear telling you to
 *       do so, or set the 'Split "Escape"' option to false.
 *     - If you are using Options Core's Rebind Keyboard option, be sure to
 *       have those have "cancel" and "menu" options inside there, too.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 * 
 *   State Icons Non-Frame:
 *   - Replace sprite frame system for non-frame.
 *   - Better for any instances where icons are zoomed.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Enable Masking:
 *   - Enable window masking (windows hide other windows behind them)?
 *   - WARNING: Turning it on can obscure data.
 * 
 *   Correct Skin Bleed:
 *   - Allows you to enable/disable the window skin bleeding correction for
 *     those who wish to use the 95 calculator instead of 96 to augment higher
 *     and larger screen resolutions.
 *   - Read the "Bug Fixes" section if you don't understand what the window
 *     skin bleeding problem is.
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 *
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.87: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * *** Better compatibility with different icon sizes.
 * * Documentation Update!
 * ** Under Plugin Parameters: Menu Button Assist Window
 * *** Added text segments under Split "Escape"
 * **** This means you need to go to your own project's rmmz_core.js and
 *      modify Input.keyMapper to have buttons with "cancel" and "menu"
 *      instead of only "escape".
 * **** If there are none found, an error message will appear telling you to
 *      do so, or set the 'Split "Escape"' option to false.
 * **** If you are using Options Core's Rebind Keyboard option, be sure to
 *      have those have "cancel" and "menu" options inside there, too.
 * * Feature Update!
 * ** Plugin Parameters > Button Assist > Split "Escape" will now show an error
 *    message if a custom Input.keyMapper is not found with the "cancel" and
 *    "menu" keys implemented. Update made by Irina.
 * ** Updated Plugin Parameters > Button Assist > Split "Escape" description
 *    for Plugin Parameters to add in the following text: Requires custom
 *    Input.keyMapper with "cancel" and "menu".
 * ** Added better compatibility with WASD controls as to prioritize showing
 *    the arrow keys rather than the W, A, S, D keys. Also applies to any other
 *    rebindings.
 * 
 * Version 1.86: January 16, 2025
 * * Bug Fixes!
 * ** Fixed an issue where certain icons were not aligning properly at
 *    different line height settings. Fix made by Olivia.
 * 
 * Version 1.85: October 17, 2024
 * * Feature Updates!
 * ** Updated to fit RPG Maker MZ's updated 1.8.1 version better.
 * 
 * Version 1.84: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New notetags added by Arisu:
 * *** Tileset Notetag: <Taller By x: id>
 * **** Changes any page B, C, D, E tile marked by terrain tag 'id' to be
 *      taller by 'x' tiles.
 * **** When placing these tiles on the map, all you have to do is just place
 *      the bottom tile.
 * ***** ie.: For a tree that's one tile taller, just place the tile at the
 *       bottom where you see the trunk. Then, in-game, the tree will appear
 *       taller by one tile as marked.
 * **** O/X layer tiles have a special property where tall sprites standing in
 *      front of it will no longer clip the top of the sprite, while sprites
 *      standing behind it will be covered by it.
 * **** This does not work with events using tiles as graphics. Instead, if
 *      you want to do similar, use the Event & Movement Core's <Tile Expand>
 *      notetags for better control.
 * 
 * Version 1.83: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated documentation for <param Max: x> notetag.
 * *** This does not set the max cap to be lower than the default cap.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > UI Settings > State Icons Non-Frame
 * **** Replace sprite frame system for non-frame.
 * **** Better for any instances where icons are zoomed.
 * 
 * Version 1.82: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added failsafe for $textPopup when some windows have not been initialized
 *    and requesting the text popup.
 * * New Feature!
 * ** New Plugin Parameter and playtest shortcut added by Arisu:
 * *** Plugin Parameters > QoL Settings > Playtest > CTRL + n: Quick Load
 * **** CTRL + a number from 1 to 9 will yield a quick load of that save file.
 * **** Does not count auto saves.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.81: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added for future plugin: VisuMZ_2_BattleGridSystem
 * *** <Grid>
 * *** <No Grid>
 * **** Requires the future plugin VisuMZ_2_BattleGridSystem!
 * **** Read the help section for more information on these.
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Window > Correct Skin Bleed
 * **** Allows you to enable/disable the window skin bleeding correction for
 *      those who wish to use the 95 calculator instead of 96 to augment higher
 *      and larger screen resolutions.
 * **** Read the "Bug Fixes" section if you don't understand what the window
 *      skin bleeding problem is.
 * 
 * Version 1.80: January 18, 2024
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param CtrlQuickLoad:eval
 * @text CTRL + n: Quick Load
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc CTRL + a number from 1 to 9 will yield a quick load of
 * that safe file. Does not count auto saves.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * Requires custom Input.keyMapper with "cancel" and "menu".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param StateIconsNonFrame:eval
 * @text State Icons Non-Frame
 * @parent UIArea
 * @type boolean
 * @on Non-Frame
 * @off Normal
 * @desc Replace sprite frame system for non-frame.
 * Better for any instances where icons are zoomed.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param CorrectSkinBleeding:eval
 * @text Correct Skin Bleed
 * @parent WindowDefaults
 * @type boolean
 * @on Correct
 * @off Don't Correct
 * @desc Corrects window skin bleeding bug when used with higher
 * screen resolutions?
 * @default true
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x23b15a=_0x348b;(function(_0x2d1640,_0x4c39bf){const _0x59e8e0=_0x348b,_0x485fde=_0x2d1640();while(!![]){try{const _0x503a88=parseInt(_0x59e8e0(0x1b9))/0x1+parseInt(_0x59e8e0(0x2cf))/0x2+parseInt(_0x59e8e0(0x6fa))/0x3*(-parseInt(_0x59e8e0(0x567))/0x4)+parseInt(_0x59e8e0(0x46c))/0x5*(-parseInt(_0x59e8e0(0x56e))/0x6)+parseInt(_0x59e8e0(0x494))/0x7+-parseInt(_0x59e8e0(0x4c0))/0x8+parseInt(_0x59e8e0(0x4f7))/0x9;if(_0x503a88===_0x4c39bf)break;else _0x485fde['push'](_0x485fde['shift']());}catch(_0x59d419){_0x485fde['push'](_0x485fde['shift']());}}}(_0x3a5c,0x9673a));var tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x23b15a(0x731)](function(_0x28d24e){const _0x2cc65e=_0x23b15a;return _0x28d24e[_0x2cc65e(0x81a)]&&_0x28d24e[_0x2cc65e(0x24c)][_0x2cc65e(0x313)](_0x2cc65e(0x63a));})[0x0];VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)]=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']||{},VisuMZ[_0x23b15a(0x76d)]=function(_0x3cac2d,_0x179236){const _0x206430=_0x23b15a;for(const _0x53cf3d in _0x179236){if(_0x53cf3d[_0x206430(0x70d)](/(.*):(.*)/i)){const _0x2c2d56=String(RegExp['\x24\x31']),_0x51d460=String(RegExp['\x24\x32'])[_0x206430(0x6ac)]()[_0x206430(0x811)]();let _0x2b8b34,_0x14aa3b,_0x46434c;switch(_0x51d460){case _0x206430(0x48a):_0x2b8b34=_0x179236[_0x53cf3d]!==''?Number(_0x179236[_0x53cf3d]):0x0;break;case _0x206430(0x591):_0x14aa3b=_0x179236[_0x53cf3d]!==''?JSON[_0x206430(0x533)](_0x179236[_0x53cf3d]):[],_0x2b8b34=_0x14aa3b['\x6d\x61\x70'](_0x3f2c87=>Number(_0x3f2c87));break;case _0x206430(0x181):_0x2b8b34=_0x179236[_0x53cf3d]!==''?eval(_0x179236[_0x53cf3d]):null;break;case _0x206430(0x4f9):_0x14aa3b=_0x179236[_0x53cf3d]!==''?JSON['\x70\x61\x72\x73\x65'](_0x179236[_0x53cf3d]):[],_0x2b8b34=_0x14aa3b[_0x206430(0x1c5)](_0x3197d6=>eval(_0x3197d6));break;case _0x206430(0x5d5):_0x2b8b34=_0x179236[_0x53cf3d]!==''?JSON['\x70\x61\x72\x73\x65'](_0x179236[_0x53cf3d]):'';break;case _0x206430(0x8b6):_0x14aa3b=_0x179236[_0x53cf3d]!==''?JSON['\x70\x61\x72\x73\x65'](_0x179236[_0x53cf3d]):[],_0x2b8b34=_0x14aa3b[_0x206430(0x1c5)](_0x502e0f=>JSON[_0x206430(0x533)](_0x502e0f));break;case'\x46\x55\x4e\x43':_0x2b8b34=_0x179236[_0x53cf3d]!==''?new Function(JSON[_0x206430(0x533)](_0x179236[_0x53cf3d])):new Function(_0x206430(0x6dd));break;case _0x206430(0x63f):_0x14aa3b=_0x179236[_0x53cf3d]!==''?JSON['\x70\x61\x72\x73\x65'](_0x179236[_0x53cf3d]):[],_0x2b8b34=_0x14aa3b[_0x206430(0x1c5)](_0x25b95b=>new Function(JSON[_0x206430(0x533)](_0x25b95b)));break;case _0x206430(0x7a1):_0x2b8b34=_0x179236[_0x53cf3d]!==''?String(_0x179236[_0x53cf3d]):'';break;case _0x206430(0x6ea):_0x14aa3b=_0x179236[_0x53cf3d]!==''?JSON[_0x206430(0x533)](_0x179236[_0x53cf3d]):[],_0x2b8b34=_0x14aa3b[_0x206430(0x1c5)](_0x352582=>String(_0x352582));break;case _0x206430(0x24f):_0x46434c=_0x179236[_0x53cf3d]!==''?JSON[_0x206430(0x533)](_0x179236[_0x53cf3d]):{},_0x3cac2d[_0x2c2d56]={},VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x3cac2d[_0x2c2d56],_0x46434c);continue;case _0x206430(0x64e):_0x14aa3b=_0x179236[_0x53cf3d]!==''?JSON[_0x206430(0x533)](_0x179236[_0x53cf3d]):[],_0x2b8b34=_0x14aa3b[_0x206430(0x1c5)](_0x3e584a=>VisuMZ[_0x206430(0x76d)]({},JSON[_0x206430(0x533)](_0x3e584a)));break;default:continue;}_0x3cac2d[_0x2c2d56]=_0x2b8b34;}}return _0x3cac2d;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x63\x65\x6e\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x65\x78\x69\x74']=SceneManager['\x65\x78\x69\x74'],SceneManager[_0x23b15a(0x3db)]=function(){const _0x2add89=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x2add89(0x7ab)]['\x63\x61\x6c\x6c'](this),Utils[_0x2add89(0x5cb)]>=_0x2add89(0x7b4)&&(typeof nw===_0x2add89(0x812)&&nw[_0x2add89(0x760)]['\x71\x75\x69\x74']());},(_0x2503ee=>{const _0x38d51a=_0x23b15a,_0x249f38=_0x2503ee[_0x38d51a(0x5f0)];for(const _0x407f42 of dependencies){if(!Imported[_0x407f42]){alert(_0x38d51a(0x66d)[_0x38d51a(0x8ca)](_0x249f38,_0x407f42)),SceneManager[_0x38d51a(0x3db)]();break;}}const _0x4e65a2=_0x2503ee[_0x38d51a(0x24c)];if(_0x4e65a2['\x6d\x61\x74\x63\x68'](/\[Version[ ](.*?)\]/i)){const _0x48184e=Number(RegExp['\x24\x31']);_0x48184e!==VisuMZ[_0x38d51a(0x7db)]['\x76\x65\x72\x73\x69\x6f\x6e']&&(alert(_0x38d51a(0x3d1)[_0x38d51a(0x8ca)](_0x249f38,_0x48184e)),SceneManager[_0x38d51a(0x3db)]());}if(_0x4e65a2[_0x38d51a(0x70d)](/\[Tier[ ](\d+)\]/i)){const _0x3a19a5=Number(RegExp['\x24\x31']);_0x3a19a5<tier?(alert(_0x38d51a(0x4d7)[_0x38d51a(0x8ca)](_0x249f38,_0x3a19a5,tier)),SceneManager[_0x38d51a(0x3db)]()):tier=Math[_0x38d51a(0x52a)](_0x3a19a5,tier);}VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](VisuMZ[_0x38d51a(0x7db)][_0x38d51a(0x742)],_0x2503ee[_0x38d51a(0x160)]);})(pluginData),((()=>{const _0x438d34=_0x23b15a;if(VisuMZ[_0x438d34(0x7db)][_0x438d34(0x742)][_0x438d34(0x875)]['\x53\x75\x62\x66\x6f\x6c\x64\x65\x72\x50\x61\x72\x73\x65']??!![])for(const _0x2af0fc in $plugins){const _0x55d828=$plugins[_0x2af0fc];_0x55d828[_0x438d34(0x5f0)][_0x438d34(0x70d)](/(.*)\/(.*)/i)&&(_0x55d828[_0x438d34(0x5f0)]=String(RegExp['\x24\x32'][_0x438d34(0x811)]()));}})()),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x89a),_0x38b3ad=>{const _0x1d3d57=_0x23b15a;if(!SceneManager['\x5f\x73\x63\x65\x6e\x65'])return;if(!SceneManager['\x5f\x73\x63\x65\x6e\x65']['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'])return;VisuMZ[_0x1d3d57(0x76d)](_0x38b3ad,_0x38b3ad);const _0xaf56a5=Math['\x72\x6f\x75\x6e\x64'](_0x38b3ad['\x70\x6f\x69\x6e\x74\x58']),_0x1dfbe4=Math[_0x1d3d57(0x38b)](_0x38b3ad[_0x1d3d57(0x38c)]);$gameTemp['\x72\x65\x71\x75\x65\x73\x74\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0xaf56a5,_0x1dfbe4,_0x38b3ad[_0x1d3d57(0x5f3)],_0x38b3ad[_0x1d3d57(0x914)],_0x38b3ad[_0x1d3d57(0x3a3)]);}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],'\x41\x75\x64\x69\x6f\x43\x68\x61\x6e\x67\x65\x42\x67\x6d\x56\x6f\x6c\x75\x6d\x65',_0x129f9b=>{const _0x5eae6f=_0x23b15a;VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x129f9b,_0x129f9b);const _0x24bab3=Math['\x72\x6f\x75\x6e\x64'](_0x129f9b[_0x5eae6f(0x6a1)])[_0x5eae6f(0x1d1)](0x0,0x64),_0x2ee291=AudioManager[_0x5eae6f(0x1a8)];_0x2ee291&&(_0x2ee291[_0x5eae6f(0x6a1)]=_0x24bab3,_0x2ee291[_0x5eae6f(0x6c1)]=AudioManager['\x5f\x62\x67\x6d\x42\x75\x66\x66\x65\x72'][_0x5eae6f(0x458)](),AudioManager['\x75\x70\x64\x61\x74\x65\x42\x67\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x2ee291),AudioManager[_0x5eae6f(0x4b8)](_0x2ee291,_0x2ee291[_0x5eae6f(0x6c1)]),AudioManager[_0x5eae6f(0x689)][_0x5eae6f(0x757)](_0x2ee291['\x70\x6f\x73']));}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x5a3),_0x47be4e=>{const _0x31515b=_0x23b15a;VisuMZ[_0x31515b(0x76d)](_0x47be4e,_0x47be4e);const _0x32c71c=Math[_0x31515b(0x38b)](_0x47be4e['\x70\x69\x74\x63\x68'])[_0x31515b(0x1d1)](0x32,0x96),_0x3d0146=AudioManager[_0x31515b(0x1a8)];_0x3d0146&&(_0x3d0146['\x70\x69\x74\x63\x68']=_0x32c71c,_0x3d0146[_0x31515b(0x6c1)]=AudioManager[_0x31515b(0x689)][_0x31515b(0x458)](),AudioManager[_0x31515b(0x1e8)](_0x3d0146),AudioManager[_0x31515b(0x4b8)](_0x3d0146,_0x3d0146['\x70\x6f\x73']),AudioManager[_0x31515b(0x689)][_0x31515b(0x757)](_0x3d0146[_0x31515b(0x6c1)]));}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],'\x41\x75\x64\x69\x6f\x43\x68\x61\x6e\x67\x65\x42\x67\x6d\x50\x61\x6e',_0x346167=>{const _0x54ecf9=_0x23b15a;VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x346167,_0x346167);const _0x3834af=Math[_0x54ecf9(0x38b)](_0x346167[_0x54ecf9(0x692)])['\x63\x6c\x61\x6d\x70'](-0x64,0x64),_0x38d168=AudioManager[_0x54ecf9(0x1a8)];_0x38d168&&(_0x38d168[_0x54ecf9(0x692)]=_0x3834af,_0x38d168[_0x54ecf9(0x6c1)]=AudioManager['\x5f\x62\x67\x6d\x42\x75\x66\x66\x65\x72'][_0x54ecf9(0x458)](),AudioManager['\x75\x70\x64\x61\x74\x65\x42\x67\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x38d168),AudioManager[_0x54ecf9(0x4b8)](_0x38d168,_0x38d168[_0x54ecf9(0x6c1)]),AudioManager[_0x54ecf9(0x689)][_0x54ecf9(0x757)](_0x38d168[_0x54ecf9(0x6c1)]));}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x529),_0x169fad=>{const _0xbb3c75=_0x23b15a;VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x169fad,_0x169fad);const _0x102b78=Math[_0xbb3c75(0x38b)](_0x169fad[_0xbb3c75(0x6a1)])[_0xbb3c75(0x1d1)](0x0,0x64),_0x409825=AudioManager['\x5f\x63\x75\x72\x72\x65\x6e\x74\x42\x67\x73'];_0x409825&&(_0x409825[_0xbb3c75(0x6a1)]=_0x102b78,_0x409825[_0xbb3c75(0x6c1)]=AudioManager[_0xbb3c75(0x5cc)][_0xbb3c75(0x458)](),AudioManager[_0xbb3c75(0x740)](_0x409825),AudioManager[_0xbb3c75(0x167)](_0x409825,_0x409825[_0xbb3c75(0x6c1)]),AudioManager[_0xbb3c75(0x5cc)][_0xbb3c75(0x757)](_0x409825[_0xbb3c75(0x6c1)]));}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],'\x41\x75\x64\x69\x6f\x43\x68\x61\x6e\x67\x65\x42\x67\x73\x50\x69\x74\x63\x68',_0x577af7=>{const _0x180801=_0x23b15a;VisuMZ[_0x180801(0x76d)](_0x577af7,_0x577af7);const _0x19a889=Math['\x72\x6f\x75\x6e\x64'](_0x577af7[_0x180801(0x269)])[_0x180801(0x1d1)](0x32,0x96),_0x38a062=AudioManager[_0x180801(0x354)];_0x38a062&&(_0x38a062[_0x180801(0x269)]=_0x19a889,_0x38a062[_0x180801(0x6c1)]=AudioManager[_0x180801(0x5cc)][_0x180801(0x458)](),AudioManager['\x75\x70\x64\x61\x74\x65\x42\x67\x73\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x38a062),AudioManager['\x70\x6c\x61\x79\x42\x67\x73'](_0x38a062,_0x38a062[_0x180801(0x6c1)]),AudioManager[_0x180801(0x5cc)][_0x180801(0x757)](_0x38a062[_0x180801(0x6c1)]));}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x8ad),_0x289b13=>{const _0x488e5f=_0x23b15a;VisuMZ[_0x488e5f(0x76d)](_0x289b13,_0x289b13);const _0x4729d6=Math['\x72\x6f\x75\x6e\x64'](_0x289b13[_0x488e5f(0x692)])[_0x488e5f(0x1d1)](-0x64,0x64),_0x16b967=AudioManager[_0x488e5f(0x354)];_0x16b967&&(_0x16b967['\x70\x61\x6e']=_0x4729d6,_0x16b967[_0x488e5f(0x6c1)]=AudioManager[_0x488e5f(0x5cc)][_0x488e5f(0x458)](),AudioManager[_0x488e5f(0x740)](_0x16b967),AudioManager['\x70\x6c\x61\x79\x42\x67\x73'](_0x16b967,_0x16b967[_0x488e5f(0x6c1)]),AudioManager[_0x488e5f(0x5cc)][_0x488e5f(0x757)](_0x16b967[_0x488e5f(0x6c1)]));}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],'\x44\x65\x62\x75\x67\x43\x6f\x6e\x73\x6f\x6c\x65\x4c\x61\x73\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x49\x44',_0x4622ef=>{const _0x12d425=_0x23b15a;if(!$gameTemp[_0x12d425(0x3e7)]())return;const _0x3c7615=Input[_0x12d425(0x1e3)]();console['\x6c\x6f\x67'](_0x3c7615);}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x4e3),_0x3ab201=>{const _0xd267c0=_0x23b15a;if(!$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']())return;if(!Utils[_0xd267c0(0x1e0)]())return;SceneManager[_0xd267c0(0x753)]['\x5f\x61\x63\x74\x69\x76\x65']=![],VisuMZ[_0xd267c0(0x7db)][_0xd267c0(0x4e2)]();}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],_0x23b15a(0x496),_0x366a9b=>{const _0x5b0139=_0x23b15a;if(!$gameTemp[_0x5b0139(0x3e7)]())return;if(!Utils[_0x5b0139(0x1e0)]())return;SceneManager[_0x5b0139(0x753)]['\x5f\x61\x63\x74\x69\x76\x65']=![],VisuMZ[_0x5b0139(0x7db)]['\x45\x78\x70\x6f\x72\x74\x53\x74\x72\x46\x72\x6f\x6d\x41\x6c\x6c\x54\x72\x6f\x6f\x70\x73']();}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],'\x45\x78\x70\x6f\x72\x74\x43\x75\x72\x4d\x61\x70\x54\x65\x78\x74',_0x20f5ab=>{const _0x567cef=_0x23b15a;if(!$gameTemp[_0x567cef(0x3e7)]())return;if(!Utils[_0x567cef(0x1e0)]())return;if(!$gameMap)return;if($gameMap[_0x567cef(0x23a)]()<=0x0)return;VisuMZ[_0x567cef(0x76d)](_0x20f5ab,_0x20f5ab);const _0x4d573e='\x4d\x61\x70\x25\x31'[_0x567cef(0x8ca)]($gameMap['\x6d\x61\x70\x49\x64']()[_0x567cef(0x43d)](0x3)),_0x45a2e0=VisuMZ[_0x567cef(0x7db)][_0x567cef(0x761)]($gameMap[_0x567cef(0x23a)]());VisuMZ[_0x567cef(0x7db)][_0x567cef(0x1f3)](_0x45a2e0,_0x4d573e,!![]);}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x37e),_0xf7ef1b=>{const _0x5ddd46=_0x23b15a;if(!$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']())return;if(!Utils[_0x5ddd46(0x1e0)]())return;if(!$gameParty[_0x5ddd46(0x244)]())return;VisuMZ[_0x5ddd46(0x76d)](_0xf7ef1b,_0xf7ef1b);const _0x5e585e='\x54\x72\x6f\x6f\x70\x25\x31'[_0x5ddd46(0x8ca)]($gameTroop['\x5f\x74\x72\x6f\x6f\x70\x49\x64'][_0x5ddd46(0x43d)](0x4)),_0x3e8729=VisuMZ[_0x5ddd46(0x7db)]['\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x54\x72\x6f\x6f\x70']($gameTroop[_0x5ddd46(0x5fa)]);VisuMZ[_0x5ddd46(0x7db)][_0x5ddd46(0x1f3)](_0x3e8729,_0x5e585e,!![]);}),VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x1f3)]=function(_0x307878,_0x3a63ed,_0xcc2f26){const _0x5be3fa=_0x23b15a,_0x4dbd4f=require('\x66\x73');let _0x3ff9ad=_0x5be3fa(0x785)[_0x5be3fa(0x8ca)](_0x3a63ed||'\x30');_0x4dbd4f[_0x5be3fa(0x602)](_0x3ff9ad,_0x307878,_0x3f2edd=>{const _0x57642e=_0x5be3fa;if(_0x3f2edd)throw err;else _0xcc2f26&&alert(_0x57642e(0x5c9)[_0x57642e(0x8ca)](_0x3ff9ad));});},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x4e2)]=function(){const _0x4f581d=_0x23b15a,_0x4c163c=[];for(const _0x5b263b of $dataMapInfos){if(!_0x5b263b)continue;_0x4c163c[_0x4f581d(0x2b9)](_0x5b263b['\x69\x64']);}const _0x550bd6=_0x4c163c[_0x4f581d(0x699)]*0x64+Math[_0x4f581d(0x366)](0x64);alert('\x45\x78\x70\x6f\x72\x74\x20\x4d\x61\x70\x20\x54\x65\x78\x74\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x69\x6c\x6c\x20\x66\x69\x6e\x69\x73\x68\x20\x69\x6e\x20\x25\x31\x20\x6d\x73\x28\x73\x29'[_0x4f581d(0x8ca)](_0x550bd6)),this[_0x4f581d(0x661)]=[],this[_0x4f581d(0x818)]=$dataMap;for(const _0xa35627 of _0x4c163c){VisuMZ[_0x4f581d(0x7db)][_0x4f581d(0x77c)](_0xa35627);}setTimeout(VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x4f581d(0x218)][_0x4f581d(0x647)](this),_0x550bd6);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x77c)]=function(_0x4bf261){const _0x17828f=_0x23b15a,_0x4ae0f3=_0x17828f(0x3b8)['\x66\x6f\x72\x6d\x61\x74'](_0x4bf261[_0x17828f(0x43d)](0x3)),_0x460743=new XMLHttpRequest(),_0x5950d4=_0x17828f(0x5ec)+_0x4ae0f3;_0x460743['\x6f\x70\x65\x6e'](_0x17828f(0x6c9),_0x5950d4),_0x460743[_0x17828f(0x8cc)]('\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e'),_0x460743[_0x17828f(0x4d0)]=()=>this[_0x17828f(0x3c4)](_0x460743,_0x4bf261,_0x4ae0f3,_0x5950d4),_0x460743[_0x17828f(0x8e4)]=()=>DataManager[_0x17828f(0x817)](_0x17828f(0x5ee),_0x4ae0f3,_0x5950d4),_0x460743[_0x17828f(0x63c)]();},VisuMZ[_0x23b15a(0x7db)]['\x73\x74\x6f\x72\x65\x4d\x61\x70\x44\x61\x74\x61']=function(_0x5aa741,_0x435749,_0x114aa7,_0x55f72c){const _0x11310f=_0x23b15a;$dataMap=JSON[_0x11310f(0x533)](_0x5aa741[_0x11310f(0x578)]),DataManager[_0x11310f(0x542)]($dataMap),this[_0x11310f(0x661)][_0x435749]=VisuMZ[_0x11310f(0x7db)]['\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x4d\x61\x70'](_0x435749),$dataMap=this[_0x11310f(0x818)];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x218)]=function(){const _0x57af47=_0x23b15a;this[_0x57af47(0x661)]['\x72\x65\x6d\x6f\x76\x65'](undefined)[_0x57af47(0x921)]('')[_0x57af47(0x921)](null);const _0x2fa734=this[_0x57af47(0x661)][_0x57af47(0x723)](_0x57af47(0x53c))[_0x57af47(0x811)]();VisuMZ[_0x57af47(0x7db)][_0x57af47(0x1f3)](_0x2fa734,_0x57af47(0x24e),!![]),SceneManager['\x5f\x73\x63\x65\x6e\x65'][_0x57af47(0x622)]=!![];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x761)]=function(_0x34b833){const _0x1c4e5a=_0x23b15a;if(!$dataMap)return'';let _0x1c019a='\u2588'[_0x1c4e5a(0x8c2)](0x46)+'\x0a\x0a',_0x2f5586='\u2550'[_0x1c4e5a(0x8c2)](0x46)+'\x0a\x0a',_0x8141e7='';this['\x5f\x63\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x4c\x61\x79\x65\x72\x73']=0x0;for(const _0x3c29bb of $dataMap['\x65\x76\x65\x6e\x74\x73']){if(!_0x3c29bb)continue;let _0x1ca53e=_0x3c29bb['\x69\x64'],_0x330bb9=_0x3c29bb[_0x1c4e5a(0x5f0)],_0x389a27=_0x3c29bb[_0x1c4e5a(0x76c)];for(const _0xb83536 of _0x389a27){const _0x17d010=_0x389a27[_0x1c4e5a(0x547)](_0xb83536)+0x1;let _0x1d2bdc=_0x2f5586+_0x1c4e5a(0x3da),_0x1f2447=VisuMZ[_0x1c4e5a(0x7db)][_0x1c4e5a(0x444)](_0xb83536[_0x1c4e5a(0x462)]);if(_0x1f2447[_0x1c4e5a(0x699)]>0x0){if(_0x8141e7[_0x1c4e5a(0x699)]>0x0)_0x8141e7+=_0x2f5586+_0x1c4e5a(0x53c);else{const _0x590189=$dataMapInfos[_0x34b833][_0x1c4e5a(0x5f0)];_0x8141e7+=_0x1c019a+_0x1c4e5a(0x6e6)[_0x1c4e5a(0x8ca)](_0x34b833,_0x590189||_0x1c4e5a(0x52e))+_0x1c019a;}_0x8141e7+=_0x1d2bdc[_0x1c4e5a(0x8ca)](_0x1ca53e,_0x330bb9,_0x17d010,_0x1f2447);}}}return _0x8141e7['\x6c\x65\x6e\x67\x74\x68']>0x0&&(_0x8141e7+=_0x2f5586),_0x8141e7;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x32c)]=function(){const _0x1d5303=_0x23b15a,_0xd2e4fb=$dataTroops[_0x1d5303(0x699)]*0xa+Math[_0x1d5303(0x366)](0xa);alert(_0x1d5303(0x684)[_0x1d5303(0x8ca)](_0xd2e4fb));const _0x6ac6b=[];for(const _0x1205da of $dataTroops){if(!_0x1205da)continue;const _0x4c8d1e=_0x1205da['\x69\x64'];_0x6ac6b[_0x4c8d1e]=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x54\x72\x6f\x6f\x70'](_0x4c8d1e);}setTimeout(VisuMZ[_0x1d5303(0x7db)][_0x1d5303(0x150)]['\x62\x69\x6e\x64'](this,_0x6ac6b),_0xd2e4fb);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x807)]=function(_0x44d1e7){const _0x666094=_0x23b15a;if(!$dataTroops[_0x44d1e7])return'';let _0x238124='\u2588'[_0x666094(0x8c2)](0x46)+'\x0a\x0a',_0x151548='\u2550'[_0x666094(0x8c2)](0x46)+'\x0a\x0a',_0x3748e1='';this[_0x666094(0x4a8)]=0x0;const _0x3056dd=$dataTroops[_0x44d1e7];let _0x4a1075=_0x3056dd['\x70\x61\x67\x65\x73'];for(const _0x413192 of _0x4a1075){const _0x399608=_0x4a1075['\x69\x6e\x64\x65\x78\x4f\x66'](_0x413192)+0x1;let _0x546dc4=_0x151548+_0x666094(0x11f),_0x9a7740=VisuMZ[_0x666094(0x7db)]['\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x4c\x69\x73\x74'](_0x413192[_0x666094(0x462)]);_0x9a7740['\x6c\x65\x6e\x67\x74\x68']>0x0&&(_0x3748e1[_0x666094(0x699)]>0x0?_0x3748e1+=_0x151548+_0x666094(0x53c):_0x3748e1+=_0x238124+_0x666094(0x16e)[_0x666094(0x8ca)](_0x44d1e7,_0x3056dd[_0x666094(0x5f0)]||_0x666094(0x52e))+_0x238124,_0x3748e1+=_0x546dc4[_0x666094(0x8ca)](_0x399608,_0x9a7740));}return _0x3748e1[_0x666094(0x699)]>0x0&&(_0x3748e1+=_0x151548),_0x3748e1;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x65\x78\x70\x6f\x72\x74\x41\x6c\x6c\x54\x72\x6f\x6f\x70\x53\x74\x72\x69\x6e\x67\x73']=function(_0x47ec8e){const _0x4b467e=_0x23b15a;_0x47ec8e[_0x4b467e(0x921)](undefined)[_0x4b467e(0x921)]('')[_0x4b467e(0x921)](null);const _0x146a7c=_0x47ec8e[_0x4b467e(0x723)]('\x0a\x0a\x0a\x0a\x0a')[_0x4b467e(0x811)]();VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x45\x78\x70\x6f\x72\x74\x53\x74\x72\x69\x6e\x67'](_0x146a7c,_0x4b467e(0x8c1),!![]),SceneManager[_0x4b467e(0x753)]['\x5f\x61\x63\x74\x69\x76\x65']=!![];},VisuMZ[_0x23b15a(0x7db)]['\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x4c\x69\x73\x74']=function(_0x3966c2){const _0x57490a=_0x23b15a;let _0x4c9720='\x0a'+'\u2500'[_0x57490a(0x8c2)](0x46)+'\x0a',_0x52f92f='\x0a'+'\u2504'[_0x57490a(0x8c2)](0x46)+'\x0a',_0x3c3c12='';for(const _0xdf5c3a of _0x3966c2){if(!_0xdf5c3a)continue;if(_0xdf5c3a[_0x57490a(0x487)]===0x65)_0x3c3c12+=_0x4c9720+'\x0a',_0x3c3c12+='\u3018\x53\x68\x6f\x77\x20\x54\x65\x78\x74\u3019\x0a',_0xdf5c3a[_0x57490a(0x160)][0x4]!==''&&_0xdf5c3a[_0x57490a(0x160)][0x4]!==undefined&&(_0x3c3c12+=_0x57490a(0x276)[_0x57490a(0x8ca)](_0xdf5c3a[_0x57490a(0x160)][0x4]));else{if(_0xdf5c3a['\x63\x6f\x64\x65']===0x191)_0x3c3c12+=_0x57490a(0x2d5)[_0x57490a(0x8ca)](_0xdf5c3a[_0x57490a(0x160)][0x0]);else{if(_0xdf5c3a[_0x57490a(0x487)]===0x192)_0x3c3c12+=_0x4c9720,_0x3c3c12+=_0x57490a(0x2ef)[_0x57490a(0x8ca)](_0x52f92f,_0xdf5c3a[_0x57490a(0x160)][0x0]+0x1,_0xdf5c3a[_0x57490a(0x160)][0x1]);else{if(_0xdf5c3a[_0x57490a(0x487)]===0x193)_0x3c3c12+=_0x4c9720,_0x3c3c12+=_0x57490a(0x7df)['\x66\x6f\x72\x6d\x61\x74'](_0x52f92f);else{if(_0xdf5c3a[_0x57490a(0x487)]===0x194)_0x3c3c12+=_0x4c9720,_0x3c3c12+='\x25\x31\u3018\x45\x6e\x64\x20\x43\x68\x6f\x69\x63\x65\x20\x53\x65\x6c\x65\x63\x74\x69\x6f\x6e\u3019\x25\x31'[_0x57490a(0x8ca)](_0x52f92f);else{if(_0xdf5c3a[_0x57490a(0x487)]===0x69)_0x3c3c12+=_0x4c9720+'\x0a',_0x3c3c12+=_0x57490a(0x48f);else{if(_0xdf5c3a['\x63\x6f\x64\x65']===0x6c)_0x3c3c12+=_0x4c9720+'\x0a',_0x3c3c12+=_0x57490a(0x383)[_0x57490a(0x8ca)](_0xdf5c3a[_0x57490a(0x160)][0x0]);else{if(_0xdf5c3a[_0x57490a(0x487)]===0x198)_0x3c3c12+=_0x57490a(0x2d5)[_0x57490a(0x8ca)](_0xdf5c3a[_0x57490a(0x160)][0x0]);else{if(_0xdf5c3a[_0x57490a(0x487)]===0x75){const _0x4f5f2e=$dataCommonEvents[_0xdf5c3a['\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73'][0x0]];if(_0x4f5f2e&&this[_0x57490a(0x4a8)]<=0xa){this[_0x57490a(0x4a8)]++;let _0x366304=VisuMZ[_0x57490a(0x7db)][_0x57490a(0x444)](_0x4f5f2e['\x6c\x69\x73\x74']);_0x366304[_0x57490a(0x699)]>0x0&&(_0x3c3c12+=_0x4c9720,_0x3c3c12+=_0x52f92f,_0x3c3c12+=_0x57490a(0x40b)[_0x57490a(0x8ca)](_0x4f5f2e['\x69\x64'],_0x4f5f2e[_0x57490a(0x5f0)]),_0x3c3c12+=_0x52f92f,_0x3c3c12+=_0x366304,_0x3c3c12+=_0x52f92f,_0x3c3c12+=_0x57490a(0x2b0)[_0x57490a(0x8ca)](_0x4f5f2e['\x69\x64'],_0x4f5f2e[_0x57490a(0x5f0)]),_0x3c3c12+=_0x52f92f),this['\x5f\x63\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x4c\x61\x79\x65\x72\x73']--;}}}}}}}}}}}return _0x3c3c12['\x6c\x65\x6e\x67\x74\x68']>0x0&&(_0x3c3c12+=_0x4c9720),_0x3c3c12;},PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x8d9),_0x4514b8=>{const _0x33976a=_0x23b15a;VisuMZ[_0x33976a(0x76d)](_0x4514b8,_0x4514b8);const _0x53506b=_0x4514b8[_0x33976a(0x4a4)];VisuMZ[_0x33976a(0x7d3)](_0x53506b);}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],'\x47\x6f\x6c\x64\x43\x68\x61\x6e\x67\x65',_0x277fbd=>{const _0x5009d7=_0x23b15a;VisuMZ[_0x5009d7(0x76d)](_0x277fbd,_0x277fbd);const _0x6d60e3=_0x277fbd[_0x5009d7(0x415)]||0x0;$gameParty['\x67\x61\x69\x6e\x47\x6f\x6c\x64'](_0x6d60e3);}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x382),_0x3b5e61=>{const _0x2fe1b2=_0x23b15a;if(!SceneManager[_0x2fe1b2(0x5bb)]())return;VisuMZ[_0x2fe1b2(0x76d)](_0x3b5e61,_0x3b5e61);const _0xf8b2b=_0x3b5e61[_0x2fe1b2(0x266)];SceneManager[_0x2fe1b2(0x753)][_0x2fe1b2(0x667)](_0xf8b2b);}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x908),_0x6068da=>{const _0x2132ac=_0x23b15a;if(!$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']())return;if(!Utils[_0x2132ac(0x1e0)]())return;VisuMZ[_0x2132ac(0x76d)](_0x6068da,_0x6068da);const _0x53e48f=_0x6068da['\x50\x69\x63\x74\x75\x72\x65\x49\x44']||0x1;$gameTemp['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x4d\x6f\x64\x65']=_0x53e48f;}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],_0x23b15a(0x8d7),_0x17076a=>{const _0x4ee575=_0x23b15a;VisuMZ[_0x4ee575(0x76d)](_0x17076a,_0x17076a);const _0x213801=_0x17076a[_0x4ee575(0x74b)]||0x1,_0xb819f8=_0x17076a[_0x4ee575(0x67f)]||_0x4ee575(0x19f),_0x2a115b=$gameScreen[_0x4ee575(0x457)](_0x213801);_0x2a115b&&_0x2a115b[_0x4ee575(0x64a)](_0xb819f8);}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],_0x23b15a(0x8fb),_0x2705de=>{const _0x5c885c=_0x23b15a;for(let _0x3bf322=0x1;_0x3bf322<=$gameScreen[_0x5c885c(0x927)]();_0x3bf322++){$gameScreen[_0x5c885c(0x8a7)](_0x3bf322);}}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],'\x50\x69\x63\x74\x75\x72\x65\x45\x72\x61\x73\x65\x52\x61\x6e\x67\x65',_0x332566=>{const _0x483f44=_0x23b15a;VisuMZ[_0x483f44(0x76d)](_0x332566,_0x332566);const _0x223342=Math[_0x483f44(0x70e)](_0x332566[_0x483f44(0x19b)],_0x332566[_0x483f44(0x202)]),_0x111d21=Math[_0x483f44(0x52a)](_0x332566[_0x483f44(0x19b)],_0x332566[_0x483f44(0x202)]);for(let _0x120353=_0x223342;_0x120353<=_0x111d21;_0x120353++){$gameScreen['\x65\x72\x61\x73\x65\x50\x69\x63\x74\x75\x72\x65'](_0x120353);}}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],'\x50\x69\x63\x74\x75\x72\x65\x52\x6f\x74\x61\x74\x65\x42\x79',_0x5b51c1=>{const _0x1633df=_0x23b15a;VisuMZ[_0x1633df(0x76d)](_0x5b51c1,_0x5b51c1);const _0x18a77b=Math['\x72\x6f\x75\x6e\x64'](_0x5b51c1[_0x1633df(0x773)])[_0x1633df(0x1d1)](0x1,0x64),_0x494de0=-Number(_0x5b51c1[_0x1633df(0x738)]||0x0),_0x5f36a7=Math[_0x1633df(0x52a)](_0x5b51c1[_0x1633df(0x745)]||0x0,0x0),_0xa593d=_0x5b51c1['\x65\x61\x73\x69\x6e\x67\x54\x79\x70\x65']||_0x1633df(0x19f),_0x5be338=_0x5b51c1[_0x1633df(0x252)],_0x12e203=$gameScreen['\x70\x69\x63\x74\x75\x72\x65'](_0x18a77b);if(!_0x12e203)return;_0x12e203[_0x1633df(0x746)](_0x494de0,_0x5f36a7,_0xa593d);if(_0x5be338){const _0x200bd2=$gameTemp[_0x1633df(0x4cf)]();_0x200bd2&&_0x200bd2[_0x1633df(0x844)](_0x5f36a7);}}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x1ca),_0x41b825=>{const _0x7f4d8b=_0x23b15a;VisuMZ[_0x7f4d8b(0x76d)](_0x41b825,_0x41b825);const _0x125b90=Math[_0x7f4d8b(0x38b)](_0x41b825['\x50\x69\x63\x74\x75\x72\x65\x49\x44'])[_0x7f4d8b(0x1d1)](0x1,0x64),_0xeafbe5=-Number(_0x41b825[_0x7f4d8b(0x454)]||0x0),_0xb5695f=Math['\x6d\x61\x78'](_0x41b825['\x44\x75\x72\x61\x74\x69\x6f\x6e']||0x0,0x0),_0x377d87=_0x41b825[_0x7f4d8b(0x67f)]||_0x7f4d8b(0x19f),_0x40b406=_0x41b825['\x57\x61\x69\x74'],_0x16568e=$gameScreen[_0x7f4d8b(0x457)](_0x125b90);if(!_0x16568e)return;_0x16568e[_0x7f4d8b(0x16d)](_0xeafbe5,_0xb5695f,_0x377d87);if(_0x40b406){const _0x54cd91=$gameTemp[_0x7f4d8b(0x4cf)]();_0x54cd91&&_0x54cd91['\x77\x61\x69\x74'](_0xb5695f);}}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x820),_0x51ed59=>{const _0x3bfade=_0x23b15a;VisuMZ[_0x3bfade(0x76d)](_0x51ed59,_0x51ed59);const _0x24f397=Math[_0x3bfade(0x38b)](_0x51ed59[_0x3bfade(0x773)])[_0x3bfade(0x1d1)](0x1,0x64),_0x410cba=_0x51ed59[_0x3bfade(0x742)],_0x378402=_0x410cba[_0x3bfade(0x49f)]['\x63\x6c\x61\x6d\x70'](0x0,0x1),_0xb04a1c=Math[_0x3bfade(0x38b)](_0x410cba[_0x3bfade(0x156)]||0x0),_0x157dee=Math[_0x3bfade(0x38b)](_0x410cba['\x50\x6f\x73\x69\x74\x69\x6f\x6e\x59']||0x0),_0x2a1c12=Math[_0x3bfade(0x38b)](_0x410cba[_0x3bfade(0x3fc)]||0x0),_0x5037d4=Math[_0x3bfade(0x38b)](_0x410cba[_0x3bfade(0x482)]||0x0),_0x116b5d=Math['\x72\x6f\x75\x6e\x64'](_0x410cba['\x4f\x70\x61\x63\x69\x74\x79'])[_0x3bfade(0x1d1)](0x0,0xff),_0x112da7=_0x410cba['\x42\x6c\x65\x6e\x64\x4d\x6f\x64\x65'],_0x2fd870=_0x51ed59[_0x3bfade(0x2af)]?_0x3bfade(0x2af):_0x3bfade(0x4e8),_0x3f58ae=_0x3bfade(0x869)[_0x3bfade(0x8ca)](_0x51ed59[_0x3bfade(0x3ba)],_0x2fd870);$gameScreen[_0x3bfade(0x860)](_0x24f397,_0x3f58ae,_0x378402,_0xb04a1c,_0x157dee,_0x2a1c12,_0x5037d4,_0x116b5d,_0x112da7);}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x873),_0x56723d=>{const _0x3127cf=_0x23b15a;VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x56723d,_0x56723d);const _0x14492e=_0x56723d['\x54\x79\x70\x65']||_0x3127cf(0x50d),_0xd26899=_0x56723d[_0x3127cf(0x5d4)][_0x3127cf(0x1d1)](0x1,0x9),_0xeddac9=_0x56723d[_0x3127cf(0x437)][_0x3127cf(0x1d1)](0x1,0x9),_0x42d258=_0x56723d['\x44\x75\x72\x61\x74\x69\x6f\x6e']||0x1,_0x34eaf7=_0x56723d[_0x3127cf(0x252)];$gameScreen[_0x3127cf(0x194)](_0x14492e),$gameScreen['\x73\x74\x61\x72\x74\x53\x68\x61\x6b\x65'](_0xd26899,_0xeddac9,_0x42d258);if(_0x34eaf7){const _0x54509d=$gameTemp['\x67\x65\x74\x4c\x61\x73\x74\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']();_0x54509d&&_0x54509d[_0x3127cf(0x844)](_0x42d258);}}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x76f),_0x4c2393=>{const _0xb1f108=_0x23b15a;if($gameParty[_0xb1f108(0x244)]())return;VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x4c2393,_0x4c2393);const _0x52d21e=_0x4c2393[_0xb1f108(0x264)],_0x50065e=(_0x4c2393[_0xb1f108(0x5fe)]||0x0)/0x64;for(const _0x35db99 of _0x52d21e){const _0x1f7b80=Math[_0xb1f108(0x50d)]()<=_0x50065e;$gameSwitches[_0xb1f108(0x72d)](_0x35db99,_0x1f7b80);}}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x464),_0x2c8ff4=>{const _0x3e75cc=_0x23b15a;if($gameParty[_0x3e75cc(0x244)]())return;VisuMZ[_0x3e75cc(0x76d)](_0x2c8ff4,_0x2c8ff4);const _0x363c1a=Math[_0x3e75cc(0x70e)](_0x2c8ff4[_0x3e75cc(0x19b)],_0x2c8ff4[_0x3e75cc(0x202)]),_0x580afd=Math[_0x3e75cc(0x52a)](_0x2c8ff4[_0x3e75cc(0x19b)],_0x2c8ff4[_0x3e75cc(0x202)]),_0x590685=(_0x2c8ff4[_0x3e75cc(0x5fe)]||0x0)/0x64;for(let _0x146453=_0x363c1a;_0x146453<=_0x580afd;_0x146453++){const _0xc279cb=Math[_0x3e75cc(0x50d)]()<=_0x590685;$gameSwitches['\x73\x65\x74\x56\x61\x6c\x75\x65'](_0x146453,_0xc279cb);}}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x65a),_0x2d020e=>{const _0x54104d=_0x23b15a;if($gameParty[_0x54104d(0x244)]())return;VisuMZ[_0x54104d(0x76d)](_0x2d020e,_0x2d020e);const _0x5bee22=_0x2d020e[_0x54104d(0x264)];for(const _0x2ec0e2 of _0x5bee22){const _0x477121=$gameSwitches[_0x54104d(0x415)](_0x2ec0e2);$gameSwitches['\x73\x65\x74\x56\x61\x6c\x75\x65'](_0x2ec0e2,!_0x477121);}}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x3a7),_0x2ea575=>{const _0x169299=_0x23b15a;if($gameParty[_0x169299(0x244)]())return;VisuMZ[_0x169299(0x76d)](_0x2ea575,_0x2ea575);const _0x202918=Math[_0x169299(0x70e)](_0x2ea575[_0x169299(0x19b)],_0x2ea575['\x45\x6e\x64\x69\x6e\x67\x49\x44']),_0x5681bc=Math['\x6d\x61\x78'](_0x2ea575['\x53\x74\x61\x72\x74\x49\x44'],_0x2ea575[_0x169299(0x202)]);for(let _0x4b56a6=_0x202918;_0x4b56a6<=_0x5681bc;_0x4b56a6++){const _0x4a73f8=$gameSwitches[_0x169299(0x415)](_0x4b56a6);$gameSwitches['\x73\x65\x74\x56\x61\x6c\x75\x65'](_0x4b56a6,!_0x4a73f8);}}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],'\x53\x79\x73\x74\x65\x6d\x53\x65\x74\x46\x6f\x6e\x74\x53\x69\x7a\x65',_0x402786=>{const _0x469962=_0x23b15a;VisuMZ[_0x469962(0x76d)](_0x402786,_0x402786);const _0x18b4b3=_0x402786['\x6f\x70\x74\x69\x6f\x6e']||0x1;$gameSystem[_0x469962(0x344)](_0x18b4b3);}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],_0x23b15a(0x438),_0x889a60=>{const _0x4abf65=_0x23b15a;if($gameParty[_0x4abf65(0x244)]())return;VisuMZ['\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73'](_0x889a60,_0x889a60);const _0x5020c7=_0x889a60[_0x4abf65(0x911)];if(_0x5020c7[_0x4abf65(0x70d)](/Front/i))$gameSystem[_0x4abf65(0x524)](![]);else _0x5020c7['\x6d\x61\x74\x63\x68'](/Side/i)?$gameSystem[_0x4abf65(0x524)](!![]):$gameSystem[_0x4abf65(0x524)](!$gameSystem[_0x4abf65(0x857)]());}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x2c7),_0x2bf3cd=>{const _0x3ff68f=_0x23b15a;if($gameParty[_0x3ff68f(0x244)]())return;VisuMZ[_0x3ff68f(0x76d)](_0x2bf3cd,_0x2bf3cd);const _0x515abe=['\x62\x67\x6d',_0x3ff68f(0x301),'\x6d\x65','\x73\x65'];for(const _0x18c404 of _0x515abe){const _0x207c11=_0x2bf3cd[_0x18c404],_0x4cca9a=_0x3ff68f(0x17c)[_0x3ff68f(0x8ca)](_0x18c404);for(const _0x3c1dcb of _0x207c11){AudioManager[_0x3ff68f(0x1ba)](_0x4cca9a,_0x3c1dcb);}}}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x656),_0x31f056=>{const _0x34065a=_0x23b15a;if($gameParty['\x69\x6e\x42\x61\x74\x74\x6c\x65']())return;VisuMZ[_0x34065a(0x76d)](_0x31f056,_0x31f056);const _0xc6dfc=[_0x34065a(0x134),_0x34065a(0x294),_0x34065a(0x2e8),_0x34065a(0x6a4),_0x34065a(0x511),_0x34065a(0x4c9),_0x34065a(0x20e),'\x70\x69\x63\x74\x75\x72\x65\x73',_0x34065a(0x358),_0x34065a(0x89c),'\x73\x79\x73\x74\x65\x6d',_0x34065a(0x40c),_0x34065a(0x71c),_0x34065a(0x80b)];for(const _0x270174 of _0xc6dfc){const _0x177fd0=_0x31f056[_0x270174],_0x4fd2b1=_0x34065a(0x453)[_0x34065a(0x8ca)](_0x270174);for(const _0x17d73a of _0x177fd0){ImageManager['\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70'](_0x4fd2b1,_0x17d73a);}}}),PluginManager['\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64'](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x7c8),_0x237265=>{const _0x2a8237=_0x23b15a;if($gameParty['\x69\x6e\x42\x61\x74\x74\x6c\x65']())return;VisuMZ[_0x2a8237(0x76d)](_0x237265,_0x237265);const _0x34dd17=_0x237265['\x6f\x70\x74\x69\x6f\x6e'][_0x2a8237(0x6ac)]()['\x74\x72\x69\x6d'](),_0x19f322=VisuMZ[_0x2a8237(0x7db)][_0x2a8237(0x26a)](_0x34dd17);$gameSystem['\x73\x65\x74\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d'](_0x19f322);}),VisuMZ[_0x23b15a(0x7db)]['\x43\x72\x65\x61\x74\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x49\x44']=function(_0x44f890){const _0x2af091=_0x23b15a;_0x44f890=_0x44f890||'\x44\x41\x54\x41\x42\x41\x53\x45',_0x44f890=String(_0x44f890)[_0x2af091(0x6ac)]()[_0x2af091(0x811)]();switch(_0x44f890){case _0x2af091(0x323):return 0x0;case _0x2af091(0x2c0):Imported[_0x2af091(0x503)]&&(ConfigManager[_0x2af091(0x4a3)]=!![]);return 0x1;case _0x2af091(0x70a):Imported[_0x2af091(0x503)]&&(ConfigManager['\x61\x74\x62\x41\x63\x74\x69\x76\x65']=![]);return 0x2;case'\x43\x54\x42':if(Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x43\x54\x42'])return _0x2af091(0x634);break;case'\x53\x54\x42':if(Imported[_0x2af091(0x7bb)])return _0x2af091(0x7e3);break;case _0x2af091(0x6ee):if(Imported[_0x2af091(0x18d)])return'\x42\x54\x42';break;case _0x2af091(0x8fe):if(Imported[_0x2af091(0x1a4)])return'\x46\x54\x42';break;case _0x2af091(0x8cd):if(Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x4f\x54\x42'])return _0x2af091(0x8cd);break;case _0x2af091(0x7b9):if(Imported[_0x2af091(0x64c)])return _0x2af091(0x7b9);break;case _0x2af091(0x673):if(Imported[_0x2af091(0x3fb)])return _0x2af091(0x673);break;}return $dataSystem[_0x2af091(0x34f)];},PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x694),_0x22ac2a=>{const _0x2cd4c7=_0x23b15a;VisuMZ[_0x2cd4c7(0x76d)](_0x22ac2a,_0x22ac2a);const _0x3ceeb3=_0x22ac2a[_0x2cd4c7(0x911)]||0x1;$gameSystem['\x73\x65\x74\x57\x69\x6e\x64\x6f\x77\x50\x61\x64\x64\x69\x6e\x67'](_0x3ceeb3);}),PluginManager[_0x23b15a(0x7ac)](pluginData['\x6e\x61\x6d\x65'],_0x23b15a(0x2a6),_0x46cc58=>{const _0x4d1565=_0x23b15a;VisuMZ[_0x4d1565(0x76d)](_0x46cc58,_0x46cc58);const _0x3ec480=_0x46cc58[_0x4d1565(0x81b)]||'';$textPopup(_0x3ec480);}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x14d),_0x57c5f4=>{const _0x3d719b=_0x23b15a;VisuMZ[_0x3d719b(0x76d)](_0x57c5f4,_0x57c5f4);const _0x2c7142=_0x57c5f4['\x69\x64']||0x1,_0x596e18=_0x57c5f4['\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e'],_0x44b153=_0x57c5f4[_0x3d719b(0x7fa)]||0x0;let _0x3036ba=$gameVariables[_0x3d719b(0x415)](_0x2c7142)||0x0;switch(_0x596e18){case'\x3d':_0x3036ba=_0x44b153;break;case'\x2b':_0x3036ba+=_0x44b153;break;case'\x2d':_0x3036ba-=_0x44b153;break;case'\x2a':_0x3036ba*=_0x44b153;break;case'\x2f':_0x3036ba/=_0x44b153;break;case'\x25':_0x3036ba%=_0x44b153;break;}_0x3036ba=_0x3036ba||0x0,$gameVariables[_0x3d719b(0x72d)](_0x2c7142,_0x3036ba);}),PluginManager[_0x23b15a(0x7ac)](pluginData[_0x23b15a(0x5f0)],_0x23b15a(0x429),_0x3bdc5d=>{const _0x117973=_0x23b15a;VisuMZ[_0x117973(0x76d)](_0x3bdc5d,_0x3bdc5d);const _0x478f60=_0x3bdc5d['\x69\x64']()||0x1,_0x32c5af=_0x3bdc5d[_0x117973(0x687)],_0x4ac907=_0x3bdc5d['\x6f\x70\x65\x72\x61\x6e\x64']()||0x0;let _0x6cb25=$gameVariables[_0x117973(0x415)](_0x478f60)||0x0;switch(_0x32c5af){case'\x3d':_0x6cb25=_0x4ac907;break;case'\x2b':_0x6cb25+=_0x4ac907;break;case'\x2d':_0x6cb25-=_0x4ac907;break;case'\x2a':_0x6cb25*=_0x4ac907;break;case'\x2f':_0x6cb25/=_0x4ac907;break;case'\x25':_0x6cb25%=_0x4ac907;break;}_0x6cb25=_0x6cb25||0x0,$gameVariables[_0x117973(0x72d)](_0x478f60,_0x6cb25);}),VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x42\x6f\x6f\x74\x5f\x6f\x6e\x44\x61\x74\x61\x62\x61\x73\x65\x4c\x6f\x61\x64\x65\x64']=Scene_Boot[_0x23b15a(0x8ea)]['\x6f\x6e\x44\x61\x74\x61\x62\x61\x73\x65\x4c\x6f\x61\x64\x65\x64'],Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x4b5)]=function(){const _0x3b8018=_0x23b15a;VisuMZ[_0x3b8018(0x7db)][_0x3b8018(0x82e)]['\x63\x61\x6c\x6c'](this),this[_0x3b8018(0x13e)](),this['\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x4e\x6f\x74\x65\x74\x61\x67\x73'](),this['\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x53\x65\x74\x74\x69\x6e\x67\x73'](),this['\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x46\x75\x6e\x63\x74\x69\x6f\x6e\x73'](),this[_0x3b8018(0x57f)](),this[_0x3b8018(0x769)](),VisuMZ['\x50\x61\x72\x73\x65\x41\x6c\x6c\x4e\x6f\x74\x65\x74\x61\x67\x73']();},VisuMZ[_0x23b15a(0x7db)]['\x52\x65\x67\x45\x78\x70']={},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x13e)]=function(){const _0x398e2f=_0x23b15a,_0x5afb7b=[_0x398e2f(0x414),_0x398e2f(0x55e),_0x398e2f(0x132),_0x398e2f(0x314),'\x4d\x41\x54',_0x398e2f(0x240),_0x398e2f(0x664),_0x398e2f(0x535)],_0xcd1058=[_0x398e2f(0x814),'\x45\x56\x41','\x43\x52\x49',_0x398e2f(0x298),_0x398e2f(0x3b0),'\x4d\x52\x46','\x43\x4e\x54','\x48\x52\x47','\x4d\x52\x47',_0x398e2f(0x775)],_0x550a7c=['\x54\x47\x52',_0x398e2f(0x53e),_0x398e2f(0x6db),_0x398e2f(0x390),_0x398e2f(0x935),_0x398e2f(0x14e),_0x398e2f(0x650),'\x4d\x44\x52',_0x398e2f(0x734),_0x398e2f(0x638)],_0x3f4331=[_0x5afb7b,_0xcd1058,_0x550a7c],_0x1a6555=['\x50\x6c\x75\x73','\x50\x6c\x75\x73\x31','\x50\x6c\x75\x73\x32','\x4d\x61\x78','\x52\x61\x74\x65',_0x398e2f(0x4a0),_0x398e2f(0x6aa),'\x46\x6c\x61\x74',_0x398e2f(0x1bd),'\x46\x6c\x61\x74\x32'];for(const _0x4a8879 of _0x3f4331){let _0x4764b1='';_0x4a8879===_0x5afb7b&&(_0x4764b1=_0x398e2f(0x3a2));_0x4a8879===_0xcd1058&&(_0x4764b1=_0x398e2f(0x2ed));_0x4a8879===_0x550a7c&&(_0x4764b1=_0x398e2f(0x704));for(const _0x72ca2c of _0x1a6555){let _0x203ed1=_0x398e2f(0x61b)[_0x398e2f(0x8ca)](_0x4764b1,_0x72ca2c);VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x398e2f(0x7f3)][_0x203ed1]=[],VisuMZ[_0x398e2f(0x7db)][_0x398e2f(0x7f3)][_0x203ed1+'\x4a\x53']=[];let _0x51936e=_0x398e2f(0x702);if([_0x398e2f(0x913),_0x398e2f(0x8fa)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x72ca2c))_0x51936e+=_0x398e2f(0x1da);else{if(['\x50\x6c\x75\x73\x31',_0x398e2f(0x1bd)][_0x398e2f(0x313)](_0x72ca2c))_0x51936e+=_0x398e2f(0x470);else{if(['\x50\x6c\x75\x73\x32','\x46\x6c\x61\x74\x32'][_0x398e2f(0x313)](_0x72ca2c))_0x51936e+=_0x398e2f(0x337);else{if(_0x72ca2c==='\x4d\x61\x78')_0x51936e+='\x28\x5c\x64\x2b\x29\x3e';else{if(_0x72ca2c===_0x398e2f(0x4a0))_0x51936e+=_0x398e2f(0x55a);else _0x72ca2c==='\x52\x61\x74\x65\x32'&&(_0x51936e+=_0x398e2f(0x500));}}}}for(const _0xdc37dd of _0x4a8879){let _0x53b1e7=_0x72ca2c['\x72\x65\x70\x6c\x61\x63\x65'](/[\d+]/g,'')[_0x398e2f(0x6ac)]();const _0x38dfbe=_0x51936e[_0x398e2f(0x8ca)](_0xdc37dd,_0x53b1e7);VisuMZ[_0x398e2f(0x7db)][_0x398e2f(0x7f3)][_0x203ed1]['\x70\x75\x73\x68'](new RegExp(_0x38dfbe,'\x69'));const _0x4a5a1d=_0x398e2f(0x821)[_0x398e2f(0x8ca)](_0xdc37dd,_0x53b1e7);VisuMZ[_0x398e2f(0x7db)][_0x398e2f(0x7f3)][_0x203ed1+'\x4a\x53'][_0x398e2f(0x2b9)](new RegExp(_0x4a5a1d,'\x69'));}}}},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x73d)]=function(){const _0x464937=_0x23b15a;if(VisuMZ[_0x464937(0x46e)])return;},Scene_Boot['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x217)]=function(){const _0x33a46b=_0x23b15a,_0x2a742f=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x33a46b(0x742)];_0x2a742f[_0x33a46b(0x875)][_0x33a46b(0x73c)]&&VisuMZ['\x53\x68\x6f\x77\x44\x65\x76\x54\x6f\x6f\x6c\x73'](!![]);_0x2a742f[_0x33a46b(0x875)][_0x33a46b(0x5c5)]&&(Input[_0x33a46b(0x8a8)][0x23]=_0x33a46b(0x257),Input[_0x33a46b(0x8a8)][0x24]=_0x33a46b(0x3ef));if(_0x2a742f[_0x33a46b(0x35f)]){const _0x4441ea=_0x2a742f[_0x33a46b(0x35f)];_0x4441ea[_0x33a46b(0x3af)]=_0x4441ea[_0x33a46b(0x3af)]||'\x5c\x7d\u276a\x53\x48\x49\x46\x54\u276b\x5c\x7b',_0x4441ea[_0x33a46b(0x351)]=_0x4441ea[_0x33a46b(0x351)]||'\x5c\x7d\u276a\x54\x41\x42\u276b\x5c\x7b';}_0x2a742f[_0x33a46b(0x417)]['\x57\x41\x53\x44']&&(Input['\x6b\x65\x79\x4d\x61\x70\x70\x65\x72'][0x57]='\x75\x70',Input[_0x33a46b(0x8a8)][0x41]=_0x33a46b(0x87d),Input['\x6b\x65\x79\x4d\x61\x70\x70\x65\x72'][0x53]=_0x33a46b(0x5c2),Input[_0x33a46b(0x8a8)][0x44]=_0x33a46b(0x85e),Input['\x6b\x65\x79\x4d\x61\x70\x70\x65\x72'][0x45]=_0x33a46b(0x1b5)),_0x2a742f[_0x33a46b(0x417)]['\x44\x61\x73\x68\x54\x6f\x67\x67\x6c\x65\x52']&&(Input[_0x33a46b(0x8a8)][0x52]=_0x33a46b(0x291)),_0x2a742f['\x50\x61\x72\x61\x6d'][_0x33a46b(0x208)]=_0x2a742f[_0x33a46b(0x39c)][_0x33a46b(0x208)][_0x33a46b(0x1c5)](_0x3712b2=>_0x3712b2[_0x33a46b(0x6ac)]()[_0x33a46b(0x811)]()),_0x2a742f[_0x33a46b(0x39c)][_0x33a46b(0x76b)]=_0x2a742f[_0x33a46b(0x39c)][_0x33a46b(0x76b)][_0x33a46b(0x1c5)](_0x3552ee=>_0x3552ee[_0x33a46b(0x6ac)]()['\x74\x72\x69\x6d']()),_0x2a742f[_0x33a46b(0x875)][_0x33a46b(0x7c1)]=_0x2a742f['\x51\x6f\x4c']['\x53\x68\x69\x66\x74\x52\x5f\x54\x6f\x67\x67\x6c\x65']??!![],_0x2a742f['\x51\x6f\x4c'][_0x33a46b(0x35a)]=_0x2a742f[_0x33a46b(0x875)]['\x53\x68\x69\x66\x74\x54\x5f\x54\x6f\x67\x67\x6c\x65']??!![],_0x2a742f[_0x33a46b(0x35f)][_0x33a46b(0x36b)]&&VisuMZ[_0x33a46b(0x7db)][_0x33a46b(0x8bb)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x8bb)]=function(){const _0x5901c7=_0x23b15a;let _0x14ba7e=![],_0x1fb6b5=![];for(let _0x1aded6 in Input['\x6b\x65\x79\x4d\x61\x70\x70\x65\x72']){const _0x4b7aa4=Input[_0x5901c7(0x8a8)][_0x1aded6];_0x4b7aa4===_0x5901c7(0x589)&&(_0x14ba7e=!![]);_0x4b7aa4===_0x5901c7(0x791)&&(_0x1fb6b5=!![]);if(_0x14ba7e&&_0x1fb6b5)return;}let _0x2c410b=_0x5901c7(0x8d5);_0x2c410b+=_0x5901c7(0x38d),_0x2c410b+=_0x5901c7(0x37a),_0x2c410b+=_0x5901c7(0x5e6),_0x2c410b+=_0x5901c7(0x199),alert(_0x2c410b),SceneManager[_0x5901c7(0x3db)]();},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x8b7)]=function(){const _0x199c6f=_0x23b15a;this[_0x199c6f(0x1ce)]();},Scene_Boot[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x6a\x73\x51\x75\x69\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e\x73']=function(){const _0x18a96e=_0x23b15a,_0x75d84e=VisuMZ[_0x18a96e(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x18a96e(0x8d2)];for(const _0x3c79bd of _0x75d84e){const _0x267881=_0x3c79bd[_0x18a96e(0x614)]['\x72\x65\x70\x6c\x61\x63\x65'](/[ ]/g,''),_0x55549b=_0x3c79bd[_0x18a96e(0x1a1)];VisuMZ[_0x18a96e(0x7db)][_0x18a96e(0x5b2)](_0x267881,_0x55549b);}},VisuMZ[_0x23b15a(0x7db)]['\x63\x72\x65\x61\x74\x65\x4a\x73\x51\x75\x69\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e']=function(_0x3324bb,_0x169131){const _0x52f85b=_0x23b15a;!!window[_0x3324bb]&&($gameTemp[_0x52f85b(0x3e7)]()&&console[_0x52f85b(0x5f6)](_0x52f85b(0x3c6)['\x66\x6f\x72\x6d\x61\x74'](_0x3324bb)));const _0x3e11f5=_0x52f85b(0x646)['\x66\x6f\x72\x6d\x61\x74'](_0x3324bb,_0x169131);window[_0x3324bb]=new Function(_0x3e11f5);},Scene_Boot[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73']=function(){const _0x4c3cf6=_0x23b15a,_0x179501=VisuMZ[_0x4c3cf6(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x4c3cf6(0x862)];if(!_0x179501)return;for(const _0x4611a5 of _0x179501){if(!_0x4611a5)continue;VisuMZ[_0x4c3cf6(0x7db)][_0x4c3cf6(0x50c)](_0x4611a5);}},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x1df)]={},VisuMZ[_0x23b15a(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x49\x63\x6f\x6e\x73']={},VisuMZ[_0x23b15a(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x54\x79\x70\x65']={},VisuMZ[_0x23b15a(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x41\x62\x62']={},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x50c)]=function(_0x27a77f){const _0xc07cc8=_0x23b15a,_0x4fff73=_0x27a77f['\x41\x62\x62\x72\x65\x76\x69\x61\x74\x69\x6f\x6e'],_0xd5eb14=_0x27a77f[_0xc07cc8(0x19c)],_0x5d4c41=_0x27a77f[_0xc07cc8(0x5a5)],_0x2035de=_0x27a77f[_0xc07cc8(0x481)],_0x44a632=new Function(_0x27a77f['\x56\x61\x6c\x75\x65\x4a\x53']);VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0xc07cc8(0x1df)][_0x4fff73[_0xc07cc8(0x6ac)]()[_0xc07cc8(0x811)]()]=_0xd5eb14,VisuMZ[_0xc07cc8(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x49\x63\x6f\x6e\x73'][_0x4fff73['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']()[_0xc07cc8(0x811)]()]=_0x5d4c41,VisuMZ[_0xc07cc8(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x54\x79\x70\x65'][_0x4fff73['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']()[_0xc07cc8(0x811)]()]=_0x2035de,VisuMZ[_0xc07cc8(0x7db)][_0xc07cc8(0x6b2)][_0x4fff73[_0xc07cc8(0x6ac)]()[_0xc07cc8(0x811)]()]=_0x4fff73,Object[_0xc07cc8(0x2f3)](Game_BattlerBase[_0xc07cc8(0x8ea)],_0x4fff73,{'\x67\x65\x74'(){const _0x33bdfe=_0xc07cc8,_0x2d078b=_0x44a632[_0x33bdfe(0x744)](this);return _0x2035de===_0x33bdfe(0x1c0)?Math[_0x33bdfe(0x38b)](_0x2d078b):_0x2d078b;}});},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4ef)]={},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x520)]={},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x769)]=function(){const _0x419332=_0x23b15a,_0x218be6=VisuMZ[_0x419332(0x7db)][_0x419332(0x742)]['\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x42\x75\x74\x74\x6f\x6e\x73'];for(const _0x2e4611 of _0x218be6){const _0x24ad85=(_0x2e4611[_0x419332(0x543)]||'')[_0x419332(0x597)]()['\x74\x72\x69\x6d'](),_0x3b9249=(_0x2e4611['\x4d\x61\x74\x63\x68']||'')['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']()['\x74\x72\x69\x6d']();VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x419332(0x4ef)][_0x24ad85]=_0x2e4611,VisuMZ[_0x419332(0x7db)][_0x419332(0x520)][_0x3b9249]=_0x24ad85;}},VisuMZ['\x50\x61\x72\x73\x65\x41\x6c\x6c\x4e\x6f\x74\x65\x74\x61\x67\x73']=function(){const _0x3286ab=_0x23b15a;for(const _0x216f2a of $dataActors){_0x216f2a&&VisuMZ[_0x3286ab(0x41b)](_0x216f2a);}for(const _0x55ec57 of $dataClasses){_0x55ec57&&VisuMZ[_0x3286ab(0x770)](_0x55ec57);}for(const _0x32851d of $dataSkills){_0x32851d&&VisuMZ['\x50\x61\x72\x73\x65\x53\x6b\x69\x6c\x6c\x4e\x6f\x74\x65\x74\x61\x67\x73'](_0x32851d);}for(const _0x3a9430 of $dataItems){_0x3a9430&&VisuMZ[_0x3286ab(0x3cf)](_0x3a9430);}for(const _0x46cf0a of $dataWeapons){_0x46cf0a&&VisuMZ[_0x3286ab(0x6d2)](_0x46cf0a);}for(const _0xa3cd43 of $dataArmors){_0xa3cd43&&VisuMZ[_0x3286ab(0x69b)](_0xa3cd43);}for(const _0x11af30 of $dataEnemies){_0x11af30&&VisuMZ[_0x3286ab(0x456)](_0x11af30);}for(const _0x2422da of $dataStates){_0x2422da&&VisuMZ['\x50\x61\x72\x73\x65\x53\x74\x61\x74\x65\x4e\x6f\x74\x65\x74\x61\x67\x73'](_0x2422da);}for(const _0x158db2 of $dataTilesets){_0x158db2&&VisuMZ['\x50\x61\x72\x73\x65\x54\x69\x6c\x65\x73\x65\x74\x4e\x6f\x74\x65\x74\x61\x67\x73'](_0x158db2);}},VisuMZ[_0x23b15a(0x41b)]=function(_0x247a01){},VisuMZ[_0x23b15a(0x770)]=function(_0x3aac1d){},VisuMZ[_0x23b15a(0x306)]=function(_0x4494c5){},VisuMZ['\x50\x61\x72\x73\x65\x49\x74\x65\x6d\x4e\x6f\x74\x65\x74\x61\x67\x73']=function(_0x3df510){},VisuMZ[_0x23b15a(0x6d2)]=function(_0x50eb76){},VisuMZ['\x50\x61\x72\x73\x65\x41\x72\x6d\x6f\x72\x4e\x6f\x74\x65\x74\x61\x67\x73']=function(_0x27d37a){},VisuMZ[_0x23b15a(0x456)]=function(_0x56e468){},VisuMZ[_0x23b15a(0x3a8)]=function(_0x5ccbfb){},VisuMZ[_0x23b15a(0x172)]=function(_0x3b2cc8){},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x41b)]=VisuMZ['\x50\x61\x72\x73\x65\x41\x63\x74\x6f\x72\x4e\x6f\x74\x65\x74\x61\x67\x73'],VisuMZ['\x50\x61\x72\x73\x65\x41\x63\x74\x6f\x72\x4e\x6f\x74\x65\x74\x61\x67\x73']=function(_0x4f4c3b){const _0x19e911=_0x23b15a;VisuMZ[_0x19e911(0x7db)][_0x19e911(0x41b)][_0x19e911(0x744)](this,_0x4f4c3b);const _0x5a1484=_0x4f4c3b['\x6e\x6f\x74\x65'];_0x5a1484['\x6d\x61\x74\x63\x68'](/<MAX LEVEL:[ ](\d+)>/i)&&(_0x4f4c3b[_0x19e911(0x176)]=Number(RegExp['\x24\x31']),_0x4f4c3b[_0x19e911(0x176)]===0x0&&(_0x4f4c3b[_0x19e911(0x176)]=Number['\x4d\x41\x58\x5f\x53\x41\x46\x45\x5f\x49\x4e\x54\x45\x47\x45\x52'])),_0x5a1484[_0x19e911(0x70d)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x4f4c3b[_0x19e911(0x45b)]=Math[_0x19e911(0x70e)](Number(RegExp['\x24\x31']),_0x4f4c3b[_0x19e911(0x176)]));},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x770)]=VisuMZ[_0x23b15a(0x770)],VisuMZ[_0x23b15a(0x770)]=function(_0x4c3012){const _0x219285=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x50\x61\x72\x73\x65\x43\x6c\x61\x73\x73\x4e\x6f\x74\x65\x74\x61\x67\x73']['\x63\x61\x6c\x6c'](this,_0x4c3012);if(_0x4c3012[_0x219285(0x50a)])for(const _0x583fc5 of _0x4c3012['\x6c\x65\x61\x72\x6e\x69\x6e\x67\x73']){_0x583fc5['\x6e\x6f\x74\x65'][_0x219285(0x70d)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x583fc5[_0x219285(0x493)]=Math[_0x219285(0x52a)](Number(RegExp['\x24\x31']),0x1));}},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x456)]=VisuMZ[_0x23b15a(0x456)],VisuMZ[_0x23b15a(0x456)]=function(_0x23bb93){const _0x35c74f=_0x23b15a;VisuMZ[_0x35c74f(0x7db)][_0x35c74f(0x456)]['\x63\x61\x6c\x6c'](this,_0x23bb93),_0x23bb93[_0x35c74f(0x493)]=0x1;const _0x3a695f=_0x23bb93[_0x35c74f(0x47c)];_0x3a695f[_0x35c74f(0x70d)](/<LEVEL:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x493)]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<MAXHP:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x12d)][0x0]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<MAXMP:[ ](\d+)>/i)&&(_0x23bb93['\x70\x61\x72\x61\x6d\x73'][0x1]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<ATK:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x12d)][0x2]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<DEF:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x12d)][0x3]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<MAT:[ ](\d+)>/i)&&(_0x23bb93['\x70\x61\x72\x61\x6d\x73'][0x4]=Number(RegExp['\x24\x31'])),_0x3a695f['\x6d\x61\x74\x63\x68'](/<MDF:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x12d)][0x5]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<AGI:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x12d)][0x6]=Number(RegExp['\x24\x31'])),_0x3a695f['\x6d\x61\x74\x63\x68'](/<LUK:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x12d)][0x7]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<EXP:[ ](\d+)>/i)&&(_0x23bb93[_0x35c74f(0x663)]=Number(RegExp['\x24\x31'])),_0x3a695f[_0x35c74f(0x70d)](/<GOLD:[ ](\d+)>/i)&&(_0x23bb93['\x67\x6f\x6c\x64']=Number(RegExp['\x24\x31']));},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2c8)]=Graphics[_0x23b15a(0x226)],Graphics[_0x23b15a(0x226)]=function(){const _0x552beb=_0x23b15a;switch(VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x552beb(0x742)][_0x552beb(0x875)][_0x552beb(0x41d)]){case _0x552beb(0x22f):return!![];case _0x552beb(0x6a5):return![];default:return VisuMZ[_0x552beb(0x7db)][_0x552beb(0x2c8)]['\x63\x61\x6c\x6c'](this);}},VisuMZ[_0x23b15a(0x7db)]['\x47\x72\x61\x70\x68\x69\x63\x73\x5f\x70\x72\x69\x6e\x74\x45\x72\x72\x6f\x72']=Graphics['\x70\x72\x69\x6e\x74\x45\x72\x72\x6f\x72'],Graphics[_0x23b15a(0x90d)]=function(_0x3046ca,_0x5665fd,_0x507a4c=null){const _0x1ded73=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x47\x72\x61\x70\x68\x69\x63\x73\x5f\x70\x72\x69\x6e\x74\x45\x72\x72\x6f\x72']['\x63\x61\x6c\x6c'](this,_0x3046ca,_0x5665fd,_0x507a4c),VisuMZ[_0x1ded73(0x691)](![]);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x31d)]=Graphics['\x5f\x63\x65\x6e\x74\x65\x72\x45\x6c\x65\x6d\x65\x6e\x74'],Graphics['\x5f\x63\x65\x6e\x74\x65\x72\x45\x6c\x65\x6d\x65\x6e\x74']=function(_0x511b54){const _0x5c205a=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x5c205a(0x31d)][_0x5c205a(0x744)](this,_0x511b54),this[_0x5c205a(0x6b9)](_0x511b54);},Graphics[_0x23b15a(0x6b9)]=function(_0x2dacd4){const _0x4de93c=_0x23b15a;VisuMZ[_0x4de93c(0x7db)][_0x4de93c(0x742)][_0x4de93c(0x875)][_0x4de93c(0x8aa)]&&(_0x2dacd4[_0x4de93c(0x84e)][_0x4de93c(0x925)]=_0x4de93c(0x7aa));VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x4de93c(0x742)][_0x4de93c(0x875)]['\x50\x69\x78\x65\x6c\x61\x74\x65\x49\x6d\x61\x67\x65\x52\x65\x6e\x64\x65\x72\x69\x6e\x67']&&(_0x2dacd4[_0x4de93c(0x84e)][_0x4de93c(0x1fb)]='\x70\x69\x78\x65\x6c\x61\x74\x65\x64');const _0x2c3656=Math[_0x4de93c(0x52a)](0x0,Math[_0x4de93c(0x8ff)](_0x2dacd4['\x77\x69\x64\x74\x68']*this[_0x4de93c(0x359)])),_0x5db697=Math[_0x4de93c(0x52a)](0x0,Math['\x66\x6c\x6f\x6f\x72'](_0x2dacd4[_0x4de93c(0x92d)]*this['\x5f\x72\x65\x61\x6c\x53\x63\x61\x6c\x65']));_0x2dacd4['\x73\x74\x79\x6c\x65'][_0x4de93c(0x3e2)]=_0x2c3656+'\x70\x78',_0x2dacd4['\x73\x74\x79\x6c\x65'][_0x4de93c(0x92d)]=_0x5db697+'\x70\x78';},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x130)]=Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Bitmap[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65']=function(_0x22c61b,_0x2427da){const _0x5d9db3=_0x23b15a;VisuMZ[_0x5d9db3(0x7db)][_0x5d9db3(0x130)][_0x5d9db3(0x744)](this,_0x22c61b,_0x2427da),this[_0x5d9db3(0x37d)]=!(VisuMZ[_0x5d9db3(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x5d9db3(0x875)]['\x50\x69\x78\x65\x6c\x61\x74\x65\x49\x6d\x61\x67\x65\x52\x65\x6e\x64\x65\x72\x69\x6e\x67']??!![]);},Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x47d)]=function(){const _0x441ddd=_0x23b15a;this[_0x441ddd(0x7bc)]=!![];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x3ab)]=Sprite[_0x23b15a(0x8ea)][_0x23b15a(0x37b)],Sprite['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x37b)]=function(){const _0x8884fa=_0x23b15a;this[_0x8884fa(0x3f2)]&&VisuMZ[_0x8884fa(0x7db)][_0x8884fa(0x3ab)][_0x8884fa(0x744)](this),this[_0x8884fa(0x2d0)]();},Sprite['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2d0)]=function(){const _0x2a42d5=_0x23b15a;if(!this[_0x2a42d5(0x347)])return;if(!this['\x62\x69\x74\x6d\x61\x70'][_0x2a42d5(0x7bc)])return;this[_0x2a42d5(0x347)]['\x5f\x62\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65']&&!this[_0x2a42d5(0x834)]['\x5f\x62\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65'][_0x2a42d5(0x460)]&&this[_0x2a42d5(0x347)][_0x2a42d5(0x37b)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x59b)]=Bitmap[_0x23b15a(0x8ea)]['\x72\x65\x73\x69\x7a\x65'],Bitmap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x4d2)]=function(_0x331dc0,_0x577b8d){const _0x359d36=_0x23b15a;VisuMZ[_0x359d36(0x7db)][_0x359d36(0x59b)][_0x359d36(0x744)](this,_0x331dc0,_0x577b8d),this[_0x359d36(0x47d)]();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2b7)]=Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x819)],Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x819)]=function(_0x571fdf,_0x47a8cc,_0x34c64e,_0x175613,_0x170248,_0x32ef78,_0xb812e,_0x1c9eb7,_0x482cdd){const _0x2c516b=_0x23b15a;_0x47a8cc=Math[_0x2c516b(0x38b)](_0x47a8cc),_0x34c64e=Math[_0x2c516b(0x38b)](_0x34c64e),_0x175613=Math[_0x2c516b(0x38b)](_0x175613),_0x170248=Math[_0x2c516b(0x38b)](_0x170248),_0x32ef78=Math[_0x2c516b(0x38b)](_0x32ef78),_0xb812e=Math[_0x2c516b(0x38b)](_0xb812e),VisuMZ[_0x2c516b(0x7db)][_0x2c516b(0x2b7)][_0x2c516b(0x744)](this,_0x571fdf,_0x47a8cc,_0x34c64e,_0x175613,_0x170248,_0x32ef78,_0xb812e,_0x1c9eb7,_0x482cdd),this['\x6d\x61\x72\x6b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x4d\x6f\x64\x69\x66\x69\x65\x64']();},VisuMZ[_0x23b15a(0x7db)]['\x42\x69\x74\x6d\x61\x70\x5f\x63\x6c\x65\x61\x72\x52\x65\x63\x74']=Bitmap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x154)],Bitmap[_0x23b15a(0x8ea)]['\x63\x6c\x65\x61\x72\x52\x65\x63\x74']=function(_0x5960af,_0x1b58a2,_0x570476,_0x3fced8){const _0x1b43f4=_0x23b15a;VisuMZ[_0x1b43f4(0x7db)]['\x42\x69\x74\x6d\x61\x70\x5f\x63\x6c\x65\x61\x72\x52\x65\x63\x74']['\x63\x61\x6c\x6c'](this,_0x5960af,_0x1b58a2,_0x570476,_0x3fced8),this[_0x1b43f4(0x47d)]();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2cd)]=Bitmap[_0x23b15a(0x8ea)]['\x66\x69\x6c\x6c\x52\x65\x63\x74'],Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x3c5)]=function(_0x29378a,_0x2864df,_0x56ac1c,_0xce187,_0x2eea81){const _0x5642a6=_0x23b15a;VisuMZ[_0x5642a6(0x7db)][_0x5642a6(0x2cd)][_0x5642a6(0x744)](this,_0x29378a,_0x2864df,_0x56ac1c,_0xce187,_0x2eea81),this['\x6d\x61\x72\x6b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x4d\x6f\x64\x69\x66\x69\x65\x64']();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x934)]=Bitmap[_0x23b15a(0x8ea)]['\x73\x74\x72\x6f\x6b\x65\x52\x65\x63\x74'],Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x6fb)]=function(_0xe3de88,_0x38f825,_0x4e2e13,_0x1712c0,_0x78fd49){const _0x3516fc=_0x23b15a;VisuMZ[_0x3516fc(0x7db)][_0x3516fc(0x934)][_0x3516fc(0x744)](this,_0xe3de88,_0x38f825,_0x4e2e13,_0x1712c0,_0x78fd49),this['\x6d\x61\x72\x6b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x4d\x6f\x64\x69\x66\x69\x65\x64']();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x5b5)]=Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x5b0)],Bitmap[_0x23b15a(0x8ea)]['\x67\x72\x61\x64\x69\x65\x6e\x74\x46\x69\x6c\x6c\x52\x65\x63\x74']=function(_0x1159ed,_0x346a76,_0x2a5877,_0x17c7c8,_0x57cc17,_0x5712bd,_0x35dc35){const _0x5f9f13=_0x23b15a;VisuMZ[_0x5f9f13(0x7db)][_0x5f9f13(0x5b5)][_0x5f9f13(0x744)](this,_0x1159ed,_0x346a76,_0x2a5877,_0x17c7c8,_0x57cc17,_0x5712bd,_0x35dc35),this[_0x5f9f13(0x47d)]();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x710)]=Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x855)],Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x855)]=function(_0x479c25,_0x100f5c,_0x49c6f0,_0x4ec254){const _0x2b090f=_0x23b15a;_0x479c25=Math[_0x2b090f(0x38b)](_0x479c25),_0x100f5c=Math[_0x2b090f(0x38b)](_0x100f5c),_0x49c6f0=Math[_0x2b090f(0x38b)](_0x49c6f0),VisuMZ[_0x2b090f(0x7db)]['\x42\x69\x74\x6d\x61\x70\x5f\x64\x72\x61\x77\x43\x69\x72\x63\x6c\x65'][_0x2b090f(0x744)](this,_0x479c25,_0x100f5c,_0x49c6f0,_0x4ec254),this[_0x2b090f(0x47d)]();},VisuMZ[_0x23b15a(0x7db)]['\x42\x69\x74\x6d\x61\x70\x5f\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74\x57\x69\x64\x74\x68']=Bitmap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2f5)],Bitmap[_0x23b15a(0x8ea)]['\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74\x57\x69\x64\x74\x68']=function(_0xbf6ca5){const _0x24af51=_0x23b15a;return Math[_0x24af51(0x643)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x24af51(0x527)]['\x63\x61\x6c\x6c'](this,_0xbf6ca5));},VisuMZ[_0x23b15a(0x7db)]['\x42\x69\x74\x6d\x61\x70\x5f\x64\x72\x61\x77\x54\x65\x78\x74']=Bitmap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x64\x72\x61\x77\x54\x65\x78\x74'],Bitmap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x6a3)]=function(_0x3611d8,_0x34ccf2,_0x1f8398,_0x219e8d,_0x2b2e76,_0x5216a1){const _0x481a54=_0x23b15a;_0x34ccf2=Math[_0x481a54(0x38b)](_0x34ccf2),_0x1f8398=Math[_0x481a54(0x38b)](_0x1f8398),_0x219e8d=Math[_0x481a54(0x643)](_0x219e8d),_0x2b2e76=Math[_0x481a54(0x643)](_0x2b2e76),VisuMZ[_0x481a54(0x7db)][_0x481a54(0x20b)][_0x481a54(0x744)](this,_0x3611d8,_0x34ccf2,_0x1f8398,_0x219e8d,_0x2b2e76,_0x5216a1),this['\x6d\x61\x72\x6b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x4d\x6f\x64\x69\x66\x69\x65\x64']();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x445)]=Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x2a5)],Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x2a5)]=function(_0x216135,_0xa46bd7,_0x2032f0,_0x54626c){const _0x52920a=_0x23b15a;VisuMZ[_0x52920a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x52920a(0x875)][_0x52920a(0x3d3)]?this[_0x52920a(0x6b4)](_0x216135,_0xa46bd7,_0x2032f0,_0x54626c):VisuMZ[_0x52920a(0x7db)][_0x52920a(0x445)][_0x52920a(0x744)](this,_0x216135,_0xa46bd7,_0x2032f0,_0x54626c);},Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x6b4)]=function(_0x417915,_0x266c88,_0x5d5488,_0x36c72a){const _0x4f91e8=_0x23b15a,_0x560aae=this[_0x4f91e8(0x349)];_0x560aae[_0x4f91e8(0x68e)]=this[_0x4f91e8(0x122)],_0x560aae[_0x4f91e8(0x29b)](_0x417915,_0x266c88+0x2,_0x5d5488+0x2,_0x36c72a);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4be)]=Input[_0x23b15a(0x8cf)],Input['\x63\x6c\x65\x61\x72']=function(){const _0x235dc2=_0x23b15a;VisuMZ[_0x235dc2(0x7db)][_0x235dc2(0x4be)][_0x235dc2(0x744)](this),this[_0x235dc2(0x593)]=undefined,this[_0x235dc2(0x340)]=undefined,this[_0x235dc2(0x3f5)]=Input['\x6b\x65\x79\x52\x65\x70\x65\x61\x74\x57\x61\x69\x74'];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x8f5)]=Input['\x75\x70\x64\x61\x74\x65'],Input[_0x23b15a(0x8fc)]=function(){const _0x5a24a9=_0x23b15a;VisuMZ[_0x5a24a9(0x7db)][_0x5a24a9(0x8f5)][_0x5a24a9(0x744)](this),this['\x5f\x67\x61\x6d\x65\x70\x61\x64\x57\x61\x69\x74']&&this[_0x5a24a9(0x3f5)]--;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x825)]=Input[_0x23b15a(0x7c4)],Input[_0x23b15a(0x7c4)]=function(){const _0x568dd8=_0x23b15a;if(this['\x5f\x67\x61\x6d\x65\x70\x61\x64\x57\x61\x69\x74'])return;VisuMZ[_0x568dd8(0x7db)][_0x568dd8(0x825)][_0x568dd8(0x744)](this);},VisuMZ[_0x23b15a(0x7db)]['\x49\x6e\x70\x75\x74\x5f\x73\x65\x74\x75\x70\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72\x73']=Input[_0x23b15a(0x763)],Input['\x5f\x73\x65\x74\x75\x70\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72\x73']=function(){const _0x5f1ca0=_0x23b15a;VisuMZ[_0x5f1ca0(0x7db)][_0x5f1ca0(0x7b3)]['\x63\x61\x6c\x6c'](this),document[_0x5f1ca0(0x203)]('\x6b\x65\x79\x70\x72\x65\x73\x73',this[_0x5f1ca0(0x58c)][_0x5f1ca0(0x647)](this));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x421)]=Input['\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e'],Input['\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e']=function(_0x3dea70){const _0x2d852d=_0x23b15a;this['\x5f\x69\x6e\x70\x75\x74\x53\x70\x65\x63\x69\x61\x6c\x4b\x65\x79\x43\x6f\x64\x65']=_0x3dea70[_0x2d852d(0x7cd)],VisuMZ[_0x2d852d(0x7db)][_0x2d852d(0x421)]['\x63\x61\x6c\x6c'](this,_0x3dea70),this[_0x2d852d(0x30f)](null);},Input[_0x23b15a(0x58c)]=function(_0x54f688){const _0x1d47db=_0x23b15a;this[_0x1d47db(0x2c1)](_0x54f688);},Input[_0x23b15a(0x2c1)]=function(_0x251291){const _0x3ca91a=_0x23b15a;this[_0x3ca91a(0x340)]=_0x251291[_0x3ca91a(0x7cd)];let _0x4b12e5=String[_0x3ca91a(0x858)](_0x251291[_0x3ca91a(0x228)]);this[_0x3ca91a(0x593)]===undefined?this[_0x3ca91a(0x593)]=_0x4b12e5:this[_0x3ca91a(0x593)]+=_0x4b12e5;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x1c1)]=Input[_0x23b15a(0x1d0)],Input['\x5f\x73\x68\x6f\x75\x6c\x64\x50\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74']=function(_0xab636a){const _0x454660=_0x23b15a;if(_0xab636a===0x8)return![];return VisuMZ[_0x454660(0x7db)][_0x454660(0x1c1)][_0x454660(0x744)](this,_0xab636a);},Input['\x69\x73\x53\x70\x65\x63\x69\x61\x6c\x43\x6f\x64\x65']=function(_0x173e00){const _0x254e4e=_0x23b15a;if(_0x173e00[_0x254e4e(0x70d)](/backspace/i))return this[_0x254e4e(0x340)]===0x8;if(_0x173e00[_0x254e4e(0x70d)](/enter/i))return this[_0x254e4e(0x340)]===0xd;if(_0x173e00[_0x254e4e(0x70d)](/escape/i))return this[_0x254e4e(0x340)]===0x1b;},Input[_0x23b15a(0x522)]=function(){const _0x46f112=_0x23b15a;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x46f112(0x241)](this[_0x46f112(0x340)]);},Input['\x69\x73\x41\x72\x72\x6f\x77\x50\x72\x65\x73\x73\x65\x64']=function(){const _0x274618=_0x23b15a;return[0x25,0x26,0x27,0x28][_0x274618(0x241)](this[_0x274618(0x340)]);},Input[_0x23b15a(0x36d)]=function(){const _0x41e2eb=_0x23b15a;if(navigator[_0x41e2eb(0x222)]){const _0x335806=navigator[_0x41e2eb(0x222)]();if(_0x335806)for(const _0x2f1c15 of _0x335806){if(_0x2f1c15&&_0x2f1c15[_0x41e2eb(0x430)])return!![];}}return![];},Input[_0x23b15a(0x659)]=function(){const _0x4027ef=_0x23b15a;if(navigator[_0x4027ef(0x222)]){const _0x486e04=navigator['\x67\x65\x74\x47\x61\x6d\x65\x70\x61\x64\x73']();if(_0x486e04)for(const _0x3e85c5 of _0x486e04){if(_0x3e85c5&&_0x3e85c5[_0x4027ef(0x430)]){if(this[_0x4027ef(0x696)](_0x3e85c5))return!![];if(this[_0x4027ef(0x7f9)](_0x3e85c5))return!![];}}}return![];},Input[_0x23b15a(0x696)]=function(_0x37189b){const _0x14ca9d=_0x23b15a,_0x23a621=_0x37189b[_0x14ca9d(0x71f)];for(let _0x29df53=0x0;_0x29df53<_0x23a621['\x6c\x65\x6e\x67\x74\x68'];_0x29df53++){if(_0x23a621[_0x29df53][_0x14ca9d(0x6ad)])return!![];}return![];},Input['\x69\x73\x47\x61\x6d\x65\x70\x61\x64\x41\x78\x69\x73\x4d\x6f\x76\x65\x64']=function(_0x15b5d7){const _0x2baa84=_0x23b15a,_0x345fb8=_0x15b5d7[_0x2baa84(0x85c)];if(_0x345fb8[0x0]<-0.5)return!![];if(_0x345fb8[0x0]>0.5)return!![];if(_0x345fb8[0x1]<-0.5)return!![];if(_0x345fb8[0x1]>0.5)return!![];return![];},Input[_0x23b15a(0x552)]=function(){const _0x208681=_0x23b15a;return this[_0x208681(0x5ef)]||null;},Input[_0x23b15a(0x30f)]=function(_0x478a4c){const _0x3fac4f=_0x23b15a;this[_0x3fac4f(0x5ef)]=_0x478a4c;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x5f7)]=Input[_0x23b15a(0x5e3)],Input[_0x23b15a(0x5e3)]=function(_0x2145dd){const _0xc86e84=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0xc86e84(0x5f7)][_0xc86e84(0x744)](this,_0x2145dd),(this[_0xc86e84(0x696)](_0x2145dd)||this[_0xc86e84(0x7f9)](_0x2145dd))&&this['\x73\x65\x74\x4c\x61\x73\x74\x47\x61\x6d\x65\x70\x61\x64\x55\x73\x65\x64'](_0x2145dd);},Input[_0x23b15a(0x1e3)]=function(){const _0x215e8a=_0x23b15a;return this[_0x215e8a(0x5ef)]?this[_0x215e8a(0x5ef)]['\x69\x64']:_0x215e8a(0x4b4);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x62f)]=Tilemap['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x830)],Tilemap[_0x23b15a(0x8ea)][_0x23b15a(0x830)]=function(_0x5969be,_0x27faf7,_0x4f6b08,_0x45b65a){const _0x3dd8f0=_0x23b15a;if($gameMap&&$gameMap['\x61\x72\x65\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73\x48\x69\x64\x64\x65\x6e']())return;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x3dd8f0(0x62f)][_0x3dd8f0(0x744)](this,_0x5969be,_0x27faf7,_0x4f6b08,_0x45b65a);},Tilemap[_0x23b15a(0x5fb)][_0x23b15a(0x8ea)]['\x5f\x63\x72\x65\x61\x74\x65\x49\x6e\x74\x65\x72\x6e\x61\x6c\x54\x65\x78\x74\x75\x72\x65\x73']=function(){const _0x2a8ea3=_0x23b15a;this[_0x2a8ea3(0x2b6)]();for(let _0x50c052=0x0;_0x50c052<Tilemap[_0x2a8ea3(0x35b)][_0x2a8ea3(0x556)];_0x50c052++){const _0x17489f=new PIXI[(_0x2a8ea3(0x668))]();_0x17489f[_0x2a8ea3(0x13a)](0x800,0x800),VisuMZ[_0x2a8ea3(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2a8ea3(0x875)][_0x2a8ea3(0x75c)]&&(_0x17489f['\x73\x63\x61\x6c\x65\x4d\x6f\x64\x65']=PIXI[_0x2a8ea3(0x39f)][_0x2a8ea3(0x8cb)]),this['\x5f\x69\x6e\x74\x65\x72\x6e\x61\x6c\x54\x65\x78\x74\x75\x72\x65\x73'][_0x2a8ea3(0x2b9)](_0x17489f);}},WindowLayer[_0x23b15a(0x8ea)][_0x23b15a(0x655)]=function(){const _0x38c930=_0x23b15a;return SceneManager&&SceneManager[_0x38c930(0x753)]?SceneManager['\x5f\x73\x63\x65\x6e\x65'][_0x38c930(0x672)]():!![];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x282)]=WindowLayer['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x5b3)],WindowLayer[_0x23b15a(0x8ea)]['\x72\x65\x6e\x64\x65\x72']=function render(_0x363394){const _0x45d08b=_0x23b15a;this[_0x45d08b(0x655)]()?VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x45d08b(0x282)][_0x45d08b(0x744)](this,_0x363394):this[_0x45d08b(0x12f)](_0x363394);},WindowLayer[_0x23b15a(0x8ea)][_0x23b15a(0x12f)]=function render(_0x3fbe55){const _0x3bef47=_0x23b15a;if(!this[_0x3bef47(0x44b)])return;const _0x2c12b3=new PIXI[(_0x3bef47(0x897))](),_0x2b23ce=_0x3fbe55['\x67\x6c'],_0x25b8e3=this[_0x3bef47(0x853)][_0x3bef47(0x5dd)]();_0x3fbe55[_0x3bef47(0x8a0)][_0x3bef47(0x2ab)](),_0x2c12b3[_0x3bef47(0x1d3)]=this[_0x3bef47(0x1d3)],_0x3fbe55['\x62\x61\x74\x63\x68']['\x66\x6c\x75\x73\x68'](),_0x2b23ce['\x65\x6e\x61\x62\x6c\x65'](_0x2b23ce[_0x3bef47(0x583)]);while(_0x25b8e3[_0x3bef47(0x699)]>0x0){const _0x2afe45=_0x25b8e3['\x73\x68\x69\x66\x74']();_0x2afe45[_0x3bef47(0x642)]&&_0x2afe45[_0x3bef47(0x44b)]&&_0x2afe45[_0x3bef47(0x75e)]>0x0&&(_0x2b23ce[_0x3bef47(0x68a)](_0x2b23ce['\x45\x51\x55\x41\x4c'],0x0,-0x1),_0x2b23ce['\x73\x74\x65\x6e\x63\x69\x6c\x4f\x70'](_0x2b23ce[_0x3bef47(0x831)],_0x2b23ce[_0x3bef47(0x831)],_0x2b23ce['\x4b\x45\x45\x50']),_0x2afe45[_0x3bef47(0x5b3)](_0x3fbe55),_0x3fbe55[_0x3bef47(0x209)][_0x3bef47(0x56a)](),_0x2c12b3[_0x3bef47(0x8cf)](),_0x2b23ce[_0x3bef47(0x68a)](_0x2b23ce[_0x3bef47(0x1cc)],0x1,-0x1),_0x2b23ce['\x73\x74\x65\x6e\x63\x69\x6c\x4f\x70'](_0x2b23ce[_0x3bef47(0x1a6)],_0x2b23ce[_0x3bef47(0x1a6)],_0x2b23ce['\x52\x45\x50\x4c\x41\x43\x45']),_0x2b23ce[_0x3bef47(0x709)](_0x2b23ce[_0x3bef47(0x2d8)],_0x2b23ce[_0x3bef47(0x275)]),_0x2c12b3[_0x3bef47(0x5b3)](_0x3fbe55),_0x3fbe55['\x62\x61\x74\x63\x68'][_0x3bef47(0x56a)](),_0x2b23ce['\x62\x6c\x65\x6e\x64\x46\x75\x6e\x63'](_0x2b23ce['\x4f\x4e\x45'],_0x2b23ce[_0x3bef47(0x851)]));}_0x2b23ce[_0x3bef47(0x5fd)](_0x2b23ce['\x53\x54\x45\x4e\x43\x49\x4c\x5f\x54\x45\x53\x54']),_0x2b23ce['\x63\x6c\x65\x61\x72'](_0x2b23ce[_0x3bef47(0x6bd)]),_0x2b23ce[_0x3bef47(0x8e2)](0x0),_0x3fbe55[_0x3bef47(0x209)]['\x66\x6c\x75\x73\x68']();for(const _0x546215 of this[_0x3bef47(0x853)]){!_0x546215[_0x3bef47(0x642)]&&_0x546215[_0x3bef47(0x44b)]&&_0x546215[_0x3bef47(0x5b3)](_0x3fbe55);}_0x3fbe55[_0x3bef47(0x209)][_0x3bef47(0x56a)]();},DataManager[_0x23b15a(0x813)]=function(_0xa352b8){const _0x2d03f1=_0x23b15a;return this[_0x2d03f1(0x2e7)](_0xa352b8)&&_0xa352b8[_0x2d03f1(0x78f)]===0x2;},VisuMZ[_0x23b15a(0x7db)]['\x44\x61\x74\x61\x4d\x61\x6e\x61\x67\x65\x72\x5f\x73\x65\x74\x75\x70\x4e\x65\x77\x47\x61\x6d\x65']=DataManager[_0x23b15a(0x1aa)],DataManager['\x73\x65\x74\x75\x70\x4e\x65\x77\x47\x61\x6d\x65']=function(){const _0x346f76=_0x23b15a;VisuMZ[_0x346f76(0x7db)][_0x346f76(0x258)][_0x346f76(0x744)](this),this[_0x346f76(0x489)](),this['\x72\x65\x73\x65\x72\x76\x65\x4e\x65\x77\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74']();},DataManager[_0x23b15a(0x489)]=function(){const _0x1b5ec6=_0x23b15a;if($gameTemp[_0x1b5ec6(0x3e7)]()){const _0x5601ec=VisuMZ[_0x1b5ec6(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x51\x6f\x4c'][_0x1b5ec6(0x22e)];_0x5601ec>0x0&&$gameTemp[_0x1b5ec6(0x5a9)](_0x5601ec);}},DataManager[_0x23b15a(0x80f)]=function(){const _0x26ca82=_0x23b15a,_0xf7add8=VisuMZ[_0x26ca82(0x7db)][_0x26ca82(0x742)]['\x51\x6f\x4c'][_0x26ca82(0x2dc)]||0x0;_0xf7add8>0x0&&$gameTemp[_0x26ca82(0x5a9)](_0xf7add8);},DataManager[_0x23b15a(0x179)]=function(_0x3d5bbd){const _0x1808c9=_0x23b15a,_0x34d710=$dataTroops[_0x3d5bbd];if(!_0x34d710)return'';let _0x383519='';_0x383519+=_0x34d710[_0x1808c9(0x5f0)];for(const _0x220fc1 of _0x34d710[_0x1808c9(0x76c)]){for(const _0x5513bd of _0x220fc1['\x6c\x69\x73\x74']){[0x6c,0x198][_0x1808c9(0x313)](_0x5513bd[_0x1808c9(0x487)])&&(_0x383519+='\x0a',_0x383519+=_0x5513bd[_0x1808c9(0x160)][0x0]);}}return _0x383519;};(VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x875)][_0x23b15a(0x39e)]??!![])&&($scene=null,VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x162)]=Scene_Base[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65'],Scene_Base[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65']=function(){const _0x46455c=_0x23b15a;VisuMZ[_0x46455c(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65']['\x63\x61\x6c\x6c'](this),$scene=this;},$spriteset=null,VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x42d)],Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=function(){const _0x27ad54=_0x23b15a;VisuMZ[_0x27ad54(0x7db)][_0x27ad54(0x2fc)][_0x27ad54(0x744)](this),$spriteset=this['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'];},VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=Scene_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x42d)],Scene_Battle[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=function(){const _0x2d7e71=_0x23b15a;VisuMZ[_0x2d7e71(0x7db)][_0x2d7e71(0x939)]['\x63\x61\x6c\x6c'](this),$spriteset=this[_0x2d7e71(0x22b)];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x74\x65\x72\x6d\x69\x6e\x61\x74\x65']=Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x68c)],Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x68c)]=function(){const _0x25301b=_0x23b15a;VisuMZ[_0x25301b(0x7db)][_0x25301b(0x616)][_0x25301b(0x744)](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x504)]=BattleManager[_0x23b15a(0x8fc)],BattleManager[_0x23b15a(0x8fc)]=function(_0x4e03f1){const _0x581427=_0x23b15a;VisuMZ[_0x581427(0x7db)][_0x581427(0x504)][_0x581427(0x744)](this,_0x4e03f1),this[_0x581427(0x441)]();},BattleManager[_0x23b15a(0x441)]=function(){const _0x5f19ca=_0x23b15a;$subject=this[_0x5f19ca(0x69e)],$targets=this['\x5f\x74\x61\x72\x67\x65\x74\x73'],$target=this[_0x5f19ca(0x48e)]||this[_0x5f19ca(0x7a2)][0x0];},$event=null,VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x73b)]=Game_Event[_0x23b15a(0x8ea)][_0x23b15a(0x52b)],Game_Event['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x73\x74\x61\x72\x74']=function(){const _0x4cb11f=_0x23b15a;VisuMZ[_0x4cb11f(0x7db)][_0x4cb11f(0x73b)][_0x4cb11f(0x744)](this),$event=this;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x424)]=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)],Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x467859=_0x23b15a;VisuMZ[_0x467859(0x7db)][_0x467859(0x424)]['\x63\x61\x6c\x6c'](this),$gameMap['\x75\x70\x64\x61\x74\x65\x43\x75\x72\x72\x65\x6e\x74\x45\x76\x65\x6e\x74']();},Game_Map[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x43\x75\x72\x72\x65\x6e\x74\x45\x76\x65\x6e\x74']=function(){!this['\x69\x73\x45\x76\x65\x6e\x74\x52\x75\x6e\x6e\x69\x6e\x67']()&&$event!==null&&($event=null);},$commonEvent=function(_0x452ba9){$gameTemp&&$gameTemp['\x72\x65\x73\x65\x72\x76\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74'](_0x452ba9);});;$onceParallel=function(_0x591447,_0x33ee45){const _0x536a43=_0x23b15a;if(SceneManager['\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70']())SceneManager[_0x536a43(0x753)][_0x536a43(0x667)](_0x591447,_0x33ee45);else{if(SceneManager[_0x536a43(0x546)]()){if(Imported[_0x536a43(0x56b)])SceneManager[_0x536a43(0x753)][_0x536a43(0x667)](_0x591447);else $gameTemp&&$gameTemp[_0x536a43(0x3e7)]()&&alert(_0x536a43(0x4fb));}else $gameTemp&&$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&alert(_0x536a43(0x407));}},StorageManager[_0x23b15a(0x80e)]=function(_0x52e706){return new Promise((_0x44cae7,_0xd18da9)=>{const _0x2626ce=_0x348b;try{const _0xf58094=pako['\x64\x65\x66\x6c\x61\x74\x65'](_0x52e706,{'\x74\x6f':_0x2626ce(0x6f5),'\x6c\x65\x76\x65\x6c':0x1});if(_0xf58094[_0x2626ce(0x699)]>=0xc350){}_0x44cae7(_0xf58094);}catch(_0x1c239b){_0xd18da9(_0x1c239b);}});},TextManager[_0x23b15a(0x842)]=['','','',_0x23b15a(0x579),'','',_0x23b15a(0x671),'',_0x23b15a(0x50b),'\x54\x41\x42','','','\x43\x4c\x45\x41\x52',_0x23b15a(0x4db),'\x45\x4e\x54\x45\x52\x5f\x53\x50\x45\x43\x49\x41\x4c','',_0x23b15a(0x1ed),_0x23b15a(0x6ba),_0x23b15a(0x896),_0x23b15a(0x357),_0x23b15a(0x1e9),'\x4b\x41\x4e\x41',_0x23b15a(0x34c),_0x23b15a(0x6b3),_0x23b15a(0x6e4),'\x48\x41\x4e\x4a\x41','',_0x23b15a(0x6cc),_0x23b15a(0x374),_0x23b15a(0x73f),_0x23b15a(0x348),'\x4d\x4f\x44\x45\x43\x48\x41\x4e\x47\x45','\x53\x50\x41\x43\x45',_0x23b15a(0x5ca),_0x23b15a(0x596),_0x23b15a(0x39b),_0x23b15a(0x551),_0x23b15a(0x781),'\x55\x50',_0x23b15a(0x938),_0x23b15a(0x173),'\x53\x45\x4c\x45\x43\x54',_0x23b15a(0x54b),_0x23b15a(0x446),_0x23b15a(0x4ec),_0x23b15a(0x600),'\x44\x45\x4c\x45\x54\x45','','\x30','\x31','\x32','\x33','\x34','\x35','\x36','\x37','\x38','\x39',_0x23b15a(0x651),_0x23b15a(0x843),_0x23b15a(0x49b),_0x23b15a(0x5a0),'\x47\x52\x45\x41\x54\x45\x52\x5f\x54\x48\x41\x4e',_0x23b15a(0x345),'\x41\x54','\x41','\x42','\x43','\x44','\x45','\x46','\x47','\x48','\x49','\x4a','\x4b','\x4c','\x4d','\x4e','\x4f','\x50','\x51','\x52','\x53','\x54','\x55','\x56','\x57','\x58','\x59','\x5a',_0x23b15a(0x870),'','\x43\x4f\x4e\x54\x45\x58\x54\x5f\x4d\x45\x4e\x55','',_0x23b15a(0x443),_0x23b15a(0x8a9),_0x23b15a(0x6a8),_0x23b15a(0x675),_0x23b15a(0x378),_0x23b15a(0x398),_0x23b15a(0x2d2),'\x4e\x55\x4d\x50\x41\x44\x36',_0x23b15a(0x5c4),_0x23b15a(0x7de),_0x23b15a(0x1eb),_0x23b15a(0x61c),_0x23b15a(0x31e),_0x23b15a(0x810),_0x23b15a(0x126),_0x23b15a(0x1ec),_0x23b15a(0x43e),'\x46\x31','\x46\x32','\x46\x33','\x46\x34','\x46\x35','\x46\x36','\x46\x37','\x46\x38','\x46\x39',_0x23b15a(0x7ea),_0x23b15a(0x17b),_0x23b15a(0x3fa),_0x23b15a(0x8ef),'\x46\x31\x34',_0x23b15a(0x342),_0x23b15a(0x33d),_0x23b15a(0x557),_0x23b15a(0x737),'\x46\x31\x39',_0x23b15a(0x5f1),_0x23b15a(0x333),_0x23b15a(0x2df),_0x23b15a(0x4ce),_0x23b15a(0x627),'','','','','','','','',_0x23b15a(0x1b7),'\x53\x43\x52\x4f\x4c\x4c\x5f\x4c\x4f\x43\x4b',_0x23b15a(0x44f),'\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x46\x4a\x5f\x4d\x41\x53\x53\x48\x4f\x55',_0x23b15a(0x87e),_0x23b15a(0x748),_0x23b15a(0x796),'','','','','','','','','',_0x23b15a(0x6ca),_0x23b15a(0x451),_0x23b15a(0x69f),'\x48\x41\x53\x48','\x44\x4f\x4c\x4c\x41\x52',_0x23b15a(0x626),_0x23b15a(0x7a9),_0x23b15a(0x7d0),_0x23b15a(0x2c5),_0x23b15a(0x907),_0x23b15a(0x2c9),_0x23b15a(0x5bc),_0x23b15a(0x6de),_0x23b15a(0x7d5),_0x23b15a(0x22c),_0x23b15a(0x8c4),'\x54\x49\x4c\x44\x45','','','','',_0x23b15a(0x89e),'\x56\x4f\x4c\x55\x4d\x45\x5f\x44\x4f\x57\x4e','\x56\x4f\x4c\x55\x4d\x45\x5f\x55\x50','','',_0x23b15a(0x843),_0x23b15a(0x5a0),_0x23b15a(0x70c),_0x23b15a(0x84b),_0x23b15a(0x5d8),_0x23b15a(0x18e),_0x23b15a(0x62a),'','','','','','','','','','','','','','','','','','','','','','','','','','',_0x23b15a(0x3a9),_0x23b15a(0x30d),_0x23b15a(0x6be),_0x23b15a(0x8d8),'',_0x23b15a(0x5f2),_0x23b15a(0x51a),'','\x57\x49\x4e\x5f\x49\x43\x4f\x5f\x48\x45\x4c\x50',_0x23b15a(0x3be),'',_0x23b15a(0x285),'','',_0x23b15a(0x205),_0x23b15a(0x2fb),_0x23b15a(0x70b),'\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x50\x41\x32',_0x23b15a(0x3b6),_0x23b15a(0x343),_0x23b15a(0x29d),_0x23b15a(0x461),'\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x46\x49\x4e\x49\x53\x48',_0x23b15a(0x902),_0x23b15a(0x325),'\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x45\x4e\x4c\x57',_0x23b15a(0x26c),'\x41\x54\x54\x4e','\x43\x52\x53\x45\x4c','\x45\x58\x53\x45\x4c','\x45\x52\x45\x4f\x46',_0x23b15a(0x6bc),_0x23b15a(0x206),'',_0x23b15a(0x59a),'\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x43\x4c\x45\x41\x52',''],TextManager[_0x23b15a(0x416)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x35f)][_0x23b15a(0x6c2)],TextManager[_0x23b15a(0x8be)]=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x742)][_0x23b15a(0x35f)][_0x23b15a(0x706)],TextManager[_0x23b15a(0x302)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x35f)][_0x23b15a(0x4a2)],VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x5e8)]=TextManager[_0x23b15a(0x3a2)],TextManager[_0x23b15a(0x3a2)]=function(_0x396950){const _0x5f196c=_0x23b15a;return typeof _0x396950===_0x5f196c(0x14f)?VisuMZ[_0x5f196c(0x7db)][_0x5f196c(0x5e8)][_0x5f196c(0x744)](this,_0x396950):this['\x70\x61\x72\x61\x6d\x4e\x61\x6d\x65'](_0x396950);},TextManager[_0x23b15a(0x85b)]=function(_0x5837c8){const _0x582325=_0x23b15a;_0x5837c8=String(_0x5837c8||'')['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']();const _0xa6fc97=VisuMZ[_0x582325(0x7db)][_0x582325(0x742)]['\x50\x61\x72\x61\x6d'];if(_0x5837c8===_0x582325(0x414))return $dataSystem[_0x582325(0x779)]['\x70\x61\x72\x61\x6d\x73'][0x0];if(_0x5837c8===_0x582325(0x55e))return $dataSystem[_0x582325(0x779)][_0x582325(0x12d)][0x1];if(_0x5837c8===_0x582325(0x132))return $dataSystem['\x74\x65\x72\x6d\x73']['\x70\x61\x72\x61\x6d\x73'][0x2];if(_0x5837c8===_0x582325(0x314))return $dataSystem[_0x582325(0x779)][_0x582325(0x12d)][0x3];if(_0x5837c8===_0x582325(0x507))return $dataSystem[_0x582325(0x779)][_0x582325(0x12d)][0x4];if(_0x5837c8===_0x582325(0x240))return $dataSystem[_0x582325(0x779)][_0x582325(0x12d)][0x5];if(_0x5837c8===_0x582325(0x664))return $dataSystem['\x74\x65\x72\x6d\x73']['\x70\x61\x72\x61\x6d\x73'][0x6];if(_0x5837c8===_0x582325(0x535))return $dataSystem[_0x582325(0x779)][_0x582325(0x12d)][0x7];if(_0x5837c8===_0x582325(0x814))return _0xa6fc97[_0x582325(0x406)];if(_0x5837c8===_0x582325(0x67a))return _0xa6fc97[_0x582325(0x1e5)];if(_0x5837c8===_0x582325(0x711))return _0xa6fc97[_0x582325(0x2e6)];if(_0x5837c8===_0x582325(0x298))return _0xa6fc97[_0x582325(0x1d7)];if(_0x5837c8===_0x582325(0x3b0))return _0xa6fc97[_0x582325(0x79d)];if(_0x5837c8==='\x4d\x52\x46')return _0xa6fc97[_0x582325(0x677)];if(_0x5837c8===_0x582325(0x478))return _0xa6fc97[_0x582325(0x2b2)];if(_0x5837c8===_0x582325(0x4fa))return _0xa6fc97['\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x37'];if(_0x5837c8===_0x582325(0x242))return _0xa6fc97['\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x38'];if(_0x5837c8==='\x54\x52\x47')return _0xa6fc97[_0x582325(0x828)];if(_0x5837c8===_0x582325(0x4b7))return _0xa6fc97['\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x30'];if(_0x5837c8==='\x47\x52\x44')return _0xa6fc97[_0x582325(0x428)];if(_0x5837c8===_0x582325(0x6db))return _0xa6fc97[_0x582325(0x74d)];if(_0x5837c8===_0x582325(0x390))return _0xa6fc97[_0x582325(0x356)];if(_0x5837c8===_0x582325(0x935))return _0xa6fc97[_0x582325(0x22d)];if(_0x5837c8===_0x582325(0x14e))return _0xa6fc97['\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x35'];if(_0x5837c8===_0x582325(0x650))return _0xa6fc97[_0x582325(0x895)];if(_0x5837c8===_0x582325(0x88d))return _0xa6fc97['\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x37'];if(_0x5837c8===_0x582325(0x734))return _0xa6fc97[_0x582325(0x621)];if(_0x5837c8===_0x582325(0x638))return _0xa6fc97[_0x582325(0x915)];if(VisuMZ[_0x582325(0x7db)][_0x582325(0x1df)][_0x5837c8])return VisuMZ[_0x582325(0x7db)][_0x582325(0x1df)][_0x5837c8];return'';},TextManager[_0x23b15a(0x310)]=function(_0x22fa48){const _0x2ec29c=_0x23b15a,_0x1421eb=Input[_0x2ec29c(0x1e3)]();return _0x1421eb==='\x4b\x65\x79\x62\x6f\x61\x72\x64'?this[_0x2ec29c(0x758)](_0x22fa48):this[_0x2ec29c(0x6f7)](_0x1421eb,_0x22fa48);},TextManager[_0x23b15a(0x758)]=function(_0x461dca){const _0x26694b=_0x23b15a;let _0xd6140b=VisuMZ[_0x26694b(0x7db)][_0x26694b(0x742)]['\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74'][_0x26694b(0x36b)];!_0xd6140b&&(_0x461dca==='\x63\x61\x6e\x63\x65\x6c'&&(_0x461dca=_0x26694b(0x4d8)),_0x461dca===_0x26694b(0x589)&&(_0x461dca=_0x26694b(0x4d8)));let _0x362488=[];for(let _0x3c5715 in Input[_0x26694b(0x8a8)]){_0x3c5715=Number(_0x3c5715);if(_0x3c5715>=0x60&&_0x3c5715<=0x69)continue;if([0x12,0x20]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x3c5715))continue;_0x461dca===Input[_0x26694b(0x8a8)][_0x3c5715]&&_0x362488[_0x26694b(0x2b9)](_0x3c5715);}for(let _0x1170fe=0x0;_0x1170fe<_0x362488[_0x26694b(0x699)];_0x1170fe++){_0x362488[_0x1170fe]=TextManager['\x73\x74\x72\x69\x6e\x67\x4b\x65\x79\x4d\x61\x70'][_0x362488[_0x1170fe]];}return this[_0x26694b(0x2e0)](_0x362488);},TextManager[_0x23b15a(0x2e0)]=function(_0x4a2813){const _0x35a783=_0x23b15a,_0x50d640=VisuMZ[_0x35a783(0x7db)][_0x35a783(0x742)][_0x35a783(0x35f)],_0x2dfb82=_0x50d640[_0x35a783(0x3e1)];let _0x1754c0='';if(_0x4a2813['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x55\x50'))_0x1754c0='\x55\x50';else{if(_0x4a2813['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x35a783(0x173)))_0x1754c0=_0x35a783(0x173);else{if(_0x4a2813[_0x35a783(0x313)](_0x35a783(0x781)))_0x1754c0=_0x35a783(0x781);else _0x4a2813[_0x35a783(0x313)]('\x52\x49\x47\x48\x54')?_0x1754c0=_0x35a783(0x938):_0x1754c0=_0x4a2813[_0x35a783(0x418)]();}}const _0x58d804=_0x35a783(0x51c)[_0x35a783(0x8ca)](_0x1754c0);return _0x50d640[_0x58d804]?_0x50d640[_0x58d804]:_0x2dfb82[_0x35a783(0x8ca)](_0x1754c0);},TextManager[_0x23b15a(0x4e1)]=function(_0x3332b9,_0x1fe7d2){const _0x2df3a1=_0x23b15a,_0xd7203d=VisuMZ[_0x2df3a1(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2df3a1(0x35f)],_0xae923=_0xd7203d[_0x2df3a1(0x13c)],_0x12451c=this[_0x2df3a1(0x310)](_0x3332b9),_0x12f76a=this[_0x2df3a1(0x310)](_0x1fe7d2);return _0xae923[_0x2df3a1(0x8ca)](_0x12451c,_0x12f76a);},TextManager[_0x23b15a(0x6f7)]=function(_0x3c4101,_0x587531){const _0x5a24bd=_0x23b15a,_0x2fbdfa=_0x3c4101['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']()[_0x5a24bd(0x811)](),_0x1066bf=VisuMZ[_0x5a24bd(0x7db)][_0x5a24bd(0x4ef)][_0x2fbdfa];if(!_0x1066bf)return this[_0x5a24bd(0x369)](_0x3c4101,_0x587531);return _0x1066bf[_0x587531]||this[_0x5a24bd(0x758)](_0x3c4101,_0x587531);},TextManager[_0x23b15a(0x369)]=function(_0x2344e8,_0xdc04d9){const _0x11a2c2=_0x23b15a,_0xd15887=_0x2344e8[_0x11a2c2(0x597)]()[_0x11a2c2(0x811)]();for(const _0x2f724a in VisuMZ[_0x11a2c2(0x7db)]['\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x4d\x61\x74\x63\x68\x65\x73']){if(_0xd15887['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2f724a)){const _0x2c2647=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x11a2c2(0x520)][_0x2f724a],_0x4712bc=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x11a2c2(0x4ef)][_0x2c2647];return _0x4712bc[_0xdc04d9]||this[_0x11a2c2(0x758)](_0xdc04d9);}}return this[_0x11a2c2(0x758)](_0xdc04d9);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x41f)]=ColorManager[_0x23b15a(0x772)],ColorManager['\x6c\x6f\x61\x64\x57\x69\x6e\x64\x6f\x77\x73\x6b\x69\x6e']=function(){const _0x23b18e=_0x23b15a;VisuMZ[_0x23b18e(0x7db)]['\x43\x6f\x6c\x6f\x72\x4d\x61\x6e\x61\x67\x65\x72\x5f\x6c\x6f\x61\x64\x57\x69\x6e\x64\x6f\x77\x73\x6b\x69\x6e'][_0x23b18e(0x744)](this),this[_0x23b18e(0x6fc)]=this[_0x23b18e(0x6fc)]||{};},ColorManager['\x67\x65\x74\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61\x46\x72\x6f\x6d\x50\x6c\x75\x67\x69\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73']=function(_0x440e69,_0x12e88a){const _0x5b8f8f=_0x23b15a;return _0x12e88a=String(_0x12e88a),this[_0x5b8f8f(0x6fc)]=this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']||{},_0x12e88a[_0x5b8f8f(0x70d)](/#(.*)/i)?this[_0x5b8f8f(0x6fc)][_0x440e69]='\x23\x25\x31'[_0x5b8f8f(0x8ca)](String(RegExp['\x24\x31'])):this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x440e69]=this[_0x5b8f8f(0x30e)](Number(_0x12e88a)),this[_0x5b8f8f(0x6fc)][_0x440e69];},ColorManager[_0x23b15a(0x78e)]=function(_0x2bbb98){const _0x5d0c42=_0x23b15a;return _0x2bbb98=String(_0x2bbb98),_0x2bbb98[_0x5d0c42(0x70d)](/#(.*)/i)?'\x23\x25\x31'[_0x5d0c42(0x8ca)](String(RegExp['\x24\x31'])):this[_0x5d0c42(0x30e)](Number(_0x2bbb98));},ColorManager[_0x23b15a(0x841)]=function(){const _0xe48e02=_0x23b15a;this[_0xe48e02(0x6fc)]={};},ColorManager['\x6e\x6f\x72\x6d\x61\x6c\x43\x6f\x6c\x6f\x72']=function(){const _0x420542=_0x23b15a;this[_0x420542(0x6fc)]=this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']||{};if(this[_0x420542(0x6fc)][_0x420542(0x4f3)])return this[_0x420542(0x6fc)][_0x420542(0x4f3)];const _0x5c42c0=VisuMZ[_0x420542(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x420542(0x532)][_0x420542(0x18c)];return this['\x67\x65\x74\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61\x46\x72\x6f\x6d\x50\x6c\x75\x67\x69\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x420542(0x4f3),_0x5c42c0);},ColorManager[_0x23b15a(0x8a4)]=function(){const _0x20ce62=_0x23b15a;this[_0x20ce62(0x6fc)]=this[_0x20ce62(0x6fc)]||{};if(this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x20ce62(0x248)])return this[_0x20ce62(0x6fc)][_0x20ce62(0x248)];const _0x421b86=VisuMZ[_0x20ce62(0x7db)][_0x20ce62(0x742)][_0x20ce62(0x532)][_0x20ce62(0x88b)];return this[_0x20ce62(0x505)]('\x5f\x73\x74\x6f\x72\x65\x64\x5f\x73\x79\x73\x74\x65\x6d\x43\x6f\x6c\x6f\x72',_0x421b86);},ColorManager['\x63\x72\x69\x73\x69\x73\x43\x6f\x6c\x6f\x72']=function(){const _0x5cbec9=_0x23b15a;this[_0x5cbec9(0x6fc)]=this[_0x5cbec9(0x6fc)]||{};if(this[_0x5cbec9(0x6fc)][_0x5cbec9(0x12b)])return this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x5cbec9(0x12b)];const _0xceb3d7=VisuMZ[_0x5cbec9(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x43\x6f\x6c\x6f\x72'][_0x5cbec9(0x36f)];return this[_0x5cbec9(0x505)]('\x5f\x73\x74\x6f\x72\x65\x64\x5f\x63\x72\x69\x73\x69\x73\x43\x6f\x6c\x6f\x72',_0xceb3d7);},ColorManager[_0x23b15a(0x5c6)]=function(){const _0xd65905=_0x23b15a;this[_0xd65905(0x6fc)]=this[_0xd65905(0x6fc)]||{};if(this[_0xd65905(0x6fc)][_0xd65905(0x534)])return this[_0xd65905(0x6fc)][_0xd65905(0x534)];const _0x1b09ad=VisuMZ[_0xd65905(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x43\x6f\x6c\x6f\x72'][_0xd65905(0x48b)];return this[_0xd65905(0x505)](_0xd65905(0x534),_0x1b09ad);},ColorManager[_0x23b15a(0x6a9)]=function(){const _0x2537cb=_0x23b15a;this[_0x2537cb(0x6fc)]=this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']||{};if(this[_0x2537cb(0x6fc)][_0x2537cb(0x47e)])return this[_0x2537cb(0x6fc)][_0x2537cb(0x47e)];const _0x11c2d2=VisuMZ[_0x2537cb(0x7db)][_0x2537cb(0x742)][_0x2537cb(0x532)][_0x2537cb(0x743)];return this['\x67\x65\x74\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61\x46\x72\x6f\x6d\x50\x6c\x75\x67\x69\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x2537cb(0x47e),_0x11c2d2);},ColorManager[_0x23b15a(0x178)]=function(){const _0x4135ae=_0x23b15a;this[_0x4135ae(0x6fc)]=this[_0x4135ae(0x6fc)]||{};if(this[_0x4135ae(0x6fc)][_0x4135ae(0x854)])return this[_0x4135ae(0x6fc)][_0x4135ae(0x854)];const _0x3e86c5=VisuMZ[_0x4135ae(0x7db)][_0x4135ae(0x742)][_0x4135ae(0x532)]['\x43\x6f\x6c\x6f\x72\x48\x50\x47\x61\x75\x67\x65\x31'];return this[_0x4135ae(0x505)]('\x5f\x73\x74\x6f\x72\x65\x64\x5f\x68\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31',_0x3e86c5);},ColorManager[_0x23b15a(0x4f6)]=function(){const _0x12c489=_0x23b15a;this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']=this[_0x12c489(0x6fc)]||{};if(this[_0x12c489(0x6fc)][_0x12c489(0x8c6)])return this[_0x12c489(0x6fc)][_0x12c489(0x8c6)];const _0x49069b=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x12c489(0x532)][_0x12c489(0x871)];return this[_0x12c489(0x505)](_0x12c489(0x8c6),_0x49069b);},ColorManager[_0x23b15a(0x8eb)]=function(){const _0xc3cd8b=_0x23b15a;this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']=this[_0xc3cd8b(0x6fc)]||{};if(this[_0xc3cd8b(0x6fc)][_0xc3cd8b(0x1b0)])return this[_0xc3cd8b(0x6fc)][_0xc3cd8b(0x1b0)];const _0x18981b=VisuMZ[_0xc3cd8b(0x7db)][_0xc3cd8b(0x742)]['\x43\x6f\x6c\x6f\x72'][_0xc3cd8b(0x55c)];return this[_0xc3cd8b(0x505)](_0xc3cd8b(0x1b0),_0x18981b);},ColorManager['\x6d\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32']=function(){const _0x269aa2=_0x23b15a;this[_0x269aa2(0x6fc)]=this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']||{};if(this[_0x269aa2(0x6fc)]['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32'])return this[_0x269aa2(0x6fc)]['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32'];const _0x1917c0=VisuMZ[_0x269aa2(0x7db)][_0x269aa2(0x742)][_0x269aa2(0x532)][_0x269aa2(0x375)];return this[_0x269aa2(0x505)](_0x269aa2(0x1f7),_0x1917c0);},ColorManager[_0x23b15a(0x331)]=function(){const _0x2d8c51=_0x23b15a;this[_0x2d8c51(0x6fc)]=this[_0x2d8c51(0x6fc)]||{};if(this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x2d8c51(0x797)])return this[_0x2d8c51(0x6fc)][_0x2d8c51(0x797)];const _0x1b93b7=VisuMZ[_0x2d8c51(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2d8c51(0x532)][_0x2d8c51(0x795)];return this[_0x2d8c51(0x505)](_0x2d8c51(0x797),_0x1b93b7);},ColorManager[_0x23b15a(0x64f)]=function(){const _0x561fc4=_0x23b15a;this[_0x561fc4(0x6fc)]=this[_0x561fc4(0x6fc)]||{};if(this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x561fc4(0x2c4)])return this[_0x561fc4(0x6fc)][_0x561fc4(0x2c4)];const _0xeb4ee1=VisuMZ[_0x561fc4(0x7db)][_0x561fc4(0x742)][_0x561fc4(0x532)][_0x561fc4(0x3c3)];return this['\x67\x65\x74\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61\x46\x72\x6f\x6d\x50\x6c\x75\x67\x69\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x561fc4(0x2c4),_0xeb4ee1);},ColorManager['\x70\x6f\x77\x65\x72\x44\x6f\x77\x6e\x43\x6f\x6c\x6f\x72']=function(){const _0x1a5974=_0x23b15a;this[_0x1a5974(0x6fc)]=this[_0x1a5974(0x6fc)]||{};if(this[_0x1a5974(0x6fc)][_0x1a5974(0x235)])return this[_0x1a5974(0x6fc)]['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x70\x6f\x77\x65\x72\x44\x6f\x77\x6e\x43\x6f\x6c\x6f\x72'];const _0x5909a9=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x1a5974(0x532)][_0x1a5974(0x3bc)];return this[_0x1a5974(0x505)](_0x1a5974(0x235),_0x5909a9);},ColorManager[_0x23b15a(0x53d)]=function(){const _0x1bbef4=_0x23b15a;this[_0x1bbef4(0x6fc)]=this[_0x1bbef4(0x6fc)]||{};if(this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x63\x74\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31'])return this[_0x1bbef4(0x6fc)]['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x63\x74\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31'];const _0x32ca2a=VisuMZ[_0x1bbef4(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x1bbef4(0x532)][_0x1bbef4(0x4fd)];return this[_0x1bbef4(0x505)](_0x1bbef4(0x833),_0x32ca2a);},ColorManager[_0x23b15a(0x47f)]=function(){const _0x41c889=_0x23b15a;this[_0x41c889(0x6fc)]=this[_0x41c889(0x6fc)]||{};if(this[_0x41c889(0x6fc)][_0x41c889(0x144)])return this[_0x41c889(0x6fc)][_0x41c889(0x144)];const _0x198254=VisuMZ[_0x41c889(0x7db)][_0x41c889(0x742)][_0x41c889(0x532)][_0x41c889(0x377)];return this['\x67\x65\x74\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61\x46\x72\x6f\x6d\x50\x6c\x75\x67\x69\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73'](_0x41c889(0x144),_0x198254);},ColorManager[_0x23b15a(0x576)]=function(){const _0x3f199a=_0x23b15a;this[_0x3f199a(0x6fc)]=this[_0x3f199a(0x6fc)]||{};if(this[_0x3f199a(0x6fc)][_0x3f199a(0x3f0)])return this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x3f199a(0x3f0)];const _0x59d822=VisuMZ[_0x3f199a(0x7db)][_0x3f199a(0x742)][_0x3f199a(0x532)][_0x3f199a(0x5d6)];return this[_0x3f199a(0x505)](_0x3f199a(0x3f0),_0x59d822);},ColorManager[_0x23b15a(0x5b6)]=function(){const _0x1fe0fa=_0x23b15a;this[_0x1fe0fa(0x6fc)]=this[_0x1fe0fa(0x6fc)]||{};if(this[_0x1fe0fa(0x6fc)][_0x1fe0fa(0x3e0)])return this[_0x1fe0fa(0x6fc)][_0x1fe0fa(0x3e0)];const _0x16467c=VisuMZ[_0x1fe0fa(0x7db)][_0x1fe0fa(0x742)]['\x43\x6f\x6c\x6f\x72'][_0x1fe0fa(0x79b)];return this[_0x1fe0fa(0x505)]('\x5f\x73\x74\x6f\x72\x65\x64\x5f\x74\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32',_0x16467c);},ColorManager[_0x23b15a(0x679)]=function(){const _0x4cd27f=_0x23b15a;this[_0x4cd27f(0x6fc)]=this[_0x4cd27f(0x6fc)]||{};if(this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65'][_0x4cd27f(0x332)])return this[_0x4cd27f(0x6fc)][_0x4cd27f(0x332)];const _0x392f5a=VisuMZ[_0x4cd27f(0x7db)][_0x4cd27f(0x742)][_0x4cd27f(0x532)][_0x4cd27f(0x1fd)];return this[_0x4cd27f(0x505)](_0x4cd27f(0x332),_0x392f5a);},ColorManager[_0x23b15a(0x6b6)]=function(){const _0x30f139=_0x23b15a;this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']=this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']||{};if(this[_0x30f139(0x6fc)][_0x30f139(0x587)])return this[_0x30f139(0x6fc)][_0x30f139(0x587)];const _0x33975d=VisuMZ[_0x30f139(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x30f139(0x532)]['\x43\x6f\x6c\x6f\x72\x54\x50\x43\x6f\x73\x74'];return this[_0x30f139(0x505)](_0x30f139(0x587),_0x33975d);},ColorManager[_0x23b15a(0x1f6)]=function(){const _0x3620c3=_0x23b15a;this[_0x3620c3(0x6fc)]=this[_0x3620c3(0x6fc)]||{};if(this[_0x3620c3(0x6fc)]['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31'])return this[_0x3620c3(0x6fc)][_0x3620c3(0x33f)];const _0x1fb4d6=VisuMZ[_0x3620c3(0x7db)][_0x3620c3(0x742)][_0x3620c3(0x532)][_0x3620c3(0x856)];return this[_0x3620c3(0x505)](_0x3620c3(0x33f),_0x1fb4d6);},ColorManager['\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32']=function(){const _0x2545e2=_0x23b15a;this[_0x2545e2(0x6fc)]=this['\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65']||{};if(this[_0x2545e2(0x6fc)]['\x5f\x73\x74\x6f\x72\x65\x64\x5f\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32'])return this[_0x2545e2(0x6fc)][_0x2545e2(0x267)];const _0x294330=VisuMZ[_0x2545e2(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2545e2(0x532)][_0x2545e2(0x1c8)];return this[_0x2545e2(0x505)](_0x2545e2(0x267),_0x294330);},ColorManager[_0x23b15a(0x4d1)]=function(){const _0x763228=_0x23b15a;this[_0x763228(0x6fc)]=this[_0x763228(0x6fc)]||{};if(this[_0x763228(0x6fc)][_0x763228(0x6e0)])return this[_0x763228(0x6fc)][_0x763228(0x6e0)];const _0x2c1aec=VisuMZ[_0x763228(0x7db)][_0x763228(0x742)][_0x763228(0x532)]['\x43\x6f\x6c\x6f\x72\x4d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x31'];return this[_0x763228(0x505)](_0x763228(0x6e0),_0x2c1aec);},ColorManager[_0x23b15a(0x5c3)]=function(){const _0x2f0757=_0x23b15a;this[_0x2f0757(0x6fc)]=this[_0x2f0757(0x6fc)]||{};if(this[_0x2f0757(0x6fc)][_0x2f0757(0x307)])return this[_0x2f0757(0x6fc)][_0x2f0757(0x307)];const _0x4d77f9=VisuMZ[_0x2f0757(0x7db)][_0x2f0757(0x742)][_0x2f0757(0x532)][_0x2f0757(0x6d0)];return this[_0x2f0757(0x505)]('\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32',_0x4d77f9);},ColorManager[_0x23b15a(0x835)]=function(_0x2167fb){const _0x3a911d=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x3a911d(0x532)][_0x3a911d(0x2ff)][_0x3a911d(0x744)](this,_0x2167fb);},ColorManager[_0x23b15a(0x192)]=function(_0x1c3d99){const _0x4ab8aa=_0x23b15a;return VisuMZ[_0x4ab8aa(0x7db)][_0x4ab8aa(0x742)]['\x43\x6f\x6c\x6f\x72'][_0x4ab8aa(0x6da)][_0x4ab8aa(0x744)](this,_0x1c3d99);},ColorManager[_0x23b15a(0x780)]=function(_0x598275){const _0x5405cf=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x5405cf(0x532)][_0x5405cf(0x1fe)]['\x63\x61\x6c\x6c'](this,_0x598275);},ColorManager['\x70\x61\x72\x61\x6d\x63\x68\x61\x6e\x67\x65\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72']=function(_0x4bbdb4){const _0x1c4e4c=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x43\x6f\x6c\x6f\x72'][_0x1c4e4c(0x367)][_0x1c4e4c(0x744)](this,_0x4bbdb4);},ColorManager[_0x23b15a(0x399)]=function(_0x476969){const _0x387fb0=_0x23b15a;return VisuMZ[_0x387fb0(0x7db)][_0x387fb0(0x742)]['\x43\x6f\x6c\x6f\x72'][_0x387fb0(0x598)][_0x387fb0(0x744)](this,_0x476969);},ColorManager[_0x23b15a(0x122)]=function(){const _0x537334=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x537334(0x742)][_0x537334(0x532)][_0x537334(0x6b1)];},ColorManager[_0x23b15a(0x475)]=function(){const _0x42b0ac=_0x23b15a;return VisuMZ[_0x42b0ac(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x42b0ac(0x532)][_0x42b0ac(0x5f8)]||_0x42b0ac(0x66f);},ColorManager[_0x23b15a(0x509)]=function(){const _0x989af5=_0x23b15a;return VisuMZ[_0x989af5(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x43\x6f\x6c\x6f\x72']['\x4f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72\x47\x61\x75\x67\x65']||_0x989af5(0x728);},ColorManager[_0x23b15a(0x766)]=function(){const _0x41fbed=_0x23b15a;return VisuMZ[_0x41fbed(0x7db)][_0x41fbed(0x742)][_0x41fbed(0x532)][_0x41fbed(0x87c)];},ColorManager[_0x23b15a(0x506)]=function(){const _0x2d2fca=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x2d2fca(0x742)][_0x2d2fca(0x532)][_0x2d2fca(0x4da)];},ColorManager[_0x23b15a(0x211)]=function(){const _0x3d0576=_0x23b15a;return VisuMZ[_0x3d0576(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x3d0576(0x532)]['\x49\x74\x65\x6d\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72\x31'];},ColorManager['\x69\x74\x65\x6d\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72\x32']=function(){const _0x2523e6=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x2523e6(0x742)]['\x43\x6f\x6c\x6f\x72'][_0x2523e6(0x8c3)];},SceneManager[_0x23b15a(0x11e)]=[],SceneManager['\x69\x73\x53\x63\x65\x6e\x65\x42\x61\x74\x74\x6c\x65']=function(){const _0x479e6c=_0x23b15a;return this['\x5f\x73\x63\x65\x6e\x65']&&this[_0x479e6c(0x753)]['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']===Scene_Battle;},SceneManager['\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70']=function(){const _0x3ce58b=_0x23b15a;return this[_0x3ce58b(0x753)]&&this[_0x3ce58b(0x753)][_0x3ce58b(0x319)]===Scene_Map;},SceneManager[_0x23b15a(0x158)]=function(){const _0x3bd8b2=_0x23b15a;return this[_0x3bd8b2(0x753)]&&this[_0x3bd8b2(0x753)]instanceof Scene_Map;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x560)]=SceneManager[_0x23b15a(0x46d)],SceneManager[_0x23b15a(0x46d)]=function(){const _0x3df339=_0x23b15a;VisuMZ[_0x3df339(0x7db)][_0x3df339(0x560)][_0x3df339(0x744)](this),this[_0x3df339(0x1d2)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4b0)]=SceneManager[_0x23b15a(0x72f)],SceneManager[_0x23b15a(0x72f)]=function(_0x37886f){const _0x43f27f=_0x23b15a;$gameTemp&&this['\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e\x4b\x65\x79\x73\x46\x36\x46\x37'](_0x37886f),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x63\x65\x6e\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e'][_0x43f27f(0x744)](this,_0x37886f);},SceneManager['\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e\x4b\x65\x79\x73\x46\x36\x46\x37']=function(_0x300baf){const _0x5d5f79=_0x23b15a;if(!_0x300baf[_0x5d5f79(0x472)]&&!_0x300baf[_0x5d5f79(0x88c)])switch(_0x300baf[_0x5d5f79(0x7cd)]){case 0x52:this['\x70\x6c\x61\x79\x54\x65\x73\x74\x53\x68\x69\x66\x74\x52']();break;case 0x54:this[_0x5d5f79(0x5db)]();break;case 0x75:this['\x70\x6c\x61\x79\x54\x65\x73\x74\x46\x36']();break;case 0x76:if(Input['\x69\x73\x50\x72\x65\x73\x73\x65\x64'](_0x5d5f79(0x27a))||Input['\x69\x73\x50\x72\x65\x73\x73\x65\x64'](_0x5d5f79(0x43b)))return;this[_0x5d5f79(0x2ce)]();break;}else{if(_0x300baf['\x63\x74\x72\x6c\x4b\x65\x79']){let _0x35a5fa=_0x300baf[_0x5d5f79(0x7cd)];if(_0x35a5fa>=0x31&&_0x35a5fa<=0x39){const _0x487a33=_0x35a5fa-0x30;return SceneManager[_0x5d5f79(0x1db)](_0x487a33);}else{if(_0x35a5fa>=0x61&&_0x35a5fa<=0x69){const _0x48a94a=_0x35a5fa-0x60;return SceneManager['\x70\x6c\x61\x79\x74\x65\x73\x74\x51\x75\x69\x63\x6b\x4c\x6f\x61\x64'](_0x48a94a);}}}}},SceneManager[_0x23b15a(0x6ef)]=function(){const _0x3b346e=_0x23b15a;$gameTemp[_0x3b346e(0x3e7)]()&&VisuMZ[_0x3b346e(0x7db)][_0x3b346e(0x742)]['\x51\x6f\x4c'][_0x3b346e(0x30c)]&&(ConfigManager[_0x3b346e(0x7ef)]!==0x0?(ConfigManager[_0x3b346e(0x5f9)]=0x0,ConfigManager[_0x3b346e(0x37c)]=0x0,ConfigManager['\x6d\x65\x56\x6f\x6c\x75\x6d\x65']=0x0,ConfigManager[_0x3b346e(0x7ef)]=0x0):(ConfigManager[_0x3b346e(0x5f9)]=0x64,ConfigManager[_0x3b346e(0x37c)]=0x64,ConfigManager[_0x3b346e(0x1a2)]=0x64,ConfigManager['\x73\x65\x56\x6f\x6c\x75\x6d\x65']=0x64),ConfigManager[_0x3b346e(0x6f0)](),this[_0x3b346e(0x753)][_0x3b346e(0x319)]===Scene_Options&&(this[_0x3b346e(0x753)]['\x5f\x6f\x70\x74\x69\x6f\x6e\x73\x57\x69\x6e\x64\x6f\x77']&&this[_0x3b346e(0x753)][_0x3b346e(0x880)][_0x3b346e(0x308)](),this['\x5f\x73\x63\x65\x6e\x65'][_0x3b346e(0x27f)]&&this['\x5f\x73\x63\x65\x6e\x65']['\x5f\x6c\x69\x73\x74\x57\x69\x6e\x64\x6f\x77'][_0x3b346e(0x308)]()));},SceneManager[_0x23b15a(0x2ce)]=function(){const _0x153133=_0x23b15a;$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x153133(0x875)][_0x153133(0x263)]&&($gameTemp[_0x153133(0x7f8)]=!$gameTemp['\x5f\x70\x6c\x61\x79\x54\x65\x73\x74\x46\x61\x73\x74\x4d\x6f\x64\x65']);},SceneManager[_0x23b15a(0x52c)]=function(){const _0x136c3b=_0x23b15a;if(!VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x136c3b(0x742)][_0x136c3b(0x875)]['\x53\x68\x69\x66\x74\x52\x5f\x54\x6f\x67\x67\x6c\x65'])return;if(!$gameTemp[_0x136c3b(0x3e7)]())return;if(!SceneManager[_0x136c3b(0x546)]())return;if(!Input[_0x136c3b(0x826)](_0x136c3b(0x27a)))return;for(const _0x4cfeec of $gameParty[_0x136c3b(0x6fd)]()){if(!_0x4cfeec)continue;_0x4cfeec[_0x136c3b(0x78a)]();}},SceneManager['\x70\x6c\x61\x79\x54\x65\x73\x74\x53\x68\x69\x66\x74\x54']=function(){const _0x43ec1a=_0x23b15a;if(!VisuMZ[_0x43ec1a(0x7db)][_0x43ec1a(0x742)][_0x43ec1a(0x875)][_0x43ec1a(0x35a)])return;if(!$gameTemp[_0x43ec1a(0x3e7)]())return;if(!SceneManager[_0x43ec1a(0x546)]())return;if(!Input['\x69\x73\x50\x72\x65\x73\x73\x65\x64']('\x73\x68\x69\x66\x74'))return;for(const _0x6e9a45 of $gameParty[_0x43ec1a(0x6fd)]()){if(!_0x6e9a45)continue;_0x6e9a45[_0x43ec1a(0x75a)](_0x6e9a45[_0x43ec1a(0x2a0)]());}},SceneManager[_0x23b15a(0x1db)]=function(_0x47fd26){const _0x4106d9=_0x23b15a;if(!$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']())return;if(!DataManager['\x73\x61\x76\x65\x66\x69\x6c\x65\x49\x6e\x66\x6f'](_0x47fd26))return;if(!(VisuMZ[_0x4106d9(0x7db)][_0x4106d9(0x742)][_0x4106d9(0x875)][_0x4106d9(0x588)]??!![]))return;this['\x70\x75\x73\x68'](Scene_QuickLoad),this[_0x4106d9(0x4ff)](_0x47fd26);},SceneManager[_0x23b15a(0x1d2)]=function(){const _0x2c56c6=_0x23b15a;this['\x5f\x73\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']=![],this[_0x2c56c6(0x66e)]=!VisuMZ[_0x2c56c6(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x55\x49'][_0x2c56c6(0x76e)];},SceneManager[_0x23b15a(0x483)]=function(_0x18c431){const _0x4c134b=_0x23b15a;VisuMZ[_0x4c134b(0x7db)][_0x4c134b(0x742)]['\x55\x49'][_0x4c134b(0x4e0)]&&(this[_0x4c134b(0x8ba)]=_0x18c431);},SceneManager['\x69\x73\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']=function(){return this['\x5f\x73\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74'];},SceneManager[_0x23b15a(0x652)]=function(){const _0x281491=_0x23b15a;return this[_0x281491(0x66e)];},SceneManager['\x61\x72\x65\x42\x75\x74\x74\x6f\x6e\x73\x4f\x75\x74\x73\x69\x64\x65\x4d\x61\x69\x6e\x55\x49']=function(){const _0x1bc2fa=_0x23b15a;return this[_0x1bc2fa(0x652)]()||this[_0x1bc2fa(0x6e2)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4d9)]=SceneManager[_0x23b15a(0x1f9)],SceneManager[_0x23b15a(0x1f9)]=function(){const _0x4ac5c3=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x4ac5c3(0x742)]['\x51\x6f\x4c'][_0x4ac5c3(0x537)]?VisuMZ[_0x4ac5c3(0x7db)][_0x4ac5c3(0x4d9)][_0x4ac5c3(0x744)](this):!![];},SceneManager[_0x23b15a(0x8a6)]=function(_0x5432b6){const _0x188603=_0x23b15a;if(_0x5432b6 instanceof Error)this[_0x188603(0x8e1)](_0x5432b6);else _0x5432b6 instanceof Array&&_0x5432b6[0x0]===_0x188603(0x4dd)?this['\x63\x61\x74\x63\x68\x4c\x6f\x61\x64\x45\x72\x72\x6f\x72'](_0x5432b6):this[_0x188603(0x68f)](_0x5432b6);this[_0x188603(0x878)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x214)]=BattleManager[_0x23b15a(0x85f)],BattleManager[_0x23b15a(0x85f)]=function(){const _0x30b649=_0x23b15a;return VisuMZ[_0x30b649(0x7db)][_0x30b649(0x742)][_0x30b649(0x875)][_0x30b649(0x876)]?this[_0x30b649(0x216)]():VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x30b649(0x214)]['\x63\x61\x6c\x6c'](this);},BattleManager[_0x23b15a(0x216)]=function(){const _0x80d271=_0x23b15a;return $gameParty[_0x80d271(0x183)](),SoundManager[_0x80d271(0x8c8)](),this['\x6f\x6e\x45\x73\x63\x61\x70\x65\x53\x75\x63\x63\x65\x73\x73'](),!![];},BattleManager[_0x23b15a(0x8e7)]=function(){const _0x23015b=_0x23b15a;return $gameSystem[_0x23015b(0x5ad)]()>=0x1;},BattleManager[_0x23b15a(0x51e)]=function(){const _0x134d7b=_0x23b15a;return $gameSystem[_0x134d7b(0x5ad)]()===0x1;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x508)]=Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(){const _0xc6938a=_0x23b15a;VisuMZ[_0xc6938a(0x7db)]['\x47\x61\x6d\x65\x5f\x54\x65\x6d\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'][_0xc6938a(0x744)](this),this[_0xc6938a(0x1c6)](),this['\x63\x72\x65\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65'](),this[_0xc6938a(0x721)]();},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x1c6)]=function(){const _0x46fbb1=_0x23b15a;VisuMZ[_0x46fbb1(0x7db)][_0x46fbb1(0x742)]['\x51\x6f\x4c'][_0x46fbb1(0x510)]&&(this['\x5f\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']=![]);},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x7d7)]=function(_0x341948){const _0x1522b3=_0x23b15a;this[_0x1522b3(0x887)]=_0x341948;},Game_Temp[_0x23b15a(0x8ea)]['\x67\x65\x74\x4c\x61\x73\x74\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']=function(){const _0x1f619e=_0x23b15a;return this[_0x1f619e(0x887)];},Game_Temp['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x1af)]=function(){const _0x1555c6=_0x23b15a;this['\x5f\x66\x6f\x72\x63\x65\x64\x54\x72\x6f\x6f\x70\x56\x69\x65\x77']=undefined,this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=undefined,this[_0x1555c6(0x563)]=undefined;},Game_Temp[_0x23b15a(0x8ea)]['\x61\x70\x70\x6c\x79\x46\x6f\x72\x63\x65\x64\x47\x61\x6d\x65\x54\x72\x6f\x6f\x70\x53\x65\x74\x74\x69\x6e\x67\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']=function(_0x2412d8){const _0x27301f=_0x23b15a;$gameMap&&$dataMap&&$dataMap[_0x27301f(0x47c)]&&this[_0x27301f(0x806)]($dataMap['\x6e\x6f\x74\x65']);const _0xbdcf78=$dataTroops[_0x2412d8];if(_0xbdcf78){let _0x51f481=DataManager[_0x27301f(0x179)](_0xbdcf78['\x69\x64']);this['\x70\x61\x72\x73\x65\x46\x6f\x72\x63\x65\x64\x47\x61\x6d\x65\x54\x72\x6f\x6f\x70\x53\x65\x74\x74\x69\x6e\x67\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](_0x51f481);}},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x806)]=function(_0x40b38c){const _0x3e344d=_0x23b15a;if(!_0x40b38c)return;if(_0x40b38c[_0x3e344d(0x70d)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this['\x5f\x66\x6f\x72\x63\x65\x64\x54\x72\x6f\x6f\x70\x56\x69\x65\x77']='\x46\x56';else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))this[_0x3e344d(0x193)]='\x53\x56';else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x5b2eb6=String(RegExp['\x24\x31']);if(_0x5b2eb6[_0x3e344d(0x70d)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x3e344d(0x193)]='\x46\x56';else _0x5b2eb6[_0x3e344d(0x70d)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x3e344d(0x193)]='\x53\x56');}}}if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:DTB)>/i))this[_0x3e344d(0x918)]=0x0;else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x3e344d(0x918)]=0x1;else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:TPB|ATB)[ ]WAIT>/i))this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=0x2;else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:TPB|ATB)>/i))this[_0x3e344d(0x918)]=0x2;else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:CTB)>/i))Imported[_0x3e344d(0x6df)]&&(this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=_0x3e344d(0x634));else{if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:STB)>/i))Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x53\x54\x42']&&(this[_0x3e344d(0x918)]=_0x3e344d(0x7e3));else{if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:BTB)>/i))Imported[_0x3e344d(0x18d)]&&(this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']='\x42\x54\x42');else{if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:FTB)>/i))Imported[_0x3e344d(0x1a4)]&&(this[_0x3e344d(0x918)]=_0x3e344d(0x8fe));else{if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:OTB)>/i))Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x4f\x54\x42']&&(this[_0x3e344d(0x918)]=_0x3e344d(0x8cd));else{if(_0x40b38c[_0x3e344d(0x70d)](/<(?:ETB)>/i))Imported[_0x3e344d(0x64c)]&&(this[_0x3e344d(0x918)]=_0x3e344d(0x7b9));else{if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:PTB)>/i))Imported[_0x3e344d(0x3fb)]&&(this[_0x3e344d(0x918)]=_0x3e344d(0x673));else{if(_0x40b38c['\x6d\x61\x74\x63\x68'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x3dabfa=String(RegExp['\x24\x31']);if(_0x3dabfa['\x6d\x61\x74\x63\x68'](/DTB/i))this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=0x0;else{if(_0x3dabfa[_0x3e344d(0x70d)](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x3e344d(0x918)]=0x1;else{if(_0x3dabfa[_0x3e344d(0x70d)](/(?:TPB|ATB)[ ]WAIT/i))this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=0x2;else{if(_0x3dabfa[_0x3e344d(0x70d)](/CTB/i))Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x43\x54\x42']&&(this[_0x3e344d(0x918)]=_0x3e344d(0x634));else{if(_0x3dabfa[_0x3e344d(0x70d)](/STB/i))Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x53\x54\x42']&&(this[_0x3e344d(0x918)]=_0x3e344d(0x7e3));else{if(_0x3dabfa[_0x3e344d(0x70d)](/BTB/i))Imported[_0x3e344d(0x18d)]&&(this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=_0x3e344d(0x6ee));else{if(_0x3dabfa[_0x3e344d(0x70d)](/FTB/i))Imported[_0x3e344d(0x1a4)]&&(this[_0x3e344d(0x918)]=_0x3e344d(0x8fe));else{if(_0x3dabfa[_0x3e344d(0x70d)](/OTB/i))Imported[_0x3e344d(0x6d8)]&&(this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']=_0x3e344d(0x8cd));else{if(_0x3dabfa[_0x3e344d(0x70d)](/ETB/i))Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x45\x54\x42']&&(this['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']='\x45\x54\x42');else _0x3dabfa[_0x3e344d(0x70d)](/PTB/i)&&(Imported[_0x3e344d(0x3fb)]&&(this[_0x3e344d(0x918)]=_0x3e344d(0x673)));}}}}}}}}}}}}}}}}}}}}if(_0x40b38c[_0x3e344d(0x70d)](/<(?:|BATTLE )GRID>/i))this[_0x3e344d(0x563)]=!![];else _0x40b38c[_0x3e344d(0x70d)](/<NO (?:|BATTLE )GRID>/i)&&(this[_0x3e344d(0x563)]=![]);},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x530)]=function(){this['\x5f\x66\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65']=[];},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x5b8)]=function(_0x35357b,_0x3cbd7e,_0x2eeaeb,_0x19827e){const _0x1caa2a=_0x23b15a;if(!this['\x73\x68\x6f\x77\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73']())return;_0x2eeaeb=_0x2eeaeb||![],_0x19827e=_0x19827e||![];if($dataAnimations[_0x3cbd7e]){const _0x22bd48={'\x74\x61\x72\x67\x65\x74\x73':_0x35357b,'\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64':_0x3cbd7e,'\x6d\x69\x72\x72\x6f\x72':_0x2eeaeb,'\x6d\x75\x74\x65':_0x19827e};this['\x5f\x66\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65'][_0x1caa2a(0x2b9)](_0x22bd48);for(const _0xa84b73 of _0x35357b){_0xa84b73[_0x1caa2a(0x2ad)]&&_0xa84b73[_0x1caa2a(0x2ad)]();}}},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x450)]=function(){return!![];},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x553)]=function(){const _0xdee0d9=_0x23b15a;return this[_0xdee0d9(0x125)][_0xdee0d9(0x27a)]();},Game_Temp[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65']=function(){const _0xcf19d0=_0x23b15a;this[_0xcf19d0(0x712)]=[];},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x25d)]=function(_0xcfa2d6,_0x5873c8,_0x453983,_0x3a825e,_0x24a511){const _0x4f10b6=_0x23b15a;if(!this[_0x4f10b6(0x2f2)]())return;_0x3a825e=_0x3a825e||![],_0x24a511=_0x24a511||![];if($dataAnimations[_0x453983]){const _0x3c7012={'\x78':_0xcfa2d6,'\x79':_0x5873c8,'\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64':_0x453983,'\x6d\x69\x72\x72\x6f\x72':_0x3a825e,'\x6d\x75\x74\x65':_0x24a511};this[_0x4f10b6(0x712)][_0x4f10b6(0x2b9)](_0x3c7012);}},Game_Temp['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2f2)]=function(){return!![];},Game_Temp[_0x23b15a(0x8ea)][_0x23b15a(0x133)]=function(){const _0x320b29=_0x23b15a;return this[_0x320b29(0x712)][_0x320b29(0x27a)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x3ac)]=Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(){const _0x8f60e1=_0x23b15a;VisuMZ[_0x8f60e1(0x7db)][_0x8f60e1(0x3ac)][_0x8f60e1(0x744)](this),this[_0x8f60e1(0x379)]();},Game_System[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']=function(){const _0x4af77c=_0x23b15a;this['\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73']={'\x53\x69\x64\x65\x56\x69\x65\x77':$dataSystem[_0x4af77c(0x90c)],'\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d':this[_0x4af77c(0x732)](),'\x46\x6f\x6e\x74\x53\x69\x7a\x65':$dataSystem['\x61\x64\x76\x61\x6e\x63\x65\x64'][_0x4af77c(0x71b)],'\x50\x61\x64\x64\x69\x6e\x67':0xc};},Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x857)]=function(){const _0x37f37d=_0x23b15a;if($gameTemp[_0x37f37d(0x193)]==='\x53\x56')return!![];else{if($gameTemp[_0x37f37d(0x193)]==='\x46\x56')return![];}return this[_0x37f37d(0x28d)]===undefined&&this['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](),this[_0x37f37d(0x28d)][_0x37f37d(0x607)]===undefined&&this[_0x37f37d(0x379)](),this[_0x37f37d(0x28d)]['\x53\x69\x64\x65\x56\x69\x65\x77'];},Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x524)]=function(_0x3f51ed){const _0x5ad182=_0x23b15a;this[_0x5ad182(0x28d)]===undefined&&this[_0x5ad182(0x379)](),this[_0x5ad182(0x28d)]['\x53\x69\x64\x65\x56\x69\x65\x77']===undefined&&this['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](),this[_0x5ad182(0x28d)][_0x5ad182(0x607)]=_0x3f51ed;},Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x6d6)]=function(){const _0x52b5ca=_0x23b15a;this[_0x52b5ca(0x28d)]===undefined&&this[_0x52b5ca(0x379)](),this[_0x52b5ca(0x28d)][_0x52b5ca(0x3b4)]=this['\x69\x6e\x69\x74\x69\x61\x6c\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d']();},Game_System[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d']=function(){const _0x47df63=_0x23b15a,_0x49c177=(VisuMZ[_0x47df63(0x7db)][_0x47df63(0x742)]['\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d']||_0x47df63(0x3b9))[_0x47df63(0x6ac)]()[_0x47df63(0x811)]();return VisuMZ[_0x47df63(0x7db)][_0x47df63(0x26a)](_0x49c177);},Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x5ad)]=function(){const _0x45d1b5=_0x23b15a;if($gameTemp['\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73']!==undefined)return $gameTemp[_0x45d1b5(0x918)];return this['\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73']===undefined&&this['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](),this[_0x45d1b5(0x28d)][_0x45d1b5(0x3b4)]===undefined&&this[_0x45d1b5(0x6d6)](),this[_0x45d1b5(0x28d)][_0x45d1b5(0x3b4)];},Game_System['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x701)]=function(_0x4113b9){const _0x42e841=_0x23b15a;this['\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73']===undefined&&this[_0x42e841(0x379)](),this[_0x42e841(0x28d)][_0x42e841(0x3b4)]===undefined&&this['\x72\x65\x73\x65\x74\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d'](),this[_0x42e841(0x28d)]['\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d']=_0x4113b9;},Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x35d)]=function(){const _0x10dee6=_0x23b15a;return this['\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73']===undefined&&this[_0x10dee6(0x379)](),this[_0x10dee6(0x28d)][_0x10dee6(0x196)]===undefined&&this[_0x10dee6(0x379)](),this[_0x10dee6(0x28d)][_0x10dee6(0x196)];},Game_System[_0x23b15a(0x8ea)]['\x73\x65\x74\x4d\x61\x69\x6e\x46\x6f\x6e\x74\x53\x69\x7a\x65']=function(_0x45de76){const _0x42010d=_0x23b15a;this[_0x42010d(0x28d)]===undefined&&this[_0x42010d(0x379)](),this[_0x42010d(0x28d)][_0x42010d(0x805)]===undefined&&this[_0x42010d(0x379)](),this[_0x42010d(0x28d)]['\x46\x6f\x6e\x74\x53\x69\x7a\x65']=_0x45de76;},Game_System['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x8d1)]=function(){const _0x21516d=_0x23b15a;return this[_0x21516d(0x28d)]===undefined&&this['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](),this[_0x21516d(0x28d)][_0x21516d(0x523)]===undefined&&this[_0x21516d(0x379)](),this[_0x21516d(0x28d)][_0x21516d(0x523)];},Game_System[_0x23b15a(0x8ea)][_0x23b15a(0x200)]=function(_0x12f189){const _0x32b814=_0x23b15a;this[_0x32b814(0x28d)]===undefined&&this[_0x32b814(0x379)](),this[_0x32b814(0x28d)][_0x32b814(0x805)]===undefined&&this[_0x32b814(0x379)](),this[_0x32b814(0x28d)][_0x32b814(0x523)]=_0x12f189;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x2bf)]=Game_Screen[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Game_Screen[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65']=function(){const _0x55d605=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x47\x61\x6d\x65\x5f\x53\x63\x72\x65\x65\x6e\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'][_0x55d605(0x744)](this),this[_0x55d605(0x289)]();},Game_Screen['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x289)]=function(){const _0x1fd72f=_0x23b15a,_0x4b05eb=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1fd72f(0x742)][_0x1fd72f(0x873)];this[_0x1fd72f(0x479)]=_0x4b05eb?.[_0x1fd72f(0x5de)]||_0x1fd72f(0x50d);},Game_Screen[_0x23b15a(0x8ea)][_0x23b15a(0x76a)]=function(){const _0x1accea=_0x23b15a;return this['\x5f\x63\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x53\x74\x79\x6c\x65']===undefined&&this[_0x1accea(0x289)](),this[_0x1accea(0x479)];},Game_Screen[_0x23b15a(0x8ea)][_0x23b15a(0x194)]=function(_0x52df69){const _0x3b81bc=_0x23b15a;this[_0x3b81bc(0x479)]===undefined&&this[_0x3b81bc(0x289)](),this[_0x3b81bc(0x479)]=_0x52df69[_0x3b81bc(0x597)]()[_0x3b81bc(0x811)]();},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x408)]=function(){const _0x9a7c89=_0x23b15a;if($gameParty[_0x9a7c89(0x244)]())return![];return this[_0x9a7c89(0x80d)]()&&this[_0x9a7c89(0x80d)]()['\x63\x68\x61\x72\x41\x74'](0x0)==='\x21';},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x80d)]=function(){const _0x25127b=_0x23b15a;return this[_0x25127b(0x39a)]['\x73\x70\x6c\x69\x74']('\x2f')['\x70\x6f\x70']();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x822)]=Game_Picture[_0x23b15a(0x8ea)]['\x78'],Game_Picture[_0x23b15a(0x8ea)]['\x78']=function(){const _0x219205=_0x23b15a;return this[_0x219205(0x408)]()?this[_0x219205(0x885)]():VisuMZ[_0x219205(0x7db)][_0x219205(0x822)][_0x219205(0x744)](this);},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x885)]=function(){const _0x2e1f3=_0x23b15a,_0x4a16be=$gameMap[_0x2e1f3(0x171)]()*$gameMap['\x74\x69\x6c\x65\x57\x69\x64\x74\x68']();return(this['\x5f\x78']-_0x4a16be)*$gameScreen[_0x2e1f3(0x8a2)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7cb)]=Game_Picture[_0x23b15a(0x8ea)]['\x79'],Game_Picture[_0x23b15a(0x8ea)]['\x79']=function(){const _0x1ddaf7=_0x23b15a;return this[_0x1ddaf7(0x408)]()?this['\x79\x53\x63\x72\x6f\x6c\x6c\x4c\x69\x6e\x6b\x65\x64\x4f\x66\x66\x73\x65\x74']():VisuMZ[_0x1ddaf7(0x7db)][_0x1ddaf7(0x7cb)][_0x1ddaf7(0x744)](this);},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x6b7)]=function(){const _0x3d310d=_0x23b15a,_0x34c9af=$gameMap['\x64\x69\x73\x70\x6c\x61\x79\x59']()*$gameMap[_0x3d310d(0x3a5)]();return(this['\x5f\x79']-_0x34c9af)*$gameScreen[_0x3d310d(0x8a2)]();},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x73\x63\x61\x6c\x65\x58']=Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x50e)],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x50e)]=function(){const _0x361edc=_0x23b15a;let _0x531d00=VisuMZ[_0x361edc(0x7db)][_0x361edc(0x1a9)]['\x63\x61\x6c\x6c'](this);return this[_0x361edc(0x408)]()&&(_0x531d00*=$gameScreen[_0x361edc(0x8a2)]()),_0x531d00;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x79a)]=Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x49e)],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x49e)]=function(){const _0x39ffdb=_0x23b15a;let _0x298798=VisuMZ[_0x39ffdb(0x7db)][_0x39ffdb(0x79a)][_0x39ffdb(0x744)](this);return this[_0x39ffdb(0x408)]()&&(_0x298798*=$gameScreen[_0x39ffdb(0x8a2)]()),_0x298798;},Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x64a)]=function(_0x2612c1){this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65']=_0x2612c1;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x265)]=Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x625)],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x625)]=function(_0x24239c){const _0x30d094=_0x23b15a;return this[_0x30d094(0x24d)]=this[_0x30d094(0x24d)]||0x0,[0x0,0x1,0x2,0x3][_0x30d094(0x313)](this[_0x30d094(0x24d)])?VisuMZ[_0x30d094(0x7db)][_0x30d094(0x265)]['\x63\x61\x6c\x6c'](this,_0x24239c):VisuMZ[_0x30d094(0x5c0)](_0x24239c,this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65']);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x809)]=Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3f6)],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x3f6)]=function(){const _0x51424c=_0x23b15a;VisuMZ[_0x51424c(0x7db)]['\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x69\x6e\x69\x74\x52\x6f\x74\x61\x74\x69\x6f\x6e']['\x63\x61\x6c\x6c'](this),this[_0x51424c(0x632)]();},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x632)]=function(){const _0x68726e=_0x23b15a;this[_0x68726e(0x903)]={'\x63\x75\x72\x72\x65\x6e\x74':0x0,'\x74\x61\x72\x67\x65\x74':0x0,'\x64\x75\x72\x61\x74\x69\x6f\x6e':0x0,'\x77\x68\x6f\x6c\x65\x44\x75\x72\x61\x74\x69\x6f\x6e':0x0,'\x65\x61\x73\x69\x6e\x67\x54\x79\x70\x65':_0x68726e(0x19f)};},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x749)]=Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x61\x6e\x67\x6c\x65'],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x2a3)]=function(){const _0x3f8b86=_0x23b15a;let _0x3f23b1=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x3f8b86(0x749)][_0x3f8b86(0x744)](this);return _0x3f23b1+=this[_0x3f8b86(0x30b)](),_0x3f23b1;},Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73']=function(){const _0xd1ea7d=_0x23b15a;return this[_0xd1ea7d(0x903)]===undefined&&this[_0xd1ea7d(0x632)](),this[_0xd1ea7d(0x903)][_0xd1ea7d(0x2ba)]||0x0;},Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x16d)]=function(_0x2b4895,_0x1a56d0,_0x551d4a){const _0x416842=_0x23b15a;this[_0x416842(0x903)]===undefined&&this[_0x416842(0x632)](),this[_0x416842(0x903)]['\x74\x61\x72\x67\x65\x74']=_0x2b4895||0x0,this[_0x416842(0x903)][_0x416842(0x573)]=_0x1a56d0||0x0,this['\x5f\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73'][_0x416842(0x60c)]=_0x1a56d0||0x0,this[_0x416842(0x903)]['\x65\x61\x73\x69\x6e\x67\x54\x79\x70\x65']=_0x551d4a||_0x416842(0x19f),_0x1a56d0<=0x0&&(this[_0x416842(0x903)][_0x416842(0x2ba)]=this[_0x416842(0x903)][_0x416842(0x32e)]);},Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x746)]=function(_0x5386ca,_0x2ac833,_0x12ceb2){const _0x5424b2=_0x23b15a;this[_0x5424b2(0x903)]===undefined&&this['\x69\x6e\x69\x74\x52\x6f\x74\x61\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](),this[_0x5424b2(0x903)][_0x5424b2(0x32e)]+=_0x5386ca||0x0,this['\x5f\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73'][_0x5424b2(0x573)]=_0x2ac833||0x0,this['\x5f\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73'][_0x5424b2(0x60c)]=_0x2ac833||0x0,this[_0x5424b2(0x903)]['\x65\x61\x73\x69\x6e\x67\x54\x79\x70\x65']=_0x12ceb2||_0x5424b2(0x19f),_0x2ac833<=0x0&&(this[_0x5424b2(0x903)]['\x63\x75\x72\x72\x65\x6e\x74']=this[_0x5424b2(0x903)][_0x5424b2(0x32e)]);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x678)]=Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x6f8)],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x6f8)]=function(){const _0x18b87a=_0x23b15a;VisuMZ[_0x18b87a(0x7db)][_0x18b87a(0x678)][_0x18b87a(0x744)](this),this[_0x18b87a(0x409)]();},Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x409)]=function(){const _0x525db2=_0x23b15a;this['\x5f\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73']===undefined&&this[_0x525db2(0x632)]();const _0xa573e2=this[_0x525db2(0x903)];if(_0xa573e2[_0x525db2(0x573)]<=0x0)return;_0xa573e2[_0x525db2(0x2ba)]=this['\x61\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67\x41\x6e\x67\x6c\x65\x50\x6c\x75\x73'](_0xa573e2['\x63\x75\x72\x72\x65\x6e\x74'],_0xa573e2['\x74\x61\x72\x67\x65\x74']),_0xa573e2[_0x525db2(0x573)]--,_0xa573e2[_0x525db2(0x573)]<=0x0&&(_0xa573e2[_0x525db2(0x2ba)]=_0xa573e2[_0x525db2(0x32e)]);},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x492)]=function(_0x4bcb78,_0x54d724){const _0x2f350f=_0x23b15a,_0x1064e0=this[_0x2f350f(0x903)],_0x1ff804=_0x1064e0[_0x2f350f(0x67f)],_0x45fb3d=_0x1064e0[_0x2f350f(0x573)],_0x53b08e=_0x1064e0[_0x2f350f(0x60c)],_0x3778e0=VisuMZ['\x41\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67']((_0x53b08e-_0x45fb3d)/_0x53b08e,_0x1ff804),_0x2ee902=VisuMZ[_0x2f350f(0x5c0)]((_0x53b08e-_0x45fb3d+0x1)/_0x53b08e,_0x1ff804),_0x557706=(_0x4bcb78-_0x54d724*_0x3778e0)/(0x1-_0x3778e0);return _0x557706+(_0x54d724-_0x557706)*_0x2ee902;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x87a)]=Game_Action[_0x23b15a(0x8ea)]['\x69\x74\x65\x6d\x48\x69\x74'],Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x352)]=function(_0x5815b7){const _0x5d4ed4=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x5d4ed4(0x742)][_0x5d4ed4(0x875)][_0x5d4ed4(0x40e)]?this['\x69\x74\x65\x6d\x48\x69\x74\x49\x6d\x70\x72\x6f\x76\x65\x64\x41\x63\x63\x75\x72\x61\x63\x79'](_0x5815b7):VisuMZ[_0x5d4ed4(0x7db)][_0x5d4ed4(0x87a)][_0x5d4ed4(0x744)](this,_0x5815b7);},Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x8ab)]=function(_0x39ed2f){const _0x114e65=_0x23b15a,_0x8f8504=this[_0x114e65(0x85a)](_0x39ed2f),_0x49e7be=this[_0x114e65(0x832)](_0x39ed2f),_0x477bc0=this['\x74\x61\x72\x67\x65\x74\x45\x76\x61\x52\x61\x74\x65'](_0x39ed2f);return _0x8f8504*(_0x49e7be-_0x477bc0);},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x69\x74\x65\x6d\x45\x76\x61']=Game_Action[_0x23b15a(0x8ea)]['\x69\x74\x65\x6d\x45\x76\x61'],Game_Action[_0x23b15a(0x8ea)]['\x69\x74\x65\x6d\x45\x76\x61']=function(_0x5decca){const _0x35a8aa=_0x23b15a;return VisuMZ[_0x35a8aa(0x7db)][_0x35a8aa(0x742)]['\x51\x6f\x4c'][_0x35a8aa(0x40e)]?0x0:VisuMZ[_0x35a8aa(0x7db)][_0x35a8aa(0x53f)][_0x35a8aa(0x744)](this,_0x5decca);},Game_Action['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x69\x74\x65\x6d\x53\x75\x63\x63\x65\x73\x73\x52\x61\x74\x65']=function(_0x2be9c0){const _0x16e121=_0x23b15a;return this[_0x16e121(0x2cb)]()[_0x16e121(0x74a)]*0.01;},Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x832)]=function(_0x25e808){const _0x5cbade=_0x23b15a;if(VisuMZ[_0x5cbade(0x7db)][_0x5cbade(0x742)]['\x51\x6f\x4c'][_0x5cbade(0x2a4)]&&this['\x69\x73\x49\x74\x65\x6d']())return 0x1;return this[_0x5cbade(0x29f)]()?VisuMZ[_0x5cbade(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x5cbade(0x875)][_0x5cbade(0x2a4)]&&this[_0x5cbade(0x80a)]()[_0x5cbade(0x4bd)]()?this[_0x5cbade(0x80a)]()[_0x5cbade(0x4ae)]+0.05:this[_0x5cbade(0x80a)]()['\x68\x69\x74']:0x1;},Game_Action[_0x23b15a(0x8ea)]['\x74\x61\x72\x67\x65\x74\x45\x76\x61\x52\x61\x74\x65']=function(_0x40538e){const _0xc5ecd1=_0x23b15a;if(this[_0xc5ecd1(0x80a)]()[_0xc5ecd1(0x4bd)]()===_0x40538e[_0xc5ecd1(0x4bd)]())return 0x0;return this[_0xc5ecd1(0x29f)]()?VisuMZ[_0xc5ecd1(0x7db)][_0xc5ecd1(0x742)]['\x51\x6f\x4c'][_0xc5ecd1(0x2a4)]&&_0x40538e['\x69\x73\x45\x6e\x65\x6d\x79']()?_0x40538e[_0xc5ecd1(0x272)]-0.05:_0x40538e['\x65\x76\x61']:this[_0xc5ecd1(0x3e8)]()?_0x40538e[_0xc5ecd1(0x16b)]:0x0;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x48d)]=Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x3fd)],Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x3fd)]=function(_0x3fae9e){const _0x47a39b=_0x23b15a;VisuMZ[_0x47a39b(0x7db)][_0x47a39b(0x48d)][_0x47a39b(0x744)](this,_0x3fae9e);if(VisuMZ[_0x47a39b(0x7db)][_0x47a39b(0x742)][_0x47a39b(0x875)][_0x47a39b(0x40e)])return;const _0x4b990c=_0x3fae9e['\x72\x65\x73\x75\x6c\x74']();_0x4b990c['\x6d\x69\x73\x73\x65\x64']&&(0x1-this[_0x47a39b(0x31a)](_0x3fae9e)>this[_0x47a39b(0x352)](_0x3fae9e)&&(_0x4b990c['\x6d\x69\x73\x73\x65\x64']=![],_0x4b990c[_0x47a39b(0x724)]=!![]));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4d5)]=Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x799)],Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x799)]=function(){const _0x882ee5=_0x23b15a;this[_0x882ee5(0x238)]={},VisuMZ[_0x882ee5(0x7db)][_0x882ee5(0x4d5)][_0x882ee5(0x744)](this);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7fd)]=Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x308)],Game_BattlerBase[_0x23b15a(0x8ea)]['\x72\x65\x66\x72\x65\x73\x68']=function(){const _0x573db4=_0x23b15a;this[_0x573db4(0x238)]={},VisuMZ[_0x573db4(0x7db)][_0x573db4(0x7fd)][_0x573db4(0x744)](this);},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x881)]=function(_0x3d14e2){const _0x4a9aed=_0x23b15a;return this[_0x4a9aed(0x238)]=this[_0x4a9aed(0x238)]||{},this[_0x4a9aed(0x238)][_0x3d14e2]!==undefined;},Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x268)]=function(_0x27998a){const _0x319130=_0x23b15a,_0x289cdf=(_0x155e5b,_0x19747f)=>{const _0x109e7d=_0x348b;if(!_0x19747f)return _0x155e5b;if(_0x19747f[_0x109e7d(0x47c)][_0x109e7d(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x109e7d(0x7f3)][_0x109e7d(0x268)][_0x27998a])){var _0x5a5d42=Number(RegExp['\x24\x31']);_0x155e5b+=_0x5a5d42;}if(_0x19747f[_0x109e7d(0x47c)][_0x109e7d(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x52\x65\x67\x45\x78\x70'][_0x109e7d(0x6c8)][_0x27998a])){var _0x18f3a2=String(RegExp['\x24\x31']);try{_0x155e5b+=eval(_0x18f3a2);}catch(_0x471f5f){$gameTemp[_0x109e7d(0x3e7)]()&&console[_0x109e7d(0x5f6)](_0x471f5f);}}return _0x155e5b;};return this[_0x319130(0x7fc)]()[_0x319130(0x247)](_0x289cdf,this[_0x319130(0x65e)][_0x27998a]);},Game_BattlerBase[_0x23b15a(0x8ea)]['\x70\x61\x72\x61\x6d\x4d\x61\x78']=function(_0x4ab1af){const _0x4c52b0=_0x23b15a;var _0x3dfcbb=_0x4c52b0(0x714)+(this[_0x4c52b0(0x4bd)]()?_0x4c52b0(0x1ee):_0x4c52b0(0x572))+_0x4c52b0(0x82b)+_0x4ab1af;if(this[_0x4c52b0(0x881)](_0x3dfcbb))return this[_0x4c52b0(0x238)][_0x3dfcbb];this[_0x4c52b0(0x238)][_0x3dfcbb]=eval(VisuMZ[_0x4c52b0(0x7db)][_0x4c52b0(0x742)][_0x4c52b0(0x39c)][_0x3dfcbb]);const _0x56f0e9=(_0x566089,_0x3c1b01)=>{const _0x12c381=_0x4c52b0;if(!_0x3c1b01)return _0x566089;if(_0x3c1b01[_0x12c381(0x47c)][_0x12c381(0x70d)](VisuMZ[_0x12c381(0x7db)]['\x52\x65\x67\x45\x78\x70'][_0x12c381(0x26e)][_0x4ab1af])){var _0x4c5460=Number(RegExp['\x24\x31']);_0x4c5460===0x0&&(_0x4c5460=Number[_0x12c381(0x237)]),_0x566089=Math[_0x12c381(0x52a)](_0x566089,_0x4c5460);}if(_0x3c1b01[_0x12c381(0x47c)][_0x12c381(0x70d)](VisuMZ[_0x12c381(0x7db)][_0x12c381(0x7f3)]['\x70\x61\x72\x61\x6d\x4d\x61\x78\x4a\x53'][_0x4ab1af])){var _0x2ff824=String(RegExp['\x24\x31']);try{_0x566089=Math['\x6d\x61\x78'](_0x566089,Number(eval(_0x2ff824)));}catch(_0x5e2e94){$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&console[_0x12c381(0x5f6)](_0x5e2e94);}}return _0x566089;};return this[_0x4c52b0(0x238)][_0x3dfcbb]===0x0&&(this[_0x4c52b0(0x238)][_0x3dfcbb]=Number['\x4d\x41\x58\x5f\x53\x41\x46\x45\x5f\x49\x4e\x54\x45\x47\x45\x52']),this[_0x4c52b0(0x238)][_0x3dfcbb]=this['\x74\x72\x61\x69\x74\x4f\x62\x6a\x65\x63\x74\x73']()['\x72\x65\x64\x75\x63\x65'](_0x56f0e9,this[_0x4c52b0(0x238)][_0x3dfcbb]),this['\x5f\x63\x61\x63\x68\x65'][_0x3dfcbb];},Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x21a)]=function(_0x44bf25){const _0x8b1890=_0x23b15a,_0x311479=this[_0x8b1890(0x362)](Game_BattlerBase[_0x8b1890(0x175)],_0x44bf25),_0x554679=(_0x598c58,_0x474e73)=>{const _0x5d0c1c=_0x8b1890;if(!_0x474e73)return _0x598c58;if(_0x474e73[_0x5d0c1c(0x47c)][_0x5d0c1c(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x5d0c1c(0x7f3)][_0x5d0c1c(0x74f)][_0x44bf25])){var _0x4b8cc7=Number(RegExp['\x24\x31'])/0x64;_0x598c58*=_0x4b8cc7;}if(_0x474e73[_0x5d0c1c(0x47c)]['\x6d\x61\x74\x63\x68'](VisuMZ[_0x5d0c1c(0x7db)][_0x5d0c1c(0x7f3)][_0x5d0c1c(0x13d)][_0x44bf25])){var _0x4b8cc7=Number(RegExp['\x24\x31']);_0x598c58*=_0x4b8cc7;}if(_0x474e73['\x6e\x6f\x74\x65'][_0x5d0c1c(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x52\x65\x67\x45\x78\x70'][_0x5d0c1c(0x6c4)][_0x44bf25])){var _0x6d85ab=String(RegExp['\x24\x31']);try{_0x598c58*=eval(_0x6d85ab);}catch(_0x8e48f6){$gameTemp[_0x5d0c1c(0x3e7)]()&&console[_0x5d0c1c(0x5f6)](_0x8e48f6);}}return _0x598c58;};return this[_0x8b1890(0x7fc)]()[_0x8b1890(0x247)](_0x554679,_0x311479);},Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x42\x6f\x6e\x75\x73']=function(_0x283e8c){const _0x2870e3=(_0x665197,_0x3751db)=>{const _0x3954ee=_0x348b;if(!_0x3751db)return _0x665197;if(_0x3751db[_0x3954ee(0x47c)][_0x3954ee(0x70d)](VisuMZ[_0x3954ee(0x7db)][_0x3954ee(0x7f3)][_0x3954ee(0x666)][_0x283e8c])){var _0x26368d=Number(RegExp['\x24\x31']);_0x665197+=_0x26368d;}if(_0x3751db['\x6e\x6f\x74\x65']['\x6d\x61\x74\x63\x68'](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x52\x65\x67\x45\x78\x70'][_0x3954ee(0x67c)][_0x283e8c])){var _0x301157=String(RegExp['\x24\x31']);try{_0x665197+=eval(_0x301157);}catch(_0x274da6){$gameTemp[_0x3954ee(0x3e7)]()&&console[_0x3954ee(0x5f6)](_0x274da6);}}return _0x665197;};return this['\x74\x72\x61\x69\x74\x4f\x62\x6a\x65\x63\x74\x73']()['\x72\x65\x64\x75\x63\x65'](_0x2870e3,0x0);},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x3a2)]=function(_0x11b4f8){const _0x5cff1a=_0x23b15a;let _0x5f45ad=_0x5cff1a(0x3a2)+_0x11b4f8+_0x5cff1a(0x729);if(this[_0x5cff1a(0x881)](_0x5f45ad))return this['\x5f\x63\x61\x63\x68\x65'][_0x5f45ad];return this[_0x5cff1a(0x238)][_0x5f45ad]=Math['\x72\x6f\x75\x6e\x64'](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x5cff1a(0x742)][_0x5cff1a(0x39c)][_0x5cff1a(0x91d)][_0x5cff1a(0x744)](this,_0x11b4f8)),this[_0x5cff1a(0x238)][_0x5f45ad];},Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x525)]=function(_0x26bd12){const _0x5c4878=_0x23b15a,_0xcbe3ee=(_0x1323af,_0x2c3e24)=>{const _0x1f48a1=_0x348b;if(!_0x2c3e24)return _0x1323af;if(_0x2c3e24['\x6e\x6f\x74\x65'][_0x1f48a1(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1f48a1(0x7f3)]['\x78\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x31'][_0x26bd12])){var _0x2194fd=Number(RegExp['\x24\x31'])/0x64;_0x1323af+=_0x2194fd;}if(_0x2c3e24[_0x1f48a1(0x47c)][_0x1f48a1(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1f48a1(0x7f3)][_0x1f48a1(0x6ff)][_0x26bd12])){var _0x2194fd=Number(RegExp['\x24\x31']);_0x1323af+=_0x2194fd;}if(_0x2c3e24[_0x1f48a1(0x47c)][_0x1f48a1(0x70d)](VisuMZ[_0x1f48a1(0x7db)][_0x1f48a1(0x7f3)][_0x1f48a1(0x580)][_0x26bd12])){var _0x521e55=String(RegExp['\x24\x31']);try{_0x1323af+=eval(_0x521e55);}catch(_0x885bdb){$gameTemp[_0x1f48a1(0x3e7)]()&&console[_0x1f48a1(0x5f6)](_0x885bdb);}}return _0x1323af;};return this[_0x5c4878(0x7fc)]()['\x72\x65\x64\x75\x63\x65'](_0xcbe3ee,0x0);},Game_BattlerBase[_0x23b15a(0x8ea)]['\x78\x70\x61\x72\x61\x6d\x52\x61\x74\x65']=function(_0x1709e0){const _0x1c7229=_0x23b15a,_0xd202ac=(_0x575550,_0x476d00)=>{const _0x4fce30=_0x348b;if(!_0x476d00)return _0x575550;if(_0x476d00[_0x4fce30(0x47c)][_0x4fce30(0x70d)](VisuMZ[_0x4fce30(0x7db)][_0x4fce30(0x7f3)][_0x4fce30(0x88a)][_0x1709e0])){var _0x577197=Number(RegExp['\x24\x31'])/0x64;_0x575550*=_0x577197;}if(_0x476d00['\x6e\x6f\x74\x65']['\x6d\x61\x74\x63\x68'](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x52\x65\x67\x45\x78\x70'][_0x4fce30(0x719)][_0x1709e0])){var _0x577197=Number(RegExp['\x24\x31']);_0x575550*=_0x577197;}if(_0x476d00['\x6e\x6f\x74\x65']['\x6d\x61\x74\x63\x68'](VisuMZ[_0x4fce30(0x7db)]['\x52\x65\x67\x45\x78\x70'][_0x4fce30(0x53a)][_0x1709e0])){var _0x5f7f0a=String(RegExp['\x24\x31']);try{_0x575550*=eval(_0x5f7f0a);}catch(_0x13772e){$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&console[_0x4fce30(0x5f6)](_0x13772e);}}return _0x575550;};return this['\x74\x72\x61\x69\x74\x4f\x62\x6a\x65\x63\x74\x73']()[_0x1c7229(0x247)](_0xd202ac,0x1);},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x12e)]=function(_0x46f6de){const _0x2907dc=_0x23b15a,_0x2ba5ac=(_0x321782,_0x54c29c)=>{const _0xe36af=_0x348b;if(!_0x54c29c)return _0x321782;if(_0x54c29c['\x6e\x6f\x74\x65'][_0xe36af(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x52\x65\x67\x45\x78\x70'][_0xe36af(0x531)][_0x46f6de])){var _0x494801=Number(RegExp['\x24\x31'])/0x64;_0x321782+=_0x494801;}if(_0x54c29c[_0xe36af(0x47c)][_0xe36af(0x70d)](VisuMZ[_0xe36af(0x7db)][_0xe36af(0x7f3)][_0xe36af(0x279)][_0x46f6de])){var _0x494801=Number(RegExp['\x24\x31']);_0x321782+=_0x494801;}if(_0x54c29c[_0xe36af(0x47c)][_0xe36af(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0xe36af(0x7f3)][_0xe36af(0x20d)][_0x46f6de])){var _0x1e667a=String(RegExp['\x24\x31']);try{_0x321782+=eval(_0x1e667a);}catch(_0x2430b4){$gameTemp[_0xe36af(0x3e7)]()&&console[_0xe36af(0x5f6)](_0x2430b4);}}return _0x321782;};return this[_0x2907dc(0x7fc)]()[_0x2907dc(0x247)](_0x2ba5ac,0x0);},Game_BattlerBase[_0x23b15a(0x8ea)]['\x78\x70\x61\x72\x61\x6d']=function(_0x6707fb){const _0x2857b1=_0x23b15a;let _0x2a37b6=_0x2857b1(0x2ed)+_0x6707fb+_0x2857b1(0x729);if(this[_0x2857b1(0x881)](_0x2a37b6))return this['\x5f\x63\x61\x63\x68\x65'][_0x2a37b6];return this[_0x2857b1(0x238)][_0x2a37b6]=VisuMZ[_0x2857b1(0x7db)][_0x2857b1(0x742)][_0x2857b1(0x39c)][_0x2857b1(0x58f)][_0x2857b1(0x744)](this,_0x6707fb),this[_0x2857b1(0x238)][_0x2a37b6];},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x201)]=function(_0x2da1d7){const _0x2ca4e7=_0x23b15a,_0xbc7b4e=(_0x1cd884,_0x4b52ee)=>{const _0x317e16=_0x348b;if(!_0x4b52ee)return _0x1cd884;if(_0x4b52ee[_0x317e16(0x47c)][_0x317e16(0x70d)](VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x317e16(0x7f3)][_0x317e16(0x42c)][_0x2da1d7])){var _0x5ae497=Number(RegExp['\x24\x31'])/0x64;_0x1cd884+=_0x5ae497;}if(_0x4b52ee['\x6e\x6f\x74\x65']['\x6d\x61\x74\x63\x68'](VisuMZ[_0x317e16(0x7db)]['\x52\x65\x67\x45\x78\x70'][_0x317e16(0x703)][_0x2da1d7])){var _0x5ae497=Number(RegExp['\x24\x31']);_0x1cd884+=_0x5ae497;}if(_0x4b52ee[_0x317e16(0x47c)][_0x317e16(0x70d)](VisuMZ[_0x317e16(0x7db)][_0x317e16(0x7f3)][_0x317e16(0x1b2)][_0x2da1d7])){var _0x45935b=String(RegExp['\x24\x31']);try{_0x1cd884+=eval(_0x45935b);}catch(_0x1686aa){$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&console[_0x317e16(0x5f6)](_0x1686aa);}}return _0x1cd884;};return this[_0x2ca4e7(0x7fc)]()[_0x2ca4e7(0x247)](_0xbc7b4e,0x0);},Game_BattlerBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x19e)]=function(_0x53696c){const _0x35871f=(_0x52f93a,_0x469731)=>{const _0x351aba=_0x348b;if(!_0x469731)return _0x52f93a;if(_0x469731['\x6e\x6f\x74\x65'][_0x351aba(0x70d)](VisuMZ[_0x351aba(0x7db)]['\x52\x65\x67\x45\x78\x70'][_0x351aba(0x868)][_0x53696c])){var _0x259e08=Number(RegExp['\x24\x31'])/0x64;_0x52f93a*=_0x259e08;}if(_0x469731[_0x351aba(0x47c)][_0x351aba(0x70d)](VisuMZ[_0x351aba(0x7db)][_0x351aba(0x7f3)]['\x73\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x32'][_0x53696c])){var _0x259e08=Number(RegExp['\x24\x31']);_0x52f93a*=_0x259e08;}if(_0x469731[_0x351aba(0x47c)][_0x351aba(0x70d)](VisuMZ[_0x351aba(0x7db)][_0x351aba(0x7f3)][_0x351aba(0x2da)][_0x53696c])){var _0x3ab174=String(RegExp['\x24\x31']);try{_0x52f93a*=eval(_0x3ab174);}catch(_0x498d74){$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&console[_0x351aba(0x5f6)](_0x498d74);}}return _0x52f93a;};return this['\x74\x72\x61\x69\x74\x4f\x62\x6a\x65\x63\x74\x73']()['\x72\x65\x64\x75\x63\x65'](_0x35871f,0x1);},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x227)]=function(_0x3db1ad){const _0x5a8d0f=_0x23b15a,_0x39f7f9=(_0x19e274,_0x5ab07c)=>{const _0x2d7467=_0x348b;if(!_0x5ab07c)return _0x19e274;if(_0x5ab07c['\x6e\x6f\x74\x65'][_0x2d7467(0x70d)](VisuMZ[_0x2d7467(0x7db)][_0x2d7467(0x7f3)][_0x2d7467(0x3e3)][_0x3db1ad])){var _0x20c303=Number(RegExp['\x24\x31'])/0x64;_0x19e274+=_0x20c303;}if(_0x5ab07c['\x6e\x6f\x74\x65'][_0x2d7467(0x70d)](VisuMZ[_0x2d7467(0x7db)][_0x2d7467(0x7f3)][_0x2d7467(0x92b)][_0x3db1ad])){var _0x20c303=Number(RegExp['\x24\x31']);_0x19e274+=_0x20c303;}if(_0x5ab07c[_0x2d7467(0x47c)]['\x6d\x61\x74\x63\x68'](VisuMZ[_0x2d7467(0x7db)][_0x2d7467(0x7f3)][_0x2d7467(0x2d4)][_0x3db1ad])){var _0x435c81=String(RegExp['\x24\x31']);try{_0x19e274+=eval(_0x435c81);}catch(_0x4ef0ec){$gameTemp[_0x2d7467(0x3e7)]()&&console[_0x2d7467(0x5f6)](_0x4ef0ec);}}return _0x19e274;};return this[_0x5a8d0f(0x7fc)]()[_0x5a8d0f(0x247)](_0x39f7f9,0x0);},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x704)]=function(_0x5230de){const _0x30a3ad=_0x23b15a;let _0x43afb1='\x73\x70\x61\x72\x61\x6d'+_0x5230de+_0x30a3ad(0x729);if(this[_0x30a3ad(0x881)](_0x43afb1))return this[_0x30a3ad(0x238)][_0x43afb1];return this[_0x30a3ad(0x238)][_0x43afb1]=VisuMZ[_0x30a3ad(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x30a3ad(0x39c)][_0x30a3ad(0x872)]['\x63\x61\x6c\x6c'](this,_0x5230de),this[_0x30a3ad(0x238)][_0x43afb1];},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x15c)]=function(_0x21a096,_0x2eee0b){const _0x3abbfb=_0x23b15a;if(typeof paramId===_0x3abbfb(0x14f))return this['\x70\x61\x72\x61\x6d'](_0x21a096);_0x21a096=String(_0x21a096||'')['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']();if(_0x21a096===_0x3abbfb(0x414))return this[_0x3abbfb(0x3a2)](0x0);if(_0x21a096===_0x3abbfb(0x55e))return this[_0x3abbfb(0x3a2)](0x1);if(_0x21a096===_0x3abbfb(0x132))return this[_0x3abbfb(0x3a2)](0x2);if(_0x21a096==='\x44\x45\x46')return this[_0x3abbfb(0x3a2)](0x3);if(_0x21a096===_0x3abbfb(0x507))return this[_0x3abbfb(0x3a2)](0x4);if(_0x21a096===_0x3abbfb(0x240))return this[_0x3abbfb(0x3a2)](0x5);if(_0x21a096===_0x3abbfb(0x664))return this[_0x3abbfb(0x3a2)](0x6);if(_0x21a096===_0x3abbfb(0x535))return this['\x70\x61\x72\x61\x6d'](0x7);if(_0x21a096===_0x3abbfb(0x814))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x2ed)](0x0)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x0);if(_0x21a096===_0x3abbfb(0x67a))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x2ed)](0x1)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x1);if(_0x21a096===_0x3abbfb(0x711))return _0x2eee0b?String(Math['\x72\x6f\x75\x6e\x64'](this[_0x3abbfb(0x2ed)](0x2)*0x64))+'\x25':this['\x78\x70\x61\x72\x61\x6d'](0x2);if(_0x21a096===_0x3abbfb(0x298))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x2ed)](0x3)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x3);if(_0x21a096==='\x4d\x45\x56')return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x2ed)](0x4)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x4);if(_0x21a096==='\x4d\x52\x46')return _0x2eee0b?String(Math['\x72\x6f\x75\x6e\x64'](this['\x78\x70\x61\x72\x61\x6d'](0x5)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x5);if(_0x21a096===_0x3abbfb(0x478))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x2ed)](0x6)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x6);if(_0x21a096===_0x3abbfb(0x4fa))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x2ed)](0x7)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x7);if(_0x21a096===_0x3abbfb(0x242))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this['\x78\x70\x61\x72\x61\x6d'](0x8)*0x64))+'\x25':this[_0x3abbfb(0x2ed)](0x8);if(_0x21a096==='\x54\x52\x47')return _0x2eee0b?String(Math['\x72\x6f\x75\x6e\x64'](this[_0x3abbfb(0x2ed)](0x9)*0x64))+'\x25':this['\x78\x70\x61\x72\x61\x6d'](0x9);if(_0x21a096===_0x3abbfb(0x4b7))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this['\x73\x70\x61\x72\x61\x6d'](0x0)*0x64))+'\x25':this['\x73\x70\x61\x72\x61\x6d'](0x0);if(_0x21a096===_0x3abbfb(0x53e))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x1)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x1);if(_0x21a096===_0x3abbfb(0x6db))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x2)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x2);if(_0x21a096==='\x50\x48\x41')return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x3)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x3);if(_0x21a096===_0x3abbfb(0x935))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x4)*0x64))+'\x25':this['\x73\x70\x61\x72\x61\x6d'](0x4);if(_0x21a096===_0x3abbfb(0x14e))return _0x2eee0b?String(Math['\x72\x6f\x75\x6e\x64'](this['\x73\x70\x61\x72\x61\x6d'](0x5)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x5);if(_0x21a096===_0x3abbfb(0x650))return _0x2eee0b?String(Math['\x72\x6f\x75\x6e\x64'](this[_0x3abbfb(0x704)](0x6)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x6);if(_0x21a096===_0x3abbfb(0x88d))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x7)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x7);if(_0x21a096==='\x46\x44\x52')return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x8)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x8);if(_0x21a096===_0x3abbfb(0x638))return _0x2eee0b?String(Math[_0x3abbfb(0x38b)](this[_0x3abbfb(0x704)](0x9)*0x64))+'\x25':this[_0x3abbfb(0x704)](0x9);if(VisuMZ[_0x3abbfb(0x7db)][_0x3abbfb(0x6b2)][_0x21a096]){const _0xdc12d9=VisuMZ[_0x3abbfb(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x41\x62\x62'][_0x21a096],_0x409b64=this[_0xdc12d9];return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x54\x79\x70\x65'][_0x21a096]===_0x3abbfb(0x1c0)?_0x409b64:_0x2eee0b?String(Math[_0x3abbfb(0x38b)](_0x409b64*0x64))+'\x25':_0x409b64;}return'';},Game_BattlerBase[_0x23b15a(0x8ea)][_0x23b15a(0x389)]=function(){const _0x5bd8dc=_0x23b15a;return this[_0x5bd8dc(0x57c)]()&&this[_0x5bd8dc(0x40f)]<this[_0x5bd8dc(0x219)]*VisuMZ[_0x5bd8dc(0x7db)][_0x5bd8dc(0x742)]['\x50\x61\x72\x61\x6d'][_0x5bd8dc(0x2b8)];},Game_Battler[_0x23b15a(0x8ea)][_0x23b15a(0x6ed)]=function(){const _0x62111a=_0x23b15a;SoundManager['\x70\x6c\x61\x79\x4d\x69\x73\x73'](),this[_0x62111a(0x328)](_0x62111a(0x6a2));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x23e)]=Game_Actor[_0x23b15a(0x8ea)]['\x70\x61\x72\x61\x6d\x42\x61\x73\x65'],Game_Actor[_0x23b15a(0x8ea)]['\x70\x61\x72\x61\x6d\x42\x61\x73\x65']=function(_0x570507){const _0x5a5ce6=_0x23b15a;if(this[_0x5a5ce6(0x493)]>0x63)return this[_0x5a5ce6(0x800)](_0x570507);return VisuMZ[_0x5a5ce6(0x7db)][_0x5a5ce6(0x23e)]['\x63\x61\x6c\x6c'](this,_0x570507);},Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x800)]=function(_0x4f0732){const _0x22a50f=_0x23b15a,_0x4f1321=this[_0x22a50f(0x25c)]()[_0x22a50f(0x12d)][_0x4f0732][0x63],_0x4c4f2b=this[_0x22a50f(0x25c)]()[_0x22a50f(0x12d)][_0x4f0732][0x62];return _0x4f1321+(_0x4f1321-_0x4c4f2b)*(this['\x6c\x65\x76\x65\x6c']-0x63);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7ff)]=Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x6fe)],Game_Actor[_0x23b15a(0x8ea)]['\x63\x68\x61\x6e\x67\x65\x43\x6c\x61\x73\x73']=function(_0x4c0eb5,_0x39021b){const _0x4a7322=_0x23b15a;$gameTemp[_0x4a7322(0x8e0)]=!![],VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x47\x61\x6d\x65\x5f\x41\x63\x74\x6f\x72\x5f\x63\x68\x61\x6e\x67\x65\x43\x6c\x61\x73\x73'][_0x4a7322(0x744)](this,_0x4c0eb5,_0x39021b),$gameTemp['\x5f\x63\x68\x61\x6e\x67\x69\x6e\x67\x43\x6c\x61\x73\x73']=undefined;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x801)]=Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x5aa)],Game_Actor['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6c\x65\x76\x65\x6c\x55\x70']=function(){const _0x29831a=_0x23b15a;VisuMZ[_0x29831a(0x7db)][_0x29831a(0x801)][_0x29831a(0x744)](this),!$gameTemp['\x5f\x63\x68\x61\x6e\x67\x69\x6e\x67\x43\x6c\x61\x73\x73']&&this['\x6c\x65\x76\x65\x6c\x55\x70\x52\x65\x63\x6f\x76\x65\x72\x79']();},Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x51f)]=function(){const _0x24d0fd=_0x23b15a;this[_0x24d0fd(0x238)]={},VisuMZ[_0x24d0fd(0x7db)][_0x24d0fd(0x742)]['\x51\x6f\x4c'][_0x24d0fd(0x609)]&&(this[_0x24d0fd(0x40f)]=this[_0x24d0fd(0x219)]),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x24d0fd(0x742)][_0x24d0fd(0x875)]['\x4c\x65\x76\x65\x6c\x55\x70\x46\x75\x6c\x6c\x4d\x70']&&(this['\x5f\x6d\x70']=this[_0x24d0fd(0x136)]);},Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x6cb)]=function(){const _0xab3fe8=_0x23b15a;if(this[_0xab3fe8(0x436)]())return 0x1;const _0x1e7e42=this[_0xab3fe8(0x713)]()-this[_0xab3fe8(0x188)](),_0x5697f3=this[_0xab3fe8(0x715)]()-this[_0xab3fe8(0x188)]();return(_0x5697f3/_0x1e7e42)['\x63\x6c\x61\x6d\x70'](0x0,0x1);},Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x7fc)]=function(){const _0x11528f=_0x23b15a,_0x23d68e=Game_Battler['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x11528f(0x7fc)][_0x11528f(0x744)](this);for(const _0x4c8c30 of this['\x65\x71\x75\x69\x70\x73']()){_0x4c8c30&&_0x23d68e[_0x11528f(0x2b9)](_0x4c8c30);}return _0x23d68e[_0x11528f(0x2b9)](this['\x63\x75\x72\x72\x65\x6e\x74\x43\x6c\x61\x73\x73'](),this[_0x11528f(0x42b)]()),_0x23d68e;},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x41\x63\x74\x6f\x72\x5f\x69\x73\x50\x72\x65\x73\x65\x72\x76\x65\x54\x70']=Game_Actor[_0x23b15a(0x8ea)]['\x69\x73\x50\x72\x65\x73\x65\x72\x76\x65\x54\x70'],Game_Actor[_0x23b15a(0x8ea)]['\x69\x73\x50\x72\x65\x73\x65\x72\x76\x65\x54\x70']=function(){const _0x9f4bc1=_0x23b15a;if(!$gameParty[_0x9f4bc1(0x244)]())return!![];return VisuMZ[_0x9f4bc1(0x7db)][_0x9f4bc1(0x1b1)][_0x9f4bc1(0x744)](this);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x1ab)]=Game_Unit['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x5af)],Game_Unit[_0x23b15a(0x8ea)][_0x23b15a(0x5af)]=function(_0x34c11d){const _0x3e5547=_0x23b15a;this[_0x3e5547(0x6bb)]=!![],VisuMZ[_0x3e5547(0x7db)][_0x3e5547(0x1ab)][_0x3e5547(0x744)](this,_0x34c11d);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x249)]=Game_Unit[_0x23b15a(0x8ea)][_0x23b15a(0x170)],Game_Unit[_0x23b15a(0x8ea)]['\x6f\x6e\x42\x61\x74\x74\x6c\x65\x45\x6e\x64']=function(){const _0x4b86f3=_0x23b15a;for(const _0x461ab7 of this['\x6d\x65\x6d\x62\x65\x72\x73']()){_0x461ab7&&!_0x461ab7[_0x4b86f3(0x929)]()&&_0x461ab7[_0x4b86f3(0x2b1)]();}VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x47\x61\x6d\x65\x5f\x55\x6e\x69\x74\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x45\x6e\x64'][_0x4b86f3(0x744)](this);},Object[_0x23b15a(0x2f3)](Game_Enemy[_0x23b15a(0x8ea)],_0x23b15a(0x493),{'\x67\x65\x74':function(){const _0x584a42=_0x23b15a;return this[_0x584a42(0x60f)]();},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':!![]}),Game_Enemy[_0x23b15a(0x8ea)][_0x23b15a(0x60f)]=function(){const _0xb22ecd=_0x23b15a;return this[_0xb22ecd(0x5e5)]()[_0xb22ecd(0x493)];},Game_Enemy[_0x23b15a(0x8ea)][_0x23b15a(0x571)]=function(){const _0x5d109e=_0x23b15a;!this['\x5f\x72\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x65\x64']&&(this[_0x5d109e(0x476)]+=Math[_0x5d109e(0x38b)]((Graphics['\x68\x65\x69\x67\x68\x74']-0x270)/0x2),this[_0x5d109e(0x476)]-=Math[_0x5d109e(0x8ff)]((Graphics[_0x5d109e(0x92d)]-Graphics[_0x5d109e(0x7f6)])/0x2),$gameSystem[_0x5d109e(0x857)]()?this[_0x5d109e(0x1ff)]-=Math[_0x5d109e(0x8ff)]((Graphics[_0x5d109e(0x3e2)]-Graphics[_0x5d109e(0x725)])/0x2):this[_0x5d109e(0x1ff)]+=Math[_0x5d109e(0x38b)]((Graphics[_0x5d109e(0x725)]-0x330)/0x2)),this['\x5f\x72\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x65\x64']=!![];},Game_Party[_0x23b15a(0x8ea)]['\x6d\x61\x78\x47\x6f\x6c\x64']=function(){const _0x54e456=_0x23b15a;return VisuMZ[_0x54e456(0x7db)][_0x54e456(0x742)][_0x54e456(0x513)][_0x54e456(0x55f)];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x1c7)]=Game_Party['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x24a)],Game_Party[_0x23b15a(0x8ea)][_0x23b15a(0x24a)]=function(_0x49b988){const _0x24cc2c=_0x23b15a;if(VisuMZ[_0x24cc2c(0x7db)][_0x24cc2c(0x742)][_0x24cc2c(0x875)][_0x24cc2c(0x904)]&&DataManager[_0x24cc2c(0x813)](_0x49b988))return;VisuMZ[_0x24cc2c(0x7db)][_0x24cc2c(0x1c7)]['\x63\x61\x6c\x6c'](this,_0x49b988);},Game_Party[_0x23b15a(0x8ea)][_0x23b15a(0x3d7)]=function(){const _0x40299f=_0x23b15a,_0x3391c5=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x51\x6f\x4c'],_0x3679f0=_0x3391c5[_0x40299f(0x243)]??0x63;let _0x4f23b9=[];(_0x3391c5[_0x40299f(0x78c)]??!![])&&(_0x4f23b9=_0x4f23b9[_0x40299f(0x1f0)]($dataItems));(_0x3391c5[_0x40299f(0x910)]??!![])&&(_0x4f23b9=_0x4f23b9[_0x40299f(0x1f0)]($dataWeapons));(_0x3391c5['\x42\x54\x65\x73\x74\x41\x72\x6d\x6f\x72\x73']??!![])&&(_0x4f23b9=_0x4f23b9[_0x40299f(0x1f0)]($dataArmors));for(const _0x7ee227 of _0x4f23b9){if(!_0x7ee227)continue;if(_0x7ee227['\x6e\x61\x6d\x65'][_0x40299f(0x811)]()<=0x0)continue;if(_0x7ee227[_0x40299f(0x5f0)][_0x40299f(0x70d)](/-----/i))continue;this[_0x40299f(0x5e7)](_0x7ee227,_0x3679f0);}},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x54\x72\x6f\x6f\x70\x5f\x73\x65\x74\x75\x70']=Game_Troop['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x49a)],Game_Troop[_0x23b15a(0x8ea)][_0x23b15a(0x49a)]=function(_0x135f58){const _0x3faaa3=_0x23b15a;$gameTemp[_0x3faaa3(0x1af)](),$gameTemp[_0x3faaa3(0x187)](_0x135f58),VisuMZ[_0x3faaa3(0x7db)][_0x3faaa3(0x77f)][_0x3faaa3(0x744)](this,_0x135f58);},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x65\x74\x75\x70']=Game_Map[_0x23b15a(0x8ea)]['\x73\x65\x74\x75\x70'],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x49a)]=function(_0x48da63){const _0x180a82=_0x23b15a;VisuMZ[_0x180a82(0x7db)]['\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x65\x74\x75\x70']['\x63\x61\x6c\x6c'](this,_0x48da63),this[_0x180a82(0x5c1)](),this['\x73\x65\x74\x75\x70\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'](_0x48da63),this[_0x180a82(0x120)]();},Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x750)]=function(){const _0x502701=_0x23b15a;this[_0x502701(0x16a)]=VisuMZ[_0x502701(0x7db)][_0x502701(0x742)][_0x502701(0x875)][_0x502701(0x538)]||![];const _0x587b0b=VisuMZ[_0x502701(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x502701(0x17d)],_0x138a32=$dataMap?$dataMap[_0x502701(0x47c)]||'':'';if(_0x138a32[_0x502701(0x70d)](/<SHOW TILE SHADOWS>/i))this[_0x502701(0x16a)]=![];else _0x138a32['\x6d\x61\x74\x63\x68'](/<HIDE TILE SHADOWS>/i)&&(this['\x5f\x68\x69\x64\x65\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73']=!![]);if(_0x138a32['\x6d\x61\x74\x63\x68'](/<SCROLL LOCK X>/i))this[_0x502701(0x6e9)]()[_0x502701(0x91b)]=!![],this[_0x502701(0x6e9)]()[_0x502701(0x171)]=_0x587b0b[_0x502701(0x697)];else _0x138a32[_0x502701(0x70d)](/<SCROLL LOCK X: (.*?)>/i)&&(this[_0x502701(0x6e9)]()['\x63\x65\x6e\x74\x65\x72\x58']=!![],this['\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b\x44\x61\x74\x61']()[_0x502701(0x171)]=Number(RegExp['\x24\x31']));if(_0x138a32[_0x502701(0x70d)](/<SCROLL LOCK Y>/i))this[_0x502701(0x6e9)]()[_0x502701(0x4b9)]=!![],this[_0x502701(0x6e9)]()[_0x502701(0x5da)]=_0x587b0b['\x44\x69\x73\x70\x6c\x61\x79\x4c\x6f\x63\x6b\x59'];else _0x138a32[_0x502701(0x70d)](/<SCROLL LOCK Y: (.*?)>/i)&&(this[_0x502701(0x6e9)]()[_0x502701(0x4b9)]=!![],this[_0x502701(0x6e9)]()[_0x502701(0x5da)]=Number(RegExp['\x24\x31']));},Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x65f)]=function(){const _0x2ebcca=_0x23b15a;return this['\x5f\x68\x69\x64\x65\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73']===undefined&&this[_0x2ebcca(0x750)](),this['\x5f\x68\x69\x64\x65\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73'];},Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x5c1)]=function(){const _0xdc7bd7=_0x23b15a,_0x5dd1b3=VisuMZ[_0xdc7bd7(0x7db)][_0xdc7bd7(0x742)][_0xdc7bd7(0x17d)];this[_0xdc7bd7(0x562)]={'\x63\x65\x6e\x74\x65\x72\x58':![],'\x63\x65\x6e\x74\x65\x72\x59':![],'\x64\x69\x73\x70\x6c\x61\x79\x58':0x0,'\x64\x69\x73\x70\x6c\x61\x79\x59':0x0};if(_0x5dd1b3[_0xdc7bd7(0x620)]){const _0x513aa6=Graphics[_0xdc7bd7(0x3e2)]/this['\x74\x69\x6c\x65\x57\x69\x64\x74\x68']();_0x513aa6%0x1!==0x0&&Math[_0xdc7bd7(0x643)](_0x513aa6)===this['\x77\x69\x64\x74\x68']()&&!this[_0xdc7bd7(0x5e4)]()&&(this['\x5f\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b'][_0xdc7bd7(0x91b)]=!![],this['\x5f\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b'][_0xdc7bd7(0x171)]=_0x5dd1b3[_0xdc7bd7(0x697)]||0x0);}if(_0x5dd1b3['\x41\x75\x74\x6f\x53\x63\x72\x6f\x6c\x6c\x4c\x6f\x63\x6b\x59']){const _0x496e6d=Graphics[_0xdc7bd7(0x92d)]/this[_0xdc7bd7(0x3a5)]();_0x496e6d%0x1!==0x0&&Math[_0xdc7bd7(0x643)](_0x496e6d)===this[_0xdc7bd7(0x92d)]()&&!this['\x69\x73\x4c\x6f\x6f\x70\x56\x65\x72\x74\x69\x63\x61\x6c']()&&(this['\x5f\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b'][_0xdc7bd7(0x4b9)]=!![],this['\x5f\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b'][_0xdc7bd7(0x5da)]=_0x5dd1b3[_0xdc7bd7(0x8ed)]||0x0);}$gameScreen[_0xdc7bd7(0x8a2)]()===0x1&&(this[_0xdc7bd7(0x6e9)]()['\x63\x65\x6e\x74\x65\x72\x58']&&(this[_0xdc7bd7(0x1be)]=this[_0xdc7bd7(0x6e9)]()['\x64\x69\x73\x70\x6c\x61\x79\x58']),this['\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b\x44\x61\x74\x61']()[_0xdc7bd7(0x4b9)]&&(this['\x5f\x64\x69\x73\x70\x6c\x61\x79\x59']=this[_0xdc7bd7(0x6e9)]()[_0xdc7bd7(0x5da)]));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7b6)]=Game_Map[_0x23b15a(0x8ea)]['\x73\x65\x74\x44\x69\x73\x70\x6c\x61\x79\x50\x6f\x73'],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x361)]=function(_0x908c2f,_0x3aa520){const _0x3b5ed9=_0x23b15a;VisuMZ[_0x3b5ed9(0x7db)][_0x3b5ed9(0x7b6)][_0x3b5ed9(0x744)](this,_0x908c2f,_0x3aa520),$gameScreen[_0x3b5ed9(0x8a2)]()===0x1&&(!this[_0x3b5ed9(0x5e4)]()&&this[_0x3b5ed9(0x6e9)]()[_0x3b5ed9(0x91b)]&&(this[_0x3b5ed9(0x1be)]=this[_0x3b5ed9(0x6e9)]()[_0x3b5ed9(0x171)]),!this[_0x3b5ed9(0x2e2)]()&&this['\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b\x44\x61\x74\x61']()[_0x3b5ed9(0x4b9)]&&(this[_0x3b5ed9(0x8b5)]=this['\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b\x44\x61\x74\x61']()[_0x3b5ed9(0x5da)]));},Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x6e9)]=function(){const _0x305372=_0x23b15a;return this[_0x305372(0x562)]===undefined&&this[_0x305372(0x5c1)](),this[_0x305372(0x562)];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7b7)]=Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x633)],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x633)]=function(_0x391bcf){const _0x288b1a=_0x23b15a;if(this[_0x288b1a(0x6e9)]()['\x63\x65\x6e\x74\x65\x72\x59']&&$gameScreen[_0x288b1a(0x8a2)]()===0x1){this['\x5f\x64\x69\x73\x70\x6c\x61\x79\x59']=this[_0x288b1a(0x6e9)]()[_0x288b1a(0x5da)];return;}VisuMZ[_0x288b1a(0x7db)][_0x288b1a(0x7b7)][_0x288b1a(0x744)](this,_0x391bcf);},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x63\x72\x6f\x6c\x6c\x4c\x65\x66\x74']=Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x8ec)],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x8ec)]=function(_0x40bfd6){const _0x2c3687=_0x23b15a;if(this['\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b\x44\x61\x74\x61']()[_0x2c3687(0x91b)]&&$gameScreen[_0x2c3687(0x8a2)]()===0x1){this[_0x2c3687(0x1be)]=this[_0x2c3687(0x6e9)]()[_0x2c3687(0x171)];return;}VisuMZ[_0x2c3687(0x7db)]['\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x63\x72\x6f\x6c\x6c\x4c\x65\x66\x74'][_0x2c3687(0x744)](this,_0x40bfd6);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x548)]=Game_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x558)],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x558)]=function(_0x38eb74){const _0x4173db=_0x23b15a;if(this[_0x4173db(0x6e9)]()[_0x4173db(0x91b)]&&$gameScreen[_0x4173db(0x8a2)]()===0x1){this['\x5f\x64\x69\x73\x70\x6c\x61\x79\x58']=this[_0x4173db(0x6e9)]()['\x64\x69\x73\x70\x6c\x61\x79\x58'];return;}VisuMZ[_0x4173db(0x7db)][_0x4173db(0x548)][_0x4173db(0x744)](this,_0x38eb74);},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x63\x72\x6f\x6c\x6c\x55\x70']=Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x6d4)],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x6d4)]=function(_0x1c167c){const _0x2a51db=_0x23b15a;if(this[_0x2a51db(0x6e9)]()[_0x2a51db(0x4b9)]&&$gameScreen[_0x2a51db(0x8a2)]()===0x1){this['\x5f\x64\x69\x73\x70\x6c\x61\x79\x59']=this[_0x2a51db(0x6e9)]()[_0x2a51db(0x5da)];return;}VisuMZ[_0x2a51db(0x7db)]['\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x63\x72\x6f\x6c\x6c\x55\x70'][_0x2a51db(0x744)](this,_0x1c167c);},Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x120)]=function(){const _0x56f3cb=_0x23b15a;this['\x5f\x74\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x54\x65\x72\x72\x61\x69\x6e\x54\x61\x67\x73']={};const _0x26c84e=this['\x74\x69\x6c\x65\x73\x65\x74']();if(!_0x26c84e)return{};const _0x6e6979=_0x26c84e['\x6e\x6f\x74\x65']||'',_0x5896b7=/<(?:TALLER|EXT|EXTEND|RAISE)[ ]BY[ ](\d+):[ ](.*)>/gi;let _0x49fc25={};const _0x333194=_0x6e6979[_0x56f3cb(0x70d)](_0x5896b7);if(_0x333194)for(const _0xdf9002 of _0x333194){_0xdf9002[_0x56f3cb(0x70d)](_0x5896b7);const _0x446230=Number(RegExp['\x24\x31'])[_0x56f3cb(0x1d1)](0x1,0x10),_0x3e5781=String(RegExp['\x24\x32'])[_0x56f3cb(0x521)]('\x2c')[_0x56f3cb(0x1c5)](_0x162c3d=>Number(_0x162c3d)[_0x56f3cb(0x1d1)](0x1,0x7));for(const _0x1d4aeb of _0x3e5781){_0x49fc25[_0x1d4aeb]=_0x446230;}}this['\x5f\x74\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x54\x65\x72\x72\x61\x69\x6e\x54\x61\x67\x73']=_0x49fc25;},Game_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x502)]=function(){const _0x325fd1=_0x23b15a;return this[_0x325fd1(0x4d3)]===undefined&&this[_0x325fd1(0x120)](),this['\x5f\x74\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x54\x65\x72\x72\x61\x69\x6e\x54\x61\x67\x73'];},Game_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x5c7)]=function(_0x1392be){const _0x365aff=_0x23b15a;if(_0x1392be>=0x400)return![];const _0x2455aa=$gameMap[_0x365aff(0x502)]();if(Object[_0x365aff(0x726)](_0x2455aa)[_0x365aff(0x699)]<=0x0)return![];const _0xffacd6=this[_0x365aff(0x330)](),_0x4c297d=_0xffacd6[_0x1392be]>>0xc,_0x4afe86=_0x2455aa[_0x4c297d]||0x0;return _0x4afe86>0x0;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4c7)]=Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x439)],Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x439)]=function(_0x4019cb){const _0x24a996=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x24a996(0x4c7)][_0x24a996(0x744)](this,_0x4019cb),this['\x72\x65\x66\x72\x65\x73\x68\x53\x70\x72\x69\x74\x65\x73\x65\x74\x46\x6f\x72\x45\x78\x74\x65\x6e\x64\x65\x64\x54\x69\x6c\x65\x73'](),SceneManager[_0x24a996(0x753)][_0x24a996(0x22b)][_0x24a996(0x8fc)]();},Game_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x5f4)]=function(){const _0x4ca650=_0x23b15a,_0x30bd95=this[_0x4ca650(0x502)]();if(Object[_0x4ca650(0x726)](_0x30bd95)[_0x4ca650(0x699)]<=0x0)return;const _0x18d107=SceneManager[_0x4ca650(0x753)]['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'];_0x18d107&&(_0x18d107[_0x4ca650(0x31f)]&&_0x18d107[_0x4ca650(0x31f)](),_0x18d107[_0x4ca650(0x384)]&&_0x18d107[_0x4ca650(0x384)]());},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4bc)]=Game_Character[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x4d\x6f\x76\x65\x43\x6f\x6d\x6d\x61\x6e\x64'],Game_Character[_0x23b15a(0x8ea)][_0x23b15a(0x4ed)]=function(_0x391f06){const _0x411544=_0x23b15a;try{VisuMZ[_0x411544(0x7db)][_0x411544(0x4bc)][_0x411544(0x744)](this,_0x391f06);}catch(_0x58fbde){$gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&console[_0x411544(0x5f6)](_0x58fbde);}},Game_Player[_0x23b15a(0x8ea)][_0x23b15a(0x787)]=function(){const _0x46fce1=_0x23b15a,_0x42fcd9=$gameMap[_0x46fce1(0x25f)]();this[_0x46fce1(0x341)]=Math[_0x46fce1(0x366)](_0x42fcd9)+Math[_0x46fce1(0x366)](_0x42fcd9)+this[_0x46fce1(0x21e)]();},Game_Player['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x21e)]=function(){const _0x230fe6=_0x23b15a;return $dataMap&&$dataMap[_0x230fe6(0x47c)]&&$dataMap[_0x230fe6(0x47c)][_0x230fe6(0x70d)](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?Number(RegExp['\x24\x31']):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x230fe6(0x875)][_0x230fe6(0x86e)];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x467)]=Game_Event['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x121)],Game_Event[_0x23b15a(0x8ea)][_0x23b15a(0x121)]=function(_0x3a9df5,_0x54b634){const _0x301784=_0x23b15a;return this[_0x301784(0x2d1)]()?this['\x63\x68\x65\x63\x6b\x53\x6d\x61\x72\x74\x45\x76\x65\x6e\x74\x43\x6f\x6c\x6c\x69\x73\x69\x6f\x6e'](_0x3a9df5,_0x54b634):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x301784(0x467)][_0x301784(0x744)](this,_0x3a9df5,_0x54b634);},Game_Event[_0x23b15a(0x8ea)][_0x23b15a(0x2d1)]=function(){const _0x2edcec=_0x23b15a;return VisuMZ[_0x2edcec(0x7db)][_0x2edcec(0x742)]['\x51\x6f\x4c'][_0x2edcec(0x4cb)];},Game_Event[_0x23b15a(0x8ea)][_0x23b15a(0x7a8)]=function(_0x34838b,_0xc48583){const _0x4e8cda=_0x23b15a;if(!this['\x69\x73\x4e\x6f\x72\x6d\x61\x6c\x50\x72\x69\x6f\x72\x69\x74\x79']())return![];else{const _0x190e03=$gameMap['\x65\x76\x65\x6e\x74\x73\x58\x79\x4e\x74'](_0x34838b,_0xc48583)[_0x4e8cda(0x731)](_0x284c15=>_0x284c15['\x69\x73\x4e\x6f\x72\x6d\x61\x6c\x50\x72\x69\x6f\x72\x69\x74\x79']());return _0x190e03[_0x4e8cda(0x699)]>0x0;}},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x69c)]=Game_Interpreter[_0x23b15a(0x8ea)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x30\x35'],Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x8b0)]=function(_0x78e22b){const _0x22aa90=_0x23b15a,_0x254990=this[_0x22aa90(0x3c2)]();return _0x254990['\x6d\x61\x74\x63\x68'](/\/\/[ ]SCRIPT[ ]CALL/i)?this[_0x22aa90(0x3e9)](_0x254990):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x22aa90(0x69c)][_0x22aa90(0x744)](this,_0x78e22b);},Game_Interpreter['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3c2)]=function(){const _0x71a217=_0x23b15a;let _0x1e0311='',_0x249e9a=this[_0x71a217(0x4fe)]+0x1;while(this[_0x71a217(0x281)][_0x249e9a]&&this[_0x71a217(0x281)][_0x249e9a][_0x71a217(0x487)]===0x195){_0x1e0311+=this[_0x71a217(0x281)][_0x249e9a][_0x71a217(0x160)][0x0]+'\x0a',_0x249e9a++;}return _0x1e0311;},Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x3e9)]=function(_0x3cfff3){const _0x4c86c7=_0x23b15a;try{eval(_0x3cfff3);}catch(_0x45b4a9){$gameTemp[_0x4c86c7(0x3e7)]()&&(console['\x6c\x6f\x67'](_0x4c86c7(0x166)),console[_0x4c86c7(0x5f6)](_0x45b4a9));}return!![];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x364)]=Game_Interpreter['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x7d6)],Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x7d6)]=function(_0x3dc531){const _0x4ff30a=_0x23b15a;try{VisuMZ[_0x4ff30a(0x7db)][_0x4ff30a(0x364)][_0x4ff30a(0x744)](this,_0x3dc531);}catch(_0x2c383c){$gameTemp[_0x4ff30a(0x3e7)]()&&(console['\x6c\x6f\x67'](_0x4ff30a(0x7f1)),console[_0x4ff30a(0x5f6)](_0x2c383c)),this[_0x4ff30a(0x874)]();}return!![];},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x32\x32']=Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x5c8)],Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x5c8)]=function(_0x142eb6){const _0x3ac8f4=_0x23b15a;try{VisuMZ[_0x3ac8f4(0x7db)][_0x3ac8f4(0x7d4)][_0x3ac8f4(0x744)](this,_0x142eb6);}catch(_0x2b8ee4){$gameTemp[_0x3ac8f4(0x3e7)]()&&(console[_0x3ac8f4(0x5f6)](_0x3ac8f4(0x7e4)),console[_0x3ac8f4(0x5f6)](_0x2b8ee4));}return!![];},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x33\x35\x35']=Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x7a0)],Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x7a0)]=function(){const _0x4136f9=_0x23b15a;try{VisuMZ[_0x4136f9(0x7db)]['\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x33\x35\x35'][_0x4136f9(0x744)](this);}catch(_0xccf667){$gameTemp[_0x4136f9(0x3e7)]()&&(console[_0x4136f9(0x5f6)](_0x4136f9(0x7fb)),console[_0x4136f9(0x5f6)](_0xccf667));}return!![];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x1f1)]=Game_Interpreter['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x6f\x6d\x6d\x61\x6e\x64\x33\x35\x37'],Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x2d6)]=function(_0x4fce56){const _0x397006=_0x23b15a;return $gameTemp[_0x397006(0x7d7)](this),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64'][_0x397006(0x744)](this,_0x4fce56);},Scene_Base[_0x23b15a(0x8ea)]['\x66\x61\x64\x65\x53\x70\x65\x65\x64']=function(){const _0x48f51a=_0x23b15a;return VisuMZ[_0x48f51a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x55\x49'][_0x48f51a(0x898)];},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x231)]=function(){return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x55\x49']['\x42\x6f\x74\x74\x6f\x6d\x48\x65\x6c\x70'];},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x7ae)]=function(){const _0xe7752d=_0x23b15a;return VisuMZ[_0xe7752d(0x7db)][_0xe7752d(0x742)]['\x55\x49'][_0xe7752d(0x4dc)];},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x2f1)]=function(){const _0x2d646e=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x2d646e(0x742)]['\x55\x49'][_0x2d646e(0x87f)];},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x6ec)]=function(){const _0x285520=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x285520(0x742)]['\x55\x49'][_0x285520(0x3fe)];},Scene_Base[_0x23b15a(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74']=function(){const _0x733fac=_0x23b15a;return VisuMZ[_0x733fac(0x7db)][_0x733fac(0x742)]['\x55\x49'][_0x733fac(0x7eb)];},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x672)]=function(){const _0x19aaa3=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x19aaa3(0x742)][_0x19aaa3(0x4c2)][_0x19aaa3(0x8b8)];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2bb)]=Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x65b)],Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x72\x65\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x4c\x61\x79\x65\x72']=function(){const _0x4cb291=_0x23b15a;VisuMZ[_0x4cb291(0x7db)][_0x4cb291(0x2bb)][_0x4cb291(0x744)](this),this[_0x4cb291(0x18b)](),this['\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x50\x6f\x70\x75\x70\x57\x69\x6e\x64\x6f\x77'](),this[_0x4cb291(0x3eb)]['\x78']=Math[_0x4cb291(0x38b)](this[_0x4cb291(0x3eb)]['\x78']),this[_0x4cb291(0x3eb)]['\x79']=Math[_0x4cb291(0x38b)](this[_0x4cb291(0x3eb)]['\x79']);},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x18b)]=function(){},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x804)]=function(){const _0x1991e4=_0x23b15a;this[_0x1991e4(0x84a)]=new Window_TextPopup(),this[_0x1991e4(0x8c0)](this['\x5f\x74\x65\x78\x74\x50\x6f\x70\x75\x70\x57\x69\x6e\x64\x6f\x77']);},$textPopup=function(_0x4e6fab){const _0x368531=_0x23b15a,_0x246e75=SceneManager[_0x368531(0x753)]['\x5f\x74\x65\x78\x74\x50\x6f\x70\x75\x70\x57\x69\x6e\x64\x6f\x77'];_0x246e75&&_0x246e75['\x61\x64\x64\x51\x75\x65\x75\x65'](_0x4e6fab);},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x581)]=function(){const _0x58f8d4=_0x23b15a;return TextManager[_0x58f8d4(0x4e1)](_0x58f8d4(0x25b),_0x58f8d4(0x1b5));},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x7c3)]=function(){const _0x2c60e2=_0x23b15a;return TextManager[_0x2c60e2(0x310)](_0x2c60e2(0x755));},Scene_Base[_0x23b15a(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x33']=function(){const _0x4ec55e=_0x23b15a;return TextManager[_0x4ec55e(0x310)](_0x4ec55e(0x27a));},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x34']=function(){return TextManager['\x67\x65\x74\x49\x6e\x70\x75\x74\x42\x75\x74\x74\x6f\x6e\x53\x74\x72\x69\x6e\x67']('\x6f\x6b');},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x350)]=function(){const _0x2611b5=_0x23b15a;return TextManager[_0x2611b5(0x310)]('\x63\x61\x6e\x63\x65\x6c');},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x7bd)]=function(){const _0x3d2127=_0x23b15a;return this['\x5f\x70\x61\x67\x65\x75\x70\x42\x75\x74\x74\x6f\x6e']&&this[_0x3d2127(0x5d9)][_0x3d2127(0x44b)]?TextManager[_0x3d2127(0x302)]:'';},Scene_Base[_0x23b15a(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x32']=function(){return'';},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x169)]=function(){return'';},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x230)]=function(){const _0x52a87f=_0x23b15a;return TextManager[_0x52a87f(0x416)];},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x43c)]=function(){return TextManager['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x43\x61\x6e\x63\x65\x6c'];},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x784)]=function(){return 0x0;},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x586)]=function(){return 0x0;},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x5df)]=function(){return 0x0;},Scene_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x66\x66\x73\x65\x74\x34']=function(){return 0x0;},Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x2e1)]=function(){return 0x0;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x1f5)]=Scene_Boot[_0x23b15a(0x8ea)]['\x6c\x6f\x61\x64\x53\x79\x73\x74\x65\x6d\x49\x6d\x61\x67\x65\x73'],Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x60e)]=function(){const _0x3a0e20=_0x23b15a;VisuMZ[_0x3a0e20(0x7db)][_0x3a0e20(0x1f5)][_0x3a0e20(0x744)](this),this[_0x3a0e20(0x74e)]();},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x74e)]=function(){const _0x393425=_0x23b15a,_0x167915=['\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73',_0x393425(0x294),_0x393425(0x2e8),_0x393425(0x6a4),_0x393425(0x511),_0x393425(0x4c9),_0x393425(0x20e),_0x393425(0x380),_0x393425(0x358),_0x393425(0x89c),'\x73\x79\x73\x74\x65\x6d',_0x393425(0x40c),_0x393425(0x71c),_0x393425(0x80b)];for(const _0x198050 of _0x167915){const _0xc2d2c8=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x49\x6d\x67\x4c\x6f\x61\x64'][_0x198050],_0x3e0e23=_0x393425(0x453)[_0x393425(0x8ca)](_0x198050);for(const _0x36b363 of _0xc2d2c8){ImageManager[_0x393425(0x131)](_0x3e0e23,_0x36b363);}}},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x657)]=Scene_Boot[_0x23b15a(0x8ea)]['\x73\x74\x61\x72\x74\x4e\x6f\x72\x6d\x61\x6c\x47\x61\x6d\x65'],Scene_Boot[_0x23b15a(0x8ea)]['\x73\x74\x61\x72\x74\x4e\x6f\x72\x6d\x61\x6c\x47\x61\x6d\x65']=function(){const _0x58cc36=_0x23b15a;Utils['\x69\x73\x4f\x70\x74\x69\x6f\x6e\x56\x61\x6c\x69\x64']('\x74\x65\x73\x74')&&VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x58cc36(0x742)][_0x58cc36(0x875)][_0x58cc36(0x92e)]?this[_0x58cc36(0x8ac)]():VisuMZ[_0x58cc36(0x7db)][_0x58cc36(0x657)][_0x58cc36(0x744)](this);},Scene_Boot['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x73\x74\x61\x72\x74\x41\x75\x74\x6f\x4e\x65\x77\x47\x61\x6d\x65']=function(){const _0xc6a3e3=_0x23b15a;this[_0xc6a3e3(0x786)](),DataManager[_0xc6a3e3(0x1aa)](),SceneManager[_0xc6a3e3(0x8f0)](Scene_Map);},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x1b6)]=function(){const _0x2eae2b=_0x23b15a,_0x26604c=$dataSystem[_0x2eae2b(0x4c1)][_0x2eae2b(0x1ac)],_0x14e798=$dataSystem[_0x2eae2b(0x4c1)][_0x2eae2b(0x1fa)],_0x385a94=VisuMZ[_0x2eae2b(0x7db)][_0x2eae2b(0x742)]['\x55\x49']['\x42\x6f\x78\x4d\x61\x72\x67\x69\x6e'];Graphics[_0x2eae2b(0x725)]=_0x26604c-_0x385a94*0x2,Graphics[_0x2eae2b(0x7f6)]=_0x14e798-_0x385a94*0x2,this['\x64\x65\x74\x65\x72\x6d\x69\x6e\x65\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74\x56\x61\x6c\x69\x64']();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7cf)]=Scene_Boot['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x70\x64\x61\x74\x65\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x69\x74\x6c\x65'],Scene_Boot['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3c7)]=function(){const _0x4a5b00=_0x23b15a;this[_0x4a5b00(0x2db)]()?this[_0x4a5b00(0x403)]():VisuMZ[_0x4a5b00(0x7db)][_0x4a5b00(0x7cf)][_0x4a5b00(0x744)](this);},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x2db)]=function(){const _0x3f0dcb=_0x23b15a;if(Scene_Title[_0x3f0dcb(0x77a)]==='')return![];if(Scene_Title[_0x3f0dcb(0x77a)]===_0x3f0dcb(0x224))return![];if(Scene_Title['\x76\x65\x72\x73\x69\x6f\x6e']==='')return![];if(Scene_Title[_0x3f0dcb(0x8d4)]===_0x3f0dcb(0x7c9))return![];return!![];},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x403)]=function(){const _0x4708a1=_0x23b15a,_0x1dda16=$dataSystem[_0x4708a1(0x355)],_0x1d979b=Scene_Title[_0x4708a1(0x77a)]||'',_0x22486a=Scene_Title['\x76\x65\x72\x73\x69\x6f\x6e']||'',_0x21be07=VisuMZ[_0x4708a1(0x7db)][_0x4708a1(0x742)][_0x4708a1(0x39d)][_0x4708a1(0x688)][_0x4708a1(0x644)],_0x2b1832=_0x21be07['\x66\x6f\x72\x6d\x61\x74'](_0x1dda16,_0x1d979b,_0x22486a);document[_0x4708a1(0x5cf)]=_0x2b1832;},Scene_Boot[_0x23b15a(0x8ea)][_0x23b15a(0x5b7)]=function(){const _0x526a9e=_0x23b15a;if(VisuMZ[_0x526a9e(0x7db)][_0x526a9e(0x742)]['\x55\x49']['\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x73']){const _0x385870=Graphics[_0x526a9e(0x3e2)]-Graphics[_0x526a9e(0x725)]-VisuMZ[_0x526a9e(0x7db)][_0x526a9e(0x742)]['\x55\x49'][_0x526a9e(0x27b)]*0x2,_0x499546=Sprite_Button[_0x526a9e(0x8ea)][_0x526a9e(0x8e8)][_0x526a9e(0x744)](this)*0x4;_0x385870>=_0x499546&&SceneManager[_0x526a9e(0x483)](!![]);}},Scene_Title[_0x23b15a(0x77a)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x39d)]['\x54\x69\x74\x6c\x65'][_0x23b15a(0x224)],Scene_Title[_0x23b15a(0x8d4)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x688)][_0x23b15a(0x1e4)],Scene_Title[_0x23b15a(0x262)]=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x54\x69\x74\x6c\x65\x50\x69\x63\x42\x75\x74\x74\x6f\x6e\x73'],VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x2a8)]=Scene_Title[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x47\x61\x6d\x65\x54\x69\x74\x6c\x65'],Scene_Title[_0x23b15a(0x8ea)][_0x23b15a(0x7a5)]=function(){const _0x30fa62=_0x23b15a;VisuMZ[_0x30fa62(0x7db)][_0x30fa62(0x742)][_0x30fa62(0x39d)][_0x30fa62(0x688)]['\x64\x72\x61\x77\x47\x61\x6d\x65\x54\x69\x74\x6c\x65']['\x63\x61\x6c\x6c'](this),Scene_Title[_0x30fa62(0x77a)]!==''&&Scene_Title[_0x30fa62(0x77a)]!==_0x30fa62(0x224)&&this[_0x30fa62(0x7f0)](),Scene_Title[_0x30fa62(0x8d4)]!==''&&Scene_Title[_0x30fa62(0x8d4)]!==_0x30fa62(0x7c9)&&this[_0x30fa62(0x1fc)]();},Scene_Title[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x47\x61\x6d\x65\x53\x75\x62\x74\x69\x74\x6c\x65']=function(){const _0x5232df=_0x23b15a;VisuMZ[_0x5232df(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x5232df(0x39d)][_0x5232df(0x688)]['\x64\x72\x61\x77\x47\x61\x6d\x65\x53\x75\x62\x74\x69\x74\x6c\x65'][_0x5232df(0x744)](this);},Scene_Title['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x1fc)]=function(){const _0x23c225=_0x23b15a;VisuMZ[_0x23c225(0x7db)][_0x23c225(0x742)]['\x4d\x65\x6e\x75\x4c\x61\x79\x6f\x75\x74']['\x54\x69\x74\x6c\x65'][_0x23c225(0x1fc)][_0x23c225(0x744)](this);},Scene_Title[_0x23b15a(0x8ea)][_0x23b15a(0x612)]=function(){const _0x36ee74=_0x23b15a;this['\x63\x72\x65\x61\x74\x65\x54\x69\x74\x6c\x65\x42\x75\x74\x74\x6f\x6e\x73']();const _0x4146c3=$dataSystem[_0x36ee74(0x40a)][_0x36ee74(0x536)],_0x277c1a=this[_0x36ee74(0x926)]();this[_0x36ee74(0x153)]=new Window_TitleCommand(_0x277c1a),this[_0x36ee74(0x153)]['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](_0x4146c3);const _0xfeb9ee=this[_0x36ee74(0x926)]();this[_0x36ee74(0x153)][_0x36ee74(0x51b)](_0xfeb9ee['\x78'],_0xfeb9ee['\x79'],_0xfeb9ee[_0x36ee74(0x3e2)],_0xfeb9ee[_0x36ee74(0x92d)]),this[_0x36ee74(0x153)][_0x36ee74(0x7a6)](),this[_0x36ee74(0x153)][_0x36ee74(0x308)](),this['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77']['\x73\x65\x6c\x65\x63\x74\x4c\x61\x73\x74'](),this[_0x36ee74(0x618)](this['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77']);},Scene_Title[_0x23b15a(0x8ea)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77\x52\x6f\x77\x73']=function(){const _0x47db6d=_0x23b15a;return this[_0x47db6d(0x153)]?this['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77'][_0x47db6d(0x2fe)]():VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x47db6d(0x295)]['\x6c\x65\x6e\x67\x74\x68'];},Scene_Title[_0x23b15a(0x8ea)][_0x23b15a(0x926)]=function(){const _0x5da684=_0x23b15a;return VisuMZ[_0x5da684(0x7db)][_0x5da684(0x742)][_0x5da684(0x39d)][_0x5da684(0x688)][_0x5da684(0x879)]['\x63\x61\x6c\x6c'](this);},Scene_Title[_0x23b15a(0x8ea)][_0x23b15a(0x365)]=function(){const _0x4d316c=_0x23b15a;for(const _0x39410e of Scene_Title[_0x4d316c(0x262)]){const _0x515418=new Sprite_TitlePictureButton(_0x39410e);this[_0x4d316c(0x8c0)](_0x515418);}},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x3ea)]=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x46d)]=function(){const _0x32ba19=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'][_0x32ba19(0x744)](this),$gameTemp[_0x32ba19(0x1af)](),this[_0x32ba19(0x435)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x484)]=Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x70\x64\x61\x74\x65\x4d\x61\x69\x6e\x4d\x75\x6c\x74\x69\x70\x6c\x79'],Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x884)]=function(){const _0x50794d=_0x23b15a;VisuMZ[_0x50794d(0x7db)][_0x50794d(0x484)]['\x63\x61\x6c\x6c'](this),$gameTemp[_0x50794d(0x7f8)]&&!$gameMessage[_0x50794d(0x229)]()&&(this[_0x50794d(0x848)](),SceneManager[_0x50794d(0x636)]());},Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x68c)]=function(){const _0x3ff53c=_0x23b15a;Scene_Message[_0x3ff53c(0x8ea)][_0x3ff53c(0x68c)][_0x3ff53c(0x744)](this),!SceneManager['\x69\x73\x4e\x65\x78\x74\x53\x63\x65\x6e\x65'](Scene_Battle)&&(this['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'][_0x3ff53c(0x8fc)](),this[_0x3ff53c(0x2f4)][_0x3ff53c(0x72e)](),this[_0x3ff53c(0x3eb)][_0x3ff53c(0x44b)]=![],SceneManager[_0x3ff53c(0x41a)]()),$gameScreen['\x63\x6c\x65\x61\x72\x5a\x6f\x6f\x6d'](),this[_0x3ff53c(0x435)]();},VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e']=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x4d4)],Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x4d4)]=function(){const _0x388002=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x388002(0x1cf)]['\x63\x61\x6c\x6c'](this),SceneManager['\x69\x73\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']()&&this[_0x388002(0x14b)]();},Scene_Map[_0x23b15a(0x8ea)]['\x6d\x6f\x76\x65\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']=function(){const _0x2c6b99=_0x23b15a;this[_0x2c6b99(0x20c)]['\x78']=Graphics['\x62\x6f\x78\x57\x69\x64\x74\x68']+0x4;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x81d)]=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x77e)],Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x77e)]=function(){const _0x2bda98=_0x23b15a;VisuMZ[_0x2bda98(0x7db)][_0x2bda98(0x81d)][_0x2bda98(0x744)](this),this[_0x2bda98(0x30a)]();},Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x30a)]=function(){const _0x8e7985=_0x23b15a;Input[_0x8e7985(0x304)](_0x8e7985(0x291))&&(ConfigManager[_0x8e7985(0x29c)]=!ConfigManager[_0x8e7985(0x29c)],ConfigManager[_0x8e7985(0x6f0)]());},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x163)]=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x848)],Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x848)]=function(){const _0x1fc983=_0x23b15a;VisuMZ[_0x1fc983(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x75\x70\x64\x61\x74\x65\x4d\x61\x69\x6e'][_0x1fc983(0x744)](this),this['\x75\x70\x64\x61\x74\x65\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x73']();},Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x435)]=function(){this['\x5f\x6f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x73']=[];},Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x3f1)]=function(){const _0x58699b=_0x23b15a;if(!this[_0x58699b(0x541)])return;for(const _0x10962b of this[_0x58699b(0x541)]){_0x10962b&&_0x10962b['\x75\x70\x64\x61\x74\x65']();}},Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x667)]=function(_0x13e118,_0x422779){const _0x5833ba=_0x23b15a,_0x175afc=$dataCommonEvents[_0x13e118];if(!_0x175afc)return;const _0x41f175=new Game_OnceParallelInterpreter();this[_0x5833ba(0x8dc)](_0x41f175),_0x41f175[_0x5833ba(0x526)](_0x13e118),_0x41f175[_0x5833ba(0x747)](_0x422779);},Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x61\x64\x64\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']=function(_0x493657){const _0x2796a9=_0x23b15a;this[_0x2796a9(0x541)]=this[_0x2796a9(0x541)]||[],this[_0x2796a9(0x541)][_0x2796a9(0x2b9)](_0x493657);},Scene_Map[_0x23b15a(0x8ea)]['\x72\x65\x6d\x6f\x76\x65\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72']=function(_0x5d38b6){const _0x177b2a=_0x23b15a;this[_0x177b2a(0x541)]=this[_0x177b2a(0x541)]||[],this[_0x177b2a(0x541)][_0x177b2a(0x921)](_0x5d38b6);};function Game_OnceParallelInterpreter(){const _0x4101e4=_0x23b15a;this[_0x4101e4(0x46d)](...arguments);}Game_OnceParallelInterpreter['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']=Object[_0x23b15a(0x198)](Game_Interpreter[_0x23b15a(0x8ea)]),Game_OnceParallelInterpreter[_0x23b15a(0x8ea)][_0x23b15a(0x319)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x23b15a(0x8ea)][_0x23b15a(0x526)]=function(_0xd9abe6){const _0x5d5a3b=_0x23b15a,_0x3a4458=$dataCommonEvents[_0xd9abe6];_0x3a4458?this[_0x5d5a3b(0x49a)](_0x3a4458['\x6c\x69\x73\x74'],0x0):this[_0x5d5a3b(0x68c)]();},Game_OnceParallelInterpreter[_0x23b15a(0x8ea)][_0x23b15a(0x747)]=function(_0x2cee01){this['\x5f\x65\x76\x65\x6e\x74\x49\x64']=_0x2cee01||0x0;},Game_OnceParallelInterpreter[_0x23b15a(0x8ea)][_0x23b15a(0x68c)]=function(){const _0x237baf=_0x23b15a;if(!SceneManager[_0x237baf(0x5bb)]())return;SceneManager['\x5f\x73\x63\x65\x6e\x65'][_0x237baf(0x41c)](this),Game_Interpreter['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x237baf(0x68c)][_0x237baf(0x744)](this);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x471)]=Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x5e2)],Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x5e2)]=function(){const _0x10fffd=_0x23b15a;let _0x10cdf7=0x0;return SceneManager['\x61\x72\x65\x42\x75\x74\x74\x6f\x6e\x73\x4f\x75\x74\x73\x69\x64\x65\x4d\x61\x69\x6e\x55\x49']()?_0x10cdf7=this[_0x10fffd(0x46a)]():_0x10cdf7=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x10fffd(0x471)]['\x63\x61\x6c\x6c'](this),_0x10cdf7;},Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x46a)]=function(){const _0xb3477b=_0x23b15a;return this[_0xb3477b(0x231)]()?this['\x6d\x61\x69\x6e\x41\x72\x65\x61\x42\x6f\x74\x74\x6f\x6d']():0x0;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x89b)]=Scene_MenuBase[_0x23b15a(0x8ea)]['\x6d\x61\x69\x6e\x41\x72\x65\x61\x54\x6f\x70'],Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x1a0)]=function(){const _0x35990b=_0x23b15a;return SceneManager[_0x35990b(0x5b4)]()?this[_0x35990b(0x700)]():VisuMZ[_0x35990b(0x7db)][_0x35990b(0x89b)]['\x63\x61\x6c\x6c'](this);},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x700)]=function(){const _0x26b669=_0x23b15a;return!this[_0x26b669(0x231)]()?this['\x68\x65\x6c\x70\x41\x72\x65\x61\x42\x6f\x74\x74\x6f\x6d']():this['\x69\x73\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x45\x6e\x61\x62\x6c\x65\x64']()&&this['\x67\x65\x74\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4c\x6f\x63\x61\x74\x69\x6f\x6e']()===_0x26b669(0x12c)?Window_ButtonAssist[_0x26b669(0x8ea)][_0x26b669(0x32b)]():0x0;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x669)]=Scene_MenuBase[_0x23b15a(0x8ea)]['\x6d\x61\x69\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74'],Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x3cd)]=function(){const _0x124ed6=_0x23b15a;let _0x1ab6cc=0x0;return SceneManager[_0x124ed6(0x5b4)]()?_0x1ab6cc=this['\x6d\x61\x69\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']():_0x1ab6cc=VisuMZ[_0x124ed6(0x7db)][_0x124ed6(0x669)][_0x124ed6(0x744)](this),this[_0x124ed6(0x189)]()&&this[_0x124ed6(0x6f1)]()!==_0x124ed6(0x3ed)&&(_0x1ab6cc-=Window_ButtonAssist[_0x124ed6(0x8ea)][_0x124ed6(0x32b)]()),_0x1ab6cc;},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x69d)]=function(){const _0x5e56e7=_0x23b15a;return Graphics[_0x5e56e7(0x7f6)]-this[_0x5e56e7(0x631)]();},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x695)]=Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x570)],Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x570)]=function(){const _0x558703=_0x23b15a,_0x5ca2c6=VisuMZ[_0x558703(0x7db)][_0x558703(0x742)][_0x558703(0x29e)][_0x558703(0x84f)]??0x8;this['\x5f\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x46\x69\x6c\x74\x65\x72']=new PIXI['\x66\x69\x6c\x74\x65\x72\x73']['\x42\x6c\x75\x72\x46\x69\x6c\x74\x65\x72'](_0x5ca2c6),this[_0x558703(0x21d)]=new Sprite(),this[_0x558703(0x21d)][_0x558703(0x347)]=SceneManager[_0x558703(0x5a8)](),this[_0x558703(0x21d)][_0x558703(0x863)]=[this[_0x558703(0x637)]],this[_0x558703(0x8c0)](this[_0x558703(0x21d)]),this[_0x558703(0x78d)](0xc0),this['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x4f\x70\x61\x63\x69\x74\x79'](this[_0x558703(0x1a7)]()),this[_0x558703(0x32f)]();},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x1a7)]=function(){const _0x5021b5=_0x23b15a,_0x4bfb39=String(this[_0x5021b5(0x319)]['\x6e\x61\x6d\x65']),_0x83af4d=this[_0x5021b5(0x550)](_0x4bfb39);return _0x83af4d?_0x83af4d[_0x5021b5(0x63b)]:0xc0;},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x32f)]=function(){const _0x2438f1=_0x23b15a,_0x3ac57f=String(this['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'][_0x2438f1(0x5f0)]),_0x46d266=this[_0x2438f1(0x550)](_0x3ac57f);_0x46d266&&(_0x46d266[_0x2438f1(0x4af)]!==''||_0x46d266[_0x2438f1(0x6c5)]!=='')&&(this['\x5f\x62\x61\x63\x6b\x53\x70\x72\x69\x74\x65\x31']=new Sprite(ImageManager['\x6c\x6f\x61\x64\x54\x69\x74\x6c\x65\x31'](_0x46d266[_0x2438f1(0x4af)])),this[_0x2438f1(0x2b5)]=new Sprite(ImageManager[_0x2438f1(0x58b)](_0x46d266[_0x2438f1(0x6c5)])),this['\x61\x64\x64\x43\x68\x69\x6c\x64'](this[_0x2438f1(0x707)]),this[_0x2438f1(0x8c0)](this[_0x2438f1(0x2b5)]),this[_0x2438f1(0x707)]['\x62\x69\x74\x6d\x61\x70'][_0x2438f1(0x4ea)](this['\x61\x64\x6a\x75\x73\x74\x53\x70\x72\x69\x74\x65'][_0x2438f1(0x647)](this,this['\x5f\x62\x61\x63\x6b\x53\x70\x72\x69\x74\x65\x31'])),this[_0x2438f1(0x2b5)][_0x2438f1(0x347)][_0x2438f1(0x4ea)](this[_0x2438f1(0x640)]['\x62\x69\x6e\x64'](this,this[_0x2438f1(0x2b5)])));},Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x550)]=function(_0x43327f){const _0x38ce22=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x38ce22(0x29e)][_0x43327f]||VisuMZ[_0x38ce22(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x38ce22(0x29e)][_0x38ce22(0x577)];},Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x61\x64\x6a\x75\x73\x74\x53\x70\x72\x69\x74\x65']=function(_0x2e4bb1){const _0x3acee1=_0x23b15a;this[_0x3acee1(0x6f4)](_0x2e4bb1),this[_0x3acee1(0x1b4)](_0x2e4bb1);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x2d3)]=Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x442)],Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x442)]=function(){const _0x1893f7=_0x23b15a;VisuMZ[_0x1893f7(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e'][_0x1893f7(0x744)](this),SceneManager[_0x1893f7(0x6e2)]()&&this[_0x1893f7(0x338)]();},Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6d\x6f\x76\x65\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']=function(){const _0x52de69=_0x23b15a;this[_0x52de69(0x182)]['\x78']=Graphics['\x62\x6f\x78\x57\x69\x64\x74\x68']+0x4;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x5dc)]=Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x4df)],Scene_MenuBase[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x50\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x73']=function(){const _0x6613c1=_0x23b15a;VisuMZ[_0x6613c1(0x7db)][_0x6613c1(0x5dc)][_0x6613c1(0x744)](this),SceneManager[_0x6613c1(0x6e2)]()&&this['\x6d\x6f\x76\x65\x50\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74']();},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x148)]=function(){const _0x1c5fc5=_0x23b15a;this[_0x1c5fc5(0x5d9)]['\x78']=-0x1*(this[_0x1c5fc5(0x5d9)][_0x1c5fc5(0x3e2)]+this[_0x1c5fc5(0x603)]['\x77\x69\x64\x74\x68']+0x8),this[_0x1c5fc5(0x603)]['\x78']=-0x1*(this[_0x1c5fc5(0x603)][_0x1c5fc5(0x3e2)]+0x4);},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x189)]=function(){const _0x3b344b=_0x23b15a;return VisuMZ[_0x3b344b(0x7db)][_0x3b344b(0x742)][_0x3b344b(0x35f)]['\x45\x6e\x61\x62\x6c\x65'];},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x6f1)]=function(){const _0x1d9fec=_0x23b15a;return SceneManager[_0x1d9fec(0x6e2)]()||SceneManager[_0x1d9fec(0x652)]()?VisuMZ[_0x1d9fec(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x1d9fec(0x35f)][_0x1d9fec(0x736)]:_0x1d9fec(0x3ed);},Scene_MenuBase[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77']=function(){const _0xc9f817=_0x23b15a;if(!this[_0xc9f817(0x189)]())return;const _0x5cb015=this['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']();this[_0xc9f817(0x3f8)]=new Window_ButtonAssist(_0x5cb015),this['\x61\x64\x64\x57\x69\x6e\x64\x6f\x77'](this['\x5f\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77']);},Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x286)]=function(){const _0x4a83e5=_0x23b15a;return this[_0x4a83e5(0x6f1)]()===_0x4a83e5(0x3ed)?this[_0x4a83e5(0x2ca)]():this[_0x4a83e5(0x917)]();},Scene_MenuBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2ca)]=function(){const _0x3c4355=_0x23b15a,_0x5a44dc=ConfigManager['\x74\x6f\x75\x63\x68\x55\x49']?(Sprite_Button['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x62\x6c\x6f\x63\x6b\x57\x69\x64\x74\x68']()+0x6)*0x2:0x0,_0x4e488a=this[_0x3c4355(0x2fd)](),_0x11016b=Graphics['\x62\x6f\x78\x57\x69\x64\x74\x68']-_0x5a44dc*0x2,_0x34f1ce=this['\x62\x75\x74\x74\x6f\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74']();return new Rectangle(_0x5a44dc,_0x4e488a,_0x11016b,_0x34f1ce);},Scene_MenuBase[_0x23b15a(0x8ea)][_0x23b15a(0x917)]=function(){const _0x301b53=_0x23b15a,_0x1fba74=Graphics[_0x301b53(0x725)],_0x8064f9=Window_ButtonAssist['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x301b53(0x32b)]();let _0x13ce9e=0x0;return this['\x67\x65\x74\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4c\x6f\x63\x61\x74\x69\x6f\x6e']()===_0x301b53(0x12c)?_0x13ce9e=0x0:_0x13ce9e=Graphics[_0x301b53(0x7f6)]-_0x8064f9,new Rectangle(0x0,_0x13ce9e,_0x1fba74,_0x8064f9);},Scene_Menu['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)]['\x4d\x65\x6e\x75\x4c\x61\x79\x6f\x75\x74']['\x4d\x61\x69\x6e\x4d\x65\x6e\x75'],VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x5f\x63\x72\x65\x61\x74\x65']=Scene_Menu[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Menu[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65']=function(){const _0x2151fb=_0x23b15a;VisuMZ[_0x2151fb(0x7db)][_0x2151fb(0x7c6)][_0x2151fb(0x744)](this),this[_0x2151fb(0x498)]();},Scene_Menu['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x498)]=function(){const _0x4639cb=_0x23b15a;this[_0x4639cb(0x153)]&&this[_0x4639cb(0x153)][_0x4639cb(0x3bb)](Scene_Menu[_0x4639cb(0x413)][_0x4639cb(0x236)]),this['\x5f\x67\x6f\x6c\x64\x57\x69\x6e\x64\x6f\x77']&&this[_0x4639cb(0x865)][_0x4639cb(0x3bb)](Scene_Menu[_0x4639cb(0x413)][_0x4639cb(0x77d)]),this[_0x4639cb(0x44e)]&&this['\x5f\x73\x74\x61\x74\x75\x73\x57\x69\x6e\x64\x6f\x77']['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Menu[_0x4639cb(0x413)][_0x4639cb(0x46b)]);},Scene_Menu[_0x23b15a(0x8ea)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x10f878=_0x23b15a;return Scene_Menu['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x10f878(0x879)][_0x10f878(0x744)](this);},Scene_Menu['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x67\x6f\x6c\x64\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x9aaad9=_0x23b15a;return Scene_Menu['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x9aaad9(0x86b)]['\x63\x61\x6c\x6c'](this);},Scene_Menu[_0x23b15a(0x8ea)][_0x23b15a(0x138)]=function(){const _0x7e069a=_0x23b15a;return Scene_Menu[_0x7e069a(0x413)][_0x7e069a(0x7e0)][_0x7e069a(0x744)](this);},Scene_Item[_0x23b15a(0x413)]=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x39d)][_0x23b15a(0x1c2)],VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x519)]=Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){const _0x2f0531=_0x23b15a;VisuMZ[_0x2f0531(0x7db)][_0x2f0531(0x519)]['\x63\x61\x6c\x6c'](this),this['\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x55\x70\x64\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x42\x67']();},Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x498)]=function(){const _0x175e03=_0x23b15a;this['\x5f\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77']&&this['\x5f\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77'][_0x175e03(0x3bb)](Scene_Item[_0x175e03(0x413)][_0x175e03(0x427)]),this[_0x175e03(0x145)]&&this[_0x175e03(0x145)][_0x175e03(0x3bb)](Scene_Item['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x175e03(0x3e5)]),this[_0x175e03(0x850)]&&this[_0x175e03(0x850)][_0x175e03(0x3bb)](Scene_Item['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x175e03(0x7fe)]),this[_0x175e03(0x54f)]&&this[_0x175e03(0x54f)][_0x175e03(0x3bb)](Scene_Item[_0x175e03(0x413)][_0x175e03(0x883)]);},Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x20a)]=function(){const _0x2a0209=_0x23b15a;return Scene_Item['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2a0209(0x469)][_0x2a0209(0x744)](this);},Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x35e)]=function(){const _0x18f938=_0x23b15a;return Scene_Item[_0x18f938(0x413)][_0x18f938(0x501)][_0x18f938(0x744)](this);},Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x83e)]=function(){const _0x29d5d2=_0x23b15a;return Scene_Item[_0x29d5d2(0x413)]['\x49\x74\x65\x6d\x52\x65\x63\x74'][_0x29d5d2(0x744)](this);},Scene_Item[_0x23b15a(0x8ea)][_0x23b15a(0x808)]=function(){const _0x524f7a=_0x23b15a;return Scene_Item[_0x524f7a(0x413)]['\x41\x63\x74\x6f\x72\x52\x65\x63\x74'][_0x524f7a(0x744)](this);},Scene_Skill['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x39d)]['\x53\x6b\x69\x6c\x6c\x4d\x65\x6e\x75'],VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x53\x6b\x69\x6c\x6c\x5f\x63\x72\x65\x61\x74\x65']=Scene_Skill[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Skill[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65']=function(){const _0x2126d3=_0x23b15a;VisuMZ[_0x2126d3(0x7db)][_0x2126d3(0x329)][_0x2126d3(0x744)](this),this[_0x2126d3(0x498)]();},Scene_Skill[_0x23b15a(0x8ea)][_0x23b15a(0x498)]=function(){const _0x56dd3c=_0x23b15a;this[_0x56dd3c(0x5e1)]&&this[_0x56dd3c(0x5e1)][_0x56dd3c(0x3bb)](Scene_Skill[_0x56dd3c(0x413)]['\x48\x65\x6c\x70\x42\x67\x54\x79\x70\x65']),this['\x5f\x73\x6b\x69\x6c\x6c\x54\x79\x70\x65\x57\x69\x6e\x64\x6f\x77']&&this[_0x56dd3c(0x320)]['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Skill[_0x56dd3c(0x413)][_0x56dd3c(0x207)]),this['\x5f\x73\x74\x61\x74\x75\x73\x57\x69\x6e\x64\x6f\x77']&&this[_0x56dd3c(0x44e)][_0x56dd3c(0x3bb)](Scene_Skill[_0x56dd3c(0x413)]['\x53\x74\x61\x74\x75\x73\x42\x67\x54\x79\x70\x65']),this[_0x56dd3c(0x850)]&&this[_0x56dd3c(0x850)][_0x56dd3c(0x3bb)](Scene_Skill[_0x56dd3c(0x413)][_0x56dd3c(0x7fe)]),this[_0x56dd3c(0x54f)]&&this[_0x56dd3c(0x54f)]['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Skill[_0x56dd3c(0x413)][_0x56dd3c(0x883)]);},Scene_Skill['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x4983b4=_0x23b15a;return Scene_Skill['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x4983b4(0x469)][_0x4983b4(0x744)](this);},Scene_Skill['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x1cd)]=function(){const _0x5082bf=_0x23b15a;return Scene_Skill[_0x5082bf(0x413)][_0x5082bf(0x62b)][_0x5082bf(0x744)](this);},Scene_Skill['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x73\x74\x61\x74\x75\x73\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x356bb7=_0x23b15a;return Scene_Skill[_0x356bb7(0x413)][_0x356bb7(0x7e0)][_0x356bb7(0x744)](this);},Scene_Skill[_0x23b15a(0x8ea)]['\x69\x74\x65\x6d\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x5acdff=_0x23b15a;return Scene_Skill['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']['\x49\x74\x65\x6d\x52\x65\x63\x74'][_0x5acdff(0x744)](this);},Scene_Skill['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x808)]=function(){const _0x286bf3=_0x23b15a;return Scene_Skill[_0x286bf3(0x413)][_0x286bf3(0x919)]['\x63\x61\x6c\x6c'](this);},Scene_Equip['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x210)],VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x4aa)]=Scene_Equip[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Equip['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x198)]=function(){const _0x506c48=_0x23b15a;VisuMZ[_0x506c48(0x7db)][_0x506c48(0x4aa)][_0x506c48(0x744)](this),this[_0x506c48(0x498)]();},Scene_Equip[_0x23b15a(0x8ea)][_0x23b15a(0x498)]=function(){const _0x44dff4=_0x23b15a;this[_0x44dff4(0x5e1)]&&this[_0x44dff4(0x5e1)]['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Equip[_0x44dff4(0x413)][_0x44dff4(0x427)]),this[_0x44dff4(0x44e)]&&this[_0x44dff4(0x44e)][_0x44dff4(0x3bb)](Scene_Equip[_0x44dff4(0x413)][_0x44dff4(0x46b)]),this[_0x44dff4(0x153)]&&this[_0x44dff4(0x153)][_0x44dff4(0x3bb)](Scene_Equip['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']['\x43\x6f\x6d\x6d\x61\x6e\x64\x42\x67\x54\x79\x70\x65']),this[_0x44dff4(0x363)]&&this[_0x44dff4(0x363)][_0x44dff4(0x3bb)](Scene_Equip[_0x44dff4(0x413)][_0x44dff4(0x892)]),this['\x5f\x69\x74\x65\x6d\x57\x69\x6e\x64\x6f\x77']&&this['\x5f\x69\x74\x65\x6d\x57\x69\x6e\x64\x6f\x77'][_0x44dff4(0x3bb)](Scene_Equip[_0x44dff4(0x413)][_0x44dff4(0x7fe)]);},Scene_Equip[_0x23b15a(0x8ea)]['\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x31d2a5=_0x23b15a;return Scene_Equip[_0x31d2a5(0x413)]['\x48\x65\x6c\x70\x52\x65\x63\x74']['\x63\x61\x6c\x6c'](this);},Scene_Equip[_0x23b15a(0x8ea)]['\x73\x74\x61\x74\x75\x73\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x567f17=_0x23b15a;return Scene_Equip['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x567f17(0x7e0)][_0x567f17(0x744)](this);},Scene_Equip[_0x23b15a(0x8ea)][_0x23b15a(0x926)]=function(){const _0x106238=_0x23b15a;return Scene_Equip[_0x106238(0x413)][_0x106238(0x879)][_0x106238(0x744)](this);},Scene_Equip[_0x23b15a(0x8ea)][_0x23b15a(0x2eb)]=function(){const _0x493589=_0x23b15a;return Scene_Equip['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x493589(0x8ae)]['\x63\x61\x6c\x6c'](this);},Scene_Equip[_0x23b15a(0x8ea)][_0x23b15a(0x83e)]=function(){const _0x5c85ea=_0x23b15a;return Scene_Equip[_0x5c85ea(0x413)][_0x5c85ea(0x751)][_0x5c85ea(0x744)](this);},Scene_Status[_0x23b15a(0x413)]=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x39d)][_0x23b15a(0x62e)],VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x75d)]=Scene_Status[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Status[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){const _0x4f0a34=_0x23b15a;VisuMZ[_0x4f0a34(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x53\x74\x61\x74\x75\x73\x5f\x63\x72\x65\x61\x74\x65'][_0x4f0a34(0x744)](this),this[_0x4f0a34(0x498)]();},Scene_Status[_0x23b15a(0x8ea)][_0x23b15a(0x498)]=function(){const _0x52705e=_0x23b15a;this['\x5f\x70\x72\x6f\x66\x69\x6c\x65\x57\x69\x6e\x64\x6f\x77']&&this[_0x52705e(0x3a6)][_0x52705e(0x3bb)](Scene_Status[_0x52705e(0x413)][_0x52705e(0x7ba)]),this[_0x52705e(0x44e)]&&this[_0x52705e(0x44e)][_0x52705e(0x3bb)](Scene_Status[_0x52705e(0x413)][_0x52705e(0x46b)]),this['\x5f\x73\x74\x61\x74\x75\x73\x50\x61\x72\x61\x6d\x73\x57\x69\x6e\x64\x6f\x77']&&this['\x5f\x73\x74\x61\x74\x75\x73\x50\x61\x72\x61\x6d\x73\x57\x69\x6e\x64\x6f\x77'][_0x52705e(0x3bb)](Scene_Status[_0x52705e(0x413)][_0x52705e(0x1b8)]),this['\x5f\x73\x74\x61\x74\x75\x73\x45\x71\x75\x69\x70\x57\x69\x6e\x64\x6f\x77']&&this[_0x52705e(0x3cb)][_0x52705e(0x3bb)](Scene_Status[_0x52705e(0x413)][_0x52705e(0x259)]);},Scene_Status['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x15a)]=function(){const _0x1c8276=_0x23b15a;return Scene_Status[_0x1c8276(0x413)][_0x1c8276(0x916)]['\x63\x61\x6c\x6c'](this);},Scene_Status[_0x23b15a(0x8ea)][_0x23b15a(0x138)]=function(){const _0x461902=_0x23b15a;return Scene_Status[_0x461902(0x413)][_0x461902(0x7e0)][_0x461902(0x744)](this);},Scene_Status[_0x23b15a(0x8ea)][_0x23b15a(0x61a)]=function(){const _0x3879a2=_0x23b15a;return Scene_Status[_0x3879a2(0x413)][_0x3879a2(0x447)]['\x63\x61\x6c\x6c'](this);},Scene_Status[_0x23b15a(0x8ea)][_0x23b15a(0x2d9)]=function(){const _0x2e23d9=_0x23b15a;return Scene_Status[_0x2e23d9(0x413)][_0x2e23d9(0x815)]['\x63\x61\x6c\x6c'](this);},Scene_Options[_0x23b15a(0x413)]=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x39d)][_0x23b15a(0x410)],VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4f\x70\x74\x69\x6f\x6e\x73\x5f\x63\x72\x65\x61\x74\x65']=Scene_Options[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Options[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){const _0xd1a31f=_0x23b15a;VisuMZ[_0xd1a31f(0x7db)][_0xd1a31f(0x16f)][_0xd1a31f(0x744)](this),this[_0xd1a31f(0x498)]();},Scene_Options[_0x23b15a(0x8ea)]['\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x55\x70\x64\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x42\x67']=function(){const _0x31307f=_0x23b15a;this[_0x31307f(0x880)]&&this[_0x31307f(0x880)][_0x31307f(0x3bb)](Scene_Options[_0x31307f(0x413)][_0x31307f(0x783)]);},Scene_Options[_0x23b15a(0x8ea)][_0x23b15a(0x459)]=function(){const _0x1ff4af=_0x23b15a;return Scene_Options[_0x1ff4af(0x413)][_0x1ff4af(0x19d)]['\x63\x61\x6c\x6c'](this);},Scene_Save[_0x23b15a(0x413)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x296)],Scene_Save[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){const _0x300de4=_0x23b15a;Scene_File[_0x300de4(0x8ea)][_0x300de4(0x198)][_0x300de4(0x744)](this),this[_0x300de4(0x498)]();},Scene_Save['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x498)]=function(){const _0xac0b36=_0x23b15a;this['\x5f\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77']&&this['\x5f\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77'][_0xac0b36(0x3bb)](Scene_Save['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0xac0b36(0x427)]),this[_0xac0b36(0x27f)]&&this[_0xac0b36(0x27f)][_0xac0b36(0x3bb)](Scene_Save[_0xac0b36(0x413)][_0xac0b36(0x405)]);},Scene_Save[_0x23b15a(0x8ea)]['\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x5e8ca0=_0x23b15a;return Scene_Save[_0x5e8ca0(0x413)][_0x5e8ca0(0x469)]['\x63\x61\x6c\x6c'](this);},Scene_Save[_0x23b15a(0x8ea)][_0x23b15a(0x26d)]=function(){const _0x5abb28=_0x23b15a;return Scene_Save[_0x5abb28(0x413)][_0x5abb28(0x79c)][_0x5abb28(0x744)](this);},Scene_Load['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x4a5)],Scene_Load[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){const _0x1449ff=_0x23b15a;Scene_File[_0x1449ff(0x8ea)]['\x63\x72\x65\x61\x74\x65']['\x63\x61\x6c\x6c'](this),this['\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x55\x70\x64\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x42\x67']();},Scene_Load[_0x23b15a(0x8ea)][_0x23b15a(0x498)]=function(){const _0x35d8ba=_0x23b15a;this['\x5f\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77']&&this[_0x35d8ba(0x5e1)][_0x35d8ba(0x3bb)](Scene_Load[_0x35d8ba(0x413)]['\x48\x65\x6c\x70\x42\x67\x54\x79\x70\x65']),this[_0x35d8ba(0x27f)]&&this[_0x35d8ba(0x27f)][_0x35d8ba(0x3bb)](Scene_Load[_0x35d8ba(0x413)]['\x4c\x69\x73\x74\x42\x67\x54\x79\x70\x65']);},Scene_Load[_0x23b15a(0x8ea)][_0x23b15a(0x20a)]=function(){const _0x201406=_0x23b15a;return Scene_Load[_0x201406(0x413)]['\x48\x65\x6c\x70\x52\x65\x63\x74'][_0x201406(0x744)](this);},Scene_Load[_0x23b15a(0x8ea)]['\x6c\x69\x73\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x11a391=_0x23b15a;return Scene_Load['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']['\x4c\x69\x73\x74\x52\x65\x63\x74'][_0x11a391(0x744)](this);};function Scene_QuickLoad(){const _0x4a8d44=_0x23b15a;this[_0x4a8d44(0x46d)](...arguments);}Scene_QuickLoad['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']=Object[_0x23b15a(0x198)](Scene_Load[_0x23b15a(0x8ea)]),Scene_QuickLoad[_0x23b15a(0x8ea)][_0x23b15a(0x319)]=Scene_QuickLoad,Scene_QuickLoad[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65']=function(){const _0x467019=_0x23b15a;Scene_Load[_0x467019(0x8ea)][_0x467019(0x46d)][_0x467019(0x744)](this);},Scene_QuickLoad[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){this['\x65\x78\x65\x63\x75\x74\x65\x4c\x6f\x61\x64'](this['\x5f\x73\x61\x76\x65\x46\x69\x6c\x65\x49\x44']);},Scene_QuickLoad[_0x23b15a(0x8ea)][_0x23b15a(0x474)]=function(_0x2fbed3){const _0x5a25e2=_0x23b15a;this[_0x5a25e2(0x8a1)]=_0x2fbed3;},Scene_QuickLoad['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x73\x74\x61\x72\x74']=function(){const _0x547fc7=_0x23b15a;Scene_MenuBase[_0x547fc7(0x8ea)][_0x547fc7(0x52b)][_0x547fc7(0x744)](this);},Scene_GameEnd[_0x23b15a(0x413)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x776)],VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x47\x61\x6d\x65\x45\x6e\x64\x5f\x63\x72\x65\x61\x74\x65\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64']=Scene_GameEnd['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x570)],Scene_GameEnd[_0x23b15a(0x8ea)][_0x23b15a(0x570)]=function(){const _0x51123d=_0x23b15a;Scene_MenuBase[_0x51123d(0x8ea)][_0x51123d(0x570)][_0x51123d(0x744)](this);},Scene_GameEnd[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77']=function(){const _0x4984b9=_0x23b15a,_0x2300dd=this[_0x4984b9(0x926)]();this[_0x4984b9(0x153)]=new Window_GameEnd(_0x2300dd),this[_0x4984b9(0x153)]['\x73\x65\x74\x48\x61\x6e\x64\x6c\x65\x72'](_0x4984b9(0x791),this[_0x4984b9(0x33e)][_0x4984b9(0x647)](this)),this[_0x4984b9(0x618)](this['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77']),this['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77'][_0x4984b9(0x3bb)](Scene_GameEnd[_0x4984b9(0x413)][_0x4984b9(0x236)]);},Scene_GameEnd['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x926)]=function(){const _0x331af7=_0x23b15a;return Scene_GameEnd[_0x331af7(0x413)][_0x331af7(0x879)][_0x331af7(0x744)](this);},Scene_Shop[_0x23b15a(0x413)]=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x68b)],VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2dd)]=Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Shop['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x198)]=function(){const _0x24e45f=_0x23b15a;VisuMZ[_0x24e45f(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x53\x68\x6f\x70\x5f\x63\x72\x65\x61\x74\x65'][_0x24e45f(0x744)](this),this[_0x24e45f(0x498)]();},Scene_Shop[_0x23b15a(0x8ea)]['\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x55\x70\x64\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x42\x67']=function(){const _0x2748dd=_0x23b15a;this[_0x2748dd(0x5e1)]&&this[_0x2748dd(0x5e1)]['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Shop['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2748dd(0x427)]),this[_0x2748dd(0x865)]&&this['\x5f\x67\x6f\x6c\x64\x57\x69\x6e\x64\x6f\x77']['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Shop[_0x2748dd(0x413)]['\x47\x6f\x6c\x64\x42\x67\x54\x79\x70\x65']),this[_0x2748dd(0x153)]&&this['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77'][_0x2748dd(0x3bb)](Scene_Shop[_0x2748dd(0x413)]['\x43\x6f\x6d\x6d\x61\x6e\x64\x42\x67\x54\x79\x70\x65']),this[_0x2748dd(0x232)]&&this[_0x2748dd(0x232)][_0x2748dd(0x3bb)](Scene_Shop[_0x2748dd(0x413)][_0x2748dd(0x321)]),this[_0x2748dd(0x42a)]&&this[_0x2748dd(0x42a)][_0x2748dd(0x3bb)](Scene_Shop[_0x2748dd(0x413)][_0x2748dd(0x91f)]),this[_0x2748dd(0x44e)]&&this[_0x2748dd(0x44e)][_0x2748dd(0x3bb)](Scene_Shop[_0x2748dd(0x413)][_0x2748dd(0x46b)]),this['\x5f\x62\x75\x79\x57\x69\x6e\x64\x6f\x77']&&this[_0x2748dd(0x8af)]['\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65'](Scene_Shop[_0x2748dd(0x413)][_0x2748dd(0x568)]),this['\x5f\x63\x61\x74\x65\x67\x6f\x72\x79\x57\x69\x6e\x64\x6f\x77']&&this['\x5f\x63\x61\x74\x65\x67\x6f\x72\x79\x57\x69\x6e\x64\x6f\x77'][_0x2748dd(0x3bb)](Scene_Shop[_0x2748dd(0x413)][_0x2748dd(0x3e5)]),this[_0x2748dd(0x798)]&&this['\x5f\x73\x65\x6c\x6c\x57\x69\x6e\x64\x6f\x77'][_0x2748dd(0x3bb)](Scene_Shop[_0x2748dd(0x413)][_0x2748dd(0x1f2)]);},Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x20a)]=function(){const _0x11ca02=_0x23b15a;return Scene_Shop[_0x11ca02(0x413)]['\x48\x65\x6c\x70\x52\x65\x63\x74'][_0x11ca02(0x744)](this);},Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x397)]=function(){const _0x2bf501=_0x23b15a;return Scene_Shop[_0x2bf501(0x413)][_0x2bf501(0x86b)]['\x63\x61\x6c\x6c'](this);},Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x926)]=function(){const _0xd77510=_0x23b15a;return Scene_Shop[_0xd77510(0x413)][_0xd77510(0x879)][_0xd77510(0x744)](this);},Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x754)]=function(){const _0x3ee979=_0x23b15a;return Scene_Shop[_0x3ee979(0x413)][_0x3ee979(0x933)][_0x3ee979(0x744)](this);},Scene_Shop['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6e\x75\x6d\x62\x65\x72\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x4b3baf=_0x23b15a;return Scene_Shop[_0x4b3baf(0x413)]['\x4e\x75\x6d\x62\x65\x72\x52\x65\x63\x74'][_0x4b3baf(0x744)](this);},Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x138)]=function(){const _0x47ab5d=_0x23b15a;return Scene_Shop[_0x47ab5d(0x413)]['\x53\x74\x61\x74\x75\x73\x52\x65\x63\x74'][_0x47ab5d(0x744)](this);},Scene_Shop[_0x23b15a(0x8ea)][_0x23b15a(0x54d)]=function(){const _0x13c43f=_0x23b15a;return Scene_Shop[_0x13c43f(0x413)][_0x13c43f(0x528)][_0x13c43f(0x744)](this);},Scene_Shop['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x35e)]=function(){const _0x19b4ed=_0x23b15a;return Scene_Shop[_0x19b4ed(0x413)]['\x43\x61\x74\x65\x67\x6f\x72\x79\x52\x65\x63\x74'][_0x19b4ed(0x744)](this);},Scene_Shop[_0x23b15a(0x8ea)]['\x73\x65\x6c\x6c\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x5ce2bb=_0x23b15a;return Scene_Shop[_0x5ce2bb(0x413)][_0x5ce2bb(0x686)][_0x5ce2bb(0x744)](this);},Scene_Name[_0x23b15a(0x413)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x39d)][_0x23b15a(0x2a1)],VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4e\x61\x6d\x65\x5f\x63\x72\x65\x61\x74\x65']=Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x198)],Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x198)]=function(){const _0x46b945=_0x23b15a;VisuMZ[_0x46b945(0x7db)][_0x46b945(0x6b8)][_0x46b945(0x744)](this),this['\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x55\x70\x64\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x42\x67']();},Scene_Name['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x498)]=function(){const _0x29c4ff=_0x23b15a;this[_0x29c4ff(0x2e9)]&&this[_0x29c4ff(0x2e9)][_0x29c4ff(0x3bb)](Scene_Name['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73']['\x45\x64\x69\x74\x42\x67\x54\x79\x70\x65']),this[_0x29c4ff(0x771)]&&this[_0x29c4ff(0x771)][_0x29c4ff(0x3bb)](Scene_Name[_0x29c4ff(0x413)][_0x29c4ff(0x837)]);},Scene_Name[_0x23b15a(0x8ea)]['\x68\x65\x6c\x70\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74']=function(){return 0x0;},Scene_Name['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x31b)]=function(){const _0x3d0be9=_0x23b15a;return Scene_Name['\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x3d0be9(0x739)]['\x63\x61\x6c\x6c'](this);},Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x81f)]=function(){const _0x346387=_0x23b15a;return Scene_Name[_0x346387(0x413)][_0x346387(0x83d)][_0x346387(0x744)](this);},Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x88e)]=function(){const _0x57d466=_0x23b15a;if(!this[_0x57d466(0x771)])return![];return VisuMZ[_0x57d466(0x7db)][_0x57d466(0x742)][_0x57d466(0x417)][_0x57d466(0x88e)];},Scene_Name['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x581)]=function(){const _0x1769c0=_0x23b15a;if(this[_0x1769c0(0x88e)]()&&this['\x5f\x69\x6e\x70\x75\x74\x57\x69\x6e\x64\x6f\x77'][_0x1769c0(0x5ae)]!==_0x1769c0(0x515))return TextManager[_0x1769c0(0x4e1)]('\x70\x61\x67\x65\x75\x70',_0x1769c0(0x1b5));return Scene_MenuBase[_0x1769c0(0x8ea)][_0x1769c0(0x581)][_0x1769c0(0x744)](this);},Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x71a)]=function(){const _0x311908=_0x23b15a;return this[_0x311908(0x88e)]()?TextManager[_0x311908(0x310)](_0x311908(0x755)):Scene_MenuBase[_0x311908(0x8ea)][_0x311908(0x71a)][_0x311908(0x744)](this);},Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x63d)]=function(){const _0x53dd75=_0x23b15a;if(this[_0x53dd75(0x88e)]()&&this[_0x53dd75(0x771)][_0x53dd75(0x5ae)]===_0x53dd75(0x515))return TextManager[_0x53dd75(0x2e0)](['\x45\x4e\x54\x45\x52']);return Scene_MenuBase[_0x53dd75(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x34'][_0x53dd75(0x744)](this);},Scene_Name[_0x23b15a(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x35']=function(){const _0x127376=_0x23b15a;if(this[_0x127376(0x88e)]()&&this[_0x127376(0x771)]['\x5f\x6d\x6f\x64\x65']===_0x127376(0x515))return TextManager[_0x127376(0x2e0)]([_0x127376(0x463)]);return Scene_MenuBase[_0x127376(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x35'][_0x127376(0x744)](this);},Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x7bd)]=function(){const _0x59be66=_0x23b15a;if(this[_0x59be66(0x88e)]()&&this[_0x59be66(0x771)][_0x59be66(0x5ae)]!==_0x59be66(0x515)){const _0x569624=VisuMZ[_0x59be66(0x7db)][_0x59be66(0x742)][_0x59be66(0x417)];return _0x569624[_0x59be66(0x3d4)]||'\x50\x61\x67\x65';}return Scene_MenuBase[_0x59be66(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x31'][_0x59be66(0x744)](this);},Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x169)]=function(){const _0x57e5c4=_0x23b15a;if(this[_0x57e5c4(0x88e)]()){const _0x1106b7=VisuMZ[_0x57e5c4(0x7db)][_0x57e5c4(0x742)][_0x57e5c4(0x417)];return this[_0x57e5c4(0x771)]['\x5f\x6d\x6f\x64\x65']===_0x57e5c4(0x515)?_0x1106b7[_0x57e5c4(0x4b4)]||'\x4b\x65\x79\x62\x6f\x61\x72\x64':_0x1106b7[_0x57e5c4(0x889)]||_0x57e5c4(0x889);}else return Scene_MenuBase[_0x57e5c4(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x33']['\x63\x61\x6c\x6c'](this);},Scene_Name[_0x23b15a(0x8ea)]['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x34']=function(){const _0x43928d=_0x23b15a;if(this[_0x43928d(0x88e)]()){const _0x257740=VisuMZ[_0x43928d(0x7db)][_0x43928d(0x742)][_0x43928d(0x417)];if(this[_0x43928d(0x771)]['\x5f\x6d\x6f\x64\x65']==='\x6b\x65\x79\x62\x6f\x61\x72\x64')return _0x257740[_0x43928d(0x19a)]||_0x43928d(0x19a);}return Scene_MenuBase[_0x43928d(0x8ea)][_0x43928d(0x230)][_0x43928d(0x744)](this);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x8b2)]=Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x2bc)],Scene_Name[_0x23b15a(0x8ea)][_0x23b15a(0x2bc)]=function(){const _0x3c92ec=_0x23b15a;this[_0x3c92ec(0x5ac)]()?this[_0x3c92ec(0x432)]():VisuMZ[_0x3c92ec(0x7db)][_0x3c92ec(0x8b2)][_0x3c92ec(0x744)](this);},Scene_Name['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x5ac)]=function(){const _0x400afb=_0x23b15a,_0xe603b8=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x400afb(0x742)][_0x400afb(0x417)];if(!_0xe603b8)return![];const _0x7f23ad=_0xe603b8[_0x400afb(0x6a7)];if(!_0x7f23ad)return![];const _0x4809ba=this[_0x400afb(0x2e9)][_0x400afb(0x5f0)]()['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']();for(const _0x4d83b0 of _0x7f23ad){if(_0x4809ba[_0x400afb(0x313)](_0x4d83b0[_0x400afb(0x597)]()))return!![];}return![];},Scene_Name['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x432)]=function(){const _0x407d39=_0x23b15a;SoundManager[_0x407d39(0x14a)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x293)]=Scene_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)],Scene_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x1e7b44=_0x23b15a;VisuMZ[_0x1e7b44(0x7db)][_0x1e7b44(0x293)][_0x1e7b44(0x744)](this),$gameTemp[_0x1e7b44(0x7f8)]&&this[_0x1e7b44(0x2f6)]();},Scene_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x2f6)]=function(){const _0x36ca7f=_0x23b15a;!BattleManager[_0x36ca7f(0x5ce)]()&&!this[_0x36ca7f(0x662)]&&!$gameMessage[_0x36ca7f(0x229)]()&&(this[_0x36ca7f(0x662)]=!![],this['\x75\x70\x64\x61\x74\x65'](),SceneManager[_0x36ca7f(0x636)](),this['\x5f\x70\x6c\x61\x79\x74\x65\x73\x74\x46\x37\x4c\x6f\x6f\x70\x69\x6e\x67']=![]);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x816)]=Scene_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x442)],Scene_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x442)]=function(){const _0x2a33e6=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x2a33e6(0x816)][_0x2a33e6(0x744)](this),SceneManager[_0x2a33e6(0x6e2)]()&&this[_0x2a33e6(0x303)]();},Scene_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x303)]=function(){const _0x3cdea9=_0x23b15a;this[_0x3cdea9(0x182)]['\x78']=Graphics[_0x3cdea9(0x725)]+0x4,this[_0x3cdea9(0x7ae)]()?this[_0x3cdea9(0x182)]['\x79']=Graphics[_0x3cdea9(0x7f6)]-this['\x62\x75\x74\x74\x6f\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74']():this[_0x3cdea9(0x182)]['\x79']=0x0;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x1cb)]=Sprite_Button['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x46d)],Sprite_Button[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(_0x1b2b22){const _0x1482cf=_0x23b15a;VisuMZ[_0x1482cf(0x7db)][_0x1482cf(0x1cb)][_0x1482cf(0x744)](this,_0x1b2b22),this[_0x1482cf(0x2f8)]();},Sprite_Button[_0x23b15a(0x8ea)][_0x23b15a(0x2f8)]=function(){const _0x4ef49b=_0x23b15a,_0x3e6a39=VisuMZ[_0x4ef49b(0x7db)][_0x4ef49b(0x742)]['\x55\x49'];this[_0x4ef49b(0x149)]=![];switch(this[_0x4ef49b(0x3c9)]){case _0x4ef49b(0x791):this[_0x4ef49b(0x149)]=!_0x3e6a39[_0x4ef49b(0x544)];break;case _0x4ef49b(0x25b):case _0x4ef49b(0x1b5):this['\x5f\x69\x73\x42\x75\x74\x74\x6f\x6e\x48\x69\x64\x64\x65\x6e']=!_0x3e6a39[_0x4ef49b(0x261)];break;case'\x64\x6f\x77\x6e':case'\x75\x70':case'\x64\x6f\x77\x6e\x32':case _0x4ef49b(0x3d2):case'\x6f\x6b':this[_0x4ef49b(0x149)]=!_0x3e6a39[_0x4ef49b(0x8b9)];break;case _0x4ef49b(0x589):this[_0x4ef49b(0x149)]=!_0x3e6a39[_0x4ef49b(0x448)];break;}},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x5f\x42\x75\x74\x74\x6f\x6e\x5f\x75\x70\x64\x61\x74\x65\x4f\x70\x61\x63\x69\x74\x79']=Sprite_Button[_0x23b15a(0x8ea)][_0x23b15a(0x17f)],Sprite_Button[_0x23b15a(0x8ea)][_0x23b15a(0x17f)]=function(){const _0x500dc1=_0x23b15a;SceneManager[_0x500dc1(0x652)]()||this[_0x500dc1(0x149)]?this[_0x500dc1(0x847)]():VisuMZ[_0x500dc1(0x7db)]['\x53\x70\x72\x69\x74\x65\x5f\x42\x75\x74\x74\x6f\x6e\x5f\x75\x70\x64\x61\x74\x65\x4f\x70\x61\x63\x69\x74\x79'][_0x500dc1(0x744)](this);},Sprite_Button[_0x23b15a(0x8ea)][_0x23b15a(0x847)]=function(){const _0x3734f4=_0x23b15a;this['\x76\x69\x73\x69\x62\x6c\x65']=![],this[_0x3734f4(0x3cc)]=0x0,this['\x78']=Graphics[_0x3734f4(0x3e2)]*0xa,this['\x79']=Graphics[_0x3734f4(0x92d)]*0xa;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x394)]=Sprite_Battler[_0x23b15a(0x8ea)]['\x73\x74\x61\x72\x74\x4d\x6f\x76\x65'],Sprite_Battler[_0x23b15a(0x8ea)]['\x73\x74\x61\x72\x74\x4d\x6f\x76\x65']=function(_0x329b81,_0x31bcbd,_0x39ae76){const _0x9ea47f=_0x23b15a;(this['\x5f\x74\x61\x72\x67\x65\x74\x4f\x66\x66\x73\x65\x74\x58']!==_0x329b81||this[_0x9ea47f(0x4eb)]!==_0x31bcbd)&&(this[_0x9ea47f(0x91a)](_0x9ea47f(0x19f)),this[_0x9ea47f(0x920)]=_0x39ae76),VisuMZ[_0x9ea47f(0x7db)][_0x9ea47f(0x394)][_0x9ea47f(0x744)](this,_0x329b81,_0x31bcbd,_0x39ae76);},Sprite_Battler[_0x23b15a(0x8ea)][_0x23b15a(0x91a)]=function(_0xec0a57){const _0x58c827=_0x23b15a;this[_0x58c827(0x849)]=_0xec0a57;},Sprite_Battler[_0x23b15a(0x8ea)][_0x23b15a(0x32d)]=function(){const _0x2b32ac=_0x23b15a;if(this[_0x2b32ac(0x540)]<=0x0)return;const _0x15e319=this[_0x2b32ac(0x540)],_0x421b66=this[_0x2b32ac(0x920)],_0x341ca6=this[_0x2b32ac(0x849)];this['\x5f\x6f\x66\x66\x73\x65\x74\x58']=this[_0x2b32ac(0x123)](this['\x5f\x6f\x66\x66\x73\x65\x74\x58'],this[_0x2b32ac(0x3c8)],_0x15e319,_0x421b66,_0x341ca6),this[_0x2b32ac(0x270)]=this[_0x2b32ac(0x123)](this[_0x2b32ac(0x270)],this[_0x2b32ac(0x4eb)],_0x15e319,_0x421b66,_0x341ca6),this[_0x2b32ac(0x540)]--,this[_0x2b32ac(0x540)]<=0x0&&this['\x6f\x6e\x4d\x6f\x76\x65\x45\x6e\x64']();},Sprite_Battler[_0x23b15a(0x8ea)]['\x61\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67']=function(_0x29416a,_0x299ca4,_0x22278c,_0x21fd91,_0x2306d6){const _0x5f3af2=_0x23b15a,_0x490c53=VisuMZ[_0x5f3af2(0x5c0)]((_0x21fd91-_0x22278c)/_0x21fd91,_0x2306d6||_0x5f3af2(0x19f)),_0x3f5cbb=VisuMZ['\x41\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67']((_0x21fd91-_0x22278c+0x1)/_0x21fd91,_0x2306d6||_0x5f3af2(0x19f)),_0x29db68=(_0x29416a-_0x299ca4*_0x490c53)/(0x1-_0x490c53);return _0x29db68+(_0x299ca4-_0x29db68)*_0x3f5cbb;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2bd)]=Sprite_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x33a)],Sprite_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x33a)]=function(_0x575026){const _0x5ca3c4=_0x23b15a;VisuMZ[_0x5ca3c4(0x7db)][_0x5ca3c4(0x742)]['\x55\x49'][_0x5ca3c4(0x6af)]?this[_0x5ca3c4(0x15b)](_0x575026):VisuMZ[_0x5ca3c4(0x7db)][_0x5ca3c4(0x2bd)][_0x5ca3c4(0x744)](this,_0x575026);},Sprite_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x15b)]=function(_0x2019fc){const _0x5e2df3=_0x23b15a;let _0x1297ac=Math[_0x5e2df3(0x38b)](Graphics['\x77\x69\x64\x74\x68']/0x2+0xc0);_0x1297ac-=Math[_0x5e2df3(0x8ff)]((Graphics[_0x5e2df3(0x3e2)]-Graphics['\x62\x6f\x78\x57\x69\x64\x74\x68'])/0x2),_0x1297ac+=_0x2019fc*0x20;let _0x53aac5=Graphics['\x68\x65\x69\x67\x68\x74']-0xc8-$gameParty[_0x5e2df3(0x1e2)]()*0x30;_0x53aac5-=Math[_0x5e2df3(0x8ff)]((Graphics[_0x5e2df3(0x92d)]-Graphics[_0x5e2df3(0x7f6)])/0x2),_0x53aac5+=_0x2019fc*0x30,this[_0x5e2df3(0x28f)](_0x1297ac,_0x53aac5);},Sprite_Actor['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x613)]=function(){const _0x2b0e21=_0x23b15a;this[_0x2b0e21(0x7b5)](0x4b0,0x0,0x78);},Sprite_Animation[_0x23b15a(0x8ea)]['\x73\x65\x74\x4d\x75\x74\x65']=function(_0x399ca5){this['\x5f\x6d\x75\x74\x65\x53\x6f\x75\x6e\x64']=_0x399ca5;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x51d)]=Sprite_Animation[_0x23b15a(0x8ea)][_0x23b15a(0x83b)],Sprite_Animation[_0x23b15a(0x8ea)][_0x23b15a(0x83b)]=function(){const _0x53d208=_0x23b15a;if(this[_0x53d208(0x1c3)])return;VisuMZ[_0x53d208(0x7db)][_0x53d208(0x51d)][_0x53d208(0x744)](this);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x6d9)]=Sprite_Animation[_0x23b15a(0x8ea)][_0x23b15a(0x7d2)],Sprite_Animation[_0x23b15a(0x8ea)]['\x73\x65\x74\x56\x69\x65\x77\x70\x6f\x72\x74']=function(_0x1d3fb3){const _0x318089=_0x23b15a;this[_0x318089(0x191)]()?this[_0x318089(0x368)](_0x1d3fb3):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x318089(0x6d9)][_0x318089(0x744)](this,_0x1d3fb3);},Sprite_Animation[_0x23b15a(0x8ea)]['\x69\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4f\x66\x66\x73\x65\x74\x58\x4d\x69\x72\x72\x6f\x72\x65\x64']=function(){const _0x116d5e=_0x23b15a;if(!this[_0x116d5e(0x518)])return![];const _0x1dc961=this[_0x116d5e(0x518)][_0x116d5e(0x5f0)]||'';if(_0x1dc961[_0x116d5e(0x70d)](/<MIRROR OFFSET X>/i))return!![];if(_0x1dc961[_0x116d5e(0x70d)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x116d5e(0x742)][_0x116d5e(0x875)]['\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4d\x69\x72\x72\x6f\x72\x4f\x66\x66\x73\x65\x74'];},Sprite_Animation[_0x23b15a(0x8ea)][_0x23b15a(0x368)]=function(_0x536cf2){const _0x4d65f2=_0x23b15a,_0xe43cd6=this[_0x4d65f2(0x3e4)],_0x440bc7=this[_0x4d65f2(0x3e4)],_0x5d69f3=this[_0x4d65f2(0x518)][_0x4d65f2(0x630)]*(this[_0x4d65f2(0x57e)]?-0x1:0x1)-_0xe43cd6/0x2,_0x8cb4d0=this[_0x4d65f2(0x518)][_0x4d65f2(0x901)]-_0x440bc7/0x2,_0x1d6a1c=this[_0x4d65f2(0x5ab)](_0x536cf2);_0x536cf2['\x67\x6c'][_0x4d65f2(0x86f)](_0x5d69f3+_0x1d6a1c['\x78'],_0x8cb4d0+_0x1d6a1c['\x79'],_0xe43cd6,_0x440bc7);},Sprite_Animation['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3d5)]=function(_0x17480e){const _0x211752=_0x23b15a;if(_0x17480e[_0x211752(0x6c7)]){}const _0x1568ef=this['\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e']['\x6e\x61\x6d\x65'];let _0x52f94c=_0x17480e[_0x211752(0x92d)]*_0x17480e[_0x211752(0x680)]['\x79'],_0x3b0bcd=0x0,_0x3fb2db=-_0x52f94c/0x2;_0x1568ef['\x6d\x61\x74\x63\x68'](/<(?:HEAD|HEADER|TOP)>/i)&&(_0x3fb2db=-_0x52f94c);_0x1568ef[_0x211752(0x70d)](/<(?:FOOT|FOOTER|BOTTOM)>/i)&&(_0x3fb2db=0x0);this[_0x211752(0x518)][_0x211752(0x782)]&&(_0x3fb2db=0x0);_0x1568ef[_0x211752(0x70d)](/<(?:LEFT)>/i)&&(_0x3b0bcd=-_0x17480e[_0x211752(0x3e2)]/0x2);_0x1568ef[_0x211752(0x70d)](/<(?:RIGHT)>/i)&&(_0x3b0bcd=_0x17480e['\x77\x69\x64\x74\x68']/0x2);_0x1568ef[_0x211752(0x70d)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x3b0bcd=Number(RegExp['\x24\x31'])*_0x17480e[_0x211752(0x3e2)]);_0x1568ef[_0x211752(0x70d)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x3fb2db=(0x1-Number(RegExp['\x24\x31']))*-_0x52f94c);_0x1568ef[_0x211752(0x70d)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x3b0bcd=Number(RegExp['\x24\x31'])*_0x17480e['\x77\x69\x64\x74\x68'],_0x3fb2db=(0x1-Number(RegExp['\x24\x32']))*-_0x52f94c);_0x1568ef[_0x211752(0x70d)](/<OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x3b0bcd+=Number(RegExp['\x24\x31']));_0x1568ef[_0x211752(0x70d)](/<OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x3fb2db+=Number(RegExp['\x24\x31']));_0x1568ef[_0x211752(0x70d)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x3b0bcd+=Number(RegExp['\x24\x31']),_0x3fb2db+=Number(RegExp['\x24\x32']));const _0x213ca0=new Point(_0x3b0bcd,_0x3fb2db);return _0x17480e[_0x211752(0x67d)](),_0x17480e[_0x211752(0x186)][_0x211752(0x1c4)](_0x213ca0);},Sprite_AnimationMV[_0x23b15a(0x8ea)][_0x23b15a(0x3dd)]=function(){const _0x277f04=_0x23b15a;this[_0x277f04(0x204)]=VisuMZ[_0x277f04(0x7db)][_0x277f04(0x742)]['\x51\x6f\x4c']['\x4d\x76\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x52\x61\x74\x65']??0x4,this[_0x277f04(0x5d0)](),this[_0x277f04(0x204)]=this[_0x277f04(0x204)]['\x63\x6c\x61\x6d\x70'](0x1,0xa);},Sprite_AnimationMV[_0x23b15a(0x8ea)][_0x23b15a(0x5d0)]=function(){const _0x5c60d4=_0x23b15a;if(!this['\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e']);const _0xf24e3d=this[_0x5c60d4(0x518)]['\x6e\x61\x6d\x65']||'';_0xf24e3d[_0x5c60d4(0x70d)](/<RATE:[ ](\d+)>/i)&&(this[_0x5c60d4(0x204)]=(Number(RegExp['\x24\x31'])||0x1)[_0x5c60d4(0x1d1)](0x1,0xa));},Sprite_AnimationMV[_0x23b15a(0x8ea)]['\x73\x65\x74\x4d\x75\x74\x65']=function(_0x11a616){const _0x285bbc=_0x23b15a;this[_0x285bbc(0x1c3)]=_0x11a616;},VisuMZ[_0x23b15a(0x7db)]['\x53\x70\x72\x69\x74\x65\x5f\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4d\x56\x5f\x70\x72\x6f\x63\x65\x73\x73\x54\x69\x6d\x69\x6e\x67\x44\x61\x74\x61']=Sprite_AnimationMV[_0x23b15a(0x8ea)][_0x23b15a(0x45f)],Sprite_AnimationMV[_0x23b15a(0x8ea)][_0x23b15a(0x45f)]=function(_0x3edca7){const _0x9c2c0c=_0x23b15a;this['\x5f\x6d\x75\x74\x65\x53\x6f\x75\x6e\x64']&&(_0x3edca7=JsonEx[_0x9c2c0c(0x7ed)](_0x3edca7),_0x3edca7['\x73\x65']&&(_0x3edca7['\x73\x65'][_0x9c2c0c(0x6a1)]=0x0)),VisuMZ[_0x9c2c0c(0x7db)][_0x9c2c0c(0x8d3)]['\x63\x61\x6c\x6c'](this,_0x3edca7);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x5f\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4d\x56\x5f\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e']=Sprite_AnimationMV[_0x23b15a(0x8ea)][_0x23b15a(0x7b1)],Sprite_AnimationMV[_0x23b15a(0x8ea)][_0x23b15a(0x7b1)]=function(){const _0x1e999a=_0x23b15a;VisuMZ[_0x1e999a(0x7db)][_0x1e999a(0x6b5)][_0x1e999a(0x744)](this),this[_0x1e999a(0x518)][_0x1e999a(0x32a)]===0x3&&(this['\x78']===0x0&&(this['\x78']=Math['\x72\x6f\x75\x6e\x64'](Graphics[_0x1e999a(0x3e2)]/0x2)),this['\x79']===0x0&&(this['\x79']=Math[_0x1e999a(0x38b)](Graphics[_0x1e999a(0x92d)]/0x2)));},Sprite_Damage[_0x23b15a(0x8ea)][_0x23b15a(0x255)]=function(_0x1b0844){const _0x21263f=_0x23b15a;let _0x5d54b5=Math[_0x21263f(0x1bb)](_0x1b0844)[_0x21263f(0x5eb)]();this[_0x21263f(0x27d)]()&&(_0x5d54b5=VisuMZ[_0x21263f(0x823)](_0x5d54b5));const _0xfe989=this[_0x21263f(0x71b)](),_0x62e1b6=Math[_0x21263f(0x8ff)](_0xfe989*0.75);for(let _0x17ee59=0x0;_0x17ee59<_0x5d54b5[_0x21263f(0x699)];_0x17ee59++){const _0x11fcd6=this[_0x21263f(0x727)](_0x62e1b6,_0xfe989);_0x11fcd6[_0x21263f(0x347)][_0x21263f(0x6a3)](_0x5d54b5[_0x17ee59],0x0,0x0,_0x62e1b6,_0xfe989,_0x21263f(0x387)),_0x11fcd6['\x78']=(_0x17ee59-(_0x5d54b5[_0x21263f(0x699)]-0x1)/0x2)*_0x62e1b6,_0x11fcd6['\x64\x79']=-_0x17ee59;}},Sprite_Damage['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x73\x65\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67']=function(){const _0x1d67ff=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1d67ff(0x742)]['\x51\x6f\x4c']['\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x44\x61\x6d\x61\x67\x65\x53\x70\x72\x69\x74\x65\x73'];},Sprite_Damage[_0x23b15a(0x8ea)][_0x23b15a(0x28c)]=function(){const _0x472fcc=_0x23b15a;return ColorManager[_0x472fcc(0x475)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x47b)]=Sprite_Gauge['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x27c)],Sprite_Gauge[_0x23b15a(0x8ea)][_0x23b15a(0x27c)]=function(){const _0x35408a=_0x23b15a;return VisuMZ[_0x35408a(0x7db)][_0x35408a(0x47b)][_0x35408a(0x744)](this)[_0x35408a(0x1d1)](0x0,0x1);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x682)]=Sprite_Gauge[_0x23b15a(0x8ea)][_0x23b15a(0x431)],Sprite_Gauge['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x431)]=function(){const _0x58b5d5=_0x23b15a;let _0x56b290=VisuMZ[_0x58b5d5(0x7db)][_0x58b5d5(0x682)][_0x58b5d5(0x744)](this);return _0x56b290;},Sprite_Gauge[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x56\x61\x6c\x75\x65']=function(){const _0x98a3fa=_0x23b15a;let _0x1131e6=this[_0x98a3fa(0x431)]();this[_0x98a3fa(0x27d)]()&&(_0x1131e6=VisuMZ['\x47\x72\x6f\x75\x70\x44\x69\x67\x69\x74\x73'](_0x1131e6));const _0xfd5b9d=this['\x62\x69\x74\x6d\x61\x70\x57\x69\x64\x74\x68']()-0x1,_0x589d72=this[_0x98a3fa(0x4c3)]?this[_0x98a3fa(0x4c3)]():this['\x62\x69\x74\x6d\x61\x70\x48\x65\x69\x67\x68\x74']();this[_0x98a3fa(0x212)](),this[_0x98a3fa(0x347)]['\x64\x72\x61\x77\x54\x65\x78\x74'](_0x1131e6,0x0,0x0,_0xfd5b9d,_0x589d72,'\x72\x69\x67\x68\x74');},Sprite_Gauge['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x80c)]=function(){return 0x3;},Sprite_Gauge[_0x23b15a(0x8ea)][_0x23b15a(0x27d)]=function(){const _0x23e430=_0x23b15a;return VisuMZ[_0x23e430(0x7db)][_0x23e430(0x742)][_0x23e430(0x875)][_0x23e430(0x195)];},Sprite_Gauge[_0x23b15a(0x8ea)][_0x23b15a(0x28c)]=function(){const _0x1a72f0=_0x23b15a;return ColorManager[_0x1a72f0(0x509)]();},Sprite_StateIcon[_0x23b15a(0x764)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)]['\x55\x49'][_0x23b15a(0x372)]??!![],VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x5f\x53\x74\x61\x74\x65\x49\x63\x6f\x6e\x5f\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70']=Sprite_StateIcon[_0x23b15a(0x8ea)][_0x23b15a(0x131)],Sprite_StateIcon['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70']=function(){const _0x446b98=_0x23b15a;Sprite_StateIcon[_0x446b98(0x764)]?this['\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']():VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x5f\x53\x74\x61\x74\x65\x49\x63\x6f\x6e\x5f\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70']['\x63\x61\x6c\x6c'](this);},Sprite_StateIcon[_0x23b15a(0x8ea)][_0x23b15a(0x92f)]=function(){const _0x3afa11=_0x23b15a;this[_0x3afa11(0x347)]=new Bitmap(ImageManager[_0x3afa11(0x15f)],ImageManager[_0x3afa11(0x698)]),this['\x5f\x73\x72\x63\x42\x69\x74\x6d\x61\x70']=ImageManager[_0x3afa11(0x82d)](_0x3afa11(0x21b));},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x433)]=Sprite_StateIcon['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2c6)],Sprite_StateIcon['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2c6)]=function(){const _0x33d4f4=_0x23b15a;Sprite_StateIcon[_0x33d4f4(0x764)]?this[_0x33d4f4(0x4f0)]():VisuMZ[_0x33d4f4(0x7db)][_0x33d4f4(0x433)][_0x33d4f4(0x744)](this);},Sprite_StateIcon[_0x23b15a(0x8ea)][_0x23b15a(0x4f0)]=function(){const _0x49a68c=_0x23b15a;if(this['\x5f\x6c\x61\x73\x74\x49\x63\x6f\x6e\x49\x6e\x64\x65\x78']===this['\x5f\x69\x63\x6f\x6e\x49\x6e\x64\x65\x78'])return;this[_0x49a68c(0x7ce)]=this[_0x49a68c(0x605)];const _0x405b0d=ImageManager[_0x49a68c(0x15f)],_0x2c9698=ImageManager[_0x49a68c(0x698)],_0x10ffac=this[_0x49a68c(0x605)]%0x10*_0x405b0d,_0x36d735=Math[_0x49a68c(0x8ff)](this[_0x49a68c(0x605)]/0x10)*_0x2c9698,_0x5039fd=this[_0x49a68c(0x730)],_0x237927=this[_0x49a68c(0x347)];_0x237927[_0x49a68c(0x8cf)](),_0x237927['\x62\x6c\x74'](_0x5039fd,_0x10ffac,_0x36d735,_0x405b0d,_0x2c9698,0x0,0x0,_0x237927[_0x49a68c(0x3e2)],_0x237927[_0x49a68c(0x92d)]);},VisuMZ[_0x23b15a(0x7db)]['\x53\x70\x72\x69\x74\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70']=Sprite_Picture[_0x23b15a(0x8ea)]['\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70'],Sprite_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70']=function(){const _0x38dd91=_0x23b15a;this[_0x38dd91(0x277)]&&this['\x5f\x70\x69\x63\x74\x75\x72\x65\x4e\x61\x6d\x65'][_0x38dd91(0x70d)](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this['\x6c\x6f\x61\x64\x49\x63\x6f\x6e\x42\x69\x74\x6d\x61\x70'](Number(RegExp['\x24\x31'])):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70'][_0x38dd91(0x744)](this);},Sprite_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x4ac)]=function(_0x284628){const _0x20cda7=_0x23b15a,_0x5a87f0=ImageManager['\x69\x63\x6f\x6e\x57\x69\x64\x74\x68'],_0x5afee8=ImageManager[_0x20cda7(0x698)],_0x9c9e4b=this[_0x20cda7(0x277)][_0x20cda7(0x70d)](/SMOOTH/i);this[_0x20cda7(0x347)]=new Bitmap(_0x5a87f0,_0x5afee8);const _0x1930cb=ImageManager[_0x20cda7(0x82d)]('\x49\x63\x6f\x6e\x53\x65\x74'),_0x3d47ea=_0x284628%0x10*_0x5a87f0,_0x554ca7=Math[_0x20cda7(0x8ff)](_0x284628/0x10)*_0x5afee8;this[_0x20cda7(0x347)][_0x20cda7(0x559)]=_0x9c9e4b,this['\x62\x69\x74\x6d\x61\x70']['\x62\x6c\x74'](_0x1930cb,_0x3d47ea,_0x554ca7,_0x5a87f0,_0x5afee8,0x0,0x0,_0x5a87f0,_0x5afee8);};function Sprite_TitlePictureButton(){const _0x35d99f=_0x23b15a;this[_0x35d99f(0x46d)](...arguments);}Sprite_TitlePictureButton[_0x23b15a(0x8ea)]=Object[_0x23b15a(0x198)](Sprite_Clickable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']),Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x319)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(_0x33045){const _0x633436=_0x23b15a;Sprite_Clickable[_0x633436(0x8ea)][_0x633436(0x46d)]['\x63\x61\x6c\x6c'](this),this['\x5f\x64\x61\x74\x61']=_0x33045,this[_0x633436(0x59d)]=null,this[_0x633436(0x49a)]();},Sprite_TitlePictureButton[_0x23b15a(0x8ea)]['\x73\x65\x74\x75\x70']=function(){const _0x7fa513=_0x23b15a;this['\x78']=Graphics[_0x7fa513(0x3e2)],this['\x79']=Graphics[_0x7fa513(0x92d)],this[_0x7fa513(0x44b)]=![],this[_0x7fa513(0x473)]();},Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x473)]=function(){const _0x574265=_0x23b15a;this['\x62\x69\x74\x6d\x61\x70']=ImageManager['\x6c\x6f\x61\x64\x50\x69\x63\x74\x75\x72\x65'](this[_0x574265(0x326)][_0x574265(0x6d1)]),this[_0x574265(0x347)]['\x61\x64\x64\x4c\x6f\x61\x64\x4c\x69\x73\x74\x65\x6e\x65\x72'](this[_0x574265(0x615)][_0x574265(0x647)](this));},Sprite_TitlePictureButton['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x615)]=function(){const _0x16aa6e=_0x23b15a;this[_0x16aa6e(0x326)][_0x16aa6e(0x539)][_0x16aa6e(0x744)](this),this[_0x16aa6e(0x326)][_0x16aa6e(0x4e9)][_0x16aa6e(0x744)](this),this[_0x16aa6e(0x197)](this[_0x16aa6e(0x326)][_0x16aa6e(0x75b)][_0x16aa6e(0x647)](this));},Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0xe04b85=_0x23b15a;Sprite_Clickable[_0xe04b85(0x8ea)]['\x75\x70\x64\x61\x74\x65'][_0xe04b85(0x744)](this),this['\x75\x70\x64\x61\x74\x65\x4f\x70\x61\x63\x69\x74\x79'](),this[_0xe04b85(0x213)]();},Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x38e)]=function(){const _0x11b9a4=_0x23b15a;return VisuMZ[_0x11b9a4(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x11b9a4(0x39d)]['\x54\x69\x74\x6c\x65']['\x42\x75\x74\x74\x6f\x6e\x46\x61\x64\x65\x53\x70\x65\x65\x64'];},Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x17f)]=function(){const _0x3d45eb=_0x23b15a;this[_0x3d45eb(0x882)]||this[_0x3d45eb(0x6c0)]?this[_0x3d45eb(0x3cc)]=0xff:(this['\x6f\x70\x61\x63\x69\x74\x79']+=this['\x76\x69\x73\x69\x62\x6c\x65']?this['\x66\x61\x64\x65\x53\x70\x65\x65\x64']():-0x1*this[_0x3d45eb(0x38e)](),this[_0x3d45eb(0x3cc)]=Math[_0x3d45eb(0x70e)](0xc0,this[_0x3d45eb(0x3cc)]));},Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x197)]=function(_0x597b3a){const _0xf9403e=_0x23b15a;this[_0xf9403e(0x59d)]=_0x597b3a;},Sprite_TitlePictureButton[_0x23b15a(0x8ea)][_0x23b15a(0x324)]=function(){const _0x3c686a=_0x23b15a;this[_0x3c686a(0x59d)]&&this[_0x3c686a(0x59d)]();};function Sprite_ExtendedTile(){this['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'](...arguments);}function _0x348b(_0x5a0455,_0x38046d){const _0x3a5c0f=_0x3a5c();return _0x348b=function(_0x348bc3,_0x6cc807){_0x348bc3=_0x348bc3-0x11e;let _0x261a3b=_0x3a5c0f[_0x348bc3];return _0x261a3b;},_0x348b(_0x5a0455,_0x38046d);}Sprite_ExtendedTile['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']=Object[_0x23b15a(0x198)](Sprite[_0x23b15a(0x8ea)]),Sprite_ExtendedTile[_0x23b15a(0x8ea)]['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']=Sprite_ExtendedTile,Sprite_ExtendedTile[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(_0x319911,_0x4440b1,_0x24c645,_0x27eccb){const _0x96f13c=_0x23b15a;this['\x5f\x73\x68\x69\x66\x74\x59']=Game_CharacterBase['\x44\x45\x46\x41\x55\x4c\x54\x5f\x53\x48\x49\x46\x54\x5f\x59']||-0x6,this[_0x96f13c(0x3dc)]=_0x319911,this[_0x96f13c(0x83a)]=_0x4440b1,this['\x5f\x74\x69\x6c\x65']=_0x24c645,this[_0x96f13c(0x53b)]=_0x27eccb,Sprite[_0x96f13c(0x8ea)][_0x96f13c(0x46d)][_0x96f13c(0x744)](this),this[_0x96f13c(0x87b)](),this[_0x96f13c(0x8c9)](),this[_0x96f13c(0x68d)](),this['\x75\x70\x64\x61\x74\x65']();},Sprite_ExtendedTile[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x53\x75\x62\x53\x70\x72\x69\x74\x65']=function(){const _0x36b0b2=_0x23b15a;this[_0x36b0b2(0x7d1)]=new Sprite(),this[_0x36b0b2(0x7d1)][_0x36b0b2(0x2a2)]['\x78']=0.5,this['\x5f\x74\x69\x6c\x65\x53\x70\x72\x69\x74\x65'][_0x36b0b2(0x2a2)]['\x79']=0x1,this[_0x36b0b2(0x7d1)]['\x79']=-this['\x5f\x73\x68\x69\x66\x74\x59']+0x1,this[_0x36b0b2(0x8c0)](this[_0x36b0b2(0x7d1)]);},Sprite_ExtendedTile['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x8c9)]=function(){const _0x4df0d5=_0x23b15a,_0x176ed3=$gameMap[_0x4df0d5(0x44d)](),_0xc42364=0x5+Math[_0x4df0d5(0x8ff)](this[_0x4df0d5(0x788)]/0x100);this[_0x4df0d5(0x7d1)]['\x62\x69\x74\x6d\x61\x70']=ImageManager[_0x4df0d5(0x234)](_0x176ed3['\x74\x69\x6c\x65\x73\x65\x74\x4e\x61\x6d\x65\x73'][_0xc42364]);},Sprite_ExtendedTile['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x68d)]=function(){const _0x5d9c56=_0x23b15a,_0x5162dd=this[_0x5d9c56(0x788)],_0x4759d5=$gameMap['\x74\x69\x6c\x65\x57\x69\x64\x74\x68'](),_0x550a3d=$gameMap[_0x5d9c56(0x3a5)](),_0x1b54f6=(Math[_0x5d9c56(0x8ff)](_0x5162dd/0x80)%0x2*0x8+_0x5162dd%0x8)*_0x4759d5,_0x17a3ed=Math['\x66\x6c\x6f\x6f\x72'](_0x5162dd%0x100/0x8)%0x10*_0x550a3d,_0x5aff67=this[_0x5d9c56(0x53b)]*_0x550a3d;this['\x5f\x74\x69\x6c\x65\x53\x70\x72\x69\x74\x65']['\x73\x65\x74\x46\x72\x61\x6d\x65'](_0x1b54f6,_0x17a3ed-_0x5aff67,_0x4759d5,_0x550a3d+_0x5aff67);},Sprite_ExtendedTile['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x70\x64\x61\x74\x65']=function(){const _0x408bcf=_0x23b15a;Sprite[_0x408bcf(0x8ea)][_0x408bcf(0x8fc)][_0x408bcf(0x744)](this),this['\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e']();},Sprite_ExtendedTile[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e']=function(){const _0x57c5c9=_0x23b15a,_0x51d453=$gameMap[_0x57c5c9(0x391)](),_0x867d6d=$gameMap['\x74\x69\x6c\x65\x48\x65\x69\x67\x68\x74'](),_0x53e06=this[_0x57c5c9(0x3dc)],_0x4f79d9=this[_0x57c5c9(0x83a)];this['\x78']=Math['\x66\x6c\x6f\x6f\x72'](($gameMap[_0x57c5c9(0x845)](_0x53e06)+0.5)*_0x51d453),this['\x79']=Math['\x66\x6c\x6f\x6f\x72'](($gameMap[_0x57c5c9(0x7a7)](_0x4f79d9)+0x1)*_0x867d6d)+this[_0x57c5c9(0x419)]-0x1;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x905)]=Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Spriteset_Base[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65']=function(){const _0x28100e=_0x23b15a;VisuMZ[_0x28100e(0x7db)][_0x28100e(0x905)][_0x28100e(0x744)](this),this['\x69\x6e\x69\x74\x4d\x65\x6d\x62\x65\x72\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']();},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x147)]=function(){const _0x52a055=_0x23b15a;this[_0x52a055(0x8f3)]=[],this['\x5f\x70\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x73']=[],this['\x5f\x63\x61\x63\x68\x65\x53\x63\x61\x6c\x65\x58']=this['\x73\x63\x61\x6c\x65']['\x78'],this['\x5f\x63\x61\x63\x68\x65\x53\x63\x61\x6c\x65\x59']=this[_0x52a055(0x680)]['\x79'];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x1d5)]=Spriteset_Base[_0x23b15a(0x8ea)]['\x64\x65\x73\x74\x72\x6f\x79'],Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x37b)]=function(_0x387eb9){const _0x476b9e=_0x23b15a;this[_0x476b9e(0x7be)](),this[_0x476b9e(0x4c5)](),VisuMZ[_0x476b9e(0x7db)][_0x476b9e(0x1d5)]['\x63\x61\x6c\x6c'](this,_0x387eb9);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x54e)]=Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)],Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x8fc)]=function(){const _0x11169f=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x11169f(0x54e)][_0x11169f(0x744)](this),this[_0x11169f(0x611)](),this[_0x11169f(0x1ae)](),this[_0x11169f(0x127)](),this[_0x11169f(0x83c)]();},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x611)]=function(){},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x1ae)]=function(){const _0x3afad0=_0x23b15a;if(!VisuMZ[_0x3afad0(0x7db)][_0x3afad0(0x742)][_0x3afad0(0x875)][_0x3afad0(0x21f)])return;if(this[_0x3afad0(0x28b)]===this['\x73\x63\x61\x6c\x65']['\x78']&&this[_0x3afad0(0x12a)]===this['\x73\x63\x61\x6c\x65']['\x79'])return;this[_0x3afad0(0x17e)](),this[_0x3afad0(0x28b)]=this[_0x3afad0(0x680)]['\x78'],this[_0x3afad0(0x12a)]=this[_0x3afad0(0x680)]['\x79'];},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x61\x64\x6a\x75\x73\x74\x50\x69\x63\x74\x75\x72\x65\x41\x6e\x74\x69\x5a\x6f\x6f\x6d']=function(){const _0x35518a=_0x23b15a;if(SceneManager[_0x35518a(0x5bb)]()&&Spriteset_Map['\x44\x45\x54\x41\x43\x48\x5f\x50\x49\x43\x54\x55\x52\x45\x5f\x43\x4f\x4e\x54\x41\x49\x4e\x45\x52'])return;else{if(SceneManager[_0x35518a(0x546)]()&&Spriteset_Battle['\x44\x45\x54\x41\x43\x48\x5f\x50\x49\x43\x54\x55\x52\x45\x5f\x43\x4f\x4e\x54\x41\x49\x4e\x45\x52'])return;}this['\x73\x63\x61\x6c\x65']['\x78']!==0x0&&(this[_0x35518a(0x674)][_0x35518a(0x680)]['\x78']=0x1/this['\x73\x63\x61\x6c\x65']['\x78'],this[_0x35518a(0x674)]['\x78']=-(this['\x78']/this[_0x35518a(0x680)]['\x78'])),this[_0x35518a(0x680)]['\x79']!==0x0&&(this['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72']['\x73\x63\x61\x6c\x65']['\x79']=0x1/this[_0x35518a(0x680)]['\x79'],this[_0x35518a(0x674)]['\x79']=-(this['\x79']/this[_0x35518a(0x680)]['\x79']));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x5d3)]=Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x7b1)],Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x7b1)]=function(){const _0xc024eb=_0x23b15a;VisuMZ[_0xc024eb(0x7db)]['\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x73\x65\x5f\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e'][_0xc024eb(0x744)](this),this['\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']();},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x840)]=function(){const _0xc0a66e=_0x23b15a;if(!$gameScreen)return;if($gameScreen['\x5f\x73\x68\x61\x6b\x65\x44\x75\x72\x61\x74\x69\x6f\x6e']<=0x0)return;this['\x78']-=Math['\x72\x6f\x75\x6e\x64']($gameScreen[_0xc0a66e(0x497)]());switch($gameScreen[_0xc0a66e(0x76a)]()){case _0xc0a66e(0x239):this[_0xc0a66e(0x37f)]();break;case _0xc0a66e(0x79e):this['\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x48\x6f\x72\x7a']();break;case _0xc0a66e(0x794):this[_0xc0a66e(0x4a7)]();break;default:this['\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x52\x61\x6e\x64']();break;}},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x37f)]=function(){const _0x151576=_0x23b15a,_0x2bf413=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x151576(0x742)][_0x151576(0x873)];if(_0x2bf413&&_0x2bf413['\x6f\x72\x69\x67\x69\x6e\x61\x6c\x4a\x53'])return _0x2bf413[_0x151576(0x17a)][_0x151576(0x744)](this);this['\x78']+=Math[_0x151576(0x38b)]($gameScreen[_0x151576(0x497)]());},Spriteset_Base[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x52\x61\x6e\x64']=function(){const _0x1b85e8=_0x23b15a,_0x1b18e5=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1b85e8(0x742)][_0x1b85e8(0x873)];if(_0x1b18e5&&_0x1b18e5[_0x1b85e8(0x641)])return _0x1b18e5[_0x1b85e8(0x641)][_0x1b85e8(0x744)](this);const _0x36d915=$gameScreen['\x5f\x73\x68\x61\x6b\x65\x50\x6f\x77\x65\x72']*0.75,_0x5cb0d7=$gameScreen[_0x1b85e8(0x157)]*0.6,_0x284404=$gameScreen['\x5f\x73\x68\x61\x6b\x65\x44\x75\x72\x61\x74\x69\x6f\x6e'];this['\x78']+=Math[_0x1b85e8(0x38b)](Math[_0x1b85e8(0x366)](_0x36d915)-Math[_0x1b85e8(0x366)](_0x5cb0d7))*(Math[_0x1b85e8(0x70e)](_0x284404,0x1e)*0.5),this['\x79']+=Math[_0x1b85e8(0x38b)](Math[_0x1b85e8(0x366)](_0x36d915)-Math[_0x1b85e8(0x366)](_0x5cb0d7))*(Math[_0x1b85e8(0x70e)](_0x284404,0x1e)*0.5);},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x142)]=function(){const _0xecb6d4=_0x23b15a,_0x1f46f3=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0xecb6d4(0x742)][_0xecb6d4(0x873)];if(_0x1f46f3&&_0x1f46f3['\x68\x6f\x72\x7a\x4a\x53'])return _0x1f46f3['\x68\x6f\x72\x7a\x4a\x53'][_0xecb6d4(0x744)](this);const _0x16cd38=$gameScreen[_0xecb6d4(0x8c5)]*0.75,_0x3aad65=$gameScreen[_0xecb6d4(0x157)]*0.6,_0x149230=$gameScreen[_0xecb6d4(0x128)];this['\x78']+=Math[_0xecb6d4(0x38b)](Math['\x72\x61\x6e\x64\x6f\x6d\x49\x6e\x74'](_0x16cd38)-Math[_0xecb6d4(0x366)](_0x3aad65))*(Math['\x6d\x69\x6e'](_0x149230,0x1e)*0.5);},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x4a7)]=function(){const _0x1b30fe=_0x23b15a,_0x35379a=VisuMZ[_0x1b30fe(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x1b30fe(0x873)];if(_0x35379a&&_0x35379a[_0x1b30fe(0x50f)])return _0x35379a[_0x1b30fe(0x50f)][_0x1b30fe(0x744)](this);const _0x585b6d=$gameScreen[_0x1b30fe(0x8c5)]*0.75,_0x49df8e=$gameScreen[_0x1b30fe(0x157)]*0.6,_0x1e41f9=$gameScreen['\x5f\x73\x68\x61\x6b\x65\x44\x75\x72\x61\x74\x69\x6f\x6e'];this['\x79']+=Math[_0x1b30fe(0x38b)](Math['\x72\x61\x6e\x64\x6f\x6d\x49\x6e\x74'](_0x585b6d)-Math[_0x1b30fe(0x366)](_0x49df8e))*(Math[_0x1b30fe(0x70e)](_0x1e41f9,0x1e)*0.5);},Spriteset_Base[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73']=function(){const _0x569cf0=_0x23b15a;for(const _0x4c213e of this[_0x569cf0(0x8f3)]){!_0x4c213e['\x69\x73\x50\x6c\x61\x79\x69\x6e\x67']()&&this[_0x569cf0(0x894)](_0x4c213e);}this[_0x569cf0(0x718)]();},Spriteset_Base[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x73']=function(){for(;;){const _0x2c0999=$gameTemp['\x72\x65\x74\x72\x69\x65\x76\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e']();if(_0x2c0999)this['\x63\x72\x65\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x2c0999);else break;}},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x7e9)]=function(_0x2913ab){const _0x31e73f=_0x23b15a,_0x3f2847=$dataAnimations[_0x2913ab[_0x31e73f(0x245)]],_0x41714e=_0x2913ab[_0x31e73f(0x3d8)],_0x28947b=_0x2913ab[_0x31e73f(0x900)],_0x361f49=_0x2913ab[_0x31e73f(0x610)];let _0x2b3041=this[_0x31e73f(0x8fd)]();const _0x5255d0=this['\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x65\x78\x74\x44\x65\x6c\x61\x79']();if(this[_0x31e73f(0x1ad)](_0x3f2847))for(const _0x25c2d1 of _0x41714e){this[_0x31e73f(0x316)]([_0x25c2d1],_0x3f2847,_0x28947b,_0x2b3041,_0x361f49),_0x2b3041+=_0x5255d0;}else this[_0x31e73f(0x316)](_0x41714e,_0x3f2847,_0x28947b,_0x2b3041,_0x361f49);},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x762)]=function(_0x6ba39c,_0x3c4e3a,_0x3e4fa0,_0x139a89){const _0x5f1c9a=_0x23b15a,_0x4cb80c=this['\x69\x73\x4d\x56\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x3c4e3a),_0x39c687=new(_0x4cb80c?Sprite_AnimationMV:Sprite_Animation)(),_0x34ef34=this[_0x5f1c9a(0x6d3)](_0x6ba39c),_0x29ee4a=this[_0x5f1c9a(0x8fd)](),_0x52d782=_0x139a89>_0x29ee4a?this[_0x5f1c9a(0x190)]():null;this[_0x5f1c9a(0x2fa)](_0x6ba39c[0x0])&&(_0x3e4fa0=!_0x3e4fa0),_0x39c687['\x74\x61\x72\x67\x65\x74\x4f\x62\x6a\x65\x63\x74\x73']=_0x6ba39c,_0x39c687[_0x5f1c9a(0x49a)](_0x34ef34,_0x3c4e3a,_0x3e4fa0,_0x139a89,_0x52d782),this[_0x5f1c9a(0x2ee)](_0x39c687),this[_0x5f1c9a(0x7af)][_0x5f1c9a(0x2b9)](_0x39c687);},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x316)]=function(_0x35c0a3,_0xb88f61,_0x1e02e3,_0x2312cf,_0x5dd6fc){const _0x57074c=_0x23b15a,_0x3c0002=this[_0x57074c(0x59f)](_0xb88f61),_0x31c601=new(_0x3c0002?Sprite_AnimationMV:Sprite_Animation)(),_0x5cff65=this[_0x57074c(0x6d3)](_0x35c0a3);this['\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x68\x6f\x75\x6c\x64\x4d\x69\x72\x72\x6f\x72'](_0x35c0a3[0x0])&&(_0x1e02e3=!_0x1e02e3),_0x31c601['\x74\x61\x72\x67\x65\x74\x4f\x62\x6a\x65\x63\x74\x73']=_0x35c0a3,_0x31c601[_0x57074c(0x49a)](_0x5cff65,_0xb88f61,_0x1e02e3,_0x2312cf),_0x31c601[_0x57074c(0x46f)](_0x5dd6fc),this[_0x57074c(0x2ee)](_0x31c601),this[_0x57074c(0x7af)]&&this[_0x57074c(0x7af)][_0x57074c(0x921)](_0x31c601),this[_0x57074c(0x8f3)][_0x57074c(0x2b9)](_0x31c601);},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x2ee)]=function(_0x3e73bd){const _0x5ec6cc=_0x23b15a;this[_0x5ec6cc(0x829)][_0x5ec6cc(0x8c0)](_0x3e73bd);},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x3b7)]=function(_0x21bfca){const _0x56b033=_0x23b15a;this[_0x56b033(0x7af)][_0x56b033(0x921)](_0x21bfca),this['\x72\x65\x6d\x6f\x76\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72'](_0x21bfca);for(const _0x394a08 of _0x21bfca[_0x56b033(0x273)]){_0x394a08[_0x56b033(0x271)]&&_0x394a08[_0x56b033(0x271)]();}_0x21bfca[_0x56b033(0x37b)]();},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x894)]=function(_0x5743b3){const _0x42070c=_0x23b15a;this[_0x42070c(0x8f3)][_0x42070c(0x921)](_0x5743b3),this['\x72\x65\x6d\x6f\x76\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72'](_0x5743b3);for(const _0x195828 of _0x5743b3[_0x42070c(0x273)]){_0x195828[_0x42070c(0x271)]&&_0x195828[_0x42070c(0x271)]();}_0x5743b3[_0x42070c(0x37b)]();},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x565)]=function(_0x1f0289){const _0x3e7744=_0x23b15a;this[_0x3e7744(0x829)][_0x3e7744(0x42f)](_0x1f0289);},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x7be)]=function(){const _0x22de7d=_0x23b15a;for(const _0x27fe12 of this[_0x22de7d(0x8f3)]){this[_0x22de7d(0x894)](_0x27fe12);}},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x1a3)]=function(){const _0x2c64f7=_0x23b15a;return this[_0x2c64f7(0x8f3)]['\x6c\x65\x6e\x67\x74\x68']>0x0;},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x83c)]=function(){const _0xfdfd84=_0x23b15a;for(const _0x26100d of this[_0xfdfd84(0x490)]){!_0x26100d[_0xfdfd84(0x73e)]()&&this[_0xfdfd84(0x184)](_0x26100d);}this[_0xfdfd84(0x658)]();},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x658)]=function(){const _0x17dfca=_0x23b15a;for(;;){const _0x287353=$gameTemp[_0x17dfca(0x133)]();if(_0x287353)this[_0x17dfca(0x3d9)](_0x287353);else break;}},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3d9)]=function(_0x49954c){const _0x206770=_0x23b15a,_0x3e77b0=$dataAnimations[_0x49954c[_0x206770(0x245)]],_0x4f1954=this[_0x206770(0x923)](_0x49954c),_0x218055=_0x49954c['\x6d\x69\x72\x72\x6f\x72'],_0x2177a2=_0x49954c['\x6d\x75\x74\x65'];let _0x458749=this[_0x206770(0x8fd)]();const _0x25c090=this[_0x206770(0x824)]();if(this[_0x206770(0x1ad)](_0x3e77b0))for(const _0x4c156f of _0x4f1954){this['\x63\x72\x65\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65']([_0x4c156f],_0x3e77b0,_0x218055,_0x458749,_0x2177a2),_0x458749+=_0x25c090;}else this[_0x206770(0x639)](_0x4f1954,_0x3e77b0,_0x218055,_0x458749,_0x2177a2);},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x923)]=function(_0xe06d8b){const _0x51254f=_0x23b15a,_0x40f38a=new Sprite_Clickable(),_0x5e69e6=this[_0x51254f(0x278)]();_0x40f38a['\x78']=_0xe06d8b['\x78']-_0x5e69e6['\x78'],_0x40f38a['\x79']=_0xe06d8b['\x79']-_0x5e69e6['\x79'],_0x40f38a['\x7a']=0x64;const _0x34dbeb=this['\x67\x65\x74\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4c\x61\x79\x65\x72']();return _0x34dbeb[_0x51254f(0x8c0)](_0x40f38a),[_0x40f38a];},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x278)]=function(){return this;},Spriteset_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x278)]=function(){const _0x97b521=_0x23b15a;return this[_0x97b521(0x28a)]||this;},Spriteset_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x278)]=function(){const _0x228232=_0x23b15a;return this[_0x228232(0x584)]||this;},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x639)]=function(_0x47c8bd,_0x3a9bd4,_0x5c7416,_0x2408ac,_0x19d075){const _0x1e2be0=_0x23b15a,_0x363619=this[_0x1e2be0(0x59f)](_0x3a9bd4),_0x1ff36f=new(_0x363619?Sprite_AnimationMV:Sprite_Animation)();_0x1ff36f[_0x1e2be0(0x273)]=_0x47c8bd,_0x1ff36f[_0x1e2be0(0x49a)](_0x47c8bd,_0x3a9bd4,_0x5c7416,_0x2408ac),_0x1ff36f[_0x1e2be0(0x46f)](_0x19d075),this[_0x1e2be0(0x2ee)](_0x1ff36f),this['\x5f\x70\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x73'][_0x1e2be0(0x2b9)](_0x1ff36f);},Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x72\x65\x6d\x6f\x76\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e']=function(_0x3be19e){const _0x388a2f=_0x23b15a;this[_0x388a2f(0x490)][_0x388a2f(0x921)](_0x3be19e),this[_0x388a2f(0x829)][_0x388a2f(0x42f)](_0x3be19e);for(const _0xaf6f70 of _0x3be19e[_0x388a2f(0x273)]){_0xaf6f70[_0x388a2f(0x271)]&&_0xaf6f70[_0x388a2f(0x271)]();const _0x1a866b=this['\x67\x65\x74\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4c\x61\x79\x65\x72']();_0x1a866b&&_0x1a866b[_0x388a2f(0x42f)](_0xaf6f70);}_0x3be19e[_0x388a2f(0x37b)]();},Spriteset_Base[_0x23b15a(0x8ea)]['\x72\x65\x6d\x6f\x76\x65\x41\x6c\x6c\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73']=function(){const _0x1ccae9=_0x23b15a;for(const _0x538f3b of this[_0x1ccae9(0x490)]){this[_0x1ccae9(0x184)](_0x538f3b);}},Spriteset_Base[_0x23b15a(0x8ea)][_0x23b15a(0x5a7)]=function(){const _0xfff718=_0x23b15a;return this['\x5f\x70\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x73'][_0xfff718(0x699)]>0x0;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2d7)]=Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x690)],Spriteset_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x690)]=function(){const _0x1908d0=_0x23b15a;return VisuMZ[_0x1908d0(0x7db)][_0x1908d0(0x2d7)]['\x63\x61\x6c\x6c'](this)||this[_0x1908d0(0x5a7)]();},Spriteset_Map['\x44\x45\x54\x41\x43\x48\x5f\x50\x49\x43\x54\x55\x52\x45\x5f\x43\x4f\x4e\x54\x41\x49\x4e\x45\x52']=VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x875)][_0x23b15a(0x585)]||![],VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x6f6)]=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x42d)],Scene_Map[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=function(){const _0x438326=_0x23b15a;VisuMZ[_0x438326(0x7db)][_0x438326(0x6f6)]['\x63\x61\x6c\x6c'](this);if(!Spriteset_Map[_0x438326(0x44c)])return;const _0x564341=this[_0x438326(0x22b)];if(!_0x564341)return;this[_0x438326(0x674)]=_0x564341[_0x438326(0x674)];if(!this[_0x438326(0x674)])return;this[_0x438326(0x8c0)](this[_0x438326(0x674)]);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x91c)]=Spriteset_Map[_0x23b15a(0x8ea)][_0x23b15a(0x287)],Spriteset_Map[_0x23b15a(0x8ea)][_0x23b15a(0x287)]=function(){const _0x5d7c9f=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x54\x69\x6c\x65\x6d\x61\x70'][_0x5d7c9f(0x744)](this),this[_0x5d7c9f(0x384)]();},Spriteset_Map[_0x23b15a(0x8ea)][_0x23b15a(0x384)]=function(){const _0x70da63=_0x23b15a,_0x47df32=$gameMap[_0x70da63(0x44d)]();if(!_0x47df32)return;const _0x561dbc=$gameMap[_0x70da63(0x502)]();if(Object[_0x70da63(0x726)](_0x561dbc)[_0x70da63(0x699)]<=0x0)return;const _0x2a4a5b=$gameMap[_0x70da63(0x330)]();this[_0x70da63(0x70f)]=this[_0x70da63(0x70f)]||[];for(let _0x4d3249=0x0;_0x4d3249<$gameMap['\x68\x65\x69\x67\x68\x74']();_0x4d3249++){for(let _0x53b191=0x0;_0x53b191<$gameMap['\x77\x69\x64\x74\x68']();_0x53b191++){for(const _0x148c8e of $gameMap[_0x70da63(0x6f3)](_0x53b191,_0x4d3249)){const _0x5e6c3d=_0x2a4a5b[_0x148c8e]>>0xc,_0x21fb82=_0x561dbc[_0x5e6c3d]||0x0;if(_0x21fb82<=0x0)continue;this['\x63\x72\x65\x61\x74\x65\x45\x78\x74\x65\x6e\x64\x65\x64\x54\x69\x6c\x65\x53\x70\x72\x69\x74\x65'](_0x53b191,_0x4d3249,_0x148c8e,_0x21fb82);}}}},Spriteset_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x31f)]=function(){const _0xd11fd3=_0x23b15a;this[_0xd11fd3(0x70f)]=this[_0xd11fd3(0x70f)]||[];for(const _0x54b119 of this[_0xd11fd3(0x70f)]){this[_0xd11fd3(0x28a)][_0xd11fd3(0x42f)](_0x54b119);}this['\x5f\x74\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x53\x70\x72\x69\x74\x65\x73']=[];},Spriteset_Map[_0x23b15a(0x8ea)][_0x23b15a(0x8f9)]=function(_0x112e01,_0x4997c8,_0x277f7e,_0x1a7b7d){const _0x4a3193=_0x23b15a,_0x8d72c2=new Sprite_ExtendedTile(_0x112e01,_0x4997c8,_0x277f7e,_0x1a7b7d),_0x20e3ac=$gameMap[_0x4a3193(0x330)]();_0x20e3ac[_0x277f7e]&0x10?_0x8d72c2['\x7a']=0x4:_0x8d72c2['\x7a']=0x3,this[_0x4a3193(0x28a)][_0x4a3193(0x8c0)](_0x8d72c2),this[_0x4a3193(0x70f)]['\x70\x75\x73\x68'](_0x8d72c2);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x8f6)]=Tilemap[_0x23b15a(0x8ea)][_0x23b15a(0x592)],Tilemap[_0x23b15a(0x8ea)][_0x23b15a(0x592)]=function(_0x27b5cd,_0x466ecb,_0x3f85ff){const _0x11b7dd=_0x23b15a;if($gameMap[_0x11b7dd(0x5c7)](_0x27b5cd))return;VisuMZ[_0x11b7dd(0x7db)][_0x11b7dd(0x8f6)]['\x63\x61\x6c\x6c'](this,_0x27b5cd,_0x466ecb,_0x3f85ff);},Spriteset_Battle[_0x23b15a(0x44c)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x875)][_0x23b15a(0x792)]||![],VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x64\x65\x74\x61\x63\x68']=Scene_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x42d)],Scene_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=function(){const _0x3cef36=_0x23b15a;VisuMZ[_0x3cef36(0x7db)][_0x3cef36(0x3c0)][_0x3cef36(0x744)](this);if(!Spriteset_Battle[_0x3cef36(0x44c)])return;const _0x2362ce=this['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'];if(!_0x2362ce)return;this['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72']=_0x2362ce[_0x3cef36(0x674)];if(!this[_0x3cef36(0x674)])return;this[_0x3cef36(0x8c0)](this[_0x3cef36(0x674)]);},Spriteset_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x570)]=function(){const _0xf7956c=_0x23b15a;this[_0xf7956c(0x637)]=new PIXI[(_0xf7956c(0x863))][(_0xf7956c(0x5cd))](clamp=!![]),this[_0xf7956c(0x21d)]=new Sprite(),this[_0xf7956c(0x21d)][_0xf7956c(0x347)]=SceneManager[_0xf7956c(0x5a8)](),this[_0xf7956c(0x21d)]['\x66\x69\x6c\x74\x65\x72\x73']=[this[_0xf7956c(0x637)]],this[_0xf7956c(0x8b4)][_0xf7956c(0x8c0)](this['\x5f\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x53\x70\x72\x69\x74\x65']);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x45\x6e\x65\x6d\x69\x65\x73']=Spriteset_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x72\x65\x61\x74\x65\x45\x6e\x65\x6d\x69\x65\x73'],Spriteset_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x16c)]=function(){const _0x256a03=_0x23b15a;this[_0x256a03(0x57a)]()&&this[_0x256a03(0x59e)](),VisuMZ[_0x256a03(0x7db)][_0x256a03(0x373)]['\x63\x61\x6c\x6c'](this);},Spriteset_Battle[_0x23b15a(0x8ea)]['\x63\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x52\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x45\x6e\x65\x6d\x69\x65\x73']=function(){const _0x393769=_0x23b15a,_0x41657b=VisuMZ[_0x393769(0x7db)][_0x393769(0x742)]['\x53\x63\x72\x65\x65\x6e\x52\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e'];if(!_0x41657b)return![];if(Utils['\x52\x50\x47\x4d\x41\x4b\x45\x52\x5f\x56\x45\x52\x53\x49\x4f\x4e']>='\x31\x2e\x33\x2e\x30'&&!_0x41657b[_0x393769(0x54c)])return![];return _0x41657b[_0x393769(0x426)];},Spriteset_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x59e)]=function(){const _0x2b2ac3=_0x23b15a;for(member of $gameTroop[_0x2b2ac3(0x6fd)]()){member[_0x2b2ac3(0x571)]();}},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65']=Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(_0x50c9d1){const _0x6242c9=_0x23b15a;_0x50c9d1['\x78']=Math['\x72\x6f\x75\x6e\x64'](_0x50c9d1['\x78']),_0x50c9d1['\x79']=Math[_0x6242c9(0x38b)](_0x50c9d1['\x79']),_0x50c9d1[_0x6242c9(0x3e2)]=Math[_0x6242c9(0x38b)](_0x50c9d1[_0x6242c9(0x3e2)]),_0x50c9d1['\x68\x65\x69\x67\x68\x74']=Math[_0x6242c9(0x38b)](_0x50c9d1[_0x6242c9(0x92d)]),this['\x69\x6e\x69\x74\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67'](),VisuMZ[_0x6242c9(0x7db)][_0x6242c9(0x25e)][_0x6242c9(0x744)](this,_0x50c9d1),this['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67']();},Window_Base[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67']=function(){const _0x293d37=_0x23b15a;this[_0x293d37(0x866)]=VisuMZ[_0x293d37(0x7db)][_0x293d37(0x742)][_0x293d37(0x875)]['\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x53\x74\x61\x6e\x64\x61\x72\x64\x54\x65\x78\x74'],this[_0x293d37(0x385)]=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x51\x6f\x4c'][_0x293d37(0x649)];},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x32b)]=function(){const _0x435098=_0x23b15a;return VisuMZ[_0x435098(0x7db)][_0x435098(0x742)][_0x435098(0x4c2)][_0x435098(0x14c)];},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x449)]=function(){const _0x4fe86f=_0x23b15a;return VisuMZ[_0x4fe86f(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x4fe86f(0x4c2)][_0x4fe86f(0x590)];},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x4a6)]=function(){const _0x25fa5f=_0x23b15a;$gameSystem[_0x25fa5f(0x517)]?this[_0x25fa5f(0x165)]=$gameSystem['\x77\x69\x6e\x64\x6f\x77\x4f\x70\x61\x63\x69\x74\x79']():this[_0x25fa5f(0x165)]=VisuMZ[_0x25fa5f(0x7db)][_0x25fa5f(0x742)][_0x25fa5f(0x4c2)][_0x25fa5f(0x177)];},Window_Base[_0x23b15a(0x8ea)]['\x74\x72\x61\x6e\x73\x6c\x75\x63\x65\x6e\x74\x4f\x70\x61\x63\x69\x74\x79']=function(){const _0x3798c9=_0x23b15a;return VisuMZ[_0x3798c9(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x57\x69\x6e\x64\x6f\x77'][_0x3798c9(0x4d6)];},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x6d5)]=function(){const _0x41f6eb=_0x23b15a;return VisuMZ[_0x41f6eb(0x7db)][_0x41f6eb(0x742)][_0x41f6eb(0x4c2)][_0x41f6eb(0x1e7)];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x2cc)]=Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)],Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x4e240a=_0x23b15a;VisuMZ[_0x4e240a(0x7db)][_0x4e240a(0x2cc)]['\x63\x61\x6c\x6c'](this),this[_0x4e240a(0x756)]();},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x893)]=function(){const _0x2da041=_0x23b15a;this[_0x2da041(0x174)]&&(this[_0x2da041(0x75e)]+=this[_0x2da041(0x6d5)](),this['\x69\x73\x4f\x70\x65\x6e']()&&(this[_0x2da041(0x174)]=![]));},Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x24b)]=function(){const _0x371c75=_0x23b15a;this[_0x371c75(0x716)]&&(this['\x6f\x70\x65\x6e\x6e\x65\x73\x73']-=this[_0x371c75(0x6d5)](),this[_0x371c75(0x5ba)]()&&(this[_0x371c75(0x716)]=![]));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x58e)]=Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x64\x72\x61\x77\x54\x65\x78\x74'],Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x6a3)]=function(_0x253041,_0x36f867,_0x7f4ee3,_0x29f26a,_0x22d591){const _0x5fa36f=_0x23b15a;this[_0x5fa36f(0x27d)]()&&(_0x253041=VisuMZ[_0x5fa36f(0x823)](_0x253041)),VisuMZ[_0x5fa36f(0x7db)][_0x5fa36f(0x58e)]['\x63\x61\x6c\x6c'](this,_0x253041,_0x36f867,_0x7f4ee3,_0x29f26a,_0x22d591);},Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x27d)]=function(){const _0x544a33=_0x23b15a;return this[_0x544a33(0x866)];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x53\x74\x61\x74\x65']=Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x722)],Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x722)]=function(_0x45e311,_0x25455e,_0x53b919,_0x1b0622){const _0x54dabe=_0x23b15a;var _0x513aac=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x54dabe(0x4b3)][_0x54dabe(0x744)](this,_0x45e311,_0x25455e,_0x53b919,_0x1b0622);return this[_0x54dabe(0x77b)]()&&(_0x513aac[_0x54dabe(0x81b)]=String(VisuMZ[_0x54dabe(0x823)](_0x513aac[_0x54dabe(0x81b)]))||''),_0x513aac;},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x77b)]=function(){return this['\x5f\x64\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x45\x78'];},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x790)]=function(_0x5607e0){const _0x1f64e0=_0x23b15a;this[_0x1f64e0(0x866)]=_0x5607e0;},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x62c)]=function(_0x14ec62){this['\x5f\x64\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x45\x78']=_0x14ec62;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x2c3)]=Window_Base[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x49\x63\x6f\x6e'],Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3bd)]=function(_0x2ed190,_0x6f337c,_0x1b7bf8){const _0x590594=_0x23b15a;_0x6f337c=Math['\x72\x6f\x75\x6e\x64'](_0x6f337c),_0x1b7bf8=Math['\x72\x6f\x75\x6e\x64'](_0x1b7bf8),VisuMZ[_0x590594(0x7db)][_0x590594(0x2c3)][_0x590594(0x744)](this,_0x2ed190,_0x6f337c,_0x1b7bf8);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x2aa)]=Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x65d)],Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x65d)]=function(_0x3f8adb,_0xd134c2,_0x5ec61c,_0xa2b706,_0x1ee51a,_0x33a6c5){const _0x26e867=_0x23b15a;_0x1ee51a=_0x1ee51a||ImageManager[_0x26e867(0x4a9)],_0x33a6c5=_0x33a6c5||ImageManager['\x66\x61\x63\x65\x48\x65\x69\x67\x68\x74'],_0x5ec61c=Math[_0x26e867(0x38b)](_0x5ec61c),_0xa2b706=Math['\x72\x6f\x75\x6e\x64'](_0xa2b706),_0x1ee51a=Math[_0x26e867(0x38b)](_0x1ee51a),_0x33a6c5=Math[_0x26e867(0x38b)](_0x33a6c5),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x26e867(0x2aa)]['\x63\x61\x6c\x6c'](this,_0x3f8adb,_0xd134c2,_0x5ec61c,_0xa2b706,_0x1ee51a,_0x33a6c5);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x888)]=Window_Base[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x43\x68\x61\x72\x61\x63\x74\x65\x72'],Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x4ca)]=function(_0x4267aa,_0x125601,_0x3c35c8,_0x403399){const _0xf88b8c=_0x23b15a;_0x3c35c8=Math[_0xf88b8c(0x38b)](_0x3c35c8),_0x403399=Math[_0xf88b8c(0x38b)](_0x403399),VisuMZ[_0xf88b8c(0x7db)][_0xf88b8c(0x888)][_0xf88b8c(0x744)](this,_0x4267aa,_0x125601,_0x3c35c8,_0x403399);},VisuMZ[_0x23b15a(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x69\x74\x65\x6d\x52\x65\x63\x74']=Window_Selectable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x69\x74\x65\x6d\x52\x65\x63\x74'],Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x168)]=function(_0x3c450b){const _0x3a3b1d=_0x23b15a;let _0x55b000=VisuMZ[_0x3a3b1d(0x7db)][_0x3a3b1d(0x4fc)]['\x63\x61\x6c\x6c'](this,_0x3c450b);return _0x55b000['\x78']=Math[_0x3a3b1d(0x38b)](_0x55b000['\x78']),_0x55b000['\x79']=Math[_0x3a3b1d(0x38b)](_0x55b000['\x79']),_0x55b000['\x77\x69\x64\x74\x68']=Math[_0x3a3b1d(0x38b)](_0x55b000[_0x3a3b1d(0x3e2)]),_0x55b000[_0x3a3b1d(0x92d)]=Math[_0x3a3b1d(0x38b)](_0x55b000[_0x3a3b1d(0x92d)]),_0x55b000;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x60d)]=Window_StatusBase[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x53\x69\x6d\x70\x6c\x65\x53\x74\x61\x74\x75\x73'],Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x909)]=function(_0x213583,_0x48b76c,_0x237311){const _0x5aa411=_0x23b15a;_0x48b76c=Math[_0x5aa411(0x38b)](_0x48b76c),_0x237311=Math[_0x5aa411(0x38b)](_0x237311),VisuMZ[_0x5aa411(0x7db)][_0x5aa411(0x60d)][_0x5aa411(0x744)](this,_0x213583,_0x48b76c,_0x237311);},Window_Base[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67']=function(){const _0xddb712=_0x23b15a;this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67']={'\x64\x75\x72\x61\x74\x69\x6f\x6e':0x0,'\x77\x68\x6f\x6c\x65\x44\x75\x72\x61\x74\x69\x6f\x6e':0x0,'\x74\x79\x70\x65':'\x4c\x49\x4e\x45\x41\x52','\x74\x61\x72\x67\x65\x74\x58':this['\x78'],'\x74\x61\x72\x67\x65\x74\x59':this['\x79'],'\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x58':this['\x73\x63\x61\x6c\x65']['\x78'],'\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x59':this[_0xddb712(0x680)]['\x79'],'\x74\x61\x72\x67\x65\x74\x4f\x70\x61\x63\x69\x74\x79':this[_0xddb712(0x3cc)],'\x74\x61\x72\x67\x65\x74\x42\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79':this[_0xddb712(0x165)],'\x74\x61\x72\x67\x65\x74\x43\x6f\x6e\x74\x65\x6e\x74\x73\x4f\x70\x61\x63\x69\x74\x79':this[_0xddb712(0x392)]};},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x756)]=function(){const _0x3945be=_0x23b15a;if(!this[_0x3945be(0x7c5)])return;if(this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'][_0x3945be(0x573)]<=0x0)return;this['\x78']=this[_0x3945be(0x512)](this['\x78'],this[_0x3945be(0x7c5)][_0x3945be(0x7e8)]),this['\x79']=this[_0x3945be(0x512)](this['\x79'],this[_0x3945be(0x7c5)][_0x3945be(0x233)]),this['\x73\x63\x61\x6c\x65']['\x78']=this['\x61\x70\x70\x6c\x79\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'](this[_0x3945be(0x680)]['\x78'],this[_0x3945be(0x7c5)][_0x3945be(0x315)]),this[_0x3945be(0x680)]['\x79']=this[_0x3945be(0x512)](this['\x73\x63\x61\x6c\x65']['\x79'],this[_0x3945be(0x7c5)][_0x3945be(0x440)]),this['\x6f\x70\x61\x63\x69\x74\x79']=this[_0x3945be(0x512)](this[_0x3945be(0x3cc)],this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'][_0x3945be(0x3ad)]),this[_0x3945be(0x165)]=this[_0x3945be(0x512)](this[_0x3945be(0x165)],this[_0x3945be(0x7c5)][_0x3945be(0x741)]),this[_0x3945be(0x392)]=this[_0x3945be(0x512)](this[_0x3945be(0x392)],this[_0x3945be(0x7c5)][_0x3945be(0x83f)]),this[_0x3945be(0x7c5)][_0x3945be(0x573)]--;},Window_Base[_0x23b15a(0x8ea)]['\x61\x70\x70\x6c\x79\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67']=function(_0x369754,_0x19481c){const _0x74f692=_0x23b15a;if(!this[_0x74f692(0x7c5)])return _0x19481c;const _0x208288=this[_0x74f692(0x7c5)][_0x74f692(0x573)],_0x260513=this[_0x74f692(0x7c5)][_0x74f692(0x60c)],_0x2c58e9=this[_0x74f692(0x5e0)]((_0x260513-_0x208288)/_0x260513),_0x338640=this[_0x74f692(0x5e0)]((_0x260513-_0x208288+0x1)/_0x260513),_0x37c8cc=(_0x369754-_0x19481c*_0x2c58e9)/(0x1-_0x2c58e9);return _0x37c8cc+(_0x19481c-_0x37c8cc)*_0x338640;},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x5e0)]=function(_0x349a17){const _0x14c1c6=_0x23b15a;if(!this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'])return _0x349a17;return VisuMZ[_0x14c1c6(0x5c0)](_0x349a17,this[_0x14c1c6(0x7c5)][_0x14c1c6(0x7dc)]||_0x14c1c6(0x34d));},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x57d)]=function(_0x594f07,_0x5d2ca1){const _0x54f527=_0x23b15a;if(!this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'])return;this['\x78']=this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'][_0x54f527(0x7e8)],this['\x79']=this[_0x54f527(0x7c5)][_0x54f527(0x233)],this['\x73\x63\x61\x6c\x65']['\x78']=this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67']['\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x58'],this[_0x54f527(0x680)]['\x79']=this[_0x54f527(0x7c5)][_0x54f527(0x440)],this['\x6f\x70\x61\x63\x69\x74\x79']=this['\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67'][_0x54f527(0x3ad)],this[_0x54f527(0x165)]=this[_0x54f527(0x7c5)]['\x74\x61\x72\x67\x65\x74\x42\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79'],this[_0x54f527(0x392)]=this[_0x54f527(0x7c5)]['\x74\x61\x72\x67\x65\x74\x43\x6f\x6e\x74\x65\x6e\x74\x73\x4f\x70\x61\x63\x69\x74\x79'],this[_0x54f527(0x4ab)](_0x594f07,_0x5d2ca1,this['\x78'],this['\x79'],this[_0x54f527(0x680)]['\x78'],this['\x73\x63\x61\x6c\x65']['\x79'],this[_0x54f527(0x3cc)],this[_0x54f527(0x165)],this['\x63\x6f\x6e\x74\x65\x6e\x74\x73\x4f\x70\x61\x63\x69\x74\x79']);},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x4ab)]=function(_0x49776c,_0x190743,_0x40374a,_0x3ecae1,_0x4de3b3,_0x11ebfd,_0x1bd9e7,_0x139850,_0x5f4b64){const _0x446cea=_0x23b15a;this[_0x446cea(0x7c5)]={'\x64\x75\x72\x61\x74\x69\x6f\x6e':_0x49776c,'\x77\x68\x6f\x6c\x65\x44\x75\x72\x61\x74\x69\x6f\x6e':_0x49776c,'\x74\x79\x70\x65':_0x190743,'\x74\x61\x72\x67\x65\x74\x58':_0x40374a,'\x74\x61\x72\x67\x65\x74\x59':_0x3ecae1,'\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x58':_0x4de3b3,'\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x59':_0x11ebfd,'\x74\x61\x72\x67\x65\x74\x4f\x70\x61\x63\x69\x74\x79':_0x1bd9e7,'\x74\x61\x72\x67\x65\x74\x42\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79':_0x139850,'\x74\x61\x72\x67\x65\x74\x43\x6f\x6e\x74\x65\x6e\x74\x73\x4f\x70\x61\x63\x69\x74\x79':_0x5f4b64};},Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x47a)]=function(_0x26af72,_0x1468be,_0x3ab971,_0x35ef9e,_0x22c56b){const _0x24b928=_0x23b15a;this[_0x24b928(0x161)](),this['\x63\x6f\x6e\x74\x65\x6e\x74\x73'][_0x24b928(0x71b)]=VisuMZ[_0x24b928(0x7db)][_0x24b928(0x742)][_0x24b928(0x513)]['\x47\x6f\x6c\x64\x46\x6f\x6e\x74\x53\x69\x7a\x65'];const _0x2989b7=VisuMZ[_0x24b928(0x7db)][_0x24b928(0x742)][_0x24b928(0x513)][_0x24b928(0x485)];if(_0x2989b7>0x0&&_0x1468be===TextManager[_0x24b928(0x2be)]){const _0x1e715f=_0x35ef9e+(this[_0x24b928(0x32b)]()-ImageManager[_0x24b928(0x698)])/0x2;this[_0x24b928(0x3bd)](_0x2989b7,_0x3ab971+(_0x22c56b-ImageManager[_0x24b928(0x15f)]),_0x1e715f),_0x22c56b-=ImageManager[_0x24b928(0x15f)]+0x4;}else this['\x63\x68\x61\x6e\x67\x65\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72'](ColorManager['\x73\x79\x73\x74\x65\x6d\x43\x6f\x6c\x6f\x72']()),this[_0x24b928(0x6a3)](_0x1468be,_0x3ab971,_0x35ef9e,_0x22c56b,'\x72\x69\x67\x68\x74'),_0x22c56b-=this[_0x24b928(0x412)](_0x1468be)+0x6;this['\x72\x65\x73\x65\x74\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72']();const _0x1a2400=this[_0x24b928(0x412)](this[_0x24b928(0x866)]?VisuMZ[_0x24b928(0x823)](_0x26af72):_0x26af72);_0x1a2400>_0x22c56b?this[_0x24b928(0x6a3)](VisuMZ[_0x24b928(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x24b928(0x513)][_0x24b928(0x86d)],_0x3ab971,_0x35ef9e,_0x22c56b,_0x24b928(0x85e)):this['\x64\x72\x61\x77\x54\x65\x78\x74'](_0x26af72,_0x3ab971,_0x35ef9e,_0x22c56b,_0x24b928(0x85e)),this['\x72\x65\x73\x65\x74\x46\x6f\x6e\x74\x53\x65\x74\x74\x69\x6e\x67\x73']();},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x371)]=function(_0x316590,_0x40fca4,_0x8dfaa5,_0x37dd30,_0x358314){const _0x11de67=_0x23b15a,_0x5b6ebe=ImageManager[_0x11de67(0x82d)](_0x11de67(0x21b)),_0x2c2236=ImageManager[_0x11de67(0x15f)],_0x433b71=ImageManager[_0x11de67(0x698)],_0x190b73=_0x316590%0x10*_0x2c2236,_0x5a8a28=Math[_0x11de67(0x8ff)](_0x316590/0x10)*_0x433b71;this[_0x11de67(0x4e4)][_0x11de67(0x86a)][_0x11de67(0x8f2)]=_0x358314,this[_0x11de67(0x4e4)][_0x11de67(0x819)](_0x5b6ebe,_0x190b73,_0x5a8a28,_0x2c2236,_0x433b71,_0x40fca4,_0x8dfaa5,_0x37dd30,_0x37dd30),this[_0x11de67(0x4e4)][_0x11de67(0x86a)][_0x11de67(0x8f2)]=!![];},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x27e)]=function(_0x43a92b,_0x396f93,_0x6406fe,_0x495dbf,_0x410579,_0x1a8640){const _0x16fe80=_0x23b15a,_0x44f72=Math[_0x16fe80(0x8ff)]((_0x6406fe-0x2)*_0x495dbf),_0x274ab8=Sprite_Gauge[_0x16fe80(0x8ea)][_0x16fe80(0x2f0)][_0x16fe80(0x744)](this),_0x303df7=_0x396f93+this[_0x16fe80(0x32b)]()-_0x274ab8-0x2;this[_0x16fe80(0x4e4)]['\x66\x69\x6c\x6c\x52\x65\x63\x74'](_0x43a92b,_0x303df7,_0x6406fe,_0x274ab8,ColorManager['\x67\x61\x75\x67\x65\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72']()),this['\x63\x6f\x6e\x74\x65\x6e\x74\x73']['\x67\x72\x61\x64\x69\x65\x6e\x74\x46\x69\x6c\x6c\x52\x65\x63\x74'](_0x43a92b+0x1,_0x303df7+0x1,_0x44f72,_0x274ab8-0x2,_0x410579,_0x1a8640);},Window_Scrollable[_0x23b15a(0x78b)]={'\x65\x6e\x61\x62\x6c\x65\x64':VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x595)]??!![],'\x74\x68\x69\x63\x6b\x6e\x65\x73\x73':VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x4c2)][_0x23b15a(0x7b2)]??0x2,'\x6f\x66\x66\x73\x65\x74':VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x89f)]??0x2,'\x62\x6f\x64\x79\x43\x6f\x6c\x6f\x72':VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x3f7)]??0x0,'\x6f\x66\x66\x43\x6f\x6c\x6f\x72':VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x56d)]??0x7,'\x6f\x66\x66\x4f\x70\x61\x63\x69\x74\x79':VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x477)]??0x80},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x561)]=function(){const _0x744293=_0x23b15a;return Window_Scrollable['\x53\x43\x52\x4f\x4c\x4c\x42\x41\x52']['\x65\x6e\x61\x62\x6c\x65\x64']&&Window_Scrollable[_0x744293(0x78b)][_0x744293(0x57b)]>0x0;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x66b)]=Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x7a6)],Window_Base[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x43\x6f\x6e\x74\x65\x6e\x74\x73']=function(){const _0x5a2c44=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x5a2c44(0x66b)]['\x63\x61\x6c\x6c'](this),this[_0x5a2c44(0x45a)](),this[_0x5a2c44(0x1c9)](!![]),this[_0x5a2c44(0x1c9)](![]);},Window_Base[_0x23b15a(0x8ea)]['\x63\x72\x65\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x53\x70\x72\x69\x74\x65\x73']=function(){const _0x11473c=_0x23b15a;if(!this[_0x11473c(0x561)]())return;if(this[_0x11473c(0x52f)]||this[_0x11473c(0x346)])return;this[_0x11473c(0x7e1)]={'\x68\x6f\x72\x7a':null,'\x76\x65\x72\x74':null,'\x6d\x61\x78\x48\x6f\x72\x7a':null,'\x6d\x61\x78\x56\x65\x72\x74':null},this[_0x11473c(0x52f)]=new Sprite(),this[_0x11473c(0x346)]=new Sprite(),this['\x61\x64\x64\x43\x68\x69\x6c\x64'](this[_0x11473c(0x52f)]),this[_0x11473c(0x8c0)](this[_0x11473c(0x346)]);},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x1c9)]=function(_0x4b1486){const _0x875ee=_0x23b15a,_0x29140c=_0x4b1486?this[_0x875ee(0x52f)]:this['\x5f\x73\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x65\x72\x74'];if(!_0x29140c)return;const _0x434b1b=Window_Scrollable[_0x875ee(0x78b)],_0x5ea4ea=_0x434b1b[_0x875ee(0x57b)],_0x53ea45=_0x4b1486?this['\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68']-_0x5ea4ea*0x2:_0x5ea4ea,_0x6beaeb=_0x4b1486?_0x5ea4ea:this[_0x875ee(0x312)]-_0x5ea4ea*0x2;_0x29140c[_0x875ee(0x347)]=new Bitmap(_0x53ea45,_0x6beaeb),_0x29140c[_0x875ee(0x1f8)](0x0,0x0,_0x53ea45,_0x6beaeb),this['\x75\x70\x64\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x50\x6f\x73\x69\x74\x69\x6f\x6e'](_0x4b1486);},VisuMZ[_0x23b15a(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x64\x65\x73\x74\x72\x6f\x79\x43\x6f\x6e\x74\x65\x6e\x74\x73']=Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x6f9)],Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x6f9)]=function(){const _0x2bd89d=_0x23b15a;VisuMZ[_0x2bd89d(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x64\x65\x73\x74\x72\x6f\x79\x43\x6f\x6e\x74\x65\x6e\x74\x73'][_0x2bd89d(0x744)](this),this[_0x2bd89d(0x90b)]();},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x90b)]=function(){const _0x1c17df=_0x23b15a,_0x5ac398=[this[_0x1c17df(0x52f)],this[_0x1c17df(0x346)]];for(const _0x120717 of _0x5ac398){_0x120717&&_0x120717[_0x1c17df(0x347)]&&_0x120717['\x62\x69\x74\x6d\x61\x70'][_0x1c17df(0x37b)]();}},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x1d6)]=Window_Scrollable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x8fc)],Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x279a1f=_0x23b15a;VisuMZ[_0x279a1f(0x7db)][_0x279a1f(0x1d6)][_0x279a1f(0x744)](this),this[_0x279a1f(0x5a1)]();},Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x5a1)]=function(){const _0x47d212=_0x23b15a;this['\x75\x70\x64\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79'](),this[_0x47d212(0x645)](!![]),this[_0x47d212(0x645)](![]),this[_0x47d212(0x7da)](!![]),this[_0x47d212(0x7da)](![]);},Window_Scrollable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x2ae)]=function(){const _0x2443ad=_0x23b15a,_0x278439=[this['\x5f\x73\x63\x72\x6f\x6c\x6c\x42\x61\x72\x48\x6f\x72\x7a'],this[_0x2443ad(0x346)]];for(const _0x4068f5 of _0x278439){_0x4068f5&&(_0x4068f5[_0x2443ad(0x44b)]=this[_0x2443ad(0x561)]()&&this['\x69\x73\x4f\x70\x65\x6e']());}},Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x645)]=function(_0x182198){const _0x5151b8=_0x23b15a;if(!this[_0x5151b8(0x7e1)])return;const _0x5dccf2=this[_0x5151b8(0x4ee)](_0x182198),_0x1f8363=this['\x6d\x61\x78\x53\x63\x72\x6f\x6c\x6c\x62\x61\x72'](_0x182198),_0x2aeb62=_0x182198?_0x5151b8(0x545):'\x76\x65\x72\x74',_0x274341=_0x182198?_0x5151b8(0x300):_0x5151b8(0x223);(this['\x5f\x6c\x61\x73\x74\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x61\x6c\x75\x65\x73'][_0x2aeb62]!==_0x5dccf2||this['\x5f\x6c\x61\x73\x74\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x61\x6c\x75\x65\x73'][_0x274341]!==_0x1f8363)&&(this[_0x5151b8(0x7e1)][_0x2aeb62]=_0x5dccf2,this[_0x5151b8(0x7e1)][_0x274341]=_0x1f8363,this[_0x5151b8(0x8dd)](_0x182198,_0x5dccf2,_0x1f8363));},Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x4ee)]=function(_0x59baa5){const _0x516a30=_0x23b15a;if(this[_0x516a30(0x802)]!==undefined)return _0x59baa5?this[_0x516a30(0x8bd)]():this[_0x516a30(0x549)]['\x79'];return _0x59baa5?this['\x73\x63\x72\x6f\x6c\x6c\x58']():this[_0x516a30(0x4bf)]();},Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x90e)]=function(_0x5a4b4a){const _0x3edbb2=_0x23b15a;if(this[_0x3edbb2(0x802)]!==undefined)return _0x5a4b4a?this[_0x3edbb2(0x124)]():Math['\x6d\x61\x78'](0x0,this[_0x3edbb2(0x802)]-this['\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74']);return _0x5a4b4a?this[_0x3edbb2(0x124)]():this['\x6d\x61\x78\x53\x63\x72\x6f\x6c\x6c\x59']();},Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x8ce)]=function(){const _0x51b5b6=_0x23b15a;if(this[_0x51b5b6(0x802)]!==undefined)return Math['\x6d\x61\x78'](0x0,this[_0x51b5b6(0x802)]);return this[_0x51b5b6(0x318)]();},Window_Scrollable[_0x23b15a(0x8ea)][_0x23b15a(0x8dd)]=function(_0x3807a7,_0x26e731,_0x23cc90){const _0x2b53fb=_0x23b15a,_0x262dbf=_0x3807a7?this[_0x2b53fb(0x52f)]:this[_0x2b53fb(0x346)];if(!_0x262dbf)return;if(!_0x262dbf[_0x2b53fb(0x347)])return;const _0x45d167=_0x262dbf[_0x2b53fb(0x347)];_0x45d167[_0x2b53fb(0x8cf)]();if(_0x23cc90<=0x0)return;const _0x1c2ffd=_0x3807a7?this[_0x2b53fb(0x4ba)]/this['\x6f\x76\x65\x72\x61\x6c\x6c\x57\x69\x64\x74\x68']():this[_0x2b53fb(0x312)]/this[_0x2b53fb(0x8ce)](),_0x272a1b=_0x3807a7?Math[_0x2b53fb(0x38b)](_0x26e731*_0x1c2ffd):0x0,_0x2ddca0=_0x3807a7?0x0:Math[_0x2b53fb(0x38b)](_0x26e731*_0x1c2ffd),_0x42eb42=_0x3807a7?Math[_0x2b53fb(0x38b)](_0x45d167[_0x2b53fb(0x3e2)]*_0x1c2ffd):_0x45d167[_0x2b53fb(0x3e2)],_0x1d56be=_0x3807a7?_0x45d167[_0x2b53fb(0x92d)]:Math[_0x2b53fb(0x38b)](_0x45d167[_0x2b53fb(0x92d)]*_0x1c2ffd),_0x3715ba=Window_Scrollable['\x53\x43\x52\x4f\x4c\x4c\x42\x41\x52'],_0x1047a4=ColorManager[_0x2b53fb(0x78e)](_0x3715ba[_0x2b53fb(0x6ae)]),_0x2ff9ea=ColorManager['\x67\x65\x74\x43\x6f\x6c\x6f\x72'](_0x3715ba['\x62\x6f\x64\x79\x43\x6f\x6c\x6f\x72']),_0x26bee5=_0x3715ba['\x6f\x66\x66\x4f\x70\x61\x63\x69\x74\x79'];_0x45d167['\x70\x61\x69\x6e\x74\x4f\x70\x61\x63\x69\x74\x79']=_0x26bee5,_0x45d167[_0x2b53fb(0x62d)](_0x1047a4),_0x45d167[_0x2b53fb(0x288)]=0xff,_0x45d167['\x66\x69\x6c\x6c\x52\x65\x63\x74'](_0x272a1b,_0x2ddca0,_0x42eb42,_0x1d56be,_0x2ff9ea);},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x7da)]=function(_0xd99194){const _0x19c0eb=_0x23b15a,_0x36f9bf=_0xd99194?this[_0x19c0eb(0x52f)]:this[_0x19c0eb(0x346)];if(!_0x36f9bf)return;const _0x5b9ed3=Window_Scrollable[_0x19c0eb(0x78b)],_0x216e6a=_0x5b9ed3[_0x19c0eb(0x57b)],_0x5e6cb1=_0x5b9ed3[_0x19c0eb(0x912)];if(!_0x36f9bf[_0x19c0eb(0x1d3)])return;_0x36f9bf['\x78']=this[_0x19c0eb(0x299)]+(_0xd99194?_0x216e6a:this[_0x19c0eb(0x4ba)]+_0x5e6cb1),_0x36f9bf['\x79']=this[_0x19c0eb(0x299)]+(_0xd99194?this[_0x19c0eb(0x312)]+_0x5e6cb1:_0x216e6a);},Window_Selectable[_0x23b15a(0x8ea)]['\x63\x75\x72\x73\x6f\x72\x44\x6f\x77\x6e']=function(_0x238e0a){const _0x1ca24a=_0x23b15a;let _0x2ac7f1=this[_0x1ca24a(0x619)]();const _0x1fb193=this[_0x1ca24a(0x2fe)](),_0x49402e=this[_0x1ca24a(0x388)]();if(this[_0x1ca24a(0x81e)]()&&(_0x2ac7f1<_0x1fb193||_0x238e0a&&_0x49402e===0x1))_0x2ac7f1+=_0x49402e,_0x2ac7f1>=_0x1fb193&&(_0x2ac7f1=_0x1fb193-0x1),this[_0x1ca24a(0x129)](_0x2ac7f1);else!this[_0x1ca24a(0x81e)]()&&((_0x2ac7f1<_0x1fb193-_0x49402e||_0x238e0a&&_0x49402e===0x1)&&this[_0x1ca24a(0x129)]((_0x2ac7f1+_0x49402e)%_0x1fb193));},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x4f5)]=Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x5ff)],Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x5ff)]=function(_0x4ea119){const _0x5da1c5=_0x23b15a;this[_0x5da1c5(0x81e)]()&&_0x4ea119&&this[_0x5da1c5(0x388)]()===0x1&&this[_0x5da1c5(0x619)]()===this[_0x5da1c5(0x2fe)]()-0x1?this[_0x5da1c5(0x129)](0x0):VisuMZ[_0x5da1c5(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x63\x75\x72\x73\x6f\x72\x44\x6f\x77\x6e'][_0x5da1c5(0x744)](this,_0x4ea119);},Window_Selectable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x71e)]=function(_0xe1cd54){const _0x2b48cc=_0x23b15a;let _0x3f813e=Math[_0x2b48cc(0x52a)](0x0,this[_0x2b48cc(0x619)]());const _0x1b6ab9=this[_0x2b48cc(0x2fe)](),_0x20fcb2=this[_0x2b48cc(0x388)]();if(this[_0x2b48cc(0x81e)]()&&_0x3f813e>0x0||_0xe1cd54&&_0x20fcb2===0x1)_0x3f813e-=_0x20fcb2,_0x3f813e<=0x0&&(_0x3f813e=0x0),this[_0x2b48cc(0x129)](_0x3f813e);else!this[_0x2b48cc(0x81e)]()&&((_0x3f813e>=_0x20fcb2||_0xe1cd54&&_0x20fcb2===0x1)&&this['\x73\x6d\x6f\x6f\x74\x68\x53\x65\x6c\x65\x63\x74']((_0x3f813e-_0x20fcb2+_0x1b6ab9)%_0x1b6ab9));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x8e9)]=Window_Selectable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x71e)],Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x71e)]=function(_0x48e134){const _0x1abc34=_0x23b15a;this['\x69\x73\x55\x73\x65\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73']()&&_0x48e134&&this[_0x1abc34(0x388)]()===0x1&&this[_0x1abc34(0x619)]()===0x0?this[_0x1abc34(0x129)](this[_0x1abc34(0x2fe)]()-0x1):VisuMZ[_0x1abc34(0x7db)][_0x1abc34(0x8e9)]['\x63\x61\x6c\x6c'](this,_0x48e134);},Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x81e)]=function(){const _0x1a4c33=_0x23b15a;return VisuMZ[_0x1a4c33(0x7db)][_0x1a4c33(0x742)]['\x51\x6f\x4c']['\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73'];},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x5b9)]=Window_Selectable[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x65'],Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x8bc)]=function(){const _0x277e94=_0x23b15a;this[_0x277e94(0x81e)]()?(this['\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x65\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73'](),this[_0x277e94(0x4a1)]()):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x277e94(0x5b9)][_0x277e94(0x744)](this);},Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x152)]=function(){return!![];},Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x297)]=function(){const _0x59f349=_0x23b15a;if(this['\x69\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x61\x62\x6c\x65']()){const _0x33fca6=this[_0x59f349(0x619)]();Input[_0x59f349(0x92c)](_0x59f349(0x5c2))&&(Input[_0x59f349(0x826)]('\x73\x68\x69\x66\x74')&&this[_0x59f349(0x152)]()?this[_0x59f349(0x395)]():this[_0x59f349(0x5ff)](Input[_0x59f349(0x304)](_0x59f349(0x5c2)))),Input[_0x59f349(0x92c)]('\x75\x70')&&(Input[_0x59f349(0x826)](_0x59f349(0x27a))&&this[_0x59f349(0x152)]()?this[_0x59f349(0x582)]():this[_0x59f349(0x71e)](Input[_0x59f349(0x304)]('\x75\x70'))),Input[_0x59f349(0x92c)](_0x59f349(0x85e))&&this[_0x59f349(0x886)](Input[_0x59f349(0x304)](_0x59f349(0x85e))),Input[_0x59f349(0x92c)](_0x59f349(0x87d))&&this['\x63\x75\x72\x73\x6f\x72\x4c\x65\x66\x74'](Input['\x69\x73\x54\x72\x69\x67\x67\x65\x72\x65\x64'](_0x59f349(0x87d))),!this['\x69\x73\x48\x61\x6e\x64\x6c\x65\x64'](_0x59f349(0x1b5))&&Input[_0x59f349(0x92c)]('\x70\x61\x67\x65\x64\x6f\x77\x6e')&&this['\x63\x75\x72\x73\x6f\x72\x50\x61\x67\x65\x64\x6f\x77\x6e'](),!this[_0x59f349(0x4b1)](_0x59f349(0x25b))&&Input[_0x59f349(0x92c)]('\x70\x61\x67\x65\x75\x70')&&this[_0x59f349(0x582)](),this['\x69\x6e\x64\x65\x78']()!==_0x33fca6&&this[_0x59f349(0x5b1)]();}},Window_Selectable[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x48\x6f\x6d\x65\x45\x6e\x64\x54\x72\x69\x67\x67\x65\x72']=function(){const _0x2174de=_0x23b15a;if(this['\x69\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x61\x62\x6c\x65']()){const _0x5d8230=this[_0x2174de(0x619)]();Input[_0x2174de(0x304)](_0x2174de(0x3ef))&&this[_0x2174de(0x129)](Math['\x6d\x69\x6e'](this[_0x2174de(0x619)](),0x0)),Input[_0x2174de(0x304)](_0x2174de(0x257))&&this['\x73\x6d\x6f\x6f\x74\x68\x53\x65\x6c\x65\x63\x74'](Math[_0x2174de(0x52a)](this[_0x2174de(0x619)](),this[_0x2174de(0x2fe)]()-0x1)),this[_0x2174de(0x619)]()!==_0x5d8230&&this[_0x2174de(0x5b1)]();}},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x422)]=Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x213)],Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x213)]=function(){const _0x90f5ad=_0x23b15a;this['\x69\x73\x55\x73\x65\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73']()?this[_0x90f5ad(0x35c)]():VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x90f5ad(0x422)][_0x90f5ad(0x744)](this);},Window_Selectable[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73']=function(){const _0xe2cd7b=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0xe2cd7b(0x422)]['\x63\x61\x6c\x6c'](this);},Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x1ef)]=function(){const _0x1ca40f=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1ca40f(0x742)]['\x57\x69\x6e\x64\x6f\x77'][_0x1ca40f(0x488)];},Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x34b)]=function(){const _0x5b9655=_0x23b15a;return VisuMZ[_0x5b9655(0x7db)][_0x5b9655(0x742)][_0x5b9655(0x4c2)]['\x52\x6f\x77\x53\x70\x61\x63\x69\x6e\x67'];},Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x135)]=function(){const _0x52e9ae=_0x23b15a;return Window_Scrollable[_0x52e9ae(0x8ea)][_0x52e9ae(0x135)][_0x52e9ae(0x744)](this)+VisuMZ[_0x52e9ae(0x7db)][_0x52e9ae(0x742)][_0x52e9ae(0x4c2)][_0x52e9ae(0x26f)];;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x7f4)]=Window_Selectable[_0x23b15a(0x8ea)][_0x23b15a(0x74c)],Window_Selectable[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x52\x65\x63\x74']=function(_0x22e32c){const _0x586925=_0x23b15a,_0x3d77e3=VisuMZ[_0x586925(0x7db)][_0x586925(0x742)][_0x586925(0x4c2)];if(_0x3d77e3['\x53\x68\x6f\x77\x49\x74\x65\x6d\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64']===![])return;_0x3d77e3[_0x586925(0x4cc)]?_0x3d77e3[_0x586925(0x4cc)][_0x586925(0x744)](this,_0x22e32c):VisuMZ[_0x586925(0x7db)][_0x586925(0x7f4)][_0x586925(0x744)](this,_0x22e32c);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x1e1)]=Window_Gold[_0x23b15a(0x8ea)]['\x72\x65\x66\x72\x65\x73\x68'],Window_Gold['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x308)]=function(){const _0x2a81e6=_0x23b15a;this[_0x2a81e6(0x311)]()?this['\x64\x72\x61\x77\x47\x6f\x6c\x64\x49\x74\x65\x6d\x53\x74\x79\x6c\x65']():VisuMZ[_0x2a81e6(0x7db)][_0x2a81e6(0x1e1)][_0x2a81e6(0x744)](this);},Window_Gold['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x311)]=function(){const _0x70690d=_0x23b15a;if(TextManager[_0x70690d(0x2be)]!==this[_0x70690d(0x2be)]())return![];return VisuMZ[_0x70690d(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x70690d(0x513)][_0x70690d(0x92a)];},Window_Gold[_0x23b15a(0x8ea)][_0x23b15a(0x3e6)]=function(){const _0x2ed694=_0x23b15a;this[_0x2ed694(0x161)](),this['\x63\x6f\x6e\x74\x65\x6e\x74\x73'][_0x2ed694(0x8cf)](),this['\x63\x6f\x6e\x74\x65\x6e\x74\x73'][_0x2ed694(0x71b)]=VisuMZ[_0x2ed694(0x7db)][_0x2ed694(0x742)][_0x2ed694(0x513)][_0x2ed694(0x2e3)];const _0x12c558=VisuMZ[_0x2ed694(0x7db)][_0x2ed694(0x742)]['\x47\x6f\x6c\x64'][_0x2ed694(0x485)],_0x3823c6=this['\x69\x74\x65\x6d\x4c\x69\x6e\x65\x52\x65\x63\x74'](0x0);if(_0x12c558>0x0){const _0x345e25=ImageManager['\x73\x74\x61\x6e\x64\x61\x72\x64\x49\x63\x6f\x6e\x57\x69\x64\x74\x68']||0x20,_0x4104c8=_0x345e25-ImageManager[_0x2ed694(0x15f)],_0x25de5e=_0x3823c6['\x79']+(this[_0x2ed694(0x32b)]()-ImageManager[_0x2ed694(0x698)])/0x2;this[_0x2ed694(0x3bd)](_0x12c558,_0x3823c6['\x78']+Math[_0x2ed694(0x643)](_0x4104c8/0x2),_0x25de5e);const _0x269c49=_0x345e25+0x4;_0x3823c6['\x78']+=_0x269c49,_0x3823c6[_0x2ed694(0x3e2)]-=_0x269c49;}this[_0x2ed694(0x778)](ColorManager[_0x2ed694(0x8a4)]()),this['\x64\x72\x61\x77\x54\x65\x78\x74'](this[_0x2ed694(0x2be)](),_0x3823c6['\x78'],_0x3823c6['\x79'],_0x3823c6[_0x2ed694(0x3e2)],_0x2ed694(0x87d));const _0x585646=this[_0x2ed694(0x412)](this[_0x2ed694(0x2be)]())+0x6;;_0x3823c6['\x78']+=_0x585646,_0x3823c6['\x77\x69\x64\x74\x68']-=_0x585646,this[_0x2ed694(0x60a)]();const _0x1213ab=this[_0x2ed694(0x412)](this[_0x2ed694(0x866)]?VisuMZ[_0x2ed694(0x823)](this[_0x2ed694(0x415)]()):this[_0x2ed694(0x415)]());_0x1213ab>_0x3823c6[_0x2ed694(0x3e2)]?this['\x64\x72\x61\x77\x54\x65\x78\x74'](VisuMZ[_0x2ed694(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x2ed694(0x513)][_0x2ed694(0x86d)],_0x3823c6['\x78'],_0x3823c6['\x79'],_0x3823c6[_0x2ed694(0x3e2)],_0x2ed694(0x85e)):this[_0x2ed694(0x6a3)](this[_0x2ed694(0x415)](),_0x3823c6['\x78'],_0x3823c6['\x79'],_0x3823c6[_0x2ed694(0x3e2)],_0x2ed694(0x85e)),this['\x72\x65\x73\x65\x74\x46\x6f\x6e\x74\x53\x65\x74\x74\x69\x6e\x67\x73']();},Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x468)]=function(_0x14290a,_0x670941,_0x51bf71,_0x38bc05,_0x44262e){const _0x1c2e4d=_0x23b15a;_0x38bc05=String(_0x38bc05||'')['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']();if(VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x1c2e4d(0x39c)][_0x1c2e4d(0x861)]){const _0x485450=VisuMZ[_0x1c2e4d(0x906)](_0x38bc05);if(_0x44262e)this[_0x1c2e4d(0x371)](_0x485450,_0x14290a,_0x670941,this[_0x1c2e4d(0x635)]()),_0x51bf71-=this[_0x1c2e4d(0x635)]()+0x2,_0x14290a+=this[_0x1c2e4d(0x635)]()+0x2;else{const _0x5c97bf=ImageManager['\x73\x74\x61\x6e\x64\x61\x72\x64\x49\x63\x6f\x6e\x57\x69\x64\x74\x68']||0x20,_0x1d868c=ImageManager['\x73\x74\x61\x6e\x64\x61\x72\x64\x49\x63\x6f\x6e\x48\x65\x69\x67\x68\x74']||0x20,_0x10ba9e=_0x5c97bf-ImageManager[_0x1c2e4d(0x15f)],_0x112432=_0x1d868c-ImageManager[_0x1c2e4d(0x698)];let _0x3b5761=0x2;this[_0x1c2e4d(0x32b)]()!==0x24&&(_0x3b5761=Math[_0x1c2e4d(0x8ff)]((this[_0x1c2e4d(0x32b)]()-_0x1d868c)/0x2));const _0x4a495d=_0x14290a+Math[_0x1c2e4d(0x8ff)](_0x10ba9e/0x2)+0x2,_0x592087=_0x670941+Math[_0x1c2e4d(0x8ff)](_0x112432/0x2)+_0x3b5761;this[_0x1c2e4d(0x3bd)](_0x485450,_0x4a495d,_0x592087),_0x51bf71-=_0x5c97bf+0x4,_0x14290a+=_0x5c97bf+0x4;}}const _0x570ae8=TextManager[_0x1c2e4d(0x3a2)](_0x38bc05);this['\x72\x65\x73\x65\x74\x46\x6f\x6e\x74\x53\x65\x74\x74\x69\x6e\x67\x73'](),this[_0x1c2e4d(0x778)](ColorManager[_0x1c2e4d(0x8a4)]()),_0x44262e?(this[_0x1c2e4d(0x4e4)][_0x1c2e4d(0x71b)]=this[_0x1c2e4d(0x7a4)](),this['\x63\x6f\x6e\x74\x65\x6e\x74\x73'][_0x1c2e4d(0x6a3)](_0x570ae8,_0x14290a,_0x670941,_0x51bf71,this[_0x1c2e4d(0x635)](),_0x1c2e4d(0x87d))):this[_0x1c2e4d(0x6a3)](_0x570ae8,_0x14290a,_0x670941,_0x51bf71),this['\x72\x65\x73\x65\x74\x46\x6f\x6e\x74\x53\x65\x74\x74\x69\x6e\x67\x73']();},Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x7a4)]=function(){const _0x2b6a96=_0x23b15a;return $gameSystem[_0x2b6a96(0x35d)]()-0x8;},Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x803)]=function(_0x1164f9,_0x12e98f,_0x1e869d,_0x3d244f){const _0xdbf357=_0x23b15a;_0x3d244f=_0x3d244f||0xa8,this['\x72\x65\x73\x65\x74\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72']();if(VisuMZ[_0xdbf357(0x7db)][_0xdbf357(0x742)]['\x55\x49'][_0xdbf357(0x7e7)])this[_0xdbf357(0x2de)](_0x1164f9[_0xdbf357(0x25c)]()[_0xdbf357(0x5f0)],_0x12e98f,_0x1e869d,_0x3d244f);else{const _0x7a643=_0x1164f9[_0xdbf357(0x25c)]()[_0xdbf357(0x5f0)][_0xdbf357(0x36c)](/\\I\[(\d+)\]/gi,'');this[_0xdbf357(0x6a3)](_0x7a643,_0x12e98f,_0x1e869d,_0x3d244f);}},Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x5d2)]=function(_0x3bc616,_0x2f4588,_0x395117,_0x29c410){const _0xf3f267=_0x23b15a;_0x29c410=_0x29c410||0x10e,this[_0xf3f267(0x60a)](),VisuMZ[_0xf3f267(0x7db)][_0xf3f267(0x742)]['\x55\x49'][_0xf3f267(0x7ad)]?this[_0xf3f267(0x2de)](_0x3bc616['\x6e\x69\x63\x6b\x6e\x61\x6d\x65'](),_0x2f4588,_0x395117,_0x29c410):this[_0xf3f267(0x6a3)](_0x3bc616[_0xf3f267(0x137)](),_0x2f4588,_0x395117,_0x29c410);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x789)]=Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x61d)],Window_StatusBase[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x4c\x65\x76\x65\x6c']=function(_0xd4f0d4,_0x2933ea,_0x3f7c0e){const _0x374eea=_0x23b15a;if(VisuMZ[_0x374eea(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x374eea(0x39c)][_0x374eea(0x3a1)]===![])return;this[_0x374eea(0x936)]()&&this[_0x374eea(0x4de)](_0xd4f0d4,_0x2933ea,_0x3f7c0e),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x57\x69\x6e\x64\x6f\x77\x5f\x53\x74\x61\x74\x75\x73\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x4c\x65\x76\x65\x6c'][_0x374eea(0x744)](this,_0xd4f0d4,_0x2933ea,_0x3f7c0e);},Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x936)]=function(){const _0x28588e=_0x23b15a;return VisuMZ[_0x28588e(0x7db)][_0x28588e(0x742)]['\x55\x49'][_0x28588e(0x6cd)];},Window_StatusBase[_0x23b15a(0x8ea)][_0x23b15a(0x4de)]=function(_0x573c01,_0x4c9779,_0x123972){const _0x4c6abc=_0x23b15a;if(!_0x573c01)return;if(!_0x573c01['\x69\x73\x41\x63\x74\x6f\x72']())return;const _0x49b778=_0x573c01[_0x4c6abc(0x6cb)]();let _0x507ace=ColorManager['\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31'](),_0x8971fb=ColorManager[_0x4c6abc(0x6f2)]();_0x49b778>=0x1&&(_0x507ace=ColorManager[_0x4c6abc(0x4d1)](),_0x8971fb=ColorManager[_0x4c6abc(0x5c3)]()),this[_0x4c6abc(0x27e)](_0x4c9779,_0x123972,0x80,_0x49b778,_0x507ace,_0x8971fb);},Window_EquipStatus[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x41\x6c\x6c\x50\x61\x72\x61\x6d\x73']=function(){const _0x1e87ff=_0x23b15a;let _0x209c73=0x0;for(const _0x2ff035 of VisuMZ[_0x1e87ff(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x1e87ff(0x39c)][_0x1e87ff(0x208)]){const _0x54337a=this[_0x1e87ff(0x449)](),_0x361b7c=this['\x70\x61\x72\x61\x6d\x59'](_0x209c73);this[_0x1e87ff(0x3a4)](_0x54337a,_0x361b7c,_0x2ff035),_0x209c73++;}},Window_EquipStatus['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x43a)]=function(_0x30c4e9,_0x4f92ee,_0x1b067e){const _0x6e4918=_0x23b15a,_0x1c2aa7=this[_0x6e4918(0x40d)]()-this[_0x6e4918(0x449)]()*0x2;this[_0x6e4918(0x468)](_0x30c4e9,_0x4f92ee,_0x1c2aa7,_0x1b067e,![]);},Window_EquipStatus[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x43\x75\x72\x72\x65\x6e\x74\x50\x61\x72\x61\x6d']=function(_0x228666,_0x4a8e53,_0x3476ce){const _0x33af76=_0x23b15a,_0xa0a7aa=this[_0x33af76(0x7b8)]();this[_0x33af76(0x60a)](),this[_0x33af76(0x6a3)](this[_0x33af76(0x284)][_0x33af76(0x15c)](_0x3476ce,!![]),_0x228666,_0x4a8e53,_0xa0a7aa,_0x33af76(0x85e));},Window_EquipStatus[_0x23b15a(0x8ea)]['\x64\x72\x61\x77\x52\x69\x67\x68\x74\x41\x72\x72\x6f\x77']=function(_0x2febf8,_0x3a3333){const _0x4dd062=_0x23b15a,_0xf3fb98=this[_0x4dd062(0x1de)]();this[_0x4dd062(0x778)](ColorManager[_0x4dd062(0x8a4)]());const _0x11d4b4=VisuMZ[_0x4dd062(0x7db)][_0x4dd062(0x742)]['\x55\x49'][_0x4dd062(0x6e3)];this[_0x4dd062(0x6a3)](_0x11d4b4,_0x2febf8,_0x3a3333,_0xf3fb98,_0x4dd062(0x387));},Window_EquipStatus[_0x23b15a(0x8ea)][_0x23b15a(0x777)]=function(_0x50a614,_0x32332f,_0x516e53){const _0x3674ae=_0x23b15a,_0x38bef3=this[_0x3674ae(0x7b8)](),_0x209138=this[_0x3674ae(0x3f3)][_0x3674ae(0x15c)](_0x516e53),_0x489c43=_0x209138-this[_0x3674ae(0x284)][_0x3674ae(0x15c)](_0x516e53);this[_0x3674ae(0x778)](ColorManager[_0x3674ae(0x4f4)](_0x489c43)),this[_0x3674ae(0x6a3)](this[_0x3674ae(0x3f3)][_0x3674ae(0x15c)](_0x516e53,!![]),_0x50a614,_0x32332f,_0x38bef3,'\x72\x69\x67\x68\x74');},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x360)]=Window_EquipItem[_0x23b15a(0x8ea)]['\x69\x73\x45\x6e\x61\x62\x6c\x65\x64'],Window_EquipItem[_0x23b15a(0x8ea)][_0x23b15a(0x676)]=function(_0x4e985a){const _0x442b95=_0x23b15a;return _0x4e985a&&this[_0x442b95(0x284)]?this[_0x442b95(0x284)][_0x442b95(0x71d)](_0x4e985a):VisuMZ[_0x442b95(0x7db)][_0x442b95(0x360)][_0x442b95(0x744)](this,_0x4e985a);},Window_StatusParams[_0x23b15a(0x8ea)]['\x6d\x61\x78\x49\x74\x65\x6d\x73']=function(){const _0x10728b=_0x23b15a;return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x10728b(0x742)]['\x50\x61\x72\x61\x6d'][_0x10728b(0x208)][_0x10728b(0x699)];},Window_StatusParams['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3a4)]=function(_0x2fdc0c){const _0x49b9fa=_0x23b15a,_0x1210ea=this['\x69\x74\x65\x6d\x4c\x69\x6e\x65\x52\x65\x63\x74'](_0x2fdc0c),_0x5479d3=VisuMZ[_0x49b9fa(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x49b9fa(0x39c)][_0x49b9fa(0x208)][_0x2fdc0c],_0x19d3f5=this[_0x49b9fa(0x284)][_0x49b9fa(0x15c)](_0x5479d3,!![]);this[_0x49b9fa(0x468)](_0x1210ea['\x78'],_0x1210ea['\x79'],0xa0,_0x5479d3,![]),this[_0x49b9fa(0x60a)](),this['\x64\x72\x61\x77\x54\x65\x78\x74'](_0x19d3f5,_0x1210ea['\x78']+0xa0,_0x1210ea['\x79'],0x3c,'\x72\x69\x67\x68\x74');};function _0x3a5c(){const _0x3a6650=['\x5f\x69\x6e\x70\x75\x74\x57\x69\x6e\x64\x6f\x77','\x6c\x6f\x61\x64\x57\x69\x6e\x64\x6f\x77\x73\x6b\x69\x6e','\x50\x69\x63\x74\x75\x72\x65\x49\x44','\x73\x77\x69\x74\x63\x68\x4d\x6f\x64\x65\x73','\x54\x52\x47','\x47\x61\x6d\x65\x45\x6e\x64','\x64\x72\x61\x77\x4e\x65\x77\x50\x61\x72\x61\x6d','\x63\x68\x61\x6e\x67\x65\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72','\x74\x65\x72\x6d\x73','\x73\x75\x62\x74\x69\x74\x6c\x65','\x75\x73\x65\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x45\x78','\x6c\x6f\x61\x64\x4d\x61\x70\x44\x61\x74\x61','\x47\x6f\x6c\x64\x42\x67\x54\x79\x70\x65','\x75\x70\x64\x61\x74\x65\x53\x63\x65\x6e\x65','\x47\x61\x6d\x65\x5f\x54\x72\x6f\x6f\x70\x5f\x73\x65\x74\x75\x70','\x74\x70\x43\x6f\x6c\x6f\x72','\x4c\x45\x46\x54','\x61\x6c\x69\x67\x6e\x42\x6f\x74\x74\x6f\x6d','\x4f\x70\x74\x69\x6f\x6e\x73\x42\x67\x54\x79\x70\x65','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x66\x66\x73\x65\x74\x31','\x45\x78\x70\x6f\x72\x74\x65\x64\x5f\x53\x63\x72\x69\x70\x74\x5f\x25\x31\x2e\x74\x78\x74','\x63\x68\x65\x63\x6b\x50\x6c\x61\x79\x65\x72\x4c\x6f\x63\x61\x74\x69\x6f\x6e','\x6d\x61\x6b\x65\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x43\x6f\x75\x6e\x74','\x5f\x74\x69\x6c\x65','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x74\x61\x74\x75\x73\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x4c\x65\x76\x65\x6c','\x72\x65\x63\x6f\x76\x65\x72\x41\x6c\x6c','\x53\x43\x52\x4f\x4c\x4c\x42\x41\x52','\x42\x54\x65\x73\x74\x49\x74\x65\x6d\x73','\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x4f\x70\x61\x63\x69\x74\x79','\x67\x65\x74\x43\x6f\x6c\x6f\x72','\x69\x74\x79\x70\x65\x49\x64','\x65\x6e\x61\x62\x6c\x65\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67','\x63\x61\x6e\x63\x65\x6c','\x44\x65\x74\x61\x63\x68\x42\x61\x74\x74\x6c\x65\x50\x69\x63\x74\x75\x72\x65\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x6d\x61\x78\x56\x69\x73\x69\x62\x6c\x65\x49\x74\x65\x6d\x73','\x76\x65\x72\x74\x69\x63\x61\x6c','\x43\x6f\x6c\x6f\x72\x4d\x50\x43\x6f\x73\x74','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x46\x4a\x5f\x52\x4f\x59\x41','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x70\x43\x6f\x73\x74\x43\x6f\x6c\x6f\x72','\x5f\x73\x65\x6c\x6c\x57\x69\x6e\x64\x6f\x77','\x69\x6e\x69\x74\x4d\x65\x6d\x62\x65\x72\x73','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x73\x63\x61\x6c\x65\x59','\x43\x6f\x6c\x6f\x72\x54\x50\x47\x61\x75\x67\x65\x32','\x4c\x69\x73\x74\x52\x65\x63\x74','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x34','\x68\x6f\x72\x69\x7a\x6f\x6e\x74\x61\x6c','\x50\x52\x45\x53\x45\x52\x56\x43\x4f\x4e\x56\x45\x52\x53\x49\x4f\x4e\x28\x25\x31\x29','\x63\x6f\x6d\x6d\x61\x6e\x64\x33\x35\x35','\x53\x54\x52','\x5f\x74\x61\x72\x67\x65\x74\x73','\x69\x73\x43\x6c\x6f\x73\x69\x6e\x67','\x73\x6d\x61\x6c\x6c\x50\x61\x72\x61\x6d\x46\x6f\x6e\x74\x53\x69\x7a\x65','\x64\x72\x61\x77\x47\x61\x6d\x65\x54\x69\x74\x6c\x65','\x63\x72\x65\x61\x74\x65\x43\x6f\x6e\x74\x65\x6e\x74\x73','\x61\x64\x6a\x75\x73\x74\x59','\x63\x68\x65\x63\x6b\x53\x6d\x61\x72\x74\x45\x76\x65\x6e\x74\x43\x6f\x6c\x6c\x69\x73\x69\x6f\x6e','\x41\x4d\x50\x45\x52\x53\x41\x4e\x44','\x6e\x6f\x6e\x65','\x53\x63\x65\x6e\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x65\x78\x69\x74','\x72\x65\x67\x69\x73\x74\x65\x72\x43\x6f\x6d\x6d\x61\x6e\x64','\x54\x65\x78\x74\x43\x6f\x64\x65\x4e\x69\x63\x6b\x6e\x61\x6d\x65\x73','\x69\x73\x42\x6f\x74\x74\x6f\x6d\x42\x75\x74\x74\x6f\x6e\x4d\x6f\x64\x65','\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x73','\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74\x57\x69\x64\x74\x68\x4e\x6f\x52\x6f\x75\x6e\x64\x69\x6e\x67','\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x42\x61\x72\x54\x68\x69\x63\x6b\x6e\x65\x73\x73','\x49\x6e\x70\x75\x74\x5f\x73\x65\x74\x75\x70\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72\x73','\x31\x2e\x34\x2e\x34','\x73\x74\x61\x72\x74\x4d\x6f\x76\x65','\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x65\x74\x44\x69\x73\x70\x6c\x61\x79\x50\x6f\x73','\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x63\x72\x6f\x6c\x6c\x44\x6f\x77\x6e','\x70\x61\x72\x61\x6d\x57\x69\x64\x74\x68','\x45\x54\x42','\x50\x72\x6f\x66\x69\x6c\x65\x42\x67\x54\x79\x70\x65','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x53\x54\x42','\x5f\x63\x75\x73\x74\x6f\x6d\x4d\x6f\x64\x69\x66\x69\x65\x64','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x31','\x72\x65\x6d\x6f\x76\x65\x41\x6c\x6c\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x61\x72\x65\x50\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x73\x45\x6e\x61\x62\x6c\x65\x64','\x5f\x74\x61\x72\x67\x65\x74\x41\x6e\x63\x68\x6f\x72','\x53\x68\x69\x66\x74\x52\x5f\x54\x6f\x67\x67\x6c\x65','\x62\x69\x74\x6d\x61\x70\x57\x69\x64\x74\x68','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x32','\x5f\x70\x6f\x6c\x6c\x47\x61\x6d\x65\x70\x61\x64\x73','\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x5f\x63\x72\x65\x61\x74\x65','\x6e\x75\x6d\x41\x63\x74\x69\x6f\x6e\x73','\x53\x79\x73\x74\x65\x6d\x53\x65\x74\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x30\x2e\x30\x30','\x63\x68\x65\x63\x6b\x50\x61\x73\x73\x61\x67\x65','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x79','\x5f\x69\x6d\x61\x67\x65','\x6b\x65\x79\x43\x6f\x64\x65','\x5f\x6c\x61\x73\x74\x49\x63\x6f\x6e\x49\x6e\x64\x65\x78','\x53\x63\x65\x6e\x65\x5f\x42\x6f\x6f\x74\x5f\x75\x70\x64\x61\x74\x65\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x69\x74\x6c\x65','\x55\x4e\x44\x45\x52\x53\x43\x4f\x52\x45','\x5f\x74\x69\x6c\x65\x53\x70\x72\x69\x74\x65','\x73\x65\x74\x56\x69\x65\x77\x70\x6f\x72\x74','\x6f\x70\x65\x6e\x55\x52\x4c','\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x32\x32','\x48\x59\x50\x48\x45\x4e\x5f\x4d\x49\x4e\x55\x53','\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x31\x31','\x73\x65\x74\x4c\x61\x73\x74\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72','\x49\x4e\x4f\x55\x54\x42\x41\x43\x4b','\x77\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x75\x70\x64\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x74\x79\x70\x65','\x6d\x61\x6b\x65\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74','\x4e\x55\x4d\x50\x41\x44\x38','\x25\x31\u3018\x43\x68\x6f\x69\x63\x65\x20\x43\x61\x6e\x63\x65\x6c\u3019\x25\x31','\x53\x74\x61\x74\x75\x73\x52\x65\x63\x74','\x5f\x6c\x61\x73\x74\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x61\x6c\x75\x65\x73','\x5f\x70\x61\x75\x73\x65\x53\x69\x67\x6e\x53\x70\x72\x69\x74\x65','\x53\x54\x42','\x43\x6f\x6e\x74\x72\x6f\x6c\x20\x56\x61\x72\x69\x61\x62\x6c\x65\x73\x20\x53\x63\x72\x69\x70\x74\x20\x45\x72\x72\x6f\x72','\x74\x65\x78\x74\x41\x6c\x69\x67\x6e','\x61\x6e\x64\x20\x61\x64\x64\x20\x69\x74\x20\x6f\x6e\x74\x6f\x20\x74\x68\x69\x73\x20\x6f\x6e\x65\x2e','\x54\x65\x78\x74\x43\x6f\x64\x65\x43\x6c\x61\x73\x73\x4e\x61\x6d\x65\x73','\x74\x61\x72\x67\x65\x74\x58','\x63\x72\x65\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x46\x31\x30','\x42\x75\x74\x74\x6f\x6e\x48\x65\x69\x67\x68\x74','\x61\x63\x74\x69\x76\x65','\x6d\x61\x6b\x65\x44\x65\x65\x70\x43\x6f\x70\x79','\x4f\x55\x54\x51\x55\x41\x44','\x73\x65\x56\x6f\x6c\x75\x6d\x65','\x64\x72\x61\x77\x47\x61\x6d\x65\x53\x75\x62\x74\x69\x74\x6c\x65','\x43\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x61\x6c\x20\x42\x72\x61\x6e\x63\x68\x20\x53\x63\x72\x69\x70\x74\x20\x45\x72\x72\x6f\x72','\x5f\x74\x61\x72\x67\x65\x74\x58','\x52\x65\x67\x45\x78\x70','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x64\x72\x61\x77\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x52\x65\x63\x74','\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x4d\x6f\x64\x65','\x62\x6f\x78\x48\x65\x69\x67\x68\x74','\x49\x4e\x43\x49\x52\x43','\x5f\x70\x6c\x61\x79\x54\x65\x73\x74\x46\x61\x73\x74\x4d\x6f\x64\x65','\x69\x73\x47\x61\x6d\x65\x70\x61\x64\x41\x78\x69\x73\x4d\x6f\x76\x65\x64','\x6f\x70\x65\x72\x61\x6e\x64','\x53\x63\x72\x69\x70\x74\x20\x43\x61\x6c\x6c\x20\x45\x72\x72\x6f\x72','\x74\x72\x61\x69\x74\x4f\x62\x6a\x65\x63\x74\x73','\x47\x61\x6d\x65\x5f\x42\x61\x74\x74\x6c\x65\x72\x42\x61\x73\x65\x5f\x72\x65\x66\x72\x65\x73\x68','\x49\x74\x65\x6d\x42\x67\x54\x79\x70\x65','\x47\x61\x6d\x65\x5f\x41\x63\x74\x6f\x72\x5f\x63\x68\x61\x6e\x67\x65\x43\x6c\x61\x73\x73','\x70\x61\x72\x61\x6d\x42\x61\x73\x65\x41\x62\x6f\x76\x65\x4c\x65\x76\x65\x6c\x39\x39','\x47\x61\x6d\x65\x5f\x41\x63\x74\x6f\x72\x5f\x6c\x65\x76\x65\x6c\x55\x70','\x5f\x61\x6c\x6c\x54\x65\x78\x74\x48\x65\x69\x67\x68\x74','\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x43\x6c\x61\x73\x73','\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x50\x6f\x70\x75\x70\x57\x69\x6e\x64\x6f\x77','\x54\x69\x6d\x65\x50\x72\x6f\x67\x72\x65\x73\x73','\x70\x61\x72\x73\x65\x46\x6f\x72\x63\x65\x64\x47\x61\x6d\x65\x54\x72\x6f\x6f\x70\x53\x65\x74\x74\x69\x6e\x67\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x54\x72\x6f\x6f\x70','\x61\x63\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x69\x6e\x69\x74\x52\x6f\x74\x61\x74\x69\x6f\x6e','\x73\x75\x62\x6a\x65\x63\x74','\x74\x69\x74\x6c\x65\x73\x32','\x76\x61\x6c\x75\x65\x4f\x75\x74\x6c\x69\x6e\x65\x57\x69\x64\x74\x68','\x6f\x6e\x6c\x79\x66\x69\x6c\x65\x6e\x61\x6d\x65','\x6a\x73\x6f\x6e\x54\x6f\x5a\x69\x70','\x72\x65\x73\x65\x72\x76\x65\x4e\x65\x77\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74','\x53\x45\x50\x41\x52\x41\x54\x4f\x52','\x74\x72\x69\x6d','\x6f\x62\x6a\x65\x63\x74','\x69\x73\x4b\x65\x79\x49\x74\x65\x6d','\x48\x49\x54','\x53\x74\x61\x74\x75\x73\x45\x71\x75\x69\x70\x52\x65\x63\x74','\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e','\x6f\x6e\x58\x68\x72\x45\x72\x72\x6f\x72','\x5f\x63\x75\x72\x72\x65\x6e\x74\x4d\x61\x70','\x62\x6c\x74','\x73\x74\x61\x74\x75\x73','\x74\x65\x78\x74','\x70\x6c\x61\x79\x4c\x6f\x61\x64','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x75\x70\x64\x61\x74\x65\x53\x63\x65\x6e\x65','\x69\x73\x55\x73\x65\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73','\x69\x6e\x70\x75\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x50\x69\x63\x74\x75\x72\x65\x53\x68\x6f\x77\x49\x63\x6f\x6e','\x3c\x4a\x53\x20\x25\x31\x20\x25\x32\x3a\x5b\x20\x5d\x28\x2e\x2a\x29\x3e','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x78','\x47\x72\x6f\x75\x70\x44\x69\x67\x69\x74\x73','\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x65\x78\x74\x44\x65\x6c\x61\x79','\x49\x6e\x70\x75\x74\x5f\x70\x6f\x6c\x6c\x47\x61\x6d\x65\x70\x61\x64\x73','\x69\x73\x50\x72\x65\x73\x73\x65\x64','\x5f\x75\x72\x6c','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x39','\x5f\x65\x66\x66\x65\x63\x74\x73\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x4f\x55\x54\x51\x55\x49\x4e\x54','\x50\x61\x72\x61\x6d\x4d\x61\x78','\x73\x68\x6f\x77','\x6c\x6f\x61\x64\x53\x79\x73\x74\x65\x6d','\x53\x63\x65\x6e\x65\x5f\x42\x6f\x6f\x74\x5f\x6f\x6e\x44\x61\x74\x61\x62\x61\x73\x65\x4c\x6f\x61\x64\x65\x64','\x5f\x6d\x61\x6b\x65\x46\x6f\x6e\x74\x4e\x61\x6d\x65\x54\x65\x78\x74','\x5f\x61\x64\x64\x53\x68\x61\x64\x6f\x77','\x4b\x45\x45\x50','\x73\x75\x62\x6a\x65\x63\x74\x48\x69\x74\x52\x61\x74\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x63\x74\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x5f\x62\x69\x74\x6d\x61\x70','\x68\x70\x43\x6f\x6c\x6f\x72','\x49\x4e\x4f\x55\x54\x51\x55\x49\x4e\x54','\x49\x6e\x70\x75\x74\x42\x67\x54\x79\x70\x65','\x53\x74\x61\x74\x65\x2d\x25\x31\x2d\x25\x32','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x30','\x5f\x6d\x61\x70\x59','\x70\x72\x6f\x63\x65\x73\x73\x53\x6f\x75\x6e\x64\x54\x69\x6d\x69\x6e\x67\x73','\x75\x70\x64\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x49\x6e\x70\x75\x74\x52\x65\x63\x74','\x69\x74\x65\x6d\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x74\x61\x72\x67\x65\x74\x43\x6f\x6e\x74\x65\x6e\x74\x73\x4f\x70\x61\x63\x69\x74\x79','\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x63\x6c\x65\x61\x72\x43\x61\x63\x68\x65\x64\x4b\x65\x79\x73','\x73\x74\x72\x69\x6e\x67\x4b\x65\x79\x4d\x61\x70','\x53\x45\x4d\x49\x43\x4f\x4c\x4f\x4e','\x77\x61\x69\x74','\x61\x64\x6a\x75\x73\x74\x58','\x4f\x55\x54\x42\x4f\x55\x4e\x43\x45','\x68\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x46\x72\x6f\x6d\x56\x69\x65\x77','\x75\x70\x64\x61\x74\x65\x4d\x61\x69\x6e','\x5f\x6d\x6f\x76\x65\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65','\x5f\x74\x65\x78\x74\x50\x6f\x70\x75\x70\x57\x69\x6e\x64\x6f\x77','\x4d\x49\x4e\x55\x53','\x45\x6e\x61\x62\x6c\x65\x4e\x75\x6d\x62\x65\x72\x49\x6e\x70\x75\x74','\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74','\x73\x74\x79\x6c\x65','\x42\x6c\x75\x72\x53\x74\x72\x65\x6e\x67\x74\x68','\x5f\x69\x74\x65\x6d\x57\x69\x6e\x64\x6f\x77','\x4f\x4e\x45\x5f\x4d\x49\x4e\x55\x53\x5f\x53\x52\x43\x5f\x41\x4c\x50\x48\x41','\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x37','\x63\x68\x69\x6c\x64\x72\x65\x6e','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x68\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x64\x72\x61\x77\x43\x69\x72\x63\x6c\x65','\x43\x6f\x6c\x6f\x72\x45\x78\x70\x47\x61\x75\x67\x65\x31','\x69\x73\x53\x69\x64\x65\x56\x69\x65\x77','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x64\x72\x61\x77\x69\x6e\x67','\x69\x74\x65\x6d\x53\x75\x63\x63\x65\x73\x73\x52\x61\x74\x65','\x70\x61\x72\x61\x6d\x4e\x61\x6d\x65','\x61\x78\x65\x73','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x73\x68\x6f\x77','\x72\x69\x67\x68\x74','\x70\x72\x6f\x63\x65\x73\x73\x45\x73\x63\x61\x70\x65','\x73\x68\x6f\x77\x50\x69\x63\x74\x75\x72\x65','\x44\x72\x61\x77\x49\x63\x6f\x6e\x73','\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d','\x66\x69\x6c\x74\x65\x72\x73','\x25\x32\x25\x31\x25\x33','\x5f\x67\x6f\x6c\x64\x57\x69\x6e\x64\x6f\x77','\x5f\x64\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67','\x75\x70\x64\x61\x74\x65\x50\x61\x64\x64\x69\x6e\x67','\x73\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x31','\x56\x69\x73\x75\x4d\x5a\x20\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x20\x50\x69\x63\x74\x75\x72\x65\x49\x63\x6f\x6e\x20\x25\x31\x20\x25\x32','\x5f\x63\x6f\x6e\x74\x65\x78\x74','\x47\x6f\x6c\x64\x52\x65\x63\x74','\x5f\x74\x65\x78\x74\x51\x75\x65\x75\x65','\x47\x6f\x6c\x64\x4f\x76\x65\x72\x6c\x61\x70','\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x52\x61\x74\x65\x4d\x69\x6e\x69\x6d\x75\x6d','\x76\x69\x65\x77\x70\x6f\x72\x74','\x4f\x53\x5f\x4b\x45\x59','\x43\x6f\x6c\x6f\x72\x48\x50\x47\x61\x75\x67\x65\x32','\x53\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x46\x6f\x72\x6d\x75\x6c\x61','\x53\x63\x72\x65\x65\x6e\x53\x68\x61\x6b\x65','\x73\x6b\x69\x70\x42\x72\x61\x6e\x63\x68','\x51\x6f\x4c','\x45\x73\x63\x61\x70\x65\x41\x6c\x77\x61\x79\x73','\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x32','\x73\x74\x6f\x70','\x43\x6f\x6d\x6d\x61\x6e\x64\x52\x65\x63\x74','\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x69\x74\x65\x6d\x48\x69\x74','\x63\x72\x65\x61\x74\x65\x53\x75\x62\x53\x70\x72\x69\x74\x65','\x44\x69\x6d\x43\x6f\x6c\x6f\x72\x31','\x6c\x65\x66\x74','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x46\x4a\x5f\x54\x4f\x55\x52\x4f\x4b\x55','\x52\x69\x67\x68\x74\x4d\x65\x6e\x75\x73','\x5f\x6f\x70\x74\x69\x6f\x6e\x73\x57\x69\x6e\x64\x6f\x77','\x63\x68\x65\x63\x6b\x43\x61\x63\x68\x65\x4b\x65\x79','\x5f\x70\x72\x65\x73\x73\x65\x64','\x41\x63\x74\x6f\x72\x42\x67\x54\x79\x70\x65','\x75\x70\x64\x61\x74\x65\x4d\x61\x69\x6e\x4d\x75\x6c\x74\x69\x70\x6c\x79','\x78\x53\x63\x72\x6f\x6c\x6c\x4c\x69\x6e\x6b\x65\x64\x4f\x66\x66\x73\x65\x74','\x63\x75\x72\x73\x6f\x72\x52\x69\x67\x68\x74','\x5f\x6c\x61\x73\x74\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x43\x68\x61\x72\x61\x63\x74\x65\x72','\x4d\x61\x6e\x75\x61\x6c','\x78\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x31','\x43\x6f\x6c\x6f\x72\x53\x79\x73\x74\x65\x6d','\x61\x6c\x74\x4b\x65\x79','\x4d\x44\x52','\x45\x6e\x61\x62\x6c\x65\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74','\x72\x65\x64\x72\x61\x77','\x63\x72\x65\x61\x74\x65\x4b\x65\x79\x4a\x53','\x54\x65\x78\x74\x4a\x53','\x53\x6c\x6f\x74\x42\x67\x54\x79\x70\x65','\x75\x70\x64\x61\x74\x65\x4f\x70\x65\x6e','\x72\x65\x6d\x6f\x76\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x36','\x41\x4c\x54','\x47\x72\x61\x70\x68\x69\x63\x73','\x46\x61\x64\x65\x53\x70\x65\x65\x64','\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74','\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x50\x6f\x69\x6e\x74','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x6d\x61\x69\x6e\x41\x72\x65\x61\x54\x6f\x70','\x73\x76\x5f\x65\x6e\x65\x6d\x69\x65\x73','\x63\x61\x6e\x41\x74\x74\x61\x63\x6b','\x56\x4f\x4c\x55\x4d\x45\x5f\x4d\x55\x54\x45','\x42\x61\x72\x4f\x66\x66\x73\x65\x74','\x66\x72\x61\x6d\x65\x62\x75\x66\x66\x65\x72','\x5f\x73\x61\x76\x65\x46\x69\x6c\x65\x49\x44','\x7a\x6f\x6f\x6d\x53\x63\x61\x6c\x65','\x61\x74\x74\x61\x63\x6b\x53\x6b\x69\x6c\x6c\x49\x64','\x73\x79\x73\x74\x65\x6d\x43\x6f\x6c\x6f\x72','\x4f\x55\x54\x42\x41\x43\x4b','\x63\x61\x74\x63\x68\x45\x78\x63\x65\x70\x74\x69\x6f\x6e','\x65\x72\x61\x73\x65\x50\x69\x63\x74\x75\x72\x65','\x6b\x65\x79\x4d\x61\x70\x70\x65\x72','\x4e\x55\x4d\x50\x41\x44\x30','\x46\x6f\x6e\x74\x53\x6d\x6f\x6f\x74\x68\x69\x6e\x67','\x69\x74\x65\x6d\x48\x69\x74\x49\x6d\x70\x72\x6f\x76\x65\x64\x41\x63\x63\x75\x72\x61\x63\x79','\x73\x74\x61\x72\x74\x41\x75\x74\x6f\x4e\x65\x77\x47\x61\x6d\x65','\x41\x75\x64\x69\x6f\x43\x68\x61\x6e\x67\x65\x42\x67\x73\x50\x61\x6e','\x53\x6c\x6f\x74\x52\x65\x63\x74','\x5f\x62\x75\x79\x57\x69\x6e\x64\x6f\x77','\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x30\x35','\x72\x65\x71\x75\x69\x72\x65\x64\x57\x74\x79\x70\x65\x49\x64\x31','\x53\x63\x65\x6e\x65\x5f\x4e\x61\x6d\x65\x5f\x6f\x6e\x49\x6e\x70\x75\x74\x4f\x6b','\x4d\x61\x78\x44\x75\x72\x61\x74\x69\x6f\x6e','\x5f\x62\x61\x73\x65\x53\x70\x72\x69\x74\x65','\x5f\x64\x69\x73\x70\x6c\x61\x79\x59','\x41\x52\x52\x41\x59\x4a\x53\x4f\x4e','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x46\x75\x6e\x63\x74\x69\x6f\x6e\x73','\x45\x6e\x61\x62\x6c\x65\x4d\x61\x73\x6b\x69\x6e\x67','\x6e\x75\x6d\x62\x65\x72\x53\x68\x6f\x77\x42\x75\x74\x74\x6f\x6e','\x5f\x73\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x43\x68\x65\x63\x6b\x53\x70\x6c\x69\x74\x45\x73\x63\x61\x70\x65','\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x65','\x73\x63\x72\x6f\x6c\x6c\x58','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x43\x61\x6e\x63\x65\x6c','\x5f\x72\x65\x66\x72\x65\x73\x68\x42\x61\x63\x6b','\x61\x64\x64\x43\x68\x69\x6c\x64','\x41\x6c\x6c\x54\x72\x6f\x6f\x70\x73','\x72\x65\x70\x65\x61\x74','\x49\x74\x65\x6d\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72\x32','\x43\x4c\x4f\x53\x45\x5f\x43\x55\x52\x4c\x59\x5f\x42\x52\x41\x43\x4b\x45\x54','\x5f\x73\x68\x61\x6b\x65\x50\x6f\x77\x65\x72','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x68\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x70\x6f\x77','\x70\x6c\x61\x79\x45\x73\x63\x61\x70\x65','\x6c\x6f\x61\x64\x54\x69\x6c\x65\x42\x69\x74\x6d\x61\x70','\x66\x6f\x72\x6d\x61\x74','\x4e\x45\x41\x52\x45\x53\x54','\x6f\x76\x65\x72\x72\x69\x64\x65\x4d\x69\x6d\x65\x54\x79\x70\x65','\x4f\x54\x42','\x73\x63\x72\x6f\x6c\x6c\x62\x61\x72\x48\x65\x69\x67\x68\x74','\x63\x6c\x65\x61\x72','\x73\x74\x61\x6e\x64\x61\x72\x64\x49\x63\x6f\x6e\x48\x65\x69\x67\x68\x74','\x77\x69\x6e\x64\x6f\x77\x50\x61\x64\x64\x69\x6e\x67','\x6a\x73\x51\x75\x69\x63\x6b\x46\x75\x6e\x63','\x53\x70\x72\x69\x74\x65\x5f\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4d\x56\x5f\x70\x72\x6f\x63\x65\x73\x73\x54\x69\x6d\x69\x6e\x67\x44\x61\x74\x61','\x76\x65\x72\x73\x69\x6f\x6e','\x45\x52\x52\x4f\x52\x21\x0a\x0a\x43\x6f\x72\x65\x20\x45\x6e\x67\x69\x6e\x65\x20\x3e\x20\x50\x6c\x75\x67\x69\x6e\x20\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73\x20\x3e\x20\x42\x75\x74\x74\x6f\x6e\x20\x41\x73\x73\x69\x73\x74\x20\x3e\x20\x53\x70\x6c\x69\x74\x20\x45\x73\x63\x61\x70\x65\x0a\x0a','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x66\x66\x73\x65\x74\x25\x31','\x50\x69\x63\x74\x75\x72\x65\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65','\x51\x55\x4f\x54\x45','\x4f\x70\x65\x6e\x55\x52\x4c','\x57\x69\x6e\x64\x6f\x77\x5f\x4d\x61\x70\x4e\x61\x6d\x65\x5f\x72\x65\x66\x72\x65\x73\x68','\x5f\x74\x69\x6d\x65\x44\x75\x72\x61\x74\x69\x6f\x6e','\x61\x64\x64\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72','\x72\x65\x66\x72\x65\x73\x68\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x42\x69\x74\x6d\x61\x70','\x64\x69\x73\x70\x6c\x61\x79\x4e\x61\x6d\x65','\x4f\x55\x54\x43\x55\x42\x49\x43','\x5f\x63\x68\x61\x6e\x67\x69\x6e\x67\x43\x6c\x61\x73\x73','\x63\x61\x74\x63\x68\x4e\x6f\x72\x6d\x61\x6c\x45\x72\x72\x6f\x72','\x63\x6c\x65\x61\x72\x53\x74\x65\x6e\x63\x69\x6c','\x55\x70\x64\x61\x74\x65\x50\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73','\x6f\x6e\x65\x72\x72\x6f\x72','\x70\x6c\x61\x79\x43\x61\x6e\x63\x65\x6c','\x63\x75\x72\x73\x6f\x72\x4c\x65\x66\x74','\x69\x73\x54\x70\x62','\x62\x6c\x6f\x63\x6b\x57\x69\x64\x74\x68','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x63\x75\x72\x73\x6f\x72\x55\x70','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x6d\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x73\x63\x72\x6f\x6c\x6c\x4c\x65\x66\x74','\x44\x69\x73\x70\x6c\x61\x79\x4c\x6f\x63\x6b\x59','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68','\x46\x31\x33','\x67\x6f\x74\x6f','\x73\x68\x6f\x77\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x54\x69\x6c\x65\x73\x65\x74\x45\x72\x72\x6f\x72','\x69\x6d\x61\x67\x65\x53\x6d\x6f\x6f\x74\x68\x69\x6e\x67\x45\x6e\x61\x62\x6c\x65\x64','\x5f\x66\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x73','\x4d\x69\x6e\x44\x75\x72\x61\x74\x69\x6f\x6e','\x49\x6e\x70\x75\x74\x5f\x75\x70\x64\x61\x74\x65','\x54\x69\x6c\x65\x6d\x61\x70\x5f\x61\x64\x64\x53\x70\x6f\x74\x54\x69\x6c\x65','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x75\x70\x64\x61\x74\x65\x4d\x6f\x76\x65','\x5f\x73\x63\x61\x6c\x65\x59','\x63\x72\x65\x61\x74\x65\x45\x78\x74\x65\x6e\x64\x65\x64\x54\x69\x6c\x65\x53\x70\x72\x69\x74\x65','\x46\x6c\x61\x74','\x50\x69\x63\x74\x75\x72\x65\x45\x72\x61\x73\x65\x41\x6c\x6c','\x75\x70\x64\x61\x74\x65','\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x42\x61\x73\x65\x44\x65\x6c\x61\x79','\x46\x54\x42','\x66\x6c\x6f\x6f\x72','\x6d\x69\x72\x72\x6f\x72','\x6f\x66\x66\x73\x65\x74\x59','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x43\x4f\x50\x59','\x5f\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73','\x4b\x65\x79\x49\x74\x65\x6d\x50\x72\x6f\x74\x65\x63\x74','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x73\x65\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x47\x65\x74\x50\x61\x72\x61\x6d\x49\x63\x6f\x6e','\x43\x4c\x4f\x53\x45\x5f\x50\x41\x52\x45\x4e','\x50\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x4d\x6f\x64\x65','\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x53\x69\x6d\x70\x6c\x65\x53\x74\x61\x74\x75\x73','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x52\x69\x67\x68\x74','\x64\x65\x73\x74\x72\x6f\x79\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x42\x69\x74\x6d\x61\x70\x73','\x6f\x70\x74\x53\x69\x64\x65\x56\x69\x65\x77','\x70\x72\x69\x6e\x74\x45\x72\x72\x6f\x72','\x6d\x61\x78\x53\x63\x72\x6f\x6c\x6c\x62\x61\x72','\x73\x74\x61\x6e\x64\x61\x72\x64\x49\x63\x6f\x6e\x57\x69\x64\x74\x68','\x42\x54\x65\x73\x74\x57\x65\x61\x70\x6f\x6e\x73','\x6f\x70\x74\x69\x6f\x6e','\x6f\x66\x66\x73\x65\x74','\x50\x6c\x75\x73','\x4d\x69\x72\x72\x6f\x72','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x39','\x50\x72\x6f\x66\x69\x6c\x65\x52\x65\x63\x74','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77\x53\x69\x64\x65\x52\x65\x63\x74','\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x53\x79\x73','\x41\x63\x74\x6f\x72\x52\x65\x63\x74','\x73\x65\x74\x4d\x6f\x76\x65\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65','\x63\x65\x6e\x74\x65\x72\x58','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x54\x69\x6c\x65\x6d\x61\x70','\x42\x61\x73\x69\x63\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x46\x6f\x72\x6d\x75\x6c\x61','\x5f\x62\x61\x74\x74\x6c\x65\x72\x4e\x61\x6d\x65','\x4e\x75\x6d\x62\x65\x72\x42\x67\x54\x79\x70\x65','\x5f\x6d\x6f\x76\x65\x6d\x65\x6e\x74\x57\x68\x6f\x6c\x65\x44\x75\x72\x61\x74\x69\x6f\x6e','\x72\x65\x6d\x6f\x76\x65','\x5f\x6f\x70\x61\x63\x69\x74\x79','\x63\x72\x65\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x54\x61\x72\x67\x65\x74\x73','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x6b\x69\x6c\x6c\x4c\x69\x73\x74\x5f\x69\x6e\x63\x6c\x75\x64\x65\x73','\x66\x6f\x6e\x74\x2d\x73\x6d\x6f\x6f\x74\x68','\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x6d\x61\x78\x50\x69\x63\x74\x75\x72\x65\x73','\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74\x46\x69\x78','\x69\x73\x50\x72\x65\x73\x65\x72\x76\x65\x54\x70','\x49\x74\x65\x6d\x53\x74\x79\x6c\x65','\x73\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x32','\x69\x73\x52\x65\x70\x65\x61\x74\x65\x64','\x68\x65\x69\x67\x68\x74','\x4e\x65\x77\x47\x61\x6d\x65\x42\x6f\x6f\x74','\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x5f\x62\x61\x63\x6b\x53\x70\x72\x69\x74\x65','\x69\x73\x4f\x70\x65\x6e','\x6f\x6e\x41\x63\x74\x6f\x72\x43\x68\x61\x6e\x67\x65','\x44\x75\x6d\x6d\x79\x52\x65\x63\x74','\x42\x69\x74\x6d\x61\x70\x5f\x73\x74\x72\x6f\x6b\x65\x52\x65\x63\x74','\x4d\x43\x52','\x69\x73\x45\x78\x70\x47\x61\x75\x67\x65\x44\x72\x61\x77\x6e','\x49\x4e\x45\x4c\x41\x53\x54\x49\x43','\x52\x49\x47\x48\x54','\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74','\x5f\x73\x74\x6f\x72\x65\x64\x53\x74\x61\x63\x6b','\u300a\u300a\u300a\x20\x50\x61\x67\x65\x20\x25\x31\x20\u300b\u300b\u300b\x0a\x25\x32\x0a','\x73\x65\x74\x75\x70\x54\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x54\x65\x72\x72\x61\x69\x6e\x54\x61\x67\x73','\x69\x73\x43\x6f\x6c\x6c\x69\x64\x65\x64\x57\x69\x74\x68\x45\x76\x65\x6e\x74\x73','\x6f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72','\x61\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67','\x6d\x61\x78\x53\x63\x72\x6f\x6c\x6c\x58','\x5f\x66\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65','\x53\x55\x42\x54\x52\x41\x43\x54','\x75\x70\x64\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x5f\x73\x68\x61\x6b\x65\x44\x75\x72\x61\x74\x69\x6f\x6e','\x73\x6d\x6f\x6f\x74\x68\x53\x65\x6c\x65\x63\x74','\x5f\x63\x61\x63\x68\x65\x53\x63\x61\x6c\x65\x59','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x63\x72\x69\x73\x69\x73\x43\x6f\x6c\x6f\x72','\x74\x6f\x70','\x70\x61\x72\x61\x6d\x73','\x78\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x42\x6f\x6e\x75\x73','\x72\x65\x6e\x64\x65\x72\x4e\x6f\x4d\x61\x73\x6b','\x42\x69\x74\x6d\x61\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x6c\x6f\x61\x64\x42\x69\x74\x6d\x61\x70','\x41\x54\x4b','\x72\x65\x74\x72\x69\x65\x76\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x69\x74\x65\x6d\x48\x65\x69\x67\x68\x74','\x6d\x6d\x70','\x6e\x69\x63\x6b\x6e\x61\x6d\x65','\x73\x74\x61\x74\x75\x73\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x6d\x61\x6b\x65\x41\x75\x74\x6f\x42\x61\x74\x74\x6c\x65\x41\x63\x74\x69\x6f\x6e\x73','\x73\x65\x74\x53\x69\x7a\x65','\x5f\x77\x69\x64\x74\x68','\x4d\x75\x6c\x74\x69\x4b\x65\x79\x46\x6d\x74','\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x32','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x52\x65\x67\x45\x78\x70','\x69\x73\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64','\x45\x6e\x61\x62\x6c\x65\x4a\x53','\x5f\x6d\x61\x72\x67\x69\x6e','\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x48\x6f\x72\x7a','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x36','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x63\x74\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x5f\x63\x61\x74\x65\x67\x6f\x72\x79\x57\x69\x6e\x64\x6f\x77','\x73\x65\x74\x41\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x65','\x69\x6e\x69\x74\x4d\x65\x6d\x62\x65\x72\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x6d\x6f\x76\x65\x50\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x5f\x69\x73\x42\x75\x74\x74\x6f\x6e\x48\x69\x64\x64\x65\x6e','\x70\x6c\x61\x79\x42\x75\x7a\x7a\x65\x72','\x6d\x6f\x76\x65\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x4c\x69\x6e\x65\x48\x65\x69\x67\x68\x74','\x56\x61\x72\x69\x61\x62\x6c\x65\x45\x76\x61\x6c\x52\x65\x66\x65\x72\x65\x6e\x63\x65','\x54\x43\x52','\x6e\x75\x6d\x62\x65\x72','\x65\x78\x70\x6f\x72\x74\x41\x6c\x6c\x54\x72\x6f\x6f\x70\x53\x74\x72\x69\x6e\x67\x73','\x5f\x6d\x61\x78\x44\x69\x67\x69\x74\x73','\x61\x6c\x6c\x6f\x77\x53\x68\x69\x66\x74\x53\x63\x72\x6f\x6c\x6c\x69\x6e\x67','\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77','\x63\x6c\x65\x61\x72\x52\x65\x63\x74','\x20\x4f\x72\x69\x67\x69\x6e\x3a\x20\x25\x31','\x50\x6f\x73\x69\x74\x69\x6f\x6e\x58','\x5f\x73\x68\x61\x6b\x65\x53\x70\x65\x65\x64','\x69\x73\x49\x6e\x73\x74\x61\x6e\x63\x65\x4f\x66\x53\x63\x65\x6e\x65\x4d\x61\x70','\x5f\x61\x63\x74\x69\x6f\x6e','\x70\x72\x6f\x66\x69\x6c\x65\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x73\x65\x74\x41\x63\x74\x6f\x72\x48\x6f\x6d\x65\x52\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x65\x64','\x70\x61\x72\x61\x6d\x56\x61\x6c\x75\x65\x42\x79\x4e\x61\x6d\x65','\x5f\x73\x74\x61\x72\x74\x44\x65\x63\x72\x79\x70\x74\x69\x6e\x67','\x61\x63\x74\x69\x76\x61\x74\x65','\x69\x63\x6f\x6e\x57\x69\x64\x74\x68','\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73','\x72\x65\x73\x65\x74\x46\x6f\x6e\x74\x53\x65\x74\x74\x69\x6e\x67\x73','\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x75\x70\x64\x61\x74\x65\x4d\x61\x69\x6e','\x5f\x64\x65\x73\x74\x72\x6f\x79\x43\x61\x6e\x76\x61\x73','\x62\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79','\x53\x68\x6f\x77\x20\x53\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x20\x54\x65\x78\x74\x20\x53\x63\x72\x69\x70\x74\x20\x45\x72\x72\x6f\x72','\x70\x6c\x61\x79\x42\x67\x73','\x69\x74\x65\x6d\x52\x65\x63\x74','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x33','\x5f\x68\x69\x64\x65\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73','\x6d\x65\x76','\x63\x72\x65\x61\x74\x65\x45\x6e\x65\x6d\x69\x65\x73','\x73\x65\x74\x41\x6e\x67\x6c\x65\x50\x6c\x75\x73\x44\x61\x74\x61','\u3016\u3016\u3016\x20\x54\x72\x6f\x6f\x70\x20\x25\x31\x3a\x20\x25\x32\x20\x53\x63\x72\x69\x70\x74\x20\u3017\u3017\u3017\x0a\x0a','\x53\x63\x65\x6e\x65\x5f\x4f\x70\x74\x69\x6f\x6e\x73\x5f\x63\x72\x65\x61\x74\x65','\x6f\x6e\x42\x61\x74\x74\x6c\x65\x45\x6e\x64','\x64\x69\x73\x70\x6c\x61\x79\x58','\x50\x61\x72\x73\x65\x54\x69\x6c\x65\x73\x65\x74\x4e\x6f\x74\x65\x74\x61\x67\x73','\x44\x4f\x57\x4e','\x5f\x6f\x70\x65\x6e\x69\x6e\x67','\x54\x52\x41\x49\x54\x5f\x50\x41\x52\x41\x4d','\x6d\x61\x78\x4c\x65\x76\x65\x6c','\x42\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79','\x68\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x63\x72\x65\x61\x74\x65\x54\x72\x6f\x6f\x70\x4e\x6f\x74\x65','\x6f\x72\x69\x67\x69\x6e\x61\x6c\x4a\x53','\x46\x31\x31','\x25\x31\x2f','\x53\x63\x72\x65\x65\x6e\x52\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e','\x61\x64\x6a\x75\x73\x74\x50\x69\x63\x74\x75\x72\x65\x41\x6e\x74\x69\x5a\x6f\x6f\x6d','\x75\x70\x64\x61\x74\x65\x4f\x70\x61\x63\x69\x74\x79','\x75\x70\x64\x61\x74\x65\x4f\x72\x69\x67\x69\x6e','\x45\x56\x41\x4c','\x5f\x63\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e','\x70\x65\x72\x66\x6f\x72\x6d\x45\x73\x63\x61\x70\x65','\x72\x65\x6d\x6f\x76\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x55\x70','\x77\x6f\x72\x6c\x64\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d','\x61\x70\x70\x6c\x79\x46\x6f\x72\x63\x65\x64\x47\x61\x6d\x65\x54\x72\x6f\x6f\x70\x53\x65\x74\x74\x69\x6e\x67\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x63\x75\x72\x72\x65\x6e\x74\x4c\x65\x76\x65\x6c\x45\x78\x70','\x69\x73\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x45\x6e\x61\x62\x6c\x65\x64','\x51\x77\x65\x72\x74\x79\x4c\x61\x79\x6f\x75\x74','\x63\x72\x65\x61\x74\x65\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77','\x43\x6f\x6c\x6f\x72\x4e\x6f\x72\x6d\x61\x6c','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x42\x54\x42','\x53\x4c\x41\x53\x48','\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x31','\x6c\x61\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65','\x69\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4f\x66\x66\x73\x65\x74\x58\x4d\x69\x72\x72\x6f\x72\x65\x64','\x6d\x70\x43\x6f\x6c\x6f\x72','\x5f\x66\x6f\x72\x63\x65\x64\x54\x72\x6f\x6f\x70\x56\x69\x65\x77','\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x63\x72\x65\x65\x6e\x53\x68\x61\x6b\x65\x53\x74\x79\x6c\x65','\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x47\x61\x75\x67\x65\x53\x70\x72\x69\x74\x65\x73','\x46\x6f\x6e\x74\x53\x69\x7a\x65','\x73\x65\x74\x43\x6c\x69\x63\x6b\x48\x61\x6e\x64\x6c\x65\x72','\x63\x72\x65\x61\x74\x65','\x49\x66\x20\x79\x6f\x75\x20\x64\x6f\x6e\x27\x74\x20\x77\x61\x6e\x74\x20\x74\x68\x69\x73\x20\x6f\x70\x74\x69\x6f\x6e\x2c\x20\x73\x65\x74\x20\x53\x70\x6c\x69\x74\x20\x45\x73\x63\x61\x70\x65\x20\x6f\x70\x74\x69\x6f\x6e\x20\x62\x61\x63\x6b\x20\x74\x6f\x20\x66\x61\x6c\x73\x65\x2e','\x46\x69\x6e\x69\x73\x68','\x53\x74\x61\x72\x74\x49\x44','\x50\x61\x72\x61\x6d\x4e\x61\x6d\x65','\x4f\x70\x74\x69\x6f\x6e\x73\x52\x65\x63\x74','\x73\x70\x61\x72\x61\x6d\x52\x61\x74\x65','\x4c\x69\x6e\x65\x61\x72','\x6d\x61\x69\x6e\x41\x72\x65\x61\x54\x6f\x70','\x43\x6f\x64\x65\x4a\x53','\x6d\x65\x56\x6f\x6c\x75\x6d\x65','\x69\x73\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x50\x6c\x61\x79\x69\x6e\x67','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x46\x54\x42','\x64\x72\x61\x77\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64','\x52\x45\x50\x4c\x41\x43\x45','\x67\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x4f\x70\x61\x63\x69\x74\x79','\x5f\x63\x75\x72\x72\x65\x6e\x74\x42\x67\x6d','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x73\x63\x61\x6c\x65\x58','\x73\x65\x74\x75\x70\x4e\x65\x77\x47\x61\x6d\x65','\x47\x61\x6d\x65\x5f\x55\x6e\x69\x74\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x72\x74','\x75\x69\x41\x72\x65\x61\x57\x69\x64\x74\x68','\x69\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x6f\x72\x45\x61\x63\x68','\x75\x70\x64\x61\x74\x65\x50\x69\x63\x74\x75\x72\x65\x41\x6e\x74\x69\x5a\x6f\x6f\x6d','\x63\x6c\x65\x61\x72\x46\x6f\x72\x63\x65\x64\x47\x61\x6d\x65\x54\x72\x6f\x6f\x70\x53\x65\x74\x74\x69\x6e\x67\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x47\x61\x6d\x65\x5f\x41\x63\x74\x6f\x72\x5f\x69\x73\x50\x72\x65\x73\x65\x72\x76\x65\x54\x70','\x73\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x4a\x53','\x77\x74\x79\x70\x65\x49\x64','\x63\x65\x6e\x74\x65\x72\x53\x70\x72\x69\x74\x65','\x70\x61\x67\x65\x64\x6f\x77\x6e','\x61\x64\x6a\x75\x73\x74\x42\x6f\x78\x53\x69\x7a\x65','\x4e\x55\x4d\x5f\x4c\x4f\x43\x4b','\x53\x74\x61\x74\x75\x73\x50\x61\x72\x61\x6d\x73\x42\x67\x54\x79\x70\x65','\x34\x31\x34\x36\x35\x31\x42\x45\x74\x49\x6b\x66','\x63\x72\x65\x61\x74\x65\x42\x75\x66\x66\x65\x72','\x61\x62\x73','\x69\x6e\x76\x6f\x6b\x65\x43\x6f\x75\x6e\x74\x65\x72\x41\x74\x74\x61\x63\x6b','\x46\x6c\x61\x74\x31','\x5f\x64\x69\x73\x70\x6c\x61\x79\x58','\x6f\x70\x65\x6e','\x69\x6e\x74\x65\x67\x65\x72','\x49\x6e\x70\x75\x74\x5f\x73\x68\x6f\x75\x6c\x64\x50\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74','\x49\x74\x65\x6d\x4d\x65\x6e\x75','\x5f\x6d\x75\x74\x65\x53\x6f\x75\x6e\x64','\x61\x70\x70\x6c\x79','\x6d\x61\x70','\x66\x6f\x72\x63\x65\x4f\x75\x74\x4f\x66\x50\x6c\x61\x79\x74\x65\x73\x74','\x47\x61\x6d\x65\x5f\x50\x61\x72\x74\x79\x5f\x63\x6f\x6e\x73\x75\x6d\x65\x49\x74\x65\x6d','\x43\x6f\x6c\x6f\x72\x45\x78\x70\x47\x61\x75\x67\x65\x32','\x73\x65\x74\x75\x70\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x42\x69\x74\x6d\x61\x70','\x50\x69\x63\x74\x75\x72\x65\x52\x6f\x74\x61\x74\x65','\x53\x70\x72\x69\x74\x65\x5f\x42\x75\x74\x74\x6f\x6e\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x41\x4c\x57\x41\x59\x53','\x73\x6b\x69\x6c\x6c\x54\x79\x70\x65\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x6a\x73\x51\x75\x69\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e\x73','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e','\x5f\x73\x68\x6f\x75\x6c\x64\x50\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74','\x63\x6c\x61\x6d\x70','\x69\x6e\x69\x74\x56\x69\x73\x75\x4d\x5a\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x74\x72\x61\x6e\x73\x66\x6f\x72\x6d','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x38','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x73\x65\x5f\x64\x65\x73\x74\x72\x6f\x79','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x63\x72\x6f\x6c\x6c\x61\x62\x6c\x65\x5f\x75\x70\x64\x61\x74\x65','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x33','\x49\x4e\x42\x4f\x55\x4e\x43\x45','\x61\x64\x64\x43\x6f\x6d\x6d\x61\x6e\x64','\x28\x5b\x5c\x2b\x5c\x2d\x5d\x5c\x64\x2b\x29\x3e','\x70\x6c\x61\x79\x74\x65\x73\x74\x51\x75\x69\x63\x6b\x4c\x6f\x61\x64','\x69\x73\x41\x72\x72\x6f\x77\x50\x72\x65\x73\x73\x65\x64','\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x73\x65\x74\x41\x74\x74\x61\x63\x6b','\x72\x69\x67\x68\x74\x41\x72\x72\x6f\x77\x57\x69\x64\x74\x68','\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x4e\x61\x6d\x65\x73','\x69\x73\x4e\x77\x6a\x73','\x57\x69\x6e\x64\x6f\x77\x5f\x47\x6f\x6c\x64\x5f\x72\x65\x66\x72\x65\x73\x68','\x6d\x61\x78\x42\x61\x74\x74\x6c\x65\x4d\x65\x6d\x62\x65\x72\x73','\x67\x65\x74\x4c\x61\x73\x74\x55\x73\x65\x64\x47\x61\x6d\x65\x70\x61\x64\x54\x79\x70\x65','\x56\x65\x72\x73\x69\x6f\x6e','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x31','\x61\x75\x74\x6f\x52\x65\x6d\x6f\x76\x61\x6c\x54\x69\x6d\x69\x6e\x67','\x4f\x70\x65\x6e\x53\x70\x65\x65\x64','\x75\x70\x64\x61\x74\x65\x42\x67\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73','\x43\x41\x50\x53\x4c\x4f\x43\x4b','\x75\x70\x64\x61\x74\x65\x44\x75\x72\x61\x74\x69\x6f\x6e','\x4e\x55\x4d\x50\x41\x44\x39','\x44\x45\x43\x49\x4d\x41\x4c','\x53\x48\x49\x46\x54','\x41\x63\x74\x6f\x72','\x63\x6f\x6c\x53\x70\x61\x63\x69\x6e\x67','\x63\x6f\x6e\x63\x61\x74','\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64','\x53\x65\x6c\x6c\x42\x67\x54\x79\x70\x65','\x45\x78\x70\x6f\x72\x74\x53\x74\x72\x69\x6e\x67','\x72\x65\x73\x74\x6f\x72\x65','\x53\x63\x65\x6e\x65\x5f\x42\x6f\x6f\x74\x5f\x6c\x6f\x61\x64\x53\x79\x73\x74\x65\x6d\x49\x6d\x61\x67\x65\x73','\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x73\x65\x74\x46\x72\x61\x6d\x65','\x69\x73\x47\x61\x6d\x65\x41\x63\x74\x69\x76\x65','\x75\x69\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74','\x69\x6d\x61\x67\x65\x2d\x72\x65\x6e\x64\x65\x72\x69\x6e\x67','\x64\x72\x61\x77\x47\x61\x6d\x65\x56\x65\x72\x73\x69\x6f\x6e','\x43\x6f\x6c\x6f\x72\x54\x50\x43\x6f\x73\x74','\x41\x63\x74\x6f\x72\x54\x50\x43\x6f\x6c\x6f\x72','\x5f\x73\x63\x72\x65\x65\x6e\x58','\x73\x65\x74\x57\x69\x6e\x64\x6f\x77\x50\x61\x64\x64\x69\x6e\x67','\x73\x70\x61\x72\x61\x6d\x50\x6c\x75\x73','\x45\x6e\x64\x69\x6e\x67\x49\x44','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x5f\x72\x61\x74\x65','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x52\x45\x53\x45\x54','\x5a\x4f\x4f\x4d','\x53\x6b\x69\x6c\x6c\x54\x79\x70\x65\x42\x67\x54\x79\x70\x65','\x44\x69\x73\x70\x6c\x61\x79\x65\x64\x50\x61\x72\x61\x6d\x73','\x62\x61\x74\x63\x68','\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x42\x69\x74\x6d\x61\x70\x5f\x64\x72\x61\x77\x54\x65\x78\x74','\x5f\x6d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e','\x78\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x4a\x53','\x70\x61\x72\x61\x6c\x6c\x61\x78\x65\x73','\x5f\x70\x68\x61\x73\x65','\x45\x71\x75\x69\x70\x4d\x65\x6e\x75','\x69\x74\x65\x6d\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72\x31','\x73\x65\x74\x75\x70\x56\x61\x6c\x75\x65\x46\x6f\x6e\x74','\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68','\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x70\x72\x6f\x63\x65\x73\x73\x45\x73\x63\x61\x70\x65','\x53\x79\x6d\x62\x6f\x6c','\x70\x72\x6f\x63\x65\x73\x73\x41\x6c\x77\x61\x79\x73\x45\x73\x63\x61\x70\x65','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x53\x65\x74\x74\x69\x6e\x67\x73','\x65\x78\x70\x6f\x72\x74\x41\x6c\x6c\x4d\x61\x70\x53\x74\x72\x69\x6e\x67\x73','\x6d\x68\x70','\x70\x61\x72\x61\x6d\x52\x61\x74\x65','\x49\x63\x6f\x6e\x53\x65\x74','\x73\x6b\x69\x6c\x6c\x54\x79\x70\x65\x73','\x5f\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x53\x70\x72\x69\x74\x65','\x65\x6e\x63\x6f\x75\x6e\x74\x65\x72\x53\x74\x65\x70\x73\x4d\x69\x6e\x69\x6d\x75\x6d','\x41\x6e\x74\x69\x5a\x6f\x6f\x6d\x50\x69\x63\x74\x75\x72\x65\x73','\x43\x6f\x72\x72\x65\x63\x74\x53\x6b\x69\x6e\x42\x6c\x65\x65\x64\x69\x6e\x67','\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65','\x67\x65\x74\x47\x61\x6d\x65\x70\x61\x64\x73','\x6d\x61\x78\x56\x65\x72\x74','\x53\x75\x62\x74\x69\x74\x6c\x65','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x5f\x64\x65\x66\x61\x75\x6c\x74\x53\x74\x72\x65\x74\x63\x68\x4d\x6f\x64\x65','\x73\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x42\x6f\x6e\x75\x73','\x63\x68\x61\x72\x43\x6f\x64\x65','\x69\x73\x42\x75\x73\x79','\x57\x69\x6e\x64\x6f\x77\x5f\x72\x65\x66\x72\x65\x73\x68\x42\x61\x63\x6b','\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74','\x4f\x50\x45\x4e\x5f\x43\x55\x52\x4c\x59\x5f\x42\x52\x41\x43\x4b\x45\x54','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x34','\x4e\x65\x77\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74','\x73\x74\x72\x65\x74\x63\x68','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x34','\x69\x73\x42\x6f\x74\x74\x6f\x6d\x48\x65\x6c\x70\x4d\x6f\x64\x65','\x5f\x64\x75\x6d\x6d\x79\x57\x69\x6e\x64\x6f\x77','\x74\x61\x72\x67\x65\x74\x59','\x6c\x6f\x61\x64\x54\x69\x6c\x65\x73\x65\x74','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x70\x6f\x77\x65\x72\x44\x6f\x77\x6e\x43\x6f\x6c\x6f\x72','\x43\x6f\x6d\x6d\x61\x6e\x64\x42\x67\x54\x79\x70\x65','\x4d\x41\x58\x5f\x53\x41\x46\x45\x5f\x49\x4e\x54\x45\x47\x45\x52','\x5f\x63\x61\x63\x68\x65','\x6f\x72\x69\x67\x69\x6e\x61\x6c','\x6d\x61\x70\x49\x64','\x6e\x70\x61\x2e\x6c\x6f\x6c','\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x44\x65\x6c\x65\x74\x65','\x54\x65\x78\x74\x46\x6d\x74','\x47\x61\x6d\x65\x5f\x41\x63\x74\x6f\x72\x5f\x70\x61\x72\x61\x6d\x42\x61\x73\x65','\x69\x73\x54\x6f\x75\x63\x68\x65\x64\x49\x6e\x73\x69\x64\x65\x46\x72\x61\x6d\x65','\x4d\x44\x46','\x63\x6f\x6e\x74\x61\x69\x6e\x73','\x4d\x52\x47','\x42\x54\x65\x73\x74\x41\x64\x64\x65\x64\x51\x75\x61\x6e\x74\x69\x74\x79','\x69\x6e\x42\x61\x74\x74\x6c\x65','\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x64','\x53\x63\x65\x6e\x65\x5f\x53\x69\x6e\x67\x6c\x65\x4c\x6f\x61\x64\x54\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e','\x72\x65\x64\x75\x63\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x73\x79\x73\x74\x65\x6d\x43\x6f\x6c\x6f\x72','\x47\x61\x6d\x65\x5f\x55\x6e\x69\x74\x5f\x6f\x6e\x42\x61\x74\x74\x6c\x65\x45\x6e\x64','\x63\x6f\x6e\x73\x75\x6d\x65\x49\x74\x65\x6d','\x75\x70\x64\x61\x74\x65\x43\x6c\x6f\x73\x65','\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e','\x5f\x63\x6f\x72\x65\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65','\x41\x6c\x6c\x4d\x61\x70\x73','\x53\x54\x52\x55\x43\x54','\x43\x6f\x6e\x76\x65\x72\x74\x4e\x75\x6d\x62\x65\x72\x54\x6f\x53\x74\x72\x69\x6e\x67','\x59\x3a\x20\x25\x31','\x57\x61\x69\x74','\x75\x70\x64\x61\x74\x65\x4b\x65\x79\x54\x65\x78\x74','\x61\x64\x64\x43\x68\x69\x6c\x64\x54\x6f\x42\x61\x63\x6b','\x63\x72\x65\x61\x74\x65\x44\x69\x67\x69\x74\x73','\x5f\x62\x79\x70\x61\x73\x73\x43\x61\x6e\x43\x6f\x75\x6e\x74\x65\x72\x43\x68\x65\x63\x6b','\x65\x6e\x64','\x44\x61\x74\x61\x4d\x61\x6e\x61\x67\x65\x72\x5f\x73\x65\x74\x75\x70\x4e\x65\x77\x47\x61\x6d\x65','\x53\x74\x61\x74\x75\x73\x45\x71\x75\x69\x70\x42\x67\x54\x79\x70\x65','\x73\x65\x74\x41\x74\x74\x61\x63\x6b','\x70\x61\x67\x65\x75\x70','\x63\x75\x72\x72\x65\x6e\x74\x43\x6c\x61\x73\x73','\x72\x65\x71\x75\x65\x73\x74\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x65\x6e\x63\x6f\x75\x6e\x74\x65\x72\x53\x74\x65\x70','\x5f\x6f\x72\x69\x67\x69\x6e\x61\x6c\x56\x69\x65\x77\x70\x6f\x72\x74','\x70\x61\x67\x65\x64\x6f\x77\x6e\x53\x68\x6f\x77\x42\x75\x74\x74\x6f\x6e','\x70\x69\x63\x74\x75\x72\x65\x42\x75\x74\x74\x6f\x6e\x73','\x46\x37\x6b\x65\x79','\x49\x44\x73','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x63\x61\x6c\x63\x45\x61\x73\x69\x6e\x67','\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x49\x44','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x70\x61\x72\x61\x6d\x50\x6c\x75\x73','\x70\x69\x74\x63\x68','\x43\x72\x65\x61\x74\x65\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x49\x44','\x5f\x6c\x61\x73\x74\x58','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x42\x41\x43\x4b\x54\x41\x42','\x6c\x69\x73\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x70\x61\x72\x61\x6d\x4d\x61\x78','\x49\x74\x65\x6d\x48\x65\x69\x67\x68\x74','\x5f\x6f\x66\x66\x73\x65\x74\x59','\x65\x6e\x64\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x65\x76\x61','\x74\x61\x72\x67\x65\x74\x4f\x62\x6a\x65\x63\x74\x73','\x5f\x74\x61\x72\x67\x65\x74\x4f\x70\x61\x63\x69\x74\x79','\x4f\x4e\x45','\u3010\x25\x31\u3011\x0a','\x5f\x70\x69\x63\x74\x75\x72\x65\x4e\x61\x6d\x65','\x67\x65\x74\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4c\x61\x79\x65\x72','\x78\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x32','\x73\x68\x69\x66\x74','\x42\x6f\x78\x4d\x61\x72\x67\x69\x6e','\x67\x61\x75\x67\x65\x52\x61\x74\x65','\x75\x73\x65\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67','\x64\x72\x61\x77\x47\x61\x75\x67\x65','\x5f\x6c\x69\x73\x74\x57\x69\x6e\x64\x6f\x77','\x70\x6c\x61\x74\x66\x6f\x72\x6d','\x5f\x6c\x69\x73\x74','\x57\x69\x6e\x64\x6f\x77\x4c\x61\x79\x65\x72\x5f\x72\x65\x6e\x64\x65\x72','\x5f\x61\x6e\x63\x68\x6f\x72','\x5f\x61\x63\x74\x6f\x72','\x57\x49\x4e\x5f\x49\x43\x4f\x5f\x43\x4c\x45\x41\x52','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x63\x72\x65\x61\x74\x65\x54\x69\x6c\x65\x6d\x61\x70','\x70\x61\x69\x6e\x74\x4f\x70\x61\x63\x69\x74\x79','\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x63\x72\x65\x65\x6e\x53\x68\x61\x6b\x65','\x5f\x74\x69\x6c\x65\x6d\x61\x70','\x5f\x63\x61\x63\x68\x65\x53\x63\x61\x6c\x65\x58','\x76\x61\x6c\x75\x65\x4f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72','\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73','\x53\x45\x54\x54\x49\x4e\x47\x53','\x73\x65\x74\x48\x6f\x6d\x65','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x32','\x64\x61\x73\x68\x54\x6f\x67\x67\x6c\x65','\x69\x73\x4f\x70\x74\x69\x6f\x6e\x56\x61\x6c\x69\x64','\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x75\x70\x64\x61\x74\x65','\x62\x61\x74\x74\x6c\x65\x62\x61\x63\x6b\x73\x31','\x54\x69\x74\x6c\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74','\x53\x61\x76\x65\x4d\x65\x6e\x75','\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x65\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73','\x43\x45\x56','\x70\x61\x64\x64\x69\x6e\x67','\x70\x72\x6f\x63\x65\x73\x73\x44\x72\x61\x77\x49\x63\x6f\x6e','\x66\x69\x6c\x6c\x54\x65\x78\x74','\x61\x6c\x77\x61\x79\x73\x44\x61\x73\x68','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x43\x55\x53\x45\x4c','\x4d\x65\x6e\x75\x42\x67','\x69\x73\x50\x68\x79\x73\x69\x63\x61\x6c','\x6d\x61\x78\x54\x70','\x4e\x61\x6d\x65\x4d\x65\x6e\x75','\x61\x6e\x63\x68\x6f\x72','\x61\x6e\x67\x6c\x65','\x41\x63\x63\x75\x72\x61\x63\x79\x42\x6f\x6f\x73\x74','\x5f\x64\x72\x61\x77\x54\x65\x78\x74\x4f\x75\x74\x6c\x69\x6e\x65','\x54\x65\x78\x74\x50\x6f\x70\x75\x70\x53\x68\x6f\x77','\x58\x3a\x20\x25\x31','\x53\x63\x65\x6e\x65\x5f\x54\x69\x74\x6c\x65\x5f\x64\x72\x61\x77\x47\x61\x6d\x65\x54\x69\x74\x6c\x65','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x70\x72\x6f\x63\x65\x73\x73\x48\x61\x6e\x64\x6c\x69\x6e\x67','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x46\x61\x63\x65','\x66\x6f\x72\x63\x65\x53\x74\x65\x6e\x63\x69\x6c','\x69\x73\x41\x75\x74\x6f\x43\x6f\x6c\x6f\x72\x41\x66\x66\x65\x63\x74\x65\x64','\x73\x74\x61\x72\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x75\x70\x64\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79','\x53\x6d\x6f\x6f\x74\x68','\u3018\x43\x6f\x6d\x6d\x6f\x6e\x20\x45\x76\x65\x6e\x74\x20\x25\x31\x3a\x20\x25\x32\u3019\x20\x45\x6e\x64','\x63\x6c\x65\x61\x72\x54\x70','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x36','\x74\x65\x78\x74\x42\x61\x73\x65\x6c\x69\x6e\x65','\x64\x65\x61\x63\x74\x69\x76\x61\x74\x65','\x5f\x62\x61\x63\x6b\x53\x70\x72\x69\x74\x65\x32','\x5f\x64\x65\x73\x74\x72\x6f\x79\x49\x6e\x74\x65\x72\x6e\x61\x6c\x54\x65\x78\x74\x75\x72\x65\x73','\x42\x69\x74\x6d\x61\x70\x5f\x62\x6c\x74','\x43\x72\x69\x73\x69\x73\x52\x61\x74\x65','\x70\x75\x73\x68','\x63\x75\x72\x72\x65\x6e\x74','\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x4c\x61\x79\x65\x72','\x6f\x6e\x49\x6e\x70\x75\x74\x4f\x6b','\x53\x70\x72\x69\x74\x65\x5f\x41\x63\x74\x6f\x72\x5f\x73\x65\x74\x41\x63\x74\x6f\x72\x48\x6f\x6d\x65','\x63\x75\x72\x72\x65\x6e\x63\x79\x55\x6e\x69\x74','\x47\x61\x6d\x65\x5f\x53\x63\x72\x65\x65\x6e\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x54\x50\x42\x20\x41\x43\x54\x49\x56\x45','\x5f\x72\x65\x67\x69\x73\x74\x65\x72\x4b\x65\x79\x49\x6e\x70\x75\x74','\x5f\x73\x63\x72\x6f\x6c\x6c\x44\x75\x72\x61\x74\x69\x6f\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x49\x63\x6f\x6e','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x70\x6f\x77\x65\x72\x55\x70\x43\x6f\x6c\x6f\x72','\x4f\x50\x45\x4e\x5f\x50\x41\x52\x45\x4e','\x75\x70\x64\x61\x74\x65\x46\x72\x61\x6d\x65','\x53\x79\x73\x74\x65\x6d\x4c\x6f\x61\x64\x41\x75\x64\x69\x6f','\x47\x72\x61\x70\x68\x69\x63\x73\x5f\x64\x65\x66\x61\x75\x6c\x74\x53\x74\x72\x65\x74\x63\x68\x4d\x6f\x64\x65','\x41\x53\x54\x45\x52\x49\x53\x4b','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77\x42\x75\x74\x74\x6f\x6e\x52\x65\x63\x74','\x69\x74\x65\x6d','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x75\x70\x64\x61\x74\x65','\x42\x69\x74\x6d\x61\x70\x5f\x66\x69\x6c\x6c\x52\x65\x63\x74','\x70\x6c\x61\x79\x54\x65\x73\x74\x46\x37','\x31\x34\x39\x39\x33\x36\x38\x6f\x66\x6f\x6c\x58\x6d','\x64\x65\x73\x74\x72\x6f\x79\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x4d\x61\x72\x6b\x65\x64\x42\x69\x74\x6d\x61\x70\x73','\x69\x73\x53\x6d\x61\x72\x74\x45\x76\x65\x6e\x74\x43\x6f\x6c\x6c\x69\x73\x69\x6f\x6e\x4f\x6e','\x4e\x55\x4d\x50\x41\x44\x35','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e','\x73\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x4a\x53','\x25\x31\x0a','\x63\x6f\x6d\x6d\x61\x6e\x64\x33\x35\x37','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x73\x65\x5f\x69\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x50\x6c\x61\x79\x69\x6e\x67','\x5a\x45\x52\x4f','\x73\x74\x61\x74\x75\x73\x45\x71\x75\x69\x70\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x73\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x4a\x53','\x69\x73\x46\x75\x6c\x6c\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x69\x74\x6c\x65','\x4e\x65\x77\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x41\x6c\x6c','\x53\x63\x65\x6e\x65\x5f\x53\x68\x6f\x70\x5f\x63\x72\x65\x61\x74\x65','\x64\x72\x61\x77\x54\x65\x78\x74\x45\x78','\x46\x32\x32','\x6d\x61\x6b\x65\x49\x6e\x70\x75\x74\x42\x75\x74\x74\x6f\x6e\x53\x74\x72\x69\x6e\x67','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x66\x66\x73\x65\x74\x35','\x69\x73\x4c\x6f\x6f\x70\x56\x65\x72\x74\x69\x63\x61\x6c','\x47\x6f\x6c\x64\x46\x6f\x6e\x74\x53\x69\x7a\x65','\x70\x6c\x61\x79\x43\x75\x72\x73\x6f\x72','\x73\x65\x74\x47\x75\x61\x72\x64','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x32','\x69\x73\x49\x74\x65\x6d','\x62\x61\x74\x74\x6c\x65\x62\x61\x63\x6b\x73\x32','\x5f\x65\x64\x69\x74\x57\x69\x6e\x64\x6f\x77','\x6d\x61\x78\x54\x75\x72\x6e\x73','\x73\x6c\x6f\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x4f\x55\x54\x45\x4c\x41\x53\x54\x49\x43','\x78\x70\x61\x72\x61\x6d','\x61\x64\x64\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x54\x6f\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x25\x31\u3018\x43\x68\x6f\x69\x63\x65\x20\x25\x32\u3019\x20\x25\x33\x25\x31','\x67\x61\x75\x67\x65\x48\x65\x69\x67\x68\x74','\x69\x73\x52\x69\x67\x68\x74\x49\x6e\x70\x75\x74\x4d\x6f\x64\x65','\x73\x68\x6f\x77\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79','\x5f\x6d\x61\x70\x4e\x61\x6d\x65\x57\x69\x6e\x64\x6f\x77','\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74\x57\x69\x64\x74\x68','\x75\x70\x64\x61\x74\x65\x50\x6c\x61\x79\x54\x65\x73\x74\x46\x37','\x54\x65\x78\x74\x53\x74\x72','\x69\x6e\x69\x74\x42\x75\x74\x74\x6f\x6e\x48\x69\x64\x64\x65\x6e','\x41\x72\x6d\x6f\x72\x2d\x25\x31\x2d\x25\x32','\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x68\x6f\x75\x6c\x64\x4d\x69\x72\x72\x6f\x72','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x4a\x55\x4d\x50','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74','\x62\x75\x74\x74\x6f\x6e\x59','\x6d\x61\x78\x49\x74\x65\x6d\x73','\x41\x63\x74\x6f\x72\x48\x50\x43\x6f\x6c\x6f\x72','\x6d\x61\x78\x48\x6f\x72\x7a','\x62\x67\x73','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x53\x77\x69\x74\x63\x68','\x72\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x69\x73\x54\x72\x69\x67\x67\x65\x72\x65\x64','\x63\x6c\x6f\x73\x65','\x50\x61\x72\x73\x65\x53\x6b\x69\x6c\x6c\x4e\x6f\x74\x65\x74\x61\x67\x73','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x72\x65\x66\x72\x65\x73\x68','\x49\x4e\x51\x55\x49\x4e\x54','\x75\x70\x64\x61\x74\x65\x44\x61\x73\x68\x54\x6f\x67\x67\x6c\x65','\x61\x6e\x67\x6c\x65\x50\x6c\x75\x73','\x46\x36\x6b\x65\x79','\x42\x41\x43\x4b\x5f\x53\x4c\x41\x53\x48','\x74\x65\x78\x74\x43\x6f\x6c\x6f\x72','\x73\x65\x74\x4c\x61\x73\x74\x47\x61\x6d\x65\x70\x61\x64\x55\x73\x65\x64','\x67\x65\x74\x49\x6e\x70\x75\x74\x42\x75\x74\x74\x6f\x6e\x53\x74\x72\x69\x6e\x67','\x69\x73\x49\x74\x65\x6d\x53\x74\x79\x6c\x65','\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x44\x45\x46','\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x58','\x63\x72\x65\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65','\x6e\x65\x65\x64\x73\x55\x70\x64\x61\x74\x65','\x6f\x76\x65\x72\x61\x6c\x6c\x48\x65\x69\x67\x68\x74','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x69\x74\x65\x6d\x45\x76\x61','\x65\x64\x69\x74\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x73\x72\x63','\x47\x72\x61\x70\x68\x69\x63\x73\x5f\x63\x65\x6e\x74\x65\x72\x45\x6c\x65\x6d\x65\x6e\x74','\x41\x44\x44','\x72\x65\x6d\x6f\x76\x65\x54\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x53\x70\x72\x69\x74\x65\x73','\x5f\x73\x6b\x69\x6c\x6c\x54\x79\x70\x65\x57\x69\x6e\x64\x6f\x77','\x44\x75\x6d\x6d\x79\x42\x67\x54\x79\x70\x65','\x5f\x6c\x6f\x61\x64\x69\x6e\x67\x53\x74\x61\x74\x65','\x44\x54\x42','\x6f\x6e\x43\x6c\x69\x63\x6b','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x41\x55\x54\x4f','\x5f\x64\x61\x74\x61','\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x34','\x72\x65\x71\x75\x65\x73\x74\x4d\x6f\x74\x69\x6f\x6e','\x53\x63\x65\x6e\x65\x5f\x53\x6b\x69\x6c\x6c\x5f\x63\x72\x65\x61\x74\x65','\x70\x6f\x73\x69\x74\x69\x6f\x6e','\x6c\x69\x6e\x65\x48\x65\x69\x67\x68\x74','\x45\x78\x70\x6f\x72\x74\x53\x74\x72\x46\x72\x6f\x6d\x41\x6c\x6c\x54\x72\x6f\x6f\x70\x73','\x75\x70\x64\x61\x74\x65\x4d\x6f\x76\x65','\x74\x61\x72\x67\x65\x74','\x63\x72\x65\x61\x74\x65\x43\x75\x73\x74\x6f\x6d\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x49\x6d\x61\x67\x65\x73','\x74\x69\x6c\x65\x73\x65\x74\x46\x6c\x61\x67\x73','\x6d\x70\x43\x6f\x73\x74\x43\x6f\x6c\x6f\x72','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x74\x70\x43\x6f\x73\x74\x43\x6f\x6c\x6f\x72','\x46\x32\x31','\x73\x71\x72\x74','\x43\x6c\x61\x73\x73\x2d\x25\x31\x2d\x25\x32','\x6e\x61\x68','\x28\x5b\x5c\x2b\x5c\x2d\x5d\x5c\x64\x2b\x5c\x2e\x3f\x5c\x64\x2b\x29\x3e','\x6d\x6f\x76\x65\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x36','\x73\x65\x74\x41\x63\x74\x6f\x72\x48\x6f\x6d\x65','\x63\x68\x65\x63\x6b\x53\x75\x62\x73\x74\x69\x74\x75\x74\x65','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x35','\x46\x31\x36','\x70\x6f\x70\x53\x63\x65\x6e\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x5f\x69\x6e\x70\x75\x74\x53\x70\x65\x63\x69\x61\x6c\x4b\x65\x79\x43\x6f\x64\x65','\x5f\x65\x6e\x63\x6f\x75\x6e\x74\x65\x72\x43\x6f\x75\x6e\x74','\x46\x31\x35','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x57\x53\x43\x54\x52\x4c','\x73\x65\x74\x4d\x61\x69\x6e\x46\x6f\x6e\x74\x53\x69\x7a\x65','\x51\x55\x45\x53\x54\x49\x4f\x4e\x5f\x4d\x41\x52\x4b','\x5f\x73\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x65\x72\x74','\x62\x69\x74\x6d\x61\x70','\x41\x43\x43\x45\x50\x54','\x63\x6f\x6e\x74\x65\x78\x74','\x72\x65\x66\x72\x65\x73\x68\x44\x69\x6d\x6d\x65\x72\x42\x69\x74\x6d\x61\x70','\x72\x6f\x77\x53\x70\x61\x63\x69\x6e\x67','\x45\x49\x53\x55','\x4c\x49\x4e\x45\x41\x52','\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74','\x62\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x35','\x4b\x65\x79\x54\x41\x42','\x69\x74\x65\x6d\x48\x69\x74','\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x4c\x6f\x63\x61\x6c\x65','\x5f\x63\x75\x72\x72\x65\x6e\x74\x42\x67\x73','\x67\x61\x6d\x65\x54\x69\x74\x6c\x65','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x33','\x50\x41\x55\x53\x45','\x73\x76\x5f\x61\x63\x74\x6f\x72\x73','\x5f\x72\x65\x61\x6c\x53\x63\x61\x6c\x65','\x53\x68\x69\x66\x74\x54\x5f\x54\x6f\x67\x67\x6c\x65','\x4c\x61\x79\x65\x72','\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73','\x6d\x61\x69\x6e\x46\x6f\x6e\x74\x53\x69\x7a\x65','\x63\x61\x74\x65\x67\x6f\x72\x79\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74','\x57\x69\x6e\x64\x6f\x77\x5f\x45\x71\x75\x69\x70\x49\x74\x65\x6d\x5f\x69\x73\x45\x6e\x61\x62\x6c\x65\x64','\x73\x65\x74\x44\x69\x73\x70\x6c\x61\x79\x50\x6f\x73','\x74\x72\x61\x69\x74\x73\x50\x69','\x5f\x73\x6c\x6f\x74\x57\x69\x6e\x64\x6f\x77','\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x31\x31','\x63\x72\x65\x61\x74\x65\x54\x69\x74\x6c\x65\x42\x75\x74\x74\x6f\x6e\x73','\x72\x61\x6e\x64\x6f\x6d\x49\x6e\x74','\x50\x61\x72\x61\x6d\x43\x68\x61\x6e\x67\x65','\x73\x65\x74\x56\x69\x65\x77\x70\x6f\x72\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x46\x69\x78','\x67\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x49\x6e\x70\x75\x74\x42\x75\x74\x74\x6f\x6e\x4d\x61\x74\x63\x68','\x55\x6e\x74\x69\x74\x6c\x65\x64','\x53\x70\x6c\x69\x74\x45\x73\x63\x61\x70\x65','\x72\x65\x70\x6c\x61\x63\x65','\x69\x73\x47\x61\x6d\x65\x70\x61\x64\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64','\x44\x75\x72\x61\x74\x69\x6f\x6e\x50\x65\x72\x43\x68\x61\x74','\x43\x6f\x6c\x6f\x72\x43\x72\x69\x73\x69\x73','\x49\x4e\x4f\x55\x54\x43\x49\x52\x43','\x64\x72\x61\x77\x49\x63\x6f\x6e\x42\x79\x53\x69\x7a\x65','\x53\x74\x61\x74\x65\x49\x63\x6f\x6e\x73\x4e\x6f\x6e\x46\x72\x61\x6d\x65','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x45\x6e\x65\x6d\x69\x65\x73','\x43\x4f\x4e\x56\x45\x52\x54','\x43\x6f\x6c\x6f\x72\x4d\x50\x47\x61\x75\x67\x65\x32','\x50\x61\x67\x65','\x43\x6f\x6c\x6f\x72\x43\x54\x47\x61\x75\x67\x65\x32','\x4e\x55\x4d\x50\x41\x44\x33','\x69\x6e\x69\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x62\x75\x74\x74\x6f\x6e\x73\x21\x20\x47\x6f\x20\x74\x6f\x20\x70\x72\x6f\x6a\x65\x63\x74\x27\x73\x20\x72\x6d\x6d\x7a\x5f\x63\x6f\x72\x65\x2e\x6a\x73\x20\x61\x6e\x64\x20\x6d\x6f\x64\x69\x66\x79\x20\x49\x6e\x70\x75\x74\x2e\x6b\x65\x79\x4d\x61\x70\x70\x65\x72\x20','\x64\x65\x73\x74\x72\x6f\x79','\x62\x67\x73\x56\x6f\x6c\x75\x6d\x65','\x5f\x73\x6d\x6f\x6f\x74\x68','\x45\x78\x70\x6f\x72\x74\x43\x75\x72\x54\x72\x6f\x6f\x70\x54\x65\x78\x74','\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x4f\x72\x69\x67\x69\x6e\x61\x6c','\x70\x69\x63\x74\x75\x72\x65\x73','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x35','\x4d\x61\x70\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c','\u300b\x43\x6f\x6d\x6d\x65\x6e\x74\u300a\x0a\x25\x31\x0a','\x63\x72\x65\x61\x74\x65\x54\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x53\x70\x72\x69\x74\x65\x73','\x5f\x64\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x45\x78','\x75\x70\x64\x61\x74\x65\x53\x6d\x6f\x6f\x74\x68\x53\x63\x72\x6f\x6c\x6c','\x63\x65\x6e\x74\x65\x72','\x6d\x61\x78\x43\x6f\x6c\x73','\x69\x73\x44\x79\x69\x6e\x67','\x64\x65\x66\x61\x75\x6c\x74','\x72\x6f\x75\x6e\x64','\x70\x6f\x69\x6e\x74\x59','\x59\x6f\x75\x20\x64\x6f\x20\x6e\x6f\x74\x20\x68\x61\x76\x65\x20\x61\x20\x63\x75\x73\x74\x6f\x6d\x20\x49\x6e\x70\x75\x74\x2e\x6b\x65\x79\x4d\x61\x70\x70\x65\x72\x20\x77\x69\x74\x68\x20\x22\x63\x61\x6e\x63\x65\x6c\x22\x20\x61\x6e\x64\x20\x22\x6d\x65\x6e\x75\x22\x20','\x66\x61\x64\x65\x53\x70\x65\x65\x64','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x25\x31','\x50\x48\x41','\x74\x69\x6c\x65\x57\x69\x64\x74\x68','\x63\x6f\x6e\x74\x65\x6e\x74\x73\x4f\x70\x61\x63\x69\x74\x79','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74\x46\x69\x78','\x53\x70\x72\x69\x74\x65\x5f\x42\x61\x74\x74\x6c\x65\x72\x5f\x73\x74\x61\x72\x74\x4d\x6f\x76\x65','\x63\x75\x72\x73\x6f\x72\x50\x61\x67\x65\x64\x6f\x77\x6e','\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x4d\x6f\x64\x65','\x67\x6f\x6c\x64\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x4e\x55\x4d\x50\x41\x44\x34','\x64\x61\x6d\x61\x67\x65\x43\x6f\x6c\x6f\x72','\x5f\x6e\x61\x6d\x65','\x45\x4e\x44','\x50\x61\x72\x61\x6d','\x4d\x65\x6e\x75\x4c\x61\x79\x6f\x75\x74','\x53\x68\x6f\x72\x74\x63\x75\x74\x53\x63\x72\x69\x70\x74\x73','\x53\x43\x41\x4c\x45\x5f\x4d\x4f\x44\x45\x53','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x34','\x53\x68\x6f\x77\x41\x63\x74\x6f\x72\x4c\x65\x76\x65\x6c','\x70\x61\x72\x61\x6d','\x4d\x75\x74\x65','\x64\x72\x61\x77\x49\x74\x65\x6d','\x74\x69\x6c\x65\x48\x65\x69\x67\x68\x74','\x5f\x70\x72\x6f\x66\x69\x6c\x65\x57\x69\x6e\x64\x6f\x77','\x53\x77\x69\x74\x63\x68\x54\x6f\x67\x67\x6c\x65\x52\x61\x6e\x67\x65','\x50\x61\x72\x73\x65\x53\x74\x61\x74\x65\x4e\x6f\x74\x65\x74\x61\x67\x73','\x4f\x50\x45\x4e\x5f\x42\x52\x41\x43\x4b\x45\x54','\x66\x69\x6c\x74\x65\x72\x41\x72\x65\x61','\x53\x70\x72\x69\x74\x65\x5f\x64\x65\x73\x74\x72\x6f\x79','\x47\x61\x6d\x65\x5f\x53\x79\x73\x74\x65\x6d\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x74\x61\x72\x67\x65\x74\x4f\x70\x61\x63\x69\x74\x79','\x70\x72\x6f\x63\x65\x73\x73\x48\x61\x6e\x64\x6c\x69\x6e\x67','\x4b\x65\x79\x53\x48\x49\x46\x54','\x4d\x45\x56','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x50\x61\x67\x65\x75\x70','\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x69\x6e\x76\x6f\x6b\x65\x43\x6f\x75\x6e\x74\x65\x72\x41\x74\x74\x61\x63\x6b','\x4f\x55\x54\x51\x55\x41\x52\x54','\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x73\x6b\x6d\x61\x64\x67\x66','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x50\x41\x33','\x72\x65\x6d\x6f\x76\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x4d\x61\x70\x25\x31\x2e\x6a\x73\x6f\x6e','\x44\x41\x54\x41\x42\x41\x53\x45','\x49\x63\x6f\x6e\x49\x6e\x64\x65\x78','\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x54\x79\x70\x65','\x43\x6f\x6c\x6f\x72\x50\x6f\x77\x65\x72\x44\x6f\x77\x6e','\x64\x72\x61\x77\x49\x63\x6f\x6e','\x57\x49\x4e\x5f\x49\x43\x4f\x5f\x30\x30','\x75\x70\x64\x61\x74\x65\x44\x61\x74\x61','\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x64\x65\x74\x61\x63\x68','\x5f\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x58','\x67\x65\x74\x43\x6f\x6d\x62\x69\x6e\x65\x64\x53\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x54\x65\x78\x74','\x43\x6f\x6c\x6f\x72\x50\x6f\x77\x65\x72\x55\x70','\x73\x74\x6f\x72\x65\x4d\x61\x70\x44\x61\x74\x61','\x66\x69\x6c\x6c\x52\x65\x63\x74','\x57\x41\x52\x4e\x49\x4e\x47\x3a\x20\x25\x31\x20\x68\x61\x73\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x62\x65\x65\x6e\x20\x64\x65\x63\x6c\x61\x72\x65\x64\x0a\x61\x6e\x64\x20\x63\x61\x6e\x6e\x6f\x74\x20\x62\x65\x20\x75\x73\x65\x64\x20\x61\x73\x20\x61\x20\x51\x75\x69\x63\x6b\x20\x4a\x53\x20\x46\x75\x6e\x63\x74\x69\x6f\x6e','\x75\x70\x64\x61\x74\x65\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x69\x74\x6c\x65','\x5f\x74\x61\x72\x67\x65\x74\x4f\x66\x66\x73\x65\x74\x58','\x5f\x62\x75\x74\x74\x6f\x6e\x54\x79\x70\x65','\x69\x73\x45\x76\x65\x6e\x74\x54\x65\x73\x74','\x5f\x73\x74\x61\x74\x75\x73\x45\x71\x75\x69\x70\x57\x69\x6e\x64\x6f\x77','\x6f\x70\x61\x63\x69\x74\x79','\x6d\x61\x69\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74','\x5f\x75\x70\x41\x72\x72\x6f\x77\x53\x70\x72\x69\x74\x65','\x50\x61\x72\x73\x65\x49\x74\x65\x6d\x4e\x6f\x74\x65\x74\x61\x67\x73','\x73\x61\x76\x65\x56\x69\x65\x77\x70\x6f\x72\x74','\x25\x31\x27\x73\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x6d\x61\x74\x63\x68\x20\x70\x6c\x75\x67\x69\x6e\x27\x73\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x75\x70\x64\x61\x74\x65\x20\x69\x74\x20\x69\x6e\x20\x74\x68\x65\x20\x50\x6c\x75\x67\x69\x6e\x20\x4d\x61\x6e\x61\x67\x65\x72\x2e','\x75\x70\x32','\x46\x6f\x6e\x74\x53\x68\x61\x64\x6f\x77\x73','\x50\x61\x67\x65\x43\x68\x61\x6e\x67\x65','\x74\x61\x72\x67\x65\x74\x53\x70\x72\x69\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x64\x65\x66\x61\x75\x6c\x74\x49\x6e\x70\x75\x74\x4d\x6f\x64\x65','\x73\x65\x74\x75\x70\x42\x61\x74\x74\x6c\x65\x54\x65\x73\x74\x49\x74\x65\x6d\x73','\x74\x61\x72\x67\x65\x74\x73','\x63\x72\x65\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\u300a\u300a\u300a\x20\x45\x76\x65\x6e\x74\x20\x25\x31\x3a\x20\x25\x32\x2c\x20\x50\x61\x67\x65\x20\x25\x33\x20\u300b\u300b\u300b\x0a\x25\x34\x0a','\x65\x78\x69\x74','\x5f\x6d\x61\x70\x58','\x73\x65\x74\x75\x70\x52\x61\x74\x65','\x5f\x62\x61\x6c\x6c\x6f\x6f\x6e\x51\x75\x65\x75\x65','\x69\x73\x53\x70\x65\x63\x69\x61\x6c\x43\x6f\x64\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x74\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x4b\x65\x79\x55\x6e\x6c\x69\x73\x74\x65\x64','\x77\x69\x64\x74\x68','\x73\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x31','\x5f\x76\x69\x65\x77\x70\x6f\x72\x74\x53\x69\x7a\x65','\x43\x61\x74\x65\x67\x6f\x72\x79\x42\x67\x54\x79\x70\x65','\x64\x72\x61\x77\x47\x6f\x6c\x64\x49\x74\x65\x6d\x53\x74\x79\x6c\x65','\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74','\x69\x73\x4d\x61\x67\x69\x63\x61\x6c','\x72\x75\x6e\x43\x6f\x6d\x62\x69\x6e\x65\x64\x53\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x54\x65\x78\x74\x41\x73\x43\x6f\x64\x65','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x5f\x77\x69\x6e\x64\x6f\x77\x4c\x61\x79\x65\x72','\x4d\x49\x4e\x5f\x53\x41\x46\x45\x5f\x49\x4e\x54\x45\x47\x45\x52','\x62\x75\x74\x74\x6f\x6e','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x31','\x68\x6f\x6d\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x74\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x75\x70\x64\x61\x74\x65\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x73','\x5f\x74\x65\x78\x74\x75\x72\x65','\x5f\x74\x65\x6d\x70\x41\x63\x74\x6f\x72','\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x48\x61\x6e\x64\x6c\x69\x6e\x67','\x5f\x67\x61\x6d\x65\x70\x61\x64\x57\x61\x69\x74','\x69\x6e\x69\x74\x52\x6f\x74\x61\x74\x69\x6f\x6e','\x42\x61\x72\x42\x6f\x64\x79\x43\x6f\x6c\x6f\x72','\x5f\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x57\x69\x6e\x64\x6f\x77','\x63\x72\x65\x61\x74\x65\x44\x69\x6d\x6d\x65\x72\x53\x70\x72\x69\x74\x65','\x46\x31\x32','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x50\x54\x42','\x53\x63\x61\x6c\x65\x58','\x75\x70\x64\x61\x74\x65\x4c\x61\x73\x74\x54\x61\x72\x67\x65\x74','\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x64\x74\x68','\x73\x65\x74\x41\x6e\x63\x68\x6f\x72','\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x45\x6e\x64','\x66\x72\x61\x6d\x65\x73\x4d\x69\x6e','\x6f\x75\x74\x62\x6f\x75\x6e\x63\x65','\x6d\x61\x6b\x65\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x69\x74\x6c\x65','\x5f\x6c\x6f\x67\x57\x69\x6e\x64\x6f\x77','\x4c\x69\x73\x74\x42\x67\x54\x79\x70\x65','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x30','\x54\x68\x69\x73\x20\x73\x63\x65\x6e\x65\x20\x63\x61\x6e\x6e\x6f\x74\x20\x75\x74\x69\x6c\x69\x7a\x65\x20\x61\x20\x4f\x6e\x63\x65\x20\x50\x61\x72\x61\x6c\x6c\x65\x6c\x21','\x69\x73\x4d\x61\x70\x53\x63\x72\x6f\x6c\x6c\x4c\x69\x6e\x6b\x65\x64','\x75\x70\x64\x61\x74\x65\x41\x6e\x67\x6c\x65\x50\x6c\x75\x73','\x74\x69\x74\x6c\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77','\u3018\x43\x6f\x6d\x6d\x6f\x6e\x20\x45\x76\x65\x6e\x74\x20\x25\x31\x3a\x20\x25\x32\u3019\x20\x53\x74\x61\x72\x74','\x74\x69\x6c\x65\x73\x65\x74\x73','\x70\x61\x72\x61\x6d\x58','\x49\x6d\x70\x72\x6f\x76\x65\x64\x41\x63\x63\x75\x72\x61\x63\x79\x53\x79\x73\x74\x65\x6d','\x5f\x68\x70','\x4f\x70\x74\x69\x6f\x6e\x73\x4d\x65\x6e\x75','\x4f\x55\x54\x43\x49\x52\x43','\x74\x65\x78\x74\x57\x69\x64\x74\x68','\x6c\x61\x79\x6f\x75\x74\x53\x65\x74\x74\x69\x6e\x67\x73','\x4d\x41\x58\x48\x50','\x76\x61\x6c\x75\x65','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x6b','\x4b\x65\x79\x62\x6f\x61\x72\x64\x49\x6e\x70\x75\x74','\x70\x6f\x70','\x5f\x73\x68\x69\x66\x74\x59','\x73\x6e\x61\x70\x46\x6f\x72\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64','\x50\x61\x72\x73\x65\x41\x63\x74\x6f\x72\x4e\x6f\x74\x65\x74\x61\x67\x73','\x72\x65\x6d\x6f\x76\x65\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72','\x41\x75\x74\x6f\x53\x74\x72\x65\x74\x63\x68','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x50\x61\x67\x65\x64\x6f\x77\x6e','\x43\x6f\x6c\x6f\x72\x4d\x61\x6e\x61\x67\x65\x72\x5f\x6c\x6f\x61\x64\x57\x69\x6e\x64\x6f\x77\x73\x6b\x69\x6e','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73','\x49\x6e\x70\x75\x74\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68','\x65\x74\x79\x70\x65\x49\x64','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x75\x70\x64\x61\x74\x65','\x6d\x61\x6b\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74','\x52\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x45\x6e\x65\x6d\x69\x65\x73','\x48\x65\x6c\x70\x42\x67\x54\x79\x70\x65','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x31','\x56\x61\x72\x69\x61\x62\x6c\x65\x4a\x73\x42\x6c\x6f\x63\x6b','\x5f\x6e\x75\x6d\x62\x65\x72\x57\x69\x6e\x64\x6f\x77','\x61\x63\x74\x6f\x72','\x73\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x31','\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74','\x73\x6b\x69\x6c\x6c\x49\x64','\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64','\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64','\x63\x75\x72\x72\x65\x6e\x74\x56\x61\x6c\x75\x65','\x6f\x6e\x49\x6e\x70\x75\x74\x42\x61\x6e\x6e\x65\x64\x57\x6f\x72\x64\x73','\x53\x70\x72\x69\x74\x65\x5f\x53\x74\x61\x74\x65\x49\x63\x6f\x6e\x5f\x75\x70\x64\x61\x74\x65\x46\x72\x61\x6d\x65','\x49\x4e\x4f\x55\x54\x45\x58\x50\x4f','\x63\x6c\x65\x61\x72\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x73','\x69\x73\x4d\x61\x78\x4c\x65\x76\x65\x6c','\x53\x70\x65\x65\x64','\x53\x79\x73\x74\x65\x6d\x53\x65\x74\x53\x69\x64\x65\x56\x69\x65\x77','\x63\x68\x61\x6e\x67\x65\x54\x69\x6c\x65\x73\x65\x74','\x64\x72\x61\x77\x50\x61\x72\x61\x6d\x4e\x61\x6d\x65','\x63\x74\x72\x6c','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x35','\x70\x61\x64\x5a\x65\x72\x6f','\x44\x49\x56\x49\x44\x45','\x67\x6c\x6f\x62\x61\x6c\x41\x6c\x70\x68\x61','\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x59','\x75\x70\x64\x61\x74\x65\x42\x61\x74\x74\x6c\x65\x56\x61\x72\x69\x61\x62\x6c\x65\x73','\x63\x72\x65\x61\x74\x65\x43\x61\x6e\x63\x65\x6c\x42\x75\x74\x74\x6f\x6e','\x53\x4c\x45\x45\x50','\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x4c\x69\x73\x74','\x42\x69\x74\x6d\x61\x70\x5f\x64\x72\x61\x77\x54\x65\x78\x74\x4f\x75\x74\x6c\x69\x6e\x65','\x45\x58\x45\x43\x55\x54\x45','\x53\x74\x61\x74\x75\x73\x50\x61\x72\x61\x6d\x73\x52\x65\x63\x74','\x6d\x65\x6e\x75\x53\x68\x6f\x77\x42\x75\x74\x74\x6f\x6e','\x69\x74\x65\x6d\x50\x61\x64\x64\x69\x6e\x67','\x65\x78\x70\x50\x61\x72\x61\x6d\x73','\x76\x69\x73\x69\x62\x6c\x65','\x44\x45\x54\x41\x43\x48\x5f\x50\x49\x43\x54\x55\x52\x45\x5f\x43\x4f\x4e\x54\x41\x49\x4e\x45\x52','\x74\x69\x6c\x65\x73\x65\x74','\x5f\x73\x74\x61\x74\x75\x73\x57\x69\x6e\x64\x6f\x77','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x46\x4a\x5f\x4a\x49\x53\x48\x4f','\x73\x68\x6f\x77\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x45\x58\x43\x4c\x41\x4d\x41\x54\x49\x4f\x4e','\x5f\x72\x65\x66\x72\x65\x73\x68\x50\x61\x75\x73\x65\x53\x69\x67\x6e','\x69\x6d\x67\x2f\x25\x31\x2f','\x54\x61\x72\x67\x65\x74\x41\x6e\x67\x6c\x65','\x73\x74\x79\x70\x65\x49\x64','\x50\x61\x72\x73\x65\x45\x6e\x65\x6d\x79\x4e\x6f\x74\x65\x74\x61\x67\x73','\x70\x69\x63\x74\x75\x72\x65','\x73\x65\x65\x6b','\x6f\x70\x74\x69\x6f\x6e\x73\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x63\x72\x65\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x53\x70\x72\x69\x74\x65\x73','\x69\x6e\x69\x74\x69\x61\x6c\x4c\x65\x76\x65\x6c','\x5f\x63\x6c\x69\x65\x6e\x74\x41\x72\x65\x61','\x72\x65\x66\x72\x65\x73\x68\x41\x63\x74\x6f\x72','\x75\x70\x64\x61\x74\x65\x41\x6e\x63\x68\x6f\x72','\x70\x72\x6f\x63\x65\x73\x73\x54\x69\x6d\x69\x6e\x67\x44\x61\x74\x61','\x64\x65\x73\x74\x72\x6f\x79\x65\x64','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x41\x54\x54\x4e','\x6c\x69\x73\x74','\x42\x4b\x53\x50','\x53\x77\x69\x74\x63\x68\x52\x61\x6e\x64\x6f\x6d\x69\x7a\x65\x52\x61\x6e\x67\x65','\x41\x63\x74\x6f\x72\x2d\x25\x31\x2d\x25\x32','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x44\x6f\x77\x6e','\x47\x61\x6d\x65\x5f\x45\x76\x65\x6e\x74\x5f\x69\x73\x43\x6f\x6c\x6c\x69\x64\x65\x64\x57\x69\x74\x68\x45\x76\x65\x6e\x74\x73','\x64\x72\x61\x77\x50\x61\x72\x61\x6d\x54\x65\x78\x74','\x48\x65\x6c\x70\x52\x65\x63\x74','\x68\x65\x6c\x70\x41\x72\x65\x61\x54\x6f\x70\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x53\x74\x61\x74\x75\x73\x42\x67\x54\x79\x70\x65','\x36\x31\x37\x30\x30\x43\x4a\x7a\x46\x74\x50','\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x50\x61\x72\x73\x65\x41\x6c\x6c\x4e\x6f\x74\x65\x74\x61\x67\x73','\x73\x65\x74\x4d\x75\x74\x65','\x28\x5b\x5c\x2b\x5c\x2d\x5d\x5c\x64\x2b\x29\x28\x5b\x25\uff05\x5d\x29\x3e','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x68\x65\x6c\x70\x41\x72\x65\x61\x54\x6f\x70','\x63\x74\x72\x6c\x4b\x65\x79','\x73\x65\x74\x75\x70\x42\x75\x74\x74\x6f\x6e\x49\x6d\x61\x67\x65','\x70\x72\x65\x70\x61\x72\x65','\x6f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72\x44\x6d\x67','\x5f\x73\x63\x72\x65\x65\x6e\x59','\x4f\x66\x66\x42\x61\x72\x4f\x70\x61\x63\x69\x74\x79','\x43\x4e\x54','\x5f\x63\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x53\x74\x79\x6c\x65','\x64\x72\x61\x77\x43\x75\x72\x72\x65\x6e\x63\x79\x56\x61\x6c\x75\x65','\x53\x70\x72\x69\x74\x65\x5f\x47\x61\x75\x67\x65\x5f\x67\x61\x75\x67\x65\x52\x61\x74\x65','\x6e\x6f\x74\x65','\x6d\x61\x72\x6b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x4d\x6f\x64\x69\x66\x69\x65\x64','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x67\x61\x75\x67\x65\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72','\x63\x74\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x49\x4e\x4f\x55\x54\x53\x49\x4e\x45','\x54\x79\x70\x65','\x53\x63\x61\x6c\x65\x59','\x73\x65\x74\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x75\x70\x64\x61\x74\x65\x4d\x61\x69\x6e\x4d\x75\x6c\x74\x69\x70\x6c\x79','\x47\x6f\x6c\x64\x49\x63\x6f\x6e','\x53\x6b\x69\x6c\x6c\x2d\x25\x31\x2d\x25\x32','\x63\x6f\x64\x65','\x43\x6f\x6c\x53\x70\x61\x63\x69\x6e\x67','\x72\x65\x73\x65\x72\x76\x65\x50\x6c\x61\x79\x54\x65\x73\x74\x4e\x65\x77\x47\x61\x6d\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74','\x4e\x55\x4d','\x43\x6f\x6c\x6f\x72\x44\x65\x61\x74\x68','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x75\x6d\x62\x65\x72\x49\x6e\x70\x75\x74\x5f\x73\x74\x61\x72\x74','\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x75\x70\x64\x61\x74\x65\x4c\x61\x73\x74\x54\x61\x72\x67\x65\x74','\x5f\x74\x61\x72\x67\x65\x74','\u3018\x53\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x20\x54\x65\x78\x74\u3019\x0a','\x5f\x70\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65\x73','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x36','\x61\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67\x41\x6e\x67\x6c\x65\x50\x6c\x75\x73','\x6c\x65\x76\x65\x6c','\x39\x37\x34\x38\x31\x33\x72\x6d\x4d\x56\x4a\x4e','\x74\x65\x78\x74\x25\x31','\x45\x78\x70\x6f\x72\x74\x41\x6c\x6c\x54\x72\x6f\x6f\x70\x54\x65\x78\x74','\x73\x68\x61\x6b\x65','\x73\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x55\x70\x64\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x42\x67','\x55\x70\x70\x65\x72\x20\x4c\x65\x66\x74','\x73\x65\x74\x75\x70','\x4c\x45\x53\x53\x5f\x54\x48\x41\x4e','\x61\x64\x64','\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x44\x69\x67\x69\x74\x43\x68\x61\x6e\x67\x65','\x73\x63\x61\x6c\x65\x59','\x4f\x72\x69\x67\x69\x6e','\x52\x61\x74\x65\x31','\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x48\x6f\x6d\x65\x45\x6e\x64\x54\x72\x69\x67\x67\x65\x72','\x53\x77\x69\x74\x63\x68\x41\x63\x74\x6f\x72\x54\x65\x78\x74','\x61\x74\x62\x41\x63\x74\x69\x76\x65','\x55\x52\x4c','\x4c\x6f\x61\x64\x4d\x65\x6e\x75','\x75\x70\x64\x61\x74\x65\x42\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79','\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x68\x61\x6b\x65\x56\x65\x72\x74','\x5f\x63\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x4c\x61\x79\x65\x72\x73','\x66\x61\x63\x65\x57\x69\x64\x74\x68','\x53\x63\x65\x6e\x65\x5f\x45\x71\x75\x69\x70\x5f\x63\x72\x65\x61\x74\x65','\x73\x65\x74\x75\x70\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67','\x6c\x6f\x61\x64\x49\x63\x6f\x6e\x42\x69\x74\x6d\x61\x70','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x68\x6f\x70\x53\x65\x6c\x6c\x5f\x69\x73\x45\x6e\x61\x62\x6c\x65\x64','\x68\x69\x74','\x42\x67\x46\x69\x6c\x65\x6e\x61\x6d\x65\x31','\x53\x63\x65\x6e\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e','\x69\x73\x48\x61\x6e\x64\x6c\x65\x64','\x75\x70\x64\x61\x74\x65\x50\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x53\x74\x61\x74\x65','\x4b\x65\x79\x62\x6f\x61\x72\x64','\x6f\x6e\x44\x61\x74\x61\x62\x61\x73\x65\x4c\x6f\x61\x64\x65\x64','\x63\x6f\x6e\x73\x75\x6d\x61\x62\x6c\x65','\x54\x47\x52','\x70\x6c\x61\x79\x42\x67\x6d','\x63\x65\x6e\x74\x65\x72\x59','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x5f\x6f\x6e\x4c\x6f\x61\x64','\x47\x61\x6d\x65\x5f\x43\x68\x61\x72\x61\x63\x74\x65\x72\x5f\x70\x72\x6f\x63\x65\x73\x73\x4d\x6f\x76\x65\x43\x6f\x6d\x6d\x61\x6e\x64','\x69\x73\x41\x63\x74\x6f\x72','\x49\x6e\x70\x75\x74\x5f\x63\x6c\x65\x61\x72','\x73\x63\x72\x6f\x6c\x6c\x59','\x38\x32\x31\x31\x37\x39\x32\x63\x7a\x61\x4b\x54\x65','\x61\x64\x76\x61\x6e\x63\x65\x64','\x57\x69\x6e\x64\x6f\x77','\x74\x65\x78\x74\x48\x65\x69\x67\x68\x74','\x49\x4e\x4f\x55\x54\x51\x55\x41\x52\x54','\x72\x65\x6d\x6f\x76\x65\x41\x6c\x6c\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73','\x25\x31\x3a\x20\x45\x78\x69\x74\x20','\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x63\x68\x61\x6e\x67\x65\x54\x69\x6c\x65\x73\x65\x74','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x32','\x66\x61\x63\x65\x73','\x64\x72\x61\x77\x43\x68\x61\x72\x61\x63\x74\x65\x72','\x53\x6d\x61\x72\x74\x45\x76\x65\x6e\x74\x43\x6f\x6c\x6c\x69\x73\x69\x6f\x6e\x50\x72\x69\x6f\x72\x69\x74\x79','\x44\x72\x61\x77\x49\x74\x65\x6d\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x4a\x53','\x53\x68\x6f\x77\x4a\x53','\x46\x32\x33','\x67\x65\x74\x4c\x61\x73\x74\x50\x6c\x75\x67\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72','\x6f\x6e\x6c\x6f\x61\x64','\x6d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x72\x65\x73\x69\x7a\x65','\x5f\x74\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x54\x65\x72\x72\x61\x69\x6e\x54\x61\x67\x73','\x63\x72\x65\x61\x74\x65\x4d\x65\x6e\x75\x42\x75\x74\x74\x6f\x6e','\x47\x61\x6d\x65\x5f\x42\x61\x74\x74\x6c\x65\x72\x42\x61\x73\x65\x5f\x69\x6e\x69\x74\x4d\x65\x6d\x62\x65\x72\x73','\x54\x72\x61\x6e\x73\x6c\x75\x63\x65\x6e\x74\x4f\x70\x61\x63\x69\x74\x79','\x25\x31\x20\x69\x73\x20\x69\x6e\x63\x6f\x72\x72\x65\x63\x74\x6c\x79\x20\x70\x6c\x61\x63\x65\x64\x20\x6f\x6e\x20\x74\x68\x65\x20\x70\x6c\x75\x67\x69\x6e\x20\x6c\x69\x73\x74\x2e\x0a\x49\x74\x20\x69\x73\x20\x61\x20\x54\x69\x65\x72\x20\x25\x32\x20\x70\x6c\x75\x67\x69\x6e\x20\x70\x6c\x61\x63\x65\x64\x20\x6f\x76\x65\x72\x20\x6f\x74\x68\x65\x72\x20\x54\x69\x65\x72\x20\x25\x33\x20\x70\x6c\x75\x67\x69\x6e\x73\x2e\x0a\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x6f\x72\x64\x65\x72\x20\x74\x68\x65\x20\x70\x6c\x75\x67\x69\x6e\x20\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20\x73\x6d\x61\x6c\x6c\x65\x73\x74\x20\x74\x6f\x20\x6c\x61\x72\x67\x65\x73\x74\x20\x74\x69\x65\x72\x20\x6e\x75\x6d\x62\x65\x72\x73\x2e','\x65\x73\x63\x61\x70\x65','\x53\x63\x65\x6e\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x69\x73\x47\x61\x6d\x65\x41\x63\x74\x69\x76\x65','\x44\x69\x6d\x43\x6f\x6c\x6f\x72\x32','\x45\x4e\x54\x45\x52','\x42\x6f\x74\x74\x6f\x6d\x42\x75\x74\x74\x6f\x6e\x73','\x4c\x6f\x61\x64\x45\x72\x72\x6f\x72','\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x45\x78\x70\x47\x61\x75\x67\x65','\x63\x72\x65\x61\x74\x65\x50\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x73','\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x73','\x67\x65\x74\x49\x6e\x70\x75\x74\x4d\x75\x6c\x74\x69\x42\x75\x74\x74\x6f\x6e\x53\x74\x72\x69\x6e\x67\x73','\x45\x78\x70\x6f\x72\x74\x53\x74\x72\x46\x72\x6f\x6d\x41\x6c\x6c\x4d\x61\x70\x73','\x45\x78\x70\x6f\x72\x74\x41\x6c\x6c\x4d\x61\x70\x54\x65\x78\x74','\x63\x6f\x6e\x74\x65\x6e\x74\x73','\x69\x6e\x62\x6f\x75\x6e\x63\x65','\x74\x65\x73\x74','\x74\x65\x78\x74\x53\x69\x7a\x65\x45\x78','\x50\x69\x78\x65\x6c\x61\x74\x65\x64','\x50\x6f\x73\x69\x74\x69\x6f\x6e\x4a\x53','\x61\x64\x64\x4c\x6f\x61\x64\x4c\x69\x73\x74\x65\x6e\x65\x72','\x5f\x74\x61\x72\x67\x65\x74\x4f\x66\x66\x73\x65\x74\x59','\x50\x52\x49\x4e\x54\x53\x43\x52\x45\x45\x4e','\x70\x72\x6f\x63\x65\x73\x73\x4d\x6f\x76\x65\x43\x6f\x6d\x6d\x61\x6e\x64','\x73\x63\x72\x6f\x6c\x6c\x62\x61\x72','\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x42\x75\x74\x74\x6f\x6e\x73','\x75\x70\x64\x61\x74\x65\x46\x72\x61\x6d\x65\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x61\x74\x79\x70\x65\x49\x64','\x63\x6f\x6e\x74\x65\x6e\x74\x73\x42\x61\x63\x6b','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6e\x6f\x72\x6d\x61\x6c\x43\x6f\x6c\x6f\x72','\x70\x61\x72\x61\x6d\x63\x68\x61\x6e\x67\x65\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x63\x75\x72\x73\x6f\x72\x44\x6f\x77\x6e','\x68\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x31\x30\x37\x31\x39\x34\x37\x37\x44\x79\x6c\x53\x66\x64','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x33','\x41\x52\x52\x41\x59\x45\x56\x41\x4c','\x48\x52\x47','\x4f\x6e\x63\x65\x20\x50\x61\x72\x61\x6c\x6c\x65\x6c\x20\x66\x6f\x72\x20\x42\x61\x74\x74\x6c\x65\x20\x72\x65\x71\x75\x69\x72\x65\x73\x20\x56\x69\x73\x75\x4d\x5a\x5f\x31\x5f\x42\x61\x74\x74\x6c\x65\x43\x6f\x72\x65\x21','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x69\x74\x65\x6d\x52\x65\x63\x74','\x43\x6f\x6c\x6f\x72\x43\x54\x47\x61\x75\x67\x65\x31','\x5f\x69\x6e\x64\x65\x78','\x70\x72\x65\x70\x61\x72\x65\x4e\x65\x78\x74\x53\x63\x65\x6e\x65','\x28\x5c\x64\x2b\x5c\x2e\x3f\x5c\x64\x2b\x29\x3e','\x43\x61\x74\x65\x67\x6f\x72\x79\x52\x65\x63\x74','\x67\x65\x74\x54\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x54\x65\x72\x72\x61\x69\x6e\x54\x61\x67\x73','\x56\x69\x73\x75\x4d\x5a\x5f\x31\x5f\x4f\x70\x74\x69\x6f\x6e\x73\x43\x6f\x72\x65','\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x75\x70\x64\x61\x74\x65','\x67\x65\x74\x43\x6f\x6c\x6f\x72\x44\x61\x74\x61\x46\x72\x6f\x6d\x50\x6c\x75\x67\x69\x6e\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73','\x64\x69\x6d\x43\x6f\x6c\x6f\x72\x32','\x4d\x41\x54','\x47\x61\x6d\x65\x5f\x54\x65\x6d\x70\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x6f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72\x47\x61\x75\x67\x65','\x6c\x65\x61\x72\x6e\x69\x6e\x67\x73','\x42\x41\x43\x4b\x53\x50\x41\x43\x45','\x63\x72\x65\x61\x74\x65\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72','\x72\x61\x6e\x64\x6f\x6d','\x73\x63\x61\x6c\x65\x58','\x76\x65\x72\x74\x4a\x53','\x46\x6f\x72\x63\x65\x4e\x6f\x50\x6c\x61\x79\x54\x65\x73\x74','\x65\x6e\x65\x6d\x69\x65\x73','\x61\x70\x70\x6c\x79\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67','\x47\x6f\x6c\x64','\x5f\x74\x61\x72\x67\x65\x74\x59','\x6b\x65\x79\x62\x6f\x61\x72\x64','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x69\x6e\x69\x74\x42\x61\x73\x69\x63','\x77\x69\x6e\x64\x6f\x77\x4f\x70\x61\x63\x69\x74\x79','\x5f\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x53\x63\x65\x6e\x65\x5f\x49\x74\x65\x6d\x5f\x63\x72\x65\x61\x74\x65','\x41\x4c\x54\x47\x52','\x6d\x6f\x76\x65','\x4b\x65\x79\x25\x31','\x53\x70\x72\x69\x74\x65\x5f\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x5f\x70\x72\x6f\x63\x65\x73\x73\x53\x6f\x75\x6e\x64\x54\x69\x6d\x69\x6e\x67\x73','\x69\x73\x41\x63\x74\x69\x76\x65\x54\x70\x62','\x6c\x65\x76\x65\x6c\x55\x70\x52\x65\x63\x6f\x76\x65\x72\x79','\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x4d\x61\x74\x63\x68\x65\x73','\x73\x70\x6c\x69\x74','\x69\x73\x4e\x75\x6d\x70\x61\x64\x50\x72\x65\x73\x73\x65\x64','\x50\x61\x64\x64\x69\x6e\x67','\x73\x65\x74\x53\x69\x64\x65\x56\x69\x65\x77','\x78\x70\x61\x72\x61\x6d\x50\x6c\x75\x73','\x73\x65\x74\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74','\x42\x69\x74\x6d\x61\x70\x5f\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74\x57\x69\x64\x74\x68','\x42\x75\x79\x52\x65\x63\x74','\x41\x75\x64\x69\x6f\x43\x68\x61\x6e\x67\x65\x42\x67\x73\x56\x6f\x6c\x75\x6d\x65','\x6d\x61\x78','\x73\x74\x61\x72\x74','\x70\x6c\x61\x79\x54\x65\x73\x74\x53\x68\x69\x66\x74\x52','\x73\x69\x6e','\x55\x6e\x6e\x61\x6d\x65\x64','\x5f\x73\x63\x72\x6f\x6c\x6c\x42\x61\x72\x48\x6f\x72\x7a','\x63\x72\x65\x61\x74\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65','\x78\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x31','\x43\x6f\x6c\x6f\x72','\x70\x61\x72\x73\x65','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x64\x65\x61\x74\x68\x43\x6f\x6c\x6f\x72','\x4c\x55\x4b','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64','\x52\x65\x71\x75\x69\x72\x65\x46\x6f\x63\x75\x73','\x4e\x6f\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73','\x4f\x6e\x4c\x6f\x61\x64\x4a\x53','\x78\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x4a\x53','\x5f\x70\x61\x74\x74\x65\x72\x6e\x48\x65\x69\x67\x68\x74','\x0a\x0a\x0a\x0a\x0a','\x63\x74\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x47\x52\x44','\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x69\x74\x65\x6d\x45\x76\x61','\x5f\x6d\x6f\x76\x65\x6d\x65\x6e\x74\x44\x75\x72\x61\x74\x69\x6f\x6e','\x5f\x6f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x73','\x6f\x6e\x4c\x6f\x61\x64','\x4e\x61\x6d\x65','\x63\x61\x6e\x63\x65\x6c\x53\x68\x6f\x77\x42\x75\x74\x74\x6f\x6e','\x68\x6f\x72\x7a','\x69\x73\x53\x63\x65\x6e\x65\x42\x61\x74\x74\x6c\x65','\x69\x6e\x64\x65\x78\x4f\x66','\x47\x61\x6d\x65\x5f\x4d\x61\x70\x5f\x73\x63\x72\x6f\x6c\x6c\x52\x69\x67\x68\x74','\x6f\x72\x69\x67\x69\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x72\x65\x66\x72\x65\x73\x68','\x50\x52\x49\x4e\x54','\x52\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x45\x6e\x65\x6d\x69\x65\x73\x31\x33\x30','\x62\x75\x79\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x73\x65\x5f\x75\x70\x64\x61\x74\x65','\x5f\x61\x63\x74\x6f\x72\x57\x69\x6e\x64\x6f\x77','\x67\x65\x74\x43\x75\x73\x74\x6f\x6d\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x53\x65\x74\x74\x69\x6e\x67\x73','\x48\x4f\x4d\x45','\x67\x65\x74\x4c\x61\x73\x74\x47\x61\x6d\x65\x70\x61\x64\x55\x73\x65\x64','\x72\x65\x74\x72\x69\x65\x76\x65\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x64\x72\x61\x77\x53\x65\x67\x6d\x65\x6e\x74','\x49\x4e\x51\x55\x41\x44','\x4d\x41\x58\x5f\x47\x4c\x5f\x54\x45\x58\x54\x55\x52\x45\x53','\x46\x31\x37','\x73\x63\x72\x6f\x6c\x6c\x52\x69\x67\x68\x74','\x73\x6d\x6f\x6f\x74\x68','\x28\x5c\x64\x2b\x29\x28\x5b\x25\uff05\x5d\x29\x3e','\x73\x6c\x69\x63\x65','\x43\x6f\x6c\x6f\x72\x4d\x50\x47\x61\x75\x67\x65\x31','\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x74\x65\x72\x6d\x69\x6e\x61\x74\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x43\x6c\x65\x61\x72\x42\x75\x67\x46\x69\x78','\x4d\x41\x58\x4d\x50','\x47\x6f\x6c\x64\x4d\x61\x78','\x53\x63\x65\x6e\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65','\x69\x73\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x56\x69\x73\x69\x62\x6c\x65','\x5f\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b','\x5f\x66\x6f\x72\x63\x65\x64\x42\x61\x74\x74\x6c\x65\x47\x72\x69\x64\x53\x79\x73\x74\x65\x6d','\x5f\x74\x69\x6d\x65\x72\x53\x70\x72\x69\x74\x65','\x72\x65\x6d\x6f\x76\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x46\x72\x6f\x6d\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x62\x69\x74\x6d\x61\x70\x48\x65\x69\x67\x68\x74','\x35\x39\x31\x36\x4f\x47\x44\x61\x77\x59','\x42\x75\x79\x42\x67\x54\x79\x70\x65','\x62\x61\x63\x6b\x73\x70\x61\x63\x65','\x66\x6c\x75\x73\x68','\x56\x69\x73\x75\x4d\x5a\x5f\x31\x5f\x42\x61\x74\x74\x6c\x65\x43\x6f\x72\x65','\x49\x4e\x53\x49\x4e\x45','\x4f\x66\x66\x42\x61\x72\x43\x6f\x6c\x6f\x72','\x34\x30\x32\x69\x79\x56\x55\x52\x6b','\x74\x75\x72\x6e','\x63\x72\x65\x61\x74\x65\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64','\x6d\x6f\x76\x65\x52\x65\x6c\x61\x74\x69\x76\x65\x54\x6f\x52\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x43\x68\x61\x6e\x67\x65','\x45\x6e\x65\x6d\x79','\x64\x75\x72\x61\x74\x69\x6f\x6e','\x53\x70\x72\x69\x74\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x75\x70\x64\x61\x74\x65\x4f\x72\x69\x67\x69\x6e','\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x49\x63\x6f\x6e\x73','\x74\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x53\x63\x65\x6e\x65\x5f\x55\x6e\x6c\x69\x73\x74\x65\x64','\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x65\x78\x74','\x43\x41\x4e\x43\x45\x4c','\x63\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x52\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x45\x6e\x65\x6d\x69\x65\x73','\x74\x68\x69\x63\x6b\x6e\x65\x73\x73','\x69\x73\x41\x6c\x69\x76\x65','\x61\x6e\x63\x68\x6f\x72\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67','\x5f\x6d\x69\x72\x72\x6f\x72','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73','\x78\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x4a\x53','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x31','\x63\x75\x72\x73\x6f\x72\x50\x61\x67\x65\x75\x70','\x53\x54\x45\x4e\x43\x49\x4c\x5f\x54\x45\x53\x54','\x5f\x62\x61\x74\x74\x6c\x65\x46\x69\x65\x6c\x64','\x44\x65\x74\x61\x63\x68\x4d\x61\x70\x50\x69\x63\x74\x75\x72\x65\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x66\x66\x73\x65\x74\x32','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x70\x65\x6e\x64\x69\x6e\x67\x43\x6f\x6c\x6f\x72','\x43\x74\x72\x6c\x51\x75\x69\x63\x6b\x4c\x6f\x61\x64','\x6d\x65\x6e\x75','\x70\x72\x6f\x63\x65\x73\x73\x44\x69\x67\x69\x74\x43\x68\x61\x6e\x67\x65','\x6c\x6f\x61\x64\x54\x69\x74\x6c\x65\x32','\x5f\x6f\x6e\x4b\x65\x79\x50\x72\x65\x73\x73','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x75\x6d\x62\x65\x72\x49\x6e\x70\x75\x74\x5f\x70\x72\x6f\x63\x65\x73\x73\x44\x69\x67\x69\x74\x43\x68\x61\x6e\x67\x65','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x54\x65\x78\x74','\x58\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x46\x6f\x72\x6d\x75\x6c\x61','\x49\x74\x65\x6d\x50\x61\x64\x64\x69\x6e\x67','\x41\x52\x52\x41\x59\x4e\x55\x4d','\x5f\x61\x64\x64\x53\x70\x6f\x74\x54\x69\x6c\x65','\x5f\x69\x6e\x70\x75\x74\x53\x74\x72\x69\x6e\x67','\x45\x78\x74\x4a\x53','\x53\x68\x6f\x77\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72','\x50\x47\x44\x4e','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x44\x61\x6d\x61\x67\x65\x43\x6f\x6c\x6f\x72','\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x57\x69\x6e\x64\x6f\x77','\x50\x41\x31','\x42\x69\x74\x6d\x61\x70\x5f\x72\x65\x73\x69\x7a\x65','\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x4c\x65\x66\x74','\x5f\x63\x6c\x69\x63\x6b\x48\x61\x6e\x64\x6c\x65\x72','\x72\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x45\x6e\x65\x6d\x69\x65\x73\x42\x79\x52\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e','\x69\x73\x4d\x56\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x45\x51\x55\x41\x4c\x53','\x75\x70\x64\x61\x74\x65\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x73','\x63\x6f\x73','\x41\x75\x64\x69\x6f\x43\x68\x61\x6e\x67\x65\x42\x67\x6d\x50\x69\x74\x63\x68','\x68\x61\x73\x45\x6e\x63\x72\x79\x70\x74\x65\x64\x49\x6d\x61\x67\x65\x73','\x49\x63\x6f\x6e','\x5f\x6c\x61\x73\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x79\x6d\x62\x6f\x6c','\x69\x73\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x50\x6c\x61\x79\x69\x6e\x67','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x42\x69\x74\x6d\x61\x70','\x72\x65\x73\x65\x72\x76\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74','\x6c\x65\x76\x65\x6c\x55\x70','\x74\x61\x72\x67\x65\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x64\x6f\x65\x73\x4e\x61\x6d\x65\x43\x6f\x6e\x74\x61\x69\x6e\x42\x61\x6e\x6e\x65\x64\x57\x6f\x72\x64\x73','\x67\x65\x74\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x5f\x6d\x6f\x64\x65','\x6f\x6e\x42\x61\x74\x74\x6c\x65\x53\x74\x61\x72\x74','\x67\x72\x61\x64\x69\x65\x6e\x74\x46\x69\x6c\x6c\x52\x65\x63\x74','\x70\x6c\x61\x79\x43\x75\x72\x73\x6f\x72\x53\x6f\x75\x6e\x64','\x63\x72\x65\x61\x74\x65\x4a\x73\x51\x75\x69\x63\x6b\x46\x75\x6e\x63\x74\x69\x6f\x6e','\x72\x65\x6e\x64\x65\x72','\x61\x72\x65\x42\x75\x74\x74\x6f\x6e\x73\x4f\x75\x74\x73\x69\x64\x65\x4d\x61\x69\x6e\x55\x49','\x42\x69\x74\x6d\x61\x70\x5f\x67\x72\x61\x64\x69\x65\x6e\x74\x46\x69\x6c\x6c\x52\x65\x63\x74','\x74\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x64\x65\x74\x65\x72\x6d\x69\x6e\x65\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74\x56\x61\x6c\x69\x64','\x72\x65\x71\x75\x65\x73\x74\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x65\x6c\x65\x63\x74\x61\x62\x6c\x65\x5f\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x65','\x69\x73\x43\x6c\x6f\x73\x65\x64','\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70','\x50\x4c\x55\x53','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x25\x31','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x33','\x65\x76\x61\x6c\x75\x61\x74\x65','\x41\x70\x70\x6c\x79\x45\x61\x73\x69\x6e\x67','\x63\x68\x65\x63\x6b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x44\x69\x73\x70\x6c\x61\x79\x43\x65\x6e\x74\x65\x72','\x64\x6f\x77\x6e','\x6d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x4e\x55\x4d\x50\x41\x44\x37','\x4d\x6f\x64\x65\x72\x6e\x43\x6f\x6e\x74\x72\x6f\x6c\x73','\x64\x65\x61\x74\x68\x43\x6f\x6c\x6f\x72','\x69\x73\x54\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x65\x64','\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x32\x32','\x53\x61\x76\x65\x64\x20\x66\x69\x6c\x65\x20\x61\x73\x20\x25\x31\x20\x69\x6e\x20\x70\x72\x6f\x6a\x65\x63\x74\x20\x66\x6f\x6c\x64\x65\x72\x2e','\x50\x47\x55\x50','\x52\x50\x47\x4d\x41\x4b\x45\x52\x5f\x56\x45\x52\x53\x49\x4f\x4e','\x5f\x62\x67\x73\x42\x75\x66\x66\x65\x72','\x42\x6c\x75\x72\x46\x69\x6c\x74\x65\x72','\x69\x73\x49\x6e\x70\x75\x74\x74\x69\x6e\x67','\x74\x69\x74\x6c\x65','\x73\x65\x74\x75\x70\x43\x75\x73\x74\x6f\x6d\x52\x61\x74\x65\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x5f\x77\x69\x6e\x64\x6f\x77\x73\x6b\x69\x6e','\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x4e\x69\x63\x6b\x6e\x61\x6d\x65','\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x42\x61\x73\x65\x5f\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x50\x6f\x77\x65\x72','\x4a\x53\x4f\x4e','\x43\x6f\x6c\x6f\x72\x54\x50\x47\x61\x75\x67\x65\x31','\x5f\x6c\x61\x73\x74\x59','\x50\x45\x52\x49\x4f\x44','\x5f\x70\x61\x67\x65\x75\x70\x42\x75\x74\x74\x6f\x6e','\x64\x69\x73\x70\x6c\x61\x79\x59','\x70\x6c\x61\x79\x54\x65\x73\x74\x53\x68\x69\x66\x74\x54','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x50\x61\x67\x65\x42\x75\x74\x74\x6f\x6e\x73','\x63\x6c\x6f\x6e\x65','\x44\x65\x66\x61\x75\x6c\x74\x53\x74\x79\x6c\x65','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4f\x66\x66\x73\x65\x74\x33','\x63\x61\x6c\x63\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67','\x5f\x68\x65\x6c\x70\x57\x69\x6e\x64\x6f\x77','\x68\x65\x6c\x70\x41\x72\x65\x61\x54\x6f\x70','\x5f\x75\x70\x64\x61\x74\x65\x47\x61\x6d\x65\x70\x61\x64\x53\x74\x61\x74\x65','\x69\x73\x4c\x6f\x6f\x70\x48\x6f\x72\x69\x7a\x6f\x6e\x74\x61\x6c','\x65\x6e\x65\x6d\x79','\x6b\x65\x79\x73\x20\x66\x6f\x72\x20\x62\x6f\x74\x68\x20\x22\x63\x61\x6e\x63\x65\x6c\x22\x20\x61\x6e\x64\x20\x22\x6d\x65\x6e\x75\x22\x21\x0a\x0a','\x67\x61\x69\x6e\x49\x74\x65\x6d','\x54\x65\x78\x74\x4d\x61\x6e\x61\x67\x65\x72\x5f\x70\x61\x72\x61\x6d','\x75\x70\x64\x61\x74\x65\x57\x61\x69\x74\x4d\x6f\x64\x65','\x70\x72\x6f\x63\x65\x73\x73\x42\x61\x63\x6b','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x64\x61\x74\x61\x2f','\x5f\x64\x6f\x77\x6e\x41\x72\x72\x6f\x77\x53\x70\x72\x69\x74\x65','\x24\x64\x61\x74\x61\x4d\x61\x70','\x5f\x6c\x61\x73\x74\x47\x61\x6d\x65\x70\x61\x64','\x6e\x61\x6d\x65','\x46\x32\x30','\x4d\x45\x54\x41','\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x49\x44','\x72\x65\x66\x72\x65\x73\x68\x53\x70\x72\x69\x74\x65\x73\x65\x74\x46\x6f\x72\x45\x78\x74\x65\x6e\x64\x65\x64\x54\x69\x6c\x65\x73','\x78\x64\x67\x2d\x6f\x70\x65\x6e','\x6c\x6f\x67','\x49\x6e\x70\x75\x74\x5f\x75\x70\x64\x61\x74\x65\x47\x61\x6d\x65\x70\x61\x64\x53\x74\x61\x74\x65','\x4f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72\x44\x6d\x67','\x62\x67\x6d\x56\x6f\x6c\x75\x6d\x65','\x5f\x74\x72\x6f\x6f\x70\x49\x64','\x52\x65\x6e\x64\x65\x72\x65\x72','\x5f\x64\x75\x72\x61\x74\x69\x6f\x6e','\x64\x69\x73\x61\x62\x6c\x65','\x43\x68\x61\x6e\x63\x65','\x63\x75\x72\x73\x6f\x72\x44\x6f\x77\x6e','\x49\x4e\x53\x45\x52\x54','\x73\x65\x74\x43\x6f\x6c\x6f\x72\x54\x6f\x6e\x65','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x5f\x70\x61\x67\x65\x64\x6f\x77\x6e\x42\x75\x74\x74\x6f\x6e','\x4f\x55\x54\x53\x49\x4e\x45','\x5f\x69\x63\x6f\x6e\x49\x6e\x64\x65\x78','\x73\x65\x74\x54\x61\x72\x67\x65\x74\x41\x6e\x63\x68\x6f\x72','\x53\x69\x64\x65\x56\x69\x65\x77','\x6f\x6e\x4e\x61\x6d\x65\x4f\x6b','\x4c\x65\x76\x65\x6c\x55\x70\x46\x75\x6c\x6c\x48\x70','\x72\x65\x73\x65\x74\x54\x65\x78\x74\x43\x6f\x6c\x6f\x72','\x61\x6c\x6c\x54\x69\x6c\x65\x73','\x77\x68\x6f\x6c\x65\x44\x75\x72\x61\x74\x69\x6f\x6e','\x57\x69\x6e\x64\x6f\x77\x5f\x53\x74\x61\x74\x75\x73\x42\x61\x73\x65\x5f\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x53\x69\x6d\x70\x6c\x65\x53\x74\x61\x74\x75\x73','\x6c\x6f\x61\x64\x53\x79\x73\x74\x65\x6d\x49\x6d\x61\x67\x65\x73','\x67\x65\x74\x4c\x65\x76\x65\x6c','\x6d\x75\x74\x65','\x75\x70\x64\x61\x74\x65\x50\x69\x63\x74\x75\x72\x65\x53\x65\x74\x74\x69\x6e\x67\x73','\x63\x72\x65\x61\x74\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x6e\x64\x6f\x77','\x72\x65\x74\x72\x65\x61\x74','\x46\x75\x6e\x63\x74\x69\x6f\x6e\x4e\x61\x6d\x65','\x6f\x6e\x42\x75\x74\x74\x6f\x6e\x49\x6d\x61\x67\x65\x4c\x6f\x61\x64','\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x74\x65\x72\x6d\x69\x6e\x61\x74\x65','\x5f\x72\x65\x66\x72\x65\x73\x68\x41\x72\x72\x6f\x77\x73','\x61\x64\x64\x57\x69\x6e\x64\x6f\x77','\x69\x6e\x64\x65\x78','\x73\x74\x61\x74\x75\x73\x50\x61\x72\x61\x6d\x73\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x25\x31\x25\x32','\x4d\x55\x4c\x54\x49\x50\x4c\x59','\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x4c\x65\x76\x65\x6c','\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x54\x79\x70\x65','\x50\x72\x65\x73\x65\x72\x76\x65\x4e\x75\x6d\x62\x65\x72\x73','\x41\x75\x74\x6f\x53\x63\x72\x6f\x6c\x6c\x4c\x6f\x63\x6b\x58','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x38','\x5f\x61\x63\x74\x69\x76\x65','\x49\x4e\x51\x55\x41\x52\x54','\x73\x65\x6c\x65\x63\x74','\x63\x61\x6c\x63\x45\x61\x73\x69\x6e\x67','\x50\x45\x52\x43\x45\x4e\x54','\x46\x32\x34','\x66\x6f\x6e\x74','\x53\x63\x65\x6e\x65\x5f\x4c\x6f\x61\x64','\x42\x41\x43\x4b\x5f\x51\x55\x4f\x54\x45','\x53\x6b\x69\x6c\x6c\x54\x79\x70\x65\x52\x65\x63\x74','\x65\x6e\x61\x62\x6c\x65\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x45\x78','\x66\x69\x6c\x6c\x41\x6c\x6c','\x53\x74\x61\x74\x75\x73\x4d\x65\x6e\x75','\x54\x69\x6c\x65\x6d\x61\x70\x5f\x61\x64\x64\x53\x68\x61\x64\x6f\x77','\x6f\x66\x66\x73\x65\x74\x58','\x68\x65\x6c\x70\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74','\x69\x6e\x69\x74\x52\x6f\x74\x61\x74\x69\x6f\x6e\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x73\x63\x72\x6f\x6c\x6c\x44\x6f\x77\x6e','\x43\x54\x42','\x67\x61\x75\x67\x65\x4c\x69\x6e\x65\x48\x65\x69\x67\x68\x74','\x75\x70\x64\x61\x74\x65\x45\x66\x66\x65\x6b\x73\x65\x65\x72','\x5f\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x46\x69\x6c\x74\x65\x72','\x45\x58\x52','\x63\x72\x65\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65','\x5b\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5d','\x53\x6e\x61\x70\x73\x68\x6f\x74\x4f\x70\x61\x63\x69\x74\x79','\x73\x65\x6e\x64','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x34','\x42\x67\x54\x79\x70\x65','\x41\x52\x52\x41\x59\x46\x55\x4e\x43','\x61\x64\x6a\x75\x73\x74\x53\x70\x72\x69\x74\x65','\x72\x61\x6e\x64\x6f\x6d\x4a\x53','\x5f\x69\x73\x57\x69\x6e\x64\x6f\x77','\x63\x65\x69\x6c','\x44\x6f\x63\x75\x6d\x65\x6e\x74\x54\x69\x74\x6c\x65\x46\x6d\x74','\x63\x68\x65\x63\x6b\x53\x63\x72\x6f\x6c\x6c\x42\x61\x72\x42\x69\x74\x6d\x61\x70','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x74\x72\x79\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x25\x32\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x7d\x20\x63\x61\x74\x63\x68\x20\x28\x65\x29\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x69\x66\x20\x28\x24\x67\x61\x6d\x65\x54\x65\x6d\x70\x2e\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74\x28\x29\x29\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x63\x6f\x6e\x73\x6f\x6c\x65\x2e\x6c\x6f\x67\x28\x27\x4a\x53\x20\x51\x75\x69\x63\x6b\x20\x46\x75\x6e\x63\x74\x69\x6f\x6e\x20\x22\x25\x31\x22\x20\x45\x72\x72\x6f\x72\x21\x27\x29\x3b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x63\x6f\x6e\x73\x6f\x6c\x65\x2e\x6c\x6f\x67\x28\x65\x29\x3b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x7d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x72\x65\x74\x75\x72\x6e\x20\x30\x3b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x7d\x0a\x20\x20\x20\x20','\x62\x69\x6e\x64','\x64\x72\x6f\x70\x49\x74\x65\x6d\x73','\x44\x69\x67\x69\x74\x47\x72\x6f\x75\x70\x69\x6e\x67\x45\x78\x54\x65\x78\x74','\x73\x65\x74\x45\x61\x73\x69\x6e\x67\x54\x79\x70\x65','\x49\x4e\x4f\x55\x54\x43\x55\x42\x49\x43','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x45\x54\x42','\x69\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x61\x62\x6c\x65','\x41\x52\x52\x41\x59\x53\x54\x52\x55\x43\x54','\x70\x6f\x77\x65\x72\x55\x70\x43\x6f\x6c\x6f\x72','\x50\x44\x52','\x43\x4f\x4c\x4f\x4e','\x61\x72\x65\x42\x75\x74\x74\x6f\x6e\x73\x48\x69\x64\x64\x65\x6e','\x73\x65\x74\x41\x63\x74\x69\x6f\x6e','\x63\x61\x6e\x55\x73\x65','\x69\x73\x4d\x61\x73\x6b\x69\x6e\x67\x45\x6e\x61\x62\x6c\x65\x64','\x53\x79\x73\x74\x65\x6d\x4c\x6f\x61\x64\x49\x6d\x61\x67\x65\x73','\x53\x63\x65\x6e\x65\x5f\x42\x6f\x6f\x74\x5f\x73\x74\x61\x72\x74\x4e\x6f\x72\x6d\x61\x6c\x47\x61\x6d\x65','\x70\x72\x6f\x63\x65\x73\x73\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x73','\x69\x73\x47\x61\x6d\x65\x70\x61\x64\x54\x72\x69\x67\x67\x65\x72\x65\x64','\x53\x77\x69\x74\x63\x68\x54\x6f\x67\x67\x6c\x65\x4f\x6e\x65','\x63\x72\x65\x61\x74\x65\x57\x69\x6e\x64\x6f\x77\x4c\x61\x79\x65\x72','\x61\x64\x64\x51\x75\x65\x75\x65','\x64\x72\x61\x77\x46\x61\x63\x65','\x5f\x70\x61\x72\x61\x6d\x50\x6c\x75\x73','\x61\x72\x65\x54\x69\x6c\x65\x53\x68\x61\x64\x6f\x77\x73\x48\x69\x64\x64\x65\x6e','\x6e\x77\x2e\x67\x75\x69','\x5f\x73\x74\x6f\x72\x65\x64\x4d\x61\x70\x54\x65\x78\x74','\x5f\x70\x6c\x61\x79\x74\x65\x73\x74\x46\x37\x4c\x6f\x6f\x70\x69\x6e\x67','\x65\x78\x70','\x41\x47\x49','\x5f\x68\x65\x69\x67\x68\x74','\x70\x61\x72\x61\x6d\x46\x6c\x61\x74','\x70\x6c\x61\x79\x4f\x6e\x63\x65\x50\x61\x72\x61\x6c\x6c\x65\x6c\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72','\x42\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x6d\x61\x69\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74','\x64\x72\x61\x77\x54\x65\x78\x74\x54\x6f\x70\x41\x6c\x69\x67\x6e\x65\x64','\x57\x69\x6e\x64\x6f\x77\x5f\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x43\x6f\x6e\x74\x65\x6e\x74\x73','\x73\x65\x74\x54\x6f\x70\x52\x6f\x77','\x25\x31\x20\x69\x73\x20\x6d\x69\x73\x73\x69\x6e\x67\x20\x61\x20\x72\x65\x71\x75\x69\x72\x65\x64\x20\x70\x6c\x75\x67\x69\x6e\x2e\x0a\x50\x6c\x65\x61\x73\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20\x25\x32\x20\x69\x6e\x74\x6f\x20\x74\x68\x65\x20\x50\x6c\x75\x67\x69\x6e\x20\x4d\x61\x6e\x61\x67\x65\x72\x2e','\x5f\x68\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x73','\x72\x67\x62\x61\x28\x30\x2c\x20\x30\x2c\x20\x30\x2c\x20\x30\x2e\x37\x29','\x6d\x61\x6b\x65\x46\x6f\x6e\x74\x42\x69\x67\x67\x65\x72','\x48\x45\x4c\x50','\x69\x73\x57\x69\x6e\x64\x6f\x77\x4d\x61\x73\x6b\x69\x6e\x67\x45\x6e\x61\x62\x6c\x65\x64','\x50\x54\x42','\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x4e\x55\x4d\x50\x41\x44\x32','\x69\x73\x45\x6e\x61\x62\x6c\x65\x64','\x58\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x35','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x75\x70\x64\x61\x74\x65\x52\x6f\x74\x61\x74\x69\x6f\x6e','\x74\x70\x43\x6f\x73\x74\x43\x6f\x6c\x6f\x72','\x45\x56\x41','\x5f\x70\x72\x65\x76\x69\x6f\x75\x73\x43\x6c\x61\x73\x73','\x70\x61\x72\x61\x6d\x46\x6c\x61\x74\x4a\x53','\x75\x70\x64\x61\x74\x65\x54\x72\x61\x6e\x73\x66\x6f\x72\x6d','\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x6e\x75\x6d\x52\x65\x70\x65\x61\x74\x73','\x65\x61\x73\x69\x6e\x67\x54\x79\x70\x65','\x73\x63\x61\x6c\x65','\x49\x4e\x4f\x55\x54\x42\x4f\x55\x4e\x43\x45','\x53\x70\x72\x69\x74\x65\x5f\x47\x61\x75\x67\x65\x5f\x63\x75\x72\x72\x65\x6e\x74\x56\x61\x6c\x75\x65','\x66\x72\x61\x6d\x65\x73\x50\x65\x72\x43\x68\x61\x72','\x45\x78\x70\x6f\x72\x74\x20\x54\x72\x6f\x6f\x70\x20\x54\x65\x78\x74\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x77\x69\x6c\x6c\x20\x66\x69\x6e\x69\x73\x68\x20\x69\x6e\x20\x25\x31\x20\x6d\x73\x28\x73\x29','\x61\x73\x69\x6e','\x53\x65\x6c\x6c\x52\x65\x63\x74','\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e','\x54\x69\x74\x6c\x65','\x5f\x62\x67\x6d\x42\x75\x66\x66\x65\x72','\x73\x74\x65\x6e\x63\x69\x6c\x46\x75\x6e\x63','\x53\x68\x6f\x70\x4d\x65\x6e\x75','\x74\x65\x72\x6d\x69\x6e\x61\x74\x65','\x73\x65\x74\x54\x69\x6c\x65\x46\x72\x61\x6d\x65','\x66\x69\x6c\x6c\x53\x74\x79\x6c\x65','\x63\x61\x74\x63\x68\x55\x6e\x6b\x6e\x6f\x77\x6e\x45\x72\x72\x6f\x72','\x69\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x50\x6c\x61\x79\x69\x6e\x67','\x53\x68\x6f\x77\x44\x65\x76\x54\x6f\x6f\x6c\x73','\x70\x61\x6e','\x49\x4e\x4f\x55\x54\x51\x55\x41\x44','\x53\x79\x73\x74\x65\x6d\x53\x65\x74\x57\x69\x6e\x64\x6f\x77\x50\x61\x64\x64\x69\x6e\x67','\x53\x63\x65\x6e\x65\x5f\x4d\x65\x6e\x75\x42\x61\x73\x65\x5f\x63\x72\x65\x61\x74\x65\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64','\x69\x73\x47\x61\x6d\x65\x70\x61\x64\x42\x75\x74\x74\x6f\x6e\x50\x72\x65\x73\x73\x65\x64','\x44\x69\x73\x70\x6c\x61\x79\x4c\x6f\x63\x6b\x58','\x69\x63\x6f\x6e\x48\x65\x69\x67\x68\x74','\x6c\x65\x6e\x67\x74\x68','\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x48\x6f\x6d\x65','\x50\x61\x72\x73\x65\x41\x72\x6d\x6f\x72\x4e\x6f\x74\x65\x74\x61\x67\x73','\x47\x61\x6d\x65\x5f\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x31\x30\x35','\x6d\x61\x69\x6e\x41\x72\x65\x61\x48\x65\x69\x67\x68\x74\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x5f\x73\x75\x62\x6a\x65\x63\x74','\x44\x4f\x55\x42\x4c\x45\x5f\x51\x55\x4f\x54\x45','\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x42\x61\x63\x6b\x73\x70\x61\x63\x65','\x76\x6f\x6c\x75\x6d\x65','\x65\x76\x61\x64\x65','\x64\x72\x61\x77\x54\x65\x78\x74','\x63\x68\x61\x72\x61\x63\x74\x65\x72\x73','\x6e\x6f\x72\x6d\x61\x6c','\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x63\x68\x65\x63\x6b\x53\x75\x62\x73\x74\x69\x74\x75\x74\x65','\x42\x61\x6e\x6e\x65\x64\x57\x6f\x72\x64\x73','\x4e\x55\x4d\x50\x41\x44\x31','\x67\x61\x75\x67\x65\x42\x61\x63\x6b\x43\x6f\x6c\x6f\x72','\x52\x61\x74\x65\x32','\x73\x65\x6c\x65\x63\x74\x4c\x61\x73\x74','\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65','\x70\x72\x65\x73\x73\x65\x64','\x6f\x66\x66\x43\x6f\x6c\x6f\x72','\x52\x65\x70\x6f\x73\x69\x74\x69\x6f\x6e\x41\x63\x74\x6f\x72\x73','\x5f\x64\x69\x6d\x6d\x65\x72\x53\x70\x72\x69\x74\x65','\x4f\x75\x74\x6c\x69\x6e\x65\x43\x6f\x6c\x6f\x72','\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x41\x62\x62','\x4a\x55\x4e\x4a\x41','\x5f\x64\x72\x61\x77\x54\x65\x78\x74\x53\x68\x61\x64\x6f\x77','\x53\x70\x72\x69\x74\x65\x5f\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4d\x56\x5f\x75\x70\x64\x61\x74\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x70\x65\x6e\x64\x69\x6e\x67\x43\x6f\x6c\x6f\x72','\x79\x53\x63\x72\x6f\x6c\x6c\x4c\x69\x6e\x6b\x65\x64\x4f\x66\x66\x73\x65\x74','\x53\x63\x65\x6e\x65\x5f\x4e\x61\x6d\x65\x5f\x63\x72\x65\x61\x74\x65','\x5f\x63\x65\x6e\x74\x65\x72\x45\x6c\x65\x6d\x65\x6e\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x43\x54\x52\x4c','\x5f\x69\x6e\x42\x61\x74\x74\x6c\x65','\x50\x4c\x41\x59','\x53\x54\x45\x4e\x43\x49\x4c\x5f\x42\x55\x46\x46\x45\x52\x5f\x42\x49\x54','\x43\x4c\x4f\x53\x45\x5f\x42\x52\x41\x43\x4b\x45\x54','\x65\x6e\x2d\x55\x53','\x5f\x68\x6f\x76\x65\x72\x65\x64','\x70\x6f\x73','\x4f\x6b\x54\x65\x78\x74','\x77\x61\x69\x74\x69\x6e\x67','\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x4a\x53','\x42\x67\x46\x69\x6c\x65\x6e\x61\x6d\x65\x32','\x62\x61\x73\x65\x49\x64','\x5f\x6d\x61\x69\x6e\x53\x70\x72\x69\x74\x65','\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x4a\x53','\x47\x45\x54','\x43\x49\x52\x43\x55\x4d\x46\x4c\x45\x58','\x65\x78\x70\x52\x61\x74\x65','\x45\x53\x43','\x4c\x76\x45\x78\x70\x47\x61\x75\x67\x65','\x5f\x6f\x6e\x45\x72\x72\x6f\x72','\x53\x63\x65\x6e\x65\x5f\x54\x69\x74\x6c\x65\x54\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e','\x43\x6f\x6c\x6f\x72\x4d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x32','\x50\x69\x63\x74\x75\x72\x65\x46\x69\x6c\x65\x6e\x61\x6d\x65','\x50\x61\x72\x73\x65\x57\x65\x61\x70\x6f\x6e\x4e\x6f\x74\x65\x74\x61\x67\x73','\x6d\x61\x6b\x65\x54\x61\x72\x67\x65\x74\x53\x70\x72\x69\x74\x65\x73','\x73\x63\x72\x6f\x6c\x6c\x55\x70','\x6f\x70\x65\x6e\x69\x6e\x67\x53\x70\x65\x65\x64','\x72\x65\x73\x65\x74\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x43\x65\x6e\x74\x65\x72','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x4f\x54\x42','\x53\x70\x72\x69\x74\x65\x5f\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x5f\x73\x65\x74\x56\x69\x65\x77\x70\x6f\x72\x74','\x41\x63\x74\x6f\x72\x4d\x50\x43\x6f\x6c\x6f\x72','\x52\x45\x43','\x52\x65\x76\x65\x72\x74\x50\x72\x65\x73\x65\x72\x76\x65\x4e\x75\x6d\x62\x65\x72\x73','\x72\x65\x74\x75\x72\x6e\x20\x30','\x50\x49\x50\x45','\x56\x69\x73\x75\x4d\x5a\x5f\x32\x5f\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d\x43\x54\x42','\x5f\x73\x74\x6f\x72\x65\x64\x5f\x6d\x61\x78\x4c\x76\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x31','\x5f\x6e\x75\x6d\x62\x65\x72','\x69\x73\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x50\x61\x72\x61\x6d\x41\x72\x72\x6f\x77','\x46\x49\x4e\x41\x4c','\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x34','\u3016\u3016\u3016\x20\x4d\x61\x70\x20\x25\x31\x3a\x20\x25\x32\x20\x53\x63\x72\x69\x70\x74\x20\u3017\u3017\u3017\x0a\x0a','\x72\x65\x66\x72\x65\x73\x68\x57\x69\x74\x68\x54\x65\x78\x74\x43\x6f\x64\x65\x53\x75\x70\x70\x6f\x72\x74','\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x39','\x63\x65\x6e\x74\x65\x72\x43\x61\x6d\x65\x72\x61\x43\x68\x65\x63\x6b\x44\x61\x74\x61','\x41\x52\x52\x41\x59\x53\x54\x52','\x70\x6c\x61\x79\x4f\x6b','\x6d\x61\x69\x6e\x43\x6f\x6d\x6d\x61\x6e\x64\x57\x69\x64\x74\x68','\x70\x65\x72\x66\x6f\x72\x6d\x4d\x69\x73\x73','\x42\x54\x42','\x70\x6c\x61\x79\x54\x65\x73\x74\x46\x36','\x73\x61\x76\x65','\x67\x65\x74\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4c\x6f\x63\x61\x74\x69\x6f\x6e','\x65\x78\x70\x47\x61\x75\x67\x65\x43\x6f\x6c\x6f\x72\x32','\x6c\x61\x79\x65\x72\x65\x64\x54\x69\x6c\x65\x73','\x73\x63\x61\x6c\x65\x53\x70\x72\x69\x74\x65','\x73\x74\x72\x69\x6e\x67','\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74\x5f\x64\x65\x74\x61\x63\x68','\x67\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x49\x6e\x70\x75\x74\x42\x75\x74\x74\x6f\x6e\x53\x74\x72\x69\x6e\x67','\x75\x70\x64\x61\x74\x65\x52\x6f\x74\x61\x74\x69\x6f\x6e','\x64\x65\x73\x74\x72\x6f\x79\x43\x6f\x6e\x74\x65\x6e\x74\x73','\x35\x31\x5a\x69\x41\x79\x65\x79','\x73\x74\x72\x6f\x6b\x65\x52\x65\x63\x74','\x5f\x63\x6f\x6c\x6f\x72\x43\x61\x63\x68\x65','\x6d\x65\x6d\x62\x65\x72\x73','\x63\x68\x61\x6e\x67\x65\x43\x6c\x61\x73\x73','\x78\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x32','\x6d\x61\x69\x6e\x41\x72\x65\x61\x54\x6f\x70\x53\x69\x64\x65\x42\x75\x74\x74\x6f\x6e\x4c\x61\x79\x6f\x75\x74','\x73\x65\x74\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x3c\x25\x31\x20\x25\x32\x3a\x5b\x20\x5d','\x73\x70\x61\x72\x61\x6d\x50\x6c\x75\x73\x32','\x73\x70\x61\x72\x61\x6d','\x5f\x73\x63\x61\x6c\x65\x58','\x43\x61\x6e\x63\x65\x6c\x54\x65\x78\x74','\x5f\x62\x61\x63\x6b\x53\x70\x72\x69\x74\x65\x31','\x49\x4e\x45\x58\x50\x4f','\x62\x6c\x65\x6e\x64\x46\x75\x6e\x63','\x54\x50\x42\x20\x57\x41\x49\x54','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x50\x41\x31','\x43\x4f\x4d\x4d\x41','\x6d\x61\x74\x63\x68','\x6d\x69\x6e','\x5f\x74\x69\x6c\x65\x45\x78\x74\x65\x6e\x64\x53\x70\x72\x69\x74\x65\x73','\x42\x69\x74\x6d\x61\x70\x5f\x64\x72\x61\x77\x43\x69\x72\x63\x6c\x65','\x43\x52\x49','\x5f\x70\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65','\x6e\x65\x78\x74\x4c\x65\x76\x65\x6c\x45\x78\x70','\x42\x61\x73\x69\x63','\x63\x75\x72\x72\x65\x6e\x74\x45\x78\x70','\x5f\x63\x6c\x6f\x73\x69\x6e\x67','\x73\x65\x74\x48\x61\x6e\x64\x6c\x65\x72','\x70\x72\x6f\x63\x65\x73\x73\x46\x61\x75\x78\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x52\x65\x71\x75\x65\x73\x74\x73','\x78\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x32','\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x33','\x66\x6f\x6e\x74\x53\x69\x7a\x65','\x74\x69\x74\x6c\x65\x73\x31','\x63\x61\x6e\x45\x71\x75\x69\x70','\x63\x75\x72\x73\x6f\x72\x55\x70','\x62\x75\x74\x74\x6f\x6e\x73','\x6e\x75\x6d\x52\x65\x70\x65\x61\x74\x73','\x63\x72\x65\x61\x74\x65\x50\x6f\x69\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x51\x75\x65\x75\x65','\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x53\x74\x61\x74\x65','\x6a\x6f\x69\x6e','\x65\x76\x61\x64\x65\x64','\x62\x6f\x78\x57\x69\x64\x74\x68','\x6b\x65\x79\x73','\x63\x72\x65\x61\x74\x65\x43\x68\x69\x6c\x64\x53\x70\x72\x69\x74\x65','\x72\x67\x62\x61\x28\x30\x2c\x20\x30\x2c\x20\x30\x2c\x20\x31\x2e\x30\x29','\x54\x6f\x74\x61\x6c','\x75\x73\x65\x46\x6f\x6e\x74\x57\x69\x64\x74\x68\x46\x69\x78','\x4d\x61\x70\x4e\x61\x6d\x65\x54\x65\x78\x74\x43\x6f\x64\x65','\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x4d\x65\x73\x73\x61\x67\x65','\x73\x65\x74\x56\x61\x6c\x75\x65','\x68\x69\x64\x65','\x6f\x6e\x4b\x65\x79\x44\x6f\x77\x6e','\x5f\x73\x72\x63\x42\x69\x74\x6d\x61\x70','\x66\x69\x6c\x74\x65\x72','\x69\x6e\x69\x74\x69\x61\x6c\x42\x61\x74\x74\x6c\x65\x53\x79\x73\x74\x65\x6d','\x73\x63\x65\x6e\x65\x54\x65\x72\x6d\x69\x6e\x61\x74\x69\x6f\x6e\x43\x6c\x65\x61\x72\x45\x66\x66\x65\x63\x74\x73','\x46\x44\x52','\x61\x6c\x70\x68\x61\x62\x65\x74\x69\x63','\x4c\x6f\x63\x61\x74\x69\x6f\x6e','\x46\x31\x38','\x41\x64\x6a\x75\x73\x74\x41\x6e\x67\x6c\x65','\x45\x64\x69\x74\x52\x65\x63\x74','\x5f\x74\x65\x78\x74','\x47\x61\x6d\x65\x5f\x45\x76\x65\x6e\x74\x5f\x73\x74\x61\x72\x74','\x4f\x70\x65\x6e\x43\x6f\x6e\x73\x6f\x6c\x65','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x4e\x6f\x74\x65\x74\x61\x67\x73','\x69\x73\x50\x6c\x61\x79\x69\x6e\x67','\x4e\x4f\x4e\x43\x4f\x4e\x56\x45\x52\x54','\x75\x70\x64\x61\x74\x65\x42\x67\x73\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73','\x74\x61\x72\x67\x65\x74\x42\x61\x63\x6b\x4f\x70\x61\x63\x69\x74\x79','\x53\x65\x74\x74\x69\x6e\x67\x73','\x43\x6f\x6c\x6f\x72\x47\x61\x75\x67\x65\x42\x61\x63\x6b','\x63\x61\x6c\x6c','\x44\x75\x72\x61\x74\x69\x6f\x6e','\x63\x68\x61\x6e\x67\x65\x41\x6e\x67\x6c\x65\x50\x6c\x75\x73\x44\x61\x74\x61','\x73\x65\x74\x45\x76\x65\x6e\x74','\x57\x49\x4e\x5f\x4f\x45\x4d\x5f\x46\x4a\x5f\x4c\x4f\x59\x41','\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x61\x6e\x67\x6c\x65','\x73\x75\x63\x63\x65\x73\x73\x52\x61\x74\x65','\x70\x69\x63\x74\x75\x72\x65\x49\x64','\x64\x72\x61\x77\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x52\x65\x63\x74','\x53\x50\x61\x72\x61\x6d\x56\x6f\x63\x61\x62\x32','\x6c\x6f\x61\x64\x47\x61\x6d\x65\x49\x6d\x61\x67\x65\x73\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x70\x61\x72\x61\x6d\x52\x61\x74\x65\x31','\x73\x65\x74\x75\x70\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65','\x49\x74\x65\x6d\x52\x65\x63\x74','\x64\x61\x72\x77\x69\x6e','\x5f\x73\x63\x65\x6e\x65','\x64\x75\x6d\x6d\x79\x57\x69\x6e\x64\x6f\x77\x52\x65\x63\x74','\x74\x61\x62','\x75\x70\x64\x61\x74\x65\x43\x6f\x72\x65\x45\x61\x73\x69\x6e\x67','\x5f\x73\x74\x61\x72\x74\x50\x6c\x61\x79\x69\x6e\x67','\x67\x65\x74\x4b\x65\x79\x62\x6f\x61\x72\x64\x49\x6e\x70\x75\x74\x42\x75\x74\x74\x6f\x6e\x53\x74\x72\x69\x6e\x67','\x64\x65\x73\x65\x6c\x65\x63\x74','\x67\x61\x69\x6e\x53\x69\x6c\x65\x6e\x74\x54\x70','\x43\x61\x6c\x6c\x48\x61\x6e\x64\x6c\x65\x72\x4a\x53','\x50\x69\x78\x65\x6c\x61\x74\x65\x49\x6d\x61\x67\x65\x52\x65\x6e\x64\x65\x72\x69\x6e\x67','\x53\x63\x65\x6e\x65\x5f\x53\x74\x61\x74\x75\x73\x5f\x63\x72\x65\x61\x74\x65','\x6f\x70\x65\x6e\x6e\x65\x73\x73','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x41\x70\x70','\x45\x78\x74\x72\x61\x63\x74\x53\x74\x72\x46\x72\x6f\x6d\x4d\x61\x70','\x63\x72\x65\x61\x74\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65','\x5f\x73\x65\x74\x75\x70\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72\x73','\x4e\x4f\x4e\x5f\x46\x52\x41\x4d\x45','\x65\x78\x65\x63','\x64\x69\x6d\x43\x6f\x6c\x6f\x72\x31','\x5f\x6c\x61\x73\x74\x4f\x72\x69\x67\x69\x6e','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x70\x72\x6f\x63\x65\x73\x73\x5f\x56\x69\x73\x75\x4d\x5a\x5f\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x5f\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x42\x75\x74\x74\x6f\x6e\x73','\x67\x65\x74\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65\x53\x63\x72\x65\x65\x6e\x53\x68\x61\x6b\x65\x53\x74\x79\x6c\x65','\x45\x78\x74\x44\x69\x73\x70\x6c\x61\x79\x65\x64\x50\x61\x72\x61\x6d\x73','\x70\x61\x67\x65\x73','\x43\x6f\x6e\x76\x65\x72\x74\x50\x61\x72\x61\x6d\x73','\x53\x68\x6f\x77\x42\x75\x74\x74\x6f\x6e\x73','\x53\x77\x69\x74\x63\x68\x52\x61\x6e\x64\x6f\x6d\x69\x7a\x65\x4f\x6e\x65','\x50\x61\x72\x73\x65\x43\x6c\x61\x73\x73\x4e\x6f\x74\x65\x74\x61\x67\x73'];_0x3a5c=function(){return _0x3a6650;};return _0x3a5c();}if(VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x417)]['\x45\x6e\x61\x62\x6c\x65\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74']){VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x23b15a(0x417)][_0x23b15a(0x18a)]&&(Window_NameInput['\x4c\x41\x54\x49\x4e\x31']=['\x51','\x57','\x45','\x52','\x54','\x59','\x55','\x49','\x4f','\x50','\x41','\x53','\x44','\x46','\x47','\x48','\x4a','\x4b','\x4c','\x27','\x60','\x5a','\x58','\x43','\x56','\x42','\x4e','\x4d','\x2c','\x2e','\x71','\x77','\x65','\x72','\x74','\x79','\x75','\x69','\x6f','\x70','\x61','\x73','\x64','\x66','\x67','\x68','\x6a','\x6b','\x6c','\x3a','\x7e','\x7a','\x78','\x63','\x76','\x62','\x6e','\x6d','\x22','\x3b','\x31','\x32','\x33','\x34','\x35','\x36','\x37','\x38','\x39','\x30','\x21','\x40','\x23','\x24','\x25','\x5e','\x26','\x2a','\x28','\x29','\x3c','\x3e','\x5b','\x5d','\x2d','\x5f','\x2f','\x20',_0x23b15a(0x376),'\x4f\x4b']);;VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x225)]=Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x46d)],Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x46d)]=function(_0x5b20f1){const _0x324fe0=_0x23b15a;this['\x5f\x6d\x6f\x64\x65']=this[_0x324fe0(0x3d6)](),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'][_0x324fe0(0x744)](this,_0x5b20f1),this[_0x324fe0(0x5ae)]==='\x64\x65\x66\x61\x75\x6c\x74'?this[_0x324fe0(0x624)](0x0):(Input[_0x324fe0(0x8cf)](),this[_0x324fe0(0x759)]());},Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x3d6)]=function(){const _0x48b05c=_0x23b15a;if(Input[_0x48b05c(0x36d)]())return _0x48b05c(0x38a);return VisuMZ[_0x48b05c(0x7db)][_0x48b05c(0x742)][_0x48b05c(0x417)]['\x44\x65\x66\x61\x75\x6c\x74\x4d\x6f\x64\x65']||'\x6b\x65\x79\x62\x6f\x61\x72\x64';},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x2a9)]=Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x3ae)],Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x70\x72\x6f\x63\x65\x73\x73\x48\x61\x6e\x64\x6c\x69\x6e\x67']=function(){const _0x424efa=_0x23b15a;if(!this[_0x424efa(0x931)]())return;if(!this['\x61\x63\x74\x69\x76\x65'])return;if(this[_0x424efa(0x5ae)]===_0x424efa(0x515)&&Input[_0x424efa(0x659)]())this[_0x424efa(0x774)](_0x424efa(0x38a));else{if(Input[_0x424efa(0x3df)]('\x62\x61\x63\x6b\x73\x70\x61\x63\x65'))Input['\x63\x6c\x65\x61\x72'](),this[_0x424efa(0x5ea)]();else{if(Input[_0x424efa(0x304)](_0x424efa(0x755)))Input[_0x424efa(0x8cf)](),this[_0x424efa(0x5ae)]===_0x424efa(0x515)?this[_0x424efa(0x774)](_0x424efa(0x38a)):this[_0x424efa(0x774)](_0x424efa(0x515));else{if(this[_0x424efa(0x5ae)]===_0x424efa(0x515))this[_0x424efa(0x3f4)]();else Input[_0x424efa(0x3df)](_0x424efa(0x4d8))?(Input['\x63\x6c\x65\x61\x72'](),this['\x73\x77\x69\x74\x63\x68\x4d\x6f\x64\x65\x73']('\x6b\x65\x79\x62\x6f\x61\x72\x64')):VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x424efa(0x2a9)][_0x424efa(0x744)](this);}}}},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x8ee)]=Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68'],Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x213)]=function(){const _0x21517b=_0x23b15a;if(!this['\x69\x73\x4f\x70\x65\x6e\x41\x6e\x64\x41\x63\x74\x69\x76\x65']())return;if(this[_0x21517b(0x5ae)]===_0x21517b(0x515)){if(TouchInput['\x69\x73\x54\x72\x69\x67\x67\x65\x72\x65\x64']()&&this[_0x21517b(0x23f)]())this['\x73\x77\x69\x74\x63\x68\x4d\x6f\x64\x65\x73'](_0x21517b(0x38a));else TouchInput[_0x21517b(0x13f)]()&&this[_0x21517b(0x774)](_0x21517b(0x38a));}else VisuMZ[_0x21517b(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x70\x72\x6f\x63\x65\x73\x73\x54\x6f\x75\x63\x68'][_0x21517b(0x744)](this);},Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x3f4)]=function(){const _0x31ef06=_0x23b15a;if(Input['\x69\x73\x53\x70\x65\x63\x69\x61\x6c\x43\x6f\x64\x65']('\x65\x6e\x74\x65\x72'))Input[_0x31ef06(0x8cf)](),this[_0x31ef06(0x608)]();else{if(Input[_0x31ef06(0x593)]!==undefined){let _0x14afd3=Input['\x5f\x69\x6e\x70\x75\x74\x53\x74\x72\x69\x6e\x67'],_0x1c2120=_0x14afd3[_0x31ef06(0x699)];for(let _0x5ee949=0x0;_0x5ee949<_0x1c2120;++_0x5ee949){this[_0x31ef06(0x2e9)][_0x31ef06(0x49c)](_0x14afd3[_0x5ee949])?SoundManager['\x70\x6c\x61\x79\x4f\x6b']():SoundManager[_0x31ef06(0x14a)]();}Input[_0x31ef06(0x8cf)]();}}},Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x774)]=function(_0x563dee){const _0xe1de24=_0x23b15a;let _0x2c6430=this['\x5f\x6d\x6f\x64\x65'];this['\x5f\x6d\x6f\x64\x65']=_0x563dee,_0x2c6430!==this['\x5f\x6d\x6f\x64\x65']&&(this[_0xe1de24(0x308)](),SoundManager['\x70\x6c\x61\x79\x4f\x6b'](),this['\x5f\x6d\x6f\x64\x65']===_0xe1de24(0x38a)?this[_0xe1de24(0x624)](0x0):this[_0xe1de24(0x624)](-0x1));},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x466)]=Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x5ff)],Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x5ff)]=function(_0x4bb16a){const _0x3d7036=_0x23b15a;if(this['\x5f\x6d\x6f\x64\x65']===_0x3d7036(0x515)&&!Input[_0x3d7036(0x1dc)]())return;if(Input['\x69\x73\x4e\x75\x6d\x70\x61\x64\x50\x72\x65\x73\x73\x65\x64']())return;VisuMZ[_0x3d7036(0x7db)][_0x3d7036(0x466)]['\x63\x61\x6c\x6c'](this,_0x4bb16a),this[_0x3d7036(0x774)](_0x3d7036(0x38a));},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x185)]=Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x71e)],Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x71e)]=function(_0x534fd7){const _0x59de8f=_0x23b15a;if(this[_0x59de8f(0x5ae)]==='\x6b\x65\x79\x62\x6f\x61\x72\x64'&&!Input['\x69\x73\x41\x72\x72\x6f\x77\x50\x72\x65\x73\x73\x65\x64']())return;if(Input[_0x59de8f(0x522)]())return;VisuMZ[_0x59de8f(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x55\x70'][_0x59de8f(0x744)](this,_0x534fd7),this[_0x59de8f(0x774)]('\x64\x65\x66\x61\x75\x6c\x74');},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x90a)]=Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x886)],Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x886)]=function(_0x4dc4ee){const _0x2db969=_0x23b15a;if(this[_0x2db969(0x5ae)]===_0x2db969(0x515)&&!Input['\x69\x73\x41\x72\x72\x6f\x77\x50\x72\x65\x73\x73\x65\x64']())return;if(Input[_0x2db969(0x522)]())return;VisuMZ[_0x2db969(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x4e\x61\x6d\x65\x49\x6e\x70\x75\x74\x5f\x63\x75\x72\x73\x6f\x72\x52\x69\x67\x68\x74'][_0x2db969(0x744)](this,_0x4dc4ee),this['\x73\x77\x69\x74\x63\x68\x4d\x6f\x64\x65\x73'](_0x2db969(0x38a));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x59c)]=Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x8e6)],Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x8e6)]=function(_0x15c991){const _0x350df6=_0x23b15a;if(this[_0x350df6(0x5ae)]===_0x350df6(0x515)&&!Input['\x69\x73\x41\x72\x72\x6f\x77\x50\x72\x65\x73\x73\x65\x64']())return;if(Input['\x69\x73\x4e\x75\x6d\x70\x61\x64\x50\x72\x65\x73\x73\x65\x64']())return;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x350df6(0x59c)][_0x350df6(0x744)](this,_0x15c991),this[_0x350df6(0x774)]('\x64\x65\x66\x61\x75\x6c\x74');},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x41e)]=Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x395)],Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x395)]=function(){const _0x388a5e=_0x23b15a;if(this[_0x388a5e(0x5ae)]==='\x6b\x65\x79\x62\x6f\x61\x72\x64')return;if(Input[_0x388a5e(0x522)]())return;VisuMZ[_0x388a5e(0x7db)][_0x388a5e(0x41e)]['\x63\x61\x6c\x6c'](this),this[_0x388a5e(0x774)]('\x64\x65\x66\x61\x75\x6c\x74');},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x3b1)]=Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x582)],Window_NameInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x75\x72\x73\x6f\x72\x50\x61\x67\x65\x75\x70']=function(){const _0x502abe=_0x23b15a;if(this[_0x502abe(0x5ae)]===_0x502abe(0x515))return;if(Input[_0x502abe(0x522)]())return;VisuMZ[_0x502abe(0x7db)][_0x502abe(0x3b1)][_0x502abe(0x744)](this),this[_0x502abe(0x774)](_0x502abe(0x38a));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x54a)]=Window_NameInput[_0x23b15a(0x8ea)][_0x23b15a(0x308)],Window_NameInput[_0x23b15a(0x8ea)]['\x72\x65\x66\x72\x65\x73\x68']=function(){const _0x559de8=_0x23b15a;if(this[_0x559de8(0x5ae)]==='\x6b\x65\x79\x62\x6f\x61\x72\x64'){this['\x63\x6f\x6e\x74\x65\x6e\x74\x73']['\x63\x6c\x65\x61\x72'](),this[_0x559de8(0x4f2)]['\x63\x6c\x65\x61\x72'](),this[_0x559de8(0x60a)]();let _0x75d951=VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x559de8(0x742)][_0x559de8(0x417)][_0x559de8(0x72c)]['\x73\x70\x6c\x69\x74']('\x0a'),_0x573147=_0x75d951[_0x559de8(0x699)],_0x5dd71d=(this[_0x559de8(0x312)]-_0x573147*this[_0x559de8(0x32b)]())/0x2;for(let _0x407e73=0x0;_0x407e73<_0x573147;++_0x407e73){let _0x2d17c6=_0x75d951[_0x407e73],_0x44fca5=this[_0x559de8(0x4e7)](_0x2d17c6)[_0x559de8(0x3e2)],_0x3a4ef1=Math[_0x559de8(0x8ff)]((this[_0x559de8(0x4e4)]['\x77\x69\x64\x74\x68']-_0x44fca5)/0x2);this[_0x559de8(0x2de)](_0x2d17c6,_0x3a4ef1,_0x5dd71d),_0x5dd71d+=this[_0x559de8(0x32b)]();}}else VisuMZ[_0x559de8(0x7db)][_0x559de8(0x54a)][_0x559de8(0x744)](this);};};VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x4ad)]=Window_ShopSell[_0x23b15a(0x8ea)][_0x23b15a(0x676)],Window_ShopSell[_0x23b15a(0x8ea)][_0x23b15a(0x676)]=function(_0x103de1){const _0x7747c5=_0x23b15a;return VisuMZ[_0x7747c5(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x7747c5(0x875)][_0x7747c5(0x904)]&&DataManager[_0x7747c5(0x813)](_0x103de1)?![]:VisuMZ[_0x7747c5(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x53\x68\x6f\x70\x53\x65\x6c\x6c\x5f\x69\x73\x45\x6e\x61\x62\x6c\x65\x64'][_0x7747c5(0x744)](this,_0x103de1);},Window_NumberInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x81e)]=function(){return![];};VisuMZ[_0x23b15a(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73']['\x4b\x65\x79\x62\x6f\x61\x72\x64\x49\x6e\x70\x75\x74'][_0x23b15a(0x84c)]&&(VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x48c)]=Window_NumberInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x52b)],Window_NumberInput[_0x23b15a(0x8ea)][_0x23b15a(0x52b)]=function(){const _0x5f00eb=_0x23b15a;VisuMZ[_0x5f00eb(0x7db)][_0x5f00eb(0x48c)][_0x5f00eb(0x744)](this),this['\x73\x65\x6c\x65\x63\x74'](this['\x5f\x6d\x61\x78\x44\x69\x67\x69\x74\x73']-0x1),Input[_0x5f00eb(0x8cf)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x58d)]=Window_NumberInput[_0x23b15a(0x8ea)][_0x23b15a(0x58a)],Window_NumberInput[_0x23b15a(0x8ea)][_0x23b15a(0x58a)]=function(){const _0x3157a1=_0x23b15a;if(!this['\x69\x73\x4f\x70\x65\x6e\x41\x6e\x64\x41\x63\x74\x69\x76\x65']())return;if(Input[_0x3157a1(0x522)]())this['\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x44\x69\x67\x69\x74\x43\x68\x61\x6e\x67\x65']();else{if(Input['\x69\x73\x53\x70\x65\x63\x69\x61\x6c\x43\x6f\x64\x65'](_0x3157a1(0x569)))this[_0x3157a1(0x6a0)]();else{if(Input[_0x3157a1(0x340)]===0x2e)this[_0x3157a1(0x23c)]();else{if(Input[_0x3157a1(0x340)]===0x24)this[_0x3157a1(0x69a)]();else Input[_0x3157a1(0x340)]===0x23?this['\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x45\x6e\x64']():VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x3157a1(0x58d)]['\x63\x61\x6c\x6c'](this);}}}},Window_NumberInput[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x43\x75\x72\x73\x6f\x72\x4d\x6f\x76\x65']=function(){const _0x741c3e=_0x23b15a;if(!this[_0x741c3e(0x64d)]())return;Input['\x69\x73\x4e\x75\x6d\x70\x61\x64\x50\x72\x65\x73\x73\x65\x64']()?this[_0x741c3e(0x49d)]():Window_Selectable['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x741c3e(0x8bc)][_0x741c3e(0x744)](this);},Window_NumberInput[_0x23b15a(0x8ea)][_0x23b15a(0x4a1)]=function(){},Window_NumberInput['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x44\x69\x67\x69\x74\x43\x68\x61\x6e\x67\x65']=function(){const _0x4f0aee=_0x23b15a;if(String(this[_0x4f0aee(0x6e1)])[_0x4f0aee(0x699)]>=this[_0x4f0aee(0x151)])return;const _0x554477=Number(String(this[_0x4f0aee(0x6e1)])+Input[_0x4f0aee(0x593)]);if(isNaN(_0x554477))return;this[_0x4f0aee(0x6e1)]=_0x554477;const _0x132724='\x39'[_0x4f0aee(0x8c2)](this[_0x4f0aee(0x151)]);this[_0x4f0aee(0x6e1)]=this[_0x4f0aee(0x6e1)][_0x4f0aee(0x1d1)](0x0,_0x132724),Input['\x63\x6c\x65\x61\x72'](),this['\x72\x65\x66\x72\x65\x73\x68'](),SoundManager[_0x4f0aee(0x2e4)](),this[_0x4f0aee(0x624)](this[_0x4f0aee(0x151)]-0x1);},Window_NumberInput[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x42\x61\x63\x6b\x73\x70\x61\x63\x65']=function(){const _0xc76afd=_0x23b15a;this[_0xc76afd(0x6e1)]=Number(String(this[_0xc76afd(0x6e1)])[_0xc76afd(0x55b)](0x0,-0x1)),this[_0xc76afd(0x6e1)]=Math[_0xc76afd(0x52a)](0x0,this[_0xc76afd(0x6e1)]),Input[_0xc76afd(0x8cf)](),this[_0xc76afd(0x308)](),SoundManager['\x70\x6c\x61\x79\x43\x75\x72\x73\x6f\x72'](),this[_0xc76afd(0x624)](this[_0xc76afd(0x151)]-0x1);},Window_NumberInput[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x44\x65\x6c\x65\x74\x65']=function(){const _0x399c0f=_0x23b15a;this['\x5f\x6e\x75\x6d\x62\x65\x72']=Number(String(this[_0x399c0f(0x6e1)])[_0x399c0f(0x75f)](0x1)),this[_0x399c0f(0x6e1)]=Math['\x6d\x61\x78'](0x0,this[_0x399c0f(0x6e1)]),Input[_0x399c0f(0x8cf)](),this[_0x399c0f(0x308)](),SoundManager[_0x399c0f(0x2e4)](),this[_0x399c0f(0x624)](this['\x5f\x6d\x61\x78\x44\x69\x67\x69\x74\x73']-0x1);},Window_NumberInput[_0x23b15a(0x8ea)]['\x70\x72\x6f\x63\x65\x73\x73\x4b\x65\x79\x62\x6f\x61\x72\x64\x48\x6f\x6d\x65']=function(){const _0x11a77=_0x23b15a;if(this[_0x11a77(0x619)]()===0x0)return;Input[_0x11a77(0x8cf)](),this[_0x11a77(0x308)](),SoundManager[_0x11a77(0x2e4)](),this[_0x11a77(0x624)](0x0);},Window_NumberInput[_0x23b15a(0x8ea)][_0x23b15a(0x400)]=function(){const _0x172de7=_0x23b15a;if(this[_0x172de7(0x619)]()===this['\x5f\x6d\x61\x78\x44\x69\x67\x69\x74\x73']-0x1)return;Input['\x63\x6c\x65\x61\x72'](),this['\x72\x65\x66\x72\x65\x73\x68'](),SoundManager[_0x172de7(0x2e4)](),this[_0x172de7(0x624)](this[_0x172de7(0x151)]-0x1);});;VisuMZ[_0x23b15a(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x4d\x61\x70\x4e\x61\x6d\x65\x5f\x72\x65\x66\x72\x65\x73\x68']=Window_MapName[_0x23b15a(0x8ea)][_0x23b15a(0x308)],Window_MapName[_0x23b15a(0x8ea)][_0x23b15a(0x308)]=function(){const _0x3d8c74=_0x23b15a;VisuMZ[_0x3d8c74(0x7db)][_0x3d8c74(0x742)][_0x3d8c74(0x875)][_0x3d8c74(0x72b)]?this[_0x3d8c74(0x6e7)]():VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x3d8c74(0x8da)][_0x3d8c74(0x744)](this);},Window_MapName[_0x23b15a(0x8ea)]['\x72\x65\x66\x72\x65\x73\x68\x57\x69\x74\x68\x54\x65\x78\x74\x43\x6f\x64\x65\x53\x75\x70\x70\x6f\x72\x74']=function(){const _0x12ec6e=_0x23b15a;this[_0x12ec6e(0x4e4)][_0x12ec6e(0x8cf)]();if($gameMap[_0x12ec6e(0x8de)]()){const _0x400dc6=this['\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68'];this[_0x12ec6e(0x1a5)](0x0,0x0,_0x400dc6,this[_0x12ec6e(0x32b)]());const _0x267b09=this[_0x12ec6e(0x4e7)]($gameMap[_0x12ec6e(0x8de)]())[_0x12ec6e(0x3e2)];this['\x64\x72\x61\x77\x54\x65\x78\x74\x45\x78']($gameMap[_0x12ec6e(0x8de)](),Math[_0x12ec6e(0x8ff)]((_0x400dc6-_0x267b09)/0x2),0x0);}},Window_TitleCommand['\x5f\x63\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74']=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x295)],Window_TitleCommand[_0x23b15a(0x8ea)][_0x23b15a(0x425)]=function(){const _0x1dd685=_0x23b15a;this[_0x1dd685(0x7dd)]();},Window_TitleCommand['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x7dd)]=function(){const _0x1aa01b=_0x23b15a;for(const _0x37f9a9 of Window_TitleCommand[_0x1aa01b(0x899)]){if(_0x37f9a9['\x53\x68\x6f\x77\x4a\x53'][_0x1aa01b(0x744)](this)){const _0x5ff720=_0x37f9a9[_0x1aa01b(0x215)];let _0x23560c=_0x37f9a9[_0x1aa01b(0x2f7)];['',_0x1aa01b(0x36a)][_0x1aa01b(0x313)](_0x23560c)&&(_0x23560c=_0x37f9a9[_0x1aa01b(0x891)][_0x1aa01b(0x744)](this));const _0x1d124a=_0x37f9a9[_0x1aa01b(0x140)][_0x1aa01b(0x744)](this),_0x18af11=_0x37f9a9[_0x1aa01b(0x594)][_0x1aa01b(0x744)](this);this[_0x1aa01b(0x1d9)](_0x23560c,_0x5ff720,_0x1d124a,_0x18af11),this['\x73\x65\x74\x48\x61\x6e\x64\x6c\x65\x72'](_0x5ff720,_0x37f9a9[_0x1aa01b(0x75b)]['\x62\x69\x6e\x64'](this,_0x18af11));}}},VisuMZ[_0x23b15a(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x54\x69\x74\x6c\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x73\x65\x6c\x65\x63\x74\x4c\x61\x73\x74']=Window_TitleCommand[_0x23b15a(0x8ea)][_0x23b15a(0x6ab)],Window_TitleCommand[_0x23b15a(0x8ea)][_0x23b15a(0x6ab)]=function(){const _0x1afb2c=_0x23b15a;VisuMZ[_0x1afb2c(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x54\x69\x74\x6c\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x5f\x73\x65\x6c\x65\x63\x74\x4c\x61\x73\x74'][_0x1afb2c(0x744)](this);if(!Window_TitleCommand[_0x1afb2c(0x5a6)])return;const _0x380c71=this['\x66\x69\x6e\x64\x53\x79\x6d\x62\x6f\x6c'](Window_TitleCommand['\x5f\x6c\x61\x73\x74\x43\x6f\x6d\x6d\x61\x6e\x64\x53\x79\x6d\x62\x6f\x6c']),_0x5d8b3b=Math['\x66\x6c\x6f\x6f\x72'](this[_0x1afb2c(0x793)]()/0x2)-0x1;this[_0x1afb2c(0x129)](_0x380c71),this['\x5f\x73\x63\x72\x6f\x6c\x6c\x44\x75\x72\x61\x74\x69\x6f\x6e']>0x1&&(this[_0x1afb2c(0x2c2)]=0x1,this[_0x1afb2c(0x386)]()),this[_0x1afb2c(0x66c)](_0x380c71-_0x5d8b3b);},Window_GameEnd[_0x23b15a(0x899)]=VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)]['\x4d\x65\x6e\x75\x4c\x61\x79\x6f\x75\x74'][_0x23b15a(0x776)][_0x23b15a(0x34e)],Window_GameEnd[_0x23b15a(0x8ea)]['\x6d\x61\x6b\x65\x43\x6f\x6d\x6d\x61\x6e\x64\x4c\x69\x73\x74']=function(){const _0x1af955=_0x23b15a;this[_0x1af955(0x7dd)]();},Window_GameEnd[_0x23b15a(0x8ea)][_0x23b15a(0x7dd)]=function(){const _0x2c7903=_0x23b15a;for(const _0x2b200a of Window_GameEnd[_0x2c7903(0x899)]){if(_0x2b200a[_0x2c7903(0x4cd)][_0x2c7903(0x744)](this)){const _0x902362=_0x2b200a[_0x2c7903(0x215)];let _0x2f7541=_0x2b200a[_0x2c7903(0x2f7)];['',_0x2c7903(0x36a)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2f7541)&&(_0x2f7541=_0x2b200a['\x54\x65\x78\x74\x4a\x53'][_0x2c7903(0x744)](this));const _0x4255b1=_0x2b200a[_0x2c7903(0x140)][_0x2c7903(0x744)](this),_0x3364ab=_0x2b200a[_0x2c7903(0x594)][_0x2c7903(0x744)](this);this[_0x2c7903(0x1d9)](_0x2f7541,_0x902362,_0x4255b1,_0x3364ab),this[_0x2c7903(0x717)](_0x902362,_0x2b200a[_0x2c7903(0x75b)][_0x2c7903(0x647)](this,_0x3364ab));}}};function Window_ButtonAssist(){const _0x1d0696=_0x23b15a;this[_0x1d0696(0x46d)](...arguments);}Window_ButtonAssist['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']=Object[_0x23b15a(0x198)](Window_Base[_0x23b15a(0x8ea)]),Window_ButtonAssist[_0x23b15a(0x8ea)]['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']=Window_ButtonAssist,Window_ButtonAssist['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x46d)]=function(_0x4781a9){const _0x5b08ce=_0x23b15a;this['\x5f\x64\x61\x74\x61']={},Window_Base[_0x5b08ce(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65']['\x63\x61\x6c\x6c'](this,_0x4781a9),this[_0x5b08ce(0x3bb)](VisuMZ[_0x5b08ce(0x7db)][_0x5b08ce(0x742)]['\x42\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74'][_0x5b08ce(0x63e)]||0x0),this[_0x5b08ce(0x308)]();},Window_ButtonAssist['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x32b)]=function(){const _0x1bd6e3=_0x23b15a;return this[_0x1bd6e3(0x312)]||Window_Base[_0x1bd6e3(0x8ea)][_0x1bd6e3(0x32b)]['\x63\x61\x6c\x6c'](this);},Window_ButtonAssist[_0x23b15a(0x8ea)][_0x23b15a(0x670)]=function(){const _0x1729af=_0x23b15a;this[_0x1729af(0x4e4)][_0x1729af(0x71b)]<=0x60&&(this[_0x1729af(0x4e4)][_0x1729af(0x71b)]+=0x6);},Window_ButtonAssist[_0x23b15a(0x8ea)]['\x6d\x61\x6b\x65\x46\x6f\x6e\x74\x53\x6d\x61\x6c\x6c\x65\x72']=function(){const _0x4ea65c=_0x23b15a;this[_0x4ea65c(0x4e4)][_0x4ea65c(0x71b)]>=0x18&&(this['\x63\x6f\x6e\x74\x65\x6e\x74\x73']['\x66\x6f\x6e\x74\x53\x69\x7a\x65']-=0x6);},Window_ButtonAssist[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x164af0=_0x23b15a;Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x164af0(0x8fc)][_0x164af0(0x744)](this),this[_0x164af0(0x253)]();},Window_ButtonAssist[_0x23b15a(0x8ea)][_0x23b15a(0x867)]=function(){const _0x437235=_0x23b15a;this[_0x437235(0x299)]=SceneManager[_0x437235(0x753)][_0x437235(0x6f1)]()!==_0x437235(0x3ed)?0x0:0x8;},Window_ButtonAssist['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x253)]=function(){const _0x4b7086=_0x23b15a,_0x9fa48f=SceneManager['\x5f\x73\x63\x65\x6e\x65'];for(let _0x4557c1=0x1;_0x4557c1<=0x5;_0x4557c1++){if(this[_0x4b7086(0x326)]['\x6b\x65\x79\x25\x31'['\x66\x6f\x72\x6d\x61\x74'](_0x4557c1)]!==_0x9fa48f[_0x4b7086(0x38f)[_0x4b7086(0x8ca)](_0x4557c1)]())return this['\x72\x65\x66\x72\x65\x73\x68']();if(this['\x5f\x64\x61\x74\x61']['\x74\x65\x78\x74\x25\x31'[_0x4b7086(0x8ca)](_0x4557c1)]!==_0x9fa48f['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x54\x65\x78\x74\x25\x31'['\x66\x6f\x72\x6d\x61\x74'](_0x4557c1)]())return this['\x72\x65\x66\x72\x65\x73\x68']();}},Window_ButtonAssist[_0x23b15a(0x8ea)][_0x23b15a(0x308)]=function(){const _0x12b5e7=_0x23b15a;this[_0x12b5e7(0x4e4)][_0x12b5e7(0x8cf)]();for(let _0x5f0a5a=0x1;_0x5f0a5a<=0x5;_0x5f0a5a++){this[_0x12b5e7(0x554)](_0x5f0a5a);}},Window_ButtonAssist['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x554)]=function(_0x328d80){const _0x3c16b8=_0x23b15a,_0x3951e1=this[_0x3c16b8(0x4ba)]/0x5,_0x327b0d=SceneManager['\x5f\x73\x63\x65\x6e\x65'],_0x22d6d2=_0x327b0d['\x62\x75\x74\x74\x6f\x6e\x41\x73\x73\x69\x73\x74\x4b\x65\x79\x25\x31'[_0x3c16b8(0x8ca)](_0x328d80)](),_0x515f29=_0x327b0d[_0x3c16b8(0x5bd)['\x66\x6f\x72\x6d\x61\x74'](_0x328d80)]();this[_0x3c16b8(0x326)]['\x6b\x65\x79\x25\x31'[_0x3c16b8(0x8ca)](_0x328d80)]=_0x22d6d2,this['\x5f\x64\x61\x74\x61'][_0x3c16b8(0x495)[_0x3c16b8(0x8ca)](_0x328d80)]=_0x515f29;if(_0x22d6d2==='')return;if(_0x515f29==='')return;const _0x2e73eb=_0x327b0d[_0x3c16b8(0x8d6)['\x66\x6f\x72\x6d\x61\x74'](_0x328d80)](),_0xb639ec=this[_0x3c16b8(0x449)](),_0x4e35ce=_0x3951e1*(_0x328d80-0x1)+_0xb639ec+_0x2e73eb,_0x463ea6=VisuMZ[_0x3c16b8(0x7db)]['\x53\x65\x74\x74\x69\x6e\x67\x73'][_0x3c16b8(0x35f)][_0x3c16b8(0x23d)];this[_0x3c16b8(0x2de)](_0x463ea6[_0x3c16b8(0x8ca)](_0x22d6d2,_0x515f29),_0x4e35ce,0x0,_0x3951e1-_0xb639ec*0x2);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x396)]=Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x5e9)],Game_Interpreter[_0x23b15a(0x8ea)][_0x23b15a(0x5e9)]=function(){const _0x1a40f0=_0x23b15a;if($gameTemp[_0x1a40f0(0x7f5)]!==undefined)return VisuMZ[_0x1a40f0(0x7db)][_0x1a40f0(0x8e3)]();return VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x1a40f0(0x396)][_0x1a40f0(0x744)](this);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x8e3)]=function(){const _0x4fdf53=_0x23b15a,_0x51b8eb=$gameTemp['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x4d\x6f\x64\x65']||0x0;(_0x51b8eb<0x0||_0x51b8eb>0x64||TouchInput[_0x4fdf53(0x13f)]()||Input[_0x4fdf53(0x304)](_0x4fdf53(0x791)))&&($gameTemp[_0x4fdf53(0x7f5)]=undefined,Input[_0x4fdf53(0x8cf)](),TouchInput[_0x4fdf53(0x8cf)]());const _0xeb9a86=$gameScreen[_0x4fdf53(0x457)](_0x51b8eb);return _0xeb9a86&&(_0xeb9a86['\x5f\x78']=TouchInput['\x5f\x78'],_0xeb9a86['\x5f\x79']=TouchInput['\x5f\x79']),VisuMZ[_0x4fdf53(0x7db)][_0x4fdf53(0x4b2)](),$gameTemp['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x4d\x6f\x64\x65']!==undefined;},VisuMZ[_0x23b15a(0x7db)]['\x75\x70\x64\x61\x74\x65\x50\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73']=function(){const _0x308bbb=_0x23b15a,_0x62c17b=SceneManager['\x5f\x73\x63\x65\x6e\x65'];if(!_0x62c17b)return;!_0x62c17b['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x57\x69\x6e\x64\x6f\x77']&&(SoundManager[_0x308bbb(0x81c)](),_0x62c17b[_0x308bbb(0x599)]=new Window_PictureCoordinates(),_0x62c17b[_0x308bbb(0x8c0)](_0x62c17b[_0x308bbb(0x599)])),$gameTemp['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x4d\x6f\x64\x65']===undefined&&(SoundManager[_0x308bbb(0x8e5)](),_0x62c17b[_0x308bbb(0x42f)](_0x62c17b['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x57\x69\x6e\x64\x6f\x77']),_0x62c17b['\x5f\x70\x69\x63\x74\x75\x72\x65\x43\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x57\x69\x6e\x64\x6f\x77']=undefined);};function Window_PictureCoordinates(){this['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'](...arguments);}Window_PictureCoordinates[_0x23b15a(0x8ea)]=Object['\x63\x72\x65\x61\x74\x65'](Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']),Window_PictureCoordinates[_0x23b15a(0x8ea)][_0x23b15a(0x319)]=Window_PictureCoordinates,Window_PictureCoordinates[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(){const _0x45aefd=_0x23b15a;this[_0x45aefd(0x767)]=_0x45aefd(0x336),this['\x5f\x6c\x61\x73\x74\x58']=_0x45aefd(0x336),this[_0x45aefd(0x5d7)]=_0x45aefd(0x336);const _0x4a8d4f=this[_0x45aefd(0x7d9)]();Window_Base[_0x45aefd(0x8ea)]['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65'][_0x45aefd(0x744)](this,_0x4a8d4f),this[_0x45aefd(0x3bb)](0x2);},Window_PictureCoordinates[_0x23b15a(0x8ea)]['\x77\x69\x6e\x64\x6f\x77\x52\x65\x63\x74']=function(){const _0x5adf29=_0x23b15a;let _0xb1dc4e=Graphics[_0x5adf29(0x92d)]-this[_0x5adf29(0x32b)](),_0x47d2f9=Graphics[_0x5adf29(0x3e2)],_0x54ef5d=this[_0x5adf29(0x32b)]();return new Rectangle(0x0,_0xb1dc4e,_0x47d2f9,_0x54ef5d);},Window_PictureCoordinates[_0x23b15a(0x8ea)][_0x23b15a(0x867)]=function(){this['\x70\x61\x64\x64\x69\x6e\x67']=0x0;},Window_PictureCoordinates[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x3354e1=_0x23b15a;Window_Base[_0x3354e1(0x8ea)][_0x3354e1(0x8fc)][_0x3354e1(0x744)](this),this['\x75\x70\x64\x61\x74\x65\x44\x61\x74\x61']();},Window_PictureCoordinates[_0x23b15a(0x8ea)][_0x23b15a(0x3bf)]=function(){const _0x432519=_0x23b15a;if(!this[_0x432519(0x317)]())return;this[_0x432519(0x308)]();},Window_PictureCoordinates['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x317)]=function(){const _0x8cc294=_0x23b15a,_0x2ecab9=$gameTemp[_0x8cc294(0x7f5)],_0x340a2d=$gameScreen['\x70\x69\x63\x74\x75\x72\x65'](_0x2ecab9);return _0x340a2d?this[_0x8cc294(0x767)]!==_0x340a2d['\x5f\x6f\x72\x69\x67\x69\x6e']||this[_0x8cc294(0x26b)]!==_0x340a2d['\x5f\x78']||this[_0x8cc294(0x5d7)]!==_0x340a2d['\x5f\x79']:![];},Window_PictureCoordinates[_0x23b15a(0x8ea)][_0x23b15a(0x308)]=function(){const _0x5caa1a=_0x23b15a;this[_0x5caa1a(0x4e4)][_0x5caa1a(0x8cf)]();const _0x422d75=$gameTemp[_0x5caa1a(0x7f5)],_0x4fae7c=$gameScreen[_0x5caa1a(0x457)](_0x422d75);if(!_0x4fae7c)return;this[_0x5caa1a(0x767)]=_0x4fae7c['\x5f\x6f\x72\x69\x67\x69\x6e'],this[_0x5caa1a(0x26b)]=_0x4fae7c['\x5f\x78'],this['\x5f\x6c\x61\x73\x74\x59']=_0x4fae7c['\x5f\x79'];const _0x1dc26c=ColorManager[_0x5caa1a(0x211)]();this[_0x5caa1a(0x4e4)][_0x5caa1a(0x3c5)](0x0,0x0,this[_0x5caa1a(0x4ba)],this[_0x5caa1a(0x312)],_0x1dc26c);const _0x533458=_0x5caa1a(0x155)[_0x5caa1a(0x8ca)](_0x4fae7c['\x5f\x6f\x72\x69\x67\x69\x6e']===0x0?_0x5caa1a(0x499):_0x5caa1a(0x6d7)),_0x384db7=_0x5caa1a(0x2a7)[_0x5caa1a(0x8ca)](_0x4fae7c['\x5f\x78']),_0x1fd98e=_0x5caa1a(0x251)['\x66\x6f\x72\x6d\x61\x74'](_0x4fae7c['\x5f\x79']),_0x5a8351=_0x5caa1a(0x4c6)[_0x5caa1a(0x8ca)](TextManager[_0x5caa1a(0x310)](_0x5caa1a(0x791)));let _0xed8dc5=Math[_0x5caa1a(0x8ff)](this[_0x5caa1a(0x4ba)]/0x4);this['\x64\x72\x61\x77\x54\x65\x78\x74'](_0x533458,_0xed8dc5*0x0,0x0,_0xed8dc5),this[_0x5caa1a(0x6a3)](_0x384db7,_0xed8dc5*0x1,0x0,_0xed8dc5,_0x5caa1a(0x387)),this[_0x5caa1a(0x6a3)](_0x1fd98e,_0xed8dc5*0x2,0x0,_0xed8dc5,_0x5caa1a(0x387));const _0x2900ae=this[_0x5caa1a(0x4e7)](_0x5a8351)[_0x5caa1a(0x3e2)],_0x118fa2=this[_0x5caa1a(0x4ba)]-_0x2900ae;this['\x64\x72\x61\x77\x54\x65\x78\x74\x45\x78'](_0x5a8351,_0x118fa2,0x0,_0x2900ae);};function Window_TextPopup(){const _0x4e5c6b=_0x23b15a;this[_0x4e5c6b(0x46d)](...arguments);}Window_TextPopup[_0x23b15a(0x8ea)]=Object[_0x23b15a(0x198)](Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']),Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x319)]=Window_TextPopup,Window_TextPopup[_0x23b15a(0x28e)]={'\x66\x72\x61\x6d\x65\x73\x50\x65\x72\x43\x68\x61\x72':VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x36e)]??1.5,'\x66\x72\x61\x6d\x65\x73\x4d\x69\x6e':VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x8f4)]??0x5a,'\x66\x72\x61\x6d\x65\x73\x4d\x61\x78':VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x742)][_0x23b15a(0x4c2)][_0x23b15a(0x8b3)]??0x12c},Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x46d)]=function(){const _0xf15b48=_0x23b15a,_0x6fd212=new Rectangle(0x0,0x0,0x1,0x1);Window_Base[_0xf15b48(0x8ea)][_0xf15b48(0x46d)]['\x63\x61\x6c\x6c'](this,_0x6fd212),this[_0xf15b48(0x75e)]=0x0,this[_0xf15b48(0x73a)]='',this[_0xf15b48(0x86c)]=[],this['\x5f\x74\x69\x6d\x65\x44\x75\x72\x61\x74\x69\x6f\x6e']=0x0;},Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x2ac)]=function(){return!![];},Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x65c)]=function(_0x417900){const _0x5788f9=_0x23b15a;if(this[_0x5788f9(0x86c)][this['\x5f\x74\x65\x78\x74\x51\x75\x65\x75\x65'][_0x5788f9(0x699)]-0x1]===_0x417900)return;this[_0x5788f9(0x86c)]['\x70\x75\x73\x68'](_0x417900),SceneManager[_0x5788f9(0x753)]['\x61\x64\x64\x43\x68\x69\x6c\x64'](this);},Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0xfda171=_0x23b15a;Window_Base[_0xfda171(0x8ea)][_0xfda171(0x8fc)]['\x63\x61\x6c\x6c'](this),this['\x75\x70\x64\x61\x74\x65\x54\x65\x78\x74'](),this[_0xfda171(0x1ea)]();},Window_TextPopup[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x54\x65\x78\x74']=function(){const _0x215471=_0x23b15a;if(this[_0x215471(0x73a)]!=='')return;if(this['\x5f\x74\x65\x78\x74\x51\x75\x65\x75\x65'][_0x215471(0x699)]<=0x0)return;if(!this[_0x215471(0x5ba)]())return;this[_0x215471(0x73a)]=this['\x5f\x74\x65\x78\x74\x51\x75\x65\x75\x65'][_0x215471(0x27a)]();const _0x5f30dc=Window_TextPopup[_0x215471(0x28e)],_0x27d74d=Math['\x63\x65\x69\x6c'](this[_0x215471(0x73a)]['\x6c\x65\x6e\x67\x74\x68']*_0x5f30dc[_0x215471(0x683)]);this['\x5f\x74\x69\x6d\x65\x44\x75\x72\x61\x74\x69\x6f\x6e']=_0x27d74d[_0x215471(0x1d1)](_0x5f30dc[_0x215471(0x401)],_0x5f30dc['\x66\x72\x61\x6d\x65\x73\x4d\x61\x78']);const _0x4c365a=this[_0x215471(0x4e7)](this[_0x215471(0x73a)]);let _0x35392d=_0x4c365a[_0x215471(0x3e2)]+this[_0x215471(0x449)]()*0x2;_0x35392d+=$gameSystem[_0x215471(0x8d1)]()*0x2;let _0x9d1499=Math['\x6d\x61\x78'](_0x4c365a[_0x215471(0x92d)],this[_0x215471(0x32b)]());_0x9d1499+=$gameSystem[_0x215471(0x8d1)]()*0x2;const _0x3d64e9=Math[_0x215471(0x38b)]((Graphics[_0x215471(0x3e2)]-_0x35392d)/0x2),_0x5c23da=Math[_0x215471(0x38b)]((Graphics['\x68\x65\x69\x67\x68\x74']-_0x9d1499)/0x2),_0x2e71da=new Rectangle(_0x3d64e9,_0x5c23da,_0x35392d,_0x9d1499);this['\x6d\x6f\x76\x65'](_0x2e71da['\x78'],_0x2e71da['\x79'],_0x2e71da['\x77\x69\x64\x74\x68'],_0x2e71da[_0x215471(0x92d)]),this[_0x215471(0x7a6)](),this[_0x215471(0x308)](),this['\x6f\x70\x65\x6e'](),SceneManager[_0x215471(0x753)]['\x61\x64\x64\x43\x68\x69\x6c\x64'](this);},Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x308)]=function(){const _0x49bbb2=_0x23b15a,_0x5874b3=this['\x62\x61\x73\x65\x54\x65\x78\x74\x52\x65\x63\x74']();this[_0x49bbb2(0x4e4)][_0x49bbb2(0x8cf)](),this[_0x49bbb2(0x2de)](this[_0x49bbb2(0x73a)],_0x5874b3['\x78'],_0x5874b3['\x79'],_0x5874b3[_0x49bbb2(0x3e2)]);},Window_TextPopup[_0x23b15a(0x8ea)][_0x23b15a(0x1ea)]=function(){const _0x554f8f=_0x23b15a;if(this['\x69\x73\x4f\x70\x65\x6e\x69\x6e\x67']()||this[_0x554f8f(0x7a3)]())return;if(this[_0x554f8f(0x8db)]<=0x0)return;this[_0x554f8f(0x8db)]--,this[_0x554f8f(0x8db)]<=0x0&&(this[_0x554f8f(0x305)](),this[_0x554f8f(0x73a)]='');},VisuMZ[_0x23b15a(0x691)]=function(_0x46654c){const _0x522d24=_0x23b15a;if(Utils[_0x522d24(0x292)](_0x522d24(0x4e6))){var _0x38ff6b=require(_0x522d24(0x660))[_0x522d24(0x4c2)]['\x67\x65\x74']();SceneManager['\x73\x68\x6f\x77\x44\x65\x76\x54\x6f\x6f\x6c\x73'](),_0x46654c&&setTimeout(_0x38ff6b['\x66\x6f\x63\x75\x73'][_0x522d24(0x647)](_0x38ff6b),0x190);}},VisuMZ[_0x23b15a(0x5c0)]=function(_0x8c18f9,_0x4d5e01){const _0x22e6f5=_0x23b15a;_0x4d5e01=_0x4d5e01[_0x22e6f5(0x6ac)]();switch(_0x4d5e01){case _0x22e6f5(0x34d):return _0x8c18f9;case _0x22e6f5(0x56c):return-0x1*Math['\x63\x6f\x73'](_0x8c18f9*(Math['\x50\x49']/0x2))+0x1;case _0x22e6f5(0x604):return Math[_0x22e6f5(0x52d)](_0x8c18f9*(Math['\x50\x49']/0x2));case _0x22e6f5(0x480):return-0.5*(Math[_0x22e6f5(0x5a2)](Math['\x50\x49']*_0x8c18f9)-0x1);case _0x22e6f5(0x555):return _0x8c18f9*_0x8c18f9;case _0x22e6f5(0x7ee):return _0x8c18f9*(0x2-_0x8c18f9);case _0x22e6f5(0x693):return _0x8c18f9<0.5?0x2*_0x8c18f9*_0x8c18f9:-0x1+(0x4-0x2*_0x8c18f9)*_0x8c18f9;case'\x49\x4e\x43\x55\x42\x49\x43':return _0x8c18f9*_0x8c18f9*_0x8c18f9;case _0x22e6f5(0x8df):var _0x219ee0=_0x8c18f9-0x1;return _0x219ee0*_0x219ee0*_0x219ee0+0x1;case _0x22e6f5(0x64b):return _0x8c18f9<0.5?0x4*_0x8c18f9*_0x8c18f9*_0x8c18f9:(_0x8c18f9-0x1)*(0x2*_0x8c18f9-0x2)*(0x2*_0x8c18f9-0x2)+0x1;case _0x22e6f5(0x623):return _0x8c18f9*_0x8c18f9*_0x8c18f9*_0x8c18f9;case _0x22e6f5(0x3b3):var _0x219ee0=_0x8c18f9-0x1;return 0x1-_0x219ee0*_0x219ee0*_0x219ee0*_0x219ee0;case _0x22e6f5(0x4c4):var _0x219ee0=_0x8c18f9-0x1;return _0x8c18f9<0.5?0x8*_0x8c18f9*_0x8c18f9*_0x8c18f9*_0x8c18f9:0x1-0x8*_0x219ee0*_0x219ee0*_0x219ee0*_0x219ee0;case _0x22e6f5(0x309):return _0x8c18f9*_0x8c18f9*_0x8c18f9*_0x8c18f9*_0x8c18f9;case _0x22e6f5(0x82a):var _0x219ee0=_0x8c18f9-0x1;return 0x1+_0x219ee0*_0x219ee0*_0x219ee0*_0x219ee0*_0x219ee0;case _0x22e6f5(0x836):var _0x219ee0=_0x8c18f9-0x1;return _0x8c18f9<0.5?0x10*_0x8c18f9*_0x8c18f9*_0x8c18f9*_0x8c18f9*_0x8c18f9:0x1+0x10*_0x219ee0*_0x219ee0*_0x219ee0*_0x219ee0*_0x219ee0;case _0x22e6f5(0x708):if(_0x8c18f9===0x0)return 0x0;return Math[_0x22e6f5(0x8c7)](0x2,0xa*(_0x8c18f9-0x1));case'\x4f\x55\x54\x45\x58\x50\x4f':if(_0x8c18f9===0x1)return 0x1;return-Math[_0x22e6f5(0x8c7)](0x2,-0xa*_0x8c18f9)+0x1;case _0x22e6f5(0x434):if(_0x8c18f9===0x0||_0x8c18f9===0x1)return _0x8c18f9;var _0x2a88b7=_0x8c18f9*0x2,_0x3ad9ed=_0x2a88b7-0x1;if(_0x2a88b7<0x1)return 0.5*Math[_0x22e6f5(0x8c7)](0x2,0xa*_0x3ad9ed);return 0.5*(-Math[_0x22e6f5(0x8c7)](0x2,-0xa*_0x3ad9ed)+0x2);case _0x22e6f5(0x7f7):var _0x2a88b7=_0x8c18f9/0x1;return-0x1*(Math[_0x22e6f5(0x334)](0x1-_0x2a88b7*_0x8c18f9)-0x1);case _0x22e6f5(0x411):var _0x219ee0=_0x8c18f9-0x1;return Math[_0x22e6f5(0x334)](0x1-_0x219ee0*_0x219ee0);case _0x22e6f5(0x370):var _0x2a88b7=_0x8c18f9*0x2,_0x3ad9ed=_0x2a88b7-0x2;if(_0x2a88b7<0x1)return-0.5*(Math[_0x22e6f5(0x334)](0x1-_0x2a88b7*_0x2a88b7)-0x1);return 0.5*(Math[_0x22e6f5(0x334)](0x1-_0x3ad9ed*_0x3ad9ed)+0x1);case'\x49\x4e\x42\x41\x43\x4b':return _0x8c18f9*_0x8c18f9*(2.70158*_0x8c18f9-1.70158);case _0x22e6f5(0x8a5):var _0x2a88b7=_0x8c18f9/0x1-0x1;return _0x2a88b7*_0x2a88b7*(2.70158*_0x2a88b7+1.70158)+0x1;break;case _0x22e6f5(0x7d8):var _0x2a88b7=_0x8c18f9*0x2,_0x1a0c4a=_0x2a88b7-0x2,_0x457d04=2.5949095;if(_0x2a88b7<0x1)return 0.5*_0x2a88b7*_0x2a88b7*((_0x457d04+0x1)*_0x2a88b7-_0x457d04);return 0.5*(_0x1a0c4a*_0x1a0c4a*((_0x457d04+0x1)*_0x1a0c4a+_0x457d04)+0x2);case _0x22e6f5(0x937):if(_0x8c18f9===0x0||_0x8c18f9===0x1)return _0x8c18f9;var _0x2a88b7=_0x8c18f9/0x1,_0x3ad9ed=_0x2a88b7-0x1,_0x5d2004=0.30000000000000004,_0x457d04=_0x5d2004/(0x2*Math['\x50\x49'])*Math[_0x22e6f5(0x685)](0x1);return-(Math[_0x22e6f5(0x8c7)](0x2,0xa*_0x3ad9ed)*Math[_0x22e6f5(0x52d)]((_0x3ad9ed-_0x457d04)*(0x2*Math['\x50\x49'])/_0x5d2004));case _0x22e6f5(0x2ec):var _0x5d2004=0.30000000000000004,_0x2a88b7=_0x8c18f9*0x2;if(_0x8c18f9===0x0||_0x8c18f9===0x1)return _0x8c18f9;var _0x457d04=_0x5d2004/(0x2*Math['\x50\x49'])*Math[_0x22e6f5(0x685)](0x1);return Math[_0x22e6f5(0x8c7)](0x2,-0xa*_0x2a88b7)*Math[_0x22e6f5(0x52d)]((_0x2a88b7-_0x457d04)*(0x2*Math['\x50\x49'])/_0x5d2004)+0x1;case'\x49\x4e\x4f\x55\x54\x45\x4c\x41\x53\x54\x49\x43':var _0x5d2004=0.30000000000000004;if(_0x8c18f9===0x0||_0x8c18f9===0x1)return _0x8c18f9;var _0x2a88b7=_0x8c18f9*0x2,_0x3ad9ed=_0x2a88b7-0x1,_0x457d04=_0x5d2004/(0x2*Math['\x50\x49'])*Math[_0x22e6f5(0x685)](0x1);if(_0x2a88b7<0x1)return-0.5*(Math[_0x22e6f5(0x8c7)](0x2,0xa*_0x3ad9ed)*Math['\x73\x69\x6e']((_0x3ad9ed-_0x457d04)*(0x2*Math['\x50\x49'])/_0x5d2004));return Math[_0x22e6f5(0x8c7)](0x2,-0xa*_0x3ad9ed)*Math[_0x22e6f5(0x52d)]((_0x3ad9ed-_0x457d04)*(0x2*Math['\x50\x49'])/_0x5d2004)*0.5+0x1;case _0x22e6f5(0x846):var _0x2a88b7=_0x8c18f9/0x1;if(_0x2a88b7<0.36363636363636365)return 7.5625*_0x2a88b7*_0x2a88b7;else{if(_0x2a88b7<0.7272727272727273){var _0x1a0c4a=_0x2a88b7-0.5454545454545454;return 7.5625*_0x1a0c4a*_0x1a0c4a+0.75;}else{if(_0x2a88b7<0.9090909090909091){var _0x1a0c4a=_0x2a88b7-0.8181818181818182;return 7.5625*_0x1a0c4a*_0x1a0c4a+0.9375;}else{var _0x1a0c4a=_0x2a88b7-0.9545454545454546;return 7.5625*_0x1a0c4a*_0x1a0c4a+0.984375;}}}case _0x22e6f5(0x1d8):var _0x1841c6=0x1-VisuMZ[_0x22e6f5(0x5c0)](0x1-_0x8c18f9,_0x22e6f5(0x402));return _0x1841c6;case _0x22e6f5(0x681):if(_0x8c18f9<0.5)var _0x1841c6=VisuMZ[_0x22e6f5(0x5c0)](_0x8c18f9*0x2,_0x22e6f5(0x4e5))*0.5;else var _0x1841c6=VisuMZ[_0x22e6f5(0x5c0)](_0x8c18f9*0x2-0x1,_0x22e6f5(0x402))*0.5+0.5;return _0x1841c6;default:return _0x8c18f9;}},VisuMZ[_0x23b15a(0x906)]=function(_0x309a1a){const _0x31ebab=_0x23b15a;_0x309a1a=String(_0x309a1a)[_0x31ebab(0x6ac)]();const _0x211805=VisuMZ[_0x31ebab(0x7db)][_0x31ebab(0x742)][_0x31ebab(0x39c)];if(_0x309a1a===_0x31ebab(0x414))return _0x211805[_0x31ebab(0x839)];if(_0x309a1a===_0x31ebab(0x55e))return _0x211805[_0x31ebab(0x3ee)];if(_0x309a1a==='\x41\x54\x4b')return _0x211805[_0x31ebab(0x4c8)];if(_0x309a1a===_0x31ebab(0x314))return _0x211805[_0x31ebab(0x5be)];if(_0x309a1a===_0x31ebab(0x507))return _0x211805[_0x31ebab(0x6e5)];if(_0x309a1a===_0x31ebab(0x240))return _0x211805[_0x31ebab(0x33c)];if(_0x309a1a===_0x31ebab(0x664))return _0x211805[_0x31ebab(0x143)];if(_0x309a1a===_0x31ebab(0x535))return _0x211805['\x49\x63\x6f\x6e\x50\x61\x72\x61\x6d\x37'];if(_0x309a1a===_0x31ebab(0x814))return _0x211805['\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x30'];if(_0x309a1a===_0x31ebab(0x67a))return _0x211805['\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x31'];if(_0x309a1a==='\x43\x52\x49')return _0x211805[_0x31ebab(0x290)];if(_0x309a1a===_0x31ebab(0x298))return _0x211805[_0x31ebab(0x4f8)];if(_0x309a1a===_0x31ebab(0x3b0))return _0x211805[_0x31ebab(0x3a0)];if(_0x309a1a==='\x4d\x52\x46')return _0x211805[_0x31ebab(0x381)];if(_0x309a1a===_0x31ebab(0x478))return _0x211805[_0x31ebab(0x491)];if(_0x309a1a===_0x31ebab(0x4fa))return _0x211805['\x49\x63\x6f\x6e\x58\x50\x61\x72\x61\x6d\x37'];if(_0x309a1a==='\x4d\x52\x47')return _0x211805[_0x31ebab(0x1d4)];if(_0x309a1a===_0x31ebab(0x775))return _0x211805[_0x31ebab(0x6e8)];if(_0x309a1a===_0x31ebab(0x4b7))return _0x211805['\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x30'];if(_0x309a1a==='\x47\x52\x44')return _0x211805[_0x31ebab(0x18f)];if(_0x309a1a===_0x31ebab(0x6db))return _0x211805[_0x31ebab(0x877)];if(_0x309a1a==='\x50\x48\x41')return _0x211805['\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x33'];if(_0x309a1a===_0x31ebab(0x935))return _0x211805[_0x31ebab(0x327)];if(_0x309a1a==='\x54\x43\x52')return _0x211805['\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x35'];if(_0x309a1a==='\x50\x44\x52')return _0x211805[_0x31ebab(0x339)];if(_0x309a1a===_0x31ebab(0x88d))return _0x211805[_0x31ebab(0x852)];if(_0x309a1a===_0x31ebab(0x734))return _0x211805['\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x38'];if(_0x309a1a===_0x31ebab(0x638))return _0x211805['\x49\x63\x6f\x6e\x53\x50\x61\x72\x61\x6d\x39'];if(VisuMZ[_0x31ebab(0x7db)][_0x31ebab(0x575)][_0x309a1a])return VisuMZ[_0x31ebab(0x7db)]['\x43\x75\x73\x74\x6f\x6d\x50\x61\x72\x61\x6d\x49\x63\x6f\x6e\x73'][_0x309a1a]||0x0;return 0x0;},VisuMZ[_0x23b15a(0x250)]=function(_0x364d3d,_0x1c74e0,_0x1cb86a){const _0x6883b1=_0x23b15a;if(_0x1cb86a===undefined&&_0x364d3d%0x1===0x0)return _0x364d3d;if(_0x1cb86a!==undefined&&[_0x6883b1(0x414),'\x4d\x41\x58\x4d\x50',_0x6883b1(0x132),_0x6883b1(0x314),'\x4d\x41\x54',_0x6883b1(0x240),_0x6883b1(0x664),_0x6883b1(0x535)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](String(_0x1cb86a)[_0x6883b1(0x6ac)]()[_0x6883b1(0x811)]()))return _0x364d3d;_0x1c74e0=_0x1c74e0||0x0;if(VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x6883b1(0x6b2)][_0x1cb86a])return VisuMZ[_0x6883b1(0x7db)][_0x6883b1(0x61e)][_0x1cb86a]==='\x69\x6e\x74\x65\x67\x65\x72'?_0x364d3d:String((_0x364d3d*0x64)['\x74\x6f\x46\x69\x78\x65\x64'](_0x1c74e0))+'\x25';return String((_0x364d3d*0x64)['\x74\x6f\x46\x69\x78\x65\x64'](_0x1c74e0))+'\x25';},VisuMZ[_0x23b15a(0x823)]=function(_0x2b89a2){const _0x31b917=_0x23b15a;_0x2b89a2=String(_0x2b89a2);if(!_0x2b89a2)return _0x2b89a2;if(typeof _0x2b89a2!=='\x73\x74\x72\x69\x6e\x67')return _0x2b89a2;const _0x582084=VisuMZ[_0x31b917(0x7db)][_0x31b917(0x742)][_0x31b917(0x875)][_0x31b917(0x353)]||_0x31b917(0x6bf),_0x581c90={'\x6d\x61\x78\x69\x6d\x75\x6d\x46\x72\x61\x63\x74\x69\x6f\x6e\x44\x69\x67\x69\x74\x73':0x6};_0x2b89a2=_0x2b89a2[_0x31b917(0x36c)](/\[(.*?)\]/g,(_0x296984,_0x102fb1)=>{const _0x147f57=_0x31b917;return VisuMZ[_0x147f57(0x61f)](_0x102fb1,'\x5b','\x5d');}),_0x2b89a2=_0x2b89a2[_0x31b917(0x36c)](/<(.*?)>/g,(_0x1dc085,_0x213cdb)=>{const _0x13bddf=_0x31b917;return VisuMZ[_0x13bddf(0x61f)](_0x213cdb,'\x3c','\x3e');}),_0x2b89a2=_0x2b89a2[_0x31b917(0x36c)](/\{\{(.*?)\}\}/g,(_0x27835b,_0x100aae)=>{const _0x2aad3a=_0x31b917;return VisuMZ[_0x2aad3a(0x61f)](_0x100aae,'','');}),_0x2b89a2=_0x2b89a2['\x72\x65\x70\x6c\x61\x63\x65'](/(\d+\.?\d*)/g,(_0x9882a3,_0x78d5cd)=>{const _0x5b0cbd=_0x31b917;if(_0x78d5cd[0x0]==='\x30')return _0x78d5cd;return _0x78d5cd[_0x78d5cd['\x6c\x65\x6e\x67\x74\x68']-0x1]==='\x2e'?Number(_0x78d5cd)[_0x5b0cbd(0x768)](_0x582084,_0x581c90)+'\x2e':_0x78d5cd[_0x78d5cd['\x6c\x65\x6e\x67\x74\x68']-0x1]==='\x2c'?Number(_0x78d5cd)['\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67'](_0x582084,_0x581c90)+'\x2c':Number(_0x78d5cd)[_0x5b0cbd(0x768)](_0x582084,_0x581c90);});let _0x222cdc=0x3;while(_0x222cdc--){_0x2b89a2=VisuMZ['\x52\x65\x76\x65\x72\x74\x50\x72\x65\x73\x65\x72\x76\x65\x4e\x75\x6d\x62\x65\x72\x73'](_0x2b89a2);}return _0x2b89a2;},VisuMZ[_0x23b15a(0x61f)]=function(_0x5e2402,_0x1ba95a,_0x35c0a6){const _0x8f8e21=_0x23b15a;return _0x5e2402=_0x5e2402[_0x8f8e21(0x36c)](/(\d)/gi,(_0x38d281,_0x1185db)=>_0x8f8e21(0x79f)['\x66\x6f\x72\x6d\x61\x74'](Number(_0x1185db))),_0x8f8e21(0x864)[_0x8f8e21(0x8ca)](_0x5e2402,_0x1ba95a,_0x35c0a6);},VisuMZ[_0x23b15a(0x6dc)]=function(_0x4bb0d9){return _0x4bb0d9=_0x4bb0d9['\x72\x65\x70\x6c\x61\x63\x65'](/PRESERVCONVERSION\((\d+)\)/gi,(_0x5358e8,_0x13a9cf)=>Number(parseInt(_0x13a9cf))),_0x4bb0d9;},VisuMZ[_0x23b15a(0x7d3)]=function(_0x2803d6){const _0xca8490=_0x23b15a;SoundManager[_0xca8490(0x6eb)]();if(!Utils['\x69\x73\x4e\x77\x6a\x73']()){}else{const _0x5461ee=process['\x70\x6c\x61\x74\x66\x6f\x72\x6d']==_0xca8490(0x752)?_0xca8490(0x1bf):process[_0xca8490(0x280)]=='\x77\x69\x6e\x33\x32'?_0xca8490(0x52b):_0xca8490(0x5f5);require(_0xca8490(0x420))[_0xca8490(0x765)](_0x5461ee+'\x20'+_0x2803d6);}},VisuMZ[_0x23b15a(0x890)]=function(_0x6da928,_0x2c8545){const _0x46b5dd=_0x23b15a;if(!_0x6da928)return'';const _0xdbc6ec=_0x6da928[_0x46b5dd(0x6c6)]||_0x6da928['\x69\x64'];let _0x5e48b8='';return _0x6da928[_0x46b5dd(0x45b)]!==undefined&&_0x6da928[_0x46b5dd(0x137)]!==undefined&&(_0x5e48b8=_0x46b5dd(0x465)[_0x46b5dd(0x8ca)](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x44a)]!==undefined&&_0x6da928['\x6c\x65\x61\x72\x6e\x69\x6e\x67\x73']!==undefined&&(_0x5e48b8=_0x46b5dd(0x335)['\x66\x6f\x72\x6d\x61\x74'](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x455)]!==undefined&&_0x6da928[_0x46b5dd(0x8b1)]!==undefined&&(_0x5e48b8=_0x46b5dd(0x486)['\x66\x6f\x72\x6d\x61\x74'](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x78f)]!==undefined&&_0x6da928[_0x46b5dd(0x4b6)]!==undefined&&(_0x5e48b8='\x49\x74\x65\x6d\x2d\x25\x31\x2d\x25\x32'['\x66\x6f\x72\x6d\x61\x74'](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x1b3)]!==undefined&&_0x6da928[_0x46b5dd(0x423)]===0x1&&(_0x5e48b8='\x57\x65\x61\x70\x6f\x6e\x2d\x25\x31\x2d\x25\x32'[_0x46b5dd(0x8ca)](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x4f1)]!==undefined&&_0x6da928[_0x46b5dd(0x423)]>0x1&&(_0x5e48b8=_0x46b5dd(0x2f9)[_0x46b5dd(0x8ca)](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x648)]!==undefined&&_0x6da928['\x62\x61\x74\x74\x6c\x65\x72\x48\x75\x65']!==undefined&&(_0x5e48b8='\x45\x6e\x65\x6d\x79\x2d\x25\x31\x2d\x25\x32'[_0x46b5dd(0x8ca)](_0xdbc6ec,_0x2c8545)),_0x6da928[_0x46b5dd(0x1e6)]!==undefined&&_0x6da928[_0x46b5dd(0x2ea)]!==undefined&&(_0x5e48b8=_0x46b5dd(0x838)[_0x46b5dd(0x8ca)](_0xdbc6ec,_0x2c8545)),_0x5e48b8;},Window_Base['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x29a)]=function(_0x1df663,_0x3d2072){const _0x560130=_0x23b15a,_0x54f523=ImageManager[_0x560130(0x90f)]||0x20,_0x473f39=ImageManager[_0x560130(0x8d0)]||0x20;if(_0x3d2072[_0x560130(0x859)]){const _0x7536d1=_0x54f523-ImageManager[_0x560130(0x15f)],_0x3289e8=_0x473f39-ImageManager[_0x560130(0x698)];let _0x211a4b=0x2;this['\x6c\x69\x6e\x65\x48\x65\x69\x67\x68\x74']()!==0x24&&(_0x211a4b=Math[_0x560130(0x8ff)]((this[_0x560130(0x32b)]()-_0x473f39)/0x2));const _0xad5f84=_0x3d2072['\x78']+Math[_0x560130(0x8ff)](_0x7536d1/0x2)+0x2,_0x319495=_0x3d2072['\x79']+Math[_0x560130(0x8ff)](_0x3289e8/0x2)+_0x211a4b;this[_0x560130(0x3bd)](_0x1df663,_0xad5f84,_0x319495);}_0x3d2072['\x78']+=_0x54f523+0x4;},Window_StatusBase['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x64\x72\x61\x77\x41\x63\x74\x6f\x72\x49\x63\x6f\x6e\x73']=function(_0x50c940,_0x3d59ed,_0x45a5b5,_0x2d119d){const _0x1795d1=_0x23b15a;_0x2d119d=_0x2d119d||0x90;const _0x514dc6=ImageManager[_0x1795d1(0x90f)]||0x20,_0x2afab4=ImageManager[_0x1795d1(0x8d0)]||0x20,_0x429f37=_0x514dc6-ImageManager[_0x1795d1(0x15f)],_0x57bdb1=_0x2afab4-ImageManager[_0x1795d1(0x698)],_0x456693=_0x50c940['\x61\x6c\x6c\x49\x63\x6f\x6e\x73']()[_0x1795d1(0x55b)](0x0,Math[_0x1795d1(0x8ff)](_0x2d119d/_0x514dc6));let _0x5b98a5=_0x3d59ed+Math[_0x1795d1(0x643)](_0x429f37/0x2),_0x4b5a8c=_0x45a5b5+Math[_0x1795d1(0x643)](_0x57bdb1/0x2);for(const _0x4f1a39 of _0x456693){this['\x64\x72\x61\x77\x49\x63\x6f\x6e'](_0x4f1a39,_0x5b98a5,_0x4b5a8c),_0x5b98a5+=_0x514dc6;}},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x2a2)]=function(){const _0x614331=_0x23b15a;return this[_0x614331(0x283)];},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x23b15a(0x516)]=Game_Picture[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x42\x61\x73\x69\x63'],Game_Picture[_0x23b15a(0x8ea)]['\x69\x6e\x69\x74\x42\x61\x73\x69\x63']=function(){const _0x325715=_0x23b15a;VisuMZ[_0x325715(0x7db)]['\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x69\x6e\x69\x74\x42\x61\x73\x69\x63'][_0x325715(0x744)](this),this[_0x325715(0x283)]={'\x78':0x0,'\x79':0x0},this[_0x325715(0x7c0)]={'\x78':0x0,'\x79':0x0};},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x8f7)]=Game_Picture[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x4d\x6f\x76\x65'],Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x70\x64\x61\x74\x65\x4d\x6f\x76\x65']=function(){const _0x19ff2b=_0x23b15a;this[_0x19ff2b(0x45e)]();const _0x2fd7be=this[_0x19ff2b(0x5fc)];VisuMZ[_0x19ff2b(0x7db)][_0x19ff2b(0x8f7)][_0x19ff2b(0x744)](this),_0x2fd7be>0x0&&this[_0x19ff2b(0x5fc)]<=0x0&&(this['\x5f\x78']=this[_0x19ff2b(0x7f2)],this['\x5f\x79']=this[_0x19ff2b(0x514)],this[_0x19ff2b(0x705)]=this[_0x19ff2b(0x3c1)],this[_0x19ff2b(0x8f8)]=this['\x5f\x74\x61\x72\x67\x65\x74\x53\x63\x61\x6c\x65\x59'],this[_0x19ff2b(0x922)]=this[_0x19ff2b(0x274)],this[_0x19ff2b(0x283)]&&(this[_0x19ff2b(0x283)]['\x78']=this[_0x19ff2b(0x7c0)]['\x78'],this[_0x19ff2b(0x283)]['\x79']=this[_0x19ff2b(0x7c0)]['\x79']));},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x85d)]=Game_Picture[_0x23b15a(0x8ea)]['\x73\x68\x6f\x77'],Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x82c)]=function(_0xa5a914,_0x41bb51,_0x36d071,_0x53ead1,_0x4e245c,_0x97039f,_0x44e934,_0x52880f){const _0xe66730=_0x23b15a;VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0xe66730(0x85d)][_0xe66730(0x744)](this,_0xa5a914,_0x41bb51,_0x36d071,_0x53ead1,_0x4e245c,_0x97039f,_0x44e934,_0x52880f),this[_0xe66730(0x3ff)]([{'\x78':0x0,'\x79':0x0},{'\x78':0.5,'\x79':0.5}][_0x41bb51]||{'\x78':0x0,'\x79':0x0});},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x6d\x6f\x76\x65']=Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x51b)],Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x51b)]=function(_0x3e3769,_0x19f5b2,_0x2ac6e4,_0x22c839,_0x4ff575,_0x1e5405,_0x3caaa4,_0x40b806,_0x275e9d){const _0x22de33=_0x23b15a;VisuMZ[_0x22de33(0x7db)]['\x47\x61\x6d\x65\x5f\x50\x69\x63\x74\x75\x72\x65\x5f\x6d\x6f\x76\x65'][_0x22de33(0x744)](this,_0x3e3769,_0x19f5b2,_0x2ac6e4,_0x22c839,_0x4ff575,_0x1e5405,_0x3caaa4,_0x40b806,_0x275e9d),this[_0x22de33(0x606)]([{'\x78':0x0,'\x79':0x0},{'\x78':0.5,'\x79':0.5}][_0x3e3769]||{'\x78':0x0,'\x79':0x0});},Game_Picture[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x41\x6e\x63\x68\x6f\x72']=function(){const _0x2cee87=_0x23b15a;this[_0x2cee87(0x5fc)]>0x0&&(this['\x5f\x61\x6e\x63\x68\x6f\x72']['\x78']=this[_0x2cee87(0x123)](this[_0x2cee87(0x283)]['\x78'],this[_0x2cee87(0x7c0)]['\x78']),this[_0x2cee87(0x283)]['\x79']=this[_0x2cee87(0x123)](this[_0x2cee87(0x283)]['\x79'],this[_0x2cee87(0x7c0)]['\x79']));},Game_Picture['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x73\x65\x74\x41\x6e\x63\x68\x6f\x72']=function(_0x159ab7){const _0x4b5068=_0x23b15a;this['\x5f\x61\x6e\x63\x68\x6f\x72']=_0x159ab7,this[_0x4b5068(0x7c0)]=JsonEx[_0x4b5068(0x7ed)](this[_0x4b5068(0x283)]);},Game_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x606)]=function(_0x1d8f43){const _0x159fa0=_0x23b15a;this[_0x159fa0(0x7c0)]=_0x1d8f43;},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x574)]=Sprite_Picture[_0x23b15a(0x8ea)]['\x75\x70\x64\x61\x74\x65\x4f\x72\x69\x67\x69\x6e'],Sprite_Picture[_0x23b15a(0x8ea)][_0x23b15a(0x180)]=function(){const _0x501eab=_0x23b15a,_0xcf4ea5=this[_0x501eab(0x457)]();!_0xcf4ea5[_0x501eab(0x2a2)]()?VisuMZ[_0x501eab(0x7db)][_0x501eab(0x574)][_0x501eab(0x744)](this):(this[_0x501eab(0x2a2)]['\x78']=_0xcf4ea5[_0x501eab(0x2a2)]()['\x78'],this[_0x501eab(0x2a2)]['\x79']=_0xcf4ea5[_0x501eab(0x2a2)]()['\x79']);},Game_Action[_0x23b15a(0x8ea)]['\x73\x65\x74\x45\x6e\x65\x6d\x79\x41\x63\x74\x69\x6f\x6e']=function(_0x1d1092){const _0x3798d1=_0x23b15a;if(_0x1d1092){const _0x27d70a=_0x1d1092[_0x3798d1(0x42e)];if(_0x27d70a===0x1&&this[_0x3798d1(0x80a)]()[_0x3798d1(0x8a3)]()!==0x1)this[_0x3798d1(0x25a)]();else _0x27d70a===0x2&&this[_0x3798d1(0x80a)]()['\x67\x75\x61\x72\x64\x53\x6b\x69\x6c\x6c\x49\x64']()!==0x2?this[_0x3798d1(0x2e5)]():this['\x73\x65\x74\x53\x6b\x69\x6c\x6c'](_0x27d70a);}else this[_0x3798d1(0x8cf)]();},Game_Actor['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x75\x73\x61\x62\x6c\x65\x53\x6b\x69\x6c\x6c\x73']=function(){const _0x2355b9=_0x23b15a;return this['\x73\x6b\x69\x6c\x6c\x73']()[_0x2355b9(0x731)](_0x4c89df=>this[_0x2355b9(0x654)](_0x4c89df)&&this[_0x2355b9(0x21c)]()[_0x2355b9(0x313)](_0x4c89df[_0x2355b9(0x455)]));},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x3f9)]=function(){const _0xfd6c2d=_0x23b15a;this['\x5f\x64\x69\x6d\x6d\x65\x72\x53\x70\x72\x69\x74\x65']=new Sprite(),this[_0xfd6c2d(0x6b0)][_0xfd6c2d(0x347)]=new Bitmap(0x0,0x0),this[_0xfd6c2d(0x6b0)]['\x78']=0x0,this[_0xfd6c2d(0x254)](this[_0xfd6c2d(0x6b0)]);},Window_Base[_0x23b15a(0x8ea)][_0x23b15a(0x34a)]=function(){const _0xd6c17c=_0x23b15a;if(this[_0xd6c17c(0x6b0)]){const _0x1a1a6a=this[_0xd6c17c(0x6b0)][_0xd6c17c(0x347)],_0x1afb50=this['\x77\x69\x64\x74\x68'],_0x170a23=this[_0xd6c17c(0x92d)],_0x820cd8=this['\x70\x61\x64\x64\x69\x6e\x67'],_0xde1365=ColorManager[_0xd6c17c(0x766)](),_0x7d1049=ColorManager['\x64\x69\x6d\x43\x6f\x6c\x6f\x72\x32']();_0x1a1a6a[_0xd6c17c(0x4d2)](_0x1afb50,_0x170a23),_0x1a1a6a['\x67\x72\x61\x64\x69\x65\x6e\x74\x46\x69\x6c\x6c\x52\x65\x63\x74'](0x0,0x0,_0x1afb50,_0x820cd8,_0x7d1049,_0xde1365,!![]),_0x1a1a6a[_0xd6c17c(0x3c5)](0x0,_0x820cd8,_0x1afb50,_0x170a23-_0x820cd8*0x2,_0xde1365),_0x1a1a6a[_0xd6c17c(0x5b0)](0x0,_0x170a23-_0x820cd8,_0x1afb50,_0x820cd8,_0xde1365,_0x7d1049,!![]),this[_0xd6c17c(0x6b0)][_0xd6c17c(0x1f8)](0x0,0x0,_0x1afb50,_0x170a23);}},Game_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x139)]=function(){const _0x158cc4=_0x23b15a;for(let _0x378670=0x0;_0x378670<this[_0x158cc4(0x7c7)]();_0x378670++){const _0x10c20d=this['\x6d\x61\x6b\x65\x41\x63\x74\x69\x6f\x6e\x4c\x69\x73\x74']();let _0x1eca19=Number[_0x158cc4(0x3ec)];this[_0x158cc4(0x653)](_0x378670,_0x10c20d[0x0]);for(const _0x2e27fb of _0x10c20d){const _0x5b3048=_0x2e27fb[_0x158cc4(0x5bf)]();_0x5b3048>_0x1eca19&&(_0x1eca19=_0x5b3048,this[_0x158cc4(0x653)](_0x378670,_0x2e27fb));}}this[_0x158cc4(0x146)](_0x158cc4(0x6c3));},Window_BattleItem[_0x23b15a(0x8ea)]['\x69\x73\x45\x6e\x61\x62\x6c\x65\x64']=function(_0x22dbcb){const _0x1fca69=_0x23b15a;return BattleManager['\x61\x63\x74\x6f\x72']()?BattleManager['\x61\x63\x74\x6f\x72']()[_0x1fca69(0x654)](_0x22dbcb):Window_ItemList[_0x1fca69(0x8ea)][_0x1fca69(0x676)]['\x63\x61\x6c\x6c'](this,_0x22dbcb);},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x393)]=Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x42d)],Scene_Map[_0x23b15a(0x8ea)][_0x23b15a(0x42d)]=function(){const _0x48c587=_0x23b15a;VisuMZ[_0x48c587(0x7db)][_0x48c587(0x393)][_0x48c587(0x744)](this);const _0x5d9fa1=this[_0x48c587(0x22b)][_0x48c587(0x564)];_0x5d9fa1&&this[_0x48c587(0x8c0)](_0x5d9fa1);},VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x42\x61\x74\x74\x6c\x65\x5f\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74\x46\x69\x78']=Scene_Battle[_0x23b15a(0x8ea)][_0x23b15a(0x42d)],Scene_Battle['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x63\x72\x65\x61\x74\x65\x53\x70\x72\x69\x74\x65\x73\x65\x74']=function(){const _0x494bc3=_0x23b15a;VisuMZ[_0x494bc3(0x7db)][_0x494bc3(0x928)][_0x494bc3(0x744)](this);const _0x3ce332=this['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74']['\x5f\x74\x69\x6d\x65\x72\x53\x70\x72\x69\x74\x65'];_0x3ce332&&this[_0x494bc3(0x8c0)](_0x3ce332);},Sprite_Actor[_0x23b15a(0x8ea)][_0x23b15a(0x8fc)]=function(){const _0x1f5945=_0x23b15a;Sprite_Battler['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x1f5945(0x8fc)]['\x63\x61\x6c\x6c'](this),this['\x75\x70\x64\x61\x74\x65\x53\x68\x61\x64\x6f\x77']();if(this['\x5f\x61\x63\x74\x6f\x72'])this['\x75\x70\x64\x61\x74\x65\x4d\x6f\x74\x69\x6f\x6e']();else this[_0x1f5945(0x91e)]!==''&&(this['\x5f\x62\x61\x74\x74\x6c\x65\x72\x4e\x61\x6d\x65']='');},Window[_0x23b15a(0x8ea)][_0x23b15a(0x617)]=function(){const _0x3207a6=_0x23b15a,_0x235780=this[_0x3207a6(0x13b)],_0x8b344b=this[_0x3207a6(0x665)];this[_0x3207a6(0x5ed)][_0x3207a6(0x347)]=this[_0x3207a6(0x5d1)],this['\x5f\x64\x6f\x77\x6e\x41\x72\x72\x6f\x77\x53\x70\x72\x69\x74\x65'][_0x3207a6(0x2a2)]['\x78']=0.5,this[_0x3207a6(0x5ed)][_0x3207a6(0x2a2)]['\x79']=0.5,this[_0x3207a6(0x5ed)][_0x3207a6(0x1f8)](0x84,0x3c,0x18,0xc),this[_0x3207a6(0x5ed)]['\x6d\x6f\x76\x65'](Math[_0x3207a6(0x38b)](_0x235780/0x2),Math[_0x3207a6(0x38b)](_0x8b344b-0xc)),this[_0x3207a6(0x3ce)][_0x3207a6(0x347)]=this[_0x3207a6(0x5d1)],this[_0x3207a6(0x3ce)][_0x3207a6(0x2a2)]['\x78']=0.5,this[_0x3207a6(0x3ce)][_0x3207a6(0x2a2)]['\x79']=0.5,this[_0x3207a6(0x3ce)][_0x3207a6(0x1f8)](0x84,0x18,0x18,0xc),this['\x5f\x75\x70\x41\x72\x72\x6f\x77\x53\x70\x72\x69\x74\x65'][_0x3207a6(0x51b)](Math['\x72\x6f\x75\x6e\x64'](_0x235780/0x2),Math[_0x3207a6(0x38b)](0xc));},Window['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x452)]=function(){const _0x3dc97b=_0x23b15a;this[_0x3dc97b(0x7e2)][_0x3dc97b(0x347)]=this[_0x3dc97b(0x5d1)],this[_0x3dc97b(0x7e2)][_0x3dc97b(0x2a2)]['\x78']=0.5,this[_0x3dc97b(0x7e2)][_0x3dc97b(0x2a2)]['\x79']=0x1,this[_0x3dc97b(0x7e2)][_0x3dc97b(0x51b)](Math[_0x3dc97b(0x38b)](this[_0x3dc97b(0x13b)]/0x2),this[_0x3dc97b(0x665)]),this[_0x3dc97b(0x7e2)][_0x3dc97b(0x1f8)](0x90,0x60,0x18,0x18),this[_0x3dc97b(0x7e2)]['\x61\x6c\x70\x68\x61']=0xff;},Window[_0x23b15a(0x8ea)]['\x5f\x75\x70\x64\x61\x74\x65\x46\x69\x6c\x74\x65\x72\x41\x72\x65\x61']=function(){const _0xfde54d=_0x23b15a,_0x4fc5db=this[_0xfde54d(0x45c)][_0xfde54d(0x186)][_0xfde54d(0x1c4)](new Point(0x0,0x0)),_0x44d197=this[_0xfde54d(0x45c)][_0xfde54d(0x3aa)];_0x44d197['\x78']=_0x4fc5db['\x78']+this[_0xfde54d(0x549)]['\x78'],_0x44d197['\x79']=_0x4fc5db['\x79']+this[_0xfde54d(0x549)]['\x79'],_0x44d197[_0xfde54d(0x3e2)]=Math[_0xfde54d(0x643)](this['\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68']*this[_0xfde54d(0x680)]['\x78']),_0x44d197[_0xfde54d(0x92d)]=Math['\x63\x65\x69\x6c'](this[_0xfde54d(0x312)]*this['\x73\x63\x61\x6c\x65']['\x79']);},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x57\x69\x6e\x64\x6f\x77\x5f\x72\x65\x66\x72\x65\x73\x68\x42\x61\x63\x6b']=Window[_0x23b15a(0x8ea)][_0x23b15a(0x8bf)],Window[_0x23b15a(0x8ea)]['\x5f\x72\x65\x66\x72\x65\x73\x68\x42\x61\x63\x6b']=function(){const _0x49ce37=_0x23b15a,_0x201951=VisuMZ[_0x49ce37(0x7db)][_0x49ce37(0x742)]['\x57\x69\x6e\x64\x6f\x77'][_0x49ce37(0x220)]??!![];if(!_0x201951)return VisuMZ[_0x49ce37(0x7db)][_0x49ce37(0x22a)]['\x63\x61\x6c\x6c'](this);const _0x1ea7a4=this[_0x49ce37(0x141)],_0x259c42=Math[_0x49ce37(0x52a)](0x0,this[_0x49ce37(0x13b)]-_0x1ea7a4*0x2),_0x3f322c=Math[_0x49ce37(0x52a)](0x0,this[_0x49ce37(0x665)]-_0x1ea7a4*0x2),_0x268f5c=this[_0x49ce37(0x930)],_0x31b824=_0x268f5c[_0x49ce37(0x853)][0x0];_0x268f5c['\x62\x69\x74\x6d\x61\x70']=this[_0x49ce37(0x5d1)],_0x268f5c['\x73\x65\x74\x46\x72\x61\x6d\x65'](0x0,0x0,0x60,0x60),_0x268f5c[_0x49ce37(0x51b)](_0x1ea7a4,_0x1ea7a4),_0x268f5c[_0x49ce37(0x680)]['\x78']=_0x259c42/0x60,_0x268f5c['\x73\x63\x61\x6c\x65']['\x79']=_0x3f322c/0x60,_0x31b824[_0x49ce37(0x347)]=this[_0x49ce37(0x5d1)],_0x31b824[_0x49ce37(0x1f8)](0x0,0x60,0x60,0x60),_0x31b824[_0x49ce37(0x51b)](0x0,0x0,_0x259c42,_0x3f322c),_0x31b824['\x73\x63\x61\x6c\x65']['\x78']=0x1/_0x268f5c[_0x49ce37(0x680)]['\x78'],_0x31b824[_0x49ce37(0x680)]['\x79']=0x1/_0x268f5c[_0x49ce37(0x680)]['\x79'],_0x268f5c[_0x49ce37(0x601)](this['\x5f\x63\x6f\x6c\x6f\x72\x54\x6f\x6e\x65']);},Game_Temp['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x733)]=function(){const _0x2ff4c9=_0x23b15a;this[_0x2ff4c9(0x221)]=[],this[_0x2ff4c9(0x125)]=[],this[_0x2ff4c9(0x712)]=[],this[_0x2ff4c9(0x3de)]=[];},VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x42\x61\x73\x65\x5f\x74\x65\x72\x6d\x69\x6e\x61\x74\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x43\x6c\x65\x61\x72\x42\x75\x67\x46\x69\x78']=Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x68c)],Scene_Base[_0x23b15a(0x8ea)][_0x23b15a(0x68c)]=function(){const _0x3406d2=_0x23b15a;$gameTemp&&$gameTemp['\x73\x63\x65\x6e\x65\x54\x65\x72\x6d\x69\x6e\x61\x74\x69\x6f\x6e\x43\x6c\x65\x61\x72\x45\x66\x66\x65\x63\x74\x73'](),VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65'][_0x3406d2(0x55d)]['\x63\x61\x6c\x6c'](this);},Bitmap[_0x23b15a(0x8ea)]['\x6d\x65\x61\x73\x75\x72\x65\x54\x65\x78\x74\x57\x69\x64\x74\x68\x4e\x6f\x52\x6f\x75\x6e\x64\x69\x6e\x67']=function(_0x474b45){const _0x397f59=_0x23b15a,_0x8a6d6=this[_0x397f59(0x349)];_0x8a6d6[_0x397f59(0x6f0)](),_0x8a6d6['\x66\x6f\x6e\x74']=this[_0x397f59(0x82f)]();const _0xa08be1=_0x8a6d6[_0x397f59(0x84d)](_0x474b45)[_0x397f59(0x3e2)];return _0x8a6d6['\x72\x65\x73\x74\x6f\x72\x65'](),_0xa08be1;},Window_Message[_0x23b15a(0x8ea)][_0x23b15a(0x412)]=function(_0x3f9a4d){const _0x44de2b=_0x23b15a;return this['\x75\x73\x65\x46\x6f\x6e\x74\x57\x69\x64\x74\x68\x46\x69\x78']()?this[_0x44de2b(0x4e4)][_0x44de2b(0x7b0)](_0x3f9a4d):Window_Base[_0x44de2b(0x8ea)]['\x74\x65\x78\x74\x57\x69\x64\x74\x68'][_0x44de2b(0x744)](this,_0x3f9a4d);},Window_Message[_0x23b15a(0x8ea)][_0x23b15a(0x72a)]=function(){const _0x203844=_0x23b15a;return VisuMZ[_0x203844(0x7db)][_0x203844(0x742)][_0x203844(0x875)]['\x46\x6f\x6e\x74\x57\x69\x64\x74\x68\x46\x69\x78']??!![];},VisuMZ[_0x23b15a(0x7db)]['\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x6e\x75\x6d\x52\x65\x70\x65\x61\x74\x73']=Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x720)],Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x720)]=function(){const _0x16fbc4=_0x23b15a;return this[_0x16fbc4(0x2cb)]()?VisuMZ[_0x16fbc4(0x7db)][_0x16fbc4(0x67e)]['\x63\x61\x6c\x6c'](this):0x0;},VisuMZ['\x43\x6f\x72\x65\x45\x6e\x67\x69\x6e\x65']['\x47\x61\x6d\x65\x5f\x41\x63\x74\x69\x6f\x6e\x5f\x73\x65\x74\x41\x74\x74\x61\x63\x6b']=Game_Action[_0x23b15a(0x8ea)][_0x23b15a(0x25a)],Game_Action['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x25a)]=function(){const _0x2f249d=_0x23b15a;if(this[_0x2f249d(0x80a)]()&&this[_0x2f249d(0x80a)]()[_0x2f249d(0x89d)]())VisuMZ[_0x2f249d(0x7db)][_0x2f249d(0x1dd)][_0x2f249d(0x744)](this);else BattleManager['\x5f\x62\x79\x70\x61\x73\x73\x43\x61\x6e\x43\x6f\x75\x6e\x74\x65\x72\x43\x68\x65\x63\x6b']?VisuMZ[_0x2f249d(0x7db)][_0x2f249d(0x1dd)][_0x2f249d(0x744)](this):this[_0x2f249d(0x8cf)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x3b2)]=BattleManager[_0x23b15a(0x1bc)],BattleManager[_0x23b15a(0x1bc)]=function(_0x166f3b,_0x55573d){const _0x19885e=_0x23b15a;this[_0x19885e(0x256)]=!![],VisuMZ[_0x19885e(0x7db)][_0x19885e(0x3b2)][_0x19885e(0x744)](this,_0x166f3b,_0x55573d),this['\x5f\x62\x79\x70\x61\x73\x73\x43\x61\x6e\x43\x6f\x75\x6e\x74\x65\x72\x43\x68\x65\x63\x6b']=undefined;},Sprite_Name[_0x23b15a(0x8ea)][_0x23b15a(0x566)]=function(){return 0x24;},Sprite_Name[_0x23b15a(0x8ea)][_0x23b15a(0x88f)]=function(){const _0xf7c9b=_0x23b15a,_0x32d28c=this[_0xf7c9b(0x5f0)](),_0x494dd3=this[_0xf7c9b(0x7c2)](),_0x360b76=this[_0xf7c9b(0x566)]();this['\x73\x65\x74\x75\x70\x46\x6f\x6e\x74'](),this[_0xf7c9b(0x347)][_0xf7c9b(0x8cf)](),this['\x62\x69\x74\x6d\x61\x70']['\x64\x72\x61\x77\x54\x65\x78\x74\x54\x6f\x70\x41\x6c\x69\x67\x6e\x65\x64'](_0x32d28c,0x4,0x0,_0x494dd3-0xa,_0x360b76,_0xf7c9b(0x87d));},Bitmap[_0x23b15a(0x8ea)][_0x23b15a(0x66a)]=function(_0x50d307,_0x9a9547,_0x39c742,_0x506031,_0x3453a9,_0x546fc8){const _0x4958bc=_0x23b15a,_0x3c58cd=this[_0x4958bc(0x349)],_0x19fa2f=_0x3c58cd[_0x4958bc(0x43f)];_0x506031=_0x506031||0xffffffff;let _0x592a44=_0x9a9547,_0x363313=Math[_0x4958bc(0x38b)](_0x39c742+0xc+this['\x66\x6f\x6e\x74\x53\x69\x7a\x65']*0.35);_0x546fc8===_0x4958bc(0x387)&&(_0x592a44+=_0x506031/0x2),_0x546fc8==='\x72\x69\x67\x68\x74'&&(_0x592a44+=_0x506031),_0x3c58cd[_0x4958bc(0x6f0)](),_0x3c58cd[_0x4958bc(0x628)]=this[_0x4958bc(0x82f)](),_0x3c58cd[_0x4958bc(0x7e5)]=_0x546fc8,_0x3c58cd[_0x4958bc(0x2b3)]=_0x4958bc(0x735),_0x3c58cd[_0x4958bc(0x43f)]=0x1,this[_0x4958bc(0x2a5)](_0x50d307,_0x592a44,_0x363313,_0x506031),_0x3c58cd[_0x4958bc(0x43f)]=_0x19fa2f,this['\x5f\x64\x72\x61\x77\x54\x65\x78\x74\x42\x6f\x64\x79'](_0x50d307,_0x592a44,_0x363313,_0x506031),_0x3c58cd[_0x4958bc(0x1f4)](),this['\x5f\x62\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65'][_0x4958bc(0x8fc)]();},VisuMZ[_0x23b15a(0x7db)][_0x23b15a(0x6a6)]=BattleManager[_0x23b15a(0x33b)],BattleManager[_0x23b15a(0x33b)]=function(_0x31ad8e){const _0x40fe23=_0x23b15a;if(this[_0x40fe23(0x159)]['\x69\x73\x46\x6f\x72\x46\x72\x69\x65\x6e\x64']())return![];return VisuMZ[_0x40fe23(0x7db)]['\x42\x61\x74\x74\x6c\x65\x4d\x61\x6e\x61\x67\x65\x72\x5f\x63\x68\x65\x63\x6b\x53\x75\x62\x73\x74\x69\x74\x75\x74\x65'][_0x40fe23(0x744)](this,_0x31ad8e);},BattleManager['\x65\x6e\x64\x41\x63\x74\x69\x6f\x6e']=function(){const _0x265a95=_0x23b15a;this[_0x265a95(0x69e)]&&this[_0x265a95(0x404)]['\x65\x6e\x64\x41\x63\x74\x69\x6f\x6e'](this[_0x265a95(0x69e)]),this[_0x265a95(0x20f)]=_0x265a95(0x56f),this[_0x265a95(0x69e)]&&this[_0x265a95(0x69e)][_0x265a95(0x7c7)]()===0x0&&(this['\x65\x6e\x64\x42\x61\x74\x74\x6c\x65\x72\x41\x63\x74\x69\x6f\x6e\x73'](this['\x5f\x73\x75\x62\x6a\x65\x63\x74']),this[_0x265a95(0x69e)]=null);},Bitmap[_0x23b15a(0x8ea)]['\x5f\x73\x74\x61\x72\x74\x4c\x6f\x61\x64\x69\x6e\x67']=function(){const _0x1e0983=_0x23b15a;this[_0x1e0983(0x7cc)]=new Image(),this[_0x1e0983(0x7cc)]['\x63\x72\x6f\x73\x73\x4f\x72\x69\x67\x69\x6e']='\x61\x6e\x6f\x6e\x79\x6d\x6f\x75\x73',this[_0x1e0983(0x7cc)]['\x6f\x6e\x6c\x6f\x61\x64']=this[_0x1e0983(0x4bb)]['\x62\x69\x6e\x64'](this),this[_0x1e0983(0x7cc)][_0x1e0983(0x8e4)]=this[_0x1e0983(0x6ce)][_0x1e0983(0x647)](this),this[_0x1e0983(0x164)](),this[_0x1e0983(0x322)]='\x6c\x6f\x61\x64\x69\x6e\x67',Utils[_0x1e0983(0x5a4)]()?this[_0x1e0983(0x15d)]():(this[_0x1e0983(0x7cc)][_0x1e0983(0x31c)]=this[_0x1e0983(0x827)],!window[_0x1e0983(0x3b5)]&&(alert('\x70\x6f\x72\x74\x20\x62\x79\x20\x62\x72\x65\x61\x64\x62\x62'),alert('\x67\x6e\x2d\x6d\x61\x74\x68\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f'),alert(_0x1e0983(0x23b)),window[_0x1e0983(0x3b5)]=!![]),![]&&this[_0x1e0983(0x7cc)][_0x1e0983(0x3e2)]>0x0&&(this[_0x1e0983(0x7cc)]['\x6f\x6e\x6c\x6f\x61\x64']=null,this['\x5f\x6f\x6e\x4c\x6f\x61\x64']()));},Scene_Skill['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6f\x6e\x41\x63\x74\x6f\x72\x43\x68\x61\x6e\x67\x65']=function(){const _0x51d954=_0x23b15a;Scene_MenuBase[_0x51d954(0x8ea)][_0x51d954(0x932)][_0x51d954(0x744)](this),this[_0x51d954(0x45d)](),this['\x5f\x69\x74\x65\x6d\x57\x69\x6e\x64\x6f\x77'][_0x51d954(0x2b4)](),this[_0x51d954(0x850)][_0x51d954(0x759)](),this[_0x51d954(0x320)][_0x51d954(0x15e)]();},Scene_Skill['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x7bf)]=function(){const _0x37c6ec=_0x23b15a;return this[_0x37c6ec(0x320)]&&this[_0x37c6ec(0x320)][_0x37c6ec(0x7ec)];},Game_Map[_0x23b15a(0x8ea)][_0x23b15a(0x7ca)]=function(_0x551ea7,_0x8ff23b,_0x296f8b){const _0x4346a4=_0x23b15a,_0x2386d3=this[_0x4346a4(0x330)](),_0x1509ac=this[_0x4346a4(0x60b)](_0x551ea7,_0x8ff23b);for(const _0x2096de of _0x1509ac){const _0x5aedc3=_0x2386d3[_0x2096de];if(_0x5aedc3===undefined||_0x5aedc3===null){if($gameTemp['\x69\x73\x50\x6c\x61\x79\x74\x65\x73\x74']()&&!DataManager[_0x4346a4(0x3ca)]()){let _0x5b0837='\x43\x75\x72\x72\x65\x6e\x74\x20\x74\x69\x6c\x65\x73\x65\x74\x20\x68\x61\x73\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x66\x6c\x61\x67\x20\x64\x61\x74\x61\x2e\x0a';_0x5b0837+='\x43\x6c\x69\x63\x6b\x20\x22\x43\x6f\x70\x79\x20\x50\x61\x67\x65\x22\x20\x66\x72\x6f\x6d\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x74\x69\x6c\x65\x73\x65\x74\x27\x73\x20\x70\x61\x67\x65\x73\x0a',_0x5b0837+=_0x4346a4(0x7e6),this[_0x4346a4(0x8f1)]()?(alert(_0x5b0837),SceneManager[_0x4346a4(0x3db)]()):(!this['\x5f\x64\x69\x73\x70\x6c\x61\x79\x65\x64\x50\x61\x73\x73\x61\x67\x65\x45\x72\x72\x6f\x72']&&console[_0x4346a4(0x5f6)](_0x5b0837),this['\x5f\x64\x69\x73\x70\x6c\x61\x79\x65\x64\x50\x61\x73\x73\x61\x67\x65\x45\x72\x72\x6f\x72']=!![]);}}if((_0x5aedc3&0x10)!==0x0)continue;if((_0x5aedc3&_0x296f8b)===0x0)return!![];if((_0x5aedc3&_0x296f8b)===_0x296f8b)return![];}return![];},Game_Map[_0x23b15a(0x8ea)]['\x73\x68\x6f\x77\x49\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x54\x69\x6c\x65\x73\x65\x74\x45\x72\x72\x6f\x72']=function(){if(Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x33\x5f\x45\x76\x65\x6e\x74\x43\x68\x61\x69\x6e\x52\x65\x61\x63\x74'])return!![];if(Imported['\x56\x69\x73\x75\x4d\x5a\x5f\x34\x5f\x55\x6e\x69\x71\x75\x65\x54\x69\x6c\x65\x45\x66\x66\x65\x63\x74\x73'])return!![];return![];},Sprite_Animation[_0x23b15a(0x8ea)][_0x23b15a(0x3d0)]=function(_0xfe4af0){const _0x43fb9b=_0x23b15a;!this[_0x43fb9b(0x260)]&&(this[_0x43fb9b(0x260)]=_0xfe4af0['\x67\x6c']['\x67\x65\x74\x50\x61\x72\x61\x6d\x65\x74\x65\x72'](_0xfe4af0['\x67\x6c']['\x56\x49\x45\x57\x50\x4f\x52\x54']));},VisuMZ[_0x23b15a(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x73\x68\x6f\x75\x6c\x64\x41\x75\x74\x6f\x73\x61\x76\x65']=Scene_Map['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x73\x68\x6f\x75\x6c\x64\x41\x75\x74\x6f\x73\x61\x76\x65'],Scene_Map[_0x23b15a(0x8ea)]['\x73\x68\x6f\x75\x6c\x64\x41\x75\x74\x6f\x73\x61\x76\x65']=function(){const _0x1188ea=_0x23b15a,_0x180d2d=SceneManager[_0x1188ea(0x67b)][_0x1188ea(0x5f0)];if(['\x53\x63\x65\x6e\x65\x5f\x54\x69\x74\x6c\x65',_0x1188ea(0x629),_0x1188ea(0x6cf),_0x1188ea(0x246)][_0x1188ea(0x313)](_0x180d2d))return![];return VisuMZ[_0x1188ea(0x7db)]['\x53\x63\x65\x6e\x65\x5f\x4d\x61\x70\x5f\x73\x68\x6f\x75\x6c\x64\x41\x75\x74\x6f\x73\x61\x76\x65'][_0x1188ea(0x744)](this);},VisuMZ[_0x23b15a(0x7db)]['\x57\x69\x6e\x64\x6f\x77\x5f\x53\x6b\x69\x6c\x6c\x4c\x69\x73\x74\x5f\x69\x6e\x63\x6c\x75\x64\x65\x73']=Window_SkillList['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x313)],Window_SkillList['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x23b15a(0x313)]=function(_0xcacbc8){const _0x1b4ca7=_0x23b15a;if(this['\x5f\x73\x74\x79\x70\x65\x49\x64']<=0x0)return![];return VisuMZ[_0x1b4ca7(0x7db)][_0x1b4ca7(0x924)][_0x1b4ca7(0x744)](this,_0xcacbc8);};