const wisataData = [
    { id: 1, nama: "Candi Prambanan", lokasi: "Sleman", kategori: "Budaya", gambar: "assets/img/prambanan.jpeg" },
    { id: 2, nama: "Gembira Loka", lokasi: "Kotagede", kategori: "Rekreasi", gambar: "assets/img/gembira-loka.webp" },
    { id: 3, nama: "Pantai Parangtritis", lokasi: "Bantul", kategori: "Pantai", gambar: "assets/img/pantai parangtritis.webp" }
];

const container = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function getFav() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}
function saveFav(arr) {
    localStorage.setItem("favorites", JSON.stringify(arr));
}

function render() {
    const q = searchInput.value.toLowerCase();
    const cat = categorySelect.value;

    const list = wisataData.filter(w =>
        w.nama.toLowerCase().includes(q) &&
        (cat === "Semua" || w.kategori === cat)
    );

    container.innerHTML = "";

    list.forEach(w => {
        const fav = getFav();
        const isFav = fav.includes(w.id);

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${w.gambar}">
            <div class="title">${w.nama}</div>
            <div class="loc">${w.lokasi} • ${w.kategori}</div>

            <div class="actions">
                <button class="detail-btn" onclick="window.location.href='detail.html?id=${w.id}'">Detail</button>
                <button class="love-btn" onclick="toggleFav(${w.id})">
                    ${isFav ? "❤️" : "🤍"}
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

function toggleFav(id) {
    let fav = getFav();

    if (fav.includes(id)) {
        fav = fav.filter(x => x !== id);
    } else {
        fav.push(id);
    }

    saveFav(fav);
    render();
}

searchInput.addEventListener("input", render);
categorySelect.addEventListener("change", render);

render();
