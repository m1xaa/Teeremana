import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/auth/login-request';
import { Observable } from 'rxjs';
import { User } from '../models/as-is/user';
import { RegistrationRequest } from '../models/auth/registration-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:5117/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, loginRequest);
  }

  register(registrationRequst: RegistrationRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, registrationRequst);
  }
}
