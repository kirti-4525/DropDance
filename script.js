const container = document.querySelector(".container");

function dropped() {
    const drop = document.createElement("span");
    drop.classList.add("drop");

    drop.style.top = Math.random() * window.innerHeight + "px";
    drop.style.left = Math.random() * window.innerWidth + "px";

    setTimeout(() => {
        drop.remove();
    }, 6000);

    container.appendChild(drop);

    drop.addEventListener("click", () => {
        drop.style.animation = "ripple 0.5s ease-out";
        setTimeout(() => drop.remove(), 500);
    });
}

setInterval(dropped, 400);
