function Taxes() {
    this._basic_tax_percentage = 10;
    this._import_duty_percentage = 5;
}

function isExempt(product) {
    return product.name === 'book';
}

function isValid(product) {
    return (product && Object.keys(product).length > 0);
}

Taxes.prototype.calculate = function(product) {
    if ( !isValid(product) || isExempt(product) ) {
	    return 0;
    }
    if (product.name.startsWith('imported'))
        return (product.price/100) * this._import_duty_percentage;
    return (product.price/100) * this._basic_tax_percentage;
};

module.exports = function TaxCalculator() {
  return new Taxes()
}
