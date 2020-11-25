/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.querySelector("#run").addEventListener("click", function(){

    let pwd = document.querySelector("#pass-one").value;
    let pwd2 = document.querySelector("#pass-two").value;
    console.log(pwd);
    console.log(pwd2);

    if (pwd !== pwd2){
        console.log("not the same");

        // CAN USE THE INLINE STYLES
        // document.querySelector("#pass-one").style.borderColor = "red";
        // document.querySelector("#pass-two").style.borderColor = "red";


        //AND ALSO SETATTRIBUTES() METHOD
        document.querySelector("#pass-one").setAttribute("style", "border-color:red");
        document.querySelector("#pass-two").setAttribute("style", "border-color:red");
        // ref site: https://www.javascripttutorial.net/javascript-dom/javascript-style/
    }

    })



})();
