document.getElementById("loginForm").addEventListener("submit", function (e) {
    const username = document.getElementById("user-name").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const diploma = document.getElementById("options").value.trim();

    if (!username || !password) {
        e.preventDefault();
        alert("Both fields are required!");
    }
});