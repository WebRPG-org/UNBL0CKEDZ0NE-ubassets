//=============================================================================
// VisuStella MZ - Visual Gauge Styles
// VisuMZ_3_VisualGaugeStyles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualGaugeStyles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualGaugeStyles = VisuMZ.VisualGaugeStyles || {};
VisuMZ.VisualGaugeStyles.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.03] [VisualGaugeStyles]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Gauge_Styles_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Visual Gauge Styles plugin allows you to swap out the various gauges
 * found and used in the game to don a different appearance and aesthetic. The
 * aesthetics can be mixed and matched to your liking, going from more visual
 * polygon structure-like styles to enhance a feeling to more mechanical-like
 * styles to relay information better. As these styles are all pre-rendered,
 * there are no custom files used with this plugin.
 *
 * Features include all (but not limited to) the following:
 * 
 * * No custom image files are needed for this plugin to utilize the various
 *   pre-rendered visual gauge styles.
 * * Mix and match from over 20+ choices to pick from for different types of
 *   gauges found in the game and from other VisuStella MZ plugins.
 * * Styles can have varying gauge heights, label offsets, and value offsets to
 *   add to the aesthetic differences.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_SkillsStatesCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Sprite_Gauge Overwrite
 * 
 * Naturally, since the visual gauge styles are altered, certain aspects have
 * to be overwritten as a whole. For the Sprite_Gauge class, this means the
 * functions related to drawing the gauges themselves are overwritten.
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
 * VisuMZ_2_AggroControlSys
 * 
 * VisuMZ_2_BattleSystemATB
 * 
 * VisuMZ_3_VictoryAftermath
 *
 * These plugins from the VisuStella MZ library contain sprite gauges used that
 * can be altered and have a different style from the rest. Mix and match them
 * to your liking.
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
 * VisuMZ_4_VariableGauges
 * 
 * The updated version of VisuStella MZ's Variable Gauges can now utilize the
 * styles from this plugin. However, keep in mind that style settings like
 * adjusting gauge thickness will not be handled by the Visual Gauge Styles
 * plugin, but instead, handled by the Variable Gauges plugin.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Style Adjustment Settings
 * ============================================================================
 *
 * Adjust settings like label and value offsets for each style type.
 *
 * ---
 *
 * Structure-Styles
 * 
 *   Normal:
 *   Arrow:
 *   Dipper:
 *   Flag:
 *   Growth:
 *   Lean:
 *   Quad:
 *   Stagger:
 *   Trapezoid:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *
 * ---
 *
 * Step-Styles
 * 
 *   Half Step:
 *   Third Step:
 *   Fourth Step:
 *   Fifth Step:
 *   Sixth Step:
 *   Eighth Step:
 *   Tenth Step:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *
 * ---
 *
 * Section-Styles
 * 
 *   Half Section:
 *   Third Section:
 *   Fourth Section:
 *   Fifth Section:
 *   Sixth Section:
 *   Eighth Section:
 *   Tenth Section:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *   - These gauges will be separated in even sections based on their numeric
 *     value used for their style name.
 *
 * ---
 *
 * Segment-Styles
 * 
 *   Segment By 10:
 *   Segment By 20:
 *   Segment By 25:
 *   Segment By 50:
 *   Segment By 100:
 *   Segment By 200:
 *   Segment By 250:
 *   Segment By 500:
 *   Segment By 1000:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *   - These gauges will be separated in divided chunks based on the maximum
 *     value used to calculate the gauge. Their divison count is based on the
 *     numeric value used for their style name.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Here, you can adjust the default settings for the various gauges used in the
 * game. If there are any future plugins that will utilize custom gauges, they
 * will be added here at a later date.
 *
 * ---
 *
 * Default
 * 
 *   Default Horizontal Style:
 *   Default Vertical Style:
 *   - Select the gauge style to use for default horizontal/vertical gauges.
 *   - When 'Default' style is selected in the "Status Window" or "Battlers"
 *     Plugin Parameters, the style will then refer to the "Horizontal" or
 *     "Vertical" gauge styles set here.
 *
 * ---
 *
 * Status Window
 * 
 *   Status: HP Style:
 *   Status: MP Style:
 *   Status: TP Style:
 *   Status: Time Style:
 *   Status: Aggro Style:
 *   - Select the gauge style to use for the status-related gauge.
 * 
 * ---
 * 
 * Battlers
 * 
 *   Battler: HP Style:
 *   Battler: Aggro Style:
 *   Battler: ATB Style:
 *   Battler: EXP Style:
 *   - Select the gauge style to use for the battler-related gauges.
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
 * Version 1.03: February 20, 2025
 * * Bug Fixes!
 * ** Fixed a bug where for certain gauges, the "sectioned" gauge style would
 *    not fill past the first section. Fix made by Arisu.
 * 
 * Version 1.02: November 16, 2023
 * * Compatibility Update!
 * ** Plugin is more compatible with Enhanced TP's custom gauge colors.
 * 
 * Version 1.01: March 16, 2023
 * * Feature Update!
 * ** Plugin now prompts you to make sure your other plugins are up to date
 *    before usage. This plugin does not work with cores that are out of date.
 *    Update made by Olivia.
 * 
 * Version 1.00 Official Release Date: April 5, 2023
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param VisualGaugeStyles
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Styles:struct
 * @text Style Adjustment Settings
 * @type struct<Styles>
 * @desc Adjust settings like label and value offsets for each style type.
 * @default {"Structure":"","normal:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+0\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"+0\",\"valueOffsetY:num\":\"+0\"}","arrow:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","dipper:struct":"{\"gaugeThickness:num\":\"20\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","flag:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+0\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","growth:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","lean:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","quad:struct":"{\"gaugeThickness:num\":\"20\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","stagger:struct":"{\"gaugeThickness:num\":\"14\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","trapezoid:struct":"{\"gaugeThickness:num\":\"16\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","Steps":"","halfstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","thirdstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","fourthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","fifthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","sixthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","eighthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","tenthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","Section":"","halfsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","thirdsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","fourthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","fifthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","sixthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","eighthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","tenthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","Segment":"","segmentby10:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby20:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby25:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby50:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby100:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby200:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby250:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby500:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby1000:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}"}
 * 
 * @param DefaultStyles
 * @text Default
 * @parent Styles:struct
 * 
 * @param horzStyle:str
 * @text Default Horizontal Style
 * @parent DefaultStyles
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
 * @desc Select the gauge style to use for default horizontal gauges.
 * @default Lean
 * 
 * @param vertStyle:str
 * @text Default Vertical Style
 * @parent DefaultStyles
 * @type select
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
 * @desc Select the gauge style to use for default vertical gauges.
 * @default Arrow
 * 
 * @param StatusStyles
 * @text Status Window
 * @parent Styles:struct
 * 
 * @param statusHpStyle:str
 * @text Status: HP Style
 * @parent StatusStyles
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
 * @desc Select the gauge style to use for the status window HP.
 * @default Stagger
 * 
 * @param statusMpStyle:str
 * @text Status: MP Style
 * @parent StatusStyles
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
 * @desc Select the gauge style to use for the status window MP.
 * @default Stagger
 * 
 * @param statusTpStyle:str
 * @text Status: TP Style
 * @parent StatusStyles
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
 * @desc Select the gauge style to use for the status window TP.
 * @default Stagger
 * 
 * @param statusTimeStyle:str
 * @text Status: Time Style
 * @parent StatusStyles
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
 * @desc Select the gauge style to use for the status window time
 * gauge. Used for TPB and VisuMZ_2_BattleSystemATB.
 * @default Lean
 * 
 * @param statusAggroStyle:str
 * @text Status: Aggro Style
 * @parent StatusStyles
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
 * @desc Select the gauge style to use for the status aggro gauge.
 * Requires VisuMZ_2_AggroControlSys!
 * @default Lean
 * 
 * @param BattlerStyles
 * @text Battlers
 * @parent Styles:struct
 * 
 * @param battlerHpStyle:str
 * @text Battler: HP Style
 * @parent BattlerStyles
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
 * @desc Select the gauge style to use for the battler HP gauges.
 * @default Lean
 * 
 * @param battlerAggroStyle:str
 * @text Battler: Aggro Style
 * @parent BattlerStyles
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
 * @desc Select the gauge style to use for the battler aggro gauge.
 * Requires VisuMZ_2_AggroControlSys!
 * @default Lean
 * 
 * @param battlerAtbStyle:str
 * @text Battler: ATB Style
 * @parent BattlerStyles
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
 * @desc Select the gauge style to use for the battler ATB gauges.
 * Requires VisuMZ_2_BattleSystemATB!
 * @default Lean
 * 
 * @param battlerEXPStyle:str
 * @text Battler: EXP Style
 * @parent BattlerStyles
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
 * @desc Select the gauge style to use for the battler EXP gauges.
 * Requires VisuMZ_3_VictoryAftermath!
 * @default Arrow
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
 * Specific Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Styles:
 * 
 * @param Structure
 * @text Structure-Styles
 *
 * @param normal:struct
 * @text Normal
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+0","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"+0","valueOffsetY:num":"+0"}
 *
 * @param arrow:struct
 * @text Arrow
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param dipper:struct
 * @text Dipper
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"20","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param flag:struct
 * @text Flag
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+0","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param growth:struct
 * @text Growth
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param lean:struct
 * @text Lean
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param quad:struct
 * @text Quad
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"20","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param stagger:struct
 * @text Stagger
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"14","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param trapezoid:struct
 * @text Trapezoid
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"16","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 * 
 * @param Steps
 * @text Step-Styles
 *
 * @param halfstep:struct
 * @text Half Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param thirdstep:struct
 * @text Third Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param fourthstep:struct
 * @text Fourth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param fifthstep:struct
 * @text Fifth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param sixthstep:struct
 * @text Sixth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param eighthstep:struct
 * @text Eighth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param tenthstep:struct
 * @text Tenth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 * 
 * @param Section
 * @text Section-Styles
 *
 * @param halfsection:struct
 * @text Half Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param thirdsection:struct
 * @text Third Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param fourthsection:struct
 * @text Fourth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param fifthsection:struct
 * @text Fifth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param sixthsection:struct
 * @text Sixth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param eighthsection:struct
 * @text Eighth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param tenthsection:struct
 * @text Tenth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 * 
 * @param Segment
 * @text Segment-Styles
 *
 * @param segmentby10:struct
 * @text Segment By 10
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby20:struct
 * @text Segment By 20
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby25:struct
 * @text Segment By 25
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby50:struct
 * @text Segment By 50
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby100:struct
 * @text Segment By 100
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby200:struct
 * @text Segment By 200
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby250:struct
 * @text Segment By 250
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby500:struct
 * @text Segment By 500
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby1000:struct
 * @text Segment By 1000
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Offset Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OffsetData:
 *
 * @param gaugeThickness:num
 * @text Gauge Thickness
 * @type number
 * @min 1
 * @desc What is the gauge height/width when this style is used?
 * Horz Style: Adjusts height. Vert Style: Adjusts width.
 * @default 12
 * 
 * @param Label
 * @text Label Offsets
 *
 * @param labelOffsetX:num
 * @text Offset X
 * @parent Label
 * @desc How many pixels to offset the label text?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param labelOffsetY:num
 * @text Offset Y
 * @parent Label
 * @desc How many pixels to offset the label text?
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param Value
 * @text Value Offsets
 *
 * @param valueOffsetX:num
 * @text Offset X
 * @parent Value
 * @desc How many pixels to offset the value text?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param valueOffsetY:num
 * @text Offset Y
 * @parent Value
 * @desc How many pixels to offset the value text?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

const _0x595b44=_0x1abb;(function(_0x10f11b,_0x283987){const _0x51a9b7=_0x1abb,_0x4794c1=_0x10f11b();while(!![]){try{const _0x1c6247=parseInt(_0x51a9b7(0x1a1))/0x1*(parseInt(_0x51a9b7(0x188))/0x2)+-parseInt(_0x51a9b7(0x1c8))/0x3+parseInt(_0x51a9b7(0x19f))/0x4*(parseInt(_0x51a9b7(0x18c))/0x5)+parseInt(_0x51a9b7(0x122))/0x6*(parseInt(_0x51a9b7(0x172))/0x7)+-parseInt(_0x51a9b7(0x1c4))/0x8*(-parseInt(_0x51a9b7(0x1c3))/0x9)+-parseInt(_0x51a9b7(0x129))/0xa+-parseInt(_0x51a9b7(0x186))/0xb;if(_0x1c6247===_0x283987)break;else _0x4794c1['push'](_0x4794c1['shift']());}catch(_0x5ba0cf){_0x4794c1['push'](_0x4794c1['shift']());}}}(_0x5f49,0x6190b));var label=_0x595b44(0x184),tier=tier||0x0,dependencies=[_0x595b44(0x1cf),_0x595b44(0x1ec),'VisuMZ_1_SkillsStatesCore'],pluginData=$plugins[_0x595b44(0x1e6)](function(_0x280eb6){const _0x1fd696=_0x595b44;return _0x280eb6['status']&&_0x280eb6[_0x1fd696(0x177)][_0x1fd696(0x141)]('['+label+']');})[0x0];VisuMZ[label][_0x595b44(0x15a)]=VisuMZ[label][_0x595b44(0x15a)]||{},VisuMZ[_0x595b44(0x1dc)]=function(_0x26297d,_0x33c520){const _0x512918=_0x595b44;for(const _0x20ef1c in _0x33c520){if(_0x20ef1c[_0x512918(0x1a0)](/(.*):(.*)/i)){const _0x47a11e=String(RegExp['$1']),_0x538019=String(RegExp['$2'])['toUpperCase']()[_0x512918(0x1e0)]();let _0x58d3d3,_0x541f8e,_0x3044ef;switch(_0x538019){case _0x512918(0x185):_0x58d3d3=_0x33c520[_0x20ef1c]!==''?Number(_0x33c520[_0x20ef1c]):0x0;break;case _0x512918(0x1d1):_0x541f8e=_0x33c520[_0x20ef1c]!==''?JSON['parse'](_0x33c520[_0x20ef1c]):[],_0x58d3d3=_0x541f8e[_0x512918(0x1dd)](_0x49c117=>Number(_0x49c117));break;case _0x512918(0x1b1):_0x58d3d3=_0x33c520[_0x20ef1c]!==''?eval(_0x33c520[_0x20ef1c]):null;break;case _0x512918(0x18b):_0x541f8e=_0x33c520[_0x20ef1c]!==''?JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c]):[],_0x58d3d3=_0x541f8e[_0x512918(0x1dd)](_0x20623c=>eval(_0x20623c));break;case'JSON':_0x58d3d3=_0x33c520[_0x20ef1c]!==''?JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c]):'';break;case _0x512918(0x178):_0x541f8e=_0x33c520[_0x20ef1c]!==''?JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c]):[],_0x58d3d3=_0x541f8e['map'](_0x3f8e31=>JSON[_0x512918(0x154)](_0x3f8e31));break;case _0x512918(0x19e):_0x58d3d3=_0x33c520[_0x20ef1c]!==''?new Function(JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c])):new Function(_0x512918(0x182));break;case'ARRAYFUNC':_0x541f8e=_0x33c520[_0x20ef1c]!==''?JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c]):[],_0x58d3d3=_0x541f8e[_0x512918(0x1dd)](_0x41f4e2=>new Function(JSON[_0x512918(0x154)](_0x41f4e2)));break;case _0x512918(0x1ab):_0x58d3d3=_0x33c520[_0x20ef1c]!==''?String(_0x33c520[_0x20ef1c]):'';break;case'ARRAYSTR':_0x541f8e=_0x33c520[_0x20ef1c]!==''?JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c]):[],_0x58d3d3=_0x541f8e['map'](_0x30be12=>String(_0x30be12));break;case _0x512918(0x174):_0x3044ef=_0x33c520[_0x20ef1c]!==''?JSON['parse'](_0x33c520[_0x20ef1c]):{},_0x58d3d3=VisuMZ[_0x512918(0x1dc)]({},_0x3044ef);break;case _0x512918(0x1b7):_0x541f8e=_0x33c520[_0x20ef1c]!==''?JSON[_0x512918(0x154)](_0x33c520[_0x20ef1c]):[],_0x58d3d3=_0x541f8e[_0x512918(0x1dd)](_0x16f12b=>VisuMZ['ConvertParams']({},JSON[_0x512918(0x154)](_0x16f12b)));break;default:continue;}_0x26297d[_0x47a11e]=_0x58d3d3;}}return _0x26297d;},(_0x367633=>{const _0xeca36d=_0x595b44,_0x2799c3=_0x367633[_0xeca36d(0x192)];for(const _0x541df8 of dependencies){if(!Imported[_0x541df8]){alert(_0xeca36d(0x1b6)[_0xeca36d(0x193)](_0x2799c3,_0x541df8)),SceneManager['exit']();break;}}const _0x448a62=_0x367633['description'];if(_0x448a62[_0xeca36d(0x1a0)](/\[Version[ ](.*?)\]/i)){const _0x52a7c4=Number(RegExp['$1']);_0x52a7c4!==VisuMZ[label]['version']&&(alert(_0xeca36d(0x171)['format'](_0x2799c3,_0x52a7c4)),SceneManager[_0xeca36d(0x150)]());}if(_0x448a62[_0xeca36d(0x1a0)](/\[Tier[ ](\d+)\]/i)){const _0x187be2=Number(RegExp['$1']);_0x187be2<tier?(alert(_0xeca36d(0x196)[_0xeca36d(0x193)](_0x2799c3,_0x187be2,tier)),SceneManager[_0xeca36d(0x150)]()):tier=Math[_0xeca36d(0x16d)](_0x187be2,tier);}VisuMZ[_0xeca36d(0x1dc)](VisuMZ[label][_0xeca36d(0x15a)],_0x367633[_0xeca36d(0x1bd)]);})(pluginData);function _0x1abb(_0x5abd7c,_0xf29a82){const _0x5f493c=_0x5f49();return _0x1abb=function(_0x1abbdd,_0x3eae63){_0x1abbdd=_0x1abbdd-0x122;let _0x56c77e=_0x5f493c[_0x1abbdd];return _0x56c77e;},_0x1abb(_0x5abd7c,_0xf29a82);}if(VisuMZ[_0x595b44(0x16c)][_0x595b44(0x1b3)]<1.7){let text='';text+=_0x595b44(0x1e9),text+=_0x595b44(0x1cd),alert(text),SceneManager[_0x595b44(0x150)]();}if(VisuMZ[_0x595b44(0x14a)]['version']<1.7){let text='';text+=_0x595b44(0x17e),text+='in\x20order\x20for\x20VisuMZ_3_VisualGaugeStyles\x20to\x20work.',alert(text),SceneManager[_0x595b44(0x150)]();}if(VisuMZ[_0x595b44(0x14d)][_0x595b44(0x1b3)]<1.36){let text='';text+=_0x595b44(0x125),text+='in\x20order\x20for\x20VisuMZ_3_VisualGaugeStyles\x20to\x20work.',alert(text),SceneManager[_0x595b44(0x150)]();}VisuMZ[_0x595b44(0x184)]['HorzStyle']=function(){const _0x5f170f=_0x595b44;return(VisuMZ[_0x5f170f(0x184)][_0x5f170f(0x15a)]['horzStyle']??_0x5f170f(0x130))[_0x5f170f(0x137)]()[_0x5f170f(0x1e0)]();},VisuMZ['VisualGaugeStyles'][_0x595b44(0x1cb)]=function(){const _0x5083e7=_0x595b44;return(VisuMZ[_0x5083e7(0x184)][_0x5083e7(0x15a)][_0x5083e7(0x15c)]??_0x5083e7(0x130))[_0x5083e7(0x137)]()[_0x5083e7(0x1e0)]();},VisuMZ[_0x595b44(0x184)][_0x595b44(0x14b)]=function(_0x55b0a2){const _0x404035=_0x595b44;return _0x55b0a2=_0x55b0a2['toLowerCase']()['trim'](),VisuMZ[_0x404035(0x184)][_0x404035(0x15a)][_0x404035(0x15d)][_0x55b0a2]??{};},VisuMZ[_0x595b44(0x184)][_0x595b44(0x19a)]=function(_0x5e8afd,_0xadfb78){const _0x4b2301=_0x595b44,_0x4480cf=this[_0x4b2301(0x14b)](_0x5e8afd);return _0x4480cf[_0x4b2301(0x142)]??0xc;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x160)]=function(_0x21c747,_0x42749d){const _0x1c56e5=_0x595b44,_0x1b8833=this[_0x1c56e5(0x14b)](_0x21c747);$gameTemp[_0x1c56e5(0x158)]={'x':_0x1b8833[_0x1c56e5(0x149)]??0x0,'y':_0x1b8833[_0x1c56e5(0x197)]??0x0};},VisuMZ[_0x595b44(0x184)][_0x595b44(0x12f)]=function(_0x379190,_0x2da3c7){const _0x25a997=_0x595b44,_0x9998fc=this[_0x25a997(0x14b)](_0x379190);$gameTemp[_0x25a997(0x158)]={'x':_0x9998fc[_0x25a997(0x1be)]??0x0,'y':_0x9998fc['valueOffsetY']??0x0};},VisuMZ[_0x595b44(0x184)][_0x595b44(0x17a)]=function(){const _0x21e753=_0x595b44;$gameTemp[_0x21e753(0x158)]=undefined;},Bitmap[_0x595b44(0x19d)]['drawVisualStyleGauge']=function(_0x3af670,_0x1002fb,_0x5d4a1f,_0x2d768e,_0x1fb3b9,_0x4895ab,_0x44826b,_0x367c95,_0x54a9f){const _0xb83685=_0x595b44;_0x3af670=String(_0x3af670)[_0xb83685(0x137)]()[_0xb83685(0x1e0)]();let _0x4ab4d9=VisuMZ[_0xb83685(0x184)][_0xb83685(0x194)](_0x3af670,_0x1002fb,_0x5d4a1f,_0x2d768e,_0x1fb3b9,0x1,!![]),_0x51e635=VisuMZ[_0xb83685(0x184)][_0xb83685(0x194)](_0x3af670,_0x1002fb,_0x5d4a1f,_0x2d768e,_0x1fb3b9,_0x4895ab,![]);this[_0xb83685(0x134)](_0x4ab4d9,_0x44826b);const _0x5599c2=_0x1002fb+_0x2d768e,_0x3f0be6=_0x5d4a1f,_0x11db60=this[_0xb83685(0x189)][_0xb83685(0x175)](_0x1002fb,_0x5d4a1f,_0x5599c2,_0x3f0be6);this['drawVisualStyleGaugeFront'](_0x51e635,_0x367c95,_0x54a9f,_0x11db60);},Bitmap[_0x595b44(0x19d)][_0x595b44(0x134)]=function(_0x2c45bf,_0x13e975){const _0x4292f6=_0x595b44,_0x53d236=this[_0x4292f6(0x189)];_0x53d236[_0x4292f6(0x1c6)](),_0x53d236[_0x4292f6(0x1ce)](),_0x53d236[_0x4292f6(0x1d0)](_0x2c45bf[0x0],_0x2c45bf[0x1]);for(var _0x4098c5=0x2;_0x4098c5<_0x2c45bf[_0x4292f6(0x1d4)];_0x4098c5+=0x2){_0x53d236[_0x4292f6(0x1a3)](_0x2c45bf[_0x4098c5],_0x2c45bf[_0x4098c5+0x1]);}_0x53d236[_0x4292f6(0x1a3)](_0x2c45bf[0x0],_0x2c45bf[0x1]),_0x53d236['strokeStyle']=_0x13e975,_0x53d236['lineWidth']=0x2,_0x53d236[_0x4292f6(0x1b5)](),_0x53d236[_0x4292f6(0x152)]=0xff,_0x53d236['fillStyle']=_0x13e975,_0x53d236[_0x4292f6(0x140)](),_0x53d236[_0x4292f6(0x152)]=0x1,_0x53d236[_0x4292f6(0x14c)](),this['_baseTexture'][_0x4292f6(0x16a)]();},Bitmap[_0x595b44(0x19d)]['drawVisualStyleGaugeFront']=function(_0x5039ee,_0x4a2cf3,_0xd5c52b,_0x50d56b,_0x308857){const _0x216968=_0x595b44,_0x459832=this[_0x216968(0x189)];_0x50d56b[_0x216968(0x19c)](0x0,_0x4a2cf3),_0x50d56b[_0x216968(0x19c)](0x1,_0xd5c52b),_0x459832[_0x216968(0x1c6)](),_0x459832['beginPath'](),_0x459832[_0x216968(0x1d0)](_0x5039ee[0x0],_0x5039ee[0x1]);for(var _0x5eaeb0=0x2;_0x5eaeb0<_0x5039ee[_0x216968(0x1d4)];_0x5eaeb0+=0x2){_0x459832[_0x216968(0x1a3)](_0x5039ee[_0x5eaeb0],_0x5039ee[_0x5eaeb0+0x1]);}_0x459832[_0x216968(0x1a3)](_0x5039ee[0x0],_0x5039ee[0x1]),_0x308857&&(_0x459832[_0x216968(0x180)]=_0x308857,_0x459832[_0x216968(0x166)]=0x2,_0x459832[_0x216968(0x1b5)]()),_0x459832['fillStyle']=_0x50d56b,_0x459832[_0x216968(0x140)](),_0x459832[_0x216968(0x152)]=0x1,_0x459832[_0x216968(0x14c)](),this[_0x216968(0x165)][_0x216968(0x16a)]();},VisuMZ[_0x595b44(0x184)][_0x595b44(0x194)]=function(_0x224c9e,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b){const _0x9925ea=_0x595b44;_0x224c9e=_0x224c9e[_0x9925ea(0x137)]()[_0x9925ea(0x1e0)](),_0x5e7bc9=_0x5e7bc9[_0x9925ea(0x1ca)](0x0,0x1),_0x48b97a+=0x1,_0x4a228b+=0x1,_0x344079-=0x2,_0x418fbf-=0x2;switch(_0x224c9e){case'lean':return this[_0x9925ea(0x1e5)](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x132):return this[_0x9925ea(0x191)](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x143):return this[_0x9925ea(0x1e8)](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case'stagger':return this['GetStaggerPolygon'](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case'dipper':return this[_0x9925ea(0x18d)](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x1b0):return this['GetQuadPolygon'](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x1e1):return this[_0x9925ea(0x156)](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x13d):return this['GetFlagPolygon'](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x13e):return this[_0x9925ea(0x15f)](0x2,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x181):return this[_0x9925ea(0x15f)](0x3,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x18a):return this['GetMultiStepPolygon'](0x4,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x145):return this['GetMultiStepPolygon'](0x5,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x1de):return this['GetMultiStepPolygon'](0x6,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x1aa):return this[_0x9925ea(0x15f)](0x8,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case _0x9925ea(0x161):return this[_0x9925ea(0x15f)](0xa,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);case'halfsection':return this[_0x9925ea(0x173)](0x2,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x13f):return this['GetMultiSectionPolygon'](0x3,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case'fourthsection':return this[_0x9925ea(0x173)](0x4,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x168):return this[_0x9925ea(0x173)](0x5,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x147):return this[_0x9925ea(0x173)](0x6,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case'eighthsection':return this['GetMultiSectionPolygon'](0x8,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x17b):return this[_0x9925ea(0x173)](0xa,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x1ba):return this[_0x9925ea(0x1a8)](0xa,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x164):return this[_0x9925ea(0x1a8)](0x14,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x15e):return this[_0x9925ea(0x1a8)](0x19,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case'segmentby50':return this[_0x9925ea(0x1a8)](0x32,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x1d3):return this[_0x9925ea(0x1a8)](0x64,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x1d9):return this[_0x9925ea(0x1a8)](0xc8,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x157):return this[_0x9925ea(0x1a8)](0xfa,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x159):return this[_0x9925ea(0x1a8)](0x1f4,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);case _0x9925ea(0x1a5):return this[_0x9925ea(0x1a8)](0x3e8,_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9,_0x1c5c3b);default:return this[_0x9925ea(0x133)](_0x48b97a,_0x4a228b,_0x344079,_0x418fbf,_0x5e7bc9);};},VisuMZ[_0x595b44(0x184)][_0x595b44(0x133)]=function(_0x49aeb7,_0xba753d,_0x4eaecd,_0xba1c7d,_0x4a5c9d){const _0xe9a8a=_0x595b44,_0x1a87ba=_0xba1c7d;return _0x4eaecd=Math[_0xe9a8a(0x1e7)](_0x4eaecd*_0x4a5c9d),[_0x49aeb7,_0xba753d,_0x49aeb7+_0x4eaecd,_0xba753d,_0x49aeb7+_0x4eaecd,_0xba753d+_0xba1c7d,_0x49aeb7,_0xba753d+_0xba1c7d];},VisuMZ[_0x595b44(0x184)][_0x595b44(0x1e5)]=function(_0x2c4702,_0x24a34a,_0x18ff8e,_0x5da68e,_0x4ab560){const _0x4afc7f=_0x595b44,_0x1753a0=[],_0x3b9703=Math[_0x4afc7f(0x1c9)](_0x5da68e/0x3);if(_0x18ff8e<_0x3b9703*0x2)return this[_0x4afc7f(0x133)](_0x2c4702,_0x24a34a,_0x18ff8e,_0x5da68e,_0x4ab560);return _0x18ff8e=Math[_0x4afc7f(0x1e7)]((_0x18ff8e-_0x3b9703)*_0x4ab560),_0x1753a0[_0x4afc7f(0x183)](_0x2c4702+_0x3b9703,_0x24a34a),(_0x1753a0[_0x4afc7f(0x183)](_0x2c4702+_0x3b9703+_0x18ff8e,_0x24a34a),_0x1753a0[_0x4afc7f(0x183)](_0x2c4702+_0x18ff8e,_0x24a34a+_0x5da68e),_0x1753a0[_0x4afc7f(0x183)](_0x2c4702,_0x24a34a+_0x5da68e)),_0x1753a0;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x191)]=function(_0x47755e,_0x2afc57,_0xc5f3d1,_0x1794dc,_0x3f3560){const _0x3def8b=_0x595b44,_0x3b170c=[],_0x315ea2=Math['ceil'](_0x1794dc/0x3);if(_0xc5f3d1<_0x315ea2*0x2)return this[_0x3def8b(0x133)](_0x47755e,_0x2afc57,_0xc5f3d1,_0x1794dc,_0x3f3560);return _0xc5f3d1=Math['floor']((_0xc5f3d1-_0x315ea2)*_0x3f3560),_0x3b170c[_0x3def8b(0x183)](_0x47755e,_0x2afc57),_0x3b170c[_0x3def8b(0x183)](_0x47755e+_0xc5f3d1,_0x2afc57),_0x3b170c['push'](_0x47755e+_0xc5f3d1+_0x315ea2,_0x2afc57+_0x1794dc/0x2),_0x3b170c[_0x3def8b(0x183)](_0x47755e+_0xc5f3d1,_0x2afc57+_0x1794dc),_0x3b170c[_0x3def8b(0x183)](_0x47755e,_0x2afc57+_0x1794dc),_0x3b170c['push'](_0x47755e+_0x315ea2,_0x2afc57+_0x1794dc/0x2),_0x3b170c;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x1e8)]=function(_0x41d076,_0x286e37,_0x2c1604,_0x300db7,_0x5ab4e8){const _0x11baee=_0x595b44,_0x4b4f4f=[],_0x926e0c=Math[_0x11baee(0x1c9)](_0x300db7/0x2);if(_0x2c1604<_0x926e0c*0x2)return this[_0x11baee(0x133)](_0x41d076,_0x286e37,_0x2c1604,_0x300db7,_0x5ab4e8);return _0x2c1604=Math['floor'](_0x2c1604*_0x5ab4e8),hr=Math['floor'](_0x300db7*_0x5ab4e8),_0x4b4f4f['push'](_0x41d076,_0x286e37+_0x300db7),_0x4b4f4f[_0x11baee(0x183)](_0x41d076+_0x2c1604,_0x286e37+_0x300db7-hr),_0x4b4f4f[_0x11baee(0x183)](_0x41d076+Math[_0x11baee(0x16d)](_0x2c1604-_0x926e0c*_0x5ab4e8,0x0),_0x286e37+_0x300db7),_0x4b4f4f;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x13a)]=function(_0x37117c,_0x464f43,_0xff0688,_0xba826a,_0x58bd46){const _0x46892a=_0x595b44,_0x3bf93f=[],_0x487485=Math[_0x46892a(0x1c9)](_0xba826a/0x2),_0x2857f6=_0x487485/0x2;if(_0xff0688<_0x487485*0x2)return this['GetDefaultPolygon'](_0x37117c,_0x464f43,_0xff0688,_0xba826a,_0x58bd46);_0xff0688-=_0x487485;const _0x10d8a5=_0xff0688/0x3;return _0xff0688=Math[_0x46892a(0x1e7)](_0xff0688*_0x58bd46),_0x3bf93f[_0x46892a(0x183)](_0x37117c+_0x2857f6,_0x464f43+_0xba826a/0x2),_0x58bd46<0x1/0x3?_0x3bf93f['push'](_0x37117c+_0x2857f6+_0xff0688,_0x464f43+_0xba826a/0x2):(_0x3bf93f[_0x46892a(0x183)](_0x37117c+_0x10d8a5+_0x2857f6,_0x464f43+_0xba826a/0x2),_0x3bf93f[_0x46892a(0x183)](_0x37117c+_0x10d8a5+_0x487485,_0x464f43),_0x3bf93f[_0x46892a(0x183)](_0x37117c+_0xff0688+_0x487485,_0x464f43)),_0x3bf93f[_0x46892a(0x183)](_0x37117c+_0xff0688,_0x464f43+_0xba826a),_0x3bf93f[_0x46892a(0x183)](_0x37117c,_0x464f43+_0xba826a),_0x3bf93f;},VisuMZ['VisualGaugeStyles'][_0x595b44(0x18d)]=function(_0x1f8d33,_0x2b3ec2,_0x3a4586,_0x5552a1,_0x8c87a0){const _0x56d0ff=_0x595b44,_0x58672=[],_0x1ff8c1=0x1e;if(_0x3a4586<_0x1ff8c1*0x2)return;_0x3a4586-=_0x1ff8c1,_0x3a4586=Math['floor'](_0x3a4586*_0x8c87a0);const _0x2fa990=_0x5552a1/0x2;return _0x58672[_0x56d0ff(0x183)](_0x1f8d33,_0x2b3ec2+_0x2fa990),_0x58672[_0x56d0ff(0x183)](_0x1f8d33+_0x3a4586+_0x1ff8c1*_0x8c87a0,_0x2b3ec2+(_0x2fa990-_0x2fa990*_0x8c87a0)),_0x58672[_0x56d0ff(0x183)](_0x1f8d33+_0x3a4586,_0x2b3ec2+(_0x2fa990+_0x2fa990*_0x8c87a0)),_0x58672;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x135)]=function(_0x107ea3,_0x4ea478,_0x5bf070,_0x53b34a,_0x14b373){const _0x59ba24=_0x595b44,_0x119cc5=[],_0x463eb2=_0x53b34a;_0x5bf070-=_0x463eb2,_0x5bf070=Math[_0x59ba24(0x1e7)](_0x5bf070*_0x14b373);const _0x193255=_0x53b34a/0x2;return _0x119cc5[_0x59ba24(0x183)](_0x107ea3,_0x4ea478+_0x193255),_0x119cc5['push'](_0x107ea3+_0x463eb2*_0x14b373+_0x5bf070,_0x4ea478+(_0x193255-_0x193255*_0x14b373)),_0x119cc5[_0x59ba24(0x183)](_0x107ea3+_0x463eb2/0x2+_0x5bf070,_0x4ea478+_0x53b34a),_0x119cc5[_0x59ba24(0x183)](_0x107ea3+_0x463eb2/0x2,_0x4ea478+_0x53b34a),_0x119cc5;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x156)]=function(_0x396499,_0x48e532,_0x36f9ff,_0x3bd1ed,_0x407db7){const _0x1fa2eb=_0x595b44,_0x1ce816=[],_0x1a7818=Math[_0x1fa2eb(0x1c9)](_0x3bd1ed/0x2),_0x2d5485=Math['floor'](_0x36f9ff*_0x407db7);return _0x36f9ff-=_0x1a7818*0x2,_0x36f9ff=Math['floor'](_0x36f9ff*_0x407db7),_0x1ce816['push'](_0x396499+_0x1a7818,_0x48e532),_0x1ce816[_0x1fa2eb(0x183)](_0x396499+_0x1a7818+_0x36f9ff,_0x48e532),_0x1ce816[_0x1fa2eb(0x183)](_0x396499+_0x2d5485,_0x48e532+_0x3bd1ed),_0x1ce816[_0x1fa2eb(0x183)](_0x396499,_0x48e532+_0x3bd1ed),_0x1ce816;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x1d7)]=function(_0x40ba8c,_0x56eb25,_0x48337c,_0x551b2c,_0x2251d5){const _0x48c127=_0x595b44,_0x16e109=[],_0x1813b0=Math['ceil'](_0x551b2c/0x3);_0x48337c=Math[_0x48c127(0x1e7)](_0x48337c*_0x2251d5);const _0x13dc70=Math[_0x48c127(0x16d)](_0x48337c-_0x1813b0,0x0);return _0x16e109[_0x48c127(0x183)](_0x40ba8c,_0x56eb25),_0x16e109['push'](_0x40ba8c+_0x13dc70,_0x56eb25),_0x16e109[_0x48c127(0x183)](_0x40ba8c+_0x48337c,_0x56eb25+_0x551b2c/0x2),_0x16e109[_0x48c127(0x183)](_0x40ba8c+_0x13dc70,_0x56eb25+_0x551b2c),_0x16e109['push'](_0x40ba8c,_0x56eb25+_0x551b2c),_0x16e109;},VisuMZ['VisualGaugeStyles'][_0x595b44(0x15f)]=function(_0x409b23,_0x598382,_0x74e65f,_0xc1ae09,_0x281665,_0x177907){const _0x15f132=_0x595b44,_0xc6abff=[],_0x4a96ae=Math[_0x15f132(0x1c9)](_0x281665/0x2);if(_0xc1ae09<_0x4a96ae*0x2)return this[_0x15f132(0x133)](_0x598382,_0x74e65f,_0xc1ae09,_0x281665,_0x177907);_0xc1ae09-=_0x4a96ae;const _0xc13beb=_0xc1ae09;_0xc1ae09=Math[_0x15f132(0x1e7)](_0xc1ae09*_0x177907);let _0x4646a0=0x1;_0xc6abff[_0x15f132(0x183)](_0x598382+_0x4a96ae*_0x4646a0/_0x409b23,_0x74e65f+_0x281665*(_0x409b23-_0x4646a0)/_0x409b23);while(_0x4646a0<=_0x409b23){if(_0x177907<=_0x4646a0/_0x409b23){_0xc6abff[_0x15f132(0x183)](_0x598382+_0x4a96ae*_0x4646a0/_0x409b23+_0xc1ae09,_0x74e65f+_0x281665*(_0x409b23-_0x4646a0)/_0x409b23);break;}_0xc6abff[_0x15f132(0x183)](_0x598382+_0x4a96ae*_0x4646a0/_0x409b23+_0xc13beb*(_0x4646a0/_0x409b23),_0x74e65f+_0x281665*(_0x409b23-_0x4646a0)/_0x409b23),_0x4646a0+=0x1,_0xc6abff[_0x15f132(0x183)](_0x598382+_0x4a96ae*_0x4646a0/_0x409b23+_0xc13beb*((_0x4646a0-0x1)/_0x409b23),_0x74e65f+_0x281665*(_0x409b23-_0x4646a0)/_0x409b23);}return _0xc6abff['push'](_0x598382+_0xc1ae09,_0x74e65f+_0x281665),_0xc6abff[_0x15f132(0x183)](_0x598382,_0x74e65f+_0x281665),_0xc6abff;},VisuMZ[_0x595b44(0x184)]['GetMultiSectionPolygon']=function(_0x5706d2,_0x4ed8a3,_0x56664a,_0x22e7fa,_0x5c5e6a,_0x5081f4,_0xc67356){const _0x45945c=_0x595b44,_0x3502d2=[],_0x441084=![],_0x3686f7=_0x22e7fa,_0x39606c=_0x5c5e6a*0.99;_0x22e7fa=Math[_0x45945c(0x1e7)](_0x22e7fa*_0x5081f4);_0x441084&&_0x5081f4<0x1&&(console[_0x45945c(0x163)]('rate',_0x5081f4),console['log'](_0x45945c(0x1b9),_0x22e7fa));_0x3502d2[_0x45945c(0x183)](_0x4ed8a3,_0x56664a);const _0x1c2c7e=_0x3686f7/_0x5706d2,_0x4d8d50=0x1/_0x5706d2,_0x4594ed=0.5;let _0x49dcc3=0x1;while(_0x49dcc3<=_0x5706d2){if(_0x5081f4<=_0x4d8d50*_0x49dcc3||_0xc67356){_0x3502d2[_0x45945c(0x183)](_0x4ed8a3+_0x22e7fa,_0x56664a);break;}_0x3502d2[_0x45945c(0x183)](_0x4ed8a3+_0x1c2c7e*_0x49dcc3,_0x56664a),_0x3502d2[_0x45945c(0x183)](_0x4ed8a3+_0x1c2c7e*_0x49dcc3,_0x56664a+_0x39606c);_0x441084&&_0x5081f4<0x1&&(console[_0x45945c(0x163)](_0x45945c(0x151),_0x22e7fa),console['log'](_0x45945c(0x187),_0x4ed8a3+_0x1c2c7e*_0x49dcc3+_0x4594ed));if(_0x22e7fa<=_0x1c2c7e*_0x49dcc3+_0x4594ed){_0x3502d2[_0x45945c(0x183)](_0x4ed8a3+_0x22e7fa,_0x56664a+_0x39606c);break;}_0x3502d2[_0x45945c(0x183)](_0x4ed8a3+_0x1c2c7e*_0x49dcc3+_0x4594ed,_0x56664a+_0x39606c),_0x3502d2['push'](_0x4ed8a3+_0x1c2c7e*_0x49dcc3+_0x4594ed,_0x56664a),_0x49dcc3+=0x1;}return _0x3502d2['push'](_0x4ed8a3+_0x22e7fa,_0x56664a+_0x5c5e6a),_0x3502d2[_0x45945c(0x183)](_0x4ed8a3,_0x56664a+_0x5c5e6a),_0x441084&&_0x5081f4<0x1&&console['log'](_0x45945c(0x198),_0x3502d2),_0x3502d2;},VisuMZ[_0x595b44(0x184)][_0x595b44(0x1a8)]=function(_0x2e6bc5,_0x25f826,_0x3f2364,_0x402fd3,_0x4750f0,_0x4a2714,_0x3b19b5){const _0x3788b1=_0x595b44,_0x38ea4a=[],_0x26ec02=_0x402fd3,_0x24f2f1=_0x4750f0*0.99;_0x402fd3=Math[_0x3788b1(0x1e7)](_0x402fd3*_0x4a2714),_0x38ea4a[_0x3788b1(0x183)](_0x25f826,_0x3f2364);const _0x3d3b69=Math[_0x3788b1(0x16d)]((this['_maxValueSegment']||0x64)/_0x2e6bc5,0x1),_0x173d96=_0x26ec02/_0x3d3b69,_0x56b176=0x1/_0x3d3b69,_0x101e6f=0.5;let _0x375d72=0x1;while(_0x375d72<=_0x3d3b69){if(_0x4a2714<=_0x56b176*_0x375d72||_0x3b19b5){_0x38ea4a[_0x3788b1(0x183)](_0x25f826+_0x402fd3,_0x3f2364);break;}_0x38ea4a[_0x3788b1(0x183)](_0x25f826+_0x173d96*_0x375d72,_0x3f2364),_0x38ea4a['push'](_0x25f826+_0x173d96*_0x375d72,_0x3f2364+_0x24f2f1);if(_0x402fd3<=_0x25f826+_0x173d96*_0x375d72+_0x101e6f){_0x38ea4a[_0x3788b1(0x183)](_0x25f826+_0x402fd3,_0x3f2364+_0x24f2f1);break;}_0x38ea4a[_0x3788b1(0x183)](_0x25f826+_0x173d96*_0x375d72+_0x101e6f,_0x3f2364+_0x24f2f1),_0x38ea4a['push'](_0x25f826+_0x173d96*_0x375d72+_0x101e6f,_0x3f2364),_0x375d72+=0x1;if(_0x375d72>_0x3d3b69){_0x38ea4a[_0x3788b1(0x183)](_0x25f826+_0x402fd3,_0x3f2364);break;}}return _0x38ea4a[_0x3788b1(0x183)](_0x25f826+_0x402fd3,_0x3f2364+_0x4750f0),_0x38ea4a[_0x3788b1(0x183)](_0x25f826,_0x3f2364+_0x4750f0),_0x38ea4a;},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x144)]=function(){const _0x53a5f2=_0x595b44;if(!this[_0x53a5f2(0x123)])return VisuMZ[_0x53a5f2(0x184)][_0x53a5f2(0x17c)]();const _0x589d26=this[_0x53a5f2(0x17f)]()[_0x53a5f2(0x137)]()['trim']();if(_0x589d26===_0x53a5f2(0x12c))return VisuMZ[_0x53a5f2(0x184)][_0x53a5f2(0x17c)]();return _0x589d26;},Sprite_Gauge[_0x595b44(0x19d)]['getStyleName']=function(){const _0x51ba95=_0x595b44,_0x4f1d97=VisuMZ[_0x51ba95(0x184)][_0x51ba95(0x15a)];switch(this[_0x51ba95(0x18e)]){case'hp':return _0x4f1d97[_0x51ba95(0x1eb)]??_0x51ba95(0x1da);case'mp':return _0x4f1d97[_0x51ba95(0x1b2)]??'stagger';case'tp':return _0x4f1d97[_0x51ba95(0x1a7)]??'stagger';case _0x51ba95(0x12d):return this[_0x51ba95(0x18f)]()?_0x4f1d97[_0x51ba95(0x1db)]??_0x51ba95(0x16f):_0x4f1d97[_0x51ba95(0x1e4)]??_0x51ba95(0x16f);case _0x51ba95(0x1d2):return this[_0x51ba95(0x1ae)]()?_0x4f1d97['battlerAggroStyle']??_0x51ba95(0x16f):_0x4f1d97[_0x51ba95(0x128)]??_0x51ba95(0x16f);}return VisuMZ[_0x51ba95(0x184)][_0x51ba95(0x17c)]();},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x12e)]=function(_0x34b0b7,_0x22eb26,_0x17fb49,_0x1805bd){const _0x5981de=_0x595b44;if(Imported[_0x5981de(0x1ac)]&&this[_0x5981de(0x18e)]==='tp'&&this[_0x5981de(0x148)])this[_0x5981de(0x1c1)](_0x34b0b7,_0x22eb26,_0x17fb49,_0x1805bd);else{const _0x12ce72=this[_0x5981de(0x167)](),_0x3f9353=this[_0x5981de(0x195)]();this[_0x5981de(0x176)](_0x12ce72,_0x3f9353,_0x34b0b7,_0x22eb26,_0x17fb49,_0x1805bd);}},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1bb)]=function(_0x1aeaae,_0x17b8d0,_0x45aa79,_0x35d16f,_0x556166,_0x3d564e){const _0xa95c6=_0x595b44;Imported[_0xa95c6(0x1ac)]&&this[_0xa95c6(0x18e)]==='tp'&&this[_0xa95c6(0x148)]?this[_0xa95c6(0x1bc)](_0x1aeaae,_0x17b8d0,_0x45aa79,_0x35d16f,_0x556166,_0x3d564e):this[_0xa95c6(0x176)](_0x1aeaae,_0x17b8d0,_0x45aa79,_0x35d16f,_0x556166,_0x3d564e);},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x176)]=function(_0x461d27,_0xbacaa3,_0x33d69f,_0x5ba4bf,_0x173f3b,_0x3be99a){const _0x3ecc19=_0x595b44,_0x44030b=this['styleName'](),_0x5af0a6=this['gaugeRate'](),_0x4d540a=this[_0x3ecc19(0x1c7)]();VisuMZ[_0x3ecc19(0x184)][_0x3ecc19(0x13c)]=this[_0x3ecc19(0x170)]()||0x64,this[_0x3ecc19(0x155)][_0x3ecc19(0x1cc)](_0x44030b,_0x33d69f,_0x5ba4bf,_0x173f3b,_0x3be99a,_0x5af0a6,_0x4d540a,_0x461d27,_0xbacaa3);},VisuMZ[_0x595b44(0x184)][_0x595b44(0x14f)]=Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1e3)],Sprite_Gauge[_0x595b44(0x19d)]['gaugeHeight']=function(){const _0x22ff66=_0x595b44,_0x510a1c=this[_0x22ff66(0x144)]();return(VisuMZ[_0x22ff66(0x184)]['GetGaugeHeight'](_0x510a1c)??0xc)['clamp'](0x1,this[_0x22ff66(0x12a)]());},VisuMZ[_0x595b44(0x184)]['Sprite_Gauge_setupLabelFont']=Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1c0)],Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1c0)]=function(){const _0x3714ae=_0x595b44;VisuMZ[_0x3714ae(0x184)]['Sprite_Gauge_setupLabelFont'][_0x3714ae(0x1ad)](this),VisuMZ[_0x3714ae(0x184)][_0x3714ae(0x160)](this[_0x3714ae(0x144)]());},VisuMZ['VisualGaugeStyles'][_0x595b44(0x1a4)]=Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1bf)],Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1bf)]=function(){const _0xb5ccd6=_0x595b44;VisuMZ[_0xb5ccd6(0x184)][_0xb5ccd6(0x1a4)][_0xb5ccd6(0x1ad)](this),VisuMZ['VisualGaugeStyles'][_0xb5ccd6(0x17a)]();},VisuMZ['VisualGaugeStyles']['Sprite_Gauge_setupValueFont']=Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1df)],Sprite_Gauge[_0x595b44(0x19d)]['setupValueFont']=function(){const _0x25951a=_0x595b44;VisuMZ[_0x25951a(0x184)]['Sprite_Gauge_setupValueFont'][_0x25951a(0x1ad)](this),VisuMZ[_0x25951a(0x184)]['SetValueOffset'](this['styleName']());},VisuMZ[_0x595b44(0x184)][_0x595b44(0x17d)]=Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1a6)],Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1a6)]=function(){const _0x284ad0=_0x595b44;VisuMZ['VisualGaugeStyles'][_0x284ad0(0x17d)]['call'](this),VisuMZ[_0x284ad0(0x184)][_0x284ad0(0x17a)]();},VisuMZ[_0x595b44(0x184)]['Sprite_Gauge_redraw']=Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x16e)],Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x16e)]=function(){const _0x5b54a5=_0x595b44;VisuMZ['VisualGaugeStyles'][_0x5b54a5(0x199)][_0x5b54a5(0x1ad)](this),VisuMZ[_0x5b54a5(0x184)][_0x5b54a5(0x17a)]();},VisuMZ['VisualGaugeStyles'][_0x595b44(0x1d8)]=Bitmap[_0x595b44(0x19d)][_0x595b44(0x1a9)],Bitmap[_0x595b44(0x19d)][_0x595b44(0x1a9)]=function(_0x5a0f07,_0x1b0f1b,_0x4c74e0,_0x180e47,_0x3bf0dd,_0x38c289){const _0x2f6e73=_0x595b44;$gameTemp&&$gameTemp[_0x2f6e73(0x158)]&&(_0x1b0f1b+=$gameTemp['_visualGaugeStyleOffset']['x'],_0x4c74e0+=$gameTemp[_0x2f6e73(0x158)]['y']),VisuMZ[_0x2f6e73(0x184)][_0x2f6e73(0x1d8)][_0x2f6e73(0x1ad)](this,_0x5a0f07,_0x1b0f1b,_0x4c74e0,_0x180e47,_0x3bf0dd,_0x38c289);},Sprite_HpGauge[_0x595b44(0x19d)]['gaugeHeight']=function(){const _0x58b6dd=_0x595b44;return VisuMZ[_0x58b6dd(0x184)][_0x58b6dd(0x14f)][_0x58b6dd(0x1ad)](this);},Sprite_HpGauge[_0x595b44(0x19d)][_0x595b44(0x17f)]=function(){const _0x257118=_0x595b44,_0xc18508=VisuMZ[_0x257118(0x184)][_0x257118(0x15a)];return _0xc18508['battlerHpStyle']??_0x257118(0x130);},Sprite_Gauge['prototype'][_0x595b44(0x18f)]=function(){const _0x3b3135=_0x595b44;if(!Imported[_0x3b3135(0x14e)])return![];if(!this[_0x3b3135(0x123)])return![];if(!this[_0x3b3135(0x123)]['battler']())return![];return this===this[_0x3b3135(0x123)][_0x3b3135(0x13b)]()[_0x3b3135(0x131)];},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1ae)]=function(){const _0x194e24=_0x595b44;if(!Imported['VisuMZ_2_AggroControlSystem'])return![];if(!this[_0x194e24(0x123)])return![];if(!this[_0x194e24(0x123)][_0x194e24(0x13b)]())return![];return this===this[_0x194e24(0x123)][_0x194e24(0x13b)]()[_0x194e24(0x1ea)];},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1c1)]=function(_0x19245b,_0x2a7e36,_0x3285d1,_0x1d2ad5){const _0x1cfaa4=_0x595b44,_0x429ed6=this['changeTpCustomColor'](this[_0x1cfaa4(0x167)](),0x1),_0x5d3a73=this[_0x1cfaa4(0x12b)](this[_0x1cfaa4(0x195)](),0x2);this[_0x1cfaa4(0x1bc)](_0x429ed6,_0x5d3a73,_0x19245b,_0x2a7e36,_0x3285d1,_0x1d2ad5);},Sprite_Gauge[_0x595b44(0x19d)][_0x595b44(0x1bc)]=function(_0x204f5d,_0x3bb3e2,_0x34c646,_0x3067e8,_0x2d4572,_0x46aa9f){const _0x2fdeb3=_0x595b44;this[_0x2fdeb3(0x190)](!![]),_0x204f5d=this['changeTpCustomColor'](this[_0x2fdeb3(0x167)](),0x1),_0x3bb3e2=this[_0x2fdeb3(0x12b)](this[_0x2fdeb3(0x195)](),0x2);const _0x257813=this[_0x2fdeb3(0x144)](),_0x17fbd1=this[_0x2fdeb3(0x1c2)](),_0x48d0a3=this[_0x2fdeb3(0x1c7)](),_0x1e18ae=VisuMZ['VisualGaugeStyles']['GetPolygonStyle'](_0x257813,_0x34c646,_0x3067e8,_0x2d4572,_0x46aa9f,0x1,!![]);VisuMZ['VisualGaugeStyles'][_0x2fdeb3(0x13c)]=this['currentMaxValue']()||0x64,this[_0x2fdeb3(0x146)]['bitmap'][_0x2fdeb3(0x134)](_0x1e18ae,_0x48d0a3);const _0x56d98b=VisuMZ[_0x2fdeb3(0x184)][_0x2fdeb3(0x194)](_0x257813,_0x34c646,_0x3067e8,_0x2d4572,_0x46aa9f,_0x17fbd1,![]),_0x15014d=this[_0x2fdeb3(0x148)]['bitmap'][_0x2fdeb3(0x189)][_0x2fdeb3(0x175)](_0x34c646,_0x3067e8,_0x34c646+_0x2d4572,_0x3067e8);VisuMZ[_0x2fdeb3(0x184)][_0x2fdeb3(0x13c)]=this['currentMaxValue']()||0x64,this[_0x2fdeb3(0x148)][_0x2fdeb3(0x155)]['drawVisualStyleGaugeFront'](_0x56d98b,_0x204f5d,_0x3bb3e2,_0x15014d);},Window_Base[_0x595b44(0x19d)][_0x595b44(0x1b8)]=function(_0x14af59,_0x37dcd7,_0x21445f,_0x55c1b3,_0x21b387,_0x59111e){const _0x5f2770=_0x595b44,_0x4e501e=VisuMZ[_0x5f2770(0x184)][_0x5f2770(0x17c)](),_0x552c43=(VisuMZ['VisualGaugeStyles'][_0x5f2770(0x19a)](_0x4e501e)??0xc)[_0x5f2770(0x1ca)](0x1,0x20),_0x509dec=_0x37dcd7+this[_0x5f2770(0x138)]()-_0x552c43-0x2,_0x2afaee=ColorManager[_0x5f2770(0x1c7)]();VisuMZ[_0x5f2770(0x184)][_0x5f2770(0x13c)]=0x64,this['contents'][_0x5f2770(0x1cc)](_0x4e501e,_0x14af59,_0x509dec,_0x21445f,_0x552c43,_0x55c1b3,_0x2afaee,_0x21b387,_0x59111e);},Window_StatusBase[_0x595b44(0x19d)][_0x595b44(0x136)]=function(_0x34a9fa,_0x3e401d,_0x3bb94a){const _0x5a03d1=_0x595b44;if(VisuMZ[_0x5a03d1(0x16c)][_0x5a03d1(0x15a)]['Param'][_0x5a03d1(0x139)]===![])return;if(this['isExpGaugeDrawn']())this[_0x5a03d1(0x126)](_0x34a9fa,_0x3e401d,_0x3bb94a);this[_0x5a03d1(0x1af)]();const _0x71c3c7=VisuMZ[_0x5a03d1(0x184)][_0x5a03d1(0x17c)](),_0x145de1=VisuMZ[_0x5a03d1(0x14d)][_0x5a03d1(0x15a)][_0x5a03d1(0x1a2)],_0x2a7ab3=_0x145de1[_0x5a03d1(0x127)]?ColorManager[_0x5a03d1(0x19b)]():ColorManager[_0x5a03d1(0x1d6)]();this[_0x5a03d1(0x179)](_0x2a7ab3),_0x145de1[_0x5a03d1(0x16b)]===_0x5a03d1(0x153)&&(this[_0x5a03d1(0x1b4)][_0x5a03d1(0x15b)]=$gameSystem[_0x5a03d1(0x169)](),this[_0x5a03d1(0x1b4)][_0x5a03d1(0x1c5)]=$gameSystem[_0x5a03d1(0x124)]()),VisuMZ['VisualGaugeStyles']['SetLabelOffset'](_0x71c3c7),this[_0x5a03d1(0x1a9)](TextManager[_0x5a03d1(0x1e2)],_0x3e401d,_0x3bb94a,0x30),this['resetFontSettings'](),VisuMZ[_0x5a03d1(0x184)]['SetValueOffset'](_0x71c3c7),this[_0x5a03d1(0x1a9)](_0x34a9fa[_0x5a03d1(0x1d5)],_0x3e401d+0x54,_0x3bb94a,0x24,_0x5a03d1(0x162)),this[_0x5a03d1(0x1af)](),VisuMZ[_0x5a03d1(0x184)][_0x5a03d1(0x17a)]();};function _0x5f49(){const _0x284cbc=['STR','VisuMZ_2_EnhancedTpSystem','call','isBattlerAggroGauge','resetFontSettings','quad','EVAL','statusMpStyle','version','contents','stroke','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','ARRAYSTRUCT','drawGauge','width','segmentby10','drawFullGauge','drawFullGaugeEnhancedTp','parameters','valueOffsetX','drawLabel','setupLabelFont','drawGaugeRectEnhancedTp','gaugeRate','4966785mHRIVD','8VRXqkL','fontSize','save','gaugeBackColor','1606725AaRJSE','ceil','clamp','VertStyle','drawVisualStyleGauge','in\x20order\x20for\x20VisuMZ_3_VisualGaugeStyles\x20to\x20work.','beginPath','VisuMZ_0_CoreEngine','moveTo','ARRAYNUM','aggro','segmentby100','length','level','systemColor','GetFlagPolygon','Bitmap_drawText','segmentby200','stagger','battlerAtbStyle','ConvertParams','map','sixthstep','setupValueFont','trim','trapezoid','levelA','gaugeHeight','statusTimeStyle','GetLeanPolygon','filter','floor','GetGrowthPolygon','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','_aggroGaugeSprite','statusHpStyle','VisuMZ_1_BattleCore','207918OAUAtL','_battler','mainFontSize','VisuMZ_1_SkillsStatesCore\x20needs\x20to\x20be\x20updated\x20','drawActorExpGauge','MatchLabelColor','statusAggroStyle','5611630anCCaE','bitmapHeight','changeTpCustomColor','default','time','drawGaugeRect','SetValueOffset','normal','_atbGaugeSprite','arrow','GetDefaultPolygon','drawVisualStyleGaugeBack','GetQuadPolygon','drawActorLevel','toLowerCase','lineHeight','ShowActorLevel','GetStaggerPolygon','battler','_maxValueSegment','flag','halfstep','thirdsection','fill','includes','gaugeThickness','growth','styleName','fifthstep','_tpGaugeBack','sixthsection','_tpGaugeSprite','labelOffsetX','BattleCore','GetStyleData','restore','SkillsStatesCore','VisuMZ_2_BattleSystemATB','Sprite_Gauge_gaugeHeight','exit','segment\x20w','globalAlpha','number','parse','bitmap','GetTrapezoidPolygon','segmentby250','_visualGaugeStyleOffset','segmentby500','Settings','fontFace','vertStyle','Styles','segmentby25','GetMultiStepPolygon','SetLabelOffset','tenthstep','right','log','segmentby20','_baseTexture','lineWidth','gaugeColor1','fifthsection','numberFontFace','update','LabelFontMainType','CoreEngine','max','redraw','slant','currentMaxValue','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','7mbETFh','GetMultiSectionPolygon','STRUCT','createLinearGradient','drawVisualStyleGaugeRect','description','ARRAYJSON','changeTextColor','ClearTextOffset','tenthsection','HorzStyle','Sprite_Gauge_drawValue','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','getStyleName','strokeStyle','thirdstep','return\x200','push','VisualGaugeStyles','NUM','1698367lriaRY','segment\x20calc','1622aSYgAR','_context','fourthstep','ARRAYEVAL','5JQjCgP','GetDipperPolygon','_statusType','isBattlerAtbGauge','createTpGaugeBitmaps','GetArrowPolygon','name','format','GetPolygonStyle','gaugeColor2','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','labelOffsetY','polygon','Sprite_Gauge_redraw','GetGaugeHeight','expGaugeColor2','addColorStop','prototype','FUNC','2248940hZcfdj','match','619csKivL','Gauge','lineTo','Sprite_Gauge_drawLabel','segmentby1000','drawValue','statusTpStyle','GetMultiSegmentPolygon','drawText','eighthstep'];_0x5f49=function(){return _0x284cbc;};return _0x5f49();}