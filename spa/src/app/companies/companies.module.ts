import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CompaniesRoutingModule } from './companies-routing.module';
import { MainComponent } from './pages/companies/main/main.component';
import { ListComponent } from './pages/companies/list/list.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { NewCompanyComponent } from './pages/companies/new-company/new-company.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    NewCompanyComponent,
    CompanyEditComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule
  ]
})
export class CompaniesModule { }//
