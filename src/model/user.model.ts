import { IPost } from "./post.model";

export interface IUser {
    email: string;
    usuario: string;
    senha: string;
    nome: string;
    dataNasc: Date;
    generoMusical: string[];
    instrumentos: [{
        nomeInstrumento: string;
        nivelExperiencia: string;
    }];
    estadoUF: string;
    cidade: string;
    posts: [{
        createdAt: Date;
        updatedAt: Date;
        postTxt: string;
        midia: Object;
        events: [{
            nomeEvento: string;
            dataEvento: Date;
        }];
        comments: [{
            usuario: string;
            comment: string;
        }];
        sharings: [{
            usuario: string;
        }];
        likes: [{
            usuario: string;
        }];
        savings: [{
            usuario: string;
        }];
        isShared: boolean;
    }];
    createdAt: Date;
    updatedAt: Date;
}

