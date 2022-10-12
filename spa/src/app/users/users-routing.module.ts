import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/users/list/list.component';
import { NewComponent } from './pages/users/new/new.component';
import { UsersComponent } from './pages/users/main/users.component';

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
