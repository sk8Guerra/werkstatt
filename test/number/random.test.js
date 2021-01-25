import { random } from '../../dist';

test('Returns a random number between 5 and 10 with 2 decimals.', () => {
  const rndm = random(5, 10,  2);
  expect(typeof rndm).toBe('string')
})

test('Returns a random number between 5 and 10 with 0 decimals.', () => {
  const rndm = random(5, 10);
  expect(typeof rndm).toBe('number')
})