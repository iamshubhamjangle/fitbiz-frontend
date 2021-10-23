import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exerciseCategory'
})
export class ExerciseCategoryPipe implements PipeTransform {

  transform(values: any[], filterCategory: string): any {
    if (!values) { return []; }
    if (!filterCategory || filterCategory === 'All') { return values }

    return values.filter((item) => item.category === filterCategory);
  }

}
