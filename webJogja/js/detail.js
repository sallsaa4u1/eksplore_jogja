const wisataData = [
    {
        id: 1,
        nama: "Candi Prambanan",
        lokasi: "Sleman",
        deskripsi: "Candi Prambanan adalah kompleks candi Hindu terbesar di indonesia, dibangun padda abad ke-9 dan didedikasikan untuk Trimurti: Siswa (pelebur), Wisnu (pemelihara), dan Brahma (pencipta). Menjulang hingga 47 meter, arsitekturnya megah dengan ukiran relief kisah Ramayana dan Krishnayana yang memikat. Prambanan juga hidup dengan pusat budaya. Pada tahun 1991, Candi Prambanan diakui sebagai Situs Warisan Dunia UNESCO karena nilai budaya, sejarah, dan arsitekturnya yang memukau.",
        gambar1: "assets/img/candi prambanan.jpeg",
        gambar2: "assets/img/prambanan.jpeg"
    },
    {
        id: 2,
        nama: "Gembira Loka Zoo",
        lokasi: "Kotagede",
        deskripsi: "Gembira Loka Zoo adalah kebun binatang terkemuka di Yogyakarta yang terkenal akan koleksi satwa yang beragam, fasilitas lengkap, dan suasana yang nyaman untuk liburan keluarga. Tempat ini merupakan satu-satunya kebun binatang di Indonesia yang mendapatkan akreditasi mutu A dari Kementrian Lingkungan Hidup dan Kehutanan. Selain meliat satwa, pengunjung dapat menikmati berbagai fasilitas modern seperti travelator outdoor untuk akses mudah, fasilitas ramah disabilitas, serta aneka wahana air dan darat.",
        gambar1: "assets/img/gembira-loka.webp",
        gambar2: "assets/img/gembira.png"
    },
    {
        id: 3,
        nama: "Pantai Parangtritis",
        lokasi: "Bantul",
        deskripsi: "Pantai Parangtritis adalah destinasi wisata populer di Yogyakarta yang berlokasi di Kabupaten Bantul, sekitar 25 km dari kota. Pantai ini terkenal dengan pemandangan matahari terbenamnya, pasir hitam, dan ombak yang besar. Pengunjung dapat menikmati berbagai aktivitas seperti menyewa ATV atau bendi, bersantai, atau bermain layang-layang, namun dilarang berenang karena ombaknya yang kuat.",
        gambar1: "assets/img/pantai parangtritis.webp",
        gambar2: "assets/img/pantai.png"
    }
];

// ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// ambil elemen HTML
const titleEl = document.getElementById("detail-title");
const lokasiEl = document.getElementById("detail-lokasi");
const deskEl   = document.getElementById("detail-deskripsi");
const img1El   = document.getElementById("detail-img");
const img2El   = document.getElementById("detail-img2");

// CARI DATA BERDASARKAN ID
const data = wisataData.find(x => x.id === id);

if (!data) {
    titleEl.innerText = "Data tidak ditemukan!";
} else {
    titleEl.innerText = data.nama;
    lokasiEl.innerText = data.lokasi;
    deskEl.innerText = data.deskripsi;
    img1El.src = data.gambar1;
    img2El.src = data.gambar2;
}
