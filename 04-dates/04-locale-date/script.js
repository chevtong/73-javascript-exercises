/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let d = new Date();

    // weekday start 
    let weekday = new Array(7);
    weekday [0] = "Sunday"; 
    weekday [1] = "Monday"; 
    weekday [2] = "Tuesday"; 
    weekday [3] = "Wednesday"; 
    weekday [4] = "Thursday"; 
    weekday [5] = "Friday"; 
    weekday [6] = "Saturaday"; 

    let weekdayInEnglish = weekday[d.getDay()];

    // date start
    let date = d.getUTCDate();

    // month start
    let month = new Array (12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let monthInEnglish = month[d.getMonth()];

    // year start
    let year = d.getFullYear();

    // hour start
    let hour = d.getHours();

    // minutes start
    let min = d.getMinutes();




    document.getElementById("target").innerHTML = (weekdayInEnglish + " " + date + " " + monthInEnglish + " " + year + ", " + hour + "h" + min);

})();
