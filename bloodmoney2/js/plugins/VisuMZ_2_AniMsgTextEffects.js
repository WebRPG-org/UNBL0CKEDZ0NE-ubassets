//=============================================================================
// VisuStella MZ - Animated Message Text Effects
// VisuMZ_2_AniMsgTextEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_AniMsgTextEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AniMsgTextEffects = VisuMZ.AniMsgTextEffects || {};
VisuMZ.AniMsgTextEffects.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.04] [AniMsgTextEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Animated_Message_Text_Effects_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to animate the text that appears in your Message Window in order
 * to add just a bit more character to their lines? Perhaps a stagger effect or
 * a shivering effect? Maybe a swinging effect like a pendulum or a glowing
 * effect for a specific color? This plugin comes with a plethora of text
 * effects to pick and use from in addition to letting you create your very own
 * custom text effects through the Plugin Parameters and just by adjusting the
 * various effect properties.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Animate text shown in the Message Window with more than 40+ number of
 *   custom text effects with many having three different variations each.
 * * Add in your own custom text effects or modify existing text effects. There
 *   is an endless number of custom text effects you can add.
 * * Options command for players to turn on/off Message Text Effects in case
 *   the text effects may interfere with their ability to read.
 * * Angle-type text effects will sway back and forth by the angle or
 *   constantly spin in a certain direction.
 * * Color-type text effects will allow for hue shifts or color tone patterns
 *   to be applied to your message text.
 * * Opacity-type text effects can cause the opacity of a letter to fade in/out
 *   and/or use custom opacity patterns that can also be used to determine
 *   fade level.
 * * Positioning-type text effects can shake randomly in specified directions
 *   or move back and forth for specified directions in a wave.
 * * Scaling-type text effects can flip to its front and back sides or grow
 *   and shrink in size by a certain amount like a pulse.
 * * You can combine text effects with one another as long as they are of
 *   different types.
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
 * * VisuMZ_1_MessageCore
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
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin.
 * 
 * While the \Effect<name> part of the text code is hardcoded, the actual
 * settings for each of the text effect types can be modified through the
 * Plugin Parameters.
 * 
 * These Text Effects can ONLY be used for the Message Window and nothing else.
 * Everything else will have the text be displayed normally. This means you
 * CANNOT use Animated Message Text Effects for the Help Window, Choice Window,
 * Status Window, etc. Only the main Message Window can support them.
 * 
 * ---
 *
 * === General Text Effect-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Animated Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<name>          Changes the text effect to "name" where "name" is
 *                        based on the Plugin Parameter "Name" setting. The
 *                        text effect will then be applied to regular text
 *                        characters and icons. Other visual text code graphics
 *                        won't have custom text effects applied to them.
 * 
 * \Effect<Normal>        Returns the text effect type to "normal". No shaking,
 *                        angle changing, etc. effects will be seen. Just plain
 *                        old normal text.
 * 
 * <Clear Effect>         Same as \Effect<Normal> as it will return the text
 *                        effect type to "normal". There are no differences
 *                        between usage as it is up to personal preference on
 *                        which you want to use.
 * 
 * ---
 *
 * === Angle-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Pendulum-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Swing>         Angle of letters swing uniformly back and forth.
 * \Effect<SlowSwing>     Slower version of "Swing" text effect.
 * \Effect<FastSwing>     Faster version of "Swing" text effect.
 * 
 * \Effect<Wag>           Angle of letters swing in a sequence back and forth.
 * \Effect<SlowWag>       Slower version of "Wag" text effect.
 * \Effect<FastWag>       Faster version of "Wag" text effect.
 * 
 * \Effect<Jelly>         Angle and position move back and forth in a sequence.
 * \Effect<SlowJelly>     Slower version of "Jelly" text effect.
 * \Effect<FastJelly>     Faster version of "Jelly" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Rotation-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<SpinCW>        Letters rotate clockwise uniformly.
 * \Effect<SlowSpinCW>    Slower version of "SpinCW" text effect.
 * \Effect<FastSpinCW>    Faster version of "SpinCW" text effect.
 * 
 * \Effect<SpinCCW>       Letters rotate counter-clockwise uniformly.
 * \Effect<SlowSpinCCW>   Slower version of "SpinCCW" text effect.
 * \Effect<FastSpinCCW>   Faster version of "SpinCCW" text effect.
 * 
 * \Effect<RollCW>        Letters rotate clockwise in a sequence.
 * \Effect<SlowRollCW>    Slower version of "RollCW" text effect.
 * \Effect<FastRollCW>    Faster version of "RollCW" text effect.
 * 
 * \Effect<RollCCW>       Letters rotate counter-clockwise in a sequence.
 * \Effect<SlowRollCCW>   Slower version of "RollCCW" text effect.
 * \Effect<FastRollCCW>   Faster version of "RollCCW" text effect.
 * 
 * ---
 *
 * === Color-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Hue-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Prism>         Letters will hue shift uniformly.
 * \Effect<SlowPrism>     Slower version of "Prism" text effect.
 * \Effect<FastPrism>     Faster version of "Prism" text effect.
 * 
 * \Effect<Rainbow>       Letters will hue shift in a sequence.
 * \Effect<SlowRainbow>   Slower version of "Rainbow" text effect.
 * \Effect<FastRainbow>   Faster version of "Rainbow" text effect.
 * 
 * \Effect<Gamer>         Letters will hue shift in a stagger.
 * \Effect<SlowGamer>     Slower version of "Gamer" text effect.
 * \Effect<FastGamer>     Faster version of "Gamer" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Tone-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Red>           A static red tone on the text.
 * \Effect<SoftRed>       Smoothly transition red tone on the text.
 * \Effect<HardRed>       Instant transition red tone on the text.
 * 
 * \Effect<Green>         A static green tone on the text.
 * \Effect<SoftGreen>     Smoothly transition green tone on the text.
 * \Effect<HardGreen>     Instant transition green tone on the text.
 * 
 * \Effect<Blue>          A static blue tone on the text.
 * \Effect<SoftBlue>      Smoothly transition blue tone on the text.
 * \Effect<HardBlue>      Instant transition blue tone on the text.
 * 
 * \Effect<Yellow>        A static yellow tone on the text.
 * \Effect<SoftYellow>    Smoothly transition yellow tone on the text.
 * \Effect<HardYellow>    Instant transition yellow tone on the text.
 * 
 * \Effect<Cyan>          A static cyan tone on the text.
 * \Effect<SoftCyan>      Smoothly transition cyan tone on the text.
 * \Effect<HardCyan>      Instant transition cyan tone on the text.
 * 
 * \Effect<Magenta>       A static magenta tone on the text.
 * \Effect<SoftMagenta>   Smoothly transition magenta tone on the text.
 * \Effect<HardMagenta>   Instant transition magenta tone on the text.
 * 
 * \Effect<RGB>           Smooth shifting RGB tones in a sequence.
 * \Effect<SlowRGB>       Slower version of "RGB" text effect.
 * \Effect<FastRGB>       Faster version of "RGB" text effect.
 * 
 * \Effect<Fes>           Instant shifting Red/Green tones in a sequence.
 * \Effect<SlowFes>       Slower version of "Fes" text effect.
 * \Effect<FastFes>       Faster version of "Fes" text effect.
 * 
 * \Effect<Gig>           Smooth shifting base tones in a sequence.
 * \Effect<SlowGig>       Slower version of "Gig" text effect.
 * \Effect<FastGig>       Faster version of "Gig" text effect.
 * 
 * ---
 *
 * === Opacity-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Glow-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Glow>          Letters fade in and out uniformly.
 * \Effect<SlowGlow>      Slower version of "Glow" text effect.
 * \Effect<FastGlow>      Faster version of "Glow" text effect.
 * 
 * \Effect<Flow>          Letters fade in and out in a sequence.
 * \Effect<SlowFlow>      Slower version of "Flow" text effect.
 * \Effect<FastFlow>      Faster version of "Flow" text effect.
 * 
 * \Effect<Blink>         Letters blink in and out in a stagger.
 * \Effect<SlowBlink>     Slower version of "Blink" text effect.
 * \Effect<FastBlink>     Faster version of "Blink" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Pattern-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Campfire>      A specified blinking light pattern for letters.
 * \Effect<Candle>        A specified blinking light pattern for letters.
 * \Effect<Fade>          A specified blinking light pattern for letters.
 * \Effect<Flicker>       A specified blinking light pattern for letters.
 * \Effect<Fluorescent>   A specified blinking light pattern for letters.
 * \Effect<Halogen>       A specified blinking light pattern for letters.
 * \Effect<Strobe>        A specified blinking light pattern for letters.
 * \Effect<Torch>         A specified blinking light pattern for letters.
 * \Effect<Underwater>    A specified blinking light pattern for letters.
 * 
 * ---
 *
 * === Position-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Frantic-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Shake>         Shakes frantically and randomly in any direction.
 * \Effect<SoftShake>     Less frantic version of "Shake" text effect.
 * \Effect<HardShake>     More frantic version of "Shake" text effect.
 * 
 * \Effect<Shiver>        Shivers frantically in the left/right direction.
 * \Effect<SoftShiver>    Less frantic version of "Shiver" text effect.
 * \Effect<HardShiver>    More frantic version of "Shiver" text effect.
 * 
 * \Effect<Vibe>          Vibrates frantically in the up/down direction.
 * \Effect<SoftVibe>      Less frantic version of "Vibe" text effect.
 * \Effect<HardVibe>      More frantic version of "Vibe" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Wave-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Stagger>       Moves with letters staggered up and down.
 * \Effect<SlowStagger>   Slower version of "Stagger" text effect.
 * \Effect<FastStagger>   Faster version of "Stagger" text effect.
 * 
 * \Effect<Saw>           Moves uniformly left and right.
 * \Effect<SlowSaw>       Slower version of "Saw" text effect.
 * \Effect<FastSaw>       Faster version of "Saw" text effect.
 * 
 * \Effect<Bounce>        Moves uniformly up and down.
 * \Effect<SlowBounce>    Slower version of "Bounce" text effect.
 * \Effect<FastBounce>    Faster version of "Bounce" text effect.
 * 
 * \Effect<Wave>          Waves by letter in all directions.
 * \Effect<SlowWave>      Slower version of "Wave" text effect.
 * \Effect<FastWave>      Faster version of "Wave" text effect.
 * 
 * \Effect<HorzWave>      Waves by letter in horizontal direction.
 * \Effect<SlowHorzWave>  Slower version of "HorzWave" text effect.
 * \Effect<FastHorzWave>  Faster version of "HorzWave" text effect.
 * 
 * \Effect<VertWave>      Waves by letter in vertical direction.
 * \Effect<SlowVertWave>  Slower version of "VertWave" text effect.
 * \Effect<FastVertWave>  Faster version of "VertWave" text effect.
 * 
 * ---
 *
 * === Scaling-Type Text Effect-Related Text Codes ===
 * 
 * ---
 * 
 * ----------------------   ---------------------------------------------------
 * Text Code                Flip-Subtype Text Effect (Message Window Only)
 * ----------------------   ---------------------------------------------------
 * 
 * \Effect<HorzCard>        Horizontally uniform flipping effect.
 * \Effect<SlowHorzCard>    Slower version of "HorzCard" text effect.
 * \Effect<FastHorzCard>    Faster version of "HorzCard" text effect.
 * 
 * \Effect<VertCard>        Vertically uniform flipping effect.
 * \Effect<SlowVertCard>    Slower version of "VertCard" text effect.
 * \Effect<FastVertCard>    Faster version of "VertCard" text effect.
 * 
 * \Effect<HorzRibbon>      Horizontally folding flipping effect.
 * \Effect<SlowHorzRibbon>  Slower version of "HorzRibbon" text effect.
 * \Effect<FastHorzRibbon>  Faster version of "HorzRibbon" text effect.
 * 
 * \Effect<VertRibbon>      Vertically folding flipping effect.
 * \Effect<SlowVertRibbon>  Slower version of "VertRibbon" text effect.
 * \Effect<FastVertRibbon>  Faster version of "VertRibbon" text effect.
 * 
 * ---
 * 
 * --------------------   -----------------------------------------------------
 * Text Code              Pulse-Subtype Text Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * \Effect<Pulse>         Letters grow bigger and smaller uniformly.
 * \Effect<SmallPulse>    Smaller version of "Pulse" text effect.
 * \Effect<BigPulse>      Larger version of "Pulse" text effect.
 * 
 * \Effect<Jiggle>        Letters grow bigger and smaller in a sequence.
 * \Effect<SmallJiggle>   Smaller version of "Jiggle" text effect.
 * \Effect<BigJiggle>     Larger version of "Jiggle" text effect.
 * 
 * \Effect<Gooey>         Letters grow bigger and smaller in a stretched form.
 * \Effect<SmallGooey>    Smaller version of "Gooey" text effect.
 * \Effect<BigGooey>      Larger version of "Gooey" text effect.
 * 
 * ---
 * 
 * === Combining Text Effects ===
 * 
 * ---
 * 
 * \Effect<type, type>
 * \Effect<type, type, type>
 * \Effect<type, type, type, type>
 * \Effect<type, type, type, type, type>
 * 
 * You can combine text effects with one another provided that they are of
 * different types (NOT subtypes). What this means is you can pick an
 * angle-type text effect, combine it with a color-type text effect along with
 * something like a positioning-type text effect and produce results.
 * 
 * You cannot combine same types together such as a positioning-type with
 * another positioning type.
 * 
 * Examples:
 * 
 * \Effect<Swing, Rainbow>
 * \Effect<Wag, Flow, HorzWave>
 * \Effect<Jelly, Shiver, HorzCard>
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Angle Effects Settings
 * ============================================================================
 *
 * Setup the various settings for angle-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 * 
 * Angles > Pendulum Effect
 * 
 *   Arc Size:
 *   - What is the pendulum arc size?
 * 
 *   Speed Modifier:
 *   - Arc speed rate for pendulum effect.
 * 
 *   Offset Modifier:
 *   - Arc offset modifier for pendulum effect.
 * 
 * ---
 * 
 * Angles > Rotation Effect
 * 
 *   Speed Modifier:
 *   - Speed to determine many angles will rotate per frame.
 * 
 *   Offset Modifier:
 *   - Initial angle offset modifier for rotation effect.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Effects Settings
 * ============================================================================
 *
 * Setup the various settings for color-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 *
 * Color
 * 
 *   Forced Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *   - Leave empty to not use.
 * 
 * ---
 * 
 * Color > Hue Change Effect
 * 
 *   Hue Shift:
 *   - Shift hue by how much each frame?
 * 
 *   Offset Modifier:
 *   - Initial hue offset modifier for hue shift.
 * 
 * ---
 * 
 * Color > Tone Effect
 * 
 *   Color Tone(s):
 *   - What tone(s) do you want for the letters?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Frame Delay:
 *   - What is the frame delay between tone changes?
 * 
 *   Offset Modifier:
 *   - Initial tone offset modifier for tone change.
 * 
 *   Smooth Transition?:
 *   - Make a smooth transition for tone changes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Opacity Effects Settings
 * ============================================================================
 *
 * Setup the various settings for opacity-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 * 
 * Opacity
 * 
 *   Base Opacity:
 *   - What is the starting opacity value?
 * 
 * ---
 * 
 * Opacity > Glow Effect
 * 
 *   Glow Rate:
 *   - What is the glow change for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Glow Speed:
 *   - What is the speed at which glow oscillates at?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Offset Modifier:
 *   - Initial opacity offset modifier for glow effect.
 * 
 * ---
 * 
 * Opacity > Intensity Pattern
 * 
 *   Custom Pattern:
 *   - Create a custom pattern with letters from a to z.
 *   - Where 'a' is transparent and 'z' is opaque.
 * 
 *   Frame Delay:
 *   - What is the frame delay between pattern updates?
 * 
 *   Offset Modifier:
 *   - Initial opacity offset modifier for pattern effect.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Positioning Effects Settings
 * ============================================================================
 *
 * Setup the various settings for positioning-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 *
 * Positioning > Wave (Horz) Effect
 * 
 *   Distance:
 *   - Horizontal distance for wave effect.
 * 
 *   Speed Modifier:
 *   - Horizontal speed rate for wave effect.
 * 
 *   Offset Modifier:
 *   - Horizontal offset modifier for wave effect.
 * 
 * ---
 * 
 * Positioning > Wave (Vert) Effect
 * 
 *   Distance:
 *   - Vertical distance for wave effect.
 * 
 *   Speed Modifier:
 *   - Vertical speed rate for wave effect.
 * 
 *   Offset Modifier:
 *   - Vertical offset modifier for wave effect.
 * 
 * ---
 *
 * Positioning > Frantic Effect
 * 
 *   Horz Strength:
 *   - Horizontal frantic randomization strength.
 *   - Determines random horizontal position for frantic effect.
 * 
 *   Vert Strength:
 *   - Vertical frantic randomization strength.
 *   - Determines random vertical position for frantic effect.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scaling Effects Settings
 * ============================================================================
 *
 * Setup the various settings for scaling-type Text Effects here.
 *
 * ---
 *
 * General
 * 
 *   Name:
 *   - UNIQUE name of this message text effect type.
 *   - Used in place of 'name' in \Effect<name> for text codes.
 *
 * ---
 * 
 * Scaling > Flip (Horz) Effect
 * 
 *   Speed Modifier:
 *   - Horizontal speed rate for flip effect.
 * 
 *   Offset Modifier:
 *   - Horizontal offset modifier for flip effect.
 * 
 * ---
 * 
 * Scaling > Flip (Vert) Effect
 * 
 *   Speed Modifier:
 *   - Vertical speed rate for flip effect.
 * 
 *   Offset Modifier:
 *   - Vertical offset modifier for flip effect.
 * 
 * ---
 * 
 * Scaling > Pulse (Horz) Effect
 * 
 *   Growth:
 *   - Horizontal growth pulse effect.
 * 
 *   Speed Modifier:
 *   - Horizontal speed rate for pulse effect.
 * 
 *   Offset Modifier:
 *   - Horizontal offset modifier for pulse effect.
 * 
 * ---
 * 
 * Scaling > Pulse (Vert) Effect
 * 
 *   Growth:
 *   - Vertical growth pulse effect.
 * 
 *   Speed Modifier:
 *   - Vertical speed rate for pulse effect.
 * 
 *   Offset Modifier:
 *   - Vertical offset modifier for pulse effect.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings for Animated Message Text Effects.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Animated Text Effects' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * Version 1.04: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Better compatibility with different icon sizes.
 * 
 * Version 1.03: March 14, 2024
 * * Compatibility Update!
 * ** Updated compatibility with VisuMZ_2_ExtMessageFunc when the button
 *    console is located at the top of the message window. Update by Irina.
 * 
 * Version 1.02: March 16, 2023
 * * Bug Fixes!
 * ** Animated text that has been sized up with \{ text codes will no longer be
 *    cut off visually, especially with larger outline effects and certain font
 *    types. Fix made by Irina.
 * 
 * Version 1.01: February 16, 2023
 * * Bug Fixes!
 * ** <Clear Effect> text code was not working properly before. Now, it should
 *    work fine and clear effects. Fix made by Irina.
 * ** Color Tone effects applied to large quantities of text should no longer
 *    cause interrupted breaks. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: February 27, 2023
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
 * @param AniMsgTextEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param TextEffects
 * @text Text Effect Settings
 *
 * @param AngleEffects:arraystruct
 * @text Angle Effects
 * @parent TextEffects
 * @type struct<AngleEffect>[]
 * @desc Setup the various settings for angle-type Text Effects here.
 * @default ["{\"Name:str\":\"Swing\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.25\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowSwing\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.10\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastSwing\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.40\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"Wag\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.25\",\"PendulumOffset:num\":\"8\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowWag\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.10\",\"PendulumOffset:num\":\"8\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastWag\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.40\",\"PendulumOffset:num\":\"8\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"Jelly\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.25\",\"PendulumOffset:num\":\"15\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowJelly\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.10\",\"PendulumOffset:num\":\"15\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastJelly\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"15\",\"PendulumSpeed:num\":\"0.40\",\"PendulumOffset:num\":\"12\",\"Rotation\":\"\",\"RotationSpeed:num\":\"0\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SpinCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-2.4\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowSpinCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-1.8\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastSpinCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-3.6\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SpinCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+2.4\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"SlowSpinCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+1.8\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"FastSpinCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+3.6\",\"RotationOffset:num\":\"0\"}","{\"Name:str\":\"RollCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-2.4\",\"RotationOffset:num\":\"-12\"}","{\"Name:str\":\"SlowRollCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-1.8\",\"RotationOffset:num\":\"-9\"}","{\"Name:str\":\"FastRollCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"-3.6\",\"RotationOffset:num\":\"-15\"}","{\"Name:str\":\"RollCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+2.4\",\"RotationOffset:num\":\"12\"}","{\"Name:str\":\"SlowRollCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+1.8\",\"RotationOffset:num\":\"9\"}","{\"Name:str\":\"FastRollCCW\",\"Angles\":\"\",\"Pendulum\":\"\",\"PendulumArc:num\":\"0\",\"PendulumSpeed:num\":\"0\",\"PendulumOffset:num\":\"0\",\"Rotation\":\"\",\"RotationSpeed:num\":\"+3.6\",\"RotationOffset:num\":\"15\"}"]
 *
 * @param ColorEffects:arraystruct
 * @text Color Effects
 * @parent TextEffects
 * @type struct<ColorEffect>[]
 * @desc Setup the various settings for color-type Text Effects here.
 * @default ["{\"Name:str\":\"Prism\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-6\",\"InitialHueOffset:num\":\"0\"}","{\"Name:str\":\"SlowPrism\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-3\",\"InitialHueOffset:num\":\"0\"}","{\"Name:str\":\"FastPrism\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-9\",\"InitialHueOffset:num\":\"0\"}","{\"Name:str\":\"Rainbow\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-6\",\"InitialHueOffset:num\":\"36\"}","{\"Name:str\":\"SlowRainbow\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-3\",\"InitialHueOffset:num\":\"36\"}","{\"Name:str\":\"FastRainbow\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-9\",\"InitialHueOffset:num\":\"36\"}","{\"Name:str\":\"Gamer\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-6\",\"InitialHueOffset:num\":\"-216\"}","{\"Name:str\":\"SlowGamer\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-3\",\"InitialHueOffset:num\":\"-216\"}","{\"Name:str\":\"FastGamer\",\"Color\":\"\",\"ForcedColor:str\":\"#f69679\",\"Hue\":\"\",\"HueShift:num\":\"-9\",\"InitialHueOffset:num\":\"-216\"}","{\"Name:str\":\"Red\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftRed\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardRed\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Green\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftGreen\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardGreen\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Blue\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftBlue\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardBlue\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Yellow\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftYellow\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardYellow\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 255, 0, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Cyan\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftCyan\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardCyan\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Magenta\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SoftMagenta\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"HardMagenta\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 255, 0]\\\",\\\"[0, 0, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"0\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"RGB\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[255, 255, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 255, 0]\\\",\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"20\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"SlowRGB\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[255, 255, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 255, 0]\\\",\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"FastRGB\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[255, 255, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 255, 255, 0]\\\",\\\"[0, 0, 255, 0]\\\",\\\"[255, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"10\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"Fes\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"20\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"SlowFes\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"FastFes\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\"]\",\"toneDelay:num\":\"10\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"false\"}","{\"Name:str\":\"Gig\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"20\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"SlowGig\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"30\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}","{\"Name:str\":\"FastGig\",\"Color\":\"\",\"ForcedColor:str\":\"\",\"Hue\":\"\",\"HueShift:num\":\"0\",\"InitialHueOffset:num\":\"0\",\"Tone\":\"\",\"colorTones:arrayeval\":\"[\\\"[255, 0, 0, 0]\\\",\\\"[0, 255, 0, 0]\\\",\\\"[0, 0, 255, 0]\\\"]\",\"toneDelay:num\":\"10\",\"InitialToneOffset:num\":\"-1\",\"SmoothToneChange:eval\":\"true\"}"]
 *
 * @param OpacityEffects:arraystruct
 * @text Opacity Effects
 * @parent TextEffects
 * @type struct<OpacityEffect>[]
 * @desc Setup the various settings for opacity-type Text Effects here.
 * @default ["{\"Name:str\":\"Glow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.25\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"SlowGlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.10\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"FastGlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.40\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Flow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.25\",\"glowOffset:num\":\"2\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"SlowFlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.10\",\"glowOffset:num\":\"2\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"FastFlow\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.40\",\"glowOffset:num\":\"2\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Blink\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.25\",\"glowOffset:num\":\"15\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"SlowBlink\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.10\",\"glowOffset:num\":\"30\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"FastBlink\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0.50\",\"glowSpeed:num\":\"0.40\",\"glowOffset:num\":\"8\",\"Pattern\":\"\",\"pattern:str\":\"\",\"patternDelay:num\":\"0\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Campfire\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmmaaammmaaammmabcdefaaaammmmabcdefmmmaaaa\",\"patternDelay:num\":\"2\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Candle\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmmmmaaaaammmmmaaaaaabcdefgabcdefg\",\"patternDelay:num\":\"2\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Fade\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"abcdefghijklmnopqrrqponmlkjihgfedcba\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Flicker\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"nmonqnmomnmomomno\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Fluorescent\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmamammmmammamamaaamammma\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Halogen\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmnmmommommnonmmonqnmmo\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Strobe\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mamamamamama\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Torch\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmmaaaabcdefgmmmmaaaammmaamm\",\"patternDelay:num\":\"2\",\"patternOffset:num\":\"0\"}","{\"Name:str\":\"Underwater\",\"Opacity\":\"\",\"InitialOpacity:num\":\"255\",\"Glow\":\"\",\"glowRate:num\":\"0\",\"glowSpeed:num\":\"0\",\"glowOffset:num\":\"0\",\"Pattern\":\"\",\"pattern:str\":\"mmnnmmnnnmmnn\",\"patternDelay:num\":\"4\",\"patternOffset:num\":\"0\"}"]
 *
 * @param PositionEffects:arraystruct
 * @text Positioning Effects
 * @parent TextEffects
 * @type struct<PositionEffect>[]
 * @desc Setup the various settings for color-type Text Effects here.
 * @default ["{\"Name:str\":\"Shake\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"2\",\"ShakeStrengthVert:num\":\"2\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SoftShake\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"1\",\"ShakeStrengthVert:num\":\"1\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"HardShake\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"3\",\"ShakeStrengthVert:num\":\"3\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Shiver\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"2\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SoftShiver\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"1\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"HardShiver\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"3\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Vibe\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"2\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SoftVibe\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"1\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"HardVibe\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"3\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Stagger\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"4\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"15\"}","{\"Name:str\":\"SlowStagger\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"4\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"30\"}","{\"Name:str\":\"FastStagger\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"4\",\"WaveSpeedY:num\":\"0.50\",\"WaveOffsetY:num\":\"30\"}","{\"Name:str\":\"Saw\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.25\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowSaw\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.10\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"FastSaw\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.40\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Bounce\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowBounce\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"FastBounce\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.40\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"Wave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.25\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"SlowWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.10\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"FastWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.40\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.40\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"HorzWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.25\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowHorzWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.10\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"FastHorzWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"3\",\"WaveSpeedX:num\":\"0.40\",\"WaveOffsetX:num\":\"1\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"0\",\"WaveSpeedY:num\":\"0\",\"WaveOffsetY:num\":\"0\"}","{\"Name:str\":\"VertWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.25\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"SlowVertWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.10\",\"WaveOffsetY:num\":\"2\"}","{\"Name:str\":\"FastVertWave\",\"Positioning\":\"\",\"Shake\":\"\",\"ShakeStrengthHorz:num\":\"0\",\"ShakeStrengthVert:num\":\"0\",\"WaveX\":\"\",\"WaveDistanceX:num\":\"0\",\"WaveSpeedX:num\":\"0\",\"WaveOffsetX:num\":\"0\",\"WaveY\":\"\",\"WaveDistanceY:num\":\"3\",\"WaveSpeedY:num\":\"0.40\",\"WaveOffsetY:num\":\"2\"}"]
 *
 * @param ScaleEffects:arraystruct
 * @text Scaling Effects
 * @parent TextEffects
 * @type struct<ScaleEffects>[]
 * @desc Setup the various settings for color-type Text Effects here.
 * @default ["{\"Name:str\":\"HorzCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.10\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowHorzCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.08\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastHorzCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.15\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"VertCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.10\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowVertCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.08\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastVertCard\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.15\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"HorzRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.10\",\"FlipOffsetX:num\":\"2\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowHorzRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.08\",\"FlipOffsetX:num\":\"2\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastHorzRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0.15\",\"FlipOffsetX:num\":\"2\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"VertRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.10\",\"FlipOffsetY:num\":\"2\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SlowVertRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.08\",\"FlipOffsetY:num\":\"2\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"FastVertRibbon\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0.15\",\"FlipOffsetY:num\":\"2\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0\",\"PulseSpeedX:num\":\"0\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0\",\"PulseSpeedY:num\":\"0\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"Pulse\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.30\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.30\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"SmallPulse\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.10\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.10\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"BigPulse\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.40\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"0\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.40\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"0\"}","{\"Name:str\":\"Jiggle\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.30\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"2\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.30\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"2\"}","{\"Name:str\":\"SmallJiggle\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.10\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"2\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.10\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"2\"}","{\"Name:str\":\"BigJiggle\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.40\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"2\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"0.40\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"2\"}","{\"Name:str\":\"Gooey\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.30\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"33\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"-0.30\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"33\"}","{\"Name:str\":\"SmallGooey\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.10\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"33\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"-0.10\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"33\"}","{\"Name:str\":\"BigGooey\",\"Scaling\":\"\",\"FlipX\":\"\",\"FlipSpeedX:num\":\"0\",\"FlipOffsetX:num\":\"0\",\"FlipY\":\"\",\"FlipSpeedY:num\":\"0\",\"FlipOffsetY:num\":\"0\",\"PulseX\":\"\",\"PulseGrowthX:num\":\"0.40\",\"PulseSpeedX:num\":\"0.25\",\"PulseOffsetX:num\":\"33\",\"PulseY\":\"\",\"PulseGrowthY:num\":\"-0.40\",\"PulseSpeedY:num\":\"0.25\",\"PulseOffsetY:num\":\"33\"}"]
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings for Animated Message Text Effects.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Effects"}
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
 * Angle Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AngleEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Angles
 * 
 * @param Pendulum
 * @text Pendulum Effect
 * @parent Angles
 *
 * @param PendulumArc:num
 * @text Arc Size
 * @parent Pendulum
 * @type number
 * @desc What is the pendulum arc size?
 * @default 0
 *
 * @param PendulumSpeed:num
 * @text Speed Modifier
 * @parent Pendulum
 * @desc Arc speed rate for pendulum effect.
 * @default 0
 *
 * @param PendulumOffset:num
 * @text Offset Modifier
 * @parent Pendulum
 * @desc Arc offset modifier for pendulum effect.
 * @default 0
 * 
 * @param Rotation
 * @text Rotation Effect
 * @parent Angles
 *
 * @param RotationSpeed:num
 * @text Speed Modifier
 * @parent Rotation
 * @desc Speed to determine many angles will rotate per frame.
 * @default 0
 *
 * @param RotationOffset:num
 * @text Offset Modifier
 * @parent Rotation
 * @desc Initial angle offset modifier for rotation effect.
 * @default 0
 * 
 */
/* ----------------------------------------------------------------------------
 * Color Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ColorEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Color
 *
 * @param ForcedColor:str
 * @text Forced Color
 * @parent Color
 * @desc Use #rrggbb for custom colors or regular numbers for text
 * colors from the Window Skin. Leave empty to not use.
 * @default 
 * 
 * @param Hue
 * @text Hue Change Effect
 * @parent Color
 *
 * @param HueShift:num
 * @text Hue Shift
 * @parent Hue
 * @desc Shift hue by how much each frame?
 * @default 0
 *
 * @param InitialHueOffset:num
 * @text Offset Modifier
 * @parent Hue
 * @desc Initial hue offset modifier for hue shift.
 * @default 0
 * 
 * @param Tone
 * @text Tone Effect
 * @parent Color
 *
 * @param colorTones:arrayeval
 * @text Color Tone(s)
 * @parent Tone
 * @type string[]
 * @desc What tone(s) do you want for the letters?
 * Format: [Red, Green, Blue, Gray]
 * @default []
 *
 * @param toneDelay:num
 * @text Frame Delay
 * @parent Tone
 * @type number
 * @desc What is the frame delay between tone changes?
 * @default 0
 *
 * @param InitialToneOffset:num
 * @text Offset Modifier
 * @parent Tone
 * @desc Initial tone offset modifier for tone change.
 * @default 0
 *
 * @param SmoothToneChange:eval
 * @text Smooth Transition?
 * @parent Tone
 * @type boolean
 * @on Smooth
 * @off Instant
 * @desc Make a smooth transition for tone changes?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Opacity Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OpacityEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Opacity
 *
 * @param InitialOpacity:num
 * @text Base Opacity
 * @parent Opacity
 * @desc What is the starting opacity value?
 * @default 255
 * 
 * @param Glow
 * @text Glow Effect
 * @parent Opacity
 *
 * @param glowRate:num
 * @text Glow Rate
 * @parent Glow
 * @desc What is the glow change for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0
 *
 * @param glowSpeed:num
 * @text Glow Speed
 * @parent Glow
 * @desc What is the speed at which glow oscillates at?
 * Use a decimal number between 0 and 1.
 * @default 0
 *
 * @param glowOffset:num
 * @text Offset Modifier
 * @parent Glow
 * @desc Initial opacity offset modifier for glow effect.
 * @default 0
 * 
 * @param Pattern
 * @text Intensity Pattern
 * @parent Opacity
 *
 * @param pattern:str
 * @text Custom Pattern
 * @parent Pattern
 * @desc Create a custom pattern with letters from a to z.
 * Where 'a' is transparent and 'z' is opaque.
 * @default 
 *
 * @param patternDelay:num
 * @text Frame Delay
 * @parent Pattern
 * @type number
 * @desc What is the frame delay between pattern updates?
 * @default 0
 *
 * @param patternOffset:num
 * @text Offset Modifier
 * @parent Pattern
 * @desc Initial opacity offset modifier for pattern effect.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Position Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PositionEffect:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Positioning
 * 
 * @param Shake
 * @text Frantic Effect
 * @parent Positioning
 *
 * @param ShakeStrengthHorz:num
 * @text Horz Strength
 * @parent Shake
 * @type number
 * @desc Horizontal frantic randomization strength.
 * Determines random horizontal position for frantic effect.
 * @default 0
 *
 * @param ShakeStrengthVert:num
 * @text Vert Strength
 * @parent Shake
 * @type number
 * @desc 
 * @default 0
 * 
 * @param WaveX
 * @text Wave (Horz) Effect
 * @parent Positioning
 *
 * @param WaveDistanceX:num
 * @text Distance
 * @parent WaveX
 * @type number
 * @desc Horizontal distance for wave effect.
 * @default 0
 *
 * @param WaveSpeedX:num
 * @text Speed Modifier
 * @parent WaveX
 * @desc Horizontal speed rate for wave effect.
 * @default 0
 *
 * @param WaveOffsetX:num
 * @text Offset Modifier
 * @parent WaveX
 * @desc Horizontal offset modifier for wave effect.
 * @default 0
 * 
 * @param WaveY
 * @text Wave (Vert) Effect
 * @parent Positioning
 *
 * @param WaveDistanceY:num
 * @text Distance
 * @parent WaveY
 * @type number
 * @desc Vertical distance for wave effect.
 * @default 0
 *
 * @param WaveSpeedY:num
 * @text Speed Modifier
 * @parent WaveY
 * @desc Vertical speed rate for wave effect.
 * @default 0
 *
 * @param WaveOffsetY:num
 * @text Offset Modifier
 * @parent WaveY
 * @desc Vertical offset modifier for wave effect.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Scaling Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScaleEffects:
 *
 * @param Name:str
 * @text Name
 * @desc UNIQUE name of this message text effect type.
 * Used in place of 'name' in \Effect<name> for text codes.
 * @default Untitled
 * 
 * @param Scaling
 * 
 * @param FlipX
 * @text Flip (Horz) Effect
 * @parent Scaling
 *
 * @param FlipSpeedX:num
 * @text Speed Modifier
 * @parent FlipX
 * @desc Horizontal speed rate for flip effect.
 * @default 0
 *
 * @param FlipOffsetX:num
 * @text Offset Modifier
 * @parent FlipX
 * @desc Horizontal offset modifier for flip effect.
 * @default 0
 * 
 * @param FlipY
 * @text Flip (Vert) Effect
 * @parent Scaling
 *
 * @param FlipSpeedY:num
 * @text Speed Modifier
 * @parent FlipY
 * @desc Vertical speed rate for flip effect.
 * @default 0
 *
 * @param FlipOffsetY:num
 * @text Offset Modifier
 * @parent FlipY
 * @desc Vertical offset modifier for flip effect.
 * @default 0
 * 
 * @param PulseX
 * @text Pulse (Horz) Effect
 * @parent Scaling
 *
 * @param PulseGrowthX:num
 * @text Growth
 * @parent PulseX
 * @desc Horizontal growth pulse effect.
 * @default 0
 *
 * @param PulseSpeedX:num
 * @text Speed Modifier
 * @parent PulseX
 * @desc Horizontal speed rate for pulse effect.
 * @default 0
 *
 * @param PulseOffsetX:num
 * @text Offset Modifier
 * @parent PulseX
 * @desc Horizontal offset modifier for pulse effect.
 * @default 0
 * 
 * @param PulseY
 * @text Pulse (Vert) Effect
 * @parent Scaling
 *
 * @param PulseGrowthY:num
 * @text Growth
 * @parent PulseY
 * @desc Vertical growth pulse effect.
 * @default 0
 *
 * @param PulseSpeedY:num
 * @text Speed Modifier
 * @parent PulseY
 * @desc Vertical speed rate for pulse effect.
 * @default 0
 *
 * @param PulseOffsetY:num
 * @text Offset Modifier
 * @parent PulseY
 * @desc Vertical offset modifier for pulse effect.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
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
 * @desc Add the 'Text Effects' option to the Options menu?
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
 * @default Text Effects
 *
 */
//=============================================================================

function _0xa6bd(_0x5d5ced,_0x1a5748){const _0x178bf5=_0x178b();return _0xa6bd=function(_0xa6bdc0,_0x3f59b5){_0xa6bdc0=_0xa6bdc0-0x79;let _0x56adf9=_0x178bf5[_0xa6bdc0];return _0x56adf9;},_0xa6bd(_0x5d5ced,_0x1a5748);}const _0x12f45f=_0xa6bd;(function(_0xe6f4b6,_0x267d73){const _0x1be55a=_0xa6bd,_0x2c7ba1=_0xe6f4b6();while(!![]){try{const _0x89e46b=parseInt(_0x1be55a(0x14c))/0x1*(parseInt(_0x1be55a(0x97))/0x2)+parseInt(_0x1be55a(0x165))/0x3+parseInt(_0x1be55a(0x119))/0x4*(parseInt(_0x1be55a(0x11e))/0x5)+parseInt(_0x1be55a(0xfa))/0x6+parseInt(_0x1be55a(0xac))/0x7+-parseInt(_0x1be55a(0xc9))/0x8*(-parseInt(_0x1be55a(0x125))/0x9)+parseInt(_0x1be55a(0x105))/0xa*(-parseInt(_0x1be55a(0xa4))/0xb);if(_0x89e46b===_0x267d73)break;else _0x2c7ba1['push'](_0x2c7ba1['shift']());}catch(_0x588af7){_0x2c7ba1['push'](_0x2c7ba1['shift']());}}}(_0x178b,0xb82d7));var label=_0x12f45f(0x15d),tier=tier||0x0,dependencies=[_0x12f45f(0xfe)],pluginData=$plugins[_0x12f45f(0x150)](function(_0x3fb067){const _0x4fdffe=_0x12f45f;return _0x3fb067[_0x4fdffe(0x87)]&&_0x3fb067['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x12f45f(0xc7)]=VisuMZ[label][_0x12f45f(0xc7)]||{},VisuMZ['ConvertParams']=function(_0x4c1a4c,_0x24a151){const _0x458f7c=_0x12f45f;for(const _0x25b48d in _0x24a151){if(_0x25b48d[_0x458f7c(0x7e)](/(.*):(.*)/i)){const _0x551c9a=String(RegExp['$1']),_0x3b2252=String(RegExp['$2'])[_0x458f7c(0xf6)]()[_0x458f7c(0x114)]();let _0xd76c50,_0x21d4c6,_0x5869fd;switch(_0x3b2252){case _0x458f7c(0x12e):_0xd76c50=_0x24a151[_0x25b48d]!==''?Number(_0x24a151[_0x25b48d]):0x0;break;case _0x458f7c(0xe7):_0x21d4c6=_0x24a151[_0x25b48d]!==''?JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d]):[],_0xd76c50=_0x21d4c6[_0x458f7c(0x154)](_0x2d3bae=>Number(_0x2d3bae));break;case _0x458f7c(0xe2):_0xd76c50=_0x24a151[_0x25b48d]!==''?eval(_0x24a151[_0x25b48d]):null;break;case _0x458f7c(0xd1):_0x21d4c6=_0x24a151[_0x25b48d]!==''?JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d]):[],_0xd76c50=_0x21d4c6[_0x458f7c(0x154)](_0x242d71=>eval(_0x242d71));break;case'JSON':_0xd76c50=_0x24a151[_0x25b48d]!==''?JSON['parse'](_0x24a151[_0x25b48d]):'';break;case _0x458f7c(0xef):_0x21d4c6=_0x24a151[_0x25b48d]!==''?JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d]):[],_0xd76c50=_0x21d4c6['map'](_0x4625c1=>JSON['parse'](_0x4625c1));break;case _0x458f7c(0x124):_0xd76c50=_0x24a151[_0x25b48d]!==''?new Function(JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d])):new Function(_0x458f7c(0x10a));break;case _0x458f7c(0xd7):_0x21d4c6=_0x24a151[_0x25b48d]!==''?JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d]):[],_0xd76c50=_0x21d4c6[_0x458f7c(0x154)](_0x2b3601=>new Function(JSON[_0x458f7c(0xce)](_0x2b3601)));break;case _0x458f7c(0x7f):_0xd76c50=_0x24a151[_0x25b48d]!==''?String(_0x24a151[_0x25b48d]):'';break;case _0x458f7c(0x14f):_0x21d4c6=_0x24a151[_0x25b48d]!==''?JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d]):[],_0xd76c50=_0x21d4c6['map'](_0x300096=>String(_0x300096));break;case _0x458f7c(0x152):_0x5869fd=_0x24a151[_0x25b48d]!==''?JSON[_0x458f7c(0xce)](_0x24a151[_0x25b48d]):{},_0xd76c50=VisuMZ['ConvertParams']({},_0x5869fd);break;case _0x458f7c(0x156):_0x21d4c6=_0x24a151[_0x25b48d]!==''?JSON['parse'](_0x24a151[_0x25b48d]):[],_0xd76c50=_0x21d4c6[_0x458f7c(0x154)](_0x3eb268=>VisuMZ[_0x458f7c(0xc4)]({},JSON['parse'](_0x3eb268)));break;default:continue;}_0x4c1a4c[_0x551c9a]=_0xd76c50;}}return _0x4c1a4c;},(_0x12e2c0=>{const _0x33db6d=_0x12f45f,_0xf457cd=_0x12e2c0[_0x33db6d(0xc6)];for(const _0x260138 of dependencies){if(!Imported[_0x260138]){alert(_0x33db6d(0x10d)[_0x33db6d(0xb8)](_0xf457cd,_0x260138)),SceneManager[_0x33db6d(0x141)]();break;}}const _0x3f98b4=_0x12e2c0[_0x33db6d(0xa3)];if(_0x3f98b4[_0x33db6d(0x7e)](/\[Version[ ](.*?)\]/i)){const _0x4932a4=Number(RegExp['$1']);_0x4932a4!==VisuMZ[label][_0x33db6d(0x110)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x33db6d(0xb8)](_0xf457cd,_0x4932a4)),SceneManager[_0x33db6d(0x141)]());}if(_0x3f98b4[_0x33db6d(0x7e)](/\[Tier[ ](\d+)\]/i)){const _0x405e0e=Number(RegExp['$1']);_0x405e0e<tier?(alert(_0x33db6d(0x121)['format'](_0xf457cd,_0x405e0e,tier)),SceneManager['exit']()):tier=Math[_0x33db6d(0x8a)](_0x405e0e,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x12e2c0[_0x33db6d(0xa2)]);})(pluginData),VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0x159)]=Scene_Boot['prototype'][_0x12f45f(0x108)],Scene_Boot[_0x12f45f(0x144)][_0x12f45f(0x108)]=function(){const _0x1f6a7e=_0x12f45f;VisuMZ[_0x1f6a7e(0x15d)][_0x1f6a7e(0x159)][_0x1f6a7e(0xdc)](this),this[_0x1f6a7e(0xc3)]();},VisuMZ['AniMsgTextEffects']['Effects']={},Scene_Boot[_0x12f45f(0x144)]['process_VisuMZ_AniMsgTextEffects']=function(){const _0x11dd2a=_0x12f45f,_0x3af81a=[_0x11dd2a(0xfc),_0x11dd2a(0x136),_0x11dd2a(0xf3),_0x11dd2a(0x13e),_0x11dd2a(0x9e)];for(const _0x54854d of _0x3af81a){for(const _0x46a086 of VisuMZ[_0x11dd2a(0x15d)]['Settings'][_0x54854d]){if(!_0x46a086)continue;const _0x8afe71=_0x46a086[_0x11dd2a(0x157)][_0x11dd2a(0xb1)]()[_0x11dd2a(0x114)]();if(_0x8afe71==='')continue;if(_0x8afe71===_0x11dd2a(0x160))continue;VisuMZ[_0x11dd2a(0x15d)][_0x11dd2a(0x15a)][_0x8afe71]=VisuMZ[_0x11dd2a(0x15d)][_0x11dd2a(0x15a)][_0x8afe71]||{};const _0x222976=VisuMZ[_0x11dd2a(0x15d)][_0x11dd2a(0x15a)][_0x8afe71];for(const _0x3f71d3 in _0x46a086){_0x222976[_0x3f71d3]=_0x46a086[_0x3f71d3];}if(_0x8afe71===_0x11dd2a(0x127))console[_0x11dd2a(0xb6)](_0x222976);}}},ConfigManager[_0x12f45f(0x13d)]=!![],VisuMZ[_0x12f45f(0x15d)]['ConfigManager_makeData']=ConfigManager[_0x12f45f(0x10f)],ConfigManager['makeData']=function(){const _0x5bda1a=_0x12f45f,_0x1b0799=VisuMZ[_0x5bda1a(0x15d)][_0x5bda1a(0xd2)][_0x5bda1a(0xdc)](this);return _0x1b0799[_0x5bda1a(0x13d)]=this[_0x5bda1a(0x13d)],_0x1b0799;},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0x10c)]=ConfigManager[_0x12f45f(0x90)],ConfigManager[_0x12f45f(0x90)]=function(_0xe4a36d){const _0x1d7468=_0x12f45f;VisuMZ['AniMsgTextEffects'][_0x1d7468(0x10c)][_0x1d7468(0xdc)](this,_0xe4a36d),this[_0x1d7468(0xde)](_0xe4a36d,'textEffects',!![]),_0x1d7468(0x13d)in _0xe4a36d?this[_0x1d7468(0x13d)]=_0xe4a36d['textEffects']:this[_0x1d7468(0x13d)]=!![];},ColorManager[_0x12f45f(0xb9)]=function(_0x21b3d2){const _0x245373=_0x12f45f;return _0x21b3d2=String(_0x21b3d2),_0x21b3d2[_0x245373(0x7e)](/#(.*)/i)?_0x245373(0xbe)[_0x245373(0xb8)](String(RegExp['$1'])):this[_0x245373(0xd3)](Number(_0x21b3d2));},TextManager[_0x12f45f(0x13d)]=VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0xc7)][_0x12f45f(0x115)][_0x12f45f(0x157)]||'',VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0xf1)]=Scene_Message[_0x12f45f(0x144)][_0x12f45f(0xcd)],Scene_Message[_0x12f45f(0x144)][_0x12f45f(0xcd)]=function(){const _0x11204d=_0x12f45f;VisuMZ[_0x11204d(0x15d)][_0x11204d(0xf1)]['call'](this),this[_0x11204d(0x14a)]();},Scene_Message[_0x12f45f(0x144)]['createAniMsgTextEffectsContainer']=function(){const _0x19cf48=_0x12f45f;this[_0x19cf48(0x12d)]=new Sprite(),this[_0x19cf48(0x12b)](this[_0x19cf48(0x12d)]),this[_0x19cf48(0xb4)][_0x19cf48(0x123)](this['_AniMsgTextEffectsContainer']);};function _0x178b(){const _0x5f0389=['patternOffset','updateFlipY','fontFace','EVAL','outlineWidth','applyAngleModifiers','update','_baseScale','ARRAYNUM','RotationOffset','_pulseScaleY','_pendulumAngle','split','Window_Message_initMembers','angle','anchor','ARRAYJSON','loadSystem','Scene_Message_createAllWindows','postFlushTextState','OpacityEffects','updateFlipX','fontItalic','toUpperCase','WaveOffsetY','top','toneDelay','2343522SKXxeR','InitialToneOffset','AngleEffects','close','VisuMZ_1_MessageCore','buffer','_msgWindow','clamp','_offset','_pulseScaleX','normal','11738370wxErep','length','CLEAREFFECT','onDatabaseLoaded','newPage','return\x200','setupLocation','ConfigManager_applyData','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_hueValue','makeData','version','constructor','charCodeAt','PendulumOffset','trim','Options','PendulumArc','processEscapeCharacter','_textWidth','14716FgXZGC','_flipScaleY','_patternIndex','POSITION','addTemplatetextEffectsCommand','1270fwmxMc','setColorTone','updateOpacityPatternEffect','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','hide','setTextEffectContainer','FUNC','219906wOHagB','bitmap','show','_textState','setFrame','glowSpeed','addWindow','ForcedColor','_AniMsgTextEffectsContainer','NUM','destroy','PendulumSpeed','initMembers','scale','children','paintOpacity','WaveSpeedX','ColorEffects','FlipOffsetY','obtainEscapeString','setupColorModifiers','pattern','random','Window_Message_processEscapeCharacter','textEffects','PositionEffects','EFFECT','textWidth','exit','addGeneralOptions','WaveDistanceY','prototype','convertTextEffectEscapeCodes','updateColorEffects','colorTones','updateScaleEffects','clearTextEffects','createAniMsgTextEffectsContainer','updateHueShift','16dXYadA','iconIndex','WaveDistanceX','ARRAYSTR','filter','initialize','STRUCT','createEffectData','map','processTextEffectCharacter','ARRAYSTRUCT','Name','ShakeStrengthHorz','Scene_Boot_onDatabaseLoaded','Effects','updatePulseY','cos','AniMsgTextEffects','obtainEscapeParam','updatePendulumnAngle','untitled','Window_Message_close','playMessageSound','applyColorModifiers','iconHeight','1491018UDPsdb','fontBold','outLineColor','drawing','updateAngleEffects','_currentTone','match','STR','updatePositionEffects','Window_Options_addGeneralOptions','applyScaleModifiers','randomInt','FlipSpeedY','addCommand','ShakeStrengthVert','status','processDrawIconTextEffect','updateWaveY','max','_toneIndex','_textEffect','preFlushTextState','drawText','createTextBitmap','applyData','PulseGrowthY','contents','VisuMZ_2_ExtMessageFunc','updateOriginPosition','open','padding','110296cJagqs','updateRotationAngle','patternDelay','PulseSpeedX','setupAngleModifiers','HueShift','_textEffectData','ScaleEffects','frameCount','isTopButtonConsolePosition','createBitmap','parameters','description','33NUdwUV','_baseAngle','RotationSpeed','updatePulseX','addTextEffectsCommands','Window_Message','WaveSpeedY','\x1bCLEAREFFECT[0]','7921641mQgasQ','Window_Message_postFlushTextState','addChild','applyOpacityModifiers','round','toLowerCase','_textHeight','updateOpacityEffects','_messageWindow','replace','log','_textEffectReturnState','format','getColor','IconSet','standardIconWidth','Window_Message_open','removeChild','#%1','updateGlowEffect','updateToneShift','standardIconHeight','effectData','process_VisuMZ_AniMsgTextEffects','ConvertParams','ceil','name','Settings','updateRandomShake','144uMyMzH','floor','BUTTON_HEIGHT','Window_Message_preFlushTextState','createAllWindows','parse','_rotationAngle','height','ARRAYEVAL','ConfigManager_makeData','textColor','PulseGrowthX','preConvertEscapeCharacters','create','ARRAYFUNC','createIconBitmap','_flipScaleX','FlipOffsetX','_targetOpacity','call','center','readFlag'];_0x178b=function(){return _0x5f0389;};return _0x178b();}function Sprite_TextEffect(){const _0x2b8a96=_0x12f45f;this[_0x2b8a96(0x151)](...arguments);}Sprite_TextEffect[_0x12f45f(0x144)]=Object[_0x12f45f(0xd6)](Sprite[_0x12f45f(0x144)]),Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x111)]=Sprite_TextEffect,Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x151)]=function(_0x51e515,_0x362ece,_0x59ebf0){const _0x3a48e4=_0x12f45f;this[_0x3a48e4(0x100)]=_0x51e515,this[_0x3a48e4(0x8c)]=_0x51e515['_textEffect'],this['_textState']=JSON[_0x3a48e4(0xce)](JSON['stringify'](_0x362ece)),this['_offset']=_0x59ebf0,Sprite[_0x3a48e4(0x144)][_0x3a48e4(0x151)][_0x3a48e4(0xdc)](this),this['setupLocation'](),this[_0x3a48e4(0xa1)](),this[_0x3a48e4(0x153)](),this['update']();},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x10b)]=function(){const _0x1ac912=_0x12f45f;if(this[_0x1ac912(0x128)][_0x1ac912(0x14d)]!==undefined){const _0x529406=ImageManager[_0x1ac912(0xbb)]||0x20,_0x19ff38=ImageManager[_0x1ac912(0xc1)]||0x20;this[_0x1ac912(0x118)]=_0x529406+0x4,this[_0x1ac912(0xb2)]=_0x19ff38+0x4;}else{const _0x380283=this['_textState'][_0x1ac912(0xff)];this['_textWidth']=this[_0x1ac912(0x100)][_0x1ac912(0x140)](_0x380283),this[_0x1ac912(0xb2)]=this['_textState']['height'];}this[_0x1ac912(0xee)]['x']=0.5,this[_0x1ac912(0xee)]['y']=0.5;},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xa1)]=function(){const _0x2be4=_0x12f45f;this['_textState'][_0x2be4(0x14d)]!==undefined?this[_0x2be4(0xd8)]():this[_0x2be4(0x8f)]();},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xd8)]=function(){const _0x46dba6=_0x12f45f;this[_0x46dba6(0x126)]=ImageManager[_0x46dba6(0xf0)](_0x46dba6(0xba));const _0xa3ff21=ImageManager['iconWidth'],_0xb398eb=ImageManager[_0x46dba6(0x164)],_0x548f1e=this[_0x46dba6(0x128)][_0x46dba6(0x14d)]%0x10*_0xa3ff21,_0x14bcef=Math[_0x46dba6(0xca)](this[_0x46dba6(0x128)]['iconIndex']/0x10)*_0xb398eb;this[_0x46dba6(0x129)](_0x548f1e,_0x14bcef,_0xa3ff21,_0xb398eb);},Sprite_TextEffect[_0x12f45f(0x144)]['createTextBitmap']=function(){const _0x39aee8=_0x12f45f,_0x158fc4=this['_textState']['buffer'],_0x3d589d=Math['ceil'](this['_msgWindow'][_0x39aee8(0x140)](_0x158fc4)*1.5),_0x4ba660=Math[_0x39aee8(0xc5)](this[_0x39aee8(0x128)][_0x39aee8(0xd0)]*1.5);this[_0x39aee8(0x126)]=new Bitmap(_0x3d589d,_0x4ba660);const _0x11b43b=this[_0x39aee8(0x100)][_0x39aee8(0x92)],_0x1250f2=[_0x39aee8(0xe1),'fontSize',_0x39aee8(0x79),_0x39aee8(0xf5),'textColor',_0x39aee8(0x7a),_0x39aee8(0xe3),_0x39aee8(0x134)];for(const _0x3e0882 of _0x1250f2){this[_0x39aee8(0x126)][_0x3e0882]=_0x11b43b[_0x3e0882];}const _0x2efee5=this[_0x39aee8(0xc2)]();_0x2efee5[_0x39aee8(0x12c)]!==undefined&&_0x2efee5['ForcedColor']!==''&&(this[_0x39aee8(0x126)][_0x39aee8(0xd3)]=ColorManager['getColor'](_0x2efee5[_0x39aee8(0x12c)])),this[_0x39aee8(0x126)][_0x39aee8(0x8e)](_0x158fc4,0x0,0x0,_0x3d589d,_0x4ba660,_0x39aee8(0xdd));},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x153)]=function(){const _0x387ebb=_0x12f45f;this[_0x387ebb(0x9d)]={};const _0x4aed15=this[_0x387ebb(0x8c)][_0x387ebb(0xeb)](',')[_0x387ebb(0x154)](_0x1b28d9=>_0x1b28d9['toLowerCase']()['trim']());for(const _0x261a7b of _0x4aed15){const _0xdad0c9=VisuMZ['AniMsgTextEffects']['Effects'][_0x261a7b];if(!_0xdad0c9)continue;for(const _0x1ae4db in _0xdad0c9){this[_0x387ebb(0x9d)][_0x1ae4db]=_0xdad0c9[_0x1ae4db];}}},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xc2)]=function(){const _0x2f0ac2=_0x12f45f;if(this['_textEffectData']===undefined)this['createEffectData']();return this[_0x2f0ac2(0x9d)]||{};},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xe5)]=function(){const _0x40b29a=_0x12f45f;Sprite['prototype'][_0x40b29a(0xe5)][_0x40b29a(0xdc)](this),this['updatePositionEffects'](),this[_0x40b29a(0x7c)](),this[_0x40b29a(0x148)](),this[_0x40b29a(0xb3)](),this[_0x40b29a(0x146)]();},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x80)]=function(){const _0x3fab5f=_0x12f45f;this[_0x3fab5f(0x94)](),this[_0x3fab5f(0xc8)](),this['updateWaveX'](),this['updateWaveY']();},Sprite_TextEffect['prototype'][_0x12f45f(0x94)]=function(){const _0xf4e658=_0x12f45f;this['x']=this[_0xf4e658(0x128)]['x'],this['x']+=this['_msgWindow']['x']+this[_0xf4e658(0x100)][_0xf4e658(0x96)],this['x']+=this['_textWidth']/0x2,this['y']=this['_textState']['y'],this['y']+=this[_0xf4e658(0x100)]['y']+this['_msgWindow'][_0xf4e658(0x96)],this['y']+=this[_0xf4e658(0xb2)]/0x2;if(this[_0xf4e658(0xa0)]()){const _0x4e387d=Window_ButtonConsole[_0xf4e658(0xcb)]||0x0;this['y']+=_0x4e387d;}},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xa0)]=function(){const _0x259670=_0x12f45f;if(!Imported[_0x259670(0x93)])return![];return Window_ButtonConsole[_0x259670(0x11c)][_0x259670(0xb1)]()[_0x259670(0x114)]()===_0x259670(0xf8);},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xc8)]=function(){const _0x1b2f60=_0x12f45f,_0x2a9a6c=this['effectData'](),_0x5ea849=_0x2a9a6c[_0x1b2f60(0x158)]??0x0,_0xa84bd5=_0x2a9a6c[_0x1b2f60(0x86)]??0x0;if(_0x5ea849===0x0&&_0xa84bd5===0x0)return;this['x']+=Math[_0x1b2f60(0x83)](_0x5ea849+0x1)*(Math[_0x1b2f60(0x13b)]()<0.5?-0x1:0x1),this['y']+=Math[_0x1b2f60(0x83)](_0xa84bd5+0x1)*(Math[_0x1b2f60(0x13b)]()<0.5?-0x1:0x1);},Sprite_TextEffect['prototype']['updateWaveX']=function(){const _0x206a2e=_0x12f45f,_0x2007ac=this[_0x206a2e(0xc2)](),_0x18cb75=_0x2007ac[_0x206a2e(0x14e)]??0x0;if(_0x18cb75===0x0)return;const _0x2f3b50=_0x2007ac[_0x206a2e(0x135)]??0x0;if(_0x2f3b50===0x0)return;const _0x7b68ad=_0x2007ac['WaveOffsetX']??0x0,_0xd4ba8c=Graphics[_0x206a2e(0x9f)]+_0x7b68ad*this[_0x206a2e(0x102)];this['x']+=Math[_0x206a2e(0xb0)](Math[_0x206a2e(0x15c)](_0xd4ba8c*_0x2f3b50)*_0x18cb75);},Sprite_TextEffect['prototype'][_0x12f45f(0x89)]=function(){const _0x37dab8=_0x12f45f,_0x5813a2=this[_0x37dab8(0xc2)](),_0x5d7a8c=_0x5813a2[_0x37dab8(0x143)]??0x0;if(_0x5d7a8c===0x0)return;const _0x575b54=_0x5813a2[_0x37dab8(0xaa)]??0x0;if(_0x575b54===0x0)return;const _0x28ca9f=_0x5813a2[_0x37dab8(0xf7)]??0x0,_0xd3b603=Graphics['frameCount']+_0x28ca9f*this[_0x37dab8(0x102)];this['y']+=Math[_0x37dab8(0xb0)](Math[_0x37dab8(0x15c)](_0xd3b603*_0x575b54)*_0x5d7a8c);},Sprite_TextEffect[_0x12f45f(0x144)]['updateAngleEffects']=function(){const _0x512502=_0x12f45f;this[_0x512502(0x9b)](),this['updatePendulumnAngle'](),this[_0x512502(0x98)](),this[_0x512502(0xe4)]();},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x9b)]=function(){const _0x4c0021=_0x12f45f;this[_0x4c0021(0xa5)]=0x0,this[_0x4c0021(0xea)]=0x0;},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x15f)]=function(){const _0x554aee=_0x12f45f,_0x5ab181=this[_0x554aee(0xc2)](),_0xcb8825=_0x5ab181[_0x554aee(0x116)]??0x0;if(_0xcb8825===0x0)return;const _0x1aece3=_0x5ab181[_0x554aee(0x130)]??0x0;if(_0x1aece3===0x0)return;const _0x261051=_0x5ab181[_0x554aee(0x113)]??0x0,_0x5fcacf=Graphics[_0x554aee(0x9f)]+_0x261051*this[_0x554aee(0x102)];this[_0x554aee(0xea)]=Math['round'](Math[_0x554aee(0x15c)](_0x5fcacf*_0x1aece3)*_0xcb8825);},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x98)]=function(){const _0x5c2541=_0x12f45f,_0x34722c=this['effectData'](),_0x10360a=_0x34722c[_0x5c2541(0xa6)]??0x0;if(_0x10360a===0x0)return;const _0x593db2=(_0x34722c[_0x5c2541(0xe8)]??0x0)*this['_offset'];this[_0x5c2541(0xcf)]=this[_0x5c2541(0xcf)]??_0x593db2,this['_rotationAngle']-=_0x10360a;while(this[_0x5c2541(0xcf)]>0x168)this[_0x5c2541(0xcf)]-=0x168;while(this['_rotationAngle']<0x0)this['_rotationAngle']+=0x168;},Sprite_TextEffect['prototype'][_0x12f45f(0xe4)]=function(){const _0x592509=_0x12f45f;let _0x2686c9=this[_0x592509(0xa5)];_0x2686c9+=this[_0x592509(0xea)];this[_0x592509(0xcf)]!==undefined&&(_0x2686c9+=this['_rotationAngle']);if(this[_0x592509(0xed)]!==_0x2686c9)this[_0x592509(0xed)]=_0x2686c9;},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x148)]=function(){const _0x541c6a=_0x12f45f;this['setupScaleModifiers'](),this[_0x541c6a(0xf4)](),this[_0x541c6a(0xe0)](),this['updatePulseX'](),this['updatePulseY'](),this[_0x541c6a(0x82)]();},Sprite_TextEffect['prototype']['setupScaleModifiers']=function(){const _0xdeae62=_0x12f45f;this[_0xdeae62(0xe6)]=0x1,this['_msgWindow']&&(this['_baseScale']*=Math[_0xdeae62(0x8a)](this[_0xdeae62(0x100)][_0xdeae62(0x132)]['x'],this[_0xdeae62(0x100)][_0xdeae62(0x132)]['y'])),this[_0xdeae62(0xd9)]=0x1,this[_0xdeae62(0x11a)]=0x1,this[_0xdeae62(0x103)]=0x1,this[_0xdeae62(0xe9)]=0x1;},Sprite_TextEffect[_0x12f45f(0x144)]['updateFlipX']=function(){const _0x4f203c=_0x12f45f,_0x318730=this['effectData'](),_0x3064d0=_0x318730['FlipSpeedX']??0x0;if(_0x3064d0===0x0)return;const _0x21ee15=_0x318730[_0x4f203c(0xda)]??0x0,_0x3a0237=Graphics[_0x4f203c(0x9f)]+_0x21ee15*this[_0x4f203c(0x102)];this[_0x4f203c(0xd9)]=Math['cos'](_0x3a0237*_0x3064d0);},Sprite_TextEffect['prototype'][_0x12f45f(0xe0)]=function(){const _0x1d4448=_0x12f45f,_0x5e4267=this[_0x1d4448(0xc2)](),_0x24da6d=_0x5e4267[_0x1d4448(0x84)]??0x0;if(_0x24da6d===0x0)return;const _0x27e8e4=_0x5e4267[_0x1d4448(0x137)]??0x0,_0x37b717=Graphics['frameCount']+_0x27e8e4*this[_0x1d4448(0x102)];this[_0x1d4448(0x11a)]=Math[_0x1d4448(0x15c)](_0x37b717*_0x24da6d);},Sprite_TextEffect['prototype'][_0x12f45f(0xa7)]=function(){const _0x3c2f53=_0x12f45f,_0x235224=this[_0x3c2f53(0xc2)](),_0x4c8d85=(_0x235224[_0x3c2f53(0xd4)]??0x0)/0x2;if(_0x4c8d85===0x0)return;const _0x32f15a=_0x235224[_0x3c2f53(0x9a)]??0x0;if(_0x32f15a===0x0)return;const _0x7121f2=_0x235224['PulseOffsetX']??0x0,_0x4d95fc=Graphics['frameCount']+_0x7121f2*this[_0x3c2f53(0x102)];this[_0x3c2f53(0x103)]+=Math['cos'](_0x4d95fc*_0x32f15a)*_0x4c8d85;},Sprite_TextEffect['prototype'][_0x12f45f(0x15b)]=function(){const _0x1d6acf=_0x12f45f,_0x233693=this[_0x1d6acf(0xc2)](),_0x500a92=(_0x233693[_0x1d6acf(0x91)]??0x0)/0x2;if(_0x500a92===0x0)return;const _0x48ded7=_0x233693['PulseSpeedY']??0x0;if(_0x48ded7===0x0)return;const _0x1e48cd=_0x233693['PulseOffsetY']??0x0,_0x18abf3=Graphics[_0x1d6acf(0x9f)]+_0x1e48cd*this['_offset'];this[_0x1d6acf(0xe9)]+=Math['cos'](_0x18abf3*_0x48ded7)*_0x500a92;},Sprite_TextEffect['prototype'][_0x12f45f(0x82)]=function(){const _0x9219a7=_0x12f45f;let _0x620a51=this['_baseScale'];_0x620a51*=this['_flipScaleX'],_0x620a51*=this['_pulseScaleX'];let _0x1c71bc=this[_0x9219a7(0xe6)];_0x1c71bc*=this[_0x9219a7(0x11a)],_0x1c71bc*=this['_pulseScaleY'];if(this[_0x9219a7(0x132)]['x']!==_0x620a51)this[_0x9219a7(0x132)]['x']=_0x620a51;if(this[_0x9219a7(0x132)]['y']!==_0x1c71bc)this['scale']['y']=_0x1c71bc;},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xb3)]=function(){const _0x4fbb68=_0x12f45f;this['setupOpacityModifiers'](),this['updateOpacityPatternEffect'](),this[_0x4fbb68(0xbf)](),this[_0x4fbb68(0xaf)]();},Sprite_TextEffect[_0x12f45f(0x144)]['setupOpacityModifiers']=function(){const _0x51bd01=_0x12f45f,_0xb39f4c=this[_0x51bd01(0xc2)]();this['_targetOpacity']=_0xb39f4c['InitialOpacity']??0xff;},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x120)]=function(){const _0xf29d6e=_0x12f45f,_0x302e1a=this[_0xf29d6e(0xc2)](),_0xe04822=(_0x302e1a[_0xf29d6e(0x13a)]??'')[_0xf29d6e(0xb1)]()[_0xf29d6e(0x114)]();if(_0xe04822==='')return;if(_0xe04822===undefined)return;const _0x5990dc=Math[_0xf29d6e(0x8a)](_0x302e1a[_0xf29d6e(0x99)]??0x1,0x1),_0x35e22e=_0x302e1a[_0xf29d6e(0xdf)]??0x0,_0x1cfea4=Graphics[_0xf29d6e(0x9f)];this[_0xf29d6e(0x11b)]=this[_0xf29d6e(0x11b)]??_0x35e22e*this['_offset'];while(this[_0xf29d6e(0x11b)]>=_0xe04822['length'])this[_0xf29d6e(0x11b)]-=_0xe04822[_0xf29d6e(0x106)];while(this[_0xf29d6e(0x11b)]<0x0)this['_patternIndex']+=_0xe04822[_0xf29d6e(0x106)];const _0x83c487=(_0xe04822[_0xf29d6e(0x112)](this[_0xf29d6e(0x11b)])-0x61)[_0xf29d6e(0x101)](0x0,0x19),_0x48d5d5=_0x83c487/0x19;this['_targetOpacity']*=_0x48d5d5;if(_0x1cfea4%_0x5990dc===0x0){this['_patternIndex']++;while(this['_patternIndex']>=_0xe04822[_0xf29d6e(0x106)])this['_patternIndex']-=_0xe04822['length'];}},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xbf)]=function(){const _0x24e4f9=_0x12f45f,_0x4ab996=this[_0x24e4f9(0xc2)](),_0x28ced7=(_0x4ab996['glowRate']??0x0)/0x2*0xff;if(_0x28ced7===0x0)return;const _0x7e2afb=_0x4ab996[_0x24e4f9(0x12a)]??0x0;if(_0x7e2afb===0x0)return;const _0x151513=_0x4ab996['glowOffset']??0x0,_0x539f6c=Graphics[_0x24e4f9(0x9f)]+_0x151513*this['_offset'];this[_0x24e4f9(0xdb)]+=Math['round'](Math['cos'](_0x539f6c*_0x7e2afb)*_0x28ced7-_0x28ced7);},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xaf)]=function(){this['opacity']=this['_targetOpacity'];},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x146)]=function(){const _0x4b6b25=_0x12f45f;this[_0x4b6b25(0x139)](),this[_0x4b6b25(0x14b)](),this[_0x4b6b25(0xc0)](),this['applyColorModifiers']();},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x139)]=function(){},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x14b)]=function(){const _0xc4bdef=_0x12f45f,_0x5a4833=this['effectData'](),_0x1f34ae=_0x5a4833[_0xc4bdef(0x9c)]??0x0;if(_0x1f34ae===0x0)return;if(this['_hueValue']===undefined){const _0x39fbb5=_0x5a4833['InitialHueOffset']??0x0,_0x56fbe7=_0x39fbb5*this[_0xc4bdef(0x102)];this[_0xc4bdef(0x10e)]=_0x56fbe7;}this[_0xc4bdef(0x10e)]+=_0x1f34ae;while(this[_0xc4bdef(0x10e)]>0x168)this[_0xc4bdef(0x10e)]-=0x168;while(this[_0xc4bdef(0x10e)]<0x168)this[_0xc4bdef(0x10e)]+=0x168;},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0xc0)]=function(){const _0x5338d5=_0x12f45f,_0x5c5bd1=this['effectData'](),_0x2de978=_0x5c5bd1[_0x5338d5(0x147)]??[];if(_0x2de978[_0x5338d5(0x106)]<=0x0)return;if(this[_0x5338d5(0x7d)]===undefined){const _0x4c2d46=_0x5c5bd1[_0x5338d5(0xfb)]??0x0,_0x20a15e=Math['floor'](Graphics[_0x5338d5(0x9f)]/Math[_0x5338d5(0x8a)](_0x5c5bd1[_0x5338d5(0xf9)]??0x1,0x1));this[_0x5338d5(0x8b)]=_0x4c2d46*this[_0x5338d5(0x102)]+_0x20a15e;while(this['_toneIndex']>=_0x2de978[_0x5338d5(0x106)])this[_0x5338d5(0x8b)]-=_0x2de978[_0x5338d5(0x106)];while(this[_0x5338d5(0x8b)]<0x0)this[_0x5338d5(0x8b)]+=_0x2de978[_0x5338d5(0x106)];this[_0x5338d5(0x7d)]=_0x2de978[this[_0x5338d5(0x8b)]]['clone']();}if(_0x2de978[_0x5338d5(0x106)]<=0x1)return;const _0x5f14ef=Math[_0x5338d5(0x8a)](_0x5c5bd1[_0x5338d5(0xf9)]??0x1,0x1),_0xcbb21c=Graphics[_0x5338d5(0x9f)];if(_0xcbb21c%_0x5f14ef===0x0){this[_0x5338d5(0x8b)]++;while(this['_toneIndex']>=_0x2de978[_0x5338d5(0x106)])this[_0x5338d5(0x8b)]-=_0x2de978[_0x5338d5(0x106)];this[_0x5338d5(0x7d)]=_0x2de978[this[_0x5338d5(0x8b)]]['clone']();}else{if(_0x5c5bd1['SmoothToneChange']){const _0x4e86b8=_0x5f14ef-_0xcbb21c%_0x5f14ef,_0x2a7a74=(this[_0x5338d5(0x8b)]+0x1)%_0x2de978[_0x5338d5(0x106)],_0x7e0e83=_0x2de978[_0x2a7a74];if(!_0x7e0e83)return;for(let _0x4fc5d0=0x0;_0x4fc5d0<0x4;_0x4fc5d0++){this[_0x5338d5(0x7d)][_0x4fc5d0]=(this[_0x5338d5(0x7d)][_0x4fc5d0]*(_0x4e86b8-0x1)+_0x7e0e83[_0x4fc5d0])/_0x4e86b8;}}}},Sprite_TextEffect[_0x12f45f(0x144)][_0x12f45f(0x163)]=function(){const _0x7e4c10=_0x12f45f;if(this[_0x7e4c10(0x10e)]!==undefined)this['setHue'](this[_0x7e4c10(0x10e)]);if(this['_currentTone']!==undefined)this[_0x7e4c10(0x11f)](this[_0x7e4c10(0x7d)]);},VisuMZ[_0x12f45f(0x15d)]['Window_Base_preConvertEscapeCharacters']=Window_Base[_0x12f45f(0x144)][_0x12f45f(0xd5)],Window_Base[_0x12f45f(0x144)][_0x12f45f(0xd5)]=function(_0xad7c73){const _0x11e85e=_0x12f45f;return _0xad7c73=this['convertTextEffectEscapeCodes'](_0xad7c73),VisuMZ[_0x11e85e(0x15d)]['Window_Base_preConvertEscapeCharacters'][_0x11e85e(0xdc)](this,_0xad7c73);},Window_Base[_0x12f45f(0x144)][_0x12f45f(0x145)]=function(_0x40d56c){const _0x1a4e5d=_0x12f45f;return _0x40d56c=_0x40d56c['replace'](/\x1bEFFECT<(.*?)>/gi,''),_0x40d56c=_0x40d56c[_0x1a4e5d(0xb5)](/<CLEAR EFFECT(?:|S)>/gi,''),_0x40d56c;},VisuMZ[_0x12f45f(0x15d)]['Window_Base_processDrawIcon']=Window_Base['prototype']['processDrawIcon'],Window_Base[_0x12f45f(0x144)]['processDrawIcon']=function(_0x59cd30,_0x39a144){const _0x5ab2e4=_0x12f45f;if(this['constructor']['name']===_0x5ab2e4(0xa9)&&this[_0x5ab2e4(0x8c)]&&_0x39a144['drawing']){this[_0x5ab2e4(0x88)](_0x59cd30,_0x39a144);return;}VisuMZ[_0x5ab2e4(0x15d)]['Window_Base_processDrawIcon']['call'](this,_0x59cd30,_0x39a144);},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0xec)]=Window_Message['prototype'][_0x12f45f(0x131)],Window_Message['prototype'][_0x12f45f(0x131)]=function(){const _0x605032=_0x12f45f;VisuMZ[_0x605032(0x15d)][_0x605032(0xec)][_0x605032(0xdc)](this),this['_textEffect']='';},Window_Message[_0x12f45f(0x144)][_0x12f45f(0x123)]=function(_0x466bcd){const _0x33b25c=_0x12f45f;this[_0x33b25c(0x12d)]=_0x466bcd;},Window_Message['prototype']['convertTextEffectEscapeCodes']=function(_0x20df81){const _0xb6510c=_0x12f45f;return _0x20df81=_0x20df81[_0xb6510c(0xb5)](/<CLEAR EFFECT(?:|S)>/gi,_0xb6510c(0xab)),_0x20df81;},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0x13c)]=Window_Message[_0x12f45f(0x144)][_0x12f45f(0x117)],Window_Message[_0x12f45f(0x144)][_0x12f45f(0x117)]=function(_0x921ba6,_0x3b9b32){const _0xcdf754=_0x12f45f;if(_0x921ba6===_0xcdf754(0x13f)){let _0x42c070=this[_0xcdf754(0x138)](_0x3b9b32);if(_0x3b9b32['drawing']&&ConfigManager[_0xcdf754(0x13d)]){_0x42c070=_0x42c070['replace'](/\x1bC\[(.*?)\]/gi,''),_0x42c070=_0x42c070[_0xcdf754(0xb5)](/\x1bPREVCOLOR\[(.*?)\]/gi,''),this[_0xcdf754(0x8c)]=_0x42c070['toLowerCase']()['trim']();if(this[_0xcdf754(0x8c)]===_0xcdf754(0x104))this[_0xcdf754(0x8c)]='';}}else _0x921ba6===_0xcdf754(0x107)?(this[_0xcdf754(0x15e)](_0x3b9b32),this[_0xcdf754(0x8c)]=''):VisuMZ[_0xcdf754(0x15d)][_0xcdf754(0x13c)]['call'](this,_0x921ba6,_0x3b9b32);},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0xcc)]=Window_Message[_0x12f45f(0x144)]['preFlushTextState'],Window_Message[_0x12f45f(0x144)][_0x12f45f(0x8d)]=function(_0x2b4319){const _0x1f899c=_0x12f45f;VisuMZ[_0x1f899c(0x15d)][_0x1f899c(0xcc)]['call'](this,_0x2b4319),this[_0x1f899c(0x8c)]!==''&&_0x2b4319[_0x1f899c(0x7b)]&&(this[_0x1f899c(0x155)](_0x2b4319),this[_0x1f899c(0xb7)]=!![],Imported['VisuMZ_3_MessageSounds']&&this[_0x1f899c(0x162)](_0x2b4319),_0x2b4319[_0x1f899c(0x7b)]=![]);},VisuMZ[_0x12f45f(0x15d)]['Window_Message_postFlushTextState']=Window_Message[_0x12f45f(0x144)]['postFlushTextState'],Window_Message['prototype'][_0x12f45f(0xf2)]=function(_0x176b5a){const _0x32e8ed=_0x12f45f;VisuMZ[_0x32e8ed(0x15d)][_0x32e8ed(0xad)][_0x32e8ed(0xdc)](this,_0x176b5a),this['_textEffectReturnState']!==undefined&&(_0x176b5a[_0x32e8ed(0x7b)]=!![],this[_0x32e8ed(0xb7)]=undefined,Imported[_0x32e8ed(0x93)]&&this['moveCustomMessageCursorPauseSign'](_0x176b5a));},Window_Message[_0x12f45f(0x144)][_0x12f45f(0x155)]=function(_0x42a3a0){const _0xca5a1b=_0x12f45f;if(!this[_0xca5a1b(0x12d)])return;const _0x14adca=_0x42a3a0['buffer']['split'](''),_0x369f27=JSON['parse'](JSON['stringify'](_0x42a3a0));for(const _0x1be8f1 of _0x14adca){_0x369f27[_0xca5a1b(0xff)]=_0x1be8f1;if(_0x1be8f1['trim']()!==''){const _0x9f51cc=this['_AniMsgTextEffectsContainer'][_0xca5a1b(0x133)][_0xca5a1b(0x106)],_0x580f67=new Sprite_TextEffect(this,_0x369f27,_0x9f51cc);this['_AniMsgTextEffectsContainer']['addChild'](_0x580f67);}const _0x46044d=this[_0xca5a1b(0x140)](_0x1be8f1);_0x369f27['x']+=_0x46044d;}},Window_Base[_0x12f45f(0x144)][_0x12f45f(0x88)]=function(_0x3e73b1,_0x1210de){const _0x546d1c=_0x12f45f,_0x2fef84=ImageManager[_0x546d1c(0xbb)]||0x20,_0x1414ad=JSON['parse'](JSON['stringify'](_0x1210de));_0x1414ad[_0x546d1c(0x14d)]=_0x3e73b1;const _0x554662=this[_0x546d1c(0x12d)][_0x546d1c(0x133)][_0x546d1c(0x106)],_0xdb069e=new Sprite_TextEffect(this,_0x1414ad,_0x554662);this['_AniMsgTextEffectsContainer'][_0x546d1c(0xae)](_0xdb069e),_0x1210de['x']+=_0x2fef84+0x4;},VisuMZ[_0x12f45f(0x15d)]['Window_Message_newPage']=Window_Message['prototype'][_0x12f45f(0x109)],Window_Message[_0x12f45f(0x144)][_0x12f45f(0x109)]=function(_0x4fcdd4){const _0xefc76=_0x12f45f;VisuMZ[_0xefc76(0x15d)]['Window_Message_newPage'][_0xefc76(0xdc)](this,_0x4fcdd4),this[_0xefc76(0x8c)]='',this['clearTextEffects']();},Window_Message[_0x12f45f(0x144)][_0x12f45f(0x149)]=function(){const _0x75bb5b=_0x12f45f;if(!this[_0x75bb5b(0x12d)])return;while(this[_0x75bb5b(0x12d)][_0x75bb5b(0x133)][_0x75bb5b(0x106)]>0x0){const _0xc19641=this[_0x75bb5b(0x12d)]['children'][0x0];this['_AniMsgTextEffectsContainer'][_0x75bb5b(0xbd)](_0xc19641),_0xc19641['_textState'][_0x75bb5b(0x14d)]===undefined&&_0xc19641[_0x75bb5b(0x12f)]();}},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0xbc)]=Window_Message[_0x12f45f(0x144)][_0x12f45f(0x95)],Window_Message[_0x12f45f(0x144)][_0x12f45f(0x95)]=function(){const _0x1388f9=_0x12f45f;VisuMZ[_0x1388f9(0x15d)]['Window_Message_open'][_0x1388f9(0xdc)](this),this[_0x1388f9(0x12d)]&&this['_AniMsgTextEffectsContainer'][_0x1388f9(0x127)]();},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0x161)]=Window_Message[_0x12f45f(0x144)][_0x12f45f(0xfd)],Window_Message[_0x12f45f(0x144)][_0x12f45f(0xfd)]=function(){const _0x73fd55=_0x12f45f;VisuMZ['AniMsgTextEffects'][_0x73fd55(0x161)]['call'](this),this[_0x73fd55(0x12d)]&&this['_AniMsgTextEffectsContainer'][_0x73fd55(0x122)]();},VisuMZ[_0x12f45f(0x15d)][_0x12f45f(0x81)]=Window_Options[_0x12f45f(0x144)][_0x12f45f(0x142)],Window_Options[_0x12f45f(0x144)][_0x12f45f(0x142)]=function(){const _0xb815a2=_0x12f45f;VisuMZ[_0xb815a2(0x15d)][_0xb815a2(0x81)]['call'](this),this[_0xb815a2(0xa8)]();},Window_Options[_0x12f45f(0x144)][_0x12f45f(0xa8)]=function(){const _0x423b8f=_0x12f45f;VisuMZ[_0x423b8f(0x15d)][_0x423b8f(0xc7)][_0x423b8f(0x115)]['AddOption']&&this['addTemplatetextEffectsCommand']();},Window_Options[_0x12f45f(0x144)][_0x12f45f(0x11d)]=function(){const _0x4ac7b5=_0x12f45f,_0x13e51a=TextManager['textEffects'],_0x327c10=_0x4ac7b5(0x13d);this[_0x4ac7b5(0x85)](_0x13e51a,_0x327c10);};