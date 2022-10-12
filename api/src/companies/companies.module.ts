import { Module } from '@nestjs/common';
import { CompaniesController } from './controllers/companies/companies.controller';
import { CompaniesService } from './services/companies/companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users/user.entity';
import { Company } from './entities/companies/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}
