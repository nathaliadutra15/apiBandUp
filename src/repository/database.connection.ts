import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class DBConnection {
    constructor(){
        mongoose.connect(`mongodb+srv://${process.env.DB_USER as string}:${process.env.DB_PASSWORD as string}@band-up-db.lighdn7.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            console.log("BANCO CONECTADO!");
        }).catch((err) => console.log(err));
    }
}