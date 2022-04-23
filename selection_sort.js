// algorithm complexity O(n*n)

const array = [1,2,-3,32,44,23,22,21,56,3,4,5,6,7,8,9,10,11,12];
let count = 0;
function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
            count+=1;
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
}

console.log(selectionSort(array))
console.log(count);
