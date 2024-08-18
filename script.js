const container = document.querySelector(".container");
for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.style.width = "60px";
    square.style.height = "60px";
    container.appendChild(square)
}