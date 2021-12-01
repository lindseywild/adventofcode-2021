export const sonarSweep = (input: number[]) => {
  let largerValues = 0;

  for (let i = 0; i < input.length; i++) {
    const previousValue = input[i - 1];
    const currentValue = input[i];

    if (currentValue > previousValue) {
      largerValues++;
    }
  }

  return largerValues;
};
