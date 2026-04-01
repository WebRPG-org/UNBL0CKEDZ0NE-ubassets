//=============================================================================
// VisuStella MZ - Weapon Swap System
// VisuMZ_2_WeaponSwapSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeaponSwapSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaponSwapSystem = VisuMZ.WeaponSwapSystem || {};
VisuMZ.WeaponSwapSystem.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [WeaponSwapSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weapon_Swap_System_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds in a Weapon Swap System. Actors can equip a different
 * weapon for each weapon type available for use. These weapons can be swapped
 * to and from during the middle of a battle. Swapping weapons can let the
 * player's team adapt to certain situations better or giving them the ability
 * to hit certain weapon weaknesses in battle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors can equip multiple weapons, one for each weapon type.
 * * These weapons can be switched during the middle of battle.
 * * Choose to display only equippable weapon types in the Equip Menu or all
 *   of the possible weapon types.
 * * Have certain skills switch over to different equipped weapons when
 *   performing them.
 * * Shortcut keys to allow switching between weapon types easily when
 *   selecting commands.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_ItemsEquipsCore
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
 * Dual Wielding
 * 
 * Dual Wielding properties have been disabled to allow for the Weapon Swap
 * System. There are too many conflicts between it and the Weapon Swap System.
 * There is simply no way around it.
 *
 * ---
 * 
 * Required Weapons
 * 
 * RPG Maker MZ's skills allowed for Required Weapons and needed the actor to
 * have any of the said weapon type(s) equipped upon usage. This function has
 * now been changed. Now, as long as the actor has any of the weapon types
 * available and a weapon attached to it, the actor will be able to use the
 * skill without needing to switch to that weapon first.
 * 
 * When using the skill, the actor will switch to the first available weapon
 * type if needed as long as it is a requirement.
 * 
 * ---
 * 
 * Locked Weapons and Sealed Weapons
 * 
 * Actors that can weapon swap are now immune to Lock Weapon and Seal Weapon
 * traits as they go against the nature of this plugin.
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
 * VisuMZ_1_ItemsEquipsCore
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === Skill Usage-Related Notetags ===
 * 
 * ---
 *
 * <Require Any Weapon>
 *
 * - Used for: Skill Notetags
 * - Requires the actor to have any weapon equipped in order to use the skill,
 *   regardless of the weapon's type.
 * - This does not affect enemies.
 *
 * ---
 *
 * <Switch to Weapon Type: id>
 * <Switch to Weapon Type: name>
 *
 * - Used for: Skill Notetags
 * - When using the skill, the actor will switch to the equipped weapon of the
 *   matching type.
 * - Replace 'id' with a number representing the weapon type's ID.
 * - Replace 'name' with the name of the weapon type.
 * - Weapon types are not the same as weapons. Weapon types are found in the
 *   Database > Types tab.
 * - This does not affect enemies.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * There's not too many mechanics that can be modified through the Plugin
 * Parameters, but the setting here will at least let you ease up on testing
 * battles from the database.
 *
 * ---
 *
 * Battle Test
 * 
 *   Equip All Weapons?:
 *   - Do you want to equip one of each weapon type during battle tests for
 *     all actors?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * The following Plugin Parameters are dedicated towards modifying the UI
 * elements added through this plugin.
 *
 * ---
 *
 * Attack Command
 * 
 *   Change Attack Icon?:
 *   - Change the Attack command to show the weapon?
 *   - Or have it represent the Attack skill?
 * 
 *   Swap Shortcut?:
 *   - Allow shortcut to switch weapons while selecting the Attack command?
 * 
 *     Show Arrows?:
 *     - Show arrows to the left and right of the Attack command for an easy
 *       reminder of the shortcut?
 *
 * ---
 *
 * Swap Command
 * 
 *   Show Command?:
 *   - Show the Swap weapon command in the Actor Command Window?
 *   - The Swap weapon command will be listed by default after the Attack
 *     command.
 *     - If you do not have the Attack command, it will not be shown unless you
 *       add "Weapon Swap" to the battle command list.
 * 
 * 
 *   Swap Icon:
 *   - What icon do you wish to use to represent the Swap command for the
 *     Actor Command Window?
 * 
 *   Swap Name:
 *   - What text do you want to use to represent the Swap command for the
 *     Actor Command Window?
 * 
 *   Help: Swap:
 *   - Help text for Swap command.
 *
 * ---
 *
 * Equip Scene
 * 
 *   Show Unequippable?:
 *   - Show all weapon types in the equip scene?
 *   - Or only just the equippable ones?
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.13: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if an actor does not have any weapons equipped, the
 *    "Swap" command will not appear. Fix made by Olivia.
 * 
 * Version 1.12: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where the incorrect difference is displayed for swap weapons.
 *    Fix made by Olivia.
 * 
 * Version 1.11: March 14, 2024
 * * Documentation Update!
 * ** Added "Locked Weapons and Sealed Weapons" to Major Changes.
 * * Feature Update!
 * ** Actors that can weapon swap are now immune to Lock Weapon and Seal Weapon
 *    traits as they go against the nature of this plugin.
 * 
 * Version 1.10: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused item duplication with the "Clear Equipment"
 *    command found in the equip scene. Fix made by Irina.
 * ** Fixed a bug that caused the optimize command to not factor in the weapons
 *    held by the current actor. Fix made by Irina.
 * 
 * Version 1.09: December 9, 2021
 * * Compatibility Update!
 * ** Changing classes via the Class Change System plugin should no longer dupe
 *    weapons under specific circumstances. Update made by Olivia.
 * * Feature Update!
 * ** Upon an actor's turn to input a command, if the actor is barefisted while
 *    having available swap weapons, it will default the choice to the first
 *    available slot. Update made by Olivia.
 * ** The barefisted equip would occur before because when navigating the equip
 *    menu, the switched weapon type would change to whatever is selected. If
 *    you go to a slot without any weapons equipped, it would be as having a
 *    barehanded setup.
 * 
 * Version 1.08: July 9, 2021
 * * Bug Fixes!
 * ** Removed a potential equipment duplication exploit with changing classes.
 *    Fix made by Olivia.
 * 
 * Version 1.07: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: June 25, 2021
 * * Bug Fixes!
 * ** Have the "Shortcut" plugin parameter off will no longer cause crashes.
 *    Fix made by Olivia.
 * 
 * Version 1.05: June 4, 2021
 * * Bug Fixes!
 * ** Fixed weapon swap notetags to have them occur naturally. Fix by Arisu.
 * 
 * Version 1.04: May 28, 2021
 * * Bug Fixes!
 * ** Cache clear will now occur when using automatic switching to update any
 *    cached stats for actors. Fix made by Olivia.
 * 
 * Version 1.03: May 21, 2021
 * * Bug Fixes!
 * ** Weapon type requirements for skills will the weapon type to be equipped
 *    as one of the available slots. Fix made by Olivia.
 * 
 * Version 1.02: April 16, 2021
 * * Bug Fixes!
 * ** Shortcut arrows should no longer be visible when an actor has only one
 *    weapon to swap to and from. Fix made by Olivia.
 * * Compatibility Update!
 * ** Weapon Swap System should now be compatible with the Item and Equip
 *    Core's non-removable types setting. Update made by Irina.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** Shortcut arrow now accounts for changes in the actor command window size
 *    when updated post-initialization. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Documentation updated for the "UI Settings Plugin Parameters":
 * *** The Swap weapon command will be listed by default after the Attack
 *     command.
 * **** If you do not have the Attack command, it will not be shown unless you
 *      add "Weapon Swap" to the battle command list.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > UI Settings > Help: Swap
 * **** Help text for Swap command.
 *
 * Version 1.00 Official Release Date: May 3, 2021
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
 * @param WeaponSwapSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Mechanics settings for the Weapon Swap System.
 * @default {"Testing":"","BattleTestAllWeapons:eval":"true"}
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc UI settings for the Weapon Swap System.
 * @default {"AttackCommand":"","ChangeAttackIcon:eval":"true","SwapShortcut:eval":"true","ShowShortcutArrows:eval":"true","SwapCommand":"","ShowSwapCommand:eval":"false","SwapCommandIcon:num":"76","SwapCommandName:str":"Swap","EquipScene":"","ShowUnequippable:eval":"false"}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Testing
 * @text Battle Test
 *
 * @param BattleTestAllWeapons:eval
 * @text Equip All Weapons?
 * @parent Testing
 * @type boolean
 * @on All Weapons
 * @off Just Settings
 * @desc Do you want to equip one of each weapon type during
 * battle tests for all actors?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param AttackCommand
 * @text Attack Command
 *
 * @param ChangeAttackIcon:eval
 * @text Change Attack Icon?
 * @parent AttackCommand
 * @type boolean
 * @on Represent Weapon
 * @off Represent Skill Icon
 * @desc Change the Attack command to show the weapon?
 * Or have it represent the Attack skill?
 * @default true
 *
 * @param SwapShortcut:eval
 * @text Swap Shortcut?
 * @parent AttackCommand
 * @type boolean
 * @on Allow Shortcut
 * @off Don't Use
 * @desc Allow shortcut to switch weapons while selecting
 * the Attack command?
 * @default true
 *
 * @param ShowShortcutArrows:eval
 * @text Show Arrows?
 * @parent SwapShortcut:eval
 * @type boolean
 * @on Show Arrows
 * @off Hide Arrows
 * @desc Show arrows to the left and right of the Attack
 * command for an easy reminder of the shortcut?
 * @default true
 *
 * @param SwapCommand
 * @text Swap Command
 *
 * @param ShowSwapCommand:eval
 * @text Show Command?
 * @parent SwapCommand
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show the Swap weapon command in the
 * Actor Command Window?
 * @default true
 *
 * @param SwapCommandIcon:num
 * @text Swap Icon
 * @parent SwapCommand
 * @desc What icon do you wish to use to represent the
 * Swap command for the Actor Command Window?
 * @default 76
 *
 * @param SwapCommandName:str
 * @text Swap Name
 * @parent SwapCommand
 * @desc What text do you want to use to represent the
 * Swap command for the Actor Command Window?
 * @default Swap
 *
 * @param BattleHelpSwap:json
 * @text Help: Swap
 * @parent SwapCommand
 * @type note
 * @desc Help text for Swap command.
 * @default "Switch out the current weapon."
 *
 * @param EquipScene
 * @text Equip Scene
 *
 * @param ShowUnequippable:eval
 * @text Show Unequippable?
 * @parent EquipScene
 * @type boolean
 * @on All Weapons
 * @off Equippable Weapons
 * @desc Show all weapon types in the equip scene?
 * Or only just the equippable ones?
 * @default false
 *
 */
//=============================================================================

const _0x1c2abe=_0x4b76;function _0x4b76(_0x2aeceb,_0x3e052c){const _0x288457=_0x2884();return _0x4b76=function(_0x4b76f2,_0x18dc0d){_0x4b76f2=_0x4b76f2-0x198;let _0x47c93a=_0x288457[_0x4b76f2];return _0x47c93a;},_0x4b76(_0x2aeceb,_0x3e052c);}function _0x2884(){const _0xf7a30d=['_checkingWeaponSwaps','WEAPON_SWAP_SHOW_COMMAND','executeEquipChange','4135439UKkksL','log','anchor','4107948rZQrzK','Sprite_Actor_refreshMotion','format','updateShortcutOpacity','_weaponSwapShortcutSprite_Left','ShowSwapCommand','Window_EquipSlot_isEnabled','RequireAnyWpn','WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS','initWeaponSwapSystem','_list','isWeaponSwapShortcutEnabled','createWeaponSwapTypes','_currentweapontype','Game_Actor_clearEquipments','Window_EquipItem_initialize','_inBattle','actorSlotName','2504330IfAclU','_scene','applyWeaponSwapAction','SwapShortcut','Scene_Battle_createActorCommandWindow','cursorRight','meetsAnyWeaponEquippedCondition','_firstOfEachWeaponType','alterAttackCommand','swapWeaponPrevious','Game_Actor_initEquips','ARRAYSTRUCT','ARRAYEVAL','Switch\x20out\x20the\x20current\x20weapon.','Window_EquipSlot_equipSlotIndex','Window_StatusBase_actorSlotName','STR','status','playEquip','setText','Game_Actor_isDualWield','isActor','parent','commandStyle','_wtypeIDs','2527372KdsyXP','\x5cI[%1]%2','_statusWindow','Window_EquipItem_setSlotId','isEnabledWeaponSwap','_actorCommandWindow','7AmmKtd','SwapCommandIcon','refresh','description','initEquips','ARRAYNUM','BattleTestAllWeapons','getAllEquippedSwapWeapons','setSlotId','removeWeaponSwapCommand','isClearEquipOk','padding','itemAtWeaponSwap','isWeapon','parameters','SwapCommandName','performWeaponSwap','Window_ActorCommand_updateHelp','_swapWeapons','Game_Actor_releaseUnequippableItems','optimizeSwappableWeapons','Game_Actor_equipSlots','Game_Actor_changeEquip','max','checkCacheKey','actor','Window_ActorCommand_setup','swapWeaponCmd','Game_Party_setupBattleTestMembers','parse','addWeaponSwapCommand','Mechanics','trim','VisuMZ_1_BattleCore','changeEquip','clearSwappableWeapons','requiredWtypeId1','Game_Battler_requestMotionRefresh','ConvertParams','WEAPON_SWAP_CHANGE_ATTACK_ICON','exit','call','itemRect','isEquipWtypeOk','BARE\x20HANDS','2733632CEzOcR','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','MISSING\x20WEAPON\x20TYPE:\x20%1','getFirstOfEachWeaponType','WEAPON_SWAP_SHORTCUT_ARROWS','weaponSwap','weaponSwapTypes','openness','isWeaponSwapShortcutVisible','nonRemovableEtypes','addAttackCommand','width','length','_wtypeID','Window_ActorCommand_initialize','actorSlotNameWeaponSwap','currentSymbol','Game_Actor_isOptimizeEquipOk','name','refreshMotion','switchToWeaponType','isEnabled','bestEquipWeapon','indexOf','calcEquipItemPerformance','requiredWtypeId2','onWeaponSwap','_actor','subject','SwitchWpnTypeStr','filter','height','Window_ActorCommand','108pWoEol','setup','contentsOpacity','replace','loadSystem','updateWeaponSwapShortcutSprites','commandWeaponSwap','BattleHelpSwap','match','EVAL','includes','map','setSwapWeapon','findSymbol','Window_EquipItem_includes','drawActorParamDifference','_item','Window_EquipItem_isEnabled','STRUCT','_currentWeaponType','_cache','Settings','JSON','applyGlobal','equipSlotIndex','_equips','bitmap','note','prototype','bind','_swappingWeapon','isEquipChangeOk','maxItemsWeaponSwap','Game_Actor_isClearEquipOk','WEAPON_SWAP_BATTLE_TEST_ALL_WEAPONS','initialize','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','swapWeaponIcon','splice','version','NUM','ShowShortcutArrows','canAddSkillCommand','activate','requestMotionRefresh','unshift','_weaponSwapShortcutSprite_Right','swapWeaponNext','tradeItemWithParty','WEAPON_SWAP_SHORTCUT_ENABLE','Game_BattlerBase_isEquipTypeSealed','FUNC','wtypeId','itemAt','getSwapWeapon','toUpperCase','isSkill','setupBattleTestMembers','processWeaponSwapRelease','ChangeAttackIcon','return\x200','weapons','updateArrows','object','isEquipTypeSealed','isSkillWtypeOk','equipSlots','_slotId','Window_Base_playOkSound','Window','getWtypeIdWithName','etypeId','10UQeRUg','Window_ShopStatus_drawActorParamDifference','addChild','Game_BattlerBase_meetsSkillConditions','maxItems','updateSwapToNextAvailableWeapon','clearEquipments','round','createWeaponSwapShortcutSprites','canWeaponSwap','attack','setupBattleTestWeapons','2058705lCqFHo','_itemWindow','cursorLeft','optimizeEquipments','opacity','Window_EquipSlot_maxItems','Game_Actor_isEquipChangeOk','Game_Action_applyGlobal','Window_EquipSlot_itemAt','ShowUnequippable','setHandler','weaponTypes','allMembers','performAttack','gainItem','ARRAYJSON','addCommand','battler','battleCommandName','Game_Actor_optimizeEquipments','Window_ActorCommand_addAttackCommand','push','meetsSkillConditions','_helpWindow','callUpdateHelp','constructor','swapWeaponHelp','changeWeapon','setObject','isDualWield','WeaponSwapSystem','text','RegExp','235622NOrmdG','remove'];_0x2884=function(){return _0xf7a30d;};return _0x2884();}(function(_0x3bb4eb,_0x32e935){const _0x45f2f4=_0x4b76,_0x3a737b=_0x3bb4eb();while(!![]){try{const _0x5f1146=parseInt(_0x45f2f4(0x1df))/0x1*(-parseInt(_0x45f2f4(0x1a6))/0x2)+-parseInt(_0x45f2f4(0x281))/0x3+parseInt(_0x45f2f4(0x1d9))/0x4*(-parseInt(_0x45f2f4(0x275))/0x5)+parseInt(_0x45f2f4(0x1ae))/0x6+-parseInt(_0x45f2f4(0x1ab))/0x7+parseInt(_0x45f2f4(0x20c))/0x8+-parseInt(_0x45f2f4(0x22d))/0x9*(-parseInt(_0x45f2f4(0x1c0))/0xa);if(_0x5f1146===_0x32e935)break;else _0x3a737b['push'](_0x3a737b['shift']());}catch(_0x2f5356){_0x3a737b['push'](_0x3a737b['shift']());}}}(_0x2884,0xa2a47));var label=_0x1c2abe(0x1a3),tier=tier||0x0,dependencies=[_0x1c2abe(0x200),'VisuMZ_1_ItemsEquipsCore'],pluginData=$plugins['filter'](function(_0x30c3a3){const _0x5bc4c4=_0x1c2abe;return _0x30c3a3[_0x5bc4c4(0x1d1)]&&_0x30c3a3[_0x5bc4c4(0x1e2)][_0x5bc4c4(0x237)]('['+label+']');})[0x0];VisuMZ[label][_0x1c2abe(0x242)]=VisuMZ[label][_0x1c2abe(0x242)]||{},VisuMZ[_0x1c2abe(0x205)]=function(_0x28ad7a,_0x2d4b64){const _0x113449=_0x1c2abe;for(const _0x216ab3 in _0x2d4b64){if(_0x216ab3['match'](/(.*):(.*)/i)){const _0x4c3f96=String(RegExp['$1']),_0xb9a7bb=String(RegExp['$2'])[_0x113449(0x264)]()['trim']();let _0x279e04,_0x15c1ce,_0x53c269;switch(_0xb9a7bb){case _0x113449(0x255):_0x279e04=_0x2d4b64[_0x216ab3]!==''?Number(_0x2d4b64[_0x216ab3]):0x0;break;case _0x113449(0x1e4):_0x15c1ce=_0x2d4b64[_0x216ab3]!==''?JSON['parse'](_0x2d4b64[_0x216ab3]):[],_0x279e04=_0x15c1ce['map'](_0x338958=>Number(_0x338958));break;case _0x113449(0x236):_0x279e04=_0x2d4b64[_0x216ab3]!==''?eval(_0x2d4b64[_0x216ab3]):null;break;case _0x113449(0x1cc):_0x15c1ce=_0x2d4b64[_0x216ab3]!==''?JSON['parse'](_0x2d4b64[_0x216ab3]):[],_0x279e04=_0x15c1ce['map'](_0x326893=>eval(_0x326893));break;case _0x113449(0x243):_0x279e04=_0x2d4b64[_0x216ab3]!==''?JSON[_0x113449(0x1fc)](_0x2d4b64[_0x216ab3]):'';break;case _0x113449(0x290):_0x15c1ce=_0x2d4b64[_0x216ab3]!==''?JSON[_0x113449(0x1fc)](_0x2d4b64[_0x216ab3]):[],_0x279e04=_0x15c1ce['map'](_0x1e881b=>JSON[_0x113449(0x1fc)](_0x1e881b));break;case _0x113449(0x260):_0x279e04=_0x2d4b64[_0x216ab3]!==''?new Function(JSON[_0x113449(0x1fc)](_0x2d4b64[_0x216ab3])):new Function(_0x113449(0x269));break;case'ARRAYFUNC':_0x15c1ce=_0x2d4b64[_0x216ab3]!==''?JSON[_0x113449(0x1fc)](_0x2d4b64[_0x216ab3]):[],_0x279e04=_0x15c1ce[_0x113449(0x238)](_0x55baad=>new Function(JSON[_0x113449(0x1fc)](_0x55baad)));break;case _0x113449(0x1d0):_0x279e04=_0x2d4b64[_0x216ab3]!==''?String(_0x2d4b64[_0x216ab3]):'';break;case'ARRAYSTR':_0x15c1ce=_0x2d4b64[_0x216ab3]!==''?JSON[_0x113449(0x1fc)](_0x2d4b64[_0x216ab3]):[],_0x279e04=_0x15c1ce[_0x113449(0x238)](_0x5f0af6=>String(_0x5f0af6));break;case _0x113449(0x23f):_0x53c269=_0x2d4b64[_0x216ab3]!==''?JSON[_0x113449(0x1fc)](_0x2d4b64[_0x216ab3]):{},_0x279e04=VisuMZ[_0x113449(0x205)]({},_0x53c269);break;case _0x113449(0x1cb):_0x15c1ce=_0x2d4b64[_0x216ab3]!==''?JSON['parse'](_0x2d4b64[_0x216ab3]):[],_0x279e04=_0x15c1ce['map'](_0x4a2ee9=>VisuMZ[_0x113449(0x205)]({},JSON[_0x113449(0x1fc)](_0x4a2ee9)));break;default:continue;}_0x28ad7a[_0x4c3f96]=_0x279e04;}}return _0x28ad7a;},(_0x39b593=>{const _0x3a508d=_0x1c2abe,_0x19d6df=_0x39b593[_0x3a508d(0x21e)];for(const _0x182c4e of dependencies){if(!Imported[_0x182c4e]){alert(_0x3a508d(0x20d)[_0x3a508d(0x1b0)](_0x19d6df,_0x182c4e)),SceneManager[_0x3a508d(0x207)]();break;}}const _0x295a5e=_0x39b593['description'];if(_0x295a5e[_0x3a508d(0x235)](/\[Version[ ](.*?)\]/i)){const _0x3e44d9=Number(RegExp['$1']);_0x3e44d9!==VisuMZ[label][_0x3a508d(0x254)]&&(alert(_0x3a508d(0x251)[_0x3a508d(0x1b0)](_0x19d6df,_0x3e44d9)),SceneManager['exit']());}if(_0x295a5e['match'](/\[Tier[ ](\d+)\]/i)){const _0x553af3=Number(RegExp['$1']);_0x553af3<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x3a508d(0x1b0)](_0x19d6df,_0x553af3,tier)),SceneManager[_0x3a508d(0x207)]()):tier=Math['max'](_0x553af3,tier);}VisuMZ[_0x3a508d(0x205)](VisuMZ[label][_0x3a508d(0x242)],_0x39b593[_0x3a508d(0x1ed)]);})(pluginData),VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1a5)]={'RequireAnyWpn':/<(?:REQUIRE|REQUIRES) ANY (?:WEAPON|WEAPONS)>/i,'SwitchWpnTypeNum':/<(?:SWITCH|SWITCHES) TO (?:WEAPON|WEAPON TYPE|WTYPE):[ ](\d+)>/i,'SwitchWpnTypeStr':/<(?:SWITCH|SWITCHES) TO (?:WEAPON|WEAPON TYPE|WTYPE):[ ](\d+)>/i},DataManager[_0x1c2abe(0x20f)]=function(){const _0x2fcaf3=_0x1c2abe;if(this[_0x2fcaf3(0x1c7)])return this[_0x2fcaf3(0x1c7)];this[_0x2fcaf3(0x1c7)]=[];for(let _0x35ef83=0x1;_0x35ef83<$dataSystem[_0x2fcaf3(0x28c)][_0x2fcaf3(0x218)];_0x35ef83++){const _0x19e5da=$dataWeapons[_0x2fcaf3(0x22a)](_0x515fff=>_0x515fff&&_0x515fff[_0x2fcaf3(0x261)]===_0x35ef83),_0x25d7f6=_0x19e5da[0x0]||null;!_0x25d7f6&&console[_0x2fcaf3(0x1ac)](_0x2fcaf3(0x20e)[_0x2fcaf3(0x1b0)]($dataSystem[_0x2fcaf3(0x28c)][_0x35ef83][_0x2fcaf3(0x230)](/\\I\[(\d+)\]/gi,''))),this[_0x2fcaf3(0x1c7)][_0x2fcaf3(0x19a)](_0x25d7f6);}return this['_firstOfEachWeaponType']['remove'](null)[_0x2fcaf3(0x1a7)](undefined),this[_0x2fcaf3(0x1c7)];},DataManager[_0x1c2abe(0x273)]=function(_0x19c3cd){const _0x456df1=_0x1c2abe;_0x19c3cd=_0x19c3cd[_0x456df1(0x264)]()[_0x456df1(0x1ff)](),this[_0x456df1(0x1d8)]=this[_0x456df1(0x1d8)]||{};if(this[_0x456df1(0x1d8)][_0x19c3cd])return this['_wtypeIDs'][_0x19c3cd];for(let _0x57a493=0x1;_0x57a493<0x64;_0x57a493++){if(!$dataSystem[_0x456df1(0x28c)][_0x57a493])continue;let _0x34b203=$dataSystem[_0x456df1(0x28c)][_0x57a493][_0x456df1(0x264)]()['trim']();_0x34b203=_0x34b203['replace'](/\x1I\[(\d+)\]/gi,''),_0x34b203=_0x34b203['replace'](/\\I\[(\d+)\]/gi,''),this['_wtypeIDs'][_0x34b203]=_0x57a493;}return this[_0x456df1(0x1d8)][_0x456df1(0x20b)]=0x0,this['_wtypeIDs'][_0x19c3cd]||0x0;},ImageManager[_0x1c2abe(0x252)]=VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x242)]['UI'][_0x1c2abe(0x1e0)],TextManager[_0x1c2abe(0x1fa)]=VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x242)]['UI'][_0x1c2abe(0x1ee)],TextManager[_0x1c2abe(0x19f)]=VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x242)]['UI'][_0x1c2abe(0x234)]??_0x1c2abe(0x1cd),VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x288)]=Game_Action[_0x1c2abe(0x249)][_0x1c2abe(0x244)],Game_Action[_0x1c2abe(0x249)][_0x1c2abe(0x244)]=function(){const _0x192f21=_0x1c2abe;VisuMZ[_0x192f21(0x1a3)][_0x192f21(0x288)][_0x192f21(0x208)](this),this[_0x192f21(0x228)]()&&this[_0x192f21(0x228)]()[_0x192f21(0x1d5)]()&&this[_0x192f21(0x265)]()&&this[_0x192f21(0x228)]()[_0x192f21(0x1c2)](this['item']());},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x278)]=Game_BattlerBase[_0x1c2abe(0x249)][_0x1c2abe(0x19b)],Game_BattlerBase['prototype']['meetsSkillConditions']=function(_0x4a7823){const _0x146f8f=_0x1c2abe;return VisuMZ['WeaponSwapSystem'][_0x146f8f(0x278)][_0x146f8f(0x208)](this,_0x4a7823)&&this[_0x146f8f(0x1c6)](_0x4a7823);},Game_BattlerBase[_0x1c2abe(0x249)][_0x1c2abe(0x1c6)]=function(_0x21ff05){return!![];},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x204)]=Game_Battler[_0x1c2abe(0x249)][_0x1c2abe(0x259)],Game_Battler['prototype']['requestMotionRefresh']=function(){const _0x4eb20f=_0x1c2abe;if(this[_0x4eb20f(0x292)]()&&this['_swappingWeapon'])return;else VisuMZ[_0x4eb20f(0x1a3)][_0x4eb20f(0x204)]['call'](this);},Game_Actor[_0x1c2abe(0x24f)]=VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x242)][_0x1c2abe(0x1fe)][_0x1c2abe(0x1e5)],VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1ca)]=Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1e3)],Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1e3)]=function(_0xa3bcae){const _0x310896=_0x1c2abe;VisuMZ[_0x310896(0x1a3)][_0x310896(0x1ca)]['call'](this,_0xa3bcae),this[_0x310896(0x1b7)]();},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1b7)]=function(){const _0xd92f08=_0x1c2abe;this[_0xd92f08(0x1f1)]={};for(let _0x59df10=0x1;_0x59df10<$dataSystem[_0xd92f08(0x28c)][_0xd92f08(0x218)];_0x59df10++){this[_0xd92f08(0x1f1)][_0x59df10]=0x0;}this[_0xd92f08(0x240)]=0x0;for(const _0x2d9b9f of this['weapons']()){if(!_0x2d9b9f)continue;const _0xa23eff=_0x2d9b9f['wtypeId'];this['_swapWeapons'][_0xa23eff]=_0x2d9b9f['id'],this[_0xd92f08(0x240)]=this[_0xd92f08(0x240)]||_0xa23eff;}},Game_Actor[_0x1c2abe(0x249)]['canWeaponSwap']=function(){const _0x54a619=_0x1c2abe;return this[_0x54a619(0x26f)]()['includes'](0x1);},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1d4)]=Game_Actor['prototype'][_0x1c2abe(0x1a2)],Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1a2)]=function(){return![];},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x1f4)]=Game_Actor[_0x1c2abe(0x249)]['equipSlots'],Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x26f)]=function(){const _0x56a3c0=_0x1c2abe;let _0x4c828d=VisuMZ[_0x56a3c0(0x1a3)][_0x56a3c0(0x1f4)]['call'](this);return _0x4c828d[_0x56a3c0(0x237)](0x1)&&(_0x4c828d['remove'](0x1),_0x4c828d[_0x56a3c0(0x25a)](0x1)),_0x4c828d;},Game_Actor['prototype'][_0x1c2abe(0x212)]=function(){const _0x56822b=_0x1c2abe;let _0x4db51b=_0x56822b(0x212);if(this[_0x56822b(0x1f7)](_0x4db51b))return this[_0x56822b(0x241)][_0x4db51b];return this[_0x56822b(0x241)][_0x4db51b]=this['createWeaponSwapTypes'](),this[_0x56822b(0x241)][_0x4db51b];},Game_Actor['prototype'][_0x1c2abe(0x1ba)]=function(){const _0x24ffb9=_0x1c2abe,_0x4fb5ce=[],_0x548e83=$dataSystem[_0x24ffb9(0x28c)]['length'];for(let _0x34b9af=0x1;_0x34b9af<_0x548e83;_0x34b9af++){if(this[_0x24ffb9(0x20a)](_0x34b9af))_0x4fb5ce[_0x24ffb9(0x19a)](_0x34b9af);}return _0x4fb5ce;},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x263)]=function(_0x5dea03){const _0x564a41=_0x1c2abe;return this['_swapWeapons']===undefined&&this[_0x564a41(0x1b7)](),this[_0x564a41(0x1f1)][_0x5dea03]=this[_0x564a41(0x1f1)][_0x5dea03]||0x0,$dataWeapons[this[_0x564a41(0x1f1)][_0x5dea03]]||null;},Game_Actor[_0x1c2abe(0x249)]['getAllEquippedSwapWeapons']=function(){const _0x1d2252=_0x1c2abe;return this[_0x1d2252(0x212)]()['map'](_0x3d8dbe=>this[_0x1d2252(0x263)](_0x3d8dbe))[_0x1d2252(0x1a7)](null)[_0x1d2252(0x1a7)](undefined);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x239)]=function(_0x2a45aa,_0x1eebc0){const _0x6fe64c=_0x1c2abe;this[_0x6fe64c(0x1f1)]===undefined&&this[_0x6fe64c(0x1b7)](),this[_0x6fe64c(0x1f1)][_0x2a45aa]=_0x1eebc0,this['refresh']();},Game_Actor['prototype']['swapWeaponNext']=function(){const _0x34be70=_0x1c2abe;this['_swapWeapons']===undefined&&this[_0x34be70(0x1b7)]();const _0x5b611d=this[_0x34be70(0x240)],_0xc68420=this[_0x34be70(0x212)]();let _0x2d1b1b=_0xc68420[_0x34be70(0x223)](this[_0x34be70(0x240)]);for(;;){_0x2d1b1b++;if(_0x2d1b1b>=_0xc68420[_0x34be70(0x218)])_0x2d1b1b=0x0;if(this[_0x34be70(0x263)](_0xc68420[_0x2d1b1b]))break;}const _0x1edb0e=_0xc68420[_0x2d1b1b];this['switchToWeaponType'](_0x1edb0e),_0x1edb0e!==_0x5b611d&&this[_0x34be70(0x226)](!![]);},Game_Actor['prototype'][_0x1c2abe(0x1c9)]=function(){const _0x2a348f=_0x1c2abe;this[_0x2a348f(0x1f1)]===undefined&&this['initWeaponSwapSystem']();const _0x6cce46=this['_currentWeaponType'],_0xdc1efd=this[_0x2a348f(0x212)]();let _0x296283=_0xdc1efd[_0x2a348f(0x223)](this[_0x2a348f(0x240)]);for(;;){_0x296283--;if(_0x296283<0x0)_0x296283=_0xdc1efd[_0x2a348f(0x218)]-0x1;if(this[_0x2a348f(0x263)](_0xdc1efd[_0x296283]))break;}const _0x572385=_0xdc1efd[_0x296283];this[_0x2a348f(0x220)](_0x572385),_0x572385!==_0x6cce46&&this[_0x2a348f(0x226)](!![]);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x226)]=function(_0x229663){const _0x3c4fdc=_0x1c2abe,_0x2263b1=this['weapons']()[0x0];_0x2263b1&&_0x229663&&(this[_0x3c4fdc(0x24b)]=!![],this[_0x3c4fdc(0x28e)]());},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x220)]=function(_0x6cf5c6){const _0xc5b1db=_0x1c2abe;this[_0xc5b1db(0x1f1)]===undefined&&this[_0xc5b1db(0x1b7)]();_0x6cf5c6=_0x6cf5c6||0x0;if(!this[_0xc5b1db(0x27e)]())return;if(!this[_0xc5b1db(0x20a)](_0x6cf5c6))return;this[_0xc5b1db(0x240)]=_0x6cf5c6,this[_0xc5b1db(0x1f1)][_0x6cf5c6]=this['_swapWeapons'][_0x6cf5c6]||0x0;const _0x3820ee=$dataWeapons[this[_0xc5b1db(0x1f1)][_0x6cf5c6]]||null;this[_0xc5b1db(0x246)][0x0][_0xc5b1db(0x1a1)](_0x3820ee),this[_0xc5b1db(0x241)]={};},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x1f5)]=Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x201)],Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x201)]=function(_0x4017ec,_0x42716b){const _0x8ab3c8=_0x1c2abe;DataManager[_0x8ab3c8(0x1ec)](_0x42716b)||_0x4017ec===0x0&&this[_0x8ab3c8(0x27e)]()?this[_0x8ab3c8(0x1a0)](_0x42716b):VisuMZ[_0x8ab3c8(0x1a3)][_0x8ab3c8(0x1f5)][_0x8ab3c8(0x208)](this,_0x4017ec,_0x42716b);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1a0)]=function(_0x151c34){const _0x16bec8=_0x1c2abe;if(!!_0x151c34){const _0x1db6c9=_0x151c34['wtypeId'];this[_0x16bec8(0x220)](_0x1db6c9);const _0x50db8d=this[_0x16bec8(0x26a)]()[0x0];!!_0x50db8d?this[_0x16bec8(0x25d)](_0x151c34,_0x50db8d):this[_0x16bec8(0x25d)](_0x151c34,null),this['setSwapWeapon'](_0x1db6c9,_0x151c34['id']),this[_0x16bec8(0x220)](_0x1db6c9);}else{if(!!this[_0x16bec8(0x26a)]()[0x0]){const _0x47b612=this[_0x16bec8(0x26a)]()[0x0],_0x593e6b=_0x47b612[_0x16bec8(0x261)];this[_0x16bec8(0x220)](_0x593e6b),this[_0x16bec8(0x25d)](null,_0x47b612),this[_0x16bec8(0x239)](_0x593e6b,0x0),this['updateSwapToNextAvailableWeapon']();}}this[_0x16bec8(0x1e1)]();},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x27a)]=function(){const _0x7b583b=_0x1c2abe;if(this[_0x7b583b(0x26a)]()[_0x7b583b(0x218)]>0x0)return;const _0x585cd7=this[_0x7b583b(0x1e6)](),_0x24cb8a=_0x585cd7[0x0]||null,_0x3ee048=_0x24cb8a?_0x24cb8a[_0x7b583b(0x261)]:0x0;this[_0x7b583b(0x220)](_0x3ee048);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x267)]=function(_0x5d7e0a){const _0x5dcfa1=_0x1c2abe;if(this[_0x5dcfa1(0x1a8)]||_0x5d7e0a||this['_tempActor'])return;this['_checkingWeaponSwaps']=!![];let _0x2c5097=![];for(let _0x1eefb5=0x1;_0x1eefb5<$dataSystem[_0x5dcfa1(0x28c)][_0x5dcfa1(0x218)];_0x1eefb5++){if(this[_0x5dcfa1(0x20a)](_0x1eefb5))continue;const _0x423b41=this[_0x5dcfa1(0x263)](_0x1eefb5);if(!_0x423b41)continue;this[_0x5dcfa1(0x1f1)][_0x1eefb5]=0x0,$gameParty[_0x5dcfa1(0x28f)](_0x423b41,0x1),_0x2c5097=!![],this[_0x5dcfa1(0x246)][0x0][_0x5dcfa1(0x26c)]()===_0x423b41&&this[_0x5dcfa1(0x246)][0x0][_0x5dcfa1(0x1a1)](null);}if(_0x2c5097){const _0x1bebee=this[_0x5dcfa1(0x26a)]()[0x0]||null;this['_currentWeaponType']=_0x1bebee?_0x1bebee['wtypeId']:0x0,this[_0x5dcfa1(0x1e1)]();}this[_0x5dcfa1(0x1a8)]=undefined;},VisuMZ[_0x1c2abe(0x1a3)]['Game_Actor_releaseUnequippableItems']=Game_Actor[_0x1c2abe(0x249)]['releaseUnequippableItems'],Game_Actor[_0x1c2abe(0x249)]['releaseUnequippableItems']=function(_0x4ded0f){const _0x4d7676=_0x1c2abe;this['processWeaponSwapRelease'](_0x4ded0f),VisuMZ[_0x4d7676(0x1a3)][_0x4d7676(0x1f2)][_0x4d7676(0x208)](this,_0x4ded0f);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x280)]=function(){const _0x51def2=_0x1c2abe,_0x4c01f5=this[_0x51def2(0x240)],_0xc22b3c=DataManager[_0x51def2(0x20f)]();for(const _0x31ce1b of this['weaponSwapTypes']()){if(this['getSwapWeapon'](_0x31ce1b))continue;const _0x5cd584=_0xc22b3c[_0x31ce1b-0x1];_0x5cd584&&this[_0x51def2(0x239)](_0x31ce1b,_0x5cd584['id']);}this[_0x51def2(0x220)](_0x4c01f5);},Game_Actor[_0x1c2abe(0x249)]['meetsAnyWeaponEquippedCondition']=function(_0x48b201){const _0x19c9ec=_0x1c2abe;return _0x48b201&&_0x48b201[_0x19c9ec(0x248)][_0x19c9ec(0x235)](VisuMZ[_0x19c9ec(0x1a3)][_0x19c9ec(0x1a5)][_0x19c9ec(0x1b5)])?!!this[_0x19c9ec(0x26a)]()[0x0]:!![];},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x26e)]=function(_0x1f7876){const _0x119b75=_0x1c2abe,_0xf481f7=_0x1f7876[_0x119b75(0x203)],_0x1a8c13=_0x1f7876[_0x119b75(0x225)];if(_0xf481f7===0x0&&_0x1a8c13===0x0)return!![];if(_0xf481f7>0x0&&!this[_0x119b75(0x263)](_0xf481f7))return![];if(_0x1a8c13>0x0&&!this[_0x119b75(0x263)](_0x1a8c13))return![];return!![];},Game_Actor['prototype']['applyWeaponSwapAction']=function(_0x1e462a){const _0x231a7f=_0x1c2abe;if(!DataManager[_0x231a7f(0x265)](_0x1e462a))return;const _0x4ace57=VisuMZ[_0x231a7f(0x1a3)][_0x231a7f(0x1a5)];if(_0x1e462a['note'][_0x231a7f(0x235)](_0x4ace57['SwitchWpnTypeNum'])){this[_0x231a7f(0x220)](Number(RegExp['$1']));return;}else{if(_0x1e462a[_0x231a7f(0x248)][_0x231a7f(0x235)](_0x4ace57[_0x231a7f(0x229)])){const _0x16e8a5=DataManager[_0x231a7f(0x273)](RegExp['$1']);this[_0x231a7f(0x220)](_0x16e8a5);return;}}if(this[_0x231a7f(0x1bb)]===_0x1e462a[_0x231a7f(0x203)]||this[_0x231a7f(0x1bb)]===_0x1e462a[_0x231a7f(0x225)])return;if(_0x1e462a[_0x231a7f(0x203)]>0x0)this['switchToWeaponType'](_0x1e462a[_0x231a7f(0x203)]);else _0x1e462a[_0x231a7f(0x225)]>0x0&&this['switchToWeaponType'](_0x1e462a[_0x231a7f(0x225)]);},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x198)]=Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x284)],Game_Actor[_0x1c2abe(0x249)]['optimizeEquipments']=function(){const _0x28c387=_0x1c2abe;VisuMZ[_0x28c387(0x1a3)][_0x28c387(0x198)][_0x28c387(0x208)](this),this[_0x28c387(0x1f3)]();},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x21d)]=Game_Actor[_0x1c2abe(0x249)]['isOptimizeEquipOk'],Game_Actor['prototype']['isOptimizeEquipOk']=function(_0x540b93){const _0x44f2a5=_0x1c2abe;if(this['canWeaponSwap']()&&_0x540b93===0x0)return![];return VisuMZ[_0x44f2a5(0x1a3)][_0x44f2a5(0x21d)][_0x44f2a5(0x208)](this,_0x540b93);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1f3)]=function(){const _0x347568=_0x1c2abe;if(!this['canWeaponSwap']())return;if(!VisuMZ[_0x347568(0x1a3)][_0x347568(0x21d)]['call'](this,0x0))return;const _0xed250e=this[_0x347568(0x240)];for(const _0x48e44c of this[_0x347568(0x212)]()){this[_0x347568(0x220)](_0x48e44c),this[_0x347568(0x1a0)](this[_0x347568(0x222)](_0x48e44c));}this[_0x347568(0x220)](_0xed250e),this[_0x347568(0x1e1)]();},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x222)]=function(_0x212920){const _0x3cd9af=_0x1c2abe,_0x4e75ed=$gameParty['weapons']()['concat'](this[_0x3cd9af(0x26a)]()),_0x22b3d4=_0x4e75ed[_0x3cd9af(0x22a)](_0x5acff7=>_0x5acff7[_0x3cd9af(0x261)]===_0x212920);let _0x5d9bb5=null,_0xbf9d8d=-0x3e8;for(let _0x4bb01b=0x0;_0x4bb01b<_0x22b3d4['length'];_0x4bb01b++){const _0x230159=this[_0x3cd9af(0x224)](_0x22b3d4[_0x4bb01b]);_0x230159>_0xbf9d8d&&(_0xbf9d8d=_0x230159,_0x5d9bb5=_0x22b3d4[_0x4bb01b]);}return _0x5d9bb5;},VisuMZ['WeaponSwapSystem']['Game_Actor_clearEquipments']=Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x27b)],Game_Actor['prototype'][_0x1c2abe(0x27b)]=function(){const _0x6edbf5=_0x1c2abe;VisuMZ[_0x6edbf5(0x1a3)][_0x6edbf5(0x1bc)][_0x6edbf5(0x208)](this),this[_0x6edbf5(0x202)]();},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x24e)]=Game_Actor['prototype'][_0x1c2abe(0x1e9)],Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x1e9)]=function(_0x1fc8cd){const _0x11e33a=_0x1c2abe;if(this['canWeaponSwap']()&&_0x1fc8cd===0x0)return![];return VisuMZ['WeaponSwapSystem'][_0x11e33a(0x24e)][_0x11e33a(0x208)](this,_0x1fc8cd);},Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x202)]=function(){const _0x209c04=_0x1c2abe;if(!this[_0x209c04(0x27e)]())return;if(!VisuMZ['WeaponSwapSystem'][_0x209c04(0x24e)][_0x209c04(0x208)](this,0x0))return;for(let _0xf4511d=0x1;_0xf4511d<$dataSystem[_0x209c04(0x28c)]['length'];_0xf4511d++){const _0x4e552b=this['getSwapWeapon'](_0xf4511d);_0x4e552b&&(this['switchToWeaponType'](_0xf4511d),this[_0x209c04(0x1a0)](null));}this['refresh']();},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x1fb)]=Game_Party[_0x1c2abe(0x249)][_0x1c2abe(0x266)],Game_Party[_0x1c2abe(0x249)][_0x1c2abe(0x266)]=function(){const _0x1ff0d5=_0x1c2abe;VisuMZ[_0x1ff0d5(0x1a3)][_0x1ff0d5(0x1fb)][_0x1ff0d5(0x208)](this);for(const _0xd3a143 of this[_0x1ff0d5(0x28d)]()){if(!_0xd3a143)continue;_0xd3a143['setupBattleTestWeapons']();}this[_0x1ff0d5(0x1be)]=!![];},Scene_Equip[_0x1c2abe(0x249)][_0x1c2abe(0x1aa)]=function(){const _0x545066=_0x1c2abe,_0x4310fc=this[_0x545066(0x1f8)](),_0x293bba=this[_0x545066(0x282)][_0x545066(0x270)],_0x7d19d9=this[_0x545066(0x282)]['item']();_0x4310fc[_0x545066(0x201)](_0x293bba,_0x7d19d9);},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x1c4)]=Scene_Battle[_0x1c2abe(0x249)]['createActorCommandWindow'],Scene_Battle[_0x1c2abe(0x249)]['createActorCommandWindow']=function(){const _0x25911f=_0x1c2abe;VisuMZ['WeaponSwapSystem'][_0x25911f(0x1c4)]['call'](this);const _0x5a354a=this[_0x25911f(0x1de)];_0x5a354a[_0x25911f(0x28b)](_0x25911f(0x211),this[_0x25911f(0x233)][_0x25911f(0x24a)](this));},Scene_Battle[_0x1c2abe(0x249)][_0x1c2abe(0x233)]=function(){const _0xd22719=_0x1c2abe,_0x3e1e1d=BattleManager[_0xd22719(0x1f8)]();_0x3e1e1d['swapWeaponNext'](),this[_0xd22719(0x1de)][_0xd22719(0x258)](),this['_actorCommandWindow'][_0xd22719(0x1e1)]();},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1af)]=Sprite_Actor['prototype'][_0x1c2abe(0x21f)],Sprite_Actor[_0x1c2abe(0x249)]['refreshMotion']=function(){const _0x11ba0c=_0x1c2abe;this[_0x11ba0c(0x227)]&&this[_0x11ba0c(0x227)]['_swappingWeapon']&&(this['_actor'][_0x11ba0c(0x24b)]=undefined),VisuMZ[_0x11ba0c(0x1a3)]['Sprite_Actor_refreshMotion'][_0x11ba0c(0x208)](this);},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x271)]=Window_Base[_0x1c2abe(0x249)]['playOkSound'],Window_Base[_0x1c2abe(0x249)]['playOkSound']=function(){const _0x22d802=_0x1c2abe;this[_0x22d802(0x19e)][_0x22d802(0x21e)]===_0x22d802(0x22c)&&this['currentSymbol']()===_0x22d802(0x211)?SoundManager['playEquip']():VisuMZ['WeaponSwapSystem']['Window_Base_playOkSound'][_0x22d802(0x208)](this);},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x1cf)]=Window_StatusBase[_0x1c2abe(0x249)][_0x1c2abe(0x1bf)],Window_StatusBase['prototype'][_0x1c2abe(0x1bf)]=function(_0x3174b7,_0x8f3449){const _0x535f1e=_0x1c2abe;return _0x3174b7&&_0x3174b7[_0x535f1e(0x27e)]()?this[_0x535f1e(0x21b)](_0x3174b7,_0x8f3449):VisuMZ[_0x535f1e(0x1a3)]['Window_StatusBase_actorSlotName'][_0x535f1e(0x208)](this,_0x3174b7,_0x8f3449);},Window_StatusBase[_0x1c2abe(0x249)]['actorSlotNameWeaponSwap']=function(_0x352239,_0x3a5329){const _0x285a22=_0x1c2abe;let _0x12b184=_0x352239[_0x285a22(0x212)]()['length']-0x1;Window_EquipSlot[_0x285a22(0x1b6)]&&(_0x12b184=$dataSystem[_0x285a22(0x28c)]['length']-0x2);if(_0x3a5329>_0x12b184)return _0x3a5329-=_0x12b184,VisuMZ[_0x285a22(0x1a3)][_0x285a22(0x1cf)][_0x285a22(0x208)](this,_0x352239,_0x3a5329);else{let _0x21ea8d='';if(Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS'])_0x21ea8d=$dataSystem['weaponTypes'][_0x3a5329+0x1]||'';else{const _0xbe91ad=_0x352239['weaponSwapTypes']()[_0x3a5329];_0x21ea8d=$dataSystem['weaponTypes'][_0xbe91ad]||'';}return _0x21ea8d=_0x21ea8d[_0x285a22(0x230)](/\\I\[(\d+)\]/gi,''),_0x21ea8d;}},Window_EquipSlot[_0x1c2abe(0x1b6)]=VisuMZ[_0x1c2abe(0x1a3)]['Settings']['UI'][_0x1c2abe(0x28a)],VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x286)]=Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x279)],Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x279)]=function(){const _0x4ecbf6=_0x1c2abe;return this[_0x4ecbf6(0x227)]&&this[_0x4ecbf6(0x227)][_0x4ecbf6(0x27e)]()?this['maxItemsWeaponSwap']():VisuMZ['WeaponSwapSystem'][_0x4ecbf6(0x286)][_0x4ecbf6(0x208)](this);},Window_EquipSlot['prototype'][_0x1c2abe(0x24d)]=function(){const _0x7dd284=_0x1c2abe;let _0x32a0af=this[_0x7dd284(0x227)][_0x7dd284(0x26f)]()[_0x7dd284(0x218)]-0x1;return Window_EquipSlot[_0x7dd284(0x1b6)]?_0x32a0af+=$dataSystem['weaponTypes']['length']-0x1:_0x32a0af+=this[_0x7dd284(0x227)]['weaponSwapTypes']()[_0x7dd284(0x218)],_0x32a0af;},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x289)]=Window_EquipSlot['prototype'][_0x1c2abe(0x262)],Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x262)]=function(_0x11f50c){const _0x57cfaf=_0x1c2abe;return this[_0x57cfaf(0x227)]&&this[_0x57cfaf(0x227)][_0x57cfaf(0x27e)]()?this['itemAtWeaponSwap'](_0x11f50c):VisuMZ[_0x57cfaf(0x1a3)]['Window_EquipSlot_itemAt'][_0x57cfaf(0x208)](this,_0x11f50c);},Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x1eb)]=function(_0x51a453){const _0x52f8c7=_0x1c2abe;let _0x262095=this['_actor'][_0x52f8c7(0x212)]()[_0x52f8c7(0x218)]-0x1;Window_EquipSlot[_0x52f8c7(0x1b6)]&&(_0x262095=$dataSystem['weaponTypes']['length']-0x2);if(_0x51a453>_0x262095)return _0x51a453-=_0x262095,VisuMZ[_0x52f8c7(0x1a3)]['Window_EquipSlot_itemAt'][_0x52f8c7(0x208)](this,_0x51a453);else{let _0x4e7c60=this['_actor'][_0x52f8c7(0x212)]()[_0x51a453];return Window_EquipSlot[_0x52f8c7(0x1b6)]&&(_0x4e7c60=_0x51a453+0x1),this[_0x52f8c7(0x227)][_0x52f8c7(0x263)](_0x4e7c60);}},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1b4)]=Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x221)],Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x221)]=function(_0x3bda29){const _0x442743=_0x1c2abe;return this[_0x442743(0x227)]&&this['_actor'][_0x442743(0x27e)]()?this[_0x442743(0x1dd)](_0x3bda29):VisuMZ[_0x442743(0x1a3)][_0x442743(0x1b4)][_0x442743(0x208)](this,_0x3bda29);},Window_EquipSlot[_0x1c2abe(0x249)]['isEnabledWeaponSwap']=function(_0x1b80a2){const _0xe0c3da=_0x1c2abe;let _0x5a4ec0=this['_actor'][_0xe0c3da(0x212)]()[_0xe0c3da(0x218)]-0x1;Window_EquipSlot[_0xe0c3da(0x1b6)]&&(_0x5a4ec0=$dataSystem[_0xe0c3da(0x28c)][_0xe0c3da(0x218)]-0x2);if(_0x1b80a2>_0x5a4ec0)return _0x1b80a2-=_0x5a4ec0,VisuMZ['WeaponSwapSystem'][_0xe0c3da(0x1b4)]['call'](this,_0x1b80a2);else{if(!this[_0xe0c3da(0x227)][_0xe0c3da(0x24c)](0x0))return![];else return Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']?this[_0xe0c3da(0x227)][_0xe0c3da(0x212)]()[_0xe0c3da(0x237)](_0x1b80a2+0x1):!![];}},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x287)]=Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x24c)],Game_Actor[_0x1c2abe(0x249)][_0x1c2abe(0x24c)]=function(_0x2f4ff5){const _0xbd6f2b=_0x1c2abe;if(_0x2f4ff5<=0x0&&this[_0xbd6f2b(0x27e)]())return!![];return VisuMZ[_0xbd6f2b(0x1a3)]['Game_Actor_isEquipChangeOk'][_0xbd6f2b(0x208)](this,_0x2f4ff5);},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x25f)]=Game_BattlerBase[_0x1c2abe(0x249)]['isEquipTypeSealed'],Game_BattlerBase[_0x1c2abe(0x249)][_0x1c2abe(0x26d)]=function(_0xc00e76){const _0x948dbb=_0x1c2abe;if(_0xc00e76<=0x0&&this[_0x948dbb(0x27e)]())return![];return VisuMZ['WeaponSwapSystem']['Game_BattlerBase_isEquipTypeSealed'][_0x948dbb(0x208)](this,_0xc00e76);},Window_EquipSlot[_0x1c2abe(0x249)]['processShiftRemoveShortcut']=function(){const _0x4a2020=_0x1c2abe;SoundManager[_0x4a2020(0x1d2)]();const _0x15b7cc=SceneManager[_0x4a2020(0x1c1)][_0x4a2020(0x227)];this[_0x4a2020(0x282)]['_slotId']>0x0?_0x15b7cc[_0x4a2020(0x201)](this['_itemWindow'][_0x4a2020(0x270)],null):(_0x15b7cc[_0x4a2020(0x220)](this['_itemWindow']['_wtypeID']),_0x15b7cc[_0x4a2020(0x1a0)](null));this['refresh'](),this[_0x4a2020(0x282)]['refresh'](),this[_0x4a2020(0x19d)]();const _0x94c619=SceneManager['_scene']['_statusWindow'];if(_0x94c619)_0x94c619['refresh']();},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1ce)]=Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x245)],Window_EquipSlot[_0x1c2abe(0x249)][_0x1c2abe(0x245)]=function(){const _0x529704=_0x1c2abe;let _0x2afba5=VisuMZ['WeaponSwapSystem'][_0x529704(0x1ce)],_0x1a8ca0=this[_0x529704(0x227)]['weaponSwapTypes']()['length']-0x1;return Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']&&(_0x1a8ca0=$dataSystem['weaponTypes'][_0x529704(0x218)]-0x2),Math[_0x529704(0x1f6)](0x0,_0x2afba5-_0x1a8ca0);},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1bd)]=Window_EquipItem[_0x1c2abe(0x249)][_0x1c2abe(0x250)],Window_EquipItem['prototype'][_0x1c2abe(0x250)]=function(_0x223006){const _0x43c993=_0x1c2abe;VisuMZ[_0x43c993(0x1a3)][_0x43c993(0x1bd)][_0x43c993(0x208)](this,_0x223006),this['_wtypeID']=0x0;},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x1dc)]=Window_EquipItem[_0x1c2abe(0x249)][_0x1c2abe(0x1e7)],Window_EquipItem[_0x1c2abe(0x249)][_0x1c2abe(0x1e7)]=function(_0x19dc3a){const _0x56316f=_0x1c2abe;if(!this[_0x56316f(0x227)])return VisuMZ['WeaponSwapSystem'][_0x56316f(0x1dc)][_0x56316f(0x208)](this,_0x19dc3a);let _0x452beb=this[_0x56316f(0x227)][_0x56316f(0x212)]()['length']-0x1;Window_EquipSlot['WEAPON_SWAP_SYSTEM_SHOW_UNEQUIPPABLE_SLOTS']&&(_0x452beb=$dataSystem[_0x56316f(0x28c)][_0x56316f(0x218)]-0x2),_0x19dc3a>_0x452beb?(_0x19dc3a-=_0x452beb,this[_0x56316f(0x219)]=0x0,VisuMZ['WeaponSwapSystem'][_0x56316f(0x1dc)][_0x56316f(0x208)](this,_0x19dc3a)):(Window_EquipSlot[_0x56316f(0x1b6)]?this['_wtypeID']=_0x19dc3a+0x1:this[_0x56316f(0x219)]=this[_0x56316f(0x227)]['weaponSwapTypes']()[_0x19dc3a],_0x19dc3a=0x0,VisuMZ[_0x56316f(0x1a3)]['Window_EquipItem_setSlotId'][_0x56316f(0x208)](this,_0x19dc3a),this[_0x56316f(0x227)][_0x56316f(0x220)](this[_0x56316f(0x219)]),this['_statusWindow']&&this[_0x56316f(0x1db)][_0x56316f(0x1e1)]());},VisuMZ[_0x1c2abe(0x1a3)]['Window_EquipItem_includes']=Window_EquipItem[_0x1c2abe(0x249)][_0x1c2abe(0x237)],Window_EquipItem[_0x1c2abe(0x249)][_0x1c2abe(0x237)]=function(_0x3d7104){const _0x59027d=_0x1c2abe;if(_0x3d7104===null)return!this[_0x59027d(0x215)]()[_0x59027d(0x237)](this[_0x59027d(0x274)]());else return this[_0x59027d(0x270)]===0x0&&this[_0x59027d(0x219)]!==0x0?_0x3d7104['wtypeId']===this[_0x59027d(0x219)]:VisuMZ[_0x59027d(0x1a3)][_0x59027d(0x23b)][_0x59027d(0x208)](this,_0x3d7104);},VisuMZ['WeaponSwapSystem']['Window_EquipItem_isEnabled']=Window_EquipItem[_0x1c2abe(0x249)]['isEnabled'],Window_EquipItem[_0x1c2abe(0x249)]['isEnabled']=function(_0x486423){const _0x44b8fc=_0x1c2abe;if(!_0x486423)return!this[_0x44b8fc(0x215)]()[_0x44b8fc(0x237)](this[_0x44b8fc(0x274)]());return VisuMZ[_0x44b8fc(0x1a3)][_0x44b8fc(0x23e)][_0x44b8fc(0x208)](this,_0x486423);},Window_ActorCommand[_0x1c2abe(0x206)]=VisuMZ['WeaponSwapSystem']['Settings']['UI'][_0x1c2abe(0x268)],Window_ActorCommand['WEAPON_SWAP_SHORTCUT_ENABLE']=VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x242)]['UI'][_0x1c2abe(0x1c3)],Window_ActorCommand[_0x1c2abe(0x210)]=VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x242)]['UI'][_0x1c2abe(0x256)],Window_ActorCommand[_0x1c2abe(0x1a9)]=VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x242)]['UI'][_0x1c2abe(0x1b3)],VisuMZ[_0x1c2abe(0x1a3)]['Window_ActorCommand_initialize']=Window_ActorCommand[_0x1c2abe(0x249)]['initialize'],Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x250)]=function(_0x49351a){const _0x20a096=_0x1c2abe;VisuMZ[_0x20a096(0x1a3)][_0x20a096(0x21a)]['call'](this,_0x49351a),this['createWeaponSwapShortcutSprites']();},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x199)]=Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x216)],Window_ActorCommand['prototype']['addAttackCommand']=function(){const _0x5cd484=_0x1c2abe;if(this[_0x5cd484(0x227)])this[_0x5cd484(0x227)]['updateSwapToNextAvailableWeapon']();VisuMZ[_0x5cd484(0x1a3)][_0x5cd484(0x199)][_0x5cd484(0x208)](this);if(!this[_0x5cd484(0x227)][_0x5cd484(0x27e)]())return;this['alterAttackCommand']();if(this[_0x5cd484(0x23a)](_0x5cd484(0x211))>=0x0)return;this[_0x5cd484(0x1fd)]();},Window_ActorCommand['prototype'][_0x1c2abe(0x1c8)]=function(){const _0x25ffb8=_0x1c2abe,_0x3b49a6=$dataSkills[this[_0x25ffb8(0x227)]['attackSkillId']()];if(!_0x3b49a6)return;if(!this[_0x25ffb8(0x257)](_0x3b49a6))return;if(!Window_ActorCommand['WEAPON_SWAP_CHANGE_ATTACK_ICON'])return;const _0x431211=this['_actor']['weapons']()[0x0];if(!_0x431211)return;const _0x422fa7=this[_0x25ffb8(0x1d7)](),_0x94e797=DataManager[_0x25ffb8(0x293)](_0x3b49a6),_0x4450b2=_0x431211['iconIndex'],_0x8882c6=_0x422fa7===_0x25ffb8(0x1a4)?_0x94e797:_0x25ffb8(0x1da)[_0x25ffb8(0x1b0)](_0x4450b2,_0x94e797),_0x3827be=this[_0x25ffb8(0x23a)]('attack');if(_0x3827be>=0x0){const _0x5986d0=this[_0x25ffb8(0x1b8)][_0x3827be];_0x5986d0[_0x25ffb8(0x21e)]=_0x8882c6;}},Window_ActorCommand['prototype'][_0x1c2abe(0x1fd)]=function(_0x1920bf){const _0x3cefb5=_0x1c2abe;if(!Window_ActorCommand[_0x3cefb5(0x1a9)]&&!_0x1920bf)return;if(this[_0x3cefb5(0x227)][_0x3cefb5(0x212)]()[_0x3cefb5(0x218)]<=0x1)return;if(this[_0x3cefb5(0x227)][_0x3cefb5(0x1e6)]()[_0x3cefb5(0x218)]<=0x0)return;this['findSymbol'](_0x3cefb5(0x211))>=0x0&&this[_0x3cefb5(0x1e8)]();const _0x4fba13=this[_0x3cefb5(0x1d7)](),_0x4bafa1=TextManager[_0x3cefb5(0x1fa)],_0x2e0b36=ImageManager['swapWeaponIcon'],_0x1fb5f5=_0x4fba13===_0x3cefb5(0x1a4)?_0x4bafa1:_0x3cefb5(0x1da)['format'](_0x2e0b36,_0x4bafa1);this[_0x3cefb5(0x291)](_0x1fb5f5,_0x3cefb5(0x211));},Window_ActorCommand[_0x1c2abe(0x249)]['removeWeaponSwapCommand']=function(){const _0x372746=_0x1c2abe;while(this[_0x372746(0x23a)](_0x372746(0x211))>=0x0){const _0x4dacf6=this[_0x372746(0x23a)]('weaponSwap');this['_list'][_0x372746(0x253)](_0x4dacf6,0x1);}},Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x1b9)]=function(){const _0x1e1587=_0x1c2abe;return Window_ActorCommand[_0x1e1587(0x25e)]&&this['currentSymbol']()===_0x1e1587(0x27f)&&this[_0x1e1587(0x227)]&&this[_0x1e1587(0x227)][_0x1e1587(0x27e)]()&&this[_0x1e1587(0x227)]['getAllEquippedSwapWeapons']()[_0x1e1587(0x218)]>0x1;},Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x1c5)]=function(_0x12433a){const _0x2dd8ba=_0x1c2abe;this[_0x2dd8ba(0x1b9)]()?this[_0x2dd8ba(0x1ef)](!![]):Window_Command['prototype']['cursorRight'][_0x2dd8ba(0x208)](this,_0x12433a);},Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x283)]=function(_0x175bf3){const _0x5f18ef=_0x1c2abe;this[_0x5f18ef(0x1b9)]()?this['performWeaponSwap'](![]):Window_Command[_0x5f18ef(0x249)]['cursorLeft'][_0x5f18ef(0x208)](this,_0x175bf3);},Window_ActorCommand['prototype'][_0x1c2abe(0x1ef)]=function(_0x1433ca){const _0x4132d2=_0x1c2abe;_0x1433ca?this[_0x4132d2(0x227)][_0x4132d2(0x25c)]():this['_actor'][_0x4132d2(0x1c9)](),SoundManager[_0x4132d2(0x1d2)](),this[_0x4132d2(0x1e1)]();},Window_ActorCommand['prototype'][_0x1c2abe(0x27d)]=function(){const _0x5dde9e=_0x1c2abe;if(!Window_ActorCommand[_0x5dde9e(0x25e)])return;if(!Window_ActorCommand[_0x5dde9e(0x210)])return;const _0x3bf21e=[new Sprite(),new Sprite()];for(const _0x328cdd of _0x3bf21e){this[_0x5dde9e(0x277)](_0x328cdd),_0x328cdd[_0x5dde9e(0x285)]=0x0,_0x328cdd[_0x5dde9e(0x1ad)]['y']=0.5,_0x328cdd[_0x5dde9e(0x247)]=ImageManager[_0x5dde9e(0x231)](_0x5dde9e(0x272));}_0x3bf21e[0x0][_0x5dde9e(0x1ad)]['x']=0x0,_0x3bf21e[0x0]['setFrame'](0x78,0x24,0x18,0x18),_0x3bf21e[0x0]['x']=0x0,this[_0x5dde9e(0x1b2)]=_0x3bf21e[0x0],_0x3bf21e[0x1][_0x5dde9e(0x1ad)]['x']=0x1,_0x3bf21e[0x1]['setFrame'](0x90,0x24,0x18,0x18),_0x3bf21e[0x1]['x']=this[_0x5dde9e(0x217)],this[_0x5dde9e(0x25b)]=_0x3bf21e[0x1];},Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x26b)]=function(){const _0x20f59c=_0x1c2abe;Window_Scrollable[_0x20f59c(0x249)][_0x20f59c(0x26b)][_0x20f59c(0x208)](this),this[_0x20f59c(0x232)]();},Window_ActorCommand[_0x1c2abe(0x249)]['updateWeaponSwapShortcutSprites']=function(){const _0x408282=_0x1c2abe;if(!Window_ActorCommand['WEAPON_SWAP_SHORTCUT_ENABLE'])return;if(!Window_ActorCommand[_0x408282(0x210)])return;VisuMZ[_0x408282(0x1a3)]['updateShortcutOpacity']['call'](this[_0x408282(0x1b2)]),VisuMZ[_0x408282(0x1a3)][_0x408282(0x1b1)][_0x408282(0x208)](this['_weaponSwapShortcutSprite_Right']);},Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x214)]=function(){const _0x3e1b37=_0x1c2abe;if(!this[_0x3e1b37(0x227)])return![];if(this[_0x3e1b37(0x21c)]()!==_0x3e1b37(0x27f))return![];if(this['_actor'][_0x3e1b37(0x212)]()[_0x3e1b37(0x218)]<=0x1)return![];return this['_actor'][_0x3e1b37(0x1e6)]()['length']>0x1;},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x1b1)]=function(){const _0x1cea66=_0x1c2abe;if(!this[_0x1cea66(0x1d6)]['visible']||this['parent'][_0x1cea66(0x22f)]<0xff||this[_0x1cea66(0x1d6)][_0x1cea66(0x213)]<0xff)this['opacity']=0x0;else{if(this[_0x1cea66(0x1d6)]['isWeaponSwapShortcutVisible']()){var _0x233383=this[_0x1cea66(0x1d6)][_0x1cea66(0x209)](this[_0x1cea66(0x1d6)][_0x1cea66(0x23a)](_0x1cea66(0x27f))),_0x38ea13=_0x233383['y']+this['parent'][_0x1cea66(0x1ea)];_0x38ea13>0x0&&_0x38ea13<this[_0x1cea66(0x1d6)][_0x1cea66(0x22b)]-this[_0x1cea66(0x1d6)][_0x1cea66(0x1ea)]*0x2&&(_0x38ea13+=Math[_0x1cea66(0x27c)](this[_0x1cea66(0x1d6)]['lineHeight']()/0x2),this[_0x1cea66(0x285)]=0xff,this['y']=_0x38ea13);}else this['opacity']-=0x20;}},VisuMZ[_0x1c2abe(0x1a3)]['Window_ActorCommand_setup']=Window_ActorCommand['prototype'][_0x1c2abe(0x22e)],Window_ActorCommand[_0x1c2abe(0x249)][_0x1c2abe(0x22e)]=function(_0x319bb0){const _0xfaefa7=_0x1c2abe;VisuMZ[_0xfaefa7(0x1a3)][_0xfaefa7(0x1f9)]['call'](this,_0x319bb0),this['_weaponSwapShortcutSprite_Right']&&(this[_0xfaefa7(0x25b)]['x']=this[_0xfaefa7(0x217)]);},VisuMZ['WeaponSwapSystem'][_0x1c2abe(0x242)][_0x1c2abe(0x1f0)]=Window_ActorCommand[_0x1c2abe(0x249)]['updateHelp'],Window_ActorCommand[_0x1c2abe(0x249)]['updateHelp']=function(){const _0x328471=_0x1c2abe,_0x5717aa=this[_0x328471(0x21c)]();switch(_0x5717aa){case _0x328471(0x211):this[_0x328471(0x19c)][_0x328471(0x1d3)](TextManager[_0x328471(0x19f)]);break;default:VisuMZ[_0x328471(0x1a3)][_0x328471(0x242)]['Window_ActorCommand_updateHelp'][_0x328471(0x208)](this);break;}},VisuMZ[_0x1c2abe(0x1a3)][_0x1c2abe(0x276)]=Window_ShopStatus[_0x1c2abe(0x249)][_0x1c2abe(0x23c)],Window_ShopStatus[_0x1c2abe(0x249)][_0x1c2abe(0x23c)]=function(_0x22904c,_0x538a74,_0x159a7c,_0x4e593e,_0x2d1f2c){const _0x5dde6d=_0x1c2abe;let _0x4ed6e1=0x0;_0x22904c&&_0x22904c[_0x5dde6d(0x27e)]()&&DataManager[_0x5dde6d(0x1ec)](this[_0x5dde6d(0x23d)])&&(_0x4ed6e1=_0x22904c['_currentWeaponType'],_0x22904c[_0x5dde6d(0x220)](this[_0x5dde6d(0x23d)][_0x5dde6d(0x261)])),VisuMZ[_0x5dde6d(0x1a3)][_0x5dde6d(0x276)][_0x5dde6d(0x208)](this,_0x22904c,_0x538a74,_0x159a7c,_0x4e593e,_0x2d1f2c),_0x22904c&&_0x22904c[_0x5dde6d(0x27e)]()&&_0x4ed6e1>0x0&&_0x22904c['switchToWeaponType'](_0x4ed6e1);};