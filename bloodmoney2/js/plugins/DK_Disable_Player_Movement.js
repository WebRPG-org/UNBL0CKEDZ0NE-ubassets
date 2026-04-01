/*:
 * @plugindesc v.1.0.0 [MV|MZ] Allows you to disable and enable player movement through plugin commands or scripts.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Disable_Player_Movement
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Contacts: https://dk-plugins.ru/contacts
 Version: 1.0.0
 Release: 21.04.2024
 First release: 21.04.2024

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Plugin commands (RPG Maker MV)
 ###=========================================================================
 1. Enable player movement: EnablePlayerMovement

 2. Disable player movement: DisablePlayerMovement

 ###===========================================================================
 ## Script calls
 ###===========================================================================
 1. $gameSystem.enablePlayerMovement() - enable player movement

 2. $gameSystem.disablePlayerMovement() - disable player movement

 3. $gameSystem.isPlayerMovementDisabled() - check if player movement is disabled

 ###===========================================================================
 ## See also
 ###===========================================================================
 1. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 2. Video Player (https://dk-plugins.ru/video-player/)
 Adds video to the title screen, credits, the layers on the map and other.

 3. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 4. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 ###=========================================================================
 ## Graphics
 ###=========================================================================
 Additional graphics for your project: https://dk-plugins.ru/resources/

 ###===========================================================================
 ## License and terms of use
 ###===========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Support
 ###=========================================================================
 Become a subscriber on boosty: https://boosty.to/dkplugins
 Become a subscriber on patreon: https://patreon.com/dkplugins



 * @command EnablePlayerMovement
 * @desc Enable player movement

 * @command DisablePlayerMovement
 * @desc Disable player movement

*/

/*:ru
 * @plugindesc v.1.0.0 [MV|MZ] Позволяет отключать и включать движение игрока через команды плагина или скрипты.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Информация о плагине ###
 Название: DK_Disable_Player_Movement
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Контакты: https://dk-plugins.ru/contacts
 Версия: 1.0.0
 Релиз: 21.04.2024
 Первый релиз: 21.04.2024

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Включить движение игрока: EnablePlayerMovement

 2. Отключить движение игрока: DisablePlayerMovement

 ###=========================================================================
 ## Вызовы скриптов
 ###=========================================================================
 1. $gameSystem.enablePlayerMovement() - включить движение игрока

 2. $gameSystem.disablePlayerMovement() - отключить движение игрока

 3. $gameSystem.isPlayerMovementDisabled() - проверить, отключено ли движение игрока

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 2. Видео плеер (https://dk-plugins.ru/video-player/)
 Добавляет видео перед титульным экраном, титры, слои на карте и другое.

 3. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 4. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 ###=========================================================================
 ## Графика
 ###=========================================================================
 Дополнительная графика для вашего проекта: https://dk-plugins.ru/resources/

 ###=========================================================================
 ## Лицензия и правила использования плагина
 ###=========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Стать подписчиком на boosty: https://boosty.to/dkplugins
 Стать подписчиком на patreon: https://patreon.com/dkplugins



 * @command EnablePlayerMovement
 * @desc Включить движение игрока

 * @command DisablePlayerMovement
 * @desc Отключить движение игрока

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Disable_Player_Movement'] = '1.0.0';

//=============================================================================
// plugin commands
//=============================================================================

const DisablePlayerMovements_Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    DisablePlayerMovements_Game_Interpreter_pluginCommand.apply(this, arguments);

    switch (command) {
        case 'EnablePlayerMovement':
            $gameSystem.enablePlayerMovement();
            break;
        case 'DisablePlayerMovement':
            $gameSystem.disablePlayerMovement();
            break;
    }
};

if (Utils.RPGMAKER_NAME === 'MZ') {

    PluginManager.registerCommand('DK_Disable_Player_Movement', 'EnablePlayerMovement', (args) => {
        $gameSystem.enablePlayerMovement();
    });

    PluginManager.registerCommand('DK_Disable_Player_Movement', 'DisablePlayerMovement', (args) => {
        $gameSystem.disablePlayerMovement();
    });

}

//===========================================================================
// Game_System
//===========================================================================

const _Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _Game_System_initialize.apply(this, arguments);
    this._playerMovementDisabled = false;
};

Game_System.prototype.isPlayerMovementDisabled = function() {
    return this._playerMovementDisabled;
};

Game_System.prototype.disablePlayerMovement = function() {
    this._playerMovementDisabled = true;
};

Game_System.prototype.enablePlayerMovement = function() {
    this._playerMovementDisabled = false;
};

//===========================================================================
// Game_Player
//===========================================================================

const _Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
    if ($gameSystem.isPlayerMovementDisabled()) {
        return false;
    }

    return _Game_Player_canMove.call(this);
};
