//=============================================================================
// VisuStella MZ - Variable Gauges
// VisuMZ_4_VariableGauges.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VariableGauges = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VariableGauges = VisuMZ.VariableGauges || {};
VisuMZ.VariableGauges.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [VariableGauges]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Page
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you, the game dev, to place gauges on the screen whose
 * values are governed by variables. These gauges can appear on the map screen
 * or the battle screen to your liking. Their maximum values, placements, type,
 * colors, and more can be adjusted to suit your needs. Mark them with icons
 * and have tooltip windows appear explaining their purpose when the player
 * hovers the mouse cursor over them.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Display an unlimited number of Variable Gauges on the screen.
 * * Variable Gauges will automatically update when their assigned variables
 *   are updated through event commands.
 * * Adjust their screen position, colors, horizontal or vertical style type.
 * * Mark the gauges with icons to let the player distinguish them quickly.
 * * Provide tooltip support for when the player hovers the mouse cursor over
 *   them for more clarity on what the gauges are for.
 * * Adjust their visibility through Plugin Commands and Notetags.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_3_VisualGaugeStyles
 *
 * If VisuMZ's Visual Gauge Styles plugin is installed, you can apply gauge
 * styles to the various gauges for this plugin.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_1_MessageCore
 * 
 * Word Wrap does not work the tooltips. This is because the tooltips are
 * automatically sized based on the text at hand.
 * 
 * ---
 * 
 * VisuMZ_3_MessageKeywords
 * 
 * Message Keywords do not work with the tooltips because you cannot hover the
 * mouse cursor over a window that only appears when hovering over a specific
 * section of the screen.
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
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Hide Variable Gauges>
 *
 * - Used for: Map Notetags
 * - Prevents Variable Gauges from being visible on the current map.
 *
 * ---
 *
 * <Force Variable Gauge: key>
 * <Force Variable Gauges: key, key, key>
 *
 * - Used for: Map Notetags
 * - Overrides map settings for the visible Variable Gauges and makes it so
 *   that only the listed Variable Gauges (marked by their keys) are visible
 *   while on this map.
 * - No other Variable Gauges are visible while on this map.
 * - Replace 'key' with a string representing the Variable Gauge that should be
 *   visible on the map.
 *
 * ---
 *
 * <Extra Variable Gauge: key>
 * <Extra Variable Gauges: key, key, key>
 *
 * - Used for: Map Notetags
 * - Shows extra Variable Gauge(s) in addition to the ones that are normally
 *   visible on the map while on this map.
 * - Replace 'key' with a string representing the Variable Gauge that is also
 *   visible on the map.
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
 * === Battle Plugin Commands ===
 * 
 * ---
 *
 * Battle: Add Variable Gauge(s)
 * - Adds Variable Gauge(s) to be visible in battle.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want visible in battle.
 *
 * ---
 *
 * Battle: Remove Variable Gauge(s)
 * - Remove Variable Gauge(s) from view in battle.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want removed from battle.
 *
 * ---
 *
 * Battle: Remove All Gauge(s)
 * - Remove All Variable Gauge(s) from view in battle.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 *
 * Map: Add Variable Gauge(s)
 * - Adds Variable Gauge(s) to be visible on the map.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want visible on the map.
 *
 * ---
 *
 * Map: Remove Variable Gauge(s)
 * - Remove Variable Gauge(s) from view in battle.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want removed from the
 *     map scene.
 *
 * ---
 *
 * Map: Remove All Gauge(s)
 * - Remove All Variable Gauge(s) from view on the map.
 *
 * ---
 * 
 * === Refresh Plugin Commands ===
 * 
 * ---
 *
 * Refresh: All Variable Gauge(s)
 * - Refresh all Variable Gauges currently visible.
 *
 * ---
 *
 * Refresh: Target Variable Gauge(s)
 * - Refresh Target Variable Gauges currently visible.
 *
 *   Key(s):
 *   - List the key(s) of the Variable Gauge(s) you want refreshed.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Variable Gauge Visibility
 * - Shows/hides all variable gauges on the screen.
 *
 *   Visibility:
 *   - Shows/hides all Variable Gauges on the screen.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge List Settings
 * ============================================================================
 *
 * A list of the gauges you wish to show on screen. Here is where you adjust
 * ALL of the settings related to the Variable Gauges that can appear in your
 * game. Every setting needs to be carefully adjusted.
 *
 * ---
 *
 * Main
 * 
 *   Key:
 *   - Identification key used to reference this gauge.
 *   - Use unique keys for this to work.
 *   - If you do not change the ID Key for this Variable Gauge and leave it as
 *     >>>ATTENTION<<<, then the game will not let you move forward.
 * 
 *   Variable ID:
 *   - Select a variable to bind this gauge to.
 *   - Use a Variable ID other than 0 for this to work.
 * 
 *   JS: Maximum Value:
 *   - Code used to determine the maximum value for the gauge.
 *
 * ---
 *
 * Gauge Colors
 * 
 *   Color 1:
 *   Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Default Visibility
 * 
 *   Map Visible:
 *   Battle Visible:
 *   - Do you want this gauge to be visible or hidden by default?
 *
 * ---
 *
 * Icon Settings
 * 
 *   Icon Index:
 *   - Pairs the gauge with an icon.
 *   - Use 0 to not use any icons.
 * 
 *   Icon Buffer:
 *   - Pixel distance to buffer icon from gauge.
 *   - Direction depends on Gauge Type.
 *
 * ---
 *
 * Screen Settings
 * 
 *   Gauge Type:
 *   - What is the gauge type like?
 *     - Horizontal - Goes Left to Right
 *     - Vertical - Goes Down to Up
 * 
 *   Visual Gauge Style:
 *   - Select the gauge style to use for this gauge.
 *   - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *   JS: Position:
 *   - Code used to determine the screen position for this gauge.
 *
 * ---
 *
 * Tooltip Settings
 * 
 *   Tooltip Text:
 *   - Tooltip text that's displayed when the mouse hovers over.
 *   - Text codes allowed. Does not work with Word Wrap.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * Settings for the Variable Gauges Tooltips Window.
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
 *   - Negative: up. Positive: down.
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
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * *** VisuMZ_3_VisualGaugeStyles
 * **** You can now apply a style for each gauge in the "Gauge List" Plugin
 *      Parameters as long as VisuMZ_3_VisualGaugeStyles is installed.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added section: "Extra Features" for VisuMZ_3_VisualGaugeStyles:
 * *** If VisuMZ's Visual Gauge Styles plugin is installed, you can apply gauge
 *     styles to the various gauges for this plugin.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Gauge List > Settings > Visual Gauge Style
 * **** Select the gauge style to use for this gauge.
 * **** Requires VisuMZ_3_VisualGaugeStyles!
 * 
 * Version 1.01: January 20, 2022
 * * Feature Update!
 * ** Added fail safes for event test play to prevent crashes on maps without
 *    any tilesets assigned. Update made by Arisu.
 *
 * Version 1.00 Official Release Date: February 11, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleAddGauge
 * @text Battle: Add Variable Gauge(s)
 * @desc Adds Variable Gauge(s) to be visible in battle.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want visible in battle.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleRemoveGauge
 * @text Battle: Remove Variable Gauge(s)
 * @desc Remove Variable Gauge(s) from view in battle.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want removed from battle.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleRemoveAllGauge
 * @text Battle: Remove All Gauge(s)
 * @desc Remove All Variable Gauge(s) from view in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapAddGauge
 * @text Map: Add Variable Gauge(s)
 * @desc Adds Variable Gauge(s) to be visible on the map.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want visible on the map.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapRemoveGauge
 * @text Map: Remove Variable Gauge(s)
 * @desc Remove Variable Gauge(s) from view on the map.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want removed from the map scene.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapRemoveAllGauge
 * @text Map: Remove All Gauge(s)
 * @desc Remove All Variable Gauge(s) from view on the map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RefreshAllGauges
 * @text Refresh: All Variable Gauge(s)
 * @desc Refresh all Variable Gauges currently visible.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RefreshTargetGauges
 * @text Refresh: Target Variable Gauge(s)
 * @desc Refresh Target Variable Gauges currently visible.
 *
 * @arg Keys:arraystr
 * @text Key(s)
 * @type string[]
 * @desc List the key(s) of the Variable Gauge(s) you want refreshed.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemVariableGaugeVisibility
 * @text System: Variable Gauge Visibility
 * @desc Shows/hides all variable gauges on the screen.
 *
 * @arg Visiblility:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Shows/hides all Variable Gauges on the screen.
 * @default true
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
 * @param VariableGauges
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Gauge:arraystruct
 * @text Gauge List
 * @type struct<Gauge>[]
 * @desc A list of the gauges you wish to show on screen.
 * @default ["{\"Key:str\":\"Example\",\"VariableID:num\":\"1\",\"MaximumJS:func\":\"\\\"// Declare Variables\\\\nlet max = 100;\\\\n\\\\n// Calculations\\\\n// Insert your calculations here\\\\n\\\\n// Return Maximum\\\\nreturn max;\\\"\",\"Colors\":\"\",\"Color1:str\":\"28\",\"Color2:str\":\"29\",\"DefaultVisible\":\"\",\"DefaultMapVisible:eval\":\"true\",\"DefaultBattleVisible:eval\":\"false\",\"IconSettings\":\"\",\"IconIndex:num\":\"23\",\"IconBuffer:num\":\"+4\",\"Screen\":\"\",\"Type:str\":\"horz\",\"PositionJS:func\":\"\\\"// Declare Variables\\\\nlet thick = 24;\\\\nlet length = 192;\\\\nlet x = Graphics.width - length - 50 - ImageManager.iconWidth - 4;\\\\nlet y = Graphics.height - thick - 50;\\\\n\\\\n// Check Horizontal\\\\nconst horz = this.isHorizontal();\\\\nconst width = horz ? length : thick;\\\\nconst height = horz ? thick : length;\\\\n\\\\n// Return Rectangle\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"TooltipSettings\":\"\",\"TooltipText:json\":\"\\\"This is an example of a \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0].\\\\nIt is directly tied to \\\\\\\\c[6]Variable 1\\\\\\\\c[0] with\\\\na maximum cap of \\\\\\\\c[24]100\\\\\\\\c[0].\\\\n\\\\nThis \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0] will update whenever\\\\n\\\\\\\\c[6]Variable 1\\\\\\\\c[0] is changed by \\\\\\\\c[4]Event Commands\\\\\\\\c[0].\\\"\"}","{\"Key:str\":\"Vertical\",\"VariableID:num\":\"2\",\"MaximumJS:func\":\"\\\"// Declare Variables\\\\nlet max = 100;\\\\n\\\\n// Calculations\\\\n// Insert your calculations here\\\\n\\\\n// Return Maximum\\\\nreturn max;\\\"\",\"Colors\":\"\",\"Color1:str\":\"30\",\"Color2:str\":\"31\",\"DefaultVisible\":\"\",\"DefaultMapVisible:eval\":\"true\",\"DefaultBattleVisible:eval\":\"false\",\"IconSettings\":\"\",\"IconIndex:num\":\"87\",\"IconBuffer:num\":\"+4\",\"Screen\":\"\",\"Type:str\":\"vert\",\"PositionJS:func\":\"\\\"// Declare Variables\\\\nlet thick = 24;\\\\nlet length = 192;\\\\nlet x = Graphics.width - thick - 50;\\\\nlet y = Graphics.height - length - 50 - ImageManager.iconHeight - 4;\\\\n\\\\n// Check Horizontal\\\\nconst horz = this.isHorizontal();\\\\nconst width = horz ? length : thick;\\\\nconst height = horz ? thick : length;\\\\n\\\\n// Return Rectangle\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"TooltipSettings\":\"\",\"TooltipText:json\":\"\\\"Here is another example of a \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0],\\\\nexcept that it is \\\\\\\\c[4]vertical\\\\\\\\c[0]. This gauge is\\\\ntied to \\\\\\\\c[6]Variable 2\\\\\\\\c[0].\\\\n\\\\nA \\\\\\\\c[4]vertical\\\\\\\\c[0] \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0] behaves similar to\\\\na regular \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0] except it is filled\\\\nfrom the bottom to the top.\\\"\"}","{\"Key:str\":\"Hidden\",\"VariableID:num\":\"3\",\"MaximumJS:func\":\"\\\"// Declare Variables\\\\nlet max = 100;\\\\n\\\\n// Calculations\\\\n// Insert your calculations here\\\\n\\\\n// Return Maximum\\\\nreturn max;\\\"\",\"Colors\":\"\",\"Color1:str\":\"20\",\"Color2:str\":\"21\",\"DefaultVisible\":\"\",\"DefaultMapVisible:eval\":\"false\",\"DefaultBattleVisible:eval\":\"false\",\"IconSettings\":\"\",\"IconIndex:num\":\"163\",\"IconBuffer:num\":\"+4\",\"Screen\":\"\",\"Type:str\":\"horz\",\"PositionJS:func\":\"\\\"// Declare Variables\\\\nlet thick = 24;\\\\nlet length = 192;\\\\nlet x = Graphics.width - length - 50 - ImageManager.iconWidth - 4;\\\\nlet y = Graphics.height - thick - 50 - ImageManager.iconHeight - 4;\\\\n\\\\n// Check Horizontal\\\\nconst horz = this.isHorizontal();\\\\nconst width = horz ? length : thick;\\\\nconst height = horz ? thick : length;\\\\n\\\\n// Return Rectangle\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"TooltipSettings\":\"\",\"TooltipText:json\":\"\\\"This is an example of a \\\\\\\\c[5]Variable Gauge\\\\\\\\c[0]\\\\nthat is normally \\\\\\\\c[4]hidden\\\\\\\\c[0] from view until\\\\nyou, the game dev, manually \\\\\\\\c[24]add\\\\\\\\c[0] it to\\\\nthe game screen present.\\\\n\\\\nIt is based off \\\\\\\\c[6]Variable 3\\\\\\\\c[0] and will depict\\\\nthe values shown up to a cap of \\\\\\\\c[24]100\\\\\\\\c[0].\\\"\"}"]
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc Settings for the Variable Gauges Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0"}
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
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param Key:str
 * @text Key
 * @desc Identification key used to reference this gauge.
 * Use unique keys for this to work.
 * @default >>>ATTENTION<<<
 *
 * @param VariableID:num
 * @text Variable ID
 * @parent Key:str
 * @type variable
 * @desc Select a variable to bind this gauge to.
 * Use a Variable ID other than 0 for this to work.
 * @default 0
 *
 * @param MaximumJS:func
 * @text JS: Maximum Value
 * @parent Key:str
 * @type note
 * @desc Code used to determine the maximum value for the gauge.
 * @default "// Declare Variables\nlet max = 100;\n\n// Calculations\n// Insert your calculations here\n\n// Return Maximum\nreturn max;"
 * 
 * @param Colors
 * @text Gauge Colors
 *
 * @param Color1:str
 * @text Color 1
 * @parent Colors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param Color2:str
 * @text Color 2
 * @parent Colors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 * 
 * @param DefaultVisible
 * @text Default Visibility
 *
 * @param DefaultMapVisible:eval
 * @text Map Visible
 * @parent DefaultVisible
 * @type boolean
 * @on Visible by Default
 * @off Hidden by Default
 * @desc Do you want this gauge to be visible or hidden by default?
 * @default true
 *
 * @param DefaultBattleVisible:eval
 * @text Battle Visible
 * @parent DefaultVisible
 * @type boolean
 * @on Visible by Default
 * @off Hidden by Default
 * @desc Do you want this gauge to be visible or hidden by default?
 * @default false
 * 
 * @param IconSettings
 * @text Icon Settings
 *
 * @param IconIndex:num
 * @text Icon Index
 * @parent IconSettings
 * @desc Pairs the gauge with an icon.
 * Use 0 to not use any icons.
 * @default 0
 *
 * @param IconBuffer:num
 * @text Icon Buffer
 * @parent IconSettings
 * @desc Pixel distance to buffer icon from gauge.
 * Direction depends on Gauge Type.
 * @default +4
 * 
 * @param Screen
 * @text Screen Settings
 *
 * @param Type:str
 * @text Gauge Type
 * @parent Screen
 * @type select
 * @option Horizontal - Goes Left to Right
 * @value horz
 * @option Vertical - Goes Down to Up
 * @value vert
 * @desc What is the gauge type like?
 * @default horz
 * 
 * @param Style:str
 * @text Visual Gauge Style
 * @parent Screen
 * @type select
 * @option Normal
 * @option Default
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
 * @desc Select the gauge style to use for this gauge.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Default
 *
 * @param PositionJS:func
 * @text JS: Position
 * @parent Screen
 * @type note
 * @desc Code used to determine the screen position for this gauge.
 * @default "// Declare Variables\nlet thick = 24;\nlet length = 192;\nlet x = 50;\nlet y = 50;\n\n// Check Horizontal\nconst horz = this.isHorizontal();\nconst width = horz ? length : thick;\nconst height = horz ? thick : length;\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 * 
 * @param TooltipSettings
 * @text Tooltip Settings
 *
 * @param TooltipText:json
 * @text Tooltip Text
 * @parent TooltipSettings
 * @type note
 * @desc Tooltip text that's displayed when the mouse hovers over.
 * Text codes allowed. Does not work with Word Wrap.
 * @default "Example text."
 *
 */
/* ----------------------------------------------------------------------------
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

function _0x281d(){const _0x383d5e=['push','trim','_maxValueSegment','initialize','visibleVariableGauges','clear','VisibleGauges','1843821lTMeqw','WINDOW_SKIN_FILENAME','TooltipText','Key','worldTransform','WINDOW_SCALE','updateRefreshRequest','_mapVisibleVariableGauges','removeMapVisibleVariableGauge','BattleRemoveGauge','iconWidth','VariableReference','show','_text','_verticalGaugeSprite','LIYGh','isOptionValid','setupKeywordText','children','STR','EVAL','textSizeEx','toUpperCase','1461352MyzazY','Game_Variables_setValue','updateIconSprite','updateIconSpriteFrame','DefaultMapVisibleGauges','updateVariableGauges','horz','clampPosition','resizeWindow','Please\x20change\x20this\x20to\x20an\x20appropriate\x20key\x20name.','You\x20have\x20a\x20Variable\x20Gauge\x20key\x20named\x20>>>ATTENTION<<<\x0a','812744IaOAow','gradientFillRect','width','parse','loadSystem','toLowerCase','isHorizontal','_variableGaugeLayer','ForcedGauges','drawVisualStyleGauge','indexOf','WindowSkin','EHekP','isVariableGaugeVisible','WINDOW_SKIN_OPACITY','>>>ATTENTION<<<','MOUSE_OFFSET_Y','visible','call','6088643OoVaaC','padding','xAavV','iconHeight','test','3331325punaXv','drawGaugeFront','GaugeKey','drawGaugeBack','removeBattleVisibleVariableGauge','applyInverse','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ConvertParams','_variableGaugeTooltipWindow','getStyleName','fzTaF','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','1477322rdyrvt','length','_requestRefresh','MapRemoveAllGauge','note','hMphr','number','exit','setKey','tscwl','DefaultMapVisible','updateIconPosition','rMTnD','_hoverState','getColor','PqIaL','removeChild','IconSet','isBeingTouched','Keys','format','height','TrFcB','max','MapRemoveGauge','zKBHD','DUKZC','createVariableGaugeLayer','settings','createWindowLayer','QilVG','VariableGauges','isBusy','ARRAYEVAL','clamp','ARRAYSTR','anchor','Color2','forcedVariableGauges','XtVGI','backOpacity','iZGOm','updateVariableGaugeVisibility','rfOkJ','STRUCT','_variableGaugeVisibile','opacity','registerCommand','floor','Style','RegExp','default','updateVerticalGaugeSpritePosition','hide','initVariableGauges','drawGauge','hitTest','ARRAYFUNC','adjustVerticalGaugeSpriteBitmap','IdPjC','map','DefaultBattleVisibleGauges','setValue','20zsqlNd','622971FRgwyV','JSON','Settings','match','scale','_iconIndex','processTouch','IconIndex','addBattleVisibleVariableGauge','MIZAQ','eVySd','setVisibleUI','create','_lastRate','TeuNU','includes','WindowOpacity','RefreshAllGauges','Scene_Battle_setVisibleUI','bitmap','AhkGE','createVariableGaugeTooltipWindow','createIconSprite','constructor','dkEYo','setFrame','round','parameters','createNewVariableGaugeSprites','NHNDR','MaximumJS','getGaugeRate','tPMHr','Scene_Base_createWindowLayer','MapAddGauge','PzRKZ','targetWindow','onDatabaseLoaded','refreshBitmap','clone','split','addMapVisibleVariableGauge','80cniODL','horzStyle','removeVariableGauge','styleName','DefaultBattleVisible','MOUSE_OFFSET_X','_iconSprite','QYFSD','VisualGaugeStyles','refreshVariableGauge','contents','#%1','_scene','createVariableGaugeSprites','Dgvbj','SystemVariableGaugeVisibility','loadWindowskin','concat','prototype','Gauge','version','PWOpc','value','bFSCq','Color1','ARRAYSTRUCT','isSceneMap','textColor','setupText','areVariableGaugesVisible','XUpog','XVaPz','gaugeBackColor','FUNC','update','refresh','6ssGCfc','updateOpacity','hideVariableGauges','filter','process_VisuMZ_VariableGauges','drawTextEx','find','Type','UGHAt','PositionJS','OrfZT','onMouseExit','angle','description','NqNWW','itemPadding','isSceneBattle','qEpOe','IAJwo','isWordWrapEnabled','_key','VariableID','XPRIK','isSupportMessageKeywords','requestRefresh','rRBiI','status','sOisS','setVariableGaugesVisible','4sgZtmB','baseTextRect','adjustBitmap','remove','onMouseEnter','updatePosition','ARRAYNUM','resize','fOWYz','Tooltip','name','addChild','_battleVisibleVariableGauges'];_0x281d=function(){return _0x383d5e;};return _0x281d();}const _0x19f4c3=_0x313a;function _0x313a(_0xe07dc1,_0x584960){const _0x281d63=_0x281d();return _0x313a=function(_0x313ad7,_0x5ed3fa){_0x313ad7=_0x313ad7-0xb6;let _0x4859e3=_0x281d63[_0x313ad7];return _0x4859e3;},_0x313a(_0xe07dc1,_0x584960);}(function(_0x491c54,_0x526688){const _0x5f1373=_0x313a,_0xdad36e=_0x491c54();while(!![]){try{const _0xdc7b1=-parseInt(_0x5f1373(0x128))/0x1+-parseInt(_0x5f1373(0x11d))/0x2+-parseInt(_0x5f1373(0x106))/0x3+-parseInt(_0x5f1373(0xf2))/0x4*(-parseInt(_0x5f1373(0x140))/0x5)+parseInt(_0x5f1373(0xd5))/0x6*(parseInt(_0x5f1373(0x14c))/0x7)+-parseInt(_0x5f1373(0x1b6))/0x8*(-parseInt(_0x5f1373(0x18c))/0x9)+-parseInt(_0x5f1373(0x18b))/0xa*(-parseInt(_0x5f1373(0x13b))/0xb);if(_0xdc7b1===_0x526688)break;else _0xdad36e['push'](_0xdad36e['shift']());}catch(_0x564fb1){_0xdad36e['push'](_0xdad36e['shift']());}}}(_0x281d,0x7e964));var label=_0x19f4c3(0x16b),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x48d6ca){const _0x2e9276=_0x19f4c3;return _0x48d6ca[_0x2e9276(0xef)]&&_0x48d6ca[_0x2e9276(0xe2)][_0x2e9276(0x19b)]('['+label+']');})[0x0];VisuMZ[label][_0x19f4c3(0x18e)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x19f4c3(0x147)]=function(_0x845e10,_0x477262){const _0x4b99bd=_0x19f4c3;for(const _0x1429a2 in _0x477262){if(_0x1429a2[_0x4b99bd(0x18f)](/(.*):(.*)/i)){const _0xda5ca4=String(RegExp['$1']),_0xa14d8d=String(RegExp['$2'])[_0x4b99bd(0x11c)]()[_0x4b99bd(0x100)]();let _0x332140,_0x45489a,_0x2d8b91;switch(_0xa14d8d){case'NUM':_0x332140=_0x477262[_0x1429a2]!==''?Number(_0x477262[_0x1429a2]):0x0;break;case _0x4b99bd(0xf8):_0x45489a=_0x477262[_0x1429a2]!==''?JSON['parse'](_0x477262[_0x1429a2]):[],_0x332140=_0x45489a[_0x4b99bd(0x188)](_0x3b00a8=>Number(_0x3b00a8));break;case _0x4b99bd(0x11a):_0x332140=_0x477262[_0x1429a2]!==''?eval(_0x477262[_0x1429a2]):null;break;case _0x4b99bd(0x16d):_0x45489a=_0x477262[_0x1429a2]!==''?JSON[_0x4b99bd(0x12b)](_0x477262[_0x1429a2]):[],_0x332140=_0x45489a['map'](_0x1daf80=>eval(_0x1daf80));break;case _0x4b99bd(0x18d):_0x332140=_0x477262[_0x1429a2]!==''?JSON[_0x4b99bd(0x12b)](_0x477262[_0x1429a2]):'';break;case'ARRAYJSON':_0x45489a=_0x477262[_0x1429a2]!==''?JSON[_0x4b99bd(0x12b)](_0x477262[_0x1429a2]):[],_0x332140=_0x45489a['map'](_0x476a2f=>JSON[_0x4b99bd(0x12b)](_0x476a2f));break;case _0x4b99bd(0xd2):_0x332140=_0x477262[_0x1429a2]!==''?new Function(JSON[_0x4b99bd(0x12b)](_0x477262[_0x1429a2])):new Function('return\x200');break;case _0x4b99bd(0x185):_0x45489a=_0x477262[_0x1429a2]!==''?JSON['parse'](_0x477262[_0x1429a2]):[],_0x332140=_0x45489a[_0x4b99bd(0x188)](_0x18228b=>new Function(JSON[_0x4b99bd(0x12b)](_0x18228b)));break;case _0x4b99bd(0x119):_0x332140=_0x477262[_0x1429a2]!==''?String(_0x477262[_0x1429a2]):'';break;case _0x4b99bd(0x16f):_0x45489a=_0x477262[_0x1429a2]!==''?JSON['parse'](_0x477262[_0x1429a2]):[],_0x332140=_0x45489a[_0x4b99bd(0x188)](_0x41064e=>String(_0x41064e));break;case _0x4b99bd(0x178):_0x2d8b91=_0x477262[_0x1429a2]!==''?JSON[_0x4b99bd(0x12b)](_0x477262[_0x1429a2]):{},_0x332140=VisuMZ[_0x4b99bd(0x147)]({},_0x2d8b91);break;case _0x4b99bd(0xca):_0x45489a=_0x477262[_0x1429a2]!==''?JSON[_0x4b99bd(0x12b)](_0x477262[_0x1429a2]):[],_0x332140=_0x45489a[_0x4b99bd(0x188)](_0x32c5f8=>VisuMZ['ConvertParams']({},JSON['parse'](_0x32c5f8)));break;default:continue;}_0x845e10[_0xda5ca4]=_0x332140;}}return _0x845e10;},(_0x2a7b48=>{const _0x1601b2=_0x19f4c3,_0x475b3a=_0x2a7b48['name'];for(const _0x3177d2 of dependencies){if(!Imported[_0x3177d2]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x1601b2(0x160)](_0x475b3a,_0x3177d2)),SceneManager['exit']();break;}}const _0x48fd57=_0x2a7b48[_0x1601b2(0xe2)];if(_0x48fd57['match'](/\[Version[ ](.*?)\]/i)){const _0x50085b=Number(RegExp['$1']);_0x50085b!==VisuMZ[label][_0x1601b2(0xc5)]&&(alert(_0x1601b2(0x14b)[_0x1601b2(0x160)](_0x475b3a,_0x50085b)),SceneManager[_0x1601b2(0x153)]());}if(_0x48fd57['match'](/\[Tier[ ](\d+)\]/i)){const _0x1f270b=Number(RegExp['$1']);if(_0x1f270b<tier){if(_0x1601b2(0x115)!==_0x1601b2(0xb8))alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1601b2(0x160)](_0x475b3a,_0x1f270b,tier)),SceneManager[_0x1601b2(0x153)]();else{_0x534926[_0x1601b2(0x147)](_0x4ddf74,_0x3714c6);const _0x5d4a77=_0x4e56cf[_0x1601b2(0x15f)][_0x1601b2(0x188)](_0x2a864e=>_0x2a864e['toUpperCase']()[_0x1601b2(0x100)]());for(const _0x2aba83 of _0x5d4a77){_0x213220['_scene'][_0x1601b2(0xba)](_0x2aba83);}}}else'jlBVh'!==_0x1601b2(0xc6)?tier=Math[_0x1601b2(0x163)](_0x1f270b,tier):_0x2b2943[_0x1601b2(0x16b)]['DefaultBattleVisibleGauges']['push'](_0x5396d7);}VisuMZ[_0x1601b2(0x147)](VisuMZ[label][_0x1601b2(0x18e)],_0x2a7b48[_0x1601b2(0x1a7)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],'BattleAddGauge',_0x537a3b=>{const _0xa1ca99=_0x19f4c3;VisuMZ[_0xa1ca99(0x147)](_0x537a3b,_0x537a3b);const _0x5e6d5d=_0x537a3b['Keys']['map'](_0x4cfa58=>_0x4cfa58['toUpperCase']()[_0xa1ca99(0x100)]());for(const _0x426a8b of _0x5e6d5d){$gameSystem[_0xa1ca99(0x194)](_0x426a8b);}}),PluginManager[_0x19f4c3(0x17b)](pluginData[_0x19f4c3(0xfc)],_0x19f4c3(0x10f),_0x3e44b9=>{const _0x567d1b=_0x19f4c3;VisuMZ['ConvertParams'](_0x3e44b9,_0x3e44b9);const _0x379a5f=_0x3e44b9['Keys'][_0x567d1b(0x188)](_0x89ca83=>_0x89ca83[_0x567d1b(0x11c)]()['trim']());for(const _0x57a886 of _0x379a5f){$gameSystem[_0x567d1b(0x144)](_0x57a886);}}),PluginManager[_0x19f4c3(0x17b)](pluginData['name'],'BattleRemoveAllGauge',_0x401e9f=>{const _0x297261=_0x19f4c3;VisuMZ['ConvertParams'](_0x401e9f,_0x401e9f);const _0x4875d7=$gameSystem['_battleVisibleVariableGauges']||[];for(const _0x7f8af6 of _0x4875d7){_0x297261(0x173)!==_0x297261(0x1a4)?$gameSystem[_0x297261(0x144)](_0x7f8af6):_0x66dd3c=_0x52107f[_0x297261(0xc2)](_0x5d84de[_0x297261(0x103)]());}}),PluginManager[_0x19f4c3(0x17b)](pluginData[_0x19f4c3(0xfc)],_0x19f4c3(0x1ae),_0x33bca5=>{const _0x51df96=_0x19f4c3;VisuMZ[_0x51df96(0x147)](_0x33bca5,_0x33bca5);const _0x148e54=_0x33bca5['Keys'][_0x51df96(0x188)](_0x32e5a7=>_0x32e5a7[_0x51df96(0x11c)]()['trim']());for(const _0x38ca10 of _0x148e54){_0x51df96(0x15b)==='qCbIg'?_0x140bbd['removeBattleVisibleVariableGauge'](_0x53642a):$gameSystem[_0x51df96(0x1b5)](_0x38ca10);}}),PluginManager['registerCommand'](pluginData[_0x19f4c3(0xfc)],_0x19f4c3(0x164),_0x2888f4=>{const _0x5a94c4=_0x19f4c3;VisuMZ['ConvertParams'](_0x2888f4,_0x2888f4);const _0x717c9a=_0x2888f4['Keys'][_0x5a94c4(0x188)](_0x4afcc4=>_0x4afcc4[_0x5a94c4(0x11c)]()[_0x5a94c4(0x100)]());for(const _0x371a1f of _0x717c9a){$gameSystem[_0x5a94c4(0x10e)](_0x371a1f);}}),PluginManager['registerCommand'](pluginData[_0x19f4c3(0xfc)],_0x19f4c3(0x14f),_0x13c25e=>{const _0x596e99=_0x19f4c3;VisuMZ[_0x596e99(0x147)](_0x13c25e,_0x13c25e);const _0x1f78f4=$gameSystem['_mapVisibleVariableGauges']||[];for(const _0x21ae7c of _0x1f78f4){$gameSystem[_0x596e99(0x10e)](_0x21ae7c);}}),PluginManager[_0x19f4c3(0x17b)](pluginData[_0x19f4c3(0xfc)],_0x19f4c3(0x19d),_0x2048f1=>{const _0x4bd982=_0x19f4c3;VisuMZ[_0x4bd982(0x147)](_0x2048f1,_0x2048f1);const _0x32f587=$gameSystem[_0x4bd982(0x103)]()||[];for(const _0x117a6a of _0x32f587){SceneManager[_0x4bd982(0xbd)][_0x4bd982(0xba)](_0x117a6a);}}),PluginManager[_0x19f4c3(0x17b)](pluginData[_0x19f4c3(0xfc)],'RefreshTargetGauges',_0x38144e=>{const _0x4758bd=_0x19f4c3;VisuMZ['ConvertParams'](_0x38144e,_0x38144e);const _0x4203e2=_0x38144e['Keys'][_0x4758bd(0x188)](_0x35a0fd=>_0x35a0fd['toUpperCase']()[_0x4758bd(0x100)]());for(const _0x46bfe4 of _0x4203e2){SceneManager[_0x4758bd(0xbd)][_0x4758bd(0xba)](_0x46bfe4);}}),PluginManager[_0x19f4c3(0x17b)](pluginData[_0x19f4c3(0xfc)],_0x19f4c3(0xc0),_0x1ebf28=>{const _0x44067a=_0x19f4c3;VisuMZ[_0x44067a(0x147)](_0x1ebf28,_0x1ebf28);const _0x38c97d=_0x1ebf28['Visiblility'];$gameSystem[_0x44067a(0xf1)](_0x38c97d);}),VisuMZ['VariableGauges'][_0x19f4c3(0x17e)]={'HideGauges':/<HIDE VARIABLE (?:GAUGE|GAUGES)>/i,'ForcedGauges':/<(?:FORCE|FORCED) VARIABLE (?:GAUGE|GAUGES):[ ](.*)>/i,'VisibleGauges':/<(?:EXTRA|VISIBLE) VARIABLE (?:GAUGE|GAUGES):[ ](.*)>/i},VisuMZ[_0x19f4c3(0x16b)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x19f4c3(0xc3)][_0x19f4c3(0x1b1)],Scene_Boot['prototype'][_0x19f4c3(0x1b1)]=function(){const _0x1cf32d=_0x19f4c3;VisuMZ['VariableGauges']['Scene_Boot_onDatabaseLoaded'][_0x1cf32d(0x13a)](this),this[_0x1cf32d(0xd9)]();},VisuMZ[_0x19f4c3(0x16b)]['GaugeKey']={},VisuMZ[_0x19f4c3(0x16b)][_0x19f4c3(0x121)]=[],VisuMZ[_0x19f4c3(0x16b)]['DefaultBattleVisibleGauges']=[],VisuMZ['VariableGauges'][_0x19f4c3(0x111)]={},Scene_Boot['prototype'][_0x19f4c3(0xd9)]=function(){const _0x136f49=_0x19f4c3,_0x10e744=VisuMZ[_0x136f49(0x16b)][_0x136f49(0x18e)][_0x136f49(0xc4)];for(const _0x2972e5 of _0x10e744){if(!_0x2972e5)continue;const _0x4d2549=_0x2972e5[_0x136f49(0x109)][_0x136f49(0x11c)]()['trim']();if(_0x4d2549===_0x136f49(0x137)&&Utils[_0x136f49(0x116)](_0x136f49(0x13f))){let _0x495c04=_0x136f49(0x127);_0x495c04+='Please\x20change\x20this\x20to\x20an\x20appropriate\x20key\x20name.',alert(_0x495c04),SceneManager[_0x136f49(0x153)]();}if(VisuMZ[_0x136f49(0x16b)]['GaugeKey'][_0x4d2549])continue;VisuMZ['VariableGauges'][_0x136f49(0x142)][_0x4d2549]=_0x2972e5;if(_0x2972e5[_0x136f49(0x156)]){if(_0x136f49(0x1a9)===_0x136f49(0x1a9))VisuMZ[_0x136f49(0x16b)][_0x136f49(0x121)][_0x136f49(0xff)](_0x4d2549);else{_0x49c050['prototype'][_0x136f49(0xe0)][_0x136f49(0x13a)](this);const _0x4cbb4c=this[_0x136f49(0x1b0)]();_0x4cbb4c&&_0x4cbb4c[_0x136f49(0xe9)]===this['_key']&&_0x4cbb4c['setKey'](null);}}_0x2972e5[_0x136f49(0x1ba)]&&(_0x136f49(0x1ac)===_0x136f49(0x1ac)?VisuMZ['VariableGauges'][_0x136f49(0x189)][_0x136f49(0xff)](_0x4d2549):(_0x253ecc(_0x136f49(0x14b)['format'](_0x3736a7,_0x4fa1cb)),_0x140ae4['exit']()));const _0xcf92ea=_0x2972e5['VariableID'];VisuMZ[_0x136f49(0x16b)][_0x136f49(0x111)][_0xcf92ea]=VisuMZ[_0x136f49(0x16b)]['VariableReference'][_0xcf92ea]||[],VisuMZ['VariableGauges'][_0x136f49(0x111)][_0xcf92ea]['push'](_0x4d2549);}},ColorManager['getColor']=function(_0x2fa974){const _0x2a597e=_0x19f4c3;return _0x2fa974=String(_0x2fa974),_0x2fa974[_0x2a597e(0x18f)](/#(.*)/i)?_0x2a597e(0xbc)[_0x2a597e(0x160)](String(RegExp['$1'])):this[_0x2a597e(0xcc)](Number(_0x2fa974));},SceneManager['isSceneBattle']=function(){const _0x371823=_0x19f4c3;return this[_0x371823(0xbd)]&&this['_scene']['constructor']===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x2c86ac=_0x19f4c3;return this[_0x2c86ac(0xbd)]&&this[_0x2c86ac(0xbd)][_0x2c86ac(0x1a3)]===Scene_Map;},VisuMZ[_0x19f4c3(0x16b)]['Game_System_initialize']=Game_System[_0x19f4c3(0xc3)][_0x19f4c3(0x102)],Game_System['prototype'][_0x19f4c3(0x102)]=function(){const _0xdaa8c9=_0x19f4c3;VisuMZ['VariableGauges']['Game_System_initialize'][_0xdaa8c9(0x13a)](this),this[_0xdaa8c9(0x182)]();},Game_System['prototype'][_0x19f4c3(0x182)]=function(){const _0x4bc64f=_0x19f4c3;this['_mapVisibleVariableGauges']=VisuMZ['VariableGauges'][_0x4bc64f(0x121)][_0x4bc64f(0x1b3)](),this[_0x4bc64f(0xfe)]=VisuMZ[_0x4bc64f(0x16b)][_0x4bc64f(0x189)][_0x4bc64f(0x1b3)](),this['_variableGaugeVisibile']=!![];},Game_System[_0x19f4c3(0xc3)][_0x19f4c3(0x103)]=function(){const _0x1a4fa8=_0x19f4c3;if(this['_mapVisibleVariableGauges']===undefined)this[_0x1a4fa8(0x182)]();if(this[_0x1a4fa8(0xfe)]===undefined)this[_0x1a4fa8(0x182)]();if(SceneManager['isSceneMap']()){let _0x4f4158=this['_mapVisibleVariableGauges'][_0x1a4fa8(0x1b3)]();if($gameMap){if(_0x1a4fa8(0x158)!=='rMTnD'){const _0x5c92a2=_0x15f84a[_0x1a4fa8(0x16b)]['RegExp'],_0x44471c=_0x43a042['note']||'';if(_0x44471c[_0x1a4fa8(0x18f)](_0x5c92a2[_0x1a4fa8(0x130)])){const _0x415377=_0x105e79(_0x67557f['$1'])[_0x1a4fa8(0x1b4)](',')[_0x1a4fa8(0x188)](_0x4108ca=>_0x4108ca[_0x1a4fa8(0x11c)]()[_0x1a4fa8(0x100)]());return _0x415377;}}else{if($gameMap[_0x1a4fa8(0xd7)]()){if(_0x1a4fa8(0x1af)!==_0x1a4fa8(0x177))return[];else this[_0x1a4fa8(0x102)](...arguments);}else{if($gameMap[_0x1a4fa8(0x172)]()['length']>0x0){if('IdPjC'!==_0x1a4fa8(0x187)){if(this[_0x1a4fa8(0x10d)]===_0x1f74b0)this[_0x1a4fa8(0x182)]();_0x2f9d25=_0x448f8d[_0x1a4fa8(0x11c)]()[_0x1a4fa8(0x100)]();if(!_0x265c41[_0x1a4fa8(0x16b)][_0x1a4fa8(0x142)][_0x2501d7])return;!this[_0x1a4fa8(0x10d)][_0x1a4fa8(0x19b)](_0x509758)&&(this[_0x1a4fa8(0x10d)][_0x1a4fa8(0xff)](_0x577e57),_0x43528b['isSceneMap']()&&_0x2014a9['_scene'][_0x1a4fa8(0x1a8)](_0x630112));}else return $gameMap[_0x1a4fa8(0x172)]();}}if($gameMap['visibleVariableGauges']()['length']>0x0){if(_0x1a4fa8(0xbf)!==_0x1a4fa8(0xdf))_0x4f4158=_0x4f4158[_0x1a4fa8(0xc2)]($gameMap[_0x1a4fa8(0x103)]());else{const _0x53aac5=_0x359519[_0x1a4fa8(0x16b)][_0x1a4fa8(0x17e)],_0x21f96e=_0x197ec7['note']||'';if(_0x21f96e['match'](_0x53aac5['VisibleGauges'])){const _0x520d3a=_0x16e4d4(_0x4f06e5['$1'])[_0x1a4fa8(0x1b4)](',')[_0x1a4fa8(0x188)](_0xe9babc=>_0xe9babc[_0x1a4fa8(0x11c)]()[_0x1a4fa8(0x100)]());return _0x520d3a;}}}}}return _0x4f4158[_0x1a4fa8(0xd8)]((_0x41492b,_0x369643,_0x372da0)=>_0x372da0[_0x1a4fa8(0x132)](_0x41492b)===_0x369643);}else{if(SceneManager[_0x1a4fa8(0xe5)]()){if(_0x1a4fa8(0x162)==='TrFcB')return this['_battleVisibleVariableGauges'];else this[_0x1a4fa8(0x14e)]=!![];}else{if(_0x1a4fa8(0x166)!=='DUKZC'){const _0x113752=_0x4a96a2(_0x4c0fac['$1']);_0x113752<_0x4b36de?(_0x101ba3(_0x1a4fa8(0x146)['format'](_0x45dff8,_0x113752,_0x1fc04f)),_0x1f7b1d[_0x1a4fa8(0x153)]()):_0x2da1ff=_0x135ee5[_0x1a4fa8(0x163)](_0x113752,_0x1f4150);}else return[];}}},Game_System[_0x19f4c3(0xc3)][_0x19f4c3(0x135)]=function(_0x5e5514){const _0xfd75c1=_0x19f4c3;return _0x5e5514=_0x5e5514['toUpperCase']()[_0xfd75c1(0x100)](),this['visibleVariableGauges']()['includes'](_0x5e5514);},Game_System[_0x19f4c3(0xc3)][_0x19f4c3(0x1b5)]=function(_0x12f7c3){const _0x4c0680=_0x19f4c3;if(this['_mapVisibleVariableGauges']===undefined)this[_0x4c0680(0x182)]();_0x12f7c3=_0x12f7c3[_0x4c0680(0x11c)]()['trim']();if(!VisuMZ['VariableGauges'][_0x4c0680(0x142)][_0x12f7c3])return;if(!this[_0x4c0680(0x10d)][_0x4c0680(0x19b)](_0x12f7c3)){if(_0x4c0680(0xf0)===_0x4c0680(0x175))return _0x2b0477[_0x4c0680(0x16b)][_0x4c0680(0x142)][this['_key']];else this[_0x4c0680(0x10d)][_0x4c0680(0xff)](_0x12f7c3),SceneManager[_0x4c0680(0xcb)]()&&SceneManager[_0x4c0680(0xbd)][_0x4c0680(0x1a8)](_0x12f7c3);}},Game_System['prototype'][_0x19f4c3(0x10e)]=function(_0x2d1baa){const _0x1332d3=_0x19f4c3;if(this[_0x1332d3(0x10d)]===undefined)this['initVariableGauges']();_0x2d1baa=_0x2d1baa['toUpperCase']()['trim']();if(this[_0x1332d3(0x10d)][_0x1332d3(0x19b)](_0x2d1baa)){this[_0x1332d3(0x10d)][_0x1332d3(0xf5)](_0x2d1baa);if(SceneManager[_0x1332d3(0xcb)]()){if(_0x1332d3(0xe7)!==_0x1332d3(0x151))SceneManager['_scene'][_0x1332d3(0x1b8)](_0x2d1baa);else{_0x135c58[_0x1332d3(0x147)](_0x22eb09,_0x22ffe2);const _0x4f9190=_0x1b6613[_0x1332d3(0x15f)][_0x1332d3(0x188)](_0x456925=>_0x456925[_0x1332d3(0x11c)]()[_0x1332d3(0x100)]());for(const _0x17f638 of _0x4f9190){_0x15affa['removeMapVisibleVariableGauge'](_0x17f638);}}}}},Game_System[_0x19f4c3(0xc3)][_0x19f4c3(0x194)]=function(_0x2e1d15){const _0x36be53=_0x19f4c3;if(this[_0x36be53(0xfe)]===undefined)this[_0x36be53(0x182)]();_0x2e1d15=_0x2e1d15['toUpperCase']()[_0x36be53(0x100)]();if(!VisuMZ[_0x36be53(0x16b)][_0x36be53(0x142)][_0x2e1d15])return;if(!this[_0x36be53(0xfe)][_0x36be53(0x19b)](_0x2e1d15)){if(_0x36be53(0xfa)===_0x36be53(0xfa))this[_0x36be53(0xfe)][_0x36be53(0xff)](_0x2e1d15),SceneManager[_0x36be53(0xe5)]()&&SceneManager['_scene'][_0x36be53(0x1a8)](_0x2e1d15);else{const _0x225c92=this[_0x36be53(0x159)];this[_0x36be53(0x159)]=this[_0x36be53(0x15e)](),this[_0x36be53(0x159)]!==_0x225c92&&(this[_0x36be53(0x159)]?this[_0x36be53(0xf6)]():this[_0x36be53(0xe0)]());}}},Game_System['prototype'][_0x19f4c3(0x144)]=function(_0x11a1e4){const _0xb6e545=_0x19f4c3;if(this['_battleVisibleVariableGauges']===undefined)this[_0xb6e545(0x182)]();_0x11a1e4=_0x11a1e4[_0xb6e545(0x11c)]()[_0xb6e545(0x100)]();if(this[_0xb6e545(0xfe)][_0xb6e545(0x19b)](_0x11a1e4)){this['_battleVisibleVariableGauges']['remove'](_0x11a1e4);if(SceneManager[_0xb6e545(0xe5)]()){if(_0xb6e545(0x13d)!==_0xb6e545(0x195))SceneManager[_0xb6e545(0xbd)]['removeVariableGauge'](_0x11a1e4);else{const _0x38f43f=this['getGaugeRate'](),_0x17d5e2=_0x568132[_0xb6e545(0x15a)](this[_0xb6e545(0x168)]()[_0xb6e545(0xc9)]),_0x406087=_0x198870[_0xb6e545(0x15a)](this[_0xb6e545(0x168)]()[_0xb6e545(0x171)]),_0x46bc29=this[_0xb6e545(0x12e)](),_0x36bff6=_0x46bc29?_0x25af76[_0xb6e545(0x17c)]((_0x466601['width']-0x2)*_0x38f43f):_0x5d29f8[_0xb6e545(0x12a)]-0x2,_0x1c054b=_0x46bc29?_0x496aaa['height']-0x2:_0x50e6a1[_0xb6e545(0x17c)]((_0x430635[_0xb6e545(0x161)]-0x2)*_0x38f43f),_0x52eae4=_0x46bc29?0x1:_0x3b0816['height']-0x1-_0x1c054b,_0x5f34ff=_0x46bc29?_0x17d5e2:_0x406087,_0x50c1a7=_0x46bc29?_0x406087:_0x17d5e2;this['bitmap'][_0xb6e545(0x129)](0x1,_0x52eae4,_0x36bff6,_0x1c054b,_0x5f34ff,_0x50c1a7,!_0x46bc29);}}}},Game_System['prototype'][_0x19f4c3(0xce)]=function(){const _0x227d4a=_0x19f4c3;if(this[_0x227d4a(0x179)]===undefined)this['initVariableGauges']();return this['_variableGaugeVisibile'];},Game_System[_0x19f4c3(0xc3)][_0x19f4c3(0xf1)]=function(_0x1665e9){const _0x5c741d=_0x19f4c3;if(this[_0x5c741d(0x179)]===undefined)this[_0x5c741d(0x182)]();this['_variableGaugeVisibile']=_0x1665e9;const _0xe65233=SceneManager[_0x5c741d(0xbd)];_0xe65233&&_0xe65233[_0x5c741d(0x176)]();},VisuMZ[_0x19f4c3(0x16b)]['Game_Variables_setValue']=Game_Variables[_0x19f4c3(0xc3)][_0x19f4c3(0x18a)],Game_Variables[_0x19f4c3(0xc3)][_0x19f4c3(0x18a)]=function(_0x53c648,_0x31b361){const _0x39d32a=_0x19f4c3;VisuMZ[_0x39d32a(0x16b)][_0x39d32a(0x11e)][_0x39d32a(0x13a)](this,_0x53c648,_0x31b361),this[_0x39d32a(0x122)](_0x53c648);},Game_Variables[_0x19f4c3(0xc3)][_0x19f4c3(0x122)]=function(_0x1e49b1){const _0x4b3011=_0x19f4c3;if(!SceneManager['isSceneBattle']()&&!SceneManager[_0x4b3011(0xcb)]())return;if(VisuMZ[_0x4b3011(0x16b)][_0x4b3011(0x111)][_0x1e49b1]){if(_0x4b3011(0xe3)!==_0x4b3011(0xdd)){const _0xc16f73=VisuMZ[_0x4b3011(0x16b)]['VariableReference'][_0x1e49b1];for(const _0x1f3e2c of _0xc16f73){SceneManager[_0x4b3011(0xbd)][_0x4b3011(0xba)](_0x1f3e2c);}}else(this[_0x4b3011(0x114)][_0x4b3011(0x19f)][_0x4b3011(0x12a)]!==_0xe01246[_0x4b3011(0x161)]||this['_verticalGaugeSprite']['bitmap'][_0x4b3011(0x161)]!==_0x1e0f60[_0x4b3011(0x12a)])&&this[_0x4b3011(0x114)]['bitmap'][_0x4b3011(0xf9)](_0x574ff0[_0x4b3011(0x161)],_0x511802[_0x4b3011(0x12a)]);}},Game_Map[_0x19f4c3(0xc3)]['hideVariableGauges']=function(){const _0x1f4952=_0x19f4c3;if($dataMap){const _0x1619ab=VisuMZ[_0x1f4952(0x16b)][_0x1f4952(0x17e)],_0x1e3b78=$dataMap[_0x1f4952(0x150)]||'';if(_0x1e3b78[_0x1f4952(0x18f)](_0x1619ab['HideGauges']))return!![];}return![];},Game_Map[_0x19f4c3(0xc3)]['forcedVariableGauges']=function(){const _0x24a480=_0x19f4c3;if($dataMap){const _0x24e705=VisuMZ['VariableGauges'][_0x24a480(0x17e)],_0x9fe222=$dataMap[_0x24a480(0x150)]||'';if(_0x9fe222[_0x24a480(0x18f)](_0x24e705['ForcedGauges'])){if('kDBxo'===_0x24a480(0xd0)){if(!_0x311089['isSceneBattle']()&&!_0x160396['isSceneMap']())return;if(_0x43d241[_0x24a480(0x16b)][_0x24a480(0x111)][_0x3938f4]){const _0x118c70=_0x526048[_0x24a480(0x16b)][_0x24a480(0x111)][_0x45b1e2];for(const _0x13a297 of _0x118c70){_0x5f536d[_0x24a480(0xbd)]['refreshVariableGauge'](_0x13a297);}}}else{const _0x2de2bf=String(RegExp['$1'])[_0x24a480(0x1b4)](',')['map'](_0x2a0a16=>_0x2a0a16['toUpperCase']()[_0x24a480(0x100)]());return _0x2de2bf;}}}return[];},Game_Map[_0x19f4c3(0xc3)][_0x19f4c3(0x103)]=function(){const _0xc383bc=_0x19f4c3;if($dataMap){const _0x291337=VisuMZ[_0xc383bc(0x16b)]['RegExp'],_0x26da6c=$dataMap[_0xc383bc(0x150)]||'';if(_0x26da6c[_0xc383bc(0x18f)](_0x291337[_0xc383bc(0x105)])){if(_0xc383bc(0xcf)!==_0xc383bc(0x134)){const _0x1c8c58=String(RegExp['$1'])[_0xc383bc(0x1b4)](',')[_0xc383bc(0x188)](_0x10bdf5=>_0x10bdf5[_0xc383bc(0x11c)]()[_0xc383bc(0x100)]());return _0x1c8c58;}else this[_0xc383bc(0x19f)]['clear'](),this['bitmap'][_0xc383bc(0x131)](_0x2a0c5f,0x0,0x0,_0x37ab81['width'],_0x218b85['height'],_0x4e55b2,_0x1d7880,_0x314cf0,_0x44262f);}}return[];},VisuMZ[_0x19f4c3(0x16b)]['Scene_Base_createWindowLayer']=Scene_Base['prototype'][_0x19f4c3(0x169)],Scene_Base['prototype'][_0x19f4c3(0x169)]=function(){const _0x4426d8=_0x19f4c3;this[_0x4426d8(0x167)](),this[_0x4426d8(0xbe)](),this[_0x4426d8(0x176)](),VisuMZ['VariableGauges'][_0x4426d8(0x1ad)][_0x4426d8(0x13a)](this),this[_0x4426d8(0x1a1)]();},Scene_Base['prototype'][_0x19f4c3(0x167)]=function(){const _0x3c461a=_0x19f4c3;this['_variableGaugeLayer']=new Sprite(),this[_0x3c461a(0xfd)](this['_variableGaugeLayer']);},Scene_Base[_0x19f4c3(0xc3)][_0x19f4c3(0xbe)]=function(){const _0x12d976=_0x19f4c3,_0x5e3334=$gameSystem[_0x12d976(0x103)]();for(let _0x21f41e of _0x5e3334){_0x21f41e=_0x21f41e[_0x12d976(0x11c)]()['trim']();if(!VisuMZ[_0x12d976(0x16b)][_0x12d976(0x142)][_0x21f41e])continue;this[_0x12d976(0x1a8)](_0x21f41e);}},Scene_Base[_0x19f4c3(0xc3)][_0x19f4c3(0x1a8)]=function(_0xfe0654){const _0x5c228a=_0x19f4c3;_0xfe0654=_0xfe0654[_0x5c228a(0x11c)]()[_0x5c228a(0x100)]();if($gameMap){if(_0x5c228a(0x1a0)!==_0x5c228a(0xc8)){if($gameMap[_0x5c228a(0xd7)]())return;if($gameMap[_0x5c228a(0x172)]()[_0x5c228a(0x14d)]>0x0){if(_0x5c228a(0xe6)===_0x5c228a(0x19a)){if(this['_battleVisibleVariableGauges']===_0x5e0509)this['initVariableGauges']();_0x41d12a=_0x17feb1[_0x5c228a(0x11c)]()[_0x5c228a(0x100)]();if(!_0x5e2d39['VariableGauges'][_0x5c228a(0x142)][_0x482817])return;!this['_battleVisibleVariableGauges'][_0x5c228a(0x19b)](_0x1d8222)&&(this[_0x5c228a(0xfe)][_0x5c228a(0xff)](_0x2a8efb),_0x58f966[_0x5c228a(0xe5)]()&&_0x22c046[_0x5c228a(0xbd)][_0x5c228a(0x1a8)](_0x1f2649));}else{if(!$gameMap[_0x5c228a(0x172)]()[_0x5c228a(0x19b)](_0xfe0654))return;}}}else return _0x3075db[_0x5c228a(0xb9)][_0x5c228a(0x18e)]['vertStyle'][_0x5c228a(0x12d)]()[_0x5c228a(0x100)]();}const _0x169413=this[_0x5c228a(0x12f)]['children'],_0x40c25b=_0x169413[_0x5c228a(0xdb)](_0x12a5d0=>_0x12a5d0[_0x5c228a(0xe9)]===_0xfe0654);if(!_0x40c25b){if(_0x5c228a(0x196)==='eVySd'){const _0x51da46=new Sprite_VariableGauge(_0xfe0654);this['_variableGaugeLayer'][_0x5c228a(0xfd)](_0x51da46);}else{let _0x2235a8=_0x5c228a(0x127);_0x2235a8+=_0x5c228a(0x126),_0x5ab758(_0x2235a8),_0x4de276['exit']();}}},Scene_Base[_0x19f4c3(0xc3)][_0x19f4c3(0xba)]=function(_0x1faf2a){const _0x1827b4=_0x19f4c3;_0x1faf2a=_0x1faf2a[_0x1827b4(0x11c)]()[_0x1827b4(0x100)]();const _0x2b599c=this[_0x1827b4(0x12f)][_0x1827b4(0x118)],_0x42ee85=_0x2b599c[_0x1827b4(0xdb)](_0x4f334c=>_0x4f334c[_0x1827b4(0xe9)]===_0x1faf2a);_0x42ee85&&(_0x1827b4(0x16a)==='vGpgp'?this[_0x1827b4(0x12f)]&&(this[_0x1827b4(0x12f)][_0x1827b4(0x139)]=_0x4a2d96[_0x1827b4(0xce)]()):_0x42ee85['refresh']());},Scene_Base['prototype'][_0x19f4c3(0x1b8)]=function(_0x1a9f28){const _0x47b125=_0x19f4c3;_0x1a9f28=_0x1a9f28[_0x47b125(0x11c)]()[_0x47b125(0x100)]();const _0x45397c=this[_0x47b125(0x12f)][_0x47b125(0x118)],_0xb49825=_0x45397c[_0x47b125(0xdb)](_0x2fba1b=>_0x2fba1b[_0x47b125(0xe9)]===_0x1a9f28);_0xb49825&&this[_0x47b125(0x12f)][_0x47b125(0x15c)](_0xb49825);},Scene_Base[_0x19f4c3(0xc3)][_0x19f4c3(0x1a1)]=function(){const _0x598e9a=_0x19f4c3;this['_variableGaugeTooltipWindow']=new Window_VariableGaugeTooltip(),this['addChild'](this[_0x598e9a(0x148)]);},Scene_Base['prototype'][_0x19f4c3(0x176)]=function(){const _0x132e26=_0x19f4c3;this['_variableGaugeLayer']&&(this[_0x132e26(0x12f)]['visible']=$gameSystem[_0x132e26(0xce)]());},VisuMZ[_0x19f4c3(0x16b)][_0x19f4c3(0x19e)]=Scene_Battle['prototype'][_0x19f4c3(0x197)],Scene_Battle['prototype'][_0x19f4c3(0x197)]=function(_0x2caad1){const _0x1c4583=_0x19f4c3;VisuMZ['VariableGauges'][_0x1c4583(0x19e)][_0x1c4583(0x13a)](this,_0x2caad1),this[_0x1c4583(0x12f)]&&(this[_0x1c4583(0x12f)]['visible']=_0x2caad1&&$gameSystem[_0x1c4583(0xce)]());};function Sprite_VariableGauge(){this['initialize'](...arguments);}Sprite_VariableGauge[_0x19f4c3(0xc3)]=Object[_0x19f4c3(0x198)](Sprite_Clickable[_0x19f4c3(0xc3)]),Sprite_VariableGauge['prototype'][_0x19f4c3(0x1a3)]=Sprite_VariableGauge,Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x102)]=function(_0x26f339){const _0x5e026d=_0x19f4c3;Sprite_Clickable[_0x5e026d(0xc3)][_0x5e026d(0x102)]['call'](this),this[_0x5e026d(0xe9)]=_0x26f339['toUpperCase']()['trim'](),this['_requestRefresh']=![],this['createVerticalGaugeSprite'](),this[_0x5e026d(0x1b2)](),this[_0x5e026d(0x1a2)]();},Sprite_VariableGauge[_0x19f4c3(0xc3)]['settings']=function(){const _0x3ce753=_0x19f4c3;return VisuMZ[_0x3ce753(0x16b)][_0x3ce753(0x142)][this[_0x3ce753(0xe9)]];},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x12e)]=function(){const _0x1a79a4=_0x19f4c3;return this['settings']()[_0x1a79a4(0xdc)]===_0x1a79a4(0x123);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0xd3)]=function(){const _0x56b994=_0x19f4c3;Sprite_Clickable[_0x56b994(0xc3)][_0x56b994(0xd3)][_0x56b994(0x13a)](this),this[_0x56b994(0x10c)](),this['updateIconSpriteFrame'](),this[_0x56b994(0x180)]();},Sprite_VariableGauge[_0x19f4c3(0xc3)]['createIconSprite']=function(){const _0x514a47=_0x19f4c3;this[_0x514a47(0xb7)]=new Sprite(),this['addChild'](this[_0x514a47(0xb7)]),this[_0x514a47(0xb7)][_0x514a47(0x19f)]=ImageManager[_0x514a47(0x12c)](_0x514a47(0x15d)),this[_0x514a47(0x11f)]();},Sprite_VariableGauge['prototype'][_0x19f4c3(0x11f)]=function(){const _0x62330b=_0x19f4c3;this[_0x62330b(0x157)](),this[_0x62330b(0x120)]();},Sprite_VariableGauge['prototype'][_0x19f4c3(0x157)]=function(){const _0x267bd0=_0x19f4c3;if(!this[_0x267bd0(0xb7)])return;const _0x3548d2=this[_0x267bd0(0x168)]()['IconBuffer'];this['isHorizontal']()?(this['_iconSprite']['x']=-ImageManager[_0x267bd0(0x110)]-_0x3548d2,this[_0x267bd0(0xb7)]['y']=Math[_0x267bd0(0x1a6)]((this['bitmap'][_0x267bd0(0x161)]-ImageManager[_0x267bd0(0x13e)])/0x2)):(this['_iconSprite']['x']=Math[_0x267bd0(0x1a6)]((this['bitmap'][_0x267bd0(0x12a)]-ImageManager[_0x267bd0(0x110)])/0x2),this[_0x267bd0(0xb7)]['y']=this['bitmap']['height']+_0x3548d2);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x120)]=function(){const _0x2ce4bb=_0x19f4c3;if(!this['_iconSprite'])return;if(this[_0x2ce4bb(0x191)]===this['settings']()[_0x2ce4bb(0x193)])return;this[_0x2ce4bb(0x191)]=this[_0x2ce4bb(0x168)]()[_0x2ce4bb(0x193)];const _0x5ef65e=ImageManager['iconWidth'],_0x1d5789=ImageManager[_0x2ce4bb(0x13e)],_0x4824f4=this['_iconIndex']%0x10*_0x5ef65e,_0x1191ac=Math['floor'](this['_iconIndex']/0x10)*_0x1d5789;this[_0x2ce4bb(0xb7)][_0x2ce4bb(0x1a5)](_0x4824f4,_0x1191ac,_0x5ef65e,_0x1d5789);},Sprite_VariableGauge['prototype'][_0x19f4c3(0xd4)]=function(){const _0x44f492=_0x19f4c3;this[_0x44f492(0x14e)]=!![];},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x10c)]=function(){const _0x397bd5=_0x19f4c3;if(!this[_0x397bd5(0x14e)])return;this[_0x397bd5(0x1b2)](),this[_0x397bd5(0x14e)]=![];},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x1b2)]=function(){const _0x583295=_0x19f4c3,_0x198794=this['settings']()[_0x583295(0xde)][_0x583295(0x13a)](this);this['adjustPosition'](_0x198794),this[_0x583295(0xf4)](_0x198794),this['drawGauge'](_0x198794);},Sprite_VariableGauge[_0x19f4c3(0xc3)]['adjustPosition']=function(_0x3ad3cd){this['x']=_0x3ad3cd['x'],this['y']=_0x3ad3cd['y'];},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0xf4)]=function(_0x9b1c5c){const _0x302c4b=_0x19f4c3;if(this[_0x302c4b(0x19f)]){if(_0x302c4b(0xeb)!=='XPRIK')return this[_0x302c4b(0xfe)];else(this['bitmap'][_0x302c4b(0x12a)]!==_0x9b1c5c[_0x302c4b(0x12a)]||this[_0x302c4b(0x19f)][_0x302c4b(0x161)]!==_0x9b1c5c[_0x302c4b(0x161)])&&(this['bitmap'][_0x302c4b(0xf9)](_0x9b1c5c[_0x302c4b(0x12a)],_0x9b1c5c['height']),this[_0x302c4b(0x11f)]());}else this['bitmap']=new Bitmap(_0x9b1c5c[_0x302c4b(0x12a)],_0x9b1c5c[_0x302c4b(0x161)]);this[_0x302c4b(0x186)](_0x9b1c5c);},Sprite_VariableGauge[_0x19f4c3(0xc3)]['getGaugeRate']=function(){const _0x141871=_0x19f4c3,_0x2a06ee=this[_0x141871(0x168)]()[_0x141871(0xea)];let _0x2de41c=$gameVariables[_0x141871(0xc7)](_0x2a06ee)||0x0;if(typeof _0x2de41c!==_0x141871(0x152))_0x2de41c=0x0;const _0x39e387=this[_0x141871(0x168)]()[_0x141871(0x1aa)][_0x141871(0x13a)](this),_0x4e4086=(_0x2de41c/_0x39e387)[_0x141871(0x16e)](0x0,0x1);return _0x4e4086;},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x183)]=function(_0x399af9){const _0x462b93=_0x19f4c3,_0x4e48c2=this[_0x462b93(0x1ab)]();if(this['_lastRate']===_0x4e48c2)return;this[_0x462b93(0x199)]=_0x4e48c2,this[_0x462b93(0x1b9)]()!==''?this[_0x462b93(0x131)](_0x399af9):(this[_0x462b93(0x143)](_0x399af9),this['drawGaugeFront'](_0x399af9));},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x143)]=function(_0xdf44ea){const _0x27e981=_0x19f4c3,_0x35a0bb=ColorManager[_0x27e981(0xd1)]();this[_0x27e981(0x19f)]['fillRect'](0x0,0x0,_0xdf44ea[_0x27e981(0x12a)],_0xdf44ea[_0x27e981(0x161)],_0x35a0bb);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x141)]=function(_0x304e66){const _0x2fdad7=_0x19f4c3,_0x2c1eab=this[_0x2fdad7(0x1ab)](),_0x14548d=ColorManager[_0x2fdad7(0x15a)](this[_0x2fdad7(0x168)]()['Color1']),_0x122ece=ColorManager['getColor'](this[_0x2fdad7(0x168)]()[_0x2fdad7(0x171)]),_0x5d65ac=this[_0x2fdad7(0x12e)](),_0x27b412=_0x5d65ac?Math[_0x2fdad7(0x17c)]((_0x304e66[_0x2fdad7(0x12a)]-0x2)*_0x2c1eab):_0x304e66[_0x2fdad7(0x12a)]-0x2,_0x1c1889=_0x5d65ac?_0x304e66[_0x2fdad7(0x161)]-0x2:Math[_0x2fdad7(0x17c)]((_0x304e66['height']-0x2)*_0x2c1eab),_0x1dc6bc=_0x5d65ac?0x1:_0x304e66[_0x2fdad7(0x161)]-0x1-_0x1c1889,_0x31d58a=_0x5d65ac?_0x14548d:_0x122ece,_0x2b6386=_0x5d65ac?_0x122ece:_0x14548d;this[_0x2fdad7(0x19f)][_0x2fdad7(0x129)](0x1,_0x1dc6bc,_0x27b412,_0x1c1889,_0x31d58a,_0x2b6386,!_0x5d65ac);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x1b9)]=function(){if(!Imported['VisuMZ_3_VisualGaugeStyles'])return'';return this['getStyleName']();},Sprite_VariableGauge['prototype'][_0x19f4c3(0x149)]=function(){const _0x1a901d=_0x19f4c3,_0x50ea46=(this['settings']()[_0x1a901d(0x17d)]??_0x1a901d(0x17f))[_0x1a901d(0x12d)]()[_0x1a901d(0x100)]();if(_0x50ea46===_0x1a901d(0x17f)){if(this['isHorizontal']())return VisuMZ[_0x1a901d(0xb9)]['Settings'][_0x1a901d(0x1b7)]['toLowerCase']()[_0x1a901d(0x100)]();else{if(_0x1a901d(0x155)===_0x1a901d(0x155))return VisuMZ['VisualGaugeStyles'][_0x1a901d(0x18e)]['vertStyle'][_0x1a901d(0x12d)]()[_0x1a901d(0x100)]();else{if(_0x3a51ae[_0x1a901d(0x16c)]())return![];const _0x2c379a=new _0x509fa3(_0x20a145['x'],_0x5dbf35['y']),_0x279102=this[_0x1a901d(0x10a)]['applyInverse'](_0x2c379a);return this[_0x1a901d(0x184)](_0x279102['x'],_0x279102['y']);}}}return _0x50ea46;},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x131)]=function(_0x44c2c3){const _0x23e81e=_0x19f4c3,_0x4d60cd=this[_0x23e81e(0x1b9)]()[_0x23e81e(0x12d)]()[_0x23e81e(0x100)](),_0x17a130=this[_0x23e81e(0x199)][_0x23e81e(0x16e)](0x0,0x1),_0x326f1a=this['settings']()[_0x23e81e(0x1aa)][_0x23e81e(0x13a)](this);VisuMZ[_0x23e81e(0xb9)][_0x23e81e(0x101)]=_0x326f1a||0x64;const _0x14598d=ColorManager[_0x23e81e(0xd1)](),_0x3006d9=ColorManager[_0x23e81e(0x15a)](this[_0x23e81e(0x168)]()[_0x23e81e(0xc9)]),_0x412a75=ColorManager['getColor'](this['settings']()['Color2']);if(this['isHorizontal']())this['bitmap'][_0x23e81e(0x104)](),this[_0x23e81e(0x19f)][_0x23e81e(0x131)](_0x4d60cd,0x0,0x0,_0x44c2c3['width'],_0x44c2c3['height'],_0x17a130,_0x14598d,_0x3006d9,_0x412a75);else{const _0x50327e=this['_verticalGaugeSprite'][_0x23e81e(0x19f)];_0x50327e['clear'](),_0x50327e[_0x23e81e(0x131)](_0x4d60cd,0x0,0x0,_0x44c2c3[_0x23e81e(0x161)],_0x44c2c3[_0x23e81e(0x12a)],_0x17a130,_0x14598d,_0x3006d9,_0x412a75);}},Sprite_VariableGauge[_0x19f4c3(0xc3)]['createVerticalGaugeSprite']=function(){const _0x1f5f90=_0x19f4c3;this[_0x1f5f90(0x114)]=new Sprite(),this[_0x1f5f90(0xfd)](this['_verticalGaugeSprite']),this[_0x1f5f90(0x114)][_0x1f5f90(0x170)]['x']=0x0,this[_0x1f5f90(0x114)][_0x1f5f90(0x170)]['y']=0.5,this['_verticalGaugeSprite'][_0x1f5f90(0xe1)]=-0x5a;},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x186)]=function(_0x56bfff){const _0x1b4270=_0x19f4c3;if(!this[_0x1b4270(0x114)])return;this[_0x1b4270(0x114)][_0x1b4270(0x19f)]?_0x1b4270(0x165)===_0x1b4270(0x14a)?this[_0x1b4270(0xf6)]():(this[_0x1b4270(0x114)]['bitmap'][_0x1b4270(0x12a)]!==_0x56bfff[_0x1b4270(0x161)]||this[_0x1b4270(0x114)]['bitmap'][_0x1b4270(0x161)]!==_0x56bfff['width'])&&this['_verticalGaugeSprite'][_0x1b4270(0x19f)][_0x1b4270(0xf9)](_0x56bfff[_0x1b4270(0x161)],_0x56bfff[_0x1b4270(0x12a)]):this[_0x1b4270(0x114)]['bitmap']=new Bitmap(_0x56bfff[_0x1b4270(0x161)],_0x56bfff[_0x1b4270(0x12a)]);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x180)]=function(){const _0x24e0f5=_0x19f4c3;if(!this['_verticalGaugeSprite'])return;this['_verticalGaugeSprite']['x']=this[_0x24e0f5(0x12a)]/0x2,this['_verticalGaugeSprite']['y']=this['height'];},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x1b0)]=function(){const _0x4b751e=_0x19f4c3;return SceneManager['_scene'][_0x4b751e(0x148)];},Sprite_VariableGauge['prototype'][_0x19f4c3(0xf6)]=function(){const _0x2dec93=_0x19f4c3;Sprite_Clickable['prototype'][_0x2dec93(0xf6)][_0x2dec93(0x13a)](this);const _0x27390c=this[_0x2dec93(0x1b0)]();_0x27390c&&_0x27390c[_0x2dec93(0x154)](this[_0x2dec93(0xe9)]);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0xe0)]=function(){const _0x484dd2=_0x19f4c3;Sprite_Clickable[_0x484dd2(0xc3)]['onMouseExit']['call'](this);const _0x3fa0c5=this['targetWindow']();_0x3fa0c5&&_0x3fa0c5[_0x484dd2(0xe9)]===this['_key']&&_0x3fa0c5[_0x484dd2(0x154)](null);},Sprite_VariableGauge[_0x19f4c3(0xc3)][_0x19f4c3(0x192)]=function(){const _0x3ebfcc=_0x19f4c3,_0x3199e9=this['_hoverState'];this[_0x3ebfcc(0x159)]=this[_0x3ebfcc(0x15e)](),this[_0x3ebfcc(0x159)]!==_0x3199e9&&(this[_0x3ebfcc(0x159)]?this['onMouseEnter']():this['onMouseExit']());},Sprite_VariableGauge[_0x19f4c3(0xc3)]['isBeingTouched']=function(){const _0x3ff338=_0x19f4c3;if($gameMessage[_0x3ff338(0x16c)]())return![];const _0x32776f=new Point(TouchInput['x'],TouchInput['y']),_0x531325=this[_0x3ff338(0x10a)][_0x3ff338(0x145)](_0x32776f);return this[_0x3ff338(0x184)](_0x531325['x'],_0x531325['y']);};function Window_VariableGaugeTooltip(){this['initialize'](...arguments);}Window_VariableGaugeTooltip[_0x19f4c3(0xc3)]=Object[_0x19f4c3(0x198)](Window_Base[_0x19f4c3(0xc3)]),Window_VariableGaugeTooltip['prototype'][_0x19f4c3(0x1a3)]=Window_VariableGaugeTooltip,Window_VariableGaugeTooltip[_0x19f4c3(0x10b)]=VisuMZ[_0x19f4c3(0x16b)]['Settings'][_0x19f4c3(0xfb)]['Scale'],Window_VariableGaugeTooltip['WINDOW_SKIN_FILENAME']=VisuMZ[_0x19f4c3(0x16b)][_0x19f4c3(0x18e)][_0x19f4c3(0xfb)][_0x19f4c3(0x133)],Window_VariableGaugeTooltip[_0x19f4c3(0x136)]=VisuMZ[_0x19f4c3(0x16b)][_0x19f4c3(0x18e)][_0x19f4c3(0xfb)][_0x19f4c3(0x19c)],Window_VariableGaugeTooltip[_0x19f4c3(0xb6)]=VisuMZ[_0x19f4c3(0x16b)][_0x19f4c3(0x18e)][_0x19f4c3(0xfb)]['OffsetX'],Window_VariableGaugeTooltip[_0x19f4c3(0x138)]=VisuMZ[_0x19f4c3(0x16b)][_0x19f4c3(0x18e)][_0x19f4c3(0xfb)]['OffsetY'],Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0x102)]=function(){const _0x41307c=_0x19f4c3,_0x7622fd=new Rectangle(0x0,0x0,Graphics[_0x41307c(0x12a)],Graphics[_0x41307c(0x161)]);Window_Base[_0x41307c(0xc3)]['initialize'][_0x41307c(0x13a)](this,_0x7622fd),this[_0x41307c(0x190)]['x']=this[_0x41307c(0x190)]['y']=Window_VariableGaugeTooltip[_0x41307c(0x10b)],this[_0x41307c(0x181)](),this[_0x41307c(0xe9)]='';},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0xc1)]=function(){const _0x4ea9a7=_0x19f4c3;this['windowskin']=ImageManager[_0x4ea9a7(0x12c)](Window_VariableGaugeTooltip[_0x4ea9a7(0x107)]);},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)]['updateBackOpacity']=function(){const _0xd0f2a6=_0x19f4c3;this[_0xd0f2a6(0x174)]=Window_VariableGaugeTooltip[_0xd0f2a6(0x136)];},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)]['setKey']=function(_0x4b9b9e){const _0x627ddc=_0x19f4c3;if(this['_key']===_0x4b9b9e)return;if(_0x4b9b9e!==null&&!VisuMZ[_0x627ddc(0x16b)][_0x627ddc(0x142)][_0x4b9b9e])return;this[_0x627ddc(0xe9)]=_0x4b9b9e||'',this['_key']['trim']()['length']>0x0?this[_0x627ddc(0xd4)]():this[_0x627ddc(0x181)]();},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0xd4)]=function(){const _0xba6461=_0x19f4c3;this[_0xba6461(0xbb)]['clear'](),this[_0xba6461(0xcd)]();if(this['_text']['length']>0x0){this[_0xba6461(0x125)]();const _0x52d09f=this[_0xba6461(0xf3)]();this[_0xba6461(0xda)](this[_0xba6461(0x113)],_0x52d09f['x'],_0x52d09f['y'],_0x52d09f[_0xba6461(0x12a)]),this[_0xba6461(0x112)]();}else this['hide']();},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0xe8)]=function(){return![];},Window_VariableGaugeTooltip['prototype']['convertMessageKeywords']=function(_0x4d2036){return _0x4d2036;},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0xec)]=function(){return![];},Window_VariableGaugeTooltip['prototype'][_0x19f4c3(0xcd)]=function(){const _0x1b7b17=_0x19f4c3;this[_0x1b7b17(0x113)]='';if(!this[_0x1b7b17(0xe9)])return;this[_0x1b7b17(0x117)](),this['_text']=this['_text'][_0x1b7b17(0x100)]();},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0x117)]=function(){const _0x29e453=_0x19f4c3,_0x1ff317=VisuMZ[_0x29e453(0x16b)]['GaugeKey'][this['_key']];this['_text']=_0x1ff317[_0x29e453(0x108)]||'';},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0x125)]=function(){const _0x4bd0a6=_0x19f4c3,_0x239f62=this[_0x4bd0a6(0x11b)](this['_text']);this['width']=_0x239f62['width']+(this[_0x4bd0a6(0xe4)]()+this['padding'])*0x2,this[_0x4bd0a6(0x161)]=_0x239f62[_0x4bd0a6(0x161)]+this[_0x4bd0a6(0x13c)]*0x2,this['createContents'](),this['resetFontSettings']();},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)]['update']=function(){const _0x354095=_0x19f4c3;Window_Base[_0x354095(0xc3)][_0x354095(0xd3)][_0x354095(0x13a)](this);if(this[_0x354095(0x14e)]){if(_0x354095(0xee)===_0x354095(0xee))this[_0x354095(0x14e)]=![],this[_0x354095(0xd4)]();else{_0x4be837[_0x354095(0x147)](_0x3f455e,_0x53aef0);const _0x2136fe=_0x476aed[_0x354095(0x15f)][_0x354095(0x188)](_0x53fa04=>_0x53fa04[_0x354095(0x11c)]()[_0x354095(0x100)]());for(const _0x26fcd3 of _0x2136fe){_0x26ca51[_0x354095(0x194)](_0x26fcd3);}}}this['updatePosition'](),this[_0x354095(0xd6)]();},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0xed)]=function(){this['_requestRefresh']=!![];},Window_VariableGaugeTooltip['prototype'][_0x19f4c3(0xf7)]=function(){const _0x15f15f=_0x19f4c3;if(!this[_0x15f15f(0x139)])return;this['x']=TouchInput['x']+Window_VariableGaugeTooltip[_0x15f15f(0xb6)],this['y']=TouchInput['y']+Window_VariableGaugeTooltip['MOUSE_OFFSET_Y'],this[_0x15f15f(0x124)]();},Window_VariableGaugeTooltip['prototype'][_0x19f4c3(0x124)]=function(){const _0x31f85a=_0x19f4c3,_0x53938b=this[_0x31f85a(0x12a)]*(Window_VariableGaugeTooltip['WINDOW_SCALE']||0.01),_0x2fd281=this[_0x31f85a(0x161)]*(Window_VariableGaugeTooltip[_0x31f85a(0x10b)]||0.01);this['x']=Math[_0x31f85a(0x1a6)](this['x'][_0x31f85a(0x16e)](0x0,Graphics['width']-_0x53938b)),this['y']=Math[_0x31f85a(0x1a6)](this['y'][_0x31f85a(0x16e)](0x0,Graphics[_0x31f85a(0x161)]-_0x2fd281));},Window_VariableGaugeTooltip[_0x19f4c3(0xc3)][_0x19f4c3(0xd6)]=function(){const _0x415a7c=_0x19f4c3;let _0x2ddcb1=0xff;if(TouchInput['x']<=0x0)_0x2ddcb1=0x0;if(TouchInput['x']>=Graphics[_0x415a7c(0x12a)])_0x2ddcb1=0x0;if(TouchInput['y']<=0x0)_0x2ddcb1=0x0;if(TouchInput['y']>=Graphics[_0x415a7c(0x161)])_0x2ddcb1=0x0;this[_0x415a7c(0x17a)]=_0x2ddcb1;};