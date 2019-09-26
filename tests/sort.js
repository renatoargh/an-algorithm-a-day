const unsortedArray = [4, 2, 3, 9, 5, 6, 0, 23, 1, 24, 99, 3, 64, 34, 5, 0]
const sortedArray = [...unsortedArray].sort((a, b) => a - b)

module.exports = {
  'sorting algorithms': {
    'insertion sort': function (test) {
      const insertionSort = require('../sort/insertionSort')
      test.deepEqual(insertionSort(unsortedArray), sortedArray)
      test.done()
    },

    'selection sort': function (test) {
      const selectionSort = require('../sort/selectionSort')
      test.deepEqual(selectionSort(unsortedArray), sortedArray)
      test.done()
    },

    'merge sort': function (test) {
      const mergeSort = require('../sort/mergeSort')
      test.deepEqual(mergeSort(unsortedArray), sortedArray)
      test.done()
    },

    'quick sort': function (test) {
      const quickSort = require('../sort/quicksort')
      test.deepEqual(quickSort(unsortedArray), sortedArray)
      test.done()
    }
  }
}
