import { Body, Controller, Get, Param, Patch, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { IUser } from "src/model/user.model";
import { UserService } from "src/service/user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    async setUser(@Body() user: IUser, @Res() res: Response) {
        const userFoundByUsername = await this.userService.getUserByUsername(user.usuario);
        const userFoundByEmail = await this.userService.getUserByEmail(user.email);

        //Check if it already has username or email
        if (Object.keys(user).length == 0) {
            return res.status(422).send({ message: "Preencha todos os campos." });
        } else if (userFoundByUsername.length != 0) {
            return res.status(422).send({ message: "Nome de usuário já existente." });
        } else if (userFoundByEmail.length != 0) {
            return res.status(422).send({ message: "Email já cadastrado." });
        }
        else {
            this.userService.setUser(user);
            return res.status(201).send({ message: "Usuário criado com sucesso." })
        }
    }

    @Get('/list')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/:username')
    async getUser(@Param() username, @Res() res: Response) {
        const usernameFound = await this.userService.getUserByUsername(username.username);
        if (usernameFound == null) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
            return res.status(201).send(usernameFound);
        }
    }
}