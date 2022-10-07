import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users$!: Observable<any>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers();
    this.users$ = this.usersService.users$;
  }

  removeUser(id:string){ 
    console.log(id);
    this.usersService.removeUser(id);
  }

}
