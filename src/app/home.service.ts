import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = "http://localhost:8080/user/login";
  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<Login[]> {
    return this.httpClient.get<Login[]>(this.baseUrl);
  }
}
