//=============================================================================
// VisuStella MZ - Picture Common Events
// VisuMZ_4_PictureCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_PictureCommonEvents = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PictureCommonEvents = VisuMZ.PictureCommonEvents || {};
VisuMZ.PictureCommonEvents.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.03] [PictureCommonEvents]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Picture_Common_Events_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * With RPG Maker MZ having better touch support, it's important that almost
 * everything can be interacted with such as pictures. Pictures on the map
 * screen can have a Common Event bound to them, which will launch once clicked
 * (assuming no other events are running). These pictures can also change the
 * Common Events bound to them and/or clear them during the game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Functionality to bind Common Events to pictures.
 * * Change which Common Events run during a playthrough.
 * * Clear Common Events from pictures to remove any bindings.
 * * Clicked pictures can require clicking on only opaque pixels and not
 *   fully transparent ones.
 * * Include hover effects like blend mode changes and tone shifts to help
 *   players understand when a picture has been selected.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Compatibility Issues
 * ============================================================================
 *
 * This plugin will most likely have compatibility issues with anything that
 * involves clicking pictures. If you are using another plugin that does
 * something with clicking pictures on the map screen, the likelihood of
 * clashing can occur if these plugins utilize the same pictures and we will
 * not be held accountable for that as it is something within your power to
 * change by simply picking different pictures.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the Plugin Parameters, you will see a list of all the pictures that you
 * can bind to a Common Event. If that number is something other than 0, then
 * the number associated with it will be the Common Event that will run. If you
 * assign it to a Common Event ID that does not exist, you will get an error so
 * please be wary of that.
 * 
 * Also be warned that the player CANNOT press Picture Common Events whenever
 * an event is running (with the exception of Parallels). This is NOT a bug.
 * 
 * This is because if an event is running under the main event interpreter and
 * a Picture Common Event were to be pressed, it would interrupt the flow of
 * the event. This would result in cutscenes to be potentially bugged,
 * currently running events to also be bugged, etc.
 * 
 * As such, the ability to click and activate Picture Common Events during an
 * event (with the exception of Parallels) are disabled to prevent potential
 * problems with the game dev cycle.
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
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Change Picture Common Event
 * - Change the Common Event bound to specific picture(s).
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to change.
 *
 *   Common Event ID:
 *   - Change the Common Event bound to specific picture(s).
 * 
 *   Custom
 * 
 *     Opaque Only?
 *     - Ignore clicks on transparent pixels and accept only opaque pixels for
 *       this specific picture.
 * 
 *       Error Margin:
 *       - Error margin when clicking for opaque pixels.
 *       - This value determines the radius.
 * 
 *     Change Tone on Hover?
 *     - Change the tone of the picture on hover?
 * 
 *       Hover Tone:
 *       - Tone settings upon hovering.
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Blend Mode on Hover:
 *     - The blend mode used when this picture is hovered over.
 *
 * ---
 *
 * System: Clear All Picture Common Events
 * - Clears all Common Event bound to specific picture(s).
 *
 * ---
 *
 * System: Clear Picture Common Event
 * - Clears any Common Event bound to specific picture(s).
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to clear.
 *
 * ---
 *
 * System: Erase & Clear All Pictures
 * - Erases all pictures on the screen and clears their Common Events.
 * 
 * ---
 *
 * System: Erase & Clear Picture
 * - Erases and clears any Common Events attached to specific picture(s).
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to erase and clear.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Global Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to adjust which Pictures will trigger
 * which Common Events upon being clicked.
 *
 * ---
 * 
 * General
 * 
 *   Opaque Only?
 *   - Ignore clicks on transparent pixels and accept only opaque pixels for
 *     the Plugin Parameter bindings.
 * 
 *     Error Margin:
 *     - Error margin when clicking for opaque pixels.
 *     - This value determines the radius.
 * 
 *   Change Tone on Hover?
 *   - Change the tone of the picture on hover?
 * 
 *     Hover Tone:
 *     - Tone settings upon hovering.
 *     - Format: [Red, Green, Blue, Gray]
 * 
 *   Blend Mode on Hover:
 *   - The blend mode used when this picture is hovered over.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Picture Settings
 * ============================================================================
 *
 * Each of the 100 picture slots are listed in the Plugin Parameters and can
 * be assigned a default setting that is already set up at the start of the
 * game without needing to assign a Common Event to it by a Plugin Command.
 * 
 * You can still overwrite their settings through a Plugin Command.
 * 
 * ---
 *
 * Pictures #1 through #100
 * 
 *   Picture #1:
 *   through
 *   Picture #100:
 *   - Default Common Event settings to bind to this picture ID.
 *
 * ---
 * 
 * Picture Settings
 *
 *   Common Event ID:
 *   - The common event settings you wish to tie to this picture.
 * 
 *   Custom
 * 
 *     Opaque Only?
 *     - Ignore clicks on transparent pixels and accept only opaque pixels for
 *       this specific picture.
 * 
 *       Error Margin:
 *       - Error margin when clicking for opaque pixels.
 *       - This value determines the radius.
 * 
 *     Change Tone on Hover?
 *     - Change the tone of the picture on hover?
 * 
 *       Hover Tone:
 *       - Tone settings upon hovering.
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Blend Mode on Hover:
 *     - The blend mode used when this picture is hovered over.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * 
 * Version 1.02: March 17, 2022
 * * Documentation Update!
 * ** Added to "Instructions" section by Arisu:
 * *** Also be warned that the player CANNOT press Picture Common Events
 *     whenever an event is running (with the exception of Parallels). This is
 *     NOT a bug.
 * *** This is because if an event is running under the main event interpreter
 *     and a Picture Common Event were to be pressed, it would interrupt the
 *     flow of the event. This would result in cutscenes to be potentially
 *     bugged, currently running events to also be bugged, etc.
 * *** As such, the ability to click and activate Picture Common Events during
 *     an event (with the exception of Parallels) are disabled to prevent
 *     potential problems with the game dev cycle.
 * 
 * Version 1.01: November 18, 2021
 * * Compatibility Update!
 * ** Should now work properly with VisuStella MZ Picture Choices.
 *    Update made by Olivia.
 *
 * Version 1.00: September 4, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangePictureCommonEvent
 * @text System: Change Picture Common Event
 * @desc Change the Common Event bound to specific picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which Picture ID(s) to change.
 * @default ["1"]
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Change the Common Event bound to specific picture(s).
 * @default 0
 *
 * @arg Custom
 *
 * @arg UseGlobal:eval
 * @text Use Global?
 * @parent Custom
 * @type boolean
 * @on Use Global Settings
 * @off Use Custom Settings
 * @desc If this uses Global Settings, 
 * then ignore the options below.
 * @default true
 *
 * @arg OpaqueOnly:eval
 * @text Opaque Only?
 * @parent Custom
 * @type boolean
 * @on Opaque Only
 * @off Allow Transparency
 * @desc Ignore clicks on transparent pixels and accept only
 * opaque pixels for this specific picture.
 * @default true
 *
 * @arg OpaqueErrorMargin:num
 * @text Error Margin
 * @parent OpaqueOnly:eval
 * @type number
 * @min 0
 * @max 10
 * @desc Error margin when clicking for opaque pixels.
 * This value determines the radius.
 * @default 3
 *
 * @arg ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Custom
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the picture on hover?
 * @default true
 *
 * @arg HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @arg BlendMode:num
 * @text Blend Mode on Hover
 * @parent Custom
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used when this picture is hovered over.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearAllPictureCommonEvents
 * @text System: Clear All Picture Common Events
 * @desc Clears all Common Event bound to specific picture(s).
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearPictureCommonEvent
 * @text System: Clear Picture Common Event
 * @desc Clears any Common Event bound to specific picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which Picture ID(s) to clear.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EraseClearAllPictures
 * @text System: Erase & Clear All Pictures
 * @desc Erases all pictures on the screen and clears their Common Events.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EraseClearPicture
 * @text System: Erase & Clear Picture
 * @desc Erases and clears any Common Events attached to specific picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which Picture ID(s) to erase and clear.
 * @default ["1"]
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
 * @param PictureCommonEvents
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultGlobal:struct
 * @text Default Global Settings
 * @type struct<DefaultGlobal>
 * @desc Default global settings that are used in general.
 * @default {"OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_1_to_10
 * @text #1 through #10
 * @parent Default
 *
 * @param Picture1:struct
 * @text Picture #1
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture2:struct
 * @text Picture #2
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture3:struct
 * @text Picture #3
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture4:struct
 * @text Picture #4
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture5:struct
 * @text Picture #5
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture6:struct
 * @text Picture #6
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture7:struct
 * @text Picture #7
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture8:struct
 * @text Picture #8
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture9:struct
 * @text Picture #9
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture10:struct
 * @text Picture #10
 * @parent Set_1_to_10
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_11_to_20
 * @text #11 through #20
 * @parent Default
 *
 * @param Picture11:struct
 * @text Picture #11
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture12:struct
 * @text Picture #12
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture13:struct
 * @text Picture #13
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture14:struct
 * @text Picture #14
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture15:struct
 * @text Picture #15
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture16:struct
 * @text Picture #16
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture17:struct
 * @text Picture #17
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture18:struct
 * @text Picture #18
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture19:struct
 * @text Picture #19
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture20:struct
 * @text Picture #20
 * @parent Set_11_to_20
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_21_to_30
 * @text #21 through #30
 * @parent Default
 *
 * @param Picture21:struct
 * @text Picture #21
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture22:struct
 * @text Picture #22
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture23:struct
 * @text Picture #23
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture24:struct
 * @text Picture #24
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture25:struct
 * @text Picture #25
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture26:struct
 * @text Picture #26
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture27:struct
 * @text Picture #27
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture28:struct
 * @text Picture #28
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture29:struct
 * @text Picture #29
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture30:struct
 * @text Picture #30
 * @parent Set_21_to_30
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_31_to_40
 * @text #31 through #40
 * @parent Default
 *
 * @param Picture31:struct
 * @text Picture #31
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture32:struct
 * @text Picture #32
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture33:struct
 * @text Picture #33
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture34:struct
 * @text Picture #34
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture35:struct
 * @text Picture #35
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture36:struct
 * @text Picture #36
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture37:struct
 * @text Picture #37
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture38:struct
 * @text Picture #38
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture39:struct
 * @text Picture #39
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture40:struct
 * @text Picture #40
 * @parent Set_31_to_40
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_41_to_50
 * @text #41 through #50
 * @parent Default
 *
 * @param Picture41:struct
 * @text Picture #41
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture42:struct
 * @text Picture #42
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture43:struct
 * @text Picture #43
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture44:struct
 * @text Picture #44
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture45:struct
 * @text Picture #45
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture46:struct
 * @text Picture #46
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture47:struct
 * @text Picture #47
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture48:struct
 * @text Picture #48
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture49:struct
 * @text Picture #49
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture50:struct
 * @text Picture #50
 * @parent Set_41_to_50
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_51_to_60
 * @text #51 through #60
 * @parent Default
 *
 * @param Picture51:struct
 * @text Picture #51
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture52:struct
 * @text Picture #52
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture53:struct
 * @text Picture #53
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture54:struct
 * @text Picture #54
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture55:struct
 * @text Picture #55
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture56:struct
 * @text Picture #56
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture57:struct
 * @text Picture #57
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture58:struct
 * @text Picture #58
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture59:struct
 * @text Picture #59
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture60:struct
 * @text Picture #60
 * @parent Set_51_to_60
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_61_to_70
 * @text #61 through #70
 * @parent Default
 *
 * @param Picture61:struct
 * @text Picture #61
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture62:struct
 * @text Picture #62
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture63:struct
 * @text Picture #63
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture64:struct
 * @text Picture #64
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture65:struct
 * @text Picture #65
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture66:struct
 * @text Picture #66
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture67:struct
 * @text Picture #67
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture68:struct
 * @text Picture #68
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture69:struct
 * @text Picture #69
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture70:struct
 * @text Picture #70
 * @parent Set_61_to_70
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_71_to_80
 * @text #71 through #80
 * @parent Default
 *
 * @param Picture71:struct
 * @text Picture #71
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture72:struct
 * @text Picture #72
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture73:struct
 * @text Picture #73
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture74:struct
 * @text Picture #74
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture75:struct
 * @text Picture #75
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture76:struct
 * @text Picture #76
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture77:struct
 * @text Picture #77
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture78:struct
 * @text Picture #78
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture79:struct
 * @text Picture #79
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture80:struct
 * @text Picture #80
 * @parent Set_71_to_80
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_81_to_90
 * @text #81 through #90
 * @parent Default
 *
 * @param Picture81:struct
 * @text Picture #81
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture82:struct
 * @text Picture #82
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture83:struct
 * @text Picture #83
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture84:struct
 * @text Picture #84
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture85:struct
 * @text Picture #85
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture86:struct
 * @text Picture #86
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture87:struct
 * @text Picture #87
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture88:struct
 * @text Picture #88
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture89:struct
 * @text Picture #89
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture90:struct
 * @text Picture #90
 * @parent Set_81_to_90
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Set_91_to_100
 * @text #91 through #100
 * @parent Default
 *
 * @param Picture91:struct
 * @text Picture #91
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture92:struct
 * @text Picture #92
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture93:struct
 * @text Picture #93
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture94:struct
 * @text Picture #94
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture95:struct
 * @text Picture #95
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture96:struct
 * @text Picture #96
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture97:struct
 * @text Picture #97
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture98:struct
 * @text Picture #98
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc Default Common Event settings to bind to this picture ID.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture99:struct
 * @text Picture #99
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc The common event settings you wish to tie to this picture.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
 *
 * @param Picture100:struct
 * @text Picture #100
 * @parent Set_91_to_100
 * @type struct<Picture>
 * @desc The common event settings you wish to tie to this picture.
 * @default {"CommonEventID:num":"0","Custom":"","UseGlobal:eval":"true","OpaqueOnly:eval":"true","OpaqueErrorMargin:num":"3","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","BlendMode:num":"0"}
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
 * Default Global Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DefaultGlobal:
 *
 * @param OpaqueOnly:eval
 * @text Opaque Only?
 * @parent Global
 * @type boolean
 * @on Opaque Only
 * @off Allow Transparency
 * @desc Ignore clicks on transparent pixels and accept only
 * opaque pixels for the Plugin Parameter bindings.
 * @default true
 *
 * @param OpaqueErrorMargin:num
 * @text Error Margin
 * @parent OpaqueOnly:eval
 * @type number
 * @min 0
 * @max 10
 * @desc Error margin when clicking for opaque pixels.
 * This value determines the radius.
 * @default 3
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Global
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the picture on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param BlendMode:num
 * @text Blend Mode on Hover
 * @parent Global
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used when this picture is hovered over.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Picture:
 *
 * @param CommonEventID:num
 * @text Common Event ID
 * @parent NeededData
 * @type common_event
 * @desc The common event settings you wish to tie to this picture.
 * @default 0
 *
 * @param Custom
 *
 * @param UseGlobal:eval
 * @text Use Global?
 * @parent Custom
 * @type boolean
 * @on Use Global Settings
 * @off Use Custom Settings
 * @desc If this uses Global Settings, 
 * then ignore the options below.
 * @default true
 *
 * @param OpaqueOnly:eval
 * @text Opaque Only?
 * @parent Custom
 * @type boolean
 * @on Opaque Only
 * @off Allow Transparency
 * @desc Ignore clicks on transparent pixels and accept only
 * opaque pixels for this specific picture.
 * @default true
 *
 * @param OpaqueErrorMargin:num
 * @text Error Margin
 * @parent OpaqueOnly:eval
 * @type number
 * @min 0
 * @max 10
 * @desc Error margin when clicking for opaque pixels.
 * This value determines the radius.
 * @default 3
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Custom
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the picture on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param BlendMode:num
 * @text Blend Mode on Hover
 * @parent Custom
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used when this picture is hovered over.
 * @default 0
 *
 */
//=============================================================================

const _0x3442a3=_0x543d;(function(_0x1bf468,_0xef326a){const _0x4546dd=_0x543d,_0x4adcd5=_0x1bf468();while(!![]){try{const _0x3ebdca=-parseInt(_0x4546dd(0x117))/0x1+-parseInt(_0x4546dd(0xde))/0x2*(parseInt(_0x4546dd(0xe5))/0x3)+parseInt(_0x4546dd(0xf5))/0x4*(parseInt(_0x4546dd(0x13b))/0x5)+parseInt(_0x4546dd(0xee))/0x6+parseInt(_0x4546dd(0x130))/0x7*(parseInt(_0x4546dd(0xd4))/0x8)+parseInt(_0x4546dd(0xe4))/0x9*(parseInt(_0x4546dd(0x12b))/0xa)+-parseInt(_0x4546dd(0x13a))/0xb;if(_0x3ebdca===_0xef326a)break;else _0x4adcd5['push'](_0x4adcd5['shift']());}catch(_0x33510a){_0x4adcd5['push'](_0x4adcd5['shift']());}}}(_0xe046,0xb126d));var label=_0x3442a3(0x105),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3442a3(0xfd)](function(_0x687d2){const _0x593b3e=_0x3442a3;return _0x687d2[_0x593b3e(0xd9)]&&_0x687d2[_0x593b3e(0x12c)][_0x593b3e(0x12e)]('['+label+']');})[0x0];VisuMZ[label][_0x3442a3(0x10e)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x3442a3(0xd6)]=function(_0x488ba0,_0x2c18fd){const _0xfb5c1d=_0x3442a3;for(const _0x51edfd in _0x2c18fd){if(_0x51edfd['match'](/(.*):(.*)/i)){const _0x42ed12=String(RegExp['$1']),_0x33881f=String(RegExp['$2'])[_0xfb5c1d(0xe8)]()[_0xfb5c1d(0x124)]();let _0x50faf9,_0x30d6db,_0x25a815;switch(_0x33881f){case _0xfb5c1d(0xdc):_0x50faf9=_0x2c18fd[_0x51edfd]!==''?Number(_0x2c18fd[_0x51edfd]):0x0;break;case _0xfb5c1d(0x10d):_0x30d6db=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):[],_0x50faf9=_0x30d6db['map'](_0x1cd390=>Number(_0x1cd390));break;case'EVAL':_0x50faf9=_0x2c18fd[_0x51edfd]!==''?eval(_0x2c18fd[_0x51edfd]):null;break;case _0xfb5c1d(0x133):_0x30d6db=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):[],_0x50faf9=_0x30d6db[_0xfb5c1d(0xdd)](_0x43e1cb=>eval(_0x43e1cb));break;case _0xfb5c1d(0xf8):_0x50faf9=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):'';break;case _0xfb5c1d(0x114):_0x30d6db=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):[],_0x50faf9=_0x30d6db[_0xfb5c1d(0xdd)](_0x383762=>JSON[_0xfb5c1d(0x10f)](_0x383762));break;case _0xfb5c1d(0xf0):_0x50faf9=_0x2c18fd[_0x51edfd]!==''?new Function(JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd])):new Function(_0xfb5c1d(0x10c));break;case _0xfb5c1d(0xe6):_0x30d6db=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):[],_0x50faf9=_0x30d6db[_0xfb5c1d(0xdd)](_0x12f42e=>new Function(JSON[_0xfb5c1d(0x10f)](_0x12f42e)));break;case'STR':_0x50faf9=_0x2c18fd[_0x51edfd]!==''?String(_0x2c18fd[_0x51edfd]):'';break;case _0xfb5c1d(0xce):_0x30d6db=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):[],_0x50faf9=_0x30d6db[_0xfb5c1d(0xdd)](_0x449416=>String(_0x449416));break;case'STRUCT':_0x25a815=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):{},_0x50faf9=VisuMZ[_0xfb5c1d(0xd6)]({},_0x25a815);break;case _0xfb5c1d(0xed):_0x30d6db=_0x2c18fd[_0x51edfd]!==''?JSON[_0xfb5c1d(0x10f)](_0x2c18fd[_0x51edfd]):[],_0x50faf9=_0x30d6db[_0xfb5c1d(0xdd)](_0x811de1=>VisuMZ[_0xfb5c1d(0xd6)]({},JSON[_0xfb5c1d(0x10f)](_0x811de1)));break;default:continue;}_0x488ba0[_0x42ed12]=_0x50faf9;}}return _0x488ba0;},(_0x15464a=>{const _0x208444=_0x3442a3,_0x7facf8=_0x15464a[_0x208444(0x11e)];for(const _0x13e855 of dependencies){if(!Imported[_0x13e855]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x208444(0x104)](_0x7facf8,_0x13e855)),SceneManager[_0x208444(0x112)]();break;}}const _0x24a55b=_0x15464a[_0x208444(0x12c)];if(_0x24a55b[_0x208444(0xfc)](/\[Version[ ](.*?)\]/i)){const _0x9b9f94=Number(RegExp['$1']);_0x9b9f94!==VisuMZ[label][_0x208444(0x129)]&&(alert(_0x208444(0xf7)[_0x208444(0x104)](_0x7facf8,_0x9b9f94)),SceneManager[_0x208444(0x112)]());}if(_0x24a55b[_0x208444(0xfc)](/\[Tier[ ](\d+)\]/i)){const _0x171553=Number(RegExp['$1']);_0x171553<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x208444(0x104)](_0x7facf8,_0x171553,tier)),SceneManager[_0x208444(0x112)]()):tier=Math[_0x208444(0xd2)](_0x171553,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x208444(0x10e)],_0x15464a[_0x208444(0x10b)]);})(pluginData),PluginManager[_0x3442a3(0xfa)](pluginData['name'],_0x3442a3(0xf2),_0x3f366f=>{const _0x2dfaec=_0x3442a3;VisuMZ[_0x2dfaec(0xd6)](_0x3f366f,_0x3f366f);const _0x1cad6d=_0x3f366f[_0x2dfaec(0xeb)]||[0x1],_0x3db9fa={'CommonEventID':_0x3f366f[_0x2dfaec(0xec)],'UseGlobal':_0x3f366f[_0x2dfaec(0xda)],'OpaqueOnly':_0x3f366f[_0x2dfaec(0xcb)],'OpaqueErrorMargin':_0x3f366f[_0x2dfaec(0xe9)],'ChangeTone':_0x3f366f[_0x2dfaec(0x101)],'HoverTone':_0x3f366f['HoverTone'],'BlendMode':_0x3f366f[_0x2dfaec(0x132)]};if(_0x3db9fa[_0x2dfaec(0xda)]){const _0x19df2c=VisuMZ[_0x2dfaec(0x105)][_0x2dfaec(0x10e)][_0x2dfaec(0xd7)];_0x3db9fa[_0x2dfaec(0xcb)]=_0x19df2c['OpaqueOnly'],_0x3db9fa[_0x2dfaec(0xe9)]=_0x19df2c[_0x2dfaec(0xe9)],_0x3db9fa['ChangeTone']=_0x19df2c[_0x2dfaec(0x101)],_0x3db9fa[_0x2dfaec(0xdb)]=_0x19df2c[_0x2dfaec(0xdb)],_0x3db9fa[_0x2dfaec(0x132)]=_0x19df2c[_0x2dfaec(0x132)];}for(const _0x50ffb2 of _0x1cad6d){$gameSystem[_0x2dfaec(0x10a)](_0x50ffb2,JsonEx[_0x2dfaec(0xe3)](_0x3db9fa));}}),PluginManager['registerCommand'](pluginData[_0x3442a3(0x11e)],'ClearAllPictureCommonEvents',_0x2733e5=>{const _0x3628fd=_0x3442a3;for(let _0x4fad09=0x1;_0x4fad09<=$gameScreen[_0x3628fd(0x125)]();_0x4fad09++){$gameSystem['clearPictureCommonEventSettings'](_0x4fad09);}}),PluginManager['registerCommand'](pluginData[_0x3442a3(0x11e)],'ClearPictureCommonEvent',_0x3dab38=>{const _0x311515=_0x3442a3;VisuMZ['ConvertParams'](_0x3dab38,_0x3dab38);const _0x36517b=_0x3dab38['PictureIDs'];for(const _0x53d6bc of _0x36517b){$gameSystem[_0x311515(0x115)](_0x53d6bc);}}),PluginManager[_0x3442a3(0xfa)](pluginData[_0x3442a3(0x11e)],_0x3442a3(0x127),_0x3d3402=>{const _0x183bfc=_0x3442a3;$gameSystem[_0x183bfc(0xcc)]={};for(let _0x42e1bf=0x1;_0x42e1bf<=$gameScreen[_0x183bfc(0x125)]();_0x42e1bf++){$gameScreen['erasePicture'](_0x42e1bf);}}),PluginManager[_0x3442a3(0xfa)](pluginData[_0x3442a3(0x11e)],_0x3442a3(0x131),_0x23e11d=>{const _0x278547=_0x3442a3;VisuMZ[_0x278547(0xd6)](_0x23e11d,_0x23e11d);const _0x26d987=_0x23e11d[_0x278547(0xeb)];for(const _0x53f313 of _0x26d987){$gameScreen[_0x278547(0x11b)](_0x53f313),$gameSystem[_0x278547(0x115)](_0x53f313);}}),VisuMZ['PictureCommonEvents'][_0x3442a3(0xcd)]=Game_System[_0x3442a3(0x122)][_0x3442a3(0x119)],Game_System[_0x3442a3(0x122)][_0x3442a3(0x119)]=function(){const _0x13d58c=_0x3442a3;VisuMZ[_0x13d58c(0x105)][_0x13d58c(0xcd)][_0x13d58c(0x138)](this),this[_0x13d58c(0x12f)]();},Game_System[_0x3442a3(0x122)][_0x3442a3(0x12f)]=function(){const _0x38657e=_0x3442a3;this[_0x38657e(0xcc)]={};const _0x3234ae=$dataSystem[_0x38657e(0x116)][_0x38657e(0x136)]||0x64;for(let _0x4553e4=0x1;_0x4553e4<=_0x3234ae;_0x4553e4++){this[_0x38657e(0x11a)](_0x4553e4);}},VisuMZ[_0x3442a3(0x105)][_0x3442a3(0x139)]=function(){return{'CommonEventID':0x0,'UseGlobal':!![],'OpaqueOnly':!![],'OpaqueErrorMargin':0x3,'ChangeTone':!![],'HoverTone':[0x80,0x80,0x80,0x0],'BlendMode':0x0};},Game_System[_0x3442a3(0x122)][_0x3442a3(0x11a)]=function(_0x9a20b){const _0x28217e=_0x3442a3,_0x2f294b=VisuMZ['PictureCommonEvents'][_0x28217e(0x10e)],_0x828539=VisuMZ['PictureCommonEvents']['Settings'][_0x28217e(0xd7)],_0x147ca0=_0x28217e(0x11c)[_0x28217e(0x104)](_0x9a20b),_0x482937=_0x2f294b[_0x147ca0]?JsonEx[_0x28217e(0xe3)](_0x2f294b[_0x147ca0]):VisuMZ[_0x28217e(0x105)][_0x28217e(0x139)]();this[_0x28217e(0xcc)][_0x9a20b]=_0x482937;if(!_0x482937[_0x28217e(0xda)])return;_0x482937[_0x28217e(0xcb)]=_0x828539[_0x28217e(0xcb)],_0x482937[_0x28217e(0xe9)]=_0x828539[_0x28217e(0xe9)],_0x482937['ChangeTone']=_0x828539[_0x28217e(0x101)],_0x482937[_0x28217e(0xdb)]=_0x828539[_0x28217e(0xdb)],_0x482937[_0x28217e(0x132)]=_0x828539['BlendMode'];},Game_System[_0x3442a3(0x122)]['pictureCommonEventData']=function(_0x2b7402){const _0x138d76=_0x3442a3;return this[_0x138d76(0xcc)]===undefined&&this[_0x138d76(0x12f)](),this[_0x138d76(0xcc)][_0x2b7402]===undefined&&this[_0x138d76(0x11a)](_0x2b7402),this[_0x138d76(0xcc)][_0x2b7402];},Game_System[_0x3442a3(0x122)][_0x3442a3(0xd5)]=function(_0x411bc0){const _0x51e998=_0x3442a3;if(this[_0x51e998(0xcc)]===undefined)this['initPictureCommonEvents']();return this[_0x51e998(0x126)](_0x411bc0)[_0x51e998(0xec)];},Game_System[_0x3442a3(0x122)][_0x3442a3(0x115)]=function(_0xf37c72){const _0x41e6eb=_0x3442a3;this[_0x41e6eb(0xcc)][_0xf37c72]=VisuMZ['PictureCommonEvents'][_0x41e6eb(0x139)]();},Game_System[_0x3442a3(0x122)][_0x3442a3(0x10a)]=function(_0x572fad,_0x108825){const _0x12933c=_0x3442a3;if(this[_0x12933c(0xcc)]===undefined)this[_0x12933c(0x12f)]();this[_0x12933c(0xcc)][_0x572fad]=_0x108825;},Game_System[_0x3442a3(0x122)][_0x3442a3(0x123)]=function(_0x16b42a){const _0x24057e=_0x3442a3;if(this[_0x24057e(0xcc)]===undefined)this[_0x24057e(0x12f)]();return this['pictureCommonEventData'](_0x16b42a)['OpaqueOnly'];},Game_System[_0x3442a3(0x122)][_0x3442a3(0x102)]=function(_0x59ceaa){const _0x1a4afc=_0x3442a3;if(this[_0x1a4afc(0xcc)]===undefined)this['initPictureCommonEvents']();return this[_0x1a4afc(0x126)](_0x59ceaa)['OpaqueErrorMargin'];},Game_System[_0x3442a3(0x122)][_0x3442a3(0xff)]=function(_0x203808){const _0x3a2b96=_0x3442a3;if(this['_pictureCommonEvents']===undefined)this[_0x3a2b96(0x12f)]();return this[_0x3a2b96(0x126)](_0x203808)['ChangeTone'];},Game_System[_0x3442a3(0x122)][_0x3442a3(0xd0)]=function(_0x55a86e){const _0x2bff81=_0x3442a3;if(this[_0x2bff81(0xcc)]===undefined)this['initPictureCommonEvents']();return this[_0x2bff81(0x126)](_0x55a86e)[_0x2bff81(0xdb)];},Game_System[_0x3442a3(0x122)][_0x3442a3(0x12a)]=function(_0x3a8462){const _0x117634=_0x3442a3;if(this[_0x117634(0xcc)]===undefined)this[_0x117634(0x12f)]();return this[_0x117634(0x126)](_0x3a8462)[_0x117634(0x132)];},VisuMZ[_0x3442a3(0x105)][_0x3442a3(0xd8)]=Scene_Map[_0x3442a3(0x122)][_0x3442a3(0x11d)],Scene_Map[_0x3442a3(0x122)][_0x3442a3(0x11d)]=function(){const _0x18b686=_0x3442a3;return VisuMZ[_0x18b686(0x105)][_0x18b686(0xd8)][_0x18b686(0x138)](this)||this[_0x18b686(0x128)][_0x18b686(0x135)]();},Sprite_Picture[_0x3442a3(0x122)]['isClickEnabled']=function(){const _0x491f2b=_0x3442a3;if(Imported['VisuMZ_2_PictureChoices']&&this[_0x491f2b(0xfb)]())return!![];if($gameMessage[_0x491f2b(0x108)]())return![];if($gameParty[_0x491f2b(0x109)]())return![];if(!this[_0x491f2b(0x12d)])return![];if(this[_0x491f2b(0x121)]<=0x0)return![];const _0x18024d=SceneManager[_0x491f2b(0x137)];if(_0x18024d&&_0x18024d['constructor']===Scene_Map){if(!_0x18024d[_0x491f2b(0x111)]())return![];}return this[_0x491f2b(0x103)]()&&$gameSystem[_0x491f2b(0xd5)](this[_0x491f2b(0x106)])>0x0;},Sprite_Picture[_0x3442a3(0x122)][_0x3442a3(0xfb)]=function(){const _0x214b90=_0x3442a3;return this[_0x214b90(0xd1)]();},Sprite_Picture[_0x3442a3(0x122)]['checkCommonEventOpaqueOnly']=function(){const _0x247d69=_0x3442a3;if(!$gameSystem[_0x247d69(0x123)](this[_0x247d69(0x106)]))return!![];const _0xe95226=new Point(TouchInput['x'],TouchInput['y']),_0x25ab4a=this[_0x247d69(0x110)][_0x247d69(0xf1)](_0xe95226);let _0x20970b=Math['round'](_0x25ab4a['x']+this[_0x247d69(0x11f)]['x']+this['anchor']['x']*this['bitmap'][_0x247d69(0xe7)]),_0x281868=Math['round'](_0x25ab4a['y']+this[_0x247d69(0x11f)]['y']+this['anchor']['y']*this[_0x247d69(0x120)]['height']);return this['checkCommonEventOpaqueErrorMargin'](_0x20970b,_0x281868);},Sprite_Picture[_0x3442a3(0x122)][_0x3442a3(0xfe)]=function(_0x1e57ec,_0x3c4076){const _0x14d9c0=_0x3442a3,_0xea3504=$gameSystem[_0x14d9c0(0x102)](this[_0x14d9c0(0x106)]),_0x1e2098=new Rectangle(0x0,0x0,this['bitmap'][_0x14d9c0(0xe7)],this['bitmap'][_0x14d9c0(0xf3)]);for(let _0x10b490=-_0xea3504;_0x10b490<=_0xea3504;_0x10b490++){for(let _0x3e6ebc=-_0xea3504;_0x3e6ebc<=_0xea3504;_0x3e6ebc++){const _0x54cad8=_0x1e57ec+_0x10b490,_0x46c006=_0x3c4076+_0x3e6ebc;if(!_0x1e2098[_0x14d9c0(0xd3)](_0x54cad8,_0x46c006))continue;const _0x4a07ae=this['bitmap'][_0x14d9c0(0xe2)](_0x54cad8,_0x46c006);if(_0x4a07ae>0x0)return!![];}}return![];},Sprite_Picture[_0x3442a3(0x122)][_0x3442a3(0x113)]=function(){const _0x272b53=_0x3442a3,_0x21e04c=Sprite_Clickable[_0x272b53(0x122)][_0x272b53(0x113)][_0x272b53(0x138)](this);return _0x21e04c&&this['checkCommonEventOpaqueOnly']();},Sprite_Picture[_0x3442a3(0x122)]['onMouseEnter']=function(){const _0x1e361e=_0x3442a3;Sprite_Clickable[_0x1e361e(0x122)][_0x1e361e(0x107)]['call'](this);if(!this[_0x1e361e(0xf4)]())return;this['_pictureCommonEventMouseOver']=!![];},Sprite_Picture[_0x3442a3(0x122)][_0x3442a3(0xe1)]=function(){const _0x1a57d7=_0x3442a3;Sprite_Clickable[_0x1a57d7(0x122)][_0x1a57d7(0xe1)]['call'](this);if(!this[_0x1a57d7(0xf4)]())return;this[_0x1a57d7(0xdf)]=![];},Sprite_Picture[_0x3442a3(0x122)]['onClick']=function(){const _0x2011c8=_0x3442a3;Sprite_Clickable['prototype']['onClick'][_0x2011c8(0x138)](this),this['callCommonEvent']();},Sprite_Picture[_0x3442a3(0x122)][_0x3442a3(0x118)]=function(){const _0x3f7a77=_0x3442a3;if(!this[_0x3f7a77(0xf4)]())return;if(!this[_0x3f7a77(0xea)]())return;const _0x4d33c1=$gameSystem['pictureCommonEvent'](this[_0x3f7a77(0x106)]);$gameTemp[_0x3f7a77(0xe0)](_0x4d33c1),this[_0x3f7a77(0xe1)]();},Sprite_Picture['prototype']['hasCommonEvent']=function(){const _0x1eb629=_0x3442a3,_0x48004e=$gameSystem[_0x1eb629(0xd5)](this[_0x1eb629(0x106)]);return _0x48004e>0x0;},VisuMZ[_0x3442a3(0x105)]['Sprite_Picture_updateOther']=Sprite_Picture['prototype']['updateOther'],Sprite_Picture[_0x3442a3(0x122)]['updateOther']=function(){const _0x3756ee=_0x3442a3;VisuMZ[_0x3756ee(0x105)][_0x3756ee(0xf9)][_0x3756ee(0x138)](this),this[_0x3756ee(0xf6)]();},Sprite_Picture[_0x3442a3(0x122)]['updatePictureCommonEventMouseOver']=function(){const _0x727a35=_0x3442a3;if(!this[_0x727a35(0xdf)])return;this['blendMode']=$gameSystem[_0x727a35(0x12a)](this['_pictureId'])||0x0,$gameSystem['doesPictureCommonEventChangeTone'](this[_0x727a35(0x106)])&&this[_0x727a35(0xcf)]($gameSystem[_0x727a35(0xd0)](this[_0x727a35(0x106)])||[0x0,0x0,0x0,0x0]);},Sprite_Picture[_0x3442a3(0x122)]['isPictureCommonEventPressed']=function(){const _0x12869f=_0x3442a3;if(!this[_0x12869f(0x103)]())return![];if(!this['isPressed']())return![];if($gameSystem[_0x12869f(0xd5)](this['_pictureId'])<=0x0)return![];if(!this[_0x12869f(0xea)]())return![];return!![];},Spriteset_Base['prototype'][_0x3442a3(0x135)]=function(){const _0x58ed9a=_0x3442a3;return this['_pictureContainer'][_0x58ed9a(0x100)][_0x58ed9a(0x134)](_0xd85c97=>_0xd85c97[_0x58ed9a(0xef)]());};function _0x543d(_0x324ea0,_0x258cf3){const _0xe046ff=_0xe046();return _0x543d=function(_0x543dbc,_0x308a33){_0x543dbc=_0x543dbc-0xcb;let _0x1e923b=_0xe046ff[_0x543dbc];return _0x1e923b;},_0x543d(_0x324ea0,_0x258cf3);}function _0xe046(){const _0x23e55c=['prototype','isPictureCommonEventOpaqueOnly','trim','maxPictures','pictureCommonEventData','EraseClearAllPictures','_spriteset','version','getPictureCommonEventBlendMode','10lWkQuy','description','visible','includes','initPictureCommonEvents','9679047LkHLhl','EraseClearPicture','BlendMode','ARRAYEVAL','some','isAnyPictureCommonEventPressed','picturesUpperLimit','_scene','call','TemplateSettings','8021706khCiCq','4650TzRQNZ','OpaqueOnly','_pictureCommonEvents','Game_System_initialize','ARRAYSTR','setColorTone','getPictureCommonEventHoverTone','hasPictureChoiceBinding','max','contains','8MXugYi','pictureCommonEvent','ConvertParams','DefaultGlobal','Scene_Map_isAnyButtonPressed','status','UseGlobal','HoverTone','NUM','map','150kvdoUS','_pictureCommonEventMouseOver','reserveCommonEvent','onMouseExit','getAlphaPixel','makeDeepCopy','5637393DylByZ','57459RodWzq','ARRAYFUNC','width','toUpperCase','OpaqueErrorMargin','checkCommonEventOpaqueOnly','PictureIDs','CommonEventID','ARRAYSTRUCT','3185628ElXqFw','isPictureCommonEventPressed','FUNC','applyInverse','ChangePictureCommonEvent','height','hasCommonEvent','3840pXGpHj','updatePictureCommonEventMouseOver','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','JSON','Sprite_Picture_updateOther','registerCommand','hasPictureChoiceEvent','match','filter','checkCommonEventOpaqueErrorMargin','doesPictureCommonEventChangeTone','children','ChangeTone','getPictureCommonEventErrorMargin','picture','format','PictureCommonEvents','_pictureId','onMouseEnter','isBusy','inBattle','setPictureCommonEventSettings','parameters','return\x200','ARRAYNUM','Settings','parse','worldTransform','isMapTouchOk','exit','isBeingTouched','ARRAYJSON','clearPictureCommonEventSettings','advanced','541502YfMhuM','callCommonEvent','initialize','createPictureCommonEventData','erasePicture','Picture%1','isAnyButtonPressed','name','_frame','bitmap','opacity'];_0xe046=function(){return _0x23e55c;};return _0xe046();}