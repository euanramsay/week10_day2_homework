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

  return totalCost;
  
};

module.exports = basket;