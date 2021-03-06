/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "seagull", num: 1},
        {name: "raven", num: 3},
        {name: "chickadee", num: 2},
        {name: "owl", num: 4},
        {name: "buzzard", num: 8},
        {name: "pigeon", num: 1},
        {name: "magpie", num: 3},
        {name: "vulture", num: 2},
        {name: "falcon", num: 1},
        {name: "robin", num: 2},
        {name: "dove", num: 1},
        {name: "crow", num: 5},
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", function(){

    // First, Use the spread operator to transform a set into an Array.
    let adjectivesArray = [...adjectives];

    // Get random value from the objective array, |0 works like Math.floor()
    let randObj = adjectivesArray[(Math.random() * adjectivesArray.length) | 0];
   
    // Get random value from the birds array, |0 works like Math.floor()
    let randBirds = birds[(Math.random() * birds.length) | 0];


    if (randBirds.num == 1){
        txt = `A ${randObj} ${randBirds.name}`;
    } else {
        txt = `A few ${randObj} ${randBirds.name}s`;
    }

    document.getElementById("target").textContent = txt;
    
    






    });



})();
