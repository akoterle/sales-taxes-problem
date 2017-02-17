'use strict'

var chai = require('chai');
var expect = chai.expect;
var Taxes = require('../src/tax-calculator');

describe('TaxCalculator', function () {

    it("Calculated taxes are zero if no product is passed in", function () {
        expect(Taxes().calculate({})).to.equal(0);
        expect(Taxes().calculate()).to.equal(0);
    });

    it("Basic sales tax is applicable at a rate of 10%", function () {
        let product = { quantity: 1, name: "product", price: 10.00 };
        expect(Taxes().calculate(product)).to.equal(1);
    });

    it("Calculated taxes are zero for exempt products (i.e: books)", function () {
        let product = { quantity: 1, name: "book", price: 10.00 };
        expect(Taxes().calculate(product)).to.equal(0);
    });

    it("Import duty is an additional sales tax applicable on all imported goods at a rate of 5", function () {
        let product = { quantity: 1, name: "imported product", price: 10.00 };
        expect(Taxes().calculate(product)).to.equal(1.50);
    });

    it("sales taxes are rounded up to the nearest 0.05", function () {
        let product = { quantity: 1, name: "product", price: 14.99 };
        expect(Taxes().calculate(product)).to.equal(1.50);
    });

});