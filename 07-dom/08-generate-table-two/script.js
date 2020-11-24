/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.querySelector("#target");
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (var i = 0; i < 10; i++){

        let tr = document.createElement("tr");

        for(var j =0; j<10; j++){

            let td = document.createElement("td");

            //put the text inside the td element
            let num = document.createTextNode((i+1)*(j+1));

            td.appendChild(num);
            tr.appendChild(td);
        }
        
        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    target.appendChild(table);

    

})();
