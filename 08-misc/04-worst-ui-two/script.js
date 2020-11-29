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

    // let minValue; 
    // let maxValue;
        


    // let btns = document.querySelectorAll("button");
    
    // btns.forEach((btn) => {

        
    
    //     minValue = btn.getAttribute("data-min");
    //     maxValue = btn.getAttribute("data-max");


    //     btn.addEventListener("click", function(){
    //         //TODO: need to show on the button as well
    //         //innertext? 
    //         // show the updated value everytime the btn is clicked 
           
    //         let currentValue = minValue;

    //         if (currentValue < maxValue){
        
    //            // addValue();
               
    //             currentValue ++;
    //             console.log(currentValue);
        
               
    //             let display = document.getElementsByTagName("button");
    //                     display.innerText = currentValue;
        
        
        
        
                
        
    //         } else {
    //             currentValue = maxValue;
    //         }
        

        
    //     });

    // });









    let target = document.querySelector("#target");

    //btn1         
    let btn1 = document.querySelector("#part-one");
    let btn1Value = btn1.getAttribute("data-min");
    let btn1max = btn1.getAttribute("data-max");

    btn1.addEventListener("click", function(){

        let i=btn1Value; 
        
        if (i < btn1max){

            btn1Value++;

            display();
        }
        

    })

    let btn2 = document.querySelector("#part-two");
    let btn2Value = btn2.getAttribute("data-min");
    let btn2max = btn2.getAttribute("data-max");   

    btn2.addEventListener("click", function(){
        let i = btn2Value; 

        if (i < btn2max){

            btn2Value++;

            if (btn2Value < 10){
                btn2Value = "0" + btn2Value;
            }

            display();
        }
        

    })

    let btn3 = document.querySelector("#part-three");
    let btn3Value = btn3.getAttribute("data-min");
    let btn3max = btn3.getAttribute("data-max");   

    btn3.addEventListener("click", function(){
        let i=btn3Value; 
        
        if (i < btn3max){

            btn3Value++;

            if (btn3Value < 10) {
                btn3Value = "0" + btn3Value;
            }

            display();
        }
        

    })

    let btn4 = document.querySelector("#part-four");
    let btn4Value = btn4.getAttribute("data-min");
    let btn4max = btn4.getAttribute("data-max");   

    btn4.addEventListener("click", function(){
        let i=btn4Value; 
        
        if (i < btn4max){

            btn4Value++;

            if(btn4Value < 10){

                btn4Value = "0" + btn4Value;
            }

            display();

        }
        

    })

    function display(){

        target.innerText="+" + btn1Value+ "" + btn2Value + "" + btn3Value + ""+ btn4Value;
     
    }



})();
