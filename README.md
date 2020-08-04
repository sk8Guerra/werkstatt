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