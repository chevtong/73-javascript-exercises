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
    let d = new Date();

    let counter = 0;


    function fridayThirteen(year){

    
        for(month = 0; month < 12; month++){

         d.setFullYear(yearInput, month, 13);

            if (d.getDay() == 5){
              
              console.log(month++);
              counter++;

            };
        };
    
        return counter;      
                       
    }

    fridayThirteen(yearInput);
   


});
})();
