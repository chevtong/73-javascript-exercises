/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    
    let text = document.querySelector("#target").innerText;
    console.log (text);

    let textArray = text.split("");
    console.log (textArray);

    document.querySelector("#target").innerText = "";


  
    // for (let i=0; i < textArray.length; i++){

        // let font = i % 8; 
        // let result = textArray[i].fontsize(font); 

        // document.querySelector("#target").innerHTML += result;

        // }


    textArray.forEach(function(letter, i){

        let font = i % 8; 
        let result = textArray[i].fontsize(font); 

        document.querySelector("#target").innerHTML += result;

    })


})();
