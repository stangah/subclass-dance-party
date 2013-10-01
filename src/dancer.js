// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.animatePosition = function(top, left, speed){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings, speed);
};

Dancer.prototype.animateSize = function(radius, speed){
  var styleSettings = {
    border-radius: radius
  };
  this.$node.animate(styleSettings, speed);
};