// const username = "jul@0Rus";
// const otherUsername = "johnSmithhy";

// console.log(regex.test(username));
// console.log(regex.test(otherUsername));

let a = false;
let b = false;
let c = false;
let d = false;

let error = false;

const username = document.querySelector(".input_username");

// console.log(username);
const validUser = event => {
  //console.log(username.value);
  // console.log("?");

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W\S)/;
  // const aaa = document.getElementById("aa");
  if (regex.test(username.value)) {
    console.log(error);
    if (error) {
      // console.log("?");
      const aaa = document.getElementById("aa");
      aaa.removeChild(aaa.lastChild);
      error = false;
    }
    event.target.classList.remove("inValid");
    event.target.classList.add("valid");
    a = true;
  } else {
    if (!error) {
      console.log("hellos");
      const msg = document.createElement("p");
      msg.innerText =
        "Username invalid. Did you include at least one upperCase letter, number and symbol?";
      document.querySelector("#aa").appendChild(msg);
      error = true;
    }
    event.target.classList.remove("valid");
    event.target.classList.add("inValid");
  }
};

username.addEventListener("change", validUser);

const firstName = document.querySelector(".input_first_name");

const validFirstName = event => {
  const regex = /(?=.*[a-z])/;
  if (regex.test(firstName.value)) {
    event.target.classList.remove("inValid");
    event.target.classList.add("valid");
    b = true;
    // nextPage(username.value);
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("inValid");
  }
};

firstName.addEventListener("change", validFirstName);

const lastName = document.querySelector(".input_last_name");

const validLastName = event => {
  const regex = /(?=.*[a-z])/;
  if (regex.test(lastName.value)) {
    event.target.classList.remove("inValid");
    event.target.classList.add("valid");
    c = true;
    // nextPage(username.value);
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("inValid");
  }
};

lastName.addEventListener("change", validLastName);

const dateOfBirth = document.querySelector(".input_date_of_birth");

const validDateOfBirth = event => {
  const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (regex.test(dateOfBirth.value)) {
    event.target.classList.remove("inValid");
    event.target.classList.add("valid");
    d = true;
    // nextPage(username.value);
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("inValid");
  }
};

dateOfBirth.addEventListener("change", validDateOfBirth);

const submit = document.querySelector("#submit_button");

const nextPage = event => {
  event.preventDefault(true);
  if (a && b && c && d) {
    window.location.href = "/newPage.html";
  }
};

submit.addEventListener("click", nextPage);

// function random_bg_color() {}

function setBackground() {
  window.setTimeout("setBackground()", 1000);
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  // console.log(bgColor);

  document.body.style.background = bgColor;
}

setBackground();
