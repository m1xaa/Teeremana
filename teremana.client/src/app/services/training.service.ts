import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../models/as-is/training';
import { Observable } from 'rxjs';
import { CreateTrainingRequest } from '../models/trainings/create-training-request';
import { UpdateTrainingRequest } from '../models/trainings/update-training-request';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseUrl: string = 'http://localhost:5117/api/v1/training'

  constructor(private http: HttpClient) { }

  getAllByUserId(id: string): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseUrl}/${id}`);
  }

  create(request: CreateTrainingRequest): Observable<Training> {
    return this.http.post<Training>(this.baseUrl, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  update(id: string, request: UpdateTrainingRequest): Observable<Training> {
    return this.http.put<Training>(`${this.baseUrl}/${id}`, request);
  }
}
