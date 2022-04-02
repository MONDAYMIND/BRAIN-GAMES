import _ from 'lodash';
import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const findDivisors = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const findTheGCD = () => {
  const maxRandomNumber = 200;

  const firstRandom = (generateRandomNumber(maxRandomNumber));
  const firstRandomDivisors = findDivisors(firstRandom);

  const secondRandom = (generateRandomNumber(maxRandomNumber));
  const secondRandomDivisors = findDivisors(secondRandom);

  const question = `${firstRandom} ${secondRandom}`;

  const intersectionOfDivisors = _.intersection(firstRandomDivisors, secondRandomDivisors);

  const rightAnswer = intersectionOfDivisors.at(-1);

  const questionAndRightAnswer = cons(question, String(rightAnswer));

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, findTheGCD);
