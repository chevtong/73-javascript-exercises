/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){

        // const person = {
        //     lastname: "Tong",
        //     firstname: "Wing",
        //     age: 32,
        //     city: "Brussels",
        //     country: "Belgium",
        // }

        // console.log("Hi! I am " + person.firstname +" "+ person.lastname + ", " + person.age + "years old. I live in " + person.city +", " + person.country + ".");


        let person = new Object();

        person.lastname = "Tong";
        person.firstname = "Wing";
        person. age = 32;
        person.cit = "Brussels";
        person.country = "Belgium ";

        console.log("Hi! I am " + person.firstname +" "+ person.lastname + ", " + person.age + "years old. I live in " + person.city +", " + person.country + ".");



    });

})();
