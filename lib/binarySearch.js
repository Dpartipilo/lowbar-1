const binarySearch = (arr, searchTerm) => {

    let start = 0, end = arr.length - 1, mid;

    do {
        mid = ~~((end + start) / 2);

        if (searchTerm === arr[mid]) {
            if (arr[mid - 1] === searchTerm) end = mid - 1;
            else return mid;
        }
        if (searchTerm < arr[mid])  end = mid - 1;
        if (searchTerm > arr[mid])  start = mid + 1;
    } while (start <= end);
    return -1;
};

module.exports = binarySearch;