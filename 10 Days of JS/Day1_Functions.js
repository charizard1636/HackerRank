
/*
 * Create the function factorial here
 */
function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}

/**
Input (stdin)
4

Expected Output
24
**/
