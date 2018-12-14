//function definition
function tracker(){
    var firstNumber,secondNumber,thirdNumber,values; //declaring variables to store user inputs.
    var output; //creating variable to store the output
    
firstNumber=parseInt(document.getElementById("one").value);
secondNumber=parseInt(document.getElementById("two").value);
thirdNumber=parseInt(document.getElementById("three").value);// storing user input in variables

values=[firstNumber,secondNumber,thirdNumber];//putting variables in an array so they can  be turned in a string later
    if(firstNumber<=0||secondNumber<=0||thirdNumber<=0){
        output="Please enter positive numbers different from zero only";//checking if user's inputs are valid
        
    }
    else if((firstNumber + secondNumber <= thirdNumber &&
        secondNumber + firstNumber <= thirdNumber) ||                               
      (firstNumber + thirdNumber <= secondNumber &&                         //checking if triangle can't be formed by checking if sum of two values is less or equal to third part
        thirdNumber + firstNumber <= secondNumber) ||
      (secondNumber + thirdNumber <= firstNumber && thirdNumber + secondNumber <= firstNumber)){
          output="Not a triangle";
          

      }
  
    else if(firstNumber===secondNumber&&secondNumber===thirdNumber&&thirdNumber===firstNumber){              
        output="An Equilateral triangle";  //checking if triangle is equilateral by checking if all sides are equal
    }
    else if(firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber){
        output="An Isosceles triangle";    //checking if triangle is isosceles by checking if any two sides are equal
    }
    else if((firstNumber!==secondNumber) &&

      (firstNumber!==thirdNumber) &&            //checking if triangle is scalene by checking if no sides are equal
       
      (secondNumber!== thirdNumber)){
        output="A Scalene triangle";
    }
     else {
         output="error";
     }
     document.getElementById("result").innerHTML="Sides entered("+values.join()+")"+" form: ";//changing array of inputs into string and and displaying it on webpage
     document.getElementById("result").innerHTML+=output;  //displaying output 
    
    

}

