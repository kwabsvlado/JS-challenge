//Inputs

const button = document.getElementById("btn");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");

//Errors
const numErr = document.getElementById("num-err");
const monthErr = document.getElementById("month-err");
const cvcErr = document.getElementById("cvc-err")

//Image
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardCVC = document.getElementById("card-cvc");


//////////////

button.addEventListener("click", function () {
  cardNumber.innerText = numberInput.value;
  if (numberInput.value.length < 16) {
    numErr.innerText = "Please enter valid card!";
    numberInput.style.borderColor = "red";
    setInterval(function () {
      window.location.reload();
    }, 4000);
  }
 
    document.getElementById("number").addEventListener("input", function (e) {
      e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    });

  cardName.innerText = nameInput.value;

  cardCVC.innerText = cvcInput.value;
   if (cvcInput.value.length < 3) {
     cvcErr.innerText = "Can't be blank!";
     cvcInput.style.borderColor = "red";
     setInterval(function () {
       window.location.reload();
     }, 4000);
   }
  cardYear.innerText = yearInput.value;

  cardMonth.innerText = monthInput.value;
  if (monthInput.value.length || yearInput.value.length < 2) {
    monthErr.innerText = "Can't be blank!";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";
    setInterval(function () {
      window.location.reload();
    }, 4000);
  }

  if (nameInput.value && numberInput.value !== "") {
    document.querySelector("label").remove();
    nameInput.remove();
    document.querySelector("label").remove();
    numberInput.remove();
    document.querySelector("label").remove();
    monthInput.remove();
    document.querySelector("label").remove();
    yearInput.remove();
    document.querySelector("label").remove();
    cvcInput.remove();
    button.remove();
    cvcErr.remove()
    numErr.remove()
    monthErr.remove()

    const thankyou = document.createElement("h2");
    const text = document.createElement("p");
    const newButton = document.createElement("button");
    const div = document.querySelector(".thankyou");
    newButton.classList.add("newButton");
    text.classList.add("text");

    div.append(thankyou);
    div.append(text);
    div.append(newButton);

    thankyou.innerText = "THANK YOU!";
    text.innerText = "We've added your card details!";
    newButton.innerText = "Continue";

    newButton.addEventListener("click", function () {
      window.location.reload();
    });
  }
});
