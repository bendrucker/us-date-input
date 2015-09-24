'use strict'

var test = require('tape')
var raf = require('raf')
var dispatchEvent = require('dispatch-event')
var thermometer = require('thermometer')
var DateInput = require('./')

var render = thermometer.createComponent(DateInput)

test('state to dom', function (t) {
  t.plan(3)

  render(function (state, element, done) {
    state.value.set('08/28/1993')
    raf(function () {
      t.equal(element.value, '08/28/1993')
      done()
    })
  })

  render(function (state, element, done) {
    state.value.set(new Date('08/28/1993'))
    raf(function () {
      t.equal(element.value, '08/28/1993')
      done()
    })
  })

  render(function (state, element, done) {
    state.value.set(new Date('08/28/1993').toISOString())
    raf(function () {
      t.equal(element.value, '08/28/1993')
      done()
    })
  })
})

test('dom to state', function (t) {
  t.plan(3)

  render(function (state, element, done) {
    element.value = '08281993'
    dispatchEvent(element, 'input')
    raf(function () {
      t.equal(state.value(), '08/28/1993')
      t.ok(DateInput.validate(state))
      t.equal(DateInput.toDate(state) - new Date('08/28/1993'), 0)
      done()
    })
  })
})

test('validation', function (t) {
  var state = DateInput()
  state.value.set(new Date())
  t.ok(DateInput.validate(state))
  t.end()
})
