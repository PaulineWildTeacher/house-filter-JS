import { createCard } from "./createCard.js";

const checkbox = document.querySelector("#available-checkbox");
const select = document.querySelector(".select");
const inputSearch = document.querySelector(".search-input");

function filterAvailableHouses() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const availableValue = card.dataset.available;
    // let isAvailable;
    // if (availableValue === "true") {
    //     isAvailable = true
    // } else {
    //     isAvailable = false
    // }
    const isAvailable = availableValue === "true";

    if (checkbox.checked) {
      if (isAvailable) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    } else {
      card.style.display = "flex";
    }
  });
}

function filterHousesByType() {
  const cards = document.querySelectorAll(".card");
  const selectedType = select.value;

  cards.forEach((card) => {
    const houseType = card.dataset.type;

    if (selectedType === "All" || houseType === selectedType) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function filterBySearch(event) {
  event.preventDefault();
  const value = event.target.value;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    console.log("card", card);
    console.log("card", card.childNodes[1].childNodes[0].childNodes[0].data);
  });
}

checkbox.addEventListener("change", filterAvailableHouses);
select.addEventListener("change", filterHousesByType);
inputSearch.addEventListener("input", filterBySearch);
createCard();
