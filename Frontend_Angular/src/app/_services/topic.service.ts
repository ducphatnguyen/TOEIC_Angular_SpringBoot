import { Injectable } from '@angular/core';
// HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:9004/api/topic';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
    providedIn: 'root',
})
export class TopicService {
    constructor(private http: HttpClient) { }

    getAllTopics(): Observable<any> {
        return this.http.get(API_URL);
    }

    getAllEnableTopics(): Observable<any> {
        return this.http.get(API_URL + '/enable');
    }
    
    getTopicById(topicId: any): Observable<any> {
        return this.http.get(`${API_URL}/${topicId}`);
    }

    createTopic(data: any): Observable<any> {
        return this.http.post(API_URL, data);
    }

    updateTopic(topicId: any, data: any): Observable<any> {
        return this.http.put(`${API_URL}/${topicId}`, data);
    }

    deleteTopic(id: any): Observable<any> {
        return this.http.delete(`${API_URL}/${id}`);
    }

}