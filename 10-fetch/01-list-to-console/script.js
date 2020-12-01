/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    // can use asynac function with await, codes are more elegant 

    // document.getElementById("run").addEventListener("click", async function(){

    //     const response = await fetch('https://restcountries.eu/rest/v2/all');
    //     const data = await response.json();
    //     console.log(data);
    // });

    

    document.getElementById("run").addEventListener("click", () => {

        fetch('https://restcountries.eu/rest/v2/all')
        .then (response => response.json())
        .then (data => console.log(data))

        .catch(error => {
            console.log(error);
        })

    })

     

})();