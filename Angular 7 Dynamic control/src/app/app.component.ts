import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './DataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular7Demo';
  users: Object;
  constructor(private data: DataService) { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

}
