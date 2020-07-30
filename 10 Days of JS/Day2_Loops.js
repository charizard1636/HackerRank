

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = [];
    const consonants = [];
    for (let char of s) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels.push(char);
        } else {
            consonants.push(char);
        }
    }
    vowels.forEach(item => console.log(item));
    consonants.forEach(item => console.log(item));
}

/**
Input (stdin)
javascriptloops

Expected Output
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
**/
