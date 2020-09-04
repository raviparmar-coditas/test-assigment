import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  getHeader() {
    let json = sessionStorage.getItem('token');
    if (json) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${json}`
      });
      return { headers: headers }

    }
    return { headers: null }
  };

  getSecured(url): Observable<any> {
    return this.httpClient.get(url);
  }

  postSecured(url, payload): Observable<any> {
    return this.httpClient.post(url, payload, this.getHeader());
  }

  deleteSecured(url): Observable<any> {
    return this.httpClient.delete(url,this.getHeader());
  }

  patchSecured(url, payload) {
    return this.httpClient.patch(url, payload,this.getHeader());
  }

  postLogin(url, payload): Observable<any> {
    return this.httpClient.post(url, payload);
  }
}
