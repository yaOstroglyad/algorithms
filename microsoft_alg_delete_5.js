// Write function  that, given an integer N,
// returns the maximum possible value obtainable by
// deleting one '5' digit from the decimal representation of N.
// It is guaranteed that N will contain at least one '5' digit.
// example 15958 should return 1958
// example -5958 should return -598

function solution(N) {
    const isPositive = N > 0;

    const positiveN = Math.abs(N);

    let stringN = String(positiveN);

    let lastIndex = stringN.lastIndexOf("5");

    let i = 0;

    while(i <= lastIndex) {
        if(i == lastIndex) {
            stringN = removeSymbol(stringN, i);
            break;
        }

        if(isPositive && stringN[i] == "5" && stringN[i+1] > "5") {
            stringN = removeSymbol(stringN, i);
            break;
        }
        if(!isPositive && stringN[i] == "5" && stringN[i+1] < "5") {
            stringN = removeSymbol(stringN, i);
            break;
        }
        i++;
    }

    return isPositive ? +stringN : -stringN;

}

function removeSymbol(value, index) {
    let updatedValue = "";

    if (index == value.length) {
        updatedValue = value.slice(0, index);
    } else {
        updatedValue = value.slice(0, index) + value.slice(index + 1);
    }

    return updatedValue;
}
