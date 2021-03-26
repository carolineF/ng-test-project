import { TestBed } from '@angular/core/testing';

import { HelloworldFactoryService } from './helloworld-factory.service';

describe('HelloworldFactoryService', () => {
  let service: HelloworldFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloworldFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
