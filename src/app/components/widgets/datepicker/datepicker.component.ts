import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { DatePicker } from 'src/app/models/datePicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  model: DatePicker = {
    day: 1,
    month: 1,
    year: 2021
  }

  ngOnInit(): void {
    var today = new Date();
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear();

    this.model = {
      year: yyyy,
      month: mm,
      day: dd
    }
  }

  @Output()
  dateChangedEmitter: EventEmitter<string> = new EventEmitter<string>();

  onDateSelected() {
    let myDate = this.model.year + '-' + this.model.month + '-' + this.model.day;
    let myFormattedDate = moment(myDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    // console.log('Date being emitted = ' + myFormattedDate);
    this.dateChangedEmitter.emit(myFormattedDate);
  }

}
