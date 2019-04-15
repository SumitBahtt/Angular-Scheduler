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
  UpdateButtonShow = false;
  employeeModel : any;

  constructor(private formbulider: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.formbulider.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Salary: ['', [Validators.required]],
    });
    this.loadAllEmployees();
  }
  loadAllEmployees() {
    this.allEmployees = this.employeeService.getAllEmployee();
  }
  onFormSubmit() {
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    this.CreateEmployee(employee);
    this.employeeForm.reset();
  }
  loadEmployeeToEdit(id: number) {
    this.UpdateButtonShow = true;
    this.employeeService.getAllEmployeeById(id).subscribe(employee => {
      this.massage = null;
      this.dataSaved = false;
      this.employeeIdUpdate = employee;
      this.employeeForm.controls['Name'].setValue(employee.Name);
      this.employeeForm.controls['Email'].setValue(employee.Email);
      this.employeeForm.controls['Address'].setValue(employee.Address);
      this.employeeForm.controls['Salary'].setValue(employee.Salary);
    });

  }
  CreateEmployee(employee: Employee) {
    if (this.employeeIdUpdate == null) {
      this.employeeService.createEmployee(employee).subscribe(
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
  updateEmployee() {
    this.employeeModel = {
      Id : this.employeeIdUpdate.Id,
      Name : this.employeeForm.controls['Name'].value,
      Email : this.employeeForm.controls['Email'].value,
      Address : this.employeeForm.controls['Address'].value,
      Salary : this.employeeForm.controls['Salary'].value,
    }
      this.employeeService.updateEmployee(this.employeeModel).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllEmployees();
        this.employeeIdUpdate = null;
        this.employeeForm.reset();
        this.UpdateButtonShow = false;
      }); 
  }

  delete(id: number) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.employeeService.delete(id).subscribe(() => {
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
