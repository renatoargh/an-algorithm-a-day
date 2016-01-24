var unsortedArray = [4, 3, 9, 5, 6, 0, 23, 1, 24, 3, 64, 34, 5],
    sortedArray = [0, 1, 3, 3, 4, 5, 5, 6, 9, 23, 24, 34, 64],

    insertionSort = require('../insertionSort'),
    selectionSort = require('../selectionSort'),
    mergeSort = require('../mergeSort'),
    quickSort = require('../quicksort');

module.exports = {
    'insertionSort': function(test) {
        test.deepEqual(insertionSort(unsortedArray), sortedArray);
        test.done();
    },

    'selectionSort': function(test) {
        test.deepEqual(selectionSort(unsortedArray), sortedArray);
        test.done();
    },

    'mergeSort': function(test) {
        test.deepEqual(mergeSort(unsortedArray), sortedArray);
        test.done();
    },

    'quickSort': function(test) {
        test.deepEqual(quickSort(unsortedArray), sortedArray);
        test.done();
    }
}