const ordersFirstBlok1 = document.getElementById("ordersFirstBlokID");
const ordersSecondBlok1 = document.getElementById("ordersSecondBlokID");
const ordersBakcBloks1 = document.getElementById("ordersBakcBloksID1");
const orderFBloks1 = ordersFirstBlok1.children;
const orderSBloks1 = ordersSecondBlok1.children;

const ordersArrowPrev1 = document.querySelector("#ordersArrowPrev");
const ordersArrowNext1 = document.querySelector("#ordersArrowNext");

let orderEl = orderFBloks1[0].cloneNode(true);

ordersBakcBloks1.appendChild(orderEl);

let orderCount1 = 0;
let windowW1 = window.innerWidth;

ordersArrowNext1.addEventListener("click", () => {
    windowW1 = window.innerWidth;

    if (windowW >= 0 && windowW <= 740) {
        if (orderCount1 > 6) return;

        if (orderCount1 >= 0 && orderCount1 < 3) {
            orderCount1++;
            orderEl = orderFBloks1[orderCount1].cloneNode(true);
            ordersBakcBloks1.innerHTML = '';
            ordersBakcBloks1.appendChild(orderEl);
        } else if (orderCount1 >= 3) {

            orderCount1++;
            orderEl = orderSBloks1[orderCount1 - 4].cloneNode(true);
            ordersBakcBloks1.innerHTML = '';
            ordersBakcBloks1.appendChild(orderEl);

        }
    }
});


ordersArrowPrev1.addEventListener("click", () => {
    windowW1 = window.innerWidth;

    if (windowW1 >= 0 && windowW1 <= 740) {
        if (orderCount1 <= 0) return;

        if (orderCount1 >= 1 && orderCount1 <= 4) {

            orderCount1--;
            orderEl = orderFBloks1[orderCount1].cloneNode(true);
            ordersBakcBloks1.innerHTML = '';
            ordersBakcBloks1.appendChild(orderEl);
        } else if (orderCount1 >= 3) {

            orderCount1--;
            orderEl = orderSBloks1[orderCount1 - 4].cloneNode(true);
            ordersBakcBloks1.innerHTML = '';
            ordersBakcBloks1.appendChild(orderEl);
        }
    }
});