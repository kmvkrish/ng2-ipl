import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTeams',
  pure: false
})
export class FilterTeamsPipe implements PipeTransform {

  transform(value: any, args?: String): any[] {
    if(args){
      return value.filter(item => (item.team1.indexOf(args) != -1) || (item.team2.indexOf(args) != -1));
    }else{
      return value;
    }
  }

}
