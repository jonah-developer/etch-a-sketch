const container = document.querySelector(".container");
const changeGridButton = document.querySelector("#change-grid");
let newSquareQuantity;

for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.style.width = "60px";
    square.style.height = "60px";
    square.addEventListener("mouseover", () => {
        square.classList.add("hover");
    });
    container.appendChild(square);
}
changeGridButton.addEventListener("click", () => {
    
    do {
       newSquareQuantity = Number(prompt("How many squares?"));
    } while (newSquareQuantity > 100)

    container.innerHTML = "";
    for (let i = 1; i <= newSquareQuantity; i++) {
        const square = document.createElement("div");
        const containerDimension = 960;
        const squareDimension = containerDimension / Math.sqrt(newSquareQuantity);
        square.style.width = `${squareDimension}px`;
        square.style.height = `${squareDimension}px`;
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });
        container.appendChild(square);
    }
});
