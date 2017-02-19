function TaxCalculatorService() {
    this._round_factor = 0.05;
}

let isExempt = function (product) {
    return product.name === 'book';
}

let isValid = function (product) {
    return (product && Object.keys(product).length > 0);
}

TaxCalculatorService.prototype.calculateTax = function (price, rate) {
    var tax = (price * rate) / 100;
    return Math.round(tax / this._round_factor) * this._round_factor;
}

TaxCalculatorService.prototype.calculate = function (product) {
    if (!isValid(product) || isExempt(product)) {
        return 0;
    }
    var taxes = 0;
    if (product.name.startsWith('imported'))
        taxes += calcTax(product.price, this._import_duty_rate, this._round_factor);
    taxes += calcTax(product.price, this._basic_tax_rate, this._round_factor);
    return taxes;
};

module.exports = function TaxCalculator() {
    return new TaxCalculatorService()
}
