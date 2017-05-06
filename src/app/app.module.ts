import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MatchService } from './shared/match-service.service';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { FilterTeamsPipe } from './filter-teams.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    MatchDetailsComponent,
    MatchSummaryComponent,
    FilterTeamsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: "matches",
        component: MatchListComponent
      },
      {
        path: "matches/season/:season/match/:match_id",
        component: MatchDetailsComponent
      },
      {
        path: "",
        redirectTo: "matches",
        pathMatch: "full"
      }

    ])
  ],
  providers: [
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
