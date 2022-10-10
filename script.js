var specialCharacter = "~`!@#$%^&*()-_+={}[]|/\:;\"'<>,.?";
var specCharSplit = specialCharacter.split('');             //Turns string to an array

var numericCharacter = "0123456789";
var numCharSplit = numericCharacter.split('');              //Turns string to an array

var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upCaAlCharSplit = upperCaseAlphabet.split('');          //Turns string to an array

var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var lowCaAlCharSplit = lowerCaseAlphabet.split('');         //Turns string to an array





/* Functions that return random desired characters */

function randomSpecialCharacter(){
  return specCharSplit[Math.floor(Math.random() * specCharSplit.length)];        // Function to get random special character
}

function randomNumericCharacter(){
  return numCharSplit[Math.floor(Math.random() * numCharSplit.length)];          // Function to get random numeric character
}

function randomUpperCaseLetter(){
  return upCaAlCharSplit[Math.floor(Math.random() * upCaAlCharSplit.length)];    // Function to get random upper case letter
}

function randomLowerCaseLetter(){
  return lowCaAlCharSplit[Math.floor(Math.random() * lowCaAlCharSplit.length)];  //Function to get random lower case letter source: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
  }
  



// Assignment Code
var generateBtn = document.querySelector("#generate");





// Function for generating password below

function generatePassword(){

// var userChoice = [];                                      
var wantLowerCase = false;
var wantUpperCase = false;
var wantNumeric = false;
var wantSpecial = false;

var userChoices = 0;


var passwordLength= prompt("Please choose how many characters you'd like your password to be.");

  if (passwordLength < 8){
    return(alert("Must be at least 8 characters and no more than 128 characters"))
  };

  if (passwordLength > 128){
     return(alert("Must be at least 8 characters and no more than 128 characters"))
  }
  
  var wantSpecial = confirm("Click Ok to include special characters.")
  if(wantSpecial) userChoices++;

    //  userChoice.push(specCharSplit)                                           //  console.log(specCharSplit)
  

   var wantNumeric = confirm("Click Ok to include numeric characters.")
   if(wantNumeric) userChoices++;
   // if(true){
     // console.log(userChoice.push(numCharSplit));                                 // console.log(numCharSplit)
     
     
    var wantUpperCase = confirm("Click Ok to include uppercase characters.")
    if(wantUpperCase) userChoices++;
    //  if(true){
      //  console.log(userChoice.push(upCaAlCharSplit));                               //  console.log(upCaAlCharSplit)
      
      
    var wantLowerCase = confirm("Click Ok to include lowercase characters.")
    if(wantLowerCase) userChoices++;
    //  if(true){
  //  console.log(userChoice.push(lowCaAlCharSplit));

var finalPassword = "";
console.log(passwordLength);

var counter = 0;

for(var i = 0; i <= passwordLength; i++){
  var randomCharacter = "";
  
  if(counter==0) {
    if (wantNumeric){
      randomCharacter = randomNumericCharacter()
      finalPassword += randomCharacter
    }
    else if (wantSpecial){
      randomCharacter = randomSpecialCharacter()
      finalPassword += randomCharacter
    }
    else if (wantLowerCase){
      randomCharacter = randomLowerCaseLetter()
      finalPassword += randomCharacter
    }
    else if (wantUpperCase){
      randomCharacter = randomUpperCaseLetter()
      finalPassword += randomCharacter
    }
  } else if(counter==1) {
    if (wantSpecial){
      randomCharacter = randomSpecialCharacter()
      finalPassword += randomCharacter
    }
    else if (wantLowerCase){
      randomCharacter = randomLowerCaseLetter()
      finalPassword += randomCharacter
    }
    else if (wantUpperCase){
      randomCharacter = randomUpperCaseLetter()
      finalPassword += randomCharacter
    }
    else if (wantNumeric){
      randomCharacter = randomNumericCharacter()
      finalPassword += randomCharacter
    }
  } else if(counter==2) {
    if (wantLowerCase){
      randomCharacter = randomLowerCaseLetter()
      finalPassword += randomCharacter
    }
    else if (wantUpperCase){
      randomCharacter = randomUpperCaseLetter()
      finalPassword += randomCharacter
    }
    else if (wantNumeric){
      randomCharacter = randomNumericCharacter()
      finalPassword += randomCharacter
    }
    else if (wantSpecial){
      randomCharacter = randomSpecialCharacter()
      finalPassword += randomCharacter
    }
  } else if(counter==3) {
    if (wantUpperCase){
      randomCharacter = randomUpperCaseLetter()
      finalPassword += randomCharacter
    }
    else if (wantNumeric){
      randomCharacter = randomNumericCharacter()
      finalPassword += randomCharacter
    }
    else if (wantSpecial){
      randomCharacter = randomSpecialCharacter()
      finalPassword += randomCharacter
    }
    else if (wantLowerCase){
      randomCharacter = randomLowerCaseLetter()
      finalPassword += randomCharacter
    }
  }
  
  console.log(finalPassword)

  if(counter==3) counter=0
  else counter++;

}






















































}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;                       /* Inserts password text   */

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);                    /* Enables random password to generate when button clicked  */


  




// for(var i = 0, i <= passwordLength; i++)











































/* console.log(Math.floor(Math.random() * 26))     Generates random number from 1-26 (english alphabet) */ 



// }

// numberOfCharacter
  /*
var numberOfCharacters = prompt("Please choose how many characters you'd like for you password.")

if (numberOfCharacters < 8 || numberOfCharacters > 128){
console.log(alert("Must be at least 8 characters and no more than 128 characters"));
} else { confirm("Click Ok to include special characters.");
}     */