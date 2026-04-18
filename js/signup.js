document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        alert('Semua field harus diisi.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok.');
        return;
    }

    // Dummy sign up
    alert('Pendaftaran berhasil! Sistem akan segera terhubung.');
    // Redirect to login or something
    window.location.href = 'login.html';
});
<parameter name="filePath">e:\FIKSI\js\sing_up.js</parameter>