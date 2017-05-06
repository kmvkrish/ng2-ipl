import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSeasons',
  pure: false
})
export class FilterSeasonsPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if(args){
      return value.filter(item => (item.season == args) );
    }else{
      return value;
    }
  }

}
