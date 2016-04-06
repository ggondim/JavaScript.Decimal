function Decimal(floatingNumber, precision) {
  if ((precision || null) === null) {
    precision = 5;
  }
  this.precision = precision;
  this.integer = floatingNumber * Math.pow(10, precision);
  if (this.integer.toString().indexOf('.') > -1) {
    this.integer = Math.round(this.integer);
  }
}

Decimal.fromInteger = function(integer, precision) {
  var result = new Decimal(0, precision);
  result.integer = integer;
  return result;
}

Decimal.add = function(floatingNumberOrDecimal1, floatingNumberOrDecimal2, precision) {
  precision = parseInt(precision);
  var decimal1 = floatingNumberOrDecimal1 instanceof Decimal ? floatingNumberOrDecimal1 : new Decimal(floatingNumberOrDecimal1, precision);
  var decimal2 = floatingNumberOrDecimal2 instanceof Decimal ? floatingNumberOrDecimal2 : new Decimal(floatingNumberOrDecimal2, precision);
  var result = decimal1.integer + decimal2.integer;
  return Decimal.fromInteger(result, precision);
}

Decimal.subtract = function(floatingNumberOrDecimal1, floatingNumberOrDecimal2, precision) {
  precision = parseInt(precision);
  var decimal1 = floatingNumberOrDecimal1 instanceof Decimal ? floatingNumberOrDecimal1 : new Decimal(floatingNumberOrDecimal1, precision);
  var decimal2 = floatingNumberOrDecimal2 instanceof Decimal ? floatingNumberOrDecimal2 : new Decimal(floatingNumberOrDecimal2, precision);
  var result = decimal1.integer - decimal2.integer;
  return Decimal.fromInteger(result, precision);
}

Decimal.multiply = function(floatingNumberOrDecimal1, floatingNumberOrDecimal2, precision) {
  precision = parseInt(precision);
  var decimal1 = floatingNumberOrDecimal1 instanceof Decimal ? floatingNumberOrDecimal1 : new Decimal(floatingNumberOrDecimal1, precision);
  var decimal2 = floatingNumberOrDecimal2 instanceof Decimal ? floatingNumberOrDecimal2 : new Decimal(floatingNumberOrDecimal2, precision);
  var result = Math.round((decimal1.integer * decimal2.integer) * Math.pow(10, precision));
  return Decimal.fromInteger(result, precision);
}

Decimal.divide = function(floatingNumberOrDecimal1, floatingNumberOrDecimal2, precision) {
  precision = parseInt(precision);
  var decimal1 = floatingNumberOrDecimal1 instanceof Decimal ? floatingNumberOrDecimal1 : new Decimal(floatingNumberOrDecimal1, precision);
  var decimal2 = floatingNumberOrDecimal2 instanceof Decimal ? floatingNumberOrDecimal2 : new Decimal(floatingNumberOrDecimal2, precision);
  var result = Math.round((decimal1.integer / decimal2.integer) * Math.pow(10, precision));
  return Decimal.fromInteger(result, precision);
}

Decimal.prototype.toFloat = function() {
  return parseFloat(parseFloat(this.integer / Math.pow(10, this.precision)).toFixed(this.precision));
}

Decimal.prototype.add = function(floatingNumberOrDecimal) {
  return Decimal.add(this, floatingNumberOrDecimal, this.precision);
}

Decimal.prototype.subtract = function(floatingNumberOrDecimal) {
  return Decimal.subtract(this, floatingNumberOrDecimal, this.precision);
}

Decimal.prototype.multiply = function(floatingNumberOrDecimal) {
  return Decimal.multiply(this, floatingNumberOrDecimal, this.precision);
}

Decimal.prototype.divide = function(floatingNumberOrDecimal) {
  return Decimal.divide(this, floatingNumberOrDecimal, this.precision);
}

exports.module = Decimal;

