import { Module } from '@nestjs/common';
import { appController } from './app.controller';
import { UserService } from './app.service';



@Module({
  imports: [],
  controllers: [appController],
  providers: [UserService],
})
export class AppModule {}
