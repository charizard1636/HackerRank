

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let radius = readLine();
    let area = PI * (Math.pow(radius, 2));
    let perimeter = 2 * PI * radius;
    // Print the area of the circle:
    console.log(area); 
    // Print the perimeter of the circle:
    console.log(perimeter);


/**
Input (stdin)
2.6

Expected Output
21.237166338267002
16.336281798666924
**/
