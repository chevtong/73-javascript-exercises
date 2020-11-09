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

    // your code here
    var name = prompt("Your Name?");
    var gender = prompt("Your Gender?");
    var town = prompt ("Your Town?");

    var reconfirm = confirm ( name + ", " + gender +", " + town + ", " + "\nPlease confirm are they correct?" );

    if (reconfirm == true) {
        thanks = "Thank you for your info";
    } 
      else {
        var name = prompt("Your Name?");
        var gender = prompt("Your Gender?");
        var town = prompt ("Your Town?");

        var reconfirm = confirm ( name + ", " + gender +", " + town + ", " + "\nPlease confirm are they correct?" );
    }

      document.getElementById("demo").innerHTML = thanks;

})()
