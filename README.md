# promise-rejected
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Wait for an array of promises to be completed (resolved or rejected) and return an array with only the rejections.

## Installation
```bash
$ npm install promise-reject
```

or

```bash
$ yarn add promise-reject
```

## Why ?

`Promise.all` will stop at first error detected while `promise-rejected` will give run all the promises and return all errors detected.

As its goal is to detected errors, the promise is resolved with detected errors.


## Usage

`promise-rejected` is useful when you need to have access to a list of errors.

A good example is like in form validation. If you have a validation function for each field, any invalid field might throw an error that you can catch.

`promise-rejected` will enable you to display an error for all invalid fields in one row while using `Promise.all` will enable you to only display the first invalid field.

## Example

This example is a bit contrived but you should understand the purpose of the `promise-rejected` function.

```js
const rejected = require('promise-rejected')

rejected([1, 2, 3, 4, 5, 6].map(function (v) {
  if (v % 2 === 0) {
    throw new Error('invalid value')
  }
}))
  .then(function (val) {
    val.map(function (err) {
      console.log('Error : #' + err.message)
      /*
        Error : #2
        Error : #4
        Error : #6
      */
    })
  })
  .catch()
```

If you had used `Promise.all` the promise chain will have been rejected with only the first error :


## Inspiration

- [promise-reduce](https://github.com/yoshuawuyts/promise-reduce)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-rejected.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-rejected
[travis-image]: https://img.shields.io/travis/stephanebachelier/promise-rejected.svg?style=flat-square
[travis-url]: https://travis-ci.org/stephanebachelier/promise-rejected
[coveralls-image]: https://img.shields.io/coveralls/stephanebachelier/promise-rejected.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/stephanebachelier/promise-rejected?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-rejected.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-rejected
