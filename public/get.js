// Carrega os dados da API para preencher a tabela
fetch('pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        // Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        // Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCPF = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdSenha = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdCEP = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdTelefone = document.createElement('td')
            var tdAlbum1 = document.createElement('td')
            var tdAlbum2 = document.createElement('td')
            var tdAlbum3 = document.createElement('td')

            // Preenche as células da linha com as informações
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCPF.innerText = objeto.cpf
            tdEmail.innerText = objeto.email
            tdSenha.innerText = objeto.senha
            tdRua.innerText = objeto.rua
            tdCEP.innerText = objeto.cep
            tdCidade.innerText = objeto.cidade
            tdEstado.innerText = objeto.estado
            tdTelefone.innerText = objeto.telefone

            tdAlbum1.innerText = objeto.album1  // Atribui a lista de álbuns à célula
            tdAlbum2.innerText = objeto.album2  // Atribui a lista de álbuns à célula
            tdAlbum3.innerText = objeto.album3  // Atribui a lista de álbuns à célula

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCPF)
            tr.appendChild(tdEmail)
            tr.appendChild(tdSenha)
            tr.appendChild(tdRua)
            tr.appendChild(tdCEP)
            tr.appendChild(tdCidade)
            tr.appendChild(tdEstado)
            tr.appendChild(tdTelefone)
            tr.appendChild(tdAlbum1)
            tr.appendChild(tdAlbum2)
            tr.appendChild(tdAlbum3)
            tabelaCorpo.appendChild(tr)
        })
    })
    