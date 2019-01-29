let primeModule = require("../index");
console.log(primeModule);

let chai = require('chai');
let should = chai.should();

describe("Throwing darts score calculator", function () {

  it("An empty collection should be -1", function () {
    let score = primeModule([]);
    score.should.equal(-1);
  });

  it("Score for [1, 5, 11] should be 15", function () {
    let score = primeModule([1, 5, 11]);
    score.should.equal(15);
  });

  it("Score for [15, 20, 16] should be 0", function () {
    let score = primeModule([15, 20, 16]);
    score.should.equal(0);
  });

  it("Score for [1, 2, 1, 4, 4, 2] should be 160", function () {
    let score = primeModule([1, 2, 1, 4, 4, 2]);
    score.should.equal(160);
  });

  it("Score for [4, 21, 7] should return error 'Value over 20 cannot be calculated'", function () {
    let score = primeModule([4, 21, 7]);
    score.should.equal("Value over 20 cannot be calculated");
  });

  it("Score for [4, taco, 7] should return error 'All values must be numbers'", function () {
    let score = primeModule([4, 'taco', 7]);
    score.should.equal('All values must be numbers');
  });
});