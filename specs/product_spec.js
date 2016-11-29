var assert = require("assert");
var product = require("../product");


describe("Product", function(){

  beforeEach( function() {
    product.name = "toaster";
    product.cost = 29.95;
    product.bogof = true;
  })

  it( "product should have a name", function(){
    assert.equal( "toaster", product.name );
  });

  it( "product should have a cost", function(){
    assert.equal( 29.95, product.cost );
  });

  
});