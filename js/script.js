
function tracker(){
    var firstNumber, secondNumber ,thirdNumber,output;
    

// formValues=document.getElementById("form1").value;
firstNumber=parseInt(document.getElementById("one").value);
secondNumber=parseInt(document.getElementById("two").value);
thirdNumber=parseInt(document.getElementById("three").value);


    if(firstNumber<=0||secondNumber<=0||thirdNumber<=0){
        output="Please enter positive numbers different from zero only";
    }
    else if((firstNumber + secondNumber <= thirdNumber &&
        secondNumber + firstNumber <= thirdNumber) ||
      (firstNumber + thirdNumber <= secondNumber &&
        thirdNumber + firstNumber <= secondNumber) ||
      (secondNumber + thirdNumber <= firstNumber && thirdNumber + secondNumber <= firstNumber)){
          output="This is not a triangle";
          

      }
  
    else if(firstNumber===secondNumber&&secondNumber===thirdNumber&&thirdNumber===firstNumber){
        output="This is an Equilateral triangle";
    }
    else if(firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber){
        output="This is an Isosceles triangle";
    }
    else if((firstNumber!==secondNumber) &&

      (firstNumber!==thirdNumber) &&
       
      (secondNumber!== thirdNumber)){
        output="This is a Scalene triangle";
    }
     else {
         output="error";
     }
    document.getElementById("result").innerHTML=output; 
}

