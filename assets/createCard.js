import { houseToRent } from "./houseToRent.js";

export function createCard() {
  const cards = document.querySelector(".cards");

  houseToRent.forEach((house) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.available = house.available;
    card.dataset.type = house.type;
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    // if (house.img) {
    //   cardImg.style.backgroundImage = `url("${house.img}")`;
    // } else {
    //   cardImg.style.backgroundImage = `url("http://placekitten.com/200/300")`;
    // }
    cardImg.style.backgroundImage = `url("${house.img ? house.img : ""}")`;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardHeader.appendChild(cardImg);

    const cardTitle = document.createElement("h2");
    cardTitle.innerText = house.name;
    cardTitle.classList.add("card-title");

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.innerText = house.desc;

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerText = "I want it!";

    cardBody.append(cardTitle, cardDescription, cardButton);
    card.append(cardHeader, cardBody);

    // TODO : ajouter de quoi réagir au clic sur le bouton
    // But : quand je clique sur le bouton, j'ai une mise à jour de mon élément cliqué,
    // qui passe à available = false
  });
}
