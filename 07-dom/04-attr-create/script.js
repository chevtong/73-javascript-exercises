/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //get the url of the image
    let span = document.querySelector("#source");
    let link = span.getAttribute("data-image");

    console.log(link);


    //create new image element 
    let target = document.querySelector("#target"); 
    let image = document.createElement("img");

    image.src = link;
  
    target.appendChild(image);


    //remove original element
    span.remove();

})();
