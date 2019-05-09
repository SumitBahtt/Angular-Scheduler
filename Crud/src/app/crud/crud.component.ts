import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { StudentService } from '../student.service';  
import { Student } from '../student';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit 
{
  dataSaved = false;  
  employeeForm: any;  
  Get: Observable<Student[]>;  
  constructor(private formbulider: FormBuilder, private studentService: StudentService) { }

  ngOnInit() 
  {  

  }
 onSelect()
 {

 }
}
