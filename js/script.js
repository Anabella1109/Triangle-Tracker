
function tracker(){
    var firstNumber, secondNumber ,thirdNumber, formValues ,text;
// formValues=document.getElementById("form1").value;
firstNumber=document.getElementById("one").value;
secondNumber=document.getElementById("two").value;
thirdNumber=document.getElementById("three").value;


    if(firstNumber<=0||secondNumber<=0||thirdNumber<=0){
        text="Please enter a positive number which is not zero";
    }
    else if(firstNumber===secondNumber&&secondNumber===thirdNumber){
        text="This is an Equilateral triangle";
    }
    else if(firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber){
        text="This is an Isosceles triangle";
    }
    else if(((firstNumber!==secondNumber)&&(secondNumber!==thirdNumber)&&(thirdNumber!==firstNumber))&&(((firstNumber + secondNumber) > thirdNumber) && ((firstNumber +thirdNumber) > secondNumber) &&((secondNumber + thirdNumber )> firstNumber))){
        text="This is a Scalene triangle";
    }
    else {
        output="This is not a triangle";
    }
    document.getElementById("result").innerHTML=text; 
    document.getElementById("result").innerHTML+=" ";
}
