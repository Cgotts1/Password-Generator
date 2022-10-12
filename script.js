var specialCharacter = "~`!@#$%^&*()-_+={}[]|/\:;\"'<>,.?"; // Contains full string of characters
var specCharSplit = specialCharacter.split('');             //Turns string to an array

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
  
var results = [];  

var wantLowerCase = false;
var wantUpperCase = false;
var wantNumeric = false;
var wantSpecial = false;

var userChoices = 0;

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

var finalPassword = "";
console.log(passwordLength);
var shuffled = ""; 

var counter = 0;

for(var i = 0; i <= passwordLength; i++){               //Removed -1 from passwordLength to return exact # of characters for user input
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
  }                                                                                               //end of forloop




  // https://www.youtube.com/watch?v=dlTL6fNu4Po




  

  if(counter==3) counter=0
  else counter++;

} // For


function shuffledString(finalPassword){                                    //function for shuffling string

  var shuffled = "";                                          //Stores shuffled string                                                          
  finalPassword = finalPassword.toString();                                                        
  len = finalPassword.length;                                                                       
  for(i=0; i<len; i++){                                                                                 
    randomPosition = Math.floor(Math.random() * finalPassword.length);
    shuffled += finalPassword[randomPosition];                                                            
    finalPassword = finalPassword.slice(0, randomPosition) + finalPassword.slice(randomPosition + 1)      
  }
  return shuffled;
}

 shuffled = shuffledString(finalPassword)
 finalPassword = shuffled


 
  return finalPassword                //Places the finalPassword into textbox on webpage

} //generatePassword

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextBox = document.querySelector("#password");

  passwordTextBox.value = password;                       /* Inserts password text   */

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);                    /* Enables random password to generate when button clicked  */








// var shuffle = s.split('').sort(() => 0.5 - Math.random()).join('');                       https://www.encodedna.com/javascript/how-to-shuffle-characters-in-a-string.htm


// function shuffledString(string){                                                          https://www.youtube.com/watch?v=dlTL6fNu4Po

//   var shuffled = "";                       //Stores shuffled string
//   string = string.toString();
//   len = string.length;
//   for(i=0; i<len; i++){
//     randPos = Math.floor(Math.random() * string.length);
//     shuffled += string[randPos];
//     string = string.slice(0, randPos) + string.slice(randPos + 1)
//   }
//   return shuffled;
// }































// function shuffledString(){

//   var shuffled = "";                       //Stores shuffled string                                                          
//   finalPassword = finalPassword.toString();                                                               Makes sure input is a string
//   len = finalPassword.length;                                                                             gets the length of the string
//   for(i=0; i<len; i++){                                                                                   transfers the characters of the original sting to new string in random order
//     randomPosition = Math.floor(Math.random() * finalPassword.length);
//     shuffled += finalPassword[randomPosition];                                                            adds random character to the new string
//     finalPassword = finalPassword.slice(0, randomPosition) + finalPassword.slice(randomPosition + 1)      removes random character from original string
//   }
//   return shuffled;
// }

// var shuffled = shuffledString()