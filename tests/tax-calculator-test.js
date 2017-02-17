'use strict'

var chai = require('chai');
var expect = chai.expect;
var TaxCalculator = require('../src/tax-calculator');

describe('TaxCalculator', function () {

    it("Calculated taxes are zero if no product is passed in", function () {
        var taxCalculator = TaxCalculator();
        expect(taxCalculator.calculate({})).to.equal(0);
        expect(taxCalculator.calculate()).to.equal(0);
    });

    it("Basic sales tax is applicable at a rate of 10%", function () {
        let product = { quantity: 1, name: "Music CD", price: 10.00 };
        var taxCalculator = TaxCalculator();
        expect(taxCalculator.calculate(product)).to.equal(1);
    });

    it("Calculated taxes are zero for exempt products (i.e: books)", function () {
        let product = { quantity: 1, name: "book", price: 10.00 };
        var taxCalculator = TaxCalculator();
        expect(taxCalculator.calculate(product)).to.equal(0);
    });

    it("Import duty is an additional sales tax applicable on all imported goods at a rate of 5", function() {
        let product = { quantity: 1, name: "imported box of chocolates", price: 10.00 };
        var taxCalculator = TaxCalculator();
        expect(taxCalculator.calculate(product)).to.equal(0.50);
    });

});