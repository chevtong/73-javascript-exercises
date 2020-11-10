/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//  

    // your code here
    var btnRed = document.querySelector("#red");
    var btnGreen = document.querySelector("#green");
    var btnYellow = document.getElementById("yellow");
    var btnBlue = document.getElementById("blue");

    btnRed.addEventListener('click', () =>{
        document.body.style.background = '#f05454';
    })

    btnGreen.addEventListener('click', () =>{
        document.body.style.background = '#cee397';
    })

    btnYellow.addEventListener('click', () =>{
        document.body.style.background = '#fcf876';
    })

    btnBlue.addEventListener('click', () =>{
        document.body.style.background = '#8bcdcd';
    })

