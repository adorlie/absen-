// Menunggu hingga halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Ambil tombol logout
    const logoutButton = document.querySelector("header button");

    // Jika tombol logout ada, tambahkan event klik
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            konfirmasiLogout();
        });
    }

});

// Fungsi konfirmasi logout
function konfirmasiLogout() {
    const yakin = confirm("Apakah Anda yakin ingin logout?");

    if (yakin) {
        alert("Anda berhasil logout.");
        window.location.href = "logout.html";
    } else {
        alert("Logout dibatalkan.");
    }
}
