var TwinkieDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

TwinkieDancer.prototype = inherit(Dancer.prototype);

TwinkieDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var radius = parseInt(this.$node.css('border-radius', 1);
  this.animateSize(radius + (Math.random() - 0.5));
};