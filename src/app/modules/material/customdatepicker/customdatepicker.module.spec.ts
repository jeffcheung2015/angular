import { CustomdatepickerModule } from './customdatepicker.module';

describe('CustomdatepickerModule', () => {
  let customdatepickerModule: CustomdatepickerModule;

  beforeEach(() => {
    customdatepickerModule = new CustomdatepickerModule();
  });

  it('should create an instance', () => {
    expect(customdatepickerModule).toBeTruthy();
  });
});
