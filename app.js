const express = require('express')
const hbs = require('hbs');

const app = express()




app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Gonzalo',
        titulo: 'Curso de node'
    });
});


app.get('/generic', (req,res) => {
   // res.sendfile( __dirname + '/public/generic.html');
   res.render('generic');
});

app.get('/elements', (req,res) => {
    //res.sendfile( __dirname + '/public/elements.html');
    res.render('elements');
});


app.listen(8080);