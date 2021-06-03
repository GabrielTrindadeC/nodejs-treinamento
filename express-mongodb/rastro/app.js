const express =  require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect(
    'mongodb://localhost:27017/rastro-dev',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    )
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(3000, () => {console.log("servidor na porta 3000 iniciado")});

app.get('/', 
(request, response) => {
    console.log("Tudo certo na pasta raiz");
    response.send("Olá");
})
app.post('/rastreador', (request, response) => {
    console.log("Rota rastreador chamada com sucesso");
    console.log(request.body)
    response.send("ok")
})