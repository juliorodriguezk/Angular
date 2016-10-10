var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, 'public')));
var personas = [
    {
        id: 1,
        nombre: 'Ana',
        alta: '2015-01-01',
        gastos: 300,
        edad: 24,
        ciudad: 'Valencia',
        imagen: 'mujer.png'
                }, {
        id: 2,
        nombre: 'Pedro',
        alta: '2013-11-01',
        gastos: 1000,
        edad: 34,
        ciudad: 'Madrid',
        imagen: 'hombre.png'
        }, {
        id: 3,
        nombre: 'Joan',
        alta: '2014-02-11',
        gastos: 500,
        edad: 50,
        ciudad: 'Barcelona',
        imagen: 'hombre.png'
        }, {
        id: 4,
        nombre: 'Mikel',
        alta: '2015-01-01',
        gastos: 300,
        edad: 20,
        ciudad: 'Bilbao',
        imagen: 'hombre.png'
        }, {
        id: 5,
        nombre: 'Julia',
        alta: '2010-01-01',
        gastos: 3000,
        edad: 54,
        ciudad: 'Málaga',
        imagen: 'mujer.png'
        }
 ];

app.get('/personas', function (req, res) {
    res.send(personas);
});
app.get('/personas/:id', function (req, res) {
        var id = parseInt(req.params.id),
            data = {},
            i = 0,
            len = 0;

        for (i, len = personas.length; i < len; i++) {
            if (personas[i].id === parseInt(id)) {
                data = personas[i];
            }
        }
        res.json(data);
/*
    res.send(
        HttpStatus.INTERNAL_SERVER_ERROR, {
            error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    );
*/
});
app.all('*', function (req, res) {
    res.sendfile('index.html');
});

var server = http.createServer(app).listen(3000);

console.log("Services and app started on port " + server.address().port);