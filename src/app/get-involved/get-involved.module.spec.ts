import { GetInvolvedModule } from './get-involved.module';

describe('GetInvolvedModule', () => {
  let getInvolvedModule: GetInvolvedModule;

  beforeEach(() => {
    getInvolvedModule = new GetInvolvedModule();
  });

  it('should create an instance', () => {
    expect(getInvolvedModule).toBeTruthy();
  });
});
