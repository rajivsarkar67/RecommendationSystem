import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getOverallData(payload): Observable<any> {
    return this.http.post(`http://ubuntu@54.184.178.222:5000/trending_videos`, payload);
  }
}
