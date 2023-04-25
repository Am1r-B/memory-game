document.addEventListener("DOMContentLoaded", () => {
  // Card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.sort(() => Math.random() - 0.5);

  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  createBoard();

  // Create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.dataset.id = i;
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // Flip your card
  function flipCard() {
    let cardId = this.dataset.id;
    if (cardsChosenId[0] === cardId) return;
    cardsChosenId.push(cardId);
    cardsChosen.push(cardArray[cardId].name);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // Check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      alert("Sorry, try again");
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length >= cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
      document.addEventListener(
        "click",
        (e) => {
          e.stopImmediatePropagation();
        },
        { capture: true }
      );
    }
  }
});
