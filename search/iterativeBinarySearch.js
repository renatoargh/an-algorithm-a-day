function iterativeBinarySearch(array, item) {
  let start = 0
  let end = array.length

  while(start < end) {
    const midpoint = Math.floor((end + start) / 2)
    const pivot = array[midpoint]

    if(pivot === item) {
      return midpoint
    }

    if(pivot > item) {
      end = midpoint - 1
    } else {
      start = midpoint + 1
    }
  }

  return null
}
