import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/companies/services/companies/companies.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit {

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
  }

  handleSubmit(event:any){
    this.companiesService.addCompany(event);
  }

}
