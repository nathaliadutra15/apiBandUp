import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { DBConnection } from './repository/database.connection';
import { UserService } from './service/user.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  })],
  controllers: [UserController],
  providers: [UserService,
    DBConnection
  ],
})
export class AppModule {}
