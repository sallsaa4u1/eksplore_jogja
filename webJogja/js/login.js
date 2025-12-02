document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const status = document.getElementById("statusText");

    if (!nama || !email || !pass) {
        status.textContent = "Semua field wajib diisi!";
        status.style.color = "red";
        return;
    }

    // Simpan login
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userName", nama);
    localStorage.setItem("userEmail", email);

    status.textContent = "Login berhasil! Mengalihkan...";
    status.style.color = "green";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
});
