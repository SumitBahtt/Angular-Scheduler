import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './employee';  
  

 @Injectable({  
  providedIn: 'root'  
})  
  
export class EmployeeService {  
  url = 'http://localhost:54474/Api/EmployeeDetails';  
  constructor(private http: HttpClient) { }  
  Get(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url );  
  }  
  GetEmployee(id: number): Observable<Employee> {  
    return this.http.get<Employee>(this.url + id);  
  }  
  Post(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url, employee, httpOptions);  
  }  
  Update(employee: Employee,id: number): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Employee>(this.url, employee, httpOptions);  
  }  
  Delete(id: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url +id, httpOptions);  
  }  
}  
