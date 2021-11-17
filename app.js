// //set local storage item
// localStorage.setItem("name", "john");

// //set session storage item
// sessionStorage.setItem("name", "Beth");

// //remove local storage item
// // localStorage.removeItem("name");

// //get from storage
// let userName = localStorage.getItem("name");
// console.log(userName);

// //clear local storage
// localStorage.clear();

// userName = localStorage.getItem("name");
// console.log(userName);

//get control of taskInput and taskButton
const taskInput = document.querySelector("input#task");
const TaskBtn = document.querySelector("div.card-content input.btn");

//taskButton will trigger whenever clicked
//taskButton will do these:
/**
 * 1)sync local tasks and dom tasks
 *  1.1)parse JSON to string to get local values
 * 2)assign input value to the dom task
 * 3)push dom task to dom tasks
 * 4)assign dom tasks to the local tasks
 *  4.1)parse string to JSON to assign local values
 * 5)get local values
 */

//for simplicity sake lets start with not empty tasks array
localStorage.setItem("tasks", ["wash these dishes", "pet the cat"]);

TaskBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const tasksArray = localStorage.getItem("tasks").split(","); // 1
  let task;
  task = taskInput.value; //2
  tasksArray.push(task); //3
  localStorage.setItem("tasks", tasksArray); //4
  console.log(localStorage.getItem("tasks"));
});
