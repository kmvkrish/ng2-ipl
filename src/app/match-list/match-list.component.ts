import { Component, OnInit } from '@angular/core';

import { MatchService } from '../shared/match-service.service';

@Component({
  selector: 'match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches = [];
  teamName: String;
  seasons: Number[];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatches().subscribe(matches => {
      this.matches = matches;
      this.getSeasons();
    });
  }

  getSeasons(){
    this.seasons = [];
    this.matches.forEach((match, index) => {
      if(this.seasons.length < 1){
        this.seasons.push(match.season);
      }else if(this.seasons.indexOf(match.season) == -1){
        this.seasons.push(match.season);
      }
    });
  }

}
