export const hotdogs = (input: any[]) => {
  // Change strings to numbers
  const numbers = input.map((item) => parseInt(item));

  // Add them all together
  return numbers.reduce((a, b) => a + b);
};
