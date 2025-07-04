document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const senha = document.getElementById("senha").value;

    if (senha === "minhaesquizofrenica") {
      location.href = "pages/home.html";
    } else {
      alert("Senha incorreta!");
    }
  });
});