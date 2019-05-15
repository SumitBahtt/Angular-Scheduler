import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent  {
  public currentDate: Date = new Date(2019, 4, 9);
  public newViewMode: View = 'Month';
  public eventData: EventSettingsModel = {
    dataSource: [{}]
  }

}
