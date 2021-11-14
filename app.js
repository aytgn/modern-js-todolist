let val;

const list = document.querySelector("ul.collection"); //firstOne
const listItem = document.querySelector("li.collection-item"); //firstOne

val = listItem;
val = list;

//Get child nodes
val = list.childNodes; //also invisible notes like commends line breaks etc.
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //element = 1 attribute = 2  text=3 comment= 8 document= 9 docType=10

//Get children element nodes
val = list.children; //just html elements
list.children[1].textContent = "Hello!";

val = list.firstChild; //Nodes
val = list.firstElementChild; //First Element Child
val = list.lastChild;
val = list.lastElementChild;

//get parent nodes
val = listItem.parentNode;
val =
  listItem.parentElement.parentElement.parentElement.parentElement.parentElement
    .parentElement.parentElement; //body!

//get siblings
val = listItem.nextElementSibling;
val = listItem.nextSibling;
val = listItem.previousElementSibling;
val = listItem.previousSibling;

console.log(val);
