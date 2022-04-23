// algorithm complexity O(log2n*n)

const array = [1,2,-3,32,44,23,22,21,56,3,4,5,6,7,8,9,10,11,12];
let count = 0;

function quickSort(array) {
    if(array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let lessPart = [];
    let greaterPart = [];

    for(let i = 0; i < array.length; i++) {
        count+=1;
        if(i === pivotIndex) {
            continue;
        }
        if(array[i] < pivot) {
            lessPart.push(array[i])
        } else {
            greaterPart.push(array[i])
        }
    }

    return [...quickSort(lessPart), pivot,...quickSort(greaterPart)];
}

console.log(quickSort(array))
console.log(count);
