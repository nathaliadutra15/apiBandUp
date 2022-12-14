import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { DBConnection } from './repository/database.connection';
import { UserService } from './service/user.service';
import { ConfigModule } from '@nestjs/config';
import { UserPostController } from './controller/userPost.controller';
import { UserPostService } from './service/userPost.service';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  })],
  controllers: [UserController, UserPostController],
  providers: [UserService,
    DBConnection,
    UserPostService
  ],
})
export class AppModule {}
