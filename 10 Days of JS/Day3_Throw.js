

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a === 0) {
        throw Error("Zero Error");
    } else if (a < 0) {
        throw Error("Negative Error")
    } else {
            return "YES";
    }
}

/**
Input (stdin)
3
1
2
3

Expected Output
YES
YES
YES
**/
