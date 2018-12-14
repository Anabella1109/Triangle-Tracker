
function tracker(){
    var firstNumber,secondNumber,thirdNumber,values,output;
    
    
firstNumber=parseInt(document.getElementById("one").value);
secondNumber=parseInt(document.getElementById("two").value);
thirdNumber=parseInt(document.getElementById("three").value);

values=[firstNumber,secondNumber,thirdNumber];
    if(firstNumber<=0||secondNumber<=0||thirdNumber<=0){
        output="Please enter positive numbers different from zero only";
        
    }
    else if((firstNumber + secondNumber <= thirdNumber &&
        secondNumber + firstNumber <= thirdNumber) ||
      (firstNumber + thirdNumber <= secondNumber &&
        thirdNumber + firstNumber <= secondNumber) ||
      (secondNumber + thirdNumber <= firstNumber && thirdNumber + secondNumber <= firstNumber)){
          output="Not a triangle";
          

      }
  
    else if(firstNumber===secondNumber&&secondNumber===thirdNumber&&thirdNumber===firstNumber){
        output="An Equilateral triangle";
    }
    else if(firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber){
        output="An Isosceles triangle";
    }
    else if((firstNumber!==secondNumber) &&

      (firstNumber!==thirdNumber) &&
       
      (secondNumber!== thirdNumber)){
        output="A Scalene triangle";
    }
     else {
         output="error";
     }
     document.getElementById("result").innerHTML="Sides entered("+values.join()+")"+" form: ";
    document.getElementById("result").innerHTML+=output; 
    
    

}

