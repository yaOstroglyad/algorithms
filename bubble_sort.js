// algorithm complexity O(n*n) slower than selection_sort

const array = [1,2,-3,32,44,23,22,21,56,3,4,5,6,7,8,9,10,11,12];
let count = 0;
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]) {
                let tmp  = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            count+=1;
        }
    }
    return array;

}

console.log(bubbleSort(array))
console.log(count);
