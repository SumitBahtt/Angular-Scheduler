import { Component } from '@angular/core';
import { EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentDate: Date = new Date(2018, 4, 9);
  public newViewMode: View = 'Month';
  public eventData: EventSettingsModel = {
    dataSource: [{}]
  }
}
