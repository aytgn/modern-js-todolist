let taskTitle;
//document.getElementById()
taskTitle = document.getElementById("task-title");

//get from element
val = taskTitle.id;
val = taskTitle.className;

//change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// document.getElementById("taskt-title").style.display = "none";

//change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = "<span style='color:red'> Task List </span>";
console.log(val);

//document.querySelector()
let val2;

val2 = document.querySelector("h5"); //get first occurrence
val2 = document.querySelector("h5:nth-child(3)"); //get 3th occurrence

console.log(val2);
