const onClick = function (str) {
  event.preventDefault();
  console.log("hello");
  console.log(str);
};

document
  .querySelector(".clear-tasks")
  .addEventListener("click", onClick.bind("aga")); //event default argument!

  
