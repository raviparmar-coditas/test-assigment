import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getSecured(url): Observable<any> {
    return this.httpClient.get(url);
  }

  postSecured(url, payload): Observable<any> {
    return this.httpClient.post(url, payload);
  }

  putSecured(url, payload): Observable<any> {
    return this.httpClient.put(url, payload);
  }

  patchSecured(url, payload) {
    return this.httpClient.patch(url, payload);
  }

  postLogin(url, payload): Observable<any> {
    return this.httpClient.post(url, payload);
  }
}
