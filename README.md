# JavaScript.Decimal
> A Decimal type with safe floating-point operations support.

[![NPM](https://nodei.co/npm/js-decimal.png)](https://nodei.co/npm/js-decimal/)

**JavaScript.Decimal** exposes a `Decimal` class with safe floating-point number control. It is useful for high precision operations, like monetary operations that involve currencies.

```javascript
var result = Decimal.multiply(0.1, 0.2) 
console.log(result); // ptints 0.02
``` 

## Why?

Floating point numbers have a natural approximation that causes some extra decimals in calculations. If you are not familiar with this theory, you should read [What Every Computer Scientist Should Know About Floating-Point Arithmetic](http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html).

If you try to do this calculation in JavaScript, you will get an unexpected result:

```javascript
var result = 0.1 * 0.2;
console.log(result); // prints 0.020000000000000004
``` 

According to the [Floating-Point Guide](http://floating-point-gui.de/basic/), there is three solutions for this problem:

> *If you really need your results to add up exactly, especially when you work with money: use a special decimal datatype.*

**Problem**: The current decimal datatypes for JavaScript offers the solution but with more complicated usage.

> *If you just don’t want to see all those extra decimal places: simply format your result rounded to a fixed number of decimal places when displaying it.*

**Problem**: To round a number is not a solution for sensitive operations.

> *If you have no decimal datatype available, an alternative is to work with integers, e.g. do money calculations entirely in cents. But this is more work and has some drawbacks.*

**Solution**: This is the best solution. So, our resolution was to create **a Decimal class that treats fractional numbers internally as integers**.

## How to use?

### Requiring the module

```javascript
var Decimal = require('js-decimal').Decimal;
```

### Creating an instance

A Decimal-safe number is an instance of `Decimal`.

```javascript
var mydecimal = new Decimal(floatingNumber, [precision]);
```

The constructor requires two arguments:

- [Number] `floatingNumber`: is the original floating-point or integral value.
- [Number] `precision`: the number of decimal places that cannot be rounded in calculations. Defaults to the count of decimal places from the `floatingNumber`.

### Converting back to float

To convert a `Decimal` to floating-point number again, use `toFloat()` method:

```javascript
var mydecimalAsFloatAgain = mydecimal.toFloat();
```

### Calculations

There is two ways of make a calculation with `Decimal`.

#### 1. From static calling

```javascript
Decimal.divide(floatingNumber1, floatingNumber2, [precision]);
```

###### Arguments
- [Number _/or/_ Decimal] `floatingNumber1` and `floatingNumber2`: the numbers to calculate. Can be either a `Number` or an instance of `Decimal`.
- [Number] `precision`: the number of decimal places that cannot be rounded in the calculation. Defaults to the highest count of decimal places from the numbers.

###### Returns
- [Decimal] The result as an instance of `Decimal`.

#### 2. From the shortcut method of a `Decimal` instance
```javascript
mydecimal.divide(floatingNumber2);
```

###### Arguments
- [Number _/or/_ Decimal] `floatingNumber2`: the second number to calculate. Can be either a `Number` or an instance of `Decimal`.

###### Returns
- [Decimal] The result as an instance of `Decimal`.

###### Remarks
> **This method takes the precision from the first number.** If you need a precision different than the precision of the `Decimal`, use the static calling way and specify the `precision` argument.

### Supported Operations

- add
- subtract
- multiply
- divide

## Support

[Open an issue](https://github.com/ggondim/JavaScript.Decimal/issues/new) if you are having problems with this project.

##### Why the version still is 0.x.x?

Despite this module was used in many projects, it was only used by his author. **It not means that it is unstable or was not tested**, but it means that it was tested by a single person, which puts it to a *beta* state.

Help us to move out from v0 and *[tell us you are using this project](mailto:gustavospgondim@gmail.com)*. When we reach 10 dependents we will move to v1.

## Contributing

Feel free to [fork this project](https://github.com/ggondim/JavaScript.Decimal#fork-destination-box) and contribute to make it better.

## License

This project is licensed under the *[GNU AGPLv3 License](https://github.com/ggondim/JavaScript.Decimal/blob/master/LICENSE)*.

```
Copyright © 2016 Gustavo Gondim (https://github.com/ggondim)
```
