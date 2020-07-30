
function getMaxLessThanK(n, k) {
    var max = 0;
    for(let a = 1; a <= n; a++) {
        for(let b = a+1; b <= n; b++) {
            let c = a & b;
            if((c > max) && (c < k)) {
                max =  c;
            }
        }
    }
    return max;
}

/**
input (stdin)
3
5 2
8 5
2 2

Expected Output
1
4
0
**/
