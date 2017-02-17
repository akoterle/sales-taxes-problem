function SalesTaxesStack() {
}


SalesTaxesStack.prototype.apply = function (shopping_basket) {
    return -1;
}


module.exports = function SalesTaxes() {
    return new SalesTaxesStack()
}
