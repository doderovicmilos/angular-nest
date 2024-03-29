import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { UserDto } from 'src/users/dto/User.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param() id){
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() createUserDto: UserDto){
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UserDto
    ){
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id: number
    ){
        return this.usersService.deleteUser(id);
    }

}
