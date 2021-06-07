const mongoose = require('mongoose')
module.exports = (app) => {
    const RastreadorController = {
        cadastrar(request, response) {
            const Rastreador = app.models.rastreador;
            const rastreador = new Rastreador(request.body)
            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
            .then((resultado) => {
                console.log("Conexão com o mongo realizada")
                const resultadoCreate = Rastreador.create(rastreador)
                    .then((resultado) => {
                        console.log(`Rastreador ${rastreador.codigoRastreador} cadastrado com sucesso.`)
                        mongoose.disconnect()
                        response.status(200).send(resultado)
                    })
                    .catch((erro) =>{
                        console.log(`Erro ao cadastrar o Rastreador: ${erro}`)
                        mongoose.disconnect()
                        response.status(500).send("Erro ao cadastrar")
                    })
            })
            .catch((erro) => {
                console.log(`Erro ao conectar com o banco Mongo: ${erro}`)
                response.status(500).send("Erro ao conectar")
            })
        }
    }
    return RastreadorController
}