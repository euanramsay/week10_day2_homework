var product = require("./product");

var basket = {
 customerName: "Jimmy White",
 loyaltyCard: true,
 customerBasket: [],
 finalCost: 0
};

basket.addToBasket = function( product ){
  this.customerBasket.push( product );
};

basket.removeFromBasket = function( product ){
  var index = this.customerBasket.indexOf( product );
  this.customerBasket.splice(index, 1);
};

basket.getTotalCost = function() {
  var totalCost = 0;

  for (var item of this.customerBasket) {
    var value = item.cost;
    totalCost += value;
  };
  this.finalCost = totalCost;
  return totalCost;
};

basket.applyTenPercentDiscount = function() {
  if (this.finalCost > 20.0) {
    this.finalCost = this.finalCost * 0.9;
  };
};

basket.applyFivePercentDiscount = function() {
  if (this.loyaltyCard === true) {
    this.finalCost = this.finalCost * 0.95;
  };
};

module.exports = basket;