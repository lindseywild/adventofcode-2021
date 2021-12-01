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

export const threeWindowSums = (input: number[]) => {
  const sumValues = [];

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i + 1] === 'number' && typeof input[i + 2] === 'number') {
      const sum = input[i] + input[i + 1] + input[i + 2];

      sumValues.push(sum);
    }
  }

  return sumValues;
};
