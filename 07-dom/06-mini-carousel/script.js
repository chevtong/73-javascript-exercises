/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    // if varible put inside the click function, i will be always = 1 
    // if using a loop, the click function will only show the last value of the loop
   let i = 0;
   
    document.querySelector("#next").addEventListener("click", function(){

        let image = document.querySelector("img");


        image.src = gallery[i];

        if ( i === 4){

            i = 0;

        }else{

            i++;
        }


    });


})();
