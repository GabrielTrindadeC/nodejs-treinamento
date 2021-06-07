// primeiro a configuração dos modulos
const express = require('express');
const consign = require('consign')

const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
consign().include('models').then('controllers').then('routes').into(app)
app.listen(3000, () => {console.log("Servidor na porta 3000")}); //primeiro parametro = porta


