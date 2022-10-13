import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../models/companies/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  companies$ = new Subject<Company[]>();

  constructor(private http: HttpClient) { }

  getCompanies(){
    this.http.get<Company[]>('api/companies')
    .subscribe(data => { 
      this.companies$.next(data);
    });
   }

   addCompany(data:Company){
    this.http.post('api/companies', data).subscribe(()=>this.getCompanies());
   }

}
