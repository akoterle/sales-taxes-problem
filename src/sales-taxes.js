var TaxCalculator = require('../src/tax-calculator');


function SalesTaxesService() {
    this.taxCalculator = TaxCalculator();
}

var isExempt = function (product) {
    return (product.name.indexOf('book') != -1)
        || (product.name.indexOf("box of chocolates") != -1);
}

var isImported = function (product) {
    return product.name.indexOf('imported') != -1;
}

SalesTaxesService.prototype.apply = function (item) {
    var taxRate = 0;
    if (!isExempt(item)) {
        taxRate += 10;
    }
    if (isImported(item)) {
        taxRate += 5;
    }
    return this.taxCalculator.calculateTax(item.price, taxRate);
}


module.exports = function SalesTaxes() {
    return new SalesTaxesService()
}
