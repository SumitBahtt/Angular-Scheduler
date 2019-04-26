import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Student } from './student';  

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:54474/api/StudentDetails';  
  constructor(private http: HttpClient) { }  
  Get(): Observable<Student[]> {  
    return this.http.get<Student[]>(this.url + '/AllEmployeeDetails');  
  }  
  GetStudent(id: number): Observable<Student> {  
    return this.http.get<Student>(this.url + '/GetEmployeeDetailsById/' + id);  
  }  
  Post(student: Student): Observable<Student> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Student>(this.url + '/InsertEmployeeDetails/',  
    student, httpOptions);  
  }  
  Update(student: Student): Observable<Student> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Student>(this.url + '/UpdateEmployeeDetails/',  
    student, httpOptions);  
  }  
  Delete(id: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +id,  
 httpOptions);  
  }  
}
