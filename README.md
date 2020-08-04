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