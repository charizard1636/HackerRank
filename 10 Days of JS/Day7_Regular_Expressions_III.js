

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /\d+/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

/**
Input (stdin)
102, 1948948 and 1.3 and 4.5

Expected Output
102
1948948
1
3
4
5
**/
