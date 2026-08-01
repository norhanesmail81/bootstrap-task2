// Change Button Text on Click

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function () {

    learnBtn.innerHTML = "Thank You ☕";

});


// Change Layout on Click

const layoutBtn = document.getElementById("layoutBtn");

const coffeeSection = document.getElementById("coffeeSection");


layoutBtn.addEventListener("click", function () {

    coffeeSection.classList.toggle("column-layout");

});


// Mouseover and Mouseout on Image

const coffeeImg = document.getElementById("coffeeImg");


coffeeImg.addEventListener("mouseover", function () {

    coffeeImg.style.transform = "scale(1.1)";
    coffeeImg.style.transition = "0.5s";

});


coffeeImg.addEventListener("mouseout", function () {

    coffeeImg.style.transform = "scale(1)";

});