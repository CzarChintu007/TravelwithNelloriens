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



let coorgBookNowButtonEl = document.getElementById("coorgBookNowButton");
coorgBookNowButtonEl.addEventListener("click", () => {
    window.location.href = "Coorg-Chikmagalur.html";
 });

let ootyBookNowButtonEl = document.getElementById("ootyBookNowButton");
 ootyBookNowButtonEl.addEventListener("click", () => {
     window.location.href = "";
  });

let ootywithIshabookNowButtonEl = document.getElementById("ootywithIshabookNowButton");
  ootywithIshabookNowButtonEl.addEventListener("click", () => {
    window.location.href = "Ooty-with-Isha.html"
  });

let manaliKasolShimlaBookNowButtonEl = document.getElementById("manaliKasolShimlaBookNowButton");
manaliKasolShimlaBookNowButtonEl.addEventListener("click", () => {
    window.location.href = "Manali-Kasol-Shimla.html";
});

let RajasthanBookNowButtonEl = document.getElementById("RajasthanBookNowButton");
RajasthanBookNowButtonEl.addEventListener("click", () => {
  window.location.href = "Rajasthan.html"
});


