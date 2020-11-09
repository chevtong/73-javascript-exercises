/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// (function() {

//   var cake =  prompt("Do you want some cake?");
//   if (cake.toLowerCase() == "yes") {
//     alert("Congrats!")
//   } else {
//       alert("Your loss, more for me then!")
//     }

// })();


(function() {

  // your code here
  var question = prompt("Do you want some cake?", "yes or no");

  if (question == "yes") {
    alert("congratulation!")
  }
  else {
    alert("More cake for me then :p !")
  }

})();

