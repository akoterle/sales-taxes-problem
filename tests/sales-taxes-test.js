'use strict'

var chai = require('chai');
var expect = chai.expect;
var SaleTaxes = require('../src/sales-taxes');

describe('SaleTaxes', function () {

    it("Basic sales tax is applicable at a rate of 10% on all goods", function () {
        const salesTaxes = SaleTaxes();
        const item = { name: "music CD", price: 14.99, imported: false, exempt: false };
        expect(salesTaxes.apply(item)).to.equal(1.50);
    });

    it("Basic tax is not applicable on products that are exempt", function () {
        const salesTaxes = SaleTaxes();
        const item = { name: "book", price: 12.49, imported: false, exempt: true };
        expect(salesTaxes.apply(item)).to.equal(0);
    });

    it("Import duty is an additional sales tax applicable on all imported goods at a rate of 5%", function () {
        const salesTaxes = SaleTaxes();
        const item = { name: "box of chocolates", price: 10, imported: true, exempt: true };
        expect(salesTaxes.apply(item)).to.equal(0.5);
    });

    it("Taxes and duties are both applied for non exempt imported products", function () {
        const salesTaxes = SaleTaxes();
        const item = { name: "bottle of perfume", price: 27.99, imported: true, exempt: false };
        expect(salesTaxes.apply(item)).to.equal(4.2);
    });




});