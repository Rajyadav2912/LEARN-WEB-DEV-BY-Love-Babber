// const countValue = document.getElementById("#counter");
// let button = document.getElementById(".btn");

// function increment() {
//   let value = parseInt(countValue.innerText);
//   value = value + 1;
//   countValue.innerText = value;
// }

// function decrement() {
//   let value = parseInt(countValue.innerText);

//   value = value - 1;

//   countValue.innerText = value;
// }

// button.addEventListener("onclick", increment);

// button.addEventListener("onclick", decrement);

const countValue = document.getElementById("counter");

const increment = () => {
  // Get value from UI
  let value = parseInt(countValue.innerText);

  // Update the value
  value = value + 1;

  // set the value onto UI
  countValue.innerText = value;
};

const decrement = () => {
  // Get value from UI
  let value = parseInt(countValue.innerText);

  // Update the value
  value = value - 1;

  // set the value onto UI
  countValue.innerText = value;
};
