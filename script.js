// Assignment Code
var generateBtn = document.querySelector("#generate");
upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '', '', '', '', '', '']
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var lowerLetterChoice = window.prompt('Would you like to include lowercase letters in your password');
  var upperLetterChoice = window.prompt('Would you like to include upper letters in your password');
  var specialChoice = window.prompt('Would you like to include special characters in your password?');
  var numberChoice = window.prompt('would you like to include numbers in your password?')
  if(!lowerLetterChoice && upperLetterChoice && specialChoice && numberChoice){
    return;
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
