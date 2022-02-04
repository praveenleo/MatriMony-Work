import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = './assets/profile.json';
  constructor(private http: HttpClient) {
   }

  public getListInfo(): Observable<any> {
    return this.http.get(this.url);
  }
}
