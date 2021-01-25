const { compose } = require('../../dist');

test(
  'Takes any number of functions and returns a function which takes the initial value.', 
  () => {
    const h = n => n / 2;
    const g = n => n + 1;
    const f = n => n * 2;

    const result = compose(f, g, h)(20)
    
    expect(result).toBe(22)
  }
);