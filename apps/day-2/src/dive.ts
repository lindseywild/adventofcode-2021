const addAllValues = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};

const getFilteredValues = (input: string[], value: string) => {
  return input.filter((item) => item.includes(value));
};

const getNumberOnly = (input: string[], value: string) => {
  return input.map((item) => parseInt(item.replace(value, '')));
};

export const forward = (input: string[]) => {
  const forwardValues = getFilteredValues(input, 'forward');
  const forwardValuesOnly = getNumberOnly(forwardValues, 'forward ');
  const forwardAmount = forwardValuesOnly.reduce(addAllValues);

  return forwardAmount;
};

export const depth = (input: string[]) => {
  const upValues = getFilteredValues(input, 'up');
  const downValues = getFilteredValues(input, 'down');

  const upValuesOnly = getNumberOnly(upValues, 'up ');
  const downValuesOnly = getNumberOnly(downValues, 'down ');

  const upAmount = upValuesOnly.reduce(addAllValues);
  const downAmount = downValuesOnly.reduce(addAllValues);

  return downAmount - upAmount;
};
