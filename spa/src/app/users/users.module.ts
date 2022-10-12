import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './pages/users/list/list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { NewComponent } from './pages/users/new/new.component';
import { UsersComponent } from './pages/users/main/users.component';


@NgModule({
  declarations: [
    ListComponent,
    NewComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ]
})
export class UsersModule { }
