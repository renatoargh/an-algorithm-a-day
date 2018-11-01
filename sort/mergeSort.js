var merge = require('../misc/merge')

function mergeSort(array) {
  const length = array.length
  const midpoint = Math.floor(length / 2)

  if(length === 1) {
    return array
  }

  const left = mergeSort(array.slice(0, midpoint))
  const right = mergeSort(array.slice(midpoint, length))

  return merge(left, right)
}

module.exports = mergeSort
