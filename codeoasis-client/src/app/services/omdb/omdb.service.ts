import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  key: any;

  constructor(private http: HttpClient, private router: Router) {
    this.key = "2b17fbae";
  }
  getData(data) {
    return this.http.get(`http://localhost:3000/api/v1/omdb?t=` + data.s + '&y=' + data.y);
  }
}
