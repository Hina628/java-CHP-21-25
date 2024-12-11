//--------------------------CHP 21 - 25------------------------------//

// 1.Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// Taking input from the user for first and last name
let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");

// Merging first and last name into a full name
let fullName = firstName + " " + lastName;

// Greeting the user with their full name using an alert
alert("Hello, " + fullName + "!");

// Displaying the full name with line breaks using document.write
document.write("First Name: " + firstName + "<br>");
document.write("Last Name: " + lastName + "<br>");
document.write("Full Name: " + fullName + "<br>");


//=================================================================================//

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

// Taking user input for favorite mobile phone model
let phoneModel = prompt("Please enter your favorite mobile phone model:");

// Displaying the length of the user's input in an alert box
alert("The length of your input is: " + phoneModel.length);

// Displaying the length on the webpage using document.write with line break
document.write("Your phone model is: " + phoneModel + "<br>");
document.write("The length of your input is: " + phoneModel.length + "<br>");


//==================================================================================//

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// Taking input from the user for a letter to find its index
let letter = prompt("Enter a letter to find its index in the word 'Pakistani'");

// The word to search in
let words = "Pakistani";

// Find the index of the letter "n" in the word
let index = words.indexOf(letter);

// Displaying the result using document.write with line break
document.write("The letter '" + letter + "' is at index: " + index + "<br>");

//====================================================================================//

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// The word to search in
let word = "Hello World";

// Finding the last index of letter "l"
let lastIndex = word.lastIndexOf("l");

// Displaying the result using document.write with <br> for line breaks
document.write("The word is: " + word + "<br>");
document.write("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex + "<br>");



//==========================================================================================//


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// The name to search in
let name = "Pakistani";

// Finding the character at 3rd index
let characterAtIndex3 = name.charAt(3);

// Displaying the result using document.write with <br> for line breaks
document.write("The name is: " + name + "<br>");
document.write("The character at the 3rd index in the name 'Pakistani' is: " + characterAtIndex3 + "<br>");


//================================================================================================//

// 6. Repeat Q1 using string concat() method.

// Taking input from the user for first and last name
let firstNameInput = prompt("Please enter your first name:");
let lastNameInput = prompt("Please enter your last name:");

// Merging first and last name into a full name using concat() method
let fullNameConcat = firstNameInput.concat(" ", lastNameInput);

// Greeting the user with their full name using an alert
alert("Hello, " + fullNameConcat + "!");

// Displaying the full name with line breaks using document.write
document.write("First Name: " + firstNameInput + "<br>");
document.write("Last Name: " + lastNameInput + "<br>");
document.write("Full Name (using concat): " + fullNameConcat + "<br>");


//===============================================================================================//

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// The word to perform the replacement in
let city = "Hyderabad";

// Replacing "Hyder" with "Islam" using replace() method
let updatedCity = city.replace("Hyder", "Islam");

// Displaying the result using document.write with <br> for line breaks
document.write("Original Word: " + city + "<br>");
document.write("Updated Word (Hyder replaced with Islam): " + updatedCity + "<br>");

//===========================================================================================//


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// Original message
var message = "John and Emma are best friends. They play basketball and soccer together.";

// Replacing all occurrences of "and" with "&" using replace() with a global regular expression
var updatedMessage = message.replace(/and/g, "&");

// Displaying the result using document.write with <br> for line breaks
document.write("Original Message: " + message + "<br>");
document.write("Updated Message (all 'and' replaced with '&'): " + updatedMessage + "<br>");

//===============================================================================================//


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// String to convert
var str = "472";

// Converting the string to a number
var num = Number(str); // Or use parseInt(str) for integer conversion

// Displaying the original string and its type
document.write("Original String: " + str + "<br>");
document.write("Type of Original String: " + typeof str + "<br>");

// Displaying the converted number and its type
document.write("Converted Number: " + num + "<br>");
document.write("Type of Converted Number: " + typeof num + "<br>");

//=================================================================================================//

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// Taking user input
var userInput = prompt("Please enter some text:");

// Converting the user input to uppercase (capital letters)
var capitalizedInput = userInput.toUpperCase();

// Displaying the result in the browser
document.write("Original Input: " + userInput + "<br>");
document.write("Input in Capital Letters: " + capitalizedInput + "<br>");

//==========================================================================================//

//  11.Write a program that takes user input. Convert and
// show the input in title case.

// Taking user input
var userInput = prompt("Please enter some text:");

// Function to convert string to title case
function toTitleCase(str) {
    var words = str.split(" "); // Split the string into words
    for (var i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word and make the rest lowercase
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" "); // Join the words back together with spaces
}

// Converting the user input to title case
var titleCaseInput = toTitleCase(userInput);

// Displaying the result in the browser
document.write("Original Input: " + userInput + "<br>");
document.write("Input in Title Case: " + titleCaseInput + "<br>");

//========================================================================================//

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// The given number
var num = 35.36;

// Converting the number to a string
var numString = num.toString();

// Removing the dot using replace() method
var result = numString.replace(".", "");

// Displaying the result in the browser
document.write("Original Number: " + num + "<br>");
document.write("Number as String: " + numString + "<br>");
document.write("Result after Removing Dot: " + result + "<br>");

//=======================================================================================//

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Taking user input for username
var username = prompt("Please enter your username:");

// Special symbols to check
var specialSymbols = ["@", ".", ",", "!"];

// Function to check if username contains any special symbols
function isValidUsername(username) {
    // Loop through each symbol and check if it exists in the username
    for (var i = 0; i < specialSymbols.length; i++) {
        if (username.includes(specialSymbols[i])) {
            return false; // Return false if any special symbol is found
        }
    }
    return true; // Return true if no special symbols are found
}

// Checking if the username is valid
if (!isValidUsername(username)) {
    // If invalid, prompt the user to enter a valid username
    alert("Please enter a valid username. It should not contain special symbols like @, ., , or !");
} else {
    // If valid, display a success message
    alert("Username is valid!");
}

// Displaying the result in the browser
document.write("Entered Username: " + username + "<br>");
document.write("Is Username Valid? " + (isValidUsername(username) ? "Yes" : "No") + "<br>");

//====================================================================================================//

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// The array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Taking user input for the item to search
var userInput = prompt("Please enter the item you want to search for:");

// Converting user input to lowercase for case-insensitive search
var userInputLower = userInput.toLowerCase();

// Checking if the item is in the array (case-insensitive)
var itemFound = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInputLower) {
        itemFound = true; // Item found
        break;
    }
}

// Displaying the result in the browser
if (itemFound) {
    alert("The item " + userInput + " is found in the list.");
    document.write("The item '" + userInput + "' is found in the list.<br>");
} else {
    alert("The item " + userInput + " is not found in the list.");
    document.write("The item '" + userInput + "' is not found in the list.<br>");
}

//===========================================================================================//

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// Taking user input for password
var password = prompt("Please enter your password:");

// Function to validate the password
function validatePassword(password) {
    // Checking if the password is at least 6 characters long, contains both alphabets and numbers, and does not start with a number
    var regex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/; // Starts with a letter, followed by at least 5 alphanumeric characters
    return regex.test(password);
}

// Checking if the entered password is valid
if (validatePassword(password)) {
    alert("Your password is valid.");
    document.write("Your password is valid.<br>");
} else {
    alert("Please enter a valid password. Password must be at least 6 characters long, contain both alphabets and numbers, and not start with a number.");
    document.write("Password is invalid. Please follow the password requirements.<br>");
}

//=========================================================================================================//

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// The given string
var university = "University of Karachi";

// Converting the string to an array using split() method
var universityArray = university.split(" "); // Split by space to get words as array elements

// Displaying the elements of the array in the browser
document.write("Array Elements: <br>");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>"); // Display each element on a new line
}

//=============================================================================================================//

// 17. Write a program to display the last character of a user
// input.

// Taking user input
var userInput = prompt("Please enter some text:");

// Getting the last character of the input
var lastCharacter = userInput.charAt(userInput.length - 1);

// Displaying the last character in the browser
document.write("The last character of your input is: " + lastCharacter);

//=================================================================================================//

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// The given string
var sentence = "The quick brown fox jumps over the lazy dog";

// Converting the string to lowercase for case-insensitive search
var lowerCaseSentence = sentence.toLowerCase();

// Splitting the string into words using space as delimiter
var number = lowerCaseSentence.split(" ");

// Counting the occurrences of the word "the"
var count = 0;
for (var i = 0; i < number.length; i++) {
    if (number[i] === "the") {
        count++;
    }
}

// Displaying the count in the browser
document.write("The word 'the' appears " + count + " times in the sentence.");

//==========================================================================================================================================//
