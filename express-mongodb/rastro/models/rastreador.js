const mongoose = require('mongoose');

module.exports = (app) => {
    const rastreadorSchema = mongoose.Schema(
        {
            codigoRastreador:{type: String, required:true, index: {unique: true}},
            placaVeiculo:{type:String, required:true},
            cpfCliente: {type:String, required: true}
        }
    );
    //criar a coleção
    const Rastreador = mongoose.model('rastreadores', rastreadorSchema);
    return Rastreador;
};