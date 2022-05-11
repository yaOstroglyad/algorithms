function findIndex(n)
{

    // If Fibonacci number
    // is less than 2, its
    // index will be same
    // as number
    if (n <= 1)
        return n;

    let a = 0, b = 1, c = 1;
    let res = 1;

    // Iterate until generated
    // fibonacci number is less
    // than given fibonacci number
    while (c < n)
    {
        c = a + b;

        // res keeps track of
        // number of generated
        // fibonacci number
        res++;
        a = b;
        b = c;
    }
    return res;
}

// Driver code
console.log(findIndex(21));
