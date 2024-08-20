import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../models/as-is/training';
import { Observable } from 'rxjs';
import { CreateTrainingRequest } from '../models/trainings/create-training-request';
import { UpdateTrainingRequest } from '../models/trainings/update-training-request';
import { TrainingStatistics } from '../models/as-is/training-statistics';
import { GetProgressRequest } from '../models/progress/get-progress-request';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseUrl: string = 'http://localhost:5117/api/v1/people'

  constructor(private http: HttpClient) { }

  getAllByUserId(id: string): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseUrl}/${id}/trainings`);
  }

  create(request: CreateTrainingRequest, personId: string): Observable<Training> {
    return this.http.post<Training>(`${this.baseUrl}/${personId}/trainings`, request);
  }

  delete(id: string, personId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${personId}/trainings/${id}`);
  }

  update(id: string, request: UpdateTrainingRequest, personId: string): Observable<Training> {
    return this.http.put<Training>(`${this.baseUrl}/${personId}/trainings/${id}`, request);
  }

  checkProgress(personId: string, request: GetProgressRequest): Observable<TrainingStatistics[]> {
    return this.http.post<TrainingStatistics[]>(`${this.baseUrl}/${personId}/trainings/statistics`, request);
  }
}
