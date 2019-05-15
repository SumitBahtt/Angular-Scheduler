import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
 constructor() {}

 public name = "Sumit";
 a=10;
 b=20;
 public message:"";

}
