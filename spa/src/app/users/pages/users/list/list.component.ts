import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/models/users/user.model';
import { UsersService } from 'src/app/users/services/users/users.service';
//import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'roles', 'companies'];
  

  users$!: Observable<User[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers();
    this.users$ = this.usersService.users$;
  }

  removeUser(id:number){ 
    console.log(id);
    this.usersService.removeUser(id);
  }

}
