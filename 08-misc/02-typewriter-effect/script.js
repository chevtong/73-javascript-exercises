/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.querySelector("#target");
    let text = target.innerHTML;
  
    //TO REMOVE THE TEXT IN TARGET
    target.innerHTML = "";

    //IF PUT IT I=0 INSIDE if ,THE FIRST LETTER WILL BE MISSING
    let i = 0;

    function typingEffect(){
            
        if (i < text.length){

            //PRINT OUT THE FIRST LETTER
            target.innerHTML += text.charAt(i);

            //THEN i++, IF NOT, FIRST LETTER WILL BE MISSING
            i++;

            //IF SPEED VARIABLE IS SET OUTSIDE THE FUNCTION, 
            //IT WILL JUST GET ONE RANDOM NUM EACH TIME TO RUN THE FUNCTION
            let speed = Math.floor(Math.random()*300);

            setTimeout(typingEffect, speed);
        }

    }
    typingEffect();

})();
