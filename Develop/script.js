/*
goal: generate a secure password
  1. Start building password when button is clicked
    - add event listener to generate button (supplied)
    - call generate password function (supplied)
  2. Prompt user for length and character types
    - define generate password function
    - use prompts and confirms to get user preferences
  3. Generate password with user criteria
    - Make array for length of characters (8-128)
    - Make array for special characters
    - Make sure user selects at least one character type (uppercase, lowercase, numberic, special charaters)
  4. Display password to user (supplied)
    - Alert of written to page
*/ 



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("Hello")
  var length = prompt("please enter length")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.value = password;

}

function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
