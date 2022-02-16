const nextBtn = document.querySelector("#arrowNext");
const prevBtn = document.querySelector("#arrowPrev");

const logosInner = document.querySelector(".logosInner");
const logoIcons = document.querySelectorAll(".logoSlide svg");

let counter = 3;
let counter1 = 2;
let counter2 = 1;
let size = 0;
let sumSize = 0;
let sumSize1 = 0;
let sumSize2 = 0;
let sumSizeLogoIcons = 0;
let logosInnerSize = logosInner.clientWidth;
let windowSize = window.innerWidth;
let paddinglogoIcons = 0;

for (ix = 0; ix < logoIcons.length; ix++) {
    sumSizeLogoIcons += logoIcons[ix].clientWidth;
}

nextBtn.addEventListener("click", () => {

    /*Window Width*/
    windowSize = window.innerWidth;
    /*logosInner width*/
    logosInnerSize = logosInner.clientWidth;

    paddinglogoIcons = (logosInnerSize - sumSizeLogoIcons) / 6;

    if (windowSize > 800 && windowSize <= 1160) {

        if (logoIcons[counter] === undefined) {
            sumSize = 0;
            logosInner.style.transform = 'translateX(' + (-sumSize) + 'px)';

            counter = 3;
            return;
        }
        logosInner.style.transition = "transform 0.4s ease-in-out";
        size = logoIcons[counter].clientWidth;
        sumSize += size + paddinglogoIcons;

        logosInner.style.transform = 'translateX(' + (-sumSize) + 'px)';
        counter++;
    }
    if (windowSize > 600 && windowSize <= 800) {
        if (logoIcons[counter1] === undefined) {
            sumSize1 = 0;
            logosInner.style.transform = 'translateX(' + (-sumSize1) + 'px)';

            counter1 = 2;
            return;
        }
        logosInner.style.transition = "transform 0.4s ease-in-out";
        size = logoIcons[counter1].clientWidth;
        sumSize1 += size + paddinglogoIcons;

        logosInner.style.transform = 'translateX(' + (-sumSize1) + 'px)';
        counter1++;
    }
    if (windowSize > 380 && windowSize <= 600) {
        if (logoIcons[counter2] === undefined) {
            sumSize2 = 0;
            logosInner.style.transform = 'translateX(' + (-sumSize2) + 'px)';

            counter2 = 1;
            return;
        }
        logosInner.style.transition = "transform 0.4s ease-in-out";
        size = logoIcons[counter2].clientWidth;
        sumSize2 += size + paddinglogoIcons;

        logosInner.style.transform = 'translateX(' + (-sumSize2) + 'px)';
        counter2++;
    }
});


prevBtn.addEventListener("click", () => {

    /*Window Width*/
    windowSize = window.innerWidth;
    logosInnerSize = logosInner.clientWidth;

    paddinglogoIcons = (logosInnerSize - sumSizeLogoIcons) / 6;

    if (windowSize > 800 && windowSize <= 1160) {

        if (sumSize === 0) {
            counter = 4;
            logosInner.style.transition = "transform 0.4s ease-in-out";

            for (ix = 3; ix < logoIcons.length; ix++) {
                size = logoIcons[ix].clientWidth;
                sumSize += size + paddinglogoIcons;
            }
            logosInner.style.transform = 'translateX(' + (-sumSize) + 'px)';
            return;
        }

        if (counter === 3) {
            sumSize = 0;
            logosInner.style.transform = 'translateX(' + (-sumSize) + 'px)';
            counter = 5;
            return;
        }

        counter--;
        size = logoIcons[counter].clientWidth;
        sumSize -= size + paddinglogoIcons;
        logosInner.style.transform = 'translateX(' + (-sumSize) + 'px)';
    }
    if (windowSize > 600 && windowSize <= 800) {

        if (sumSize1 === 0) {
            console.log(counter1);
            counter1 = 4;
            logosInner.style.transition = "transform 0.4s ease-in-out";

            for (ix = 2; ix < logoIcons.length; ix++) {
                size = logoIcons[ix].clientWidth;
                sumSize1 += size + paddinglogoIcons;
            }
            logosInner.style.transform = 'translateX(' + (-sumSize1) + 'px)';
            return;
        }

        if (counter1 === 2) {

            sumSize1 = 0;
            logosInner.style.transform = 'translateX(' + (-sumSize1) + 'px)';
            counter1 = 5;
            return;
        }

        counter1--;
        size = logoIcons[counter1].clientWidth;
        sumSize1 -= size + paddinglogoIcons;
        logosInner.style.transform = 'translateX(' + (-sumSize1) + 'px)';
    }
    if (windowSize > 380 && windowSize <= 600) {

        if (sumSize2 === 0) {

            counter2 = 4;
            logosInner.style.transition = "transform 0.4s ease-in-out";

            for (ix = 1; ix < logoIcons.length; ix++) {
                size = logoIcons[ix].clientWidth;
                sumSize2 += size + paddinglogoIcons;
            }
            logosInner.style.transform = 'translateX(' + (-sumSize2) + 'px)';
            return;
        }

        if (counter2 === 1) {

            sumSize2 = 0;
            logosInner.style.transform = 'translateX(' + (-sumSize2) + 'px)';
            counter2 = 5;
            return;
        }

        counter2--;
        size = logoIcons[counter2].clientWidth;
        sumSize2 -= size + paddinglogoIcons;
        logosInner.style.transform = 'translateX(' + (-sumSize2) + 'px)';
    }
})
