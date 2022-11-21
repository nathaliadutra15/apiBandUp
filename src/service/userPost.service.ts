import { Injectable } from "@nestjs/common";
import { IUser } from "src/model/user.model";
const userMongoDB = require('../model/user.mongo.model');

Injectable()
export class UserPostService {
    createPost(username:string ,post: IUser) {
        try {
            return userMongoDB.updateOne({ usuario: username }, {$push:{"posts":post}});
        } catch (error) {
            return error;
        }
    }
}