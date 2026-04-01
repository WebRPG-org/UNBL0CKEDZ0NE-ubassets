//=============================================================================
// VisuStella MZ - Voice Acting Control
// VisuMZ_2_VoiceActControl.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_VoiceActControl = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VoiceActControl = VisuMZ.VoiceActControl || {};
VisuMZ.VoiceActControl.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.06] [VoiceActControl]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Voice_Acting_Control_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_MessageCore
 * @base VisuMZ_1_OptionsCore
 * @orderAfter VisuMZ_1_OptionsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Do you have voice acting in your game to add that extra bit of immersion? If
 * you do, you have probably realized that RPG Maker MZ is not equipped with
 * all the necessities that come with games that have voice acting in them.
 * Some of these necessities include a different audio volume channel for
 * voices alone, control for stopping specific voices that are playing, adding
 * replayable voice tracks for the message window, etc.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Adds a separate audio volume channel for voice acting specifically.
 * * This volume channel can be adjusted in the Options screen. This is useful
 *   for players who might want to turn down the volume for sound effects but
 *   not voices or vice versa.
 * * Use Plugin Commands to play specific sound files as a voice track.
 * * Plugin Parameters can be used to automatically set up certain sound files
 *   as voice tracks so that they play in the voice audio channel when even
 *   using PlaySE event command.
 * * Text Codes can be used to make the Message Window play specific voice
 *   sounds when new pages appear.
 * * These page-related voice lines can be replayed if the player presses the
 *   replay button added to the Message Window.
 * * Optionally, game devs can have Message Windows track whatever voice lines
 *   were playing before the Message Window appears and add that as its replay
 *   voice track.
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
 * * VisuMZ_1_MessageCore
 * * VisuMZ_1_OptionsCore
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
 * Play Sound Effects
 * 
 * Naturally, if you are using the automatic filename voice line detection
 * features of plugin, then there will be some function redirecting happening
 * between regular sound effects and voice sounds. The AudioManager.playSe
 * function is changed to redirect detected voice sounds to the voice audio
 * channel instead of the sound effect audio channel.
 *
 * ---
 *
 * Replay Voice Button
 * 
 * The replay voice button is an icon button added through this plugin. It does
 * not overwrite anything but depending on the position it uses, it may or may
 * not change how the text displayed in the Message Window looks
 * 
 * For instance, if the button is on the left side of the Message Window, then
 * the text will be shifted over to the right a bit more if there is no face
 * graphic shown. If there is a face graphic shown, it will be displayed on top
 * of the face graphic.
 * 
 * If the button is shown on the right, then the Message Core's Word Wrap will
 * end a bit early to give the button enough room for itself as well as not
 * have any potential text covering it.
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
 * VisuMZ_3_MessageLog
 *
 * The Message Log is updated so that it will display replay voice buttons on
 * the upper left side of each logged entry (to the upper right side of the
 * face graphic).
 * 
 * ---
 *
 * ============================================================================
 * Voice Language Switching Information
 * ============================================================================
 *
 * As of Voice Acting Control version 1.03, Voice Language has been added. 
 * 
 * The "Voice Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Voice Language" feature of the VisuStella MZ Voice Acting
 * Control will require manual input by the game developer.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Voice Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Voice Acting Control plugin's Plugin Parameters
 * #2. Plugin Parameters > Language Switching > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * ---
 * 
 * === How to Play Different Voice Lines ===
 * 
 * Now, to play different voice lines based on what language the player has
 * selected, we have to use a newly added Plugin Command.
 * 
 * #1. Open up a map event or common event you want to play the voice line in.
 * #2. Add a new Plugin Command.
 * #3. Select Voice Acting Control's "Sound: Play As Voice Line (Language)"
 * #4. Click on "Language Lines" and select the languages you'd like to voice.
 * #5. Select different voice files for each voiced language.
 * #6. For "Default Line", this will be played if no voiced line is found.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Type-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Voice: filename>      Plays the 'filename' sound file found in /audio/se/
 *                        through the voice audio channel.
 * 
 * <No Voice Replay>      Hides the replace voice button if this text code is
 *                        used in a message regardless of whether or not
 *                        there's a voice being played.
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
 * === Sound Plugin Commands ===
 * 
 * ---
 *
 * Sound: Play As Voice Line (Normal)
 * - Plays target SE as a Voice Line using the Voice Line volume channel.
 *   This is unaffected by SE volume channel.
 *
 *   Filename:
 *   - Filename of the voice line played.
 *
 *   Volume:
 *   - Volume of the voice line played.
 *
 *   Pitch:
 *   - Pitch of the voice line played.
 *
 *   pan:
 *   - Pan of the voice line played.
 *
 * ---
 *
 * Sound: Play As Voice Line (Language)
 * - Plays a voice line based on target audio language.
 * - Uses volume channel and not SE volume channel.
 * 
 *   Language Lines:
 *   - Determine which line is used based on which voice language the player
 *     has selected.
 *
 *   Default Line:
 *   - Default voice line played when no language-based voice line is found.
 *
 *   Volume:
 *   - Volume of the voice line played.
 *
 *   Pitch:
 *   - Pitch of the voice line played.
 *
 *   pan:
 *   - Pan of the voice line played.
 *
 * ---
 *
 * Sound: Stop All Voice Lines
 * - Stops all currently playing Voice Lines.
 * 
 * ---
 * 
 * Sound: Stop Target Voice Lines
 * - Stops target Voice Lines if they are currently playing.
 *
 *   Specific Filenames:
 *   - Filenames of sound files that should be stopped as a Voice Line.
 *   - Case sensitive.
 *
 *   Filename Text Markers:
 *   - Text markers used to automatically mark filenames (not folders) as
 *     a Voice Line.
 *   - Case sensitive.
 *
 *   Specific Folders:
 *   - Anything that contains these folder names will be stopped as a
 *     Voice Line.
 *   - These can be main or sub folders.
 *   - Case sensitive.
 *
 *   Folder Text Markers:
 *   - Text markers used to automatically mark folders (not filenames) for
 *     Voice Line playing.
 *   - Case sensitive.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are general settings used for this plugin. There is no specific type
 * of category they belong to.
 *
 * ---
 *
 * Settings
 * 
 *   New Page > Register Voice:
 *   - If there is a PlaySE event command that places a voice sound before a
 *     new Message page, register it for replay?
 *   - Does not apply for sounds that aren't played through voice channel.
 * 
 *   End Page > Stop Voice:
 *   - Stop voices from playing whenever ending Message Window pages?
 *   - Does not apply to opening a new page for the first time.
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Replace Voice Sprite Settings
 * ============================================================================
 *
 * Settings that adjust the Replay Voice Sprite Button.
 *
 * ---
 *
 * Settings
 * 
 *   Show Sprite:
 *   - Shows the Replay Voice Sprite on the Message Window?
 * 
 * ---
 * 
 * Icons
 * 
 *   No Hover:
 *   - What icon is used when there is no mouse cursor hovering over it.
 * 
 *   Hovering:
 *   - What icon is used when there is a mouse cursor hovering over it.
 * 
 *   Parameter:
 *   - Description
 * 
 *   Parameter:
 *   - Description
 *
 * ---
 *
 * Positioning
 * 
 *   Positioning:
 *   - Where do you wish to position the Replay Voice Sprite?
 *     - Upper Left
 *     - Face Upper Right
 *     - Upper Right
 *     - Middle Left
 *     - Face Middle Right
 *     - Middle Right
 *     - Lower Left
 *     - Face Lower Right
 *     - Lower Right
 * 
 *   Offset X:
 *   - Offsets the sprite x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the sprite y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Buffer
 * 
 *   Buffer Left:
 *   - Buffer the left positions unless there is a face image.
 *   - Does not apply if there is no face graphic.
 * 
 *   Buffer Right:
 *   - Buffer the right positions for word wrap to not overlap.
 *   - Non-word wrap can still overlap.
 * 
 *   Buffer Width:
 *   - What is the extra pixel width used for a buffer in addition to the
 *     icon width?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Switching
 * ============================================================================
 *
 * Settings used to adjust audio changes for different languages.
 *
 * ---
 *
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese:
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Automatic Voice Acting Settings
 * ============================================================================
 *
 * These plugin parameters allow you to automatically assign specific sound
 * filenames as voice lines to be played in the voice audio channel as opposed
 * to the sound effect channel.
 * 
 * Specific filenames and folders will pertain to those exact filenames (case
 * sensitive). If they match exactly, they will be placed in the voice channel.
 * 
 * Text Markers will check to see if the sound filenames or folder names have
 * the text markers inside them (case sensitive) to be played in voice channel.
 *
 * ---
 *
 * Filters
 * 
 *   Specific Filenames:
 *   - Filenames of sound files that should be played as a Voice Line.
 *   - Case sensitive.
 * 
 *   Filename Text Markers:
 *   - Text markers used to automatically mark filenames (not folders) as
 *     a Voice Line.
 *   - Case sensitive.
 * 
 *   Specific Folders:
 *   - Anything that contains these folder names will be played as
 *     a Voice Line.
 *   - These can be main or sub folders.
 *   - Case sensitive.
 * 
 *   Folder Text Markers:
 *   - Text markers used to automatically mark folders (not filenames)
 *     for Voice Line playing.
 *   - Case sensitive.
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
 * Version 1.06: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause the replay button to skip around when using
 *    custom window positions. Fix made by Irina.
 * 
 * Version 1.05: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina:
 * *** <No Voice Replay>
 * **** Hides the replace voice button if this text code is used in a message
 *      regardless of whether or not there's a voice being played.
 * 
 * Version 1.04: March 14, 2024
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: January 18, 2024
 * * Compatibility Update!
 * ** Added updated compatibility with the new changes made in Message Core in
 *    order to allow CN/JP wordwrapping. Update made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Voice Language Switching added by Irina:
 * *** Plugin Parameters > General > Language Switching
 * *** Plugin Command > Sound: Play As Voice Line (Language)
 * **** The "Voice Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Voice Language" feature of the VisuStella MZ Voice
 *      Acting Control will require manual input by the game developer.
 * **** Read more about it in detail within the "Voice Language Information"
 *      section in the help file.
 * 
 * Version 1.02: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a crash that would occur when trying to apply voice lines to a
 *    message without the message window having a proper container. Fix made
 *    by Irina.
 * 
 * Version 1.01: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused a crash when trying to change the x position of
 *    the replay voice button. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: August 28, 2023
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
 * @command SoundPlayAsVoiceLine
 * @text Sound: Play As Voice Line (Normal)
 * @desc Plays target SE as a Voice Line using the Voice Line
 * volume channel. This is unaffected by SE volume channel.
 *
 * @arg name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the voice line played.
 * @default Untitled
 *
 * @arg volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the voice line played.
 * @default 100
 *
 * @arg pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the voice line played.
 * @default 100
 *
 * @arg pan:num
 * @text Pan
 * @desc Pan of the voice line played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SoundPlayAsVoiceLineLang
 * @text Sound: Play As Voice Line (Language)
 * @desc Plays a voice line based on target audio language.
 * Uses volume channel and not SE volume channel.
 *
 * @arg Language:struct
 * @text Language Lines
 * @parent General
 * @type struct<VoiceLang>
 * @desc Determine which line is used based on which voice language
 * the player has selected.
 * @default {"Bengali:str":"","Chinese:str":"","Czech:str":"","Danish:str":"","Dutch:str":"","English:str":"","Finnish:str":"","French:str":"","German:str":"","Greek:str":"","Hindi:str":"","Hungarian:str":"","Indonesian:str":"","Italian:str":"","Japanese:str":"","Korean:str":"","Norwegian:str":"","Polish:str":"","Portuguese:str":"","Romanian:str":"","Russian:str":"","Slovak:str":"","Spanish:str":"","Swedish:str":"","Tamil:str":"","Thai:str":"","Turkish:str":""}
 *
 * @arg name:str
 * @text Default Line
 * @parent Language:struct
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Default voice line played when no language-based voice line is found.
 * @default Untitled
 *
 * @arg volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the voice line played.
 * @default 100
 *
 * @arg pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the voice line played.
 * @default 100
 *
 * @arg pan:num
 * @text Pan
 * @desc Pan of the voice line played.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SoundStopAllVoiceLines
 * @text Sound: Stop All Voice Lines
 * @desc Stops all currently playing Voice Lines.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SoundStopTargetVoiceLines
 * @text Sound: Stop Target Voice Lines
 * @desc Stops target Voice Lines if they are currently playing.
 *
 * @arg ListedNames:arraystr
 * @text Specific Filenames
 * @parent AutoVA
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filenames of sound files that should be stopped as a
 * Voice Line. Case sensitive.
 * @default []
 *
 * @arg NameTextMarkers:arraystr
 * @text Filename Text Markers
 * @parent AutoVA
 * @type string[]
 * @desc Text markers used to automatically mark filenames
 * (not folders) as a Voice Line. Case sensitive.
 * @default []
 *
 * @arg ListedFolders:arraystr
 * @text Specific Folders
 * @parent AutoVA
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Anything that contains these folder names will be stopped as a
 * Voice Line. These can be main or sub folders. Case sensitive.
 * @default []
 *
 * @arg FolderTextMarkers:arraystr
 * @text Folder Text Markers
 * @parent AutoVA
 * @type string[]
 * @desc Text markers used to automatically mark folders
 * (not filenames) for Voice Line playing. Case sensitive.
 * @default []
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
 * @param VoiceActControl
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param General
 *
 * @param newPageRegisterLastSound:eval
 * @text New Page > Register Voice
 * @parent General
 * @type boolean
 * @on Register Voice
 * @off Don't Register
 * @desc If there is a PlaySE event command that places a voice
 * sound before a new Message page, register it for replay?
 * @default true
 *
 * @param stopVoicesOnNewMessage:eval
 * @text End Page > Stop Voice
 * @parent General
 * @type boolean
 * @on Stop Voices
 * @off Don't Stop
 * @desc Stop voices from playing whenever ending Message Window pages?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent General
 * @desc Command name of the option.
 * @default Voice Volume
 *
 * @param Sprite:struct
 * @text Replace Voice Sprite
 * @parent General
 * @type struct<Sprite>
 * @desc Settings that adjust the Replay Voice Sprite Button.
 * @default {"Show:eval":"true","Icons":"","iconNoHover:num":"20","iconOnHover:num":"4","position:num":"8","positionOffsetX:num":"+0","positionOffsetY:num":"+0","Buffer":"","bufferLeftSideFaceImage:eval":"true","bufferRightSideWordWrap:eval":"true","bufferWidth:num":"8"}
 *
 * @param Localization:struct
 * @text Language Switching
 * @parent General
 * @type struct<Localization>
 * @desc Settings used to adjust audio changes for different languages.
 * @default {}
 * 
 * @param AutoVA
 * @text Automatic Voice Acting
 *
 * @param AutoVaListedNames:arraystr
 * @text Specific Filenames
 * @parent AutoVA
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Filenames of sound files that should be played as a
 * Voice Line. Case sensitive.
 * @default []
 *
 * @param AutoVaNameTextMarkers:arraystr
 * @text Filename Text Markers
 * @parent AutoVA
 * @type string[]
 * @desc Text markers used to automatically mark filenames
 * (not folders) as a Voice Line. Case sensitive.
 * @default ["[VA]","Line"]
 *
 * @param AutoVaListedFolders:arraystr
 * @text Specific Folders
 * @parent AutoVA
 * @type file[]
 * @dir audio/se/
 * @require 1
 * @desc Anything that contains these folder names will be played as a
 * Voice Line. These can be main or sub folders. Case sensitive.
 * @default []
 *
 * @param AutoVaFolderTextMarkers:arraystr
 * @text Folder Text Markers
 * @parent AutoVA
 * @type string[]
 * @desc Text markers used to automatically mark folders
 * (not filenames) for Voice Line playing. Case sensitive.
 * @default ["Voice","Line"]
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
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param Show:eval
 * @text Show Sprite
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows the Replay Voice Sprite on the Message Window?
 * @default true
 * 
 * @param Icons
 *
 * @param iconNoHover:num
 * @text No Hover
 * @parent Icons
 * @desc What icon is used when there is no mouse cursor hovering over it.
 * @default 20
 *
 * @param iconOnHover:num
 * @text Hovering
 * @parent Icons
 * @desc What icon is used when there is a mouse cursor hovering over it.
 * @default 4
 *
 * @param position:num
 * @text Positioning
 * @type select
 * @option Upper Left
 * @value 7
 * @option Face Upper Right
 * @value 8
 * @option Upper Right
 * @value 9
 * @option Middle Left
 * @value 4
 * @option Face Middle Right
 * @value 5
 * @option Middle Right
 * @value 6
 * @option Lower Left
 * @value 1
 * @option Face Lower Right
 * @value 2
 * @option Lower Right
 * @value 3
 * @desc Where do you wish to position the Replay Voice Sprite?
 * @default 8
 *
 * @param positionOffsetX:num
 * @text Offset X
 * @parent position:str
 * @desc Offsets the sprite x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param positionOffsetY:num
 * @text Offset Y
 * @parent position:str
 * @desc Offsets the sprite y position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param Buffer
 *
 * @param bufferLeftSideFaceImage:eval
 * @text Buffer Left
 * @parent Buffer
 * @type boolean
 * @on Buffer
 * @off Don't Buffer
 * @desc Buffer the left positions unless there is a face image.
 * Does not apply if there is no face graphic.
 * @default true
 *
 * @param bufferRightSideWordWrap:eval
 * @text Buffer Right
 * @parent Buffer
 * @type boolean
 * @on Buffer
 * @off Don't Buffer
 * @desc Buffer the right positions for word wrap to not overlap.
 * Non-word wrap can still overlap.
 * @default true
 *
 * @param bufferWidth:num
 * @text Buffer Width
 * @parent Buffer
 * @desc What is the extra pixel width used for a buffer in
 * addition to the icon width?
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Voice Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default BN-বাংলা
 * 
 * @param Chinese:str
 * @text Chinese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default CN-中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default CS-Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default DA-Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default NL-Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default EN-English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default FI-Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default FR-Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default DE-Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default EL-Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default HI-हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default HU-Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ID-Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default IT-Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default JP-日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default KO-한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default NO-Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default PL-Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default PT-Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default RO-Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default RU-Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default SK-Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ES-Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default SV-Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default TA-தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default TH-ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default TR-Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Voice Language Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VoiceLang:
 *
 * @param Bengali:str
 * @text Bengali
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Chinese:str
 * @text Chinese
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Czech:str
 * @text Czech
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Danish:str
 * @text Danish
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Dutch:str
 * @text Dutch
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param English:str
 * @text English
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Finnish:str
 * @text Finnish
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param French:str
 * @text French
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param German:str
 * @text German
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Greek:str
 * @text Greek
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Hindi:str
 * @text Hindi
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Italian:str
 * @text Italian
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Japanese:str
 * @text Japanese
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Korean:str
 * @text Korean
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Polish:str
 * @text Polish
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Romanian:str
 * @text Romanian
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Russian:str
 * @text Russian
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Slovak:str
 * @text Slovak
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Spanish:str
 * @text Spanish
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Swedish:str
 * @text Swedish
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Tamil:str
 * @text Tamil
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Thai:str
 * @text Thai
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 * 
 * @param Turkish:str
 * @text Turkish
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc What file is played with this voice language?
 * @default
 *
 */
//=============================================================================

const _0x18da95=_0x28ae;(function(_0x5efa8b,_0x3ce4d0){const _0x533576=_0x28ae,_0x228f0c=_0x5efa8b();while(!![]){try{const _0x4ade1c=-parseInt(_0x533576(0x27c))/0x1*(parseInt(_0x533576(0x2ac))/0x2)+parseInt(_0x533576(0x25c))/0x3*(parseInt(_0x533576(0x2e1))/0x4)+parseInt(_0x533576(0x2dd))/0x5*(parseInt(_0x533576(0x26e))/0x6)+parseInt(_0x533576(0x24a))/0x7+-parseInt(_0x533576(0x28c))/0x8+parseInt(_0x533576(0x24e))/0x9+parseInt(_0x533576(0x2ba))/0xa;if(_0x4ade1c===_0x3ce4d0)break;else _0x228f0c['push'](_0x228f0c['shift']());}catch(_0xfc8cd4){_0x228f0c['push'](_0x228f0c['shift']());}}}(_0x22c5,0x4c42e));var label=_0x18da95(0x2c0),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine','VisuMZ_1_MessageCore','VisuMZ_1_OptionsCore'],pluginData=$plugins[_0x18da95(0x20b)](function(_0x1936d7){const _0xc87bd4=_0x18da95;return _0x1936d7[_0xc87bd4(0x2b9)]&&_0x1936d7['description']['includes']('['+label+']');})[0x0];function _0x28ae(_0xd8b5e5,_0x1b2a65){const _0x22c588=_0x22c5();return _0x28ae=function(_0x28ae97,_0x5d29ea){_0x28ae97=_0x28ae97-0x1f4;let _0x1b85ad=_0x22c588[_0x28ae97];return _0x1b85ad;},_0x28ae(_0xd8b5e5,_0x1b2a65);}VisuMZ[label][_0x18da95(0x25b)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x18da95(0x2a8)]=function(_0x415848,_0x31adf0){const _0x409332=_0x18da95;for(const _0x1833da in _0x31adf0){if(_0x1833da[_0x409332(0x1f6)](/(.*):(.*)/i)){const _0x1cdca8=String(RegExp['$1']),_0x2fa85c=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x53ae85,_0x4159d6,_0xf455e4;switch(_0x2fa85c){case _0x409332(0x2ad):_0x53ae85=_0x31adf0[_0x1833da]!==''?Number(_0x31adf0[_0x1833da]):0x0;break;case _0x409332(0x29f):_0x4159d6=_0x31adf0[_0x1833da]!==''?JSON[_0x409332(0x227)](_0x31adf0[_0x1833da]):[],_0x53ae85=_0x4159d6[_0x409332(0x20a)](_0x2fdef1=>Number(_0x2fdef1));break;case _0x409332(0x244):_0x53ae85=_0x31adf0[_0x1833da]!==''?eval(_0x31adf0[_0x1833da]):null;break;case'ARRAYEVAL':_0x4159d6=_0x31adf0[_0x1833da]!==''?JSON[_0x409332(0x227)](_0x31adf0[_0x1833da]):[],_0x53ae85=_0x4159d6[_0x409332(0x20a)](_0x15a0d8=>eval(_0x15a0d8));break;case'JSON':_0x53ae85=_0x31adf0[_0x1833da]!==''?JSON['parse'](_0x31adf0[_0x1833da]):'';break;case'ARRAYJSON':_0x4159d6=_0x31adf0[_0x1833da]!==''?JSON[_0x409332(0x227)](_0x31adf0[_0x1833da]):[],_0x53ae85=_0x4159d6[_0x409332(0x20a)](_0x20beab=>JSON[_0x409332(0x227)](_0x20beab));break;case _0x409332(0x215):_0x53ae85=_0x31adf0[_0x1833da]!==''?new Function(JSON[_0x409332(0x227)](_0x31adf0[_0x1833da])):new Function(_0x409332(0x261));break;case'ARRAYFUNC':_0x4159d6=_0x31adf0[_0x1833da]!==''?JSON[_0x409332(0x227)](_0x31adf0[_0x1833da]):[],_0x53ae85=_0x4159d6[_0x409332(0x20a)](_0x2566dc=>new Function(JSON[_0x409332(0x227)](_0x2566dc)));break;case'STR':_0x53ae85=_0x31adf0[_0x1833da]!==''?String(_0x31adf0[_0x1833da]):'';break;case _0x409332(0x240):_0x4159d6=_0x31adf0[_0x1833da]!==''?JSON[_0x409332(0x227)](_0x31adf0[_0x1833da]):[],_0x53ae85=_0x4159d6[_0x409332(0x20a)](_0xc80af4=>String(_0xc80af4));break;case'STRUCT':_0xf455e4=_0x31adf0[_0x1833da]!==''?JSON[_0x409332(0x227)](_0x31adf0[_0x1833da]):{},_0x53ae85=VisuMZ['ConvertParams']({},_0xf455e4);break;case _0x409332(0x2e2):_0x4159d6=_0x31adf0[_0x1833da]!==''?JSON['parse'](_0x31adf0[_0x1833da]):[],_0x53ae85=_0x4159d6[_0x409332(0x20a)](_0x5991e9=>VisuMZ[_0x409332(0x2a8)]({},JSON['parse'](_0x5991e9)));break;default:continue;}_0x415848[_0x1cdca8]=_0x53ae85;}}return _0x415848;},(_0x2a01af=>{const _0x19074e=_0x18da95,_0x5976ae=_0x2a01af[_0x19074e(0x29d)];for(const _0x20a4a0 of dependencies){if(_0x19074e(0x2dc)!=='lvIma'){if(!Imported[_0x20a4a0]){alert(_0x19074e(0x2d4)['format'](_0x5976ae,_0x20a4a0)),SceneManager[_0x19074e(0x21e)]();break;}}else this[_0x19074e(0x2c2)](_0x123c13['x'],_0x4fdfa2['y'],_0x16b750[_0x19074e(0x270)],_0x33f93e[_0x19074e(0x27b)]);}const _0x3af664=_0x2a01af['description'];if(_0x3af664['match'](/\[Version[ ](.*?)\]/i)){if(_0x19074e(0x249)!==_0x19074e(0x249)){if(_0x5d3aac[_0x19074e(0x2b2)])return;if(!_0x491f6f['VOICE_ACT_CONTROL'][_0x19074e(0x2b0)])return;const _0x30afa6=_0x5e255d[_0x19074e(0x2d5)];if(_0x30afa6[_0x19074e(0x2a3)]<=0x0)return;const _0x3644fa=_0x30afa6[_0x30afa6[_0x19074e(0x2a3)]-0x1];if(!_0x3644fa['isPlaying']())return;_0x102b79['_voiceSound']={'name':_0x3644fa[_0x19074e(0x29d)],'volume':_0x3644fa[_0x19074e(0x281)]*0x64,'pitch':_0x3644fa[_0x19074e(0x232)]*0x64,'pan':_0x3644fa['pan']*0x64};if(_0x439451[_0x19074e(0x2b3)]){if(_0x5174d9[_0x19074e(0x25e)][_0x19074e(0x221)]<1.07){let _0x108e4c='';_0x108e4c+='VisuMZ_3_MessageLog\x20needs\x20to\x20be\x20updated\x20',_0x108e4c+=_0x19074e(0x2b5),_0x2e7084(_0x108e4c),_0x22fcfb['exit']();}const _0x4d677c=_0xabd6da[_0x19074e(0x246)]();_0x4d677c[_0x19074e(0x2d7)]={'name':_0x3644fa[_0x19074e(0x29d)],'volume':_0x3644fa['_volume']*0x64,'pitch':_0x3644fa['pitch']*0x64,'pan':_0x3644fa[_0x19074e(0x2cc)]*0x64};}}else{const _0x3b4a5d=Number(RegExp['$1']);_0x3b4a5d!==VisuMZ[label][_0x19074e(0x221)]&&(alert(_0x19074e(0x233)['format'](_0x5976ae,_0x3b4a5d)),SceneManager[_0x19074e(0x21e)]());}}if(_0x3af664['match'](/\[Tier[ ](\d+)\]/i)){const _0x2edcd4=Number(RegExp['$1']);_0x2edcd4<tier?(alert(_0x19074e(0x2bd)[_0x19074e(0x2d9)](_0x5976ae,_0x2edcd4,tier)),SceneManager[_0x19074e(0x21e)]()):tier=Math[_0x19074e(0x26b)](_0x2edcd4,tier);}VisuMZ[_0x19074e(0x2a8)](VisuMZ[label][_0x19074e(0x25b)],_0x2a01af[_0x19074e(0x1f8)]);})(pluginData),PluginManager[_0x18da95(0x1fc)](pluginData[_0x18da95(0x29d)],_0x18da95(0x21a),_0xae23b7=>{const _0x8036b7=_0x18da95;VisuMZ[_0x8036b7(0x2a8)](_0xae23b7,_0xae23b7);const _0x3d89fd={'name':_0xae23b7[_0x8036b7(0x29d)]||'','volume':_0xae23b7[_0x8036b7(0x2aa)]||0x0,'pitch':_0xae23b7[_0x8036b7(0x232)]||0x0,'pan':_0xae23b7[_0x8036b7(0x2cc)]||0x0};AudioManager[_0x8036b7(0x27d)](_0x3d89fd);}),PluginManager[_0x18da95(0x1fc)](pluginData[_0x18da95(0x29d)],_0x18da95(0x2bf),_0x19c697=>{const _0x87c767=_0x18da95;VisuMZ['ConvertParams'](_0x19c697,_0x19c697);const _0x552ad7={'name':_0x19c697[_0x87c767(0x29d)]||'','volume':_0x19c697[_0x87c767(0x2aa)]||0x0,'pitch':_0x19c697[_0x87c767(0x232)]||0x0,'pan':_0x19c697[_0x87c767(0x2cc)]||0x0};if(AudioManager[_0x87c767(0x2a2)]()){const _0x3e2aff=_0x19c697['Language']||{},_0x2b760d=ConfigManager['voiceLocale'];_0x3e2aff[_0x2b760d]&&_0x3e2aff[_0x2b760d][_0x87c767(0x2de)]()['trim']()!=='UNTITLED'&&(_0x552ad7[_0x87c767(0x29d)]=_0x3e2aff[_0x2b760d]);}AudioManager[_0x87c767(0x27d)](_0x552ad7);}),PluginManager[_0x18da95(0x1fc)](pluginData[_0x18da95(0x29d)],'SoundStopAllVoiceLines',_0xd45fa8=>{const _0x2cefce=_0x18da95;AudioManager[_0x2cefce(0x201)]();}),PluginManager[_0x18da95(0x1fc)](pluginData[_0x18da95(0x29d)],_0x18da95(0x247),_0x5865ec=>{const _0x3abaa2=_0x18da95;VisuMZ[_0x3abaa2(0x2a8)](_0x5865ec,_0x5865ec);const _0x195aa0={'ListedNames':_0x5865ec[_0x3abaa2(0x29a)]||[],'NameTextMarkers':_0x5865ec['NameTextMarkers']||[],'ListedFolders':_0x5865ec[_0x3abaa2(0x2bc)]||[],'FolderTextMarkers':_0x5865ec['FolderTextMarkers']||[]};AudioManager[_0x3abaa2(0x274)](_0x195aa0);}),VisuMZ['VoiceActControl'][_0x18da95(0x287)]={'MsgVoiceSfx':/<(?:VOICE|VA):[ ]*(.*?)>/gi,'MsgNoReplay':/<NO (?:VOICE|VA) REPLAY>/gi},VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x22c)]=Scene_Boot[_0x18da95(0x214)][_0x18da95(0x25a)],Scene_Boot[_0x18da95(0x214)][_0x18da95(0x25a)]=function(){const _0x39734a=_0x18da95;this[_0x39734a(0x2e6)](),VisuMZ[_0x39734a(0x2c0)][_0x39734a(0x22c)][_0x39734a(0x23d)](this);},Scene_Boot[_0x18da95(0x214)]['process_VisuMZ_VoiceActControl']=function(){const _0x2ef611=_0x18da95;if(VisuMZ[_0x2ef611(0x2c0)][_0x2ef611(0x273)]())return;const _0x226201=VisuMZ[_0x2ef611(0x2c0)][_0x2ef611(0x296)]();if(!_0x226201)return;const _0x474444=VisuMZ[_0x2ef611(0x2c0)][_0x2ef611(0x2e0)](_0x226201);if(!_0x474444)return;const _0x463010=VisuMZ['VoiceActControl'][_0x2ef611(0x27a)](_0x474444);VisuMZ['VoiceActControl'][_0x2ef611(0x22f)](_0x226201,_0x463010);},VisuMZ[_0x18da95(0x2c0)]['FindVoiceOption']=function(){const _0x2b4e75=_0x18da95,_0x521168=VisuMZ[_0x2b4e75(0x291)]['Settings'][_0x2b4e75(0x205)];for(const _0x5d41b6 of _0x521168){const _0x5b2fa4=_0x5d41b6[_0x2b4e75(0x216)];for(const _0x2d89af of _0x5b2fa4){const _0x53bbf9=_0x2d89af[_0x2b4e75(0x2cb)]||'';if(_0x53bbf9===_0x2b4e75(0x25d))return!![];}}return![];},VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x296)]=function(){const _0x397d2a=_0x18da95,_0x1174c7=VisuMZ[_0x397d2a(0x291)][_0x397d2a(0x25b)][_0x397d2a(0x205)];for(const _0x12c39c of _0x1174c7){const _0x5c0365=_0x12c39c[_0x397d2a(0x216)];for(const _0x1b13d5 of _0x5c0365){const _0x1ca389=_0x1b13d5[_0x397d2a(0x2cb)]||'';if(_0x1ca389===_0x397d2a(0x2cd))return _0x12c39c;if(_0x1ca389==='bgsVolume')return _0x12c39c;if(_0x1ca389===_0x397d2a(0x24f))return _0x12c39c;if(_0x1ca389==='seVolume')return _0x12c39c;if(_0x1ca389==='masterVolume')return _0x12c39c;}}return null;},VisuMZ['VoiceActControl'][_0x18da95(0x2e0)]=function(_0x2113a1){const _0x42ced0=_0x18da95,_0x41d8a9=_0x2113a1[_0x42ced0(0x216)],_0x6d0b9c=[_0x42ced0(0x2ce),'meVolume',_0x42ced0(0x253),_0x42ced0(0x2cd)];for(const _0x2c2240 of _0x6d0b9c){const _0x750613=_0x41d8a9[_0x42ced0(0x208)](_0x563a70=>_0x563a70[_0x42ced0(0x2cb)]===_0x2c2240);if(_0x750613)return _0x750613;}return null;},VisuMZ['VoiceActControl'][_0x18da95(0x27a)]=function(_0x4bf80c){const _0x22de9d=_0x18da95,_0x297d61=JsonEx[_0x22de9d(0x2c8)](_0x4bf80c);_0x297d61[_0x22de9d(0x2cb)]='voiceVolume',_0x297d61['TextStr']=TextManager['voiceVolume'];const _0x1b4806=[_0x22de9d(0x262),_0x22de9d(0x27e),_0x22de9d(0x279),_0x22de9d(0x231),'ProcessOkJS',_0x22de9d(0x2b1),'CursorLeftJS','DefaultJS',_0x22de9d(0x28b),_0x22de9d(0x2a6)];for(const _0xa59b40 of _0x1b4806){if('IHrTN'!==_0x22de9d(0x2ca))_0x297d61[_0xa59b40]=_0x4bf80c[_0xa59b40];else return;}return _0x297d61;},VisuMZ['VoiceActControl'][_0x18da95(0x22f)]=function(_0x2ed9fc,_0x28a777){const _0x52a23a=_0x18da95,_0x5cece9=_0x2ed9fc['List'],_0x152ae0=[_0x52a23a(0x2ce),_0x52a23a(0x24f),_0x52a23a(0x253),_0x52a23a(0x2cd)];for(const _0x4883e2 of _0x152ae0){const _0x14bc56=_0x5cece9['findIndex'](_0x483ebd=>_0x483ebd[_0x52a23a(0x2cb)]===_0x4883e2);if(_0x14bc56>=0x0){if(_0x52a23a(0x2e3)===_0x52a23a(0x2e3)){_0x5cece9['splice'](_0x14bc56+0x1,0x0,_0x28a777);return;}else this[_0x52a23a(0x1f4)](this[_0x52a23a(0x22b)]);}}return null;},Object[_0x18da95(0x238)](ConfigManager,_0x18da95(0x25d),{'get':function(){const _0x3a0052=_0x18da95;return AudioManager[_0x3a0052(0x29e)];},'set':function(_0x220ca6){const _0x3166ec=_0x18da95;AudioManager[_0x3166ec(0x25d)]=_0x220ca6;},'configurable':!![]}),ConfigManager[_0x18da95(0x2a7)]=0x64,ConfigManager[_0x18da95(0x25d)]=ConfigManager[_0x18da95(0x2a7)][_0x18da95(0x276)](0x0,0x64),ConfigManager['voiceLocale']=VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x2a1)]['DefaultLocale']||_0x18da95(0x265),VisuMZ['VoiceActControl'][_0x18da95(0x25f)]=ConfigManager[_0x18da95(0x209)],ConfigManager[_0x18da95(0x209)]=function(){const _0x2c5ff8=_0x18da95,_0x4c2097=VisuMZ[_0x2c5ff8(0x2c0)][_0x2c5ff8(0x25f)][_0x2c5ff8(0x23d)](this);return _0x4c2097['voiceLocale']=this[_0x2c5ff8(0x2ae)],_0x4c2097[_0x2c5ff8(0x25d)]=this['voiceVolume'],_0x4c2097;},VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x219)]=ConfigManager[_0x18da95(0x283)],ConfigManager['applyData']=function(_0x488f6b){const _0x579aed=_0x18da95;VisuMZ[_0x579aed(0x2c0)][_0x579aed(0x219)]['call'](this,_0x488f6b);const _0x53e6fe=ConfigManager[_0x579aed(0x2a7)]['clamp'](0x0,0x64);this['readFlag'](_0x488f6b,_0x579aed(0x25d),_0x53e6fe),_0x579aed(0x2ae)in _0x488f6b?this['voiceLocale']=_0x488f6b[_0x579aed(0x2ae)]:_0x579aed(0x2c7)!==_0x579aed(0x1ff)?this[_0x579aed(0x2ae)]=VisuMZ[_0x579aed(0x2c0)]['Settings'][_0x579aed(0x2a1)][_0x579aed(0x268)]||_0x579aed(0x265):_0x323467[_0x579aed(0x2ce)]!==0x0?_0x1486cc[_0x579aed(0x25d)]=0x0:_0x3e2477[_0x579aed(0x25d)]=0x64,_0x579aed(0x25d)in _0x488f6b?_0x579aed(0x2e4)!==_0x579aed(0x2a0)?this[_0x579aed(0x25d)]=_0x488f6b['voiceVolume']:_0x5222ed[_0x579aed(0x29d)]=_0x24d0cf[_0x573bb1]:this['voiceVolume']=_0x53e6fe;},AudioManager[_0x18da95(0x29e)]=0x64,AudioManager[_0x18da95(0x2d5)]=[],Object[_0x18da95(0x238)](AudioManager,_0x18da95(0x25d),{'get':function(){const _0x2aeabd=_0x18da95;return this[_0x2aeabd(0x29e)];},'set':function(_0xf0ada8){const _0x99bf56=_0x18da95;this[_0x99bf56(0x29e)]=_0xf0ada8;},'configurable':!![]}),VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x2cf)]=AudioManager[_0x18da95(0x24c)],AudioManager['playSe']=function(_0x1907bb){const _0x1e495d=_0x18da95,_0x817c49=![];if(this[_0x1e495d(0x2bb)](_0x1907bb)){if(_0x1e495d(0x21c)!==_0x1e495d(0x1fb)){if(_0x817c49)console[_0x1e495d(0x2c4)]('VA');this[_0x1e495d(0x27d)](_0x1907bb);}else{const _0x22edd5=_0x1bdcf9[_0x1e495d(0x225)];if(!_0x22edd5[_0x1e495d(0x26d)])return![];if([0x2,0x5,0x8]['includes'](this[_0x1e495d(0x1fd)]))return _0x57a91d[_0x1e495d(0x217)]()==='';return[0x1,0x4,0x7][_0x1e495d(0x226)](this['_position']);}}else{if(_0x1e495d(0x21b)===_0x1e495d(0x264))return _0x11bcfc[_0x1e495d(0x29e)];else{if(_0x817c49)console['log']('SE');VisuMZ[_0x1e495d(0x2c0)][_0x1e495d(0x2cf)]['call'](this,_0x1907bb);}}},AudioManager['isVisuMzLocalizationEnabled']=function(){const _0x5246ab=_0x18da95;return VisuMZ[_0x5246ab(0x2c0)][_0x5246ab(0x25b)][_0x5246ab(0x2a1)]['Enable'];},AudioManager[_0x18da95(0x27d)]=function(_0x2c150c){const _0x4d73bd=_0x18da95;if(_0x2c150c['name']){const _0x17241d=this[_0x4d73bd(0x2d5)][_0x4d73bd(0x20b)](_0x560c62=>_0x560c62[_0x4d73bd(0x234)]===Graphics[_0x4d73bd(0x234)]);if(_0x17241d['find'](_0x4c1ad9=>_0x4c1ad9[_0x4d73bd(0x29d)]===_0x2c150c['name']))return;const _0x227c8c=this[_0x4d73bd(0x254)](_0x4d73bd(0x2d0),_0x2c150c[_0x4d73bd(0x29d)]);this[_0x4d73bd(0x23b)](_0x227c8c,_0x2c150c),_0x227c8c[_0x4d73bd(0x26a)](![]),this[_0x4d73bd(0x2d5)][_0x4d73bd(0x2c9)](_0x227c8c),this[_0x4d73bd(0x2af)]();}},AudioManager[_0x18da95(0x23b)]=function(_0x1272ce,_0x3db51b){const _0x5754f3=_0x18da95;this[_0x5754f3(0x266)](_0x1272ce,this[_0x5754f3(0x29e)],_0x3db51b);},AudioManager[_0x18da95(0x2af)]=function(){const _0x3085e0=_0x18da95;for(const _0x556b07 of this[_0x3085e0(0x2d5)]){!_0x556b07[_0x3085e0(0x1f5)]()&&_0x556b07[_0x3085e0(0x224)]();}this[_0x3085e0(0x2d5)]=this['_voiceBuffers'][_0x3085e0(0x20b)](_0x383f33=>_0x383f33[_0x3085e0(0x1f5)]());},AudioManager[_0x18da95(0x201)]=function(){const _0x23f974=_0x18da95;for(const _0xdc7f99 of this[_0x23f974(0x2d5)]){_0xdc7f99['destroy']();}this[_0x23f974(0x2d5)]=[];},AudioManager[_0x18da95(0x2bb)]=function(_0x53377b){const _0x2c9a36=_0x18da95,_0x39daa1=_0x53377b['name']||'';if(this['isSpecificVoiceLineListed'](_0x39daa1))return!![];if(this[_0x2c9a36(0x2c5)](_0x39daa1))return!![];if(this['isInSpecificVoiceLineFolder'](_0x39daa1))return!![];if(this['hasListedVoiceFolderTextMarkers'](_0x39daa1))return!![];return![];},AudioManager[_0x18da95(0x299)]=function(_0x1b1a3a){const _0x5eaeb2=_0x18da95,_0x310124=VisuMZ[_0x5eaeb2(0x2c0)][_0x5eaeb2(0x25b)]['AutoVaListedNames'];return _0x310124['includes'](_0x1b1a3a);},AudioManager[_0x18da95(0x2c5)]=function(_0x4add1a){const _0x47b278=_0x18da95,_0x592bb9=VisuMZ['VoiceActControl']['Settings'][_0x47b278(0x211)],_0x6b63c5=_0x4add1a[_0x47b278(0x20e)]('\x5c'),_0xd5e42e=_0x6b63c5['pop']();for(const _0x2bd46c of _0x592bb9){if(_0xd5e42e[_0x47b278(0x226)](_0x2bd46c))return!![];}return![];},AudioManager[_0x18da95(0x272)]=function(_0x1543e8){const _0x4ee251=_0x18da95,_0x3cb892=VisuMZ['VoiceActControl']['Settings']['AutoVaNameTextMarkers'],_0x46b3af=_0x1543e8[_0x4ee251(0x20e)]('\x5c');_0x46b3af[_0x4ee251(0x290)]();for(const _0x2f0cc2 of _0x46b3af){if(_0x4ee251(0x298)!==_0x4ee251(0x298)){const _0x305336=_0x41c31d[_0x4ee251(0x2c0)]['Settings'][_0x4ee251(0x280)];return _0x305336['includes'](_0x512f06);}else{if(_0x3cb892[_0x4ee251(0x226)](_0x2f0cc2))return!![];}}return![];},AudioManager[_0x18da95(0x28f)]=function(_0x4c598e){const _0x2d82be=_0x18da95,_0x2c786f=VisuMZ['VoiceActControl'][_0x2d82be(0x25b)][_0x2d82be(0x211)],_0x1e8624=_0x4c598e[_0x2d82be(0x20e)]('\x5c');_0x1e8624[_0x2d82be(0x290)]();for(const _0x3c1ba6 of _0x1e8624){for(const _0xfd3c5c of _0x2c786f){if(_0x2d82be(0x288)==='ZfbVY'){if(_0x3c1ba6['includes'](_0xfd3c5c))return!![];}else _0x49e4d4[_0x2d82be(0x2b2)]=null;}}return![];},AudioManager[_0x18da95(0x274)]=function(_0x15c5b3){const _0x31d5e=_0x18da95;for(const _0x1efff2 of this[_0x31d5e(0x2d5)]){this['matchesStopVoiceLiterFilter'](_0x15c5b3,_0x1efff2[_0x31d5e(0x29d)])&&_0x1efff2[_0x31d5e(0x224)]();}},AudioManager['matchesStopVoiceLiterFilter']=function(_0x37ffe7,_0x1d9d56){const _0x19a6cd=_0x18da95;if(_0x37ffe7['ListedNames']['includes'](_0x1d9d56))return!![];const _0x3f1f3b=_0x1d9d56[_0x19a6cd(0x20e)]('\x5c'),_0x3b1595=_0x3f1f3b[_0x19a6cd(0x290)](),_0x402e17=_0x37ffe7[_0x19a6cd(0x2d1)];for(const _0x32bf8c of _0x402e17){if(_0x19a6cd(0x2d6)===_0x19a6cd(0x2d6)){if(_0x3b1595[_0x19a6cd(0x226)](_0x32bf8c))return!![];}else{const _0x37cfbc=_0x210528(_0x5647df['$1']);_0x37cfbc!==_0x223581[_0x17b109][_0x19a6cd(0x221)]&&(_0x2c68b6(_0x19a6cd(0x233)[_0x19a6cd(0x2d9)](_0x32f2e7,_0x37cfbc)),_0x1134d3[_0x19a6cd(0x21e)]());}}const _0x8b2dec=_0x37ffe7['ListedFolders'];for(const _0x31ee81 of _0x3f1f3b){if(_0x8b2dec[_0x19a6cd(0x226)](_0x31ee81))return!![];const _0x39761b=_0x37ffe7['FolderTextMarkers'];for(const _0x5acea9 of _0x39761b){if(_0x31ee81[_0x19a6cd(0x226)](_0x5acea9))return!![];}}return![];},TextManager[_0x18da95(0x25d)]=VisuMZ[_0x18da95(0x2c0)]['Settings']['OptionName']??_0x18da95(0x2b8),TextManager[_0x18da95(0x2ae)]=VisuMZ['VoiceActControl']['Settings']['Localization']['Name']??_0x18da95(0x210),TextManager['getVoiceLanguageName']=function(_0x15dad1){const _0xb654ab=_0x18da95;return VisuMZ[_0xb654ab(0x2c0)][_0xb654ab(0x25b)][_0xb654ab(0x2a1)][_0x15dad1]||'';},TextManager[_0x18da95(0x22e)]=function(){const _0x39fd26=_0x18da95,_0x1742b0=ConfigManager[_0x39fd26(0x2ae)]||_0x39fd26(0x265);return this['getVoiceLanguageName'](_0x1742b0);},TextManager[_0x18da95(0x26c)]=function(_0x34eb59){const _0x310379=_0x18da95,_0x3e87c3=VisuMZ['VoiceActControl']['Settings'][_0x310379(0x2a1)][_0x310379(0x293)]||[];let _0x5dc0ff=_0x3e87c3[_0x310379(0x27f)](ConfigManager[_0x310379(0x2ae)]||'English');_0x5dc0ff+=_0x34eb59;const _0x3eb900=_0x3e87c3[_0x5dc0ff]||'';return this['getVoiceLanguageName'](_0x3eb900);},VisuMZ[_0x18da95(0x2c0)]['SceneManager_playTestF6']=SceneManager['playTestF6'],SceneManager[_0x18da95(0x259)]=function(){const _0x2c0739=_0x18da95;if($gameTemp[_0x2c0739(0x200)]()&&VisuMZ['CoreEngine']['Settings'][_0x2c0739(0x20c)][_0x2c0739(0x2db)]){if(_0x2c0739(0x275)===_0x2c0739(0x275))ConfigManager[_0x2c0739(0x2ce)]!==0x0?ConfigManager[_0x2c0739(0x25d)]=0x0:ConfigManager[_0x2c0739(0x25d)]=0x64;else return _0x19e7f2['faceName']()==='';}VisuMZ[_0x2c0739(0x2c0)][_0x2c0739(0x2b4)][_0x2c0739(0x23d)](this);};function Sprite_ReplayVoiceLine(){const _0x2e46de=_0x18da95;this[_0x2e46de(0x23f)](...arguments);}function _0x22c5(){const _0x42c2b8=['pitch','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','frameCount','updateFrame','trim','floor','defineProperty','IconSet','Container','updateVoiceParameters','_offset','call','iconNoHover','initialize','ARRAYSTR','nkThQ','processTouch','bufferWordWrap','EVAL','isRepeated','getLatestMessageLogEntry','SoundStopTargetVoiceLines','Sprite','nuZOb','2083550zPKEPu','_hovered','playSe','getVisibility','394299XqeNJG','meVolume','_hotFrame','pEHuC','isOpen','bgsVolume','createBuffer','setSound','visible','Window_Message_onNewPageMessageCore','isTriggered','playTestF6','onDatabaseLoaded','Settings','51bICEYd','voiceVolume','MessageLog','ConfigManager_makeData','pnpqe','return\x200','ShowJS','NrErh','CCmBi','English','updateBufferParameters','JfUAE','DefaultLocale','XsjJU','play','max','getAudioLanguageAt','bufferLeftSideFaceImage','6bHhJCU','setupFrames','width','Show','isInSpecificVoiceLineFolder','FindVoiceOption','stopSpecificVoiceLines','VKSNZ','clamp','Window_Base_processWrapBreak','qzBTE','ExtJS','PrepareVoiceEntry','height','24AJgnwM','playVoiceLine','EnableJS','indexOf','AutoVaListedNames','_volume','bitmap','applyData','Window_Message_initialize','loadSystem','clearReplayVoiceSound','RegExp','ZfbVY','iconWidth','padding','SaveJS','3140248emZTbL','createReplayVoiceSprite','create','hasListedVoiceFolderTextMarkers','pop','OptionsCore','bufferWidth','Languages','startX','iRwEY','FindAudioCategory','onClick','zvlxu','isSpecificVoiceLineListed','ListedNames','position','replace','name','_voiceVolume','ARRAYNUM','LOcmz','Localization','isVisuMzLocalizationEnabled','length','convertVoiceLines','stopVoicesOnNewMessage','LoadJS','DEFAULT_VOICE_VOLUME','ConvertParams','update','volume','addedHeight','29338JNFqKP','NUM','voiceLocale','cleanupVoiceLines','newPageRegisterLastSound','CursorRightJS','_voiceSound','VisuMZ_3_MessageLog','SceneManager_playTestF6','in\x20order\x20for\x20VisuMZ_2_VoiceActControl\x20to\x20work.','iconHeight','setHotFrame','Voice\x20Volume','status','3349220RjxMZP','isVoiceLine','ListedFolders','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','positionOffsetY','SoundPlayAsVoiceLineLang','VoiceActControl','constructor','setFrame','Window_Message_terminateMessage','log','hasListedVoiceLineTextMarkers','parent','TwALw','makeDeepCopy','push','yTtrF','Symbol','pan','bgmVolume','seVolume','AudioManager_playSe','se/','NameTextMarkers','updatePosition','dWlhs','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_voiceBuffers','RSdyb','replayVoiceSound','VisuMZ_3_MessageLog\x20needs\x20to\x20be\x20updated\x20','format','bufferFaceImage','F6key','fubKs','1408235dcXnwu','toUpperCase','WORD_WRAP_PADDING','CreateVoiceOptionEntry','23276wGBbrf','ARRAYSTRUCT','ZNVmh','mDwxR','OG_WORD_WRAP_PADDING','process_VisuMZ_VoiceActControl','addChild','isPlaying','match','MsgVoiceSfx','parameters','iconOnHover','_replaySound','lJtto','registerCommand','_position','initMembers','YdNAU','isPlaytest','stopVoiceLines','loadButtonImage','applyVoiceLines','setupHoverFrames','Categories','bufferRightSideWordWrap','positionOffsetX','find','makeData','map','filter','QoL','setColdFrame','split','YItdU','Voice\x20Language','AutoVaNameTextMarkers','text','hide','prototype','FUNC','List','faceName','_allowVoiceReplay','ConfigManager_applyData','SoundPlayAsVoiceLine','XRpDL','wgxcB','updateVisibility','exit','setXyPosition','VOICE_ACT_CONTROL','version','processWrapBreak','positionOffset','destroy','SETTINGS','includes','parse','onNewPageMessageCore','nYZrk','terminateMessage','_replayVoiceSprite','Scene_Boot_onDatabaseLoaded','Window_Message_isTriggered','getCurrentAudioLanguage','AddVoiceEntry','faceWidth','DrawJS'];_0x22c5=function(){return _0x42c2b8;};return _0x22c5();}Sprite_ReplayVoiceLine[_0x18da95(0x214)]=Object[_0x18da95(0x28e)](Sprite_Clickable['prototype']),Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x2c1)]=Sprite_ReplayVoiceLine,Sprite_ReplayVoiceLine[_0x18da95(0x225)]={'showButton':VisuMZ['VoiceActControl'][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x271)]??!![],'iconNoHover':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)]['Sprite'][_0x18da95(0x23e)]??0x14,'iconOnHover':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x1f9)]??0x4,'position':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x29b)]??0x8,'positionOffset':{'x':VisuMZ['VoiceActControl'][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x207)]??0x0,'y':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x2be)]??0x0},'bufferLeftSideFaceImage':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x26d)]??!![],'bufferRightSideWordWrap':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x248)]['bufferRightSideWordWrap']??!![],'bufferWidth':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)][_0x18da95(0x248)][_0x18da95(0x292)]??0x8},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x23f)]=function(){const _0x22b7aa=_0x18da95;Sprite_Clickable[_0x22b7aa(0x214)][_0x22b7aa(0x23f)]['call'](this),this[_0x22b7aa(0x1fe)](),this[_0x22b7aa(0x26f)](),this[_0x22b7aa(0x213)]();},Sprite_ReplayVoiceLine['prototype']['initMembers']=function(){const _0x350fd6=_0x18da95,_0x18eb75=Sprite_ReplayVoiceLine['SETTINGS'];this[_0x350fd6(0x1fd)]=Number(_0x18eb75[_0x350fd6(0x29b)]),this['_offset']={'x':_0x18eb75[_0x350fd6(0x223)]['x'],'y':_0x18eb75[_0x350fd6(0x223)]['y']};},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x26f)]=function(){const _0x327328=_0x18da95;this[_0x327328(0x202)](),this['setupHoverFrames'](),this[_0x327328(0x235)]();},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x202)]=function(){const _0x4195a5=_0x18da95;this['bitmap']=ImageManager[_0x4195a5(0x285)](_0x4195a5(0x239));},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x204)]=function(){const _0x71b32d=_0x18da95,_0x74745d=Sprite_ReplayVoiceLine[_0x71b32d(0x225)],_0x179d49=ImageManager['iconWidth'],_0x3b1ce4=ImageManager[_0x71b32d(0x2b6)];{const _0x2f1cd8=_0x74745d[_0x71b32d(0x23e)],_0x2e86f6=_0x2f1cd8%0x10*_0x179d49,_0x36cfaa=Math[_0x71b32d(0x237)](_0x2f1cd8/0x10)*_0x3b1ce4;this['setColdFrame'](_0x2e86f6,_0x36cfaa,_0x179d49,_0x3b1ce4);}{const _0xf5fc01=_0x74745d[_0x71b32d(0x1f9)],_0xd4775b=_0xf5fc01%0x10*_0x179d49,_0x38f609=Math['floor'](_0xf5fc01/0x10)*_0x3b1ce4;this['setHotFrame'](_0xd4775b,_0x38f609,_0x179d49,_0x3b1ce4);}},Sprite_ReplayVoiceLine['prototype'][_0x18da95(0x20d)]=function(_0x43ba73,_0x29f8a0,_0x55a687,_0x2559f6){this['_coldFrame']=new Rectangle(_0x43ba73,_0x29f8a0,_0x55a687,_0x2559f6);},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x2b7)]=function(_0x1697af,_0x4da339,_0xe717b4,_0x25fb62){const _0x3d09bc=_0x18da95;this[_0x3d09bc(0x250)]=new Rectangle(_0x1697af,_0x4da339,_0xe717b4,_0x25fb62);},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x21f)]=function(_0x1505ec,_0x42a3f1){const _0x1422fe=_0x18da95;this[_0x1422fe(0x1fd)]=0x0,this[_0x1422fe(0x23c)]['x']=_0x1505ec,this['_offset']['y']=_0x42a3f1,this[_0x1422fe(0x2d2)]();},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x2a9)]=function(){const _0x4e06ef=_0x18da95;Sprite_Clickable[_0x4e06ef(0x214)][_0x4e06ef(0x2a9)]['call'](this),this['updateFrame'](),this[_0x4e06ef(0x21d)](),this['updatePosition'](),this[_0x4e06ef(0x242)]();},Sprite_ReplayVoiceLine['prototype'][_0x18da95(0x235)]=function(){const _0x47d087=_0x18da95,_0xecb03a=this['_hovered']?this[_0x47d087(0x250)]:this['_coldFrame'];_0xecb03a&&this[_0x47d087(0x2c2)](_0xecb03a['x'],_0xecb03a['y'],_0xecb03a[_0x47d087(0x270)],_0xecb03a[_0x47d087(0x27b)]);},Sprite_ReplayVoiceLine['prototype'][_0x18da95(0x21d)]=function(){const _0x75dbf2=_0x18da95;this[_0x75dbf2(0x256)]=this['getVisibility']()&&!!this['_replaySound'];},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x24d)]=function(){const _0x4a6c59=_0x18da95;if(this[_0x4a6c59(0x2c6)]&&!this['parent'][_0x4a6c59(0x218)])return![];if(this[_0x4a6c59(0x1fd)]===0x0)return!![];return this[_0x4a6c59(0x2c6)]&&this[_0x4a6c59(0x2c6)][_0x4a6c59(0x252)]();},Sprite_ReplayVoiceLine[_0x18da95(0x214)]['updatePosition']=function(){const _0x1359e4=_0x18da95;if(!this['parent'])return;this['x']=0x0;switch(this['_position']){case 0x7:case 0x4:case 0x1:this['x']=this['parent'][_0x1359e4(0x28a)];break;case 0x8:case 0x5:case 0x2:const _0x3c18e1=$gameMessage[_0x1359e4(0x217)]()!=='';_0x3c18e1?this['x']=this['parent'][_0x1359e4(0x28a)]+ImageManager[_0x1359e4(0x230)]-this[_0x1359e4(0x270)]+0x4:_0x1359e4(0x260)===_0x1359e4(0x295)?this[_0x1359e4(0x282)]=_0x365a09[_0x1359e4(0x285)](_0x1359e4(0x239)):this['x']=this[_0x1359e4(0x2c6)]['padding'];break;case 0x9:case 0x6:case 0x3:this['x']=this[_0x1359e4(0x2c6)][_0x1359e4(0x270)]-this[_0x1359e4(0x2c6)][_0x1359e4(0x28a)]-this[_0x1359e4(0x270)];break;}this['x']+=this[_0x1359e4(0x23c)]['x'],this['y']=0x0;switch(this[_0x1359e4(0x1fd)]){case 0x7:case 0x8:case 0x9:this['y']=this['parent'][_0x1359e4(0x28a)];break;case 0x4:case 0x5:case 0x6:this['y']=Math[_0x1359e4(0x237)]((this[_0x1359e4(0x2c6)]['height']-this[_0x1359e4(0x27b)])/0x2);break;case 0x1:case 0x2:case 0x3:this['y']=this[_0x1359e4(0x2c6)][_0x1359e4(0x27b)]-this[_0x1359e4(0x2c6)][_0x1359e4(0x28a)]-this['height'],this['y']-=this['parent'][_0x1359e4(0x2ab)]();break;}this['y']+=this[_0x1359e4(0x23c)]['y'];},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x2da)]=function(){const _0x4c861a=_0x18da95,_0x5b4fc5=Sprite_ReplayVoiceLine[_0x4c861a(0x225)];if(!_0x5b4fc5[_0x4c861a(0x26d)])return![];if([0x2,0x5,0x8][_0x4c861a(0x226)](this[_0x4c861a(0x1fd)])){if(_0x4c861a(0x267)!==_0x4c861a(0x269))return $gameMessage[_0x4c861a(0x217)]()==='';else{if(this['_replayVoiceSprite']){const _0x5122b7=_0x422f29['SETTINGS'];this[_0x4c861a(0x22b)][_0x4c861a(0x255)](_0x5300fa[_0x4c861a(0x2b2)]),this[_0x4c861a(0x22b)][_0x4c861a(0x2da)]()&&this[_0x4c861a(0x218)]&&(_0x49005c[_0x4c861a(0x294)]=_0x48ccc3['max'](_0x1e0e04[_0x4c861a(0x294)],_0x433a77[_0x4c861a(0x289)]+_0x5122b7[_0x4c861a(0x292)]));}this[_0x4c861a(0x23a)]&&this[_0x4c861a(0x1f4)](this['_replayVoiceSprite']);}}return[0x1,0x4,0x7][_0x4c861a(0x226)](this[_0x4c861a(0x1fd)]);},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x243)]=function(){const _0x4362a4=_0x18da95;if(!this['visible'])return![];const _0x2256e6=Sprite_ReplayVoiceLine[_0x4362a4(0x225)];if(!_0x2256e6[_0x4362a4(0x206)])return![];return[0x3,0x6,0x9][_0x4362a4(0x226)](this[_0x4362a4(0x1fd)]);},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x297)]=function(){const _0x2c3334=_0x18da95;if(!this[_0x2c3334(0x1fa)])return;AudioManager['stopVoiceLines'](),AudioManager[_0x2c3334(0x27d)](this['_replaySound']);},Sprite_ReplayVoiceLine[_0x18da95(0x214)][_0x18da95(0x255)]=function(_0x8cd084){this['_replaySound']=_0x8cd084;},Window_Message[_0x18da95(0x220)]={'newPageRegisterLastSound':VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x25b)]['newPageRegisterLastSound']??!![],'stopVoicesOnNewMessage':VisuMZ[_0x18da95(0x2c0)]['Settings'][_0x18da95(0x2a5)]??!![]},VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x284)]=Window_Message[_0x18da95(0x214)]['initialize'],Window_Message[_0x18da95(0x214)]['initialize']=function(_0x200572){const _0x44e21f=_0x18da95;VisuMZ[_0x44e21f(0x2c0)]['Window_Message_initialize'][_0x44e21f(0x23d)](this,_0x200572),this[_0x44e21f(0x28d)]();},Window_Message[_0x18da95(0x214)][_0x18da95(0x28d)]=function(){const _0x306719=_0x18da95;if(!Sprite_ReplayVoiceLine['SETTINGS']['showButton'])return;const _0x5ad3ff=new Sprite_ReplayVoiceLine();this[_0x306719(0x1f4)](_0x5ad3ff),this[_0x306719(0x22b)]=_0x5ad3ff;},VisuMZ[_0x18da95(0x2c0)]['Window_Message_isTriggered']=Window_Message[_0x18da95(0x214)][_0x18da95(0x258)],Window_Message[_0x18da95(0x214)][_0x18da95(0x258)]=function(){const _0x5acc5d=_0x18da95,_0x2ebf45=this[_0x5acc5d(0x22b)];if(TouchInput[_0x5acc5d(0x245)]()&&_0x2ebf45&&_0x2ebf45[_0x5acc5d(0x24b)])return![];return VisuMZ['VoiceActControl'][_0x5acc5d(0x22d)]['call'](this);},Window_Base[_0x18da95(0x2e5)]=Window_Base[_0x18da95(0x2df)],VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x277)]=Window_Base[_0x18da95(0x214)][_0x18da95(0x222)],Window_Base[_0x18da95(0x214)]['processWrapBreak']=function(_0x3be5a9,_0x5877c1){const _0x49c6f5=_0x18da95;if(this[_0x49c6f5(0x22b)]&&this['_replayVoiceSprite']['bufferFaceImage']()){if(_0x49c6f5(0x241)!==_0x49c6f5(0x241)){const _0x57cde5=![];if(this[_0x49c6f5(0x2bb)](_0x1b81af)){if(_0x57cde5)_0x55b4c7[_0x49c6f5(0x2c4)]('VA');this[_0x49c6f5(0x27d)](_0x40d964);}else{if(_0x57cde5)_0x20d357[_0x49c6f5(0x2c4)]('SE');_0x16fb33[_0x49c6f5(0x2c0)][_0x49c6f5(0x2cf)][_0x49c6f5(0x23d)](this,_0x37b174);}}else{const _0x1a04b7=Sprite_ReplayVoiceLine[_0x49c6f5(0x225)];let _0x22245c=this[_0x49c6f5(0x22b)]['x'];_0x22245c=Math[_0x49c6f5(0x26b)](_0x22245c,ImageManager[_0x49c6f5(0x289)]+_0x1a04b7['bufferWidth']),this[_0x49c6f5(0x22b)][_0x49c6f5(0x2d2)]();}}VisuMZ[_0x49c6f5(0x2c0)][_0x49c6f5(0x277)]['call'](this,_0x3be5a9,_0x5877c1),Window_Base[_0x49c6f5(0x2df)]=Window_Base[_0x49c6f5(0x2e5)];},VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x257)]=Window_Message[_0x18da95(0x214)][_0x18da95(0x228)],Window_Message['prototype'][_0x18da95(0x228)]=function(_0xa70e81){const _0x40edc4=_0x18da95;this[_0x40edc4(0x203)](_0xa70e81),VisuMZ[_0x40edc4(0x2c0)][_0x40edc4(0x257)]['call'](this,_0xa70e81);},Window_Message['prototype']['applyVoiceLines']=function(_0x1ed79c){const _0x1f01bc=_0x18da95;this['_allowVoiceReplay']=!![],this[_0x1f01bc(0x2a4)](_0x1ed79c),this['registerLastPlayedVoiceSound']();if($gameTemp[_0x1f01bc(0x2b2)]){if(this[_0x1f01bc(0x22b)]){const _0x53ebfe=Sprite_ReplayVoiceLine[_0x1f01bc(0x225)];this[_0x1f01bc(0x22b)][_0x1f01bc(0x255)]($gameTemp[_0x1f01bc(0x2b2)]),this[_0x1f01bc(0x22b)][_0x1f01bc(0x2da)]()&&this['_allowVoiceReplay']&&(_0x1ed79c[_0x1f01bc(0x294)]=Math[_0x1f01bc(0x26b)](_0x1ed79c['startX'],ImageManager[_0x1f01bc(0x289)]+_0x53ebfe[_0x1f01bc(0x292)]));}this[_0x1f01bc(0x23a)]&&this[_0x1f01bc(0x1f4)](this[_0x1f01bc(0x22b)]);}},Window_Message[_0x18da95(0x214)]['convertVoiceLines']=function(_0x13375c){const _0x3eb7fd=_0x18da95,_0x1dc79f=VisuMZ['VoiceActControl'][_0x3eb7fd(0x287)];let _0x4314de=_0x13375c[_0x3eb7fd(0x212)];_0x4314de=_0x4314de[_0x3eb7fd(0x29c)](_0x1dc79f[_0x3eb7fd(0x1f7)],(_0x150838,_0x487bf8)=>{const _0x168f18=_0x3eb7fd;_0x487bf8=_0x487bf8[_0x168f18(0x29c)](/\x1bWrapBreak\[0\]/gi,'\x20');const _0x2693be=_0x487bf8[_0x168f18(0x20e)](',')[_0x168f18(0x20a)](_0x49400f=>_0x49400f[_0x168f18(0x236)]());return $gameTemp[_0x168f18(0x2b2)]={'name':String(_0x2693be[0x0]??''),'volume':Number(_0x2693be[0x1]??0x64)[_0x168f18(0x276)](0x0,0x64),'pitch':Number(_0x2693be[0x2]??0x64)[_0x168f18(0x276)](0x0,0xc8),'pan':Number(_0x2693be[0x3]??0x0)[_0x168f18(0x276)](-0x64,0x64)},AudioManager[_0x168f18(0x201)](),AudioManager[_0x168f18(0x27d)]($gameTemp[_0x168f18(0x2b2)]),'';}),_0x4314de=_0x4314de['replace'](_0x1dc79f['MsgNoReplay'],(_0x17e303,_0x3771f0)=>{return this['_allowVoiceReplay']=![],'';}),_0x13375c[_0x3eb7fd(0x212)]=_0x4314de;},Window_Message[_0x18da95(0x214)]['registerLastPlayedVoiceSound']=function(){const _0x40bd12=_0x18da95;if($gameTemp[_0x40bd12(0x2b2)])return;if(!Window_Message[_0x40bd12(0x220)][_0x40bd12(0x2b0)])return;const _0x2a9125=AudioManager[_0x40bd12(0x2d5)];if(_0x2a9125[_0x40bd12(0x2a3)]<=0x0)return;const _0x25ff38=_0x2a9125[_0x2a9125[_0x40bd12(0x2a3)]-0x1];if(!_0x25ff38[_0x40bd12(0x1f5)]())return;$gameTemp['_voiceSound']={'name':_0x25ff38[_0x40bd12(0x29d)],'volume':_0x25ff38[_0x40bd12(0x281)]*0x64,'pitch':_0x25ff38['pitch']*0x64,'pan':_0x25ff38[_0x40bd12(0x2cc)]*0x64};if(Imported[_0x40bd12(0x2b3)]){if(_0x40bd12(0x2d3)!==_0x40bd12(0x251)){if(VisuMZ[_0x40bd12(0x25e)][_0x40bd12(0x221)]<1.07){if(_0x40bd12(0x20f)!==_0x40bd12(0x263)){let _0x5e62b6='';_0x5e62b6+=_0x40bd12(0x2d8),_0x5e62b6+=_0x40bd12(0x2b5),alert(_0x5e62b6),SceneManager[_0x40bd12(0x21e)]();}else{if(_0x5ac83e['VoiceActControl'][_0x40bd12(0x273)]())return;const _0x16c77a=_0x4dee3c[_0x40bd12(0x2c0)][_0x40bd12(0x296)]();if(!_0x16c77a)return;const _0x11afa0=_0xea74b8[_0x40bd12(0x2c0)][_0x40bd12(0x2e0)](_0x16c77a);if(!_0x11afa0)return;const _0x15b5b1=_0x65a81a[_0x40bd12(0x2c0)][_0x40bd12(0x27a)](_0x11afa0);_0x1585cc[_0x40bd12(0x2c0)][_0x40bd12(0x22f)](_0x16c77a,_0x15b5b1);}}const _0xdb7f5b=$gameSystem[_0x40bd12(0x246)]();_0xdb7f5b[_0x40bd12(0x2d7)]={'name':_0x25ff38[_0x40bd12(0x29d)],'volume':_0x25ff38[_0x40bd12(0x281)]*0x64,'pitch':_0x25ff38['pitch']*0x64,'pan':_0x25ff38[_0x40bd12(0x2cc)]*0x64};}else{if(!this[_0x40bd12(0x256)])return![];const _0x594e17=_0x5967d8[_0x40bd12(0x225)];if(!_0x594e17['bufferRightSideWordWrap'])return![];return[0x3,0x6,0x9][_0x40bd12(0x226)](this['_position']);}}},VisuMZ[_0x18da95(0x2c0)][_0x18da95(0x2c3)]=Window_Message[_0x18da95(0x214)][_0x18da95(0x22a)],Window_Message['prototype'][_0x18da95(0x22a)]=function(){const _0x3572b3=_0x18da95;VisuMZ['VoiceActControl'][_0x3572b3(0x2c3)]['call'](this),this[_0x3572b3(0x286)]();},Window_Message[_0x18da95(0x214)][_0x18da95(0x286)]=function(){const _0x1814d1=_0x18da95;$gameTemp['_voiceSound']&&($gameTemp[_0x1814d1(0x2b2)]=null);if(this[_0x1814d1(0x22b)]){if('hFeoT'!==_0x1814d1(0x229))this[_0x1814d1(0x22b)][_0x1814d1(0x255)](null);else{const _0x58db44=_0x3c8934[_0x1814d1(0x225)],_0x36d0b5=_0x9bbffa[_0x1814d1(0x289)],_0x4422ea=_0xa35b29[_0x1814d1(0x2b6)];{const _0x5e2f8b=_0x58db44[_0x1814d1(0x23e)],_0x4393e6=_0x5e2f8b%0x10*_0x36d0b5,_0x1781e3=_0x34fe81[_0x1814d1(0x237)](_0x5e2f8b/0x10)*_0x4422ea;this['setColdFrame'](_0x4393e6,_0x1781e3,_0x36d0b5,_0x4422ea);}{const _0x55b02f=_0x58db44['iconOnHover'],_0x5dd2b0=_0x55b02f%0x10*_0x36d0b5,_0x16e2d7=_0x26a208[_0x1814d1(0x237)](_0x55b02f/0x10)*_0x4422ea;this[_0x1814d1(0x2b7)](_0x5dd2b0,_0x16e2d7,_0x36d0b5,_0x4422ea);}}}if(Window_Message['VOICE_ACT_CONTROL'][_0x1814d1(0x2a5)]){if(_0x1814d1(0x278)===_0x1814d1(0x278))AudioManager['stopVoiceLines']();else return this[_0x1814d1(0x218)]=![],'';}},Window_Options[_0x18da95(0x214)]['changeVisuMzVoiceLocale']=function(_0x33edea,_0x37a64e){const _0x297e26=_0x18da95,_0x35161e=VisuMZ[_0x297e26(0x2c0)][_0x297e26(0x25b)][_0x297e26(0x2a1)][_0x297e26(0x293)]||[],_0x380b11=ConfigManager[_0x297e26(0x2ae)];let _0x12d9dc=_0x35161e[_0x297e26(0x27f)](_0x380b11);_0x12d9dc+=_0x33edea?0x1:-0x1;if(_0x12d9dc>=_0x35161e[_0x297e26(0x2a3)])_0x12d9dc=_0x37a64e?0x0:_0x35161e[_0x297e26(0x2a3)]-0x1;if(_0x12d9dc<0x0)_0x12d9dc=_0x37a64e?_0x35161e['length']-0x1:0x0;this['changeValue'](_0x297e26(0x2ae),_0x35161e[_0x12d9dc]);};