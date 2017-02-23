function InputReaderService() {
    this.re = RegExp(/(\d+)\s+?(imported\s+)?(\w+)\s+of\s+?(imported\s+)?(.*)\s+at\s+(\d+.\d+)/, 'g');
}

InputReaderService.prototype.parse = function (line) {
    var matched = this.re.exec(line);
}

module.exports = function InputReader() {
    return new InputReaderService()
}
