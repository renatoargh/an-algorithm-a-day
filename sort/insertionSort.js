function insertionSort(array, item) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i]
    let j = i - 1

    while(j >= 0 && array[j] > key) {
      array[j + 1] = array[j--]
    }

    array[j + 1] = key
  }

  return array
}

module.exports = insertionSort
