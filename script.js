document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'namhoang' && password === '123') {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
});