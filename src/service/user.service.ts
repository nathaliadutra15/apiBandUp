import { Injectable } from "@nestjs/common";
import { response } from "express";
import { IUser } from "src/model/user.model";
const postagemUser = require('../model/user.mongo.model');

@Injectable()
export class UserService {

     setUser(user: IUser) {
        try {
            console.log("Criado");
             postagemUser.create(user);
            response.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            response.status(500);
        }
    }
}