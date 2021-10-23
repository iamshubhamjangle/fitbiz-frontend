import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(values: any[], filterDate: string): any {
    if (!values) { return []; }
    if (!filterDate) { return values }

    return values.filter((item) => (moment(item.date).format('YYYY-MM-DD')) === filterDate);
  }

}
