import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/users/users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users/user.entity';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UsersService],
  controllers: [UsersController]
})
export class UserModule {}
