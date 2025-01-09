import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { albumController } from './album.controller';

@Module({
  imports: [],
  controllers: [userController,albumController],
  providers: [],
})
export class AppModule {}
