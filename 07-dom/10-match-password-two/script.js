/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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

        let pwdBox = document.querySelector("#pass-one");
        let pwdBox2 = document.querySelector("#pass-two");
    
        if (pwd !== pwd2){
            console.log("not the same");
            
            pwdBox.classList.add("error");
            pwdBox2.classList.add("error");

        };
    
    });

})();
