import { FormatDurationPipe } from './duration.pipe';

describe('FormatDurationPipe', () => {
  let pipe: FormatDurationPipe;

  beforeEach(() => {
    pipe = new FormatDurationPipe();
  });

  it('should display 03:30 when duration is "3.5"', () => {
    expect(pipe.transform('3.5')).toEqual('03:30');
  });
  it('should display 03:24 when duration is "3.  4"', () => {
    expect(pipe.transform('3.  4')).toEqual('03:24');
  });
  it('should display 10:06 when duration is "10.1"', () => {
    expect(pipe.transform('10.1')).toEqual('10:06');
  });
  it('should display 10:06 when duration is 10.1', () => {
    expect(pipe.transform(10.1)).toEqual('10:06');
  });
});
