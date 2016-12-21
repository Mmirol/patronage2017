'use strict';

let counter = 0,
    button = document.getElementById("myBox"),
    displayClickCount = document.getElementById("clickCount");


button.addEventListener("click", () => {

  counter++;
  displayClickCount.textContent = counter;
  
});
