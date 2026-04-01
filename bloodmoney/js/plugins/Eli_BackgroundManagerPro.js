//============================================================================
// Eli_BackgroundManagerPro.js
//============================================================================

/*:
@plugindesc ♦1.0.0♦ Add customized backgrounds for title and menu scenes!
@author Hakuen Studio

@help 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Rate Plugin  → https://hakuenstudio.itch.io/hakuen-studio-background-manager-for-rpg-maker-mv-mz/rate?source=game
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
==============================================================================
Plugin Requirements
==============================================================================

Need Eli Book.
Order After Eli Book.
Order After WAY_Achievements

==============================================================================
Features
==============================================================================

● Add customized background to any scene and window!
● Backgrounds can be Spritesheets or parallax type!
● Backgrounds can shown o hide according to conditions!

==============================================================================
Plugin Parameters
==============================================================================

https://docs.google.com/document/d/15BzPclaT3Gtt3IYUjUr_QxIi29q_HbpSxvCh_yohOFs/edit?usp=sharing

==============================================================================

@param sceneBackgrounds
@text Scene Backgrounds
@type struct<sceneBackgroundSt>[]
@desc Here you can build all your background sprites for a specific scene.
@default []

@param titleBackgrounds
@text Title Backgrounds
@type struct<backgroundSt>[]
@desc Here you can build all your background images for the title screen.
@default []

@param hideDefaultTitleBackground
@text Hide System Backgrounds
@type boolean
@desc Set to true if you want to hide the default title backgrounds.
@default true
@parent titleBackgrounds

@param menuBackgrounds
@text Menu Backgrounds
@type struct<backgroundSt>[]
@desc Here you can build all your background sprites for the menu.
@default []

@param hideDefaultMenuBackground
@text Hide Default Menu Background
@type boolean
@desc Set to true if you want to hide the default menu backgrounds.
@default true
@parent menuBackgrounds

@param winBackgrounds
@text Window Backgrounds
@type struct<winBackgroundSt>[]
@desc Build the window backgrounds here.
@default []

*/

/* ---------------------------- SCENE BACKGROUND ---------------------------- */
{ 
/*~struct~sceneBackgroundSt:

@param sceneList
@text Scene List
@type combo[]
@option Scene_Battle @option Scene_Debug @option Scene_Equip @option Scene_GameEnd @option Scene_Gameover @option Scene_Item @option Scene_Load @option Scene_Map @option Scene_MapSelect @option Scene_Menu @option Scene_MenuInfo @option Scene_Minimap @option Scene_Name @option Scene_Options @option Scene_Save @option Scene_Shop @option Scene_Skill @option Scene_SoundTest @option Scene_Status @option Scene_Title
@desc A list of all scenes that will use this background.
It is case sensitive.
@default []

@param backgroundList
@text Backgrounds
@type struct<backgroundSt>[]
@desc Here you can build all your background sprites for the menu.
@default []

*/
}

/* ----------------------------- WIN BACKGROUND ----------------------------- */
{

/*~struct~winBackgroundSt:

@param windowList
@text Window List
@type combo[]
@option Window_ActorCommand @option Window_BattleActor @option Window_BattleEnemy @option Window_BattleItem @option Window_BattleLog @option Window_BattleSkill @option Window_BattleStatus @option Window_ChoiceList @option Window_CommandInfo @option Window_DebugEdit @option Window_DebugRange @option Window_DescriptionInfo @option Window_EquipCommand @option Window_EquipItem @option Window_EquipSlot @option Window_EquipStatus @option Window_EventItem @option Window_GameEnd @option Window_Gold @option Window_Help @option Window_ItemCategory @option Window_ItemList @option Window_MapName @option Window_MapSelectCommand @option Window_MenuActor @option Window_MenuCommand @option Window_MenuStatus @option Window_Message @option Window_NameBox @option Window_NameEdit @option Window_NameInput @option Window_NumberInput @option Window_Options @option Window_PartyCommand @option Window_SavefileList @option Window_ScrollText @option Window_ShopBuy @option Window_ShopCommand @option Window_ShopNumber @option Window_ShopSell @option Window_ShopStatus @option Window_SkillList @option Window_SkillStatus @option Window_SkillType @option Window_Status @option Window_StatusEquip @option Window_StatusParam @option Window_TitleCommand @option Window_TitleInfo @option Window_ToastInfo
@desc A list of all windows that will use this background.
It is case sensitive.
@default []

@param backgroundList
@text Backgrounds
@type struct<backgroundSt>[]
@desc Here you can build all your background sprites for the menu.
@default []

*/

}

/* ------------------------------- BACKGROUNDS ------------------------------ */
{

/*~struct~backgroundSt:

@param file
@text Image File
@type file
@dir img/menuBackgrounds
@desc The image used as background.
@default

@param type
@text Type
@type select
@option Sprite
@option Parallax
@desc The background type.
@default Sprite

@param condition
@text Condition
@type note
@desc A valid javascript formula to be applied as condition to show this background. See help file.
@default "return true"

@param zIndex
@text Z Index
@type text
@desc The layer index of this background. Does not work for Window Backgrounds.
@default 0

@param --- Sprite ---

@param maxColumns
@text Max Columns
@type number
@min 1
@max 99
@desc The max number of columns/frames this sprite have.
@default 1
@parent --- Sprite ---

@param interval
@text Interval
@type number
@min 1
@desc The time interval required to change the sprite frame.
@default 30
@parent --- Sprite ---

@param position
@text Position
@type struct<positionSt>
@desc The position of the background on the scene.
@default {"alignX":"left","offsetX":"0","alignY":"top","offsetY":"0"}
@parent --- Sprite ---

@param --- Parallax ---

@param scrollX
@text Scroll X
@type number
@desc How much pixels per frame the parallax will move horizontally.
@default 0
@parent --- Parallax ---

@param scrollY
@text Scroll Y
@type number
@desc How much pixels per frame the parallax will move vertically.
@default 0
@parent --- Parallax ---

*/

}

/* -------------------------------- POSITION -------------------------------- */
{
/*~struct~positionSt:

@param alignX
@text Align X
@type select
@option none
@option left
@option center
@option right
@desc Select none to only use offset value.
@default left

@param offsetX
@text Offset X
@type text
@desc The Offset X position.
@default 10
@parent alignX

@param alignY
@text Align Y
@type select
@option none
@option top
@option center
@option bottom
@desc Select none to only use offset value.
@default top

@param offsetY
@text Offset Y
@type text
@desc The offset Y position.
@default 10
@parent alignY

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_BackgroundManager = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

const FOLDER = "img/menuBackgrounds/"

class Container_Background extends PIXI.Container{

    update(){
        for(const child of this.children){
            child.update()
        }
    }

    sortChildren(){
        this.children.sort((a, b) => a._zIndex - b._zIndex)
    }
}

class Sprite_Background extends Sprite {

    initialize(bitmap, parameters){
        super.initialize(bitmap)
        this.initProps(parameters)
        this.bitmap.addLoadListener(this.onMainBitmapLoad.bind(this))
    }

    initProps(parameters){
        this.parameters = parameters
        this.maxIndex = Math.max(this.parameters.maxColumns - 1, 0)
        this._zIndex = parameters.zIndex
    }

    onMainBitmapLoad(){
        this.changeFrame()
        this.setPosition()
    }

    setPosition(){
        const {alignX, alignY, offsetX, offsetY} = this.parameters.position
        const x = Eli.Utils.calculateScreenPosition(alignX, offsetX, this.bitmap.width/this.parameters.maxColumns, "x")
        const y = Eli.Utils.calculateScreenPosition(alignY, offsetY, this.bitmap.height, "y")

        this.move(x, y)
    }

    patternWidth() {
        return this.bitmap.width / this.parameters.maxColumns
    }

    getIndex(){
        return this.parameters.current.index
    }

    update(){
        super.update()
        this.updateVisibility()

        if(this.bitmap && this.bitmap.isReady()){
            this.updateIndex()
        }
    }

    updateVisibility(){
        this.visible = this.parameters.condition()
    }

    updateIndex(){
        this.parameters.current.animationCount++
        
        if(this.canChangeIndex()){
            this.changeIndex()
            this.resetAnimationCount()
            this.changeFrame()
        }
    }

    canChangeIndex(){
        return this.parameters.current.animationCount >= this.parameters.interval
    }

    changeIndex(){
        if(this.parameters.current.index === this.maxIndex){
            this.parameters.current.index = 0
        }else{
            this.parameters.current.index++
        }
    }

    resetAnimationCount(){
        this.parameters.current.animationCount = 0
    }

    changeFrame() {
        const width = this.patternWidth()
        const height = this.bitmap.height
        const x = this.getIndex() * width
        const y = 0

        this.setFrame(x, y, width, height)
    }

}

class Parallax_Background extends TilingSprite {

    initialize(bitmap, parameters){
        super.initialize(bitmap)
        this.initProps(parameters)
        this.restoreOrigin()
        this.move(0, 0, Graphics.width, Graphics.height)
    }

    initProps(parameters){
        this.parameters = parameters
        this.originX = this.origin.x
        this.originY = this.origin.y
        this._zIndex = parameters.zIndex
    }

    update(){
        super.update()
        this.updateVisibility()

        if(this.bitmap && this.bitmap.isReady()){
            this.changeOrigin()
        }
    }

    updateVisibility(){
        this.visible = this.parameters.condition()
    }

    changeOrigin(){
        this.origin.x -= this.parameters.scrollX
        this.origin.y -= this.parameters.scrollY
        this.parameters.current.originX -= this.parameters.scrollX
        this.parameters.current.originY -= this.parameters.scrollY
    }

    restoreOrigin(){
        this.origin.x = this.parameters.current.originX
        this.origin.y = this.parameters.current.originY
    }
}

function backgroundObject(){
    return {
        file: '',
        maxColumns: 0,
        interval: 0,
        scrollX: 0,
        scrollY: 0,
        type: '',
        condition: () => {},
        zIndex: 0,
        position: {
            alignX: '', 
            offsetX: 0,
            alignY: '',
            offsetY: 0,
        },
        current: {
            originX: 0,
            originY: 0,
            index: 0,
            animationCount: 0,
        }
    }
}

Eli.BackgroundManager = {

    version: 5.10,
    url: 'https://hakuenstudio.itch.io/hakuen-studio-background-manager-for-rpg-maker-mv-mz',
    alias: {},
    pro: true,
    parameters: {
        menu: {
            backgroundList: [backgroundObject()],
            hideDefaultBackground: true,
        },
        title: {
            backgroundList: [backgroundObject()],
            hideDefaultBackground: true,
        },
        windows: [{
            nameList: [],
            backgroundList: [backgroundObject()],
        }],
        scenes: [{
            nameList: [],
            backgroundList: [backgroundObject()],
        }],
        hideDarkRectangles: false,
    },
    needResetCurrentSettings: false,

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        const rawParameters = PluginManager.parameters("Eli_BackgroundManagerPro")
        const parameters = this.parameters

        parameters.title.hideDefaultBackground = rawParameters.hideDefaultTitleBackground === "true"
        parameters.menu.hideDefaultBackground = rawParameters.hideDefaultMenuBackground === "true"
        parameters.menu.backgroundList = this.parseBackgroundListParameters(rawParameters.menuBackgrounds)
        parameters.title.backgroundList = this.parseBackgroundListParameters(rawParameters.titleBackgrounds)
        parameters.windows = this.parseCustomBackgroundParameters(rawParameters.winBackgrounds, "windowList")
        parameters.scenes = this.parseCustomBackgroundParameters(rawParameters.sceneBackgrounds, "sceneList")
    },

    parseBackgroundListParameters(rawParams){
        const backgrounds = JSON.parse(rawParams)
        const sprites = []
        const parallax = []

        for(const param of backgrounds){
            const background = JSON.parse(param)
            const position = JSON.parse(background.position)
            const parsedParam = this.parseBackgroundParameters(background, position)

            if(parsedParam.type === "Sprite"){
                sprites.push(parsedParam)
            }else{
                parallax.push(parsedParam)
            }
        }

        return [...parallax, ...sprites]
    },

    parseBackgroundParameters(background, position){
        const condition = JSON.parse(background.condition)
        return {
            file: background.file,
            maxColumns: Number(background.maxColumns),
            interval: Number(background.interval),
            scrollX: Number(background.scrollX),
            scrollY: Number(background.scrollY),
            type: background.type,
            condition: new Function(condition || `return true`),
            zIndex: Number(background.zIndex || "0"),
            position: {
                alignX: position.alignX, 
                offsetX: Number(position.offsetX),
                alignY: position.alignY,
                offsetY: Number(position.offsetY),
            },
            current: {
                originX: 0,
                originY: 0,
                index: 0,
                animationCount: 0,
            }
        }
    },

    parseCustomBackgroundParameters(rawParams, listKey){
        const params = JSON.parse(rawParams)
        const parsedParams = []

        for(const param of params){
            const data = JSON.parse(param)
            const obj = {
                nameList: JSON.parse(data[listKey]),
                backgroundList: this.parseBackgroundListParameters(data.backgroundList)
            }

            parsedParams.push(obj)
        }

        return parsedParams
    },

    initPluginCommands(){},

    param(){
        return this.parameters
    },

    resetCurrentMenuSettings(){
        for(const param of this.param().menu.backgroundList){
            param.current.originX = 0
            param.current.originY = 0
            param.current.index = 0
            param.current.animationCount = 0
        }
    },
}

const Plugin = Eli.BackgroundManager
const Alias = Eli.BackgroundManager.alias

Plugin.initialize()

/* ------------------------------- SCENE BASE ------------------------------- */
{

Alias.Scene_Base_initialize = Scene_Base.prototype.initialize
Scene_Base.prototype.initialize = function(){
    Alias.Scene_Base_initialize.call(this)
    this._dynamicBackgrounds = []
}

Alias.Scene_Base_create = Scene_Base.prototype.create
Scene_Base.prototype.create = function() {
    Alias.Scene_Base_create.call(this)
    this.createBackgroundContainer()
    this.createDynamicBackgrounds()
}

Scene_Base.prototype.createBackgroundContainer = function() {
    this._backgroundContainer = new Container_Background()
    this.addChild(this._backgroundContainer)
}

Scene_Base.prototype.canCreateDynamicBackgrounds = function() {
    return !(this instanceof Scene_Battle || this instanceof Scene_Map)
}

Scene_Base.prototype.createDynamicBackgrounds = function() {
    if(this.canCreateDynamicBackgrounds()){
        this.createSceneDynamicBackgrounds()
    }
    this._backgroundContainer.sortChildren()
}

Scene_Base.prototype.createSceneDynamicBackgrounds = function() {
    const emptyList = {backgroundList: []}
    const mainParameter = this.findSceneBackground() || emptyList

    for(let i = 0; i < mainParameter.backgroundList.length; i++){
        const parameters = mainParameter.backgroundList[i]
        const bitmap = ImageManager.loadBitmap(FOLDER, parameters.file)

        parameters.current.originX = 0
        parameters.current.originY = 0
        parameters.current.index = 0
        parameters.current.animationCount = 0

        if(parameters.type === "Sprite"){
            var sprite = new Sprite_Background(bitmap, parameters)
            this._backgroundContainer.addChild(sprite)
        }else{
            var sprite = new Parallax_Background(bitmap, parameters)
            sprite.move(0, 0, Graphics.width, Graphics.height)
            this._backgroundContainer.addChild(sprite)
            const index = this._backgroundContainer.getChildIndex(sprite)
            this.fixBackgroundParallax(sprite, index)
        }

        this._dynamicBackgrounds.push(sprite)
        
    }
}

Scene_Base.prototype.findSceneBackground = function() {
    const name = this.constructor.name
    return Plugin.param().scenes.find(item => item.nameList.includes(name))
}

Scene_Base.prototype.fixBackgroundParallax = function(parallax, index) {
    if (parallax.bitmap && Graphics.isWebGL() != true) {
        this._canvasReAddParallaxBackground(parallax, index)
    } else {
        parallax.bitmap = ImageManager.loadBitmap(FOLDER, parallax.parameters.file)
    }
}

Scene_Base.prototype._canvasReAddParallaxBackground = function(parallax, index) {
    const bitmap = ImageManager.loadBitmap(FOLDER, parallax.parameters.file)
    this._backgroundContainer.removeChild(parallax)
    parallax = new Parallax_Background(bitmap, parallax.parameters)
    this._backgroundContainer.addChildAt(parallax, index)
}

Scene_Base.prototype.getDynamicBackgrounds = function() {
    return this._dynamicBackgrounds
}

}

/* ------------------------------- SCENE TITLE ------------------------------ */
{

Alias.Scene_Title_createBackground = Scene_Title.prototype.createBackground
Scene_Title.prototype.createBackground = function() {
    Alias.Scene_Title_createBackground.call(this)

    if(Plugin.param().title.hideDefaultBackground){
        this._backSprite1.visible = false
        this._backSprite2.visible = false
    }

    this.setChildIndex(this._backSprite1, 0)
    this.setChildIndex(this._backSprite2, 1)
}

Alias.Scene_Title_createDynamicBackgrounds = Scene_Title.prototype.createDynamicBackgrounds
Scene_Title.prototype.createDynamicBackgrounds = function() {
    this.createDynamicTitleBackgrounds()
    Alias.Scene_Title_createDynamicBackgrounds.call(this)
}

Scene_Title.prototype.createDynamicTitleBackgrounds = function() {
    for(const parameters of Plugin.param().title.backgroundList){
        const bitmap = ImageManager.loadBitmap(FOLDER, parameters.file)

        if(parameters.type === "Sprite"){
            var sprite = new Sprite_Background(bitmap, parameters)
            this._backgroundContainer.addChild(sprite)
        }else{
            var sprite = new Parallax_Background(bitmap, parameters)
            this._backgroundContainer.addChild(sprite)
            const index = this._backgroundContainer.getChildIndex(sprite)
            this.fixBackgroundParallax(sprite, index)
        }
        
        this._dynamicBackgrounds.push(sprite)
    }
}

}

/* -------------------------------- SCENE MAP ------------------------------- */
{

Alias.Scene_Map_start = Scene_Map.prototype.start
Scene_Map.prototype.start = function() {
    Alias.Scene_Map_start.call(this)
    Plugin.needResetCurrentSettings = true
}

}

/* -------------------------------- MENU BASE ------------------------------- */
{

Alias.Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground
Scene_MenuBase.prototype.createBackground = function() {
    Alias.Scene_MenuBase_createBackground.call(this)

    this.setChildIndex(this._backgroundSprite, 0)

    if(Plugin.param().menu.hideDefaultBackground){
        this._backgroundSprite.visible = false
    }
}

Alias.Scene_MenuBase_createDynamicBackgrounds = Scene_MenuBase.prototype.createDynamicBackgrounds
Scene_MenuBase.prototype.createDynamicBackgrounds = function() {
    this.createMenuDynamicBackgrounds()
    Alias.Scene_MenuBase_createDynamicBackgrounds.call(this)
}

Scene_MenuBase.prototype.createMenuDynamicBackgrounds = function() {
    const backgroundParameters = this.findMenuBackgroundParameter()

    for(const parameters of backgroundParameters){
        const bitmap = ImageManager.loadBitmap(FOLDER, parameters.file)

        if(parameters.type === "Sprite"){
            var sprite = new Sprite_Background(bitmap, parameters)
        }else{
            var sprite = new Parallax_Background(bitmap, parameters)
        }
        
        this._dynamicBackgrounds.push(sprite)
        this._backgroundContainer.addChild(sprite)
        
    }
}

Scene_MenuBase.prototype.findMenuBackgroundParameter = function(){
    const stack = SceneManager._stack[0]

    if(stack && stack.name && stack.name === "Scene_Title"){
        return Plugin.param().title.backgroundList
    }else{
        return Plugin.param().menu.backgroundList
    }
}

}

/* ------------------------------- SCENE MENU ------------------------------- */
{

Alias.Scene_Menu_create = Scene_Menu.prototype.create
Scene_Menu.prototype.create = function(){
    if(Plugin.needResetCurrentSettings){
        Plugin.needResetCurrentSettings = false
        Plugin.resetCurrentMenuSettings()
    }
    Alias.Scene_Menu_create.call(this)
}

}

/* ------------------------------- WINDOW BASE ------------------------------ */
{

Alias.Window_Base_initialize = Window_Base.prototype.initialize
Window_Base.prototype.initialize = function(x, y, width, height) {
    Alias.Window_Base_initialize.call(this, x, y, width, height)
    this.createAllBackgrounds()
}

Window_Base.prototype.createAllBackgrounds = function() {
    const emptyList = {backgroundList: []}
    const mainParameter = this.findWinBackground() || emptyList
    this.winBackgrounds = []

    for(const parameters of mainParameter.backgroundList){
        const bitmap = ImageManager.loadBitmap(FOLDER, parameters.file)

        if(parameters.type === "Sprite"){
            var sprite = new Sprite_Background(bitmap, parameters)
        }else{
            var sprite = new Parallax_Background(bitmap, parameters)
            sprite.move(0, 0, this._windowBackSprite.width, this._windowBackSprite.height)
        }
        
        this.winBackgrounds.push(sprite)
        this._windowBackSprite.addChild(sprite)
    }
}

Window_Base.prototype.findWinBackground = function() {
    const name = this.constructor.name
    return Plugin.param().windows.find(item => item.nameList.includes(name))
}

Window_Base.prototype.setBackgroundsToBack = function() {
    for(let i = 0; i < this.winBackgrounds.length; i++){
        const sprite = this.winBackgrounds[i]

        if(sprite instanceof Parallax_Background){
            this.fixBackgroundParallax(sprite, i)
        }

        this._windowBackSprite.setChildIndex(sprite, i)
    }
}

Window_Base.prototype._canvasReAddParallaxBackground = function(parallax, index) {
    const bitmap = ImageManager.loadBitmap(FOLDER, parallax.parameters.file)
    this._windowBackSprite.removeChild(parallax)
    parallax = new Parallax_Background(bitmap, parallax.parameters)
    this._windowBackSprite.addChildAt(parallax, index)
    parallax.move(0, 0, this._windowBackSprite.width, this._windowBackSprite.height)
}

Window_Base.prototype.fixBackgroundParallax = function(parallax, index) {
    if (parallax.bitmap && Graphics.isWebGL() != true) {
        this._canvasReAddParallaxBackground(parallax, index)
    } else {
        parallax.bitmap = ImageManager.loadBitmap(FOLDER, parallax.parameters.file)
    }
}

Alias.Window_Base_update = Window_Base.prototype.update
Window_Base.prototype.update = function() {
    Alias.Window_Base_update.call(this)
    this._windowBackSprite.update()
}

}

/* ---------------------------- WAY ACHIEVEMENTS ---------------------------- */

if($plugins.some(item => item.name === "WAY_Achievements" && item.status === true)){

Alias.Scene_Achievements_createBackground = Scene_Achievements.prototype.createBackground
Scene_Achievements.prototype.createBackground = function() {
    Alias.Scene_Achievements_createBackground.call(this)

    this.setChildIndex(this._backgroundSprite, 0)

    if(Plugin.param().menu.hideDefaultBackground){
        this._backgroundSprite.visible = false
    }
}

}

}