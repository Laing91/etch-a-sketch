const gridContainer = document.getElementById("gridContainer");
for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);

  gridItem.addEventListener("mouseover", () => {
    gridItem.style.backgroundColor = "black";
  });
}

// Function to reset the grid blocks back to the default color (white).
function resetDivs() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetDivs);
