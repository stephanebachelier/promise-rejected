function rejected (val) {
  val = Array.isArray(val) ? val : [val]

  const length = val.length
  const acc = []

  if (length === 0) {
    return Promise.resolve(acc)
  }

  return Promise.resolve(val.reduce(function (_, promise, index, arr) {
    return Promise.resolve(promise)
      .then(() => acc)
      .catch(error => {
        if (error !== undefined) {
          acc.push(error)
        }
        return acc
      })
  }, Promise.resolve(acc)))
}

module.exports = rejected
