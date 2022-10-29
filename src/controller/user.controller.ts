import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from "@nestjs/common";
import console from "console";
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
    async getAllUsers(@Res() res: Response) {
        const userList = await this.userService.getAllUsers();

        if (userList.length == 0) {
            return res.status(422).send({ message: "Não foi encontrado usuários cadastrados." });
        } else {
            return res.status(200).send(userList);
        }
    }

    @Get('/:username')
    async getUser(@Param() username, @Res() res: Response) {
        const usernameFound = await this.userService.getUserByUsername(username.username);
        if (usernameFound.length == 0) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
            return res.status(200).send(usernameFound);
        }
    }

    @Patch('/:username')
    async updateUser(@Param() username, @Body() user: IUser, @Res() res: Response){
        const updatedUser = await this.userService.updateUser(username.username,user);

        if (updatedUser.modifiedCount == 0) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
            let currentDate = new Date();
            user.updatedAt = currentDate;
            return res.status(200).send({message: "Usuário atualizado com sucesso."});
        }
    }

    @Delete('/remove/:username')
    async deleteUser(@Param() username, @Res() res: Response){
        const deletedUser = await this.userService.deleteUser(username.username);
        
        if (deletedUser.deletedCount == 0) {
            return res.status(422).send({ message: "Usuário não encontrado para remover." });
        } else {
            return res.status(200).send({message: "Usuário deletado com sucesso."});
        }
    }
}