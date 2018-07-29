var expect = require('chai').expect;

var Calculator = require('../src/Calculator');
var withExponents = require('../src/withExponents');

describe("withExponents", function () {
    var calculator;
    beforeEach(function () {
        calculator = new Calculator();
        withExponents.call(calculator);
    });
    it("returns 2^3", function () {
        expect(calculator.pow(2, 3)).to.equal(8);
    });
    it("multiplies 2^3 and 2^4", function () {
        expect(calculator.multiplyExp([2, 3], [2, 4])).to.equal(128);
    });
    it("divides 2^3 by 2^5", function () {
        expect(calculator.divideExp([2, 3], [2, 5])).to.equal(0.25);
    });
});