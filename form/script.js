alert("hello");
let fnameb = false;
let mnameb = false;
let lnameb = false;
let emailb = false;
let passwordb = false;
let cpasswordb = false;
let phonenumberb = false;
let zipcodeb = false;
let usernameb = false;
let addressb = false;

const firstName = document.querySelector("#name1");
const middleName = document.querySelector("#name2");
const lastName = document.querySelector("#name3");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpass");
const phoneNumber = document.querySelector("#phone");
const zipCode = document.querySelector("#zip");
const userName = document.querySelector("#username");
const address = document.querySelector("#address");

function autoCapitalizeFirstChar(inputElement) {
  let value = inputElement.value;
  value = value.charAt(0).toUpperCase() + value.slice(1);
  inputElement.value = value;
}

function restrictNameInput(inputElement) {
  let value = inputElement.value;
  value = value.replace(/[^a-zA-Z]/g, "");
  inputElement.value = value;
}

function validateFirstName() {
  let firstNameValue = firstName.value.trim();
  let reg = /^[A-Za-z]{2,20}$/;

  if (reg.test(firstNameValue)) {
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
  let reg = /^[A-Za-z]{0,20}$/;

  if (reg.test(middleNameValue)) {
    let regexRepetitive = /(\w)\1{2}/;
    if (!regexRepetitive.test(middleNameValue)) {
      removeErrorMessage("n12");
      mnameb = true;
    } else {
      showErrorMessage(
        "n12",
        "Invalid middle name. Characters should not repeat more than two times."
      );
      mnameb = false;
    }
  } else {
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
        "Invalid last name. Characters should not repeat more than two times."
      );
      lnameb = false;
    }
  } else {
    showErrorMessage("n13", "Invalid last name");
    lnameb = false;
  }
}

function validateEmail() {
  let emailValue = email.value.trim();
  let reg = /^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$/;
  let myArr = emailValue.split(".");
  let errorMessage = "";

  if (myArr[myArr.length - 1] === myArr[myArr.length - 2]) {
    errorMessage = "Invalid email address";
  } else if (reg.test(emailValue)) {
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
  let reg = /^\d{10}$/;

  if (reg.test(phoneNumberValue)) {
    removeErrorMessage("n18");
    phonenumberb = true;
  } else {
    showErrorMessage("n18", "Invalid phone number");
    phonenumberb = false;
  }
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

function validateAddress() {
  let addressValue = address.value.trim();
  let reg = /^(?!.*(.).*\1)[A-Za-z0-9\s]{1,27}$/;

  if (reg.test(addressValue)) {
    removeErrorMessage("n25");
    addressb = true;
  } else {
    showErrorMessage(
      "n25",
      "Invalid address. Address can contain alphanumeric characters and spaces, and must be 1-27 characters long. Characters should not repeat more than two times."
    );
    addressb = false;
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
  validateAddress();

  if (
    fnameb &&
    mnameb &&
    lnameb &&
    emailb &&
    passwordb &&
    cpasswordb &&
    phonenumberb &&
    zipcodeb &&
    usernameb &&
    addressb
  ) {
    alert("Form validated successfully");
  } else {
    alert("Form validation failed");
  }
}
