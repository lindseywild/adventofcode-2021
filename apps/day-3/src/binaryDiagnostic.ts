const getGammaRate = (length, input1, input2) => {
  let gammaRate = '';

  for (let i = 0; i < length; i++) {
    let bit = 0;
    if (input2[i] >= input1[i]) {
      bit = 1;
    }

    gammaRate += bit;
  }

  return gammaRate;
};

const getEpsilonRate = (length, input1, input2) => {
  let epsilonRate = '';

  for (let i = 0; i < length; i++) {
    let bit = 1;
    if (input2[i] <= input1[i]) {
      bit = 0;
    }

    epsilonRate += bit;
  }

  return epsilonRate;
};

const getInitialValues = (input: string[]) => {
  const charLength = input[0].length;

  const zeros = Array(charLength).fill(0);
  const ones = Array(charLength).fill(0);

  for (const i of input) {
    const bits = [...i];
    bits.forEach((bit, index) => {
      if (bit === '0') {
        zeros[index]++;
      } else {
        ones[index]++;
      }
    });
  }

  return { zeros, ones };
};

export const binaryDiagnostic = (input: string[]) => {
  const charLength = input[0].length;
  const initialVals = getInitialValues(input);
  const { zeros, ones } = initialVals;

  const gammaRate = getGammaRate(charLength, ones, zeros);
  const epsilonRate = getEpsilonRate(charLength, zeros, ones);

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

export const oxygenGenRating = (input: string[]) => {
  const charLength = input[0].length;

  const initialVals = getInitialValues(input);
  const { zeros, ones } = initialVals;
  const initialGammaRate = getGammaRate(charLength, zeros, ones);
  let prevGammaRateVals = input.filter(
    (item) => item[0] === initialGammaRate[0]
  );

  for (let i = 0; i < charLength; i++) {
    const newGammaRateVals = getInitialValues(prevGammaRateVals);
    const { zeros: newZeros, ones: newOnes } = newGammaRateVals;
    const newGammaRate = getGammaRate(charLength, newZeros, newOnes);

    const currentFilteredGammaRate = prevGammaRateVals.filter(
      (item) => item[i + 1] === newGammaRate[i + 1]
    );

    prevGammaRateVals = currentFilteredGammaRate;
    if (prevGammaRateVals.length === 1) {
      return parseInt(prevGammaRateVals[0], 2);
    }
  }
};

export const co2ScrubberRating = (input: string[]) => {
  const charLength = input[0].length;
  const initialVals = getInitialValues(input);
  const { zeros, ones } = initialVals;
  const initialEpsilonRate = getEpsilonRate(charLength, ones, zeros);
  let prevEpsilonRateVals = input.filter(
    (item) => item[0] === initialEpsilonRate[0]
  );

  for (let i = 0; i < charLength; i++) {
    const newEpsilonRateVals = getInitialValues(prevEpsilonRateVals);
    const { zeros: newZeros, ones: newOnes } = newEpsilonRateVals;
    const newEpsilonRate = getEpsilonRate(charLength, newOnes, newZeros);

    const currentFilteredEpsilonRate = prevEpsilonRateVals.filter(
      (item) => item[i + 1] === newEpsilonRate[i + 1]
    );

    prevEpsilonRateVals = currentFilteredEpsilonRate;
    if (prevEpsilonRateVals.length === 1) {
      return parseInt(prevEpsilonRateVals[0], 2);
    }
  }
};

export const lifeSupportRating = (input: string[]) => {
  return oxygenGenRating(input) * co2ScrubberRating(input);
};
