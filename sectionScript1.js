const sectionButton1 = document.getElementById("sectionButtonID");
const backsectionButton1 = document.getElementById("backSectionButtonID1");
const buttonLink1 = sectionButton1.children;

const sectionArrowPrev1 = document.querySelector("#sectionArrowPrev");
const sectionArrowNext1 = document.querySelector("#sectionArrowNext");


let count1 = 1;
let windowWidth1 = window.innerWidth;

let el = buttonLink1[1].cloneNode(true);
backsectionButton1.appendChild(el);


sectionArrowNext1.addEventListener("click", () => {
    windowWidth1 = window.innerWidth;

    if (windowWidth1 >= 411 && windowWidth1 <= 740) {
        if (count1 > 4) return;

        count1++;
        el = buttonLink1[count1].cloneNode(true);
        backsectionButton1.innerHTML = '';
        backsectionButton1.appendChild(el);
    }
});


sectionArrowPrev1.addEventListener("click", () => {
    windowWidth1 = window.innerWidth;
    if (windowWidth1 >= 411 && windowWidth1 <= 740) {
        if (count1 === 1) return;

        count1--;
        el = buttonLink1[count1].cloneNode(true);
        backsectionButton1.innerHTML = '';
        backsectionButton1.appendChild(el);
    }
});