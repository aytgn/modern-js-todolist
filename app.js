//Create element
const li = document.createElement("li");

//add class
li.className = "collection-item";

//add id
li.id = "new-item";

//add attribute
li.setAttribute("title", "New Item");

//create text node and append
li.appendChild(document.createTextNode("hello"));

//append li as child to ul
document.querySelector("ul.collection").appendChild(li);

//create new link element
const link = document.createElement("a");
const i = document.createElement("i");

link.className = "delete-item secondary content";
link.innerHTML = ' <i class="fa fa-remove"></i>';

// i.className = "fa fa-remove";
// document.querySelector("li:last-child").appendChild(i);
document.querySelector("ul.collection").appendChild(link);

console.log(link);
