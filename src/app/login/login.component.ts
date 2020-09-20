import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { employee } from '../Entities/employee';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus;
  errorStatusList:Map<number, String>;
  msg:string;
  setUser:Observable<any>;
  loginAction:Observable<any>;
  username:string;
  password:string;

  constructor(
    private authService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user') != null)
      this.router.navigate(['']);
    this.loginStatus=null;
    this.errorStatusList = new Map();
    this.errorStatusList.set(0, "Cant Connect to Server");
    this.errorStatusList.set(401, "Invalid Credentials");
    this.setUser = this.authService.setUser();
  }

  loginError() {
    if(this.loginStatus == null)
      return false;
    return true;
  }

  onSubmit() {
    this.authService.jwtAuthenticate(this.username, this.password).subscribe(
      (res) => {
        sessionStorage.setItem('token', res.token);
        this.setUser.subscribe(
          (res) => {
            sessionStorage.setItem('user', JSON.stringify(res));
            this.router.navigate(['']);
          }
        );
      },
      (error) => {
        console.log(error)
        this.loginStatus=this.errorStatusList.get(error.status);
      }
    );
    if(this.loginStatus != null) {
      this.username=''
      this.password=''
    }
  }
}
