let fnameb = false;
let mnameb = false;
let lnameb = false;
let emailb = false;
let passwordb = false;
let cpasswordb = false;
let phonenumberb = false;
let zipcodeb = false;
let usernameb = false;
let fstate=false;
var reg = /^\d{10}$/;
const firstName = document.querySelector("#name1");
const middleName = document.querySelector("#name2");
const lastName = document.querySelector("#name3");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpass");
const phoneNumber = document.querySelector("#phone");
const zipCode = document.querySelector("#zip");
const userName = document.querySelector("#username");
const address1 = document.querySelector("#address");



function validateFirstName() {
  let firstNameValue = firstName.value.trim();
  let reg = /^[A-Za-z0-9_]{4,20}$/;

  if (reg.test(firstNameValue)) {
    // Check for repetitive characters more than two times
  
    let regexRepetitive = /(\w)\1{2}/;
    if (!regexRepetitive.test(firstNameValue)) {
      removeErrorMessage("n11");
      fnameb = true;
    } else {
      showErrorMessage(
        "n11",
        "Invalid first name. Characters should not repeat more than two times."
      );
      fnameb = false;
    }
  } else {
    showErrorMessage("n11", "Invalid first name");
    fnameb = false;
  }
}


function validateMiddleName() {
  let middleNameValue = middleName.value.trim();
  let reg = /^[A-Za-z]{2,20}$/;
  if(reg.test(middleNameValue) || middleNameValue.length==""){
     let regexRepetitive = /(\w)\1{2}/;
     if (!regexRepetitive.test(middleNameValue)) {
       removeErrorMessage("n12");
       mnameb == true;
     } else {
       showErrorMessage(
         "n12",
         " Characters should not repeat more than two times."
       );
       fnameb = false;
     }}
  else{
    showErrorMessage("n12", "Invalid middle name");
    mnameb = false;
  }
  

}

function validateLastName() {
  let lastNameValue = lastName.value.trim();
  let reg = /^[A-Za-z]{2,20}$/;

  if (reg.test(lastNameValue)) {
    let regexRepetitive = /(\w)\1{2}/;
      if (!regexRepetitive.test(lastNameValue)) {
        removeErrorMessage("n13");
        lnameb = true;
      } else {
        showErrorMessage(
          "n13",
          " Characters should not repeat more than two times."
        );
        fnameb = false;
      }

  } else {
    showErrorMessage("n13", "Invalid last name");
    lnameb = false;
  }
}
//function autoCapitalizeFirstChar(inputElement) {
//   let value = inputElement.value;
//   value = value.charAt(0).toUpperCase() + value.slice(1);
//   inputElement.value = value;
// }

// // Restrict input to not accept spaces, numbers, and repetitive characters three times
// function restrictNameInput(inputElement) {
//   let value = inputElement.value;

//   // Remove spaces and numbers
//   value = value.replace(/[^a-zA-Z]/g, "");

//   // Check for repetitive characters three times
//   let regex = /(\w)\1\1/;
//   if (regex.test(value)) {
//     value = value.slice(0, -1); // Remove the last repetitive character
//   }

//   inputElement.value = value;
// }

// // Attach event listeners to the name fields
// firstName.addEventListener("input", function () {
//   autoCapitalizeFirstChar(firstName);
//   restrictNameInput(firstName);
// });

// middleName.addEventListener("input", function () {
//   autoCapitalizeFirstChar(middleName);
//   restrictNameInput(middleName);
// });
// a
// lastName.addEventListener("input", function () {
//   autoCapitalizeFirstChar(lastName);
//   restrictNameInput(lastName);
// });

function validateEmail() {
  let emailValue = email.value.trim();
  let reg = /^[a-zA-Z.0-9]{2,}@[a-zA-Z]+\.[a-zA-Z]+$/;
  let myArr = emailValue.split(".");
  let errorMessage = "";

 if (reg.test(emailValue)) {
    emailb = true;
  } else {
    errorMessage = "Invalid email address";
  }

  if (errorMessage) {
    showErrorMessage("n14", errorMessage);
    emailb = false;
  } else {
    removeErrorMessage("n14");
    emailb = true;
  }
}

function validatePassword() {
  let passwordValue = password.value.trim();
  let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (reg.test(passwordValue)) {
    removeErrorMessage("n23");
    passwordb = true;
  } else {
    showErrorMessage(
      "n23",
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character"
    );
    passwordb = false;
  }
}

function validateConfirmPassword() {
  let confirmPasswordValue = confirmPassword.value.trim();
  let passwordValue = password.value.trim();

  if (confirmPasswordValue === passwordValue) {
    removeErrorMessage("n24");
    cpasswordb = true;
  } else {
    showErrorMessage("n24", "Passwords do not match");
    cpasswordb = false;
  }
}


function validatePhoneNumber() {
  let phoneNumberValue = phoneNumber.value.trim();
  

 
  if (reg.test(phoneNumberValue)) {
    removeErrorMessage("n18");
    phonenumberb = true;
    
  } else {
    showErrorMessage("n18", "Invalid phone number");
  }
   if (phoneNumberValue.length > phoneNumber.maxLength) {
     phoneNumber.value = phoneNumberValue.slice(0, phoneNumber.maxLength);
   }
      phonenumberb = false;
  }


function validateZipCode() {
  let zipCodeValue = zipCode.value.trim();
  let reg = /^\d{6}$/;

  if (reg.test(zipCodeValue)) {
    removeErrorMessage("n202");
    zipcodeb = true;
  } else {
    showErrorMessage("n202", "Invalid zip code");
    zipcodeb = false;
  }
}

function validateUsername() {
  let userNameValue = userName.value.trim();
  let reg = /^[A-Za-z0-9_]{4,20}$/;

  if (reg.test(userNameValue)) {
    removeErrorMessage("n22");
    usernameb = true;
  } else {
    showErrorMessage(
      "n22",
      "Invalid username. Username can contain alphanumeric characters and underscores, and must be 4-20 characters long."
    );
    usernameb = false;
  }
}

function showErrorMessage(elementId, message) {
  document.getElementById(elementId).innerHTML =
    '<span class="red">' + message + "</span>";
}

function removeErrorMessage(elementId) {
  document.getElementById(elementId).innerHTML = "";
}

function validateForm() {
  validateFirstName();
  validateMiddleName();
  validateLastName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
  validatePhoneNumber();
  validateZipCode();
  validateUsername();
  addressValidations();
  validateState()
  validateCity()

  if (
    fnameb &&
    lnameb &&
    emailb &&
    passwordb &&
    cpasswordb &&
    phonenumberb &&
    zipcodeb &&
    usernameb
  ) {
    alert("Form submitted successfully");
    return true;
  } else {
  
    return false;
  }
}

firstName.addEventListener("input", validateFirstName);
middleName.addEventListener("input", validateMiddleName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);
phoneNumber.addEventListener("input", validatePhoneNumber);
zipCode.addEventListener("input", validateZipCode);
userName.addEventListener("input", validateUsername);



function updatePhoneCode() {
  var country = document.getElementById("country").value;
  var phoneCodeInput = document.getElementById("phoneCode");
  var phoneInput = document.getElementById("phone");

  if (country === "India") {
    phoneCodeInput.value = "+91";
    phoneInput.maxLength = 10;
    reg = /^\d{10}$/;
  } else if (country === "UK") {
    phoneCodeInput.value = "+44";
    phoneInput.maxLength = 11;
    reg = /^\d{11}$/;
  } else if (country === "Australia") {
    phoneCodeInput.value = "+61";
    phoneInput.maxLength = 9;
    reg = /^\d{9}$/;
  } else {
    phoneCodeInput.value = "";
    phoneInput.maxLength = 15; 
  }
  
   validatePhoneNumber(reg);
}




// Auto capitalize the first character of the name field
function autoCapitalizeFirstChar(inputElement) {
  let value = inputElement.value;
  value = value.charAt(0).toUpperCase() + value.slice(1);
  inputElement.value = value;
}

// Restrict input to not accept spaces or numbers
function restrictNameInput(inputElement) {
  let value = inputElement.value;
  value = value.replace(/[^a-zA-Z]/g, "");
  inputElement.value = value;
}

// Attach event listeners to the name fields
firstName.addEventListener("input", function () {
  autoCapitalizeFirstChar(firstName);
  restrictNameInput(firstName);
});

middleName.addEventListener("input", function () {
  autoCapitalizeFirstChar(middleName);
  restrictNameInput(middleName);
});

lastName.addEventListener("input", function () {
  autoCapitalizeFirstChar(lastName);
  restrictNameInput(lastName);
});


function addressValidation(event) {
  const regAddress = /^[a-zA-Z0-9\.,#/\-][a-zA-Z0-9\s\.,#/\-]*$/
  const address = document.getElementById("address").value;
  
  var textarea = event.target;
  var input = textarea.value;
  var characterLimit = 10;
  
  var words = input.split(" ");
  var slicedWords = [];
  
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var slicedWord = "";
    
    while (word.length > characterLimit) {
      var segment = word.slice(0, characterLimit);
      var breakPoint = segment.lastIndexOf(" ");
      
      if (breakPoint === -1) {
        breakPoint = characterLimit;
      }
      
      slicedWord += segment.slice(0, breakPoint) + " ";
      
      word = word.slice(breakPoint);
      word = word.trim();
    }
    
    slicedWord += word;
    slicedWords.push(slicedWord);
  }
   var output = slicedWords.join(" ");
   textarea.value = output;
}
function addressValidations(qevent) {
  const regAddress = /^[a-zA-Z0-9\.,#/\-][a-zA-Z0-9\s\.,#/\-]*$/;
  const address = document.getElementById("address").value;

  // Apply address validation logic here
  if (regAddress.test(address)) {
    removeErrorMessage("n15"); // Assuming "n25" is the ID of the error message element for the address field
  } else {
    showErrorMessage("n15", "Invalid address"); // Replace "n25" with the correct error message element ID
  }
}
 
function validateCity() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    showErrorMessage("n26", "City cannot be empty"); 
  } else {
    const words = city.split(" ");

    if (words.length > 2) {
      showErrorMessage("n26", "City should contain up to two words"); 
    } else {
      removeErrorMessage("n26"); 
    }
  }
}

function validateState() {
  let state = document.getElementById("state").value.trim();

  if (state === "") {
    showErrorMessage("n27", "State cannot be empty"); // Replace "n27" with the correct error message element ID
    fstate=false;
  } else {
    let words = state.split(" ");

    if (words.length > 2) {
      showErrorMessage("n27", "State should contain up to two words"); // Replace "n27" with the correct error message element ID
      fstate=false
    } else {
      removeErrorMessage("n27"); // Replace "n27" with the correct error message element ID
      fstate=true;
    }
  }
}

function preventSpace(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
  }
}
function limitDigits(event) {
  const maxDigits = 6;
  const input = event.target;
  const value = input.value;
  const digits = value.replace(/\D/g, "");

  if (digits.length > maxDigits) {
    input.value = digits.slice(0, maxDigits);
  }
}

function limitDigits1(event1) {
  const maxDigits = 11;
  const input = event1.target;
  const value = input.value;
  const digits = value.replace(/\D/g, "");

  if (digits.length > maxDigits) {
    input.value = digits.slice(0, maxDigits);
  }
}