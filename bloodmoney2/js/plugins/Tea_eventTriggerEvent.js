//Tea_eventTriggerEvent.js
/*:
 * @target MZ
 * @plugindesc Allow events to trigger other events (Link below leads to YT tutorial for the plugin)
 * @author Tea
 * @url https://discord.gg/uywwjQWD5W
 *
 * @help
 * ############################################################################
 *                                Tea_eventTriggerEvent
 *                                    Version 1.0
 *                                        Tea
 * ############################################################################
 *
 * Special thanks to Drifty, Yanfly and Trihan for their help!
 * 
 * @help https://discord.gg/uywwjQWD5W
 * ^^^ Please follow the link above for the comprehensive help file, which includes 
 * screen shots and videos. 
 * 
 * 
 * ************************************************************************** 
 * 
 * @command ETE
 * @text Event touch event
 * @desc assign two events that will trigger a switch when they collide.
 * 
 * @arg arg1
 * @text Triggered events on this map
 * @desc A list of events that will be triggered when coming WITH another event with the note tag <TRIGGERING EVENT>.
 * @default List triggering events here (format example: 1, 2, 3, 4)
 * @type number[] 
 * 
 * 
 * @
 * ############################################################################
 *  End
 * ############################################################################
 *
 * Change Log:
 * 1.0.0 - Release
 * 
 * https://discord.gg/DriftwoodGaming
 * https://www.youtube.com/DriftwoodGamingMV
 * https://www.patreon.com/DriftwoodGaming
 * https://driftwoodGaming.com
 * 
 */
(() => {
    'use strict'; 
    PluginManager.registerCommand("Tea_eventTriggerEvent", "ETE", ETE); 
    function ETE(args) {
        //Thanks to Yanfly for all his help with this :D
        Game_Event.prototype.checkEventTriggerTouch = function(x, y) {
            if (!this.event().note.match(/<TRIGGERING EVENT>/i)) return;
            this.startMapEvent(x, y, [1, 2], true);   
        };
        const _Game_Event_startMapEvent = Game_Event.prototype.startMapEvent;
        Game_Event.prototype.startMapEvent = function(x, y, triggers, normal) {
            let arr = JSON.parse(args.arg1);
            for (let i= 0; i <= arr.length; i++){
                if (!$gameMap.isEventRunning()) {
                    for (const event of $gameMap.eventsXy(x, y)) {
                        let trig = this.event().note.match().input;
                        if(event._eventId === Number(arr[i]) && trig !== "<TRIGGERING EVENT>") break;
                        if(event._eventId !== Number(arr[i]) && trig === "<TRIGGERING EVENT>") break;
                        if (
                            event.isTriggerIn(triggers) &&
                            event.isNormalPriority() === normal 
                        ) {
                            event.start();
                        }
                    }
                }
            }
        };
    };
})();