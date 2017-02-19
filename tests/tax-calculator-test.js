'use strict'

var chai = require('chai');
var expect = chai.expect;
var TaxCalculator = require('../src/tax-calculator');

describe('TaxCalculator', function () {

    it("Taxes are rounded up to the nearest 0.05", function () {
        expect(TaxCalculator().calculateTax(14.99, 10)).to.equal(1.50);
    });

});