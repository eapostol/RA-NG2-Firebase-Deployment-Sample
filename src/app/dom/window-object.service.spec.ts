import { TestBed, inject } from '@angular/core/testing';

import { WindowObjectService } from './window-object.service';

describe('WindowObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowObjectService]
    });
  });

  it('should ...', inject([WindowObjectService], (service: WindowObjectService) => {
    expect(service).toBeTruthy();
  }));
});
