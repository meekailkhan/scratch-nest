import { Module } from '@nestjs/common';
import { appController } from './app.controller';
import { UserService } from './app.service';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';
import { PropertyModule } from './property/property.module';



@Module({
  imports: [RouterModule.register([{
    path : 'api',
    module : UsersModule
  }]),UsersModule.register(), CatsModule, PropertyModule],
  controllers: [appController],
  providers: [UserService],

})

export class AppModule {}
