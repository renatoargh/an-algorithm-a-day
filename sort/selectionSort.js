function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i]

    for (let j = i + 1; j < array.length; j++) {
      const current = array[j]

      if(current < smallest) {
        smallest = current

        const temp = array[i]
        array[i] = smallest
        array[j] = temp
      }
    }
  }

  return array
}

module.exports = selectionSort
