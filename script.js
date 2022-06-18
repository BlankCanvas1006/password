// Assignment code here
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';
const passwordText = document.getElementById('password');
const length = document.getElementById('length');
const incNumbers = document.getElementById('numbers')
const incSymbols = document.getElementById('symbols');
var password = document.getElementById('password');

const generatePassword = (length, characters) => {
  let password = '';
  for(let i = 0; i < length; i++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var passwordLength = 12;
  var password = '';
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  document.getElementById('password').value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
let characters = alpha;
  incNumbers.checked ? (characters += numbers) : '';
  incSymbols.checked ? (characters += symbols) : '';
  passwordText.value = generatePassword(length.value, characters);
});
