import { Body, Controller, Param, Patch, Post, Res } from "@nestjs/common";
import { IPost } from "src/model/post.model";
import { IUser } from "src/model/user.model";
import { UserPostService } from "src/service/userPost.service";

@Controller('post')
export class UserPost {
    constructor(private userPostService: UserPostService ) { }

    @Patch('create/:username')
    async createPost(@Param() username, @Body() post: IUser) {
        return await this.userPostService.createPost(username.username,post);
    }
}