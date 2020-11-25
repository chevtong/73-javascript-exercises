/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //USE KEYUP AS AN EVENTLISTENR TO COUNT ON THE KEYBOARD INPUT AND START FUNCTION
    document.querySelector("#pass-one").addEventListener("keyup", function(){

    
        let pwdValue = document.querySelector("#pass-one").value;
        let number = /1-9/g;
        
        if (pwdValue.match(number) &&  pwdValue.length > 7){

            console.log("two number + long enough");

        } else {
            console.log("error");
        }

        // let regex = "^((?=.*\d){2}).(?=.{8,})";

        // if (pwdValue.match(regex)) {

        //     return true;
        
        
        // } else { 
        //     return false; 
            
        // }
        
    
        /**
         * (?=.*\d)         should contain at least 1 digit
         * (?=(.*\W){2})    should contain at least 2 special characters
         * (?=.*[a-zA-Z])   should contain at least 1 alphabetic character
         * (?!.*\s)         should not contain any blank space
         */

    });
   
    

})();



