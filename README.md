# Werkstatt

🛠 Useful functions to encapsulate common scenarios.

As described [here](https://github.com/ryanmcdermott/clean-code-javascript#encapsulate-conditionals), is good to encapsulate conditionals to make our code more readable, reusable and avoid ambiguities. Also to avoid potential bugs due to some javascript features are error-prone:

```javascript
let name = null;
typeof name; // "object"
```

Clearly, `null` is  not an object. More of that 👉🏼[here](https://2ality.com/2013/10/typeof-null.html).

## 📦 Install

```bash
npm install -s werkstatt
```
or
```bash
yarn add werkstatt
```

## ✨ Features

* [roundUp](#roundUp)
* [roundDown](#roundDown)
* [isEmpty](#isEmpty)
* [insertAt](#insertAt)
* [isNumber](#isNumber)
* [isNegative](#isNegative)
* [isOdd](#isOdd)
* [isEven](#isEven)
* [isZero](#isZero)
* [isEmail](#isEmail)
* [isUndefined](#isUndefined)
* [orderAsc](#orderAsc)
* [lengthOf](#lengthOf)
* [isLengthOf](#isLengthOf)
* [subtract](#subtract)
* [isFloat](#isFloat)
* [typeOf](#typeOf)
* [capitalizeFirstLetter](#capitalizeFirstLetter)
* [add](#add)
* [isArrayOfNumbers](#isArrayOfNumbers)
* more coming soon ✨

### roundUp

##### Arguments

| argument | type | 
|-----------|------|
| number    | float|

```javascript
const { roundUp } = require('werkstatt');

roundUp(3.2) // -> 4
```

### roundDown

##### Arguments

| argument | type  |
|-----------|-------|
| number    | float |

```javascript
const { roundDown } = require('werkstatt');

roundDown(3.8) // -> 3
```

### isEmpty

##### Arguments

| argument | type |
|-----------|------|
| param     | any  |

```javascript
const { isEmpty } = require('werkstatt');

isEmpty({}); // -> true
isEmpty({"hola": "adios"}); // -> false
isEmpty([]); // -> true
isEmpty(""); // -> true
isEmpty(3); // -> true
isEmpty(true); // -> true
```
> Note: `isEmpty` currently supports array, object and string only.

### insertAt

##### Arguments

| argument | type | description |
|-----------|------|------------|
| array     | any  | where the element will be inserted.
| index     | any  | at which the element will be inserted.
| elementToInsert | any  | element to insert in the array.

```javascript
const { insertAt } = require('werkstatt');

insertAt([1, 2, 3], 1, 4); // -> [1, 4, 2, 3]
```

### isNumber

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | any  | will be tested if it is number or not | boolean |

```javascript
const { isNumber } = require('werkstatt');

isNumber(54); // -> true
isNumber({"hola": "adios"}); // -> false
isNumber([]); // -> false
isNumber(""); // -> false
isNumber(3); // -> true
isNumber(true); // -> false
```

> NOTE: this is an implementation of [is-number](https://www.npmjs.com/package/is-number) package.

### isNegative

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | number  | will be tested if it is negative number or not | boolean |

```javascript
const { isNegative } = require('werkstatt');

isNegative(-54); // -> true
isNegative(4); // -> false
```

### isOdd

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | number  | will be tested if it is odd number or not | boolean |

```javascript
const { isOdd } = require('werkstatt');

isOdd(7); // -> true
isOdd(4); // -> false
```

> NOTE: this is an implementation of [is-odd](https://www.npmjs.com/package/is-odd) package.

### isEven

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | number  | will be tested if it is even number or not | boolean |

```javascript
const { isEven } = require('werkstatt');

isEven(7); // -> false
isEven(4); // -> true
```

> NOTE: this is an implementation of [is-even](https://www.npmjs.com/package/is-even) package.

### isZero

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | number  | will be tested if it is 0 or not | boolean |

```javascript
const { isZero } = require('werkstatt');

isZero(7); // -> false
isZero(0); // -> true
```

### isEmail

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | string  | will be tested if it satisfies an email format | boolean |

```javascript
const { isEmail } = require('werkstatt');

isEmail("a@a.c"); // -> false
isEmail("a@a.co"); // -> true
```
> Best regex [found out there](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript).

### isUndefined

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | any  | will be tested if is undefined or not | boolean |

```javascript
const { isUndefined } = require('werkstatt');

isUndefined(); // -> true
isUndefined("a@a.co"); // -> false
```

### orderAsc

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | array<number>  | will order the list in ascending mode | array (ordened) |

```javascript
const { orderAsc } = require('werkstatt');

orderAsc([8, 10, 6]); // -> [6, 8, 10]
```

> NOTE: this is an implementation of [quicksort algorithm](https://en.wikipedia.org/wiki/Quicksort)

### lengthOf

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | array, string, json  | length of the passed argument | number |

```javascript
const { lengthOf } = require('werkstatt');

lengthOf([8, 10, 6]); // -> 3
```

### isLengthOf

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | array, string, json  | test if the first argument has the desired length (that specified in the second argument) | boolean |

```javascript
const { isLengthOf } = require('werkstatt');

isLengthOf([8, 10, 6], 3); // -> true
isLengthOf("hola", 0); // -> false
isLengthOf({name: "Jorge", lasName: "Guerra"}, 2) // -> true
```

### subtract

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| values     | number  | numbers that will be subtrtacted | number |

```javascript
const { subtract } = require('werkstatt');

subtract(6, 3); // -> 3
```

> NOTE: currently it only supports two numbers as paremeters.

### isFloat

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | number, float  | will be tested if is or not float | boolean |

```javascript
const { isFloat } = require('werkstatt');

isFloat(6); // -> false
isFloat(6.5); // -> true
```

### typeOf

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | any  | will get the type of a passed value | string |

```javascript
const { typeOf } = require('werkstatt');

typeOf(6.5); // -> float
typeOf([]); // -> array
typeOf({}); // -> object
typeOf(null); // -> 'null'
typeOf(undefined); // -> 'undefined'
typeOf('undefined'); // -> 'string'
typeOf(true); // -> 'boolean'
typeOf(() => {}); // -> 'function'
typeOf(6); // -> number
```

### capitalizeFirstLetter

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| value     | string  | string to capitalize first letter | string |

```javascript
const { capitalizeFirstLetter } = require('werkstatt');

capitalizeFirstLetter('hola'); // -> 'Hola'
capitalizeFirstLetter('adios'); // -> 'Adios'
```

> NOTE: this is an implementation of a [Flavio's function](https://flaviocopes.com/how-to-uppercase-first-letter-javascript/)

### add

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| values     | number  | either an array of numbers or n args | number |

```javascript
const { add } = require('werkstatt');

add(3, 6, 11); // -> 20
const numbers = [1, 2, 3];
add(...numbers); // -> 6
```

### isArrayOfNumbers

##### Arguments

| argument | type | description |  returns   |
|-----------|------|------------|------------|
| values     | number  | array to test | boolean |

```javascript
const { isArrayOfNumbers } = require('werkstatt');

isArrayOfNumbers([3, 6, 11, 'hola']); // -> false
isArrayOfNumbers([1, 2, 3]); // -> true
```
