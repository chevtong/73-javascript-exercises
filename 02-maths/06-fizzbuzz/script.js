/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
  

    var number = 1; 

    for (number = 1; number <101; number++) {

        if ( number % 3 == 0){ 

        console.log("fizz");

        } else if ( number % 5 == 0){

            console.log("buzz");
        
        }   else if (number % 3 == 0 && number % 5 == 0) {

            console.log ("fizzbuzz");

        }   else {
            
            console.log (number);
        }
        
        
       


        }

        


})();
