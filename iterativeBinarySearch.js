function iterativeBinarySearch(array, item) {
    var start = 0,
        end = array.length;

    while(start < end) {
        var midpoint = Math.floor((end + start) / 2),
            pivot = array[midpoint];

        if(pivot === item) {
            return midpoint;
        }

        if(pivot > item) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
    }

    return null;
}
