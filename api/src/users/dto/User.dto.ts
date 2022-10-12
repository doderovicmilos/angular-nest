import { Company } from "src/companies/entities/companies/company.entity";
import { UserRoles } from "../entities/users/userRoles";
import { CompanyDto } from "src/companies/dto/Comapny.dto";

export class UserDto {
    username: string;   
    roles: UserRoles[];
    companyIds: number[];
}