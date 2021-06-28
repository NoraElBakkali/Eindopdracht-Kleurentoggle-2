//Menu sluiten

document.getElementById("myDropdown").onclick = function () { toggleMenu() };

function toggleMenu() {
    document.getElementById("myBtn").classList.toggle("hide");
}

// Menu openen

document.getElementById("myBtn").onclick = function () { toggleMenu() };

function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Kleuren kiezen

document.getElementById("buttonmenu").addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});

document.getElementById("buttonred").addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

document.getElementById("buttonorange").addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
});

document.getElementById("buttonyellow").addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});

document.getElementById("buttonblue").addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

document.getElementById("buttongreen").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

document.getElementById("buttongreen").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

