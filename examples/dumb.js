var rejected = require('../')

const isEven = function (v) {
  return v % 2 === 0
}

rejected([1, 2, 3, 4, 5, 6].map(function (v) {
  if (isEven(v)) {
    return Promise.reject(new Error(v))
  }
  return Promise.resolve(v)
}))
  .then(function (val) {
    val.map(function (err) {
      console.log('Error : #' + err.message)
    })
  })
  .catch()
