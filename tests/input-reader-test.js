'use strict'

var chai = require('chai');
var expect = chai.expect;
var InputReader = require('../src/input-reader');

describe('InputReader', function () {

    it.only("Read purchase line", function () {
        const inputReader = InputReader();
        var purchase = inputReader.parse('1 imported bottle of perfume at 27.99');
    });

});