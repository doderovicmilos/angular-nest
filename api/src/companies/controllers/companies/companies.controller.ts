import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyDto } from 'src/companies/dto/Comapny.dto';
import { CompaniesService } from 'src/companies/services/companies/companies.service';

@Controller('companies')
export class CompaniesController {
    constructor(private companiesService: CompaniesService){ }

    @Get()
    findAll(){
        return this.companiesService.findAll();
    }

    @Post()
    addCompany(@Body() companyDto: CompanyDto){
        return this.companiesService.createCompany(companyDto);
    }
}
