import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any,): any {
    let year: any = new Date().getFullYear(); 
    let yearOfCreation:any = new Date(value).getFullYear();
    let git = year - yearOfCreation;

    return git;

  }

}
