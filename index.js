let Cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: prompt("Enter Your Name"),
};

let playerEl = document.getElementById("Player-el");
playerEl.textContent = "Player Name:" + player.name;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13);

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  Cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards:";

  for (let i = 0; i < Cards.length; i += 1) {
    cardsEl.textContent += Cards[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?" + "😅🤗😋😉";
    isAlive = true;
  } else if (sum === 21) {
    message = "wohoo! you got Blackjack! 🤯🤑🎴🥁♠";
    hasBlackJack = true;
  } else {
    message = "you're out of the Game!😭🤦‍♀️🤳🤬";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    Cards.push(card);

    renderGame();
  }
}
