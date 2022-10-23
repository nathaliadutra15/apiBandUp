import { Body, Controller, Get, Post } from "@nestjs/common";
import { IUser } from "src/model/user.model";
import { UserService } from "src/service/user.service";

@Controller()
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    teste(){
        return "working";
    }
    
    @Post('user/register')
    cadastrar(@Body() user: IUser) {
        return this.userService.setUser(user);
    }

}