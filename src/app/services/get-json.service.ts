import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class GetJsonService {
  private jsonURL ='http://localhost:3000/users ';
  
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.jsonURL);
  }
  
}