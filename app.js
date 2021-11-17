const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//Click
// clearBtn.addEventListener("click", runEvent.bind("the Text!"));

//Double Click

// clearBtn.addEventListener("dbClick", runEvent);

//Mouse Down
// clearBtn.addEventListener("mousedown", runEvent.bind("text"));

//Mouse Up
// clearBtn.addEventListener("mouseup", runEvent.bind("text"));

//Mouse Enter
// clearBtn.addEventListener("mouseenter", runEvent);

//Mouse Leave
// clearBtn.addEventListener("mouseleave", runEvent);

//Mouse Over
// clearBtn.addEventListener("mouseover", runEvent);

//Mouse Out
// clearBtn.addEventListener("mouseout", runEvent);

//Mouse Move
clearBtn.addEventListener("mousemove", runEvent);

//Event Handler
function runEvent(text) {
  event.preventDefault();
  console.log(text);
  console.log(`EVENT TYPE ${event.type} `);
}
