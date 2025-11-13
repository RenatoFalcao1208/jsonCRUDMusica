// Recupera o usuário logado
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuario) {
  // Se não houver usuário logado, redireciona pro login
  window.location.href = "login.html";
}

// Mostra o nome
document.getElementById("nome").textContent = usuario.nome;

// Mapeia as capas dos álbuns
const capas = {
  "nevermind": "/img/nevermind.jpg",
  "toxicity": "img/toxicity.jpg",
  "mesmerize": "img/mesmerize.jpg",
  "three cheers for sweet revenge": "img/three_cheers.jpg",
  "am": "img/am.jpg",
  "favorite worst nightmare": "img/favorite_worst_nightmare.jpg",
  "currents": "img/currents.jpg",
  "sour": "img/sour.jpg",
  "guts": "img/guts.jpg",
  "short`n sweet": "img/shortn_sweet.jpg",
  "man`s best friend": "img/mans.jpg",
  "humbug": "img/humbug.jpg"
};

// Mostra as capas dos álbuns
const container = document.getElementById("album-container");
[usuario.album1, usuario.album2, usuario.album3].forEach(album => {
  if (album) {
    const div = document.createElement("div");
    div.classList.add("album");
    const img = document.createElement("img");
    img.src = capas[album] || "img/default.jpg";
    img.alt = album;
    div.appendChild(img);
    container.appendChild(div);
  }
});

// Função logout
function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "BemVindo.html";
  }

function adm() {

  localStorage.removeItem("usuarioLogado");
  window.location.href = "adm.html";


}