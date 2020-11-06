// server.js

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

// static-upload-form-ajax

app.get('/', function (req,res) {
    res.sendFile(__dirname + "/public/" +"index.html");
});

app.get('/static', function (req,res) {
    res.sendFile(__dirname + "/public/" +"static.html");
});

app.get('/upload', function (req,res) {
    res.sendFile(__dirname + "/public/" +"upload.html");
});

app.get('/form-get', function (req,res) {
    res.sendFile(__dirname + "/public/" +"form.html");
});

app.get('/json-ex', function (req,res) {
    res.sendFile(__dirname + "/public/" +"json.html");
});

app.use(express.static('public'));

app.get('/form', function(req, res)
{
    var response = {
        name: req.query.name,
        status: req.query.status,
    };
    console.log(response);
    //res.end(JSON.stringify(response));
		res.sendFile(__dirname + "/public/" +"index.html");
})

// continua do mesma forma
app.post('/file/uploading', upload.single('file'), function (req, res) {
		console.log("Arquivo salvo no diretorio uploads.");
		res.sendFile(__dirname + "/public/" +"index.html");
});

app.listen(3009, () => console.log('App na porta 3009'));
