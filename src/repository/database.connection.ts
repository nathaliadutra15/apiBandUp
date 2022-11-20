import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class DBConnection {
    constructor(){
        mongoose.connect(`mongodb+srv://${process.env.DB_USER as string}:${process.env.DB_PASSWORD as string}@band-up-db.lighdn7.mongodb.net/${process.env.DB_NAME as string}`)
        .then(() => {
            console.log("BANCO CONECTADO: bandup-users");
        }).catch((err) => console.log(err));
    }
}