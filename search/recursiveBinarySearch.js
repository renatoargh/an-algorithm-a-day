function recursiveBinarySearch(array, item) {
    var index = Math.floor(array.length / 2),
        pivot = array[index];

    if(!array.length) {
        return null;
    }

    if(pivot === item) {
        return pivot;
    }

    var subArray;
    if(pivot > item) {
        subArray = array.splice(0, index);
    } else {
        subArray = array.splice(index + 1, array.length);
    }

    return recursiveBinarySearch(subArray, item);
}
