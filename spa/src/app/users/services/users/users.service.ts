import { Injectable } from '@angular/core';
import { Subject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$ = new Subject<User[]>();

  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get<User[]>('api/users')
    .subscribe(users => { 
      this.users$.next(users);
    });
   }

   addUser(data:any){
    this.http.post('api/users', data).subscribe(()=>this.getUsers());
   }

   removeUser(id:any){
    this.http.delete('api/users/' + id).subscribe(()=>this.getUsers());
   }

}
