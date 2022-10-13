import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    {
      label: 'Home',
      path: '/',
      icon: 'home'
     },

    {
      label: 'Companies',
      path: 'companies',
     },
     {
      label: 'Users',
      path: 'users',
     },
  ];

  title = 'spa';
}
