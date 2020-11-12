/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here

        var a = Number(document.getElementById("number").value); 
        var c = 1;

        if ( a == 0 || a == 1 ){
           
            document.getElementById('result').innerHTML = "1";

        } else if ( a < 1 ) {

            alert("Error");

            document.getElementById('result').innerHTML = "Error";

        } else {

            for ( let i = a; i > 0; i--){
                
                c = c*i;

               
            
            }

            console.log(c);
            // document.getElementById('result').innerHTML = c; 
        }
        
        
        
    });

})();
