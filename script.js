var specialCharacter = "~`!@#$%^&*()-_+={}[]|/\:;\"'<>,.?"; // Contains full string of characters
var specCharSplit = specialCharacter.split('');             // Turns string to an array

var numericCharacter = "0123456789";
var numCharSplit = numericCharacter.split('');              

var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upCaAlCharSplit = upperCaseAlphabet.split('');          

var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var lowCaAlCharSplit = lowerCaseAlphabet.split('');         

// Functions that return random desired characters https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
function randomSpecialCharacter(){
  return specCharSplit[Math.floor(Math.random() * specCharSplit.length)];        
}

function randomNumericCharacter(){
  return numCharSplit[Math.floor(Math.random() * numCharSplit.length)];          
}

function randomUpperCaseLetter(){
  return upCaAlCharSplit[Math.floor(Math.random() * upCaAlCharSplit.length)];    
}

function randomLowerCaseLetter(){
  return lowCaAlCharSplit[Math.floor(Math.random() * lowCaAlCharSplit.length)];  
}
  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for generating password below
function generatePassword(){  

var wantLowerCase = false;
var wantUpperCase = false;
var wantNumeric = false;
var wantSpecial = false;

var userChoices = 0;                                   // Increases by 1 each time a desired character is declared true

var passwordLength= prompt("Please choose how many characters you'd like your password to be. Must be 8-128 characters. ");

  if (passwordLength < 8){
    alert("Must be at least 8 characters and no more than 128 characters")
    document.getElementById("generate").click()
    return;
  };

  if (passwordLength > 128){
     alert("Must be at least 8 characters and no more than 128 characters")
     document.getElementById("generate").click()
     return;
  }
  
  var wantSpecial = confirm("Click Ok to include special characters.")
  if(wantSpecial) userChoices++;                                          

  var wantNumeric = confirm("Click Ok to include numeric characters.")
  if(wantNumeric) userChoices++;       
  
  var wantUpperCase = confirm("Click Ok to include uppercase characters.")
  if(wantUpperCase) userChoices++;
  
  var wantLowerCase = confirm("Click Ok to include lowercase characters.")
  if(wantLowerCase) userChoices++;

var finalPassword = "";                               // finalPassword is stored into randomCharacter and later into shuffled
console.log(passwordLength);

var shuffled = ""; 
var counter = 0;

for(var i = 0; i <= passwordLength - 1; i++){         // For loop begins and added -1 to passwordLength to return exact # of characters for user input
  var randomCharacter = "";
  
  if(counter==0) {                                    // Counter increases to 3 each time the for loop runs and then back to 0
    if (wantNumeric){
      randomCharacter = randomNumericCharacter()
      finalPassword += randomCharacter                // finalPassword stored into randomCharacter string
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

  if(counter==3) counter=0                        // Counter restarts
  else counter++;
}                                                 // For loop ends

function shuffledString(finalPassword){           // Function for shuffling string https://www.youtube.com/watch?v=dlTL6fNu4Po                                                                                                
  finalPassword = finalPassword.toString();                                                        
  len = finalPassword.length;                                                                       
  for(i=0; i<len; i++){                                                                                 
    randomPosition = Math.floor(Math.random() * finalPassword.length);
    shuffled += finalPassword[randomPosition];                                                            
    finalPassword = finalPassword.slice(0, randomPosition) + finalPassword.slice(randomPosition + 1)      
  }
  return shuffled;
}                                                 // shuffledString(finalPassword) ends

 shuffled = shuffledString(finalPassword)
 finalPassword = shuffled

  return finalPassword                             // Places the finalPassword into textbox on webpage
}                                                  // End of generatePassword()

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextBox = document.querySelector("#password");

  passwordTextBox.value = password;                // Inserts password text  
}

// Event listener that enables random password to generate when button is clicked 
generateBtn.addEventListener("click", writePassword);                     