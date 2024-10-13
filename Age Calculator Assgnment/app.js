var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth() + 1; 
var currentDay = today.getDate();

var userBirthDate = prompt("Enter your birthdate (YYYY-MM-DD): ");

var birthDateParts = userBirthDate.split("-");
var birthYear = parseInt(birthDateParts[0]);
var birthMonth = parseInt(birthDateParts[1]);
var birthDay = parseInt(birthDateParts[2]);

var age = currentYear - birthYear;

if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
}alert("You are " + age + " years old.");
