/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.querySelector("#target");

    //btn1         
    let btn1 = document.querySelector("#part-one");
    let btn1Value = btn1.getAttribute("data-min");
    let btn1max = btn1.getAttribute("data-max");

    btn1.addEventListener("click", function(){

        if (btn1Value < btn1max){

            btn1Value++;

            display();
        }
        
    })

    //btn2
    let btn2 = document.querySelector("#part-two");
    let btn2Value = btn2.getAttribute("data-min");
    let btn2max = btn2.getAttribute("data-max");   

    btn2.addEventListener("click", function(){

        if (btn2Value < btn2max){

            btn2Value++;

            if (btn2Value < 10){
                btn2Value = "0" + btn2Value;
            }

            display();
        }      

    })

    //btn3
    let btn3 = document.querySelector("#part-three");
    let btn3Value = btn3.getAttribute("data-min");
    let btn3max = btn3.getAttribute("data-max");   

    btn3.addEventListener("click", function(){
        
        if (btn3Value < btn3max){

            btn3Value++;

            if (btn3Value < 10) {
                btn3Value = "0" + btn3Value;
            }

            display();
        }
        
    })

    //btn4
    let btn4 = document.querySelector("#part-four");
    let btn4Value = btn4.getAttribute("data-min");
    let btn4max = btn4.getAttribute("data-max");   

    btn4.addEventListener("click", function(){
       
        if (btn4Value < btn4max){

            btn4Value++;

            if(btn4Value < 10){

                btn4Value = "0" + btn4Value;
            }

            display();

        }
        

    })

    // tel num display function
    function display(){

        target.innerText="+" + btn1Value+ "" + btn2Value + "" + btn3Value + ""+ btn4Value;
     
    }



})();


  

    //TODO: figure out how to use forEach() for this exercise ...! 

    // let btns = document.querySelectorAll("button");
    
    // btns.forEach((btn) => {

    //     btn.addEventListener("click", function(){
    //       
    //         let currentValue = btn.getAttribute("data-min");
    //         let maxValue = btn.getAttribute("data-max");         
                    
    //             if (currentValue < maxValue){
    
    //                 currentValue++;
    
    //                 let newCurrentValue = currentValue[];
            
    //                 console.log(newCurrentValue);
    //             }
 
    //     });

    // });


