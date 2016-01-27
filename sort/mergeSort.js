var merge = require('./merge');

function mergeSort(array) {
  var length = array.length,
      midpoint = Math.floor(length / 2);

  if(length === 1) {
    return array;
  }

  var left = mergeSort(array.slice(0, midpoint)),
      right = mergeSort(array.slice(midpoint, length));

  return merge(left, right);
}

module.exports = mergeSort;
