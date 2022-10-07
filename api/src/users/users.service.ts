import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly user: Model<UserDocument>,
  ) {}


  async create(createUserDto: CreateUserDto) {
    const user = new this.user(createUserDto);
    console.log(user);

    return await user.save();
  }

  async findAll() {
    return await this.user.find();
  }

  async findOne(id: ObjectId) {
    return await this.user.findById(id);
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return this.user.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: ObjectId) {
    return this.user.findByIdAndUpdate(id);
  }
}
