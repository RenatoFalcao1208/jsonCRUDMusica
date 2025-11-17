// Importa o módulo Express
// O Express será responsável por servir páginas e integrar o JSON Server
const express = require('express');

// Importa a biblioteca json-server
// Essa biblioteca cria um servidor automático baseado em um arquivo JSON
const jsonServer = require('json-server');

// Cria uma instância do Express
const app = express();

// Configura o servidor para usar a pasta 'public' como arquivos estáticos
// Assim, HTML, CSS e JS podem ser acessados diretamente pelo navegador
app.use(express.static('public'));

// Cria um roteador do JSON Server usando o arquivo db.json
// Isso significa que todas as rotas definidas dentro do db.json serão criadas automaticamente
const router = jsonServer.router('db.json');

// Importa os middlewares padrões do JSON Server
// Eles trazem funcionalidades como logs, CORS e suporte a métodos HTTP
const middlewares = jsonServer.defaults();

// Define que todas as rotas da API JSON Server estarão no caminho '/api'
// Exemplo: GET /api/usuarios
app.use('/api', middlewares, router);

// Define a rota principal do site
// Quando alguém acessar '/', envia o arquivo index.html localizado dentro da pasta public
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Define a porta do servidor
// O Render usa uma porta dinâmica, disponível na variável de ambiente process.env.PORT
// Caso esteja rodando localmente, será usada a porta 3000
const PORT = process.env.PORT || 3000;

// Inicia o servidor Express
// Exibe uma mensagem informando que ele está rodando corretamente
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
