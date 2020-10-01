const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

// settings
app.set('port', process.env.PORT || 3000);

//middlewares

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Routes
require('./routes/leads.routes')(app);

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});

