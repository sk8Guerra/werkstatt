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

```javascript
const { roundUp } = require('werkstatt');

roundUp(3.2) // -> 4
```

##### Parameters

| parameter | type | 
|-----------|------|
| number    | float|

### roundDown

```javascript
const { roundDown } = require('werkstatt');

roundDown(3.8) // -> 3
```

##### Parameters

| parameter | type  |
|-----------|-------|
| number    | float |

### isEmpty

```javascript
const { isEmpty } = require('werkstatt');

isEmpty({}) // -> true
isEmpty({"hola": "adios"}) // -> false
isEmpty([]) // -> true
isEmpty("") // -> true
isEmpty(3) // -> true
isEmpty(true) // -> true
```

##### Parameters

| parameter | type |
|-----------|------|
| param     | any  |