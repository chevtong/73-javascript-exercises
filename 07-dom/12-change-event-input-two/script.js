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

        //USE REGULAR EXPRESSION WITH 2 DIGITS REQUIRED
        let regex = /^(?=.*?[0-9].*?[0-9])[0-9a-zA-Z!@#$%0-9]{8,}$/gm;

        if (regex.test(pwdValue)){

            console.log("OK"); 
            document.querySelector(".indicator").textContent = "ok";

        } else {
            
            console.log("Not ok"); 
            document.querySelector(".indicator").textContent = "Not ok";

        }
     
    });
   
    

})();



