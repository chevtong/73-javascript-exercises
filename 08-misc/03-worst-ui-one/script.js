/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var slider = document.querySelector("#slider");

    var num = document.querySelector("#target");

    

    //oninput is an Event, activate once the element gets user input
    slider.oninput = function(){

        //value already given in the HTML
        num.innerHTML = slider.value;
    }

})();
