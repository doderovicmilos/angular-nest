import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository, Any } from 'typeorm';
import { User } from 'src/users/entities/users/user.entity';
import { UserDto } from 'src/users/dto/User.dto';
import { Company } from 'src/companies/entities/companies/company.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>, @InjectRepository(Company) private companyRepository: Repository<Company>){}


    getUsers(){
        return this.userRepository.find({relations: ['companies']});
    }
    
    getUserById(id: number){
        return this.userRepository.findBy({id: Equal(id)});
    }

    async createUser(userDto: UserDto){
        const newUser = this.userRepository.create({ ...userDto }) ;
        const companies = [];

        for (const id of userDto.companyIds){
            const company = await this.companyRepository.findOneBy({ id });
            if (company) companies.push(company);
        }
        newUser.companies = companies;

        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserParams: UserDto){
        return this.userRepository.update({ id }, { ...updateUserParams });
    }

    deleteUser(id: number){
        return this.userRepository.delete(id);
    }

}
