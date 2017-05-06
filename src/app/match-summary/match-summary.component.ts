import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.css']
})
export class MatchSummaryComponent implements OnInit {

  @Input() matchScoreboard: any;

  constructor() { }

  ngOnInit() {
  }

}
