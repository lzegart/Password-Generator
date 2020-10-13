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

var generateBtn = document.querySelector("#generate");

function writePassword() {
  alert("Hello, please answer the following questions to determine the right password for you. Ok is for yes, cancel is for no if there is nothing to enter.");
  var length = prompt("Please enter desired password length. Must be at least 8 characters.");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var numberic = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");
  var input = confirm("Password length is " + length + ". Password includes lowercase letters: " + lowercase + ". Password includes uppercase letters: " + uppercase + ". Password contains numbers: " + numberic + ". Password contains special characters: " + special + ".");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.value = password;

}



function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
