function countingSort(array, max) {
  const equal = []
  const less = []
  const next = []
  const sorted = []

  for (var i = 0; i < array.length; i++) {
    equal[array[i]] = (equal[array[i]] || 0) + 1
  }

  for (var j = 0; j < max; j++) {
    less[j] = (less[j - 1] || 0) + (equal[j - 1] || 0)
  }

  for (var k = 0; k < max; k++) {
    next[k] = less[k]
  }

  array.forEach(function(key, l) {
    const index = next[key]
    sorted[index] = array[l]
    next[key] = next[key] + 1
  })

  return sorted
}
