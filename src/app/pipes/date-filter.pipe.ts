import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(values: any[], filterDate: string): any {
    if (!values) { console.log('returning empty!'); return []; }
    if (!filterDate) { console.log('returning same values no filter!'); return values }

    return values.filter((item) => (moment(item.date).format('YYYY-MM-DD')) === filterDate);
  }

}
