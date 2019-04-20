import { TheRefugePartnershipModule } from './the-refuge-partnership.module';

describe('TheRefugePartnershipModule', () => {
  let theRefugePartnershipModule: TheRefugePartnershipModule;

  beforeEach(() => {
    theRefugePartnershipModule = new TheRefugePartnershipModule();
  });

  it('should create an instance', () => {
    expect(theRefugePartnershipModule).toBeTruthy();
  });
});
