import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../src/randomNumberGenerator.js';
import findDivisors from '../src/findDivisors.js';

export const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const findTheGCD = () => {
  const maxRandomNumber = 200;

  const firstRandom = (generateRandomNumber(maxRandomNumber));
  const firstRandomDivisors = findDivisors(firstRandom);

  const secondRandom = (generateRandomNumber(maxRandomNumber));
  const secondRandomDivisors = findDivisors(secondRandom);

  const question = `${firstRandom} ${secondRandom}`;

  const intersectionOfDivisors = _.intersection(firstRandomDivisors, secondRandomDivisors);

  const rightAnswer = intersectionOfDivisors.at(-1);

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default findTheGCD;
