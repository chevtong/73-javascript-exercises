/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here



 
function submitDob(){

        var date = document.getElementById("dob-day");
        var dateInput = date.options[date.selectedIndex].value;

        var month = document.getElementById("dob-month");
        var monthInput = month.options[month.selectedIndex].value;
        
        var year = document.getElementById("dob-year");
        var yearInput = year.options[year.selectedIndex].value;

        var d = new Date();
        var thisYear = d.getFullYear();
        var thisMonth = d.getMonth();
        var thisDate = d.getDate();

        var age = thisYear - yearInput;

        var month = thisMonth - monthInput;

        if (month < 0 || (month === 0 && thisDate < dateInput)){

            age--;

            
            document.getElementById("result").innerHTML = "You are " + age + " years old.";

        } else{

           
            document.getElementById("result").innerHTML = "You are " + age + " years old.";


        }


};


