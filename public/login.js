async function fazerLogin() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
  
    try {
      const response = await fetch(`pessoas?nome=${nome}&senha=${senha}`);
      const data = await response.json();
  
      if (data.length > 0) {
        const usuario = data[0];
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        window.location.href = "bemvindo.html";
      } else {
        alert("Usuário ou senha inválidos!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  function cadastro() {
    window.location.href = "index.html";
  }