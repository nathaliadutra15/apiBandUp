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
}

