import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MatchService {

  constructor(private http: Http) { }

  getMatches(): Observable<any>{
    return this.http.get("/api/matches").map(res => res.json());
  }

  getMatchesBySeason(season: Number): Observable<any>{
    return this.http.get("/api/matches/season/" + season).map(res => res.json());
  }

  getMatchDetails(season: Number, match_id: Number): Observable<any>{
    return this.http.get("/api/matches/season/" + season + "/match/" + match_id).map(res => res.json()[0]);
  }

  getMatchDeliveries(season: Number, match_id: Number):Observable<any>{
    return this.http.get("api/matches/season/" + season + "/match/" + match_id + "/deliveries").map(res => res.json());
  }

}
