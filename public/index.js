// Selecionando os elementos do formulário (os selects para os álbuns e o estilo)
const select1 = document.getElementById('estiloFavorito');
const select2 = document.getElementById('albuns1');
const select3 = document.getElementById('albuns2');
const select4 = document.getElementById('albuns3');

// Definindo as opções dos álbuns para cada estilo musical
const opcoesPorCategoria = {
  rock: ['Nevermind', 'Mesmerize', 'Toxicity', 'Three Cheers for Sweet Revenge'],
  pop: ['Sour', 'Man`s Best Friend', 'Guts', 'Short`n Sweet'],
  indie: ['AM','Favorite Worst Nightmare','Humbug','Currents']
};

// Adicionando o evento de mudança no estilo favorito para alterar os álbuns disponíveis
select1.addEventListener('change', () => {
  const categoriaSelecionada = select1.value;

  // Limpando as opções dos selects dos álbuns
  select2.innerHTML = '<option value="">-- Escolha um álbum --</option>';
  select3.innerHTML = '<option value="">-- Escolha um álbum --</option>';
  select4.innerHTML = '<option value="">-- Escolha um álbum --</option>';

  // Se o estilo for escolhido, exibe os álbuns correspondentes
  if (categoriaSelecionada && opcoesPorCategoria[categoriaSelecionada]) {
    opcoesPorCategoria[categoriaSelecionada].forEach(item => {
      const option = document.createElement('option');
      const option2 = document.createElement('option');
      const option3 = document.createElement('option');
      option.value = item.toLowerCase();
      option.text = item;
      option2.value = item.toLowerCase();
      option2.text = item;
      option3.value = item.toLowerCase();
      option3.text = item;
      select2.appendChild(option);
      select3.appendChild(option2);
      select4.appendChild(option3);
    });
  }
});

// Função para enviar os dados via POST
function enviarDados() {
  // Pegando todos os dados do formulário
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var cpf = document.getElementById('identificadorCPF').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var rua = document.getElementById('rua').value;
  var cep = document.getElementById('cep').value;
  var cidade = document.getElementById('cidade').value;
  var estado = document.getElementById('estado').value;
  var telefone = document.getElementById('telefone').value;
  var idade = document.getElementById('idade').value;

  // Pegando o estilo e álbuns favoritos selecionados
  var estiloFavorito = document.getElementById('estiloFavorito').value;
  var album1 = document.getElementById('albuns1').value;
  var album2 = document.getElementById('albuns2').value;
  var album3 = document.getElementById('albuns3').value;

  // Enviando os dados via fetch para a API
  fetch(`pessoas`, {
    method: 'POST', // Método HTTP utilizado para enviar os dados
    headers: {
      'Content-Type': 'application/json' // Definindo que o corpo da requisição é JSON
    },
    body: JSON.stringify({
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      email: email,
      senha: senha,
      rua: rua,
      cep: cep,
      cidade: cidade,
      estado: estado,
      telefone: telefone,
      idade: idade,
      estiloFavorito: estiloFavorito,
      album1: album1,
      album2: album2,
      album3: album3
    })
  })
  .then(resposta => resposta.json()) // Converte a resposta para JSON
  .then(data => {
    // Exibe a resposta do servidor no console
    console.log('Dados enviados com sucesso:', data);
  })
  .catch(erro => {
    // Exibe um erro caso ocorra algum problema no envio
    console.error('Erro ao enviar os dados:', erro);
  });
}

function login() {
  window.location.href = "login.html";
}