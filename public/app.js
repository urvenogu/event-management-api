document.getElementById("google").onclick = async () => {
    const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({provider: "google", callbackURL: "/"}),
    });
    const data = await res.json();
    window.location.href = data.url;
};

fetch("/api/auth/get-session")
    .then((res) => res.json())
    .then((data) => (document.getElementById("session").textContent = JSON.stringify(data, null, 2)));