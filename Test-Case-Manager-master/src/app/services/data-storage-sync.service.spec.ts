import { TestBed } from '@angular/core/testing';

import { DataStorageSyncService } from './data-storage-sync.service';

describe('DataStorageSyncService', () => {
  let service: DataStorageSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStorageSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
