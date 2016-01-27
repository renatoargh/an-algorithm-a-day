function partition(array) {
  var parts = {
    left: [],
    pivot: array.shift(),
    right: []
  };

  array.forEach(function(current) {
    if (current > parts.pivot) {
      parts.right.push(current);
    } else {
      parts.left.push(current);
    }
  });

  return parts;
}

function quicksort(array) {
  if(array.length <= 1) {
    return array;
  }

  var parts = partition(array);
  return [].concat(
    quicksort(parts.left),
    parts.pivot,
    quicksort(parts.right)
  );
}

module.exports = quicksort;