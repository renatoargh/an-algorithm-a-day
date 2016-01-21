function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var smallest = array[i];

        for (var j = i + 1; j < array.length; j++) {
            var current = array[j];

            if(current < smallest) {
                smallest = current;

                var temp = array[i];
                array[i] = smallest;
                array[j] = temp;
            }
        };
    };

    return array;
}
