function itinearyPage() {
    window.location.href = "itineary.html";
}

let barIconEl = document.getElementById("barIcon");
let xIconEl = document.getElementById("xIcon");
let listItemsEl = document.getElementById("listItems");

barIconEl.addEventListener("click", () => {
    xIconEl.classList.toggle("nav-sm-display");
    barIconEl.classList.toggle("nav-sm-display");
    listItemsEl.classList.toggle("nav-sm-display");
});

xIconEl.addEventListener("click", () => {
    barIconEl.classList.toggle("nav-sm-display");
    xIconEl.classList.toggle("nav-sm-display");
    listItemsEl.classList.toggle("nav-sm-display");
});