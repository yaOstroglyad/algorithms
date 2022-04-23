// algorithm complexity O(n)

const array = [1,2,4,6,3,7,9,11,12,8];
let count = 0;
function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === value) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 3))
console.log(count);
