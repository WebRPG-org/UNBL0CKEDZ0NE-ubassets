//=============================================================================
// VisuStella MZ - Picture Choices
// VisuMZ_2_PictureChoices.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PictureChoices = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PictureChoices = VisuMZ.PictureChoices || {};
VisuMZ.PictureChoices.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [PictureChoices]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Picture_Choices_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to create custom menus using pictures and have them work akin to
 * how "Show Choices" event commands behave? This plugin makes that possible by
 * letting you, the game dev, determine how pictures will behave when selected,
 * deselected, and tie them to the various choices in the "Show Choices" window
 * events. Create vivid menu systems with better visuals!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Use Plugin Commands to determine how specific pictures (by ID or range)
 *   will behave when selected or deselected.
 * * Behaviors include easing options, position adjustments, opacity changes,
 *   blend mode differences, and tinting.
 * * Determine which pictures are bound to which choice through this plugin's
 *   newly added text codes.
 * * Hide the choice window through text codes to make the look more authentic.
 * * Works with touch controls! Hovering over pictures will select the picture
 *   and choice option!
 * * Works with keyboard controls! Even if the choice window is hidden, the
 *   keyboard will still let you scroll through the various pictures as if they
 *   were the ones arranged by the show choice options!
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
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
 * Mouse Over
 * 
 * - When the mouse is hovering a picture bound to a "Show Choices" option,
 * the Choice Window will automatically select that option in the Choice Window
 * regardless of whether or not hovering is disabled for windows. This decision
 * has been made for a more intuitive user experience.
 * 
 * Pictures without any bindings will not have any effect.
 *
 * ---
 * 
 * Mouse Click
 * 
 * - When the mouse clicks on a picture bound to a "Show Choices" option, the
 * Choice Window will select that option and then prompt an "OK" handler to
 * trigger the action as long as that option is enabled. This action will occur
 * even if click select is the default selection process for windows for a more
 * intuitive user experience.
 * 
 * Pictures without any bindings will not have any effect.
 * 
 * ---
 *
 * ============================================================================
 * Usage Instructions
 * ============================================================================
 *
 * For a quick run through on how to use this plugin properly, follow the
 * instructions listed below, separated into various steps.
 *
 * ---
 *
 * Step 1:
 *
 * - Put out "Show Picture" events where you want them. 
 * - Create their initial positions, their ID's, their images used, and their
 *   origins decided.
 *
 * ---
 * 
 * Step 2:
 * 
 * - Use Plugin Commands for "Picture Settings: Change ID(s)" or the
 *   "Picture Settings: Change Range".
 * - Change the On Select and On Deselect Settings to reflect what you want.
 * - This is used to change how images look when selected or deselected either
 *   by mouse cursor or by keyboard.
 * 
 * *NOTE* Steps 1 and 2 are interchangeable but works best with "Show Picture"
 * before the Plugin Commands.
 * 
 * ---
 * 
 * Step 3:
 * 
 * - Use "Show Choices" event command.
 * - For each Show Choice event command, use the following notetag:
 * 
 *   <Bind Picture: id> where 'id' is the picture ID to bind that choice to.
 * 
 * - ie: <Bind Picture: 3> will have that choice be tied to picture ID 3.
 * 
 * ---
 * 
 * Step 4 (Optional):
 * 
 * - Insert <Hide Choice Window> text code somewhere in the choice list
 *   (doesn't matter where) to hide the choice list window.
 * - This step is optional.
 * 
 * ---
 * 
 * Step 5:
 * 
 * - At the very end, use the Plugin Commands "Clear: All Selection Settings"
 *   or "Clear: Picture ID(s) Selection Settings" or "Clear: Picture Range
 *   Selection Settings" to remove their on select or on deselect changes.
 * - Erase picture will do the same to them.
 * - This is to clear the binding settings so that they do not affect other
 *   "Show Choices" event commands.
 * - This step is optional IF you have the Plugin Parameter "Auto Clear" set
 *   to "true". "Auto Clear" will trigger whenever the OK Handler or Cancel
 *   Handler is processed.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Picture Choice-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Show Choice Text Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Bind Picture: id>     Replace 'id' with a Picture ID to bind the choice to.
 *                        If the choice is selected or deselected, the bound
 *                        picture will alter its look accordingly.
 * 
 * <Hide Choice Window>   Hides the Choice Window from view. This is so that if
 *                        any Picture Choices are visible, the screen won't
 *                        look extremely repetitive. Insert this into any of
 *                        the choices. Only once is needed.
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
 * === Clear Plugin Commands ===
 * 
 * ---
 *
 * Clear: All Selection Settings
 * - Clears all selection settings for all pictures 1 through 100.
 *
 * ---
 *
 * Clear: Picture ID(s) Selection Settings
 * - Clears all selection settings for the ID'd pictures.
 *
 *   Picture ID(s):
 *   - Select which Picture ID(s) to clear.
 *
 * ---
 *
 * Clear: Picture Range Selection Settings
 * - Clears all selection settings for the picture ID's in range.
 *
 *   Starting ID:
 *   - The starting ID of the picture binds to clear.
 *
 *   Ending ID:
 *   - The ending ID of the picture binds to clear.
 *
 * ---
 * 
 * === Picture Settings Plugin Commands ===
 * 
 * ---
 *
 * Picture Settings: Change ID(s)
 * - Changes select and deselect settings for the picture ID(s).
 * 
 *   Step 1:
 *
 *     Picture ID(s):
 *     - Select which Picture ID(s) to change settings for.
 * 
 *   Step 2:
 *
 *     On Select Settings:
 *     - Picture settings when selecting that choice.
 *
 *     On Deselect Settings:
 *     - Picture settings when deselecting that choice.
 *
 * ---
 *
 * Picture Settings: Change ID(s)
 * - Changes select and deselect settings for the picture ID(s).
 * 
 *   Step 1:
 *
 *     Starting ID:
 *     - The starting ID of the picture binds to clear.
 *
 *     Ending ID:
 *     - The ending ID of the picture binds to clear.
 * 
 *   Step 2:
 *
 *     On Select Settings:
 *     - Picture settings when selecting that choice.
 *
 *     On Deselect Settings:
 *     - Picture settings when deselecting that choice.
 *
 * ---
 *
 * Picture Settings
 * - These are the settings used for "On Select" and "On Deselect" settings.
 * 
 *   Easing:
 *
 *     Duration:
 *     - Insert a number to determine duration of the changed settings when
 *       applied.
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply.
 *     - Many of these choices require VisuMZ_0_CoreEngine.
 * 
 *   Position:
 *
 *     Target X:
 *     Target Y:
 *     - Insert a number to determine new X/Y position.
 *     - Use 'Unchanged' to not change the X/Y position.
 *
 *     Target Width %:
 *     Target Height %:
 *     - Insert a number to determine new width/height.
 *     - 'Unchanged' for no changes.
 *     - For 100%, use 100.
 * 
 *   Blend:
 *
 *     Target Opacity:
 *     - Insert a number to determine new opacity level.
 *     - 'Unchanged' for no changes.
 *     - Use a number between 0 and 255.
 *
 *     Blend Mode:
 *     - What kind of blend mode do you wish to apply to the picture?
 * 
 *   Tone:
 *
 *     Target Tone Red:
 *     Target Tone Green:
 *     Target Tone Blue:
 *     - Insert a number to determine new red/green/blue tone tint.
 *     - 'Unchanged' for no changes.
 *     - Use a number between -255 and 255.
 *
 *     Target Tone Gray:
 *     - Insert a number to determine new red/green/blue tone tint.
 *     - 'Unchanged' for no changes.
 *     - Use a number between 0 and 255.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The majority of the settings are unique to the Plugin Commands and not the
 * Plugin Parameters. However, the Plugin Parameters can be used as a quality
 * of life to reduce the amount of work needed if one wants to enable the
 * "Auto Clear" option to reduce steps needed.
 *
 * ---
 *
 * General
 * 
 *   Auto Clear:
 *   - Automatically clear picture selection settings after each Show Choice
 *     command is done?
 *   - Erase picture will do the same to them.
 *   - This is to clear the binding settings so that they do not affect other
 *     "Show Choices" event commands.
 * 
 *   Same Check:
 *   - Checks to see if On Select and On Deselect settings are the same and
 *     pops up an error message.
 *   - This is to prevent users from believing the plugin is unresponsive when
 *     their own settings would have instructions for no change otherwise.
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * 
 * Version 1.01: January 16, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Commands "Picture Settings: Change ID(s)" and "Change Range" are
 *    updated to display an error message if On Select and On Deselect settings
 *    are the same.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Parameters > Same Check
 * **** Checks to see if On Select and On Deselect settings are the same and
 *      pops up an error message.
 * **** This is to prevent the impression that the plugin is unresponsive when
 *      the plugin command settings would have instructions for no change
 *      otherwise.
 * 
 * Version 1.00 Official Release Date: July 5, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command ClearAll
 * @text Clear: All Selection Settings
 * @desc Clears all selection settings for all pictures 1 through 100.
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command ClearPictureID
 * @text Clear: Picture ID(s) Selection Settings
 * @desc Clears all selection settings for the ID'd pictures.
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
 * @command ClearPictureRange
 * @text Clear: Picture Range Selection Settings
 * @desc Clears all selection settings for the picture ID's in range.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @desc The starting ID of the picture binds to clear.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @desc The ending ID of the picture binds to clear.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command ChangePictureChoiceSettingsOne
 * @text Picture Settings: Change ID(s)
 * @desc Changes select and deselect settings for the picture ID(s).
 * 
 * @arg Step1
 * @text Step 1
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @parent Step1
 * @type number[]
 * @min 1
 * @desc Select which Picture ID(s) to change settings for.
 * @default ["1"]
 * 
 * @arg Step2
 * @text Step 2
 *
 * @arg OnSelectSettings:struct
 * @text On Select Settings
 * @parent Step2
 * @type struct<Picture>
 * @desc Picture settings when selecting that choice.
 * @default {"Easing":"","Duration:num":"10","easingType:str":"Linear","Position":"","TargetX:str":"Unchanged","TargetY:str":"Unchanged","TargetScaleX:str":"Unchanged","TargetScaleY:str":"Unchanged","Blend":"","TargetOpacity:str":"Unchanged","BlendMode:num":"-1","Tone":"","TargetToneRed:str":"Unchanged","TargetToneGreen:str":"Unchanged","TargetToneBlue:str":"Unchanged","TargetToneGray:str":"Unchanged"}
 *
 * @arg OnDeselectSettings:struct
 * @text On Deselect Settings
 * @parent Step2
 * @type struct<Picture>
 * @desc Picture settings when deselecting that choice.
 * @default {"Easing":"","Duration:num":"10","easingType:str":"Linear","Position":"","TargetX:str":"Unchanged","TargetY:str":"Unchanged","TargetScaleX:str":"Unchanged","TargetScaleY:str":"Unchanged","Blend":"","TargetOpacity:str":"Unchanged","BlendMode:num":"-1","Tone":"","TargetToneRed:str":"Unchanged","TargetToneGreen:str":"Unchanged","TargetToneBlue:str":"Unchanged","TargetToneGray:str":"Unchanged"}
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command ChangePictureChoiceSettingsRange
 * @text Picture Settings: Change Range
 * @desc Changes select and deselect settings for the picture ID's in range.
 * 
 * @arg Step1
 * @text Step 1
 *
 * @arg StartID:num
 * @text Starting ID
 * @parent Step1
 * @type number
 * @min 1
 * @desc The starting ID of the pictures to change settings for.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @parent Step1
 * @type number
 * @min 1
 * @desc The ending ID of the pictures to change settings for.
 * @default 100
 * 
 * @arg Step2
 * @text Step 2
 *
 * @arg OnSelectSettings:struct
 * @text On Select Settings
 * @parent Step2
 * @type struct<Picture>
 * @desc Picture settings when selecting that choice.
 * @default {"Easing":"","Duration:num":"10","easingType:str":"Linear","Position":"","TargetX:str":"Unchanged","TargetY:str":"Unchanged","TargetScaleX:str":"Unchanged","TargetScaleY:str":"Unchanged","Blend":"","TargetOpacity:str":"Unchanged","BlendMode:num":"-1","Tone":"","TargetToneRed:str":"Unchanged","TargetToneGreen:str":"Unchanged","TargetToneBlue:str":"Unchanged","TargetToneGray:str":"Unchanged"}
 *
 * @arg OnDeselectSettings:struct
 * @text On Deselect Settings
 * @parent Step2
 * @type struct<Picture>
 * @desc Picture settings when deselecting that choice.
 * @default {"Easing":"","Duration:num":"10","easingType:str":"Linear","Position":"","TargetX:str":"Unchanged","TargetY:str":"Unchanged","TargetScaleX:str":"Unchanged","TargetScaleY:str":"Unchanged","Blend":"","TargetOpacity:str":"Unchanged","BlendMode:num":"-1","Tone":"","TargetToneRed:str":"Unchanged","TargetToneGreen:str":"Unchanged","TargetToneBlue:str":"Unchanged","TargetToneGray:str":"Unchanged"}
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
 * @param PictureChoices
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param AutoClear:eval
 * @text Auto Clear
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically clear picture selection settings after
 * each Show Choice command is done?
 * @default true
 *
 * @param SameCheck:eval
 * @text Same Check
 * @type boolean
 * @on Check
 * @off Don't Check
 * @desc Checks to see if On Select and On Deselect settings are
 * the same and pops up an error message.
 * @default true
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
 * Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Picture:
 *
 * @param Easing
 *
 * @param Duration:num
 * @text Duration
 * @parent Easing
 * @desc Insert a number to determine duration of the
 * changed settings when applied.
 * @default 10
 *
 * @param easingType:str
 * @text Easing Type
 * @parent Easing
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
 * Many of these choices require VisuMZ_0_CoreEngine.
 * @default Linear
 *
 * @param Position
 *
 * @param TargetX:str
 * @text Target X
 * @parent Position
 * @desc Insert a number to determine new X position.
 * Use 'Unchanged' to not change the X position.
 * @default Unchanged
 *
 * @param TargetY:str
 * @text Target Y
 * @parent Position
 * @desc Insert a number to determine new Y position.
 * Use 'Unchanged' to not change the Y position.
 * @default Unchanged
 *
 * @param TargetScaleX:str
 * @text Target Width %
 * @parent Position
 * @desc Insert a number to determine new width.
 * 'Unchanged' for no changes. For 100%, use 100.
 * @default Unchanged
 *
 * @param TargetScaleY:str
 * @text Target Height %
 * @parent Position
 * @desc Insert a number to determine new height.
 * 'Unchanged' for no changes. For 100%, use 100.
 * @default Unchanged
 * 
 * @param Blend
 *
 * @param TargetOpacity:str
 * @text Target Opacity
 * @parent Blend
 * @desc Insert a number to determine new opacity level.
 * 'Unchanged' for no changes. Use a number between 0 and 255.
 * @default Unchanged
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option -1 - Unchanged
 * @value -1
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default -1
 * 
 * @param Tone
 * @text Tone/Tint
 *
 * @param TargetToneRed:str
 * @text Target Tone Red
 * @parent Tone
 * @desc Insert a number to determine new red tone tint.
 * 'Unchanged' for no changes. Use a number between -255 and 255.
 * @default Unchanged
 *
 * @param TargetToneGreen:str
 * @text Target Tone Green
 * @parent Tone
 * @desc Insert a number to determine new green tone tint.
 * 'Unchanged' for no changes. Use a number between -255 and 255.
 * @default Unchanged
 *
 * @param TargetToneBlue:str
 * @text Target Tone Blue
 * @parent Tone
 * @desc Insert a number to determine new blue tone tint.
 * 'Unchanged' for no changes. Use a number between -255 and 255.
 * @default Unchanged
 *
 * @param TargetToneGray:str
 * @text Target Tone Gray
 * @parent Tone
 * @desc Insert a number to determine new gray tone tint.
 * 'Unchanged' for no changes. Use a number between 0 and 255.
 * @default Unchanged
 *
 */
//=============================================================================

const _0x597cec=_0x437d;function _0x2ad5(){const _0x4ab099=['description','ConvertParams','62wlKVHd','easingType','onMouseEnter','getPictureChoiceBinding','VisuMZ_0_CoreEngine','filter','_choiceListWindow','Linear','4zgbMeG','Sprite_Clickable_onMouseEnter','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','onSelectPictureChoices','_tone','_targetScaleY','applyPictureChoiceBindings','replace','TargetToneRed','Window_ChoiceList_selectDefault','_pictureChoiceDeselected','name','Window_ChoiceList_callCancelHandler','onMouseEnterPictureChoice','Window_ChoiceList','2760822DdRuNb','24CbNYko','maxPictures','constructor','selectDefault','AutoClear','setEasingType','registerCommand','FUNC','_pictureChoiceBinding','ARRAYNUM','toUpperCase','trim','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','NUM','map','getPictureChoiceDeselectedSettings','pictureChoiceSelect','OnDeselectSettings','ARRAYEVAL','Sprite_Picture','match','makeCommandList','Unchanged','336nnzxMn','JSON','_pictureChoiceSelected','exit','SameCheck','autoClearPictureChoices','onClick','scale','callOkHandler','active','2877622qrdWuj','max','_duration','Window_ChoiceList_makeCommandList','Picture\x20Choices\x20Plugin\x20Command\x20is\x20using\x20the\x20same\x20settings\x0a','applyPictureChoiceDeselectSettings','version','Game_Screen_erasePicture','applyPictureChoiceSettings','clearPictureChoiceID','choices','Game_Screen_showPicture','_targetOpacity','STRUCT','_instantPictureChoiceSelect','setPictureChoiceSelectedSettings','Game_Screen_initialize','TargetOpacity','indexOf','1093393IxracL','prototype','_blendMode','min','format','linear','applyPictureChoiceSelectSettings','Window_ChoiceList_callOkHandler','14197irXklj','parse','toLowerCase','ARRAYSTRUCT','onClickPictureChoice','BlendMode','inoutsine','Sprite_Clickable_onClick','select','clamp','callCancelHandler','_list','includes','clone','Settings','1473405cytoFZ','TargetToneBlue','ARRAYFUNC','applyHideChoiceWindow','setPictureChoiceDeselectedSettings','erasePicture','You\x20will\x20not\x20get\x20any\x20varying\x20results\x20this\x20way.\x0a\x0a','unchanged','TargetScaleY','ChangePictureChoiceSettingsRange','_toneTarget','PictureChoices','STR','_targetScaleX','TargetToneGray','10hmLtSS','501488oVjoTx','index','7386777KedZZq','getPictureChoiceSelectedSettings','StartID','insine','_pictureId','Window_Selectable_select','ClearAll','picture','EndingID','TargetX','TargetScaleX','OnSelectSettings','CheckSameChoices','_wholeDuration','clearPictureChoices','makeDeepCopy','Duration','ARRAYSTR','EVAL','10xdUmpZ','TargetToneGreen','ClearPictureRange','outsine','return\x200','one\x20another.\x0a\x0aThank\x20you.','hasPictureChoiceBinding','initialize','update','call','Please\x20change\x20the\x20settings\x20so\x20that\x20they\x20are\x20different\x20from\x0a','showPicture','TargetY','_toneDuration','isPlaytest'];_0x2ad5=function(){return _0x4ab099;};return _0x2ad5();}(function(_0x5c2e56,_0x2f2816){const _0x4110f8=_0x437d,_0x3f7a67=_0x5c2e56();while(!![]){try{const _0x5dd761=-parseInt(_0x4110f8(0x1d0))/0x1*(parseInt(_0x4110f8(0x17c))/0x2)+parseInt(_0x4110f8(0x1df))/0x3*(parseInt(_0x4110f8(0x184))/0x4)+parseInt(_0x4110f8(0x1ee))/0x5*(parseInt(_0x4110f8(0x193))/0x6)+-parseInt(_0x4110f8(0x1c8))/0x7*(parseInt(_0x4110f8(0x194))/0x8)+-parseInt(_0x4110f8(0x1f1))/0x9*(parseInt(_0x4110f8(0x204))/0xa)+-parseInt(_0x4110f8(0x1b5))/0xb+parseInt(_0x4110f8(0x1ab))/0xc*(parseInt(_0x4110f8(0x1ef))/0xd);if(_0x5dd761===_0x2f2816)break;else _0x3f7a67['push'](_0x3f7a67['shift']());}catch(_0x422b38){_0x3f7a67['push'](_0x3f7a67['shift']());}}}(_0x2ad5,0x7a2fe));var label=_0x597cec(0x1ea),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x597cec(0x181)](function(_0x48ab2d){const _0xcf8a44=_0x597cec;return _0x48ab2d['status']&&_0x48ab2d['description'][_0xcf8a44(0x1dc)]('['+label+']');})[0x0];function _0x437d(_0x1cb5fa,_0xe36aeb){const _0x2ad59e=_0x2ad5();return _0x437d=function(_0x437d7c,_0x45ea6b){_0x437d7c=_0x437d7c-0x16d;let _0x186764=_0x2ad59e[_0x437d7c];return _0x186764;},_0x437d(_0x1cb5fa,_0xe36aeb);}VisuMZ[label][_0x597cec(0x1de)]=VisuMZ[label][_0x597cec(0x1de)]||{},VisuMZ[_0x597cec(0x17b)]=function(_0x2b1a84,_0x215b5b){const _0x24a76c=_0x597cec;for(const _0x305691 in _0x215b5b){if(_0x305691[_0x24a76c(0x1a8)](/(.*):(.*)/i)){const _0x575d51=String(RegExp['$1']),_0x3b13ff=String(RegExp['$2'])[_0x24a76c(0x19e)]()[_0x24a76c(0x19f)]();let _0x51cdc0,_0x4a3cbe,_0x37d155;switch(_0x3b13ff){case _0x24a76c(0x1a1):_0x51cdc0=_0x215b5b[_0x305691]!==''?Number(_0x215b5b[_0x305691]):0x0;break;case _0x24a76c(0x19d):_0x4a3cbe=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):[],_0x51cdc0=_0x4a3cbe[_0x24a76c(0x1a2)](_0x55d14b=>Number(_0x55d14b));break;case _0x24a76c(0x203):_0x51cdc0=_0x215b5b[_0x305691]!==''?eval(_0x215b5b[_0x305691]):null;break;case _0x24a76c(0x1a6):_0x4a3cbe=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):[],_0x51cdc0=_0x4a3cbe[_0x24a76c(0x1a2)](_0xda1f36=>eval(_0xda1f36));break;case _0x24a76c(0x1ac):_0x51cdc0=_0x215b5b[_0x305691]!==''?JSON['parse'](_0x215b5b[_0x305691]):'';break;case'ARRAYJSON':_0x4a3cbe=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):[],_0x51cdc0=_0x4a3cbe[_0x24a76c(0x1a2)](_0x2443fe=>JSON[_0x24a76c(0x1d1)](_0x2443fe));break;case _0x24a76c(0x19b):_0x51cdc0=_0x215b5b[_0x305691]!==''?new Function(JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691])):new Function(_0x24a76c(0x16f));break;case _0x24a76c(0x1e1):_0x4a3cbe=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):[],_0x51cdc0=_0x4a3cbe['map'](_0x3985d3=>new Function(JSON['parse'](_0x3985d3)));break;case _0x24a76c(0x1eb):_0x51cdc0=_0x215b5b[_0x305691]!==''?String(_0x215b5b[_0x305691]):'';break;case _0x24a76c(0x202):_0x4a3cbe=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):[],_0x51cdc0=_0x4a3cbe[_0x24a76c(0x1a2)](_0x151b22=>String(_0x151b22));break;case _0x24a76c(0x1c2):_0x37d155=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):{},_0x51cdc0=VisuMZ['ConvertParams']({},_0x37d155);break;case _0x24a76c(0x1d3):_0x4a3cbe=_0x215b5b[_0x305691]!==''?JSON[_0x24a76c(0x1d1)](_0x215b5b[_0x305691]):[],_0x51cdc0=_0x4a3cbe['map'](_0x4be7e8=>VisuMZ[_0x24a76c(0x17b)]({},JSON['parse'](_0x4be7e8)));break;default:continue;}_0x2b1a84[_0x575d51]=_0x51cdc0;}}return _0x2b1a84;},(_0x108f59=>{const _0x590d7e=_0x597cec,_0x53c02b=_0x108f59[_0x590d7e(0x18f)];for(const _0x3c9af7 of dependencies){if(!Imported[_0x3c9af7]){alert(_0x590d7e(0x1a0)['format'](_0x53c02b,_0x3c9af7)),SceneManager[_0x590d7e(0x1ae)]();break;}}const _0x16f51f=_0x108f59[_0x590d7e(0x17a)];if(_0x16f51f['match'](/\[Version[ ](.*?)\]/i)){const _0x456e74=Number(RegExp['$1']);_0x456e74!==VisuMZ[label][_0x590d7e(0x1bb)]&&(alert(_0x590d7e(0x186)[_0x590d7e(0x1cc)](_0x53c02b,_0x456e74)),SceneManager[_0x590d7e(0x1ae)]());}if(_0x16f51f[_0x590d7e(0x1a8)](/\[Tier[ ](\d+)\]/i)){const _0x28e029=Number(RegExp['$1']);_0x28e029<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x590d7e(0x1cc)](_0x53c02b,_0x28e029,tier)),SceneManager['exit']()):tier=Math['max'](_0x28e029,tier);}VisuMZ[_0x590d7e(0x17b)](VisuMZ[label]['Settings'],_0x108f59['parameters']);})(pluginData),PluginManager[_0x597cec(0x19a)](pluginData['name'],_0x597cec(0x1f7),_0x2a2699=>{const _0xa6383c=_0x597cec;$gameScreen[_0xa6383c(0x1ff)]();}),PluginManager[_0x597cec(0x19a)](pluginData[_0x597cec(0x18f)],'ClearPictureID',_0x5de22e=>{const _0x45485d=_0x597cec;VisuMZ[_0x45485d(0x17b)](_0x5de22e,_0x5de22e);const _0x2cb50f=_0x5de22e['PictureIDs'];for(const _0x311d50 of _0x2cb50f){$gameScreen[_0x45485d(0x1be)](_0x311d50);}}),PluginManager[_0x597cec(0x19a)](pluginData['name'],_0x597cec(0x16d),_0x20efee=>{const _0x17cd89=_0x597cec;VisuMZ[_0x17cd89(0x17b)](_0x20efee,_0x20efee);const _0x1dad4c=Math[_0x17cd89(0x1cb)](_0x20efee[_0x17cd89(0x1f3)],_0x20efee[_0x17cd89(0x1f9)]),_0x1277a2=Math[_0x17cd89(0x1b6)](_0x20efee[_0x17cd89(0x1f3)],_0x20efee[_0x17cd89(0x1f9)]);for(let _0x1948e9=_0x1dad4c;_0x1948e9<=_0x1277a2;_0x1948e9++){$gameScreen[_0x17cd89(0x1be)](_0x1948e9);}}),PluginManager[_0x597cec(0x19a)](pluginData[_0x597cec(0x18f)],'ChangePictureChoiceSettingsOne',_0x318ab5=>{const _0x362398=_0x597cec;VisuMZ[_0x362398(0x17b)](_0x318ab5,_0x318ab5);const _0x4b7db5=_0x318ab5['PictureIDs'],_0x337764=_0x318ab5[_0x362398(0x1fc)],_0x348eb5=_0x318ab5['OnDeselectSettings'];VisuMZ['PictureChoices']['CheckSameChoices'](_0x337764,_0x348eb5);for(const _0x35695a of _0x4b7db5){$gameScreen[_0x362398(0x1c4)](_0x35695a,_0x337764,![]),$gameScreen['setPictureChoiceDeselectedSettings'](_0x35695a,_0x348eb5,!![]);}}),PluginManager[_0x597cec(0x19a)](pluginData[_0x597cec(0x18f)],_0x597cec(0x1e8),_0x4ba07a=>{const _0x4086fe=_0x597cec;VisuMZ['ConvertParams'](_0x4ba07a,_0x4ba07a);const _0x176f20=Math[_0x4086fe(0x1cb)](_0x4ba07a[_0x4086fe(0x1f3)],_0x4ba07a[_0x4086fe(0x1f9)]),_0x5d0f68=Math[_0x4086fe(0x1b6)](_0x4ba07a[_0x4086fe(0x1f3)],_0x4ba07a[_0x4086fe(0x1f9)]),_0x2428dc=_0x4ba07a['OnSelectSettings'],_0x4f321f=_0x4ba07a[_0x4086fe(0x1a5)];VisuMZ[_0x4086fe(0x1ea)][_0x4086fe(0x1fd)](_0x2428dc,_0x4f321f);for(let _0x32edee=_0x176f20;_0x32edee<=_0x5d0f68;_0x32edee++){$gameScreen[_0x4086fe(0x1c4)](_0x32edee,_0x2428dc,![]),$gameScreen[_0x4086fe(0x1e3)](_0x32edee,_0x4f321f,!![]);}}),VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x1fd)]=function(_0x3686b2,_0x615719){const _0x188052=_0x597cec;if(!VisuMZ['PictureChoices']['Settings'][_0x188052(0x1af)])return;if(!$gameTemp[_0x188052(0x179)]())return;for(const _0x21e4db in _0x3686b2){if(_0x3686b2[_0x21e4db]!==_0x615719[_0x21e4db])return;}let _0x28cdf1=_0x188052(0x1b9);_0x28cdf1+='for\x20both\x20On\x20Select\x20Settings\x20and\x20On\x20Deselect\x20Settings!\x0a\x0a',_0x28cdf1+=_0x188052(0x1e5),_0x28cdf1+=_0x188052(0x175),_0x28cdf1+=_0x188052(0x170),alert(_0x28cdf1),SceneManager['exit']();},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x1c5)]=Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x172)],Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x172)]=function(){const _0x33df7f=_0x597cec;VisuMZ['PictureChoices'][_0x33df7f(0x1c5)]['call'](this),this[_0x33df7f(0x1ff)]();},Game_Screen[_0x597cec(0x1c9)]['clearPictureChoices']=function(){const _0xfdfd9c=_0x597cec;this['_pictureChoiceBinding']={},this[_0xfdfd9c(0x1ad)]={},this[_0xfdfd9c(0x18e)]={};},Game_Screen[_0x597cec(0x1c9)]['clearPictureChoiceID']=function(_0x4873fb){const _0x5c3d1d=_0x597cec;this[_0x5c3d1d(0x1ad)]===undefined&&this[_0x5c3d1d(0x1ff)](),this[_0x5c3d1d(0x18e)]===undefined&&this['clearPictureChoices'](),this[_0x5c3d1d(0x1ad)]===undefined&&this['clearPictureChoices'](),delete this[_0x5c3d1d(0x19c)][_0x4873fb],delete this[_0x5c3d1d(0x1ad)][_0x4873fb],delete this['_pictureChoiceDeselected'][_0x4873fb];},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x1bc)]=Game_Screen['prototype'][_0x597cec(0x1e4)],Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x1e4)]=function(_0x5ce1ad){const _0x2de14c=_0x597cec;VisuMZ['PictureChoices'][_0x2de14c(0x1bc)]['call'](this,_0x5ce1ad),this[_0x2de14c(0x1be)](_0x5ce1ad);},Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x17f)]=function(_0xdfb824){const _0x14761d=_0x597cec;this[_0x14761d(0x1ad)]===undefined&&this['clearPictureChoices']();const _0x3d234c=this['_pictureChoiceBinding'];return _0x3d234c[_0xdfb824]??-0x2;},Game_Screen['prototype']['addPictureChoiceBinding']=function(_0x4db2d9,_0xe6c239){const _0x47bdde=_0x597cec;this[_0x47bdde(0x1ad)]===undefined&&this[_0x47bdde(0x1ff)]();const _0x48e612=this[_0x47bdde(0x19c)];_0x48e612[_0x4db2d9]=_0xe6c239;},Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x1f2)]=function(_0x3a1293){const _0x220deb=_0x597cec;this['_pictureChoiceDeselected']===undefined&&this[_0x220deb(0x1ff)]();const _0x360fb2=this['_pictureChoiceSelected'];return _0x360fb2[_0x3a1293]=_0x360fb2[_0x3a1293]||{'Duration':0xa,'easingType':_0x220deb(0x183),'TargetX':'Unchanged','TargetY':'Unchanged','TargetScaleX':'Unchanged','TargetScaleY':_0x220deb(0x1aa),'TargetOpacity':_0x220deb(0x1aa),'BlendMode':-0x1,'TargetToneRed':_0x220deb(0x1aa),'TargetToneGreen':_0x220deb(0x1aa),'TargetToneBlue':_0x220deb(0x1aa),'TargetToneGray':'Unchanged'},_0x360fb2[_0x3a1293];},Game_Screen['prototype'][_0x597cec(0x1c4)]=function(_0x5ea963,_0x2d84f2){const _0x4164e5=_0x597cec;this[_0x4164e5(0x18e)]===undefined&&this[_0x4164e5(0x1ff)]();const _0x93472a=this[_0x4164e5(0x1ad)];_0x93472a[_0x5ea963]=JsonEx[_0x4164e5(0x200)](_0x2d84f2);},Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x1a3)]=function(_0x42cb78){const _0x1bc3ba=_0x597cec;this[_0x1bc3ba(0x18e)]===undefined&&this[_0x1bc3ba(0x1ff)]();const _0x1bb954=this[_0x1bc3ba(0x18e)];return _0x1bb954[_0x42cb78]=_0x1bb954[_0x42cb78]||{'Duration':0xa,'easingType':_0x1bc3ba(0x183),'TargetX':'Unchanged','TargetY':_0x1bc3ba(0x1aa),'TargetScaleX':_0x1bc3ba(0x1aa),'TargetScaleY':_0x1bc3ba(0x1aa),'TargetOpacity':_0x1bc3ba(0x1aa),'BlendMode':-0x1,'TargetToneRed':_0x1bc3ba(0x1aa),'TargetToneGreen':'Unchanged','TargetToneBlue':_0x1bc3ba(0x1aa),'TargetToneGray':_0x1bc3ba(0x1aa)},_0x1bb954[_0x42cb78];},Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x1e3)]=function(_0x28beda,_0x1592e8){const _0x1872f0=_0x597cec;this['_pictureChoiceDeselected']===undefined&&this[_0x1872f0(0x1ff)]();const _0x59ec49=this[_0x1872f0(0x18e)];_0x59ec49[_0x28beda]=JsonEx['makeDeepCopy'](_0x1592e8);},Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x1ce)]=function(_0x2e3efb,_0x2ee84e){const _0x3a5050=_0x597cec,_0x2fcd29=this['picture'](_0x2e3efb);if(!_0x2fcd29)return;const _0xb43764=this[_0x3a5050(0x1f2)](_0x2e3efb);_0x2fcd29['applyPictureChoiceSettings'](_0xb43764,_0x2ee84e);},Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x1ba)]=function(_0x40b345,_0x2542ba){const _0x3cbdaf=_0x597cec,_0x49e11f=this['picture'](_0x40b345);if(!_0x49e11f)return;const _0x3ab51d=this[_0x3cbdaf(0x1a3)](_0x40b345);_0x49e11f[_0x3cbdaf(0x1bd)](_0x3ab51d,_0x2542ba);},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x1c0)]=Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x176)],Game_Screen[_0x597cec(0x1c9)][_0x597cec(0x176)]=function(_0x5dbb25,_0x3ea76c,_0x17262c,_0x5a07a2,_0x24ae72,_0x279f8b,_0x4c01b2,_0x480a3e,_0x2ba58d){const _0x462d24=_0x597cec;this['_pictureChoiceDeselected']===undefined&&this[_0x462d24(0x1ff)](),VisuMZ[_0x462d24(0x1ea)][_0x462d24(0x1c0)]['call'](this,_0x5dbb25,_0x3ea76c,_0x17262c,_0x5a07a2,_0x24ae72,_0x279f8b,_0x4c01b2,_0x480a3e,_0x2ba58d),this[_0x462d24(0x18e)][_0x5dbb25]&&this[_0x462d24(0x1ba)](_0x5dbb25,!![]);},Game_Picture[_0x597cec(0x1c9)][_0x597cec(0x1bd)]=function(_0x5cf674,_0x1224ee){const _0x9ecaf0=_0x597cec;if(!_0x5cf674)return;if(Imported[_0x9ecaf0(0x180)])this['_easingType']=0x0,this[_0x9ecaf0(0x199)](_0x5cf674[_0x9ecaf0(0x17d)]);else{const _0xb4054f=_0x5cf674[_0x9ecaf0(0x17d)][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]();this['_easingType']=[_0x9ecaf0(0x1cd),_0x9ecaf0(0x1f4),_0x9ecaf0(0x16e),_0x9ecaf0(0x1d6)][_0x9ecaf0(0x1c7)](_0xb4054f)||0x0;}if(_0x5cf674[_0x9ecaf0(0x1fa)][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6))this['_targetX']=eval(_0x5cf674[_0x9ecaf0(0x1fa)]);if(_0x5cf674['TargetY']['toLowerCase']()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6))this['_targetY']=eval(_0x5cf674[_0x9ecaf0(0x177)]);if(_0x5cf674['TargetScaleX'][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6))this[_0x9ecaf0(0x1ec)]=eval(_0x5cf674[_0x9ecaf0(0x1fb)]);if(_0x5cf674[_0x9ecaf0(0x1e7)]['toLowerCase']()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6))this[_0x9ecaf0(0x189)]=eval(_0x5cf674[_0x9ecaf0(0x1e7)]);if(_0x5cf674[_0x9ecaf0(0x1c6)][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]()!=='unchanged')this[_0x9ecaf0(0x1c1)]=eval(_0x5cf674[_0x9ecaf0(0x1c6)]);if(_0x5cf674['BlendMode']>=0x0)this[_0x9ecaf0(0x1ca)]=_0x5cf674[_0x9ecaf0(0x1d5)];let _0x4707a4=![];if(!this[_0x9ecaf0(0x188)])this['_tone']=[0x0,0x0,0x0,0x0];this[_0x9ecaf0(0x1e9)]=this[_0x9ecaf0(0x188)][_0x9ecaf0(0x1dd)]();_0x5cf674[_0x9ecaf0(0x18c)]['toLowerCase']()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6)&&(this[_0x9ecaf0(0x1e9)][0x0]=eval(_0x5cf674[_0x9ecaf0(0x18c)])[_0x9ecaf0(0x1d9)](-0xff,0xff),_0x4707a4=!![]);_0x5cf674[_0x9ecaf0(0x205)][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6)&&(this[_0x9ecaf0(0x1e9)][0x1]=eval(_0x5cf674[_0x9ecaf0(0x205)])[_0x9ecaf0(0x1d9)](-0xff,0xff),_0x4707a4=!![]);_0x5cf674['TargetToneBlue'][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]()!==_0x9ecaf0(0x1e6)&&(this['_toneTarget'][0x2]=eval(_0x5cf674[_0x9ecaf0(0x1e0)])['clamp'](-0xff,0xff),_0x4707a4=!![]);_0x5cf674[_0x9ecaf0(0x1ed)][_0x9ecaf0(0x1d2)]()[_0x9ecaf0(0x19f)]()!=='unchanged'&&(this[_0x9ecaf0(0x1e9)][0x3]=eval(_0x5cf674['TargetToneGray'])['clamp'](0x0,0xff),_0x4707a4=!![]);if(_0x4707a4)this[_0x9ecaf0(0x178)]=_0x5cf674[_0x9ecaf0(0x201)]||0x0;this[_0x9ecaf0(0x1b7)]=_0x5cf674[_0x9ecaf0(0x201)]||0x0,this[_0x9ecaf0(0x1fe)]=_0x5cf674[_0x9ecaf0(0x201)]||0x0;if(_0x1224ee||this[_0x9ecaf0(0x1b7)]<=0x0){this['_duration']=0x1,this[_0x9ecaf0(0x1fe)]=0x1;if(_0x4707a4)this['_toneDuration']=0x1;this[_0x9ecaf0(0x173)]();}},Sprite_Clickable[_0x597cec(0x1c9)]['hasPictureChoiceBinding']=function(){const _0x37c40e=_0x597cec;if(this[_0x37c40e(0x196)][_0x37c40e(0x18f)]!==_0x37c40e(0x1a7))return![];const _0x6c172f=SceneManager['_scene'];if(_0x6c172f&&!_0x6c172f[_0x37c40e(0x182)])return![];if(!_0x6c172f[_0x37c40e(0x182)][_0x37c40e(0x1b4)])return![];return $gameScreen[_0x37c40e(0x17f)](this['_pictureId'])>=0x0;},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x185)]=Sprite_Clickable[_0x597cec(0x1c9)][_0x597cec(0x17e)],Sprite_Clickable[_0x597cec(0x1c9)]['onMouseEnter']=function(){const _0x3a043a=_0x597cec;VisuMZ['PictureChoices'][_0x3a043a(0x185)][_0x3a043a(0x174)](this),this[_0x3a043a(0x171)]()&&this['onMouseEnterPictureChoice']();},Sprite_Clickable['prototype'][_0x597cec(0x191)]=function(){const _0x4d513a=_0x597cec,_0x1c0460=SceneManager['_scene'],_0x3cb24e=_0x1c0460[_0x4d513a(0x182)],_0x4638b8=$gameScreen[_0x4d513a(0x17f)](this[_0x4d513a(0x1f5)]);_0x3cb24e[_0x4d513a(0x1a4)](_0x4638b8);},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x1d7)]=Sprite_Clickable[_0x597cec(0x1c9)][_0x597cec(0x1b1)],Sprite_Clickable[_0x597cec(0x1c9)][_0x597cec(0x1b1)]=function(){const _0x5f8e7c=_0x597cec;VisuMZ[_0x5f8e7c(0x1ea)][_0x5f8e7c(0x1d7)][_0x5f8e7c(0x174)](this),this['hasPictureChoiceBinding']()&&(this[_0x5f8e7c(0x191)](),this[_0x5f8e7c(0x1d4)]());},Sprite_Clickable[_0x597cec(0x1c9)]['onClickPictureChoice']=function(){const _0x24a997=_0x597cec,_0x5b5285=SceneManager['_scene'],_0x4cd4b1=_0x5b5285['_choiceListWindow'],_0x5779a4=$gameScreen['getPictureChoiceBinding'](this[_0x24a997(0x1f5)]);_0x4cd4b1[_0x24a997(0x1d8)](_0x5779a4),_0x4cd4b1['processOk']();},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x1b8)]=Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x1a9)],Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x1a9)]=function(){const _0x1d6155=_0x597cec;VisuMZ[_0x1d6155(0x1ea)][_0x1d6155(0x1b8)][_0x1d6155(0x174)](this),this[_0x1d6155(0x1e2)](),this[_0x1d6155(0x18a)]();},Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x1e2)]=function(){const _0xcff1ca=_0x597cec;this[_0xcff1ca(0x1b2)]['x']=this[_0xcff1ca(0x1b2)]['y']=0x1;const _0x1fbc9b=/<HIDE CHOICE WINDOW>/i;this['_pictureChoicesHidden']=![];const _0x1566c9=$gameMessage[_0xcff1ca(0x1bf)]();for(const _0x501bee of _0x1566c9){if(_0x501bee[_0xcff1ca(0x1a8)](_0x1fbc9b)){this['scale']['x']=this[_0xcff1ca(0x1b2)]['y']=0x0,this['_pictureChoicesHidden']=!![];break;}}for(const _0x4abef8 of this['_list']){if(!_0x4abef8)continue;_0x4abef8[_0xcff1ca(0x18f)][_0xcff1ca(0x1a8)](_0x1fbc9b)&&(_0x4abef8[_0xcff1ca(0x18f)]=_0x4abef8['name'][_0xcff1ca(0x18b)](_0x1fbc9b,'')[_0xcff1ca(0x19f)]());}},Window_ChoiceList['prototype'][_0x597cec(0x18a)]=function(){const _0x5c5c88=_0x597cec;let _0x27f447=/<BIND (?:PICTURE|PICTURES):[ ](\d+)>/i;for(const _0x3c118e of this[_0x5c5c88(0x1db)]){if(!_0x3c118e)continue;if(_0x3c118e[_0x5c5c88(0x18f)][_0x5c5c88(0x1a8)](_0x27f447)){const _0x503338=Number(RegExp['$1']),_0x2caeb1=this[_0x5c5c88(0x1db)]['indexOf'](_0x3c118e);$gameScreen['addPictureChoiceBinding'](_0x503338,_0x2caeb1),_0x3c118e['name']=_0x3c118e[_0x5c5c88(0x18f)][_0x5c5c88(0x18b)](_0x27f447,'')[_0x5c5c88(0x19f)]();}}},VisuMZ[_0x597cec(0x1ea)]['Window_ChoiceList_callOkHandler']=Window_ChoiceList[_0x597cec(0x1c9)]['callOkHandler'],Window_ChoiceList['prototype'][_0x597cec(0x1b3)]=function(){const _0x448115=_0x597cec;VisuMZ[_0x448115(0x1ea)][_0x448115(0x1cf)]['call'](this),this['autoClearPictureChoices']();},VisuMZ[_0x597cec(0x1ea)][_0x597cec(0x190)]=Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x1da)],Window_ChoiceList['prototype'][_0x597cec(0x1da)]=function(){const _0x4778ee=_0x597cec;VisuMZ[_0x4778ee(0x1ea)][_0x4778ee(0x190)][_0x4778ee(0x174)](this),this[_0x4778ee(0x1b0)]();},Window_ChoiceList['prototype']['autoClearPictureChoices']=function(){const _0x2ddaf8=_0x597cec;VisuMZ[_0x2ddaf8(0x1ea)]['Settings'][_0x2ddaf8(0x198)]&&$gameScreen[_0x2ddaf8(0x1ff)]();},VisuMZ[_0x597cec(0x1ea)]['Window_Selectable_select']=Window_Selectable[_0x597cec(0x1c9)][_0x597cec(0x1d8)],Window_Selectable[_0x597cec(0x1c9)][_0x597cec(0x1d8)]=function(_0x595389){const _0x1ea850=_0x597cec;VisuMZ[_0x1ea850(0x1ea)][_0x1ea850(0x1f6)][_0x1ea850(0x174)](this,_0x595389),this[_0x1ea850(0x196)][_0x1ea850(0x18f)]===_0x1ea850(0x192)&&this[_0x1ea850(0x187)](_0x595389);},Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x1a4)]=function(_0x38be1b){const _0x4cf129=_0x597cec,_0x2bf82e=this[_0x4cf129(0x1f0)]();this['select'](_0x38be1b),this[_0x4cf129(0x1f0)]()!==_0x2bf82e&&this['playCursorSound']();},VisuMZ['PictureChoices'][_0x597cec(0x18d)]=Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x197)],Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x197)]=function(){const _0x65e637=_0x597cec;this['_instantPictureChoiceSelect']=!![],VisuMZ['PictureChoices']['Window_ChoiceList_selectDefault'][_0x65e637(0x174)](this),this[_0x65e637(0x1c3)]=undefined;},Window_ChoiceList[_0x597cec(0x1c9)][_0x597cec(0x187)]=function(_0x378f3b){const _0x870473=_0x597cec;for(let _0x55acfc=0x0;_0x55acfc<$gameScreen[_0x870473(0x195)]();_0x55acfc++){const _0xc54fc5=$gameScreen[_0x870473(0x17f)](_0x55acfc);if(_0xc54fc5<0x0)continue;const _0x49e5bb=$gameScreen[_0x870473(0x1f8)](_0x55acfc);if(!_0x49e5bb)continue;const _0x55a015=this[_0x870473(0x1c3)];_0xc54fc5===_0x378f3b?$gameScreen[_0x870473(0x1ce)](_0x55acfc,_0x55a015):$gameScreen['applyPictureChoiceDeselectSettings'](_0x55acfc,_0x55a015);}};