function updateTime() {
  //Barcelona
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Hongkong
  let hongkongElement = document.querySelector("#hongkong");
  if (hongkongElement) {
    let hongkongDateElement = hongkongElement.querySelector(".date");
    let hongkongTimeElement = hongkongElement.querySelector(".time");
    let hongkongTime = moment().tz("Hongkong");

    hongkongDateElement.innerHTML = hongkongTime.format("MMMM Do YYYY");
    hongkongTimeElement.innerHTML = hongkongTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `
        <div class="city">
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "hh:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
        </div>
    `;

}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

