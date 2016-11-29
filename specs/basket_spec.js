var assert = require("assert");
var basket = require("../basket");


describe("Basket", function(){

  beforeEach( function() {
    basket.customerName = "Jimmy White";
    basket.loyaltyCard = true;
    basket.customerBasket = [];
    basket.finalCost = 0;
  })

  it( "basket should have a customer name", function(){
    assert.equal( "Jimmy White", basket.customerName );
  });

  
});