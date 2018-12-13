
function tracker(){
    var firstNumber, secondNumber ,thirdNumber,output;
// formValues=document.getElementById("form1").value;
firstNumber=document.getElementById("one").value;
secondNumber=document.getElementById("two").value;
thirdNumber=document.getElementById("three").value;


    if(firstNumber<=0||secondNumber<=0||thirdNumber<=0){
        output="Please enter a positive different from zero only";
    }
    else if(firstNumber===secondNumber&&secondNumber===thirdNumber){
        output="This is an Equilateral triangle";
    }
    else if(firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber){
        output="This is an Isosceles triangle";
    }
    else if(((firstNumber!==secondNumber)&&(secondNumber!==thirdNumber)&&(thirdNumber!==firstNumber))&&(((firstNumber + secondNumber) > thirdNumber) && ((firstNumber +thirdNumber) > secondNumber) &&((secondNumber + thirdNumber )> firstNumber))){
        outputt="This is a Scalene triangle";
    }
    else {
        output="This is not a triangle";
    }
    document.getElementById("result").innerHTML=output; 
    document.getElementById("result").innerHTML+=" ";
}
