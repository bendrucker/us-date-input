'use strict'

var Input = require('base-input')
var usDate = require('us-date')
var pipe = require('value-pipe')
var value = require('observ-value')
var separate = require('separate')
var isDateLike = require('is-date-like')
var numeric = require('numeric-pattern')
var extend = require('xtend')
var date = require('create-date')

var parse = pipe(clean, limit, slashes)

var DateInput = module.exports = Input({
  parse: parse,
  format: format,
  validate: validate,
  options: {
    type: 'text',
    pattern: numeric
  }
})

DateInput.toDate = toDate

var nonDigit = /[^\d]/g
function clean (string) {
  return string.replace(nonDigit, '')
}

function limit (string) {
  return string.substring(0, 8)
}

function slashes (string) {
  return separate(string, '/', [2, 4])
}

function format (value, options) {
  if (isDateLike(value)) {
    return usDate(date(value), extend({pad: true}, options))
  }
  return value
}

// MM/DD/YYYY
var regex = /\d{2}\/\d{2}\/\d{4}/
function validate (value) {
  return regex.test(value) || isDateLike(value)
}

function toDate (state) {
  return DateInput.validate(state) ? pipe(value, date)(state.value) : null
}
