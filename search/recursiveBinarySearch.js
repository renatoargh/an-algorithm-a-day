function recursiveBinarySearch(array, item) {
  const index = Math.floor(array.length / 2)
  const pivot = array[index]

  if(!array.length) {
    return null
  }

  if(pivot === item) {
    return pivot
  }

  let subArray
  if(pivot > item) {
    subArray = array.splice(0, index)
  } else {
    subArray = array.splice(index + 1, array.length)
  }

  return recursiveBinarySearch(subArray, item)
}
