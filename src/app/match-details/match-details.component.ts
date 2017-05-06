import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Route } from '@angular/router';

import { MatchService } from '../shared/match-service.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  match: any;
  matchScoreboard: any;
  constructor(private route: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.matchService.getMatchDetails(params['season'], params['match_id']))
    .subscribe(match => this.match = match);
  }

  getMatchSummary():void{
    this.route.params.switchMap((params: Params) => this.matchService.getMatchDeliveries(params['season'], params['match_id']))
    .subscribe(res => this.matchScoreboard = res);
  }

}
