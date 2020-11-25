/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
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

        //SET THE MAXLENGTH FOR THE INPUT
        let pwdValue = document.querySelector("#pass-one").value;
        
        document.querySelector("#pass-one").maxLength = "10";
        //console.log("pwd: " + pwdValue + " length: " + pwdValue.length);

        //CHANGE INPUT OF COUNTER ACCORDING TO THE LENGHT
        let counter = document.querySelector("#counter");

        counter.innerHTML = pwdValue.length + "/10";

    })
   




})();
