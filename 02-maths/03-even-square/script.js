/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here

        var text = "";
        var number; 

        for (number = 1; number <22; number++) {
            text += "The square of " + number + " is " + Math.pow(number, 2) + "</br>";
        }

            console.log(text);

         document.getElementById("result").innerHTML = text;
            
            
        

        
  
        

        
    });

})();

