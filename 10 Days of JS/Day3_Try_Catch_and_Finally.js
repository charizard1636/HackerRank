

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}

/**
Input (stdin)
"1234"

Expected Output
4321
**/
