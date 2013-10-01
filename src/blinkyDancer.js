var inherit = function(proto){
  var F = function () {};
  F.prototype = proto;
  return new F();
};

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = inherit(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  this.$node.toggle();
};