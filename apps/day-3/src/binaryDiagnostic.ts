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
  const epsilonRate = getGammaRate(length, input1, input2);

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

  const firstGammaRate = getGammaRate(charLength, zeros, ones);
  const filterFirstGammaRate = input.filter(
    (item) => item[0] === firstGammaRate[0]
  );

  const secondGammaRateVals = getInitialValues(filterFirstGammaRate);
  const { zeros: secondZeros, ones: secondOnes } = secondGammaRateVals;
  const secondGammaRate = getGammaRate(charLength, secondZeros, secondOnes);
  const filterSecondGammaRate = filterFirstGammaRate.filter(
    (item) => item[1] === secondGammaRate[1]
  );

  const thirdGammaRateVals = getInitialValues(filterSecondGammaRate);
  const { zeros: thirdZeros, ones: thirdOnes } = thirdGammaRateVals;
  const thirdGammaRate = getGammaRate(charLength, thirdZeros, thirdOnes);
  const filterThirdGammaRate = filterSecondGammaRate.filter(
    (item) => item[2] === thirdGammaRate[2]
  );

  const forthGammaRateVals = getInitialValues(filterThirdGammaRate);
  const { zeros: forthZeros, ones: forthOnes } = forthGammaRateVals;
  const forthGammaRate = getGammaRate(charLength, forthZeros, forthOnes);
  const filterForthGammaRate = filterThirdGammaRate.filter(
    (item) => item[3] === forthGammaRate[3]
  );

  const fifthGammaRateVals = getInitialValues(filterForthGammaRate);
  const { zeros: fifthZeros, ones: fifthOnes } = fifthGammaRateVals;
  const fifthGammaRate = getGammaRate(charLength, fifthZeros, fifthOnes);
  const filterFifthGammaRate = filterForthGammaRate.filter(
    (item) => item[4] === fifthGammaRate[4]
  );
  // or if items are equal, should be 1

  console.log(filterFifthGammaRate);

  // const zeros = Array(charLength).fill(0);
  // const ones = Array(charLength).fill(0);

  // for (const i of input) {
  //   const bits = [...i];
  //   bits.forEach((bit, index) => {
  //     if (bit === '0') {
  //       zeros[index]++;
  //     } else {
  //       ones[index]++;
  //     }
  //   });
  // }

  // console.log(gammaRate);
  // if first number in each item is the same as the first number in the gamma rate, keep it
  // const keepValues = input.map((item, index) => {
  //   const matchingValues = item[0] === gammaRate[0];

  //   return matchingValues;
  // });
  // only keep numbers that start with the most common value

  // should only have seven numbers

  return filterFifthGammaRate[0];
};
