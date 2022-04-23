// algorithm complexity O(log2n)

const array = [1,2,3,4,5,6,7,8,9,10,11,12];
let count = 0;
function binarySearch(array, value) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count+=1;
        middle = Math.floor((start + end) / 2) // in case .5 will be rounded down
        if (array[middle] === value) {
            found = true;
            position = middle;
            return position;
        }
        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
    }
    return position;
}

console.log(binarySearch(array, 12))
console.log(count);

function recursiveBinarySearch(array, value, start, end) {
    let middle = Math.floor((start + end) / 2) // in case .5 will be rounded down
    count+=1;
    if(value === array[middle]) {
        return middle;
    }
    if (value < array[middle]) {
        return recursiveBinarySearch(array, value, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, value, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(array, 12, 0, array.length))
console.log(count);
