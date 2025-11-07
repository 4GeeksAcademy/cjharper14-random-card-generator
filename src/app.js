import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const suits = ["♠", "♥", "♣", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const card = document.getElementById("card");
  const button = document.getElementById("newCardBtn");

  function generateCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    card.querySelector(".top-suit").textContent = randomSuit;
    card.querySelector(".value").textContent = randomValue;
    card.querySelector(".bottom-suit").textContent = randomSuit;

    // Reset color classes
    card.classList.remove("red");

    if (randomSuit === "♥" || randomSuit === "♦") {
      card.classList.add("red");
    }
  }

  // Generate first card on load
  generateCard();

  // Generate a new card when button is clicked
  button.addEventListener("click", generateCard);
};
