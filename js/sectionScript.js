const sectionButton = document.getElementById("sectionButtonID");
const backsectionButton = document.getElementById("backSectionButtonID");
const buttonLink = sectionButton.children;

const sectionArrowPrev = document.querySelector("#sectionArrowPrev");
const sectionArrowNext = document.querySelector("#sectionArrowNext");

let count = 2;
let windowWidth = window.innerWidth;

let element1 = buttonLink[1].cloneNode(true);
let element2 = buttonLink[2].cloneNode(true);

backsectionButton.style.paddingRight = "150px"

backsectionButton.appendChild(element1);
backsectionButton.appendChild(element2);


sectionArrowNext.addEventListener("click", () => {
    windowWidth = window.innerWidth;

    if (windowWidth >= 740 && windowWidth <= 970) {
        if (count > 4) return;

        count++;
        element1 = buttonLink[count - 1].cloneNode(true);
        element2 = buttonLink[count].cloneNode(true);
        backsectionButton.innerHTML = '';
        backsectionButton.appendChild(element1);
        backsectionButton.appendChild(element2);
    }
});


sectionArrowPrev.addEventListener("click", () => {
    windowWidth = window.innerWidth;

    if (windowWidth >= 740 && windowWidth <= 970) {
        if (count === 2) return;

        count--;
        element1 = buttonLink[count - 1].cloneNode(true);
        element2 = buttonLink[count].cloneNode(true);
        backsectionButton.innerHTML = '';
        backsectionButton.appendChild(element1);
        backsectionButton.appendChild(element2);
    }
});