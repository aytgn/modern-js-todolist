const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

taskInput.value = "";

function runEvent(event) {
  console.log(`EVENT TYPE ${event.type}`);
  console.log(taskInput.value);
  console.log(event.target.value);
  heading.innerText = event.target.value;
}

// form.addEventListener("submit", runEvent);

//Key Down
// taskInput.addEventListener("keydown", runEvent);

//Key Up
// taskInput.addEventListener("keyup", runEvent);

//Key Press
// taskInput.addEventListener("keypress", runEvent);

//Focus
taskInput.addEventListener("focus", runEvent);

//Blur
taskInput.addEventListener("blur", runEvent);
