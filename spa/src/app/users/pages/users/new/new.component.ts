import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/services/users/users.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  handleSubmit(data:any) {
    this.usersService.addUser(data);
  }

}
