# Werkstatt

🛠 Useful functions to encapsulate common scenarios.

[![travis build](https://img.shields.io/travis/sk8guerra/werkstatt)](https://travis-ci.org/github/sk8Guerra/werkstatt)

As described [here](https://github.com/ryanmcdermott/clean-code-javascript#encapsulate-conditionals), is good to encapsulate conditionals to make our code more readable, reusable and avoid ambiguities. Also to avoid potential bugs due to some javascript features are error-prone:

```javascript
let name = null;
typeof name; // "object"
```

Clearly, `null` is not an object. More of that 👉🏼[here](https://2ality.com/2013/10/typeof-null.html).

This is then, a package that encapsulates conditionals, but also other util functions.

> ⚠️ WARNING: This is also a proof of concept. Some of the functions' names may not make all the sense to you or also may be many breaking changes.

## 📦 Install

**npm**

```bash
npm install -s werkstatt
```

**yarn**

```bash
yarn add werkstatt
```

**browser**

```html
<script src="https://unpkg.com/werkstatt@1.16.0/dist/index.umd.min.js"></script>

<script>
  const { isEmail, isNull, areEqual } = werkstatt;

  console.log(isEmail("asdf")); // -> false
  console.log(isNull(3)); // -> false
  console.log(areEqual(6, 6, 6, 6)); // -> true
</script>
```

## ✨ Features

### Number

<details>
<summary><strong>isZero</strong></summary>

##### Arguments

| argument | type   | description                      | returns |
| -------- | ------ | -------------------------------- | ------- |
| value    | number | will be tested if it is 0 or not | boolean |

```javascript
const { isZero } = require("werkstatt");

isZero(7); // -> false
isZero(0); // -> true
```

</details>

<details>
<summary><strong><h4>add</h4></strong></summary>

##### Arguments

| argument | type   | description                          | returns |
| -------- | ------ | ------------------------------------ | ------- |
| values   | number | either an array of numbers or n args | number  |

```javascript
const { add } = require("werkstatt");

add(3, 6, 11); // -> 20
const numbers = [1, 2, 3];
add(...numbers); // -> 6

// or just pass the array
add(numbers); // -> 6
```

</details>

<details>
<summary><strong><h4>subtract</h4></strong></summary>

##### Arguments

| argument | type   | description                      | returns |
| -------- | ------ | -------------------------------- | ------- |
| values   | number | numbers that will be subtrtacted | number  |

```javascript
const { subtract } = require("werkstatt");

subtract(6, 3); // -> 3
```

> NOTE: currently it only supports two numbers as paremeters.

</details>

<details>
<summary><strong><h4>divide</h4></strong></summary>

##### Arguments

| argument | type   | description                   | returns |
| -------- | ------ | ----------------------------- | ------- |
| dividend | number | the dividend of the operation | number  |
| divider  | number | the divider of the operation  | number  |

```javascript
const { divide } = require("werkstatt");

divide(100, 2); // -> 50
divide(10, 5); // -> 2
```

</details>

<details>
<summary><strong><h4>isNumber</h4></strong></summary>

##### Arguments

| argument | type | description                           | returns |
| -------- | ---- | ------------------------------------- | ------- |
| value    | any  | will be tested if it is number or not | boolean |

```javascript
const { isNumber } = require("werkstatt");

isNumber(54); // -> true
isNumber({ hola: "adios" }); // -> false
isNumber([]); // -> false
isNumber(""); // -> false
isNumber(3); // -> true
isNumber(true); // -> false
```

> NOTE: this is an implementation of [is-number](https://www.npmjs.com/package/is-number) package.

</details>

<details>
<summary><strong><h4>isOdd</h4></strong></summary>

##### Arguments

| argument | type   | description                               | returns |
| -------- | ------ | ----------------------------------------- | ------- |
| value    | number | will be tested if it is odd number or not | boolean |

```javascript
const { isOdd } = require("werkstatt");

isOdd(7); // -> true
isOdd(4); // -> false
```

> NOTE: this is an implementation of [is-odd](https://www.npmjs.com/package/is-odd) package.

</details>

<details>
<summary><strong><h4>isEven</h4></strong></summary>

##### Arguments

| argument | type   | description                                | returns |
| -------- | ------ | ------------------------------------------ | ------- |
| value    | number | will be tested if it is even number or not | boolean |

```javascript
const { isEven } = require("werkstatt");

isEven(7); // -> false
isEven(4); // -> true
```

> NOTE: this is an implementation of [is-even](https://www.npmjs.com/package/is-even) package.

</details>

<details>
<summary><strong><h4>isNegative</h4></strong></summary>

##### Arguments

| argument | type   | description                                    | returns |
| -------- | ------ | ---------------------------------------------- | ------- |
| value    | number | will be tested if it is negative number or not | boolean |

```javascript
const { isNegative } = require("werkstatt");

isNegative(-54); // -> true
isNegative(4); // -> false
```

</details>

<details>
<summary><strong><h4>isGreaterThan</h4></strong></summary>

##### Arguments

| argument       | type   | description                  | returns |
| -------------- | ------ | ---------------------------- | ------- |
| firstArgument  | number | first value to be evaluated  | boolean |
| secondArgument | number | second value to be evaluated | boolean |

```javascript
const { isGreaterThan } = require("werkstatt");

isGreaterThan(100, 50); // -> true
isGreaterThan(1, 50); // -> false
```

</details>

<details>
<summary><strong><h4>toFixed</h4></strong></summary>

##### Arguments

| argument  | type   | description                |
| --------- | ------ | -------------------------- |
| value     | number | number to convert          |
| precision | number | desired amount of decimals |

```javascript
const { toFixed } = require("werkstatt");

toFixed(3.14, 4); // -> '3.1400'
toFixed(5.1346, 3); // -> '5.135'
```

</details>

<details>
<summary><strong><h4>min</h4></strong></summary>

##### Arguments

| argument | type                             | description                        |
| -------- | -------------------------------- | ---------------------------------- |
| value    | array of numbers or several args | where to look for the lowest value |

```javascript
const { min } = require("werkstatt");

min(264, 736, 223, 979, 124); // -> 124
min([543, 333, 22, 1865, 976]); // -> 22
```

</details>

<details>
<summary><strong><h4>max</h4></strong></summary>

##### Arguments

| argument | type                             | description                         |
| -------- | -------------------------------- | ----------------------------------- |
| value    | array of numbers or several args | where to look for the highest value |

```javascript
const { max } = require("werkstatt");

max(264, 736, 223, 979, 124); // -> 979
max([543, 333, 22, 1865, 976]); // -> 1865
```

</details>

<details>
<summary><strong><h4>truncate</h4></strong></summary>

##### Arguments

| argument | type   | description                                  |
| -------- | ------ | -------------------------------------------- |
| value    | number | float number where decimales will be removed |

```javascript
const { truncate } = require("werkstatt");

truncate(123.4567); // -> 123
```

</details>

<details>
<summary><strong><h4>random</h4></strong></summary>

##### Arguments

| argument  | type   | description                |
| --------- | ------ | -------------------------- |
| lower     | number | lower number desired       |
| upper     | number | upper number desired       |
| precision | number | amount of decimals desired |

```javascript
const { random } = require("werkstatt");

random(5, 10, 2); // -> 9.32
```

</details>

### Float

<details>
<summary><strong><h4>roundUp</h4></strong></summary>

##### Arguments

| argument | type  |
| -------- | ----- |
| number   | float |

```javascript
const { roundUp } = require("werkstatt");

roundUp(3.2); // -> 4
```

</details>

<details>
<summary><strong><h4>round</h4></strong></summary>

##### Arguments

| argument | type  |
| -------- | ----- |
| number   | float |

```javascript
const { round } = require("werkstatt");

round(5.95); // -> 6
round(5.5); // -> 6
round(5.05); // -> 5
```

</details>

<details>
<summary><strong><h4>roundDown</h4></strong></summary>

##### Arguments

| argument | type  |
| -------- | ----- |
| number   | float |

```javascript
const { roundDown } = require("werkstatt");

roundDown(3.8); // -> 3
```

</details>

<details>
<summary><strong><h4>isFloat</h4></strong></summary>

##### Arguments

| argument | type          | description                       | returns |
| -------- | ------------- | --------------------------------- | ------- |
| value    | number, float | will be tested if is or not float | boolean |

```javascript
const { isFloat } = require("werkstatt");

isFloat(6); // -> false
isFloat(6.5); // -> true
```

</details>

### String

<details>
<summary><strong><h4>capitalizeFirstLetter</h4></strong></summary>

##### Arguments

| argument | type   | description                       | returns |
| -------- | ------ | --------------------------------- | ------- |
| value    | string | string to capitalize first letter | string  |

```javascript
const { capitalizeFirstLetter } = require("werkstatt");

capitalizeFirstLetter("hola"); // -> 'Hola'
capitalizeFirstLetter("adios"); // -> 'Adios'
```

> NOTE: this is an implementation of a [Flavio's function](https://flaviocopes.com/how-to-uppercase-first-letter-javascript/)

</details>

<details>
<summary><strong><h4>isEmail</h4></strong></summary>

##### Arguments

| argument | type   | description                                    | returns |
| -------- | ------ | ---------------------------------------------- | ------- |
| value    | string | will be tested if it satisfies an email format | boolean |

```javascript
const { isEmail } = require("werkstatt");

isEmail("a@a.c"); // -> false
isEmail("a@a.co"); // -> true
```

> Best regex [found out there](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript).

</details>

<details>
<summary><strong><h4>isString</h4></strong></summary>

##### Arguments

| argument | type | description                          | returns |
| -------- | ---- | ------------------------------------ | ------- |
| value    | any  | whether or not the value is a string | boolean |

```javascript
const { isString } = require("werkstatt");

isString("Hola"); // -> true
isString([3]); // -> false
```

</details>

### Boolean

<details>
<summary><strong><h4>isTruthy</h4></strong></summary>

> Whenever JavaScript expects a boolean value (e.g. for the condition of an `if` statement), any value can be used. It will be interpreted as either `true` or `false`. The following values are interpreted as `false`:
>
> - undefined, null
> - **Boolean**: false
> - **Number**: -0, NaN
> - **String**: ''
>
> Speaking JavaScript by Alex Rauschmayer

That means that those values _tend to_ to be false. So if you pass as parameter to `isTruthy` function any of those values, it will return `false`. All other values are considered `true`.

```javascript
const { isTruthy } = require('werkstatt');

isTruthy(3); // -> true
isTruthy({}); // -> true

isTruthy(undefined); // -> false
isTruthy(null); // -> false
isTruthy(false); // -> false
isTruthy(Number('hola')); // -> false
isTruthy(0); // -> false
isTruthy(-0); // -> false
isTruthy(''); // -> false
```

</details>

<details>
<summary><strong><h4>isFalsy</h4></strong></summary>

Exactly the opposite of `isTruthy`.

```javascript
const { isFalsy } = require('werkstatt');

isFalsy(3); // -> false
isFalsy(null); // -> true

```

</details>

### Array

<details>
<summary><strong><h4>orderAsc</h4></strong></summary>

##### Arguments

| argument | type          | description                           | returns         |
| -------- | ------------- | ------------------------------------- | --------------- |
| value    | array<number> | will order the list in ascending mode | array (ordened) |

```javascript
const { orderAsc } = require("werkstatt");

orderAsc([8, 10, 6]); // -> [6, 8, 10]
```

> NOTE: this is an implementation of [quicksort algorithm](https://en.wikipedia.org/wiki/Quicksort)

</details>

<details>
<summary><strong><h4>lengthOf</h4></strong></summary>

##### Arguments

| argument | type                | description                   | returns |
| -------- | ------------------- | ----------------------------- | ------- |
| value    | array, string, json | length of the passed argument | number  |

```javascript
const { lengthOf } = require("werkstatt");

lengthOf([8, 10, 6]); // -> 3
```

</details>

<details>
<summary><strong><h4>isLengthOf</h4></strong></summary>

##### Arguments

| argument | type                | description                                                                               | returns |
| -------- | ------------------- | ----------------------------------------------------------------------------------------- | ------- |
| value    | array, string, json | test if the first argument has the desired length (that specified in the second argument) | boolean |

```javascript
const { isLengthOf } = require("werkstatt");

isLengthOf([8, 10, 6], 3); // -> true
isLengthOf("hola", 0); // -> false
isLengthOf({ name: "Jorge", lasName: "Guerra" }, 2); // -> true
```

</details>

<details>
<summary><strong><h4>insertAt</h4></strong></summary>

##### Arguments

| argument        | type | description                            |
| --------------- | ---- | -------------------------------------- |
| array           | any  | where the element will be inserted.    |
| index           | any  | at which the element will be inserted. |
| elementToInsert | any  | element to insert in the array.        |

```javascript
const { insertAt } = require("werkstatt");

insertAt([1, 2, 3], 1, 4); // -> [1, 4, 2, 3]
```

</details>

<details>
<summary><strong><h4>isArrayOfNumbers</h4></strong></summary>

##### Arguments

| argument | type   | description   | returns |
| -------- | ------ | ------------- | ------- |
| values   | number | array to test | boolean |

```javascript
const { isArrayOfNumbers } = require("werkstatt");

isArrayOfNumbers([3, 6, 11, "hola"]); // -> false
isArrayOfNumbers([1, 2, 3]); // -> true
```

</details>

<details>
<summary><strong><h4>toArray</h4></strong></summary>

##### Arguments

| argument                 | type | description       | returns |
| ------------------------ | ---- | ----------------- | ------- |
| arrayLikeObject/NodeList | any  | object to convert | array   |

```javascript
const { toArray } = require("werkstatt");

function testToArray() {
  console.log(arguments); // array like object -> [Arguments] { '0': 1, '1': 2, '2': 3 }
  return toArray(arguments);
}

testToArray(1, 2, 3); // -> [ 1, 2, 3 ]
```

</details>

<details>
<summary><strong><h4>isArray</h4></strong></summary>

##### Arguments

| argument | type | description                          | returns |
| -------- | ---- | ------------------------------------ | ------- |
| value    | any  | whether or not the value is an array | boolean |

```javascript
const { isArray } = require("werkstatt");

isArray("Hola"); // -> false
isArray([3]); // -> true
```

</details>

<details>
<summary><strong><h4>uniquifiy</h4></strong></summary>

##### Arguments

| argument | type  | description           | returns |
| -------- | ----- | --------------------- | ------- |
| array    | array | Array to be processed | array   |

```javascript
const { uniquify } = require("werkstatt");

const shoes = [
  { id: 1, name: "nikesb" },
  { id: 1, name: "nikesb" },
  { id: 2, name: "lakai" },
  { id: 2, name: "lakai" },
  { id: 3, name: "etnies" },
];

const unique = uniquify(shoes, (a, b) => a.id === b.id);

/*

[
  { id: 1, name: "nikesb" },
  { id: 2, name: "lakai" },
  { id: 3, name: "etnies" },
]

*/
```

</details>

<details>
<summary><strong><h4>map</h4></strong></summary>

##### Arguments

| argument  | type  | description                               |
| --------- | ----- | ----------------------------------------- |
| array     | array | Array to be processed                     |
| transform | func  | function to apply to element in the array |

```javascript
const { map } = require("werkstatt");

const numbers = [1, 2, 3];
map(numbers, (x) => x * 2); // -> [2, 4, 6]
```

</details>

### Object

<details>
<summary><strong><h4>mergeDeep</h4></strong></summary>

##### Arguments

| argument | type   |
| -------- | ------ |
| target   | object |
| source   | object |

```javascript
const { mergeDeep } = require("werkstatt");

const obj1 = {
  a: 1,
  b: 1,
  c: { x: 1, y: 1 },
  d: [1, 1],
};

const obj2 = {
  b: 2,
  c: { y: 2, z: 2 },
  d: [2, 2],
  e: 2,
};

mergeDeep(obj1, obj2);

/*

{ 
  a: 1, 
  b: 2, 
  c: { x: 1, y: 2, z: 2 }, 
  d: [ 1, 1, 2, 2 ], 
  e: 2 
};
*/
```

Author: [jhildenbiddle](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge/48218209#48218209)

</details>

<details>
<summary><strong><h4>isObject</h4></strong></summary>

##### Arguments

| argument | type |
| -------- | ---- |
| obj      | any  |

```javascript
const { isObject } = require("werkstatt");

const obj1 = {
  a: 1,
  b: 1,
  c: { x: 1, y: 1 },
  d: [1, 1],
};

isObject(obj1); // -> true
```

</details>

### Other

<details>
<summary><strong><h4>typeOf</h4></strong></summary>

##### Arguments

| argument | type | description                         | returns |
| -------- | ---- | ----------------------------------- | ------- |
| value    | any  | will get the type of a passed value | string  |

```javascript
const { typeOf } = require("werkstatt");

typeOf(6.5); // -> float
typeOf([]); // -> array
typeOf({}); // -> object
typeOf(null); // -> 'null'
typeOf(undefined); // -> 'undefined'
typeOf("undefined"); // -> 'string'
typeOf(true); // -> 'boolean'
typeOf(() => {}); // -> 'function'
typeOf(6); // -> number
```

</details>

<details>
<summary><strong><h4>areEqual</h4></strong></summary>

##### Arguments

| argument | type | description     | returns |
| -------- | ---- | --------------- | ------- |
| n amount | any  | args to compare | boolean |

```javascript
const { areEqual } = require("werkstatt");

areEqual(100, 2); // -> false

var name;
areEqual(typeOf(name), "undefined"); // -> true

const numbers = [4, 3, 5, 7, 3, 9];
areEqual(...numbers); // -> false

const ages = [9, 9, 9, 9, 9];
areEqual(...ages); // -> true
```

> NOTE: This function supports primitive values only because objects are not compared by value but by reference.

</details>

<details>
<summary><strong><h4>isUndefined</h4></strong></summary>

##### Arguments

| argument | type | description                           | returns |
| -------- | ---- | ------------------------------------- | ------- |
| value    | any  | will be tested if is undefined or not | boolean |

```javascript
const { isUndefined } = require("werkstatt");

isUndefined(); // -> true
isUndefined("a@a.co"); // -> false
```

</details>

<details>
<summary><strong><h4>isDefined</h4></strong></summary>

##### Arguments

| argument | type | description                         | returns |
| -------- | ---- | ----------------------------------- | ------- |
| value    | any  | will be tested if is or not defined | boolean |

```javascript
const { isDefined } = require("werkstatt");

isDefined(100); // -> true
var name;
isDefined(name); // -> false

var age = null;
isDefined(age); // -> false
isDefined({}); // -> true
```

</details>

<details>
<summary><strong><h4>isEmpty</h4></strong></summary>

##### Arguments

| argument | type |
| -------- | ---- |
| param    | any  |

```javascript
const { isEmpty } = require("werkstatt");

isEmpty({}); // -> true
isEmpty({ hola: "adios" }); // -> false
isEmpty([]); // -> true
isEmpty(""); // -> true
isEmpty(3); // -> true
isEmpty(true); // -> true
```

> Note: `isEmpty` currently supports array, object and string only.

</details>

<details>
<summary><strong><h4>has</h4></strong></summary>

##### Arguments

| argument       | type   | description                  | returns |
| -------------- | ------ | ---------------------------- | ------- |
| firstArgument  | number | first value to be evaluated  | boolean |
| secondArgument | number | second value to be evaluated | boolean |

```javascript
const { has } = require("werkstatt");

has([3, 5], 3); // -> true
has(["Hola", "adios"], "true"); // -> false
has("Jorge", "e"); // -> true
```

</details>

<details>
<summary><strong><h4>isNull</h4></strong></summary>

##### Arguments

| argument | type | description           | returns |
| -------- | ---- | --------------------- | ------- |
| value    | any  | value to be evaluated | boolean |

```javascript
const { isNull } = require("werkstatt");

var name = null;
isNull(name); // -> true
isNull("Hola"); // -> false
```

</details>

<details>
<summary><strong><h4>every</h4></strong></summary>

##### Arguments

| argument | type  | description                           | returns |
| -------- | ----- | ------------------------------------- | ------- |
| args     | array | arguments to match to a specific type | boolean |

```javascript
const { every } = require("werkstatt");

every("adios" === "adios", "hola" === "hola").is.true; // -> true
every("adios", "hola").is.string; // -> true
every(1, 2).is.number; // -> true
```

</details>

<details>
<summary><strong><h4>compose</h4></strong></summary>

##### Arguments

| argument | type  | description              | returns  |
| -------- | ----- | ------------------------ | -------- |
| fns      | array | functions to be executed | function |

```javascript
const { compose } = require("werkstatt");

const h = (n) => n / 2;
const g = (n) => n + 1;
const f = (n) => n * 2;

compose(f, g, h)(20); // -> 22
```

</details>

<details>
<summary><strong><h4>removeFrom</h4></strong></summary>

##### Arguments

| argument | type          | description                  | returns                                   |
| -------- | ------------- | ---------------------------- | ----------------------------------------- |
| item     | array, object | item on where to remove from | copy of item with props or values removed |

```javascript
const { removeFrom } = require("werkstatt");

const object = {
  name: "Jorge",
  age: 20,
  sex: "M",
};
//  pass an array of props
const props = ["name", "sex"];
const newObject = removeFrom(object, props);

// or one prop as string
const newObject = removeFrom(object, "name");

// pass an array of values
const array = ["red", "blue", "pink"];
const values = ["blue", "red"];
const newArray = removeFrom(array, values);

// or one value as string
const array = ["red", "blue"];
const value = "blue";
const newArray = removeFrom(array, value);
```

</details>

<br />

more coming soon ✨

## 🙌🏽 Contribute

1. Fork and clone the repo
2. Run `npm install` to install dependencies
3. Create a branch for your PR with `git checkout -b your-branch-name`

> To keep `master` branch pointing to remote repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream https://github.com/sk8guerra/werkstatt.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```

4. Make your pull request 🥳
