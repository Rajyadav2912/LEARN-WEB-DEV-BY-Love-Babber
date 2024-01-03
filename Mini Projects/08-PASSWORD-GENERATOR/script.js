// fetch all id, class , input element fetch to in store in variable=======================================================================================================================
// coustum attribute fetch=================================================================================================================================================================
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lenghtNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numberCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");

const indicator = document.querySelector("[data-indicator]"); 
const generatorBtn = document.querySelector(".generateButton");

const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>/.?';

// initially need=========================================================================================================================================================================

let password = "";
let passwordLength = 10;

let checkCount = 0;
handleSlider();

// set circle color grey==================================================================================================================================================================

// set [password length]==================================================================================================================================================================

function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;

  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize =
    ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

function setIndicator(color) {
  indicator.style.bagroundColor = color;
  //   shadow
  indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

// Default Indicator
setIndicator("#ccc");

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

function generateRandomNumber() {
  return getRandomInteger(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRandomInteger(65, 91));
}

function generateSymbols() {
  const randomNum = getRandomInteger(0, symbols.length);
  return symbols.charAt(randomNum);
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (uppercaseCheckbox.checked) hasUpper = true;
  if (lowercaseCheckbox.checked) hasLower = true;
  if (numberCheckbox.checked) hasNumber = true;
  if (symbolsCheckbox.checked) hasSymbol = true;

  if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNumber || hasSymbol) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("f00");
  }
}

//=================================================================================================================================================================================

async function copyContent() {
  try {
    // clipboard pe write kre ga and promise (reslove , return) return krega=======================================================================================================
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }
  //   to make copy wala span visible==============================================================================================================================================
  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

function shufflePassword(array) {
  // fisher yates methods Algorithm================================================================================================================================================

  for (let i = array.length - 1; i > 0; i--) {
    // random J, find out using random function====================================================================================================================================
    const j = Math.floor(Math.random() * (i + 1));
    // swap number at i index and j index==========================================================================================================================================
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

function handleCheckBoxChange() {
  // kisi bhi check box ko tick or untick kre uske basess pe waps se count krega==================================================================================================
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
  });

  // special condition============================================================================================================================================================
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) {
    copyContent();
  }
});

generatorBtn.addEventListener("click", () => {
  //  none of the check box are selected=========================================================================================================================================
  if (checkCount <= 0) {
    return;
  }
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  //   let's start the journey to find new password===================================================

  // remove old password=======================================================================================
  password = "";

  //   let's put the stuff mentioned by checkboxes
  //   if (uppercaseCheckbox.checked) {
  //     password += generateUpperCase();
  //   }

  //   if (lowercaseCheckbox.checked) {
  //     password += generateLowerCase();
  //   }

  //   if (numberCheckbox.checked) {
  //     password += generateRandomNumber();
  //   }

  //   if (symbolsCheckbox.checked) {
  //     password += generateSymbols();
  //   }

  let functionArr = [];

  if (uppercaseCheckbox.checked) {
    functionArr.push(generateUpperCase);
  }

  if (lowercaseCheckbox.checked) {
    functionArr.push(generateLowerCase);
  }

  if (numberCheckbox.checked) {
    functionArr.push(generateRandomNumber);
  }

  if (symbolsCheckbox.checked) {
    functionArr.push(generateSymbols);
  }

  //   compulsory addtion
  for (let i = 0; i < functionArr.length; i++) {
    password += functionArr[i]();
  }

  //   remaining addition
  for (let i = 0; i < passwordLength - functionArr.length; i++) {
    let RandomINDX = getRandomInteger(0, functionArr.length);
    password += functionArr[RandomINDX]();
  }

  //   shuffle the password
  password = shufflePassword(Array.from(password));

  //   show in UI Display
  passwordDisplay.value = password;

  //   calculate strength
  calcStrength();
});
