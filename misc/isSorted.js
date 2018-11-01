function isSorted(array) {
  if(array.length <= 1) {
    return true
  }

  for (var i = 1 i < array.length i++) {
    if(array[i - 1] > array[i]) {
      return false
    }
  }

  return true
}