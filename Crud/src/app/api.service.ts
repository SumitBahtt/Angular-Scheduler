import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
//import { Student } from '../Shared/student.model';

@Injectable({
  providedIn: 'root'
})

export class APIService { 
  
  constructor(private http: Http) { }
  Get() {
    return this.http.get('http://localhost:54474/api/StudentDetails'); 
  }
  Post(model: any) {
    return this.http.post('http://localhost:54474/api/StudentDetails',model);
  }

  Update(id: any) {
    return this.http.put('http://localhost:54474/api/StudentDetails', id);
  }

  Delete(id: any) {
    return this.http.delete('http://localhost:54474/api/StudentDetails/' + id);
  }
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}  