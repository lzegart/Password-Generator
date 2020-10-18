var numberic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "<", ">", "?", "/", "~"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {

alert("Hello, please answer the following questions to determine the right password for you. Ok is for yes, cancel is for no if there is no text to enter.");

var length = prompt("Please enter desired password length. Must be at least 8 characters.");
  if(length < 8 || length > 128 || isNaN(length)) {
    alert("Not a valid length.")
  } else {
    console.log("continue")

var lowercaseTrue = confirm("Do you want lowercase letters in your password?");
var uppercaseTrue = confirm("Do you want uppercase letters in your password?");
var numbericTrue = confirm("Do you want numbers in your password?");
var specialTrue = confirm("Do you want special characters in your password?");
console.log(lowercaseTrue, uppercaseTrue, numbericTrue, specialTrue)

var userChoices = [];

if(lowercaseTrue) {userChoices.push(lowercase)}
if(uppercaseTrue) {userChoices.push(uppercase)}
if(numbericTrue) {userChoices.push(numberic)}
if(specialTrue) {userChoices.push(special)}
console.log(userChoices)

var input = confirm("Password length is " + length + ". Password includes lowercase letters: " + lowercaseTrue + ". Password includes uppercase letters: " + uppercaseTrue + ". Password contains numbers: " + numbericTrue + ". Password contains special characters: " + specialTrue + ".");
  if(input.confirm === true) {
    writePassword
  }
}
});

// Write password to the #password input
// function writePassword() {
  
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   for (let i = 0; i < userChoices.length; i++) {
//     let rand = Math.floor(Math.random()*userChoices[i].length)
//     console.log(userChoices[i][rand])
//   }
//   console.log()

//   passwordText.value = password;
//    }


// function generatePassword() {
//   for (i = 0; i >= 8; i++)
//   var 
// }

