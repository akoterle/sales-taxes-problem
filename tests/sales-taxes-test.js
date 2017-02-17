'use strict'

var chai = require('chai');
var expect = chai.expect;
var SaleTaxes = require('../src/sales-taxes');

describe('SaleTaxes', function () {

    it.only("Sales taxes are zero for an empty shopping basket", function () {
        expect(SaleTaxes().apply({})).to.equal(0);
        expect(SaleTaxes().apply()).to.equal(0);
    });

});