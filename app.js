//EVENT BUBBLING

// const cardTitle = document.querySelector(".card-title");
// cardTitle.addEventListener("click", runEvent.bind(cardTitle, "Card Title"));

// const cardContent = document.querySelector(".card-content");
// cardContent.addEventListener(
//   "click",
//   runEvent.bind(cardContent, "Card Content")
// );

// const card = document.querySelector(".card");
// card.addEventListener("click", runEvent.bind(card, "Card"));

// function runEvent(text) {
//   console.log(text);
// }

//EVENT DELEGATION
// const deleteItem = document.querySelector(".delete-item ");
// deleteItem.addEventListener("click", delItem);

const body = document.querySelector("body");
body.addEventListener("click", delItem);

function delItem(event) {
  console.log(event.target); //has event already!!
  if (event.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    event.target.parentElement.parentElement.remove();
  }
}
