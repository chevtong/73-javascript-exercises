/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let sentence = document.querySelectorAll(".target");

    // DO WITH A FOR LOOP
    // for (let i = 0; i < sentence.length; i++){
    //     sentence[i].innerHTML = "owned";
    // }

    
    //DO WITH A FOREACH 
    sentence.forEach(x => {
        x.innerHTML = "owned";
    })





})();
