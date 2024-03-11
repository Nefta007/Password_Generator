// Assignment Code
var generateBtn = document.querySelector("#generate");
upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
finalPassword = [];
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var numberChoice = window.prompt('Please pick length of password. (must be between 8 to 128 characters long)');
  var lowerLetterChoice = window.prompt('Would you like to include lowercase letters in your password?');
  var upperLetterChoice = window.prompt('Would you like to include upper letters in your password');
  var specialChoice = window.prompt('Would you like to include special characters in your password?');
  var numberChoice = window.prompt('would you like to include numbers in your password?');

  // if nothing is chosen end function
  if(!lowerLetterChoice && upperLetterChoice && specialChoice && numberChoice){
    return;
  }

  // will varify if password has lowercase letters
  if(lowerLetterChoice === 'Y' || lowerLetterChoice ==='y' || lowerLetterChoice === 'yes' || lowerLetterChoice === 'Yes'){
    finalPassword = finalPassword.concat(lowerChar);
    console.log(finalPassword);
  }
  else{
    console.log('You have chosen to add lowercase letters');
  }

  // will varify if password will have uppercase letters
  if(upperLetterChoice === 'Y' || upperLetterChoice ==='y' || upperLetterChoice === 'yes' || upperLetterChoice === 'Yes'){
    finalPassword = finalPassword.concat(upperChar);
    console.log(finalPassword);
  }
  else{
    console.log('You have chosen to add uppercase letters');
  }

  // will varify if password has special characters
  if(specialChoice === 'Y' || specialChoice ==='y' || specialChoice === 'yes' || specialChoice === 'Yes'){
    finalPassword = finalPassword.concat(specialChar);
    console.log(finalPassword);
  }
  else{
    console.log('You have chosen to add special characters');
  }

  // will varify if password has numbers
  if(numberChoice === 'Y' || numberChoice ==='y' || numberChoice === 'yes' || numberChoice === 'Yes'){
    finalPassword = finalPassword.concat(numChar);
    console.log(finalPassword);
  }
  else{
    console.log('You have chosen to add numbers');
  }
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
