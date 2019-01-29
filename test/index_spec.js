var primeModule = require("../index");
console.log(primeModule);

var chai = require('chai');
var should = chai.should();

describe("Throwing darts score calculator", function () {

  it("An empty collection should be -1", function () {
    var score = primeModule([]);
    score.should.equal(-1);
  });

  it("Score for [1, 5, 11] should be 15", function () {
    var score = primeModule([1, 5, 11]);
    score.should.equal(15);
  });

  it("Score for [15, 20, 30] should be 0", function () {
    var score = primeModule([15, 20, 30]);
    score.should.equal(0);
  });

  it("Score for [1, 2, 1, 4, 4, 2] should be 160", function () {
    var score = primeModule([1, 2, 1, 4, 4, 2]);
    score.should.equal(160);
  });
});