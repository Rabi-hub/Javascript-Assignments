var city_name=prompt("Enter Your City Name");
if (city_name==="Karachi") {
alert("Welcome In The City oF Lights !");
}
else(alert ("Welcome"));
console.log(city_name);


var gender=prompt("Enter Your Gender");
if (gender==="Male", "male") {
alert("Welcome Sir !");
}
if  (gender==="Female") {
alert("Welcome Madam !");
}


var color = prompt("Enter a color of traffic signal");
if (color === "red")
{
alert("message is :" + "stop your vehicals")
}
else if (color === "yellow")
{ alert("message is :"+" get ready to move your vehicles.") } 
else if (color === "green")
 { alert("message is :"+" now you can move your vehicles .") }


var input = prompt("Enter a number:");
if (input % 2 === 0) {
    alert(input + " is an even number.");
}
 else {
    alert(input + " is an odd number.");
}



// var num=prompt("Enter A Number")
// if (num % 3 ==0){
//     alert("The Value is Divisible by 3")
// }
// else{
//     alert("The Value Is Not Divisible By 3")
// }


// var temp=prompt("Enter Your Number")
// if(temp>=40)
// {
//     alert("It's Too Hot");
// }
// else if (temp>=30){
//     alert("Wheather Today Normal");
// }

// else if (temp>=20){
//     alert("Wheather Today Normal");
// }

// else if (temp>=20){
//     alert("Wheather Today Cool");
// }


const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);
