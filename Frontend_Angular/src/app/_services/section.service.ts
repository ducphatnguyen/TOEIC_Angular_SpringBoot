import { Injectable } from '@angular/core';
// HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:9004/api/section';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  constructor(private http: HttpClient) { }

  getAllSections(): Observable<any> {
    return this.http.get(API_URL);
  }

  getAllEnableSections(): Observable<any> {
    return this.http.get(API_URL + '/enable');
  }
  getAllEnableSectionsByType(type: any): Observable<any> {
    return this.http.get(`${API_URL}/enable/type/${type}`);
  }

  getSectionById(sectionId: any): Observable<any> {
    return this.http.get(`${API_URL}/${sectionId}`);
  }

  createSection(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  updateSection(sectionId: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${sectionId}`, data);
  }

  deleteSection(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

}