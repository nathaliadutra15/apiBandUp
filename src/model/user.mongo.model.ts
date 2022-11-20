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
    cidade: String,
    posts: [{
        createdAt: Date,
        updatedAt: Date,
        postTxt: String,
        midia:Object,
        events: [{
            nomeEvento: String,
            dataEvento: Date,
        }],
        comments: [{
            usuario: String,
            comment: String,
        }],
        sharings: [{
            usuario: String,
        }],
        likes: [{
            usuario: String,
        }],
        savings: [{
            usuario: String,
        }],
        isShared: Boolean,
    }],
    seguidores:[{
        usuario:String,
    }],
    seguindo:[{
        usuario:String,
    }],
    createdAt: Date,
    updatedAt: Date,
});


module.exports = mongoose.model("bandUp-users", postagemUser);