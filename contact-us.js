let barIconEl = document.getElementById("barIcon");
let xIconEl = document.getElementById("xIcon");
let listItemsEl = document.getElementById("listItems");

barIconEl.addEventListener("click", () => {
    xIconEl.classList.toggle("nav-lg-display");
    barIconEl.classList.toggle("nav-lg-display");
    listItemsEl.classList.toggle("nav-lg-display");
});

xIconEl.addEventListener("click", () => {
    barIconEl.classList.toggle("nav-lg-display");
    xIconEl.classList.toggle("nav-lg-display");
    listItemsEl.classList.toggle("nav-lg-display");
});


let numberOfAdultsInputEl = document.getElementById("numberOfAdultsInput");
let calculateButtonEl = document.getElementById("calculateButton");
let calculatedPriceEl = document.getElementById("calculatedPrice");
let myFormEl = document.getElementById("myForm");

calculateButtonEl.addEventListener("click", () => {
    let numberOfAdultsInputValue = numberOfAdultsInputEl.value;
    if (parseInt(numberOfAdultsInputValue)  >= 4) {
        calculatedPriceEl.textContent = numberOfAdultsInputValue * 8999;
    } else {
        calculatedPriceEl.textContent = numberOfAdultsInputValue * 9999;
    }
});

myFormEl.addEventListener("submit", () => {
    event.preventDefault();
});


let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");
let emailEl = document.getElementById("email");
let numberEl = document.getElementById("number");
let submitButtonEl = document.getElementById("submitButton");
let messageEl = document.getElementById("message");
let phoneNumber = +918062180917;

submitButtonEl.addEventListener("click", () => {
    let firstNameValue = firstNameEl.value;
    let lastNameValue = lastNameEl.value;
    let emailValue = emailEl.value;
    let numberValue = numberEl.value;
    let messageValue = messageEl.value;
    let numberOfAdultsInputValue = numberOfAdultsInputEl.value;

    let url = "https://wa.me/" + phoneNumber + "?text=" 
    + "First Name :" + firstNameValue + "%0a" 
    + "Last Name :" + lastNameValue + "%0a"
    + "Email :" + emailValue + "%0a"
    + "Contact :" + numberValue + "%0a"
    + "No of Adults :" + numberOfAdultsInputValue + "%0a"
    + "Message :" + messageValue + "%0a%0a"

    window.open(url, '_blank');
})