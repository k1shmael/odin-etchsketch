/// Selects the container to put divs in
var divContainer = document.getElementById("gridContainer");

/// function to create divs
function createDivs(numDivs) {
  for (var i = 0; i < numDivs; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid");

    divContainer.appendChild(newDiv);
  }
}

createDivs(32);





///Button to change amount of divs in the grid

let change = document.getElementById("change");







let gridItems = document.getElementsByClassName('grid');
gridItems.addEventlistener();

