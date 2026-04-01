/*:
 * @target MZ
 * @plugindesc Simon Says Minigame for RPG MAKER MZ. - Created By: Undermax Games | Maxii1996
 * @author Undermax | Maxii1996
 * @url https://undermax.itch.io/
 * @help
 * 
 *   _______________________________________________________________
 * 
 * 
 *          Plugin Version:          1.0.1          
 *          Developed by:            Undermax | Maxii1996
 *          Web:                     https://undermax.itch.io
 * 
 *    _______________________________________________________________
 *                 
 *         _____ _                        _____                 
 *        / ____(_)                      / ____|                
 *       | (___  _ _ __ ___   ___  _ __ | (___   __ _ _   _ ___ 
 *        \___ \| | '_ ` _ \ / _ \| '_ \ \___ \ / _` | | | / __|
 *        ____) | | | | | | | (_) | | | |____) | (_| | |_| \__ \
 *       |_____/|_|_| |_| |_|\___/|_| |_|_____/ \__,_|\__, |___/
 *                  _       _                          __/ |    
 *                 (_)     (_)                        |___/     
 *        _ __ ___  _ _ __  _  __ _  __ _ _ __ ___   ___        
 *       | '_ ` _ \| | '_ \| |/ _` |/ _` | '_ ` _ \ / _ \       
 *       | | | | | | | | | | | (_| | (_| | | | | | |  __/       
 *       |_| |_| |_|_|_| |_|_|\__, |\__,_|_| |_| |_|\___|       
 *                             __/ |                            
 *                            |___/                             
 *                                                                            
 *     ============================= CHANGE LOG =============================
 *
 *          (v1.0.1) Added the option to set a background in the scene. 
 *          (v1.0.0) INITIAL RELEASE 
 * 
 * 
 *     ============================ INTRODUCTION ============================ 
 *
 *    Plugin Description:
 *    
 *    This plugin allows you to simulate the well-known
 *    game of SIMON SAYS in your game!
 *    
 *    In case you are not familiar with this game, let me
 *    explain:
 *    
 *    You will see 4 squares on the screen, each with a
 *    different color. They will start to flash in a
 *    random order. Your objective is to memorize and
 *    repeat the sequence in the correct order.
 *    
 *    If you win, you will activate a switch of your
 *    choice in the game. If you lose, another switch will
 *    be activated. One for victory and one for loss.
 *    
 *    
 *    In the plugin parameters, you can adjust global
 *    aspects of the plugin. The mini-game is started with
 *    the plugin command.
 *    
 *    
 *    - Number of Rounds: (Dynamic)
 *    
 *    Sets the number of rounds for the game. You can use a
 *    fixed value or a variable. Example: variable(x).
 *    
 *    
 *    
 *    - Minigame Speed: (Dynamic)
 *    
 *    Sets the speed of the game. Higher numbers make the
 *    game faster. This can also be a fixed value or a
 *    variable. Example: var(x).
 *    
 *     
 *    - Custom Colors:
 *    
 *    Sets custom colors for the buttons. Define 4 colors
 *    in HEX format. Example: ["#FF6347", "#32CD32",
 *    "#1E90FF", "#FFD700"].
 *    
 *    
 *    - Win Switch ID:
 *    
 *    The switch ID to turn on when the player wins.
 *    
 *    
 *    - Lose Switch ID:
 *    
 *    The switch ID to turn on when the player loses.
 *    
 *      
 *    - Sequence Difficulty:
 *    
 *    Sets the difficulty level for sequence repetition.
 *    Options: Completely Random, Limit repetitions to 1,
 *    Limit repetitions to 2, No repetitions.
 *    
 *      
 *    - Sounds:
 *    
 *    Set the sounds for each button: top left, top right,
 *    bottom left, bottom right.
 *    

 *    - Time Per Round: (Dynamic)
 *    
 *    Sets the base time per round in seconds. Can be a
 *    fixed value or a variable. Example: v(x).
 *     
 *    
 *   -- Dynamic Fields --
 *    
 *    Some fields are dynamic, meaning you can use fixed
 *    values or game variables. To use variables, enter:
 *    variable(x) | var(x) | v(x). Ensure X is a positive
 *    integer ID.
 *    
 
 *    Sequence Difficulty:
 *    
 *    This parameter lets you control sequence repetition
 *    to increase game difficulty. Select the option that
 *    fits your need: random, limit1, limit2, noRepeat.
 *    

 *    For further questions, watch the video attached on
 *    the Itchio page of Undermax.
 *
 * 
 *    ========================= END OF DOCUMENTATION ======================== 
 * 
 * 
 * @command startSimonSays
 * @text Start Simon Says
 * @desc Starts the Simon Says minigame.
 * 
 * @arg rounds
 * @text Number of Rounds
 * @type text
 * @min 1
 * @max 20
 * @default 5
 * @desc The number of rounds for the game.
 * 
 * @arg speed
 * @text Minigame speed
 * @type text
 * @min 1
 * @max 10
 * @default 3
 * @desc The speed of the game (higher number is faster).
 * 
 * @arg colors
 * @text Custom Colors
 * @type string[]
 * @default ["#FF6347", "#32CD32", "#1E90FF", "#FFD700"]
 * @desc Custom colors for the buttons (Please set 4 Colors, one per line. HEX Color). Choose the colors for the square buttons.
 * 
 * @arg winSwitchId
 * @text Win Switch ID
 * @type switch
 * @default 0
 * @desc The switch ID to turn on when the player wins.
 * 
 * @arg loseSwitchId
 * @type switch
 * @text Lose Switch ID
 * @default 0
 * @desc The switch ID to turn on when the player loses.
 * 
 * @arg sequenceDifficulty
 * @text Sequence Difficulty
 * @type select
 * @option Completely Random
 * @value random
 * @option Limit repetitions to 1
 * @value limit1
 * @option Limit repetitions to 2
 * @value limit2
 * @option No repetitions
 * @value noRepeat
 * @default random
 * @desc Difficulty level for the sequence repetition.
 * 
 * @arg soundTopLeft
 * @text Sound Top Left
 * @type struct<Sound>
 * @desc The sound for the top left button.
 * 
 * @arg soundTopRight
 * @text Sound Top Right
 * @type struct<Sound>
 * @desc The sound for the top right button.
 * 
 * @arg soundBottomLeft
 * @text Sound Bottom Left
 * @type struct<Sound>
 * @desc The sound for the bottom left button.
 * 
 * @arg soundBottomRight
 * @text Sound Bottom Right
 * @type struct<Sound>
 * @desc The sound for the bottom right button.
 * 
 * @arg backgroundImage
 * @text Background Image
 * @type file
 * @dir img/pictures
 * @default
 * @desc The image to use as the background for the Simon Says minigame.
 * 
 * @arg timePerRound
 * @type text
 * @min 0
 * @default 2
 * @text Time Per Round
 * @desc Base time per round in seconds for the timer.
 * 
 * @param playerTurnMessage
 * @text Player Turn Message
 * @desc Message displayed during the player's turn.
 * @default Repeat the sequence
 *
 * @param aiTurnMessage
 * @text AI Turn Message
 * @desc Message displayed during the AI's turn.
 * @default Watch and remember the sequence
 *
 * @param messageFontSize
 * @text Message Font Size
 * @desc Font size for the messages.
 * @type number
 * @default 28
 *
 * @param messageColor
 * @text Message Color
 * @desc Color of the messages in hexadecimal format.
 * @default #FFFFFF
 *
 * @param messageOffsetX
 * @text Message Offset X
 * @desc Horizontal offset of the message from the center of the screen.
 * @type number
 * @default 0
 *
 * @param messageOffsetY
 * @text Message Offset Y
 * @desc Vertical offset of the message from the center of the screen.
 * @type number
 * @default 0
 * 
 * @param messageWindowStyle
 * @text Message Window Style
 * @desc Window style (0: Window, 1: Dim, 2: Transparent).
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @default 0
 *
 * @param buttonBorderColor
 * @text Button Border Color
 * @desc Color of the border for the Simon Says buttons.
 * @default #FFFFFF
 * 
 * @param buttonSize
 * @text Button Size
 * @desc Size of each Simon Says button.
 * @type number
 * @default 100
 * 
 * @param buttonSpacing
 * @text Button Spacing
 * @desc Spacing between each Simon Says button.
 * @type number
 * @default 20
 * 
 * @param floatSpeed
 * @text Float Speed
 * @desc Speed of the button floating animation.
 * @default 0.009
 *
 * @param floatAmount
 * @text Float Amount
 * @desc Amount of floating movement for the buttons.
 * @default 1.4
 * 
 * @param cursorSound
 * @text Cursor Sound
 * @desc The sound to play when moving the selector. Default is the database Cursor sound.
 * @type file
 * @dir audio/se/
 * @default Cursor1
 * 
 * @param cursorSoundVolume
 * @text Cursor Sound Volume
 * @desc Volume of the cursor sound.
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * 
 * @param cursorSoundPitch
 * @text Cursor Sound Pitch
 * @desc Pitch of the cursor sound.
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * 
 * @param roundIndicatorCompletedColor
 * @text Completed Round Color
 * @desc Color of the completed round indicators.
 * @default #35fc92
 * @type string
 * 
 * @param roundIndicatorPendingColor
 * @text Pending Round Color
 * @desc Color of the pending round indicators.
 * @default #1c1c1c44
 * @type string
 * 
 * @param roundIndicatorBorderColor
 * @text Round Indicator Border Color
 * @desc Border color of the round indicators.
 * @default #03417344
 * @type string
 * 
 * @param roundIndicatorSize
 * @text Round Indicator Size
 * @desc Size of the round indicators.
 * @default 20
 * @type number
 * 
 * @param roundIndicatorSpacing
 * @text Round Indicator Spacing
 * @desc Spacing between the round indicators.
 * @default 10
 * @type number
 * 
 * @param roundIndicatorOffsetY
 * @text Round Indicator Offset Y
 * @desc Y offset of the round indicators.
 * @default 520
 * @type number
 * 
 * @param soundTopLeft
 * @text Sound Top Left
 * @desc Sound played for the top left button.
 * @type struct<Sound>
 * @default {"name":"Cursor4","volume":"30","pitch":"150","pan":"0"}
 * 
 * @param soundTopRight
 * @text Sound Top Right
 * @desc Sound played for the top right button.
 * @type struct<Sound>
 * @default {"name":"Cursor4","volume":"30","pitch":"75","pan":"0"}
 * 
 * @param soundBottomLeft
 * @text Sound Bottom Left
 * @desc Sound played for the bottom left button.
 * @type struct<Sound>
 * @default {"name":"Cursor4","volume":"30","pitch":"100","pan":"0"}
 * 
 * @param soundBottomRight
 * @text Sound Bottom Right
 * @desc Sound played for the bottom right button.
 * @type struct<Sound>
 * @default {"name":"Cursor4","volume":"30","pitch":"50","pan":"0"}
 * 
 * @param progressBarBackColor
 * @text Progress Bar Back Color
 * @desc Background color of the progress bar.
 * @default #000000
 * 
 * @param progressBarForeColor
 * @text Progress Bar Fore Color
 * @desc Foreground color of the progress bar.
 * @default #00FF00
 * 
 * @param progressBarBorderColor
 * @text Progress Bar Border Color
 * @desc Border color of the progress bar.
 * @default #FFFFFF
 * 
 * @param progressBarBorderSize
 * @text Progress Bar Border Size
 * @desc Border size of the progress bar.
 * @type number
 * @default 2
 * 
 * @param progressBarWidth
 * @text Progress Bar Width
 * @desc Width of the progress bar.
 * @type number
 * @default 480
 * 
 * @param progressBarHeight
 * @text Progress Bar Height
 * @desc Height of the progress bar.
 * @type number
 * @default 15
 * 
 * @param progressBarOffsetX
 * @text Progress Bar Offset X
 * @desc Horizontal offset for the progress bar.
 * @type number
 * @default 0
 * 
 * @param progressBarOffsetY
 * @text Progress Bar Offset Y
 * @desc Vertical offset for the progress bar.
 * @type number
 * @default -80
 * 
 */

/*~struct~Sound:
 * @param name
 * @text Name
 * @type file
 * @dir audio/se
 * @desc The name of the sound effect file.
 * 
 * @param volume
 * @text Volume
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * @desc The volume of the sound effect.
 * 
 * @param pitch
 * @text Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * @desc The pitch of the sound effect.
 * 
 * @param pan
 * @text Pan
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * @desc The pan of the sound effect.
 */


(() => {
    const pluginName = "SimonSays";
    const parameters = PluginManager.parameters(pluginName);
    const playerTurnMessage = String(parameters['playerTurnMessage'] || 'Repeat the sequence');
    const aiTurnMessage = String(parameters['aiTurnMessage'] || 'Watch and remember the sequence');
    const messageFontSize = Number(parameters['messageFontSize'] || 28);
    const messageColor = String(parameters['messageColor'] || '#FFFFFF');
    const messageOffsetX = Number(parameters['messageOffsetX'] || 0);
    const messageOffsetY = Number(parameters['messageOffsetY'] || 0);
    const messageWindowStyle = Number(parameters['messageWindowStyle'] || 0);
    const buttonColors = JSON.parse(parameters['buttonColors'] || '["#FF6347", "#32CD32", "#1E90FF", "#FFD700"]');
    const validatedColors = validateButtonColors(buttonColors);
    const buttonBorderColor = String(parameters['buttonBorderColor'] || '#FFFFFF');
    const buttonSize = Number(parameters['buttonSize'] || 100);
    const buttonSpacing = Number(parameters['buttonSpacing'] || 20);
    const roundIndicatorCompletedColor = String(parameters['roundIndicatorCompletedColor'] || '#FF6347');
    const roundIndicatorPendingColor = String(parameters['roundIndicatorPendingColor'] || '#FFFFFF');
    const roundIndicatorBorderColor = String(parameters['roundIndicatorBorderColor'] || '#000000');
    const roundIndicatorSize = Number(parameters['roundIndicatorSize'] || 20);
    const roundIndicatorSpacing = Number(parameters['roundIndicatorSpacing'] || 10);
    const roundIndicatorOffsetY = Number(parameters['roundIndicatorOffsetY'] || 50);
    const soundTopLeft = JSON.parse(parameters['soundTopLeft'] || '{}');
    const soundTopRight = JSON.parse(parameters['soundTopRight'] || '{}');
    const soundBottomLeft = JSON.parse(parameters['soundBottomLeft'] || '{}');
    const soundBottomRight = JSON.parse(parameters['soundBottomRight'] || '{}');
    const timePerRound = Number(parameters['timePerRound'] || 2);
    const progressBarBackColor = String(parameters['progressBarBackColor'] || '#000000');
    const progressBarForeColor = String(parameters['progressBarForeColor'] || '#00FF00');
    const progressBarBorderColor = String(parameters['progressBarBorderColor'] || '#FFFFFF');
    const progressBarBorderSize = Number(parameters['progressBarBorderSize'] || 2);
    const progressBarWidth = Number(parameters['progressBarWidth'] || Graphics.boxWidth * 0.6);
    const progressBarHeight = Number(parameters['progressBarHeight'] || 15);
    const progressBarOffsetX = Number(parameters['progressBarOffsetX'] || 0);
    const progressBarOffsetY = Number(parameters['progressBarOffsetY'] || -80);
    const floatSpeed = Number(parameters['floatSpeed'] || 0.009);
    const floatAmount = Number(parameters['floatAmount'] || 1.4);
    const cursorSound = String(parameters['cursorSound'] || 'Cursor1');
    const cursorSoundVolume = Number(parameters['cursorSoundVolume'] || 90);
    const cursorSoundPitch = Number(parameters['cursorSoundPitch'] || 100);

    function validateButtonColors(colors) {
        const defaultColors = ["#FF6347", "#32CD32", "#1E90FF", "#FFD700"];
        const result = [];

        for (let i = 0; i < 4; i++) {
            result[i] = colors[i] || "#000000";
        }
        return result.slice(0, 4);
    }

    PluginManager.registerCommand(pluginName, "startSimonSays", args => {
        const rounds = getVariableValue(args.rounds || 5);
        const speed = getVariableValue(args.speed || 3);
        const colors = JSON.parse(args.colors || JSON.stringify(buttonColors));
        const validatedColors = validateButtonColors(colors);
    
        const winSwitchId = Number(args.winSwitchId) || 0;
        const loseSwitchId = Number(args.loseSwitchId) || 0;
        const timePerRound = getVariableValue(args.timePerRound || 2);
        const difficulty = String(args.sequenceDifficulty || 'random');
        const sounds = [
            JSON.parse(args.soundTopLeft || JSON.stringify(soundTopLeft)),
            JSON.parse(args.soundTopRight || JSON.stringify(soundTopRight)),
            JSON.parse(args.soundBottomLeft || JSON.stringify(soundBottomLeft)),
            JSON.parse(args.soundBottomRight || JSON.stringify(soundBottomRight))
        ];
        const backgroundImage = String(args.backgroundImage || '');
    
        SceneManager._simonSaysArgs = [rounds, speed, validatedColors, winSwitchId, loseSwitchId, timePerRound, difficulty, sounds, backgroundImage];
        SceneManager.push(Scene_SimonSays);
    });
    

    PIXI.filters.SmoothFilter = function () {
        const blurFilter = new PIXI.filters.BlurFilter();
        blurFilter.blur = 1;
        return blurFilter;
    };

    function getVariableValue(expression) {
        if (typeof expression !== 'string') {
            expression = String(expression);
        }
        const variableMatch = expression.match(/variable\((\d+)\)|var\((\d+)\)|v\((\d+)\)/i);
        if (variableMatch) {
            const variableId = Number(variableMatch[1] || variableMatch[2] || variableMatch[3]);
            return $gameVariables.value(variableId);
        }
        return Number(expression);
    }

    class Scene_SimonSays extends Scene_Base {

        prepare(rounds, speed, colors, winSwitchId, loseSwitchId, timePerRound, difficulty, sounds) {
            this._rounds = getVariableValue(rounds);
            this._speed = getVariableValue(speed);
            this._colors = validateButtonColors(colors);
            this._winSwitchId = winSwitchId;
            this._loseSwitchId = loseSwitchId;
            this._timePerRound = getVariableValue(timePerRound);
            this._difficulty = difficulty;
            this._sounds = sounds || [];
        }

        playButtonSound(index) {
            if (this._sounds && this._sounds[index]) {
                const sound = this._sounds[index];
                if (sound && sound.name) {
                    AudioManager.playSe({
                        name: sound.name,
                        volume: sound.volume || 90,
                        pitch: sound.pitch || 100,
                        pan: sound.pan || 0
                    });
                }
            }
        }

        create() {
            super.create();
            this.createBackground();
            this.createButtons();
            this.createMessageWindow();
            this.createRoundIndicators();
            this.createProgressBar();
            this.initializeGame();
            this.startIntroAnimation();
        }

        createBackground() {
            const backgroundImage = SceneManager._simonSaysArgs[8]; 
    
            if (backgroundImage) {
                const bitmap = ImageManager.loadPicture(backgroundImage);
                this._backgroundSprite = new Sprite(bitmap);
    
                this._backgroundSprite.bitmap.addLoadListener(() => {
                    const widthRatio = (Graphics.boxWidth * 1.02) / this._backgroundSprite.bitmap.width;
                    const heightRatio = Graphics.boxHeight / this._backgroundSprite.bitmap.height;
                    const scale = Math.max(widthRatio, heightRatio);
    
                    this._backgroundSprite.scale.x = scale;
                    this._backgroundSprite.scale.y = scale;
    
                    this._backgroundSprite.x = (Graphics.boxWidth - this._backgroundSprite.bitmap.width * scale) / 2;
                    this._backgroundSprite.y = (Graphics.boxHeight - this._backgroundSprite.bitmap.height * scale) / 2;
                });
            } else {
                this._backgroundSprite = new Sprite();
                this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
            }
            
            this.addChild(this._backgroundSprite);
        }
    
        createRoundIndicators() {
            this._roundIndicators = new Sprite();
            this._roundIndicators.y = messageOffsetY + roundIndicatorOffsetY;
            this.addChild(this._roundIndicators);
            this.updateRoundIndicators();
        }

        createProgressBar() {
            if (this._timePerRound === 0) {
                this._progressBarContainer = null;
                return;
            }

            const barWidth = progressBarWidth;
            const barHeight = progressBarHeight;
            const barX = (Graphics.boxWidth - barWidth) / 2 + progressBarOffsetX;
            const barY = Graphics.boxHeight + progressBarOffsetY;
            this._progressBarContainer = new PIXI.Container();
            this._progressBarBackground = new PIXI.Graphics();
            this._progressBarForeground = new PIXI.Graphics();
            this._progressBarBackground.beginFill(PIXI.utils.string2hex(progressBarBackColor));
            this._progressBarBackground.lineStyle(progressBarBorderSize, PIXI.utils.string2hex(progressBarBorderColor));
            this._progressBarBackground.drawRect(0, 0, barWidth, barHeight);
            this._progressBarBackground.endFill();
            this._progressBarForeground.beginFill(PIXI.utils.string2hex(progressBarForeColor));
            this._progressBarForeground.drawRect(0, 0, barWidth, barHeight);
            this._progressBarForeground.endFill();
            this._progressBarContainer.addChild(this._progressBarBackground);
            this._progressBarContainer.addChild(this._progressBarForeground);
            this._progressBarContainer.x = barX;
            this._progressBarContainer.y = barY;
            this._progressBarContainer.visible = false;
            this.addChild(this._progressBarContainer);
        }

        createButtons() {
            this._buttons = [];
            const colors = SceneManager._simonSaysArgs[2];
            this._initialColors = [...colors];
            const positions = this.calculateButtonPositions();

            for (let i = 0; i < 4; i++) {
                const button = new PIXI.Graphics();
                button._fillColor = PIXI.utils.string2hex(colors[i]);
                button.beginFill(button._fillColor);
                button.lineStyle(4, PIXI.utils.string2hex(buttonBorderColor));
                button.drawRoundedRect(0, 0, positions.size, positions.size, 20);
                button.endFill();
                button.x = positions.coords[i].x;
                button.y = positions.coords[i].y;
                button._startX = button.x;
                button._startY = button.y;
                button.interactive = true;
                button.buttonMode = true;
                button.alpha = 0.85;
                button.filters = [new PIXI.filters.SmoothFilter()];
                this.addChild(button);
                this._buttons.push(button);
                this.animateFloating(button);
            }

            this._selectedIndex = 0;
            this.updateButtonSelection();
        }

        createMessageWindow() {
            const windowWidth = Graphics.boxWidth - 480;
            const windowHeight = 100;
            const windowX = 240;
            const windowY = messageOffsetY;

            this._messageWindow = new Window_Base(
                new Rectangle(windowX, windowY, windowWidth, windowHeight)
            );

            this._messageWindow.contents.fontSize = messageFontSize;
            this._messageWindow.contents.textColor = messageColor;

            switch (messageWindowStyle) {
                case 1:
                    this._messageWindow.setBackgroundType(1);
                    break;
                case 2:
                    this._messageWindow.setBackgroundType(2);
                    break;
                default:
                    this._messageWindow.setBackgroundType(0);
                    break;
            }

            this.addChild(this._messageWindow);
            this.updateMessage(aiTurnMessage);
        }

        updateMessage(text) {
            this._messageWindow.contents.clear();
            const textHeight = this._messageWindow.contents.fontSize;
            const y = (this._messageWindow.height - textHeight) / 2 - 12;
            this._messageWindow.drawText(text, 0, y, this._messageWindow.contentsWidth(), 'center');
        }

        updateRoundIndicators() {
            this._roundIndicators.removeChildren();
            const totalRounds = this._rounds;
            const currentRound = this._currentRound;
            const indicatorSize = roundIndicatorSize;
            const spacing = roundIndicatorSpacing;
            const totalWidth = (indicatorSize + spacing) * totalRounds - spacing;
            const startX = (Graphics.boxWidth - totalWidth) / 2;

            for (let i = 0; i < totalRounds; i++) {
                const circle = new PIXI.Graphics();
                circle.beginFill(i < currentRound ? PIXI.utils.string2hex(roundIndicatorCompletedColor) : PIXI.utils.string2hex(roundIndicatorPendingColor));
                circle.lineStyle(2, PIXI.utils.string2hex(roundIndicatorBorderColor));
                circle.drawCircle(0, 0, indicatorSize / 2);
                circle.endFill();
                circle.x = startX + i * (indicatorSize + spacing);
                circle.y = 0;
                this._roundIndicators.addChild(circle);
            }
        }

        updateProgressBar() {
            if (this._timePerRound === 0) return;

            const totalRoundTime = this._timePerRound * this._currentRound;
            const elapsed = (performance.now() - this._turnStartTime) / 1000;
            const remaining = totalRoundTime - elapsed;

            if (remaining <= 0) {
                this._progressBarContainer.visible = false;
                if (this._loseSwitchId > 0) {
                    $gameSwitches.setValue(this._loseSwitchId, true);
                }
                this.endGame(false);
                return;
            }

            const progress = remaining / totalRoundTime;
            this._progressBarForeground.width = progressBarWidth * progress;
        }

        animateFloating(button) {
            let angle = Math.random() * Math.PI * 2;

            const float = () => {
                if (!button._floating || !button.parent) return;
                angle += floatSpeed;
                button.x = button._startX + Math.cos(angle) * floatAmount;
                button.y = button._startY + Math.sin(angle) * floatAmount;
                button._animationFrame = requestAnimationFrame(float);
            };

            button._floating = true;
            float();
        }

        stopFloating(button) {
            button._floating = false;
            if (button._animationFrame) {
                cancelAnimationFrame(button._animationFrame);
                button._animationFrame = null;
            }
        }

        resetProgressBar() {
            const barWidth = Graphics.boxWidth * 0.8;
            this._progressBarForeground.width = barWidth;
        }

        calculateButtonPositions() {
            const width = Graphics.boxWidth;
            const height = Graphics.boxHeight;
            const size = buttonSize;
            const spacing = buttonSpacing;
            const offsetX = (width - (size + spacing) * 2) / 2;
            const offsetY = (height - (size + spacing) * 2) / 2;

            return {
                size: size,
                coords: [
                    { x: offsetX, y: offsetY },
                    { x: offsetX + size + spacing, y: offsetY },
                    { x: offsetX, y: offsetY + size + spacing },
                    { x: offsetX + size + spacing, y: offsetY + size + spacing }
                ]
            };
        }

        initializeGame() {
            this._sequence = [];
            this._playerInput = [];
            this._currentRound = 0;
            const [rounds, speed, colors, winSwitchId, loseSwitchId, timePerRound, difficulty, sounds] = SceneManager._simonSaysArgs;
            this._rounds = rounds;
            this._speed = speed;
            this._colors = colors;
            this._winSwitchId = winSwitchId;
            this._loseSwitchId = loseSwitchId;
            this._timePerRound = getVariableValue(timePerRound);
            this._difficulty = difficulty;
            this._sounds = sounds || [];
            this._isPlayerTurn = false;
            this._isAnimating = false;
            this._isGameEnded = false;
            this._isGameOverAnimationStarted = false;
            this._isOutroAnimationStarted = false;

            if (this._winSwitchId > 0) {
                $gameSwitches.setValue(this._winSwitchId, false);
            }
            if (this._loseSwitchId > 0) {
                $gameSwitches.setValue(this._loseSwitchId, false);
            }
        }

        startNewRound() {
            this._currentRound++;
            this.updateRoundIndicators();
            if (this._currentRound > this._rounds) {
                this.endGame(true);
                return;
            }
            this._playerInput = [];
            this._sequence.push(this.generateNextSequenceIndex());
            this.updateMessage(aiTurnMessage);
            this.playSequence();
        }

        generateNextSequenceIndex() {
            let newIndex;
            switch (this._difficulty) {
                case 'limit1':
                    do {
                        newIndex = Math.floor(Math.random() * 4);
                    } while (this._sequence.length > 1 &&
                    newIndex === this._sequence[this._sequence.length - 1] &&
                        newIndex === this._sequence[this._sequence.length - 2]);
                    break;
                case 'limit2':
                    do {
                        newIndex = Math.floor(Math.random() * 4);
                    } while (this._sequence.length > 2 &&
                    newIndex === this._sequence[this._sequence.length - 1] &&
                    newIndex === this._sequence[this._sequence.length - 2] &&
                        newIndex === this._sequence[this._sequence.length - 3]);
                    break;
                case 'noRepeat':
                    do {
                        newIndex = Math.floor(Math.random() * 4);
                    } while (this._sequence.length > 0 && newIndex === this._sequence[this._sequence.length - 1]);
                    break;
                case 'random':
                default:
                    newIndex = Math.floor(Math.random() * 4);
                    break;
            }
            return newIndex;
        }

        playSequence() {
            this._isPlayerTurn = false;
            this._isAnimating = true;
            this.updateButtonSelection();
            let index = 0;
            const interval = 1000 / Math.max(this._speed, 1);

            const playNext = () => {
                if (index >= this._sequence.length) {
                    this._isPlayerTurn = true;
                    this._isAnimating = false;
                    this._turnStartTime = performance.now();
                    if (this._timePerRound > 0) {
                        this.resetProgressBar();
                        this._progressBarContainer.visible = true;
                    }
                    this.updateMessage(playerTurnMessage);
                    this.updateButtonSelection();
                    return;
                }
                const buttonIndex = this._sequence[index];
                this.animateButton(buttonIndex, interval / 2, () => {
                    index++;
                    setTimeout(playNext, interval);
                });
            };
            playNext();
        }

        animateButton(index, duration = 200, callback) {
            const button = this._buttons[index];
            if (!button) return;

            const originalScale = { x: button.scale.x, y: button.scale.y };
            const targetScale = { x: originalScale.x * 1.2, y: originalScale.y * 1.2 };
            const originalFilters = button.filters;
            const colorMatrix = new PIXI.filters.ColorMatrixFilter();
            const smoothFilter = new PIXI.filters.SmoothFilter();
            button.filters = [colorMatrix, smoothFilter];
            let startTime = performance.now();
            let growing = true;
            this.playButtonSound(index);

            const animate = (currentTime) => {
                if (this._isGameEnded) return;

                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const currentScale = {
                    x: growing ? originalScale.x + (targetScale.x - originalScale.x) * progress
                        : targetScale.x - (targetScale.x - originalScale.x) * progress,
                    y: growing ? originalScale.y + (targetScale.y - originalScale.y) * progress
                        : targetScale.y - (targetScale.y - originalScale.y) * progress
                };

                button.scale.set(currentScale.x, currentScale.y);

                button.x = button._startX - (button.width * (currentScale.x - 1)) / 2;
                button.y = button._startY - (button.height * (currentScale.y - 1)) / 2;

                const brightness = growing ? 1.5 : 1;
                colorMatrix.brightness(brightness, false);

                if (progress === 1) {
                    if (growing) {
                        growing = false;
                        startTime = performance.now();
                    } else {
                        button.scale.set(originalScale.x, originalScale.y);
                        button.x = button._startX;
                        button.y = button._startY;
                        button.filters = originalFilters;
                        if (callback) callback();
                        return;
                    }
                }

                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        }

        updateButtonSelection() {
            const positions = this.calculateButtonPositions();
            for (let i = 0; i < this._buttons.length; i++) {
                const button = this._buttons[i];
                button.clear();
                button.lineStyle(i === this._selectedIndex && this._isPlayerTurn ? 4 : 0, PIXI.utils.string2hex(buttonBorderColor));
                button.beginFill(button._fillColor);
                button.drawRoundedRect(0, 0, positions.size, positions.size, 20);
                button.endFill();
                button.x = positions.coords[i].x;
                button.y = positions.coords[i].y;
            }
        }

        onButtonClick(index) {
            if (this._isGameEnded || !this._isPlayerTurn || this._isAnimating) return;
            this._playerInput.push(index);

            const button = this._buttons[index];
            this._isAnimating = true;
            this.animateButton(index, 200, () => {
                this._isAnimating = false;
                if (!this.checkInput()) {
                    this._isPlayerTurn = false;
                    this._progressBarContainer.visible = false;
                    if (this._loseSwitchId > 0) {
                        $gameSwitches.setValue(this._loseSwitchId, true);
                    }
                    this.updateButtonSelection();
                    this.animateLastRoundIndicator();
                    setTimeout(() => this.startGameOverAnimation(), 1500);
                    return;
                }
                if (this._playerInput.length === this._sequence.length) {
                    this._isPlayerTurn = false;
                    this._progressBarContainer.visible = false;
                    this.updateButtonSelection();
                    setTimeout(() => {
                        if (!this._isGameEnded) {
                            this.startNewRound();
                        }
                    }, 1000);
                }
            });
        }

        animateLastRoundIndicator() {
            const currentRound = this._currentRound - 1;
            const indicator = this._roundIndicators.children[currentRound];

            if (!indicator) return;

            let flashing = true;
            const flashColor = PIXI.utils.string2hex("#FF0000");

            const flash = () => {
                if (!flashing) return;

                indicator.tint = indicator.tint === flashColor ? 0xFFFFFF : flashColor;
                indicator.alpha = indicator.alpha === 1 ? 0.5 : 1;
                setTimeout(flash, 150);
            };

            setTimeout(() => {
                flashing = false;
                indicator.tint = flashColor;
                indicator.alpha = 1;
                setTimeout(() => {
                    this.hideRoundIndicators();
                    this.startGameOverAnimation();
                }, 300);
            }, 1500);

            flash();
        }

        hideRoundIndicators() {
            this._roundIndicators.children.forEach(indicator => {
                if (indicator._animationFrame) {
                    cancelAnimationFrame(indicator._animationFrame);
                    indicator._animationFrame = null;
                }
            });
            this._roundIndicators.visible = false;
        }


        checkInput() {
            for (let i = 0; i < this._playerInput.length; i++) {
                if (this._playerInput[i] !== this._sequence[i]) {
                    return false;
                }
            }
            return true;
        }

        endGame(success) {
            if (this._isGameEnded) return;
            this._isGameEnded = true;

            this._isPlayerTurn = false;
            if (this._progressBarContainer) {
                this._progressBarContainer.visible = false;
            }
            this._buttons.forEach(button => {
                this.stopFloating(button);
                button.scale.set(1, 1);
            });
            this.updateRoundIndicators();

            if (success) {
                if (this._winSwitchId > 0) {
                    $gameSwitches.setValue(this._winSwitchId, true);
                }
                this.startOutroAnimation(success);
            } else {
                if (this._loseSwitchId > 0) {
                    $gameSwitches.setValue(this._loseSwitchId, true);
                }
                this.startGameOverAnimation();
            }
        }

        startGameOverAnimation() {
            if (this._isGameOverAnimationStarted) return;
            this._isGameOverAnimationStarted = true;

            const buttonOrder = [0, 1, 3, 2];

            const changeButtonColor = (index) => {
                if (index >= buttonOrder.length) {
                    setTimeout(() => {
                        this.startOutroAnimation(false);
                    }, 500);
                    return;
                }

                const button = this._buttons[buttonOrder[index]];
                if (!button || !button.parent) return;

                button.clear();
                button._fillColor = PIXI.utils.string2hex("#FF0000");
                button.beginFill(button._fillColor);
                button.lineStyle(4, PIXI.utils.string2hex(buttonBorderColor));
                button.drawRoundedRect(0, 0, buttonSize, buttonSize, 20);
                button.endFill();

                const flash = () => {
                    if (!button.parent) return;
                    button.alpha = button.alpha === 1 ? 0.5 : 1;
                    if (index < buttonOrder.length) {
                        setTimeout(flash, 150);
                    }
                };

                setTimeout(() => {
                    flash();
                    setTimeout(() => {
                        changeButtonColor(index + 1);
                    }, 300);
                }, 300);
            };

            changeButtonColor(0);
        }

        startIntroAnimation() {
            this._buttons.forEach(button => {
                button.alpha = 0;
                button.scale.set(0.5, 0.5);
            });
            let index = 0;
            const interval = 200;
            const showNext = () => {
                if (index >= this._buttons.length) {
                    this.startColorChangeAnimation();
                    return;
                }
                const button = this._buttons[index];
                const originalScale = { x: button.scale.x, y: button.scale.y };
                const targetScale = { x: 1, y: 1 };
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / interval, 1);

                    button.alpha = 0.85 * progress;
                    button.scale.set(
                        originalScale.x + (targetScale.x - originalScale.x) * progress,
                        originalScale.y + (targetScale.y - originalScale.y) * progress
                    );

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        button.scale.set(targetScale.x, targetScale.y);
                        index++;
                        setTimeout(showNext, interval);
                    }
                };

                requestAnimationFrame(animate);
            };
            showNext();
        }

        startColorChangeAnimation() {
            const colorChangeInterval = 200;
            let colorChangeCount = 0;
            const maxColorChanges = 5;
            const changeColors = () => {
                if (colorChangeCount >= maxColorChanges) {
                    setTimeout(() => {
                        this.fixButtonColors();
                        setTimeout(() => {
                            this.startNewRound();
                        }, 1000);
                    }, 500);
                    return;
                }
                const newColors = this._initialColors.slice().sort(() => Math.random() - 0.5);
                this._buttons.forEach((button, index) => {
                    button._fillColor = PIXI.utils.string2hex(newColors[index]);
                    button.clear();
                    button.beginFill(button._fillColor);
                    button.lineStyle(4, PIXI.utils.string2hex(buttonBorderColor));
                    button.drawRoundedRect(0, 0, this.calculateButtonPositions().size, this.calculateButtonPositions().size, 20);
                    button.endFill();
                });
                colorChangeCount++;
                setTimeout(changeColors, colorChangeInterval);
            };
            changeColors();
        }

        fixButtonColors() {
            this._buttons.forEach((button, index) => {
                button._fillColor = PIXI.utils.string2hex(this._initialColors[index]);
                button.clear();
                button.beginFill(button._fillColor);
                button.lineStyle(4, PIXI.utils.string2hex(buttonBorderColor));
                button.drawRoundedRect(0, 0, this.calculateButtonPositions().size, this.calculateButtonPositions().size, 20);
                button.endFill();
            });
        }

        startOutroAnimation(success) {
            if (this._isOutroAnimationStarted) return;
            this._isOutroAnimationStarted = true;

            let alpha = 1;
            const interval = 50;

            const fadeOut = () => {
                if (alpha <= 0) {
                    this.popScene();
                    return;
                }
                this._buttons.forEach(button => {
                    if (button && button.parent) {
                        button.alpha = alpha;
                    }
                });
                alpha -= 0.1;
                setTimeout(fadeOut, interval);
            };

            fadeOut();
        }

        update() {
            super.update();
            this.handleInput();
            if (this._isPlayerTurn && this._timePerRound > 0) {
                this.updateProgressBar();
            }
        }

        handleInput() {
            if (!this._isPlayerTurn || this._isAnimating) return;

            let moved = false;
            if (Input.isTriggered('left')) {
                this._selectedIndex = (this._selectedIndex + 3) % 4;
                moved = true;
            } else if (Input.isTriggered('right')) {
                this._selectedIndex = (this._selectedIndex + 1) % 4;
                moved = true;
            } else if (Input.isTriggered('up')) {
                this._selectedIndex = (this._selectedIndex + 2) % 4;
                moved = true;
            } else if (Input.isTriggered('down')) {
                this._selectedIndex = (this._selectedIndex + 2) % 4;
                moved = true;
            } else if (Input.isTriggered('ok')) {
                this.onButtonClick(this._selectedIndex);
            }

            if (moved) {
                this.updateButtonSelection();
                this.playCursorSound();
            }
        }

        playCursorSound() {
            AudioManager.playSe({
                name: cursorSound,
                volume: cursorSoundVolume,
                pitch: cursorSoundPitch,
                pan: 0
            });
        }
    }

    Scene_Base.prototype.popScene = function () {
        SceneManager.pop();
    };
})();
