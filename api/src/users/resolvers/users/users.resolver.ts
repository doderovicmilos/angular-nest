import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/entities/users/user.entity';
import { UserDto } from 'src/users/dto/User.dto';

@Resolver('User')
export class UserResolver {
    constructor(private readonly usersService: UsersService) {}
  
    @Query(() => String)
    async hello() {
      return await 'world';
    }
  
    @Query(() => [User])
    async users() {
      return this.usersService.getUsers();
    }
  
    @Mutation(() => User)
    async createUser(@Args('input') input: UserDto) {
      return await this.usersService.createUser(input);
    }
}
