import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { EmployeeService } from '../employee.service';  
import { Employee } from '../employee';  
  
@Component({  
  selector: 'app-employee',  
  templateUrl: './employee.component.html',  
  styleUrls: ['./employee.component.css']  
})  
export class EmployeeComponent implements OnInit {  
  dataSaved = false;  
  employeeForm: any;  
  allEmployees: Observable<Employee[]>;  
  employeeIdUpdate = null;  
  massage = null;  
  
  constructor(private formbulider: FormBuilder, private employeeService:EmployeeService) { }  
  
  ngOnInit() {  
    this.employeeForm = this.formbulider.group({  
      EmpName: ['', [Validators.required]],   
      EmailId: ['', [Validators.required]],  
      Address: ['', [Validators.required]],  
    });  
    this.loadAllEmployees();  
  }  
  loadAllEmployees() {  
    this.allEmployees = this.employeeService.Get();  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const employee = this.employeeForm.value;  
    this.Post(employee);  
    this.employeeForm.reset();  
  }  
  loadEmployeeToEdit(id: number) {  
    this.employeeService.GetEmployee(id).subscribe(employee=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.employeeIdUpdate = employee.EmpId;  
      this.employeeForm.controls['EmpName'].setValue(employee.EmpName);   
      this.employeeForm.controls['EmailId'].setValue(employee.EmailId);  
      this.employeeForm.controls['Address'].setValue(employee.Address);   
    });  
  
  }  
  Post(employee: Employee,) {  
    if (this.employeeIdUpdate == null) {  
      this.employeeService.Post(employee).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllEmployees();  
          this.employeeIdUpdate = null;  
          this.employeeForm.reset();  
        }  
      );  
    }
  }
    Update(employee:Employee, id:number) {
      if (this.employeeIdUpdate != null) {
      employee.EmpId = this.employeeIdUpdate;  
      this.employeeService.Update(employee, id).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllEmployees();  
        this.employeeIdUpdate = null;  
        this.employeeForm.reset();  
      });  
    }   
  }
  deleteEmployee(id: number) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.employeeService.Delete(id).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllEmployees();  
      this.employeeIdUpdate = null;  
      this.employeeForm.reset();  
  
    });  
  }  
}  
  resetForm() {  
    this.employeeForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  
}  
