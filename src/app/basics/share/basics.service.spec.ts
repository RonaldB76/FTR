/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasicsService } from './basics.service';

describe('Service: Basics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicsService]
    });
  });

  it('should ...', inject([BasicsService], (service: BasicsService) => {
    expect(service).toBeTruthy();
  }));
});
