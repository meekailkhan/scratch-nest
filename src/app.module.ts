import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { albumController } from './album.controller';
import { UserService } from './user.service';



@Module({
  imports: [],
  controllers: [userController,albumController],
  providers: [UserService],
})
export class AppModule {}
