# Werkstatt

🛠 Useful functions to encapsulate common scenarios.

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