const ordersFirstBlok = document.getElementById("ordersFirstBlokID");
const ordersSecondBlok = document.getElementById("ordersSecondBlokID");
const ordersBakcBloks = document.getElementById("ordersBakcBloksID");
const orderFBloks = ordersFirstBlok.children;
const orderSBloks = ordersSecondBlok.children;

const ordersArrowPrev = document.querySelector("#ordersArrowPrev");
const ordersArrowNext = document.querySelector("#ordersArrowNext");

let orderElement1 = orderFBloks[0].cloneNode(true);
let orderElement2 = orderFBloks[1].cloneNode(true);

ordersBakcBloks.appendChild(orderElement1);
ordersBakcBloks.appendChild(orderElement2);

let orderCount = 1;
let windowW = window.innerWidth;

ordersArrowNext.addEventListener("click", () => {
    windowW = window.innerWidth;

    if (windowW >= 740 && windowW <= 970) {
        if (orderCount > 5) return;

        if (orderCount >= 0 && orderCount < 3) {

            orderCount++;
            orderElement1 = orderFBloks[orderCount - 1].cloneNode(true);
            orderElement2 = orderFBloks[orderCount].cloneNode(true);
            ordersBakcBloks.innerHTML = '';
            ordersBakcBloks.appendChild(orderElement1);
            ordersBakcBloks.appendChild(orderElement2);
        } else if (orderCount >= 3) {

            console.log(orderCount);
            orderCount++;
            orderElement1 = orderSBloks[orderCount - 4].cloneNode(true);
            orderElement2 = orderSBloks[orderCount - 3].cloneNode(true);
            ordersBakcBloks.innerHTML = '';
            ordersBakcBloks.appendChild(orderElement1);
            ordersBakcBloks.appendChild(orderElement2);
        }
    }
});


ordersArrowPrev.addEventListener("click", () => {
    windowWidth = window.innerWidth;

    if (windowW >= 740 && windowW <= 970) {
        if (orderCount <= 1) return;

        if (orderCount > 1 && orderCount <= 4) {

            orderCount--;
            orderElement1 = orderFBloks[orderCount - 1].cloneNode(true);
            orderElement2 = orderFBloks[orderCount].cloneNode(true);
            ordersBakcBloks.innerHTML = '';
            ordersBakcBloks.appendChild(orderElement1);
            ordersBakcBloks.appendChild(orderElement2);
        } else if (orderCount >= 3) {

            console.log(orderCount);
            orderCount--;
            orderElement1 = orderSBloks[orderCount - 4].cloneNode(true);
            orderElement2 = orderSBloks[orderCount - 3].cloneNode(true);
            ordersBakcBloks.innerHTML = '';
            ordersBakcBloks.appendChild(orderElement1);
            ordersBakcBloks.appendChild(orderElement2);
        }
    }
});