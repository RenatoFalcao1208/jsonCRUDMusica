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
  
// Função para buscar dados ao inserir o CPF
function buscarDados() {
    var cpf = document.getElementById('identificadorCPFput').value;

    fetch(`pessoas`, {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf === cpf);

        if (pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome;
            document.getElementById('sobrenomeAtualizar').value = pessoaEncontrada.sobrenome;
            document.getElementById('identificadorCPFput').value = pessoaEncontrada.cpf;
            document.getElementById('identificador').value = pessoaEncontrada.id;
            document.getElementById('emailAtualizar').value = pessoaEncontrada.email;
            document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha;
            document.getElementById('ruaAtualizar').value = pessoaEncontrada.rua;
            document.getElementById('cepAtualizar').value = pessoaEncontrada.cep;
            document.getElementById('cidadeAtualizar').value = pessoaEncontrada.cidade;
            document.getElementById('estadoAtualizar').value = pessoaEncontrada.estado;
            document.getElementById('telefoneAtualizar').value = pessoaEncontrada.telefone;
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade;
            
            // Preencher o estilo favorito
            const estiloFavorito = pessoaEncontrada.estiloFavorito;
            if (estiloFavorito) {
                select1.value = estiloFavorito;

                // Carregar os álbuns de acordo com o estilo favorito
                if (opcoesPorCategoria[estiloFavorito]) {
                    // Limpar os álbuns
                    select2.innerHTML = '<option value="">-- Escolha um álbum --</option>';
                    select3.innerHTML = '<option value="">-- Escolha um álbum --</option>';
                    select4.innerHTML = '<option value="">-- Escolha um álbum --</option>';

                    // Carregar álbuns para o estilo selecionado
                    opcoesPorCategoria[estiloFavorito].forEach(item => {
                        const option1 = document.createElement('option');
                        const option2 = document.createElement('option');
                        const option3 = document.createElement('option');
                        option1.value = item.toLowerCase();
                        option1.text = item;
                        option2.value = item.toLowerCase();
                        option2.text = item;
                        option3.value = item.toLowerCase();
                        option3.text = item;
                        select2.appendChild(option1);
                        select3.appendChild(option2);
                        select4.appendChild(option3);
                    });
                }
            }
            
            // Preencher os álbuns favoritos
            document.getElementById('albuns1').value = pessoaEncontrada.album1 || '';
            document.getElementById('albuns2').value = pessoaEncontrada.album2 || '';
            document.getElementById('albuns3').value = pessoaEncontrada.album3 || '';
        } else {
            alert("Pessoa não encontrada");
        }
    });
}

// Função para atualizar dados ao enviar os campos alterados
function atualizarDados() {
    var id = document.getElementById('identificador').value;
    var cpf = document.getElementById('identificadorCPFput').value;
    var nome = document.getElementById('nomeAtualizar').value;
    var sobrenome = document.getElementById('sobrenomeAtualizar').value;
    var email = document.getElementById('emailAtualizar').value;
    var senha = document.getElementById('senhaAtualizar').value;
    var rua = document.getElementById('ruaAtualizar').value;
    var cep = document.getElementById('cepAtualizar').value;
    var cidade = document.getElementById('cidadeAtualizar').value;
    var estado = document.getElementById('estadoAtualizar').value;
    var telefone = document.getElementById('telefoneAtualizar').value;
    var idade = document.getElementById('idadeAtualizar').value;

    // Estilo e álbuns selecionados
    var estiloFavorito = select1.value;
    var album1 = select2.value;
    var album2 = select3.value;
    var album3 = select4.value;

    // Criando o corpo da requisição
    var dadosAtualizados = {
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
    };

    fetch(`pessoas/${id}`, {
        method: 'PUT', // Método PUT para atualização
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo
        },
        body: JSON.stringify(dadosAtualizados) // Enviar dados atualizados com estilo e álbuns
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log("Pessoa atualizada com sucesso:", dados);
        alert("Dados atualizados com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao atualizar pessoa:", error);
        alert("Erro ao atualizar os dados.");
    });
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "BemVindo.html";
  }
