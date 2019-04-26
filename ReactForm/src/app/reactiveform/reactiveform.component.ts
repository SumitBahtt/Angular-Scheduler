import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted = false;
  private _listFilter : string;
  homeAddress:string;
  workAddress:string;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.reactiveForm=this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(8)]],
      address:this.fb.array([ this.addAddress()])
    });
  }

  addAddress(): FormGroup {
    return this.fb.group({
      state: ['', Validators.required],
      house : ['', Validators.required],
      contact: ['', Validators.required],
      country:['',Validators.required]
    });
  }

  get f() { 
    return this.reactiveForm.controls; 
  }

  onSubmit() {
      this.submitted = true;
      if (this.reactiveForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value))
  }

  // get listFilter():string {
  //   return this._listFilter;
  // }
  
  // set listFilter(value :string) {
  //   this._listFilter=value;
  //   console.log(this.listFilter);;
  // }

}
