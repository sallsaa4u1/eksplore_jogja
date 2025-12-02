const form = document.getElementById("contactForm");
const statusText = document.getElementById("statusText");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    statusText.innerHTML = "Pesan terkirim!";
    statusText.style.color = "green";

    form.reset();
});
