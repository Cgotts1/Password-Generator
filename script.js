// Assignment Code
var generateBtn = document.querySelector("#generate");



/* Logic goes in here and will return random password*/



function randomLowerCaseLetter(){
var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
return lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];  //Function to get random lower case letter source: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
}

function randomUpperCaseLetter(){
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];  // Function to get random upper case letter
}


function randomSpecialCharacter(){
  var specialCharacter = "~`!@#$%^&*()-_+={}[]|/\:;\"'<>,.?";
  return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];     // Function to get random special character
}
  

function randomNumericCharacter(){
  var numericCharacter = "0123456789";
  return numericCharacter[Math.floor(Math.random() * numericCharacter.length)];     // Function to get random numeric character
}




// https://www.codecademy.com/forum_questions/53bc71d78c1ccca3d300045a   prompt info


passwordValid = 

function promptOne(){
var passwordValid = true;

if (passwordValid < 8){
  console.log(alert("Must be at least 8 characters and no more than 128 characters"))
}
if (passwordValid > 128){
  console.log(alert("Must be at least 8 characters and no more than 128 characters"))
}
else {
  console.log(confirm("Click Ok to include special characters." + randomLowerCaseLetter()))
}
}



















// function generatePassword(){                     Writes the main code 







// }

// numberOfCharacter
  /*
var numberOfCharacters = prompt("Please choose how many characters you'd like for you password.")

if (numberOfCharacters < 8 || numberOfCharacters > 128){
console.log(alert("Must be at least 8 characters and no more than 128 characters"));
} else { confirm("Click Ok to include special characters.");
}     */










/* console.log(Math.floor(Math.random() * 26))     Generates random number from 1-26 (english alphabet) */ 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;                       /* Inserts password text   */

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);                    /* Enables random password to generate when button clicked  */


           