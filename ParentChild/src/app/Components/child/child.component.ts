import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

@Input('childexample') public abc ;
@Input() public value1;
@Input() public value2;
@Output() public getResult= new EventEmitter();
@Output() public parentexample = new EventEmitter();
parent() {
  this.parentexample.emit('Hello Parent');
}

result() {
 
  this.getResult.emit('Final Result = ' + (this.value1 + this.value2));
}

}
