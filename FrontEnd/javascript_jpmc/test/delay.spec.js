var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var expect = chai.expect;

var Calculator = require('../src/Calculator');
var delay = require('../src/delay');

describe("delay", function () {
    var calculator = new Calculator();
    it("returns a promise", function (done) {
        var willAdd = delay(100, calculator, 'add', [1, 1]);
        expect(willAdd).to.be.instanceOf(Promise);
        expect(willAdd).to.be.fulfilled.notify(done);
    });
    it("delays execution", function (done) {
        expect(delay(1000, calculator, 'add', [10, 5])).to.eventually.equal(15).notify(done);
        expect(delay(500, calculator, 'subtract', [9, 5])).to.eventually.equal(4);
    });
    it("cannot execute functions that do not exist", function (done) {
        expect(delay(1000, calculator, 'sqrt', [2, 2])).to.be.rejected.notify(done);
    });
});