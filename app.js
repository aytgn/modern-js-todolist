const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));

const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove();
list.removeChild(lis[2]);

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
link.classList.add("test");
val = link.classList[2];
link.classList.remove("test");

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.hasAttribute("title"); //false
link.setAttribute("title", "google");
link.removeAttribute("title")

console.log(val);
