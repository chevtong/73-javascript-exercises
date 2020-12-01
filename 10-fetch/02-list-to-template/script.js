/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", async() => {


    const response = await fetch('http://localhost:3000/heroes');
    const data = await response.json();


    console.log(data);

    data.forEach(hero => {
        let name = hero.name;
        let alterEgo = hero.alterEgo;
        let abilities = hero.abilities;

        // console.log(name);

        document.getElementById("target").innerHTML += `Name: ${name} <br> Alter ego: ${alterEgo}  <br> Abilities ${abilities} <br> <br> `;
        document.getElementById("target").style.textAlign = "left";

        
    });



})