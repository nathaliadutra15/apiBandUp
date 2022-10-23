import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postagemUser = new Schema({
    email: String,
    usuario: String,
    senha: String,
    nome: String,
    dataNasc: Date,
    generoMusical: Array,
    instrumentos: [{
        nomeInstrumento: String,
        nivelExperiencia: String,
    }],
    estadoUF: String,
    cidade: String

});


module.exports = mongoose.model("bandUp-users", postagemUser);