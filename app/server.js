'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'db',
	user : 'users_service',
	password : '123',
	database : 'fiap_32aso'
});





// App
const app = express();
app.get('/', (req, res) => {

	connection.connect();

	connection.query('SELECT * FROM alunos;',function(err, rows, fields) {
		if(!err)
		       res.send('Hello world 1\n');
		       // console.log('resultado',rows);
		else
        	       res.send(err);
			//console.log('Erro');
	});

	connection.end();


  	res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
