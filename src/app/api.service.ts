import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://fod-poc.forgeahead.io/api';

  constructor(private http: HttpClient) {}

  getUserData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/users_chart`, payload);
  }

  getZoneData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/zones_chart`, payload);
  }

  getUserZoneData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/zone_user_chart`, payload);
  }

  getVideonameData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/video_chart`, payload);
  }

  getInstructorData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/instructors_chart`, payload);
  }

  getFociData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/foci`, payload);
  }

  getCategoryData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/category`, payload);
  }

  getCountryData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/country`, payload);
  }

  getStateData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/state`, payload);
  }

  getEquipmentData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/equipment`, payload);
  }

  getOverallData(payload): Observable<any> {
    return this.http.post(`${this.baseUrl}/trending_videos`, payload);
  }
  
}
