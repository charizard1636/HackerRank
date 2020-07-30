

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(dateString);
    dayName = days[d.getDay()];

    return dayName;
}

/**
Input (stdin)
2
10/11/2009
11/10/2010

Expected Output
Sunday
Wednesday
**/
