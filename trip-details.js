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


let overviewButtonEl = document.getElementById("overviewButton");
let itinearyButtonEl = document.getElementById("itinearyButton");
let includesButtonEl = document.getElementById("includesButton");
let datesButtonEl = document.getElementById("datesButton");
let customButtonEl = document.getElementById("customButton");

let overviewContainerEl = document.getElementById("overviewContainer");
let itinearyContainerEl = document.getElementById("itinearyContainer");
let includesContainerEl = document.getElementById("includesContainer");
let availableDatesContainerEl = document.getElementById("availableDatesContainer");
let customContainerEl = document.getElementById("customContainer");

itinearyContainerEl.classList.add("remove-content-display");
includesContainerEl.classList.add("remove-content-display");
availableDatesContainerEl.classList.add("remove-content-display");
customContainerEl.classList.add("remove-content-display");

overviewButtonEl.classList.add("add-button-color");



overviewButtonEl.addEventListener("click", () => {
    overviewContainerEl.classList.remove("remove-content-display");

    itinearyContainerEl.classList.add("remove-content-display");
    includesContainerEl.classList.add("remove-content-display");
    availableDatesContainerEl.classList.add("remove-content-display");
    customContainerEl.classList.add("remove-content-display");

    overviewButtonEl.classList.add("add-button-color");
    itinearyButtonEl.classList.remove("add-button-color");
    includesButtonEl.classList.remove("add-button-color");
    datesButtonEl.classList.remove("add-button-color");
    customButtonEl.classList.remove("add-button-color");
});

itinearyButtonEl.addEventListener("click", () => {
    itinearyContainerEl.classList.remove("remove-content-display");

    overviewContainerEl.classList.add("remove-content-display");
    includesContainerEl.classList.add("remove-content-display");
    availableDatesContainerEl.classList.add("remove-content-display");
    customContainerEl.classList.add("remove-content-display");

    itinearyButtonEl.classList.add("add-button-color");
    overviewButtonEl.classList.remove("add-button-color");
    includesButtonEl.classList.remove("add-button-color");
    datesButtonEl.classList.remove("add-button-color");
    customButtonEl.classList.remove("add-button-color");
});

includesButtonEl.addEventListener("click", () => {
    includesContainerEl.classList.remove("remove-content-display");

    overviewContainerEl.classList.add("remove-content-display");
    itinearyContainerEl.classList.add("remove-content-display");
    availableDatesContainerEl.classList.add("remove-content-display");
    customContainerEl.classList.add("remove-content-display");

    includesButtonEl.classList.add("add-button-color");
    itinearyButtonEl.classList.remove("add-button-color");
    overviewButtonEl.classList.remove("add-button-color");
    datesButtonEl.classList.remove("add-button-color");
    customButtonEl.classList.remove("add-button-color");
});

datesButtonEl.addEventListener("click", () => {
    availableDatesContainerEl.classList.remove("remove-content-display");

    overviewContainerEl.classList.add("remove-content-display");
    itinearyContainerEl.classList.add("remove-content-display");
    includesContainerEl.classList.add("remove-content-display");
    customContainerEl.classList.add("remove-content-display");

    datesButtonEl.classList.add("add-button-color");

    includesButtonEl.classList.remove("add-button-color");
    itinearyButtonEl.classList.remove("add-button-color");
    overviewButtonEl.classList.remove("add-button-color");
    customButtonEl.classList.remove("add-button-color");
});

customButtonEl.addEventListener("click", ()=> {
    customContainerEl.classList.remove("remove-content-display");

    overviewContainerEl.classList.add("remove-content-display");
    itinearyContainerEl.classList.add("remove-content-display");
    includesContainerEl.classList.add("remove-content-display");
    availableDatesContainerEl.classList.add("remove-content-display");

    customButtonEl.classList.add("add-button-color");

    includesButtonEl.classList.remove("add-button-color");
    itinearyButtonEl.classList.remove("add-button-color");
    overviewButtonEl.classList.remove("add-button-color");
    datesButtonEl.classList.remove("add-button-color");
});

let button8999El = document.getElementById("button8999");
let button21799El = document.getElementById("button21799");
let button9999El = document.getElementById("button9999");

button8999El.addEventListener("click", () => {
    window.location.href = "contact-us.html";
});