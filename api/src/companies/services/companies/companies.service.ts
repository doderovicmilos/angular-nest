import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Company } from 'src/companies/entities/companies/company.entity';
import { CompanyDto } from 'src/companies/dto/Comapny.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>){}

    findAll(){
        return this.companyRepository.find();
    }

    createCompany(companyDto: CompanyDto){
        const newCompany = this.companyRepository.create({...companyDto});
        
        return this.companyRepository.save(newCompany);
    }
}
