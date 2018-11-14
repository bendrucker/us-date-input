# us-date-input [![Build Status](https://travis-ci.org/bendrucker/us-date-input.svg?branch=master)](https://travis-ci.org/bendrucker/us-date-input) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/us-date-input.svg)](https://greenkeeper.io/)

> US date input component for virtual-dom


## Install

```
$ npm install --save us-date-input
```


## Usage

```js
var DateInput = require('us-date-input')
var dateInput = DateInput()

function render (state) {
  var vtree = DateInput.render(state)
  //=> use virtual-dom to patch vtree into real DOM
}

dateInput(render)
```

## API

#### `DateInput(data)` -> `function`

Create a new date input observable.

##### data

Type: `object`

The initial state of the input.

###### value

Type: `string`

The date in US format (MM/DD/YYYY). You can also set this to a `Date` object or an ISO date string. User inputs are parsed in US format and saved as strings.

#### `DateInput.validate(state)` -> `boolean`

Validate the date input state.

#### `DateInput.toDate(state)` -> `date` / `null`

Get a true `Date` object or `null` if the state is invalid.

#### `DateInput.render(state, options)` -> `object`

Render an date state to a vtree object. `options` will be merged with the defaults and passed to [virtual-hyperscript](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript).

## License

MIT © [Ben Drucker](http://bendrucker.me)
