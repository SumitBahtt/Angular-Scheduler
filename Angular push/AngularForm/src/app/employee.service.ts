import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable, Observer } from 'rxjs';  
import { Employee } from './employee';
import { Options } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url='http://localhost:64828//api/Employees';
  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
  getAllEmployeeById(id:number): Observable<Employee>{
    return this.http.get<Employee>(this.url + '/' + id);
  }
  createEmployee(employee: Employee): Observable<Employee>{
    const Options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Employee>(this.url ,employee, Options);
  }
  updateEmployee(employee:Employee): Observable<Employee>{
    const Options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Employee>(this.url, employee, Options);
  }
  delete(id: number): Observable<number> {  
    const Options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' + id, Options);  
  }  
}
