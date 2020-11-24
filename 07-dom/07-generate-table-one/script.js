/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let container = document.querySelector("#target");

    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i <10; i++ ){

        var row = document.createElement("tr");

        var cell = document.createElement("td");
        cell.style.border="5px solid red";

        var text = document.createTextNode(i+1);



        //append(s) text=>cell->row->tblbody->table->div
        cell.appendChild(text);
        row.appendChild(cell);
        tblBody.appendChild(row);

    };   

    table.appendChild(tblBody);

    container.appendChild(table);





})();
