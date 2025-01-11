import { Module, DynamicModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersDynamicService } from './usersDynamic.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  static register() : DynamicModule{
    return  {
      module : UsersModule,
      providers : [UsersDynamicService],
      controllers : [UsersController]

    }
  }
}
