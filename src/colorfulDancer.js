var ColorfulDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

ColorfulDancer.prototype = inherit(Dancer.prototype);

ColorfulDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};