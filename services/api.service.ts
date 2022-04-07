import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //user json
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //post json
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
