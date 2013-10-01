var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

MovingDancer.prototype = inherit(Dancer.prototype);

MovingDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  var topPos = parseInt(this.$node.css('top'), 10);
  var leftPos = parseInt(this.$node.css('left'), 10);
  this.animatePosition(topPos + 20 * (Math.random() - 0.5), leftPos + 20 * (Math.random() - 0.5));
};