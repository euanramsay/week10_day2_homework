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

module.exports = basket;