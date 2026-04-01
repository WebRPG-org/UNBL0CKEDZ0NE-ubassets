//=============================================================================
// VisuStella MZ - Skills & States Core
// VisuMZ_1_SkillsStatesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SkillsStatesCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillsStatesCore = VisuMZ.SkillsStatesCore || {};
VisuMZ.SkillsStatesCore.version = 1.51;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.51] [SkillsStatesCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skills_and_States_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Skills & States Core plugin extends and builds upon the functionality of
 * RPG Maker MZ's inherent skill, state, and buff functionalities and allows
 * game devs to customize its various aspects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assigning multiple Skill Types to Skills.
 * * Making custom Skill Cost Types (such as HP, Gold, and Items).
 * * Allowing Skill Costs to become percentile-based or dynamic either directly
 *   through the Skills themselves or through trait-like notetags.
 * * Replacing gauges for different classes to display different types of
 *   Skill Cost Type resources.
 * * Hiding/Showing and enabling/disabling skills based on switches, learned
 *   skills, and code.
 * * Setting rulings for states, including if they're cleared upon death, how
 *   reapplying the state affects their turn count, and more.
 * * Allowing states to be categorized and affected by categories, too.
 * * Displaying turn counts on states drawn in the window or on sprites.
 * * Manipulation of state, buff, and debuff turns through skill and item
 *   effect notetags.
 * * Create custom damage over time state calculations through notetags.
 * * Allow database objects to apply passive states to its user.
 * * Passive states can have conditions before they become active as well.
 * * Updated Skill Menu Scene layout to fit more modern appearances.
 * * Added bonus if Items & Equips Core is installed to utilize the Shop Status
 *   Window to display skill data inside the Skill Menu.
 * * Control over various aspects of the Skill Menu Scene.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
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
 * Action End Removal for States
 * 
 * - If your Plugin Parameter settings for "Action End Update" are enabled,
 * then "Action End" has been updated so that it actually applies per action
 * used instead of just being at the start of a battler's action set.
 * 
 * - However, there are side effects to this: if a state has the "Cannot Move"
 * restriction along with the "Action End" removal timing, then unsurprisingly,
 * the state will never wear off because it's now based on actual actions
 * ending. To offset this and remove confusion, "Action End" auto-removal
 * timings for states with "Cannot Move" restrictions will be turned into
 * "Turn End" auto-removal timings while the "Action End Update" is enabled.
 * 
 * - This automatic change won't make it behave like an "Action End" removal
 * timing would, but it's better than completely softlocking a battler.
 * 
 * EXAMPLE:
 * 
 * - The new state: "Fiery Blade" will allow the affected battler to deal fire
 * elemental damage. With Action End, this means for 5 actions, those attacks
 * will deal fire damage.
 * 
 * - This means that if no action is taken, due to a status effect like "Sleep"
 * or "Stun", then the duration count will not decrease.
 * 
 * - On the flip side, if the battler performs multiple actions a turn, then
 * the duration count drops faster because more actions have been spent.
 * 
 * - However, if this "Fiery Blade" state was using Turn End instead, it will
 * have its duration reduced by 1 each turn, regardless of "Sleep" or "Stun"
 * states, and regardless of how many actions are performed each turn.
 * 
 * ---
 *
 * Buff & Debuff Level Management
 *
 * - In RPG Maker MZ, buffs and debuffs when applied to one another will shift
 * the buff modifier level up or down. This plugin will add an extra change to
 * the mechanic by making it so that once the buff modifier level reaches a
 * neutral point, the buff or debuff is removed altogether and resets the buff
 * and debuff turn counter for better accuracy.
 *
 * ---
 *
 * Skill Costs
 *
 * - In RPG Maker MZ, skill costs used to be hard-coded. Now, all Skill Cost
 * Types are now moved to the Plugin Parameters, including MP and TP. This
 * means that from payment to checking for them, it's all done through the
 * options available.
 *
 * - By default in RPG Maker MZ, displayed skill costs would only display only
 * one type: TP if available, then MP. If a skill costs both TP and MP, then
 * only TP was displayed. This plugin changes that aspect by displaying all the
 * cost types available in order of the Plugin Parameter Skill Cost Types.
 *
 * - By default in RPG Maker MZ, displayed skill costs were only color-coded.
 * This plugin changes that aspect by displaying the Skill Cost Type's name
 * alongside the cost. This is to help color-blind players distinguish what
 * costs a skill has.
 *
 * ---
 *
 * Sprite Gauges
 *
 * - Sprite Gauges in RPG Maker MZ by default are hard-coded and only work for
 * HP, MP, TP, and Time (used for ATB). This plugin makes it possible for them
 * to be customized through the use of Plugin Parameters under the Skill Cost
 * Types and their related-JavaScript entries.
 *
 * ---
 * 
 * State Displays
 * 
 * - To put values onto states and display them separately from the state turns
 * you can use the following script calls.
 * 
 *   battler.getStateDisplay(stateId)
 *   - This returns whatever value is stored for the specified battler under
 *     that specific state value.
 *   - If there is no value to be returned it will return an empty string.
 * 
 *   battler.setStateDisplay(stateId, value)
 *   - This sets the display for the battler's specific state to whatever you
 *     declared as the value.
 *   - The value is best used as a number or a string.
 * 
 *   battler.clearStateDisplay(stateId)
 *   - This clears the display for the battler's specific state.
 *   - In short, this sets the stored display value to an empty string.
 * 
 * ---
 *
 * Window Functions Moved
 *
 * - Some functions found in RPG Maker MZ's default code for Window_StatusBase
 * and Window_SkillList are now moved to Window_Base to make the functions
 * available throughout all windows for usage.
 *
 * ---
 *
 * ============================================================================
 * Slip Damage Popup Clarification
 * ============================================================================
 * 
 * Slip Damage popups only show one popup for HP, MP, and TP each and it is the
 * grand total of all the states and effects combined regardless of the number
 * of states and effects on a battler. This is how it is in vanilla RPG Maker
 * MZ and this is how we intend for it to be with the VisuStella MZ library.
 * 
 * This is NOT a bug!
 * 
 * The reason we are not changing this is because it does not properly relay
 * information to the player accurately. When multiple popups appear, players
 * only have roughly a second and a half to calculate it all for any form of
 * information takeaway. We feel it is better suited for the player's overall
 * convenience to show a cummulative change and steer the experience towards a
 * more positive one.
 *
 * ============================================================================
 * Passive State Clarification
 * ============================================================================
 * 
 * This section will explain various misconceptions regarding passive states.
 * No, passive states do not work the same way as states code-wise. Yes, they
 * use the same effects as states mechanically, but there are differences.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
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
 * === General Skill Notetags ===
 *
 * The following are general notetags that are skill-related.
 *
 * ---
 *
 * <Skill Type: x>
 * <Skill Types: x,x,x>
 *
 * <Skill Type: name>
 * <Skill Types: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Marks the skill to have multiple Skill Types, meaning they would appear
 *   under different skill types without needing to create duplicate skills.
 * - Replace 'x' with a number value representing the Skill Type's ID.
 * - If using 'name' notetag variant, replace 'name' with the Skill Type(s)
 *   name desired to be added.
 *
 * ---
 * 
 * <List Name: name>
 * 
 * - Used for: Skill Notetags
 * - Makes the name of the skill appear different when show in the skill list.
 * - Using \V[x] as a part of the name will display that variable.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Skill Notetags
 * - Used for Scene_Skill.
 * - Changes sorting priority by ID for skills to 'x'. 
 *   - Default priority level is '50'.
 * - Skills with higher priority values will be sorted higher up on the list
 *   while lower values will be lower on the list.
 * 
 * ---
 *
 * === Skill Cost Notetags ===
 *
 * The following are notetags that can be used to adjust skill costs. Some of
 * these notetags are added through the Plugin Parameter: Skill Cost Types and
 * can be altered there. This also means that some of these notetags can have
 * their functionality altered and/or removed.
 *
 * ---
 *
 * <type Cost: x>
 * <type Cost: x%>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to designate costs of custom or already existing
 *   types that cannot be made by the Database Editor.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the exact type cost value.
 *   This lets you bypass the Database Editor's limit of 9,999 MP and 100 TP.
 * - The 'x%' version is replaced with a percentile value to determine a cost
 *   equal to a % of the type's maximum quantity limit.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: 500>
 *   <MP Cost: 25%>
 *   <Gold Cost: 3000>
 *   <Potion Cost: 5>
 *
 * ---
 *
 * <type Cost Max: x>
 * <type Cost Min: x>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to ensure conditional and % costs don't become too
 *   large or too small.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the maximum or minimum values
 *   that the cost can be.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost Max: 1500>
 *   <MP Cost Min: 5>
 *   <Gold Cost Max: 10000>
 *   <Potion Cost Min: 3>
 *
 * ---
 *
 * <type Cost: +x>
 * <type Cost: -x>
 *
 * <type Cost: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will raise/lower the cost of any skill that uses the
 *   'type' cost by a specified amount.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a rate value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: +20>
 *   <MP Cost: -10>
 *   <Gold Cost: 50%>
 *   <Potion Cost: 200%>
 *
 * ---
 *
 * <Custom Cost Text>
 *  text
 * </Custom Cost Text>
 *
 * - Used for: Skill Notetags
 * - Allows you to insert custom text into the skill's cost area towards the
 *   end of the costs.
 * - Replace 'text' with the text you wish to display.
 * - Text codes may be used.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine any dynamic Skill Cost Types used for particular skills.
 *
 * ---
 *
 * <JS type Cost>
 *  code
 *  code
 *  cost = code;
 * </JS type Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'code' to determine the type 'cost' of the skill.
 * - Insert the final type cost into the 'cost' variable.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - Functionality for the notetag can be altered in the Plugin Parameters.
 *
 * ---
 *
 * === Gauge Replacement Notetags ===
 *
 * Certain classes can have their gauges swapped out for other Skill Cost
 * Types. This is especially helpful for the classes that don't utilize those
 * Skill Cost Types. You can mix and match them however you want.
 *
 * ---
 *
 * <Replace HP Gauge: type>
 * <Replace MP Gauge: type>
 * <Replace TP Gauge: type>
 *
 * - Used for: Class Notetags
 * - Replaces the HP (1st), MP (2nd), or TP (3rd) gauge with a different Skill
 *   Cost Type.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 *   - Does not work with 'Item Cost', 'Weapon Cost', or 'Armor Cost'.
 * - Replace 'type' with 'none' to not display any gauges there.
 * - The <Replace TP Gauge: type> will require 'Display TP in Window' setting
 *   to be on in the Database > System 1 tab.
 * - Functionality for the notetags can be altered by changes made to the
 *   Skill & States Core Plugin Parameters.
 *
 * ---
 * 
 * === Item Cost-Related Notetags ===
 * 
 * ---
 * 
 * <Item Cost: x name>
 * <Weapon Cost: x name>
 * <Armor Cost: x name>
 * 
 * - Used for: Skill Notetags
 * - The skill will consume items, weapons, and/or armors in order to be used.
 *   - Even non-consumable items will be consumed.
 * - Replace 'x' with a number representing the respective item cost.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * - Insert multiples of this notetag to consume multiple items, weapons,
 *   and/or armors.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 * 
 * Examples:
 * 
 *   <Item Cost: 5 Magic Water>
 *   <Item Cost: 2 Antidote>
 *   <Weapon Cost: 1 Short Sword>
 *   <Armor Cost: 3 Cloth Armor>
 * 
 * ---
 *
 * <Item Cost Max: x name>
 * <Item Cost Min: x name>
 *
 * <Weapon Cost Max: x name>
 * <Weapon Cost Min: x name>
 *
 * <Armor Cost Max: x name>
 * <Armor Cost Min: x name>
 * 
 * - Used for: Skill Notetags
 * - Sets up a maximum/minimum cost for the item, weapon, armor type costs.
 * - Replace 'x' with a number representing the maximum or minimum cost.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * 
 * Examples:
 * 
 *   <Item Cost Max: 10 Magic Water>
 *   <Item Cost Min: 2 Antidote>
 *   <Weapon Cost Max: 3 Short Sword>
 *   <Armor Cost Min: 1 Cloth Armor>
 * 
 * ---
 *
 * <Item Cost: +x name>
 * <Item Cost: -x name>
 *
 * <Weapon Cost: +x name>
 * <Weapon Cost: -x name>
 *
 * <Armor Cost: +x name>
 * <Armor Cost: -x name>
 * 
 * <Item Cost: x% name>
 * <Weapon Cost: x% name>
 * <Armor Cost: x% name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will raise/lower the item, weapon, and/or armor costs of
 *   any skill that costs those items, weapons, and/or armors by x%.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a rate value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * - Insert multiples of this notetag to consume multiple items, weapons,
 *   and/or armors.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 * 
 * Examples:
 * 
 *   <Item Cost: +1 Magic Water>
 *   <Item Cost: -2 Antidote>
 *   <Weapon Cost: 50% Short Sword>
 *   <Armor Cost: 200% Cloth Armor>
 * 
 * ---
 * 
 * <Replace Item name1 Cost: name2>
 * <Replace Weapon name1 Cost: name2>
 * <Replace Armor name1 Cost: name2>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will not consume 'name1' items, weapons, or armors.
 *   Instead, the cost will be redirected to 'name2' items, weapons, or armors.
 *   - Even non-consumable items will be consumed.
 * - Replace 'name1' with text representing the respective item, weapon, or
 *   armor that is the original cost type.
 * - Replace 'name2' with text representing the respective item, weapon, or
 *   armor that will be consumed instead.
 * 
 * Examples:
 * 
 *   <Replace Item Magic Water Cost: Potion>
 *   <Replace Item Antidote Cost: Dispel Herb>
 *   <Replace Weapon Short Sword Cost: Falchion>
 *   <Replace Armor Cloth Armor Cost: Leather Armor>
 * 
 * ---
 *
 * === Skill Accessibility Notetags ===
 *
 * Sometimes, you don't want all skills to be visible whether it be to hide
 * menu-only skills during battle, until certain switches are turned ON/OFF, or
 * until certain skills have been learned.
 *
 * ---
 *
 * <Hide in Battle>
 * <Hide outside Battle>
 *
 * - Used for: Skill Notetags
 * - Makes the specific skill visible or hidden depending on whether or not the
 *   player is currently in battle.
 *
 * ---
 *
 * <Show Switch: x>
 *
 * <Show All Switches: x,x,x>
 * <Show Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Switch: x>
 *
 * <Hide All Switches: x,x,x>
 * <Hide Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if learned Skill: x>
 *
 * <Show if learned All Skills: x,x,x>
 * <Show if learned Any Skills: x,x,x>
 *
 * <Show if learned Skill: name>
 *
 * <Show if learned All Skills: name, name, name>
 * <Show if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if learned Skill: x>
 *
 * <Hide if learned All Skills: x,x,x>
 * <Hide if learned Any Skills: x,x,x>
 *
 * <Hide if learned Skill: name>
 *
 * <Hide if learned All Skills: name, name, name>
 * <Hide if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if has Skill: x>
 *
 * <Show if have All Skills: x,x,x>
 * <Show if have Any Skills: x,x,x>
 *
 * <Show if has Skill: name>
 *
 * <Show if have All Skills: name, name, name>
 * <Show if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if has Skill: x>
 *
 * <Hide if have All Skills: x,x,x>
 * <Hide if have Any Skills: x,x,x>
 *
 * <Hide if has Skill: name>
 *
 * <Hide if have All Skills: name, name, name>
 * <Hide if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if a skill can be accessible visibly or through usage.
 *
 * ---
 *
 * <JS Skill Visible>
 *  code
 *  code
 *  visible = code;
 * </JS Skill Visible>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on JavaScript code.
 * - Replace 'code' to determine the type visibility of the skill.
 * - The 'visible' variable returns a boolean (true/false) to determine if the
 *   skill will be visible or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other visibility conditions must be met for this code to count.
 *
 * ---
 *
 * <JS Skill Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Skill Enable>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on JavaScript code.
 * - Replace 'code' to determine the type enabled status of the skill.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   skill will be enabled or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other skill conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === General State-Related Notetags ===
 *
 * The following notetags are centered around states, such as how their turn
 * counts are displayed, items and skills that affect state turns, if the state
 * can avoid removal by death state, etc.
 *
 * ---
 *
 * <No Death Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon death.
 * - This allows this state to be added to an already dead battler, too.
 *
 * ---
 *
 * <No Recover All Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon using the Recover All command.
 *
 * ---
 *
 * <Group Defeat>
 *
 * - Used for: State Notetags
 * - If an entire party is affected by states with the <Group Defeat> notetag,
 *   they are considered defeated.
 * - Usage for this includes party-wide petrification, frozen, etc.
 *
 * ---
 *
 * <Reapply Rules: Ignore>
 * <Reapply Rules: Reset>
 * <Reapply Rules: Greater>
 * <Reapply Rules: Add>
 *
 * - Used for: State Notetags
 * - Choose what kind of rules this state follows if the state is being applied
 *   to a target that already has the state. This affects turns specifically.
 * - 'Ignore' will bypass any turn changes.
 * - 'Reset' will recalculate the state's turns.
 * - 'Greater' will choose to either keep the current turn count if it's higher
 *   than the reset amount or reset it if the current turn count is lower.
 * - 'Add' will add the state's turn count to the applied amount.
 * - If this notetag isn't used, it will use the rules set in the States >
 *   Plugin Parameters.
 *
 * ---
 *
 * <Positive State>
 * <Negative State>
 *
 * - Used for: State Notetags
 * - Marks the state as a positive state or negative state, also altering the
 *   state's turn count color to match the Plugin Parameter settings.
 * - This also puts the state into either the 'Positive' category or
 *   'Negative' category.
 *
 * ---
 *
 * <Category: name>
 * <Category: name, name, name>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace 'name' with a category name to mark this state as.
 * - Insert multiples of this to mark the state with  multiple categories.
 *
 * ---
 *
 * <Categories>
 *  name
 *  name
 * </Categories>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace each 'name' with a category name to mark this state as.
 *
 * ---
 * 
 * <Bypass State Damage Removal: id>
 * <Bypass State Damage Removal: id, id, id>
 * 
 * <Bypass State Damage Removal: name>
 * <Bypass State Damage Removal: name, name, name>
 * 
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used to attack an enemy with the listed state that
 *   would normally have on damage removal (ie Sleep).
 * - For 'id' variant, replace each 'id' with a number representing the state's
 *   ID to bypass the damage removal for.
 * - For 'name' variant, replace each 'name' with the state's name to bypass
 *   the damage removal for.
 * - This can be used for attacks like "Dream Eater" that would prevent waking
 *   up a sleeping opponent.
 * 
 * ---
 * 
 * <Bypass State Damage Removal as Attacker: id>
 * <Bypass State Damage Removal as Attacker: id, id, id>
 * 
 * <Bypass State Damage Removal as Attacker: name>
 * <Bypass State Damage Removal as Attacker: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - When an attacker with an associated trait object that has this notetag
 *   would attack an enemy with the listed state, bypass on damage removal.
 * - For 'id' variant, replace each 'id' with a number representing the state's
 *   ID to bypass the damage removal for.
 * - For 'name' variant, replace each 'name' with the state's name to bypass
 *   the damage removal for.
 * - This can be used for effects like "Sleep Striker" that would prevent the
 *   attacker from waking up a sleeping opponent.
 * 
 * ---
 * 
 * <Bypass State Damage Removal as Target: id>
 * <Bypass State Damage Removal as Target: id, id, id>
 * 
 * <Bypass State Damage Removal as Target: name>
 * <Bypass State Damage Removal as Target: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - When a target with an associated trait object that has this notetag is
 *   attacked as the target with the listed state, bypass on damage removal.
 * - For 'id' variant, replace each 'id' with a number representing the state's
 *   ID to bypass the damage removal for.
 * - For 'name' variant, replace each 'name' with the state's name to bypass
 *   the damage removal for.
 * - This can be used for effects like "Deep Sleep" that would prevent the
 *   attacked target from waking up.
 * 
 * ---
 * 
 * <Resist State Category: name>
 * <Resist State Categories: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 * 
 * <Resist State Categories>
 *  name
 *  name
 *  name
 * </Resist State Categories>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 *
 * <State x Category Remove: y>
 * 
 * <State x Category Remove: All>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to remove 'y' states from specific category 'x'.
 * - Replace 'x' with a category name to remove from.
 * - Replace 'y' with the number of times to remove from that category.
 * - Use the 'All' variant to remove all of the states of that category.
 * - Insert multiples of this to remove different types of categories.
 *
 * ---
 * 
 * <Remove Other x States>
 * 
 * - Used for: State Notetags
 * - When the state with this notetag is added, remove other 'x' category
 *   states from the battler (except for the state being added).
 * - Replace 'x' with a category name to remove from.
 * - Insert multiples of this to remove different types of categories.
 * - Useful for thing state types like stances and forms that there is usually
 *   only one active at a time.
 * 
 * ---
 *
 * <Hide State Turns>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - This will by pass any Plugin Parameter settings.
 *
 * ---
 *
 * <Turn Color: x>
 * <Turn Color: #rrggbb>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - Determines the color of the state's turn count.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 * 
 * <Max Turns: x>
 * 
 * - Used for: State Notetags
 * - Determines the upper limit on the maximum number of turns for this state.
 * - Replace 'x' with a number representing the maximum number of turns used
 *   for this state.
 * - If no notetag is used, refer to the default setting found in the Plugin
 *   Parameters under "State Settings".
 * 
 * ---
 *
 * <State id Turns: +x>
 * <State id Turns: -x>
 *
 * <Set State id Turns: x>
 *
 * <State name Turns: +x>
 * <State name Turns: -x>
 *
 * <Set State name Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by state 'id' or state 'name', change the state
 *   turn duration for target.
 * - For 'id' variant, replace 'id' with the ID of the state to modify.
 * - For 'name' variant, replace 'name' with the name of the state to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple states at once.
 *
 * ---
 *
 * <param Buff Turns: +x>
 * <param Buff Turns: -x>
 *
 * <Set param Buff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' buff, change that buff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter buff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * <param Debuff Turns: +x>
 * <param Debuff Turns: -x>
 *
 * <Set param Debuff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' debuff, change that debuff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter debuff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * === JavaScript Notetags: On Add/Erase/Expire ===
 *
 * Using JavaScript code, you can use create custom effects that occur when a
 * state has bee added, erased, or expired.
 * 
 * ---
 *
 * <JS On Add State>
 *  code
 *  code
 * </JS On Add State>
 *
 * - Used for: State Notetags
 * - When a state is added, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Erase State>
 *  code
 *  code
 * </JS On Erase State>
 *
 * - Used for: State Notetags
 * - When a state is erased, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Expire State>
 *  code
 *  code
 * </JS On Expire State>
 *
 * - Used for: State Notetags
 * - When a state has expired, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * === JavaScript Notetags: Slip Damage/Healing ===
 *
 * Slip Damage, in RPG Maker vocabulary, refers to damage over time. The
 * following notetags allow you to perform custom slip damage/healing.
 *
 * ---
 *
 * <JS type Slip Damage>
 *  code
 *  code
 *  damage = code;
 * </JS type Slip Damage>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip damage is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip damage.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the damage.
 * - The 'state' variable refers to the current state being affected.
 * - The 'damage' variable is the finalized slip damage to be dealt.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 *
 * <JS type Slip Heal>
 *  code
 *  code
 *  heal = code;
 * </JS type Slip Heal>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip healing is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip healing.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the healing.
 * - The 'state' variable refers to the current state being affected.
 * - The 'heal' variable is the finalized slip healing to be recovered.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 * 
 * <JS Slip Refresh>
 * 
 * - Used for: State Notetags
 * - Refreshes the calculations made for the JS Slip Damage/Heal amounts at the
 *   start of each regeneration phase to allow for dynamic damage ranges.
 * 
 * ---
 *
 * === Passive State Notetags ===
 *
 * Passive States are states that are always applied to actors and enemies
 * provided that their conditions have been met. These can be granted through
 * database objects or through the Passive States Plugin Parameters.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * <Passive State: x>
 * <Passive States: x,x,x>
 *
 * <Passive State: name>
 * <Passive States: name, name, name>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy Notetags
 * - Adds passive state(s) x to trait object, applying it to related actor or
 *   enemy unit(s).
 * - Replace 'x' with a number to determine which state to add as a passive.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive.
 * - Note: If you plan on applying a passive state through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 *
 * ---
 *
 * <Passive Stackable>
 *
 * - Used for: State Notetags
 * - Makes it possible for this passive state to be added multiple times.
 * - Otherwise, only one instance of the passive state can be available.
 *
 * ---
 *
 * <Passive Condition Class: id>
 * <Passive Condition Classes: id, id, id>
 *
 * <Passive Condition Class: name>
 * <Passive Condition Classes: name, name, name>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on the actor's
 *   current class. As long as the actor's current class matches one of the
 *   data entries, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Multiclass: id>
 * <Passive Condition Multiclass: id, id, id>
 *
 * <Passive Condition Multiclass: name>
 * <Passive Condition Multiclass: name, name, name>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the passive condition of the passive state based on the actor's
 *   multiclasses. As long as the actor has any of the matching classes
 *   assigned as a multiclass, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Switch ON: x>
 *
 * <Passive Condition All Switches ON: x,x,x>
 * <Passive Condition Any Switch ON: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are ON. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are ON. Otherwise, it would not be met.
 *
 * ---
 *
 * <Passive Condition Switch OFF: x>
 *
 * <Passive Condition All Switches OFF: x,x,x>
 * <Passive Condition Any Switch OFF: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are OFF. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are OFF. Otherwise, it would not be met.
 *
 * ---
 *
 * === JavaScript Notetags: Passive State ===
 *
 * The following is a notetag made for users with JavaScript knowledge to
 * determine if a passive state's condition can be met.
 *
 * ---
 *
 * <JS Passive Condition>
 *  code
 *  code
 *  condition = code;
 * </JS Passive Condition>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the state based on JavaScript code.
 * - Replace 'code' to determine if a passive state's condition has been met.
 * - The 'condition' variable returns a boolean (true/false) to determine if
 *   the passive state's condition is met or not.
 * - The 'user' variable refers to the user affected by the passive state.
 * - The 'state' variable refers to the passive state being checked.
 * - All other passive conditions must be met for this code to count.
 * 
 * **NOTE** Not everything can be used as a custom JS Passive Condition due to
 * limitations of the code. There are failsafe checks to prevent infinite loops
 * and some passive conditions will not register for this reason and the
 * conditional checks will behave as if the passive states have NOT been
 * applied for this reason. Such examples include the following:
 * 
 * - A passive state that requires another passive state
 * - A passive state that requires a trait effect from another state
 * - A passive state that requires a parameter value altered by another state
 * - A passive state that requires equipment to be worn but its equipment type
 *   access is provided by another state.
 * - Anything else that is similar in style.
 *
 * ---
 * 
 * === Skill Toggle Notetags ===
 * 
 * Skill Toggles are skills that can be toggled ON or OFF. If ON, then any
 * passive states on that skill will become enabled (assuming all other passive
 * conditions are met) and if toggled OFF, then that passive state will not
 * appear (even if all other conditions are met).
 * 
 * Otherwise, you can use JavaScript calls like the following for script call
 * checks, and the like:
 * 
 *   $gameActors.actor(2).isSkillToggled($dataSkills[3])
 * 
 * ---
 * 
 * <Toggle>
 * 
 * - Used for: Skill Notetags
 * - Turns the skill into a toggle skill.
 * - Best used with a passive state.
 * - Toggle skills cannot be used with certain skill effects:
 *   - Active Chain Skills, Evolution Matrix Skills, Input Combo Skills
 *   - Field Skills
 *   - Item Amplify Skills, Item Concoct Skills, Item Throw Skills
 *   - Toggle skills cannot be Skill Containers
 * 
 * ---
 * 
 * <Initial Toggle: On>
 * <Initial Toggle: Off>
 * 
 * - Used for: Skill Notetags
 * - Pair this notetag together with skill toggles.
 * - Sets the initial toggle for this skill to be ON/OFF.
 *   - aka when an actor learns the skill for the first time and this
 *     determines what toggle it will have
 * - If this notetag is not used, refer to the setting found in the
 *   Plugin Parameters
 * 
 * ---
 * 
 * <Toggle Exclusion Group: key>
 * 
 * - Used for: Skill Notetags
 * - Pair this notetag together with skill toggles.
 * - When this skill is toggled, all other toggle skills with a matching 'key'
 *   will be turned off.
 *   - For example, the skills Fire Force, Ice Force, and Thunder Force have
 *     the <Toggle Exclusion Group: Force> notetag.
 *   - When Fire Force is toggled ON, then Ice Force and Thunder Force will
 *     automatically turn OFF.
 * - Replace 'key' with a toggle exclusion group name for this skill to use.
 * 
 * ---
 * 
 * <Toggle On Animation: x>
 * 
 * - Used for: Skill Notetags
 * - Pair this notetag together with skill toggles.
 * - When a skill is turned off, this is the animation that plays.
 * - If this notetag is not used, refer to the skill's animation.
 * - Replace 'x' with a number representing the ID of the animation to play
 *   when the skill is toggled on.
 * 
 * ---
 * 
 * <Toggle Off Animation: x>
 * 
 * - Used for: Skill Notetags
 * - Pair this notetag together with skill toggles.
 * - When a skill is turned off, this is the animation that plays.
 * - If this notetag is not used, refer to the Plugin Parameters' animation.
 * - Replace 'x' with a number representing the ID of the animation to play
 *   when the skill is toggled off.
 * 
 * ---
 * 
 * === Aura & Miasma Notetags ===
 * 
 * Auras are a type passive that affects an allied party. Miasmas are a type of
 * passive that affects an opposing party. Auras and Miasmas only need to come
 * from a single source to give an entire party or troop a passive provided
 * that the battler emitting the aura/miasma is alive and in battle.
 * 
 * ---
 * 
 * <Aura State: x>
 * <Aura States: x, x, x>
 * 
 * <Aura State: name>
 * <Aura States: name, name, name>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy Notetags
 * - Emits an aura that affects the battler's allies and gives each affected
 *   member passive state(s) 'x'.
 * - Replace 'x' with a number to determine which state to add as a passive
 *   generated by this aura.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive generated by this aura.
 * - Note: If you plan on applying an aura effect through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 * 
 * ---
 * 
 * <Miasma State: x>
 * <Miasma States: x, x, x>
 * 
 * <Miasma State: name>
 * <Miasma States: name, name, name>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy Notetags
 * - Emits an miasma that affects the battler's opponents and gives each
 *   affected member passive state(s) 'x'.
 * - Miasmas do NOT apply outside of battle.
 * - Replace 'x' with a number to determine which state to add as a passive
 *   generated by this miasma.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive generated by this miasma.
 * - Note: If you plan on applying a miasma effect through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 * 
 * ---
 * 
 * <Not User Aura>
 * <Aura Not For User>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Prevents the emitting user from being affected by the related aura.
 * 
 * ---
 * 
 * <Allow Dead Aura>
 * <Allow Dead Miasma>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Allows aura/miasma to continue emitting even after the emitting user is
 *   in a dead state.
 * - When used with Actor, Class, Skill, Weapon, Armor, Enemy objects, it will
 *   only affect the auras/miasmas emitted from that object.
 * - When used with States, the effect will take place as long as it is used
 *   as an aura or miasma regardless of where it is emitting from.
 * - Takes priority over <Dead Aura Only> and <Dead Miasma Only> notetags.
 * 
 * ---
 * 
 * <Dead Aura Only>
 * <Dead Miasma Only>
 * 
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Allows aura/miasma to only emit if the emitting user is in a dead state.
 * - When used with Actor, Class, Skill, Weapon, Armor, Enemy objects, it will
 *   only affect the auras/miasmas emitted from that object.
 * - When used with States, the effect will take place as long as it is used
 *   as an aura or miasma regardless of where it is emitting from.
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
 * === Skill Cost Plugin Commands ===
 * 
 * ---
 * 
 * Skill Cost: Emulate Actor Pay
 * - Target actor(s) emulates paying for skill cost.
 * - 
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) will pay skill cost.
 * 
 *   Skill ID:
 *   - What is the ID of the skill to emulate paying the skill cost for?
 * 
 * ---
 * 
 * Skill Cost: Emulate Enemy Pay
 * - Target enemy(s) emulates paying for skill cost.
 * - 
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) will pay skill cost.
 * 
 *   Skill ID:
 *   - What is the ID of the skill to emulate paying the skill cost for?
 * 
 * ---
 * 
 * === State Turns Plugin Commands ===
 * 
 * ---
 * 
 * State Turns: Actor State Turns Change By
 * - Changes actor(s) state turns by an amount.
 * - Only works on states that can have turns.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns By:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Actor State Turns Change To
 * - Changes actor(s) state turns to a specific value.
 * - Only works on states that can have turns.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns To:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Enemy State Turns Change By
 * - Changes enemy(s) state turns by an amount.
 * - Only works on states that can have turns.
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns By:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Enemy State Turns Change To
 * - Changes enemy(s) state turns to a specific value.
 * - Only works on states that can have turns.
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns To:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 *
 * ============================================================================
 * Plugin Parameters: General Skill Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust various aspects of the game regarding skills
 * from the custom Skill Menu Layout to global custom effects made in code.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Skill Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * Skill Type Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Skill Type Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Skill Type Window.
 * 
 *   Window Width:
 *   - What is the desired pixel width of this window?
 *   - Default: 240
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Skill Menu?:
 *   - Show the Shop Status Window in the Skill Menu?
 *   - This is enabled if the Updated Layout is on.
 * 
 *   Adjust List Window?:
 *   - Automatically adjust the Skill List Window in the Skill Menu if using
 *     the Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Shop Status Window in the
 *     Skill Menu.
 *
 * ---
 *
 * Skill Types
 * 
 *   Hidden Skill Types:
 *   - Insert the ID's of the Skill Types you want hidden from view ingame.
 * 
 *   Hidden During Battle:
 *   - Insert the ID's of the Skill Types you want hidden during battle only.
 * 
 *   Icon: Normal Type:
 *   - Icon used for normal skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Icon: Magic Type:
 *   - Icon used for magic skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Sort: Alphabetical:
 *   - Insert the ID's of Skill Types you want sorted alphabetically.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Skill Conditions:
 *   - JavaScript code for a global-wide skill condition check.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Cost Types
 * ============================================================================
 *
 * Skill Cost Types are the resources that are used for your skills. These can
 * range from the default MP and TP resources to the newly added HP, Gold, and
 * Potion resources.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - A name for this Skill Cost Type.
 * 
 *   Icon:
 *   - Icon used for this Skill Cost Type.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display this cost.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display this cost.
 *
 * ---
 *
 * Cost Processing
 * 
 *   JS: Cost Calculation:
 *   - Code on how to calculate this resource cost for the skill.
 * 
 *   JS: Can Pay Cost?:
 *   - Code on calculating whether or not the user is able to pay the cost.
 * 
 *   JS: Paying Cost:
 *   - Code for if met, this is the actual process of paying of the cost.
 *
 * ---
 *
 * Window Display
 * 
 *   JS: Show Cost?:
 *   - Code for determining if the cost is shown or not.
 * 
 *   JS: Cost Text:
 *   - Code to determine the text (with Text Code support) used for the
 *     displayed cost.
 *
 * ---
 *
 * Gauge Display
 * 
 *   JS: Maximum Value:
 *   - Code to determine the maximum value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Current Value:
 *   - Code to determine the current value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Draw Gauge:
 *   - Code to determine how to draw the Skill Cost resource for this 
 *     gauge type.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Toggle Settings
 * ============================================================================
 *
 * Skill toggles are a new type of skill. They do not perform any actions but
 * instead, will switch on/off any passive effects the skill has.
 * 
 * Enemies are unable to switch Toggle Skills and the passive effects on a
 * Toggle Skill for an enemy will always be considered ON.
 *
 * ---
 *
 * Default
 * 
 *   Default Toggle:
 *   - What is the default toggle setting for toggle skills?
 * 
 *   Toggle Off Animation:
 *   - Play this animation when a skill is toggled off.
 *   - Requires VisuMZ_0_CoreEngine.
 *   - Toggle On animation by default is whatever the skill animation is set to
 * 
 * ---
 * 
 * Appearance
 * 
 *   Toggle On Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *   - Applies for skill name, not the skill cost
 * 
 * ---
 * 
 * Vocabulary
 * 
 *   Toggle Type:
 *   - Skill toggle displayed in the status window.
 * 
 *   Toggle On:
 *   - Text displayed for a skill that's toggled on
 * 
 *   Toggle Off:
 *   - Text displayed for a skill that's toggled off
 * 
 *     Off Text Location:
 *     - Where is the [OFF] text located in the skill cost?
 *       - front
 *       - back
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Settings
 * ============================================================================
 *
 * Settings in regards to how skill cost gauges function and appear.
 *
 * ---
 *
 * Labels
 * 
 *   Font Type:
 *   - Which font type should be used for labels?
 * 
 *   Match Label Color:
 *   - Match the label color to the Gauge Color being used?
 * 
 *     Match: Gauge # ?:
 *     - Which Gauge Color should be matched?
 * 
 *     Preset: Gauge Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Solid Outline:
 *   - Make the label outline a solid black color?
 * 
 *   Outline Width:
 *   - What width do you wish to use for your outline?
 *   - Use 0 to not use an outline.
 *
 * ---
 *
 * Values
 * 
 *   Font Type:
 *   - Which font type should be used for values?
 * 
 *   Solid Outline:
 *   - Make the value outline a solid black color?
 * 
 *   Outline Width:
 *   - What width do you wish to use for your outline?
 *   - Use 0 to not use an outline.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General State Settings
 * ============================================================================
 *
 * These are general settings regarding RPG Maker MZ's state-related aspects
 * from how turns are reapplied to custom code that's ran whenever states are
 * added, erased, or expired.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying states.
 *   - Ignore: State doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let states go up to.
 *   - This can be changed with the <Max Turns: x> notetag.
 * 
 *   Action End Update:
 *   - Refer to "Major Changes" in Help File for explanation.
 * 
 *   Turn End on Map:
 *   - Update any state and buff turns on the map after this many steps.
 *   - Use 0 to disable.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display state turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Turn Color: Neutral:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Positive:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Negative:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Data Display
 * 
 *   Show Data?:
 *   - Display state data on top of window icons and sprites?
 * 
 *   Data Font Size:
 *   - Font size used for displaying state data.
 * 
 *   Offset X:
 *   - Offset the X position of the state data display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the state data display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is added.
 * 
 *   JS: On Erase State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is erased.
 * 
 *   JS: On Expire State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     has expired.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Buff/Debuff Settings
 * ============================================================================
 *
 * Buffs and debuffs don't count as states by RPG Maker MZ's mechanics, but
 * they do function close enough for them to be added to this plugin for
 * adjusting. Change these settings to make buffs and debuffs work to your
 * game's needs.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying buffs/debuffs.
 *   - Ignore: Buff/Debuff doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let buffs and debuffs go up to.
 *
 * ---
 *
 * Stacking
 * 
 *   Max Stacks: Buff:
 *   - Maximum number of stacks for buffs.
 * 
 *   Max Stacks: Debuff:
 *   - Maximum number of stacks for debuffs.
 * 
 *   JS: Buff/Debuff Rate:
 *   - Code to determine how much buffs and debuffs affect parameters.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display buff and debuff turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Color: Buffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Debuffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Rate Display
 * 
 *   Show Rate?:
 *   - Display buff and debuff rate on top of window icons and sprites?
 * 
 *   Rate Font Size:
 *   - Font size used for displaying rate.
 * 
 *   Offset X:
 *   - Offset the X position of the rate display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the rate display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Add Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Erase Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Erase Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Expire Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Expire Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust passive states that can affect all actors and
 * enemies as well as have global conditions.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * List
 * 
 *   Global Passives:
 *   - A list of passive states to affect actors and enemies.
 * 
 *   Actor-Only Passives:
 *   - A list of passive states to affect actors only.
 * 
 *   Enemy Passives:
 *   - A list of passive states to affect enemies only.
 *
 * ---
 * 
 * Cache
 * 
 *   Switch Refresh?:
 *   - Refresh all battle members when switches are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Switch changes during battle in order to
 *     prevent lag spikes.
 * 
 *   Variable Refresh?:
 *   - Refresh all battle members when variables are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Variable changes during battle in order to
 *     prevent lag spikes.
 * 
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Condition Check:
 *   - JavaScript code for a global-wide passive condition check.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.51: April 17, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Skill Toggle Settings
 * **** Skill toggles are a new type of skill. They do not perform any actions
 *      but instead, will switch on/off any passive effects the skill has.
 * **** Enemies are unable to switch Toggle Skills and the passive effects on a
 *      Toggle Skill for an enemy will always be considered ON.
 * **** See the help file for more information.
 * ** New Notetags added by Olivia:
 * *** Skill Toggle Notetags:
 * **** <Toggle>
 * **** <Initial Toggle: On/Off>
 * **** <Toggle Exclusion Group: key>
 * **** <Toggle On Animation: x>
 * **** <Toggle Off Animation: x>
 * ***** See the help file for more information.
 * 
 * Version 1.50: March 20, 2025
 * * Documentation Update!
 * ** Changed the description of Plugin Parameter 'Action End Update' to
 *    'Refer to "Major Changes" in Help File for explanation.'
 * ** Added examples of "Action End Update" under "Major Changes"
 * *** The new state: "Fiery Blade" will allow the affected battler to deal
 *     fire elemental damage. With Action End, this means for 5 actions, those
 *     attacks will deal fire damage.
 * *** This means that if no action is taken, due to a status effect like
 *     "Sleep" or "Stun", then the duration count will not decrease.
 * *** On the flip side, if the battler performs multiple actions a turn, then
 *     the duration count drops faster because more actions have been spent.
 * *** However, if this "Fiery Blade" state was using Turn End instead, it will
 *     have its duration reduced by 1 each turn, regardless of "Sleep" or
 *     "Stun" states, and regardless of how many actions are performed each
 *     turn.
 * 
 * Version 1.49: February 20, 2025
 * * Bug Fixes!
 * ** Fixed a bug where causing a dead battler to refresh afterwards would
 *    yield multiple death states on that battler. Fix made by Arisu.
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Better compatibility with different icon sizes.
 * 
 * Version 1.48: December 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Auras & Miasmas added by Olivia:
 * *** Auras are a type passive that affects an allied party. Miasmas are a
 *     type of passive that affects an opposing party. Auras and Miasmas only
 *     need to come from a single source to give an entire party or troop a
 *     passive provided that the battler emitting the aura/miasma is alive and
 *     in battle.
 * ** New Notetags added by Olivia:
 * *** <Aura State: x>
 * **** Emits an aura that affects the battler's allies and gives each affected
 *      member passive state(s) 'x'.
 * *** <Miasma State: x>
 * **** Emits an aura that affects the battler's opponents and gives each
 *      affected member passive state(s) 'x'.
 * *** <Not User Aura>
 * **** Prevents the emitting user from being affected by the related aura.
 * *** <Allow Dead Aura>
 * *** <Allow Dead Miasma>
 * **** Allows aura/miasma to continue emitting even after the emitting user is
 *      in a dead state.
 * *** <Dead Aura Only>
 * *** <Dead Miasma Only>
 * **** Allows aura/miasma to only emit if the emitting user is in a dead state
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.47: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Bypass State Damage Removal: id/name>
 * **** When this skill/item is used to attack an enemy with the listed state
 *      that would normally have on damage removal (ie Sleep).
 * **** This can be used for attacks like "Dream Eater" that would prevent
 *      waking up a sleeping opponent.
 * *** <Bypass State Damage Removal as Attacker: id/name>
 * **** When an attacker with an associated trait object that has this notetag
 *      would attack an enemy with the listed state, bypass on damage removal.
 * **** This can be used for effects like "Sleep Striker" that would prevent
 *      the attacker from waking up a sleeping opponent.
 * *** <Bypass State Damage Removal as Target: id/name>
 * **** When a target with an associated trait object that has this notetag is
 *      attacked as the target with the listed state, bypass on damage removal.
 * **** This can be used for effects like "Deep Sleep" that would prevent the
 *      attacked target from waking up.
 * 
 * Version 1.46: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Skill Settings > Skill Types > Sort: Alphabetical
 * **** Insert the ID's of Skill Types you want sorted alphabetically.
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Skill.
 * **** Changes sorting priority by ID for skill to 'x'. 
 * **** Default priority level is '50'.
 * **** Skills with higher priority values will be sorted higher up on the list
 *      while lower values will be lower on the list.
 * 
 * Version 1.45: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem with passive state conditional notetags not working
 *    properly. Fix made by Irina.
 * 
 * Version 1.44: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where passive states would not appear. Fix made by Olivia.
 * ** Fixed a bug where a crash would occur if certain plugins cleared the
 *    passive state cache midway through trying to register it. Fix by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * ** States with lots and lots of text data within their notes will no longer
 *    cause FPS drops.
 * 
 * Version 1.43: January 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Skill Cost: Emulate Actor Pay
 * *** Skill Cost: Emulate Enemy Pay
 * **** Target actor(s)/enemy(s) emulates paying for skill cost.
 * *** State Turns: Actor State Turns Change By
 * *** State Turns: Actor State Turns Change To
 * *** State Turns: Enemy State Turns Change By
 * *** State Turns: Enemy State Turns Change To
 * **** Changes actor(s)/enemy(s) state turns to a specific value/by an amount.
 * **** Only works on states that can have turns.
 * 
 * Version 1.42: November 16, 2023
 * * Bug Fixes!
 * ** 'origin' variable was not working properly for <JS On Expire State>
 *    JavaScript notetag. Should now be working properly. Fix made by Irina.
 * 
 * Version 1.41: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented <Max Turns: x> for states from working due to
 *    one of the recent updates. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Apparently, we never put <Max Turns: x> in the help notetag section.
 *    Woops... It's there now.
 * 
 * Version 1.40: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug involving the "Item Cost" skill cost type found in the Plugin
 *    Parameters when involving consumable items.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_SkillsStatesCore.js in the Plugin Manager
 *      list and install the newest version.
 * **** Or create a new project, install VisuMZ_1_SkillsStatesCore.js there,
 *      then copy over the "Item Cost" plugin parameters found in the "Skill
 *      Cost Types" plugin parameter settings to your current project.
 * 
 * Version 1.39: July 13, 2023
 * * Feature Update!
 * ** Updated the "Item Cost" skill cost type found in the Plugin Parameters to
 *    no longer consume items that are key items or nonconsumable.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_SkillsStatesCore.js in the Plugin Manager
 *      list and install the newest version.
 * **** Or create a new project, install VisuMZ_1_SkillsStatesCore.js there,
 *      then copy over the "Item Cost" plugin parameters found in the "Skill
 *      Cost Types" plugin parameter settings to your current project.
 * 
 * Version 1.38: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added segment to <Replace x Gauge: type> in documentation:
 * *** Does not work with 'Item Cost', 'Weapon Cost', or 'Armor Cost'.
 * * New Features!
 * ** New "Skill Cost Type" and notetags added by Arisu and sponsored by FAQ.
 * *** <Item Cost: x name>
 * *** <Weapon Cost: x name>
 * *** <Armor Cost: x name>
 * **** The skill will consume items, weapons, and/or armors in order to be
 *      used. Even non-consumable items will be consumed.
 * *** <Item Cost Max/Min: x name>
 * *** <Weapon Cost Max/Min: x name>
 * *** <Armor Cost Max/Min: x name>
 * **** Sets up a maximum/minimum cost for the item, weapon, armor type costs.
 * *** <Item Cost: x% name>
 * *** <Weapon Cost: x% name>
 * *** <Armor Cost: x% name>
 * **** Alters cost rate of skills that would consume item, weapon, or armor.
 * *** <Item Cost: +/-x name>
 * *** <Weapon Cost: +/-x name>
 * *** <Armor Cost: +/-x name>
 * **** Alters flat costs of skills that would consume item, weapon, or armor.
 * *** <Replace Item name1 Cost: name2>
 * *** <Replace Weapon name1 Cost: name2>
 * *** <Replace Armor name1 Cost: name2>
 * **** Replaces item, weapon, or armor to be consumed for another type.
 * *** Projects with the Skills and States Core already installed will not have
 *     this update, but you can copy over the settings from a new project with
 *     the following steps:
 * **** Create a new project. Install Skills and States Core. Open up the new
 *      project's 'Skill Cost Types'.
 * **** Right click the 'Item Cost' option(s) and click copy.
 * **** Go to the target project's Skills and States Core's 'Skill Cost Types'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Only 'Item Cost' is needed as it encompasses all three types for item,
 *      weapon, and armor costs.
 * 
 * Version 1.38: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.37: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused equipment to unequip if the needed equipment
 *    traits came from passive states upon learning new skills. Fix by Irina.
 * 
 * Version 1.36: December 15, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** When enemies are defeated with their entire party having a state with the
 *    <Group Defeat> notetag, then the party will gain EXP, Gold, and Drops
 *    before when they wouldn't. Update made by Irina.
 * * New Features!
 * ** New Plugin Parameter added by Irina!
 * *** Plugin Parameters > Skill Settings > Skill Type Window > Window Width
 * **** What is the desired pixel width of this window? Default: 240
 * 
 * Verison 1.35: October 13, 2022
 * * Feature Update!
 * ** Default values for Passive States > Cache > Switch Refresh? and Variable
 *    Refresh? are now set to "false" in order to prevent sudden lag spikes for
 *    those who are unfamiliar with how this setting works.
 * ** Update made by Irina.
 * 
 * Version 1.34: September 29, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Gauge Settings
 * **** These settings allow you to make minor tweaks to how the gauges look
 *      ranging from the color used for the labels to the outline types used
 *      for the values.
 * 
 * Version 1.33: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a crash that occurs when performing a custom action sequence
 *    without a skill attached to it. Fix made by Olivia.
 * 
 * Version 1.32: June 16, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Passive State Settings > Cache > Switch Refresh?
 * *** Plugin Parameters > Passive State Settings > Cache > Variable Refresh?
 * **** Refresh all battle members when switches/variables are changed in
 *      battle?
 * **** This is primarily used for passive state conditions involve parameters
 *      that do not update due to cached data until a refresh occurs.
 * **** If this is on, do not spam Switch/Variable changes during battle in
 *      order to prevent lag spikes.
 * 
 * Version 1.31: April 28, 2022
 * * Bug Fixes!
 * ** Custom Slip Damage JS is now totalled correctly into regular slip damage
 *    totals for damage popups. Fix made by Olivia.
 * 
 * Version 1.30: April 14, 2022
 * * Feature Update!
 * ** Changed the state data removal timing to be after JS notetag effects
 *    take place in order for data such as origin data to remain intact. Update
 *    made by Irina.
 * 
 * Version 1.29: March 31, 2022
 * * Bug Fixes!
 * ** Fixed an error with <State x Category Remove: y> not countaing correctly
 *    unless the state count matched the exact amount. The notetag effect
 *    should work properly now. Fix made by Olivia.
 * 
 * Version 1.28: March 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** <State x Category Remove: All> updated to allow multiple cases in a
 *    single notebox. Updated by Arisu.
 * * New Features!
 * ** New Notetag added by Arisu and sponsored by Archeia!
 * *** <Remove Other x States>
 * **** When the state with this notetag is added, remove other 'x' category
 *      states from the battler (except for the state being added).
 * **** Useful for thing state types like stances and forms that there is
 *      usually only one active at a time.
 * 
 * Version 1.27: January 27, 2022
 * * Bug Fixes!
 * ** Custom JS Slip Damage/Healing values should now be recalculated on
 *    demand. Fix made by Olivia.
 * 
 * Version 1.26: January 20, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Conditional Passive Bypass check is now stronger to prevent even more
 *    infinite loops from happening. Update made by Olivia.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > State Settings > General > Turn End on Map
 * **** Update any state and buff turns on the map after this many steps.
 * **** Use 0 to disable.
 * 
 * Version 1.25: November 11, 2021
 * * Bug Fixes!
 * ** Hidden skill notetags should no longer crash upon not detecting actors
 *    for learned skills. Fix made by Olivia.
 * 
 * Version 1.24: November 4, 2021
 * * Documentation Update!
 * ** Added section: "Slip Damage Popup Clarification"
 * *** Slip Damage popups only show one popup for HP, MP, and TP each and it is
 *     the grand total of all the states and effects combined regardless of the
 *     number of states and effects on a battler. This is how it is in vanilla
 *     RPG Maker MZ and this is how we intend for it to be with the VisuStella
 *     MZ library.
 * *** This is NOT a bug!
 * *** The reason we are not changing this is because it does not properly
 *     relay information to the player accurately. When multiple popups appear,
 *     players only have roughly a second and a half to calculate it all for
 *     any form of information takeaway. We feel it is better suited for the
 *     player's overall convenience to show a cummulative change and steer the
 *     experience towards a more positive one.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.23: September 17, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * *** Skill Cost Types Plugin Parameters need to be updated for those who want
 *     the updated gauges. This can be done easily with the following steps:
 * **** Step 1: Create a new project.
 * **** Step 2: Install Skills and States Core version 1.23 into it.
 * **** Step 3: Copy the Plugin Parameter Settings for "Skill Cost Types".
 * **** Step 4: Return back to your original project.
 * **** Step 5: Paste Plugin Parameter Settings on top of "Skill Cost Types".
 * 
 * Version 1.22: August 6, 2021
 * * Documentation Update!
 * ** "Action End Removal for States" under Major Updates is changed to:
 * *** If your Plugin Parameter settings for "Action End Update" are enabled,
 *     then "Action End" has been updated so that it actually applies per
 *     action used instead of just being at the start of a battler's action
 *     set.
 * *** However, there are side effects to this: if a state has the "Cannot
 *     Move" restriction along with the "Action End" removal timing, then
 *     unsurprisingly, the state will never wear off because it's now based on
 *     actual actions ending. To offset this and remove confusion, "Action End"
 *     auto-removal timings for states with "Cannot Move" restrictions will be
 *     turned into "Turn End" auto-removal timings while the "Action End
 *     Update" is enabled.
 * *** This automatic change won't make it behave like an "Action End" removal
 *     timing would, but it's better than completely softlocking a battler.
 * * Feature Update!
 * ** Those using "Cannot Move" states with "Action End" auto-removal will now
 *    have be automatically converted into "Turn End" auto-removal if the
 *    plugin parameter "Action End Update" is set to true. Update by Irina.
 * 
 * Version 1.21: July 30, 2021
 * * Documentation Update!
 * ** Expanded "Action End Removal for States" section in Major Changes.
 * *** These changes have been in effect since Version 1.07 but have not been
 *     explained in excess detail in the documentation since.
 * **** Action End has been updated so that it actually applies per action used
 *      instead of just being at the start of a battler's action set. However,
 *      there are side effects to this: if a state has the "Cannot Move"
 *      restriction along with the "Action End" removal timing, then
 *      unsurprisingly, the state will never wear off because it's now based on
 *      actual actions ending. There are two solutions to this:
 * **** Don't make "Cannot Move" restriction states with "Action End". This is
 *      not a workaround. This is how the state removal is intended to work
 *      under the new change.
 * **** Go to the Skills & States Core Plugin Parameters, go to State
 *      Setttings, look for "Action End Update", and set it to false. You now
 *      reverted the removal timing system back to how it originally was in RPG
 *      Maker MZ's default battle system where it only updates based on an
 *      action set rather than per actual action ending.
 * 
 * Version 1.20: June 18, 2021
 * * Feature Update!
 * ** Updated automatic caching for conditional passive states to update more
 *    efficiently. Update made by Arisu.
 * 
 * Version 1.19: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.18: May 21, 2021
 * * Documentation Update
 * ** Added "Passive State Clarification" section.
 * *** As there is a lot of confusion regarding how passive states work and how
 *     people still miss the explanations found in the "Passive State Notetags"
 *     section AND the "Plugin Parameters: Passive State Settings", we are
 *     adding a third section to explain how they work.
 * *** All three sections will contain the full detailed explanation of how
 *     passive states work to clear common misconceptions about them.
 * 
 * Version 1.17: May 7, 2021
 * * Bug Fixes
 * ** State category removal is now usable outside of battle. Fix by Irina.
 * 
 * Version 1.16: April 30, 2021
 * * Bug Fixes!
 * ** When states with step removal have the <No Recover All Clear> or
 *    <No Death Clear> notetags, their step counter is no longer reset either.
 *    Fix made by Irina.
 * * New Features!
 * ** New notetag added by Arisu!
 * *** <List Name: name>
 * **** Makes the name of the skill appear different when show in the skill
 *      list. Using \V[x] as a part of the name will display that variable.
 * 
 * Version 1.15: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: March 12, 2021
 * * Bug Fixes!
 * ** Max HP Buff/Debuff should now display its turn counter. Fix by Yanfly.
 * * Documentation Update!
 * ** For the <JS Passive Condition>, we've added documentation on the
 *    limitations of passive conditions since they have been reported as bug
 *    reports, when in reality, they are failsafes to prevent infinite loops.
 *    Such limitations include the following:
 * *** A passive state that requires another passive state
 * *** A passive state that requires a trait effect from another state
 * *** A passive state that requires a parameter value altered by another state
 * *** A passive state that requires equipment to be worn but its equipment
 *     type access is provided by another state.
 * *** Anything else that is similar in style.
 * 
 * Version 1.13: February 26, 2021
 * * Documentation Update!
 * ** For <JS type Slip Damage> and <JS type Slip Heal> notetags, added the
 *    following notes:
 * *** When these states are applied via action effects, the slip calculations
 *     are one time calculations made upon applying and the damage is cached to
 *     be used for future on regeneration calculations.
 * *** For that reason, do not include game mechanics here such as adding
 *     states, buffs, debuffs, etc. as this notetag is meant for calculations
 *     only. Use the VisuStella Battle Core's <JS Pre-Regenerate> and
 *     <JS Post-Regenerate> notetags for game mechanics instead.
 * *** Passive states and states with the <JS Slip Refresh> notetag are exempt
 *     from the one time calculation and recalculated each regeneration phase.
 * * Feature Update!
 * ** Changed slip refresh requirements to entail <JS Slip Refresh> notetag for
 *    extra clarity. Update made by Olivia.
 * 
 * Version 1.12: February 19, 2021
 * * Feature Update
 * ** Changed the way passive state infinite stacking as a blanket coverage.
 *    Update made by Olivia.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent passive states from infinitely stacking. Fix
 *    made by Olivia.
 * 
 * Version 1.10: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Skill Settings > Background Type
 * 
 * Version 1.09: January 1, 2021
 * * Bug Fixes!
 * ** Custom JS TP slip damage and healing should now work properly.
 *    Fix made by Yanfly.
 * 
 * Version 1.08: December 25, 2020
 * * Bug Fixes!
 * ** <JS On Add State> should no longer trigger multiple times for the death
 *    state. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for updated feature(s)!
 * * Feature Update!
 * ** <No Death Clear> can now allow the affected state to be added to an
 *    already dead battler. Update made by Yanfly.
 * 
 * Version 1.07: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Passive Condition Multiclass: id>
 * *** <Passive Condition Multiclass: id, id, id>
 * *** <Passive Condition Multiclass: name>
 * *** <Passive Condition Multiclass: name, name, name>
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > States > General > Action End Update
 * **** States with "Action End" auto-removal will also update turns at the end
 *      of each action instead of all actions.
 * ***** Turn this off if you wish for state turn updates to function like they
 *       do by default for "Action End".
 * 
 * Version 1.06: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: November 15, 2020
 * * Bug Fixes!
 * ** The alignment of the Skill Type Window is now fixed and will reflect upon
 *    the default settings. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** <State x Category Remove: All> notetag added by Yanfly.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: September 27, 2020
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.03: September 13, 2020
 * * Bug Fixes!
 * ** <JS type Slip Damage> custom notetags now work for passive states. Fix
 *    made by Olivia.
 * ** Setting the Command Window style to "Text Only" will no longer add in
 *    the icon text codes. Bug fixed by Yanfly.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** The JS Notetags for Add, Erase, and Expire states are now fixed. Fix made
 *    by Yanfly.
 * * Documentation Update!
 * ** <Show if learned Skill: x> and <Hide if learned Skill: x> notetags have
 *    the following added to their descriptions:
 * *** This does not apply to skills added by traits on actors, classes, any
 *     equipment, or states. These are not considered learned skills. They are
 *     considered temporary skills.
 * * New Features!
 * ** Notetags added by Yanfly:
 * *** <Show if has Skill: x>
 * *** <Show if have All Skills: x,x,x>
 * *** <Show if have Any Skills: x,x,x>
 * *** <Show if has Skill: name>
 * *** <Show if have All Skills: name, name, name>
 * *** <Show if have Any Skills: name, name, name>
 * *** <Hide if has Skill: x>
 * *** <Hide if have All Skills: x,x,x>
 * *** <Hide if have Any Skills: x,x,x>
 * *** <Hide if has Skill: name>
 * *** <Hide if have All Skills: name, name, name>
 * *** <Hide if have Any Skills: name, name, name>
 * *** These have been added to remove the confusion regarding learned skills
 *     as skills added through trait effects are not considered learned skills
 *     by RPG Maker MZ.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states from Elements & Status Menu Core are now functional.
 *    Fix made by Olivia.
 * * Compatibility Update
 * ** Extended functions to allow for better compatibility.
 * * Updated documentation
 * ** Explains that passive states are not directly applied and are therefore
 *    not affected by code such as "a.isStateAffected(10)".
 * ** Instead, use "a.states().includes($dataStates[10])"
 * ** "Use #rrggbb for a hex color." lines now replaced with
 *    "For a hex color, use #rrggbb with VisuMZ_1_MessageCore"
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
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillActorPaySkillCost
 * @text Skill Cost: Emulate Actor Pay
 * @desc Target actor(s) emulates paying for skill cost.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) will pay skill cost.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to emulate paying the skill cost for?
 * @default 99
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillEnemyPaySkillCost
 * @text Skill Cost: Emulate Enemy Pay
 * @desc Target enemy(s) emulates paying for skill cost.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) will pay skill cost.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to emulate paying the skill cost for?
 * @default 99
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_StateTurns
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsActorChangeBy
 * @text State Turns: Actor State Turns Change By
 * @desc Changes actor(s) state turns by an amount.
 * Only works on states that can have turns.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns By
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default +1
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if actor(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsActorChangeTo
 * @text State Turns: Actor State Turns Change To
 * @desc Changes actor(s) state turns to a specific value.
 * Only works on states that can have turns.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns To
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default 10
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if actor(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsEnemyChangeBy
 * @text State Turns: Enemy State Turns Change By
 * @desc Changes enemy(s) state turns by an amount.
 * Only works on states that can have turns.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns By
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default +1
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if enemy(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsEnemyChangeTo
 * @text State Turns: Enemy State Turns Change To
 * @desc Changes enemy(s) state turns to a specific value.
 * Only works on states that can have turns.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns To
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default 10
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if enemy(s) does not have it applied?
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
 * @param SkillsStatesCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Skills:struct
 * @text Skill Settings
 * @type struct<Skills>
 * @desc Adjust general skill settings here.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","SkillTypeWindow":"","CmdStyle:str":"auto","CmdTextAlign:str":"left","ListWindow":"","ListWindowCols:num":"1","ShopStatusWindow":"","ShowShopStatus:eval":"true","SkillSceneAdjustSkillList:eval":"true","SkillMenuStatusRect:func":"\"const ww = this.shopStatusWidth();\\nconst wh = this._itemWindow.height;\\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\\nconst wy = this._itemWindow.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SkillTypes":"","HiddenSkillTypes:arraynum":"[]","BattleHiddenSkillTypes:arraynum":"[]","IconStypeNorm:num":"78","IconStypeMagic:num":"79","CustomJS":"","SkillConditionJS:func":"\"// Declare Variables\\nconst skill = arguments[0];\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet enabled = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn enabled;\""}
 *
 * @param Costs:arraystruct
 * @text Skill Cost Types
 * @parent Skills:struct
 * @type struct<Cost>[]
 * @desc A list of all the skill cost types added by this plugin
 * and the code that controls them in-game.
 * @default ["{\"Name:str\":\"HP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"20\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mhp / 100);\\\\n}\\\\nif (note.match(/<JS HP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS HP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<HP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<HP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<HP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<HP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nif (cost <= 0) {\\\\n    return true;\\\\n} else {\\\\n    return user._hp > cost;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._hp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.hp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mhp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.hp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.hpGaugeColor1();\\\\nconst color2 = ColorManager.hpGaugeColor2();\\\\nconst label = TextManager.hpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.hpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"MP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"23\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = Math.floor(skill.mpCost * user.mcr);\\\\nif (note.match(/<MP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mmp / 100);\\\\n}\\\\nif (note.match(/<JS MP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS MP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<MP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<MP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<MP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<MP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._mp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._mp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.mp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mmp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.mpGaugeColor1();\\\\nconst color2 = ColorManager.mpGaugeColor2();\\\\nconst label = TextManager.mpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.mpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"TP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"29\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = skill.tpCost;\\\\nif (note.match(/<TP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.maxTp() / 100);\\\\n}\\\\nif (note.match(/<JS TP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS TP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<TP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<TP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<TP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<TP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._tp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._tp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.tp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.maxTp();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.tp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.tpGaugeColor1();\\\\nconst color2 = ColorManager.tpGaugeColor2();\\\\nconst label = TextManager.tpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.tpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Gold\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"17\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * $gameParty.gold() / 100);\\\\n}\\\\nif (note.match(/<JS GOLD COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS GOLD COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<GOLD COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<GOLD COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<GOLD COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<GOLD COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn $gameParty.gold() >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n$gameParty.loseGold(cost);\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.currencyUnit;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxGold();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.gold();\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.currencyUnit;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Potion\",\"Settings\":\"\",\"Icon:num\":\"176\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<POTION COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<JS POTION COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS POTION COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<POTION COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<POTION COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<POTION COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<POTION COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return Boolean\\\\nif (user.isActor() && cost > 0) {\\\\n    return $gameParty.numItems(item) >= cost;\\\\n} else {\\\\n    return true;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Process Payment\\\\nif (user.isActor()) {\\\\n    $gameParty.loseItem(item, cost);\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '×%1'.format(cost);\\\\n\\\\n// Text: Add Icon\\\\ntext += '\\\\\\\\\\\\\\\\I[%1]'.format(item.iconIndex);\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxItems(item);\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.numItems(item);\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.textColor(30);\\\\nconst color2 = ColorManager.textColor(31);\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst item = $dataItems[7];\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Icon\\\\nconst iconIndex = item.iconIndex;\\\\nconst iconBitmap = ImageManager.loadSystem(\\\\\\\"IconSet\\\\\\\");\\\\nconst pw = ImageManager.iconWidth;\\\\nconst ph = ImageManager.iconHeight;\\\\nconst sx = (iconIndex % 16) * pw;\\\\nconst sy = Math.floor(iconIndex / 16) * ph;\\\\nbitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0, 24, 24);\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Item Cost\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = {\\\\n    items: {},\\\\n    weapons: {},\\\\n    armors: {},\\\\n};\\\\n\\\\n// Gather Cost Notetags\\\\n{ // Item Costs\\\\n    const notetag = /<ITEM COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.items[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Weapon Costs\\\\n    const notetag = /<WEAPON COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.weapons[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Armor Costs\\\\n    const notetag = /<ARMOR COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.armors[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Declare Trait Objects\\\\nconst traitObjects = user.traitObjects();\\\\n\\\\n// Apply Cost Rate Modifiers\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Cost Rate Modifiers\\\\n        const notetag = /<ITEM COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id]) {\\\\n                    cost.items[entry.id] = Math.ceil(cost.items[entry.id] * rate);\\\\n                    if (cost.items[entry.id] <= 0) cost.items[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Cost Rate Modifiers\\\\n        const notetag = /<WEAPON COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id]) {\\\\n                    cost.weapons[entry.id] = Math.ceil(cost.weapons[entry.id] * rate);\\\\n                    if (cost.weapons[entry.id] <= 0) cost.weapons[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Cost Rate Modifiers\\\\n        const notetag = /<ARMOR COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id]) {\\\\n                    cost.armors[entry.id] = Math.ceil(cost.armors[entry.id] * rate);\\\\n                    if (cost.armors[entry.id] <= 0) cost.armors[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Apply Flat Cost Modifiers\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Flat Cost Modifiers\\\\n        const notetag = /<ITEM COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id]) {\\\\n                    cost.items[entry.id] += flat;\\\\n                    if (cost.items[entry.id] <= 0) cost.items[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Flat Cost Modifiers\\\\n        const notetag = /<WEAPON COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id]) {\\\\n                    cost.weapons[entry.id] += flat;\\\\n                    if (cost.weapons[entry.id] <= 0) cost.weapons[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Flat Cost Modifiers\\\\n        const notetag = /<ARMOR COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id]) {\\\\n                    cost.armors[entry.id] += flat;\\\\n                    if (cost.armors[entry.id] <= 0) cost.armors[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Set Cost Limits\\\\n{ // Item Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<ITEM COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id] !== undefined) {\\\\n                    cost.items[entry.id] = Math.min(max, cost.items[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<ITEM COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id] !== undefined) {\\\\n                    cost.items[entry.id] = Math.max(min, cost.items[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Weapon Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<WEAPON COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id] !== undefined) {\\\\n                    cost.weapons[entry.id] = Math.min(max, cost.weapons[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<WEAPON COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id] !== undefined) {\\\\n                    cost.weapons[entry.id] = Math.max(min, cost.weapons[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Armor Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<ARMOR COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id] !== undefined) {\\\\n                    cost.armors[entry.id] = Math.min(max, cost.armors[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<ARMOR COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id] !== undefined) {\\\\n                    cost.armors[entry.id] = Math.max(min, cost.armors[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Apply Replacement Costs\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Replacement Costs\\\\n        const notetag = /<REPLACE ITEM (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.items[entry1.id]) {\\\\n                    cost.items[entry2.id] = cost.items[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Replacement Costs\\\\n        const notetag = /<REPLACE WEAPON (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.weapons[entry1.id]) {\\\\n                    cost.weapons[entry2.id] = cost.weapons[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Replacement Costs\\\\n        const notetag = /<REPLACE ARMOR (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.armors[entry1.id]) {\\\\n                    cost.armors[entry2.id] = cost.armors[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Return cost data\\\\nreturn cost;\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Check Individual Costs\\\\n{ // Check Item Costs\\\\n    for (let id in cost.items) {\\\\n        const obj = $dataItems[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.items[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Weapon Costs\\\\n    for (let id in cost.weapons) {\\\\n        const obj = $dataWeapons[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.weapons[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Armor Costs\\\\n    for (let id in cost.armors) {\\\\n        const obj = $dataArmors[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.armors[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Return True\\\\nreturn true;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n{ // Check Item Costs\\\\n    for (let id in cost.items) {\\\\n        const obj = $dataItems[id];\\\\n        if (obj && obj.consumable) {\\\\n            if (obj.itypeId !== 2) {\\\\n                const costAmount = cost.items[id];\\\\n                $gameParty.loseItem(obj, costAmount);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Weapon Costs\\\\n    for (let id in cost.weapons) {\\\\n        const obj = $dataWeapons[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.weapons[id];\\\\n            $gameParty.loseItem(obj, costAmount);\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Armor Costs\\\\n    for (let id in cost.armors) {\\\\n        const obj = $dataArmors[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.armors[id];\\\\n            $gameParty.loseItem(obj, costAmount);\\\\n        }\\\\n    }\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Check Keys\\\\nconst keys = ['items', 'weapons', 'armors'];\\\\n\\\\n// Return False\\\\nreturn keys.some(key => Object.keys(cost[key]).length > 0);\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nconst keys = ['items', 'weapons', 'armors'];\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\nfor (const key of keys) {\\\\n    const database = [$dataItems, $dataWeapons, $dataArmors][keys.indexOf(key)];\\\\n    const costData = cost[key];\\\\n    const idList = Object.keys(costData).sort((a, b) => a - b);\\\\n    for (const id of idList) {\\\\n        const obj = database[id];\\\\n        const iconIndex = obj.iconIndex;\\\\n        const costAmount = costData[id];\\\\n        text += '\\\\\\\\\\\\\\\\I[%1]×%2 '.format(iconIndex, costAmount);\\\\n    }\\\\n}\\\\n\\\\n// Return text\\\\nreturn text.trim();\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn 0;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn 0;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Don't Draw Anything\\\\n// This does not work as a gauge.\\\"\"}"]
 *
 * @param Toggles:struct
 * @text Skill Toggle Settings
 * @parent Skills:struct
 * @type struct<Toggles>
 * @desc Settings in regards to how skill toggles function.
 * @default {"Default":"","DefaultToggle:eval":"true","ToggleOffAnimationID:num":"62","Appear":"","ToggleOnTextColor:str":"24","Vocab":"","ToggleType:str":"Toggle","ToggleOn:str":"\\FS[22]\\C[0][ON]","ToggleOff:str":"\\FS[22]\\C[8][OFF]","ToggleOffLocation:str":"back"}
 *
 * @param Gauge:struct
 * @text Gauge Settings
 * @parent Skills:struct
 * @type struct<Gauge>
 * @desc Settings in regards to how skill cost gauges function and appear.
 * @default {"Labels":"","LabelFontMainType:str":"main","MatchLabelColor:eval":"true","MatchLabelGaugeColor:num":"2","PresetLabelGaugeColor:num":"16","LabelOutlineSolid:eval":"true","LabelOutlineWidth:num":"3","Values":"","ValueFontMainType:str":"number","ValueOutlineSolid:eval":"true","ValueOutlineWidth:num":"3"}
 *
 * @param BreakSkills
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param States:struct
 * @text State Settings
 * @type struct<States>
 * @desc Adjust general state settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","ActionEndUpdate:eval":"true","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorNeutral:str":"0","ColorPositive:str":"24","ColorNegative:str":"27","Data":"","ShowData:eval":"true","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\"","onEraseStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Buffs:struct
 * @text Buff/Debuff Settings
 * @parent States:struct
 * @type struct<Buffs>
 * @desc Adjust general buff/debuff settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","Stacking":"","StackBuffMax:num":"2","StackDebuffMax:num":"2","MultiplierJS:func":"\"// Declare Variables\\nconst user = this;\\nconst paramId = arguments[0];\\nconst buffLevel = arguments[1];\\nlet rate = 1;\\n\\n// Perform Calculations\\nrate += buffLevel * 0.25;\\n\\n// Return Rate\\nreturn Math.max(0, rate);\"","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorBuff:str":"24","ColorDebuff:str":"27","Data":"","ShowData:eval":"false","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onAddDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param PassiveStates:struct
 * @text Passive States
 * @parent States:struct
 * @type struct<PassiveStates>
 * @desc Adjust passive state settings here.
 * @default {"List":"","Global:arraynum":"[]","Actor:arraynum":"[]","Enemy:arraynum":"[]","CustomJS":"","PassiveConditionJS:func":"\"// Declare Variables\\nconst state = arguments[0];\\nconst stateId = state.id;\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet condition = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn condition;\""}
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
 * General Skill Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Skills:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Skill Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent SkillTypeWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Skill Type Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent SkillTypeWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Skill Type Window.
 * @default left
 * 
 * @param CmdWidth:num
 * @text Window Width
 * @parent SkillTypeWindow
 * @type number
 * @min 1
 * @desc What is the desired pixel width of this window?
 * Default: 240
 * @default 240
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Skill Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Skill Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param SkillSceneAdjustSkillList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Skill List Window in the Skill Menu if using the Shop Status Window?
 * @default true
 *
 * @param SkillSceneStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param SkillMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Shop Status Window in the Skill Menu.
 * @default "const ww = this.shopStatusWidth();\nconst wh = this._itemWindow.height;\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\nconst wy = this._itemWindow.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SkillTypes
 * @text Skill Types
 *
 * @param HiddenSkillTypes:arraynum
 * @text Hidden Skill Types
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden from view ingame.
 * @default []
 *
 * @param BattleHiddenSkillTypes:arraynum
 * @text Hidden During Battle
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden during battle only.
 * @default []
 *
 * @param IconStypeNorm:num
 * @text Icon: Normal Type
 * @parent SkillTypes
 * @desc Icon used for normal skill types that aren't assigned any icons.
 * @default 78
 *
 * @param IconStypeMagic:num
 * @text Icon: Magic Type
 * @parent SkillTypes
 * @desc Icon used for magic skill types that aren't assigned any icons.
 * @default 79
 *
 * @param SortSkillTypesAbc:arraynum
 * @text Sort: Alphabetical
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of Skill Types you want sorted alphabetically.
 * @default []
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param SkillConditionJS:func
 * @text JS: Skill Conditions
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide skill condition check.
 * @default "// Declare Variables\nconst skill = arguments[0];\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet enabled = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn enabled;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param Name:str
 * @text Name
 * @desc A name for this Skill Cost Type.
 * @default Untitled
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for this Skill Cost Type.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display this cost.
 * @default 22
 *
 * @param Cost
 * @text Cost Processing
 *
 * @param CalcJS:func
 * @text JS: Cost Calculation
 * @parent Cost
 * @type note
 * @desc Code on how to calculate this resource cost for the skill.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nlet cost = 0;\n\n// Return cost value\nreturn Math.round(Math.max(0, cost));"
 *
 * @param CanPayJS:func
 * @text JS: Can Pay Cost?
 * @parent Cost
 * @type note
 * @desc Code on calculating whether or not the user is able to pay the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn true;"
 *
 * @param PayJS:func
 * @text JS: Paying Cost
 * @parent Cost
 * @type note
 * @desc Code for if met, this is the actual process of paying of the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Process Payment\n"
 *
 * @param Windows
 * @text Window Display
 *
 * @param ShowJS:func
 * @text JS: Show Cost?
 * @parent  Windows
 * @type note
 * @desc Code for determining if the cost is shown or not.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn cost > 0;"
 *
 * @param TextJS:func
 * @text JS: Cost Text
 * @parent  Windows
 * @type note
 * @desc Code to determine the text (with Text Code support) used for the displayed cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\nconst settings = arguments[2];\nconst fontSize = settings.FontSize;\nconst color = settings.FontColor;\nconst name = settings.Name;\nconst icon = settings.Icon;\nlet text = '';\n\n// Text: Change Font Size\ntext += '\\\\FS[%1]'.format(fontSize);\n\n// Text: Add Color\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\n    text += '\\\\HexColor<#%1>'.format(String(RegExp.$1));\n} else {\n    text += '\\\\C[%1]'.format(color);\n}\n\n// Text: Add Cost\ntext += '%1 %2'.format(cost, name);\n\n// Text: Add Icon\nif (icon  > 0) {\n    text += '\\\\I[%1]'.format(icon);\n}\n\n// Return text\nreturn text;"
 *
 * @param Gauges
 * @text Gauge Display
 *
 * @param GaugeMaxJS:func
 * @text JS: Maximum Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the maximum value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeCurrentJS:func
 * @text JS: Current Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the current value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeDrawJS:func
 * @text JS: Draw Gauge
 * @parent  Gauges
 * @type note
 * @desc Code to determine how to draw the Skill Cost resource for this gauge type.
 * @default "// Declare Variables\nconst sprite = this;\nconst settings = sprite._costSettings;\nconst bitmap = sprite.bitmap;\nconst user = sprite._battler;\nconst currentValue = sprite.currentDisplayedValue();\n\n// Draw Gauge\nconst color1 = ColorManager.textColor(30);\nconst color2 = ColorManager.textColor(31);\nconst gx = 0;\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\nconst gw = sprite.bitmapWidth() - gx;\nconst gh = sprite.gaugeHeight();\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\n\n// Draw Label\nconst label = settings.Name;\nconst lx = 4;\nconst ly = 0;\nconst lw = sprite.bitmapWidth();\nconst lh = sprite.bitmapHeight();\nsprite.setupLabelFont();\nbitmap.paintOpacity = 255;\nbitmap.drawText(label, lx, ly, lw, lh, \"left\");\n\n// Draw Value\nconst vw = sprite.bitmapWidth() - 2;\nconst vh = sprite.bitmapHeight();\nsprite.setupValueFont();\nbitmap.textColor = ColorManager.normalColor();\nbitmap.drawText(currentValue, 0, 0, vw, vh, \"right\");"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Toggle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Toggles:
 *
 * @param Default
 *
 * @param DefaultToggle:eval
 * @text Default Toggle
 * @parent Default
 * @type boolean
 * @on ON
 * @off OFF
 * @desc What is the default toggle setting for toggle skills?
 * @default true
 *
 * @param ToggleOffAnimationID:num
 * @text Toggle Off Animation
 * @parent Default
 * @type animation
 * @desc Play this animation when a skill is toggled off.
 * Requires VisuMZ_0_CoreEngine.
 * @default 62
 *
 * @param Appear
 * @text Appearance
 *
 * @param ToggleOnTextColor:str
 * @text Toggle On Text Color
 * @parent Appear
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param ToggleType:str
 * @text Toggle Type
 * @parent Vocab
 * @desc Skill toggle displayed in the status window.
 * @default Toggle
 *
 * @param ToggleOn:str
 * @text Toggle On
 * @parent Vocab
 * @desc Text displayed for a skill that's toggled on
 * @default \FS[22]\C[0][ON]
 *
 * @param ToggleOff:str
 * @text Toggle Off
 * @parent Vocab
 * @desc Text displayed for a skill that's toggled off
 * @default \FS[22]\C[8][OFF]
 *
 * @param ToggleOffLocation:str
 * @text Off Text Location
 * @parent ToggleOff:str
 * @type select
 * @option front
 * @option back
 * @desc Where is the [OFF] text located in the skill cost?
 * @default back
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param Labels
 *
 * @param LabelFontMainType:str
 * @text Font Type
 * @parent Labels
 * @type select
 * @option main
 * @option number
 * @desc Which font type should be used for labels?
 * @default main
 *
 * @param MatchLabelColor:eval
 * @text Match Label Color
 * @parent Labels
 * @type boolean
 * @on Match
 * @off Preset
 * @desc Match the label color to the Gauge Color being used?
 * @default true
 *
 * @param MatchLabelGaugeColor:num
 * @text Match: Gauge # ?
 * @parent MatchLabelColor:eval
 * @type number
 * @min 1
 * @max 2
 * @desc Which Gauge Color should be matched?
 * @default 2
 *
 * @param PresetLabelGaugeColor:num
 * @text Preset: Gauge Color
 * @parent MatchLabelColor:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param LabelOutlineSolid:eval
 * @text Solid Outline
 * @parent Labels
 * @type boolean
 * @on Solid
 * @off Semi-Transparent
 * @desc Make the label outline a solid black color?
 * @default true
 *
 * @param LabelOutlineWidth:num
 * @text Outline Width
 * @parent Labels
 * @type number
 * @min 0
 * @desc What width do you wish to use for your outline?
 * Use 0 to not use an outline.
 * @default 3
 *
 * @param Values
 *
 * @param ValueFontMainType:str
 * @text Font Type
 * @parent Values
 * @type select
 * @option main
 * @option number
 * @desc Which font type should be used for values?
 * @default number
 *
 * @param ValueOutlineSolid:eval
 * @text Solid Outline
 * @parent Values
 * @type boolean
 * @on Solid
 * @off Semi-Transparent
 * @desc Make the value outline a solid black color?
 * @default true
 *
 * @param ValueOutlineWidth:num
 * @text Outline Width
 * @parent Values
 * @type number
 * @min 0
 * @desc What width do you wish to use for your outline?
 * Use 0 to not use an outline.
 * @default 3
 *
 */
/* ----------------------------------------------------------------------------
 * General State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: State doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying states.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let states go up to.
 * This can be changed with the <Max Turns: x> notetag.
 * @default 9999
 *
 * @param ActionEndUpdate:eval
 * @text Action End Update
 * @parent General
 * @type boolean
 * @on Update Each Action
 * @off Don't Change
 * @desc Refer to "Major Changes" in Help File for explanation.
 * @default true
 *
 * @param TurnEndOnMap:num
 * @text Turn End on Map
 * @parent General
 * @type number
 * @desc Update any state and buff turns on the map after
 * this many steps. Use 0 to disable.
 * @default 20
 *
 * @param Turns
 * @text Turn Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param ColorNeutral:str
 * @text Turn Color: Neutral
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorPositive:str
 * @text Turn Color: Positive
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorNegative:str
 * @text Turn Color: Negative
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Data Display
 *
 * @param ShowData:eval
 * @text Show Data?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state data on top of window icons and sprites?
 * @default true
 *
 * @param DataFontSize:num
 * @text Data Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying state data.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the state data display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the state data display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddStateJS:func
 * @text JS: On Add State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is added.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseStateJS:func
 * @text JS: On Erase State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is erased.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireStateJS:func
 * @text JS: On Expire State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state has expired.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * General Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buffs:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: Buff/Debuff doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying buffs/debuffs.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let buffs and debuffs go up to.
 * @default 9999
 *
 * @param Stacking
 *
 * @param StackBuffMax:num
 * @text Max Stacks: Buff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for buffs.
 * @default 2
 *
 * @param StackDebuffMax:num
 * @text Max Stacks: Debuff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for debuffs.
 * @default 2
 *
 * @param MultiplierJS:func
 * @text JS: Buff/Debuff Rate
 * @parent Stacking
 * @type note
 * @desc Code to determine how much buffs and debuffs affect parameters.
 * @default "// Declare Variables\nconst user = this;\nconst paramId = arguments[0];\nconst buffLevel = arguments[1];\nlet rate = 1;\n\n// Perform Calculations\nrate += buffLevel * 0.25;\n\n// Return Rate\nreturn Math.max(0, rate);"
 *
 * @param Turns
 * @text Turns Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param ColorBuff:str
 * @text Turn Color: Buffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorDebuff:str
 * @text Turn Color: Debuffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Rate Display
 *
 * @param ShowData:eval
 * @text Show Rate?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff rate on top of window icons and sprites?
 * @default false
 *
 * @param DataFontSize:num
 * @text Rate Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying rate.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the rate display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the rate display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddBuffJS:func
 * @text JS: On Add Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onAddDebuffJS:func
 * @text JS: On Add Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseBuffJS:func
 * @text JS: On Erase Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseDebuffJS:func
 * @text JS: On Erase Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireBuffJS:func
 * @text JS: On Expire Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireDebuffJS:func
 * @text JS: On Expire Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveStates:
 *
 * @param List
 *
 * @param Global:arraynum
 * @text Global Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors and enemies.
 * @default []
 *
 * @param Actor:arraynum
 * @text Actor-Only Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors only.
 * @default []
 *
 * @param Enemy:arraynum
 * @text Enemy Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect enemies only.
 * @default []
 *
 * @param Cache
 *
 * @param RefreshCacheSwitch:eval
 * @text Switch Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when switches are changed in battle?
 * @default false
 *
 * @param RefreshCacheVar:eval
 * @text Variable Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when variables are changed in battle?
 * @default false
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param PassiveConditionJS:func
 * @text JS: Condition Check
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide passive condition check.
 * @default "// Declare Variables\nconst state = arguments[0];\nconst stateId = state.id;\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet condition = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn condition;"
 *
 */
//=============================================================================

const _0x2cc133=_0x5cfb;function _0x3414(){const _0x3a4be4=['maxTurns','_stored_buffColor','multiClass','MaxTurns','Parse_Notetags_Skill_Sorting','initMembersSkillsStatesCore','createPassiveStatesCache','_bypassRemoveStateDamage_user','action','VisuMZ_4_SkillContainers','isUserBypassRemoveStatesByDamage','SkillContainers','[ON]','LayoutStyle','skillMpCost','maxCols','buttonAssistSwitch','anySwitchOn','buffLength','resetFontSettings','Game_Battler_addBuff','_stypeId','Sprite_Gauge_redraw','contents','equipPassives','isValid','deadMembers','setDebuffTurns','_stateOrigin','fontSize','_itemWindow','concat','CmdTextAlign','inBattle','helpWindowRect','onExpireStateCustomJS','Window_Base_changeTextColor','Window_Base_drawText','process_VisuMZ_SkillsStatesCore_CheckForAuras','_classIDs','Game_Unit_deadMembers','sort','drawExtendedSkillsStatesCoreStatus','hasToggleSkillAntiCheck','textSizeEx','ActionEndUpdate','Window_SkillType_initialize','refresh','clearStates','isBuffPrevented','setStateRetainType','front','_stateDisplay','applyDebuffTurnManipulationEffects','_stateSteps','hasSkill','Game_Actor_forgetSkill','traitObjects','isToggleSkill','battleMembers','skill','applyStateTurnManipulationEffects','setStypeId','statusWindowRectSkillsStatesCore','statePassiveConditionJS','valueFontFace','ColorPositive','sortPriority','89304zxNwUX','_cache_getPassiveStatesFromObj','Scene_Skill_statusWindowRect','commandNameWindowDrawBackground','target','split','_cache','onAddDebuffGlobalJS','onAddDebuff','description','allSwitchOn','_skillWindow','isLearnedSkill','ConvertParams','regenerateAllSkillsStatesCore','addCommand','43803apzmeM','currentClass','getPassiveStatesFromObj','hasStateCategory','applyBuffTurnManipulationEffects','paramValueByName','skillTypes','recalculateSlipDamageJS','isBuffExpired','ARRAYNUM','drawActorBuffRates','frameCount','setActor','drawActorStateData','labelOutlineWidth','onEraseBuff','setupSkillsStatesCore','removeStatesByCategoryAll','actor','Armor-%1-%2','shopStatusWindowRectSkillsStatesCore','commandName','totalStateCategory','VisuMZ_3_ItemAmplifySkills','setPassiveStateSlipDamageJS','learnSkill','drawTextEx','iconIndex','_cache_getAuraPassiveStatesFromObj','makeResistedStateCategories','removeStatesByDamage','KnownList','innerWidth','slipTp','makeCommandList','maxSlipDamage','\x5cFS[22]\x5cC[0][ON]','isRightInputMode','currentDisplayedValue','meetsPassiveStateConditions','_stored_debuffColor','user','_checkingTraitsSetSkillsStatesCore','getStateIdWithName','checkSkillConditionsNotetags','MAXHP','gaugeLineHeight','addPassiveStatesByPluginParameters','11885337BmfeNf','ForcedMatrix','regenerateAll','getClassIdWithName','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20condition\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20condition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Game_Switches_onChange','bitmap','isPlaytest','drawItemStyleIcon','applyStateCategoryRemovalEffects','clearStateData','onItemOk','Game_Action_applyItemUserEffect','outlineColor','Game_Battler_onBattleEnd','SortByIDandPriorityUsingIDs','meetsPassiveStateConditionClasses','log','onEraseDebuff','onAddState','getStateRetainType','labelColor','VisuMZ_1_ItemsEquipsCore','commandStyleCheck','right','isSkillTypeMatchForUse','setStateData','_states','%1%','gaugeBackColor','adjustItemWidthByShopStatus','addPassiveStatesTraitSets','IconStypeMagic','usableSkills','changePaintOpacity','addStateTurns','Name','anchor','Game_Unit_isAllDead','ColorDebuff','PassiveConditionJS','Game_BattlerBase_meetsSkillConditions','valueOutlineWidth','StateTurnsActorChangeTo','onEraseStateJS','Scene_Skill_onItemOk_Toggle','CmdStyle','Actor-%1-%2','uiMenuStyle','_categoryWindow','onEraseDebuffJS','shift','includes','recoverAll','skillLearn','isBottomHelpMode','actorId','_currentTroopUniqueID','EnemyIndex','name','Skills','itemAt','commandNameWindowDrawText','bypassRemoveStatesByDamage','toggleType','fontBold','animationId','meetsPassiveStateConditionSwitches','VisuMZ_1_MainMenuCore','shopStatusWindowRect','indexOf','SkillActorPaySkillCost','currentValue','Class-%1-%2','commandStyle','GroupDigits','addAuraPassiveStateIDs','ItemConcoctSkills','_buffs','parameters','isBuffOrDebuffAffected','rgba(0,\x200,\x200,\x201)','active','constructor','getCurrentTroopUniqueID','Parse_Notetags_State_Category','createSkillCostText','onAddBuff','Scene_Skill_createItemWindow','height','MAT','applySkillsStatesCoreEffects','debuffColor','_shopStatusWindow','applyItemUserEffect','ParseStateNotetags','statusWidth','stateExpireJS','value','drawItemStyleIconText','ToggleOffAnimationID','<actor-%1>','_result','CheckBypassRemoveStatesByDamage','isStateCategoryAffected','min','MDF','isMaxDebuffAffected','isStateAffected','mainFontFace','Buffs','setStateOrigin','auto','stateId','Window_SkillList_updateHelp','actions','passiveStates','innerHeight','map','testSkillStatesCoreNotetags','Sprite_Gauge_setup','buffTurns','currentMaxValue','ToggleOffLocation','process_VisuMZ_SkillsStatesCore_Notetags','gainHp','keys','_currentActor','ColorNeutral','canPaySkillCost','opacity','ShowTurns','_lastStatesActionEndFrameCount','PassiveStates','Parse_Notetags_State_SlipEffectJS','loadBitmap','clearStatesWithStateRetain','[OFF]','version','skills','_cache_CheckBypassRemoveStatesByDamage','MAXMP','RefreshCacheSwitch','ARRAYJSON','RegExp','FieldSkill','98CLFrlX','shopStatusWidth','getPassiveStateConditionSwitchData','setBuffTurns','status','meetsStateCondition','helpAreaHeight','currentValueSkillsStatesCore','statesByCategory','VisuMZ_3_InputComboSkills','canSortSkillTypeList','gradientFillRect','_stateTurns','DataOffsetX','iconWidth','executeHpDamage','mainAreaTop','drawIcon','createItemWindow','Game_BattlerBase_eraseBuff','Game_BattlerBase_eraseState','item','_scene','onAddStateCustomJS','SortByIDandPriority','alterSkillName','STR','isConfused','getPassiveStateConditionClassesData','isEnemy','_cache_getPassiveStateConditionClassesData','ValueOutlineWidth','drawSkillCost','skillTpCost','_skillChangesFromState','standardIconHeight','toUpperCase','stateMaximumTurns','ShowJS','paySkillCost','enemy','removeStatesAuto','toggleOn','isStateCategoryResisted','death','CoreEngine','damage','Window_SkillList_setActor','meetsSkillConditionsEnableJS','Game_BattlerBase_skillMpCost','clamp','ignore','meetsPassiveStateGlobalConditionJS','stateEraseJS','meetsSkillConditionsGlobalJS','CanThrowType','includesSkillsStatesCore','addPassiveStatesFromOtherPlugins','SkillSceneStatusBgType','StateTurnsActorChangeBy','convertPassiveStates','_skillIDs','center','skillVisibleJS','updateTurnDisplaySprite','onRegenerateCustomStateDamageOverTime','buffColor','Game_Battler_addDebuff','_buffTurns','AURA_SYSTEM_ENABLED','buffIconIndex','_statusWindow','eraseBuff','_turnDisplaySprite','Game_Player_refresh','VisuMZ_0_CoreEngine','onExpireBuffJS','getColor','Window_StatusBase_drawActorIcons','LearnedChainSkill','Game_Action_executeHpDamage_bypassStateDmgRemoval','randomInt','add','StateID','menuActor','TurnOffsetY','PayJS','MeetsAuraObjConditions','LearnedMatrix','onExpireBuff','anySwitchOff','mainFontSize','<troop-%1>','makeAdditionalSkillCostText','ValueOutlineSolid','reset','call','traitsSet','checkSkillConditionsSwitchNotetags','isSkillCostShown','Scene_Skill_itemWindowRect','Game_BattlerBase_initMembers','checkShowHideJS','isSkillToggled','skillEnableJS','redraw','itemTextAlign','text','checkSkillTypeMatch','Game_Battler_isStateAddable','canUse','clearStateOrigin','drawActorStateTurns','_commandNameWindow','equips','setStateTurns','equipBattleSkills','Settings','addChild','isBuffAffected','Game_Actor_learnSkill','stateHpSlipHealJS','onRemoveState','totalStateCategoryAffected','greater','isUseSkillsStatesCoreUpdatedLayout','_skillToggle','setSkillToggle','drawActorIcons','registerCommand','ParseClassIDs','ceil','ColorNegative','_cache_toggleExclusionGroups','fillRect','removeStatesByCategory','initMembers','onAddBuffJS','paramBuffRate','ShowShopStatus','isPartyAllAffectedByGroupDefeatStates','_checkingPassiveStates','hasState','_stateRetainType','SkillID','rgba(0,\x200,\x200,\x200)','SkillsStatesCore','%1\x20%2\x20%3','removeByDamage','Game_BattlerBase_die','createTurnDisplaySprite','endAction','_tempBattler','refreshAllMembers','stateData','VisuMZ_2_ClassChangeSystem','changeTextColor','index','DataFontSize','5izDoVB','GaugeMaxJS','JSON','Game_BattlerBase_increaseBuff','KnownListRange','AutoAddState','_stypeIDs','1313772xeKlIg','toggleOff','_colorCache','untitled','max','Game_BattlerBase_buffIconIndex','removeOtherStatesOfSameCategory','commandNameWindowCenter','getStateData','ATK','recover\x20all','isGroupDefeatStateAffected','onEraseStateCustomJS','format','\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this.getCurrentStateActiveUser();\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','Game_BattlerBase_addNewState','onDatabaseLoaded','Game_BattlerBase_decreaseBuff','_skillTypeWindow','drawExtendedParameter','_toggleSkillColor','Game_BattlerBase_meetsSkillConditions_Toggle','passiveStateObjects','convertTargetToStateOriginKey','Toggles','TurnFontSize','getStateDisplay','changeSkillsThroughStateEffects','GaugeDrawJS','createCommandNameWindow','Game_BattlerBase_resetStateCounts','decreaseBuff','colSpacing','SkillSceneAdjustSkillList','_battler','activate','Game_Battler_regenerateAll','boxWidth','Item-%1-%2','process_VisuMZ_SkillsStatesCore_State_Notetags','playEquip','buff','normalColor','onExpireStateJS','<enemy-%1>','Window_SkillStatus_refresh','Game_BattlerBase_clearStates','stateColor','Enemy-%1-%2','categories','Window_SkillList_drawItem','ReapplyRules','exit','gaugeColor1','Game_BattlerBase_recoverAll','retrieveStateColor','isTargetBypassRemoveStatesByDamage','HiddenSkillTypes','meetsSkillConditions','_subject','requestFauxAnimation','Skill-%1-%2','autoRemovalTiming','BattleManager_endAction','getColorDataFromPluginParameters','1478054GpxCZD','Sprite_StateIcon_loadBitmap','redrawSkillsStatesCore','filter','ShowData','ToggleOnTextColor','windowPadding','toggleExclusionGroups','placeExactGauge','3469492SjWkBc','sortSkillList','isSkillUsableForAutoBattle','Game_BattlerBase_skillTpCost','updatedLayoutStyle','resetStateCounts','MeetsAuraNoteConditions','passiveStateIDs','adjustSkillCost','StackDebuffMax','drawItem','onExpireDebuff','Toggle','clearStateDisplay','_hidden','onEraseDebuffGlobalJS','States','Gauge','_passiveStateResults','CheckVisibleBattleNotetags','groupDefeat','getCurrentStateOriginKey','width','allowCreateShopStatusWindow','TurnEndOnMap','stateMpSlipHealJS','currentMaxValueSkillsStatesCore','_tempActor','LabelFontMainType','defaultToggleSkillSetting','_costSettings','_data','AmplifyWith','stateMpSlipDamageJS','testApply','skillTypeWindowRectSkillsStatesCore','skillTypeWindowRect','makeCurrentTroopUniqueID','numberFontFace','multiclasses','\x5cFS[22]\x5cC[8][OFF]','isPassiveStateStackable','EnableLayout','RefreshCacheVar','getSkillChangesFromState','addPassiveStates','slice','die','addState','enemyId','Weapon-%1-%2','ActiveChainSkills','stateTpSlipHealJS','ForceList','prototype','valueFontSize','chanceByDamage','getSkillIdWithName','standardIconWidth','meetsPassiveStateConditionJS','changeOutlineColor','updateStatesActionEnd','isSceneBattle','Game_Actor_skillTypes','_cache_isToggleSkill','slipHp','addBuffTurns','Game_BattlerBase_refresh','heal','stateTurns','_stateData','ListWindowCols','push','getStypeIdWithName','Sprite_Gauge_gaugeRate','allSwitchOff','DisplayedParams','itemWindowRectSkillsStatesCore','ForceListRange','isCommandEnabled','isAlive','subject','drawActorBuffTurns','onChange','removeState','makeCommandName','_stored_state-%1-color','addDebuffTurns','helpWindowRectSkillsStatesCore','return\x200','miasmaStateIDs','onBattleEnd','Global','match','Actor','icon','State-%1-%2','ColorBuff','Game_BattlerBase_isStateResist','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','655332VjLmBO','isStateAddable','getCurrentStateActiveUser','toLowerCase','POSITIVE','StateTurnsEnemyChangeBy','Parse_Notetags_Skill_Cost','addDebuff','ItemThrowSkills','Game_BattlerBase_states','DataOffsetY','number','Turns','iconHeight','toggleOffLocation','convertGaugeTypeSkillsStatesCore','MatchLabelColor','ForcedChainSkill','callUpdateHelp','Sprite_StateIcon_updateFrame','ItemAmplifySkills','getStateOrigin','isUseModernControls','updateStateTurns','states','isAutoBattle','CheckVisibleSkillNotetags','itemLineRect','priority','skillCostSeparator','drawText','Scene_Boot_onDatabaseLoaded','setStatusWindow','CalcJS','onExpireBuffGlobalJS','eraseState','Parse_Notetags_State_ApplyRemoveLeaveJS','test','remove','round','note','setItem','Parse_Notetags_State_PassiveJS','onExpireState','onEraseBuffGlobalJS','auraStateIDs','fontFace','tpCost','CanConcoct','makeItemList','CheckIncompatibleStates','ARRAYSTR','back','DefaultToggle','_animationIndex','process_VisuMZ_SkillsStatesCore_Skill_Notetags','getSkillTypes','forgetSkill','updateCommandNameWindow','VisuMZ_3_ActiveChainSkills','slipMp','clearStateRetainType','drawActorIconsAllTurnCounters','friendsUnit','Game_Action_testApply','gaugeRate','updateFrame','isStateRemoved','stepsForTurn','onAddDebuffJS','hide','resetTextColor','_stateIDs','setup','ALL','members','Parse_Notetags_Skill_JS','checkCacheKey','GaugeCurrentJS','maxItems','updateVisibility','ParseSkillChangessIntoData','createAllSkillCostText','AvailableMatrix','addPassiveStatesByNotetag','AvailableChainSkill','Window_SkillList_makeItemList','valueOutlineColor','labelFontFace','DEF','state','NEGATIVE','textColor','onSkillOk','onExpireDebuffGlobalJS','Game_Variables_onChange','floor','isStateResist','getStateReapplyRulings','clear','stypeId','onExpireDebuffJS','drawParamText','isAppeared','SkillConditionJS','VisuMZ_1_ElementStatusCore','updateHelp','clearAllStateOrigins','calcWindowHeight','createKeyJS','placeGauge','onSkillToggle','Enemy','onAddStateJS','setBackgroundType','_actor','mainAreaHeight','buttonAssistText1','Costs','Window_Base_createAllSkillCostText_Toggle','SkillEnemyPaySkillCost','stateCategoriesResisted','ParseSkillNotetags','ToggleType','stateTpSlipDamageJS','some','initialize','addBuff','makeSuccess','uiHelpPosition','Game_BattlerBase_traitsSet','stateHpSlipDamageJS','gainMp','statusWindowRect','Sprite_Gauge_initMembers','_checkingVisuMzPassiveStateObjects','_stateMaxTurns','getAuraPassiveStateIDs','Game_Troop_setup','allBattleMembers','attacker','TurnOffsetX','SortSkillTypesAbc','Sprite_Gauge_currentMaxValue','Scene_Skill_helpWindowRect','_cache_getPassiveStateConditionSwitchData','canChangeSkillsThroughStateEffects','onAddBuffGlobalJS','prepareResetStateCounts','isSkill','_bypassRemoveStateDamage_value','ActorIDs','PresetLabelGaugeColor','length','_bypassRemoveStateDamage_action','getStateOriginByKey','isSkillHidden','Param','CheckVisibleSwitchNotetags','mainCommandWidth','ARRAYFUNC','Game_BattlerBase_overwriteBuffTurns','trim','MatchLabelGaugeColor','replace','restriction','isStateRestrict','createShopStatusWindow','\x5cI[%1]%2','isDebuffAffected','Scene_Skill_skillTypeWindowRect','onEraseBuffJS','parse','hpDamage','deathStateId','MultiplierJS','overwriteBuffTurns','NUM','Game_Action_isValid','Sprite_Gauge_currentValue','isActor'];_0x3414=function(){return _0x3a4be4;};return _0x3414();}function _0x5cfb(_0x620614,_0x1a6f1f){const _0x341444=_0x3414();return _0x5cfb=function(_0x5cfb6d,_0x5b3bd1){_0x5cfb6d=_0x5cfb6d-0x16a;let _0x5156d7=_0x341444[_0x5cfb6d];return _0x5156d7;},_0x5cfb(_0x620614,_0x1a6f1f);}(function(_0x4e3769,_0x441f0c){const _0xe94b09=_0x5cfb,_0x134d22=_0x4e3769();while(!![]){try{const _0x5721c2=parseInt(_0xe94b09(0x457))/0x1+parseInt(_0xe94b09(0x2e1))/0x2+parseInt(_0xe94b09(0x34e))/0x3+parseInt(_0xe94b09(0x2ea))/0x4+-parseInt(_0xe94b09(0x299))/0x5*(parseInt(_0xe94b09(0x2a0))/0x6)+parseInt(_0xe94b09(0x1fa))/0x7*(parseInt(_0xe94b09(0x447))/0x8)+-parseInt(_0xe94b09(0x487))/0x9;if(_0x5721c2===_0x441f0c)break;else _0x134d22['push'](_0x134d22['shift']());}catch(_0x1aa919){_0x134d22['push'](_0x134d22['shift']());}}}(_0x3414,0x767fe));var label=_0x2cc133(0x28c),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2cc133(0x2e4)](function(_0x487720){const _0x4102ae=_0x2cc133;return _0x487720[_0x4102ae(0x1fe)]&&_0x487720[_0x4102ae(0x450)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x2cc133(0x26f)]=VisuMZ[label][_0x2cc133(0x26f)]||{},VisuMZ['ConvertParams']=function(_0x73e95d,_0x22a1ba){const _0x54a2e7=_0x2cc133;for(const _0x1ab7cb in _0x22a1ba){if(_0x1ab7cb[_0x54a2e7(0x347)](/(.*):(.*)/i)){const _0x273870=String(RegExp['$1']),_0x449081=String(RegExp['$2'])[_0x54a2e7(0x21e)]()[_0x54a2e7(0x3f0)]();let _0x409ec1,_0x90d742,_0x1b92f2;switch(_0x449081){case _0x54a2e7(0x3ff):_0x409ec1=_0x22a1ba[_0x1ab7cb]!==''?Number(_0x22a1ba[_0x1ab7cb]):0x0;break;case _0x54a2e7(0x460):_0x90d742=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):[],_0x409ec1=_0x90d742[_0x54a2e7(0x1de)](_0x1e5ff3=>Number(_0x1e5ff3));break;case'EVAL':_0x409ec1=_0x22a1ba[_0x1ab7cb]!==''?eval(_0x22a1ba[_0x1ab7cb]):null;break;case'ARRAYEVAL':_0x90d742=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):[],_0x409ec1=_0x90d742[_0x54a2e7(0x1de)](_0x321cf8=>eval(_0x321cf8));break;case _0x54a2e7(0x29b):_0x409ec1=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):'';break;case _0x54a2e7(0x1f7):_0x90d742=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):[],_0x409ec1=_0x90d742['map'](_0x1b361b=>JSON[_0x54a2e7(0x3fa)](_0x1b361b));break;case'FUNC':_0x409ec1=_0x22a1ba[_0x1ab7cb]!==''?new Function(JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb])):new Function(_0x54a2e7(0x343));break;case _0x54a2e7(0x3ee):_0x90d742=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):[],_0x409ec1=_0x90d742[_0x54a2e7(0x1de)](_0x2554d7=>new Function(JSON[_0x54a2e7(0x3fa)](_0x2554d7)));break;case _0x54a2e7(0x214):_0x409ec1=_0x22a1ba[_0x1ab7cb]!==''?String(_0x22a1ba[_0x1ab7cb]):'';break;case _0x54a2e7(0x381):_0x90d742=_0x22a1ba[_0x1ab7cb]!==''?JSON['parse'](_0x22a1ba[_0x1ab7cb]):[],_0x409ec1=_0x90d742[_0x54a2e7(0x1de)](_0x1f9d43=>String(_0x1f9d43));break;case'STRUCT':_0x1b92f2=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):{},_0x73e95d[_0x273870]={},VisuMZ['ConvertParams'](_0x73e95d[_0x273870],_0x1b92f2);continue;case'ARRAYSTRUCT':_0x90d742=_0x22a1ba[_0x1ab7cb]!==''?JSON[_0x54a2e7(0x3fa)](_0x22a1ba[_0x1ab7cb]):[],_0x409ec1=_0x90d742[_0x54a2e7(0x1de)](_0xb9acd1=>VisuMZ[_0x54a2e7(0x454)]({},JSON[_0x54a2e7(0x3fa)](_0xb9acd1)));break;default:continue;}_0x73e95d[_0x273870]=_0x409ec1;}}return _0x73e95d;},(_0x5b09a5=>{const _0x4455b2=_0x2cc133,_0x6ed000=_0x5b09a5[_0x4455b2(0x1a3)];for(const _0xfa3e6 of dependencies){if(!Imported[_0xfa3e6]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x4455b2(0x2ad)](_0x6ed000,_0xfa3e6)),SceneManager['exit']();break;}}const _0x48bac8=_0x5b09a5[_0x4455b2(0x450)];if(_0x48bac8[_0x4455b2(0x347)](/\[Version[ ](.*?)\]/i)){const _0x15cd9c=Number(RegExp['$1']);_0x15cd9c!==VisuMZ[label][_0x4455b2(0x1f2)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4455b2(0x2ad)](_0x6ed000,_0x15cd9c)),SceneManager['exit']());}if(_0x48bac8['match'](/\[Tier[ ](\d+)\]/i)){const _0x3e0189=Number(RegExp['$1']);_0x3e0189<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x4455b2(0x2ad)](_0x6ed000,_0x3e0189,tier)),SceneManager[_0x4455b2(0x2d4)]()):tier=Math[_0x4455b2(0x2a4)](_0x3e0189,tier);}VisuMZ[_0x4455b2(0x454)](VisuMZ[label][_0x4455b2(0x26f)],_0x5b09a5[_0x4455b2(0x1b7)]);})(pluginData),PluginManager[_0x2cc133(0x27b)](pluginData['name'],_0x2cc133(0x1af),_0x48e0f7=>{const _0x4cf7f7=_0x2cc133;VisuMZ[_0x4cf7f7(0x454)](_0x48e0f7,_0x48e0f7);const _0x470c05=_0x48e0f7['ActorIDs']||[],_0x20b24a=Number(_0x48e0f7[_0x4cf7f7(0x28a)]),_0x5cf97e=$dataSkills[_0x20b24a];if(!_0x5cf97e)return;for(const _0x34fd0f of _0x470c05){const _0x2c500f=$gameActors['actor'](_0x34fd0f);if(!_0x2c500f)continue;_0x2c500f['paySkillCost'](_0x5cf97e);}}),PluginManager[_0x2cc133(0x27b)](pluginData['name'],_0x2cc133(0x3c6),_0x2c8b54=>{const _0x7d9dac=_0x2cc133;VisuMZ[_0x7d9dac(0x454)](_0x2c8b54,_0x2c8b54);const _0x8836b8=_0x2c8b54[_0x7d9dac(0x1a2)]||[],_0x2bf3a6=Number(_0x2c8b54[_0x7d9dac(0x28a)]),_0x38097c=$dataSkills[_0x2bf3a6];if(!_0x38097c)return;for(const _0x518617 of _0x8836b8){const _0x1b2a24=$gameTroop['members']()[_0x518617];if(!_0x1b2a24)continue;_0x1b2a24[_0x7d9dac(0x221)](_0x38097c);}}),PluginManager[_0x2cc133(0x27b)](pluginData[_0x2cc133(0x1a3)],_0x2cc133(0x235),_0x5a5583=>{const _0xcc45e5=_0x2cc133;VisuMZ[_0xcc45e5(0x454)](_0x5a5583,_0x5a5583);const _0x30966b=_0x5a5583['ActorIDs']||[],_0x3ef27a=Number(_0x5a5583[_0xcc45e5(0x24d)]),_0x2c9e3f=Number(_0x5a5583[_0xcc45e5(0x35a)]),_0x5b7f2f=_0x5a5583[_0xcc45e5(0x29e)];for(const _0x3a8ced of _0x30966b){const _0x47517a=$gameActors[_0xcc45e5(0x469)](_0x3a8ced);if(!_0x47517a)continue;_0x5b7f2f&&!_0x47517a[_0xcc45e5(0x1d4)](_0x3ef27a)?(_0x47517a['addState'](_0x3ef27a),_0x47517a['setStateTurns'](_0x3ef27a,_0x2c9e3f)):_0x47517a[_0xcc45e5(0x18b)](_0x3ef27a,_0x2c9e3f);}}),PluginManager['registerCommand'](pluginData['name'],_0x2cc133(0x193),_0x103317=>{const _0x478d80=_0x2cc133;VisuMZ[_0x478d80(0x454)](_0x103317,_0x103317);const _0x331efd=_0x103317[_0x478d80(0x3e5)]||[],_0x3d29fb=Number(_0x103317[_0x478d80(0x24d)]),_0x34206e=Math['max'](Number(_0x103317[_0x478d80(0x35a)]),0x0),_0x15a2c6=_0x103317[_0x478d80(0x29e)];for(const _0x3fed22 of _0x331efd){const _0x256f90=$gameActors[_0x478d80(0x469)](_0x3fed22);if(!_0x256f90)continue;_0x15a2c6&&!_0x256f90[_0x478d80(0x1d4)](_0x3d29fb)&&_0x256f90[_0x478d80(0x31a)](_0x3d29fb),_0x256f90[_0x478d80(0x26d)](_0x3d29fb,_0x34206e);}}),PluginManager[_0x2cc133(0x27b)](pluginData[_0x2cc133(0x1a3)],_0x2cc133(0x353),_0x57ccf7=>{const _0x36f59c=_0x2cc133;if(!$gameParty[_0x36f59c(0x424)]())return;VisuMZ[_0x36f59c(0x454)](_0x57ccf7,_0x57ccf7);const _0x162289=_0x57ccf7[_0x36f59c(0x1a2)]||[],_0xd68dfb=Number(_0x57ccf7[_0x36f59c(0x24d)]),_0x7e3943=Number(_0x57ccf7[_0x36f59c(0x35a)]),_0x2e650b=_0x57ccf7['AutoAddState'];for(const _0x55777b of _0x162289){const _0x12fe5d=$gameTroop[_0x36f59c(0x399)]()[_0x55777b];if(!_0x12fe5d)continue;_0x2e650b&&!_0x12fe5d['isStateAffected'](_0xd68dfb)?(_0x12fe5d['addState'](_0xd68dfb),_0x12fe5d[_0x36f59c(0x26d)](_0xd68dfb,_0x7e3943)):_0x12fe5d[_0x36f59c(0x18b)](_0xd68dfb,_0x7e3943);}}),PluginManager[_0x2cc133(0x27b)](pluginData[_0x2cc133(0x1a3)],'StateTurnsEnemyChangeTo',_0x4bd1bf=>{const _0x2b80b4=_0x2cc133;if(!$gameParty[_0x2b80b4(0x424)]())return;VisuMZ[_0x2b80b4(0x454)](_0x4bd1bf,_0x4bd1bf);const _0x5acd4f=_0x4bd1bf[_0x2b80b4(0x1a2)]||[],_0x1c784e=Number(_0x4bd1bf['StateID']),_0x5df66a=Math[_0x2b80b4(0x2a4)](Number(_0x4bd1bf[_0x2b80b4(0x35a)]),0x0),_0x45b6ec=_0x4bd1bf[_0x2b80b4(0x29e)];for(const _0x4cbb52 of _0x5acd4f){const _0x3002f3=$gameTroop[_0x2b80b4(0x399)]()[_0x4cbb52];if(!_0x3002f3)continue;_0x45b6ec&&!_0x3002f3[_0x2b80b4(0x1d4)](_0x1c784e)&&_0x3002f3[_0x2b80b4(0x31a)](_0x1c784e),_0x3002f3[_0x2b80b4(0x26d)](_0x1c784e,_0x5df66a);}}),VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x36d)]=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x2cc133(0x320)][_0x2cc133(0x2b0)]=function(){const _0x76ab68=_0x2cc133;VisuMZ[_0x76ab68(0x28c)][_0x76ab68(0x36d)][_0x76ab68(0x25a)](this),this[_0x76ab68(0x1e4)](),VisuMZ[_0x76ab68(0x28c)][_0x76ab68(0x380)]();},Scene_Boot['prototype'][_0x2cc133(0x1e4)]=function(){const _0x44ac41=_0x2cc133;this[_0x44ac41(0x429)]();if(VisuMZ['ParseAllNotetags'])return;this[_0x44ac41(0x385)](),this[_0x44ac41(0x2c7)]();},Scene_Boot[_0x2cc133(0x320)]['process_VisuMZ_SkillsStatesCore_Skill_Notetags']=function(){const _0x5415b0=_0x2cc133;for(const _0xd435f8 of $dataSkills){if(!_0xd435f8)continue;VisuMZ['SkillsStatesCore'][_0x5415b0(0x354)](_0xd435f8),VisuMZ[_0x5415b0(0x28c)]['Parse_Notetags_Skill_Sorting'](_0xd435f8),VisuMZ[_0x5415b0(0x28c)][_0x5415b0(0x39a)](_0xd435f8);}},Scene_Boot[_0x2cc133(0x320)][_0x2cc133(0x2c7)]=function(){const _0x47ba0e=_0x2cc133;for(const _0x1f233a of $dataStates){if(!_0x1f233a)continue;VisuMZ[_0x47ba0e(0x28c)][_0x47ba0e(0x1bd)](_0x1f233a),VisuMZ[_0x47ba0e(0x28c)][_0x47ba0e(0x378)](_0x1f233a),VisuMZ[_0x47ba0e(0x28c)]['Parse_Notetags_State_SlipEffectJS'](_0x1f233a),VisuMZ[_0x47ba0e(0x28c)][_0x47ba0e(0x372)](_0x1f233a);}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3c8)]=VisuMZ[_0x2cc133(0x3c8)],VisuMZ[_0x2cc133(0x3c8)]=function(_0x55bd72){const _0x43b43e=_0x2cc133;VisuMZ[_0x43b43e(0x28c)][_0x43b43e(0x3c8)][_0x43b43e(0x25a)](this,_0x55bd72),VisuMZ[_0x43b43e(0x28c)]['Parse_Notetags_Skill_Cost'](_0x55bd72),VisuMZ[_0x43b43e(0x28c)]['Parse_Notetags_Skill_Sorting'](_0x55bd72),VisuMZ['SkillsStatesCore'][_0x43b43e(0x39a)](_0x55bd72);},VisuMZ['SkillsStatesCore']['ParseStateNotetags']=VisuMZ['ParseStateNotetags'],VisuMZ[_0x2cc133(0x1c7)]=function(_0x10e45c){const _0x31b205=_0x2cc133;VisuMZ[_0x31b205(0x28c)][_0x31b205(0x1c7)][_0x31b205(0x25a)](this,_0x10e45c),VisuMZ[_0x31b205(0x28c)][_0x31b205(0x1bd)](_0x10e45c),VisuMZ[_0x31b205(0x28c)][_0x31b205(0x378)](_0x10e45c),VisuMZ[_0x31b205(0x28c)][_0x31b205(0x1ee)](_0x10e45c),VisuMZ[_0x31b205(0x28c)][_0x31b205(0x372)](_0x10e45c);},VisuMZ['SkillsStatesCore']['Parse_Notetags_Skill_Cost']=function(_0x4736dd){const _0x1c68a8=_0x2cc133,_0x168c59=_0x4736dd['note'];_0x168c59[_0x1c68a8(0x347)](/<MP COST:[ ](\d+)>/i)&&(_0x4736dd['mpCost']=Number(RegExp['$1'])),_0x168c59['match'](/<TP COST:[ ](\d+)>/i)&&(_0x4736dd[_0x1c68a8(0x37d)]=Number(RegExp['$1']));},VisuMZ['SkillsStatesCore']['Parse_Notetags_Skill_Sorting']=function(_0xdcbe4b){const _0x4d0fc9=_0x2cc133;if(!_0xdcbe4b)return;_0xdcbe4b[_0x4d0fc9(0x446)]=0x32;const _0x640e31=_0xdcbe4b['note']||'';_0x640e31[_0x4d0fc9(0x347)](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0xdcbe4b[_0x4d0fc9(0x446)]=Number(RegExp['$1']));},VisuMZ[_0x2cc133(0x28c)]['skillEnableJS']={},VisuMZ['SkillsStatesCore'][_0x2cc133(0x239)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x39a)]=function(_0x5bec9d){const _0x44337b=_0x2cc133,_0x43e975=_0x5bec9d['note'];if(_0x43e975[_0x44337b(0x347)](/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)){const _0x12692c=String(RegExp['$1']),_0x2513a7='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x44337b(0x2ad)](_0x12692c);VisuMZ[_0x44337b(0x28c)][_0x44337b(0x262)][_0x5bec9d['id']]=new Function(_0x44337b(0x43f),_0x2513a7);}if(_0x43e975['match'](/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)){const _0x57ef97=String(RegExp['$1']),_0x4bb823=_0x44337b(0x34d)[_0x44337b(0x2ad)](_0x57ef97);VisuMZ[_0x44337b(0x28c)]['skillVisibleJS'][_0x5bec9d['id']]=new Function(_0x44337b(0x43f),_0x4bb823);}},VisuMZ['SkillsStatesCore']['Parse_Notetags_State_Category']=function(_0x45aa95){const _0x5dae86=_0x2cc133;_0x45aa95[_0x5dae86(0x2d1)]=[_0x5dae86(0x398),'ANY'];const _0x32811e=_0x45aa95[_0x5dae86(0x376)],_0x286dd6=_0x32811e[_0x5dae86(0x347)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x286dd6)for(const _0x5ec03d of _0x286dd6){_0x5ec03d['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x43fafd=String(RegExp['$1'])[_0x5dae86(0x21e)]()[_0x5dae86(0x3f0)]()['split'](',');for(const _0x2d909b of _0x43fafd){_0x45aa95['categories'][_0x5dae86(0x332)](_0x2d909b[_0x5dae86(0x3f0)]());}}if(_0x32811e[_0x5dae86(0x347)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x59d7f5=RegExp['$1']['split'](/[\r\n]+/);for(const _0x210315 of _0x59d7f5){_0x45aa95[_0x5dae86(0x2d1)][_0x5dae86(0x332)](_0x210315['toUpperCase']()['trim']());}}_0x32811e[_0x5dae86(0x347)](/<POSITIVE STATE>/i)&&_0x45aa95[_0x5dae86(0x2d1)][_0x5dae86(0x332)](_0x5dae86(0x352)),_0x32811e[_0x5dae86(0x347)](/<NEGATIVE STATE>/i)&&_0x45aa95['categories'][_0x5dae86(0x332)](_0x5dae86(0x3a9));},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x443)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x378)]=function(_0x217e03){const _0x125d11=_0x2cc133,_0x3c60b6=_0x217e03[_0x125d11(0x376)];if(_0x3c60b6['match'](/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)){const _0x275d0c=String(RegExp['$1']),_0x2dced4=_0x125d11(0x16c)[_0x125d11(0x2ad)](_0x275d0c);VisuMZ[_0x125d11(0x28c)][_0x125d11(0x443)][_0x217e03['id']]=new Function(_0x125d11(0x3a8),_0x2dced4);}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3d1)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x273)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x30b)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x303)]={},VisuMZ['SkillsStatesCore'][_0x2cc133(0x3ca)]={},VisuMZ['SkillsStatesCore'][_0x2cc133(0x31e)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x1ee)]=function(_0x2b2468){const _0x5074bc=_0x2cc133,_0x2221a7=_0x2b2468[_0x5074bc(0x376)],_0x1bd0bd='\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20%2\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20%2\x20=\x20Math.round(Math.max(0,\x20%2)\x20*\x20%3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20this.setStateData(stateId,\x20\x27%4\x27,\x20%2);\x0a\x20\x20\x20\x20';if(_0x2221a7[_0x5074bc(0x347)](/<JS HP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS HP SLIP DAMAGE>/i)){const _0x3a2c9b=String(RegExp['$1']),_0x5876bf=_0x1bd0bd['format'](_0x3a2c9b,_0x5074bc(0x228),-0x1,_0x5074bc(0x32b));VisuMZ[_0x5074bc(0x28c)][_0x5074bc(0x3d1)][_0x2b2468['id']]=new Function('stateId',_0x5876bf);}else{if(_0x2221a7['match'](/<JS HP SLIP HEAL>\s*([\s\S]*)\s*<\/JS HP SLIP HEAL>/i)){const _0x428cf1=String(RegExp['$1']),_0x3bf25d=_0x1bd0bd['format'](_0x428cf1,'heal',0x1,'slipHp');VisuMZ[_0x5074bc(0x28c)]['stateHpSlipHealJS'][_0x2b2468['id']]=new Function(_0x5074bc(0x1d9),_0x3bf25d);}}if(_0x2221a7['match'](/<JS MP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS MP SLIP DAMAGE>/i)){const _0x55a6fc=String(RegExp['$1']),_0x348b96=_0x1bd0bd[_0x5074bc(0x2ad)](_0x55a6fc,_0x5074bc(0x228),-0x1,_0x5074bc(0x38a));VisuMZ[_0x5074bc(0x28c)][_0x5074bc(0x30b)][_0x2b2468['id']]=new Function(_0x5074bc(0x1d9),_0x348b96);}else{if(_0x2221a7[_0x5074bc(0x347)](/<JS MP SLIP HEAL>\s*([\s\S]*)\s*<\/JS MP SLIP HEAL>/i)){const _0x6e5131=String(RegExp['$1']),_0x3922bd=_0x1bd0bd[_0x5074bc(0x2ad)](_0x6e5131,_0x5074bc(0x32e),0x1,_0x5074bc(0x38a));VisuMZ[_0x5074bc(0x28c)][_0x5074bc(0x303)][_0x2b2468['id']]=new Function(_0x5074bc(0x1d9),_0x3922bd);}}if(_0x2221a7[_0x5074bc(0x347)](/<JS TP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS TP SLIP DAMAGE>/i)){const _0x375ebf=String(RegExp['$1']),_0x332db7=_0x1bd0bd[_0x5074bc(0x2ad)](_0x375ebf,_0x5074bc(0x228),-0x1,_0x5074bc(0x478));VisuMZ[_0x5074bc(0x28c)][_0x5074bc(0x3ca)][_0x2b2468['id']]=new Function(_0x5074bc(0x1d9),_0x332db7);}else{if(_0x2221a7['match'](/<JS TP SLIP HEAL>\s*([\s\S]*)\s*<\/JS TP SLIP HEAL>/i)){const _0x59d92e=String(RegExp['$1']),_0x3f03bb=_0x1bd0bd[_0x5074bc(0x2ad)](_0x59d92e,_0x5074bc(0x32e),0x1,'slipTp');VisuMZ['SkillsStatesCore'][_0x5074bc(0x31e)][_0x2b2468['id']]=new Function('stateId',_0x3f03bb);}}},VisuMZ['SkillsStatesCore']['stateAddJS']={},VisuMZ[_0x2cc133(0x28c)]['stateEraseJS']={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x1c9)]={},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x372)]=function(_0x499896){const _0x1a52c6=_0x2cc133,_0x163050=_0x499896['note'],_0x172e78=_0x1a52c6(0x2ae);if(_0x163050[_0x1a52c6(0x347)](/<JS ON ADD STATE>\s*([\s\S]*)\s*<\/JS ON ADD STATE>/i)){const _0x5a9e75=String(RegExp['$1']),_0x35ae86=_0x172e78[_0x1a52c6(0x2ad)](_0x5a9e75);VisuMZ['SkillsStatesCore']['stateAddJS'][_0x499896['id']]=new Function(_0x1a52c6(0x1d9),_0x35ae86);}if(_0x163050[_0x1a52c6(0x347)](/<JS ON ERASE STATE>\s*([\s\S]*)\s*<\/JS ON ERASE STATE>/i)){const _0x4c79e9=String(RegExp['$1']),_0x196101=_0x172e78[_0x1a52c6(0x2ad)](_0x4c79e9);VisuMZ['SkillsStatesCore']['stateEraseJS'][_0x499896['id']]=new Function(_0x1a52c6(0x1d9),_0x196101);}if(_0x163050[_0x1a52c6(0x347)](/<JS ON EXPIRE STATE>\s*([\s\S]*)\s*<\/JS ON EXPIRE STATE>/i)){const _0x1dcde7=String(RegExp['$1']),_0x527b9b=_0x172e78[_0x1a52c6(0x2ad)](_0x1dcde7);VisuMZ['SkillsStatesCore']['stateExpireJS'][_0x499896['id']]=new Function(_0x1a52c6(0x1d9),_0x527b9b);}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x380)]=function(){const _0x484751=_0x2cc133;if(!VisuMZ[_0x484751(0x28c)][_0x484751(0x26f)]['States'][_0x484751(0x430)])return;for(const _0x4bcff5 of $dataStates){if(!_0x4bcff5)continue;_0x4bcff5[_0x484751(0x3f3)]===0x4&&_0x4bcff5[_0x484751(0x2de)]===0x1&&(_0x4bcff5['autoRemovalTiming']=0x2);}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3bb)]=function(_0x3ffca4,_0x54921b){const _0x77c491=_0x2cc133;if(VisuMZ[_0x77c491(0x3bb)])return VisuMZ[_0x77c491(0x3bb)](_0x3ffca4,_0x54921b);let _0x4a314a='';if($dataActors[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x197)['format'](_0x3ffca4['id'],_0x54921b);if($dataClasses['includes'](_0x3ffca4))_0x4a314a=_0x77c491(0x1b1)[_0x77c491(0x2ad)](_0x3ffca4['id'],_0x54921b);if($dataSkills[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x2dd)[_0x77c491(0x2ad)](_0x3ffca4['id'],_0x54921b);if($dataItems[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x2c6)[_0x77c491(0x2ad)](_0x3ffca4['id'],_0x54921b);if($dataWeapons[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x31c)['format'](_0x3ffca4['id'],_0x54921b);if($dataArmors[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x46a)[_0x77c491(0x2ad)](_0x3ffca4['id'],_0x54921b);if($dataEnemies[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x2d0)[_0x77c491(0x2ad)](_0x3ffca4['id'],_0x54921b);if($dataStates[_0x77c491(0x19c)](_0x3ffca4))_0x4a314a=_0x77c491(0x34a)['format'](_0x3ffca4['id'],_0x54921b);return _0x4a314a;},DataManager['getClassIdWithName']=function(_0x32d985){const _0x299bdc=_0x2cc133;_0x32d985=_0x32d985[_0x299bdc(0x21e)]()[_0x299bdc(0x3f0)](),this[_0x299bdc(0x42a)]=this['_classIDs']||{};if(this['_classIDs'][_0x32d985])return this[_0x299bdc(0x42a)][_0x32d985];for(const _0x438940 of $dataClasses){if(!_0x438940)continue;let _0x4af702=_0x438940[_0x299bdc(0x1a3)];_0x4af702=_0x4af702[_0x299bdc(0x3f2)](/\x1I\[(\d+)\]/gi,''),_0x4af702=_0x4af702['replace'](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x4af702[_0x299bdc(0x21e)]()[_0x299bdc(0x3f0)]()]=_0x438940['id'];}return this['_classIDs'][_0x32d985]||0x0;},DataManager[_0x2cc133(0x386)]=function(_0x41f197){const _0x2f7267=_0x2cc133;this[_0x2f7267(0x29f)]=this[_0x2f7267(0x29f)]||{};if(this[_0x2f7267(0x29f)][_0x41f197['id']])return this[_0x2f7267(0x29f)][_0x41f197['id']];this[_0x2f7267(0x29f)][_0x41f197['id']]=[_0x41f197[_0x2f7267(0x3b2)]];if(_0x41f197[_0x2f7267(0x376)]['match'](/<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x267306=JSON[_0x2f7267(0x3fa)]('['+RegExp['$1'][_0x2f7267(0x347)](/\d+/g)+']');this[_0x2f7267(0x29f)][_0x41f197['id']]=this['_stypeIDs'][_0x41f197['id']][_0x2f7267(0x422)](_0x267306);}else{if(_0x41f197[_0x2f7267(0x376)][_0x2f7267(0x347)](/<SKILL[ ](?:TYPE|TYPES):[ ](.*)>/i)){const _0x29f8fd=RegExp['$1'][_0x2f7267(0x44c)](',');for(const _0x5dcaff of _0x29f8fd){const _0x2c133c=DataManager[_0x2f7267(0x333)](_0x5dcaff);if(_0x2c133c)this[_0x2f7267(0x29f)][_0x41f197['id']][_0x2f7267(0x332)](_0x2c133c);}}}return this[_0x2f7267(0x29f)][_0x41f197['id']];},DataManager[_0x2cc133(0x333)]=function(_0xef3c3f){const _0x532ea3=_0x2cc133;_0xef3c3f=_0xef3c3f[_0x532ea3(0x21e)]()[_0x532ea3(0x3f0)](),this[_0x532ea3(0x29f)]=this[_0x532ea3(0x29f)]||{};if(this[_0x532ea3(0x29f)][_0xef3c3f])return this[_0x532ea3(0x29f)][_0xef3c3f];for(let _0x43e13d=0x1;_0x43e13d<0x64;_0x43e13d++){if(!$dataSystem[_0x532ea3(0x45d)][_0x43e13d])continue;let _0x26ec74=$dataSystem['skillTypes'][_0x43e13d][_0x532ea3(0x21e)]()[_0x532ea3(0x3f0)]();_0x26ec74=_0x26ec74[_0x532ea3(0x3f2)](/\x1I\[(\d+)\]/gi,''),_0x26ec74=_0x26ec74[_0x532ea3(0x3f2)](/\\I\[(\d+)\]/gi,''),this[_0x532ea3(0x29f)][_0x26ec74]=_0x43e13d;}return this[_0x532ea3(0x29f)][_0xef3c3f]||0x0;},DataManager[_0x2cc133(0x323)]=function(_0x36c692){const _0x435d2b=_0x2cc133;_0x36c692=_0x36c692[_0x435d2b(0x21e)]()['trim'](),this['_skillIDs']=this[_0x435d2b(0x237)]||{};if(this[_0x435d2b(0x237)][_0x36c692])return this['_skillIDs'][_0x36c692];for(const _0xed00e5 of $dataSkills){if(!_0xed00e5)continue;this['_skillIDs'][_0xed00e5['name'][_0x435d2b(0x21e)]()[_0x435d2b(0x3f0)]()]=_0xed00e5['id'];}return this[_0x435d2b(0x237)][_0x36c692]||0x0;},DataManager[_0x2cc133(0x482)]=function(_0x320acd){const _0x351b15=_0x2cc133;_0x320acd=_0x320acd['toUpperCase']()[_0x351b15(0x3f0)](),this['_stateIDs']=this['_stateIDs']||{};if(this['_stateIDs'][_0x320acd])return this[_0x351b15(0x396)][_0x320acd];for(const _0x118ef0 of $dataStates){if(!_0x118ef0)continue;this[_0x351b15(0x396)][_0x118ef0[_0x351b15(0x1a3)][_0x351b15(0x21e)]()['trim']()]=_0x118ef0['id'];}return this['_stateIDs'][_0x320acd]||0x0;},DataManager[_0x2cc133(0x21f)]=function(_0x2ec3d0){const _0x570ccd=_0x2cc133;this[_0x570ccd(0x3d6)]=this[_0x570ccd(0x3d6)]||{};if(this[_0x570ccd(0x3d6)][_0x2ec3d0])return this['_stateMaxTurns'][_0x2ec3d0];return $dataStates[_0x2ec3d0]['note'][_0x570ccd(0x347)](/<MAX TURNS:[ ](\d+)>/i)?this['_stateMaxTurns'][_0x2ec3d0]=Number(RegExp['$1']):this['_stateMaxTurns'][_0x2ec3d0]=VisuMZ[_0x570ccd(0x28c)][_0x570ccd(0x26f)][_0x570ccd(0x2fa)][_0x570ccd(0x406)],this[_0x570ccd(0x3d6)][_0x2ec3d0];},DataManager[_0x2cc133(0x316)]=function(_0x2a5439){const _0x3a208a=_0x2cc133;if(!_0x2a5439)return{};this[_0x3a208a(0x21c)]=this[_0x3a208a(0x21c)]||{};if(this['_skillChangesFromState'][_0x2a5439['id']]!==undefined)return this[_0x3a208a(0x21c)][_0x2a5439['id']];const _0x2095ed=_0x2a5439[_0x3a208a(0x376)]||'',_0x5ccdce={};{const _0x1c2666=_0x2095ed[_0x3a208a(0x347)](/<SKILL CHANGE(?:|S):[ ](.*)[ ]>>>[ ](.*)>/gi);if(_0x1c2666)for(const _0x2f8bad of _0x1c2666){_0x2f8bad[_0x3a208a(0x347)](/<SKILL CHANGE(?:|S):[ ](.*)[ ]>>>[ ](.*)>/gi);let _0x50e8ac=String(RegExp['$1']),_0x8d45c4=String(RegExp['$2']);VisuMZ[_0x3a208a(0x28c)][_0x3a208a(0x39f)](_0x5ccdce,_0x50e8ac,_0x8d45c4);}}if(_0x2095ed[_0x3a208a(0x347)](/<SKILL CHANGE(?:|S)>\s*([\s\S]*)\s*<\/SKILL CHANGE(?:|S)>/i)){const _0xa62cec=String(RegExp['$1'])[_0x3a208a(0x44c)](/[\r\n]+/)['remove']('');for(const _0x321095 of _0xa62cec){if(_0x321095['match'](/(.*)[ ]>>>[ ](.*)/i)){let _0x3152b1=String(RegExp['$1']),_0x30c405=String(RegExp['$2']);VisuMZ[_0x3a208a(0x28c)][_0x3a208a(0x39f)](_0x5ccdce,_0x3152b1,_0x30c405);}}}return this[_0x3a208a(0x21c)][_0x2a5439['id']]=_0x5ccdce,this[_0x3a208a(0x21c)][_0x2a5439['id']];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x39f)]=function(_0x65963a,_0x6fda24,_0x3f1d6c){const _0x106417=_0x2cc133;/^\d+$/['test'](_0x6fda24)?_0x6fda24=Number(_0x6fda24):_0x6fda24=DataManager[_0x106417(0x323)](_0x6fda24),/^\d+$/[_0x106417(0x373)](_0x3f1d6c)?_0x3f1d6c=Number(_0x3f1d6c):_0x3f1d6c=DataManager[_0x106417(0x323)](_0x3f1d6c),_0x65963a[_0x6fda24]=_0x3f1d6c;},DataManager[_0x2cc133(0x43d)]=function(_0x3bbcdc){const _0x4a3a11=_0x2cc133;if(!DataManager[_0x4a3a11(0x3e3)](_0x3bbcdc))return![];this[_0x4a3a11(0x32a)]=this['_cache_isToggleSkill']||{};if(this[_0x4a3a11(0x32a)][_0x3bbcdc['id']]!==undefined)return this[_0x4a3a11(0x32a)][_0x3bbcdc['id']];this[_0x4a3a11(0x32a)][_0x3bbcdc['id']]=![];const _0x1b53bb=_0x3bbcdc[_0x4a3a11(0x376)]||'';if(_0x1b53bb['match'](/<TOGGLE>/i))this['_cache_isToggleSkill'][_0x3bbcdc['id']]=!![];else{if(_0x1b53bb[_0x4a3a11(0x347)](/<INITIAL TOGGLE: ON>/i))this[_0x4a3a11(0x32a)][_0x3bbcdc['id']]=!![];else{if(_0x1b53bb[_0x4a3a11(0x347)](/<INITIAL TOGGLE: OFF>/i))this['_cache_isToggleSkill'][_0x3bbcdc['id']]=!![];else _0x1b53bb['match'](/<TOGGLE EXCLU(?:DE|SION) GROUP(?:|S):[ ](.*)>/i)&&(this[_0x4a3a11(0x32a)][_0x3bbcdc['id']]=!![]);}}return this[_0x4a3a11(0x42e)](_0x1b53bb)&&(this[_0x4a3a11(0x32a)][_0x3bbcdc['id']]=![]),this[_0x4a3a11(0x32a)][_0x3bbcdc['id']];},DataManager['hasToggleSkillAntiCheck']=function(_0x2d8910){const _0x1d9af0=_0x2cc133;if(Imported[_0x1d9af0(0x389)]){const _0x348739=VisuMZ[_0x1d9af0(0x31d)]['RegExp'];if(_0x2d8910[_0x1d9af0(0x347)](_0x348739[_0x1d9af0(0x3a3)]))return!![];if(_0x2d8910[_0x1d9af0(0x347)](_0x348739[_0x1d9af0(0x35f)]))return!![];if(_0x2d8910[_0x1d9af0(0x347)](_0x348739[_0x1d9af0(0x249)]))return!![];}if(Imported['VisuMZ_3_EvoMatrixSkills']){const _0xb5a881=VisuMZ['EvoMatrixSkills'][_0x1d9af0(0x1f8)];if(_0x2d8910[_0x1d9af0(0x347)](_0xb5a881[_0x1d9af0(0x3a1)]))return!![];if(_0x2d8910['match'](_0xb5a881[_0x1d9af0(0x488)]))return!![];if(_0x2d8910[_0x1d9af0(0x347)](_0xb5a881[_0x1d9af0(0x252)]))return!![];}if(Imported[_0x1d9af0(0x203)]){const _0x1568be=VisuMZ['InputComboSkills'][_0x1d9af0(0x1f8)];if(_0x2d8910[_0x1d9af0(0x347)](_0x1568be['InputKey']))return!![];}if(Imported['VisuMZ_3_FieldSkills']){const _0x466f10=VisuMZ['FieldSkills'][_0x1d9af0(0x1f8)];if(_0x2d8910[_0x1d9af0(0x347)](_0x466f10[_0x1d9af0(0x1f9)]))return!![];}if(Imported[_0x1d9af0(0x46e)]){const _0x5817eb=VisuMZ[_0x1d9af0(0x362)][_0x1d9af0(0x1f8)];if(_0x2d8910['match'](_0x5817eb[_0x1d9af0(0x30a)]))return!![];}if(Imported['VisuMZ_3_ItemConcoctSkills']){const _0x110b7b=VisuMZ[_0x1d9af0(0x1b5)][_0x1d9af0(0x1f8)];if(_0x2d8910['match'](_0x110b7b[_0x1d9af0(0x37e)]))return!![];}if(Imported['VisuMZ_3_ItemThrowSkills']){const _0x47b8f6=VisuMZ[_0x1d9af0(0x356)]['RegExp'];if(_0x2d8910['match'](_0x47b8f6[_0x1d9af0(0x231)]))return!![];}if(Imported[_0x1d9af0(0x40c)]){const _0xdbb480=VisuMZ[_0x1d9af0(0x40e)][_0x1d9af0(0x1f8)];if(_0x2d8910[_0x1d9af0(0x347)](_0xdbb480[_0x1d9af0(0x476)]))return!![];if(_0x2d8910['match'](_0xdbb480[_0x1d9af0(0x29d)]))return!![];if(_0x2d8910[_0x1d9af0(0x347)](_0xdbb480[_0x1d9af0(0x31f)]))return!![];if(_0x2d8910[_0x1d9af0(0x347)](_0xdbb480[_0x1d9af0(0x338)]))return!![];}return![];},DataManager[_0x2cc133(0x307)]=function(_0x28bcdf){const _0x2ffc6c=_0x2cc133,_0x43a161=_0x28bcdf?_0x28bcdf[_0x2ffc6c(0x376)]||'':'';if(_0x43a161['match'](/<INITIAL TOGGLE: ON>/i))return!![];else{if(_0x43a161[_0x2ffc6c(0x347)](/<INITIAL TOGGLE: OFF>/i))return![];}return VisuMZ[_0x2ffc6c(0x28c)][_0x2ffc6c(0x26f)][_0x2ffc6c(0x2b8)][_0x2ffc6c(0x383)];},DataManager[_0x2cc133(0x2e8)]=function(_0x1dfc71){const _0x2294ed=_0x2cc133;if(!this[_0x2294ed(0x3e3)](_0x1dfc71))return[];this[_0x2294ed(0x27f)]=this[_0x2294ed(0x27f)]||{};if(this[_0x2294ed(0x27f)][_0x1dfc71['id']]!==undefined)return this[_0x2294ed(0x27f)][_0x1dfc71['id']];let _0x3c2d94=[];const _0x5ca706=_0x1dfc71[_0x2294ed(0x376)]||'';return _0x5ca706[_0x2294ed(0x347)](/<TOGGLE EXCLU(?:DE|SION) GROUP(?:|S):[ ](.*)>/i)&&(_0x3c2d94=String(RegExp['$1'])['split'](',')[_0x2294ed(0x1de)](_0x3e3714=>_0x3e3714[_0x2294ed(0x21e)]()[_0x2294ed(0x3f0)]())),this[_0x2294ed(0x27f)][_0x1dfc71['id']]=_0x3c2d94,this[_0x2294ed(0x27f)][_0x1dfc71['id']];},TextManager[_0x2cc133(0x1a8)]=VisuMZ[_0x2cc133(0x28c)]['Settings'][_0x2cc133(0x2b8)][_0x2cc133(0x3c9)]??_0x2cc133(0x2f6),TextManager[_0x2cc133(0x224)]=VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x26f)][_0x2cc133(0x2b8)]['ToggleOn']??_0x2cc133(0x47b),TextManager[_0x2cc133(0x2a1)]=VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x26f)][_0x2cc133(0x2b8)]['ToggleOff']??_0x2cc133(0x312),TextManager[_0x2cc133(0x35c)]=VisuMZ['SkillsStatesCore'][_0x2cc133(0x26f)][_0x2cc133(0x2b8)][_0x2cc133(0x1e3)]??_0x2cc133(0x382),ColorManager['getColorDataFromPluginParameters']=function(_0x27d2a1,_0x1ea094){const _0x5cf586=_0x2cc133;return _0x1ea094=String(_0x1ea094),this[_0x5cf586(0x2a2)]=this[_0x5cf586(0x2a2)]||{},_0x1ea094[_0x5cf586(0x347)](/#(.*)/i)?this[_0x5cf586(0x2a2)][_0x27d2a1]='#%1'[_0x5cf586(0x2ad)](String(RegExp['$1'])):this['_colorCache'][_0x27d2a1]=this[_0x5cf586(0x3aa)](Number(_0x1ea094)),this['_colorCache'][_0x27d2a1];},ColorManager[_0x2cc133(0x247)]=function(_0x5c5d86){const _0x32f3a4=_0x2cc133;return _0x5c5d86=String(_0x5c5d86),_0x5c5d86[_0x32f3a4(0x347)](/#(.*)/i)?'#%1'[_0x32f3a4(0x2ad)](String(RegExp['$1'])):this[_0x32f3a4(0x3aa)](Number(_0x5c5d86));},ColorManager[_0x2cc133(0x2cf)]=function(_0x538918){const _0x59adec=_0x2cc133;if(typeof _0x538918===_0x59adec(0x359))_0x538918=$dataStates[_0x538918];const _0x421a54=_0x59adec(0x340)[_0x59adec(0x2ad)](_0x538918['id']);this[_0x59adec(0x2a2)]=this[_0x59adec(0x2a2)]||{};if(this[_0x59adec(0x2a2)][_0x421a54])return this[_0x59adec(0x2a2)][_0x421a54];const _0x37eb63=this[_0x59adec(0x2d7)](_0x538918);return this[_0x59adec(0x2e0)](_0x421a54,_0x37eb63);},ColorManager[_0x2cc133(0x2d7)]=function(_0x16e1dc){const _0x5e6559=_0x2cc133,_0xe29810=_0x16e1dc['note'];if(_0xe29810[_0x5e6559(0x347)](/<TURN COLOR:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0xe29810[_0x5e6559(0x347)](/<POSITIVE STATE>/i))return VisuMZ[_0x5e6559(0x28c)][_0x5e6559(0x26f)]['States'][_0x5e6559(0x445)];else return _0xe29810[_0x5e6559(0x347)](/<NEGATIVE STATE>/i)?VisuMZ['SkillsStatesCore']['Settings'][_0x5e6559(0x2fa)][_0x5e6559(0x27e)]:VisuMZ['SkillsStatesCore']['Settings'][_0x5e6559(0x2fa)][_0x5e6559(0x1e8)];}},ColorManager[_0x2cc133(0x23c)]=function(){const _0x5c9fbe=_0x2cc133,_0x4043c6=_0x5c9fbe(0x404);this[_0x5c9fbe(0x2a2)]=this[_0x5c9fbe(0x2a2)]||{};if(this[_0x5c9fbe(0x2a2)][_0x4043c6])return this[_0x5c9fbe(0x2a2)][_0x4043c6];const _0xca952f=VisuMZ[_0x5c9fbe(0x28c)][_0x5c9fbe(0x26f)]['Buffs'][_0x5c9fbe(0x34b)];return this['getColorDataFromPluginParameters'](_0x4043c6,_0xca952f);},ColorManager[_0x2cc133(0x1c4)]=function(){const _0x51b213=_0x2cc133,_0x76a3bd=_0x51b213(0x47f);this[_0x51b213(0x2a2)]=this[_0x51b213(0x2a2)]||{};if(this[_0x51b213(0x2a2)][_0x76a3bd])return this['_colorCache'][_0x76a3bd];const _0x2d5b23=VisuMZ['SkillsStatesCore'][_0x51b213(0x26f)][_0x51b213(0x1d6)][_0x51b213(0x18f)];return this['getColorDataFromPluginParameters'](_0x76a3bd,_0x2d5b23);},SceneManager[_0x2cc133(0x328)]=function(){const _0x2ae2b7=_0x2cc133;return this[_0x2ae2b7(0x210)]&&this[_0x2ae2b7(0x210)]['constructor']===Scene_Battle;},VisuMZ['SkillsStatesCore'][_0x2cc133(0x2df)]=BattleManager[_0x2cc133(0x291)],BattleManager[_0x2cc133(0x291)]=function(){const _0x89d740=_0x2cc133;this['updateStatesActionEnd'](),VisuMZ['SkillsStatesCore']['BattleManager_endAction'][_0x89d740(0x25a)](this);},BattleManager[_0x2cc133(0x327)]=function(){const _0xb704c5=_0x2cc133,_0x289cce=VisuMZ[_0xb704c5(0x28c)][_0xb704c5(0x26f)]['States'];if(!_0x289cce)return;if(_0x289cce[_0xb704c5(0x430)]===![])return;if(!this['_subject'])return;this['_subject'][_0xb704c5(0x327)]();},Game_Battler['prototype'][_0x2cc133(0x327)]=function(){const _0x4a7bf6=_0x2cc133;if(BattleManager['_phase']!==_0x4a7bf6(0x40b))return;if(this[_0x4a7bf6(0x1ec)]===Graphics[_0x4a7bf6(0x462)])return;this['_lastStatesActionEndFrameCount']=Graphics['frameCount'];for(const _0xdc15d2 of this[_0x4a7bf6(0x183)]){const _0x4b4ecc=$dataStates[_0xdc15d2];if(!_0x4b4ecc)continue;if(_0x4b4ecc[_0x4a7bf6(0x2de)]!==0x1)continue;this[_0x4a7bf6(0x206)][_0xdc15d2]>0x0&&this[_0x4a7bf6(0x206)][_0xdc15d2]--;}this[_0x4a7bf6(0x223)](0x1);},Game_BattlerBase['prototype'][_0x2cc133(0x365)]=function(){const _0xddd682=_0x2cc133,_0x116e1f=VisuMZ[_0xddd682(0x28c)]['Settings']['States'];for(const _0x47fdcc of this['_states']){const _0x2a4fe8=$dataStates[_0x47fdcc];if(_0x116e1f&&_0x116e1f[_0xddd682(0x430)]!==![]){if(_0x2a4fe8&&_0x2a4fe8[_0xddd682(0x2de)]===0x1)continue;}this[_0xddd682(0x206)][_0x47fdcc]>0x0&&this[_0xddd682(0x206)][_0x47fdcc]--;}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x16d)]=Game_Switches[_0x2cc133(0x320)][_0x2cc133(0x33d)],Game_Switches[_0x2cc133(0x320)][_0x2cc133(0x33d)]=function(){const _0x25841e=_0x2cc133;VisuMZ['SkillsStatesCore'][_0x25841e(0x16d)]['call'](this);const _0x4b629d=VisuMZ['SkillsStatesCore'][_0x25841e(0x26f)][_0x25841e(0x1ed)][_0x25841e(0x1f6)]??!![];if(!_0x4b629d)return;if(SceneManager[_0x25841e(0x328)]())for(const _0x5705f2 of BattleManager[_0x25841e(0x3d9)]()){if(_0x5705f2)_0x5705f2[_0x25841e(0x432)]();}},VisuMZ[_0x2cc133(0x28c)]['Game_Variables_onChange']=Game_Variables['prototype'][_0x2cc133(0x33d)],Game_Variables[_0x2cc133(0x320)][_0x2cc133(0x33d)]=function(){const _0x5157ac=_0x2cc133;VisuMZ[_0x5157ac(0x28c)][_0x5157ac(0x3ad)][_0x5157ac(0x25a)](this);const _0x2875ab=VisuMZ[_0x5157ac(0x28c)][_0x5157ac(0x26f)][_0x5157ac(0x1ed)][_0x5157ac(0x315)]??!![];if(!_0x2875ab)return;if(SceneManager[_0x5157ac(0x328)]())for(const _0x5595ad of BattleManager[_0x5157ac(0x3d9)]()){if(_0x5595ad)_0x5595ad[_0x5157ac(0x432)]();}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x174)]=Game_Action[_0x2cc133(0x320)][_0x2cc133(0x1c6)],Game_Action[_0x2cc133(0x320)][_0x2cc133(0x1c6)]=function(_0x30ca01){const _0x4bf487=_0x2cc133;VisuMZ['SkillsStatesCore']['Game_Action_applyItemUserEffect'][_0x4bf487(0x25a)](this,_0x30ca01),this[_0x4bf487(0x1c3)](_0x30ca01);},Game_Action['prototype'][_0x2cc133(0x1c3)]=function(_0x563a82){const _0x1300b8=_0x2cc133;this['applyStateCategoryRemovalEffects'](_0x563a82),this[_0x1300b8(0x440)](_0x563a82),this['applyBuffTurnManipulationEffects'](_0x563a82),this[_0x1300b8(0x438)](_0x563a82);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x38e)]=Game_Action[_0x2cc133(0x320)][_0x2cc133(0x30c)],Game_Action['prototype'][_0x2cc133(0x30c)]=function(_0x54da6c){const _0x23279e=_0x2cc133;if(this[_0x23279e(0x1df)](_0x54da6c))return!![];return VisuMZ[_0x23279e(0x28c)][_0x23279e(0x38e)][_0x23279e(0x25a)](this,_0x54da6c);},Game_Action[_0x2cc133(0x320)][_0x2cc133(0x1df)]=function(_0x1a42b8){const _0xe26c6e=_0x2cc133;if(!this[_0xe26c6e(0x20f)]())return;const _0x4c19fc=this[_0xe26c6e(0x20f)]()[_0xe26c6e(0x376)];if(_0x4c19fc['match'](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](.*)>/i)){const _0x446e6c=String(RegExp['$1']);if(_0x1a42b8[_0xe26c6e(0x1d0)](_0x446e6c))return!![];}if(_0x4c19fc[_0xe26c6e(0x347)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](.*)>/i)){const _0x1d0a63=Number(RegExp['$1']);if(_0x1a42b8[_0xe26c6e(0x1d4)](_0x1d0a63))return!![];}else{if(_0x4c19fc[_0xe26c6e(0x347)](/<SET STATE[ ](.*)[ ]TURNS:[ ](.*)>/i)){const _0x458f6e=DataManager[_0xe26c6e(0x482)](RegExp['$1']);if(_0x1a42b8[_0xe26c6e(0x1d4)](_0x458f6e))return!![];}}return![];},Game_Action[_0x2cc133(0x320)][_0x2cc133(0x171)]=function(_0x5ede57){const _0x15c452=_0x2cc133;if(_0x5ede57[_0x15c452(0x366)]()[_0x15c452(0x3e7)]<=0x0)return;const _0x30f1fc=this[_0x15c452(0x20f)]()[_0x15c452(0x376)];{const _0x2f3fa9=_0x30f1fc['match'](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/gi);if(_0x2f3fa9)for(const _0x5b5dd0 of _0x2f3fa9){_0x5b5dd0[_0x15c452(0x347)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/i);const _0x4f5f9=String(RegExp['$1']);_0x5ede57[_0x15c452(0x468)](_0x4f5f9);}}{const _0x5b1e96=_0x30f1fc['match'](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/gi);if(_0x5b1e96)for(const _0x5b62df of _0x5b1e96){_0x5b62df[_0x15c452(0x347)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/i);const _0x213ce1=String(RegExp['$1']),_0x3e2b16=Number(RegExp['$2']);_0x5ede57[_0x15c452(0x281)](_0x213ce1,_0x3e2b16);}}},Game_Action[_0x2cc133(0x320)]['applyStateTurnManipulationEffects']=function(_0x1047f5){const _0x1930b1=_0x2cc133,_0x4ad037=this['item']()['note'],_0x33a1bd=_0x4ad037[_0x1930b1(0x347)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/gi);if(_0x33a1bd)for(const _0x262300 of _0x33a1bd){let _0x4d954f=0x0,_0x69a598=0x0;if(_0x262300[_0x1930b1(0x347)](/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i))_0x4d954f=Number(RegExp['$1']),_0x69a598=Number(RegExp['$2']);else _0x262300[_0x1930b1(0x347)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)&&(_0x4d954f=DataManager[_0x1930b1(0x482)](RegExp['$1']),_0x69a598=Number(RegExp['$2']));_0x1047f5[_0x1930b1(0x26d)](_0x4d954f,_0x69a598),this[_0x1930b1(0x3ce)](_0x1047f5);}const _0x3963c5=_0x4ad037[_0x1930b1(0x347)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/gi);if(_0x3963c5)for(const _0x4be5fd of _0x3963c5){let _0x10b29d=0x0,_0x5a4ef8=0x0;if(_0x4be5fd[_0x1930b1(0x347)](/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i))_0x10b29d=Number(RegExp['$1']),_0x5a4ef8=Number(RegExp['$2']);else _0x4be5fd[_0x1930b1(0x347)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)&&(_0x10b29d=DataManager[_0x1930b1(0x482)](RegExp['$1']),_0x5a4ef8=Number(RegExp['$2']));_0x1047f5[_0x1930b1(0x18b)](_0x10b29d,_0x5a4ef8),this[_0x1930b1(0x3ce)](_0x1047f5);}},Game_Action['prototype'][_0x2cc133(0x45b)]=function(_0x574034){const _0x2e9361=_0x2cc133,_0x94c02e=['MAXHP',_0x2e9361(0x1f5),_0x2e9361(0x2a9),_0x2e9361(0x3a7),_0x2e9361(0x1c2),'MDF','AGI','LUK'],_0x14c065=this[_0x2e9361(0x20f)]()[_0x2e9361(0x376)],_0x56bb39=_0x14c065[_0x2e9361(0x347)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/gi);if(_0x56bb39)for(const _0x4b6b8d of _0x56bb39){_0x4b6b8d[_0x2e9361(0x347)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);const _0x2df1cf=_0x94c02e[_0x2e9361(0x1ae)](String(RegExp['$1'])[_0x2e9361(0x21e)]()),_0x423ac4=Number(RegExp['$2']);_0x2df1cf>=0x0&&(_0x574034[_0x2e9361(0x1fd)](_0x2df1cf,_0x423ac4),this[_0x2e9361(0x3ce)](_0x574034));}const _0x4d1561=_0x14c065[_0x2e9361(0x347)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x4d1561)for(const _0x2857d2 of _0x56bb39){_0x2857d2[_0x2e9361(0x347)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x5b63d5=_0x94c02e['indexOf'](String(RegExp['$1'])['toUpperCase']()),_0x599f93=Number(RegExp['$2']);_0x5b63d5>=0x0&&(_0x574034[_0x2e9361(0x32c)](_0x5b63d5,_0x599f93),this[_0x2e9361(0x3ce)](_0x574034));}},Game_Action[_0x2cc133(0x320)]['applyDebuffTurnManipulationEffects']=function(_0x3e295d){const _0x45a087=_0x2cc133,_0x3d01e3=[_0x45a087(0x484),_0x45a087(0x1f5),_0x45a087(0x2a9),'DEF',_0x45a087(0x1c2),_0x45a087(0x1d2),'AGI','LUK'],_0x19ef42=this[_0x45a087(0x20f)]()[_0x45a087(0x376)],_0x333208=_0x19ef42[_0x45a087(0x347)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/gi);if(_0x333208)for(const _0x337d42 of _0x333208){_0x337d42[_0x45a087(0x347)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/i);const _0x15a7d4=_0x3d01e3[_0x45a087(0x1ae)](String(RegExp['$1'])[_0x45a087(0x21e)]()),_0x3bd9f6=Number(RegExp['$2']);_0x15a7d4>=0x0&&(_0x3e295d[_0x45a087(0x41e)](_0x15a7d4,_0x3bd9f6),this['makeSuccess'](_0x3e295d));}const _0x2874bf=_0x19ef42[_0x45a087(0x347)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x2874bf)for(const _0x3a885d of _0x333208){_0x3a885d['match'](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x59f206=_0x3d01e3[_0x45a087(0x1ae)](String(RegExp['$1'])[_0x45a087(0x21e)]()),_0x43eb10=Number(RegExp['$2']);_0x59f206>=0x0&&(_0x3e295d[_0x45a087(0x341)](_0x59f206,_0x43eb10),this[_0x45a087(0x3ce)](_0x3e295d));}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x25f)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x282)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x282)]=function(){const _0x4ecc35=_0x2cc133;this[_0x4ecc35(0x44d)]={},this[_0x4ecc35(0x408)](),VisuMZ[_0x4ecc35(0x28c)][_0x4ecc35(0x25f)]['call'](this);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x408)]=function(){const _0x923c3f=_0x2cc133;this[_0x923c3f(0x289)]='',this['_stateData']={},this[_0x923c3f(0x437)]={},this[_0x923c3f(0x41f)]={},this[_0x923c3f(0x278)]={};},Game_BattlerBase['prototype'][_0x2cc133(0x39b)]=function(_0x24b0fe){const _0x1f4401=_0x2cc133;return this[_0x1f4401(0x44d)]=this[_0x1f4401(0x44d)]||{},this['_cache'][_0x24b0fe]!==undefined;},VisuMZ['SkillsStatesCore'][_0x2cc133(0x32d)]=Game_BattlerBase['prototype'][_0x2cc133(0x432)],Game_BattlerBase[_0x2cc133(0x320)]['refresh']=function(){const _0x23f8ef=_0x2cc133;this[_0x23f8ef(0x44d)]={},VisuMZ['SkillsStatesCore'][_0x23f8ef(0x32d)][_0x23f8ef(0x25a)](this);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x20e)]=Game_BattlerBase['prototype'][_0x2cc133(0x371)],Game_BattlerBase['prototype'][_0x2cc133(0x371)]=function(_0x1c1452){const _0x2cbcf9=_0x2cc133;let _0x1da105=this[_0x2cbcf9(0x1d4)](_0x1c1452);VisuMZ[_0x2cbcf9(0x28c)][_0x2cbcf9(0x20e)][_0x2cbcf9(0x25a)](this,_0x1c1452);if(_0x1da105&&!this[_0x2cbcf9(0x1d4)](_0x1c1452))this[_0x2cbcf9(0x274)](_0x1c1452);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x274)]=function(_0x16109c){const _0x26a137=_0x2cc133;this[_0x26a137(0x172)](_0x16109c),this['clearStateDisplay'](_0x16109c);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x176)]=Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x345)],Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x345)]=function(){const _0x3cba95=_0x2cc133;VisuMZ[_0x3cba95(0x28c)][_0x3cba95(0x176)]['call'](this),this['clearAllStateOrigins']();},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2be)]=Game_BattlerBase['prototype'][_0x2cc133(0x2ef)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2ef)]=function(_0x1f34ad){const _0x14e03f=_0x2cc133,_0x59bfaa=$dataStates[_0x1f34ad],_0x180bdf=this['stateTurns'](_0x1f34ad),_0x41132c=this[_0x14e03f(0x3b0)](_0x59bfaa)[_0x14e03f(0x351)]()[_0x14e03f(0x3f0)]();switch(_0x41132c){case _0x14e03f(0x22d):if(_0x180bdf<=0x0)this[_0x14e03f(0x3e2)](_0x1f34ad);break;case _0x14e03f(0x259):this[_0x14e03f(0x3e2)](_0x1f34ad);break;case _0x14e03f(0x276):this['prepareResetStateCounts'](_0x1f34ad),this[_0x14e03f(0x206)][_0x1f34ad]=Math[_0x14e03f(0x2a4)](this['_stateTurns'][_0x1f34ad],_0x180bdf);break;case _0x14e03f(0x24c):this[_0x14e03f(0x3e2)](_0x1f34ad),this[_0x14e03f(0x206)][_0x1f34ad]+=_0x180bdf;break;default:this['prepareResetStateCounts'](_0x1f34ad);break;}if(this[_0x14e03f(0x1d4)](_0x1f34ad)){const _0x14ea9f=DataManager[_0x14e03f(0x21f)](_0x1f34ad);this[_0x14e03f(0x206)][_0x1f34ad]=this[_0x14e03f(0x206)][_0x1f34ad][_0x14e03f(0x22c)](0x0,_0x14ea9f);}},Game_BattlerBase['prototype'][_0x2cc133(0x3e2)]=function(_0x39d4b1){const _0x4f4a7d=_0x2cc133;VisuMZ['SkillsStatesCore'][_0x4f4a7d(0x2be)][_0x4f4a7d(0x25a)](this,_0x39d4b1);},Game_BattlerBase[_0x2cc133(0x320)]['getStateReapplyRulings']=function(_0x3baeef){const _0x2dbbfc=_0x2cc133,_0x52948d=_0x3baeef['note'];return _0x52948d[_0x2dbbfc(0x347)](/<REAPPLY RULES:[ ](.*)>/i)?String(RegExp['$1']):VisuMZ['SkillsStatesCore']['Settings'][_0x2dbbfc(0x2fa)][_0x2dbbfc(0x2d3)];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3ef)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x3fe)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x3fe)]=function(_0x558d2b,_0x4d456d){const _0x2d5b0f=_0x2cc133,_0x5cf6bf=VisuMZ['SkillsStatesCore'][_0x2d5b0f(0x26f)]['Buffs']['ReapplyRules'],_0x5de36f=this[_0x2d5b0f(0x1e1)](_0x558d2b);switch(_0x5cf6bf){case _0x2d5b0f(0x22d):if(_0x5de36f<=0x0)this[_0x2d5b0f(0x23e)][_0x558d2b]=_0x4d456d;break;case _0x2d5b0f(0x259):this['_buffTurns'][_0x558d2b]=_0x4d456d;break;case _0x2d5b0f(0x276):this[_0x2d5b0f(0x23e)][_0x558d2b]=Math[_0x2d5b0f(0x2a4)](_0x5de36f,_0x4d456d);break;case'add':this[_0x2d5b0f(0x23e)][_0x558d2b]+=_0x4d456d;break;default:VisuMZ['SkillsStatesCore'][_0x2d5b0f(0x3ef)][_0x2d5b0f(0x25a)](this,_0x558d2b,_0x4d456d);break;}const _0x3c7c77=VisuMZ[_0x2d5b0f(0x28c)][_0x2d5b0f(0x26f)]['Buffs'][_0x2d5b0f(0x406)];this[_0x2d5b0f(0x23e)][_0x558d2b]=this['_buffTurns'][_0x558d2b][_0x2d5b0f(0x22c)](0x0,_0x3c7c77);},Game_BattlerBase['prototype'][_0x2cc133(0x2ab)]=function(){const _0x1ffee2=_0x2cc133;if(this['_cache']['groupDefeat']!==undefined)return this[_0x1ffee2(0x44d)][_0x1ffee2(0x2fe)];this[_0x1ffee2(0x44d)]['groupDefeat']=![];const _0x506f7c=this[_0x1ffee2(0x366)]();for(const _0xeb276c of _0x506f7c){if(!_0xeb276c)continue;if(_0xeb276c[_0x1ffee2(0x376)][_0x1ffee2(0x347)](/<GROUP DEFEAT>/i)){this[_0x1ffee2(0x44d)][_0x1ffee2(0x2fe)]=!![];break;}}return this[_0x1ffee2(0x44d)]['groupDefeat'];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x42b)]=Game_Unit[_0x2cc133(0x320)]['deadMembers'],Game_Unit[_0x2cc133(0x320)][_0x2cc133(0x41d)]=function(){const _0x5a15cc=_0x2cc133;let _0x26507c=VisuMZ['SkillsStatesCore']['Game_Unit_deadMembers'][_0x5a15cc(0x25a)](this);return BattleManager['_endingBattle']&&(_0x26507c=_0x26507c[_0x5a15cc(0x422)](this[_0x5a15cc(0x399)]()[_0x5a15cc(0x2e4)](_0x412427=>_0x412427['isGroupDefeatStateAffected']()))),_0x26507c;},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2ce)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x433)],Game_BattlerBase['prototype']['clearStates']=function(){const _0x18966e=_0x2cc133;this[_0x18966e(0x17c)]()!==''?this[_0x18966e(0x1f0)]():(VisuMZ[_0x18966e(0x28c)][_0x18966e(0x2ce)]['call'](this),this[_0x18966e(0x408)]());},Game_Actor[_0x2cc133(0x320)]['clearStates']=function(){const _0x4433d1=_0x2cc133;this[_0x4433d1(0x439)]=this[_0x4433d1(0x439)]||{},Game_Battler[_0x4433d1(0x320)]['clearStates']['call'](this);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1f0)]=function(){const _0x4d9b75=_0x2cc133,_0x117b4c=this['states']();for(const _0xdd14ac of _0x117b4c){if(_0xdd14ac&&this['canClearState'](_0xdd14ac))this[_0x4d9b75(0x371)](_0xdd14ac['id']);}this['_cache']={};},Game_BattlerBase['prototype']['canClearState']=function(_0x33ba17){const _0x1f45cc=_0x2cc133,_0x5e7729=this['getStateRetainType']();if(_0x5e7729!==''){const _0x4a25f8=_0x33ba17['note'];if(_0x5e7729===_0x1f45cc(0x226)&&_0x4a25f8[_0x1f45cc(0x347)](/<NO DEATH CLEAR>/i))return![];if(_0x5e7729===_0x1f45cc(0x2aa)&&_0x4a25f8[_0x1f45cc(0x347)](/<NO RECOVER ALL CLEAR>/i))return![];}return this[_0x1f45cc(0x1d4)](_0x33ba17['id']);},Game_BattlerBase[_0x2cc133(0x320)]['getStateRetainType']=function(){return this['_stateRetainType'];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x435)]=function(_0x146baf){const _0x406c95=_0x2cc133;this[_0x406c95(0x289)]=_0x146baf;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x38b)]=function(){const _0x9f8960=_0x2cc133;this[_0x9f8960(0x289)]='';},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x28f)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x319)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x319)]=function(){const _0x2618ef=_0x2cc133;this['setStateRetainType'](_0x2618ef(0x226)),VisuMZ[_0x2618ef(0x28c)][_0x2618ef(0x28f)][_0x2618ef(0x25a)](this),this[_0x2618ef(0x38b)]();},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2d6)]=Game_BattlerBase['prototype']['recoverAll'],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x19d)]=function(){const _0x37b309=_0x2cc133;this[_0x37b309(0x435)](_0x37b309(0x2aa)),VisuMZ[_0x37b309(0x28c)][_0x37b309(0x2d6)][_0x37b309(0x25a)](this),this['clearStateRetainType']();},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2f2)]=function(_0x26843a,_0x5bc33d,_0x4a3831){return _0x5bc33d;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1e9)]=function(_0x6bf9b4){const _0x15053f=_0x2cc133;for(settings of VisuMZ['SkillsStatesCore']['Settings'][_0x15053f(0x3c4)]){let _0x3a8656=settings[_0x15053f(0x36f)][_0x15053f(0x25a)](this,_0x6bf9b4);_0x3a8656=this[_0x15053f(0x2f2)](_0x6bf9b4,_0x3a8656,settings);if(!settings['CanPayJS'][_0x15053f(0x25a)](this,_0x6bf9b4,_0x3a8656))return![];}return!![];},Game_BattlerBase[_0x2cc133(0x320)]['paySkillCost']=function(_0x565d64){const _0x4e9db3=_0x2cc133;for(settings of VisuMZ[_0x4e9db3(0x28c)][_0x4e9db3(0x26f)][_0x4e9db3(0x3c4)]){let _0x54b2cd=settings['CalcJS']['call'](this,_0x565d64);_0x54b2cd=this[_0x4e9db3(0x2f2)](_0x565d64,_0x54b2cd,settings),settings[_0x4e9db3(0x250)][_0x4e9db3(0x25a)](this,_0x565d64,_0x54b2cd);}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x191)]=Game_BattlerBase['prototype']['meetsSkillConditions'],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2da)]=function(_0x543cf8){const _0x3cdedf=_0x2cc133;if(!_0x543cf8)return![];if(!VisuMZ['SkillsStatesCore']['Game_BattlerBase_meetsSkillConditions']['call'](this,_0x543cf8))return![];if(!this[_0x3cdedf(0x483)](_0x543cf8))return![];if(!this[_0x3cdedf(0x22a)](_0x543cf8))return![];if(!this[_0x3cdedf(0x230)](_0x543cf8))return![];return!![];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x483)]=function(_0x1710ec){const _0xa0b855=_0x2cc133;if(!this[_0xa0b855(0x25c)](_0x1710ec))return![];return!![];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x25c)]=function(_0xb8fe1b){const _0x1460e8=_0x2cc133,_0x4ebe91=_0xb8fe1b['note'];if(_0x4ebe91[_0x1460e8(0x347)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x726fe6=JSON[_0x1460e8(0x3fa)]('['+RegExp['$1'][_0x1460e8(0x347)](/\d+/g)+']');for(const _0x21a987 of _0x726fe6){if(!$gameSwitches[_0x1460e8(0x1ca)](_0x21a987))return![];}return!![];}if(_0x4ebe91[_0x1460e8(0x347)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2e26b2=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x5aaa32 of _0x2e26b2){if(!$gameSwitches[_0x1460e8(0x1ca)](_0x5aaa32))return![];}return!![];}if(_0x4ebe91[_0x1460e8(0x347)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x8b8b72=JSON[_0x1460e8(0x3fa)]('['+RegExp['$1'][_0x1460e8(0x347)](/\d+/g)+']');for(const _0x43b413 of _0x8b8b72){if($gameSwitches[_0x1460e8(0x1ca)](_0x43b413))return!![];}return![];}if(_0x4ebe91[_0x1460e8(0x347)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1aa8a1=JSON[_0x1460e8(0x3fa)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x135c1d of _0x1aa8a1){if(!$gameSwitches['value'](_0x135c1d))return!![];}return![];}if(_0x4ebe91['match'](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xb2454b=JSON[_0x1460e8(0x3fa)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x260f8e of _0xb2454b){if(!$gameSwitches[_0x1460e8(0x1ca)](_0x260f8e))return!![];}return![];}if(_0x4ebe91[_0x1460e8(0x347)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x54ed2a=JSON[_0x1460e8(0x3fa)]('['+RegExp['$1'][_0x1460e8(0x347)](/\d+/g)+']');for(const _0x1daac9 of _0x54ed2a){if($gameSwitches['value'](_0x1daac9))return![];}return!![];}return!![];},Game_BattlerBase['prototype']['meetsSkillConditionsEnableJS']=function(_0x5fa2fd){const _0x4bb0fc=_0x2cc133,_0x17ac1f=_0x5fa2fd[_0x4bb0fc(0x376)],_0x19bb5a=VisuMZ['SkillsStatesCore']['skillEnableJS'];return _0x19bb5a[_0x5fa2fd['id']]?_0x19bb5a[_0x5fa2fd['id']][_0x4bb0fc(0x25a)](this,_0x5fa2fd):!![];},Game_BattlerBase['prototype']['meetsSkillConditionsGlobalJS']=function(_0x5191bf){const _0x3d80fc=_0x2cc133;return VisuMZ[_0x3d80fc(0x28c)]['Settings'][_0x3d80fc(0x1a4)][_0x3d80fc(0x3b6)][_0x3d80fc(0x25a)](this,_0x5191bf);},VisuMZ['SkillsStatesCore'][_0x2cc133(0x22b)]=Game_BattlerBase['prototype'][_0x2cc133(0x411)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x411)]=function(_0x34ddd4){const _0x36ee1d=_0x2cc133;for(settings of VisuMZ[_0x36ee1d(0x28c)][_0x36ee1d(0x26f)]['Costs']){if(settings[_0x36ee1d(0x18c)]['toUpperCase']()==='MP'){let _0x372992=settings[_0x36ee1d(0x36f)][_0x36ee1d(0x25a)](this,_0x34ddd4);return _0x372992=this['adjustSkillCost'](_0x34ddd4,_0x372992,settings),_0x372992;}}return VisuMZ[_0x36ee1d(0x28c)][_0x36ee1d(0x22b)]['call'](this,_0x34ddd4);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2ed)]=Game_BattlerBase['prototype'][_0x2cc133(0x21b)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x21b)]=function(_0x48c35c){const _0x105cc1=_0x2cc133;for(settings of VisuMZ[_0x105cc1(0x28c)]['Settings']['Costs']){if(settings[_0x105cc1(0x18c)][_0x105cc1(0x21e)]()==='TP'){let _0x24757c=settings[_0x105cc1(0x36f)][_0x105cc1(0x25a)](this,_0x48c35c);return _0x24757c=this['adjustSkillCost'](_0x48c35c,_0x24757c,settings),_0x24757c;}}return VisuMZ[_0x105cc1(0x28c)][_0x105cc1(0x2ed)][_0x105cc1(0x25a)](this,_0x48c35c);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x288)]=function(_0x235e46){const _0x19cc13=_0x2cc133;if(typeof _0x235e46===_0x19cc13(0x359))_0x235e46=$dataStates[_0x235e46];return this['states']()['includes'](_0x235e46);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x357)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x366)],Game_BattlerBase[_0x2cc133(0x320)]['states']=function(){const _0xcdd60c=_0x2cc133;let _0x3d561e=VisuMZ['SkillsStatesCore'][_0xcdd60c(0x357)][_0xcdd60c(0x25a)](this);if($gameTemp[_0xcdd60c(0x287)])return _0x3d561e;return $gameTemp['_checkingPassiveStates']=!![],this[_0xcdd60c(0x317)](_0x3d561e),$gameTemp['_checkingPassiveStates']=undefined,_0x3d561e;},Game_BattlerBase['prototype'][_0x2cc133(0x317)]=function(_0x331bf1){const _0x489d06=_0x2cc133,_0x2cf4c6=this[_0x489d06(0x1dc)]();for(state of _0x2cf4c6){if(!state)continue;if(!this[_0x489d06(0x313)](state)&&_0x331bf1[_0x489d06(0x19c)](state))continue;_0x331bf1[_0x489d06(0x332)](state);}_0x2cf4c6[_0x489d06(0x3e7)]>0x0&&_0x331bf1[_0x489d06(0x42c)]((_0x22dc8b,_0x4bea37)=>{const _0x4102dd=_0x489d06,_0x4920e3=_0x22dc8b[_0x4102dd(0x36a)],_0x5c0673=_0x4bea37[_0x4102dd(0x36a)];if(_0x4920e3!==_0x5c0673)return _0x5c0673-_0x4920e3;return _0x22dc8b-_0x4bea37;});},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x313)]=function(_0x2eebad){const _0x2997fa=_0x2cc133;return _0x2eebad[_0x2997fa(0x376)]['match'](/<PASSIVE STACKABLE>/i);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3d0)]=Game_BattlerBase[_0x2cc133(0x320)]['traitsSet'],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x25b)]=function(_0x2c2cad){const _0x2a54fc=_0x2cc133;this['_checkingTraitsSetSkillsStatesCore']=!![];let _0x28ee37=VisuMZ[_0x2a54fc(0x28c)][_0x2a54fc(0x3d0)][_0x2a54fc(0x25a)](this,_0x2c2cad);return this[_0x2a54fc(0x481)]=undefined,_0x28ee37;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x236)]=function(){const _0x3092a6=_0x2cc133;let _0x5f2baf=[];this[_0x3092a6(0x2fc)]=this['_passiveStateResults']||{};for(;;){_0x5f2baf=[];let _0x156f85=!![];for(const _0x16009d of this[_0x3092a6(0x44d)][_0x3092a6(0x1dc)]){const _0x1e8e39=$dataStates[_0x16009d];if(!_0x1e8e39)continue;let _0x548ed2=this[_0x3092a6(0x47e)](_0x1e8e39);this[_0x3092a6(0x2fc)][_0x16009d]!==_0x548ed2&&(_0x156f85=![],this[_0x3092a6(0x2fc)][_0x16009d]=_0x548ed2);if(!_0x548ed2)continue;_0x5f2baf['push'](_0x1e8e39);}if(_0x156f85)break;else{if(!this['_checkingTraitsSetSkillsStatesCore'])this[_0x3092a6(0x432)]();this[_0x3092a6(0x409)]();}}return _0x5f2baf;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x47e)]=function(_0x5395c2){const _0x1ef0c8=_0x2cc133;if(!this[_0x1ef0c8(0x178)](_0x5395c2))return![];if(!this[_0x1ef0c8(0x1ab)](_0x5395c2))return![];if(!this['meetsPassiveStateConditionJS'](_0x5395c2))return![];if(!this[_0x1ef0c8(0x22e)](_0x5395c2))return![];return!![];},Game_BattlerBase['prototype']['meetsPassiveStateConditionClasses']=function(_0x30a9b9){return!![];},Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x178)]=function(_0x4940f1){const _0x56aa5c=_0x2cc133,_0x8f16cd=DataManager[_0x56aa5c(0x216)](_0x4940f1);if(_0x8f16cd[_0x56aa5c(0x458)]['length']>0x0){const _0x3e2e4a=_0x8f16cd[_0x56aa5c(0x458)];if(!_0x3e2e4a['includes'](this[_0x56aa5c(0x458)]()))return![];}if(_0x8f16cd[_0x56aa5c(0x405)]['length']>0x0){const _0x2ba224=_0x8f16cd['multiClass'];let _0x578da6=[this[_0x56aa5c(0x458)]()];Imported[_0x56aa5c(0x295)]&&this[_0x56aa5c(0x311)]&&(_0x578da6=this['multiclasses']());if(_0x2ba224[_0x56aa5c(0x2e4)](_0x21b04a=>_0x578da6[_0x56aa5c(0x19c)](_0x21b04a))[_0x56aa5c(0x3e7)]<=0x0)return![];}return Game_BattlerBase[_0x56aa5c(0x320)][_0x56aa5c(0x178)][_0x56aa5c(0x25a)](this,_0x4940f1);},DataManager[_0x2cc133(0x216)]=function(_0x5a0c0d){const _0x4dc50e=_0x2cc133,_0xb8f5={'currentClass':[],'multiClass':[]};if(!_0x5a0c0d)return _0xb8f5;this[_0x4dc50e(0x218)]=this[_0x4dc50e(0x218)]||{};if(this[_0x4dc50e(0x218)][_0x5a0c0d['id']]!==undefined)return this[_0x4dc50e(0x218)][_0x5a0c0d['id']];const _0x26cb8c=_0x5a0c0d[_0x4dc50e(0x376)]||'';if(_0x26cb8c[_0x4dc50e(0x347)](/<PASSIVE CONDITION[ ](?:CLASS|CLASSES):[ ](.*)>/i)){const _0x514f09=String(RegExp['$1'])[_0x4dc50e(0x44c)](',')['map'](_0x4a5a85=>_0x4a5a85[_0x4dc50e(0x3f0)]());_0xb8f5[_0x4dc50e(0x458)]=VisuMZ[_0x4dc50e(0x28c)]['ParseClassIDs'](_0x514f09);}if(_0x26cb8c[_0x4dc50e(0x347)](/<PASSIVE CONDITION[ ](?:MULTICLASS|MULTICLASSES):[ ](.*)>/i)){const _0x418b67=String(RegExp['$1'])[_0x4dc50e(0x44c)](',')[_0x4dc50e(0x1de)](_0x45a1ee=>_0x45a1ee[_0x4dc50e(0x3f0)]());_0xb8f5[_0x4dc50e(0x405)]=VisuMZ['SkillsStatesCore'][_0x4dc50e(0x27c)](_0x418b67);}return this['_cache_getPassiveStateConditionClassesData'][_0x5a0c0d['id']]=_0xb8f5,this[_0x4dc50e(0x218)][_0x5a0c0d['id']];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x27c)]=function(_0x3b8b87){const _0x36a7b6=_0x2cc133,_0x1bc5b4=[];for(let _0x343b88 of _0x3b8b87){_0x343b88=(String(_0x343b88)||'')[_0x36a7b6(0x3f0)]();const _0xfd884a=/^\d+$/['test'](_0x343b88);_0xfd884a?_0x1bc5b4[_0x36a7b6(0x332)](Number(_0x343b88)):_0x1bc5b4[_0x36a7b6(0x332)](DataManager[_0x36a7b6(0x16b)](_0x343b88));}return _0x1bc5b4[_0x36a7b6(0x1de)](_0x5c8107=>$dataClasses[Number(_0x5c8107)])[_0x36a7b6(0x374)](null);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1ab)]=function(_0x470461){const _0x35cfe3=_0x2cc133,_0x57b553=DataManager[_0x35cfe3(0x1fc)](_0x470461);if(_0x57b553[_0x35cfe3(0x451)]&&_0x57b553[_0x35cfe3(0x451)][_0x35cfe3(0x3e7)]>0x0){const _0x12065c=_0x57b553[_0x35cfe3(0x451)];for(const _0x34aa08 of _0x12065c){if(!$gameSwitches[_0x35cfe3(0x1ca)](_0x34aa08))return![];}}if(_0x57b553[_0x35cfe3(0x414)]&&_0x57b553[_0x35cfe3(0x414)][_0x35cfe3(0x3e7)]>0x0){const _0x3d1532=_0x57b553[_0x35cfe3(0x414)];let _0x545265=!![];for(const _0x32da1e of _0x3d1532){if($gameSwitches[_0x35cfe3(0x1ca)](_0x32da1e)){_0x545265=![];break;}}if(_0x545265)return![];}if(_0x57b553[_0x35cfe3(0x335)]&&_0x57b553[_0x35cfe3(0x335)][_0x35cfe3(0x3e7)]>0x0){const _0x4b72e6=_0x57b553['allSwitchOff'];for(const _0x54b96b of _0x4b72e6){if($gameSwitches[_0x35cfe3(0x1ca)](_0x54b96b))return![];}}if(_0x57b553['anySwitchOff']&&_0x57b553['anySwitchOff']['length']>0x0){const _0x2368c5=_0x57b553['anySwitchOff'];let _0x531a2b=!![];for(const _0x5b2076 of _0x2368c5){if(!$gameSwitches[_0x35cfe3(0x1ca)](_0x5b2076)){_0x531a2b=![];break;}}if(_0x531a2b)return![];}return!![];},DataManager[_0x2cc133(0x1fc)]=function(_0x29fe18){const _0x2ffc4b=_0x2cc133;let _0x17a53c={'allSwitchOn':[],'anySwitchOn':[],'allSwitchOff':[],'anySwitchOff':[]};if(!_0x29fe18)return _0x17a53c;const _0x5c5df0=_0x29fe18['id'];this['_cache_getPassiveStateConditionSwitchData']=this[_0x2ffc4b(0x3df)]||{};if(this[_0x2ffc4b(0x3df)][_0x5c5df0]!==undefined)return this['_cache_getPassiveStateConditionSwitchData'][_0x5c5df0];const _0x5daec0=_0x29fe18[_0x2ffc4b(0x376)]||'';return _0x5daec0[_0x2ffc4b(0x347)](/PASSIVE CONDITION(?:| ALL)[ ](?:SWITCH|SWITCHES)[ ]ON:[ ](.*)>/i)&&(_0x17a53c[_0x2ffc4b(0x451)]=String(RegExp['$1'])[_0x2ffc4b(0x44c)](',')[_0x2ffc4b(0x1de)](_0x431c3b=>Number(_0x431c3b))),_0x5daec0[_0x2ffc4b(0x347)](/PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]ON:[ ](.*)>/i)&&(_0x17a53c[_0x2ffc4b(0x414)]=String(RegExp['$1'])[_0x2ffc4b(0x44c)](',')['map'](_0x53dce2=>Number(_0x53dce2))),_0x5daec0[_0x2ffc4b(0x347)](/PASSIVE CONDITION(?:| ALL)[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ](.*)>/i)&&(_0x17a53c[_0x2ffc4b(0x335)]=String(RegExp['$1'])[_0x2ffc4b(0x44c)](',')[_0x2ffc4b(0x1de)](_0x1128f8=>Number(_0x1128f8))),_0x5daec0[_0x2ffc4b(0x347)](/PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ](.*)>/i)&&(_0x17a53c[_0x2ffc4b(0x254)]=String(RegExp['$1'])['split'](',')['map'](_0x3a3f61=>Number(_0x3a3f61))),this[_0x2ffc4b(0x3df)][_0x5c5df0]=_0x17a53c,this['_cache_getPassiveStateConditionSwitchData'][_0x5c5df0];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x325)]=function(_0x318368){const _0x2f0c7a=_0x2cc133,_0x40d65c=VisuMZ['SkillsStatesCore'][_0x2f0c7a(0x443)];if(_0x40d65c[_0x318368['id']]&&!_0x40d65c[_0x318368['id']][_0x2f0c7a(0x25a)](this,_0x318368))return![];return!![];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x22e)]=function(_0x2c35b4){const _0x4e3492=_0x2cc133;return VisuMZ[_0x4e3492(0x28c)][_0x4e3492(0x26f)][_0x4e3492(0x1ed)][_0x4e3492(0x190)][_0x4e3492(0x25a)](this,_0x2c35b4);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1dc)]=function(){const _0x4354b8=_0x2cc133;if(this[_0x4354b8(0x39b)](_0x4354b8(0x1dc)))return this[_0x4354b8(0x236)]();if(this[_0x4354b8(0x3d5)])return[];return this[_0x4354b8(0x3d5)]=!![],this['createPassiveStatesCache'](),this[_0x4354b8(0x3d5)]=undefined,this[_0x4354b8(0x236)]();},Game_BattlerBase['prototype'][_0x2cc133(0x409)]=function(){const _0x1d672e=_0x2cc133;this[_0x1d672e(0x3d5)]=!![],this['_cache'][_0x1d672e(0x1dc)]=[],this[_0x1d672e(0x233)](),this['addPassiveStatesByNotetag'](),this['addPassiveStatesByPluginParameters'](),Game_BattlerBase[_0x1d672e(0x23f)]&&this[_0x1d672e(0x1b4)](),this[_0x1d672e(0x44d)]['passiveStates']=this['_cache']['passiveStates'][_0x1d672e(0x42c)]((_0x7bd212,_0x3370be)=>_0x7bd212-_0x3370be),this['_checkingVisuMzPassiveStateObjects']=undefined;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x233)]=function(){const _0x404486=_0x2cc133;if(Imported[_0x404486(0x3b7)])this[_0x404486(0x187)]();},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2b6)]=function(){return[];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x3a2)]=function(){const _0x1b9f03=_0x2cc133,_0x337afd=this['_cache'][_0x1b9f03(0x1dc)]||[],_0x2dc18a=this['passiveStateObjects']();this[_0x1b9f03(0x44d)][_0x1b9f03(0x1dc)]=_0x337afd||[];for(const _0x1cfd13 of _0x2dc18a){if(!_0x1cfd13)continue;const _0x27f66a=DataManager[_0x1b9f03(0x459)](_0x1cfd13);for(const _0x29f795 of _0x27f66a){this['_cache'][_0x1b9f03(0x1dc)]['push'](_0x29f795);}}},DataManager[_0x2cc133(0x459)]=function(_0x18ed41){const _0x331bfb=_0x2cc133;if(!_0x18ed41)return[];const _0x1bd2fa=VisuMZ[_0x331bfb(0x28c)][_0x331bfb(0x3bb)](_0x18ed41,_0x331bfb(0x2f1));this[_0x331bfb(0x448)]=this['_cache_getPassiveStatesFromObj']||{};if(this['_cache_getPassiveStatesFromObj'][_0x1bd2fa]!==undefined)return this[_0x331bfb(0x448)][_0x1bd2fa];const _0x261aee=[],_0x48524d=_0x18ed41[_0x331bfb(0x376)]||'',_0x54b4be=/<PASSIVE (?:STATE|STATES):[ ](.*)>/gi,_0x541b4=_0x48524d['match'](_0x54b4be);if(_0x541b4)for(const _0x3aaa0d of _0x541b4){_0x3aaa0d[_0x331bfb(0x347)](_0x54b4be);const _0x2bfa95=String(RegExp['$1'])['split'](',')['map'](_0xdb8da1=>_0xdb8da1[_0x331bfb(0x3f0)]());for(const _0x5326ba of _0x2bfa95){const _0x251d9f=/^\d+$/[_0x331bfb(0x373)](_0x5326ba);let _0x2bce60=0x0;_0x251d9f?_0x2bce60=Number(_0x5326ba):_0x2bce60=DataManager['getStateIdWithName'](_0x5326ba),_0x2bce60&&_0x261aee['push'](_0x2bce60);}}return this['_cache_getPassiveStatesFromObj'][_0x1bd2fa]=_0x261aee,this[_0x331bfb(0x448)][_0x1bd2fa];},Game_BattlerBase['prototype'][_0x2cc133(0x486)]=function(){const _0x7cbb10=_0x2cc133,_0x326bc9=VisuMZ['SkillsStatesCore'][_0x7cbb10(0x26f)][_0x7cbb10(0x1ed)][_0x7cbb10(0x346)];this['_cache']['passiveStates']=this[_0x7cbb10(0x44d)]['passiveStates'][_0x7cbb10(0x422)](_0x326bc9);},Game_BattlerBase[_0x2cc133(0x23f)]=![],Scene_Boot['prototype'][_0x2cc133(0x429)]=function(){const _0x5d3b26=_0x2cc133,_0xa34455=[$dataActors,$dataClasses,$dataSkills,$dataWeapons,$dataArmors,$dataEnemies];for(const _0x3d5560 of _0xa34455){for(const _0x20cf2a of _0x3d5560){if(!_0x20cf2a)continue;const _0x226999=_0x20cf2a['note']||'';if(_0x226999[_0x5d3b26(0x347)](/<(?:AURA|MIASMA) (?:STATE|STATES):[ ](.*)>/gi)){Game_BattlerBase[_0x5d3b26(0x23f)]=!![];break;}}}},Game_BattlerBase[_0x2cc133(0x320)]['addAuraPassiveStateIDs']=function(){const _0x17e29c=_0x2cc133;if(this['isDead']())return;if(!this[_0x17e29c(0x3b5)]())return;const _0x133bac=this[_0x17e29c(0x44d)]['passiveStates']||[],_0x396612=this,_0x30823f=this[_0x17e29c(0x38d)]()[_0x17e29c(0x3d7)](!![],_0x396612),_0x4608b6=$gameParty[_0x17e29c(0x424)]()?this['opponentsUnit']()[_0x17e29c(0x3d7)](![],_0x396612):[];this['_cache'][_0x17e29c(0x1dc)]=_0x133bac||[],this[_0x17e29c(0x44d)][_0x17e29c(0x1dc)]=this[_0x17e29c(0x44d)][_0x17e29c(0x1dc)][_0x17e29c(0x422)](_0x30823f)[_0x17e29c(0x422)](_0x4608b6);},Game_Unit[_0x2cc133(0x320)]['getAuraPassiveStateIDs']=function(_0x542cf1,_0x38e0f5){const _0x5f2616=_0x2cc133;let _0x16db67=[];const _0x4e0e7c=this===$gameParty?this[_0x5f2616(0x43e)]():this['members']();for(const _0x30e54b of _0x4e0e7c){if(!_0x30e54b)continue;if(!_0x30e54b['isAppeared']())continue;const _0x34051d=_0x30e54b[_0x5f2616(0x2b6)]();for(const _0xc11c9d of _0x34051d){if(!_0xc11c9d)continue;if(!VisuMZ[_0x5f2616(0x28c)][_0x5f2616(0x251)](_0xc11c9d,_0x542cf1,_0x30e54b,_0x38e0f5))continue;let _0x5658ef=DataManager['getAuraPassiveStatesFromObj'](_0xc11c9d,_0x542cf1);for(const _0x6fcf3c of _0x5658ef){if(!VisuMZ['SkillsStatesCore']['MeetsAuraStateConditions'](_0x6fcf3c,_0x542cf1,_0x30e54b,_0x38e0f5))continue;_0x16db67[_0x5f2616(0x332)](_0x6fcf3c),!_0x38e0f5['isStateAffected'](_0x6fcf3c)&&_0x38e0f5['setStateOrigin'](_0x6fcf3c,_0x30e54b);}}}return _0x16db67;},DataManager['getAuraPassiveStatesFromObj']=function(_0x276829,_0x2f8201){const _0x4a3c8a=_0x2cc133;if(!_0x276829)return[];const _0x385abe=_0x2f8201?_0x4a3c8a(0x37b):_0x4a3c8a(0x344),_0x1c7e2d=VisuMZ[_0x4a3c8a(0x28c)]['createKeyJS'](_0x276829,_0x385abe);this[_0x4a3c8a(0x473)]=this['_cache_getAuraPassiveStatesFromObj']||{};if(this[_0x4a3c8a(0x473)][_0x1c7e2d]!==undefined)return this[_0x4a3c8a(0x473)][_0x1c7e2d];const _0x900753=[],_0x49c2e0=_0x276829[_0x4a3c8a(0x376)]||'',_0x25c652=_0x2f8201?/<AURA (?:STATE|STATES):[ ](.*)>/gi:/<MIASMA (?:STATE|STATES):[ ](.*)>/gi,_0x48e813=_0x49c2e0[_0x4a3c8a(0x347)](_0x25c652);if(_0x48e813)for(const _0x3f6d2 of _0x48e813){_0x3f6d2[_0x4a3c8a(0x347)](_0x25c652);const _0x5324d0=String(RegExp['$1'])[_0x4a3c8a(0x44c)](',')[_0x4a3c8a(0x1de)](_0x477969=>_0x477969[_0x4a3c8a(0x3f0)]());for(const _0x351e43 of _0x5324d0){const _0x3856a1=/^\d+$/['test'](_0x351e43);let _0x511588=0x0;_0x3856a1?_0x511588=Number(_0x351e43):_0x511588=DataManager[_0x4a3c8a(0x482)](_0x351e43),_0x511588&&_0x900753[_0x4a3c8a(0x332)](_0x511588);}}return this[_0x4a3c8a(0x473)][_0x1c7e2d]=_0x900753,this[_0x4a3c8a(0x473)][_0x1c7e2d];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x251)]=function(_0x41ed1f,_0x1a1788,_0x5e10ed,_0x5a5832){const _0x2ced97=_0x2cc133;if(!_0x41ed1f)return![];if(_0x41ed1f['autoRemovalTiming']!==undefined&&_0x41ed1f[_0x2ced97(0x403)]!==undefined)return![];const _0x5599a0=_0x41ed1f[_0x2ced97(0x376)]||'';if(!VisuMZ[_0x2ced97(0x28c)]['MeetsAuraNoteConditions'](_0x5599a0,_0x1a1788,_0x5e10ed,_0x5a5832))return![];return!![];},VisuMZ[_0x2cc133(0x28c)]['MeetsAuraStateConditions']=function(_0x56d639,_0x863411,_0x4d96a9,_0x434ff7){const _0x3cca7d=_0x2cc133,_0x36817=$dataStates[_0x56d639];if(!_0x36817)return![];const _0x2a870e=_0x36817['note']||'';if(!VisuMZ[_0x3cca7d(0x28c)][_0x3cca7d(0x2f0)](_0x2a870e,_0x863411,_0x4d96a9,_0x434ff7))return![];return!![];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2f0)]=function(_0x93fad3,_0x118d80,_0xc9bc0a,_0xae554d){const _0x10aa59=_0x2cc133;_0x93fad3=_0x93fad3||'';if(_0xc9bc0a['isDead']()){if(_0x118d80&&_0x93fad3[_0x10aa59(0x347)](/<ALLOW DEAD AURA>/i)){}else{if(!_0x118d80&&_0x93fad3[_0x10aa59(0x347)](/<ALLOW DEAD MIASMA>/i)){}else{if(_0x118d80&&_0x93fad3[_0x10aa59(0x347)](/<DEAD AURA ONLY>/i)){}else{if(!_0x118d80&&_0x93fad3[_0x10aa59(0x347)](/<DEAD MIASMA ONLY>/i)){}else return![];}}}}else{if(_0x118d80&&_0x93fad3[_0x10aa59(0x347)](/<DEAD AURA ONLY>/i))return![];else{if(!_0x118d80&&_0x93fad3[_0x10aa59(0x347)](/<DEAD MIASMA ONLY>/i))return![];}}if(_0x118d80){if(_0x93fad3['match'](/<AURA NOT FOR USER>/i)){if(_0xc9bc0a===_0xae554d)return![];}else{if(_0x93fad3[_0x10aa59(0x347)](/<NOT USER AURA>/i)){if(_0xc9bc0a===_0xae554d)return![];}}}return!![];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x32f)]=function(_0x4573a5){const _0x12b300=_0x2cc133;if(typeof _0x4573a5!==_0x12b300(0x359))_0x4573a5=_0x4573a5['id'];return this[_0x12b300(0x206)][_0x4573a5]||0x0;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x26d)]=function(_0x412e65,_0x22bfd8){const _0x108f42=_0x2cc133;if(typeof _0x412e65!==_0x108f42(0x359))_0x412e65=_0x412e65['id'];if(this[_0x108f42(0x1d4)](_0x412e65)){const _0x45ec13=DataManager[_0x108f42(0x21f)](_0x412e65);this[_0x108f42(0x206)][_0x412e65]=_0x22bfd8['clamp'](0x0,_0x45ec13);if(this['_stateTurns'][_0x412e65]<=0x0)this[_0x108f42(0x33e)](_0x412e65);}},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x18b)]=function(_0x943a38,_0x4055d5){const _0x1e11d4=_0x2cc133;if(typeof _0x943a38!==_0x1e11d4(0x359))_0x943a38=_0x943a38['id'];this[_0x1e11d4(0x1d4)](_0x943a38)&&(_0x4055d5+=this[_0x1e11d4(0x32f)](_0x943a38),this[_0x1e11d4(0x26d)](_0x943a38,_0x4055d5));},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x20d)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x242)],Game_BattlerBase[_0x2cc133(0x320)]['eraseBuff']=function(_0x40f280){const _0x5b8192=_0x2cc133,_0x4a0bae=this[_0x5b8192(0x1b6)][_0x40f280];VisuMZ[_0x5b8192(0x28c)]['Game_BattlerBase_eraseBuff']['call'](this,_0x40f280);if(_0x4a0bae>0x0)this[_0x5b8192(0x466)](_0x40f280);if(_0x4a0bae<0x0)this['onEraseDebuff'](_0x40f280);},VisuMZ[_0x2cc133(0x28c)]['Game_BattlerBase_increaseBuff']=Game_BattlerBase[_0x2cc133(0x320)]['increaseBuff'],Game_BattlerBase[_0x2cc133(0x320)]['increaseBuff']=function(_0x5c8052){const _0xb5a911=_0x2cc133;VisuMZ[_0xb5a911(0x28c)][_0xb5a911(0x29c)][_0xb5a911(0x25a)](this,_0x5c8052);if(!this[_0xb5a911(0x1b8)](_0x5c8052))this[_0xb5a911(0x242)](_0x5c8052);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2b1)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2bf)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2bf)]=function(_0x449f83){const _0x545d8c=_0x2cc133;VisuMZ[_0x545d8c(0x28c)][_0x545d8c(0x2b1)][_0x545d8c(0x25a)](this,_0x449f83);if(!this[_0x545d8c(0x1b8)](_0x449f83))this[_0x545d8c(0x242)](_0x449f83);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x466)]=function(_0x2f3e4a){},Game_BattlerBase['prototype'][_0x2cc133(0x17a)]=function(_0x452726){},Game_BattlerBase[_0x2cc133(0x320)]['isMaxBuffAffected']=function(_0x335798){const _0x566bc6=_0x2cc133;return this['_buffs'][_0x335798]===VisuMZ[_0x566bc6(0x28c)][_0x566bc6(0x26f)][_0x566bc6(0x1d6)]['StackBuffMax'];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1d3)]=function(_0x55e4a9){const _0x40c128=_0x2cc133;return this[_0x40c128(0x1b6)][_0x55e4a9]===-VisuMZ[_0x40c128(0x28c)][_0x40c128(0x26f)]['Buffs'][_0x40c128(0x2f3)];},VisuMZ[_0x2cc133(0x28c)]['Game_BattlerBase_buffIconIndex']=Game_BattlerBase[_0x2cc133(0x320)]['buffIconIndex'],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x240)]=function(_0x36936f,_0x25bd6b){const _0x28491e=_0x2cc133;return _0x36936f=_0x36936f[_0x28491e(0x22c)](-0x2,0x2),VisuMZ[_0x28491e(0x28c)][_0x28491e(0x2a5)][_0x28491e(0x25a)](this,_0x36936f,_0x25bd6b);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x284)]=function(_0x174f15){const _0x5bbd6d=_0x2cc133,_0x2765f8=this[_0x5bbd6d(0x1b6)][_0x174f15];return VisuMZ['SkillsStatesCore'][_0x5bbd6d(0x26f)][_0x5bbd6d(0x1d6)][_0x5bbd6d(0x3fd)]['call'](this,_0x174f15,_0x2765f8);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1e1)]=function(_0x2b3594){const _0x145d60=_0x2cc133;return this[_0x145d60(0x23e)][_0x2b3594]||0x0;},Game_BattlerBase[_0x2cc133(0x320)]['debuffTurns']=function(_0x23e5c0){const _0x3078ed=_0x2cc133;return this[_0x3078ed(0x1e1)](_0x23e5c0);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1fd)]=function(_0x1a2e9b,_0x22209e){const _0x1fd89f=_0x2cc133;if(this[_0x1fd89f(0x271)](_0x1a2e9b)){const _0x2f0ead=VisuMZ[_0x1fd89f(0x28c)][_0x1fd89f(0x26f)][_0x1fd89f(0x1d6)][_0x1fd89f(0x406)];this[_0x1fd89f(0x23e)][_0x1a2e9b]=_0x22209e[_0x1fd89f(0x22c)](0x0,_0x2f0ead);}},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x32c)]=function(_0x2245cb,_0x4f8aab){const _0x128a4c=_0x2cc133;this['isBuffAffected'](_0x2245cb)&&(_0x4f8aab+=this[_0x128a4c(0x1e1)](stateId),this[_0x128a4c(0x1fd)](_0x2245cb,_0x4f8aab));},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x41e)]=function(_0x25c030,_0x1c0157){const _0x3d0b3a=_0x2cc133;if(this[_0x3d0b3a(0x3f7)](_0x25c030)){const _0x41115c=VisuMZ[_0x3d0b3a(0x28c)][_0x3d0b3a(0x26f)][_0x3d0b3a(0x1d6)]['MaxTurns'];this['_buffTurns'][_0x25c030]=_0x1c0157['clamp'](0x0,_0x41115c);}},Game_BattlerBase['prototype'][_0x2cc133(0x341)]=function(_0x3746f2,_0x1dff4a){const _0x167f80=_0x2cc133;this[_0x167f80(0x3f7)](_0x3746f2)&&(_0x1dff4a+=this[_0x167f80(0x1e1)](stateId),this[_0x167f80(0x41e)](_0x3746f2,_0x1dff4a));},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x294)]=function(_0x3445a5){const _0x755fda=_0x2cc133;if(typeof _0x3445a5!==_0x755fda(0x359))_0x3445a5=_0x3445a5['id'];return this[_0x755fda(0x330)]=this['_stateData']||{},this['_stateData'][_0x3445a5]=this[_0x755fda(0x330)][_0x3445a5]||{},this[_0x755fda(0x330)][_0x3445a5];},Game_BattlerBase['prototype']['getStateData']=function(_0xaddcd8,_0x3c0ecf){const _0x667909=_0x2cc133;if(typeof _0xaddcd8!==_0x667909(0x359))_0xaddcd8=_0xaddcd8['id'];const _0x161045=this[_0x667909(0x294)](_0xaddcd8);return _0x161045[_0x3c0ecf];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x182)]=function(_0x2e2c48,_0x3b8f83,_0x2c7d31){const _0xb975e5=_0x2cc133;if(typeof _0x2e2c48!==_0xb975e5(0x359))_0x2e2c48=_0x2e2c48['id'];const _0xe8500a=this['stateData'](_0x2e2c48);_0xe8500a[_0x3b8f83]=_0x2c7d31;},Game_BattlerBase['prototype'][_0x2cc133(0x172)]=function(_0xe5dd7d){const _0x499a17=_0x2cc133;if(typeof _0xe5dd7d!==_0x499a17(0x359))_0xe5dd7d=_0xe5dd7d['id'];this[_0x499a17(0x330)]=this['_stateData']||{},this[_0x499a17(0x330)][_0xe5dd7d]={};},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2ba)]=function(_0x60d410){const _0x4e8ecf=_0x2cc133;if(typeof _0x60d410!=='number')_0x60d410=_0x60d410['id'];return this[_0x4e8ecf(0x437)]=this['_stateDisplay']||{},this['_stateDisplay'][_0x60d410]===undefined&&(this[_0x4e8ecf(0x437)][_0x60d410]=''),this[_0x4e8ecf(0x437)][_0x60d410];},Game_BattlerBase[_0x2cc133(0x320)]['setStateDisplay']=function(_0x339df1,_0x49959e){const _0x22a25a=_0x2cc133;if(typeof _0x339df1!==_0x22a25a(0x359))_0x339df1=_0x339df1['id'];this[_0x22a25a(0x437)]=this[_0x22a25a(0x437)]||{},this[_0x22a25a(0x437)][_0x339df1]=_0x49959e;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2f7)]=function(_0x14476d){const _0x260b92=_0x2cc133;if(typeof _0x14476d!==_0x260b92(0x359))_0x14476d=_0x14476d['id'];this['_stateDisplay']=this[_0x260b92(0x437)]||{},this[_0x260b92(0x437)][_0x14476d]='';},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x363)]=function(_0x4729e5){const _0x3d5e0f=_0x2cc133;if(typeof _0x4729e5!==_0x3d5e0f(0x359))_0x4729e5=_0x4729e5['id'];this['_stateOrigin']=this[_0x3d5e0f(0x41f)]||{},this[_0x3d5e0f(0x41f)][_0x4729e5]=this[_0x3d5e0f(0x41f)][_0x4729e5]||'user';const _0xdb1145=this['_stateOrigin'][_0x4729e5];return this[_0x3d5e0f(0x3e9)](_0xdb1145);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x1d7)]=function(_0x4d8fbf,_0xd4be5){const _0x4e0440=_0x2cc133;this[_0x4e0440(0x41f)]=this['_stateOrigin']||{};const _0x155057=_0xd4be5?this[_0x4e0440(0x2b7)](_0xd4be5):this[_0x4e0440(0x2ff)]();this[_0x4e0440(0x41f)][_0x4d8fbf]=_0x155057;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x269)]=function(_0x249fad){const _0x5bfb29=_0x2cc133;this[_0x5bfb29(0x41f)]=this[_0x5bfb29(0x41f)]||{},delete this[_0x5bfb29(0x41f)][_0x249fad];},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x3b9)]=function(){const _0x481052=_0x2cc133;this[_0x481052(0x41f)]={};},Game_BattlerBase['prototype'][_0x2cc133(0x2ff)]=function(){const _0x281a30=_0x2cc133,_0x2f0467=this[_0x281a30(0x350)]();return this[_0x281a30(0x2b7)](_0x2f0467);},Game_BattlerBase['prototype'][_0x2cc133(0x350)]=function(){const _0x25d686=_0x2cc133;if($gameParty[_0x25d686(0x424)]()){if(BattleManager[_0x25d686(0x2db)])return BattleManager['_subject'];else{if(BattleManager[_0x25d686(0x1e7)])return BattleManager['_currentActor'];}}else{const _0x3c4135=SceneManager[_0x25d686(0x210)];if(![Scene_Map,Scene_Item]['includes'](_0x3c4135['constructor']))return $gameParty[_0x25d686(0x24e)]();}return this;},Game_BattlerBase['prototype'][_0x2cc133(0x2b7)]=function(_0x1fea6a){const _0x5e1c6a=_0x2cc133;if(!_0x1fea6a)return _0x5e1c6a(0x480);if(_0x1fea6a[_0x5e1c6a(0x402)]())return _0x5e1c6a(0x1cd)[_0x5e1c6a(0x2ad)](_0x1fea6a[_0x5e1c6a(0x1a0)]());else{const _0xcc4eee=_0x5e1c6a(0x2cc)[_0x5e1c6a(0x2ad)](_0x1fea6a[_0x5e1c6a(0x31b)]()),_0x20508c='<member-%1>'[_0x5e1c6a(0x2ad)](_0x1fea6a[_0x5e1c6a(0x297)]()),_0x55a646=_0x5e1c6a(0x256)[_0x5e1c6a(0x2ad)]($gameTroop[_0x5e1c6a(0x1bc)]());return _0x5e1c6a(0x28d)[_0x5e1c6a(0x2ad)](_0xcc4eee,_0x20508c,_0x55a646);}return _0x5e1c6a(0x480);},Game_BattlerBase[_0x2cc133(0x320)]['getStateOriginByKey']=function(_0x52cd9f){const _0x29ecd8=_0x2cc133;if(_0x52cd9f===_0x29ecd8(0x480))return this;else{if(_0x52cd9f['match'](/<actor-(\d+)>/i))return $gameActors[_0x29ecd8(0x469)](Number(RegExp['$1']));else{if($gameParty['inBattle']()&&_0x52cd9f['match'](/<troop-(\d+)>/i)){const _0x5854d2=Number(RegExp['$1']);if(_0x5854d2===$gameTroop['getCurrentTroopUniqueID']()){if(_0x52cd9f['match'](/<member-(\d+)>/i))return $gameTroop[_0x29ecd8(0x399)]()[Number(RegExp['$1'])];}}if(_0x52cd9f[_0x29ecd8(0x347)](/<enemy-(\d+)>/i))return new Game_Enemy(Number(RegExp['$1']),-0x1f4,-0x1f4);}}return this;},Game_BattlerBase[_0x2cc133(0x320)]['isSkillToggled']=function(_0x27e7bf){const _0x5afbcc=_0x2cc133;if(!_0x27e7bf)return![];if(this[_0x5afbcc(0x217)]())return!![];this['_skillToggle']=this['_skillToggle']||{};if(this['_skillToggle'][_0x27e7bf['id']]===undefined){this[_0x5afbcc(0x402)]()?this[_0x5afbcc(0x278)][_0x27e7bf['id']]=DataManager[_0x5afbcc(0x307)](_0x27e7bf):this[_0x5afbcc(0x278)][_0x27e7bf['id']]=!![];if(this['_skillToggle'][_0x27e7bf['id']]&&DataManager[_0x5afbcc(0x2e8)](_0x27e7bf)[_0x5afbcc(0x3e7)]>0x0){const _0x41252e=DataManager[_0x5afbcc(0x2e8)](_0x27e7bf),_0x5ea2c2=this[_0x5afbcc(0x1f3)]()['filter'](_0x5c5b84=>_0x5c5b84!==_0x27e7bf)[_0x5afbcc(0x2e4)](_0x578736=>DataManager['isToggleSkill'](_0x578736))[_0x5afbcc(0x2e4)](_0x5dfade=>DataManager['toggleExclusionGroups'](_0x5dfade)[_0x5afbcc(0x3cb)](_0x1bf13f=>_0x41252e[_0x5afbcc(0x19c)](_0x1bf13f)));_0x5ea2c2[_0x5afbcc(0x3e7)]>0x0&&(this[_0x5afbcc(0x278)][_0x27e7bf['id']]=![]);}if(this['_skillToggle'][_0x27e7bf['id']]){this[_0x5afbcc(0x432)](),$gameParty[_0x5afbcc(0x293)]();if($gameParty['inBattle']())$gameTroop[_0x5afbcc(0x293)]();}}return this[_0x5afbcc(0x278)][_0x27e7bf['id']];},Game_BattlerBase['prototype'][_0x2cc133(0x279)]=function(_0x2c6e08,_0x276b5c){const _0x473cb5=_0x2cc133;if(!DataManager[_0x473cb5(0x43d)](_0x2c6e08))return;if(this[_0x473cb5(0x217)]())return;this[_0x473cb5(0x278)]=this[_0x473cb5(0x278)]||{};if(_0x276b5c&&DataManager[_0x473cb5(0x2e8)](_0x2c6e08)[_0x473cb5(0x3e7)]>0x0){const _0x30ed04=DataManager[_0x473cb5(0x2e8)](_0x2c6e08),_0x5ad986=this['skills']()['filter'](_0x846824=>DataManager[_0x473cb5(0x43d)](_0x846824))['filter'](_0x5559c4=>DataManager['toggleExclusionGroups'](_0x5559c4)[_0x473cb5(0x3cb)](_0x2d18ef=>_0x30ed04[_0x473cb5(0x19c)](_0x2d18ef)));for(const _0x31e1e7 of _0x5ad986){if(!_0x31e1e7)continue;this['_skillToggle'][_0x31e1e7['id']]=![];}}this[_0x473cb5(0x278)][_0x2c6e08['id']]=_0x276b5c,this[_0x473cb5(0x432)](),$gameParty[_0x473cb5(0x293)]();if($gameParty['inBattle']())$gameTroop[_0x473cb5(0x293)]();},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2b5)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2da)],Game_BattlerBase[_0x2cc133(0x320)]['meetsSkillConditions']=function(_0x5716d8){const _0xc1485=_0x2cc133;if(DataManager[_0xc1485(0x43d)](_0x5716d8)){if(this[_0xc1485(0x402)]()){if($gameParty['inBattle']()){if(this[_0xc1485(0x367)]())return![];if(this[_0xc1485(0x215)]())return![];}if(this[_0xc1485(0x261)](_0x5716d8))return!![];}else return![];}return VisuMZ[_0xc1485(0x28c)][_0xc1485(0x2b5)][_0xc1485(0x25a)](this,_0x5716d8);},VisuMZ[_0x2cc133(0x28c)]['Game_Action_isValid']=Game_Action[_0x2cc133(0x320)][_0x2cc133(0x41c)],Game_Action[_0x2cc133(0x320)]['isValid']=function(){const _0x364d24=_0x2cc133;if(DataManager['isToggleSkill'](this['item']()))return![];return VisuMZ[_0x364d24(0x28c)][_0x364d24(0x400)][_0x364d24(0x25a)](this);},VisuMZ[_0x2cc133(0x28c)]['Game_Battler_addState']=Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x31a)],Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x31a)]=function(_0x40d305){const _0x5da009=_0x2cc133,_0x294520=this[_0x5da009(0x34f)](_0x40d305);VisuMZ['SkillsStatesCore']['Game_Battler_addState']['call'](this,_0x40d305);if(_0x294520&&this['hasState']($dataStates[_0x40d305])){this[_0x5da009(0x17b)](_0x40d305);;}},VisuMZ['SkillsStatesCore']['Game_Battler_isStateAddable']=Game_Battler[_0x2cc133(0x320)]['isStateAddable'],Game_Battler['prototype'][_0x2cc133(0x34f)]=function(_0x503f40){const _0x32aad2=_0x2cc133,_0x138614=$dataStates[_0x503f40];if(_0x138614&&_0x138614['note'][_0x32aad2(0x347)](/<NO DEATH CLEAR>/i))return!this[_0x32aad2(0x3af)](_0x503f40)&&!this[_0x32aad2(0x3f4)](_0x503f40)&&!this[_0x32aad2(0x1ce)][_0x32aad2(0x391)](_0x503f40);return VisuMZ[_0x32aad2(0x28c)][_0x32aad2(0x267)][_0x32aad2(0x25a)](this,_0x503f40);},VisuMZ['SkillsStatesCore']['Game_BattlerBase_addNewState']=Game_BattlerBase[_0x2cc133(0x320)]['addNewState'],Game_BattlerBase['prototype']['addNewState']=function(_0x3056dc){const _0x4782e1=_0x2cc133;VisuMZ[_0x4782e1(0x28c)][_0x4782e1(0x2af)][_0x4782e1(0x25a)](this,_0x3056dc);if(_0x3056dc===this[_0x4782e1(0x3fc)]())while(this[_0x4782e1(0x183)]['filter'](_0x5cbdd3=>_0x5cbdd3===this['deathStateId']())[_0x4782e1(0x3e7)]>0x1){const _0x4ef31a=this[_0x4782e1(0x183)][_0x4782e1(0x1ae)](this[_0x4782e1(0x3fc)]());this['_states']['splice'](_0x4ef31a,0x1);}},Game_Battler['prototype'][_0x2cc133(0x17b)]=function(_0xb5030e){const _0x2b204a=_0x2cc133;this[_0x2b204a(0x1d7)](_0xb5030e),this[_0x2b204a(0x2a6)](_0xb5030e),this['onAddStateMakeCustomSlipValues'](_0xb5030e),this[_0x2b204a(0x211)](_0xb5030e),this['onAddStateGlobalJS'](_0xb5030e);},Game_Battler[_0x2cc133(0x320)]['onRemoveState']=function(_0xc1c2ad){const _0x313e76=_0x2cc133;this[_0x313e76(0x2ac)](_0xc1c2ad),this['onEraseStateGlobalJS'](_0xc1c2ad),Game_BattlerBase[_0x313e76(0x320)][_0x313e76(0x274)][_0x313e76(0x25a)](this,_0xc1c2ad);},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x223)]=function(_0x3c6a8f){const _0x383b4a=_0x2cc133;for(const _0x2bf0ac of this[_0x383b4a(0x366)]()){this['isStateExpired'](_0x2bf0ac['id'])&&_0x2bf0ac[_0x383b4a(0x2de)]===_0x3c6a8f&&(this['removeState'](_0x2bf0ac['id']),this[_0x383b4a(0x379)](_0x2bf0ac['id']),this['onExpireStateGlobalJS'](_0x2bf0ac['id']));}},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x379)]=function(_0x3768ae){const _0x543690=_0x2cc133;this[_0x543690(0x426)](_0x3768ae);},Game_Battler['prototype'][_0x2cc133(0x211)]=function(_0x54d2a5){const _0x54ecca=_0x2cc133;if(this[_0x54ecca(0x305)]||this[_0x54ecca(0x292)])return;const _0x1a5b62=VisuMZ['SkillsStatesCore']['stateAddJS'];if(_0x1a5b62[_0x54d2a5])_0x1a5b62[_0x54d2a5]['call'](this,_0x54d2a5);},Game_Battler[_0x2cc133(0x320)]['onEraseStateCustomJS']=function(_0x38f6e0){const _0x47e1c6=_0x2cc133;if(this[_0x47e1c6(0x305)]||this[_0x47e1c6(0x292)])return;const _0x41eceb=VisuMZ[_0x47e1c6(0x28c)][_0x47e1c6(0x22f)];if(_0x41eceb[_0x38f6e0])_0x41eceb[_0x38f6e0]['call'](this,_0x38f6e0);},Game_Battler['prototype'][_0x2cc133(0x426)]=function(_0x24c335){const _0x4c146f=_0x2cc133;if(this[_0x4c146f(0x305)]||this[_0x4c146f(0x292)])return;const _0x54244e=VisuMZ[_0x4c146f(0x28c)][_0x4c146f(0x1c9)];if(_0x54244e[_0x24c335])_0x54244e[_0x24c335][_0x4c146f(0x25a)](this,_0x24c335);},Game_Battler['prototype']['onAddStateGlobalJS']=function(_0x49c8d4){const _0x5808bf=_0x2cc133;if(this[_0x5808bf(0x305)]||this[_0x5808bf(0x292)])return;try{VisuMZ['SkillsStatesCore'][_0x5808bf(0x26f)][_0x5808bf(0x2fa)][_0x5808bf(0x3bf)]['call'](this,_0x49c8d4);}catch(_0x419233){if($gameTemp[_0x5808bf(0x16f)]())console[_0x5808bf(0x179)](_0x419233);}},Game_Battler['prototype']['onEraseStateGlobalJS']=function(_0x2024af){const _0x35a84c=_0x2cc133;if(this[_0x35a84c(0x305)]||this[_0x35a84c(0x292)])return;try{VisuMZ[_0x35a84c(0x28c)][_0x35a84c(0x26f)][_0x35a84c(0x2fa)][_0x35a84c(0x194)]['call'](this,_0x2024af);}catch(_0x1d13de){if($gameTemp[_0x35a84c(0x16f)]())console[_0x35a84c(0x179)](_0x1d13de);}},Game_Battler[_0x2cc133(0x320)]['onExpireStateGlobalJS']=function(_0x240ff1){const _0x5e7784=_0x2cc133;if(this[_0x5e7784(0x305)]||this[_0x5e7784(0x292)])return;try{VisuMZ[_0x5e7784(0x28c)][_0x5e7784(0x26f)][_0x5e7784(0x2fa)][_0x5e7784(0x2cb)][_0x5e7784(0x25a)](this,_0x240ff1);}catch(_0x5dd82a){if($gameTemp['isPlaytest']())console[_0x5e7784(0x179)](_0x5dd82a);}},Game_Battler[_0x2cc133(0x320)]['statesByCategory']=function(_0x21f41c){const _0x5d05ed=_0x2cc133;return _0x21f41c=_0x21f41c[_0x5d05ed(0x21e)]()[_0x5d05ed(0x3f0)](),this[_0x5d05ed(0x366)]()[_0x5d05ed(0x2e4)](_0x137d4b=>_0x137d4b[_0x5d05ed(0x2d1)][_0x5d05ed(0x19c)](_0x21f41c));},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x281)]=function(_0x2eb4b0,_0x4811cf){const _0x44327d=_0x2cc133;_0x2eb4b0=_0x2eb4b0[_0x44327d(0x21e)]()['trim'](),_0x4811cf=_0x4811cf||0x0;const _0x254458=this[_0x44327d(0x202)](_0x2eb4b0),_0xc3b481=[];for(const _0x4db71f of _0x254458){if(!_0x4db71f)continue;if(_0x4811cf<=0x0)break;_0xc3b481[_0x44327d(0x332)](_0x4db71f['id']),this[_0x44327d(0x1ce)]['success']=!![],_0x4811cf--;}while(_0xc3b481[_0x44327d(0x3e7)]>0x0){this[_0x44327d(0x33e)](_0xc3b481['shift']());}},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x468)]=function(_0x3d5401,_0x33f1e5){const _0x13e0a9=_0x2cc133;_0x3d5401=_0x3d5401[_0x13e0a9(0x21e)]()['trim'](),_0x33f1e5=_0x33f1e5||[];const _0x475676=this[_0x13e0a9(0x202)](_0x3d5401),_0x3654c8=[];for(const _0xc008ce of _0x475676){if(!_0xc008ce)continue;if(_0x33f1e5[_0x13e0a9(0x19c)](_0xc008ce))continue;_0x3654c8['push'](_0xc008ce['id']),this[_0x13e0a9(0x1ce)]['success']=!![];}while(_0x3654c8[_0x13e0a9(0x3e7)]>0x0){this[_0x13e0a9(0x33e)](_0x3654c8[_0x13e0a9(0x19b)]());}},Game_Battler[_0x2cc133(0x320)]['isStateCategoryAffected']=function(_0x3f868a){const _0x4f94e1=_0x2cc133;return this[_0x4f94e1(0x275)](_0x3f868a)>0x0;},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x45a)]=function(_0x31a79f){const _0x5ec61f=_0x2cc133;return this[_0x5ec61f(0x46d)](_0x31a79f)>0x0;},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x275)]=function(_0x2e5b82){const _0x3f149d=_0x2cc133,_0x21ce81=this[_0x3f149d(0x202)](_0x2e5b82)[_0x3f149d(0x2e4)](_0x1c8d18=>this[_0x3f149d(0x1d4)](_0x1c8d18['id']));return _0x21ce81[_0x3f149d(0x3e7)];},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x46d)]=function(_0x287320){const _0x1a736b=_0x2cc133,_0x44c9b8=this[_0x1a736b(0x202)](_0x287320);return _0x44c9b8[_0x1a736b(0x3e7)];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x34c)]=Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x3af)],Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x3af)]=function(_0x339629){const _0x4b7c37=_0x2cc133,_0x4f7be3=$dataStates[_0x339629];if(_0x4f7be3&&_0x4f7be3['categories'][_0x4b7c37(0x3e7)]>0x0)for(const _0x4260c9 of _0x4f7be3[_0x4b7c37(0x2d1)]){if(this[_0x4b7c37(0x225)](_0x4260c9))return!![];}return VisuMZ['SkillsStatesCore'][_0x4b7c37(0x34c)][_0x4b7c37(0x25a)](this,_0x339629);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x225)]=function(_0x33f2b1){const _0x48c92c=_0x2cc133;let _0x528dcd=_0x48c92c(0x3c7);if(this[_0x48c92c(0x39b)](_0x528dcd))return this['_cache'][_0x528dcd][_0x48c92c(0x19c)](_0x33f2b1);return this[_0x48c92c(0x44d)][_0x528dcd]=this[_0x48c92c(0x474)](),this[_0x48c92c(0x44d)][_0x528dcd][_0x48c92c(0x19c)](_0x33f2b1);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x474)]=function(){const _0x519eb9=_0x2cc133,_0x4aa9c4=/<RESIST STATE (?:CATEGORY|CATEGORIES):[ ](.*)>/gi,_0x1131b4=/<RESIST STATE (?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/RESIST STATE (?:CATEGORY|CATEGORIES)>/i;let _0x27114d=[];for(const _0x591c99 of this[_0x519eb9(0x43c)]()){if(!_0x591c99)continue;const _0x4199ce=_0x591c99['note'],_0x2a1034=_0x4199ce[_0x519eb9(0x347)](_0x4aa9c4);if(_0x2a1034)for(const _0x1d2cfc of _0x2a1034){_0x1d2cfc[_0x519eb9(0x347)](_0x4aa9c4);const _0x3578c6=String(RegExp['$1'])[_0x519eb9(0x44c)](',')[_0x519eb9(0x1de)](_0x3b1fad=>String(_0x3b1fad)[_0x519eb9(0x21e)]()[_0x519eb9(0x3f0)]());_0x27114d=_0x27114d[_0x519eb9(0x422)](_0x3578c6);}if(_0x4199ce[_0x519eb9(0x347)](_0x1131b4)){const _0x382342=String(RegExp['$1'])[_0x519eb9(0x44c)](/[\r\n]+/)[_0x519eb9(0x1de)](_0x18e0b7=>String(_0x18e0b7)['toUpperCase']()['trim']());_0x27114d=_0x27114d[_0x519eb9(0x422)](_0x382342);}}return _0x27114d;},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x2a6)]=function(_0x6e100e){const _0x53fcb2=_0x2cc133,_0x159a99=$dataStates[_0x6e100e];if(!_0x159a99)return;const _0x4b9cd3=_0x159a99[_0x53fcb2(0x376)]||'',_0x5cdc37=_0x4b9cd3[_0x53fcb2(0x347)](/<REMOVE OTHER (.*) STATES>/gi);if(_0x5cdc37){const _0x213c68=[_0x159a99];for(const _0x10aaa9 of _0x5cdc37){_0x10aaa9['match'](/<REMOVE OTHER (.*) STATES>/i);const _0x1adfaa=String(RegExp['$1']);this[_0x53fcb2(0x468)](_0x1adfaa,_0x213c68);}}},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x475)]=function(){const _0xd50928=_0x2cc133;for(const _0x4755b0 of this['states']()){if(!_0x4755b0)continue;if(!this['isStateAffected'](_0x4755b0['id']))continue;if(!_0x4755b0[_0xd50928(0x28e)])continue;if(this[_0xd50928(0x1a7)](_0x4755b0))continue;Math[_0xd50928(0x24b)](0x64)<_0x4755b0[_0xd50928(0x322)]&&this[_0xd50928(0x33e)](_0x4755b0['id']);}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x24a)]=Game_Action[_0x2cc133(0x320)][_0x2cc133(0x209)],Game_Action['prototype'][_0x2cc133(0x209)]=function(_0xf24c46,_0x546aad){const _0x4941ca=_0x2cc133;$gameTemp[_0x4941ca(0x3e8)]=this[_0x4941ca(0x20f)](),$gameTemp[_0x4941ca(0x40a)]=this[_0x4941ca(0x33b)](),$gameTemp[_0x4941ca(0x3e4)]=_0x546aad,VisuMZ['SkillsStatesCore'][_0x4941ca(0x24a)][_0x4941ca(0x25a)](this,_0xf24c46,_0x546aad),$gameTemp[_0x4941ca(0x3e8)]=undefined,$gameTemp[_0x4941ca(0x40a)]=undefined,$gameTemp['_bypassRemoveStateDamage_value']=undefined;},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x1a7)]=function(_0x47b442){const _0x14058d=_0x2cc133;if($gameTemp[_0x14058d(0x3e8)]){const _0x4d2f3a=$gameTemp[_0x14058d(0x3e8)],_0x128c89=/<BYPASS STATE DAMAGE REMOVAL:[ ](.*)>/gi;if(DataManager[_0x14058d(0x1cf)](_0x47b442,_0x4d2f3a,_0x128c89,_0x14058d(0x40b)))return!![];}if($gameTemp[_0x14058d(0x40a)]){const _0x48d101=$gameTemp['_bypassRemoveStateDamage_user'];if(_0x48d101[_0x14058d(0x40d)](_0x47b442))return!![];}if(this[_0x14058d(0x2d8)](_0x47b442))return!![];return![];},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x40d)]=function(_0x4af660){const _0x136f32=_0x2cc133,_0xec11aa=/<BYPASS STATE DAMAGE REMOVAL AS (?:ATTACKER|USER):[ ](.*)>/gi;for(const _0x16bbef of this[_0x136f32(0x43c)]()){if(!_0x16bbef)continue;if(DataManager[_0x136f32(0x1cf)](_0x4af660,_0x16bbef,_0xec11aa,_0x136f32(0x3da)))return!![];}return![];},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x2d8)]=function(_0x5e98b6){const _0xe95df7=_0x2cc133,_0xde0e0e=/<BYPASS STATE DAMAGE REMOVAL AS (?:TARGET|VICTIM):[ ](.*)>/gi;for(const _0x3d9c1f of this['traitObjects']()){if(!_0x3d9c1f)continue;if(DataManager[_0xe95df7(0x1cf)](_0x5e98b6,_0x3d9c1f,_0xde0e0e,_0xe95df7(0x44b)))return!![];}return![];},DataManager['CheckBypassRemoveStatesByDamage']=function(_0x5bf9df,_0x150453,_0x5462ca,_0x111351){const _0x20cd62=_0x2cc133,_0x1b51c6='%1-%2-%3'[_0x20cd62(0x2ad)](_0x150453['name'],_0x150453['id'],_0x111351);this[_0x20cd62(0x1f4)]=this[_0x20cd62(0x1f4)]||{};if(this['_cache_CheckBypassRemoveStatesByDamage'][_0x1b51c6]!==undefined)return this['_cache_CheckBypassRemoveStatesByDamage'][_0x1b51c6][_0x20cd62(0x19c)](_0x5bf9df['id']);const _0x1564be=[],_0x36e75d=_0x150453[_0x20cd62(0x376)][_0x20cd62(0x347)](_0x5462ca);if(_0x36e75d)for(const _0x263569 of _0x36e75d){_0x263569[_0x20cd62(0x347)](_0x5462ca);const _0x3ddc3c=String(RegExp['$1'])['split'](',')[_0x20cd62(0x1de)](_0xc5bace=>_0xc5bace[_0x20cd62(0x3f0)]());for(let _0x31cea1 of _0x3ddc3c){_0x31cea1=(String(_0x31cea1)||'')['trim']();if(_0x31cea1[_0x20cd62(0x347)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x43f290=Math[_0x20cd62(0x1d1)](Number(RegExp['$1']),Number(RegExp['$2'])),_0x561075=Math[_0x20cd62(0x2a4)](Number(RegExp['$1']),Number(RegExp['$2']));for(let _0x479189=_0x43f290;_0x479189<=_0x561075;_0x479189++)elements[_0x20cd62(0x332)](_0x479189);continue;}const _0x425cbb=/^\d+$/[_0x20cd62(0x373)](_0x31cea1);_0x425cbb?entryID=Number(_0x31cea1):entryID=DataManager[_0x20cd62(0x482)](_0x31cea1),entryID&&_0x1564be[_0x20cd62(0x332)](entryID);}}return this['_cache_CheckBypassRemoveStatesByDamage'][_0x1b51c6]=_0x1564be,this['_cache_CheckBypassRemoveStatesByDamage'][_0x1b51c6][_0x20cd62(0x19c)](_0x5bf9df['id']);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x417)]=Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x3cd)],Game_Battler[_0x2cc133(0x320)]['addBuff']=function(_0x31a5b7,_0x3989e2){const _0x22d968=_0x2cc133;VisuMZ[_0x22d968(0x28c)][_0x22d968(0x417)]['call'](this,_0x31a5b7,_0x3989e2),this[_0x22d968(0x271)](_0x31a5b7)&&this[_0x22d968(0x1bf)](_0x31a5b7,_0x3989e2);},Game_Battler['prototype'][_0x2cc133(0x434)]=function(_0x3dd9f3){},VisuMZ[_0x2cc133(0x28c)]['Game_Battler_addDebuff']=Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x355)],Game_Battler['prototype'][_0x2cc133(0x355)]=function(_0x8f9d3b,_0x26c86c){const _0x4382f7=_0x2cc133;VisuMZ[_0x4382f7(0x28c)][_0x4382f7(0x23d)]['call'](this,_0x8f9d3b,_0x26c86c),this['isDebuffAffected'](_0x8f9d3b)&&this[_0x4382f7(0x44f)](_0x8f9d3b,_0x26c86c);},Game_Battler[_0x2cc133(0x320)]['removeBuffsAuto']=function(){const _0x2896fe=_0x2cc133;for(let _0x2c6c23=0x0;_0x2c6c23<this[_0x2896fe(0x415)]();_0x2c6c23++){if(this[_0x2896fe(0x45f)](_0x2c6c23)){const _0x43f363=this['_buffs'][_0x2c6c23];this['removeBuff'](_0x2c6c23);if(_0x43f363>0x0)this['onExpireBuff'](_0x2c6c23);if(_0x43f363<0x0)this[_0x2896fe(0x2f5)](_0x2c6c23);}}},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x1bf)]=function(_0x5e5906,_0x43bffa){const _0x154d57=_0x2cc133;this[_0x154d57(0x3e1)](_0x5e5906,_0x43bffa);},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x44f)]=function(_0x20238c,_0x185981){this['onAddDebuffGlobalJS'](_0x20238c,_0x185981);},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x466)]=function(_0x59a4aa){const _0x7d891b=_0x2cc133;Game_BattlerBase[_0x7d891b(0x320)][_0x7d891b(0x466)][_0x7d891b(0x25a)](this,_0x59a4aa),this[_0x7d891b(0x37a)](_0x59a4aa);},Game_Battler['prototype'][_0x2cc133(0x17a)]=function(_0xf719a0){const _0x14efc2=_0x2cc133;Game_BattlerBase['prototype']['onEraseDebuff'][_0x14efc2(0x25a)](this,_0xf719a0),this[_0x14efc2(0x2f9)](_0xf719a0);},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x253)]=function(_0x4f0f91){const _0x5bd19a=_0x2cc133;this[_0x5bd19a(0x370)](_0x4f0f91);},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x2f5)]=function(_0x737809){const _0x4f4a4b=_0x2cc133;this[_0x4f4a4b(0x3ac)](_0x737809);},Game_Battler['prototype'][_0x2cc133(0x3e1)]=function(_0x3f1e63,_0x5163ff){const _0x1d56ad=_0x2cc133;VisuMZ[_0x1d56ad(0x28c)]['Settings'][_0x1d56ad(0x1d6)][_0x1d56ad(0x283)][_0x1d56ad(0x25a)](this,_0x3f1e63,_0x5163ff);},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x44e)]=function(_0x3aae3e,_0x3e3309){const _0x4deffc=_0x2cc133;VisuMZ[_0x4deffc(0x28c)]['Settings']['Buffs'][_0x4deffc(0x393)][_0x4deffc(0x25a)](this,_0x3aae3e,_0x3e3309);},Game_BattlerBase[_0x2cc133(0x320)][_0x2cc133(0x37a)]=function(_0x4c0e03){const _0xeec0f=_0x2cc133;VisuMZ['SkillsStatesCore'][_0xeec0f(0x26f)][_0xeec0f(0x1d6)][_0xeec0f(0x3f9)][_0xeec0f(0x25a)](this,_0x4c0e03);},Game_BattlerBase['prototype'][_0x2cc133(0x2f9)]=function(_0x1b6ac9){const _0xd480f1=_0x2cc133;VisuMZ[_0xd480f1(0x28c)][_0xd480f1(0x26f)][_0xd480f1(0x1d6)][_0xd480f1(0x19a)][_0xd480f1(0x25a)](this,_0x1b6ac9);},Game_Battler[_0x2cc133(0x320)]['onExpireBuffGlobalJS']=function(_0x58bb2f){const _0x343dde=_0x2cc133;VisuMZ[_0x343dde(0x28c)][_0x343dde(0x26f)][_0x343dde(0x1d6)][_0x343dde(0x246)][_0x343dde(0x25a)](this,_0x58bb2f);},Game_Battler['prototype'][_0x2cc133(0x3ac)]=function(_0x2c1cea){const _0x278bd9=_0x2cc133;VisuMZ[_0x278bd9(0x28c)]['Settings'][_0x278bd9(0x1d6)][_0x278bd9(0x3b3)][_0x278bd9(0x25a)](this,_0x2c1cea);},Game_Battler[_0x2cc133(0x320)]['onAddStateMakeCustomSlipValues']=function(_0x42636e){const _0xfc12b8=_0x2cc133,_0x598aa8=VisuMZ[_0xfc12b8(0x28c)],_0x597948=[_0xfc12b8(0x3d1),_0xfc12b8(0x273),_0xfc12b8(0x30b),_0xfc12b8(0x303),_0xfc12b8(0x3ca),_0xfc12b8(0x31e)];for(const _0x2842ba of _0x597948){_0x598aa8[_0x2842ba][_0x42636e]&&_0x598aa8[_0x2842ba][_0x42636e][_0xfc12b8(0x25a)](this,_0x42636e);}},VisuMZ['SkillsStatesCore'][_0x2cc133(0x2c4)]=Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x16a)],Game_Battler[_0x2cc133(0x320)]['regenerateAll']=function(){const _0x3ae486=_0x2cc133;this['recalculateSlipDamageJS'](),VisuMZ[_0x3ae486(0x28c)]['Game_Battler_regenerateAll']['call'](this),this[_0x3ae486(0x46f)](),this['regenerateAllSkillsStatesCore']();},Game_Battler[_0x2cc133(0x320)]['setPassiveStateSlipDamageJS']=function(){const _0x4e667b=_0x2cc133;for(const _0x3b75c7 of this[_0x4e667b(0x1dc)]()){if(!_0x3b75c7)continue;this['onAddStateMakeCustomSlipValues'](_0x3b75c7['id']);}},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x45e)]=function(){const _0x309067=_0x2cc133;for(const _0x56520b of this[_0x309067(0x366)]()){if(!_0x56520b)continue;_0x56520b[_0x309067(0x376)][_0x309067(0x347)](/<JS SLIP REFRESH>/i)&&this['onAddStateMakeCustomSlipValues'](_0x56520b['id']);}},Game_Battler['prototype'][_0x2cc133(0x455)]=function(){const _0x24d1e2=_0x2cc133;if(!this[_0x24d1e2(0x33a)]())return;const _0x4425cd=this[_0x24d1e2(0x366)]();for(const _0x3e190a of _0x4425cd){if(!_0x3e190a)continue;this[_0x24d1e2(0x23b)](_0x3e190a);}},Game_Battler[_0x2cc133(0x320)][_0x2cc133(0x23b)]=function(_0x10c4e6){const _0x230868=_0x2cc133,_0x2486e2=this[_0x230868(0x2a8)](_0x10c4e6['id'],_0x230868(0x32b))||0x0,_0x2aa9f0=-this[_0x230868(0x47a)](),_0x48cca1=Math[_0x230868(0x2a4)](_0x2486e2,_0x2aa9f0);if(_0x48cca1!==0x0){const _0x2e214e=this[_0x230868(0x1ce)]['hpDamage']||0x0;this[_0x230868(0x1e5)](_0x48cca1),this['_result'][_0x230868(0x3fb)]+=_0x2e214e;}const _0x712326=this[_0x230868(0x2a8)](_0x10c4e6['id'],_0x230868(0x38a))||0x0;if(_0x712326!==0x0){const _0xa5c485=this[_0x230868(0x1ce)]['mpDamage']||0x0;this[_0x230868(0x3d2)](_0x712326),this['_result']['mpDamage']+=_0xa5c485;}const _0x116417=this[_0x230868(0x2a8)](_0x10c4e6['id'],'slipTp')||0x0;_0x116417!==0x0&&this['gainSilentTp'](_0x116417);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x329)]=Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x45d)],Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x45d)]=function(){const _0x48bb51=_0x2cc133,_0x531f37=VisuMZ[_0x48bb51(0x28c)][_0x48bb51(0x329)][_0x48bb51(0x25a)](this),_0x4f100b=VisuMZ['SkillsStatesCore']['Settings']['Skills'];let _0x4b9d6c=_0x4f100b[_0x48bb51(0x2d9)];return $gameParty[_0x48bb51(0x424)]()&&(_0x4b9d6c=_0x4b9d6c[_0x48bb51(0x422)](_0x4f100b['BattleHiddenSkillTypes'])),_0x531f37[_0x48bb51(0x2e4)](_0x2feac9=>!_0x4b9d6c['includes'](_0x2feac9));},Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x189)]=function(){const _0x4fcdf5=_0x2cc133;return this[_0x4fcdf5(0x1f3)]()[_0x4fcdf5(0x2e4)](_0x1fed5d=>this[_0x4fcdf5(0x2ec)](_0x1fed5d));},Game_Actor[_0x2cc133(0x320)]['isSkillUsableForAutoBattle']=function(_0xeb5359){const _0x303d45=_0x2cc133;if(!this[_0x303d45(0x268)](_0xeb5359))return![];if(!_0xeb5359)return![];if(!this[_0x303d45(0x181)](_0xeb5359))return![];if(this['isSkillHidden'](_0xeb5359))return![];return!![];},Game_Actor[_0x2cc133(0x320)]['isSkillTypeMatchForUse']=function(_0x2e3085){const _0xb6ca3b=_0x2cc133,_0x3bd2ef=this[_0xb6ca3b(0x45d)](),_0x35c5dd=DataManager['getSkillTypes'](_0x2e3085),_0x3798ec=_0x3bd2ef[_0xb6ca3b(0x2e4)](_0x283b8f=>_0x35c5dd['includes'](_0x283b8f));return _0x3798ec[_0xb6ca3b(0x3e7)]>0x0;},Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x3ea)]=function(_0x1fbd4c){const _0x3eaf05=_0x2cc133;if(!VisuMZ[_0x3eaf05(0x28c)][_0x3eaf05(0x2fd)](this,_0x1fbd4c))return!![];if(!VisuMZ['SkillsStatesCore'][_0x3eaf05(0x3ec)](this,_0x1fbd4c))return!![];if(!VisuMZ[_0x3eaf05(0x28c)][_0x3eaf05(0x368)](this,_0x1fbd4c))return!![];return![];},Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x2b6)]=function(){const _0x4a7b4d=_0x2cc133;let _0x370fec=[this[_0x4a7b4d(0x469)](),this['currentClass']()];_0x370fec=_0x370fec[_0x4a7b4d(0x422)](this[_0x4a7b4d(0x26c)]()[_0x4a7b4d(0x2e4)](_0x284771=>_0x284771));for(const _0x2c00e2 of this['_skills']){const _0x19bdc7=$dataSkills[_0x2c00e2];if(!_0x19bdc7)continue;if(DataManager[_0x4a7b4d(0x43d)](_0x19bdc7)){if(!this[_0x4a7b4d(0x261)](_0x19bdc7))continue;}_0x370fec[_0x4a7b4d(0x332)](_0x19bdc7);}return _0x370fec;},Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x486)]=function(){const _0x24e780=_0x2cc133;Game_Battler[_0x24e780(0x320)][_0x24e780(0x486)][_0x24e780(0x25a)](this);const _0x1b295e=VisuMZ[_0x24e780(0x28c)]['Settings'][_0x24e780(0x1ed)][_0x24e780(0x348)];this[_0x24e780(0x44d)][_0x24e780(0x1dc)]=this['_cache'][_0x24e780(0x1dc)][_0x24e780(0x422)](_0x1b295e);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x272)]=Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x470)],Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x470)]=function(_0x3c815d){const _0x4a18ba=_0x2cc133;VisuMZ[_0x4a18ba(0x28c)][_0x4a18ba(0x272)][_0x4a18ba(0x25a)](this,_0x3c815d),this[_0x4a18ba(0x44d)]={},this[_0x4a18ba(0x1dc)]();},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x43b)]=Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x387)],Game_Actor[_0x2cc133(0x320)][_0x2cc133(0x387)]=function(_0x4c7793){const _0x2914a4=_0x2cc133;VisuMZ['SkillsStatesCore'][_0x2914a4(0x43b)][_0x2914a4(0x25a)](this,_0x4c7793),this[_0x2914a4(0x44d)]={},this[_0x2914a4(0x1dc)]();},Game_Actor['prototype'][_0x2cc133(0x392)]=function(){const _0x52fb42=_0x2cc133;return VisuMZ[_0x52fb42(0x28c)][_0x52fb42(0x26f)][_0x52fb42(0x2fa)][_0x52fb42(0x302)]??0x14;},Game_Enemy[_0x2cc133(0x320)]['passiveStateObjects']=function(){const _0x575297=_0x2cc133;let _0x5a9405=[this[_0x575297(0x222)]()];return _0x5a9405[_0x575297(0x422)](this[_0x575297(0x1f3)]());},Game_Enemy[_0x2cc133(0x320)][_0x2cc133(0x486)]=function(){const _0x52f4cd=_0x2cc133;Game_Battler['prototype'][_0x52f4cd(0x486)][_0x52f4cd(0x25a)](this);const _0x4c92b3=VisuMZ['SkillsStatesCore'][_0x52f4cd(0x26f)][_0x52f4cd(0x1ed)][_0x52f4cd(0x3be)];this[_0x52f4cd(0x44d)][_0x52f4cd(0x1dc)]=this[_0x52f4cd(0x44d)][_0x52f4cd(0x1dc)][_0x52f4cd(0x422)](_0x4c92b3);},Game_Enemy[_0x2cc133(0x320)][_0x2cc133(0x1f3)]=function(){const _0x23e172=_0x2cc133,_0x3cf911=[];for(const _0x38d474 of this[_0x23e172(0x222)]()[_0x23e172(0x1db)]){const _0x513a2f=$dataSkills[_0x38d474['skillId']];if(_0x513a2f&&!_0x3cf911[_0x23e172(0x19c)](_0x513a2f))_0x3cf911[_0x23e172(0x332)](_0x513a2f);}return _0x3cf911;},Game_Enemy[_0x2cc133(0x320)][_0x2cc133(0x1ff)]=function(_0x39b5e0){return this['hasState']($dataStates[_0x39b5e0]);},VisuMZ['SkillsStatesCore'][_0x2cc133(0x18e)]=Game_Unit['prototype']['isAllDead'],Game_Unit[_0x2cc133(0x320)]['isAllDead']=function(){const _0x45e5d4=_0x2cc133;if(this[_0x45e5d4(0x286)]())return!![];return VisuMZ['SkillsStatesCore'][_0x45e5d4(0x18e)][_0x45e5d4(0x25a)](this);},Game_Unit[_0x2cc133(0x320)]['isPartyAllAffectedByGroupDefeatStates']=function(){const _0x572479=_0x2cc133,_0xf87030=this['aliveMembers']();for(const _0x4073b6 of _0xf87030){if(!_0x4073b6[_0x572479(0x2ab)]())return![];}return!![];},Game_Unit[_0x2cc133(0x320)][_0x2cc133(0x293)]=function(){const _0x343c4e=_0x2cc133;for(const _0x2b8506 of this[_0x343c4e(0x399)]()){if(!_0x2b8506)continue;_0x2b8506['refresh']();}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x244)]=Game_Player[_0x2cc133(0x320)][_0x2cc133(0x432)],Game_Player[_0x2cc133(0x320)][_0x2cc133(0x432)]=function(){const _0x37df8b=_0x2cc133;VisuMZ[_0x37df8b(0x28c)][_0x37df8b(0x244)][_0x37df8b(0x25a)](this),$gameParty[_0x37df8b(0x293)](),$gameParty[_0x37df8b(0x424)]()&&$gameTroop[_0x37df8b(0x293)]();},VisuMZ[_0x2cc133(0x28c)]['Game_Troop_setup']=Game_Troop['prototype'][_0x2cc133(0x397)],Game_Troop[_0x2cc133(0x320)][_0x2cc133(0x397)]=function(_0x1f009b){const _0x968d63=_0x2cc133;VisuMZ[_0x968d63(0x28c)][_0x968d63(0x3d8)][_0x968d63(0x25a)](this,_0x1f009b),this['makeCurrentTroopUniqueID']();},Game_Troop[_0x2cc133(0x320)][_0x2cc133(0x30f)]=function(){const _0x190a4e=_0x2cc133;this[_0x190a4e(0x1a1)]=Graphics[_0x190a4e(0x462)];},Game_Troop[_0x2cc133(0x320)][_0x2cc133(0x1bc)]=function(){const _0x584667=_0x2cc133;return this['_currentTroopUniqueID']=this[_0x584667(0x1a1)]||Graphics[_0x584667(0x462)],this[_0x584667(0x1a1)];},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x19f)]=function(){const _0x3ad375=_0x2cc133;if(ConfigManager[_0x3ad375(0x198)]&&ConfigManager[_0x3ad375(0x3cf)]!==undefined)return ConfigManager[_0x3ad375(0x3cf)];else{if(this[_0x3ad375(0x277)]())return this[_0x3ad375(0x2ee)]()[_0x3ad375(0x347)](/LOWER/i);else Scene_ItemBase[_0x3ad375(0x320)][_0x3ad375(0x47c)][_0x3ad375(0x25a)](this);}},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x47c)]=function(){const _0x50b13a=_0x2cc133;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager['uiInputPosition'];else return this['isUseSkillsStatesCoreUpdatedLayout']()?this[_0x50b13a(0x2ee)]()['match'](/RIGHT/i):Scene_ItemBase['prototype'][_0x50b13a(0x47c)]['call'](this);},Scene_Skill[_0x2cc133(0x320)]['updatedLayoutStyle']=function(){const _0x18433e=_0x2cc133;return VisuMZ['SkillsStatesCore'][_0x18433e(0x26f)]['Skills'][_0x18433e(0x410)];},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x364)]=function(){const _0x3bce30=_0x2cc133;return this[_0x3bce30(0x199)]&&this[_0x3bce30(0x199)]['isUseModernControls']();},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x277)]=function(){const _0x290e22=_0x2cc133;return VisuMZ[_0x290e22(0x28c)][_0x290e22(0x26f)][_0x290e22(0x1a4)][_0x290e22(0x314)];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3de)]=Scene_Skill['prototype']['helpWindowRect'],Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x425)]=function(){const _0x1c554d=_0x2cc133;return this[_0x1c554d(0x277)]()?this[_0x1c554d(0x342)]():VisuMZ['SkillsStatesCore'][_0x1c554d(0x3de)]['call'](this);},Scene_Skill[_0x2cc133(0x320)]['helpWindowRectSkillsStatesCore']=function(){const _0x14a611=_0x2cc133,_0x1633e3=0x0,_0x253b2e=this['helpAreaTop'](),_0x88f6e2=Graphics[_0x14a611(0x2c5)],_0x33f588=this[_0x14a611(0x200)]();return new Rectangle(_0x1633e3,_0x253b2e,_0x88f6e2,_0x33f588);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3f8)]=Scene_Skill[_0x2cc133(0x320)]['skillTypeWindowRect'],Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x30e)]=function(){const _0x3284c7=_0x2cc133;return this[_0x3284c7(0x277)]()?this[_0x3284c7(0x30d)]():VisuMZ[_0x3284c7(0x28c)][_0x3284c7(0x3f8)][_0x3284c7(0x25a)](this);},Scene_Skill[_0x2cc133(0x320)]['mainCommandWidth']=function(){const _0x15330f=_0x2cc133;return VisuMZ['SkillsStatesCore']['Settings'][_0x15330f(0x1a4)]['CmdWidth']??Scene_MenuBase[_0x15330f(0x320)]['mainCommandWidth'][_0x15330f(0x25a)](this);},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x30d)]=function(){const _0x4450b0=_0x2cc133,_0x2db0cd=this[_0x4450b0(0x3ed)](),_0x293455=this[_0x4450b0(0x3ba)](0x3,!![]),_0x2d77dd=this[_0x4450b0(0x47c)]()?Graphics['boxWidth']-_0x2db0cd:0x0,_0x24b3e3=this[_0x4450b0(0x20a)]();return new Rectangle(_0x2d77dd,_0x24b3e3,_0x2db0cd,_0x293455);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x449)]=Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x3d3)],Scene_Skill[_0x2cc133(0x320)]['statusWindowRect']=function(){const _0x14e37d=_0x2cc133;return this[_0x14e37d(0x277)]()?this[_0x14e37d(0x442)]():VisuMZ['SkillsStatesCore'][_0x14e37d(0x449)][_0x14e37d(0x25a)](this);},Scene_Skill['prototype']['statusWindowRectSkillsStatesCore']=function(){const _0x3287cd=_0x2cc133,_0x7c6445=Graphics[_0x3287cd(0x2c5)]-this[_0x3287cd(0x3ed)](),_0x1b65af=this[_0x3287cd(0x2b2)][_0x3287cd(0x1c1)],_0x3f73d4=this[_0x3287cd(0x47c)]()?0x0:Graphics[_0x3287cd(0x2c5)]-_0x7c6445,_0x415f05=this[_0x3287cd(0x20a)]();return new Rectangle(_0x3f73d4,_0x415f05,_0x7c6445,_0x1b65af);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x1c0)]=Scene_Skill[_0x2cc133(0x320)]['createItemWindow'],Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x20c)]=function(){const _0x2e66fa=_0x2cc133;VisuMZ['SkillsStatesCore']['Scene_Skill_createItemWindow'][_0x2e66fa(0x25a)](this),this['allowCreateShopStatusWindow']()&&this[_0x2e66fa(0x3f5)]();},VisuMZ[_0x2cc133(0x28c)]['Scene_Skill_itemWindowRect']=Scene_Skill[_0x2cc133(0x320)]['itemWindowRect'],Scene_Skill[_0x2cc133(0x320)]['itemWindowRect']=function(){const _0x3dbbc3=_0x2cc133;if(this[_0x3dbbc3(0x277)]())return this[_0x3dbbc3(0x337)]();else{const _0xc95241=VisuMZ[_0x3dbbc3(0x28c)][_0x3dbbc3(0x25e)]['call'](this);return this[_0x3dbbc3(0x301)]()&&this[_0x3dbbc3(0x186)]()&&(_0xc95241[_0x3dbbc3(0x300)]-=this[_0x3dbbc3(0x1fb)]()),_0xc95241;}},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x337)]=function(){const _0x41e5f3=_0x2cc133,_0x4b7c19=Graphics[_0x41e5f3(0x2c5)]-this['shopStatusWidth'](),_0x407cdd=this[_0x41e5f3(0x3c2)]()-this['_statusWindow'][_0x41e5f3(0x1c1)],_0x5883d2=this[_0x41e5f3(0x47c)]()?Graphics['boxWidth']-_0x4b7c19:0x0,_0xb1e395=this[_0x41e5f3(0x241)]['y']+this[_0x41e5f3(0x241)][_0x41e5f3(0x1c1)];return new Rectangle(_0x5883d2,_0xb1e395,_0x4b7c19,_0x407cdd);},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x301)]=function(){const _0x2da820=_0x2cc133;if(!Imported[_0x2da820(0x17e)])return![];else return this[_0x2da820(0x277)]()?!![]:VisuMZ[_0x2da820(0x28c)]['Settings'][_0x2da820(0x1a4)][_0x2da820(0x285)];},Scene_Skill['prototype']['adjustItemWidthByShopStatus']=function(){const _0x4509e7=_0x2cc133;return VisuMZ[_0x4509e7(0x28c)][_0x4509e7(0x26f)][_0x4509e7(0x1a4)][_0x4509e7(0x2c1)];},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x3f5)]=function(){const _0x5cbc89=_0x2cc133,_0x19c12d=this['shopStatusWindowRect']();this[_0x5cbc89(0x1c5)]=new Window_ShopStatus(_0x19c12d),this['addWindow'](this['_shopStatusWindow']),this[_0x5cbc89(0x421)]['setStatusWindow'](this['_shopStatusWindow']);const _0x310e2b=VisuMZ['SkillsStatesCore']['Settings'][_0x5cbc89(0x1a4)][_0x5cbc89(0x234)];this[_0x5cbc89(0x1c5)][_0x5cbc89(0x3c0)](_0x310e2b||0x0);},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x1ad)]=function(){const _0x42d629=_0x2cc133;return this[_0x42d629(0x277)]()?this[_0x42d629(0x46b)]():VisuMZ[_0x42d629(0x28c)]['Settings'][_0x42d629(0x1a4)]['SkillMenuStatusRect']['call'](this);},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x46b)]=function(){const _0xfe8162=_0x2cc133,_0x5d1406=this[_0xfe8162(0x1fb)](),_0x1d1b8a=this['_itemWindow'][_0xfe8162(0x1c1)],_0x148554=this[_0xfe8162(0x47c)]()?0x0:Graphics[_0xfe8162(0x2c5)]-this[_0xfe8162(0x1fb)](),_0x3be770=this['_itemWindow']['y'];return new Rectangle(_0x148554,_0x3be770,_0x5d1406,_0x1d1b8a);},Scene_Skill['prototype'][_0x2cc133(0x1fb)]=function(){const _0x5e8218=_0x2cc133;return Imported[_0x5e8218(0x17e)]?Scene_Shop[_0x5e8218(0x320)][_0x5e8218(0x1c8)]():0x0;},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x3c3)]=function(){const _0x174450=_0x2cc133;return this['_skillTypeWindow']&&this[_0x174450(0x2b2)][_0x174450(0x1ba)]?TextManager[_0x174450(0x413)]:'';},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x195)]=Scene_Skill['prototype'][_0x2cc133(0x173)],Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x173)]=function(){const _0x3e9526=_0x2cc133,_0x57317f=this['item']();DataManager['isToggleSkill'](_0x57317f)?this[_0x3e9526(0x3bd)]():VisuMZ['SkillsStatesCore'][_0x3e9526(0x195)][_0x3e9526(0x25a)](this);},Scene_Skill[_0x2cc133(0x320)][_0x2cc133(0x3bd)]=function(){const _0x20a2d3=_0x2cc133;SoundManager[_0x20a2d3(0x2c8)]();const _0x4f5792=this[_0x20a2d3(0x20f)](),_0x5d8f56=this[_0x20a2d3(0x469)]()[_0x20a2d3(0x261)](_0x4f5792);if(!_0x5d8f56)this[_0x20a2d3(0x469)]()[_0x20a2d3(0x221)](_0x4f5792);this[_0x20a2d3(0x469)]()[_0x20a2d3(0x279)](_0x4f5792,!_0x5d8f56),this[_0x20a2d3(0x421)][_0x20a2d3(0x432)](),this[_0x20a2d3(0x421)][_0x20a2d3(0x2c3)]();if(this[_0x20a2d3(0x241)])this[_0x20a2d3(0x241)][_0x20a2d3(0x432)]();},VisuMZ[_0x2cc133(0x28c)]['Scene_Battle_onSkillOk_Toggle']=Scene_Battle['prototype'][_0x2cc133(0x3ab)],Scene_Battle[_0x2cc133(0x320)][_0x2cc133(0x3ab)]=function(){const _0x4ab251=_0x2cc133,_0x22634d=this[_0x4ab251(0x452)][_0x4ab251(0x20f)]();DataManager['isToggleSkill'](_0x22634d)?this[_0x4ab251(0x3bd)]():VisuMZ[_0x4ab251(0x28c)]['Scene_Battle_onSkillOk_Toggle']['call'](this);},Scene_Battle[_0x2cc133(0x320)][_0x2cc133(0x3bd)]=function(){const _0x4b9667=_0x2cc133;SoundManager['playEquip']();const _0x1973af=this['_skillWindow'][_0x4b9667(0x20f)](),_0x452c56=BattleManager[_0x4b9667(0x469)](),_0x11533a=_0x452c56[_0x4b9667(0x261)](_0x1973af);if(!_0x11533a)_0x452c56[_0x4b9667(0x221)](_0x1973af);_0x452c56['setSkillToggle'](_0x1973af,!_0x11533a);if(Imported[_0x4b9667(0x245)]){let _0x54f52f=0x0;_0x452c56[_0x4b9667(0x261)](_0x1973af)?_0x1973af['note'][_0x4b9667(0x347)](/<TOGGLE ON (?:ANI|ANIMATION):[ ](\d+)>/i)?_0x54f52f=Number(RegExp['$1']):_0x54f52f=_0x1973af[_0x4b9667(0x1aa)]||0x0:_0x1973af[_0x4b9667(0x376)][_0x4b9667(0x347)](/<TOGGLE OFF (?:ANI|ANIMATION):[ ](\d+)>/i)?_0x54f52f=Number(RegExp['$1']):_0x54f52f=VisuMZ['SkillsStatesCore'][_0x4b9667(0x26f)][_0x4b9667(0x2b8)][_0x4b9667(0x1cc)]??0x0,_0x54f52f>0x0&&$gameTemp[_0x4b9667(0x2dc)]([_0x452c56],_0x54f52f,![],![]);}this['_skillWindow'][_0x4b9667(0x432)](),this[_0x4b9667(0x452)][_0x4b9667(0x2c3)]();if(this[_0x4b9667(0x241)])this[_0x4b9667(0x241)][_0x4b9667(0x432)]();},VisuMZ['SkillsStatesCore'][_0x2cc133(0x3d4)]=Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x282)],Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x282)]=function(){const _0x15cd1b=_0x2cc133;VisuMZ[_0x15cd1b(0x28c)]['Sprite_Gauge_initMembers'][_0x15cd1b(0x25a)](this),this[_0x15cd1b(0x308)]=null;},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x1e0)]=Sprite_Gauge[_0x2cc133(0x320)]['setup'],Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x397)]=function(_0x369b64,_0x446664){const _0x115cb2=_0x2cc133;this[_0x115cb2(0x467)](_0x369b64,_0x446664),_0x446664=_0x446664[_0x115cb2(0x351)](),VisuMZ[_0x115cb2(0x28c)][_0x115cb2(0x1e0)][_0x115cb2(0x25a)](this,_0x369b64,_0x446664);},Sprite_Gauge['prototype'][_0x2cc133(0x467)]=function(_0x5d0ac9,_0x15f1a7){const _0x5ed728=_0x2cc133,_0x33cb4b=VisuMZ[_0x5ed728(0x28c)][_0x5ed728(0x26f)][_0x5ed728(0x3c4)][_0x5ed728(0x2e4)](_0x13965e=>_0x13965e[_0x5ed728(0x18c)][_0x5ed728(0x21e)]()===_0x15f1a7[_0x5ed728(0x21e)]());_0x33cb4b['length']>=0x1?this['_costSettings']=_0x33cb4b[0x0]:this[_0x5ed728(0x308)]=null;},VisuMZ['SkillsStatesCore'][_0x2cc133(0x401)]=Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x1b0)],Sprite_Gauge[_0x2cc133(0x320)]['currentValue']=function(){const _0x22eb9d=_0x2cc133;return this['_battler']&&this[_0x22eb9d(0x308)]?this[_0x22eb9d(0x201)]():VisuMZ['SkillsStatesCore'][_0x22eb9d(0x401)][_0x22eb9d(0x25a)](this);},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x201)]=function(){const _0x509f20=_0x2cc133;return this['_costSettings'][_0x509f20(0x39c)]['call'](this[_0x509f20(0x2c2)]);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3dd)]=Sprite_Gauge['prototype'][_0x2cc133(0x1e2)],Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x1e2)]=function(){const _0x4187ff=_0x2cc133;return this[_0x4187ff(0x2c2)]&&this['_costSettings']?this['currentMaxValueSkillsStatesCore']():VisuMZ[_0x4187ff(0x28c)][_0x4187ff(0x3dd)][_0x4187ff(0x25a)](this);},Sprite_Gauge['prototype'][_0x2cc133(0x304)]=function(){const _0x5dee4c=_0x2cc133;return this[_0x5dee4c(0x308)][_0x5dee4c(0x29a)][_0x5dee4c(0x25a)](this[_0x5dee4c(0x2c2)]);},VisuMZ[_0x2cc133(0x28c)]['Sprite_Gauge_gaugeRate']=Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x38f)],Sprite_Gauge[_0x2cc133(0x320)]['gaugeRate']=function(){const _0x50ada2=_0x2cc133,_0x31552e=VisuMZ['SkillsStatesCore'][_0x50ada2(0x334)]['call'](this);return _0x31552e[_0x50ada2(0x22c)](0x0,0x1);},VisuMZ['SkillsStatesCore'][_0x2cc133(0x419)]=Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x263)],Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x263)]=function(){const _0x3160b2=_0x2cc133;this['_battler']&&this['_costSettings']?(this['bitmap'][_0x3160b2(0x3b1)](),this[_0x3160b2(0x2e3)]()):VisuMZ[_0x3160b2(0x28c)]['Sprite_Gauge_redraw']['call'](this);},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x47d)]=function(){const _0x47a62e=_0x2cc133;let _0x51d43b=this[_0x47a62e(0x1b0)]();return Imported[_0x47a62e(0x245)]&&this['useDigitGrouping']()&&(_0x51d43b=VisuMZ[_0x47a62e(0x1b3)](_0x51d43b)),_0x51d43b;},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x2e3)]=function(){const _0x54ea49=_0x2cc133;this[_0x54ea49(0x16e)][_0x54ea49(0x3b1)](),this[_0x54ea49(0x308)][_0x54ea49(0x2bc)]['call'](this);},Sprite_Gauge[_0x2cc133(0x320)]['drawFullGauge']=function(_0x47d619,_0xbe2132,_0x29b762,_0x2c4580,_0xcde2f,_0x2120fa){const _0xc8c458=_0x2cc133,_0x293139=this['gaugeRate'](),_0x348932=Math[_0xc8c458(0x3ae)]((_0xcde2f-0x2)*_0x293139),_0x1effc2=_0x2120fa-0x2,_0x4ef1c5=this[_0xc8c458(0x185)]();this[_0xc8c458(0x16e)][_0xc8c458(0x280)](_0x29b762,_0x2c4580,_0xcde2f,_0x2120fa,_0x4ef1c5),this[_0xc8c458(0x16e)][_0xc8c458(0x205)](_0x29b762+0x1,_0x2c4580+0x1,_0x348932,_0x1effc2,_0x47d619,_0xbe2132);},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x3a6)]=function(){const _0x4b55f8=_0x2cc133,_0x5ded06=VisuMZ['SkillsStatesCore'][_0x4b55f8(0x26f)][_0x4b55f8(0x2fb)];return _0x5ded06[_0x4b55f8(0x306)]===_0x4b55f8(0x359)?$gameSystem['numberFontFace']():$gameSystem[_0x4b55f8(0x1d5)]();},Sprite_Gauge[_0x2cc133(0x320)]['labelFontSize']=function(){const _0x46b508=_0x2cc133,_0x3b810f=VisuMZ[_0x46b508(0x28c)]['Settings'][_0x46b508(0x2fb)];return _0x3b810f['LabelFontMainType']===_0x46b508(0x359)?$gameSystem[_0x46b508(0x255)]()-0x6:$gameSystem['mainFontSize']()-0x2;},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x444)]=function(){const _0x21254e=_0x2cc133,_0x740305=VisuMZ[_0x21254e(0x28c)][_0x21254e(0x26f)]['Gauge'];return _0x740305['ValueFontMainType']==='number'?$gameSystem[_0x21254e(0x310)]():$gameSystem[_0x21254e(0x1d5)]();},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x321)]=function(){const _0x244fbe=_0x2cc133,_0x114ddf=VisuMZ[_0x244fbe(0x28c)]['Settings'][_0x244fbe(0x2fb)];return _0x114ddf['ValueFontMainType']===_0x244fbe(0x359)?$gameSystem[_0x244fbe(0x255)]()-0x6:$gameSystem['mainFontSize']()-0x2;},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x17d)]=function(){const _0x35da19=_0x2cc133,_0x4a9b08=VisuMZ[_0x35da19(0x28c)][_0x35da19(0x26f)][_0x35da19(0x2fb)];if(_0x4a9b08[_0x35da19(0x35e)]){if(_0x4a9b08[_0x35da19(0x3f1)]===0x1)return this[_0x35da19(0x2d5)]();else{if(_0x4a9b08[_0x35da19(0x3f1)]===0x2)return this['gaugeColor2']();}}const _0x506424=_0x4a9b08[_0x35da19(0x3e6)];return ColorManager[_0x35da19(0x247)](_0x506424);},Sprite_Gauge[_0x2cc133(0x320)]['labelOutlineColor']=function(){const _0x51c786=_0x2cc133,_0xcd6c35=VisuMZ[_0x51c786(0x28c)]['Settings']['Gauge'];if(this['labelOutlineWidth']()<=0x0)return _0x51c786(0x28b);else return _0xcd6c35['LabelOutlineSolid']?_0x51c786(0x1b9):ColorManager['outlineColor']();},Sprite_Gauge['prototype'][_0x2cc133(0x465)]=function(){const _0x922184=_0x2cc133;return VisuMZ[_0x922184(0x28c)]['Settings'][_0x922184(0x2fb)]['LabelOutlineWidth']||0x0;},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x3a5)]=function(){const _0x53c908=_0x2cc133,_0x576b5f=VisuMZ[_0x53c908(0x28c)][_0x53c908(0x26f)][_0x53c908(0x2fb)];if(this['valueOutlineWidth']()<=0x0)return _0x53c908(0x28b);else return _0x576b5f[_0x53c908(0x258)]?'rgba(0,\x200,\x200,\x201)':ColorManager[_0x53c908(0x175)]();},Sprite_Gauge[_0x2cc133(0x320)][_0x2cc133(0x192)]=function(){const _0x2bfc29=_0x2cc133;return VisuMZ[_0x2bfc29(0x28c)][_0x2bfc29(0x26f)]['Gauge'][_0x2bfc29(0x219)]||0x0;},VisuMZ['SkillsStatesCore'][_0x2cc133(0x2e2)]=Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x1ef)],Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x1ef)]=function(){const _0x28355d=_0x2cc133;VisuMZ[_0x28355d(0x28c)][_0x28355d(0x2e2)][_0x28355d(0x25a)](this),this['createTurnDisplaySprite']();},Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x290)]=function(){const _0x28b872=_0x2cc133,_0x22010e=Window_Base[_0x28b872(0x320)]['lineHeight']();this['_turnDisplaySprite']=new Sprite(),this[_0x28b872(0x243)][_0x28b872(0x16e)]=new Bitmap(ImageManager[_0x28b872(0x208)],_0x22010e),this[_0x28b872(0x243)][_0x28b872(0x18d)]['x']=this[_0x28b872(0x18d)]['x'],this[_0x28b872(0x243)][_0x28b872(0x18d)]['y']=this[_0x28b872(0x18d)]['y'],this[_0x28b872(0x270)](this['_turnDisplaySprite']),this['contents']=this['_turnDisplaySprite'][_0x28b872(0x16e)];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x361)]=Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x390)],Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x390)]=function(){const _0x34ada8=_0x2cc133;VisuMZ[_0x34ada8(0x28c)][_0x34ada8(0x361)]['call'](this),this['updateTurnDisplaySprite']();},Sprite_StateIcon['prototype']['drawText']=function(_0x5d623d,_0x14d142,_0x49a3cf,_0x3dddf8,_0x2faf8f){const _0x4e747b=_0x2cc133;this['contents'][_0x4e747b(0x36c)](_0x5d623d,_0x14d142,_0x49a3cf,_0x3dddf8,this[_0x4e747b(0x41a)][_0x4e747b(0x1c1)],_0x2faf8f);},Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x23a)]=function(){const _0x55dccb=_0x2cc133;this[_0x55dccb(0x416)](),this[_0x55dccb(0x41a)][_0x55dccb(0x3b1)]();const _0x137afa=this[_0x55dccb(0x2c2)];if(!_0x137afa)return;const _0x3531bf=_0x137afa[_0x55dccb(0x366)]()[_0x55dccb(0x2e4)](_0x208eb6=>_0x208eb6[_0x55dccb(0x472)]>0x0),_0x3e332d=[...Array(0x8)['keys']()][_0x55dccb(0x2e4)](_0x3f6818=>_0x137afa[_0x55dccb(0x2c9)](_0x3f6818)!==0x0),_0x37ac9e=this[_0x55dccb(0x384)],_0x1a1daf=_0x3531bf[_0x37ac9e];if(_0x1a1daf)Window_Base[_0x55dccb(0x320)][_0x55dccb(0x26a)][_0x55dccb(0x25a)](this,_0x137afa,_0x1a1daf,0x0,0x0),Window_Base[_0x55dccb(0x320)][_0x55dccb(0x464)][_0x55dccb(0x25a)](this,_0x137afa,_0x1a1daf,0x0,0x0);else{const _0x101e42=_0x3e332d[_0x37ac9e-_0x3531bf[_0x55dccb(0x3e7)]];if(_0x101e42===undefined)return;Window_Base[_0x55dccb(0x320)][_0x55dccb(0x33c)][_0x55dccb(0x25a)](this,_0x137afa,_0x101e42,0x0,0x0),Window_Base[_0x55dccb(0x320)]['drawActorBuffRates']['call'](this,_0x137afa,_0x101e42,0x0,0x0);}},Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x416)]=function(){const _0x2bf2a4=_0x2cc133;this[_0x2bf2a4(0x41a)][_0x2bf2a4(0x37c)]=$gameSystem[_0x2bf2a4(0x1d5)](),this['contents'][_0x2bf2a4(0x420)]=$gameSystem[_0x2bf2a4(0x255)](),this[_0x2bf2a4(0x395)]();},Sprite_StateIcon['prototype'][_0x2cc133(0x395)]=function(){const _0x22d59e=_0x2cc133;this[_0x22d59e(0x296)](ColorManager['normalColor']()),this[_0x22d59e(0x326)](ColorManager[_0x22d59e(0x175)]());},Sprite_StateIcon['prototype'][_0x2cc133(0x296)]=function(_0x25a55f){const _0x530d33=_0x2cc133;this['contents'][_0x530d33(0x3aa)]=_0x25a55f;},Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x326)]=function(_0xee2850){const _0x4f45e9=_0x2cc133;this[_0x4f45e9(0x41a)][_0x4f45e9(0x175)]=_0xee2850;},Sprite_StateIcon[_0x2cc133(0x320)][_0x2cc133(0x394)]=function(){const _0x4bf899=_0x2cc133;this[_0x4bf899(0x2f8)]=!![],this[_0x4bf899(0x39e)]();},Window_Base['prototype'][_0x2cc133(0x21a)]=function(_0xc9debc,_0x3cecab,_0x546ea3,_0xdca5b5,_0x26cd78){const _0x28b7e6=_0x2cc133,_0x489022=this[_0x28b7e6(0x3a0)](_0xc9debc,_0x3cecab),_0x52f8f7=this['textSizeEx'](_0x489022,_0x546ea3,_0xdca5b5,_0x26cd78),_0x5b46c1=_0x546ea3+_0x26cd78-_0x52f8f7[_0x28b7e6(0x300)];this['drawTextEx'](_0x489022,_0x5b46c1,_0xdca5b5,_0x26cd78),this[_0x28b7e6(0x416)]();},Window_Base['prototype'][_0x2cc133(0x3a0)]=function(_0x5e51a4,_0x4e01a1){const _0x5389c5=_0x2cc133;let _0x35ef31='';for(settings of VisuMZ['SkillsStatesCore'][_0x5389c5(0x26f)][_0x5389c5(0x3c4)]){if(!this[_0x5389c5(0x25d)](_0x5e51a4,_0x4e01a1,settings))continue;if(_0x35ef31['length']>0x0)_0x35ef31+=this[_0x5389c5(0x36b)]();_0x35ef31+=this[_0x5389c5(0x1be)](_0x5e51a4,_0x4e01a1,settings);}_0x35ef31=this[_0x5389c5(0x257)](_0x5e51a4,_0x4e01a1,_0x35ef31);if(_0x4e01a1[_0x5389c5(0x376)][_0x5389c5(0x347)](/<CUSTOM COST TEXT>\s*([\s\S]*)\s*<\/CUSTOM COST TEXT>/i)){if(_0x35ef31[_0x5389c5(0x3e7)]>0x0)_0x35ef31+=this[_0x5389c5(0x36b)]();_0x35ef31+=String(RegExp['$1']);}return _0x35ef31;},Window_Base[_0x2cc133(0x320)]['makeAdditionalSkillCostText']=function(_0x61f695,_0x79dc12,_0x15a19d){return _0x15a19d;},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x25d)]=function(_0x20d5e8,_0x4cc089,_0x5a3c61){const _0x33ffdb=_0x2cc133;let _0x23e22c=_0x5a3c61['CalcJS'][_0x33ffdb(0x25a)](_0x20d5e8,_0x4cc089);return _0x23e22c=_0x20d5e8[_0x33ffdb(0x2f2)](_0x4cc089,_0x23e22c,_0x5a3c61),_0x5a3c61[_0x33ffdb(0x220)][_0x33ffdb(0x25a)](_0x20d5e8,_0x4cc089,_0x23e22c,_0x5a3c61);},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x1be)]=function(_0xbac3b2,_0x3e7972,_0x33e160){const _0x24ac06=_0x2cc133;let _0x187191=_0x33e160['CalcJS'][_0x24ac06(0x25a)](_0xbac3b2,_0x3e7972);return _0x187191=_0xbac3b2[_0x24ac06(0x2f2)](_0x3e7972,_0x187191,_0x33e160),_0x33e160['TextJS'][_0x24ac06(0x25a)](_0xbac3b2,_0x3e7972,_0x187191,_0x33e160);},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x36b)]=function(){return'\x20';},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x27a)]=function(_0x422c4e,_0x570e24,_0x948333,_0x43a170){const _0x2eccad=_0x2cc133;if(!_0x422c4e)return;VisuMZ[_0x2eccad(0x28c)][_0x2eccad(0x248)][_0x2eccad(0x25a)](this,_0x422c4e,_0x570e24,_0x948333,_0x43a170),this[_0x2eccad(0x38c)](_0x422c4e,_0x570e24,_0x948333,_0x43a170);},Window_Base[_0x2cc133(0x320)]['drawActorIconsAllTurnCounters']=function(_0x4a93b7,_0x2b72f4,_0x40d403,_0x3214b0){const _0x50d57e=_0x2cc133;_0x3214b0=_0x3214b0||0x90;const _0x405dca=ImageManager[_0x50d57e(0x324)]||0x20,_0x2bebeb=ImageManager[_0x50d57e(0x21d)]||0x20,_0x320939=_0x405dca,_0x473123=_0x4a93b7['allIcons']()[_0x50d57e(0x318)](0x0,Math[_0x50d57e(0x3ae)](_0x3214b0/_0x320939)),_0x4f36e0=_0x4a93b7[_0x50d57e(0x366)]()['filter'](_0x33efd6=>_0x33efd6[_0x50d57e(0x472)]>0x0),_0x34c224=[...Array(0x8)[_0x50d57e(0x1e6)]()]['filter'](_0x190b7c=>_0x4a93b7[_0x50d57e(0x2c9)](_0x190b7c)!==0x0),_0x46105a=[];let _0x282642=_0x2b72f4;for(let _0x30d62d=0x0;_0x30d62d<_0x473123['length'];_0x30d62d++){this[_0x50d57e(0x416)]();const _0x356231=_0x4f36e0[_0x30d62d];if(_0x356231)!_0x46105a[_0x50d57e(0x19c)](_0x356231)&&this[_0x50d57e(0x26a)](_0x4a93b7,_0x356231,_0x282642,_0x40d403),this['drawActorStateData'](_0x4a93b7,_0x356231,_0x282642,_0x40d403),_0x46105a['push'](_0x356231);else{const _0x288e3d=_0x34c224[_0x30d62d-_0x4f36e0[_0x50d57e(0x3e7)]];this['drawActorBuffTurns'](_0x4a93b7,_0x288e3d,_0x282642,_0x40d403),this[_0x50d57e(0x461)](_0x4a93b7,_0x288e3d,_0x282642,_0x40d403);}_0x282642+=_0x320939;}},Window_Base[_0x2cc133(0x320)]['drawActorStateTurns']=function(_0xa9ab,_0x11cb8d,_0x3249ee,_0x2ceb2a){const _0x3614f4=_0x2cc133;if(!VisuMZ[_0x3614f4(0x28c)][_0x3614f4(0x26f)]['States'][_0x3614f4(0x1eb)])return;if(!_0xa9ab['isStateAffected'](_0x11cb8d['id']))return;if(_0x11cb8d[_0x3614f4(0x2de)]===0x0)return;if(_0x11cb8d[_0x3614f4(0x376)]['match'](/<HIDE STATE TURNS>/i))return;const _0xffc6b6=ImageManager[_0x3614f4(0x324)]||0x20,_0x2a8638=_0xffc6b6,_0x319051=_0xa9ab[_0x3614f4(0x32f)](_0x11cb8d['id']),_0xc22c10=ColorManager[_0x3614f4(0x2cf)](_0x11cb8d);this[_0x3614f4(0x296)](_0xc22c10),this[_0x3614f4(0x326)]('rgba(0,\x200,\x200,\x201)'),this['contents']['fontBold']=!![],this[_0x3614f4(0x41a)][_0x3614f4(0x420)]=VisuMZ['SkillsStatesCore'][_0x3614f4(0x26f)][_0x3614f4(0x2fa)][_0x3614f4(0x2b9)],_0x3249ee+=VisuMZ[_0x3614f4(0x28c)][_0x3614f4(0x26f)]['States'][_0x3614f4(0x3db)],_0x2ceb2a+=VisuMZ[_0x3614f4(0x28c)]['Settings'][_0x3614f4(0x2fa)][_0x3614f4(0x24f)],this[_0x3614f4(0x36c)](_0x319051,_0x3249ee,_0x2ceb2a,_0x2a8638,_0x3614f4(0x180)),this[_0x3614f4(0x41a)][_0x3614f4(0x1a9)]=![],this['resetFontSettings']();},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x464)]=function(_0x157ae6,_0x44c89a,_0x3580fa,_0x5f0d3d){const _0xd8df61=_0x2cc133;if(!VisuMZ[_0xd8df61(0x28c)][_0xd8df61(0x26f)][_0xd8df61(0x2fa)][_0xd8df61(0x2e5)])return;const _0x5968a8=ImageManager[_0xd8df61(0x324)]||0x20,_0x11c04f=ImageManager[_0xd8df61(0x21d)]||0x20,_0x52cac0=_0x5968a8,_0xe7157b=_0x11c04f/0x2,_0x515eb9=ColorManager[_0xd8df61(0x2ca)]();this[_0xd8df61(0x296)](_0x515eb9),this[_0xd8df61(0x326)](_0xd8df61(0x1b9)),this[_0xd8df61(0x41a)]['fontBold']=!![],this[_0xd8df61(0x41a)][_0xd8df61(0x420)]=VisuMZ['SkillsStatesCore'][_0xd8df61(0x26f)]['States'][_0xd8df61(0x298)],_0x3580fa+=VisuMZ[_0xd8df61(0x28c)][_0xd8df61(0x26f)][_0xd8df61(0x2fa)][_0xd8df61(0x207)],_0x5f0d3d+=VisuMZ[_0xd8df61(0x28c)][_0xd8df61(0x26f)][_0xd8df61(0x2fa)][_0xd8df61(0x358)];const _0x437d8a=String(_0x157ae6[_0xd8df61(0x2ba)](_0x44c89a['id']));this[_0xd8df61(0x36c)](_0x437d8a,_0x3580fa,_0x5f0d3d,_0x52cac0,_0xd8df61(0x238)),this[_0xd8df61(0x41a)]['fontBold']=![],this['resetFontSettings']();},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x33c)]=function(_0x436784,_0x18e399,_0x281b8a,_0x51fdbd){const _0x30e72a=_0x2cc133;if(!VisuMZ[_0x30e72a(0x28c)]['Settings'][_0x30e72a(0x1d6)][_0x30e72a(0x1eb)])return;const _0x39006c=_0x436784['buff'](_0x18e399);if(_0x39006c===0x0)return;const _0x262ad4=_0x436784[_0x30e72a(0x1e1)](_0x18e399),_0x5e39fd=ImageManager['iconWidth'],_0x30b6e3=_0x39006c>0x0?ColorManager[_0x30e72a(0x23c)]():ColorManager['debuffColor']();this[_0x30e72a(0x296)](_0x30b6e3),this[_0x30e72a(0x326)](_0x30e72a(0x1b9)),this[_0x30e72a(0x41a)][_0x30e72a(0x1a9)]=!![],this[_0x30e72a(0x41a)][_0x30e72a(0x420)]=VisuMZ[_0x30e72a(0x28c)][_0x30e72a(0x26f)][_0x30e72a(0x1d6)][_0x30e72a(0x2b9)],_0x281b8a+=VisuMZ[_0x30e72a(0x28c)]['Settings'][_0x30e72a(0x1d6)][_0x30e72a(0x3db)],_0x51fdbd+=VisuMZ[_0x30e72a(0x28c)][_0x30e72a(0x26f)][_0x30e72a(0x1d6)][_0x30e72a(0x24f)],this['drawText'](_0x262ad4,_0x281b8a,_0x51fdbd,_0x5e39fd,_0x30e72a(0x180)),this[_0x30e72a(0x41a)][_0x30e72a(0x1a9)]=![],this[_0x30e72a(0x416)]();},Window_Base[_0x2cc133(0x320)][_0x2cc133(0x461)]=function(_0xb2bfb1,_0x55878a,_0x142421,_0x44d522){const _0x2ee369=_0x2cc133;if(!VisuMZ[_0x2ee369(0x28c)][_0x2ee369(0x26f)][_0x2ee369(0x1d6)][_0x2ee369(0x2e5)])return;const _0x2628c5=_0xb2bfb1[_0x2ee369(0x284)](_0x55878a),_0x5c5924=_0xb2bfb1[_0x2ee369(0x2c9)](_0x55878a),_0x175d67=ImageManager[_0x2ee369(0x324)]||0x20,_0x266889=ImageManager[_0x2ee369(0x21d)]||0x20,_0x16834a=_0x175d67,_0x177eda=_0x266889/0x2,_0x228d3b=_0x5c5924>0x0?ColorManager[_0x2ee369(0x23c)]():ColorManager['debuffColor']();this[_0x2ee369(0x296)](_0x228d3b),this[_0x2ee369(0x326)](_0x2ee369(0x1b9)),this[_0x2ee369(0x41a)][_0x2ee369(0x1a9)]=!![],this['contents']['fontSize']=VisuMZ[_0x2ee369(0x28c)]['Settings'][_0x2ee369(0x1d6)]['DataFontSize'],_0x142421+=VisuMZ['SkillsStatesCore'][_0x2ee369(0x26f)]['Buffs']['DataOffsetX'],_0x44d522+=VisuMZ['SkillsStatesCore'][_0x2ee369(0x26f)][_0x2ee369(0x1d6)][_0x2ee369(0x358)];const _0x5a702a=_0x2ee369(0x184)['format'](Math[_0x2ee369(0x375)](_0x2628c5*0x64));this[_0x2ee369(0x36c)](_0x5a702a,_0x142421,_0x44d522,_0x16834a,_0x2ee369(0x238)),this['contents'][_0x2ee369(0x1a9)]=![],this[_0x2ee369(0x416)]();},VisuMZ['SkillsStatesCore'][_0x2cc133(0x427)]=Window_Base[_0x2cc133(0x320)]['changeTextColor'],Window_Base[_0x2cc133(0x320)][_0x2cc133(0x296)]=function(_0x17b0dc){const _0x51b78e=_0x2cc133;this[_0x51b78e(0x2b4)]&&(_0x17b0dc=ColorManager['getColor'](VisuMZ[_0x51b78e(0x28c)][_0x51b78e(0x26f)]['Toggles'][_0x51b78e(0x2e6)]??0x0)),VisuMZ[_0x51b78e(0x28c)][_0x51b78e(0x427)][_0x51b78e(0x25a)](this,_0x17b0dc);},VisuMZ[_0x2cc133(0x28c)]['Window_Base_drawText']=Window_Base['prototype'][_0x2cc133(0x36c)],Window_Base['prototype'][_0x2cc133(0x36c)]=function(_0x1d8317,_0x57f7b6,_0x3214fd,_0x289e32,_0x4f9983){const _0x48ba64=_0x2cc133;VisuMZ['SkillsStatesCore'][_0x48ba64(0x428)]['call'](this,_0x1d8317,_0x57f7b6,_0x3214fd,_0x289e32,_0x4f9983),this[_0x48ba64(0x2b4)]=undefined;},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3c5)]=Window_Base[_0x2cc133(0x320)][_0x2cc133(0x3a0)],Window_Base[_0x2cc133(0x320)][_0x2cc133(0x3a0)]=function(_0x421404,_0x3ccb0c){const _0x3153d5=_0x2cc133;let _0x3574b5=VisuMZ[_0x3153d5(0x28c)]['Window_Base_createAllSkillCostText_Toggle'][_0x3153d5(0x25a)](this,_0x421404,_0x3ccb0c);;return DataManager[_0x3153d5(0x43d)](_0x3ccb0c)&&_0x421404&&(_0x421404[_0x3153d5(0x261)](_0x3ccb0c)?_0x3574b5=TextManager['toggleOn']??_0x3153d5(0x40f):(TextManager[_0x3153d5(0x35c)]===_0x3153d5(0x436)?_0x3574b5=(TextManager[_0x3153d5(0x2a1)]??_0x3153d5(0x1f1))+this[_0x3153d5(0x36b)]()+_0x3574b5:_0x3574b5=_0x3574b5+this[_0x3153d5(0x36b)]()+(TextManager[_0x3153d5(0x2a1)]??'[OFF]'),_0x3574b5=_0x3574b5[_0x3153d5(0x3f0)]())),_0x3574b5;},VisuMZ[_0x2cc133(0x28c)]['Window_StatusBase_placeGauge']=Window_StatusBase[_0x2cc133(0x320)][_0x2cc133(0x3bc)],Window_StatusBase[_0x2cc133(0x320)][_0x2cc133(0x3bc)]=function(_0xdd4f11,_0x44a581,_0x39b75b,_0x3c8512){const _0x337267=_0x2cc133;if(_0xdd4f11[_0x337267(0x402)]())_0x44a581=this[_0x337267(0x35d)](_0xdd4f11,_0x44a581);this[_0x337267(0x2e9)](_0xdd4f11,_0x44a581,_0x39b75b,_0x3c8512);},Window_StatusBase[_0x2cc133(0x320)]['placeExactGauge']=function(_0x2b3bec,_0x7b4905,_0x1c44a9,_0x302988){const _0x2c5285=_0x2cc133;if(['none',_0x2c5285(0x2a3)][_0x2c5285(0x19c)](_0x7b4905['toLowerCase']()))return;VisuMZ['SkillsStatesCore']['Window_StatusBase_placeGauge'][_0x2c5285(0x25a)](this,_0x2b3bec,_0x7b4905,_0x1c44a9,_0x302988);},Window_StatusBase[_0x2cc133(0x320)][_0x2cc133(0x35d)]=function(_0x280d56,_0x47ba6d){const _0x420f67=_0x2cc133,_0x179e3d=_0x280d56[_0x420f67(0x458)]()['note'];if(_0x47ba6d==='hp'&&_0x179e3d[_0x420f67(0x347)](/<REPLACE HP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x47ba6d==='mp'&&_0x179e3d['match'](/<REPLACE MP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else return _0x47ba6d==='tp'&&_0x179e3d[_0x420f67(0x347)](/<REPLACE TP GAUGE:[ ](.*)>/i)?String(RegExp['$1']):_0x47ba6d;}},VisuMZ[_0x2cc133(0x28c)]['Window_StatusBase_drawActorIcons']=Window_StatusBase['prototype'][_0x2cc133(0x27a)],Window_StatusBase['prototype'][_0x2cc133(0x27a)]=function(_0x593f3f,_0x1a438f,_0x16c75e,_0x40c357){const _0x29f26e=_0x2cc133;if(!_0x593f3f)return;Window_Base['prototype'][_0x29f26e(0x27a)]['call'](this,_0x593f3f,_0x1a438f,_0x16c75e,_0x40c357);},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x431)]=Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x3cc)],Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x3cc)]=function(_0x2a6c62){const _0x44301a=_0x2cc133;VisuMZ[_0x44301a(0x28c)][_0x44301a(0x431)]['call'](this,_0x2a6c62),this[_0x44301a(0x2bd)](_0x2a6c62);},Window_SkillType['prototype'][_0x2cc133(0x2bd)]=function(_0x116846){const _0x874cc5=_0x2cc133,_0x9c9297=new Rectangle(0x0,0x0,_0x116846[_0x874cc5(0x300)],_0x116846[_0x874cc5(0x1c1)]);this[_0x874cc5(0x26b)]=new Window_Base(_0x9c9297),this[_0x874cc5(0x26b)][_0x874cc5(0x1ea)]=0x0,this[_0x874cc5(0x270)](this[_0x874cc5(0x26b)]),this[_0x874cc5(0x388)]();},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x360)]=function(){const _0x98cab9=_0x2cc133;Window_Command['prototype']['callUpdateHelp'][_0x98cab9(0x25a)](this);if(this['_commandNameWindow'])this['updateCommandNameWindow']();},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x388)]=function(){const _0x107f3b=_0x2cc133,_0x5a8de9=this['_commandNameWindow'];_0x5a8de9[_0x107f3b(0x41a)][_0x107f3b(0x3b1)]();const _0x19be7f=this[_0x107f3b(0x17f)](this[_0x107f3b(0x297)]());if(_0x19be7f===_0x107f3b(0x349)&&this['maxItems']()>0x0){const _0x224076=this[_0x107f3b(0x369)](this[_0x107f3b(0x297)]());let _0x1f6f79=this['commandName'](this['index']());_0x1f6f79=_0x1f6f79[_0x107f3b(0x3f2)](/\\I\[(\d+)\]/gi,''),_0x5a8de9['resetFontSettings'](),this[_0x107f3b(0x44a)](_0x1f6f79,_0x224076),this[_0x107f3b(0x1a6)](_0x1f6f79,_0x224076),this[_0x107f3b(0x2a7)](_0x1f6f79,_0x224076);}},Window_SkillType[_0x2cc133(0x320)]['commandNameWindowDrawBackground']=function(_0xa9071f,_0x3c9b54){},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x1a6)]=function(_0x20501b,_0x38cb21){const _0x3d3149=_0x2cc133,_0x598d2a=this['_commandNameWindow'];_0x598d2a[_0x3d3149(0x36c)](_0x20501b,0x0,_0x38cb21['y'],_0x598d2a[_0x3d3149(0x477)],_0x3d3149(0x238));},Window_SkillType['prototype'][_0x2cc133(0x2a7)]=function(_0x8217a9,_0x25e3c4){const _0x436927=_0x2cc133,_0xe951fe=this['_commandNameWindow'],_0x4aae94=$gameSystem[_0x436927(0x2e7)](),_0x34bc5b=_0x25e3c4['x']+Math[_0x436927(0x3ae)](_0x25e3c4['width']/0x2)+_0x4aae94;_0xe951fe['x']=_0xe951fe[_0x436927(0x300)]/-0x2+_0x34bc5b,_0xe951fe['y']=Math[_0x436927(0x3ae)](_0x25e3c4[_0x436927(0x1c1)]/0x2);},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x364)]=function(){const _0x51ae52=_0x2cc133;return Imported[_0x51ae52(0x245)]&&Window_Command[_0x51ae52(0x320)][_0x51ae52(0x364)][_0x51ae52(0x25a)](this);},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x479)]=function(){const _0x128c7a=_0x2cc133;if(!this[_0x128c7a(0x3c1)])return;const _0x4ce430=this['_actor'][_0x128c7a(0x45d)]();for(const _0x2cec17 of _0x4ce430){const _0x28fe0d=this[_0x128c7a(0x33f)](_0x2cec17);this[_0x128c7a(0x456)](_0x28fe0d,'skill',!![],_0x2cec17);}},Window_SkillType['prototype']['makeCommandName']=function(_0x4a12e5){const _0xa83396=_0x2cc133;let _0x5b13aa=$dataSystem[_0xa83396(0x45d)][_0x4a12e5];if(_0x5b13aa['match'](/\\I\[(\d+)\]/i))return _0x5b13aa;if(this[_0xa83396(0x1b2)]()===_0xa83396(0x265))return _0x5b13aa;const _0x3dbe0f=VisuMZ['SkillsStatesCore'][_0xa83396(0x26f)][_0xa83396(0x1a4)],_0xce37ad=$dataSystem['magicSkills']['includes'](_0x4a12e5),_0xf6ab99=_0xce37ad?_0x3dbe0f[_0xa83396(0x188)]:_0x3dbe0f['IconStypeNorm'];return _0xa83396(0x3f6)[_0xa83396(0x2ad)](_0xf6ab99,_0x5b13aa);},Window_SkillType['prototype'][_0x2cc133(0x264)]=function(){const _0x2b19fc=_0x2cc133;return VisuMZ[_0x2b19fc(0x28c)]['Settings'][_0x2b19fc(0x1a4)][_0x2b19fc(0x423)];},Window_SkillType['prototype']['drawItem']=function(_0x54f33f){const _0x27347a=_0x2cc133,_0x4c5d6e=this['commandStyleCheck'](_0x54f33f);if(_0x4c5d6e==='iconText')this[_0x27347a(0x1cb)](_0x54f33f);else _0x4c5d6e===_0x27347a(0x349)?this['drawItemStyleIcon'](_0x54f33f):Window_Command[_0x27347a(0x320)][_0x27347a(0x2f4)]['call'](this,_0x54f33f);},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x1b2)]=function(){const _0x461818=_0x2cc133;return VisuMZ['SkillsStatesCore'][_0x461818(0x26f)][_0x461818(0x1a4)][_0x461818(0x196)];},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x17f)]=function(_0x30a605){const _0x2a915c=_0x2cc133;if(_0x30a605<0x0)return _0x2a915c(0x265);const _0x57322d=this[_0x2a915c(0x1b2)]();if(_0x57322d!==_0x2a915c(0x1d8))return _0x57322d;else{if(this[_0x2a915c(0x39d)]()>0x0){const _0x2c69bd=this[_0x2a915c(0x46c)](_0x30a605);if(_0x2c69bd[_0x2a915c(0x347)](/\\I\[(\d+)\]/i)){const _0x3d0f5a=this[_0x2a915c(0x369)](_0x30a605),_0x3f2657=this[_0x2a915c(0x42f)](_0x2c69bd)[_0x2a915c(0x300)];return _0x3f2657<=_0x3d0f5a[_0x2a915c(0x300)]?'iconText':_0x2a915c(0x349);}}}return _0x2a915c(0x265);},Window_SkillType[_0x2cc133(0x320)]['drawItemStyleIconText']=function(_0x2b68e){const _0x1bb639=_0x2cc133,_0x328dbf=this[_0x1bb639(0x369)](_0x2b68e),_0x320476=this[_0x1bb639(0x46c)](_0x2b68e),_0x248bf8=this['textSizeEx'](_0x320476)[_0x1bb639(0x300)];this[_0x1bb639(0x18a)](this[_0x1bb639(0x339)](_0x2b68e));const _0x16ddb5=this[_0x1bb639(0x264)]();if(_0x16ddb5==='right')this[_0x1bb639(0x471)](_0x320476,_0x328dbf['x']+_0x328dbf[_0x1bb639(0x300)]-_0x248bf8,_0x328dbf['y'],_0x248bf8);else{if(_0x16ddb5===_0x1bb639(0x238)){const _0x162287=_0x328dbf['x']+Math[_0x1bb639(0x3ae)]((_0x328dbf[_0x1bb639(0x300)]-_0x248bf8)/0x2);this[_0x1bb639(0x471)](_0x320476,_0x162287,_0x328dbf['y'],_0x248bf8);}else this['drawTextEx'](_0x320476,_0x328dbf['x'],_0x328dbf['y'],_0x248bf8);}},Window_SkillType[_0x2cc133(0x320)][_0x2cc133(0x170)]=function(_0x505f0d){const _0x17ca4b=_0x2cc133;this[_0x17ca4b(0x46c)](_0x505f0d)[_0x17ca4b(0x347)](/\\I\[(\d+)\]/i);const _0x4a7c88=Number(RegExp['$1'])||0x0,_0x2ef20e=this['itemLineRect'](_0x505f0d),_0x2c7f34=_0x2ef20e['x']+Math['floor']((_0x2ef20e[_0x17ca4b(0x300)]-ImageManager[_0x17ca4b(0x208)])/0x2),_0x485895=_0x2ef20e['y']+(_0x2ef20e['height']-ImageManager[_0x17ca4b(0x35b)])/0x2;this[_0x17ca4b(0x20b)](_0x4a7c88,_0x2c7f34,_0x485895);},VisuMZ['SkillsStatesCore']['Window_SkillStatus_refresh']=Window_SkillStatus['prototype']['refresh'],Window_SkillStatus[_0x2cc133(0x320)]['refresh']=function(){const _0x334924=_0x2cc133;VisuMZ['SkillsStatesCore'][_0x334924(0x2cd)]['call'](this);if(this['_actor'])this[_0x334924(0x42d)]();},Window_SkillStatus[_0x2cc133(0x320)][_0x2cc133(0x42d)]=function(){const _0x944d0=_0x2cc133;if(!Imported['VisuMZ_0_CoreEngine'])return;if(!Imported[_0x944d0(0x1ac)])return;const _0x9e849e=this[_0x944d0(0x485)]();let _0x1fd7d6=this[_0x944d0(0x2c0)]()/0x2+0xb4+0xb4+0xb4,_0x10723b=this[_0x944d0(0x477)]-_0x1fd7d6-0x2;if(_0x10723b>=0x12c){const _0x12cfed=VisuMZ[_0x944d0(0x227)][_0x944d0(0x26f)][_0x944d0(0x3eb)][_0x944d0(0x336)],_0x4fb279=Math[_0x944d0(0x3ae)](_0x10723b/0x2)-0x18;let _0x42e85d=_0x1fd7d6,_0x2c0192=Math[_0x944d0(0x3ae)]((this[_0x944d0(0x1dd)]-Math[_0x944d0(0x27d)](_0x12cfed[_0x944d0(0x3e7)]/0x2)*_0x9e849e)/0x2),_0x422373=0x0;for(const _0x33f8d9 of _0x12cfed){this[_0x944d0(0x2b3)](_0x42e85d,_0x2c0192,_0x4fb279,_0x33f8d9),_0x422373++,_0x422373%0x2===0x0?(_0x42e85d=_0x1fd7d6,_0x2c0192+=_0x9e849e):_0x42e85d+=_0x4fb279+0x18;}}this[_0x944d0(0x416)]();},Window_SkillStatus[_0x2cc133(0x320)][_0x2cc133(0x2b3)]=function(_0x19c52e,_0x3af5b2,_0x3e36f4,_0x302e3f){const _0x3daad8=_0x2cc133,_0x862260=this['gaugeLineHeight']();this['resetFontSettings'](),this[_0x3daad8(0x3b4)](_0x19c52e,_0x3af5b2,_0x3e36f4,_0x302e3f,!![]),this[_0x3daad8(0x395)](),this[_0x3daad8(0x41a)][_0x3daad8(0x420)]-=0x8;const _0x4c5a32=this[_0x3daad8(0x3c1)][_0x3daad8(0x45c)](_0x302e3f,!![]);this[_0x3daad8(0x41a)]['drawText'](_0x4c5a32,_0x19c52e,_0x3af5b2,_0x3e36f4,_0x862260,_0x3daad8(0x180));},VisuMZ[_0x2cc133(0x28c)]['Window_SkillList_includes']=Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x19c)],Window_SkillList['prototype'][_0x2cc133(0x19c)]=function(_0x702278){const _0x5eeb97=_0x2cc133;if(this['_stypeId']<=0x0)return![];return this[_0x5eeb97(0x232)](_0x702278);},VisuMZ[_0x2cc133(0x28c)]['Window_SkillList_maxCols']=Window_SkillList['prototype'][_0x2cc133(0x412)],Window_SkillList['prototype']['maxCols']=function(){const _0x13c76c=_0x2cc133;return SceneManager[_0x13c76c(0x210)][_0x13c76c(0x1bb)]===Scene_Battle?VisuMZ[_0x13c76c(0x28c)]['Window_SkillList_maxCols'][_0x13c76c(0x25a)](this):VisuMZ[_0x13c76c(0x28c)]['Settings']['Skills'][_0x13c76c(0x331)];},VisuMZ['SkillsStatesCore'][_0x2cc133(0x229)]=Window_SkillList[_0x2cc133(0x320)]['setActor'],Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x463)]=function(_0x57caf6){const _0x48add8=_0x2cc133,_0x3b36ac=this[_0x48add8(0x3c1)]!==_0x57caf6;VisuMZ[_0x48add8(0x28c)][_0x48add8(0x229)][_0x48add8(0x25a)](this,_0x57caf6),_0x3b36ac&&(this[_0x48add8(0x241)]&&this[_0x48add8(0x241)]['constructor']===Window_ShopStatus&&this[_0x48add8(0x241)][_0x48add8(0x377)](this[_0x48add8(0x1a5)](0x0)));},Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x441)]=function(_0x2aabbc){const _0xc203e=_0x2cc133;if(this['_stypeId']===_0x2aabbc)return;if(!_0x2aabbc)return;this[_0xc203e(0x418)]=_0x2aabbc,this[_0xc203e(0x432)](),this['scrollTo'](0x0,0x0),this[_0xc203e(0x241)]&&this[_0xc203e(0x241)][_0xc203e(0x1bb)]===Window_ShopStatus&&this[_0xc203e(0x241)]['setItem'](this[_0xc203e(0x1a5)](0x0));},Window_SkillList[_0x2cc133(0x320)]['includesSkillsStatesCore']=function(_0x2a22c2){const _0xb1952a=_0x2cc133;if(!_0x2a22c2)return VisuMZ[_0xb1952a(0x28c)]['Window_SkillList_includes']['call'](this,_0x2a22c2);if(!this[_0xb1952a(0x266)](_0x2a22c2))return![];if(!this['checkShowHideNotetags'](_0x2a22c2))return![];if(!this[_0xb1952a(0x260)](_0x2a22c2))return![];return!![];},Window_SkillList['prototype']['checkSkillTypeMatch']=function(_0x2d5110){const _0x12c7fa=_0x2cc133;return DataManager[_0x12c7fa(0x386)](_0x2d5110)['includes'](this[_0x12c7fa(0x418)]);},Window_SkillList[_0x2cc133(0x320)]['checkShowHideNotetags']=function(_0x1fdab6){const _0x2edb78=_0x2cc133;if(!VisuMZ['SkillsStatesCore']['CheckVisibleBattleNotetags'](this[_0x2edb78(0x3c1)],_0x1fdab6))return![];if(!VisuMZ[_0x2edb78(0x28c)][_0x2edb78(0x3ec)](this[_0x2edb78(0x3c1)],_0x1fdab6))return![];if(!VisuMZ[_0x2edb78(0x28c)][_0x2edb78(0x368)](this[_0x2edb78(0x3c1)],_0x1fdab6))return![];return!![];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2fd)]=function(_0x15fd77,_0x30399f){const _0x250cd0=_0x2cc133,_0x207cd4=_0x30399f[_0x250cd0(0x376)];if(_0x207cd4[_0x250cd0(0x347)](/<HIDE IN BATTLE>/i)&&$gameParty['inBattle']())return![];else return _0x207cd4[_0x250cd0(0x347)](/<HIDE OUTSIDE BATTLE>/i)&&!$gameParty[_0x250cd0(0x424)]()?![]:!![];},VisuMZ['SkillsStatesCore'][_0x2cc133(0x3ec)]=function(_0x16f059,_0x238522){const _0x3d4b22=_0x2cc133,_0x4a3015=_0x238522[_0x3d4b22(0x376)];if(_0x4a3015['match'](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5461f1=JSON[_0x3d4b22(0x3fa)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x372de3 of _0x5461f1){if(!$gameSwitches[_0x3d4b22(0x1ca)](_0x372de3))return![];}return!![];}if(_0x4a3015[_0x3d4b22(0x347)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x24b415=JSON[_0x3d4b22(0x3fa)]('['+RegExp['$1'][_0x3d4b22(0x347)](/\d+/g)+']');for(const _0x545312 of _0x24b415){if(!$gameSwitches['value'](_0x545312))return![];}return!![];}if(_0x4a3015[_0x3d4b22(0x347)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x183f0d=JSON['parse']('['+RegExp['$1'][_0x3d4b22(0x347)](/\d+/g)+']');for(const _0x381f39 of _0x183f0d){if($gameSwitches[_0x3d4b22(0x1ca)](_0x381f39))return!![];}return![];}if(_0x4a3015[_0x3d4b22(0x347)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1e6018=JSON['parse']('['+RegExp['$1'][_0x3d4b22(0x347)](/\d+/g)+']');for(const _0x211ecf of _0x1e6018){if(!$gameSwitches[_0x3d4b22(0x1ca)](_0x211ecf))return!![];}return![];}if(_0x4a3015[_0x3d4b22(0x347)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5a58aa=JSON[_0x3d4b22(0x3fa)]('['+RegExp['$1'][_0x3d4b22(0x347)](/\d+/g)+']');for(const _0x14956e of _0x5a58aa){if(!$gameSwitches[_0x3d4b22(0x1ca)](_0x14956e))return!![];}return![];}if(_0x4a3015[_0x3d4b22(0x347)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1a4768=JSON['parse']('['+RegExp['$1'][_0x3d4b22(0x347)](/\d+/g)+']');for(const _0x57c69e of _0x1a4768){if($gameSwitches['value'](_0x57c69e))return![];}return!![];}return!![];},VisuMZ['SkillsStatesCore'][_0x2cc133(0x368)]=function(_0x5bb45a,_0x508da9){const _0x58e8d6=_0x2cc133,_0x38d11e=_0x508da9[_0x58e8d6(0x376)];if(_0x38d11e['match'](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1c1090=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x126077 of _0x1c1090){if(!_0x5bb45a[_0x58e8d6(0x453)](_0x126077))return![];}return!![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x180df1=RegExp['$1']['split'](',');for(const _0x110d6e of _0x180df1){const _0x33bfcd=DataManager['getSkillIdWithName'](_0x110d6e);if(!_0x33bfcd)continue;if(!_0x5bb45a[_0x58e8d6(0x453)](_0x33bfcd))return![];}return!![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5a2715=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x25e7af of _0x5a2715){if(!_0x5bb45a[_0x58e8d6(0x453)](_0x25e7af))return![];}return!![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xb55d4c=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0x520aa1 of _0xb55d4c){const _0x27bc43=DataManager[_0x58e8d6(0x323)](_0x520aa1);if(!_0x27bc43)continue;if(!_0x5bb45a[_0x58e8d6(0x453)](_0x27bc43))return![];}return!![];}}if(_0x38d11e['match'](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4b9e37=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x3e7532 of _0x4b9e37){if(_0x5bb45a[_0x58e8d6(0x453)](_0x3e7532))return!![];}return![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x5655e1=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0xb4769b of _0x5655e1){const _0x344528=DataManager[_0x58e8d6(0x323)](_0xb4769b);if(!_0x344528)continue;if(_0x5bb45a[_0x58e8d6(0x453)](_0x344528))return!![];}return![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2a626c=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x43d955 of _0x2a626c){if(!_0x5bb45a[_0x58e8d6(0x453)](_0x43d955))return!![];}return![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x2a81f9=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0x3c9e57 of _0x2a81f9){const _0x34b16a=DataManager['getSkillIdWithName'](_0x3c9e57);if(!_0x34b16a)continue;if(!_0x5bb45a[_0x58e8d6(0x453)](_0x34b16a))return!![];}return![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x11ae10=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x37bac7 of _0x11ae10){if(!_0x5bb45a[_0x58e8d6(0x453)](_0x37bac7))return!![];}return![];}else{if(_0x38d11e['match'](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x3ef9a4=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0x36f4ca of _0x3ef9a4){const _0x3a1b81=DataManager['getSkillIdWithName'](_0x36f4ca);if(!_0x3a1b81)continue;if(!_0x5bb45a['isLearnedSkill'](_0x3a1b81))return!![];}return![];}}if(_0x38d11e['match'](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x48a188=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x569971 of _0x48a188){if(_0x5bb45a[_0x58e8d6(0x453)](_0x569971))return![];}return!![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x4f1128=RegExp['$1']['split'](',');for(const _0x26f782 of _0x4f1128){const _0x4ee570=DataManager['getSkillIdWithName'](_0x26f782);if(!_0x4ee570)continue;if(_0x5bb45a['isLearnedSkill'](_0x4ee570))return![];}return!![];}}if(_0x38d11e['match'](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x473550=JSON['parse']('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x502051 of _0x473550){if(!_0x5bb45a[_0x58e8d6(0x43a)](_0x502051))return![];}return!![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x342145=RegExp['$1']['split'](',');for(const _0x2ec902 of _0x342145){const _0x5eb929=DataManager['getSkillIdWithName'](_0x2ec902);if(!_0x5eb929)continue;if(!_0x5bb45a[_0x58e8d6(0x43a)](_0x5eb929))return![];}return!![];}}if(_0x38d11e['match'](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x57bd7f=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xc1855d of _0x57bd7f){if(!_0x5bb45a[_0x58e8d6(0x43a)](_0xc1855d))return![];}return!![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1cc013=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0x38978c of _0x1cc013){const _0x110e3b=DataManager[_0x58e8d6(0x323)](_0x38978c);if(!_0x110e3b)continue;if(!_0x5bb45a[_0x58e8d6(0x43a)](_0x110e3b))return![];}return!![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x35427a=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x3890cb of _0x35427a){if(_0x5bb45a[_0x58e8d6(0x43a)](_0x3890cb))return!![];}return![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x3f3bca=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0x27fd7b of _0x3f3bca){const _0x147a18=DataManager['getSkillIdWithName'](_0x27fd7b);if(!_0x147a18)continue;if(_0x5bb45a[_0x58e8d6(0x43a)](_0x147a18))return!![];}return![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x137dd2=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2e0c36 of _0x137dd2){if(!_0x5bb45a[_0x58e8d6(0x43a)](_0x2e0c36))return!![];}return![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x2fbaec=RegExp['$1']['split'](',');for(const _0x46d823 of _0x2fbaec){const _0x1eb567=DataManager[_0x58e8d6(0x323)](_0x46d823);if(!_0x1eb567)continue;if(!_0x5bb45a[_0x58e8d6(0x43a)](_0x1eb567))return!![];}return![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x16b1d4=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1'][_0x58e8d6(0x347)](/\d+/g)+']');for(const _0x520c56 of _0x16b1d4){if(!_0x5bb45a['hasSkill'](_0x520c56))return!![];}return![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x30dbdb=RegExp['$1']['split'](',');for(const _0x354cc1 of _0x30dbdb){const _0x793057=DataManager['getSkillIdWithName'](_0x354cc1);if(!_0x793057)continue;if(!_0x5bb45a[_0x58e8d6(0x43a)](_0x793057))return!![];}return![];}}if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3e0d9f=JSON[_0x58e8d6(0x3fa)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x431848 of _0x3e0d9f){if(_0x5bb45a['hasSkill'](_0x431848))return![];}return!![];}else{if(_0x38d11e[_0x58e8d6(0x347)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xd0fe3d=RegExp['$1'][_0x58e8d6(0x44c)](',');for(const _0x4c1611 of _0xd0fe3d){const _0x14cd9b=DataManager[_0x58e8d6(0x323)](_0x4c1611);if(!_0x14cd9b)continue;if(_0x5bb45a[_0x58e8d6(0x43a)](_0x14cd9b))return![];}return!![];}}return!![];},Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x260)]=function(_0x5f24af){const _0x4f8f68=_0x2cc133,_0x5df771=_0x5f24af[_0x4f8f68(0x376)],_0x880455=VisuMZ[_0x4f8f68(0x28c)]['skillVisibleJS'];return _0x880455[_0x5f24af['id']]?_0x880455[_0x5f24af['id']][_0x4f8f68(0x25a)](this,_0x5f24af):!![];},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x3a4)]=Window_SkillList['prototype']['makeItemList'],Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x37f)]=function(){const _0x295f6b=_0x2cc133;VisuMZ[_0x295f6b(0x28c)][_0x295f6b(0x3a4)][_0x295f6b(0x25a)](this),this[_0x295f6b(0x204)]()&&this[_0x295f6b(0x2eb)](),this[_0x295f6b(0x3e0)]()&&this[_0x295f6b(0x2bb)]();},Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x204)]=function(){return!![];},Window_SkillList[_0x2cc133(0x320)]['sortSkillList']=function(){const _0x2232ba=_0x2cc133,_0x1526fd=VisuMZ[_0x2232ba(0x28c)][_0x2232ba(0x26f)][_0x2232ba(0x1a4)][_0x2232ba(0x3dc)]||[];return _0x1526fd&&_0x1526fd[_0x2232ba(0x19c)](this[_0x2232ba(0x418)])?this[_0x2232ba(0x309)][_0x2232ba(0x42c)]((_0x3d8b82,_0x5b76a9)=>{const _0x2b39e8=_0x2232ba;if(!!_0x3d8b82&&!!_0x5b76a9)return _0x3d8b82['name']['localeCompare'](_0x5b76a9[_0x2b39e8(0x1a3)]);return 0x0;}):VisuMZ[_0x2232ba(0x28c)][_0x2232ba(0x212)](this[_0x2232ba(0x309)]),this['_data'];},VisuMZ['SkillsStatesCore'][_0x2cc133(0x212)]=function(_0x3bd8d0){const _0x2b3f78=_0x2cc133;return _0x3bd8d0[_0x2b3f78(0x42c)]((_0x4e32d9,_0x5879e7)=>{const _0x1e83fd=_0x2b3f78;if(!!_0x4e32d9&&!!_0x5879e7){if(_0x4e32d9[_0x1e83fd(0x446)]===undefined)VisuMZ['SkillsStatesCore'][_0x1e83fd(0x407)](_0x4e32d9);if(_0x5879e7[_0x1e83fd(0x446)]===undefined)VisuMZ[_0x1e83fd(0x28c)][_0x1e83fd(0x407)](_0x5879e7);const _0x11fc68=_0x4e32d9[_0x1e83fd(0x446)],_0xbda023=_0x5879e7[_0x1e83fd(0x446)];if(_0x11fc68!==_0xbda023)return _0xbda023-_0x11fc68;return _0x4e32d9['id']-_0x5879e7['id'];}return 0x0;}),_0x3bd8d0;},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x177)]=function(_0x4c3c7d){const _0xe599f6=_0x2cc133;return _0x4c3c7d[_0xe599f6(0x42c)]((_0x2402f3,_0xb1aa8d)=>{const _0xdbefef=_0xe599f6,_0x47f8d9=$dataSkills[_0x2402f3],_0x35f4ba=$dataSkills[_0xb1aa8d];if(!!_0x47f8d9&&!!_0x35f4ba){if(_0x47f8d9[_0xdbefef(0x446)]===undefined)VisuMZ[_0xdbefef(0x28c)][_0xdbefef(0x407)](_0x47f8d9);if(_0x35f4ba[_0xdbefef(0x446)]===undefined)VisuMZ['SkillsStatesCore'][_0xdbefef(0x407)](_0x35f4ba);const _0x3b3972=_0x47f8d9[_0xdbefef(0x446)],_0x1d0168=_0x35f4ba[_0xdbefef(0x446)];if(_0x3b3972!==_0x1d0168)return _0x1d0168-_0x3b3972;return _0x2402f3-_0xb1aa8d;}return 0x0;}),_0x4c3c7d;},Window_SkillList[_0x2cc133(0x320)]['canChangeSkillsThroughStateEffects']=function(){const _0xa2fb70=_0x2cc133;if(!this[_0xa2fb70(0x3c1)])return![];if([_0xa2fb70(0x19e),_0xa2fb70(0x26e),_0xa2fb70(0x41b)][_0xa2fb70(0x19c)](this[_0xa2fb70(0x418)]))return![];return!![];},Window_SkillList[_0x2cc133(0x320)]['changeSkillsThroughStateEffects']=function(){const _0xbf2a92=_0x2cc133,_0x30d21c=this[_0xbf2a92(0x3c1)][_0xbf2a92(0x366)]();for(const _0x53ecea of _0x30d21c){const _0xb84793=DataManager[_0xbf2a92(0x316)](_0x53ecea);for(const _0xb8a1c7 in _0xb84793){const _0x2dc4d7=$dataSkills[Number(_0xb8a1c7)]||null,_0x315486=$dataSkills[Number(_0xb84793[_0xb8a1c7])]||null;while(this[_0xbf2a92(0x309)][_0xbf2a92(0x19c)](_0x2dc4d7)){const _0x5cc2cb=this[_0xbf2a92(0x309)][_0xbf2a92(0x1ae)](_0x2dc4d7);this[_0xbf2a92(0x309)][_0x5cc2cb]=_0x315486;}}}},VisuMZ[_0x2cc133(0x28c)][_0x2cc133(0x2d2)]=Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x2f4)],Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x2f4)]=function(_0x3ade64){const _0x2fb063=_0x2cc133,_0x47f6e6=this[_0x2fb063(0x1a5)](_0x3ade64),_0x32e2d7=_0x47f6e6?_0x47f6e6[_0x2fb063(0x1a3)]:'';if(_0x47f6e6)this[_0x2fb063(0x213)](_0x47f6e6);DataManager['isToggleSkill'](_0x47f6e6)&&this[_0x2fb063(0x3c1)]&&this['_actor'][_0x2fb063(0x261)](_0x47f6e6)&&(this[_0x2fb063(0x2b4)]=!![]);VisuMZ[_0x2fb063(0x28c)][_0x2fb063(0x2d2)][_0x2fb063(0x25a)](this,_0x3ade64),this['_toggleSkillColor']=undefined;if(_0x47f6e6)_0x47f6e6[_0x2fb063(0x1a3)]=_0x32e2d7;},Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x213)]=function(_0x323d0b){const _0x248e32=_0x2cc133;if(_0x323d0b&&_0x323d0b['note'][_0x248e32(0x347)](/<LIST NAME:[ ](.*)>/i)){_0x323d0b[_0x248e32(0x1a3)]=String(RegExp['$1'])[_0x248e32(0x3f0)]();for(;;){if(_0x323d0b[_0x248e32(0x1a3)][_0x248e32(0x347)](/\\V\[(\d+)\]/gi))_0x323d0b['name']=_0x323d0b[_0x248e32(0x1a3)][_0x248e32(0x3f2)](/\\V\[(\d+)\]/gi,(_0x1d807e,_0x261c52)=>$gameVariables[_0x248e32(0x1ca)](parseInt(_0x261c52)));else break;}}},Window_SkillList['prototype']['drawSkillCost']=function(_0x12b792,_0x3c9c5c,_0x229683,_0x1dd666){const _0x3f2c1f=_0x2cc133;Window_Base[_0x3f2c1f(0x320)][_0x3f2c1f(0x21a)][_0x3f2c1f(0x25a)](this,this[_0x3f2c1f(0x3c1)],_0x12b792,_0x3c9c5c,_0x229683,_0x1dd666);},Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x36e)]=function(_0x45ea10){const _0x54466e=_0x2cc133;this[_0x54466e(0x241)]=_0x45ea10,this[_0x54466e(0x360)]();},VisuMZ['SkillsStatesCore'][_0x2cc133(0x1da)]=Window_SkillList[_0x2cc133(0x320)][_0x2cc133(0x3b8)],Window_SkillList[_0x2cc133(0x320)]['updateHelp']=function(){const _0x5025fc=_0x2cc133;VisuMZ[_0x5025fc(0x28c)][_0x5025fc(0x1da)]['call'](this),this[_0x5025fc(0x241)]&&this[_0x5025fc(0x241)]['constructor']===Window_ShopStatus&&this[_0x5025fc(0x241)][_0x5025fc(0x377)](this[_0x5025fc(0x20f)]());};