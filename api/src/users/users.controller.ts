import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    console.log(await this.usersService.findAll());
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.usersService.remove(id);
  }
}