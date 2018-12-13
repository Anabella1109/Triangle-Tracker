var firstNumber, secondNumber ,thirdNumber,formValues,text;
formValues=document.getElementById("form1").value;


function tracker(){
    if(firstNumber<=0||secondNumber<=0||thirdNumber<=0){
        text="Please enter a positive number which is not zero";
    }
    else if(firstNumber===secondNumber&&secondNumber===thirdNumber){
        text="This is an Equilateral triangle";
    }
    else if(firstNumber===secondNumber||firstNumber===thirdNumber||secondNumber===thirdNumber){
        text="This is an Isosceles triangle";
    }
    else if(((firstNumber!==secondNumber)&&(secondNumber!==thirdNumber)&&(firstNumber!==thirdNumber))&&(((firstNumber+secondNumber)>thirdNumber))&&((firstNumber+thirdNumber)>secondNumber)&&((secondNumber+thirdNumber)>firstNumber)){
        text="This is a Scalene triangle";
    }
    document.getElementById("result").innerHTML=text;
}
