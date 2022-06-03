
/* Scroll */

const links = document.querySelectorAll(".scroll");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

 /* Menu */

 function openModal() {
    document.getElementById("mobile").style.top = "0px";
}

function closeModal() {
    document.getElementById("mobile").style.top = "-800px";
}