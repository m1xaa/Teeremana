import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProgressRequest } from '../models/progress/get-progress-request';
import { TrainingStatistics } from '../models/as-is/training-statistics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  baseUrl: string = 'http://localhost:5117/api/v1/people'

  constructor(private http: HttpClient) { }

  checkProgress(personId: string, request: GetProgressRequest): Observable<TrainingStatistics[]> {
    return this.http.post<TrainingStatistics[]>(`${this.baseUrl}/${personId}/trainings/statistics`, request);
  }
}
