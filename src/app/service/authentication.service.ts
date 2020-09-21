import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { employee } from '../Entities/employee';
import { response } from '../Entities/response';
import { BaseURLService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  emp:employee;
  error;
  constructor(private http:HttpClient,
    private router:Router,
    private baseUrl:BaseURLService
    )
    {

    }
  jwtAuthenticate(username, password) {
    let user = {
      'username':username,
      'password':password
    }
    return this.http.post<response>(this.baseUrl.BASE_URL+"/authenticate", user)
  }

  setUser() {
    return this.http.get<employee>(this.baseUrl.BASE_URL+"/profile");
  }
  // authenticate(username, password) {
  //   if(username === 'developer' && password == 'password') {
  //     sessionStorage.setItem('LoggedIn', 'true');
  //     this.emp = new employee(username, 'Developer');
  //     sessionStorage.setItem('user', JSON.stringify(this.emp));
  //     this.router.navigate(['']);
  //     return null;
  //   }

  //   else if(username === 'manager' && password == 'password') {
  //     sessionStorage.setItem('LoggedIn', 'true');
  //     this.emp = new employee(username, 'Manager');
  //     sessionStorage.setItem('user', JSON.stringify(this.emp));
  //     this.router.navigate(['']);
  //     return null;
  //   }
  //   else if(username === 'employee-admin' && password == 'password') {
  //     sessionStorage.setItem('LoggedIn', 'true');
  //     this.emp = new employee(username, 'Employee-Admin');
  //     sessionStorage.setItem('user', JSON.stringify(this.emp));
  //     this.router.navigate(['']);
  //     return null;
  //   }
  //   else if(username === 'infra-admin' && password == 'password') {
  //     sessionStorage.setItem('LoggedIn', 'true');
  //     this.emp = new employee(username, 'Infra-Admin');
  //     sessionStorage.setItem('user', JSON.stringify(this.emp));
  //     this.router.navigate(['']);
  //     return null;
  //   }
  //   else {
  //     return 'error';
  //   }
  // }

  isLoggedIn() {
    if(sessionStorage.getItem('LoggedIn') == 'true')
      return true;
    return false;
  }
}
