// server.js

// inicializacoes das dependencias
var express = require('express')
var app = express()
var multer = require('multer');

// cria uma instância do middleware configurada
// destination: lida com o destino
// filenane: permite definir o nome do arquivo gravado
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// definicao das rotas

// pagina do menu principal
app.get('/', function (req,res) {
    res.sendFile(__dirname + "/public/" +"index.html");
});

// exibicao do conteudo estatico
app.get('/static', function (req,res) {
    res.sendFile(__dirname + "/public/" +"static.html");
});

// upload de arquivos
app.get('/upload', function (req,res) {
    res.sendFile(__dirname + "/public/" +"upload.html");
});

// submissao de formulario
app.get('/form-get', function (req,res) {
    res.sendFile(__dirname + "/public/" +"form.html");
});

// substituicao de paragrafos
app.get('/json-ex', function (req,res) {
    res.sendFile(__dirname + "/public/" +"json.html");
});

app.use(express.static('public'));

// tratamento do envio do formulario
app.get('/form', function(req, res)
{
    // construir campos do input
    var response = {
        name: req.query.name,
        status: req.query.status,
    };
    // tratar dados no backend
    console.log(response); // apenas imprimir objeto.
		res.sendFile(__dirname + "/public/" +"index.html");
})

// continua do mesma forma para tratar o upload
app.post('/file/uploading', upload.single('file'), function (req, res) {
		console.log("Arquivo salvo no diretorio uploads.");
		res.sendFile(__dirname + "/public/" +"index.html");
});

app.listen(3009, () => console.log('App na porta 3009'));
