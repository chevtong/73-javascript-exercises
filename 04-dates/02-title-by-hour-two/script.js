/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let greeting;

    
    

   if ( hour >= 12 && min >= 30 ){

        greeting = "Good evening!";
    
   } 
   
   else if (hour >= 13) {

     greeting =  "Good evening!";

   }
   
   else {

        greeting = "Hello!";
   }

   console.log(hour,min);
   console.log(greeting);

   document.getElementById("target").innerHTML = greeting.italics();



})();
