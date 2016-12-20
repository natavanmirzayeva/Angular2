/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PaymentManagerService } from './payment-manager.service';

describe('Service: PaymentManager', () => {
  beforeEach(() => {
    addProviders([PaymentManagerService]);
  });

  it('should ...',
    inject([PaymentManagerService],
      (service: PaymentManagerService) => {
        expect(service).toBeTruthy();
      }));
});
