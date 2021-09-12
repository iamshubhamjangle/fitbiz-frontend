import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exerciseCategory'
})
export class ExerciseCategoryPipe implements PipeTransform {

  transform(values: any[], filterCategory: string): any {
    if (!values) { console.log('returning empty!'); return []; }
    if (!filterCategory || filterCategory === 'All') { console.log('returning same values no filter!'); return values }

    return values.filter((item) => item.category === filterCategory);
  }

}
