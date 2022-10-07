import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: 'users',
  component: UsersComponent,
  children: [
    { path: '', component: ListComponent },  
    { path: 'new', component: NewComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
