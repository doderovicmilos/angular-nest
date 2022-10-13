import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesService } from 'src/app/companies/services/companies/companies.service';
import { Company } from '../../../models/companies/company.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  companies$!: Observable<Company[]>;

  displayedColumns= ['name', 'address'];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.getCompanies();
    this.companies$ = this.companiesService.companies$;
  }
}
