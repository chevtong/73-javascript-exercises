/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let img = document.querySelector("img");
    let originalImg = img.getAttribute("src");
    let hoverImg = img.getAttribute("data-hover");

 
    //use event mouseover and mouseout to change the src of image
    img.addEventListener("mouseover", function(){

        img.src = hoverImg;

    })

    img.addEventListener("mouseout", function(){

        img.src = originalImg;
    })



})();
