var assert = require("assert");
var basket = require("../basket");
var product = require("../product")


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

  it( "basket should have a customer loyalty card", function(){
    assert.equal( true, basket.loyaltyCard );
  });

  it( "should be able to put a product into customer basket", function(){
    basket.addToBasket( product );
    assert.equal( "toaster", basket.customerBasket[0].name );
  });

  
});