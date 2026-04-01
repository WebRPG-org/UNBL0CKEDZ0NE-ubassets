//==========================================================================
// EliMZ_FontManager.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦5.0.1♦ Enable the usage of multiple fonts!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-font-manager-for-rpg-maker

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Features
============================================================================

● Use multiple fonts in-game and attach them into different scenes or 
windows!
● Set different fonts for Game Timer, Battler Names, Damage Pop-up, and 
Game Title! (PRO)
● Store the font changes into a save file(PRO).
● Set predefined settings for the fonts like text color, outline color, 
outline width, italic and bold! (PRO)

============================================================================
How to use
============================================================================

♦ Free Version ♦

● Plugin Parameters: Font List

Here you can add as many fonts as you want.
The "Face" parameter cannot have spaces. This is like an ID for the font.

You can choose to attach a font either to a Scene or to a specific window.
Keep in mind that the window fonts have priority over the scenes fonts.

♦ Pro version ♦

In the Pro version, you can set a lot more configurations to the font to 
work as default values:
Text color, outline color, outline width, italic, and bold.

● Sprite Fonts

You will also be able to choose what font the game will use for 
Game Timer, Gauge label and value, Damage Pop up, battler names, and 
Game Title.

● Plugin Parameters: Save Font Changes

If you set this to true, any change that you made with escape codes or 
plugin commands, will be permanent. This means that if you want to reset 
the font settings to default, you have to do this manually with plugin 
commands or escape codes.
Otherwise, when accessing the scene or window again, the font will be 
automatically reverted to default settings(Or changing pages, in the
case of the message window).

You can change the fonts with plugin commands or using escape codes 
(Requires Eli Message Action)

NOTE¹: I only tested with .ttf, .otf, and .woff and they worked.

============================================================================
Update Log
============================================================================

https://tinyurl.com/fontManager

============================================================================

@param fonts
@text Font List
@type struct<fontListSt>[]
@desc Setup here all your fonts.
@default

@param defaultIndex
@text Default Font Index
@type number
@desc The font index of the font list that will be used by default, in case a window or scene didn't have one.
@default 0

*/

/* -------------------------------- FONT LIST ------------------------------- */
{
/*~struct~fontListSt:

@param file
@text Font file
@type text
@desc The font file to load(with extension!).
@default 

@param face
@text FontFace
@type text
@desc The font face that will be used to reference this font inside game.
@default 

@param size
@text Font Size
@type text
@desc The default font size for this font.
@default 26

@param sceneList
@text Scene List
@type combo[]
@option Scene_Battle @option Scene_Debug @option Scene_Equip @option Scene_GameEnd @option Scene_Gameover @option Scene_Item @option Scene_Load @option Scene_Map @option Scene_MapSelect @option Scene_Menu @option Scene_MenuInfo @option Scene_Name @option Scene_Option @option Scene_Save @option Scene_Shop @option Scene_Skill @option Scene_Status @option Scene_Title 
@desc A list of all scenes that will use this font.
It is case sensitive.
@default []

@param windowList
@text Window List
@type combo[]
@option Window_ActorCommand @option Window_BattleActor @option Window_BattleEnemy @option Window_BattleItem @option Window_BattleLog @option Window_BattleSkill @option Window_BattleStatus @option Window_ChoiceList @option Window_CommandInfo @option Window_DebugEdit @option Window_DebugRange @option Window_DescriptionInfo @option Window_EquipCommand @option Window_EquipItem @option Window_EquipSlot @option Window_EquipStatus @option Window_EventItem @option Window_GameEnd @option Window_Gold @option Window_Help @option Window_ItemCategory @option Window_ItemList @option Window_MapName @option Window_MapSelectCommand @option Window_MenuActor @option Window_MenuCommand @option Window_MenuStatus @option Window_Message @option Window_NameBox @option Window_NameEdit @option Window_NameInput @option Window_NumberInput @option Window_Options @option Window_PartyCommand @option Window_SavefileList @option Window_ScrollText @option Window_ShopBuy @option Window_ShopCommand @option Window_ShopNumber @option Window_ShopSell @option Window_ShopStatus @option Window_SkillList @option Window_SkillStatus @option Window_SkillType @option Window_Status @option Window_StatusEquip @option Window_StatusParam @option Window_TitleCommand @option Window_TitleInfo @option Window_ToastInfo
@desc A list of all windows that will use this font.
It is case sensitive.
@default []

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_FontManager = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

Eli.FontManager = {

    version: 5.01,
    url: "https://hakuenstudio.itch.io/eli-font-manager-for-rpg-maker",
    parameters: {
        defaultIndex: 0,
        fonts: [{
            file: '',
            face: '',
            size: 26,
            textColor: '',
            outlineColor: '',
            outlineWidth: 0,
            italic: false,
            bold: false,
            sceneList: [""],
            windowList: [""],
            isForGameTimer: false,
            isForGameTitle: false,
            isForDamageSprite: false,
            isForGaugeLabel: false,
            isForGaugeValue: false,
            isForBattlerName: false,
        }],
    },
    alias: {},
    pro: false,

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        this.parameters = Eli.PluginManager.createParameters()
    },

    initPluginCommands(){

    },

    param(){
        return this.parameters
    },  
}

const Plugin = Eli.FontManager
const Alias = Eli.FontManager.alias

Plugin.initialize()

/* ------------------------------- SCENE BOOT ------------------------------- */
{

Alias.Scene_Boot_loadGameFonts = Scene_Boot.prototype.loadGameFonts
Scene_Boot.prototype.loadGameFonts = function() {
    Alias.Scene_Boot_loadGameFonts.call(this)
    this.loadExtraFonts()
}

Scene_Boot.prototype.loadExtraFonts = function() {
    for(const font of Plugin.param().fonts){
        FontManager.load(font.face, font.file)
    }
}

}

/* ------------------------------- WINDOW BASE ------------------------------ */
{

Alias.Window_Base_initialize = Window_Base.prototype.initialize
Window_Base.prototype.initialize = function(rect) {
    this.customFont = this.findCustomFont()
    Alias.Window_Base_initialize.call(this, rect)
}

Alias.Window_Base_resetFontSettings = Window_Base.prototype.resetFontSettings
Window_Base.prototype.resetFontSettings = function() {
    Alias.Window_Base_resetFontSettings.call(this)
    this.setCustomFont()
}

Window_Base.prototype.setCustomFont = function() {
    this.customFont = this.findCustomFont()

    if(this.customFont){
        this.contents.fontFace = `${this.customFont.face}, ${$gameSystem.mainFontFace()}`
        this.contents.fontSize = this.customFont.size
    }else{
        this.contents.fontFace = $gameSystem.mainFontFace()
    }
}

Window_Base.prototype.findCustomFont = function() {
    const defaultIndex = Plugin.param().defaultIndex || 0

    return this.findWindowFont() || this.findSceneFont() || Plugin.param().fonts[defaultIndex]
}

Window_Base.prototype.findSceneFont = function(){
    const sceneName = SceneManager._scene.constructor.name
    const fontFace = Plugin.param().fonts.find(font => font.sceneList.includes(sceneName))

    return fontFace
}

Window_Base.prototype.findWindowFont = function(){
    const winName = this.constructor.name
    const fontFace = Plugin.param().fonts.find(font => font.windowList.includes(winName))

    return fontFace
}

}

}