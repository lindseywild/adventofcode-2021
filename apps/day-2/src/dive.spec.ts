import { forward, depth } from './dive';

const input = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
  'up 1',
];

test('should adjust forward total', () => {
  const result = forward(input);

  expect(result).toEqual(15);
});

test('should adjust depth total', () => {
  const result = depth(input);

  expect(result).toEqual(9);
});
