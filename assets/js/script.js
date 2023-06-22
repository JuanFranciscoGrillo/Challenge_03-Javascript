// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  console.log("writePassword() called");

  // Ask the user for the desired password length
  var length = prompt("Choose a password length between 8 and 128 characters:");
  // Add script log to see the user's input in the browser's developer console.
  console.log("Selected length:", length);

  // Check if the password length is within the valid range
  if (length < 8 || length > 128) {
    alert("Invalid password length. Must be between 8 and 128 characters.");
    // Add script log to see this alert in the browser's developer console.
    console.log("Invalid password length.");
    return;
  }

  // Ask if the password should contain lowercase letters
  var containsLowercase = confirm("Contains lowercase characters?");
  // Add script log to see the user's input in the browser's developer console.
  console.log("Contains lowercase:", containsLowercase);

  // Ask if the password should contain uppercase letters
  var containsUppercase = confirm("Contains uppercase characters?");
  // Add script log to see the user's input in the browser's developer console.
  console.log("Contains uppercase:", containsUppercase);

  // Ask if the password should contain numbers
  var containsNumeric = confirm("Contains numeric characters?");
  // Add script log to see the user's input in the browser's developer console.
  console.log("Contains numeric:", containsNumeric);

  // Ask if the password should contain special characters
  var containsSpecial = confirm("Contains special characters?");
  // Add script log to see the user's input in the browser's developer console.
  console.log("Contains special:", containsSpecial);

  // Check if at least one character type is selected
  if (!(containsLowercase || containsUppercase || containsNumeric || containsSpecial)) {
    alert("Please select at least one character type for the password.");
    // Add script log to see this alert in the browser's developer console.
    console.log("No character type selected.");
    return;
  }

  // Generate the password based on user choices
  var password = generatePassword(length, containsLowercase, containsUppercase, containsNumeric, containsSpecial);
  var passwordText = document.querySelector("#password");

  // Display the generated password
  passwordText.value = password;

  // Display a dialog box to confirm that the password was generated
  alert("Password generated!");
}

// Generates a password based on user choices
function generatePassword(length, containsLowercase, containsUppercase, containsNumeric, containsSpecial) {
  console.log("generatePassword() called");

  var characterSet = "";
  var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericSet = "0123456789";
  var specialSet = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Build the character set based on user choices
  if (containsLowercase) {
    characterSet += lowercaseSet;
  }
  if (containsUppercase) {
    characterSet += uppercaseSet;
  }
  if (containsNumeric) {
    characterSet += numericSet;
  }
  if (containsSpecial) {
    characterSet += specialSet;
  }

  console.log("Character set:", characterSet);

  var password = "";

  // Generate the password randomly
  for (var i = 0; i < length; i++) {
    // Generate a random index within the characterSet length
    var randomIndex = Math.floor(Math.random() * characterSet.length);

    // Retrieve the character at the random index from the characterSet
    var randomCharacter = characterSet.charAt(randomIndex);

    // Append the random character to the password
    password += randomCharacter;
  }

  console.log("Generated Password:", password);
  return password;
}
