import { Component } from '@angular/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { Auth } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [AUTH_PROVIDERS, Auth]
})
export class AppComponent {

  constructor(private auth: Auth){

  }
  
}
