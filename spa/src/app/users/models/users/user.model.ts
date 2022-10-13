import { Company } from "src/app/companies/models/companies/company.model";

export interface User {
    id?: number;
    username: string;
    roles: string[];
    companies: Company[];
}