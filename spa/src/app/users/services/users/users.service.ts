import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get('api/users')
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
