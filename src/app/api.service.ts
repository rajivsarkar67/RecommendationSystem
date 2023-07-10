import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getUserData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/users_chart`, payload);
  }

  getZoneData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/zones_chart`, payload);
  }

  getUserZoneData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/zone_user_chart`, payload);
  }

  getVideonameData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/video_chart`, payload);
  }

  getInstructorData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/instructors_chart`, payload);
  }

  getFociData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/foci`, payload);
  }

  getCategoryData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/category`, payload);
  }

  getEquipmentData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/equipment`, payload);
  }

  getOverallData(payload): Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/trending_videos`, payload);
  }
  
}
