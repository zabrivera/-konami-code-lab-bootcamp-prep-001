// the array we are checking against, sequentially
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // Keep track of index outside of the event handler.
  var index = 0;

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    // assign the key event passed by the event listener
    var key = e.key;
    // if key is equal to the current index value, increment the index
    if (key === codes[index]) {
      index++;
      // additionally, if the index is equal to the length of the codes array, alert the user
      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else { // if it isn't, reset the index
      index = 0;
    }
  }

  // Attaching an keydown event listener to document.body
  // this event listener will run the function onKeyDownHandler() every time it is triggered by an event
  document.body.addEventListener("keydown", (event) => {
      onKeyDownHandler(event)
  })
}
