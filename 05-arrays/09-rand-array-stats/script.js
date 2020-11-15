/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




    // your code here



    document.getElementById("run").addEventListener("click", function(){

    const randomArray = [];

    for (let i = 0; i < 10; i++) {
        
        randomArray.push(Math.floor((Math.random() * 100 ) + 1 )) 
    
    };

    // Can also use the Array.from() here
    // let randomArray = Array.from({length: 10}, () => (Math.floor((Math.random() * 100 ) + 1 )) );


    document.getElementById("n-1").innerHTML = randomArray[0];
    document.getElementById("n-2").innerHTML = randomArray[1];
    document.getElementById("n-3").innerHTML = randomArray[2];
    document.getElementById("n-4").innerHTML = randomArray[3];
    document.getElementById("n-5").innerHTML = randomArray[4];
    document.getElementById("n-6").innerHTML = randomArray[5];
    document.getElementById("n-7").innerHTML = randomArray[6];
    document.getElementById("n-8").innerHTML = randomArray[7];
    document.getElementById("n-9").innerHTML = randomArray[8];
    document.getElementById("n-10").innerHTML = randomArray[9];
  

console.log(randomArray);

    document.getElementById("min").innerHTML = Math.min(...randomArray);
    document.getElementById("max").innerHTML = Math.max(...randomArray);


    // calculating the sum by array.reduce()
    // const sum = array.reduce((accumulator, currentValue) => {
    // return accumulator + currentValue; });
    const sumOfArray = randomArray.reduce((a , b) => a + b);

    document.getElementById("sum").innerHTML = sumOfArray;



    const average = sumOfArray / randomArray.length; 

    document.getElementById("average").innerHTML = average;
  
        
        

});

    
   


