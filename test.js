const test = require('ava')
const isPromise = require('is-promise')
const rejected = require('./')

test('should return a promise', t => {
  t.truthy(isPromise(rejected()))
})

test('should return an empty array if no args', t => {
  return rejected()
    .then(res => t.deepEqual(res, []))
    .catch(t.fail)
})

test('(n = 1) should return an empty array if the given promise is resolved', t => {
  return rejected(Promise.resolve(1))
    .then(res => t.deepEqual(res, []))
    .catch(t.fail)
})

test('(n = 1) should return an array with the error if the promise is rejected', t => {
  return rejected(Promise.reject(1))
    .then(res => t.deepEqual(res, [1]))
    .catch(t.fail)
})

test('(n > 1) should return an empty array if all the given promises are resolved', t => {
  return rejected([1, 2, 3].map(i => Promise.resolve(i)))
    .then(res => t.deepEqual(res, []))
    .catch(t.fail)
})

test('(n > 1) should return an array with errors for all rejected promises', t => {
  return rejected([1, 2, 3].map(i => i % 2 === 0 ? Promise.resolve(i) : Promise.reject(i)))
    .then(res => t.deepEqual(res, [1, 3]))
    .catch(t.fail)
})

test('(n > 1) should return an array with n errors for n rejected promises', t => {
  return rejected([1, 2, 3].map(i => Promise.reject(i)))
    .then(res => t.deepEqual(res, [1, 2, 3]))
    .catch(t.fail)
})
