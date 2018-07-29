var expect = require('chai').expect;

var Calculator = require('../src/Calculator');
var ScientificCalculator = require('../src/ScientificCalculator');

describe("ScientificCalculator", function () {
    var calculator;
    beforeEach(function () {
        calculator = new ScientificCalculator();
    });
    it("extends Calculator", function () {
        expect(calculator).to.be.instanceOf(Calculator);
        expect(calculator).to.be.instanceOf(ScientificCalculator);
    });
    it("returns the sine of PI / 2", function () {
        expect(calculator.sin(Math.PI / 2)).to.equal(1);
    });
    it("returns the cosine of PI", function () {
        expect(calculator.cos(Math.PI)).to.equal(-1);
    });
    it("returns the tangent of 0", function () {
        expect(calculator.tan(0)).to.equal(0);
    });
    it("returns the logarithm of 1", function () {
        expect(calculator.log(1)).to.equal(0);
    });
});