import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/auth/login-request';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../models/auth/registration-request';
import { Person } from '../models/as-is/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:5117/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/login`, loginRequest);
  }

  register(registrationRequst: RegistrationRequest): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/register`, registrationRequst);
  }
}
