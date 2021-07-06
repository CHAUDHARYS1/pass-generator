// Assignment code here

// Practice codes here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // generatePassword() function is getting called here
  var password = generatePassword();

  // target html textare id 'password'
  var passwordText = document.querySelector("#password");

  // show generated password to user
  passwordText.value = password;

}

// Add event listener to the 'generate' button

generateBtn.addEventListener("", writePassword);

// genratePassword () function starts here
function generatePassword(){
  var passwordChars = "";
  var passwordLength = "";

  // set all criteria's to false until user says true
  var optionLowerCase = false, optionUpperCase = false, optionNumberic = false, optionSpecialCharacters = false;

  // ask users the length of password
  passwordLength = prompt("Please enter the length of the password, must be between 8 and 128");

  // verify password length
  if(passwordLength >= 8 && passwordLength <= 128){
    // prompt that asks user the way they would to have their passwords generated 
    optionLowerCase = confirm("Do you want lowercase letters?");
    optionUpperCase = confirm("Do you want uppercase letters?");
    optionNumberic = confirm("Do you want numbers?");
    optionSpecialCharacters = confirm("Do you want special characters?");

    // confirm at least one chacter type has been chosen
    if(optionLowerCase || optionUpperCase || optionNumberic || optionSpecialCharacters){
      return passwordChars = createPassword(passwordLength, [optionLowerCase, optionUpperCase, optionNumberic, optionSpecialCharacters]);
    }else{
      // if not, let user know to select one
      alert("You need to pick at least one character type.");
    }
  }else{
    // let user know their selection is invalid
    alert("Invalid password length.");
  }
}