// Assignment Code
var generateBtn = document.querySelector("#generate");
upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
finalPassword = [];
var fixedPassword = [];
var FinalString;

function PasswordGenerator() {
  alert('The following criteria will establish your own password. For following criteria please type y for yes and n for no')
  var lowerLetterChoice = window.prompt('Would you like to include lowercase letters in your password?');
  var upperLetterChoice = window.prompt('Would you like to include upper letters in your password');
  var specialChoice = window.prompt('Would you like to include special characters in your password?');
  var numberChoice = window.prompt('would you like to include numbers in your password?');
  var passwordLength = window.prompt('Please pick length of password. (must be between 8 to 128 characters long)');

  // if nothing is chosen end function
  if(!lowerLetterChoice && upperLetterChoice && specialChoice && numberChoice && !passwordLength){
    return;
  }

  // will varify if password has lowercase letters
  if(lowerLetterChoice ==='y'){
    finalPassword = finalPassword.concat(lowerChar);
    alert('You have chosen to add lowercase letters');
    console.log(finalPassword);
  }
  else if(lowerLetterChoice ==='n'){
    alert('You have chosen to not add lowercase letters');
  }

  // will varify if password will have uppercase letters
  if(upperLetterChoice ==='y'){
    finalPassword = finalPassword.concat(upperChar);
    alert('You have chosen to add uppercase letters');
    console.log(finalPassword);
  }
  else if(upperLetterChoice ==='n'){
    alert('You have chosen to not add lowercase letters');
  }

  // will varify if password has special characters
  if(specialChoice ==='y'){
    finalPassword = finalPassword.concat(specialChar);
    alert('You have chosen to add special characters');
    console.log(finalPassword);
  }
  else if(specialChoice ==='n'){
    alert('You have chosen to not add special characters');
  }

  // will varify if password has numbers
  if(numberChoice ==='y'){
    finalPassword = finalPassword.concat(numChar);
    alert('You have chosen to add numbers');
    console.log(finalPassword);
  }
  else if(numberChoice ==='n'){
    alert('You have chosen to not add numbers');
  }

  // if password length is not between 8 and 128 characters long then keep asking for user input until correct length is put in.
  while(passwordLength < 8 || passwordLength > 128){
    alert("Please make sure that your password is at  least 8 characters long and at most is 128 characters long");
    var passwordLength = prompt("How long would you like the password to be (has to be longer than 8 character and shorter than 128 characters)");
  }
  alert('You password will be ' + passwordLength + " long");

  // this will make sure that at least one criteria is met
  if(upperLetterChoice === 'n' && lowerLetterChoice === 'n' && specialChoice === 'n' && numberChoice === 'n'){
    alert('You must choose at least one criteria');
    PasswordGenerator();
  }

  // will iterate through array in order to create a new password
  for(var i = 0; i < passwordLength; i++){
    var randomPassword = finalPassword[Math.floor(Math.random() * finalPassword.length)]; //this will randomely select characters from array
    fixedPassword.push(randomPassword); //will push characters into new variable
    console.log(fixedPassword);
  }
  FinalString = fixedPassword.join(""); //will get rid of commas in b/w
  console.log(FinalString);
  return FinalString;
}
// Write password to the #password input
function writePassword() {
  var password = PasswordGenerator();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
