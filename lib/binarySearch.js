const binarySearch = (arr, searchTerm) => {

    let startPoint = 0;
    let endPoint = arr.length;
    let midPoint = Math.floor((endPoint - startPoint) / 2);
    let foundIndex = -1;
    let midPointChanged = false;
     

    while (startPoint < midPoint) {
        
        if (!midPointChanged) midPoint = startPoint + Math.floor((endPoint - startPoint) / 2);

        if (searchTerm === arr[midPoint]) {
            foundIndex = midPoint;
            endPoint = midPoint;
            midPointChanged = false; 
        }
        if (searchTerm < arr[midPoint]) {
            endPoint = midPoint;
            midPointChanged = false; 
        }

        if (searchTerm > arr[midPoint]) {
            startPoint = midPoint;
            midPoint = startPoint + Math.floor((endPoint - startPoint) / 2);
            midPointChanged = true;
        }
    }
    return foundIndex;
};

module.exports = binarySearch;