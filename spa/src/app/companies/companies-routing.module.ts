import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/companies/main/main.component';
import { ListComponent } from './pages/companies/list/list.component';
import { NewCompanyComponent } from './pages/companies/new-company/new-company.component';

const routes: Routes = [{
  path: 'companies',
  component: MainComponent,
  children: [
    { path: '', component: ListComponent },  
    { path: 'new', component: NewCompanyComponent },  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
