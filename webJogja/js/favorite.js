// Ambil data favorite dari localStorage
function getFavorites() {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : [];
}

function getData() {
    const raw = localStorage.getItem("wisataData");
    return raw ? JSON.parse(raw) : wisataData; // dari data.js
}

// Render halaman favorite
function renderFavoritePage() {
    const favBox = document.getElementById("favContainer");
    const emptyText = document.getElementById("emptyText");

    const favList = getFavorites();
    const all = getData();

    favBox.innerHTML = "";

    if (favList.length === 0) {
        emptyText.style.display = "block";
        return;
    }

    emptyText.style.display = "none";

    favList.forEach(id => {
        const w = all.find(x => x.id === id);
        if (!w) return;

        const card = document.createElement("div");
        card.classList.add("fav-card");

        card.innerHTML = `
            <img src="${w.gambar}">
            <div class="fav-title">${w.nama}</div>
            <div class="fav-loc">${w.lokasi} • ${w.kategori}</div>

            <div class="btn-row">
                <button class="btn-detail" onclick="window.location.href='detail.html?id=${w.id}'">Detail</button>
                <button class="btn-delete" onclick="removeFav(${w.id})">Hapus</button>
            </div>
        `;

        favBox.appendChild(card);
    });
}

// Hapus Favorite
function removeFav(id) {
    let fav = getFavorites();
    fav = fav.filter(x => x !== id);
    localStorage.setItem("favorites", JSON.stringify(fav));
    renderFavoritePage();
}

renderFavoritePage();
