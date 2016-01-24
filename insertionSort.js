function insertionSort(array, item) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i],
        j = i - 1;

    while(j >= 0 && array[j] > key) {
        array[j + 1] = array[j--];
    }

    array[j + 1] = key;
  }

  return array;
}

module.exports = insertionSort;