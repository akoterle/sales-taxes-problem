function TaxCalculatorService() {
    this._round_factor = 0.05;
}

TaxCalculatorService.prototype.calculateTax = function (price, rate) {
    var tax = (price * rate) / 100;
    return Math.round(tax / this._round_factor) * this._round_factor;
}

module.exports = function TaxCalculator() {
    return new TaxCalculatorService()
}
