document.getElementById("adminForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    // akun admin
    const adminEmail = "sallsa@gmail.com";
    const adminPass = "190509";

    if (email === adminEmail && pass === adminPass) {
        document.getElementById("statusText").innerHTML = "Login berhasil!";
        document.getElementById("statusText").style.color = "green";

        localStorage.setItem("adminLogin", "true");

        setTimeout(() => {
            window.location.href = "admin-dashboard.html";
        }, 800);

    } else {
        document.getElementById("statusText").innerHTML = "Email atau password salah!";
        document.getElementById("statusText").style.color = "red";
    }
});
