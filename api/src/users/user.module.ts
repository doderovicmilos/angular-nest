import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/users/users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users/user.entity';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { Company } from 'src/companies/entities/companies/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Company])],
  providers: [UserResolver, UsersService],
  controllers: [UsersController]
})
export class UserModule {}
