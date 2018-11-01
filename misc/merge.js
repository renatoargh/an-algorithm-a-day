function merge(left, right) {
  const merged = []
  let i = 0
  let j = 0

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      merged.push(left[i++])
    } else {
      merged.push(right[j++])
    }
  }

  left = left.slice(i)
  right = right.slice(j)

  return merged.concat(left, right)
}

module.exports = merge