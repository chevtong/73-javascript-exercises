/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

       
    var name = prompt("Your Name?");
    var gender = prompt("Your Gender?");
    var town = prompt ("Your Town?");

    var reconfirm = confirm ( name + ", " + gender +", " + town + ", " + "\nPlease confirm are they correct?" );

    
    if (reconfirm == false) {
        location.reload();
    } 
      else {
        thanks = "Thank you for your info";
      } 

      document.getElementById("demo").innerHTML = thanks;

 })();

