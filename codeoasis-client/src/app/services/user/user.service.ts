import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  message = '';
  data: any;
  userinfo: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(loginData) {
    return this.http.post('http://localhost:3000/api/v1/users/login', loginData).subscribe(resp => {
      this.data = resp;
      this.userinfo = {
        email: this.data['email'],
        role: this.data['role']
      }
      localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
      this.router.navigate(['layout']);
    }, err => {
      console.log("ERROR");
    });
  }
}
