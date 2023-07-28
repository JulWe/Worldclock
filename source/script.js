function updateTime() {
//Barcelona
let madridElement = document.querySelector("#madrid");
let madridDateElement = madridElement.querySelector(".date");
let madridTimeElement = madridElement.querySelector(".time");
let madridTime = moment().tz("Europe/Madrid");

madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("hh:mm:ss [<small>]A[</small>]");

//Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format(
  "hh:mm:ss [<small>]A[</small>]"
);

//Hongkong
let hongkongElement = document.querySelector("#hongkong");
let hongkongDateElement = hongkongElement.querySelector(".date");
let hongkongTimeElement = hongkongElement.querySelector(".time");
let hongkongTime = moment().tz("Hongkong");

hongkongDateElement.innerHTML = hongkongTime.format("MMMM Do YYYY");
hongkongTimeElement.innerHTML = hongkongTime.format(
  "hh:mm:ss [<small>]A[</small>]"
);
}

updateTime();
setInterval(updateTime, 1000);