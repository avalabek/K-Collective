var expect = require("chai").expect;

var cuisine = function(x) {
  if (typeof x !== "string") {
    throw new Error("Cuisine must be written in words.");
  } else return x;
};

describe("Cuisine", function() {
  it("should check that cuisine is a string", function() {
    expect(cuisine("French")).to.equal("French");
  });

  it("should throw error when passed numbers", function() {
    expect(function() {
      cuisine(2);
    }).to.throw(Error);
  });
  it("should throw error when passed a boolean", function() {
    expect(function() {
      cuisine(true);
    }).to.throw(Error);
  });
  it("should throw error when passed Null", function() {
    expect(function() {
      cuisine();
    }).to.throw(Error);
  });
});
