import { sausageSum } from './sausageSum';

test('should return the sum from the example', () => {
  const input = [33, 49, 1, 384];
  const result = sausageSum(input);

  expect(result).toEqual(467);
});

test('should return the sum of 1 + 1', () => {
  expect(sausageSum([1, 1])).toEqual(2);
});

test('should return a sum even with negatives', () => {
  expect(sausageSum([-10, -20])).toEqual(-30);
})
