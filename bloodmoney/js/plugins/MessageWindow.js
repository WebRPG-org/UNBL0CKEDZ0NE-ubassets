/*:
 * @plugindesc Change the message window y position a bit.
 * @help Terms of use: free to use and/or modify for any project.
 */
(function(alias) {
  Window_Message.prototype.updatePlacement = function() {
    alias.apply(this, arguments);
    if (this._positionType === 2) {  // showing at bottom of screen
      this.y -= 0;                  // move up by 20 px
    }
  };
})(Window_Message.prototype.updatePlacement);