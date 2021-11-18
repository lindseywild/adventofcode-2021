/**
 * We’re going Kiwi holiday themed here.
 * 
 * You’ll be knackered after all that hard yakka, so give us a couple of snags off the barbie!
 * Each of your mates is good for a certain number of hotdogs, which can be found in you input.
 * Write a function to calculate the total number of sausages you need to cook.
 * 
 * For example, suppose your input contained the following:
 * 33
 * 49
 * 1
 * 384
 * The expected output would be 467.
 */

export const sausageSum = (input: number[]) => {
  return input.reduce((acc, num) => acc + num, 0);
};
