import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { User } from 'src/users/entities/users/user.entity';
import { UserDto } from 'src/users/dto/User.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}


    getUsers(){
        return this.userRepository.find();
    }
    
    getUserById(id: number){
        return this.userRepository.findBy({id: Equal(id)});
    }

    createUser(userDetails: UserDto){
        const newUser = this.userRepository.create({ ...userDetails }) ;

        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserParams: UserDto){
        return this.userRepository.update({ id }, { ...updateUserParams });
    }

}
