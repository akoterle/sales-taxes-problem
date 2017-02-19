var TaxCalculator = require('../src/tax-calculator');


function SalesTaxesService() {
    this.taxCalculator = TaxCalculator();
}

SalesTaxesService.prototype.apply = function (item) {
    var taxRate = 0;
    if (!item.exempt) {
        taxRate += 10;
    }
    if (item.imported) {
        taxRate += 5;
    }
    return this.taxCalculator.calculateTax(item.price, taxRate);
}

module.exports = function SalesTaxes() {
    return new SalesTaxesService()
}
