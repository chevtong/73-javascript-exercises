/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){

    // your code here

    let yearInput = document.getElementById('year').value;
    let d = new Date(yearInput);

       


    let date = d.setDate();
    let weekday = d.getDay();
    let month = d.setMonth();
   

    
    for (  let i = 0; i < 12; i++){

        month(i) = month;

        if (date == 13 && weekday == 5) {

            console.log (true);
            
        }
    }    
   


});
})();
