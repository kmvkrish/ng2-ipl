/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchService } from './match-service.service';

describe('MatchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchService]
    });
  });

  it('should ...', inject([MatchServiceService], (service: MatchService) => {
    expect(service).toBeTruthy();
  }));
});
