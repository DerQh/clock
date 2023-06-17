function passwordGEn(num) {
  //   create an array starts at 65 and ends (65 + 26)
  const numArray = Array.from(Array(26)).map((e, i) => i + 65);
  // returns a letter 65 === A .... 66 === B
  const upperCase = numArray.map((num) => String.fromCharCode(num));
  const numbers = Array.from(Array(10)).map((e, i) => i);
  const lowerCase = upperCase.map((upper) => upper.toLowerCase());
  const symbols = "!@#$%&()_+=^";
  // console.log(lowerCase);
  // console.log(numbers);
  // console.log(symbols.length);

  //   random function
  function randFunc(len) {
    return Math.floor(Math.random() * len);
  }
  const upper = document.querySelector(".upper").classList.contains("checkON");
  const symbol = document
    .querySelector(".symbol")
    .classList.contains("checkON");
  const lower = document.querySelector(".lower").classList.contains("checkON");
  const number = document
    .querySelector(".number")
    .classList.contains("checkON");

  const password = [];
  const symbolArray = [];

  for (let x = 0; x < num; x++) {
    for (let y = 0; y < x; y++) {
      symbolArray.push(symbols[y]);
    }
    // password.push(upperCase[randFunc(upperCase.length)]);
    if (lower && upper && symbol && number) {
      const allItems = [...lowerCase, ...upperCase, ...symbolArray, ...numbers];
      password.push(allItems[randFunc(allItems.length)]);
    }
  }

  //   shuffle the array function
  let shuffled = password
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.join("");
}

// passwordGEn();

const toggleEl = document.querySelectorAll(".checkbox");
toggleEl.forEach(function (toggle) {
  toggle.addEventListener("click", function (event) {
    event.target.classList.toggle("checkON");
  });
});

// generate
const generateEL = document.querySelector(".generate");
const lengthEL = document.querySelector(".lenInput");

console.log(lengthEL.value);
generateEL.addEventListener("click", function () {
  const upper = document.querySelector(".upper").classList.contains("checkON");
  const symbol = document
    .querySelector(".symbol")
    .classList.contains("checkON");
  const lower = document.querySelector(".lower").classList.contains("checkON");
  const number = document
    .querySelector(".number")
    .classList.contains("checkON");
  let length = lengthEL.value;
  if (length > 0 && lower && upper && symbol && number) {
    generateEL.innerHTML = passwordGEn(length);
    generateEL.style.background = "red";
    console.log(length);
  }
});

// final password
const submitEL = document.querySelector(".submit");

submitEL.addEventListener("click", function () {
  submitEL.innerHTML = generateEL.innerHTML;
  generateEL.innerHTML = "CLICK TO GENERATE";
  generateEL.style.background = "grey";
  lengthEL.value = null;

  submitEL.style.background = "green";
  submitEL.style.color = "white";

  toggleEl.forEach(function (toggle) {
    toggle.classList.remove("checkON");
  });
});
