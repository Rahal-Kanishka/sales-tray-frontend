import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

const BACK_END = 'http://localhost:8082'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  public GETRequest(
    path: string,
    requestParam?: Map<any, any>
  ): Observable<any> {
    // building up HTTP request params
    let params = new HttpParams();

    if (requestParam) {
      for (const key of requestParam.keys()) {
        params = params.set(key, requestParam.get(key));
      }
    }

    return this.http.get<any>(BACK_END + path, {
      params,
      headers: this.getHeaders(),
    });
  }

  // building up headers
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    // add the X-Auth-Token if available
    let token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('X-AUTH-TOKEN', token);
    }
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }
}
