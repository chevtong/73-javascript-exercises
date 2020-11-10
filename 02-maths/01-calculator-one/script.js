/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    
       // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function () {
        // perform an addition

        
    let x, y ,total;
    x = parseFloat(document.getElementById("op-one").value);
    y = parseFloat(document.getElementById("op-two").value);   

    total = x + y;

    alert(total);

    console.log("x : "+ x);
    console.log("y : "+ y);
    console.log("result ="+total);
             
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

    let x, y ,total;
    x = parseFloat(document.getElementById("op-one").value);
    y = parseFloat(document.getElementById("op-two").value);    
    total = x - y;

    alert(total);

    console.log("x : "+ x);
    console.log("y : "+ y);
    console.log("result ="+total);
    
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication

    let x, y ,total;
    x = parseFloat(document.getElementById("op-one").value);
    y = parseFloat(document.getElementById("op-two").value);    
    total = x * y;

    alert(total);

    console.log("x : "+ x);
    console.log("y : "+ y);
    console.log("result ="+total);
            

    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division

        let x, y ,total;
    x = parseFloat(document.getElementById("op-one").value);
    y = parseFloat(document.getElementById("op-two").value);    
    total = x / y;

    alert(total);

    console.log("x : "+ x);
    console.log("y : "+ y);
    console.log("result ="+total);
        

    });
})();
