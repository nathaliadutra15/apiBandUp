export interface IPost {
    createdAt: Date;
    updatedAt: Date;
    postTxt: string;
    midia: any;
    events: [{
        nomeEvento: string;
        dataEvento: Date;
    }];
    comments:[{
        usuario:string;
        comment:string;
    }];
    sharings:[{
        usuario:string;
    }];
    likes:[{
        usuario:string;
    }];
    savings:[{
        usuario:string;
    }];
    isShared:boolean;
}

