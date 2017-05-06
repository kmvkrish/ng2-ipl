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
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatches().subscribe(matches => this.matches = matches);
  }

}
