/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  var result = prompt("Do you want some cake?");
  var responseYes = "Enjoy!";
  var reponseReject = "Then I have all of them!".italics();

  if (result == "yes"){

    document.getElementById("response").innerHTML = responseYes;

  } else {

    document.getElementById("response").innerHTML = reponseReject;

  }


})();