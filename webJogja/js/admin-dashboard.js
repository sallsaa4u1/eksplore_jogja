// Ambil data dari localStorage (jika ada)
function getData() {
    const data = localStorage.getItem("wisataData");
    return data ? JSON.parse(data) : [];
}

// Simpan ke localStorage
function saveData(data) {
    localStorage.setItem("wisataData", JSON.stringify(data));
}

// Render tabel
function renderTable() {
    const data = getData();
    const table = document.getElementById("dataTable");
    table.innerHTML = "";

    data.forEach(w => {
        const row = `
            <tr>
                <td>${w.id}</td>
                <td>${w.nama}</td>
                <td>${w.kategori}</td>
                <td>${w.lokasi}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editData(${w.id})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteData(${w.id})">Hapus</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Tambah / Edit wisata
document.getElementById("wisataForm").addEventListener("submit", function(e){
    e.preventDefault();

    let data = getData();

    const idEdit = document.getElementById("editId").value;
    const nama = document.getElementById("nama").value;
    const lokasi = document.getElementById("lokasi").value;
    const kategori = document.getElementById("kategori").value;
    const deskripsi = document.getElementById("deskripsi").value;
    const gambar = document.getElementById("gambar").value;

    if (idEdit) {
        // UPDATE
        const idx = data.findIndex(w => w.id == idEdit);
        data[idx] = {
            id: Number(idEdit),
            nama, lokasi, kategori, deskripsi, gambar
        };
        document.getElementById("statusText").innerHTML = "Data berhasil diperbarui!";
        document.getElementById("submitBtn").textContent = "Tambah Wisata";
    } 
    else {
        // TAMBAH
        const newData = {
            id: Date.now(),
            nama, lokasi, kategori, deskripsi, gambar
        };
        data.push(newData);
        document.getElementById("statusText").innerHTML = "Data berhasil ditambahkan!";
    }

    saveData(data);
    renderTable();
    this.reset();
    document.getElementById("editId").value = "";
});

// Edit
function editData(id){
    const data = getData();
    const w = data.find(x => x.id === id);

    document.getElementById("editId").value = w.id;
    document.getElementById("nama").value = w.nama;
    document.getElementById("lokasi").value = w.lokasi;
    document.getElementById("kategori").value = w.kategori;
    document.getElementById("deskripsi").value = w.deskripsi;
    document.getElementById("gambar").value = w.gambar;

    document.getElementById("submitBtn").textContent = "Update Wisata";
}

// Hapus
function deleteData(id){
    let data = getData();
    data = data.filter(w => w.id !== id);
    saveData(data);
    renderTable();
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", function(){
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin-login.html";
});

renderTable();
