var specialCharacter = "~`!@#$%^&*()-_+={}[]|/\:;\"'<>,.?";
var specCharSplit = specialCharacter.split('');             //Turns string to an array

var numericCharacter = "0123456789";
var numCharSplit = numericCharacter.split('');              //Turns string to an array

var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upCaAlCharSplit = upperCaseAlphabet.split('');          //Turns string to an array

var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var lowCaAlCharSplit = lowerCaseAlphabet.split('');         //Turns string to an array

var userChoice = [];                                        //Empty array that stores boolean values



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

var passwordValid= prompt("Please choose how many characters you'd like your password to be.");

if (passwordValid < 8){
    return(alert("Must be at least 8 characters and no more than 128 characters"))
   };

   if (passwordValid > 128){
     return(alert("Must be at least 8 characters and no more than 128 characters"))
   }
   else {
     var specCharSplit = confirm("Click Ok to include special characters.")
     console.log(specCharSplit)
   };

   var numCharSplit = confirm("Click Ok to include numeric characters.")
    if(true){
    console.log(numCharSplit); 
  }

   var upCaAlCharSplit = confirm("Click Ok to include uppercase characters.")
   if(true){
   console.log(upCaAlCharSplit);
   }

   var lowCaAlCharSplit = confirm("Click Ok to include lowercase characters.")
   if(true){
   console.log(lowCaAlCharSplit);
   }



  



userChoice = specCharSplit.concat(lowCaAlCharSplit);
console.log(userChoice);




// for(var i = 0, i <= passwordLength; i++)






















































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