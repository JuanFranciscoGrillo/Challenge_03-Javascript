var generateBtn = document.querySelector("#generate");

function writePassword() {
    // Ask the user for the desired password length
    var length = prompt("Choose a password length between 8 and 128 characters:");
    console.log("Selected length:", length);

    // Ask if the password should contain lowercase letters
    var containsLowercase = confirm("Contains lowercase characters?");
    console.log("Contains lowercase:", containsLowercase);

    // Ask if the password should contain uppercase letters
    var containsUppercase = confirm("Contains uppercase characters?");
    console.log("Contains uppercase:", containsUppercase);

    // Ask if the password should contain numbers
    var containsNumeric = confirm("Contains numeric characters?");
    console.log("Contains numeric:", containsNumeric);

    // Ask if the password should contain special characters
    var containsSpecial = confirm("Contains special characters?");
    console.log("Contains special:", containsSpecial);

    // Check if the password length is within the valid range
    if (length < 8 || length > 128) {
        alert("Invalid password length. Must be between 8 and 128 characters.");
        console.log("Invalid password length.");
        return;
    }

    // Check if at least one character type is selected
    if (!(containsLowercase || containsUppercase || containsNumeric || containsSpecial)) {
        alert("Please select at least one character type for the password.");
        console.log("No character type selected.");
        return;
    }

    // Generate the password based on user choices
    var password = generatePassword(length, containsLowercase, containsUppercase, containsNumeric, containsSpecial);
    var passwordText = document.querySelector("#password");

    console.log("Generated Password:", password);

    // Display the generated password
    passwordText.value = password;

    alert("Password generated!");
}

function generatePassword(length, containsLowercase, containsUppercase, containsNumeric, containsSpecial) {
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
    // Generate the password by randomly selecting characters from the character set
    for (var i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    return password;
}

generateBtn.addEventListener("click", writePassword);
